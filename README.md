# 📚 Homeschool Learning Center

Welcome to the central hub for our homeschool learning materials, assignments, and projects!

This repository serves as a shared workspace for Caleb, Elijah, and parents to collaborate, share resources, and track progress.

➡️ Quick tour for co‑teachers:
– Open the Weekly Timeline dashboard: [teachers/sites/index.html](./teachers/sites/index.html)
– See the AI Teaching Team overview: [teachers/ai-assistants/agents.md](./teachers/ai-assistants/agents.md)

## 🚀 Getting Started

To fully participate in the Learning Center, please ensure the following steps are completed:

1. **GitHub Accounts**: Everyone (Caleb, Elijah, and Mom) needs a personal GitHub account. If you don't have one, sign up at https://github.com/signup
2. **Repository Access**: Once accounts are created, share the usernames so we can add you as collaborators.
3. **Discord Server**: Join [[JFD] Learning Center - johnson family dynasty](https://discord.gg/rrHxuCUR) for announcements and quick questions.
4. **Explore**: Open the dashboard at [teachers/sites/index.html](./teachers/sites/index.html) and the agent index at [teachers/ai-assistants/agents.md](./teachers/ai-assistants/agents.md) for a guided tour.

## 📂 Repository Structure

Navigate the repository using the following folders:

- [`resources/`](./resources/) — reference guides and datasets (Markdown, CSV, JSON).
- [`assignments/`](./assignments/) — assignment specs and assets (HTML/MD exercises and templates).
- [`students/caleb/`](./students/caleb/), [`students/elijah/`](./students/elijah/), [`students/glory/`](./students/glory/) — personal workspaces, schedules, quizzes, and assignments.
- [`teachers/ai-assistants/`](./teachers/ai-assistants/) — prompts for the AI Teaching Team (Lesson Planner, Tutor, Grader, Report Cards).
- [`teachers/reports/`](./teachers/reports/) — report cards, performance matrix, and charts.
- [`teachers/sites/`](./teachers/sites/) — web views like the Weekly Timeline dashboard (`index.html`).
- [`teachers/config/`](./teachers/config/) — config for hosting and workflows (Firebase, GitHub Actions).
- [`assets/`](./assets/), [`public/`](./public/) — shared visuals and static hosting assets.

## 🗺️ Curriculum Mind Map

Below is a visual snapshot of the curriculum’s major subjects and threads. For an interactive version, open `teachers/sites/mind-map/index.html`.

![Learning Center — Curriculum Mind Map](./teachers/sites/mind-map/image.png)

## 🤖 AI Teaching Team (Agents)

Use these specialized prompts to generate lessons, plans, explanations, grading, and reports. Open each file and paste the full prompt into your AI tool.

- Curriculum Creator & Content Writer — [teachers/ai-assistants/curriculum_creator.md](./teachers/ai-assistants/curriculum_creator.md)
- Lesson Planner & Scheduler — [teachers/ai-assistants/lesson_planner.md](./teachers/ai-assistants/lesson_planner.md)
- Teacher's Aide (The Unblocker) — [teachers/ai-assistants/teachers_aide.md](./teachers/ai-assistants/teachers_aide.md)
- Subject Tutor (The Explainer) — [teachers/ai-assistants/subject_tutor.md](./teachers/ai-assistants/subject_tutor.md)
- Assessment Grader — [teachers/ai-assistants/assessment_grader.md](./teachers/ai-assistants/assessment_grader.md)
- Report Card Generator & Progress Analyst — [teachers/ai-assistants/report_card_generator.md](./teachers/ai-assistants/report_card_generator.md)
- Resource Finder & Video Curator — [teachers/ai-assistants/resource_finder.md](./teachers/ai-assistants/resource_finder.md)

Quick access to all agents: [teachers/ai-assistants/agents.md](./teachers/ai-assistants/agents.md)

## Project: Improvements

Bootstrap a GitHub Project board with common improvement tasks (UI polish, automation, resource packs) via the workflow:

- Open GitHub → Actions → “Bootstrap Improvements Project” → Run workflow on `main`.
- Optional: provide a one‑time token in the input field, or add a repo secret `ACTIONS_PAT` (recommended). If neither is provided, it uses the default `GITHUB_TOKEN`.
- The workflow creates a repo Project named “Learning Center – Improvements” with To do/In progress/Done columns and seeds issues into “To do”.

Security note: do not commit tokens in the repo. Prefer repository Secrets (`Settings → Secrets and variables → Actions`).

## 📝 Daily Workflow

1. **Log in** to your GitHub accounts each morning.
2. **Check in**: Go to your student folder; your `README.md` has your weekly schedule. Optionally, open `teachers/sites/index.html` for the timeline view.
3. **Work**: Assignments are in your student folder or under `assignments/` and `resources/`.
4. **Commit**: Save completed quizzes, notes, and projects back into your student folders.

## ✅ Submitting Your Work

Students should commit quizzes and assignments inside their subject folders:

- Location: `students/<name>/grade-#/subject/{quizzes|assignments}`
- Subjects: `language-arts`, `math`, `social-studies`, `stem`
- Quizzes: use `YYYY-MM-DD_quiz.md` or `week-##_quiz.md` (zero‑padded)
- Assignments: use short, hyphenated names (e.g., `character-analysis.md`, `lab-01-forces.md`)

Examples:

- Caleb Math Quiz: `students/caleb/grade-7/math/quizzes/2026-06-12_quiz.md`
- Elijah LA Assignment: `students/elijah/grade-4/language-arts/assignments/poetry-reflection.md`

Tips:

- Keep filenames lowercase, hyphen-separated; avoid spaces/emojis.
- Place any images/assets in the same folder and use relative links.
- If a subject folder is missing an `assignments/` or `quizzes/` folder, create it.

## 🧪 Preview & Dev Tips

- No build step; this is a Markdown/HTML content repo.
- Preview Markdown: use your editor’s Markdown preview.
- Preview HTML: `open assignments/.../car-brands.html` (macOS) or run `python3 -m http.server 8000` locally and visit http://localhost:8000
- Fast search: `rg -n "keyword"` and list files with `rg --files`
- Link sanity after moves/renames: `rg -n "]\((?!http|#).+\)"`

## 🔒 Privacy & Safety

- Use first names only (no PII) across paths and files.
- When adding or updating an agent, also update `teachers/ai-assistants/agents.md` and ensure “Core References” point to student hubs and `resources/` guides.

## ⚠️ Help & Questions

If you get stuck or need help:
- Message Dad for assistance.
- Open a GitHub issue to flag problems on specific files.

---
Get logged in and let’s get building! 🚀
