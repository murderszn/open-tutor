// Local-first mock data. Mirrors repo content shapes (assignments/, curriculum/, schedule.csv).

export const SUBJECTS = {
  math: { label: "Math", color: "var(--subject-math)" },
  la: { label: "Language Arts", color: "var(--subject-la)" },
  stem: { label: "STEM", color: "var(--subject-stem)" },
  ss: { label: "Social Studies", color: "var(--subject-ss)" },
  other: { label: "Other", color: "var(--subject-other)" },
};

export const mockAssignments = [
  { id: "intro-to-algorithms", title: "Intro to Algorithms", subject: "stem", due: "Week 3", status: "in-progress" },
  { id: "solar-system-tour", title: "Solar System Tour", subject: "stem", due: "Week 4", status: "not-started" },
  { id: "punctuation-periods-and-question-marks", title: "Punctuation: Periods & Question Marks", subject: "la", due: "Week 2", status: "submitted" },
  { id: "personal-finance", title: "Personal Finance", subject: "math", due: "Week 5", status: "not-started" },
  { id: "reach-out-to-your-senator", title: "Reach Out to Your Senator", subject: "ss", due: "Week 6", status: "not-started" },
];

export const mockSchedule = [
  { day: "Monday", blocks: ["Math: fractions practice", "LA: reading + journal"] },
  { day: "Tuesday", blocks: ["STEM: solar system tour", "SS: community helpers"] },
  { day: "Wednesday", blocks: ["Math: quiz", "LA: punctuation"] },
  { day: "Thursday", blocks: ["STEM: algorithms", "Art / Other: free build"] },
  { day: "Friday", blocks: ["Review + grading", "Reports"] },
];

export const mockGrades = [
  { assignment: "Punctuation: Periods & Question Marks", score: "9/10", feedback: "Great work on sentence endings." },
];

export const mockResources = [
  { id: "math_fundamentals", title: "Math Fundamentals", subject: "math", path: "resources/math_fundamentals.md" },
  { id: "biology_fundamentals", title: "Biology Fundamentals", subject: "stem", path: "resources/biology_fundamentals.md" },
  { id: "language_arts_parts_of_speech", title: "Parts of Speech", subject: "la", path: "resources/language_arts_parts_of_speech.md" },
  { id: "government_basics", title: "Government Basics", subject: "ss", path: "resources/government_basics.md" },
];

export const mockAgents = [
  {
    id: "teachers-aide",
    name: "TeachersAide",
    role: "Real-Time Socratic Guide",
    category: "Instruction",
    file: "teachers-aide.html",
    doc: "teachers/ai-assistants/teachers_aide.md",
    description: "Real-time student homework and concept companion. Uses guided Socratic inquiry to prompt the student toward the answer without ever giving it away.",
    guardrail: "Strict Socratic: Asks clarifying questions, never provides direct solutions.",
    samplePrompt: "I am stuck on how to find the common denominator for 2/3 and 3/4.",
  },
  {
    id: "subject-tutor",
    name: "SubjectTutor",
    role: "Conceptual Exploration",
    category: "Instruction",
    file: "subject-tutor.html",
    doc: "teachers/ai-assistants/subject_tutor.md",
    description: "Deep-dives into difficult topics using a three-part pedagogy: a vivid real-world hook, an intuitive concrete analogy, and a comprehension check question.",
    guardrail: "Anchor in physical phenomena and everyday intuition before introducing formal abstraction.",
    samplePrompt: "Explain photosynthesis like I'm 10 years old.",
  },
  {
    id: "curriculum-creator",
    name: "CurriculumCreator",
    role: "Curriculum Architecture",
    category: "Planning",
    file: "curriculum-creator.html",
    doc: "teachers/ai-assistants/curriculum_creator.md",
    description: "Designs multi-week learning trajectories, grade-appropriate milestone scopes, and standards-aligned study sequences for independent tracks.",
    guardrail: "Strict mastery pacing; modular tracks with explicit prerequisites.",
    samplePrompt: "Design a 6-week introductory astronomy unit for Grade 5.",
  },
  {
    id: "lesson-planner",
    name: "LessonPlanner",
    role: "Daily Lesson Scaffolding",
    category: "Planning",
    file: "lesson-planner.html",
    doc: "teachers/ai-assistants/lesson_planner.md",
    description: "Generates daily instructional plans, student engagement exercises, hands-on tasks, and discussion starters aligned with current schedules.",
    guardrail: "Must produce actionable 30-45 minute blocks with visible student artifacts.",
    samplePrompt: "Plan tomorrow's 45-minute lesson on fractions and measurement.",
  },
  {
    id: "assessment-grader",
    name: "AssessmentGrader",
    role: "Rubric Feedback & Grading",
    category: "Evaluation",
    file: "assessment-grader.html",
    doc: "teachers/ai-assistants/assessment_grader.md",
    description: "Evaluates student assignments, worksheets, and essays against explicit criteria, generating actionable, encouraging, and constructive qualitative feedback.",
    guardrail: "Double-check reasoning; pair every correction with a positive reinforcement.",
    samplePrompt: "Review a student submission on sentence punctuation and grade out of 10.",
  },
  {
    id: "report-card",
    name: "ReportCard",
    role: "Academic Audit & Portfolios",
    category: "Evaluation",
    file: "report-card.html",
    doc: "teachers/ai-assistants/report_card_generator.md",
    description: "Synthesizes multi-week performance, attendance records, completed milestones, and student work samples into formal parent report cards.",
    guardrail: "Evidence-based summaries derived solely from verified commits and submissions.",
    samplePrompt: "Generate a mid-term progress summary for a student in Grade 5 STEM.",
  },
  {
    id: "resource-finder",
    name: "ResourceFinder",
    role: "Curation & Media Vetting",
    category: "Operations",
    file: "resource-finder.html",
    doc: "teachers/ai-assistants/resource_finder.md",
    description: "Curates kid-safe multimedia packs: vetted YouTube educational channels, PBS/Khan Academy embeds, and open-access primary source documents.",
    guardrail: "Whitelisted educational domains only; no commercial tracking or algorithm feeds.",
    samplePrompt: "Find 3 safe video clips and 2 primary sources about the water cycle.",
  },
  {
    id: "curriculum-worker",
    name: "CurriculumWorker",
    role: "Repo Integrity & Automation",
    category: "Operations",
    file: "curriculum-worker.html",
    doc: "teachers/ai-assistants/curriculum-worker.md",
    description: "Audits repository syllabus files, validates cross-links, ensures markdown rubric structure, and verifies that student branches mirror current specs.",
    guardrail: "Non-destructive audits; validates relative markdown link anchors.",
    samplePrompt: "Check all assignment links in the grade 5 schedule.csv for missing files.",
  },
];

