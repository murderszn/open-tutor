# Grade 10 Mathematics — Scope and Sequence

Audit section A00 of [issue #46](https://github.com/murderszn/open-tutor/issues/46).
Status: **validated draft** (this document, the track README, and the grade-10
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-07 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-10 hub page | `curriculum/grade-10/README.md` | **New** — created by this run: math track listed as audited draft; science, language arts, social studies listed as planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-10/math/README.md` | **New** — written by this run as a real subject index with course description, 13 measurable objectives, verified standards summary, planned-unit list, and adult guidance |
| Scope and sequence | `curriculum/grade-10/math/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-10/math/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-10/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, or diagnostics exist to keep, revise, or retire |
| Grade-9 math track (#42, audit in open draft PR #106, unmerged) | PR branch | **Prerequisite reference only** — its 14 end-of-year objectives define the entry skills below; no grade-9 lessons copied upward; no learner-facing cross-grade links |
| Same-grade other subjects (#47 science, #48 language arts, #49 social studies) | unaudited | **No reuse** — not yet delivered |
| `resources/math_fundamentals.md` | explicitly grades 4–7 | **Bridge reference only** — integer/fraction fluency warm-ups where grade-9 skills are insecure; never assigned as grade-10 instruction |
| `resources/weights_and_measures.md` | comprehensive conversion reference | **Reuse** — U07/U08 unit-consistency and quantity-definition work (N-Q); the adult checks conversion facts before use |
| `resources/financial_tools_and_principles.md` | self-described grade 8–9 band | **Verify before reuse** — U07 design-cost contexts (e.g., material costs from surface area); the adult verifies any prices, rates, or dates before reuse; educational examples are not investment advice |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/data sources | **Reuse** — U08 probability sampling frames and practice area computations; every dataset task must name columns and units and state whether values are real, rounded, or fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| GeoGebra (geometry), Desmos graphing calculator | free no-account browser tools | **Reuse** — core digital tools for transformations, constructions, triangle solving, and coordinate work; the adult previews for advertising and age suitability |
| `assignments/franchise-business-plan/index.html` (no README on `main`) | shared interactive | **Verify before citing** — an interactive business-plan builder that may supply U07 cost-modeling contexts; not yet reviewed, so it is not recommended until a unit build inspects it |

No answer-key gaps, inaccurate files, or dead links were found in the track —
there is nothing here yet to be inaccurate. The gap is total: no taught
lessons, no assessments, no keys, no diagnostics, no resource packs, and no
teaching images exist anywhere in `curriculum/grade-10/`.

## 2. Prerequisites

Learners typically enter grade-10 math with the grade-9 track's stated
end-of-year objectives (Algebra I pathway, currently in unmerged draft
PR #106):

- Interpreting and rewriting algebraic expressions (terms, factors,
  coefficients) using structure
- Solving linear equations and inequalities in one variable, including
  letter coefficients, with a justification at each step; one /
  infinitely-many / no-solution classification
- Function notation: evaluating, interpreting notation-based statements,
  relating domain to graph and situation
- Linear functions across tables, graphs, equations, and descriptions;
  average rate of change; slope and intercept in context
- Systems of two linear equations solved exactly and approximately;
  elimination justified as producing an equivalent system
- Polynomial operations (add, subtract, multiply); exponent properties
  including rational exponents
- Quadratic factoring and equivalent forms; solving quadratics by
  inspection, square roots, factoring, completing the square, and the
  quadratic formula; deriving the quadratic formula
- Quadratic functions: key features, equivalent forms, transformations,
  comparison across representations
- Sequences and exponential functions; linear vs. exponential growth
- Units-guided multi-step problem solving; univariate summaries and
  bivariate modeling with fitted functions and residual checks
- From grade 8: the Pythagorean Theorem for coordinate-plane distances

The diagnostic weeks (Weeks 1–2) verify these; the track re-teaches insecure
skills in use before assuming them. The audit never assumes fluency with
formal geometric definitions, transformation notation, proof writing,
trigonometric ratios, circle equations, or conditional probability — those are
this track's new content.

## 3. Track objectives

Measurable, adult-assessed by end of year (13 objectives; numbered in the track
README):

1. State precise definitions of angle, circle, perpendicular line, parallel
   line, and line segment from undefined notions of point, line, and
   distance, and distinguish defined terms from undefined notions.
2. Perform translations, reflections, and rotations; distinguish
   distance-and-angle-preserving transformations from others; identify lines
   of symmetry and rotational symmetry in rectangles, parallelograms,
   trapezoids, and regular polygons.
3. Define congruence through rigid motions; use two-column or paragraph
   proofs to justify the ASA, AAS, SSS, and SAS triangle-congruence criteria
   with rigid-motion reasoning; determine whether two figures are congruent.
4. Prove theorems about lines and angles — vertical angles, angles formed
   by a transversal, perpendicular segments — and about triangles: the
   interior angle sum, base angles of isosceles triangles, the midsegment
   theorem, and concurrency of medians.
5. Prove and apply parallelogram theorems (opposite sides and angles
   congruent, diagonals bisecting each other, rectangles' diagonals
   congruent) and use them in synthetic and coordinate proofs.
6. Define similarity through rigid motions followed by dilations; use the AA
   criterion and the triangle-proportionality theorem to prove relationships
   and solve problems involving corresponding angles and proportional sides.
7. Explain sine, cosine, and tangent as ratios determined by similar right
   triangles; relate the sine and cosine of complementary angles.
8. Use trigonometric ratios, the Pythagorean Theorem, and angles of
   elevation and depression to solve applied right-triangle problems; derive
   and apply the laws of sines and cosines to solve general triangles; use
   the area formula (1/2)ab·sin C.
9. Describe relationships among chords, tangents, inscribed and central
   angles, and radii; justify that all circles are similar; construct
   inscribed and circumscribed circles of a triangle and a tangent from an
   exterior point; perform formal constructions (copying segments and
   angles, bisectors, perpendiculars, inscribed regular polygons) and use
   them as proof tools.
10. Derive and use the standard equation of a circle (completing the square
    to find centers and radii); derive the parabola equation from its
    focus/directrix definition; use coordinates to prove geometric facts —
    slope criteria for parallel and perpendicular lines, midpoint-based
    classifications, and perimeter and area on the coordinate plane.
11. Explain and use formulas for circumference, circle area, and the volumes
    of cylinders, pyramids, cones, and spheres; identify 2-D cross-sections
    of 3-D solids and solids generated by rotations; apply geometric methods
    to design problems.
12. Use geometric shapes, measures, and units to model physical objects;
    apply area- and volume-based density; define quantities for descriptive
    modeling; and choose accuracy appropriate to measurement limits.
13. Compute geometric probabilities from length, area, and volume models;
    distinguish independent from dependent events; apply the addition and
    multiplication rules for probability to geometric and other contexts.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, High
School conceptual categories. The G-CO, G-SRT, G-C, G-GPE, G-GMD, and G-MG
domain pages plus the HSS/CP and HSN/Q pages on
[thecorestandards.org](https://www.thecorestandards.org/Math/) were opened
and read 2026-10-07 (live browser; URL pattern
`https://www.thecorestandards.org/Math/Content/HSG/<domain>/`). The first
pass used text-fetch renders that truncated some sub-codes (the same
truncation the grade-9 audit recorded on 2026-10-06); a second full-text
browser read the same day confirmed **every** code below with its official
description, so the crosswalk cites the full published code set.
Descriptions below are paraphrases, not reproductions. No state adoption,
accreditation, or alignment certification claimed.

Standards marked **(+)** are advanced in the published document; the track
teaches them as enrichment where marked.

**Course choice note.** The expansion plan proposes Geometry as the grade-10
pathway. No state or district graduation requirement was specified; this is a
proposed pathway, not a universal requirement. A learner placed in Algebra II
in 10th grade should not use this track as-is. Each unit's build will state
its grade-9 prerequisites explicitly so a guiding adult can re-sequence.

### Geometry: Congruence — U01, U02, U05

- **G-CO.1** — precise definitions of angle, circle, perpendicular line,
  parallel line, and line segment, built on the undefined notions of point,
  line, and distances.
- **G-CO.2** — describe transformations as functions taking plane points to
  plane points; compare transformations that preserve distance and angle
  with those that do not.
- **G-CO.3** — for rectangles, parallelograms, trapezoids, and regular
  polygons, describe the rotations and reflections carrying the figure onto
  itself.
- **G-CO.4** — develop definitions of rotations, reflections, and
  translations in terms of angles, circles, perpendicular and parallel
  lines, and segments.
- **G-CO.5** — draw a figure's image under a given rotation, reflection, or
  translation; specify a sequence of transformations carrying one figure
  onto another.
- **G-CO.6** — use rigid-motion descriptions to transform figures and
  predict effects; decide whether two figures are congruent by the
  rigid-motion definition of congruence.
- **G-CO.7** — show two triangles are congruent exactly when corresponding
  sides and angles are congruent, using the rigid-motion definition.
- **G-CO.8** — explain how the ASA, SAS, and SSS triangle-congruence
  criteria follow from the rigid-motion definition (AAS treated as its
  corollary in U02).
- **G-CO.9** — prove line-and-angle theorems: vertical angles; alternate
  interior and corresponding angles where a transversal crosses parallel
  lines; perpendicular-bisector equidistance.
- **G-CO.10** — prove triangle theorems: interior angles sum to 180°;
  isosceles base angles; the midsegment theorem; medians concurrent.
- **G-CO.11** — prove parallelogram theorems: opposite sides and angles
  congruent; diagonals bisect each other; rectangles have congruent
  diagonals.
- **G-CO.12** — formal constructions with compass, straightedge, string,
  paper folding, or software: copy a segment; copy an angle; bisect a
  segment; bisect an angle; construct perpendiculars (including the
  perpendicular bisector); construct a parallel through an exterior point.
- **G-CO.13** — construct an equilateral triangle, a square, and a regular
  hexagon inscribed in a circle.

### Geometry: Similarity, Right Triangles, and Trigonometry — U03, U04

- **G-SRT.1.a** — a dilation sends a line not through the center to a
  parallel line and leaves a line through the center unchanged.
- **G-SRT.1.b** — a dilation scales a line segment by the scale factor
  (experimentally verified with the center and scale factor in U03).
- **G-SRT.2** — decide similarity of two figures by similarity
  transformations; triangles are similar exactly when corresponding angles
  are equal and corresponding sides proportional.
- **G-SRT.3** — establish the AA criterion for triangle similarity.
- **G-SRT.4** — prove triangle theorems including the side-splitter
  (proportional division) theorem and its converse, and the Pythagorean
  Theorem via similarity.
- **G-SRT.5** — use congruence and similarity criteria to solve problems
  and prove relationships in figures.
- **G-SRT.6** — by similarity, side ratios in right triangles are
  properties of the angles, giving the definitions of the trigonometric
  ratios for acute angles.
- **G-SRT.7** — explain and use the relationship between the sine and
  cosine of complementary angles.
- **G-SRT.8** — use trigonometric ratios and the Pythagorean Theorem to
  solve applied right triangles.
- **G-SRT.9 (+)** — derive the triangle area formula A = (1/2)ab·sin C with
  an auxiliary altitude.
- **G-SRT.10 (+)** — prove the laws of sines and cosines and use them to
  solve problems.
- **G-SRT.11 (+)** — apply the laws of sines and cosines to find unknown
  measurements in right and non-right triangles.

### Geometry: Circles — U06

- **G-C.1** — prove that all circles are similar.
- **G-C.2** — identify and describe relationships among inscribed angles,
  radii, and chords, including central/inscribed/circumscribed angle
  relationships, right angles inscribed on a diameter, and the radius
  perpendicular to a tangent at the point of tangency.
- **G-C.3** — construct the inscribed and circumscribed circles of a
  triangle; prove angle properties of cyclic quadrilaterals.
- **G-C.4 (+)** — construct a tangent line from a point outside a given
  circle to the circle.
- **G-C.5** — derive from similarity that intercepted arc length is
  proportional to the radius; define radian measure as that constant of
  proportionality; derive the sector-area formula. (The circle-area
  dissection argument belongs to G-GMD.1, covered in U07.)

### Geometry: Expressing Geometric Properties with Equations — U02, U05, U06

- **G-GPE.1** — derive a circle's equation from the Pythagorean Theorem;
  complete the square to find a circle's center and radius from its
  equation.
- **G-GPE.2** — derive the equation of a parabola from its focus and
  directrix (U06 enrichment).
- **G-GPE.3 (+)** — derive ellipse and hyperbola equations from the foci
  (optional enrichment in U06).
- **G-GPE.4** — prove simple geometric theorems algebraically with
  coordinates (e.g., classifying quadrilaterals; testing points on circles).
- **G-GPE.5** — prove the slope criteria for parallel and perpendicular
  lines and use them in geometric problems.
- **G-GPE.6** — find the point partitioning a directed segment in a given
  ratio.
- **G-GPE.7** — compute perimeters of polygons and areas of triangles and
  rectangles with coordinates, e.g., via the distance formula.

### Geometry: Geometric Measurement and Dimension — U07

- **G-GMD.1** — informal arguments for the circumference, circle-area, and
  cylinder/pyramid/cone volume formulas via dissection, Cavalieri's
  principle, and informal limits.
- **G-GMD.2 (+)** — informal Cavalieri argument for the sphere volume
  formula.
- **G-GMD.3** — use the volume formulas for cylinders, pyramids, cones,
  and spheres to solve problems.
- **G-GMD.4** — identify 2-D cross-sections of 3-D objects and 3-D objects
  generated by rotating 2-D objects.

### Geometry: Modeling with Geometry — U05, U07

- **G-MG.1** — use geometric shapes, measures, and properties to describe
  objects (e.g., modeling a tree trunk as a cylinder).
- **G-MG.2** — apply area- and volume-based density in modeling situations.
- **G-MG.3** — apply geometric methods to design problems (e.g., satisfying
  physical constraints or minimizing cost).

### Statistics and Probability: Conditional Probability — U08

- **S-CP.1** — describe events as subsets of a sample space via outcome
  characteristics or as unions, intersections, or complements of events.
- **S-CP.2** — events A and B are independent when P(A and B) =
  P(A)·P(B); use this to test independence.
- **S-CP.3** — conditional probability P(A|B) as P(A and B)/P(B);
  independence as conditional probability equaling the marginal.
- **S-CP.4** — construct and interpret two-way frequency tables; use them
  as sample spaces for independence and conditional probability.
- **S-CP.5** — recognize and explain conditional probability and
  independence in everyday language and situations.
- **S-CP.6** — find conditional probability as the fraction of B's outcomes
  in A; interpret in terms of the model.
- **S-CP.7** — apply the Addition Rule, P(A or B) = P(A) + P(B) −
  P(A and B); interpret in terms of the model.
- **S-CP.8 (+)** — apply the general Multiplication Rule in a uniform
  probability model; interpret in terms of the model.
- **S-CP.9 (+)** — use permutations and combinations to compute
  compound-event probabilities (enrichment in U08).

### Number and Quantity: Quantities — U01, U02, U07, U08

- **N-Q.1** — use units to understand problems and guide multi-step
  solutions; choose and interpret units, scale, and origin in graphs and
  data displays.
- **N-Q.2** — define appropriate quantities for descriptive modeling.
- **N-Q.3** — choose a level of accuracy appropriate to measurement limits.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) =
36 weeks. Session model: **five 50-minute sessions per week** (20 sessions
per unit): 5–6 core lessons, strategy-based practice sessions, a
reading/reference session, the investigation or project, a formative quiz,
the culminating assessment, one review-and-reteach session, and flex sessions
for catch-up. Objectives numbered below are the track objectives from
[README.md](README.md#track-objectives-measurable-adult-assessed).

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Week 1 goal:** probe equation solving (linear and quadratic), factoring,
  function notation, coordinate graphing, systems solving, radical
  expressions, and the Pythagorean Theorem in coordinate contexts. The adult
  scores same-day and maps gaps to objectives 1–13.
- **Week 2 goal:** establish routines — geometry-notebook setup
  (definitions / theorems / proofs sections), conventions for writing a proof
  with a justification at every statement, compass–straightedge–protractor
  orientation, GeoGebra/Desmos orientation, calculator norms. Begin catch-up
  sessions for flagged gaps (factoring, radicals, coordinate graphing). No
  new grade-10 content yet.

### Unit 01 — Geometry foundations: definitions and proof (Weeks 3–6)

- **Standards:** G-CO.1, G-CO.9, G-CO.12, G-CO.13; N-Q.3
- **Week 3 goal:** precise language — point, line, plane, segment, ray,
  angle, parallel, perpendicular from undefined notions; notation and naming
  conventions; reading diagrams.
- **Week 4 goal:** basic constructions with compass and straightedge — copy
  a segment, copy an angle, bisect an angle, perpendicular bisector,
  perpendicular from a point to a line, parallel through a point; inscribe
  an equilateral triangle, square, and regular hexagon.
- **Week 5 goal:** angle theorems — vertical angles, linear pairs, angles
  formed by a transversal (corresponding, alternate interior, same-side
  interior); two-column and paragraph proof formats with stated reasons.
- **Week 6 goal:** proof-writing workshop on U01 results; formative check on
  definitions, constructions, and angle theorems. Objectives 1, 9 in play.

### Unit 02 — Congruence: rigid motions and triangle reasoning (Weeks 7–10)

- **Standards:** G-CO.2–G-CO.8, G-CO.10; N-Q.1
- **Week 7 goal:** transformations as functions — translations, reflections,
  rotations; which transformations preserve distance and angle; specifying
  a sequence of transformations that carries one figure to another.
- **Week 8 goal:** congruence through rigid motions; corresponding parts of
  congruent figures; justify ASA, AAS, SSS, and SAS with rigid-motion
  reasoning.
- **Week 9 goal:** triangle theorems — interior angle sum, base angles of
  isosceles triangles, midsegment theorem, concurrency of medians; proof
  practice in both formats.
- **Week 10 goal:** coordinate proofs of congruence; review week with
  formative check. Objectives 2–4 in play.

### Unit 03 — Similarity: dilations and proportional reasoning (Weeks 11–14)

- **Standards:** G-SRT.1–G-SRT.5; G-GPE.5; N-Q.1, N-Q.2
- **Week 11 goal:** dilations — center, scale factor, image properties;
  define similarity as rigid motions followed by a dilation; corresponding
  angles congruent, sides proportional.
- **Week 12 goal:** the AA criterion; the triangle-proportionality theorem
  (a line parallel to one side divides the other two proportionally); prove
  and solve with proportional segments.
- **Week 13 goal:** applications — indirect measurement by shadow or mirror,
  scale drawings and maps, area and volume scale relationships; use
  congruence and similarity criteria to prove relationships (G-SRT.5).
- **Week 14 goal:** slope criteria via similar right triangles (G-GPE.5);
  review week with formative check. Objective 6 in play.

### Unit 04 — Right-triangle trigonometry and applications (Weeks 15–18)

- **Standards:** G-SRT.6–G-SRT.11 (9–11 are (+) advanced); N-Q.1, N-Q.3
- **Week 15 goal:** sine, cosine, tangent as ratios determined by similar
  right triangles; sine and cosine of complementary angles; exact values
  from 45–45–90 and 30–60–90 triangles.
- **Week 16 goal:** applied right triangles — angles of elevation and
  depression, multi-step problems combining trigonometry and the
  Pythagorean Theorem.
- **Week 17 goal:** general triangles — derive and apply the laws of sines
  and cosines; solve ambiguous and multi-step cases; area formula
  (1/2)ab·sin C.
- **Week 18 goal:** **midyear review** — cumulative retrieval of U01–U04
  (definitions, rigid motions, similarity, trig); proof-writing workshop;
  formative cumulative check. Objectives 7–8 in play.

### Unit 05 — Quadrilaterals, polygons, and coordinate proofs (Weeks 19–22)

- **Standards:** G-CO.3, G-CO.11; G-GPE.4–G-GPE.7; G-MG.1
- **Week 19 goal:** polygon interior and exterior angle sums; prove
  parallelogram theorems (opposite sides/angles, diagonals); rectangle,
  rhombus, and square properties.
- **Week 20 goal:** trapezoid, kite, and the quadrilateral hierarchy;
  coordinate proofs — slope criteria for parallel and perpendicular lines
  (G-GPE.5), midpoint-based classifications (G-GPE.4).
- **Week 21 goal:** points dividing a segment in a given ratio (G-GPE.6);
  coordinate perimeter and area, including on the grid (G-GPE.7); distance
  and midpoint applications.
- **Week 22 goal:** review week with formative check. Objectives 5, 10 in
  play.

### Unit 06 — Circles: chords, tangents, and angles (Weeks 23–26)

- **Standards:** G-C.1–G-C.5 (4 is (+) advanced); G-GPE.1–G-GPE.2 (A.2 enrichment); G-CO.12, G-CO.13
- **Week 23 goal:** all circles are similar (proof); chord–radius–diameter
  relationships; tangent perpendicular to the radius; two tangents from an
  exterior point.
- **Week 24 goal:** inscribed and central angles; angles intercepting
  diameters (Thales' theorem); circumscribed angles; proof practice.
- **Week 25 goal:** arc length and radian measure; sector area; the
  dissection argument for the circle-area formula.
- **Week 26 goal:** circle equations — derive from the Pythagorean Theorem,
  complete the square to find centers and radii; parabola from
  focus/directrix definition; constructions — inscribed and circumscribed
  circles of a triangle, tangent from an exterior point; review week with
  formative check. Objectives 9, 10 in play.

### Unit 07 — Area, surface area, volume, and geometric modeling (Weeks 27–30)

- **Standards:** G-GMD.1–G-GMD.4; G-MG.1–G-MG.3; N-Q.1–N-Q.3
- **Week 27 goal:** polygon area; circumference and circle area with informal
  dissection explanations; composite figures.
- **Week 28 goal:** surface area and volume of prisms, cylinders, pyramids,
  cones, and spheres; density based on area and volume (G-MG.2).
- **Week 29 goal:** 2-D cross-sections of 3-D solids and solids of rotation
  (G-GMD.4); the unit investigation — model a real object geometrically and
  solve a design problem with geometric methods (G-MG.1, G-MG.3).
- **Week 30 goal:** accuracy appropriate to measurement limits (N-Q.3);
  review week with formative check. Objectives 11, 12 in play.

### Unit 08 — Geometric probability and cumulative design proofs (Weeks 31–34)

- **Standards:** S-CP.1–S-CP.9; N-Q.1, N-Q.2; cumulative proof
- **Week 31 goal:** probability foundations — sample spaces, events as
  subsets, union/intersection/complement, Venn diagrams; geometric
  probability with length models.
- **Week 32 goal:** area and volume probability models; conditional
  probability in geometric contexts; independent vs. dependent events.
- **Week 33 goal:** the addition rule and the multiplication rule; two-way
  frequency tables as sample spaces; explaining conditional probability and
  independence in everyday language.
- **Week 34 goal:** cumulative design investigation — design a structure or
  object using U01–U08 reasoning with written proof; unit review; cumulative
  assessment. Objective 13 in play, all objectives revisited.

### Weeks 35–36 — Final review (flexible)

- **Week 35 goal:** cumulative retrieval — definitions and proof formats,
  congruence and similarity reasoning, triangle solving, circle equations,
  coordinate proofs; proof portfolio assembly.
- **Week 36 goal:** final cumulative assessment with keys; learning
  reflection; plan summer or next-course placement with the adult.

## 6. Materials, safety, and accessibility

**Core kit (all year):** compass, unmarked straightedge (ruler without
markings for constructions), standard ruler, protractor, graph paper,
pencils, erasers, scissors, tape or glue sticks, string or yarn for arc and
circle work. Cardboard, index cards, and straws for 3-D models in U07.

**Safety:** adult supervision for cutting tools (scissors, craft knives used
only by the adult). No chemicals, heat, or hazardous materials anywhere in
this track. Hands-on alternatives (simulation or observation) are provided
for any activity a learner cannot perform physically.

**Accessibility supports:** bold-grid graph paper; colorblind-safe palettes
with every color paired to a label; tactile models (geoboard, tangrams,
physical polyhedra) alongside diagrams; read-aloud of definitions and proof
statements; proof-writing scaffolds (reason banks, fill-in-then-free
progression); extended time on constructions; GeoGebra accessibility
features previewed by the adult; text-only alternatives for every visual
activity.

## 7. Paths for future units

- Each unit's Resource Pack will be generated with
  `teachers/ai-assistants/resource_finder.md`, using the Resource Finder
  format (summary, 3–6 focused queries, 3–7 videos or labeled search links,
  4–7 reputable references, task-to-resource mapping).
- The [semester resource library](../../../resources/semester-resource-library.md)
  lists GeoGebra Geometry and Khan Academy geometry paths as discovery
  starting points; every linked item will be opened and checked for fit by
  the building run before recommendation.
- Each unit needs one genuinely generated raster teaching image used in an
  activity (with alt text, caption, generation record in `assets/README.md`,
  and a text-only alternative), plus precise SVG/HTML diagrams wherever
  measurements, labels, or constructions must be exact. A unit missing its
  generated image stays unchecked per the issue requirements.
- Shared datasets are available for practice tasks; dataset tasks name
  columns, units, and whether values are real, rounded, or fictional.

## 8. Validation and delivery record

- `git ls-tree -r origin/main -- curriculum/grade-10/` confirmed the track
  folder empty on `main` at commit `2c43d24` before this run.
- Link check on new files: internal relative links verified by hand and by
  `python3 scripts/validate-library.py` (run at delivery).
- Standards codes verified against the official framework on 2026-10-07;
  descriptions are paraphrases, not reproductions. No state adoption,
  accreditation, or alignment certification is claimed.
- No generated images are required for an audit section; none were produced.
- Manifest and indexes updated truthfully (see delivery comment on
  issue #46).

## 9. Remaining sections

Issue #46's next section is **U01 — Geometry foundations: definitions and
proof** (four to six written lessons, investigation, quiz, assessment, keys,
Resource Pack, generated image), then U02–U08 in prerequisite order, then
R00 (diagnostic, midyear/final review, cumulative assessment and keys).
