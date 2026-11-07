# Unit 05 — Scale Drawings, Angles, and Geometric Constructions

**Grade:** 7 · **Subject:** Mathematics · **Track weeks:** 20–23
**Backlog:** [issue #34](https://github.com/murderszn/open-tutor/issues/34), section U05
**Status:** validated draft (this unit); not educator-reviewed, not merged

A drawing of a garden is not the garden — but if the scale is honest,
every length on the page tells the truth about a length in the soil.
This unit teaches the learner to move between a drawing and the real
thing in both directions (actual lengths and areas from a scale, and a
new drawing at a different scale), to construct triangles from given
conditions and judge whether those conditions pin down one triangle,
several, or none, and to use complementary, supplementary, vertical,
and adjacent angle facts to write and solve equations for unknown
angles. The geometry here is deliberately hands-on: ruler, protractor,
compass, and graph paper, with GeoGebra as the technology option for
constructions.

## Essential question

When a drawing, a construction, or an angle diagram gives you some
measures and hides others, which facts let you find the hidden ones —
and when do the given facts leave the answer genuinely undetermined?

## Prerequisites

From the diagnostic weeks (track weeks 1–2), the grade 6 track, and
Units 01–04:

- The four operations on rational numbers, including decimals and
  fractions (Unit 01); unit rates and proportional relationships
  (Unit 02) — a scale is a proportional relationship between drawn
  and actual lengths
- Percent as a rate per 100 (Unit 03) — not used computationally
  here, but the "name the base" discipline carries over: name the
  scale before computing
- Linear expressions and equations of the forms px + q = r and
  p(x + q) = r, and inequalities graphed on a number line (Unit 04)
  — angle equations in Lessons 05–06 are solved with exactly these
  tools
- Grade 6 geometry: area of triangles, quadrilaterals, and polygons
  by composing and decomposing; volume and surface area of
  rectangular prisms; angles measured with a protractor; the
  coordinate plane
- Writing a worked solution with a reason check (track routine)

No circle formulas are required. Circumference and area of circles
wait for Unit 06.

## Measurable objectives

By the end of the unit the learner will be able to:

1. Compute actual lengths and areas from a scale drawing, and
   reproduce a scale drawing at a different scale (track objective 13;
   7.G.A.1).
2. Draw geometric figures freehand, with ruler and protractor, and
   with technology from given conditions; for triangles, decide
   whether three measures determine a unique triangle, more than one
   triangle, or no triangle (track objective 14; 7.G.A.2).
3. Use facts about supplementary, complementary, vertical, and
   adjacent angles in multi-step problems to write and solve simple
   equations for an unknown angle (track objective 15; 7.G.B.5).

## Vocabulary

scale · scale drawing · scale factor · actual length · drawn length ·
reproduce (at a different scale) · construction · ruler · protractor ·
compass · triangle inequality · unique triangle · angle · vertex ·
complementary angles · supplementary angles · vertical angles ·
adjacent angles · straight angle · right angle · equation ·
similar (same shape, different size) · included side · included angle

## Standards and source notes

Reference framework: **Common Core State Standards for Mathematics**,
grade 7, Geometry domain, as published at
[thecorestandards.org/Math/Content/7/G](https://www.thecorestandards.org/Math/Content/7/G/)
(codes and descriptions cross-checked against the official domain page
during the A00 audit, 2026-10-05, and re-confirmed live 2026-11-07;
no state adoption or accreditation claimed). Descriptions below are
paraphrases of the official wording.

| Unit objective | Standard | Official description (paraphrased) |
|---|---|---|
| 1 | 7.G.A.1 | Solve problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing and reproducing a scale drawing at a different scale. |
| 2 | 7.G.A.2 | Draw (freehand, with ruler and protractor, and with technology) geometric shapes with given conditions. Focus on constructing triangles from three measures of angles or sides, noticing when the conditions determine a unique triangle, more than one triangle, or no triangle. |
| 3 | 7.G.B.5 | Use facts about supplementary, complementary, vertical, and adjacent angles in a multi-step problem to write and solve simple equations for an unknown angle in a figure. |

Conventions fixed by this unit (adult, note them before Session 1):
a scale is always written "drawing unit = actual unit" (for example,
1 cm = 2 m) and the two units must match the quantities being
converted; area scales by the *square* of the linear scale factor;
angle measures in a drawing are never scaled — a 50° angle in a scale
drawing is 50° in the real figure; a triangle exists only when the sum
of any two side lengths is greater than the third; all lengths, areas,
and prices in lessons and assessments are fictional practice data, not
real measurements.

## Materials

The generated illustration
[`assets/garden-scale-activity.png`](assets/garden-scale-activity.png)
(a top-down community-garden plan with four planting beds, a shed, and
a compost bin; alt text, caption, and a text-only measurement table in
Lesson 01), the deterministic angle-pairs diagram
[`assets/angle-pairs-diagram.svg`](assets/angle-pairs-diagram.svg)
(exact angle values, with a data table in Lesson 04), paper, pencils,
a ruler, a protractor, a compass, graph paper, scissors, and the
legacy files
[`../../assignments/geometry-scale-drawing-studio.md`](../../assignments/geometry-scale-drawing-studio.md)
and
[`../../assignments/triangle-spotting-field-lab.md`](../../assignments/triangle-spotting-field-lab.md),
rebuilt here as the Session 11/13 project and the Lesson 03 warm-up
with keys, a rubric, and explicit directions replacing the dead
"Shared spec" references. GeoGebra (free, no account needed for the
geometry tools) is the technology option for constructions; see the
[resource pack](resource-pack.md).

## 16-session pacing (4 weeks × 4 sessions, 45 minutes each)

Four 45-minute sessions per week, matching the track session model.
Core lessons are Sessions 1, 3, 5, 7, 9, and 12; the other sessions are
guided practice, reference reading, the project, review, and
assessments. The project runs across Sessions 11 and 13 and is submitted
with the Session 16 assessment.

| Session | Week | Type | Content |
|---|---|---|---|
| 1 | 20 | Lesson | [L1 — Scale drawings: actual lengths](lessons/lesson-01-scale-drawings-actual-lengths.md): reading a scale; drawn × scale factor = actual; the garden image activity (text alternative provided) |
| 2 | 20 | Practice | Scale-length computations with reason checks (P1–P4) |
| 3 | 20 | Lesson | [L2 — Scale areas and a different scale](lessons/lesson-02-scale-areas-different-scale.md): area scales by the square of the factor; reproducing a drawing at a new scale |
| 4 | 20 | Practice | Area and re-scaling bank (P5–P8); `math_fundamentals.md` geometry reference reading (scale and angle sections only) |
| 5 | 21 | Lesson | [L3 — Drawing triangles: one, many, or none](lessons/lesson-03-drawing-triangles-uniqueness.md): SSS/SAS/ASA uniqueness, the ambiguous case, the triangle inequality; triangle-spotting warm-up |
| 6 | 21 | Practice | Triangle-conditions bank (P9–P12) |
| 7 | 21 | Lesson | [L4 — Angle pairs](lessons/lesson-04-angle-pairs.md): complementary, supplementary, vertical, adjacent; the deterministic SVG diagram |
| 8 | 21 | Practice | Angle-pair bank (P13–P16); misconception clinic (vertical vs. adjacent) |
| 9 | 22 | Lesson | [L5 — Writing equations for unknown angles](lessons/lesson-05-angle-equations.md): complementary/supplementary/vertical equations solved with Unit 04 tools |
| 10 | 22 | Practice | Angle-equation bank (P17–P20); retrieval practice (scale lengths, triangle conditions) |
| 11 | 22 | Project | Scale-Drawing Studio, part 1: choose a scale, draw the room, place furniture and the triangular feature |
| 12 | 22 | Lesson | [L6 — Multi-step geometry problems](lessons/lesson-06-multi-step-geometry-problems.md): scale + angles together; error analysis |
| 13 | 23 | Project | Scale-Drawing Studio, part 2: perimeter, area, angle check, change note, write-up |
| 14 | 23 | Review | Mixed review of objectives 1–3; retrieval practice; misconception re-check |
| 15 | 23 | Quiz | [Week-23 formative quiz](assessments/week-23_quiz.md) (10 items, objectives 1–3) |
| 16 | 23 | Assessment | [Unit assessment](assessments/unit-assessment.md) (12 items) + project submitted |

## How this unit reuses and repairs legacy material

- `assignments/geometry-scale-drawing-studio.md` — its room-layout
  design (draw to scale, label sides, compute perimeter and decomposed
  area, write a change note) becomes the Session 11/13 project, now
  with a 20-point rubric, a worked exemplar, a triangular feature,
  and a protractor angle check the original lacked.
- `assignments/triangle-spotting-field-lab.md` — its find-and-classify
  checklist becomes the Lesson 03 warm-up, with the dead "Shared spec"
  reference replaced by explicit directions in the lesson and a
  construction task added (draw one spotted triangle to scale).
- `quizzes/geometry-angles-quiz.md` — its 20 near-identical
  supplementary-angle items are retired as a bank and rewritten here
  as the Lesson 04–05 practice, the week-23 quiz, and the unit
  assessment, now covering complementary, vertical, and adjacent
  angles plus angle-equation items, with full keys.
- `resources/math_fundamentals.md` — its geometry quick-checks support
  Session 4 reference reading (scale and angle sections only);
  explanations here are written for grade 7, not copied from that
  guide.
- `assignments/golden-ratio.md` — optional enrichment only; not
  required by any lesson. The adult previews its interactives before
  assigning (see the audit).

## Assessments and keys

- [Formative quiz](assessments/week-23_quiz.md) (Session 15) and
  [unit assessment](assessments/unit-assessment.md) (Session 16),
  each matched to objectives 1–3.
- [Scale-Drawing Studio](project.md) with deliverables and a
  20-point rubric.
- [Teacher guide](teacher-guide.md) (pacing notes, misconception clinic,
  reteach triggers) and a fully solved [answer key](answer-key.md) —
  every lesson exercise, practice item, quiz, and assessment question is
  solved independently there. Never place the key beside a student
  question.
- [Resource pack](resource-pack.md): verified references (checked
  2026-11-07), labeled video search links, and task-to-resource mappings.

## Accessibility and safety

All activities are paper-based; the garden image activity ships with a
text-only measurement table carrying the same numbers (do not measure
the screen image — print size varies), and the angle diagram ships
with a data table. Ruler, protractor, and compass work can be done
with large-print graph paper, a talking ruler app, or adult-scribed
measurements; constructions may be done in GeoGebra instead of by
hand. Adult supervises compass and scissor use. Outdoor
triangle-spotting is adult-accompanied; sketches must exclude private
information (faces, addresses, license plates). No lab materials, no
hazards, no accounts, no learner data leaves the household. All
measurements are fictional practice data, so no family home information
is required or recorded.
