# Unit 05 — Exponential and Logarithmic Functions and Models

**Grade 11 · Math · Algebra II pathway · Weeks 19–22 of the course year**
(draft, delivered 2026-11-04 for issue #50; not educator-reviewed)

## Overview

Unit 04 ended at midyear with radical functions: a function whose
domain is decided by what may sit under a root. This unit reverses the
question. Instead of asking "what input is allowed?", it asks "how long
until this quantity reaches that value?" — and the answer needs a new
operation. Exponential functions answer "how much, after this many
steps?"; logarithms answer "how many steps, to reach this much?" They
are inverses, and most of this unit is learning to move fluently
between the two views of the same relationship.

The unit runs in four moves:

1. **Exponential functions** — equal factors over equal intervals,
   percent rate read from the base, graphs with intercepts, asymptote,
   and end behavior (Week 19).
2. **Logarithms as inverses** — the definition, conversion between
   forms, and the properties proved from exponent properties, so a
   logarithm is never a button to press blindly (Week 20).
3. **Logarithmic functions and equations** — graphs with a vertical
   asymptote, domain from the argument, and equations whose
   extraneous solutions are caught by checking the original equation
   (Week 21).
4. **Exponential modeling** — fitting exponentials to data, reading
   parameters in context, comparing exponential against linear and
   quadratic candidates with rate-of-change and residual reasoning,
   and stating where a model stops being trustworthy (Week 22).

The essential question running through all four weeks is: **when a
quantity changes by a constant percent rather than a constant amount,
what does its graph, its equation, and its inverse all say — and how
do you know the model fits the data well enough to use?**

## Prerequisites

From Unit 01 (Weeks 3–6), Unit 02 (Weeks 7–10), Unit 03 (Weeks 11–14),
Unit 04 (Weeks 15–18, delivered as a validated draft in PR #285 and not
yet merged, so it is named here in prose only), and the Weeks 1–2
diagnostics:

- Function notation, domain, and interpreting `f(x)` in context with
  units; justifying each algebraic step (the A-REI.1 habit).
- Integer and rational exponents; radical expressions and rationalizing
  denominators is not needed here, but exponent properties
  (`b^m · b^n = b^(m+n)`, `(b^m)^n = b^(mn)`) are used daily.
- Solving linear and quadratic equations; checking solutions in the
  original equation (the extraneous-solution habit from Units 03–04).
- Coordinate graphing; reading intercepts and end behavior; using a
  graphing calculator (Desmos) to check a hand sketch, not to replace
  the reasoning behind it.
- Average rate of change over an interval (Unit 01).

No prior knowledge of logarithms, the number `e`, or exponential
regression is assumed — this unit builds them from the inverse
relationship and from data.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Write, evaluate, and graph exponential functions `f(x) = a·b^x`
   (and `a·b^(ct)` forms), identify the initial value, base, percent
   rate, asymptote, intercepts, domain, range, and end behavior, and
   distinguish growth (`b > 1`) from decay (`0 < b < 1`).
   (F-IF.7.e, F-IF.4, F-IF.8.b; track objective 6)
2. Distinguish linear, quadratic, and exponential growth from tables,
   graphs, and descriptions using equal differences, equal factors,
   and second differences, and compute and interpret average rates of
   change, including the fact that exponential growth eventually
   outruns linear and quadratic growth. (F-LE.1, F-LE.1.a–c, F-LE.3,
   F-IF.6; track objectives 6, 13)
3. Convert between exponential and logarithmic forms, evaluate
   logarithms with bases 2, 10, and `e` (including by technology where
   the value is not exact), and explain logarithms as the inverse of
   exponentiation, with graphs related by reflection across `y = x`.
   (F-BF.5 (+), F-BF.4.a, F-IF.7.e; track objective 6)
4. Apply the product, quotient, and power properties of logarithms
   (proved from exponent properties) to expand and condense
   expressions, and use change of base to evaluate logarithms with
   technology. (F-BF.5 (+); track objective 6)
5. Solve exponential equations of the form `ab^(ct) = d` (bases 2, 10,
   and `e`) and logarithmic equations, expressing solutions as
   logarithms where exact, checking every solution in the original
   equation, and rejecting extraneous solutions with a stated reason.
   (F-LE.4, A-REI.2, A-REI.11, A-CED.1; track objective 6)
6. Fit an exponential model to data (by hand from two points and by
   technology), interpret its parameters in context, compare it
   against linear and quadratic candidates using rates of change and
   residuals, and state the model's limits. (F-LE.2, F-LE.5, A-CED.2,
   A-SSE.3.c, N-Q.1, N-Q.2; track objectives 6, 13, 14)

