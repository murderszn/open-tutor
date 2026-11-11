# Teacher Guide — Unit 04: Sequences, Series, and Discrete Models

This guide contains pacing notes, misconception notes, reteaching
moves, differentiation, and scoring guidance. It contains no
student answers; all worked solutions are in `answer-key.md`.

## Pacing notes

- **Sessions 1–5 (Week 15):** Lesson 01 needs its full session;
  do not compress the recursive/explicit translation into the
  readiness check. Session 5's spreadsheet table is the unit's
  cheapest diagnostic: a learner whose table disagrees with their
  formula has an indexing error, not a "careless mistake."
- **Sessions 6–10 (Week 16):** Lesson 03's derivation (multiply
  by `r`, subtract) deserves board time; learners who only
  memorize the formula will misuse `n`. Launch the project in
  Session 9 with situations chosen, not merely brainstormed.
- **Sessions 11–15 (Week 17):** Lesson 06 is the unit's hardest
  lesson. Spend the extra time on the horse-color flaw (Guided 3):
  learners who can name the exact failing step understand
  induction; learners who only repeat "base and step" do not.
  Score the Session 15 quiz the same day and write the reteach
  list before Session 16.
- **Sessions 16–20 (Week 18):** Midyear review sessions are
  retrieval, not re-teaching: learners first reproduce from
  memory, then check against Units 01–04. Session 19 pairs
  assessment corrections with project presentations; Session 20
  is flex and submission, not new content.

## Misconceptions and reteaching

| Misconception | Signal | Reteach move |
|---|---|---|
| `a_n = a_1·r^n` (off by one) | `a_1` check fails | Require the `n = 1, 2` check as the first line of every solution |
| Any increasing sequence is "arithmetic" | Differences not computed | Table first: compute three consecutive differences before naming a family |
| Sigma term count = last index | `Σ_{k=3}^{7}` counted as 7 or 4 | Expand first two and last terms; count the expansion |
| Geometric formula with `r = 1` | Division by zero, or `0/0` | Name the `r = 1` case before computing; use `n·a_1` |
| `a_1/(1 − r)` without checking `\|r\| < 1` | A "sum" for a diverging series | Partial-sum table first: if totals do not settle, stop |
| Induction = checking examples | "Proved for n = 1, 2, 3, so true" | Domino demonstration: tip one domino, then test the reach to the next |
| Assuming the conclusion in the inductive step | `P(k+1)` used to prove `P(k+1)` | Label lines "Assume for k" / "Show for k+1"; the hypothesis may only appear on the left side of the algebra |

## Differentiation

- **Support:** term tables before formulas; spreadsheet checks;
  sentence starters ("To get the next term, I…", "Assume for k…").
- **Language access:** sigma notation is always read aloud in
  words first; "converge" is glossed as "settle toward one number."
- **Alternate response modes:** oral explanation of a recursive
  rule; a sketched partial-sum graph instead of a written trend
  sentence; a presented (rather than written) project summary.
- **Extensions:** the per-lesson extension tasks; a project that
  proves a second statement or tests its model against real public
  data with sources.

## Scoring guidance

- **Quiz (10 items, formative):** score for diagnosis, not for a
  grade. Any item missed by a third or more of learners becomes a
  Session 16–17 reteach topic.
- **Unit assessment (8 tasks):** score each task out of 10
  (setup 3, computation 4, justification and interpretation 3).
  Task 7(b) and Task 8(b) accept any well-justified
  recommendation/simplification path; the key gives sample
  reasoning, not the only wording. Task 6 requires labeled base
  and inductive steps; an unlabeled but correct argument earns at
  most 7/10.
- **Project (40 points):** use the rubric in `project.md`.
  Deduct under "assumptions" for any model presented as measured
  fact, even when the arithmetic is correct.
- **Readiness signals:** a learner is ready for Unit 05 if they
  can translate recursive ↔ explicit forms, count sigma terms,
  apply both series formulas with their conditions, and write a
  two-step induction proof. A learner who can compute sums but
  cannot state when each formula applies needs reteaching, not
  more computation.

## Materials and safety

No hazardous materials. Ball-drop and savings contexts are
thought experiments and educational models; nothing is dropped,
purchased, invested, or dosed. If a learner wants a physical
bouncing-ball test, it is an adult-supervised observation with a
soft ball in an open space, and its measurements are the learner's
own data — never presented as the idealized model's values.
