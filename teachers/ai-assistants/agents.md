# The OpenTutor AI Teaching Team

Welcome to the AI Teaching Team directory! This folder contains specialized system prompts designed to help parents and teachers run a homeschool or small-classroom program efficiently using any AI assistant (Claude, ChatGPT, Gemini, etc.).

## How to Use These Agents

1. **Choose your Assistant**: Pick the role that fits your current need.
2. **Copy the Prompt**: Open the chosen file and copy the entire text.
3. **Start a New Chat**: Paste the text as your very first message to the AI.
4. **Interact**: Give it the single grade, subject, task, and context needed. Use an anonymous code if one is useful; do not supply full names or other identifying details.

---

## Core References (Quick Links)

- Student Hubs
  - [Student Template Hub](../../students/student-template/README.md)
- Independent grade tracks
  - [Grade curriculum index](../../curriculum/README.md)
  - [K–8 planning and coverage guidance](../../resources/k-8/README.md)
  - [K–8 assessment and placement](../../resources/k-8/assessment-and-placement.md)
- Assignments
  - [Grade-neutral assignments catalog](../../assignments/README.md)
- Resources (Guides)
  - [World Facts](../../resources/world_facts.md)
  - [Weights & Measures](../../resources/weights_and_measures.md)
  - [Financial Tools & Principles](../../resources/financial_tools_and_principles.md)
  - [Physics Fundamentals](../../resources/physics_fundamentals.md)
  - [Chemistry Fundamentals](../../resources/chemistry_fundamentals.md)
  - [Biology Fundamentals](../../resources/biology_fundamentals.md)
  - [Global Conflicts & State-Building](../../resources/wars_fundamentals.md)
  - [GitHub Actions Helper](./github_actions_helper.md)
  - [Government Basics](../../resources/government_basics.md)
  - [United States — Understanding & Principles](../../resources/united_states_understanding_and_principles.md)
  - [Careers — Paths, Education, Pay](../../resources/careers.md)
  - [Automotive Basics — History & Mechanics](../../resources/automotive-basics.md)
  - [Black Excellence — Study Them](../../resources/black_excellence_figures.md)
  - [Ultimate Guide to File Types](../../resources/file-types.md)
- Datasets
  - [UN Countries (CSV)](../../resources/un_countries.csv)
  - [UN Countries (JSON)](../../resources/un_countries.json)
- Indexes & Dashboards
  - [K–12 Curriculum Expansion Plan and Issue Backlog](../../docs/curriculum-expansion/README.md)
  - [Curriculum Unit Requirements](../../docs/curriculum-expansion/unit-requirements.md)
  - [Resources Index](../../resources/README.md)
  - [Assignments Index](../../assignments/README.md)
  - [Weekly Timeline Dashboard](../sites/index.html)

Agents should reference these when proposing tasks, examples, or links for students. Prefer relative links and keep responses grade-appropriate.

---

## Meet the Team

### 1. [Curriculum Creator & Content Writer](curriculum_creator.md)
Drafts lessons for one grade track, matching direct teaching, cumulative practice, application, and evidence checks to the learning goal.

### 2. [Lesson Planner & Scheduler](lesson_planner.md)
Creates realistic weekly learning steps and valid four-column CSV schedules when requested, with adult-led K–2 options and teacher checks.

### 3. [Teacher's Aide (The Unblocker)](teachers_aide.md)
The Socratic guide. Use this when a student is stuck on a coding bug or a tough math problem. It provides hints and real-world analogies but is strictly programmed *never to give direct answers*.

### 4. [Subject Tutor (The Explainer)](subject_tutor.md)
The deep-dive lecturer. Use this agent when you want a student to learn a brand new, complex topic from scratch. It breaks big concepts down into highly digestible, age-appropriate explanations.

### 5. [Assessment Grader](assessment_grader.md)
Reviews submitted evidence only against the stated task and rubric; missing or unknown evidence is not scored as zero.

### 6. [Report Card Generator & Evidence Summarizer](report_card_generator.md)
Summarizes submitted work and supported rubric results. It may count artifacts but does not infer interest, ability, or engagement from activity.

### 7. [Resource Finder & Video Curator](resource_finder.md)
Given an assignment and grade level, proposes targeted search queries and returns a curated set of YouTube videos and reputable online references. Follows kid-safe curation rules.

### 8. [Curriculum Worker — One Section per Run](curriculum-worker.md)
Works through structured GitHub issues to expand Kindergarten–Grade 12 math, science, language arts, and social studies. Each invocation delivers one audit, instructional unit, or review section with worked examples, exercises, separate answer keys, verified resources, and generated teaching images. See the [expansion plan](../../docs/curriculum-expansion/README.md) for backlog links and the intended every-three-hour schedule; scheduling must be activated separately.

---

## Safety & Style Notes for Agents

- Use first names only; do not include PII.
- Cite internal resources above with relative links.
- Match tone and rigor to the specified student and grade.
- When adding or updating an agent prompt, also update this file's Core References list if new guides are added.
- Use one canonical grade track at a time. Keep actual learner work, assessment results, names, and schedules in private adult-controlled storage.
- When an internal guide is missing, include 1–2 Wikipedia links for high-level concepts as click-through references. Prefer .gov/.edu where available; keep links age-appropriate.
