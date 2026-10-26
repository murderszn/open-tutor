# Unit 02 — Polynomial Functions, Zeros, and Complex Numbers

**Grade 11 · Math · Algebra II pathway · Weeks 7–10 of the course year**
(draft, delivered 2026-10-15 for issue #50; not educator-reviewed)

## Overview

Unit 01 rebuilt the function as an object you can transform, chain, and
reverse. This unit grows that object into a *family*: polynomials. The
moves are the same ones a mathematician would make — invent a number to
close a gap, factor a structure apart, read a graph from its zeros —
and the payoff is a habit that lasts the whole course: **the zeros of
a polynomial, even the nonreal ones, determine the function's shape.**

The unit runs in four moves:

1. **Complex numbers invented** — why `i² = −1` exists, the `a + bi`
   form, and arithmetic with the one new rule.
2. **Quadratics finished** — every quadratic now has its two solutions;
   conjugates and quotients make the arithmetic complete.
3. **Polynomial structure** — factoring cubics and quartics by grouping
   and special forms; the Remainder and Factor Theorems turn evaluating
   a polynomial into a factoring test.
4. **Zeros read as graphs** — find every zero including complex pairs,
   sketch the graph from zeros and end behavior, and solve `f(x) =
   g(x)` exactly and with technology.

The essential question running through all four weeks is: **how does
knowing a polynomial's zeros — even the ones that aren't real — tell
you the whole shape of its graph?**

## Prerequisites

From Unit 01 (Weeks 3–6) and the Weeks 1–2 diagnostics:

- Function notation, domain, and interpreting `f(x)` in context with
  units.
- Solving quadratics by factoring, completing the square, and the
  quadratic formula.
- Exponent properties; adding, subtracting, multiplying polynomials.
- Coordinate graphing; reading intercepts and end behavior informally.
- Justifying each algebraic step (A-REI.1 habit); unit checks (N-Q.1).

No prior knowledge of complex numbers is assumed — this unit builds
them from scratch.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Write complex numbers in `a + bi` form; add, subtract, and multiply
   them using `i² = −1`; and solve any quadratic equation, writing
   nonreal solutions as `a ± bi`. (N-CN.1, N-CN.2, A-REI.4.b; track
   objective 3)
2. Factor degree-3 and degree-4 polynomials by grouping and by special
   forms (difference of squares, sum/difference of cubes); apply the
   Remainder and Factor Theorems to test factors and divide out linear
   factors. (A-APR.2, A-APR.3, A-SSE.2; track objective 3)
3. Find **all** zeros of a polynomial function — real and complex,
   recognizing conjugate pairs — and sketch a rough graph showing the
   zeros, end behavior, and a valid turning-point count. (A-APR.3,
   F-IF.4, F-IF.7.c; track objective 3)
4. Solve `f(x) = g(x)` exactly where algebra allows and approximately
   with graphing technology; interpret the solution in context and
   check that units and reasonableness hold. (A-REI.11, N-Q.1; track
   objectives 3, 14)

## Vocabulary

imaginary unit `i`, complex number, standard form `a + bi`, real part,
imaginary part, pure imaginary number, complex conjugate, modulus,
polynomial, degree, leading coefficient, constant term, standard form of
a polynomial, monomial term, factor, factored form, zero of a function,
root of an equation, multiplicity, grouping, difference of squares,
sum/difference of cubes, Remainder Theorem, Factor Theorem, synthetic
division (reading knowledge), end behavior, turning point, conjugate
pair, Fundamental Theorem of Algebra (enrichment), Binomial Theorem
(enrichment), identity (enrichment), intersection point, approximate
solution, residuals (preview).

## Standards and source notes

Reference framework: Common Core State Standards for Mathematics, High
School Number & Quantity, Algebra, and Functions (codes and descriptions
verified against the published domain pages at thecorestandards.org
during the track audit, 2026-10-07; thecorestandards.org landing
re-checked 2026-10-14; descriptions here are paraphrases). This unit
addresses:

- **N-CN.1** — know `i` with `i² = −1`; every complex number has the
  form `a + bi` with real `a`, `b` (Lesson 01).
- **N-CN.2** — add, subtract, multiply complex numbers using `i² =
  −1` and the field properties (Lessons 01–02).
- **N-CN.3 (+)** — conjugates; use them to find quotients of complex
  numbers (Lesson 02; enrichment).
- **N-CN.8 (+)** — extend polynomial identities to the complex numbers,
  e.g. `x² + 4 = (x + 2i)(x − 2i)` (Lessons 02–04; enrichment).
- **N-CN.9 (+)** — the Fundamental Theorem of Algebra; verified here
  for quadratic polynomials (Lesson 04; enrichment).
- **A-SSE.1.a, A-SSE.1.b** — interpret parts of polynomial expressions
  and view subexpressions as single entities (Lesson 03).
- **A-SSE.2** — use expression structure to find rewrites (grouping,
  special forms) (Lesson 03).
- **A-SSE.3.a** — factor quadratics to reveal zeros (prerequisite
  fluency, extended in Lessons 03–04).
- **A-APR.2** — the Remainder Theorem: remainder on division by
  `x − a` is `p(a)`; `p(a) = 0` exactly when `(x − a)` is a factor
  (Lesson 03).
- **A-APR.3** — identify zeros from factorizations and use zeros to
  sketch graphs (Lessons 03–04).
- **A-APR.4** — polynomial identities as numerical relationships
  (Lesson 03; enrichment).
- **A-APR.5 (+)** — the Binomial Theorem with Pascal's Triangle
  coefficients (Lesson 03 reading; enrichment).
- **A-CED.1** — create equations in one variable for modeled contexts
  (Lesson 05).
- **A-REI.4.b** — solve quadratics by all methods; recognize when the
  formula gives complex solutions written as `a ± bi` (Lesson 02).
- **A-REI.11** — solutions of `f(x) = g(x)` are intersection
  x-coordinates; find them approximately with technology (Lesson 05).
- **F-IF.4** — key features of graphs: intercepts, extrema, end
  behavior (Lesson 04).
- **F-IF.7.c** — graph polynomial functions, identifying zeros when
  factorizations are available and showing end behavior (Lesson 04).
- **N-Q.1** — units in modeled solutions (Lesson 05; project).

No state adoption, accreditation, or alignment certification is
claimed. All standard descriptions are paraphrases of the published
framework text.

## Session pacing (20 sessions, ~50 minutes each)

Five sessions per week; each names the activity and its success
criterion. Lessons carry explicit teaching; practice sessions carry
the repetition. Nothing here assumes the learner has seen complex
numbers before.

| Week | Session | Activity | Success criterion |
|---|---|---|---|
| 7 — The invented number | S1 | Lesson 01: why `i² = −1`; `a + bi` form; adding, subtracting, multiplying | Learner converts radicals of negatives to `bi` form and computes two complex products correctly |
| 7 | S2 | Practice Set A | Complex arithmetic items correct; `i² = −1` applied at the right step |
| 7 | S3 | Lesson 02: quadratics with complex solutions; conjugates and quotients (enrichment) | Learner solves two quadratics to `a ± bi` and divides one complex pair |
| 7 | S4 | Practice Set B | Quadratic solutions verified by substitution; conjugate products recognized as real |
| 7 | S5 | Review + catch-up: Weeks 7 material; error-analysis cards | Learner corrects one flawed complex-arithmetic chain in writing |
| 8 — Structure | S6 | Lesson 03: factoring by grouping and special forms; Remainder and Factor Theorems | Learner factors one cubic by grouping and tests one candidate factor with the Remainder Theorem |
| 8 | S7 | Practice Set C | Factoring complete; at least one Remainder Theorem test shown |
| 8 | S8 | Reading: binomial identities reference (enrichment); identities as number facts | Learner states the Binomial Theorem for `n = 3` in words and checks one identity numerically |
| 8 | S9 | Project studio (Part 1): choose the modeled situation; draft the polynomial | Situation and quantity definitions approved by the adult; degree and zero requirements recorded |
| 8 | S10 | Review + catch-up: Weeks 7–8 consolidation; project on track | Unit-01→02 retrieval items correct; project Part 1 draft complete |
| 9 — Zeros as graphs | S11 | Lesson 04: all zeros including complex pairs; rough graphs from zeros; end behavior; turning points | Learner finds all zeros of one cubic and sketches its graph with correct end behavior |
| 9 | S12 | Practice Set D | Zero-finding and sketching items correct; complex zeros listed as conjugate pairs |
| 9 | S13 | Lesson 05: solving `f(x) = g(x)` exactly and approximately; contexts with unit checks | Learner solves one intersection exactly and one approximately, both checked |
| 9 | S14 | Practice Set E | Intersection items correct; technology solutions verified by substitution |
| 9 | S15 | Review + project studio (Part 2): graph the design; write the technical memo | Project graph matches the polynomial's zeros and end behavior |
| 10 — Workshop and assessment | S16 | Synthesis workshop: mixed error-analysis; Unit 01↔02 connections (transformations of polynomial graphs) | Learner corrects a flawed zero-finding chain and states one U01–U02 connection |
| 10 | S17 | Project gallery + adult critique | Project complete; critique addressed or logged |
| 10 | S18 | **Week-10 formative quiz** + reteach | Quiz scored; reteach plan recorded |
| 10 | S19 | **Unit assessment** | Assessment completed; unit closed |
| 10 | S20 | Flex: catch-up buffer, extension tasks, or U03 preview | Outstanding items finished or scheduled |

Lesson sessions (S1, S3, S6, S11, S13) carry the explicit teaching and
worked examples. Practice sets (S2, S4, S7, S12, S14) are in
`practice.md`. The reading session (S8) uses `resource-pack.md`
materials. Project studios (S9, S15, S17) build `project.md`. The
formative check in Week 10 is `assessments/week-10_quiz.md`; the
culminating assessment is `assessments/unit-assessment.md`. All answers
live in `answer-key.md` (never beside student questions); teaching
notes live in `teacher-guide.md`.

## Differentiated supports (unit-wide)

- **Reading/language access:** key terms defined in context at first
  use; the adult reads worked-example reasoning aloud on request;
  vocabulary cards for the 24 terms above.
- **Alternate response modes:** rough sketches may be described
  verbally to the adult; complex arithmetic may be shown with
  color-coded real/imaginary parts; graphing may be done in Desmos
  instead of by hand after one hand sketch per graph type.
- **Extensions:** N-CN.3 quotient fluency, the Binomial Theorem
  (A-APR.5) in S8, polynomial identities (A-APR.4), the Fundamental
  Theorem of Algebra for quadratics (N-CN.9), and modulus geometry on
  the complex plane — all marked **enrichment** and never required
  for the unit's core objectives.
- **Reteach triggers:** if Practice Set A shows insecure `i² = −1`
  use, repeat Lesson 01's worked examples before Lesson 02; if
  factoring stalls in S6–S7, the adult reviews grade-9 factoring of
  quadratics (a prerequisite) before S11.
