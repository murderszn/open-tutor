<div align="center">

# OpenTutor

**An educator-supervised learning library with independent grade tracks, structured resources, and optional AI support.**

<p>
  <a href="https://github.com/murderszn/open-tutor"><img src="https://img.shields.io/badge/OpenTutor-Curriculum_Repo-111827?style=for-the-badge&logo=github&logoColor=white" alt="OpenTutor Curriculum Repo" /></a>
  <a href="https://github.com/murderszn/vibe"><img src="https://img.shields.io/badge/Vibe-AI_Tutor_Repo-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Vibe AI Tutor Repo" /></a>
  <a href="./teachers/ai-assistants/agents.md"><img src="https://img.shields.io/badge/AI-Teaching_Team-D97757?style=for-the-badge" alt="AI Teaching Team" /></a>
  <a href="./resources/README.md"><img src="https://img.shields.io/badge/Learning-Resources-059669?style=for-the-badge" alt="Learning Resources" /></a>
</p>

</div>


## Overview

OpenTutor is a public teaching-material library, designed for educator-led adaptation. It does not host student records.

- **This repo holds reusable curriculum, assignments, public resources, and teacher tools.** Personalized learner records stay private.
- **GitHub** acts as the record for public content and revisions, not as a public student portfolio or gradebook.
- **AI is optional and educator-directed**. Adults define the work. AI can help draft, explain, organize, and review.

The library is flexible and inspectable. Educators select, adapt, and review each grade track independently.

## Optional Integrations

The content library is usable on its own. Educators may connect an AI tutor or classroom platform, subject to local safeguarding, access-control, and privacy requirements. Integrations should not read public learner records because none belong in this repository.

## What This Repo Does

This repository is a maintained teaching library, not a student-record system.

- **Assignments** hold project briefs, labs, writing prompts, and interactive activities.
- **Resources** hold quick-reference guides, datasets, and reusable support material.
- **Curriculum** holds independent, anonymous grade-specific tracks in different stages of development; learner work and schedules belong in private storage.
- **Teachers** hold dashboards, planning tools, and reusable AI assistant prompts.

This is deliberately **teacher-driven and AI-assisted**.

- There is no single fixed curriculum that must be followed.
- Suggested subject areas and materials help you get started.
- Parents and teachers decide what to teach, how far to go, and what artifacts students should produce.
- AI can help generate worksheets, rubrics, project prompts, study guides, summaries, and review materials from this structure.

## Visual Model

The larger system framing comes from the OpenTutor white paper in the Vibe project. Inside this repo, the closest curriculum-level graphic is the learning-center mind map.


Useful entry points:

- [OpenTutor Manifesto](./site/index.html) · [preview and deployment instructions](./site/README.md)
- [OpenTutor App (React frontend)](./frontend/README.md) — run `cd frontend && npm install && npm run dev`

- [Faculty Planning Dashboard](./teachers/sites/index.html)

- [AI Teaching Team](./teachers/ai-assistants/agents.md)
- [Teacher Tools](./teachers/tools/README.md)
- [Assignments Index](./assignments/README.md)
- [Resources Index](./resources/README.md)
- [Grade-Based Curriculum & Blank Assessments](./curriculum/README.md)
- [Content Privacy, Quality & Hosting Review](./docs/content-review.md)
- [Using the Independent Grade Tracks](./docs/teaching-library-usage.md)
- [K–12 Curriculum Expansion Plan & GitHub Backlog](./docs/curriculum-expansion/README.md)
- [Repository License Status](./LICENSE)
- [Security and Privacy Reporting](./SECURITY.md)

## Daily Workflow

OpenTutor is built around a repeatable teacher workflow rather than a locked product flow:

1. **Choose one grade track**
   Select materials from exactly one grade directory and keep personalized plans private.
2. **Stage the materials**
   Pull from `resources/`, create or revise assignments, and add links, datasets, or guides students will need.
3. **Assign privately**
   Copy the selected blank task into a private workspace for one learner.
4. **Review and respond**
   Teachers give feedback, adjust pacing, add follow-up work, and refine the next set of tasks.
5. **Protect records**
   Keep learner work and progress out of the public repository.

