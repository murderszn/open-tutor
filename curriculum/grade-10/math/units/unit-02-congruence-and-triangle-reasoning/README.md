# Unit 02 — Congruence, Rigid Motions, and Triangle Reasoning

**Grade 10 · Math · Geometry pathway · Weeks 7–10 of the course year**
(draft, delivered 2026-10-20 for issue #46; not educator-reviewed)

## Overview

Unit 01 taught the learner to define terms precisely and to prove. This
unit answers the question those habits were built for: **how do we know
two shapes are exactly the same — size and shape — without measuring
every part?** The answer is a *rigid motion*: a transformation of the
plane (translation, reflection, rotation, or a composition of them) that
preserves every distance and every angle. Two figures are congruent
exactly when some rigid motion carries one onto the other — no
measuring, no guessing.

The unit proceeds in three movements. First, the learner masters the
three rigid motions — translations and reflections (Lesson 01), then
rotations and compositions (Lesson 02) — as *functions* of the plane,
checking with tracing paper and GeoGebra that distances and angles
survive, and sorting motions by whether they preserve orientation.
Second, the learner defines congruence through rigid motions and earns
the triangle-congruence criteria: SSS and SAS (Lesson 03), then ASA and
AAS (Lesson 04), each *justified by rigid-motion reasoning*, with the
SSA "ambiguous case" as the classic counterexample. Lesson 04 also
proves the perpendicular-bisector equidistance theorem — the proof Unit
01 marked as enrichment ("its full proof needs triangle congruence and
returns in Unit 02"). Third, the learner reasons with triangles: the
interior angle-sum theorem proved with a parallel auxiliary line, the
exterior-angle theorem, base angles of isosceles triangles proved by a
reflection, and CPCTC — applied to angle-chasing with algebra and to a
real surveying situation (Lesson 05).

The essential question running through all four weeks is: **what does a
rigid motion guarantee, and how far can one guarantee take a proof?**

## Prerequisites

- Unit 01 (all of it): precise definitions, construction fluency,
  two-column and paragraph proof with a stated reason for every step,
  and the parallel-lines/transversal theorems (alternate interior angles).
- Solving linear equations in one variable (angle-chasing with algebra).
- Reading coordinate grids.

The Weeks 1–2 diagnostic already verified equation solving; this unit
re-teaches it in context where needed. No prior transformation work is
assumed — rigid motions are defined here from the ground up.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. Perform translations, reflections, and rotations on paper and in
   GeoGebra; describe each as a function of the plane; verify by
   measurement and reasoning that each preserves distances and angles;
   and identify lines of symmetry and rotational symmetry (center and
   angle) in rectangles, parallelograms, trapezoids, and regular
   polygons. (G-CO.A.2, G-CO.A.3, G-CO.A.5)
2. Compose rigid motions and describe, in words and on a grid, a
   sequence of transformations that carries one figure onto another;
   predict the single motion equivalent to two reflections across
   parallel lines (a translation) or across intersecting lines (a
   rotation); and distinguish orientation-preserving motions from
   orientation-reversing ones. (G-CO.A.5)
3. State the definition of congruence in terms of rigid motions; use it
   to decide whether two figures are congruent; prove the SSS, SAS,
   ASA, and AAS triangle-congruence criteria by rigid-motion reasoning;
   write triangle-congruence statements with correct correspondence
   order; and explain why SSA does not determine a triangle (the
   ambiguous case). (G-CO.B.6, G-CO.B.7, G-CO.B.8)
4. Prove the perpendicular-bisector theorem (a point is on the
   perpendicular bisector of a segment exactly when it is equidistant
   from the segment's endpoints); prove that the interior angles of a
   triangle sum to 180° and that base angles of an isosceles triangle
   are congruent; and apply CPCTC to draw conclusions from established
   congruences. (G-CO.C.9, G-CO.C.10)
5. Reason with triangles: classify triangles by sides and angles, find
   unknown measures by combining theorems with algebra, and explain in
   writing why measurement and superposition of drawings cannot
   substitute for proof. (G-CO.C.10)

## Vocabulary

transformation, preimage, image, rigid motion (isometry), translation,
vector (directed segment), reflection, line of reflection, rotation,
center of rotation, angle of rotation, direction (clockwise /
counterclockwise), composition of transformations, orientation,
orientation-preserving (direct), orientation-reversing (opposite), line
of symmetry, rotational symmetry, congruent figures, correspondence,
SSS, SAS, ASA, AAS, included side, included angle, CPCTC, ambiguous
case (SSA), perpendicular bisector, equidistant, auxiliary line,
exterior angle, remote interior angles, isosceles triangle, legs, base,
base angles, vertex angle, angle chasing, rigid-motion proof.

## Standards and source notes

Reference framework: Common Core State Standards for Mathematics, High
School Geometry — Congruence domain (descriptions verified against the
published domain page at thecorestandards.org on 2026-10-20; wording
here is paraphrase). This unit addresses:

- **G-CO.A.2** — transformations as functions of the plane; comparing
  distance-and-angle-preserving transformations with those that do not
  (Lessons 01–02; dilation as the non-example).
- **G-CO.A.3** — rotations and reflections carrying rectangles,
  parallelograms, trapezoids, and regular polygons onto themselves
  (Lessons 01–02; symmetry labs).
- **G-CO.A.4** — definitions of rotations, reflections, translations
  in terms of angles, circles, perpendicular lines, parallel lines, and
  segments (Lessons 01–02).
- **G-CO.A.5** — drawing transformed figures; specifying a sequence of
  transformations carrying one figure onto another; composition results
  (Lessons 01–02).
- **G-CO.B.6** — using rigid-motion descriptions to predict effects;
  deciding congruence of two figures via the definition (Lesson 03).
- **G-CO.B.7** — two triangles are congruent iff corresponding pairs of
  sides and angles are congruent (Lesson 03).
- **G-CO.B.8** — how ASA, SAS, and SSS follow from the rigid-motion
  definition of congruence (Lessons 03–04; AAS treated the same way).
- **G-CO.C.9** — points on a perpendicular bisector are exactly those
  equidistant from the segment's endpoints (Lesson 04; completes the
  enrichment thread from Unit 01).
- **G-CO.C.10** — interior angle sum 180°; base angles of isosceles
  triangles congruent (Lesson 05; the midsegment and median-concurrency
  theorems are noted as future work — the midsegment proof needs
  similarity, Unit 03).

No state adoption, accreditation, or alignment certification is claimed.

## Session pacing (20 sessions, ~50 minutes each)

| Week | Session | Activity | Success criterion |
|---|---|---|---|
| 7 — Motions | S1 | Lesson 01: translations, reflections, rigid-motion definition | Learner translates/reflects a triangle on grid, verifies preserved lengths |
| 7 | S2 | Practice Set A + tracing-paper preservation lab | Tracing measurements match originals within 1 mm / 1°; symmetry lines correct |
| 7 | S3 | Lesson 02: rotations, composition, orientation | Learner composes two reflections and names the resulting single motion |
| 7 | S4 | Practice Set B + GeoGebra transformation lab | GeoGebra sequences built; orientation predictions correct |
| 7 | S5 | Review + Week 7 check (practice-set items) | Gaps identified; vocabulary section current |
| 8 — Criteria | S6 | Lesson 03: congruence defined; SSS, SAS; SSA counterexample (+ truss-bridge observation) | Learner explains SSS by rigid motion and draws the SSA ambiguous case |
| 8 | S7 | Practice Set C + criteria-sorting lab | Every congruence claim cites a criterion with correct correspondence |
| 8 | S8 | Lesson 04: ASA, AAS; perpendicular-bisector theorem proved | Learner proves one direction of the bisector theorem |
| 8 | S9 | Practice Set D + proof workshop 1 | Criteria proofs written with a reason per step |
| 8 | S10 | Review + catch-up | Proof format errors corrected; notebook theorems section current |
| 9 — Reasoning | S11 | Lesson 05: angle sum, exterior angle, isosceles base angles, CPCTC | Learner proves angle sum with the parallel auxiliary line |
| 9 | S12 | Practice Set E + angle-chasing lab | Algebra + theorems combined correctly; work shown |
| 9 | S13 | Reading session: Euclid's *Elements*, Book I, Props. 4, 5, 8 (public-domain translation) | Learner compares Euclid's superposition arguments with rigid-motion proofs |
| 9 | S14 | Project studio 1: truss rigidity builds (Part 1) | Triangle vs. quadrilateral deformation observed and recorded |
| 9 | S15 | Project studio 2: truss design + congruence-mapping report (Part 2) | Draft report describes rigid motions mapping truss triangles |
| 10 — Close | S16 | Proof-writing workshop on unit results | Learner revises one criteria proof to full rigor |
| 10 | S17 | Project gallery + adult critique | Builds complete; critique notes addressed or logged |
| 10 | S18 | **Week-09 formative quiz** + reteach | Quiz scored; reteach plan recorded |
| 10 | S19 | **Unit assessment** | Assessment completed; unit closed |
| 10 | S20 | Flex / catch-up + unit closeout | Notebook organized; reflection written |

Lesson sessions (S1, S3, S6, S8, S11) carry the explicit teaching and
modeled reasoning. Practice sessions use `practice.md`. The project
studios use `project.md`. S13 uses any public-domain translation of
Euclid's *Elements*, Book I (the adult locates one — e.g., through
Project Gutenberg — and previews it); Propositions 4 (SAS), 5 (base
angles), and 8 (SSS) are the targets.

## Materials

Notebook with *definitions*, *theorems*, *proofs*, and *vocabulary*
sections (continuing from Unit 01); tracing paper; ruler; protractor;
compass and straightedge; grid paper; scissors; drinking straws or
craft sticks; paper fasteners, pipe cleaners, or brass brads; a device
with a browser for GeoGebra (free, no account). The adult previews all
external resources for advertising and age suitability.

## Accessibility and supports

- Tracing-paper and physical-manipulative alternatives for every
  transformation task; GeoGebra available but never required.
- Large-print grid option; high-contrast marking for preimage (blue)
  and image (red) conventions.
- Proof skeletons (statement column pre-filled) for learners who need
  the format scaffolded; paragraph-proof option always allowed.
- Oral explanation accepted for exit checks; the adult scribes if
  needed.
- Extension: directed-angle chasing, the reflection composition proofs
  (why 2d / 2θ), and the midsegment-theorem preview are marked in the
  teacher guide.

## Assessment summary

- Formative: `assessments/week-09_quiz.md` (30 points), S18.
- Culminating: `assessments/unit-assessment.md` (50 points), S19.
- Project: `project.md` with rubric (24 points), studios S14–S15,
  gallery S17.
- Full solutions in `answer-key.md` (adults only); readiness bands and
  reteach triggers in `teacher-guide.md`.
