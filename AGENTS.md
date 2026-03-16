# Repository Guidelines

## Project Structure & Module Organization
- `assignments/` — assignment specs and assets (e.g., HTML exercises).
- `students/<name>/grade-#/subject/...` — schedules, quizzes, and templates.
- `resources/` — reference guides and datasets (`.md`, `.csv`, `.json`).
- `teachers/ai-assistants/` — agent prompts and helper docs.
- `README.md` — high-level overview; keep links current when adding content.

## Build, Test, and Development Commands
- No build step; this is a Markdown/HTML content repo.
- Preview Markdown: use your editor’s Markdown preview.
- Preview HTML: `open assignments/.../car-brands.html` (macOS) or `python3 -m http.server 8000` to serve locally.
- Fast search: `rg -n "keyword"` and list files with `rg --files`.

## Coding Style & Naming Conventions
- Markdown: `#` headings, short paragraphs, bulleted lists, descriptive link text.
- Filenames: lowercase, hyphen-separated; avoid spaces/emojis. Quizzes: `YYYY-MM-DD_quiz.md` or `week-##_quiz.md` (zero‑padded).
- Links: prefer relative paths; update index files (`resources/README.md`, `assignments/README.md`, student `README.md`) when adding content.

## Testing Guidelines
- Render check: open edited Markdown/HTML and verify headings, lists, and links.
- Link sanity: search for relative links after moves/renames: `rg -n "\]\((?!http|#).+\)"`.
- Content sweeps: `rg -n "TODO|TBD"` to ensure publish-ready text.

## Commit & Pull Request Guidelines
- Commit messages: imperative, concise, optional scope prefix.
  - Examples: `Resources: add world facts links`, `Assignments: add navbar challenge`, `README: clarify agent index`.
- PRs: clear description, list touched areas, link issues, screenshots for HTML changes, and note any updated index pages/cross-links.

## Agent-Specific Notes & Safety
- When adding/updating an agent, also update `teachers/ai-assistants/agents.md` and include “Core References” pointing to student hubs and `resources/` guides.
- Privacy: do not include student PII; use first names only as established in existing paths.
