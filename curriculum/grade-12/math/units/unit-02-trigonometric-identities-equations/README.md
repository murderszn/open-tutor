# Unit 02 — Trigonometric Identities, Equations, and Applications

**Grade 12 · Math · Precalculus pathway · Weeks 7–10 of the course year**
(draft, delivered 2026-10-21 for issue #54; not educator-reviewed, not merged)

## Overview

Algebra II taught the learner to *evaluate* trigonometric functions. This
unit teaches the learner to *reason* with them: to prove that two
expressions are the same function in disguise, to undo a trigonometric
function honestly (only after restricting its domain), to solve equations
whose solutions repeat forever and then to select exactly the ones a
situation asks for, and to turn a tide table or a rotating wheel into a
model whose parameters mean something. The unit's central habit is
**justify every step**: an identity proof is a chain of reasons, not a
sequence of lucky rewrites, and an equation's solution set is checked,
not assumed.

The unit runs in six moves:

1. **The identity toolkit** — Pythagorean, reciprocal, quotient,
   cofunction, and even/odd identities proved from the unit circle and
   used to simplify expressions and find exact values.
2. **Sum and difference formulas** — `cos(A − B)` proved from the
   distance formula on the unit circle; sine and tangent formulas derived
   from it; exact values for 15°, 75°, and 105°.
3. **Double-angle and half-angle identities** — derived as corollaries
   of the sum formulas, with the sign care half-angle work demands and
   power-reducing forms for rewriting powers.
4. **Inverse trigonometric functions** — restricted domains, principal
   values, and exact compositions such as `sin(arccos(3/5))`.
5. **Solving trigonometric equations** — reference angles, factoring,
   identities that reduce an equation to a solvable form, multiple angles,
   and the extraneous solutions squaring can introduce.
6. **Periodic applications and proof workshop** — lighthouse
   angle-of-elevation work from a generated illustration, a Ferris-wheel
   model, tide-window solving, and a written proof portfolio.

The essential question running through all four weeks is: **when two
trigonometric expressions look different, how do we prove they are the
same — and when an equation has infinitely many solutions, which ones
does the situation actually want?**

## Prerequisites

From Unit 01 (advanced function analysis; draft PR #172 — its files are
not yet on `main`, so this unit re-states every prerequisite it needs
rather than linking to them) and the Weeks 1–2 diagnostics:

- The unit circle, radian measure, and exact values for 0°, 30°, 45°,
  60°, 90° and their multiples; sine, cosine, and tangent graphs with
  amplitude, period, and midline.
- Function composition, decomposition, and inverses; restricting a
  domain to produce an invertible function (Unit 01, Lesson 03).
- Polynomial factoring, including difference of squares; solving
  quadratic equations by factoring; checking solutions in the original
  equation (extraneous solutions).
- Written justification of every solution step (A-REI.1); Desmos fluency;
  choosing and interpreting units (N-Q.1, N-Q.2).

The unit assumes no prior fluency with sum/difference, double-angle, or
half-angle identities, inverse trigonometric functions, or trigonometric
equations — those are this unit's new content. Vectors, parametric, and
polar forms (Unit 03) are not used here.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Prove and apply the Pythagorean, reciprocal, quotient, cofunction,
   and even/odd identities; simplify trigonometric expressions with a
   justification at each step; and state exact values for special
   angles. (F-TF.3 (+), F-TF.4 (+), F-TF.8; track objective 3)
2. Prove the sum and difference formulas for sine, cosine, and tangent,
   and derive double-angle, half-angle, and power-reducing identities
   as corollaries; use them to find exact values and to simplify
   expressions. (F-TF.9 (+); track objective 3)
3. Evaluate inverse trigonometric functions using restricted domains
   and principal values, and evaluate compositions such as
   `sin(arccos x)` exactly by triangle reasoning. (F-TF.6 (+),
   F-BF.4.d (+); track objective 4)
4. Solve trigonometric equations over stated intervals, including
   factored, identity-reduced, and multiple-angle forms; check every
   candidate in the original equation and discard extraneous solutions.
   (F-TF.7 (+), A-REI.1; track objective 4)
5. Build periodic models for tides, rotation, and oscillation from
   amplitude, period, midline, and phase; solve model equations for
   times and values; and defend a conclusion in writing with the model's
   assumptions stated. (F-TF.7 (+), F-IF.7.e, N-Q.1, N-Q.2; track
   objective 4)

## Vocabulary

identity, conditional equation, Pythagorean identity, reciprocal
identity, quotient identity, cofunction, even function, odd function,
sum/difference formula, double-angle identity, half-angle identity,
power-reducing identity, restricted domain, principal value, inverse
sine (arcsine), inverse cosine (arccosine), inverse tangent (arctangent),
reference angle, general solution, extraneous solution, amplitude,
period, midline, phase shift, sinusoidal model.

## Standards and source notes

Reference framework: **Common Core State Standards for Mathematics**,
high school conceptual categories. Codes below were verified against
the official framework text on thecorestandards.org by the track audit
runs on 2026-10-07 and 2026-10-08; descriptions here are plain-language
paraphrases, not reproductions. Codes marked **(+)** are advanced in the
published document; where this unit teaches one, the marking is stated.
No state adoption, accreditation, or alignment certification is claimed.

- **F-TF.3 (+)** — values of the trigonometric functions for special
  angles (30°, 45°, 60°) from the unit circle and special triangles.
- **F-TF.4 (+)** — symmetry and periodicity of trigonometric functions
  from the unit circle: `sin(−θ) = −sin θ`, `cos(−θ) = cos θ`,
  `sin(θ + 2π) = sin θ`, and cofunction relations.
- **F-TF.6 (+)** — restricting a trigonometric function to a domain on
  which it is always increasing or always decreasing, so that its inverse
  exists; the inverse's range is that restricted domain.
- **F-TF.7 (+)** — using inverse functions to solve trigonometric
  equations that arise in modeling contexts; evaluating solutions with
  technology where exact values are unavailable.
- **F-TF.8** — proving the Pythagorean identity
  `sin²θ + cos²θ = 1` and using it to find trigonometric values given
  one value and a quadrant.
- **F-TF.9 (+)** — proving the addition and subtraction formulas for
  sine, cosine, and tangent and using them to solve problems. (The audit
  corroborated F-TF.9 on 2026-10-08 against multiple official-text
  reproductions because the framework site's F-TF page was behind a
  request-verification wall that day.)
- **F-BF.4.d (+)** — producing an invertible function by restricting the
  domain, applied here to inverse trigonometric functions.
- **F-IF.7.e** — graphing exponential and logarithmic functions is the
  published text; the trigonometric graphing practiced here (sine/cosine
  with amplitude, period, midline) is the F-IF.7.d (+) target reviewed in
  Unit 01 and reused in Lesson 06.
- **A-REI.1** — explaining each step in solving an equation as following
  from the equality of numbers asserted at the previous step.
- **N-Q.1, N-Q.2** — using units to understand problems and to guide
  multi-step solutions; defining appropriate quantities for modeling.

Exact-value table (used in every lesson; angles in degrees and radians):

| angle | 0° / 0 | 30° / π/6 | 45° / π/4 | 60° / π/3 | 90° / π/2 |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan | 0 | √3/3 | 1 | √3 | undefined |

## Pacing (20 sessions, ~50 minutes each)

| Session | Activity | Success criterion |
|---|---|---|
| S1 (Wk 7) | Lesson 01 — identity toolkit | Simplifies 4 of 5 expressions with a reason per step |
| S2 | Practice clinic — Practice Set A | Finds a missing value from one value plus a quadrant, without sign errors |
| S3 | Lesson 02 — sum and difference | Derives `sin(A − B)` from `cos(A − B)`; finds `cos 15°` exactly |
| S4 | Practice clinic — Practice Set B | Finds two exact values by splitting an angle, showing the split |
| S5 | Reading/reference — identity tables; OpenStax 7.1–7.2 | Rebuilds the toolkit from the unit circle without notes |
| S6 (Wk 8) | Lesson 03 — double-angle and half-angle | Derives all three `cos 2θ` forms; resolves a half-angle sign by quadrant |
| S7 | Practice clinic — Practice Set C | Rewrites a power with a power-reducing identity |
| S8 | Lesson 04 — inverse trigonometric functions | States domains/ranges from memory; evaluates 4 of 5 compositions |
| S9 | Practice clinic — Practice Set D | Explains why `arcsin(sin x)` is not always `x` |
| S10 | Project studio 1 — tide data analysis | Identifies midline, amplitude, period from the project table |
| S11 (Wk 9) | Lesson 05 — solving trigonometric equations | Solves factored and multiple-angle equations over `[0, 2π)` completely |
| S12 | Practice clinic — Practice Set E | Detects and discards an extraneous solution, with the check shown |
| S13 | Lesson 06 — periodic applications, proof workshop | Solves the lighthouse and Ferris-wheel problems; drafts two proofs |
| S14 | Practice clinic — Practice Set F; image-activity debrief | Interprets every model parameter in the situation's words |
| S15 | Project studio 2 — tide-window solving | Writes the safe-passage windows with the inequality solved and checked |
| S16 | Project studio 3 — project writing and rubric self-check | Draft meets every rubric row; assumptions stated |
| S17 | Mixed practice — Practice Set G; review | Scores at least 80% on the mixed set before the quiz |
| S18 (Wk 10) | Formative quiz (assessments/week-10_quiz.md) | Adult scores same day; every error classified and one of each type re-worked |
| S19 | Culminating assessment (assessments/unit-assessment.md) | All five objectives sampled; open responses justified in writing |
| S20 | Review-and-reteach; unit debrief | Learner names strongest and weakest objective; reteach plan set for Unit 03 |

## Files in this unit

- `README.md` (this file) — overview, pacing, objectives, standards.
- `lessons/lesson-01-identity-toolkit.md` through
  `lessons/lesson-06-periodic-applications-proof-workshop.md` — six fully
  written lessons.
- `practice.md` — Practice Sets A–G.
- `project.md` — Harbor tide model investigation with a 40-point rubric.
- `resource-pack.md` — verified Resource Pack.
- `assessments/week-10_quiz.md` — formative quiz (10 items, 20 points).
- `assessments/unit-assessment.md` — culminating assessment (6 tasks,
  50 points).
- `teacher-guide.md` — adult-only pacing, misconception, and reteach notes
  (no answer key inside).
- `answer-key.md` — adults-only worked solutions for every scored item.
- `assets/lighthouse-trig-scene.png` — generated illustration used in
  Lesson 06, with `assets/README.md` (prompt, tool, date, factual
  review, alt text, caption, text-only alternative).

**Teacher materials are adults-only.** Student pages link to
`teacher-guide.md` and `answer-key.md` only with that label, and the
learner never works from the key. Planned later units (Unit 03: vectors,
parametric, polar) are named in prose only; no links to unwritten files
exist in this unit.
