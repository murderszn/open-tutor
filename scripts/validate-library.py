#!/usr/bin/env python3
"""Validate public teaching-library links, grade boundaries, and metadata."""
from pathlib import Path
import csv
import html
import json
import re
import subprocess
import sys
import urllib.parse

ROOT = Path(__file__).resolve().parents[1]
errors = []


def report(path, message):
    errors.append(f'{path.relative_to(ROOT)}: {message}')


def repo_files(*folders):
    return [p for folder in folders for p in (ROOT / folder).rglob('*') if p.is_file()]


def skip_link_scan(path):
    rel = path.relative_to(ROOT).as_posix()
    # These files intentionally show reusable blanks or agent prompts, not live links.
    return (
        '/templates/' in f'/{rel}'
        or rel.startswith('teachers/ai-assistants/') and path.name != 'agents.md'
        or rel == 'students/student-template/README.md'
        or path.name.endswith('-prompt.md')
    )


def is_text_file(path):
    return path.suffix.lower() in ('.md', '.html', '.htm', '.css', '.json')


def is_public_student_path(item):
    parts = Path(item).parts
    return len(parts) > 1 and parts[0] == 'students' and parts[1] != 'student-template'


def strip_markdown_fences(text):
    return re.sub(r'(?ms)^\s*```[^\n]*\n.*?^\s*```\s*$', '', text)


def markdown_slug(heading):
    heading = re.sub(r'`([^`]*)`', r'\1', heading)
    heading = re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', heading)
    heading = re.sub(r'<[^>]+>', '', heading)
    heading = heading.lower().strip()
    heading = re.sub(r'[^\w\- ]', '', heading)
    return re.sub(r'\s+', '-', heading)


def anchors_for(path):
    try:
        text = path.read_text(encoding='utf-8')
    except (OSError, UnicodeDecodeError):
        return set()
    found = set(re.findall(r'''\b(?:id|name)\s*=\s*['"]([^'"]+)['"]''', text, re.I))
    if path.suffix.lower() == '.md':
        for heading in re.findall(r'(?m)^#{1,6}\s+(.+?)\s*#*\s*$', strip_markdown_fences(text)):
            found.add(markdown_slug(heading))
    return found


def grade_track(path):
    match = re.search(r'(?:^|/)curriculum/grade-([^/]+)(?:/|$)', path.as_posix())
    return match.group(1) if match else None


def validate_reference(source, raw, anchors_cache):
    ref = html.unescape(raw.strip().strip('<>'))
    if not ref or ref.startswith(('mailto:', 'data:', 'javascript:', 'tel:')):
        return
    # Prompt examples and blank workspace templates may contain path-shaped examples.
    if re.search(r'(?:<[^>]+>|\bgrade-N\b|\byour-student(?:-name)?\b|\[STUDENT_NAME\])', ref, re.I):
        return

    parsed = urllib.parse.urlsplit(ref)
    path_part = urllib.parse.unquote(parsed.path)
    fragment = urllib.parse.unquote(parsed.fragment)

    if parsed.netloc.lower() == 'github.com' and path_part.startswith('/murderszn/open-tutor/'):
        parts = path_part.strip('/').split('/')
        if len(parts) >= 5 and parts[2] in ('blob', 'tree') and parts[3] == 'main':
            repo_path = '/'.join(parts[4:])
            local_target = ROOT / repo_path
            target = local_target / 'README.md' if local_target.is_dir() and (local_target / 'README.md').exists() else local_target
            if not target.exists():
                report(source, f'missing same-repository GitHub link {ref}')
                return
            source_grade = grade_track(source)
            target_grade = grade_track(target)
            if source_grade and target_grade and source_grade != target_grade:
                report(source, f'cross-grade curriculum link to {target.relative_to(ROOT)}')
            return

    if parsed.scheme or parsed.netloc:
        return

    if path_part:
        target = (source.parent / path_part).resolve()
    else:
        target = source.resolve()
    try:
        target.relative_to(ROOT)
    except ValueError:
        report(source, f'local link escapes repository: {ref}')
        return
    if not target.exists():
        report(source, f'missing local link {ref}')
        return

    source_grade = grade_track(source)
    target_grade = grade_track(target)
    if source_grade and target_grade and source_grade != target_grade:
        report(source, f'cross-grade curriculum link to {target.relative_to(ROOT)}')

    if fragment and target.suffix.lower() in ('.html', '.htm', '.md'):
        if target not in anchors_cache:
            anchors_cache[target] = anchors_for(target)
        if fragment not in anchors_cache[target]:
            # Site hashes can be generated or routed by JavaScript; only literal
            # HTML anchors are asserted for local site pages.
            if not (source.as_posix().startswith((ROOT / 'site').as_posix()) and target.suffix.lower() == '.html'):
                return
            report(source, f'missing local anchor {ref}')


def validate_csv(path):
    try:
        with path.open(newline='', encoding='utf-8-sig') as stream:
            rows = list(csv.reader(stream, strict=True))
    except (OSError, UnicodeDecodeError, csv.Error) as exc:
        report(path, f'invalid CSV: {exc}')
        return
    if not rows:
        report(path, 'CSV is empty')
        return
    width = len(rows[0])
    if width == 0 or any(not value.strip() for value in rows[0]):
        report(path, 'CSV header contains an empty field')
    if len({value.strip().lower() for value in rows[0]}) != width:
        report(path, 'CSV header contains duplicate columns')
    for line_no, row in enumerate(rows[1:], start=2):
        if len(row) != width:
            report(path, f'row {line_no} has {len(row)} columns; expected {width}')
    if path.as_posix().endswith('students/student-template/schedule.csv'):
        expected = ['week', 'study area', 'task', 'status']
        if [cell.strip().lower() for cell in rows[0]] != expected:
            report(path, 'student template schedule must use Week, Study Area, Task, Status columns')


