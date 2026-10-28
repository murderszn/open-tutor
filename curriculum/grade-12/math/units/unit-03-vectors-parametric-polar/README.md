# Unit 03 — Vectors, Parametric Equations, and Polar Representations

**Grade 12 · Math · Precalculus pathway · Weeks 11–14 of the course year**
(draft, delivered 2026-10-28 for issue #54; not educator-reviewed, not merged)

## Overview

Units 01 and 02 taught the learner to describe a relationship with one
function `y = f(x)` and one angle at a time. This unit breaks that frame
in three deliberate ways. A **vector** carries both a size and a
direction, so a boat's motion and a river's push can be added like
numbers with arrows attached. **Parametric equations** let time, or
another parameter, drive `x` and `y` separately, so a path can loop back
on itself and a moving object can be tracked second by second.
**Polar coordinates** describe a point by how far it is from a pole and
in which direction, which turns circles, cardioids, and roses into short
equations and turns complex multiplication into a rotation and a stretch.

The unit runs in six moves:

1. **Vectors as quantities** — magnitude, direction, components, and
   the unit vector; a vector is not its arrow's starting point.
2. **Vector operations and applications** — addition, subtraction,
   scaling, the dot product and the angle between vectors; velocity,
   force, and displacement problems, including the harbor picture in
   Lesson 02.
3. **Parametric equations** — modeling motion and curves with
   `(x(t), y(t))`; eliminating the parameter; reading direction and
   speed from a parametrization; and the domain restrictions that
   eliminating the parameter can hide.
4. **Polar coordinates** — converting between polar and rectangular
   points and equations; the fact that one point has infinitely many
   polar names.
5. **Polar graphs** — lines, circles, cardioids, limaçons, and roses;
   symmetry tests, zeros, and maxima; reading a graph's shape from its
   equation and checking it with technology.
6. **Complex numbers in polar form** — modulus and argument; geometric
   multiplication, division, powers, and roots; distance and midpoint on
   the complex plane as enrichment; project workshop.

The essential question running through all four weeks is: **when a
single `y = f(x)` cannot say what is happening — because direction
matters, because time matters, or because the shape is round — which
representation says it cleanly, and how do we translate faithfully
between representations?**

## Prerequisites

From Unit 01 (advanced function analysis; draft PR #172 — its files are
not yet on `main`, so this unit re-states every prerequisite it needs
rather than linking to them), Unit 02 (trigonometric identities and
equations; draft PR #225), and the Weeks 1–2 diagnostics:

- The unit circle, radian measure, and exact values for 0°, 30°, 45°,
  60°, 90° and their multiples; sine, cosine, and tangent as ratios in
  a right triangle.
- Solving right triangles; the Pythagorean Theorem; inverse
  trigonometric functions and their principal values (Unit 02,
  Lesson 04), including the quadrant care an arctangent answer needs.
- Function notation, domain and range, and written justification of
  every solution step (A-REI.1); Desmos fluency, including polar and
  parametric modes; choosing and interpreting units (N-Q.1, N-Q.2).
- Complex numbers in rectangular form `a + bi`, including addition,
  subtraction, multiplication, and conjugation, from grade-11 work.

The unit assumes no prior fluency with vectors, parametric equations,
polar coordinates, polar graphs, or complex numbers in polar form —
those are this unit's new content. Sequences and series (Unit 04) are
not used here.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Represent a vector geometrically and in component form `<a, b>`; find
   its magnitude and direction angle, its components from two points,
   and its unit vector; and explain why equal vectors need not share a
   starting point. (N-VM.1 (+), N-VM.2 (+); track objective 5)
2. Add, subtract, and scale vectors geometrically and component-wise;
   compute a dot product and the angle between two vectors; and solve
   velocity, force, and displacement problems with magnitude-direction
   reasoning, including resultant reasoning. (N-VM.3 (+), N-VM.4.a–c (+),
   N-VM.5.a–b (+); track objective 5)
3. Model motion and curves with parametric equations; eliminate the
   parameter to find a rectangular equation with its correct domain and
   direction; and interpret what a parametrization says about motion
   that its rectangular equation alone does not. (No CCSS-M code —
   standard precalculus content, stated honestly; track objective 6)
4. Convert points and equations between polar and rectangular forms;
   graph polar equations for lines, circles, cardioids, limaçons, and
   roses; and use symmetry, zeros, and maxima to predict a graph before
   checking it with technology. (No CCSS-M code — standard precalculus
   content, stated honestly; track objective 6)
5. Represent complex numbers in polar form `r(cos θ + i sin θ)` and
   `r cis θ`; multiply, divide, raise to powers, and find roots
   geometrically; and (enrichment) compute distances and midpoints on
   the complex plane as modulus and average. (N-CN.4 (+), N-CN.5 (+),
   N-CN.6 (+) enrichment; track objective 6)

## Vocabulary

vector, magnitude, direction angle, component form, position vector,
unit vector, scalar multiple, resultant, parallelogram rule, triangle
rule, dot product, orthogonal, parameter, parametric equations,
eliminate the parameter, polar coordinates, pole, polar axis, polar
equation, cardioid, limaçon, rose curve, symmetry test, modulus,
argument, polar form, `cis θ`, De Moivre's Theorem, root of a complex
number, bearing.

## Standards and source notes

Reference framework: **Common Core State Standards for Mathematics**,
high school conceptual categories. Codes below were verified against
the official framework text on thecorestandards.org by the track audit
runs on 2026-10-07 and 2026-10-08; descriptions here are plain-language
paraphrases, not reproductions. Codes marked **(+)** are advanced in
the published document; where this unit teaches one, the marking is
stated. No state adoption, accreditation, or alignment certification
is claimed. Parametric equations and polar graphs have no CCSS-M codes;
they are standard precalculus content and are labeled as such wherever
they appear, not dressed up as standards.

- **N-VM.1 (+)** — recognizing vector quantities as having magnitude
  and direction; representing them by directed line segments with
  appropriate symbols.
- **N-VM.2 (+)** — finding a vector's components by subtracting the
  initial point's coordinates from the terminal point's coordinates.
- **N-VM.3 (+)** — solving problems involving velocity and other
  quantities that can be represented by vectors.
- **N-VM.4.a (+)** — adding vectors end-to-end, component-wise, and by
  the parallelogram rule; the magnitude of a sum is typically not the
  sum of the magnitudes.
- **N-VM.4.b (+)** — given two vectors in magnitude and direction form,
  finding the magnitude and direction of their sum.
- **N-VM.4.c (+)** — understanding vector subtraction `v − w` as
  `v + (−w)`; representing it graphically and component-wise.
- **N-VM.5.a (+)** — representing magnitude and direction form with
  `v = |v| cos θ i + |v| sin θ j`.
- **N-VM.5.b (+)** — computing the magnitude of a vector as a scalar
  multiple and the direction of the resulting vector.
- **N-CN.4 (+)** — representing complex numbers on the complex plane in
  rectangular and polar form, and explaining why the two forms of a
  given number represent the same number.
- **N-CN.5 (+)** — representing addition, subtraction, multiplication,
  and conjugation of complex numbers geometrically on the complex
  plane; using the representation for computation.
- **N-CN.6 (+)** — calculating the distance between numbers in the
  complex plane as the modulus of the difference, and the midpoint of a
  segment as the average of the numbers at its endpoints (enrichment
  here).
- **A-REI.1** — explaining each step in solving an equation as
  following from the previous step; the unit's written-justification
  habit, load-bearing when a parameter is eliminated.
- **N-Q.1, N-Q.2** — using units to understand problems and to guide
  multi-step solutions; defining appropriate quantities for modeling
  (knots, km/h, bearings, and radians vs. degrees are all checked
  explicitly in the lessons).

Reference text: OpenStax *Precalculus 2e*, Chapter 8, "Further
Applications of Trigonometry" — §8.3 Polar Coordinates, §8.4 Polar
Coordinates: Graphs, §8.5 Polar Form of Complex Numbers, §8.6
Parametric Equations, §8.7 Parametric Equations: Graphs, and §8.8
Vectors (section list confirmed from the chapter answer key on
openstax.org, checked 2026-10-28). The unit's explanations are
original; OpenStax is a reference and a reading route, not a source of
copied text.

Exact-value table (used in every lesson; angles in degrees and radians):

| angle | 0° / 0 | 30° / π/6 | 45° / π/4 | 60° / π/3 | 90° / π/2 |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan | 0 | √3/3 | 1 | √3 | undefined |

## Pacing (20 sessions, ~50 minutes each)

| Session | Activity | Success criterion |
|---|---|---|
| S1 (Wk 11) | Lesson 01 — vectors as quantities | Finds magnitude, direction, components, and unit vector for 4 of 5 vectors, with quadrant care |
| S2 | Practice clinic — Practice Set A | Converts fluently among geometric, component, and magnitude-direction forms |
| S3 | Lesson 02 — vector operations and applications | Adds/subtracts/scales vectors both ways; solves a river/boat resultant and a force problem |
| S4 | Practice clinic — Practice Set B; image-activity debrief | Interprets the harbor picture qualitatively and solves its numbered version exactly (6-8-10) |
| S5 | Reading/reference — OpenStax Ch. 8 §§8.8, 8.3; vector tables | Rebuilds the operation rules and conversion formulas from memory |
| S6 (Wk 12) | Lesson 03 — parametric equations | Eliminates a parameter with its domain and direction stated; models a projectile's landing time and place |
| S7 | Practice clinic — Practice Set C | Distinguishes same-trace/different-motion parametrizations; catches a hidden domain restriction |
| S8 | Lesson 04 — polar coordinates | Converts points and equations both ways, including negative `r` and the quadrant rule |
| S9 | Practice clinic — Practice Set D | Names three polar forms of one point; converts a polar equation to a named rectangular curve |
| S10 | Project studio 1 — harbor navigation | Computes the boat's resultant and required heading, with units and a sketch |
| S11 (Wk 13) | Lesson 05 — polar graphs | Predicts cardioid/limaçon/rose shape from the equation, then verifies with Desmos |
| S12 | Practice clinic — Practice Set E | Applies symmetry tests and finds zeros/maxima before graphing |
| S13 | Lesson 06 — complex numbers in polar form | Multiplies/divides/powers complex numbers geometrically; finds all cube roots of a number |
| S14 | Practice clinic — Practice Set F | Converts both ways exactly for special angles; computes a complex-plane distance and midpoint |
| S15 | Project studio 2 — parametric crossing + polar pattern | Writes the crossing model and the pattern equation with a labeled Desmos check |
| S16 | Project studio 3 — project writing and rubric self-check | Draft meets every rubric row; assumptions and units stated |
| S17 | Mixed practice — Practice Set G; review | Scores at least 80% on the mixed set before the quiz |
| S18 (Wk 14) | Formative quiz (assessments/week-14_quiz.md) | Adult scores same day; every error classified and one of each type re-worked |
| S19 | Culminating assessment (assessments/unit-assessment.md) | All five objectives sampled; open responses justified in writing |
| S20 | Review-and-reteach; unit debrief | Learner names strongest and weakest objective; reteach plan set for Unit 04 |

## Files in this unit

- `README.md` (this file) — overview, pacing, objectives, standards.
- `lessons/lesson-01-vectors-magnitude-direction-components.md` through
  `lessons/lesson-06-complex-polar-form-project-workshop.md` — six fully
  written lessons.
- `practice.md` — Practice Sets A–G.
- `project.md` — Harbor navigation, parametric crossing, and polar
  signal-pattern investigation with a 40-point rubric.
- `resource-pack.md` — verified Resource Pack.
- `assessments/week-14_quiz.md` — formative quiz (10 items, 20 points).
- `assessments/unit-assessment.md` — culminating assessment (6 tasks,
  50 points).
- `teacher-guide.md` — adult-only pacing, misconception, and reteach
  notes (no answer key inside).
- `answer-key.md` — adults-only worked solutions for every scored item.
- `assets/harbor-boat-vector-scene.png` — generated illustration used
  in Lesson 02, with `assets/README.md` (prompt, tool, date, factual
  review, alt text, caption, text-only alternative).
- `assets/vector-polar-diagram.svg` — deterministic diagram (vector
  components and a polar grid) for Lesson 01/04 precision work; it
  supplements, and does not replace, the generated illustration.

**Teacher materials are adults-only.** Student pages link to
`teacher-guide.md` and `answer-key.md` only with that label, and the
learner never works from the key. Planned later units (Unit 04:
sequences and series) are named in prose only; no links to unwritten
files exist in this unit.
