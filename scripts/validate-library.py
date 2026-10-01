#!/usr/bin/env python3
"""Validate reusable teaching content without external network dependencies."""
from pathlib import Path
import json
import re
import sys
import urllib.parse

ROOT = Path(__file__).resolve().parents[1]
errors = []
files = []
for folder in ('assignments', 'resources', 'curriculum'):
    files += [p for p in (ROOT/folder).rglob('*') if p.is_file()]
for p in files:
    if p.suffix not in ('.md', '.html', '.js', '.css', '.svg', '.json', '.csv'):
        continue
    text = p.read_text()
    if re.search(r'data:image|https?://(?:docs|drive)\.google\.com/(?:document|file|spreadsheets)/', text):
        errors.append(f'{p.relative_to(ROOT)}: embedded image or private document dependency needs review')
    if p.suffix == '.json':
        try:
            json.loads(text)
        except ValueError:
            errors.append(f'{p.relative_to(ROOT)}: invalid JSON')
    if p.suffix not in ('.md', '.html'):
        continue
    # HTML and Markdown examples inside fenced code are teaching text, not dependencies.
    link_text = re.sub(r'(?ms)^```[^\n]*\n.*?^```\s*$', '', text) if p.suffix == '.md' else text
    refs = re.findall(r'\[[^\]]*\]\(([^)]+)\)', link_text)
    refs += re.findall(r'(?:href|src)\s*=\s*[\x27"]([^\x27"]+)[\x27"]', link_text)
    for ref in refs:
        ref = ref.strip().strip('<>')
        if ref.startswith(('http:', 'https:', 'mailto:', '#', 'data:', 'javascript:')):
            continue
        local = urllib.parse.unquote(ref.split('#', 1)[0].split('?', 1)[0])
        if local and not (p.parent/local).exists():
            errors.append(f'{p.relative_to(ROOT)}: missing local link {ref}')
if errors:
    print('\n'.join(errors))
    print(f'FAIL: {len(errors)} issues across {len(files)} teaching files')
    sys.exit(1)
print(f'PASS: local links and structured data across {len(files)} teaching files')