def validate_manifest():
    manifest_path = ROOT / 'curriculum/manifest.json'
    if not manifest_path.is_file():
        report(manifest_path, 'curriculum manifest is missing')
        return
    try:
        manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
    except (OSError, UnicodeDecodeError, json.JSONDecodeError) as exc:
        report(manifest_path, f'invalid curriculum manifest JSON: {exc}')
        return
    entries = manifest.get('files') if isinstance(manifest, dict) else None
    if not isinstance(entries, list):
        report(manifest_path, 'manifest must contain a files array')
        return
    listed = set()
    for entry in entries:
        item = entry.get('path') if isinstance(entry, dict) else None
        if not isinstance(item, str) or not item:
            report(manifest_path, f'invalid manifest file entry: {entry!r}')
            continue
        normalized = Path(item)
        if normalized.is_absolute() or '..' in normalized.parts:
            report(manifest_path, f'manifest path must stay inside curriculum: {item}')
            continue
        if item in listed:
            report(manifest_path, f'duplicate manifest path: {item}')
        listed.add(item)
        target = ROOT / 'curriculum' / normalized
        if not target.is_file():
            report(manifest_path, f'manifest path does not exist: {item}')
    actual = {
        p.relative_to(ROOT / 'curriculum').as_posix()
        for p in (ROOT / 'curriculum').rglob('*')
        if p.is_file() and p != manifest_path
    }
    for item in sorted(actual - listed):
        report(manifest_path, f'curriculum file is missing from manifest: {item}')
    for item in sorted(listed - actual):
        report(manifest_path, f'manifest lists a missing curriculum file: {item}')


def validate_student_paths():
    try:
        tracked = subprocess.run(
            ['git', 'ls-files', '-z'], cwd=ROOT, check=True,
            capture_output=True, text=True
        ).stdout.split('\0')
    except (OSError, subprocess.CalledProcessError) as exc:
        report(ROOT / 'students', f'cannot inspect tracked learner paths: {exc}')
        return
    for item in filter(None, tracked):
        parts = Path(item).parts
        if is_public_student_path(item):
            report(ROOT / item, 'tracked learner content is outside the anonymous student template')


def validate_ignore_rules():
    private_path = 'students/__private_validation__/README.md'
    template_path = 'students/student-template/README.md'
    for candidate, should_ignore in ((private_path, True), (template_path, False)):
        try:
            result = subprocess.run(
                ['git', 'check-ignore', '-q', '--no-index', candidate],
                cwd=ROOT, check=False
            )
        except OSError as exc:
            report(ROOT / '.gitignore', f'cannot inspect learner ignore rules: {exc}')
            return
        ignored = result.returncode == 0
        if ignored != should_ignore:
            expected = 'ignored' if should_ignore else 'allowed'
            report(ROOT / '.gitignore', f'{candidate} should be {expected}')


def validate_content():
    content_files = repo_files(
        'assignments', 'resources', 'curriculum', 'docs', 'site',
        'teachers/ai-assistants', 'teachers/sites'
    )
    content_files += [ROOT / 'README.md']
    anchors_cache = {}
    for path in content_files:
        if not is_text_file(path):
            continue
        suffix = path.suffix.lower()
        try:
            text = path.read_text(encoding='utf-8')
        except (OSError, UnicodeDecodeError):
            report(path, 'cannot read as UTF-8 text')
            continue
        if re.search(r'data:image|https?://(?:docs|drive)\.google\.com/(?:document|file|spreadsheets)/', text):
            report(path, 'embedded image or private document dependency needs review')
        if suffix == '.json':
            try:
                json.loads(text)
            except json.JSONDecodeError as exc:
                report(path, f'invalid JSON: {exc}')
            continue
        if suffix not in ('.md', '.html', '.htm', '.css') or skip_link_scan(path):
            continue
        link_text = strip_markdown_fences(text) if suffix == '.md' else text
        refs = re.findall(r'\[[^\]]*\]\(([^)]+)\)', link_text) if suffix == '.md' else []
        refs += re.findall(r'''(?:href|src)\s*=\s*['"]([^'"]+)['"]''', link_text, re.I)
        if suffix == '.css':
            refs += re.findall(r'''url\(\s*['"]?([^)'"\s]+)''', link_text, re.I)
        for ref in refs:
            validate_reference(path, ref, anchors_cache)

    for csv_path in repo_files('students/student-template', 'assignments', 'resources', 'curriculum'):
        if csv_path.suffix.lower() == '.csv':
            validate_csv(csv_path)

    validate_manifest()
    validate_student_paths()
    validate_ignore_rules()
    return content_files


def main():
    content_files = validate_content()
    if errors:
        print('\n'.join(errors))
        print(f'FAIL: {len(errors)} issues across {len(content_files)} public content files')
        return 1
    print(f'PASS: links, anchors, curriculum manifest, and CSV structure across {len(content_files)} public content files')
    return 0


if __name__ == '__main__':
    sys.exit(main())
