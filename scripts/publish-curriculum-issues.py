#!/usr/bin/env python3
"""Preview or idempotently publish the K–12 curriculum backlog with GitHub CLI."""
import argparse
import json
from pathlib import Path
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
BACKLOG = ROOT / 'docs/curriculum-expansion/backlog.json'
REPO = 'murderszn/open-tutor'
DOC_REF = 'curriculum/expansion-plan'
BASE = f'https://github.com/{REPO}/blob/{DOC_REF}'
SUBJECT_NAMES = {'math': 'Math', 'science': 'Science',
                 'language-arts': 'Language Arts', 'social-studies': 'Social Studies'}


def gh(*args):
    return subprocess.check_output(['gh', *args], text=True).strip()


def link(path):
    return f'[{path}]({BASE}/{path})'


def track_body(track, roadmap):
    units = '\n'.join(f'- [ ] {u["id"]} — {u["title"]}' for u in track['units'])
    reuse = '\n'.join(f'- {link(p)}' for p in track['resources'])
    existing = track['existing_markdown_files']
    science_note = (f'\nExisting `stem/` has {track["legacy_stem_markdown_files"]} Markdown files. '
                    'Review those for reusable science, preserve existing links, and keep coding/engineering '
                    'optional. New core science belongs in `science/`.\n') if track['subject'] == 'science' else ''
    return f'''## Objective

Build or improve an independent, anonymous full-year track in `{track['path']}`. Current target-folder inventory: **{existing} Markdown files** (2026-10-01 baseline; re-audit before authoring). Scope: eight four-week units plus four flexible diagnostic/review weeks. High-school course order is a proposed pathway, not a universal graduation requirement.
{science_note}
Roadmap: #{roadmap}. Read the {link('teachers/ai-assistants/curriculum-worker.md')} and {link('docs/curriculum-expansion/unit-requirements.md')}. Planning links use `{DOC_REF}` until the setup PR is merged; afterwards use the same paths on `main`.

## Draft Delivery Checklist

**One recurring run = one section below. A checked box means a validated draft exists in a linked PR, not educator approval or merged completion.** Keep this issue open until the entire track is merged and reviewed. Start with the audit, then work through units in prerequisite order. Do not check incomplete units.

- [ ] A00 — Audit existing content and deliver a source-backed scope-and-sequence, weekly pacing, grade/subject indexes, and keep/revise/gap map
{units}
- [ ] R00 — Deliver diagnostic, midyear/final review, cumulative assessment and keys; audit coherence, accessibility, sources, image accuracy, and all index/manifest entries

## Required for Every Unit

- A unit README with measurable goals, prerequisites, vocabulary, verified standards/source notes, and concrete 16–20-session pacing (adapt frequency/duration for age).
- Four to six fully written Markdown lessons. Each has explicit explanations, at least two worked/modeled examples, guided and independent exercises, an application, exit check, supports, and extensions. K–2 may use oral/manipulative/drawing tasks with adult instructions.
- A substantial project/investigation with steps, materials, deliverables, and rubric; a formative quiz and culminating assessment.
- Separate teacher guide and answer key with solutions/reasoning or acceptable open responses for every exercise/assessment, misconception notes, and reteaching guidance.
- A Resource Pack: internal references, 3–6 queries, 3–7 verified videos or labeled channel-search links, 4–7 reputable web references, check dates, and task-to-resource mappings. Free no-account alternatives support core objectives.
- At least one **actual generated raster teaching image**, inspected and embedded in an activity with alt text, caption, and a text-only alternative. Save the image and prompt/tool/date/factual-review record under the unit's `assets/`. Exact diagrams/maps/data charts should use reproducible tools as well. Historical reconstructions are labeled AI illustrations.
- Complete relative links, same-grade learner materials, truthful index/manifest updates, and validation evidence. Existing lessons may satisfy requirements after review and substantive improvement; do not duplicate them blindly.

If image generation is unavailable, leave the unit unchecked, preserve a partial PR, and record the missing capability with `curriculum-blocked`. A prompt-only image plan or SVG does not satisfy generated-image delivery.

## Reuse These Repository Resources

{reuse}

Also inspect {link('resources/README.md')}, {link('resources/semester-resource-library.md')}, same-grade existing material, and {link('teachers/ai-assistants/resource_finder.md')}. Check dates, units, reading level, and factual accuracy before reuse. Dataset-based tasks must name columns, units, and whether values are real, rounded, or fictional practice data.

## Alignment and Content Review

Start from [the subject framework]({track['alignment_source']}) and verify exact expectations/codes during A00. Respect grade-band standards and explicit prerequisites; preserve advanced topics as optional enrichment where needed. Keep public learner records out of the repo and religious study separate from core subjects. Use original/public-domain/licensed texts; use primary sources for historical inquiry and authoritative evidence for scientific claims. Provide supervised lab procedures and safe alternatives.

## Delivery Evidence and Final Acceptance

Use a scoped branch and one draft PR per track where practical. Each delivery comment records section, UTC date, PR/commit, files, verified sources, generated assets, checks, and next action. Run `python3 scripts/validate-library.py`, check teacher/docs links beyond its coverage, solve questions independently, preview Markdown/images, and browser-test any interactive with screenshot evidence. Preserve the existing manifest schema. Do not auto-merge, deploy, or use an auto-close keyword before full-track completion.

Close only after all checklist sections are delivered, all required artifacts are merged, and an educator/content review confirms the track is usable.'''


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--publish', action='store_true', help='Create missing labels/issues and save issue URLs')
    args = parser.parse_args()
    backlog = json.loads(BACKLOG.read_text())
    tracks = backlog['tracks']
    expected = {(g, s) for g in ['k'] + list(map(str, range(1, 13))) for s in SUBJECT_NAMES}
    actual = {(t['grade'], t['subject']) for t in tracks}
    if len(tracks) != 52 or actual != expected or any(len(t['units']) != 8 for t in tracks):
        raise SystemExit('Backlog must contain exactly 52 unique K–12 subject tracks and eight units per track.')
    for track in tracks:
        for resource in track['resources']:
            if not (ROOT / resource).is_file():
                raise SystemExit(f'Missing internal resource: {resource}')
    if not args.publish:
        print('Preview: 1 roadmap + 52 track issues (416 units) + 3 dependency-gated review issues.')
        print('Use --publish to create missing GitHub labels/issues and update backlog.json.')
        return

    existing = json.loads(gh('issue', 'list', '--repo', REPO, '--state', 'all', '--limit', '1000',
                             '--json', 'number,title,url'))
    by_title = {i['title']: i for i in existing}
    if len(by_title) != len(existing):
        raise SystemExit('Duplicate issue titles exist; reconcile them before publishing.')
    existing_labels = {l['name'] for l in json.loads(gh('label', 'list', '--repo', REPO, '--limit', '200', '--json', 'name'))}
    labels = {
        'curriculum': ('0E8A16', 'K–12 core curriculum expansion'),
        'curriculum-roadmap': ('5319E7', 'Umbrella index; not a worker section'),
        'curriculum-queue': ('1D76DB', 'Structured sections for the recurring curriculum worker'),
        'curriculum-review': ('FBCA04', 'Cross-track review with prerequisites'),
        'curriculum-in-progress': ('D93F0B', 'Worker claimed a section; inspect the timestamp comment'),
        'curriculum-blocked': ('B60205', 'Missing capability or external dependency; read latest comment'),
    }
    labels.update({f'grade-{g}': ('C5DEF5', f'Independent Grade {g.upper()} curriculum track')
                   for g in ['k'] + list(map(str, range(1, 13)))})
    labels.update({f'subject:{s}': ('D4C5F9', name) for s, name in SUBJECT_NAMES.items()})
    for name, (color, description) in labels.items():
        if name not in existing_labels:
            gh('label', 'create', name, '--repo', REPO, '--color', color, '--description', description)

    def save():
        BACKLOG.write_text(json.dumps(backlog, indent=2) + '\n')

    def ensure_issue(title, body, issue_labels):
        if title in by_title:
            return by_title[title]
        with tempfile.NamedTemporaryFile(mode='w', suffix='.md') as body_file:
            body_file.write(body)
            body_file.flush()
            label_args = [arg for label in issue_labels for arg in ('--label', label)]
            url = gh('issue', 'create', '--repo', REPO, '--title', title, '--body-file', body_file.name, *label_args)
        item = {'number': int(url.rsplit('/', 1)[-1]), 'title': title, 'url': url}
        by_title[title] = item
        print(f'Created #{item["number"]}: {title}', flush=True)
        return item

    roadmap = ensure_issue('[Curriculum] K–12 expansion roadmap: four subjects, 52 tracks, 416 units',
        'Build independent Kindergarten–Grade 12 math, science, language arts, and social studies tracks.\n\n'
        f'Worker prompt: {link("teachers/ai-assistants/curriculum-worker.md")}\n\n'
        f'Unit requirements: {link("docs/curriculum-expansion/unit-requirements.md")}\n\n'
        'This umbrella issue will be populated with the grade/subject issue table after publication. '
        'It is an index, not a selectable worker section. Each track issue holds an audit, eight units, '
        'and final review. Cadence: one section every three hours; scheduling must be activated separately. '
        'Checklists track delivered drafts; issues close only after merged content and final review.',
        ['curriculum', 'curriculum-roadmap'])
    backlog['roadmap_issue'] = roadmap
    save()
    for track in tracks:
        grade_name = 'Kindergarten' if track['grade'] == 'k' else f'Grade {track["grade"]}'
        title = f'[Curriculum] {grade_name} — {SUBJECT_NAMES[track["subject"]]} (8-unit full-year track)'
        issue = ensure_issue(title, track_body(track, roadmap['number']),
                             ['curriculum', 'curriculum-queue', f'grade-{track["grade"]}', f'subject:{track["subject"]}'])
        track['issue_number'], track['issue_url'] = issue['number'], issue['url']
        save()

    reviews = [
        ('progression', 'K–12 progression and standards crosswalk review',
         'Eligible only after A00 is delivered for all 52 track issues. Inspect the actual linked drafts, '
         'not checklist counts alone. Build an educator-facing progression map for all four subjects; '
         'identify omissions, unnecessary repetition, misplaced prerequisites, and band/course assumptions. '
         'Verify standards codes against official documents. Keep learner-facing links within each grade. '
         'Report actionable corrections by track and update their scope-and-sequence drafts; do not certify state alignment.'),
        ('resources', 'Resource reuse, source quality, and generated-image review',
         'Eligible only after U01 is delivered for all 52 track issues. Inspect references and image assets '
         'across actual unit drafts. Audit internal resource reuse, dated facts, text rights, free/no-account '
         'alternatives, video labels, source check dates, dataset units, and broken links. Review image accuracy, '
         'alt text, captions, generation records, activity use, and text alternatives. Improve shared guide gaps '
         'and the anonymous grade/subject resource shelf, update resources/README.md, and file specific defects '
         'against affected tracks. Never count a placeholder image as delivered.'),
        ('final', 'Final K–12 content, assessment, accessibility, and navigation review',
         'Eligible only after all ten sections of all 52 track issues are delivered and their content is '
         'merged. Review coverage, full-year pacing, factual accuracy, worked examples, every assessment/key pair, '
         'lab safety, public-content boundaries, generated assets, keyboard/text alternatives, and index/manifest '
         'coverage. Run validation and representative browser/render checks. Record per-track readiness and '
         'unresolved issues honestly. Complete review only after blockers are fixed; readiness remains educator-supervised.'),
    ]
    backlog['reviews'] = []
    for key, title, dependency in reviews:
        body = (f'Roadmap: #{roadmap["number"]}. Follow {link("teachers/ai-assistants/curriculum-worker.md")}.\n\n'
                f'## Eligibility and Work\n\n{dependency}\n\n'
                '- [ ] Deliver the evidence-backed review report and corrections in a scoped PR\n'
                '- [ ] Verify corrections are merged and record any remaining educator decisions\n\n'
                'One run delivers one review section. Post timestamp, inspected files/PRs, findings, fixes, '
                'and validation. Draft delivery is not approval; keep open until merged and reviewed.')
        issue = ensure_issue(f'[Curriculum review] {title}', body,
                             ['curriculum', 'curriculum-queue', 'curriculum-review'])
        backlog['reviews'].append({'key': key, 'issue_number': issue['number'], 'issue_url': issue['url'],
                                   'title': title, 'eligibility': dependency})
        save()

    rows = []
    for grade in ['k'] + list(map(str, range(1, 13))):
        items = [t for t in tracks if t['grade'] == grade]
        grade_name = 'Kindergarten' if grade == 'k' else f'Grade {grade}'
        rows.append('| ' + grade_name + ' | ' + ' | '.join(f'[#{t["issue_number"]}]({t["issue_url"]})' for t in items) + ' |')
    final_body = ('## K–12 Curriculum Expansion\n\n'
        '52 independent grade/subject tracks; 416 unit sections plus track audits and reviews. '
        'Each recurring run delivers one section. Checked boxes mean validated drafts, not merged or approved curriculum.\n\n'
        f'Worker prompt: {link("teachers/ai-assistants/curriculum-worker.md")}\n\n'
        f'Plan, resource map, and schedule configuration: {link("docs/curriculum-expansion/README.md")}\n\n'
        f'Unit requirements: {link("docs/curriculum-expansion/unit-requirements.md")}\n\n'
        '| Grade | Math | Science | Language arts | Social studies |\n'
        '|---|---|---|---|---|\n' + '\n'.join(rows) + '\n\n## Cross-Track Reviews\n\n' +
        '\n'.join(f'- [ ] [#{r["issue_number"]} — {r["title"]}]({r["issue_url"]})' for r in backlog['reviews']) +
        '\n\n## Schedule\n\nIntended: every three hours, one section per invocation. '
        '`RRULE:FREQ=HOURLY;INTERVAL=3`, America/Chicago. Scheduling is **not activated** by issue creation. '
        'No scheduler tool was available in the setup session. Activate the saved local-project task separately '
        'after merging the setup documents; verify a manual run first.\n\n'
        'Use one recurring worker, scoped branches/draft PRs, verified resources, actual generated teaching images, '
        'separate answer keys, and anonymous public examples. Existing grade 4/5/7/8 content needs audit and expansion; '
        'K/1/2/3/6 are placeholders; 9–12 are new proposed pathways. Core science must not require coding. '
        'Close this roadmap only after all tracks and dependency-gated reviews are merged and reviewed.')
    with tempfile.NamedTemporaryFile(mode='w', suffix='.md') as body_file:
        body_file.write(final_body)
        body_file.flush()
        gh('issue', 'edit', str(roadmap['number']), '--repo', REPO, '--body-file', body_file.name)
    print(f'Published roadmap {roadmap["url"]}, 52 tracks, and 3 review issues. Existing issues were reused.', flush=True)


if __name__ == '__main__':
    main()
