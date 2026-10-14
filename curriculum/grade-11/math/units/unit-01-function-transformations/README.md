# Unit 01 — Function Transformations, Composition, and Inverses

**Grade 11 · Math · Algebra II pathway · Weeks 3–6 of the course year**
(draft, delivered 2026-10-14 for issue #50; not educator-reviewed)

## Overview

Algebra I treated a function as a rule you evaluated. This unit rebuilds
that rule into an object you can *operate on*: shift and stretch its graph,
chain functions together the way a two-stage machine chains processes, and
run a function backwards through its inverse. The work is deliberate
symbolic practice with a prediction habit — say what the graph or the
composition should do *before* computing or graphing, then verify.

The unit runs in four moves:

1. **The function concept rebuilt** — domain, range, notation, and what
   `f(x)` says in a real situation; domain–graph–situation connections;
   even and odd symmetry.
2. **Transformations** — predicting and verifying the graph effects of
   `f(x) + k`, `kf(x)`, `f(kx)`, and `f(x + k)`; the counterintuitive
   direction of horizontal changes; how key features move with the graph.
3. **Composition** — two-stage models built from context; why order
   matters; decomposing a composite into its stages; reading where two
   graphs meet (an early look at solving `f(x) = g(x)`).
4. **Inverses** — solving `f(x) = c`, writing the inverse of a simple
   invertible function, verifying a pair by composition, and interpreting
   an inverse's meaning in context.

The essential question running through all four weeks is: **what stays
the same, and what changes, when a function goes through a transformation,
gets chained to another function, or gets reversed?**

## Prerequisites

From the grade-9 Algebra I pathway (Weeks 1–2 diagnostics verify these;
the unit re-teaches insecure skills in context):

- Solving linear equations and inequalities with a justification at each
  step; classifying one / infinitely many / no solutions.
- Function notation: evaluating `f(a)`, interpreting statements like
  `f(2) = 5` in a table, graph, or situation.
- Coordinate graphing: plotting points, reading intercepts, recognizing
  linear, quadratic, and exponential shapes.
- Exponent properties and rational exponents; solving simple quadratics by
  factoring and the quadratic formula.
- Units: choosing and interpreting units in a modeling context (N-Q.1).

No complex numbers, logarithms, or trigonometry are assumed — those are
later units' work.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Predict the effect on a graph of replacing `f(x)` by `f(x) + k`,
   `kf(x)`, `f(kx)`, and `f(x + k)` for specific positive and negative
   values of `k`, and verify each prediction with a graphing tool or a
   hand-computed table; find `k` when given the graphs of `f` and the
   transformed function. (F-BF.3; track objective 1)
2. Identify even and odd functions from graphs and from expressions
   (verifying `f(−x) = f(x)` or `f(−x) = −f(x)` algebraically), and
   explain the symmetry each one shows. (F-BF.3; track objective 1)
3. Build a composite function `(f∘g)(x)` from a two-stage context,
   compute composites in both orders, explain why the order matters,
   and decompose a given composite into two plausible stage functions.
   (F-BF.1.c; track objective 2)
4. Solve `f(x) = c` for simple functions, write the inverse of an
   invertible linear, power, and square-root function, verify an
   inverse pair by composition `f(f⁻¹(x)) = f⁻¹(f(x)) = x`, and
   interpret the inverse's meaning — including its domain and units —
   in a real situation. (F-BF.4.a; track objective 2)
5. Justify each algebraic step in solving an equation from the equality
   asserted at the previous step (A-REI.1), and use units to check that
   a modeled answer is reasonable (N-Q.1).

## Vocabulary

function, domain, range, input, output, function notation, independent
variable, dependent variable, parent function, transformation, translation
(shift), vertical shift, horizontal shift, vertical stretch, vertical
compression, horizontal stretch, horizontal compression, reflection,
even function, odd function, symmetry, composition of functions,
`f∘g`, order of composition, inverse function, `f⁻¹`, one-to-one,
horizontal line test, average rate of change, intersection point,
extraneous context check (domain and unit check), table, graph, key
features, intercept, vertex, maximum/minimum, asymptote (previewed).

## Standards and source notes

Reference framework: Common Core State Standards for Mathematics, High
School Functions and Algebra (codes and descriptions re-verified against
the published domain pages at thecorestandards.org during the track
audit, 2026-10-07; thecorestandards.org landing re-checked 2026-10-14;
descriptions here are paraphrases). This unit addresses:

- **F-IF.1** — a function assigns exactly one output to each domain
  element; `f(x)` names the output for input `x` (Lesson 01).
- **F-IF.2** — function notation: evaluate and interpret
  notation-based statements in context (Lessons 01, 04, 05).
- **F-IF.4** — key features of graphs: intercepts, relative
  extrema, symmetries, end behavior (Lessons 01–03; how features move
  under transformation).
- **F-IF.5** — relate domain to graph and situation (Lessons 01, 05;
  inverses inherit domain restrictions).
- **F-IF.7** — graph functions symbolically, by hand in simple cases
  and with technology for complicated ones (Lessons 02–03).
- **F-IF.9** — compare properties of two functions in different
  representations (Lessons 03–05; practice and assessments).
- **F-BF.1.b** — combine standard function types with arithmetic
  operations (enrichment, Lessons 04–05; project).
- **F-BF.1.c (+)** — compose functions (Lesson 04; core).
- **F-BF.3** — identify the effect on the graph of replacing `f(x)` by
  `f(x) + k`, `kf(x)`, `f(kx)`, `f(x + k)`; find `k` given graphs;
  even/odd recognition (Lessons 02–03; core).
- **F-BF.4.a** — solve `f(x) = c` and write inverses of simple
  invertible functions (Lesson 05; core).
- **F-BF.4.c (+)** — read values of an inverse function from a graph
  or table (Lesson 05; enrichment).
- **A-REI.7** — solve a linear–quadratic system algebraically and
  graphically (Lesson 04; intersection preview).
- **A-REI.11** — the x-coordinates where `y = f(x)` and `y = g(x)`
  intersect solve `f(x) = g(x)` (Lesson 04; preview with technology).
- **A-SSE.1.a, A-SSE.1.b** — interpret parts of expressions and view
  parts as single entities (Lessons 04–05; decomposition reads).
- **N-Q.1** — use units to understand and guide multi-step solutions
  (Lessons 01, 04, 05; project).

No state adoption, accreditation, or alignment certification is claimed.

## Session pacing (20 sessions, ~50 minutes each)

| Week | Session | Activity | Success criterion |
|---|---|---|---|
| 3 — The function, rebuilt | S1 | Lesson 01: domain, range, notation; even/odd symmetry preview | Learner evaluates/interprets `f(x)` in context and classifies two functions as even, odd, or neither with reasoning |
| 3 | S2 | Practice Set A + function-notebook setup | Notation interpreted correctly; notebook definitions complete |
| 3 | S3 | Lesson 02: vertical shifts and vertical scaling; predict-then-verify | Learner predicts `f(x)+k` / `kf(x)` graphs before graphing, then verifies; finds `k` from a pair of graphs |
| 3 | S4 | Practice Set B + Desmos prediction lab | ≥80% of pre-graph predictions correct; verification logged |
| 3 | S5 | Review + Week-3 check (selected Practice A/B items) | Gaps named; transformation vocabulary in the notebook |
| 4 — Horizontal changes | S6 | Lesson 03: `f(kx)` and `f(x+k)`; the horizontal direction rule; even/odd algebraically | Learner explains why horizontal shifts "feel backwards" in own words; classifies even/odd from expressions |
| 4 | S7 | Practice Set C + transformation-mixing lab (SVG diagram study) | Mixed transformations described in correct order; key-feature tracking accurate |
| 4 | S8 | Reading session: function library reference (parent functions and key features, supplied in `resource-pack.md`) | Learner completes the key-feature table for 5 parent functions |
| 4 | S9 | Project Part 1 studio: two-stage machine plan | Machine stages named; composition formulas drafted |
| 4 | S10 | Review + catch-up | Week-4 material consolidated; project on track |
| 5 — Chaining and reversing | S11 | Lesson 04: composition from two-stage contexts; order matters; decomposition; intersection preview | Learner builds `(f∘g)` from a context, shows both orders differ, decomposes one composite |
| 5 | S12 | Practice Set D | Composition, decomposition, and `f(x)=g(x)` intersection items correct |
| 5 | S13 | Lesson 05: inverses — solving `f(x)=c`, writing and verifying inverses, meaning in context | Learner writes and verifies one inverse pair; states domain and units of the inverse |
| 5 | S14 | Practice Set E | Inverse items correct; composition-verification shown |
| 5 | S15 | Review + project studio (Part 2 draft) | Inverse models checked; project parts 1–2 drafted |
| 6 — Workshop and assessment | S16 | Synthesis workshop: chained transformations and inverse chains; error-analysis tasks | Learner corrects a flawed chain-of-reasoning in writing |
| 6 | S17 | Project gallery + adult critique | Project complete; critique addressed or logged |
| 6 | S18 | **Week-04 formative quiz** + reteach | Quiz scored; reteach plan recorded |
| 6 | S19 | **Unit assessment** | Assessment completed; unit closed |
| 6 | S20 | Flex / catch-up + unit closeout | Notebook organized; reflection written |

Lesson sessions (S1, S3, S6, S11, S13) carry the explicit teaching and
modeled reasoning. Practice sessions use `practice.md`. The project
studios (S9, S15, S17) build `project.md`. The reading session (S8) uses
the parent-function reference in `resource-pack.md`. The formative quiz
is `assessments/week-04_quiz.md`; the culminating assessment is
`assessments/unit-assessment.md`. Teacher notes live in
`teacher-guide.md`; all worked solutions are in `answer-key.md`
(adults only — never beside a student question).

## Materials

Notebook (function-library, vocabulary, worked-example sections), pencil,
ruler/graph paper, a calculator, and a browser with the Desmos graphing
calculator (free, no account; the adult previews for advertising). No
paid software. The project needs only paper, a ruler, and the notebook.

## Accessibility and supports

Every lesson lists a reading/language-access support, an alternate
response mode, and an extension. Desmos substitutes for hand-graphing
when motor demands are high; tables substitute for graphs when visual
access is low (domain/range in table form still answers the objective).
Prediction activities may be done orally with the adult recording. See
`teacher-guide.md` for per-lesson differentiation notes.