## Vocabulary

exponential function, base, initial value, growth factor, decay factor,
percent rate, growth, decay, asymptote, end behavior, logarithm,
common logarithm, natural logarithm, `e`, argument, inverse function,
product property, quotient property, power property, change of base,
extraneous solution, doubling time, half-life, exponential model,
residual, average rate of change, second difference.

## Standards and source notes

Reference framework: Common Core State Standards for Mathematics, High
School Algebra and Functions (codes and descriptions verified against
the published domain pages at thecorestandards.org during the track
audit, 2026-10-07; F-LE.4, F-BF.5, F-IF.7.e, and F-IF.8.b re-confirmed
against official-text reproductions 2026-11-04; descriptions here are
paraphrases). No state adoption, accreditation, or alignment
certification claimed. This unit addresses:

- **A-SSE.3.c** — use the properties of exponents to transform
  expressions for exponential functions (for example, rewriting
  `1.15^t` to reveal an equivalent monthly rate). (Lesson 01, Lesson 06)
- **A-CED.1, A-CED.2** — create equations in one variable and
  equations in two variables to represent relationships and graph
  them. (Lessons 05–06, project)
- **A-REI.2** — solve simple rational and radical equations and give
  examples of extraneous solutions; applied here, by the same
  checking habit, to logarithmic equations. (Lesson 05)
- **A-REI.11** — the x-coordinates of intersection points of two
  graphs are the solutions of `f(x) = g(x)`; solve approximately with
  technology. (Lessons 05–06)
- **F-IF.4** — interpret key features of graphs and tables in terms
  of the quantities (intercepts, intervals of increase/decrease, end
  behavior). (Lessons 01–02, 06)
- **F-IF.6** — calculate and interpret the average rate of change
  over a specified interval. (Lesson 02)
- **F-IF.7.e** — graph exponential and logarithmic functions, showing
  intercepts and end behavior. (Lessons 01, 06)
- **F-IF.8.b** — use the properties of exponents to interpret
  expressions for exponential functions, including identifying the
  percent rate of change. (Lessons 01–02)
- **F-BF.4.a** — solve `f(x) = c` for a simple function with an
  inverse and write an expression for the inverse. (Lesson 03)
- **F-BF.5 (+)** — understand the inverse relationship between
  exponents and logarithms and use it to solve problems involving
  logarithms and exponents. (+) in the published document; taught
  here as core, as the track audit states, since the
  exponential–logarithm inverse is the heart of Algebra II.
  (Lessons 03–05)
- **F-LE.1, F-LE.1.a–c** — distinguish linear from exponential
  situations: linear functions grow by equal differences, exponential
  functions by equal factors, over equal intervals. (Lesson 02)
- **F-LE.2** — construct linear and exponential functions from a
  graph, a description, or two input–output pairs. (Lessons 01–02, 06)
- **F-LE.3** — observe from graphs and tables that a quantity
  increasing exponentially eventually exceeds one increasing
  linearly, quadratically, or as a polynomial. (Lesson 02)
- **F-LE.4** — for exponential models, express as a logarithm the
  solution to `ab^(ct) = d` where `a`, `c`, `d` are numbers and the
  base is 2, 10, or `e`; evaluate the logarithm using technology.
  (Lesson 05)
- **F-LE.5** — interpret the parameters in a linear or exponential
  function in terms of a context. (Lessons 01, 06, project)
- **N-Q.1, N-Q.2** — use units to understand and guide multi-step
  solutions; define appropriate quantities for descriptive modeling.
  (Throughout; project)

## Session pacing (20 sessions, ~50 minutes each)

