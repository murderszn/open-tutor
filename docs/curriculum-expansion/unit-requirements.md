# What Counts as a Complete Curriculum Unit

These requirements apply to the K–12 expansion backlog. Existing content should be reused or improved when accurate and age-appropriate. A collection of headings, resource links, or quizzes alone is not a curriculum unit.

## Track and Unit Layout

New subject folders are `math`, `science`, `language-arts`, and `social-studies`. Existing `stem` material stays available while science is developed as a complete subject independently of coding prerequisites.

```text
curriculum/grade-<grade>/<subject>/
  README.md
  scope-and-sequence.md
  units/unit-01-<topic>/
    README.md
    lessons/lesson-01-<topic>.md       # four to six substantive lessons
    practice.md
    project.md
    resource-pack.md
    assessments/week-04_quiz.md
    assessments/unit-assessment.md
    teacher-guide.md
    answer-key.md
    assets/<topic>-illustration.png   # actual generated asset, not a placeholder
    assets/README.md
```

Names inside this layout are examples; choose descriptive lowercase, hyphen-separated names and zero-padded numbers. Student pages may link to a teacher guide with clear labeling; teacher answers should remain separate from student questions. No learner responses are published.

## Scope, Pacing, and Alignment

Each track proposes eight four-week units and four flexible review/diagnostic weeks. Give each unit a 16–20-session plan, adjusting frequency/duration explicitly for the subject and learner's age. A session may be a core lesson, guided practice, reading, discussion, a lab, revision, or assessment. Name the specific activity and success criterion for each session; four weeks of repeated “practice” labels is insufficient.

List 3–6 measurable learning objectives, prerequisite knowledge, vocabulary, an essential question, and source-backed standards connections. Science and social studies may use grade-band frameworks; high-school course order is a proposed pathway, not a universal state requirement. Include revisiting/retrieval practice and time for feedback. An educator adapts pacing and placement privately.

## Lesson Checklist

Each lesson needs:

- A student-readable goal, time estimate, materials, and a short readiness check.
- Explicit teaching in original prose, with vocabulary explained in context.
- Two or more fully worked examples or modeled responses showing reasoning.
- Guided practice with prompts/hints, independent practice, an application, and an exit check.
- Support for reading/language access, an alternate response mode, and an extension.
- A teacher note about likely misconceptions and an answer-key reference.

Default practice per lesson is 6–10 meaningful tasks across guided and independent work. For K–2, use 4–6 short oral/manipulative/drawing tasks and observation prompts. Increase depth rather than merely increasing counts in high school. Explain a lower count for a substantial experiment, essay, source analysis, or proof. Include at least one error-analysis or explain-your-reasoning task where developmentally appropriate.

## Worked Example Models

These illustrate the level of explanation expected; adapt to the unit rather than copying them everywhere.

**Math:** “Compare 3/4 and 5/8. An eighth is smaller than a fourth, so use equal-size pieces before comparing. Since 3/4 = 6/8, compare 6 eighths with 5 eighths: 3/4 > 5/8. Check with equal-length fraction bars. A common error is to compare denominators alone.” Guided follow-up: compare 1/2 and 3/8. The teacher key gives 4/8 > 3/8 and explains why the wholes must be equal.

**Science:** “One toy car was tested three times on each of two surfaces with the same ramp height. Smooth-surface travel was 42, 40, and 41 cm; rough-surface travel was 25, 24, and 26 cm. The mean distances are 41 cm and 25 cm. In this test the car traveled farther on the smooth surface. Surface type changed; car and ramp height stayed constant. The measurements support this claim, but do not prove it for every material.” Label the numbers as a fictional practice dataset, not observations the learner made. Ask which additional trials would strengthen the conclusion.

**Language arts:** Use an original short passage: “Mira tucked the torn kite under her arm. She watched the wind bend the grass, then took out her tape.” Model the inference that Mira may intend to repair and fly the kite, citing the tape and attention to the wind. Explain that this is an inference, not a stated fact. Ask learners to support a different plausible inference with textual evidence; the teacher guide allows defensible alternatives.

**Social studies:** When comparing two historical accounts, model identifying creator, date, audience, purpose, and supporting evidence. Show how the same event can be described differently without assuming either account is automatically true. Link to the actual primary sources and distinguish source quotation, paraphrase, and your interpretation. An AI-generated period scene is a reconstruction, never corroborating historical evidence.

## Assessment and Teacher Materials

- Include a brief formative quiz and a culminating assessment matched to objectives. Young learners can respond orally or by drawing/pointing.
- Include a project/investigation with deliverables and a rubric with observable criteria and scoring descriptors.
- Supply a solution or scoring guidance for every practice item, quiz question, assessment task, and project. For open responses, provide sample reasoning and acceptable variation.
- State what evidence signals readiness, when to reteach, and what targeted follow-up to use. Do not claim a generated assessment is standardized or validated.
- Keep challenge content optional; do not turn an advanced topic into an assumed prerequisite for all learners in that grade.

## Resource Pack

Follow the repository format: one-sentence goal and age fit; 3–6 focused queries; 3–7 verified videos or clearly labeled preferred-channel search links; 4–7 reputable web references; and a table mapping unit tasks to 1–2 useful resources each. Internal references and datasets are additional and should be linked to exact relevant sections when possible.

For each external recommendation, record the date checked, intended audience, relevance, accessibility/account requirements, and whether it is a direct resource or an unverified search. Do not claim captions/runtime or age suitability you did not check. Prefer official scientific agencies, museums, archives, universities, established educational organizations, and free sources. At least one free, no-account route must support each core objective; videos supplement teaching rather than replace it.

## Generated Images and Accessibility

Each unit requires at least one generated PNG/WebP/JPEG that materially supports observation, reasoning, a story prompt, or an application. Inspect it, save it in `assets/`, and embed it in a lesson with descriptive alt text, a caption, and a specific related question. Supply a text-only alternative containing the information needed to answer that question.

Record in `assets/README.md`: filename, prompt, generation tool/model if available, date, learning purpose, factual review, caption, alt text, and known limitations. Label AI illustrations clearly. Avoid decorative-only compliance, false lab results, inaccurate geometry, misleading anatomy, and maps with invented borders. Precise diagrams/charts should use reproducible SVG/HTML/plotting; they supplement, rather than replace, the required generated illustration.

Interactive exercises must work by keyboard, have visible labels, readable contrast, meaningful feedback, and a reset action. Provide a printable or text-based equivalent. Test both narrow and desktop layouts.

## Completion Evidence

A section's delivery comment links to its PR/commit, lists files and sources, identifies generated assets, and records checks performed. A checked issue box means **validated draft delivered**. The track remains open until all required material is merged and the final review is complete. Failed/missing generation, unverified answers, or broken required links leave the unit unchecked.

Run the library validator, review relative links beyond its folder coverage, preview Markdown/assets, and browser-test interactives. Update the grade/subject/unit indexes and `curriculum/manifest.json` using its existing `format_version` and `files` schema. Resource and shared assignment additions need their own index updates. Keep named learners, completed work, grades, and real schedules private.
