# Repository Guidelines

## Project Structure & Module Organization
- `assignments/` — assignment specs and assets (Markdown + HTML interactives).
- `students/<name>/grade-#/subject/...` — schedules, quizzes, and templates.
- `resources/` — reference guides and datasets (`.md`, `.csv`, `.json`).
- `teachers/ai-assistants/` — agent prompts and helper docs.
- `teachers/sites/` — simple dashboards and helper pages (HTML).
- `README.md` — high-level overview; keep links current when adding content.

## Build, Test, and Development Commands
- No build step; this is a Markdown/HTML content repo.
- Preview Markdown: use your editor's Markdown preview.
- Preview HTML: `python3 -m http.server 8000` and open `http://localhost:8000` (or `open path/to/index.html` on macOS).
- Fast search: `rg -n "keyword"` and list files with `rg --files`.

## Coding Style & Naming Conventions
- Markdown: `#` headings, short paragraphs, bulleted lists, descriptive link text.
- Filenames: lowercase, hyphen-separated; avoid spaces/emojis. Quizzes: `YYYY-MM-DD_quiz.md` or `week-##_quiz.md` (zero-padded).
- Links: prefer relative paths; update index files (`resources/README.md`, `assignments/README.md`, student `README.md`) when adding content.
- Interactives: place per-topic HTML alongside the assignment (e.g., `assignments/<area>/<topic>/resources/<mini-app>/index.html`).

## Testing Guidelines
- Render check: open edited Markdown/HTML and verify headings, lists, and links.
- Link sanity: search for relative links after moves/renames: `rg -n "]\((?!http|#).+\)"`.
- Content sweeps: `rg -n "TODO|TBD"` to ensure publish-ready text.

## Commit & Pull Request Guidelines
- Commit messages: imperative, concise, optional scope prefix.
  - Examples: `Resources: add world facts links`, `Assignments: add navbar challenge`, `README: clarify agent index`.
- PRs: clear description, list touched areas, link issues, screenshots for HTML changes, and note any updated index pages/cross-links.

## Curriculum Maintenance (Agents-assisted)
- When adding a new assignment:
  - Create a shared spec under `assignments/.../topic/README.md` (with rubric and deliverables).
  - Add per-student stubs under `students/<name>/grade-#/subject/assignments/`.
  - Insert schedule entries in `students/<name>/schedule.csv` for due week(s).
  - Update indexes: `assignments/README.md`, student subject `README.md`, root `README.md` if featured.
- Keep consolidated guides current (e.g., `resources/biology_fundamentals.md`). Prefer subsection anchors.

## Resource Packs (Format)
- Summary: one-sentence goal + age fit.
- Focused queries: 3–6 targeted search queries.
- YouTube: 3–7 curated items or open search links (Khan Academy, Crash Course Kids, SciShow Kids, Amoeba Sisters, National Geographic, PBS).
- Web References: 4–7 reputable sources (Wikipedia, Britannica, PBS, USGS/NASA/NOAA, .gov/.edu).
- Mapping: assignment tasks → 1–2 links each.

## Agent-Specific Notes & Safety
- When adding/updating an agent, also update `teachers/ai-assistants/agents.md` and include "Core References" pointing to student hubs and `resources/` guides.
- Privacy: do not include student PII; use first names only as established in existing paths.
- New agent: `teachers/ai-assistants/resource_finder.md` (generates Resource Packs for assignments). Use this when adding weekly tasks or preparing schedules.