| Week | Session | Activity | Success criterion |
|---|---|---|---|
| 19 | S1 | Lesson 01, Part 1: exponential form, growth vs. decay | Learner writes `a` and `b` for a context and names the percent rate |
| 19 | S2 | Lesson 01, Part 2: graphs, asymptote, end behavior; Set A | Learner sketches `a·b^x` with intercept, asymptote, end behavior labeled |
| 19 | S3 | Lesson 02: comparing growth; average rate of change; Set B | Learner classifies a table by differences/factors and computes an average rate |
| 19 | S4 | Practice A–B workshop; lily-pond applied task (Lesson 01) | Learner defends a classification in writing, not by guessing the shape |
| 19 | S5 | Lesson 03, Part 1: logarithms as inverses; Set C begun | Learner converts both ways between forms without a calculator |
| 20 | S6 | Lesson 03, Part 2: log graphs by reflection; Set C finished | Learner relates a log graph's asymptote and intercept to its exponential partner |
| 20 | S7 | Lesson 04: log properties proved from exponents; Set D | Learner expands and condenses correctly, and refuses `log(a + b) = log a + log b` |
| 20 | S8 | Practice C–D workshop; error-analysis task (Lesson 04) | Learner finds and repairs a property error in someone else's work |
| 20 | S9 | Lesson 05, Part 1: solving exponential equations; Set E begun | Learner expresses an exact answer as a logarithm, then approximates it |
| 20 | S10 | Lesson 05, Part 2: logarithmic equations and extraneous solutions | Learner checks every solution in the original equation and rejects failures by name |
| 21 | S11 | Lesson 06, Part 1: logarithmic graphs and transformations; Set F begun | Learner states domain, asymptote, and intercept for a transformed log function |
| 21 | S12 | Lesson 06, Part 2: fitting exponential models; Set F finished | Learner fits a model from two points and interprets its parameters |
| 21 | S13 | Reading/reference session: Resource Pack reference 1 (Paul's Online Notes, exponential and logarithm sections) restated in the learner's own words | Learner restates the inverse relationship and the three properties without copying |
| 21 | S14 | Project Part 1: choose datasets, fit models, compute residuals | Learner produces a fitted model per dataset with units and a residual table |
| 21 | S15 | Project Part 2: comparison memo and limits statement | Learner recommends one model per dataset with evidence and a stated limit |
| 22 | S16 | Review and reteach: weakest objectives from Sets A–F, chosen by the adult from the learner's errors | Learner re-solves two previously missed items correctly |
| 22 | S17 | Formative quiz (assessments/week-22_quiz.md) and same-day feedback | Quiz scored; every miss mapped to a lesson for S16-style repair |
| 22 | S18 | Culminating assessment (assessments/unit-assessment.md) | Learner completes the assessment independently |
| 22 | S19 | Project gallery: learners present model choices; adult checks the rubric | Every claim in a memo is traceable to a computed value |
| 22 | S20 | Flex/catch-up: revisit the unit's essential question in writing | Learner writes when a percent-change model fits and when it does not |

If the learner is not secure on an objective after Session 19, use the
diagnostic/catch-up guidance in [teacher-guide.md](teacher-guide.md)
before starting Unit 06; do not carry an unrepaired logarithm-property
error into trigonometric modeling, where inverse reasoning returns.

## Files in this unit

- `README.md` — this overview.
- `lessons/lesson-01-exponential-functions.md` … `lessons/lesson-06-logarithmic-graphs-and-modeling.md` — six fully written lessons.
- `practice.md` — Practice Sets A–F, keyed to the lessons.
- `project.md` — "Which Model Fits?" investigation with a 40-point rubric.
- `resource-pack.md` — verified Resource Pack.
- `assessments/week-22_quiz.md` — formative quiz.
- `assessments/unit-assessment.md` — culminating assessment.
- `teacher-guide.md` — session guidance, readiness criteria, reteach triggers.
- `answer-key.md` — every lesson, practice, quiz, assessment, and project item solved independently.
- `assets/lily-pond-doubling.png` — generated teaching illustration, used in Lesson 01.
- `assets/exponential-logarithm-graphs.svg` — deterministic diagram supplementing the generated image (exact curves, labeled).
- `assets/README.md` — generation record, alt text, caption, text alternative.
