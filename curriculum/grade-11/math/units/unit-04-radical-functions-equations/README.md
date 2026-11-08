# Unit 04 — Radical Functions and Equations

**Grade 11 · Math · Algebra II pathway · Weeks 15–18 of the course year**
(draft, delivered 2026-10-29 for issue #50; not educator-reviewed)

## Overview

Unit 01 rebuilt the function as an object you can transform, chain, and
reverse. Unit 02 grew that object into polynomials whose zeros
determine shape. Unit 03 divided polynomials and found breaks, holes,
and asymptotes. This unit takes the root: the square-root and
cube-root functions, and the equations that come from them. The payoff
is a habit that lasts the whole course: **whenever you raise both
sides of an equation to a power, you may create solutions that were
never there — so you check every candidate in the original equation,
and you say why the rejected ones fail.**

The unit runs in four moves:

1. **Roots as exponents** — rational exponents are the engine:
   `x^(1/2)` is `√x`, `x^(1/3)` is `∛x`, and every radical rule is an
   exponent rule in disguise. Even indexes restrict domains; odd
   indexes do not.
2. **Root graphs** — square-root graphs start at a point and climb
   ever more slowly; cube-root graphs pass through their center and
   run in both directions. Transformations move those shapes the same
   way they moved every function in Unit 01.
3. **Radical equations** — isolate the radical, raise to the matching
   power, solve, and check. Extraneous solutions are not accidents:
   squaring erases sign information, and the check is where that lost
   information is recovered.
4. **Root models** — pendulum period grows with the square root of
   length; a cube's edge grows with the cube root of its volume.
   Decreasing increments and residual patterns tell a root model
   apart from a linear or exponential one.

The essential question running through all four weeks is: **how does
the index of a root — even or odd — decide a function's domain, its
graph's shape, and whether solving an equation can invent answers
that must be rejected?**

Week 18 is the **midyear review**: cumulative retrieval of Units
01–04, a justification-writing workshop, and a formative cumulative
check. The unit assessment's Part C is that retrieval check.

## Prerequisites

From Units 01–03 (Weeks 3–14, delivered as validated drafts and not
yet merged, so they are named here in prose only) and the Weeks 1–2
diagnostics:

- Function notation, domain, and range; graph transformations
  `f(x) + k`, `kf(x)`, `f(kx)`, `f(x + k)`; inverse functions and
  their domain/range swap.
- Exponent properties, including rational exponents from the
  grade-9/10 entry skills; factoring quadratics; solving quadratic
  equations by factoring.
- Coordinate graphing; reading intercepts, intervals of increase,
  and end behavior; using a graphing calculator (Desmos) to check a
  hand sketch, not to replace the reasoning behind it.
- Checking solutions in the original equation (the Unit 03 habit for
  rational equations); justifying each algebraic step.

No prior knowledge of radical functions, extraneous solutions, or
root models is assumed — this unit builds them from the exponent
connection.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Convert between radical and rational-exponent forms, evaluate
   roots with integer and rational exponents, and simplify radical
   expressions to simplified radical form (including rationalizing a
   single-term denominator). (A-SSE.1.a; track objective 5 in part)
2. Graph square-root and cube-root functions by hand in simple cases,
   state domain, range, starting/center point, intercepts, intervals
   of increase, and end behavior, and describe the effect of
   transformations on the graph. (F-IF.7.b, F-IF.4, F-IF.5; track
   objective 5)
3. Solve radical equations in one variable by isolating the radical
   and raising to the matching power, including equations with two
   radicals, and detect and explain extraneous solutions by checking
   in the original equation. (A-REI.2; track objective 5)
4. Create and solve radical equations from contexts (fall time,
   pendulum period, cube volume), state domain and unit restrictions
   before solving, and reject context-forbidden answers for a stated
   reason. (A-CED.1, A-CED.2, N-Q.1, N-Q.3; track objectives 5, 14)
5. Fit square-root and cube-root models to data, compare them with
   linear and exponential candidates using increments and residuals,
   and defend the choice in writing. (F-IF.4, F-IF.6, A-CED.2;
   track objectives 5, 13, 14)

## Vocabulary

radical, index, radicand, rational exponent, simplified radical
form, rationalizing the denominator, principal root, even index, odd
index, starting point, center point, domain, range, end behavior,
extraneous solution, isolate, power (verb: to raise to a power),
check (in the original equation), period, pendulum, rate of change,
increment, residual, model selection.

## Standards and source notes

Reference framework: Common Core State Standards for Mathematics, High
School Algebra and Functions (codes and descriptions verified against
the published domain pages at thecorestandards.org during the track
audit, 2026-10-07; descriptions here are paraphrases). This unit
addresses:

- **A-REI.2** — solve simple rational and radical equations in one
  variable, and give examples showing how extraneous solutions may
  arise (Lessons 04–05, project).
- **F-IF.7.b** — graph square root, cube root, and piecewise-defined
  functions, including step and absolute value functions (Lessons
  02–03; piecewise/step/absolute-value graphing is not this unit's
  focus and is not claimed here beyond the root functions).
- **F-IF.4** — interpret key features of graphs: intercepts,
  increasing/decreasing/positive/negative intervals, symmetries, end
  behavior (Lessons 02–03, 06).
- **F-IF.5** — relate a function's domain to its graph and to the
  quantitative relationship it describes (Lessons 02–05: even-index
  domains, pendulum/fall-time viability).
- **F-IF.6** — calculate and interpret the average rate of change of
  a function over a specified interval (Lesson 06: decreasing
  increments of a root model).
- **A-CED.1** — create equations in one variable and use them to solve
  problems (Lessons 04–05, project).
- **A-CED.2** — create equations in two variables to represent
  relationships between quantities, and graph them (Lessons 02–03,
  06, project).
- **A-SSE.1.a** — interpret parts of an expression (terms, factors,
  coefficients) in context (Lesson 01: index, radicand, exponent).
- **N-Q.1, N-Q.3** — use units to guide multi-step solutions; choose
  a level of accuracy appropriate to measurement limits (Lessons
  04–06, project: seconds, meters, rounding to the measuring tool).

No state adoption, accreditation, or alignment certification is
claimed. All standard descriptions are paraphrases of the published
framework text.

## Materials

Paper and pencil; graph paper; a graphing calculator or the free
Desmos graphing calculator (no account required for the web
calculator); a stopwatch (phone stopwatch is fine) and a string with a
small weight (a washer or key) for the optional home pendulum
experiment — adult-supervised, small swing angles, nothing breakable
in the swing path; the generated illustration
[`assets/pendulum-measurement-scene.png`](assets/pendulum-measurement-scene.png)
and the exact plotted graph
[`assets/root-graphs.svg`](assets/root-graphs.svg). The simulation
alternative (PhET Pendulum Lab) needs no materials at all. No other
lab materials, no sharp tools, no data collection from other people.

## Session pacing (20 sessions, ~50 minutes each)

Five sessions per week; each names the activity and its success
criterion. Lessons carry explicit teaching; practice sessions carry
the repetition. Nothing here assumes the learner has seen a radical
function before.

| Week | Session | Activity | Success criterion |
|---|---|---|---|
| 15 — Roots as exponents; square-root graphs | S1 | Lesson 01: rational exponents, radical notation, simplification, rationalizing | Learner converts both ways between radical and exponent form and simplifies two radicals, one with variables |
| 15 | S2 | Practice Set A | Simplification and evaluation items correct; the sum-of-roots error named and avoided |
| 15 | S3 | Lesson 02: square-root graphs, transformations, domain/range, key features (uses the exact SVG graph) | Learner graphs one transformed square-root function by hand and states its domain, range, and starting point |
| 15 | S4 | Practice Set B | Graph-feature items correct; hand sketches match technology checks on domain, range, and starting point |
| 15 | S5 | Review + catch-up: Week 15 material; error-analysis cards | Learner corrects one flawed simplification and one flawed domain statement in writing |
| 16 — Cube-root graphs; radical equations | S6 | Lesson 03: cube-root graphs, comparing root families, roots as inverses | Learner graphs one cube-root function by hand and explains why its domain differs from a square root's |
| 16 | S7 | Practice Set C | Cube-root graph items correct; inverse pairs (cube/cube-root, square/square-root on x ≥ 0) stated correctly |
| 16 | S8 | Lesson 04: radical equations — isolate, power, check; extraneous solutions explained | Learner solves one radical equation, rejects one extraneous solution, and explains what squaring erased |
| 16 | S9 | Practice Set D | Equation items correct; every candidate checked in the original equation, none skipped |
| 16 | S10 | Review + project studio (Part 1): choose the pendulum route (home experiment, simulation, or provided data); define quantities and units | Route and quantity definitions approved by the adult; domain restrictions stated in context |
| 17 — Two radicals, applications, models | S11 | Lesson 05: equations with two radicals; fall-time and pendulum applications; cube-root equations (uses the generated illustration) | Learner solves one two-radical equation and one context equation, with domain stated before solving |
| 17 | S12 | Practice Set E | Two-radical and application items correct; context-forbidden answers rejected for a stated reason |
| 17 | S13 | Lesson 06: fitting root models to data; increments, residuals, model selection | Learner fits a square-root model to a small dataset and defends it against a linear candidate in writing |
| 17 | S14 | Practice Set F + project studio (Part 2): build the model; graph it; write the technical memo | Project model, graph, and memo match on domain, units, and context meaning |
| 17 | S15 | Review + catch-up: Weeks 15–17 consolidation; project on track | Retrieval items correct; project Part 2 draft complete |
| 18 — Midyear review and assessment | S16 | Synthesis workshop: mixed error-analysis; Units 01–04 connections (transformations, inverses, polynomial zeros, rational restrictions, radical checks) | Learner corrects a flawed equation chain and states one connection per earlier unit |
| 18 | S17 | Project gallery + adult critique | Project complete; critique addressed or logged |
| 18 | S18 | **Week-17 formative quiz** (given in Week 18) + reteach | Quiz scored; reteach plan recorded |
| 18 | S19 | **Unit assessment** (Parts A–C, including cumulative retrieval) | Assessment completed; unit closed |
| 18 | S20 | Flex: catch-up buffer, extension tasks, or Unit 05 preview (exponential and logarithmic functions) | Outstanding items finished or scheduled |

The formative quiz is named for Week 17, the last content week; it is
given in Week 18 so the review week opens with evidence, not with new
teaching. If the learner is not yet secure on an objective after
Session 19, use the diagnostic/catch-up guidance in the
[teacher guide](teacher-guide.md) before starting Unit 05 — the
track's flexible weeks exist for exactly this.

## Unit contents

- [`lessons/`](lessons/) — six fully written lessons (goal, time
  estimate, materials, readiness check, explicit teaching, two modeled
  examples, guided and independent practice, application, exit check,
  supports, extension, teacher note with misconceptions, answer-key
  reference)
- [`practice.md`](practice.md) — Practice Sets A–F referenced in the
  pacing above
- [`project.md`](project.md) — the Pendulum Period investigation
  with rubric
- [`resource-pack.md`](resource-pack.md) — verified Resource Pack
  (queries, videos/search links, references with check dates, task
  mapping)
- [`assessments/week-17_quiz.md`](assessments/week-17_quiz.md) —
  formative quiz
- [`assessments/unit-assessment.md`](assessments/unit-assessment.md) —
  culminating assessment with scoring guidance
- [`teacher-guide.md`](teacher-guide.md) — session guidance,
  misconceptions, reteaching, readiness criteria
- [`answer-key.md`](answer-key.md) — acceptable responses and worked
  guidance for every practice, quiz, assessment, and project item
  (kept separate from student materials)
- [`assets/`](assets/) — the generated teaching illustration with alt
  text, caption, text alternative, and generation record, plus the
  exact plotted SVG graph

## Accessibility

All graph-reading tasks name the feature in words as well as in a
sketch, so a learner who cannot sketch precisely can still state the
domain, range, and starting point. The generated illustration is
paired with a text-only alternative that carries every fact its
activity question needs. The pendulum investigation offers three
routes (home experiment, simulation, provided data) so motor,
vision, or materials limits never block the modeling work. Graphing
technology is a checking tool throughout, never the only route to an
answer. Exact values are kept in radical form until a context asks
for a decimal, and then the rounding is tied to the measuring tool
(tenths of a second for a hand stopwatch), not to a calculator's
display.
