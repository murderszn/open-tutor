# OpenTutor Learning Center

A complete, open-source homeschool operating system for parents and small-classroom teachers. Fork this repo, add your students, and start running your program in an hour.

**How it works:** GitHub stores your curriculum. Discord runs your classroom. An AI tutor (optional) handles the help desk. Everything stays reviewable, versionable, and in your control.

➡️ **Quick start:**
- Open the Weekly Timeline: [teachers/sites/index.html](./teachers/sites/index.html)
- See the AI Teaching Team: [teachers/ai-assistants/agents.md](./teachers/ai-assistants/agents.md)

---

## Getting Started

### 1. Fork & clone this repo

```
git clone https://github.com/your-username/open-tutor.git
```

### 2. Set up accounts

Each participant needs:
- A **GitHub account** — [github.com/signup](https://github.com/signup)
- A **Discord account** (optional, for the AI tutor bot) — [discord.com](https://discord.com)
- **VS Code** (recommended editor) — [code.visualstudio.com](https://code.visualstudio.com/Download)

### 3. Add your students

Copy the template folder for each student:

```
cp -r students/student-template students/your-student-name
```

Edit the new folder's `README.md` — replace `[STUDENT_NAME]` and `[N]` with real values. Rename `grade-N/` to the student's grade (e.g., `grade-5/`).

### 4. Set your schedule

Edit `students/<name>/schedule.csv` to add weekly tasks. Use the format:

```
Week,Study Area,Task,Status
"September 6, 2026",Math,Complete weekly math practice,Pending
```

### 5. Open the dashboards

- **Weekly Timeline** — `teachers/sites/index.html` (open in browser; shows all students and weeks)
- **Sprint Board** — `students/sprint.html` (student Kanban board; drag tasks to In Progress / Done)

---

## Repository Structure

```
open-tutor/
├── assignments/          — Shared assignment specs and HTML interactives
├── resources/            — Reference guides and datasets (Markdown, CSV, JSON)
├── students/
│   └── student-template/ — Copy this for each student; rename to their name
├── teachers/
│   ├── ai-assistants/    — AI system prompts (Tutor, Grader, Planner, etc.)
│   ├── reports/          — Generated report cards and performance matrices
│   └── sites/            — Web dashboards (Weekly Timeline, Mind Map)
└── .github/workflows/    — Firebase hosting CI/CD (optional)
```

---

## AI Teaching Team

Paste any of these prompts into Claude, ChatGPT, or Gemini to get a specialized assistant:

| Agent | File | Use it to… |
|---|---|---|
| Curriculum Creator | [curriculum_creator.md](./teachers/ai-assistants/curriculum_creator.md) | Design new project-based assignments |
| Lesson Planner | [lesson_planner.md](./teachers/ai-assistants/lesson_planner.md) | Break monthly goals into daily tasks |
| Teacher's Aide | [teachers_aide.md](./teachers/ai-assistants/teachers_aide.md) | Guide students without giving answers |
| Subject Tutor | [subject_tutor.md](./teachers/ai-assistants/subject_tutor.md) | Explain brand-new topics from scratch |
| Assessment Grader | [assessment_grader.md](./teachers/ai-assistants/assessment_grader.md) | Grade submitted work with feedback |
| Report Card Generator | [report_card_generator.md](./teachers/ai-assistants/report_card_generator.md) | Generate report cards and progress charts |
| Resource Finder | [resource_finder.md](./teachers/ai-assistants/resource_finder.md) | Curate kid-safe videos and references |

All agents: [teachers/ai-assistants/agents.md](./teachers/ai-assistants/agents.md)

---

## Daily Workflow

1. **Log in** to GitHub each morning.
2. **Check your hub** — open your student folder's `README.md` for the weekly schedule.
3. **Work** — assignments live in your student folder or under `assignments/` and `resources/`.
4. **Commit** — save completed quizzes and projects back to your student folder.

---

## Submitting Work

Save completed work inside subject folders using this structure:

```
students/<name>/grade-#/<subject>/{quizzes|assignments}/
```

Naming conventions:
- Quizzes: `YYYY-MM-DD_quiz.md` or `week-##_quiz.md`
- Assignments: short hyphenated names (e.g., `character-analysis.md`, `lab-01-forces.md`)

---

## Optional: Discord AI Tutor Bot

The companion repo [discord-vibe-bot](https://github.com/murderszn/discord-vibe-bot) adds an AI tutor named Vibe directly into your Discord server. Students ask questions in subject channels; Vibe answers with Socratic hints, explanations, and resources — never direct answers.

Setup: clone the bot repo, add `DISCORD_TOKEN` and `ANTHROPIC_API_KEY` to `.env`, and run `python bot.py`.

---

## Hosting (Optional)

This repo is pre-configured for Firebase Hosting:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Update `.firebaserc` with your Firebase project ID
3. Deploy: `firebase deploy`

Or just open `index.html` files directly in a browser — no build step required.

---

## Privacy & Safety

- Use first names only across file paths and content.
- Do not commit `.env` files or real student PII to public repos.
- Keep student academic records in a private fork.
