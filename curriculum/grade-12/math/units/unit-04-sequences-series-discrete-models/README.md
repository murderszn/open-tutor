# Unit 04 — Sequences, Series, and Discrete Models

**Grade 12 · Math · Precalculus pathway · Weeks 15–18 of the course year**
(draft, delivered 2026-11-03 for issue #54; not educator-reviewed, not merged)

## Overview

Algebra II taught the learner to *use* sequence formulas. This unit
teaches the learner to *reason* with them: to see a sequence as a
function whose domain is the counting numbers, to translate fluently
between a recursive rule ("what happens next") and an explicit rule
("what happens at step n"), to derive the sum formulas instead of
memorizing them, to decide honestly when an infinite sum exists and
when it does not, to expand a binomial power without multiplying it
out by hand, and to prove a formula for every counting number with
mathematical induction. Week 18 is the course's **midyear review**:
the unit's last sessions retrieve Units 01–04 together rather than
adding new content.

The unit runs in six moves:

1. **Sequences as functions** — recursive and explicit forms for
   arithmetic, geometric, and other sequences; sequences as functions
   on the integers; modeling discrete situations.
2. **Sigma notation and arithmetic series** — summation notation,
   the pairing derivation of the arithmetic sum, and counting terms
   correctly.
3. **Finite geometric series** — deriving
   `S_n = a_1(1 − r^n)/(1 − r)` (for `r ≠ 1`) and using it for
   growth, savings, and loan-style models (educational examples, not
   financial advice).
4. **Infinite geometric series and convergence** — partial sums
   approaching a limit when `|r| < 1`, divergence otherwise, repeating
   decimals as series, and the bouncing-ball total-distance model.
5. **The Binomial Theorem** — Pascal's Triangle, binomial
   coefficients, expanding powers, and finding a single term.
6. **Mathematical induction** — base step, inductive step, and proofs
   of sum formulas and divisibility statements, including a
   flaw-spotting task about a famous false "proof."

The essential question running through all four weeks is: **when a
pattern continues step by step, what can we say about step n, about
the total of the first n steps, and about the whole infinite run —
and how do we prove it rather than merely notice it?**

## Prerequisites

From Units 01–03 (drafts; this unit re-states every prerequisite it
needs rather than linking to unmerged files) and the Weeks 1–2
diagnostics:

- Function notation and the function concept; domain, including
  restricted domains; evaluating `f(n)` for integer inputs.
- Arithmetic and geometric sequences at Algebra II level: common
  difference, common ratio, recursive and explicit forms, the finite
  geometric sum (reviewed with proof here, not assumed as known).
- Exponent rules, including negative and fractional exponents;
  factoring and the distributive property; solving linear equations.
- Summation intuition from grade 11 (adding lists of terms); fraction
  and decimal fluency; rounding to a stated accuracy (N-Q.3).
- Written justification of every solution step (A-REI.1); Desmos and
  spreadsheet fluency for tables of terms and partial sums.

The unit assumes no prior fluency with sigma notation, infinite
series, the Binomial Theorem, or induction — those are this unit's
new content. Vectors, parametric, and polar forms (Unit 03) are not
used here except in the Week 18 midyear retrieval.

## Pacing — 20 sessions of 50 minutes (Weeks 15–18)

| Session | Activity | Success criterion |
|---|---|---|
| 1 (Wk 15) | Lesson 01 | Learner writes recursive and explicit forms for arithmetic and geometric sequences |
| 2 | Lesson 01 practice + retrieval (U01 function notation) | Guided/independent items correct with justifications |
| 3 | Lesson 02 | Learner reads and writes sigma notation and derives the arithmetic sum |
| 4 | Lesson 02 practice | Term-counting errors caught and corrected |
| 5 | Reading/reference: sequence tables in a spreadsheet; Desmos list checks | A 20-term table built and checked against a formula |
| 6 (Wk 16) | Lesson 03 | Learner derives and applies the finite geometric sum |
| 7 | Lesson 03 practice | Savings/loan-style models set up with `a_1`, `r`, `n` named |
| 8 | Lesson 04 | Learner tests convergence with partial sums and applies `S = a_1/(1 − r)` |
| 9 | Lesson 04 practice + project launch | Project situation chosen; first model drafted |
| 10 | Project work: discrete-model draft | Recursive + explicit forms and a sum computed for the chosen situation |
| 11 (Wk 17) | Lesson 05 | Learner expands binomials and finds single terms |
| 12 | Lesson 05 practice | Pascal's Triangle used without sign errors |
| 13 | Lesson 06 | Learner writes base step + inductive step proofs |
| 14 | Lesson 06 practice + project revision | Project proof drafted; peer error-spot completed |
| 15 | Formative quiz (Week 17) + feedback | Gaps named; reteach list written |
| 16 (Wk 18) | Midyear review 1: U01–U02 retrieval | Function analysis + identity proof reproduced from memory, then checked |
| 17 | Midyear review 2: U03–U04 retrieval + proof workshop | A series or induction proof presented in writing |
| 18 | Culminating unit assessment | See `assessments/unit-assessment.md` |
| 19 | Review-and-reteach + project presentations | Corrections made; projects presented and critiqued |
| 20 | Flex / catch-up + project submission | Project submitted with assumptions and limitations stated |

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Write arithmetic, geometric, and other sequences recursively and
   explicitly, translate between the two forms, and use them to model
   discrete situations. (F-IF.3, F-BF.2; track objective 7)
2. Read, write, and evaluate sums in sigma notation; derive and apply
   the arithmetic series sum, counting terms correctly when the index
   does not start at 1. (F-BF.2, A-CED.1; track objective 7)
3. Derive the finite geometric series formula and apply it to growth,
   savings, and repeated-payment models, handling the `r = 1` case
   separately. (A-SSE.4; track objective 7)
4. Decide whether an infinite geometric series converges (using
   `|r| < 1` and partial-sum behavior) and compute its sum when it
   does, including repeating decimals and total-distance models.
   (No CCSS-M code — standard precalculus content, stated honestly;
   track objective 7)
5. Apply the Binomial Theorem, including Pascal's Triangle and single
   terms, and connect binomial coefficients to counting.
   (A-APR.5 (+), taught as core here with the marking stated; track
   objective 7)
6. Prove statements about all counting numbers with mathematical
   induction, stating the base step and inductive step explicitly,
   and spot the flaw in a faulty induction argument. (No CCSS-M code
   — standard precalculus proof method, stated honestly; track
   objective 7)
7. Retrieve and combine Units 01–04 skills in the midyear review:
   function analysis, identity reasoning, vector/parametric/polar
   reading, and series reasoning, each with a written justification.
   (Cumulative; track objectives 1–7)

## Vocabulary

sequence, term, index, recursive formula, explicit formula, common
difference, common ratio, arithmetic sequence, geometric sequence,
Fibonacci sequence, sigma notation, index of summation, series,
partial sum, arithmetic series, geometric series, convergence,
divergence, limit of partial sums, repeating decimal, Pascal's
Triangle, binomial coefficient, combination notation `C(n, k)`,
Binomial Theorem, mathematical induction, base step (base case),
inductive step (inductive hypothesis), discrete model, assumption.

## Standards and source notes

Reference framework: **Common Core State Standards for Mathematics**,
high school conceptual categories. Descriptions here are plain-language
paraphrases, not reproductions. Codes marked **(+)** are advanced in the
published document; where this unit teaches one as core, the marking is
stated. No state adoption, accreditation, or alignment certification is
claimed. Codes F-IF.3, F-BF.2, and A-SSE.4 were re-verified against
official-text reproductions on 2026-11-03; A-APR.5 (+) and the
no-code status of infinite series and induction were established by
the track audit (2026-10-07/08) and are re-cited here.

- **F-IF.3** — recognize that sequences are functions, sometimes
  defined recursively, whose domain is a subset of the integers
  (for example, the Fibonacci sequence defined recursively by
  `f(0) = f(1) = 1`, `f(n+1) = f(n) + f(n−1)` for `n ≥ 1`).
- **F-BF.2** — write arithmetic and geometric sequences both
  recursively and with an explicit formula, use them to model
  situations, and translate between the two forms.
- **A-SSE.4** — derive the formula for the sum of a finite geometric
  series (when the common ratio is not 1), and use the formula to
  solve problems (for example, calculating mortgage payments).
- **A-APR.5 (+)** — know and apply the Binomial Theorem for
  `(x + y)^n`, with coefficients determined by Pascal's Triangle.
- **A-CED.1** — create equations in one variable and use them to
  solve problems (used for the modeling setups in Lessons 01–04).
- **A-REI.1** — explain each step in solving an equation as following
  from the previous step; construct a viable justification argument
  (the unit's written-justification habit, central to induction).
- **N-Q.1, N-Q.2, N-Q.3** — use units to guide solutions, define
  appropriate quantities for modeling, and report accuracy
  appropriate to measurement limits (money rounded to cents;
  idealized models labeled as such).
- **Infinite geometric series and mathematical induction** — no
  CCSS-M code names them; they are standard precalculus content and
  are taught as core here with that status stated, not hidden.

## Files in this unit

- `README.md` — this overview, pacing, objectives, vocabulary,
  standards notes.
- `lessons/lesson-01-…` through `lessons/lesson-06-…` — six fully
  written lessons.
- `practice.md` — mixed retrieval and application practice.
- `project.md` — the discrete-model portfolio investigation with
  rubric.
- `assessments/week-17_quiz.md` — formative quiz (Session 15).
- `assessments/unit-assessment.md` — culminating assessment
  (Session 18), including midyear-retrieval items.
- `teacher-guide.md` — pacing notes, misconceptions, reteaching,
  differentiation, and scoring guidance (no student answers).
- `answer-key.md` — worked solutions for every lesson item,
  practice item, quiz question, and assessment task.
- `resource-pack.md` — verified references, focused queries, and
  task-to-resource mappings.
- `assets/bouncing-ball-decay.png` — generated illustration used in
  Lesson 04, with a text-only alternative; see `assets/README.md`.
