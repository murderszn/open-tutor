# Unit 03 — Rational Expressions, Functions, and Asymptotes

**Grade 11 · Math · Algebra II pathway · Weeks 11–14 of the course year**
(draft, delivered 2026-10-22 for issue #50; not educator-reviewed)

## Overview

Unit 01 rebuilt the function as an object you can transform, chain, and
reverse. Unit 02 grew that object into a family — polynomials — whose
zeros determine its shape. This unit divides one polynomial by another,
and the division changes everything: a rational function can be
undefined at some inputs, can approach a line it never reaches, and can
have a hole where a factor cancels. The payoff is a habit that lasts the
whole course: **before you trust a rational expression, a graph, or a
solution, check the domain first — the values that make a denominator
zero are excluded from the start, and they decide asymptotes, holes,
and extraneous solutions.**

The unit runs in four moves:

1. **Rational expressions as fractions** — simplify with the
   rational-number analogy, and carry the domain restrictions with the
   simplified form; a restriction is part of the answer, not a footnote.
2. **Rational arithmetic and division** — add, subtract, multiply, and
   divide rational expressions, and rewrite `a(x)/b(x)` as
   `q(x) + r(x)/b(x)` by polynomial long division; the quotient names
   the slant asymptote.
3. **Graphs from structure** — zeros, vertical asymptotes, holes,
   intercepts, and end behavior, read from the factored form before
   any point is plotted, then checked with graphing technology.
4. **Equations and models** — solve rational equations, show exactly
   how extraneous solutions arise, and model inverse and joint
   variation with unit checks, so a mathematically correct-looking
   answer that the context forbids is rejected for a stated reason.

The essential question running through all four weeks is: **how do the
denominator's zeros — and the degrees of numerator and denominator —
decide where a rational function is undefined, where its graph breaks,
and what it approaches but never reaches?**

## Prerequisites

From Unit 01 (Weeks 3–6), Unit 02 (Weeks 7–10, delivered as a validated
draft in PR #179 and not yet merged, so it is named here in prose
only), and the Weeks 1–2 diagnostics:

- Function notation, domain, and interpreting `f(x)` in context with
  units; justifying each algebraic step (A-REI.1 habit).
- Factoring quadratics and cubics by grouping and special forms;
  polynomial long division is re-taught in Lesson 02, not assumed.
- Polynomial zeros, the Remainder and Factor Theorems, and reading end
  behavior from a factored form.
- Coordinate graphing; reading intercepts and end behavior; using a
  graphing calculator (Desmos) to check a hand sketch, not to replace
  the reasoning behind it.

No prior knowledge of rational functions, asymptotes, or holes is
assumed — this unit builds them from the fraction analogy.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Simplify a rational expression to lowest terms and state its domain
   restrictions explicitly, explaining the rational-number analogy
   (why cancelling a common factor leaves a hole, not a new function).
   (A-APR.7 (+), A-SSE.1.b; track objective 4)
2. Add, subtract, multiply, and divide rational expressions, and
   rewrite `a(x)/b(x)` as `q(x) + r(x)/b(x)` with the degree of `r(x)`
   less than the degree of `b(x)`, using inspection or long division.
   (A-APR.6, A-APR.7 (+); track objective 4)
3. For a rational function in factored form, identify its zeros,
   vertical asymptotes, holes (with coordinates), intercepts, and
   domain, and sketch its graph by hand in simple cases.
   (F-IF.7.d (+), F-IF.4; track objective 4)
4. Determine horizontal and slant asymptotes from degrees and from
   long division, describe end behavior in words and symbols, and
   verify a hand sketch against a technology graph.
   (F-IF.7.d (+), A-APR.6; track objective 4)
5. Solve rational equations in one variable, detect and explain
   extraneous solutions by checking in the original equation, and
   model inverse and joint variation contexts with unit and
   domain-viability checks.
   (A-REI.2, A-CED.1, A-REI.11, N-Q.1, N-Q.2; track objectives 4, 14)

## Vocabulary

rational expression, rational function, numerator, denominator, domain
restriction, excluded value, lowest terms, common factor, hole (removable
discontinuity), vertical asymptote, horizontal asymptote, slant
(oblique) asymptote, end behavior, degree, leading coefficient,
quotient, remainder, long division, extraneous solution, inverse
variation, joint variation, constant of variation, viable solution,
branch (of a graph).

## Standards and source notes

Reference framework: Common Core State Standards for Mathematics, High
School Algebra and Functions (codes and descriptions verified against
the published domain pages at thecorestandards.org during the track
audit, 2026-10-07; descriptions here are paraphrases). This unit
addresses:

- **A-SSE.1.b** — interpret complicated expressions by viewing one or
  more of their parts as a single entity (Lesson 01: a rational
  expression as one fraction with a numerator and a denominator).
- **A-APR.6** — rewrite simple rational expressions in different forms:
  write `a(x)/b(x)` as `q(x) + r(x)/b(x)` with the degree of `r(x)`
  less than the degree of `b(x)`, using inspection, long division, or
  a computer algebra system for the harder cases (Lesson 02, Lesson 04).
- **A-APR.7 (+)** — rational expressions form a system analogous to
  the rational numbers, closed under addition, subtraction,
  multiplication, and division by a nonzero rational expression; add,
  subtract, multiply, and divide rational expressions (Lessons 01–02).
  (+) in the published document; taught here as core, as the track
  audit states, since rational simplification is an Algebra II staple.
- **A-REI.2** — solve simple rational and radical equations in one
  variable, and give examples showing how extraneous solutions may
  arise (Lesson 05).
- **A-REI.11** — the x-coordinates of the points where the graphs of
  `y = f(x)` and `y = g(x)` intersect are the solutions of `f(x) =
  g(x)`; find solutions approximately with technology (Lesson 05,
  project).
- **A-CED.1** — create equations in one variable and use them to solve
  problems, including equations from simple rational functions
  (Lesson 05, project).
- **F-IF.4** — interpret key features of graphs: intercepts,
  increasing/decreasing/positive/negative intervals, symmetries, end
  behavior (Lessons 03–04).
- **F-IF.7.d (+)** — graph rational functions, identifying zeros and
  asymptotes when suitable factorizations are available, and showing
  end behavior (Lessons 03–04). (+) in the published document.
- **N-Q.1, N-Q.2** — use units to understand and guide multi-step
  solutions; define appropriate quantities for descriptive modeling
  (Lesson 05, project).

No state adoption, accreditation, or alignment certification is
claimed. All standard descriptions are paraphrases of the published
framework text.

## Materials

Paper and pencil; a graphing calculator or the free Desmos graphing
calculator (no account required for the web calculator); graph paper;
the generated illustration
[`assets/asymptote-study-scene.png`](assets/asymptote-study-scene.png)
and the exact plotted graph
[`assets/rational-graph.svg`](assets/rational-graph.svg). No lab
materials, no sharp tools, no data collection from other people.

## Session pacing (20 sessions, ~50 minutes each)

Five sessions per week; each names the activity and its success
criterion. Lessons carry explicit teaching; practice sessions carry
the repetition. Nothing here assumes the learner has seen a rational
function before.

| Week | Session | Activity | Success criterion |
|---|---|---|---|
| 11 — Fractions of polynomials | S1 | Lesson 01: rational expressions as fractions; simplify; domain restrictions; the rational-number analogy | Learner simplifies two rational expressions and states every restriction, including one that survives cancelling |
| 11 | S2 | Practice Set A | Simplification items correct; no restriction dropped after cancelling |
| 11 | S3 | Lesson 02: add, subtract, multiply, divide; rewrite by long division | Learner adds one pair with unlike denominators and rewrites one improper rational expression by long division |
| 11 | S4 | Practice Set B | Arithmetic and division items correct; quotients and remainders verified by multiplying back |
| 11 | S5 | Review + catch-up: Week 11 material; error-analysis cards | Learner corrects one flawed simplification chain in writing, naming the dropped restriction |
| 12 — Breaks, holes, and branches | S6 | Lesson 03: zeros, vertical asymptotes, holes, intercepts, domain (uses the generated illustration) | Learner finds the zeros, asymptotes, holes, and intercepts of one factored rational function |
| 12 | S7 | Practice Set C | Feature-finding items correct; holes distinguished from vertical asymptotes by the cancelled factor |
| 12 | S8 | Lesson 04: horizontal and slant asymptotes; end behavior; hand sketch vs. technology check (uses the exact SVG graph) | Learner determines the asymptote type from degrees, finds a slant asymptote by division, and sketches one function by hand |
| 12 | S9 | Practice Set D | Asymptote and sketch items correct; hand sketches match technology checks on key features |
| 12 | S10 | Review + project studio (Part 1): choose the modelled situation; define quantities and units | Situation and quantity definitions approved by the adult; domain restrictions stated in context |
| 13 — Equations and models | S11 | Lesson 05: rational equations; extraneous solutions; inverse and joint variation | Learner solves one rational equation, rejects one extraneous solution with a check, and writes one variation model |
| 13 | S12 | Practice Set E | Equation and variation items correct; every solution checked in the original equation |
| 13 | S13 | Reading: Resource Pack references (Paul's Online Notes, LibreTexts) — the graphing process, restated in the learner's own words | Learner restates the five-step graphing process without copying, and applies it to one new function |
| 13 | S14 | Project studio (Part 2): build the rational model; graph it; write the technical memo | Project model, graph, and memo match on domain, asymptotes, and context meaning |
| 13 | S15 | Review + catch-up: Weeks 11–13 consolidation; project on track | Unit 01–03 retrieval items correct; project Part 2 draft complete |
| 14 — Workshop and assessment | S16 | Synthesis workshop: mixed error-analysis; Unit 02–03 connections (polynomial zeros vs. rational zeros and asymptotes) | Learner corrects a flawed asymptote chain and states one U02–U03 connection |
| 14 | S17 | Project gallery + adult critique | Project complete; critique addressed or logged |
| 14 | S18 | **Week-14 formative quiz** + reteach | Quiz scored; reteach plan recorded |
| 14 | S19 | **Unit assessment** | Assessment completed; unit closed |
| 14 | S20 | Flex: catch-up buffer, extension tasks, or U04 preview (radical functions) | Outstanding items finished or scheduled |

Weeks 11–13 introduce and practice; Week 14 (track week 14) is the
review week: games, re-teaching, the formative check, and the
culminating assessment. If the learner is not yet secure on an
objective after Session 19, use the diagnostic/catch-up guidance in
the [teacher guide](teacher-guide.md) before starting Unit 04 — the
track's flexible weeks exist for exactly this.

## Unit contents

- [`lessons/`](lessons/) — five fully written lessons (goal, time
  estimate, materials, readiness check, explicit teaching, two modeled
  examples, guided and independent practice, application, exit check,
  supports, extension, teacher note with misconceptions, answer-key
  reference)
- [`practice.md`](practice.md) — Practice Sets A–E referenced in the
  pacing above
- [`project.md`](project.md) — the Average-Cost Studio investigation
  with rubric
- [`resource-pack.md`](resource-pack.md) — verified Resource Pack
  (queries, videos/search links, references with check dates, task
  mapping)
- [`assessments/week-14_quiz.md`](assessments/week-14_quiz.md) —
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

Every lesson states its goal in plain language before symbols appear;
graph-reading tasks always have a table-of-values alternative, and
asymptotes are described in words ("the graph climbs without bound
near x = -3") as well as in symbols. Color is never the only cue in
the SVG (asymptotes are dashed red lines with text labels; branches
are solid dark lines). The generated illustration ships with a
text-only alternative containing every feature the activity needs.
Desmos's audio-trace and keyboard entry are named as alternatives to
hand sketching where a learner needs them; the reasoning — factor,
restrict, read the degrees — is the same either way.