The content library works independently of any tutor or classroom platform.

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/murderszn/open-tutor.git
cd open-tutor
```

### 2. Choose an adult-operated learning path

For local adaptation, educators may use their own GitHub account and a code editor such as [VS Code](https://code.visualstudio.com/Download). Both are optional for offline use. Any online classroom or AI tutoring platform is optional and should be selected by the adult.

For K–8, start at the [K–8 planning hub](./resources/k-8/README.md), then use the matching grade track in [curriculum](./curriculum/README.md). This hub offers planning and placement guidance; it is not a complete or accredited curriculum. The family selects and supplies full-year materials, especially early systematic reading instruction and cumulative math practice. The curriculum tracks and new starter lessons are drafts; their coverage is described in the [K–8 coverage note](./resources/k-8/coverage.md).

An adult operates the repository, their own accounts, the schedule, and review. Young learners can work on paper, with manipulatives, outdoors, or in conversation while an adult records evidence. Do not require children to create or share platform accounts. [GitHub's terms](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service) require a user to be at least 13 in the U.S.; local minimum ages can be higher. [Discord's age requirements](https://support.discord.com/hc/en-us/articles/360040724612-Why-is-Discord-asking-for-my-birthday) vary by country. Adults should check current terms before involving a learner. Discord is optional; see the [Vibe repo](https://github.com/murderszn/vibe) for its separate tutor setup.

### 3. Choose one grade track

```bash
open curriculum/grade-4/README.md  # or grade-5, grade-7, grade-8
```

Select work only from the chosen grade directory. Keep real learner names, schedules, submissions, grades, and progress in private storage. Never combine grade tracks in a shared assignment.

### 4. Open the dashboards

- [Faculty Planning Dashboard](./teachers/sites/index.html)


## Repository Structure

```text
open-tutor/
├── assignments/          shared assignments, projects, and interactives
├── resources/            reference guides, study docs, and datasets
├── curriculum/           independent grade tracks and lesson drafts
├── students/student-template/ anonymous workspace starter
├── docs/                  privacy and teaching guides
├── teachers/
│   ├── ai-assistants/    reusable prompts for planning, tutoring, grading
│   ├── reports/          generated report materials
│   ├── sites/            dashboards and visual planning tools
│   └── tools/            classroom-ready interactive teacher tools
└── .github/workflows/    optional hosting automation
```

### Independent Grade Tracks

Choose one grade-specific directory in `curriculum/`. The public repository contains blank instructional content, not student names, completed work, schedules, grades, or sibling comparisons. Use private, access-controlled storage for learner records.

## Teacher Workflow

This repo assumes adults are the operators.

- **Teachers and parents curate the resource base**
  Keep guides, links, references, and datasets organized in `resources/`.
- **Teachers create the work**
  Build assignments, prompts, projects, and rubrics in `assignments/`.
- **Teachers manage pacing**
  Use student schedules and dashboards to shape the weekly rhythm.
- **AI helps with production**
  Use the prompts in `teachers/ai-assistants/` to draft materials faster and respond to student needs.

OpenTutor is not trying to replace the teacher. It is trying to give the teacher better structure, leverage, and visibility.

## AI Teaching Team

This repo includes a reusable prompt library for running the program with any major AI assistant.

| Assistant | File | Primary use |
|---|---|---|
| Curriculum Creator | [curriculum_creator.md](./teachers/ai-assistants/curriculum_creator.md) | Draft one grade-specific unit at a time |
| Lesson Planner | [lesson_planner.md](./teachers/ai-assistants/lesson_planner.md) | Plan for an individual learner privately |
| Teacher's Aide | [teachers_aide.md](./teachers/ai-assistants/teachers_aide.md) | Support an individual learner without giving answers |
| Subject Tutor | [subject_tutor.md](./teachers/ai-assistants/subject_tutor.md) | Explain topics clearly and step by step |
| Assessment Grader | [assessment_grader.md](./teachers/ai-assistants/assessment_grader.md) | Review individual work against a rubric |
| Report Card Generator | [report_card_generator.md](./teachers/ai-assistants/report_card_generator.md) | Prepare private reports from authorized records |
| Resource Finder | [resource_finder.md](./teachers/ai-assistants/resource_finder.md) | Curate age-appropriate videos and references |
| Curriculum Worker | [curriculum-worker.md](./teachers/ai-assistants/curriculum-worker.md) | Deliver one section of the K–12 GitHub backlog per run |

Full directory: [teachers/ai-assistants/agents.md](./teachers/ai-assistants/agents.md)

The [K–12 expansion backlog](./docs/curriculum-expansion/README.md) plans math, science, language arts, and social studies for every grade. Existing grade 4, 5, 7, and 8 material will be audited and expanded; other tracks are placeholders or planned additions. The recurring worker prompt requires complete Markdown instruction, worked examples, practice, teacher keys, verified resource packs, and generated teaching images. Its intended cadence is every three hours; the schedule is prepared but has not been activated.

## Learning Resources

The `resources/` folder is a maintained library, not a locked curriculum.

- quick-reference guides for science, history, finance, careers, government, and practical life knowledge
- structured datasets in CSV and JSON for coding, research, and analysis
- reusable materials that students can reopen without rebuilding context from scratch

Start here: [resources/README.md](./resources/README.md)

### K–8 planning and current coverage

Use the [K–8 planning hub](./resources/k-8/README.md) for adult placement and sequence guidance; use only the learner's matching folder under [curriculum](./curriculum/README.md) for instruction. The hub is supplementary and does not establish standards coverage. Grades 4, 5, 7, and 8 contain expanded draft assignment and quiz libraries that still need teaching-sequence, key, prerequisite, and grade-placement review. Grades K, 1, 2, 3, and 6 each have one draft starter lesson per subject; K math and Grade 1 language arts also have draft scope-and-sequence documents. These are supplements, not complete units or courses. Families must review each track and choose or provide full-year materials, especially cumulative early reading instruction and math practice. See the [coverage note](./resources/k-8/coverage.md) for current limits.

## Assignments and Projects

The `assignments/` folder holds the work students actually do.

- subject-based assignments
- project prompts
- labs and interactives
- writing and research tasks
- templates and scaffolds

Start here: [assignments/README.md](./assignments/README.md)


## Privacy and Safety

- Do not store real learner work, grades, names, or schedules in this public repository.
- Use private, access-controlled storage for individually identifiable records.
- Do not commit secrets, `.env` files, or real PII.
- Keep adult review in the loop when using AI-generated materials.
- Treat AI output as draft support, not automatic truth.

## Hosting

This repo can be browsed locally with no build step, or hosted statically.

To preview locally:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/teachers/sites/index.html`
- `http://localhost:8000/teachers/sites/mind-map/index.html`

Firebase hosting is also preconfigured in `.github/workflows/firebase-hosting.yml` if you want automated static deployment.

## Summary

OpenTutor is a public library of educational resources and independent, anonymous grade-specific draft tracks. Personalized schedules, grades, and learner work belong in private, access-controlled storage.
