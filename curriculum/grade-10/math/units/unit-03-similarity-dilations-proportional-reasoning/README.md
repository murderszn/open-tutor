# Unit 03 — Similarity: Dilations and Proportional Reasoning

**Grade 10 · Math · Geometry pathway · Weeks 11–14 of the course year**
(draft, delivered 2026-10-27 for issue #46; not educator-reviewed)

## Overview

Unit 02 taught the learner to decide whether two figures are *exactly*
the same by rigid motions. This unit answers the next question: **how
do we know two figures have exactly the same shape, even when their
sizes differ?** The answer is a *similarity transformation*: a rigid
motion followed by a *dilation* — a transformation that scales every
distance from a fixed center by one scale factor. Two figures are
similar exactly when some similarity transformation carries one onto
the other.

The unit proceeds in four movements. First, the learner masters
dilations — center, scale factor, and image properties (Lesson 01) —
and then defines similarity through similarity transformations,
checking corresponding angles and proportional sides (Lesson 02).
Second, the learner earns the workhorse criteria: the AA criterion for
triangle similarity and the triangle-proportionality (side-splitter)
theorem with its converse, then uses similarity to prove the
Pythagorean Theorem in a new way (Lesson 03). Third, the learner
applies similarity to the world: indirect measurement by shadow and
mirror, scale drawings and maps, and the area and volume consequences
of scaling (Lesson 04, with the unit's generated illustration).
Fourth, the learner returns to coordinates and proves that slope is
well defined — the slope between any two points of a line is the same,
because the rise-and-run triangles are similar — and uses similarity
to prove the midsegment theorem that Unit 02 left as future work
(Lesson 05).

The essential question running through all four weeks is: **what
stays the same when size changes, and what does that sameness let us
measure, prove, and build?**

## Prerequisites

- Unit 01 (all of it): precise definitions, construction fluency,
  two-column and paragraph proof with a stated reason for every step,
  and the parallel-lines/transversal theorems.
- Unit 02 (all of it): rigid motions as functions of the plane, the
  rigid-motion definition of congruence, the SSS/SAS/ASA/AAS criteria,
  the interior angle-sum theorem (180°), and CPCTC.
- Solving linear equations and proportions in one variable; the
  Pythagorean Theorem (proved in Unit 01's framework and re-proved
  here by similarity); coordinate graphing, slope from two points,
  and the distance formula.
- Reading a protractor and a ruler; measuring to the nearest
  millimetre. (The Weeks 1–2 diagnostic already verified equation
  solving and coordinate graphing; this unit re-teaches proportions
  in context where needed.)

No prior work with dilations, similarity, scale drawings, or
trigonometric ratios is assumed — dilations and similarity are
defined here from the ground up, and trigonometric ratios are
Unit 04's new content, not this unit's.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Perform dilations with a given center and scale factor on paper
   and in GeoGebra; state and use the image properties — a dilation
   sends a line not through the center to a parallel line, leaves a
   line through the center unchanged, and scales every segment length
   by the scale factor. (G-SRT.A.1)
2. State the definition of similarity in terms of similarity
   transformations; decide whether two figures are similar; for
   triangles, check that corresponding angles are equal and
   corresponding sides are proportional, with correspondence stated
   in the correct order. (G-SRT.A.2)
3. Establish and use the AA criterion for triangle similarity; prove
   the triangle-proportionality theorem and its converse; prove the
   Pythagorean Theorem using triangle similarity; and use congruence
   and similarity criteria to solve problems and prove relationships
   in figures. (G-SRT.A.3, G-SRT.B.4, G-SRT.B.5)
4. Solve applied similarity problems: indirect measurement by shadow
   or mirror, scale drawings and maps with stated scales, and area
   and volume scale relationships (area scales by k², volume by k³);
   choose units and a level of accuracy appropriate to the
   measurement limits. (G-SRT.B.5, N-Q.1, N-Q.2, N-Q.3)
5. Prove, using similar triangles, that slope is constant along a
   nonvertical line; prove the slope criteria for parallel lines
   (equal slopes) and perpendicular lines (slopes are negative
   reciprocals); and prove the midsegment theorem by similarity.
   (G-GPE.5, G-SRT.B.5)

## Vocabulary

dilation, center of dilation, scale factor (k), enlargement,
reduction, image, preimage, similarity transformation, similar
figures, correspondence, corresponding angles, corresponding sides,
proportional sides, scale factor of a similarity, AA criterion,
triangle-proportionality theorem (side-splitter theorem), converse,
indirect measurement, scale drawing, map scale, area scale factor,
volume scale factor, slope, rise, run, midsegment, altitude to the
hypotenuse, geometric mean (as a relationship, not a new operation).

## Standards and source notes

Reference framework: Common Core State Standards for Mathematics,
High School Geometry — Similarity, Right Triangles, and Trigonometry
(G-SRT), Expressing Geometric Properties with Equations (G-GPE), and
Number and Quantity (N-Q). Descriptions here are paraphrases of the
published standards; the G-SRT domain page was re-checked on
2026-10-27 and the full crosswalk was verified against the published
domain pages on 2026-10-07 (see the track scope-and-sequence). This
unit addresses:

- **G-SRT.A.1.a** — a dilation takes a line not passing through the
  center to a parallel line and leaves a line passing through the
  center unchanged (Lesson 01).
- **G-SRT.A.1.b** — a dilation scales a line segment by the scale
  factor (Lesson 01; verified experimentally with center and scale
  factor, then used throughout).
- **G-SRT.A.2** — decide similarity of two figures by similarity
  transformations; triangles are similar exactly when corresponding
  angles are equal and corresponding sides are proportional
  (Lesson 02).
- **G-SRT.A.3** — establish the AA criterion for triangle similarity
  (Lesson 03).
- **G-SRT.B.4** — prove triangle theorems including the
  triangle-proportionality theorem and its converse, and the
  Pythagorean Theorem proved using similarity (Lesson 03).
- **G-SRT.B.5** — use congruence and similarity criteria to solve
  problems and prove relationships in figures (Lessons 03–05, the
  project, and both assessments).
- **G-GPE.5** — prove the slope criteria for parallel and
  perpendicular lines and use them in geometric problems
  (Lesson 05).
- **N-Q.1, N-Q.2, N-Q.3** — use units to guide multi-step solutions;
  define appropriate quantities for descriptive modeling; choose a
  level of accuracy appropriate to measurement limits (Lesson 04,
  the project).

G-SRT.C.6–C.8 (trigonometric ratios) and G-SRT.D.9–D.11 (+) are
Unit 04 content and are **not** taught here; this unit never asks a
learner to compute a sine, cosine, or tangent. No state adoption,
accreditation, or alignment certification is claimed.

## Session pacing (20 sessions, ~50 minutes each)

| Week | Session | Activity | Success criterion |
|---|---|---|---|
| 11 — Dilations | S1 | Lesson 01: dilations, center, scale factor, image properties | Learner dilates a triangle from a stated center and checks lengths scale by k |
| 11 | S2 | Practice Set A + dilation lab (tracing paper / GeoGebra) | Dilation images drawn and measured; line-image properties verified |
| 11 | S3 | Lesson 02: similarity defined; corresponding angles and proportional sides | Learner tests two figures for similarity with correspondence stated in order |
| 11 | S4 | Practice Set B + similarity-sorting lab | Every similarity claim cites both the angle check and the side-ratio check |
| 11 | S5 | Review + Week 11 check (practice-set items) | Gaps identified; vocabulary section current |
| 12 — Criteria | S6 | Lesson 03: AA criterion; triangle-proportionality theorem and converse; Pythagoras by similarity | Learner proves one direction of the side-splitter theorem and the Pythagoras-by-similarity argument |
| 12 | S7 | Practice Set C + proof workshop 1 | Criteria proofs written with a reason per step |
| 12 | S8 | Reading session: Euclid's *Elements*, Book VI, Props. 2 and 4 (public-domain translation) | Learner compares Euclid's proportion language with modern similarity language |
| 12 | S9 | Practice Set C continued + error-analysis lab | Common correspondence and converse errors identified and corrected |
| 12 | S10 | Review + catch-up | Proof-format errors corrected; notebook theorems section current |
| 13 — Applications | S11 | Lesson 04: indirect measurement, scale drawings, area/volume scaling (+ shadow illustration) | Learner sets up a correct proportion for an indirect measurement and states its accuracy limits |
| 13 | S12 | Practice Set D + measurement lab (shadow or mirror, outdoors or photographed) | Measurements recorded with units; computed heights checked against a second method |
| 13 | S13 | Project studio 1: indirect-measurement investigation (Part 1 — fieldwork and scale model) | Data table complete; scale model built to a stated scale |
| 13 | S14 | Project studio 2: investigation report (Part 2 — proportion, accuracy, and critique) | Draft report justifies the proportion and names its error sources |
| 13 | S15 | Review + Week 13 check | Application errors corrected; project draft complete |
| 14 — Close | S16 | Lesson 05: slope via similar triangles; slope criteria; midsegment theorem | Learner proves slope is constant on a line and proves the midsegment theorem |
| 14 | S17 | Practice Set E + proof workshop 2 | Coordinate proofs written with similarity reasoning, not measurement alone |
| 14 | S18 | **Week-13 formative quiz** + reteach | Quiz scored; reteach plan recorded |
| 14 | S19 | **Unit assessment** | Assessment completed; unit closed |
| 14 | S20 | Flex / catch-up + unit closeout | Notebook organized; reflection written |

Lesson sessions (S1, S3, S6, S11, S16) carry the explicit teaching
and modeled reasoning. Practice sessions use `practice.md`. The
project studios use `project.md`. S8 uses any public-domain
translation of Euclid's *Elements*, Book VI (the adult locates one —
e.g., through Project Gutenberg or the Clark University Joyce
edition — and previews it); Proposition 2 is the side-splitter
theorem in Euclid's language, Proposition 4 is that equiangular
triangles have proportional sides.

## Materials

Notebook with *definitions*, *theorems*, *proofs*, and *vocabulary*
sections (continuing from Units 01–02); tracing paper; ruler;
protractor; compass and straightedge; grid paper; scissors; a
measuring tape (or metre stick) and a straight stick or dowel for
outdoor measurement; a small flat mirror (optional, for the mirror
method); a camera or phone for the photographed alternative; a
device with a browser for GeoGebra (free, no account). The adult
previews all external resources for advertising and age suitability.
Outdoor work is adult-supervised; never measure near traffic, and
never look toward the sun — shadow measurements use the shadow on
the ground, not the sun itself.

## Accessibility and supports

- Tracing-paper, grid-paper, and physical-manipulative alternatives
  for every dilation and similarity task; GeoGebra available but
  never required.
- Large-print grid option; high-contrast marking for preimage
  (blue) and image (red) in every diagram.
- Every diagram-based question has a text-only alternative stated
  in the lesson; the generated illustration in Lesson 04 is never
  used for measurement.
- Proportions may be set up with a ratio table before cross
  multiplication; calculator use is allowed for arithmetic, never
  as a substitute for setting up the proportion.
- Extension tasks are marked and optional; they never gate the
  core objectives.

## Differentiated supports and extensions

- **Support:** start each lesson's practice with a worked example
  re-done by the learner with changed numbers; use a ratio table
  (preimage side | image side | ratio) for every similarity check
  until the checks are fluent.
- **Support:** for proof writing, supply the reason bank (AA,
  side-splitter, converse, angle sum, vertical angles, parallel-line
  theorems) and let the learner choose reasons before writing
  reasons from memory.
- **Extension:** prove the SSS and SAS similarity criteria from
  the dilation definition; derive the geometric-mean relationships
  in a right triangle (altitude to the hypotenuse); prove the
  angle-bisector theorem using the side-splitter theorem.
- **Extension:** research how map projections distort scale (why a
  single map scale cannot hold everywhere on a world map) and
  write a one-page critique of a scale claim in an advertisement.

## How this unit connects

- **From Unit 02:** congruence was "same shape *and* same size" by
  rigid motion. Similarity keeps the shape and drops the size
  requirement by adding one dilation. The midsegment theorem, which
  Unit 02 noted as future work, is proved here (Lesson 05).
- **To Unit 04:** similar right triangles are the reason
  trigonometric ratios are well defined: the ratio of two sides
  depends only on the acute angle, not on the triangle's size.
  Nothing in this unit requires those ratios.
- **To Unit 05:** the slope criteria proved here (Lesson 05) are
  reused for coordinate proofs about quadrilaterals.
