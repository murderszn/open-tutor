# Grade 8 Mathematics — Scope and Sequence

Audit section A00 of [issue #38](https://github.com/murderszn/open-tutor/issues/38).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-06 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-8 hub page | `curriculum/grade-8/README.md` | **Revise** — updated to reflect the math track's audit status |
| Track README | `curriculum/grade-8/math/README.md` | **Revise** — rewritten by this run as a real subject index with objectives and audit status |
| `assignments/bivariate-scatter-plots.md` | track folder | **Revise** — substantive investigation (12-row fictional player dataset, outlier analysis, trendline derivation, extrapolation critique) with valid standards citations; defects: "Semester Resource Library" is a dead placeholder reference, the dataset is not labeled fictional, no teacher key or resource pack |
| `assignments/pythagorean-theorem-studio.md` | track folder | **Revise** — substantive A-frame truss / coordinate-distance / 3D-diagonal challenges; same dead "Semester Resource Library" reference; needs key and verification of the truss numbers at unit build |
| `assignments/linear-equations-lab.md` | track folder | **Keep** — blank reusable modeling prompt (two pricing plans, tables, intersection); feeds U04/U05 modeling sessions |
| `assignments/scientific-notation-practice.md` | track folder | **Keep** — blank reusable practice prompt (conversions, exponent-rule products); feeds U02 |
| 15 legacy quizzes | `quizzes/` | **Keep after revision** — every quiz holds 12 genuine grade-8-level questions with worked inline answer keys (spot-verified: slope, real-number, and volume keys recomputed correctly); the structural defect is that each key sits in the same file as the student questions — unit builds must split them into separate learner quizzes and teacher keys, and re-key any items they alter |
| `quizzes/comprehensive-semester-1-final-exam-cumulative-assessment-quiz.md` | `quizzes/` | **Keep for R00** — cumulative bank for midyear/final review material after key separation |
| `quizzes/writing-linear-equations-midterm-cumulative-review-quiz.md` | `quizzes/` | **Keep for R00** — midterm review bank after key separation |
| No taught lessons | none exist | **Gap** — zero explanatory lessons, modeled examples, teacher guides, diagnostics, resource packs, or generated images in the track |
| `resources/math_fundamentals.md` | explicitly grades 4–7 | **Bridge reference only** — its ratio/fraction sections may serve entry warm-ups where grade-7 skills are insecure; never assigned as grade-8 instruction |
| `resources/weights_and_measures.md` | comprehensive conversion reference | **Reuse** — U02 magnitude/unit-choice contexts; adult checks conversion facts before use |
| `resources/financial_tools_and_principles.md` | self-described grade 8–9 band | **Reuse with verification** — U04/U05 linear-model contexts (pricing, plans, interest); verify any prices, rates, or dates before reuse |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/data sources | **Reuse** — U02 scientific-notation magnitude practice and U08 bivariate datasets; every dataset task must name columns and units and state whether values are real, rounded, or fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| Grade-7 math track (#34, audit in open draft PR #101) | PR branch, unmerged | **Prerequisite reference only** — grade-7 end-of-year objectives define entry skills; no grade-7 lessons copied upward |
| Same-grade other subjects (#39 science, #40 language arts, #41 social studies) | unaudited | **No reuse** — not yet delivered |
| Same-subject content, grades 4–6 | `curriculum/grade-4/math/`, etc. | **No reuse** — content targets ages 9–12; kept only as reference for where the track came from |

All fifteen quiz standard-focus lines name real grade-8 codes (verified against the
framework today); no quiz cites a standard outside its domain. No quiz question
was found mathematically wrong in the spot checks, but no full item-level review
of all fifteen quizzes was performed — that is unit-build and R00 work.

## 2. Prerequisites

Learners typically enter grade-8 math with (the grade-7 track's end-of-year objectives):

- Rational-number fluency: add, subtract, multiply, and divide integers,
  fractions, and decimals; number-line reasoning; distance as absolute value
- Ratio language, equivalent ratios, unit rates with units, percent as a rate
  per 100; proportional-relationship equations
- One-variable equations (px + q = r, p(x + q) = r) and inequalities on
  number lines; expressions with variables and properties of operations
- Angle facts: supplementary, complementary, vertical, adjacent; scale drawings;
  area by composing/decomposing; circles (area, circumference); volume and
  surface area of rectangular prisms
- The four-quadrant coordinate plane; ordered pairs; absolute value as distance
- Statistical questions and distributions (dot plots, histograms, box plots;
  mean, median, IQR, MAD); sampling basics; simple probability models

The diagnostic weeks (Weeks 1–2) verify these; U01 re-teaches integer/rational
fluency as it is used, before assuming it is secure. The audit never assumes
mastery of integer-exponent rules, scientific notation, multi-solution equation
types, systems thinking, function language, transformations, or similarity —
those are this track's new content.

## 3. Track objectives

Measurable, adult-assessed by end of year (15 objectives; numbered in the track
README):

1. Distinguish rational from irrational numbers; convert repeating decimals to
   fractions; approximate irrationals with rationals and place them on a number
   line.
2. Evaluate square roots of small perfect squares and cube roots of small
   perfect cubes; solve equations of the form x² = p and x³ = p and know that
   √2 is irrational.
3. Apply the properties of integer exponents to generate equivalent numerical
   expressions.
4. Estimate very large and very small quantities with single-digit × integer
   power of 10; operate with numbers in scientific notation and choose
   appropriately sized units.
5. Solve linear equations in one variable with rational coefficients, using the
   distributive property and collecting like terms; produce examples with one
   solution, infinitely many solutions, and no solution.
6. Graph proportional relationships, interpreting the unit rate as the slope;
   compare two proportional relationships given in different representations.
7. Use similar triangles to explain why the slope is the same between any two
   distinct points on a non-vertical line; derive y = mx and y = mx + b.
8. Analyze and solve pairs of simultaneous linear equations by graphing and
   algebraically; interpret intersections as solutions; solve real-world
   two-equation problems.
9. Define, evaluate, and compare functions across representations; interpret
   y = mx + b as a linear function and give examples of nonlinear functions.
10. Model linear relationships with functions: determine rate of change and
    initial value from descriptions, tables, or graphs; interpret them in
    context; describe qualitative relationships from graphs (increasing,
    decreasing, linear, nonlinear).
11. Describe the effects of rotations, reflections, translations, and dilations
    on two-dimensional figures using coordinates; describe congruence sequences
    and similarity sequences between figures.
12. Establish with informal arguments the triangle angle sum, exterior-angle
    facts, angles formed when parallel lines are cut by a transversal, and the
    angle-angle criterion for similarity.
13. Explain a proof of the Pythagorean Theorem and its converse; apply it to
    unknown side lengths in two and three dimensions and to distances on the
    coordinate plane.
14. Know the volume formulas for cylinders, cones, and spheres and use them to
    solve real-world and mathematical problems.
15. Construct and interpret scatter plots for bivariate data (clustering,
    outliers, positive/negative/linear/nonlinear association); informally fit
    and assess a line of best fit; use a linear model's equation to make and
    interpret predictions; summarize bivariate categorical data in two-way
    tables with relative frequencies.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, grade 8
domains. The 8.NS, 8.EE, 8.F, and 8.G pages were re-opened on
[thecorestandards.org](https://www.thecorestandards.org/Math) 2026-10-06; the
8.SP page was bot-blocked that day, so 8.SP codes/descriptions were corroborated
against multiple official-text reproductions (UC Davis standards document;
New York State Common Core grade-8 module overviews). Descriptions below are
paraphrases, not reproductions. No state adoption, accreditation, or alignment
certification claimed.

### The Number System (8.NS) — U01

- **8.NS.A.1** — know irrational numbers exist; understand informally that every
  number has a decimal expansion, that rational numbers' expansions eventually
  repeat, and convert an eventually-repeating decimal expansion into a rational
  number.
- **8.NS.A.2** — use rational approximations of irrational numbers to compare
  sizes, locate them approximately on a number line, and estimate expression
  values (for example, truncating √2's expansion to show it lies between
  1 and 2, then between 1.4 and 1.5).

### Expressions and Equations (8.EE) — U01–U05

- **8.EE.A.1** — know and apply integer-exponent properties to generate
  equivalent numerical expressions (for example, 3² × 3⁻⁵ = 3⁻³ = 1/3³ = 1/27).
- **8.EE.A.2** — use square-root and cube-root symbols for solutions of
  x² = p and x³ = p (p a positive rational); evaluate roots of small perfect
  squares and cubes; know √2 is irrational.
- **8.EE.A.3** — use single-digit × integer power of 10 to estimate very large
  or very small quantities, and to express how many times as much one is than
  the other (for example, estimate the U.S. population as 3 × 10⁸ and the
  world population as 7 × 10⁹, and conclude the world population is more than
  20 times larger).
- **8.EE.A.4** — perform operations with numbers in scientific notation,
  including mixed decimal/scientific-notation problems; choose units of
  appropriate size for very large or very small measurements (for example,
  millimeters per year for seafloor spreading); interpret technology-generated
  scientific notation.
- **8.EE.B.5** — graph proportional relationships, interpreting the unit rate
  as the slope; compare two proportional relationships in different
  representations (for example, a distance-time graph vs. a distance-time
  equation to decide which of two moving objects has greater speed).
- **8.EE.B.6** — use similar triangles to explain why the slope m is the same
  between any two distinct points on a non-vertical line; derive y = mx for a
  line through the origin and y = mx + b for a line intercepting the vertical
  axis at b.
- **8.EE.C.7.a** — give examples of linear equations in one variable with one
  solution, infinitely many solutions, or no solutions; show which case holds
  by transforming the equation to x = a, a = a, or a = b.
- **8.EE.C.7.b** — solve linear equations with rational coefficients, including
  those needing the distributive property and collecting like terms.
- **8.EE.C.8.a** — understand that solutions of a two-variable, two-equation
  system are the intersection points of their graphs, because intersection
  points satisfy both equations simultaneously.
- **8.EE.C.8.b** — solve systems of two linear equations in two variables
  algebraically; estimate solutions by graphing; solve simple cases by
  inspection (for example, 3x + 2y = 5 and 3x + 2y = 6 have no solution).
- **8.EE.C.8.c** — solve real-world and mathematical problems leading to two
  linear equations in two variables.

### Functions (8.F) — U06

- **8.F.A.1** — understand a function as a rule assigning exactly one output
  to each input; its graph is the set of ordered pairs (input, output).
  (Function notation is not required at grade 8.)
- **8.F.A.2** — compare properties of two functions in different
  representations (for example, a table vs. an algebraic expression: which
  has the greater rate of change).
- **8.F.A.3** — interpret y = mx + b as a linear function with a straight-line
  graph; give nonlinear examples (for example, A = s², whose graph contains
  (1, 1), (2, 4), (3, 9), which are not on a straight line).
- **8.F.B.4** — construct a function modeling a linear relationship; determine
  the rate of change and initial value from a description, two (x, y) values,
  a table, or a graph; interpret rate of change and initial value in the
  modeled situation.
- **8.F.B.5** — describe a quantitative relationship qualitatively from its
  graph (increasing/decreasing, linear/nonlinear); sketch a graph matching a
  verbal description.

### Geometry (8.G) — U07, U08

- **8.G.A.1.a–c** — verify experimentally the properties of rotations,
  reflections, and translations.
- **8.G.A.2** — understand congruence via sequences of rotations, reflections,
  and translations; describe a sequence exhibiting the congruence of two
  congruent figures.
- **8.G.A.3** — describe the effect of dilations, translations, rotations, and
  reflections on two-dimensional figures using coordinates.
- **8.G.A.4** — understand similarity via sequences of rotations, reflections,
  translations, and dilations; describe a sequence exhibiting the similarity
  of two similar figures.
- **8.G.A.5** — use informal arguments for the triangle angle sum, exterior
  angles, angles formed when parallel lines are cut by a transversal, and the
  angle-angle criterion for similarity (for example, arranging three copies
  of a triangle so the three angles appear to form a line).
- **8.G.B.6** — explain a proof of the Pythagorean Theorem and its converse.
  (The site's rendered 8.G page omits this line's text in the 2026-10-06
  render — the same rendering quirk the grade-2 and grade-3 audits documented
  for other standards; the code and official wording are confirmed.)
- **8.G.B.7** — apply the Pythagorean Theorem to unknown side lengths in right
  triangles, in two and three dimensions.
- **8.G.B.8** — apply the Pythagorean Theorem to find distances between two
  points in a coordinate system.
- **8.G.C.9** — know the volume formulas for cones, cylinders, and spheres and
  use them in real-world and mathematical problems.

### Statistics and Probability (8.SP) — U08

- **8.SP.A.1** — construct and interpret scatter plots for bivariate
  measurement data to investigate patterns of association; describe clustering,
  outliers, positive or negative association, linear association, and
  nonlinear association.
- **8.SP.A.2** — know straight lines are widely used to model relationships
  between two quantitative variables; for scatter plots suggesting linear
  association, informally fit a straight line and informally assess the fit
  by the closeness of data points to the line.
- **8.SP.A.3** — use a linear model's equation to solve problems in bivariate
  measurement data, interpreting slope and intercept (for example, in a plant
  experiment a slope of 1.5 cm/hr means an additional hour of sunlight per day
  is associated with an additional 1.5 cm of mature plant height).
- **8.SP.A.4** — understand that patterns of association also appear in
  bivariate categorical data; construct and interpret two-way tables with
  frequencies and relative frequencies from two categorical variables
  collected from the same subjects; use row/column relative frequencies to
  describe possible association.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two final-review
weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36 weeks. Session
model: **four 45-minute sessions per week** (16 sessions per unit): 4–6 core
lessons, guided and independent practice, a reference/reading session, the
investigation/project, a formative quiz, the culminating assessment, and one
review-and-reteach session. Objectives numbered below are the track objectives
from [README.md](README.md#track-objectives-measurable-adult-assessed).

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Week 1 goal:** probe rational-number operations (all sign combinations),
  unit rates and proportional-equation writing, solving px + q = r, angle
  vocabulary, coordinate-plane plotting, and reading dot plots/box plots. The
  adult scores same-day and maps gaps to objectives 1–15.
- **Week 2 goal:** establish routines — daily 10-minute fluency warm-up,
  math-notebook setup, conventions for writing a worked solution with a reason
  check, Desmos/GeoGebra orientation. Begin catch-up sessions for flagged gaps
  (fraction division, negative integers, percent). No new grade-8 content yet.

### Unit 01 — Real numbers, roots, and irrational approximations (Weeks 3–6)

- **Standards:** 8.NS.A.1, 8.NS.A.2, 8.EE.A.2
- **Week 3 goal:** rational vs. irrational — decimal expansions that terminate
  or repeat vs. those that do neither; convert repeating decimals to fractions
  (0.777… = 7/9 style); recognize √2 as irrational.
- **Week 4 goal:** square and cube roots — evaluate √169, ∛216 style problems;
  solve x² = p and x³ = p; all solutions of x² = 81 (±9); connect roots to
  geometric side-length questions.
- **Week 5 goal:** rational approximation — truncate expansions to bracket
  √2 between 1.4 and 1.5; place irrationals on number lines; estimate π² and
  similar expression values.
- **Week 6:** review week — mixed real-number classification, root equations,
  approximation challenges; formative check.
- Legacy support: rewrite `quizzes/real-number-system-square-roots-cube-roots-irrationals-quiz.md`
  into a learner quiz plus a separate teacher key; its 12 questions are
  mathematically sound as spot-checked.

### Unit 02 — Integer exponents and scientific notation (Weeks 7–10)

- **Standards:** 8.EE.A.1, 8.EE.A.3, 8.EE.A.4
- **Week 7 goal:** integer-exponent properties — products, quotients, powers of
  powers, zero and negative exponents; generate equivalent numerical
  expressions (3² × 3⁻⁵ = 1/27).
- **Week 8 goal:** scientific notation — single-digit × integer power of 10;
  estimate very large/small quantities (U.S. vs. world population magnitudes);
  convert between decimal and scientific forms.
- **Week 9 goal:** operations in scientific notation — mixed-form problems;
  choose appropriately sized units (millimeters per year for slow growth);
  interpret calculator/technology notation.
- **Week 10:** review week — exponent puzzles, magnitude-estimation games;
  formative check.
- Legacy support: `quizzes/integer-exponent-properties-laws-of-powers-quiz.md`
  (key separation) and `assignments/scientific-notation-practice.md` (kept as
  practice); `solar_system_planets.csv` supplies real magnitude data — columns
  and units named, values labeled real/rounded.

### Unit 03 — Linear equations and solution types (Weeks 11–14)

- **Standards:** 8.EE.C.7.a, 8.EE.C.7.b
- **Week 11 goal:** multi-step one-variable equations — distributive property,
  collecting like terms, rational coefficients; reason checks after each
  transform.
- **Week 12 goal:** solution types — transform to x = a, a = a, or a = b;
  construct original examples of one, infinitely many, and no solutions.
- **Week 13 goal:** modeling with one-variable equations — real-world problems
  requiring linear-equation setup; solution-type interpretation in context
  (what "no solution" means for a pricing scenario).
- **Week 14:** review week — mixed equation sets, error-analysis of flawed
  solutions; formative check.
- Legacy support: `quizzes/solving-multi-step-linear-equations-in-one-variable-quiz.md`
  and `quizzes/variables-on-both-sides-classifying-solutions-quiz.md` (both key
  separation).

### Unit 04 — Proportional relationships, slope, and linear graphs (Weeks 15–18)

- **Standards:** 8.EE.B.5, 8.EE.B.6
- **Week 15 goal:** proportional relationships as special linear equations —
  unit rate as slope; graphs through the origin; compare two proportional
  relationships given differently (table vs. equation vs. graph).
- **Week 16 goal:** slope as constant rate of change — similar-triangles
  explanation for why slope is the same between any two points; derive y = mx
  and y = mx + b; construct equations from graphs, tables, and descriptions.
- **Week 17 goal:** interpret rate of change and intercept in context —
  distance-time, draining-tank, pricing-plan models; `linear-equations-lab.md`
  (two-plan intersection) used here as the modeling lab.
- **Week 18:** midyear review (flexible) — cumulative problems across
  objectives 1–7; re-teach the highest-need objective; formative check.
- Legacy support: `quizzes/slope-rate-of-change-proportional-relationships-quiz.md`,
  `quizzes/graphing-interpreting-linear-equations-y-mx-b-quiz.md`,
  `quizzes/writing-linear-equations-midterm-cumulative-review-quiz.md` (key
  separation).

### Unit 05 — Systems of linear equations (Weeks 19–22)

- **Standards:** 8.EE.C.8.a, 8.EE.C.8.b, 8.EE.C.8.c
- **Week 19 goal:** systems as intersecting lines — graph pairs, interpret
  intersections as solutions; estimate solutions graphically; simple cases by
  inspection (3x + 2y = 5 vs. 3x + 2y = 6 → no solution).
- **Week 20 goal:** algebraic solution — substitution and elimination with
  rational coefficients; connect algebraic results to the graph.
- **Week 21 goal:** real-world two-equation problems — break-even, mixture,
  and comparison scenarios; decide when a system is the right model.
- **Week 22:** review week — system-sort games (one/none/infinite), modeling
  challenges; formative check.
- Legacy support: `quizzes/systems-of-linear-equations-by-graphing-substitution-quiz.md`
  and `quizzes/systems-of-linear-equations-by-elimination-word-problems-quiz.md`
  (key separation).

### Unit 06 — Functions and nonlinear relationships (Weeks 23–26)

- **Standards:** 8.F.A.1, 8.F.A.2, 8.F.A.3, 8.F.B.4, 8.F.B.5
- **Week 23 goal:** function as a rule — exactly one output per input;
  graphs as ordered-pair sets; evaluate and compare functions across
  representations (which has the greater rate of change).
- **Week 24 goal:** linear vs. nonlinear — y = mx + b as a linear function;
  counterexamples (A = s² with (1,1), (2,4), (3,9)); test-for-straight-line
  reasoning.
- **Week 25 goal:** modeling with functions — build linear functions from
  descriptions, tables, and graphs; determine and interpret rate of change
  and initial value in context.
- **Week 26:** review week — qualitative graph reading (increasing/decreasing,
  linear/nonlinear); sketch graphs from verbal descriptions; formative check.
- Legacy support: `quizzes/introduction-to-functions-linear-vs-non-linear-relations-quiz.md`
  (key separation). Note: function notation is not required at grade 8.

### Unit 07 — Transformations, similarity, and Pythagorean reasoning (Weeks 27–30)

- **Standards:** 8.G.A.1–5, 8.G.B.6–8
- **Week 27 goal:** rigid motions and dilations — experimentally verify
  rotation/reflection/translation properties; describe effects using
  coordinates (physical models, transparencies, or GeoGebra).
- **Week 28 goal:** congruence and similarity — sequences of transformations
  exhibiting congruence or similarity between figures; angle-sum, exterior
  angle, parallel-line transversal angles, and the angle-angle criterion via
  informal arguments.
- **Week 29 goal:** the Pythagorean Theorem — explain a proof and its converse;
  unknown side lengths in 2-D and 3-D problems; coordinate-plane distances.
- **Week 30:** review week — transformation-sequence puzzles, proof
  walkthroughs, distance challenges; formative check.
- Legacy support: `assignments/pythagorean-theorem-studio.md` (revise: replace
  the dead resource-shelf link, add key), `quizzes/pythagorean-theorem-applications-in-2d-3d-space-quiz.md`
  and `quizzes/the-pythagorean-theorem-distance-on-the-coordinate-plane-quiz.md`
  (key separation).

### Unit 08 — Volume, bivariate data, and modeling (Weeks 31–34)

- **Standards:** 8.G.C.9, 8.SP.A.1, 8.SP.A.2, 8.SP.A.3, 8.SP.A.4
- **Week 31 goal:** volume of cylinders, cones, spheres — formulas as tools;
  solve real-world problems (composite solids, overflow questions like the
  cone/sphere comparison).
- **Week 32 goal:** scatter plots and association — construct and interpret;
  clustering, outliers, positive/negative/linear/nonlinear association;
  the esports dataset rebuilt with clearly labeled fictional practice data.
- **Week 33 goal:** linear modeling of data — informally fit a line, judge fit
  by point closeness, use the equation for predictions; interpret slope and
  intercept in context; discuss extrapolation limits.
- **Week 34:** review week — two-way tables with relative frequencies for
  categorical bivariate data; volume/data modeling challenge; formative check.
- Legacy support: `quizzes/volume-of-cylinders-cones-and-spheres-quiz.md`,
  `quizzes/bivariate-data-scatter-plots-trendlines-outliers-quiz.md`,
  `assignments/bivariate-scatter-plots.md` (revise: label dataset fictional,
  replace dead resource-shelf link, add key).

### Weeks 35–36 — Final review (flexible)

- Cumulative tasks across all fifteen objectives — equation and system
  challenges, function-modeling scenarios, transformation/similarity proofs,
  volume and data investigations; re-teach where evidence shows gaps; final
  observational assessment and keys (delivered with R00). The
  `comprehensive-semester-1-final-exam-cumulative-assessment-quiz.md` bank is
  re-keyed and split for this purpose.

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (for example, U02 opens with
root/exponent estimation from U01, U05 reuses U04's slope-as-rate-of-change,
U06's function work reprises U04's graph-reading, U08's linear modeling is the
data-side twin of U04's equation work). Midyear (Week 18) and final
(Weeks 35–36) weeks are full-track reviews. Formative checks are short written
or drawn tasks the adult reviews the same day; each unit's teacher guide
specifies what "ready to move on" looks like. Equation and fluency work is
strategy-based — no timed speed tests.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/weights_and_measures.md` — U02 magnitude/unit-choice contexts;
  the adult verifies conversion facts before use.
- `resources/financial_tools_and_principles.md` — U04/U05 linear-model
  contexts within its stated grade 8–9 band; verify any prices, rates, or
  dates before reuse.
- `resources/us_states.csv`, `resources/un_countries.csv`,
  `resources/solar_system_planets.csv` — U02 magnitude practice, U08 bivariate
  datasets; every dataset task names columns and units and states whether
  values are real, rounded, or fictional practice data.
- `resources/math_fundamentals.md` (grades 4–7) — entry warm-ups only, where
  grade-7 skills are insecure; never grade-8 instruction.
- `assignments/math/` shared interactives — browse before citing; golden-ratio
  style interactives are enrichment, not core.
- The grade-7 math track's materials serve as prerequisite reference, never as
  grade-8 lesson content.

## 8. Safe materials

Standard math-class supplies: graph paper, rulers, protractors, compasses
(adult supervises), scissors, algebra tiles or integer chips, index cards for
vocabulary, dice and spinners for sampling warm-ups. Digital tools: Desmos
graphing calculator and GeoGebra (free, no-account browser versions) for
transformation and scatter-plot work — the adult previews for advertising and
age suitability. No lab chemicals, no sharp tools beyond classroom compasses;
indoor alternatives for all measuring tasks.

## 9. Accessibility supports

- **Multiple response modes** for all checks: written, oral, drawn, or typed;
  adult scribes when writing stamina lags.
- High-contrast, large-format graphs and coordinate grids; textured or
  raised-line transformation tiles for low-vision learners.
- Sessions of about 45 minutes with movement breaks; every investigation has a
  seated-table and a standing/digital variant.
- Language support: vocabulary taught with objects and graphs first, word
  second; visual word walls (slope, intercept, function, transformation,
  outlier); home-language labels welcomed alongside English terms.
- Every drawn graph ships with a text-only alternative (table of values or
  verbal description); color is never the only cue. Desmos and GeoGebra both
  offer keyboard navigation — the unit guides note the keystrokes.
- Fluency work is strategy-based, never timed — no speed tests in any unit.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #38.
- All fifteen quizzes need key separation and item-level review before they
  can serve as unit assessments; the two investigation assignments need keyed
  versions and real resource packs.
- No taught lessons exist anywhere in the track — the largest gap.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- U07 needs reproducible transformation/similarity diagrams (SVG/HTML, not
  generated art) for exact coordinate work; U08 needs a labeled fictional
  bivariate dataset replacing the current unlabeled one.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Real numbers, roots, and irrational approximations; U02 Integer exponents
and scientific notation; U03 Linear equations and solution types;
U04 Proportional relationships, slope, and linear graphs; U05 Systems of linear
equations; U06 Functions and nonlinear relationships; U07 Transformations,
similarity, and Pythagorean reasoning; U08 Volume, bivariate data, and
modeling; R00 diagnostic, midyear/final review, and cumulative assessments
with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #38 body, comments, and label state re-read 2026-10-06 before
  claiming; no competing claim (0 comments prior to the claim comment);
  `curriculum-in-progress` label added with a timestamped claim comment.
- No other `curriculum-in-progress` claims active on any queue issue at claim
  time; open worker PRs (#87–#104, other tracks) were not touched.
- `curriculum/grade-8/math/` re-inventoried on `main` @ `2c43d24`: 20 Markdown
  files (README, 4 assignments, 15 quizzes) — matches the issue's 2026-10-01
  baseline of 20.
- Standards codes/descriptions verified 2026-10-06: 8.NS, 8.EE, 8.F, 8.G
  against thecorestandards.org grade-8 domain pages; 8.SP corroborated against
  multiple official-text reproductions because the site's 8.SP page was
  bot-blocked (the site's 8.G render also skipped 8.G.B.6's text — documented
  above; code and wording confirmed). No state adoption, accreditation, or
  alignment certification claimed.
- Quiz spot checks 2026-10-06: all 12 questions/keys recomputed correctly in
  the slope, real-number, and volume quizzes (for example, x² = 81 → ±9;
  y³ = −64 → y = −4; 0.4545… = 5/11; 486π ≈ 1,526.8 in³ for the hemisphere).
  All fifteen quiz standard-focus lines name valid grade-8 codes. No full
  item-level review of all fifteen quizzes was performed — that is unit/R00
  work.
- Assignment review 2026-10-06: both investigation assignments cite valid
  standards; the "Semester Resource Library" reference appears in 17 of 20
  files and points to nothing — recorded as a revision requirement, not left
  as a live recommendation.
- Repository guide reuse decisions checked against the guides' actual content
  and stated grade bands. The fifteen objectives map onto the issue's U01–U08
  checklist order, kept as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
