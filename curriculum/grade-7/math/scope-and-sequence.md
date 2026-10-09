# Grade 7 Mathematics — Scope and Sequence

Draft audit for issue #34 (delivered 2026-10-05; branch
`curriculum/issue-34-grade-7-math`). Existing files were re-audited against
`main` at commit 2c43d244; standards codes and descriptions were verified
against the Common Core State Standards for Mathematics at
thecorestandards.org on 2026-10-05. This is a proposed pathway, not a claim of
state adoption, accreditation, or complete alignment.

## 1. Audit: existing-file inventory

`curriculum/grade-7/math/` holds **26 Markdown files** (2026-10-05 re-audit):
the subject README (replaced by this audit), 11 assignments, and 14 quizzes.
Issue #34's baseline cited 27 files (2026-10-01); no commit in this folder's
history removes a file, so the baseline figure was a miscount. Every file was
read this run. Nothing here constitutes lessons, teacher guides, answer keys,
or a scope-and-sequence — those are the unit builds' job. Quiz items were
spot-solved (substitutions and formula checks), not exhaustively keyed;
"revise" below includes building full keys.

### Decisions

**Keep (as-is, referenced by future units)**

- `quizzes/hints-for-hints.md` — Socratic sign-tracking reminders
  (subtraction as adding the opposite, number-line intuition, sign pitfalls,
  self-check). Sound strategy reference; U01 embeds it unchanged.

**Revise (adapt into units with keys, rubrics, and instruction)**

- `assignments/data-story-mini-lab.md` — checklist for a learner-collected
  dataset with mean, median, range, and a ratio/percent comparison plus a
  limitation note. Concept is sound for U07; revise to require random-sampling
  language and replace the dead "Shared spec" reference (no such shared spec
  exists in this repository) with an explicit method section.
- `assignments/expressions-and-equations-checkpoint.md` — translating
  phrases and solving 8 one- and two-step equations with substitution
  checks. All eight solutions are integers (spot-solved: 11, 15, 7, 27, 9,
  7, 7, 6). U04 keeps the task set and adds a full answer key plus two-step
  items with rational coefficients.
- `assignments/geometry-scale-drawing-studio.md` — room-layout design to
  scale with perimeter and decomposed area. Keep → U05 studio project;
  needs a scoring rubric and worked exemplar.
- `assignments/inequalities-budget-challenge.md` — models spending limits
  with inequalities and interprets solutions. Keep → U04 modeling project;
  needs a rubric and keyed sample solutions.
- `assignments/probability-experiment-lab.md` — 50-trial chance experiment
  with theoretical vs. experimental comparison. Keep → U08 investigation;
  replace dead "Shared spec" reference; add long-run-frequency framing.
- `assignments/probability-game-lab.md` — design/test a game, 30 trials,
  fair/unfair verdict. Keep → U08; needs a rubric.
- `assignments/proportional-relationships-shop.md` — unit prices and a
  percent discount comparison. Keep → U02/U03 application; add keys and a
  proportionality test (constant unit price across packages).
- `assignments/statistics-sports-analytics.md` — blank reusable prompt:
  educator-provided dataset, center/spread, graph, observed-vs-cause
  conclusion. Revise → U07 practice item with random-sampling requirement.
- `assignments/surface-area-design-studio.md` — blank reusable prompt:
  two equal-volume boxes, less-material decision. Keep → U06 design
  project; add a rubric and worked exemplar.
- `assignments/triangle-spotting-field-lab.md` — classify real-world
  triangles by side and angle with evidence. Revise → U05 classification
  warm-up; add ruler/protractor construction tasks and the dead "Shared
  spec" reference replaced by explicit directions.

**Consolidate or rewrite (defects; rebuild inside unit assessment suites)**

- `quizzes/rational-numbers-negatives-quiz.md` — **defective**: the title
  renders as "# 🧮 Grade 7 Math -  Quiz" (missing topic) and all 20 items
  are byte-identical to `rational-numbers-negatives-quiz-set-02.md`.
  Remove one copy; rewrite the survivor with decimal/fraction variety.
  → U01.
- `quizzes/rational-numbers-negatives-quiz-set-02.md` — duplicate of the
  above; integer subtraction only. → U01 (rewrite).
- `quizzes/ratios-rates-quiz.md` — mixes fraction-arithmetic drills with
  five near-identical "car travels X miles in Y hours" unit-rate items.
  Repetitive; split into U01 and U02 banks with context variety. → U01/U02.
- `quizzes/proportional-relationships-quiz.md` — **mislabeled**: all 20
  items are fraction multiplication/division drills; no proportional
  relationships content (no tables, graphs, or constants of
  proportionality). Rewrite for U02 with proportionality testing. → U02.
- `quizzes/operations-with-fractions-quiz.md` — fraction drill overlapping
  the above two; consolidate the three fraction-drill banks into one U01
  set with answer keys. → U01.
- `quizzes/equivalent-expressions-quiz.md` — 20 items of the single
  pattern a(bx + c) ± dx. Correct but monotonous; broaden (factoring,
  rational coefficients, rewriting for structure). → U04.
- `quizzes/solving-equations-quiz.md` — two-step integer equations; several
  items yield non-integer solutions (spot-solved: 9z + 14 = 19 → z = 5/9;
  6x + 6 = 6 → x = 0; 2y + 2 = 11 → y = 9/2). Keep the structure, add keys,
  and flag non-integer solutions to the adult. → U04.
- `quizzes/solving-inequalities-quiz.md` — similar; needs keys and explicit
  graphing conventions (open/closed circles). → U04.
- `quizzes/geometry-angles-quiz.md` — 20 near-identical supplementary-angle
  items. Rewrite with complementary, vertical, and adjacent angles plus
  equation-solving items. → U05.
- `quizzes/geometry-area-circumference-quiz.md` — **title mismatch**: all
  20 items ask for circle area; none asks for circumference. Several radii
  repeat (radius 5 appears four times). Rewrite with circumference items
  and variety. → U06.
- `quizzes/geometry-volume-surface-area-quiz.md` — **mislabeled**: all 20
  items are circle-area questions; no volume or surface-area content.
  Rewrite as volume/surface area of prisms and pyramids. → U06.
- `quizzes/probability-quiz.md` — 20 identical "probability of rolling N
  on a standard 6-sided die" items (every answer 1/6). No compound events,
  models, or simulation. Rewrite for U08. → U08.
- `quizzes/statistics-sampling-quiz.md` — 20 mean-and-median datasets
  (one spot-solved: mean ≈ 42.71, median 50 for set 1); **no sampling
  content despite the title**. Rewrite with sampling-design and
  comparative-inference items. → U07.
- `quizzes/summer-mixed-review-expressions-equations-ratios-geometry-quiz.md`
  — **mislabeled**: all 20 items are ax − b = c equations (most with
  non-integer solutions, e.g., 8x − 7 = 32 → x = 39/8). Rewrite as a genuine
  mixed review or retitle. → R00.

**Optional enrichment**

- `assignments/golden-ratio.md` — derives φ, Fibonacci ratios to 144/89,
  design task with a rubric. The shared-spec link
  (`../../../../assignments/math/golden-ratio/README.md`) resolves to a
  real file (verified 2026-10-05); the "educator-provided equivalent"
  interactive placeholders must be replaced with verified resources at
  build time. Enrichment only, → U05/U06.

### Repository references

- `resources/math_fundamentals.md` (grades 4–7 scope): fractions, ratios,
  probability, geometry quick-checks. Usable for U01–U02 warm-ups and U08
  supplements; its explanations must be adapted to the grade-7 register,
  not copied into units.
- `resources/weights_and_measures.md`: U01–U02 unit-conversion contexts.
- `resources/financial_tools_and_principles.md`: U03 percent/discount/
  interest contexts — verify any prices, rates, or dates before reuse.
- `resources/us_states.csv`, `resources/un_countries.csv`,
  `resources/solar_system_planets.csv`: U07 sampling and comparison
  datasets; dataset tasks must name columns and units and state whether
  values are real, rounded, or fictional practice data.
- `resources/semester-resource-library.md` and `assignments/README.md`
  (catalog): browse before citing; the golden-ratio interactives live at
  `assignments/math/golden-ratio/resources/`.

## 2. Prerequisites

From the grade-6 track the learner brings: ratio language and order,
equivalent ratios (tables, tape diagrams, double number lines), unit rates
with units, percent as a rate per 100, division of fractions with visual
models, fluent multi-digit division and decimal operations, GCF/LCM,
integers and rational numbers on number lines, the four-quadrant coordinate
plane, absolute value as distance, expressions with variables and properties
of operations, one-variable equations (x + p = q, px = q) and inequalities
graphed on number lines, area by composing/decomposing, volume and surface
area of rectangular prisms, and statistical questions and distributions
(dot plots, histograms, box plots; mean, median, IQR, MAD). The Week 1–2
diagnostic checks: fraction operations, decimal operations, ratio language,
unit rates, order of operations, integer addition/subtraction on the number
line, evaluating expressions, and reading dot plots. Gaps found there get
one-on-one catch-up sessions inside Units 1–2; the scope never assumes
mastery of negative multiplication/division, proportional-equation writing,
or sampling vocabulary.

## 3. Track objectives

The 25 measurable, adult-assessed objectives in
[README.md](README.md#track-objectives-measurable-adult-assessed) are the
track contract; they are grouped by unit in the pacing table below. Units
are prerequisite-ordered: rational-number fluency (U01) feeds unit-rate and
proportionality work (U02), which feeds percent problems (U03); expression
fluency and equations (U04) feed angle-equation and geometry modeling
(U05, U06); sampling literacy (U07) feeds probability-model reasoning (U08).

## 4. Standards crosswalk

Standards below are verified against the Common Core State Standards for
Mathematics grade-7 pages on 2026-10-05; descriptions are paraphrases, not
reproductions. They are a reference pathway, not a claim of state adoption,
accreditation, or complete alignment.

### Ratios and Proportional Relationships (7.RP) — U02, U03

- **7.RP.A.1** — compute unit rates from ratios of fractions, including
  ratios of lengths, areas, and quantities in like or different units.
- **7.RP.A.2.a–d** — (a) decide whether quantities are proportional via
  equivalent ratios in a table or a straight-line-through-origin graph;
  (b) identify the constant of proportionality (unit rate) in tables,
  graphs, equations, diagrams, and descriptions; (c) represent proportional
  relationships by equations; (d) interpret points on the graph, especially
  (0, 0) and (1, r) where r is the unit rate.
- **7.RP.A.3** — use proportional relationships to solve multi-step ratio
  and percent problems: simple interest, tax, markups and markdowns,
  gratuities and commissions, fees, percent increase and decrease, percent
  error.

### The Number System (7.NS) — U01

- **7.NS.A.1.a–d** — add and subtract rational numbers with number-line
  diagrams; (a) opposites combining to make 0; (b) p + q as distance |q|
  from p; additive inverses sum to 0; (c) subtraction as adding the
  additive inverse; distance between rationals as |p − q|.
- **7.NS.A.2.a–d** — multiply and divide rational numbers; (a) properties,
  especially the distributive property, justify sign rules including
  (−1)(−1) = 1; (b) quotients of integers are rational with sign
  identities; (c) properties of operations as computation strategies;
  (d) convert rationals to decimals by long division; terminating or
  eventually repeating.
- **7.NS.A.3** — solve real-world and mathematical problems with the four
  operations on rational numbers, including complex fractions.

### Expressions and Equations (7.EE) — U04

- **7.EE.A.1** — apply properties of operations to add, subtract, factor,
  and expand linear expressions with rational coefficients.
- **7.EE.A.2** — rewrite expressions in different forms to reveal structure
  (e.g., a + 0.05a = 1.05a means "increase by 5%" equals "multiply by
  1.05").
- **7.EE.B.3** — solve multi-step real-life problems with positive and
  negative rationals in any form; convert between forms; assess
  reasonableness with mental computation and estimation.
- **7.EE.B.4.a** — solve word problems leading to px + q = r and
  p(x + q) = r with rational p, q, r; compare algebraic and arithmetic
  solution sequences.
- **7.EE.B.4.b** — solve word problems leading to px + q > r or
  px + q < r; graph the solution set; interpret it in context.

### Geometry (7.G) — U05, U06

- **7.G.A.1** — solve scale-drawing problems: actual lengths and areas
  from a scale drawing; reproduce a scale drawing at a different scale.
- **7.G.A.2** — draw shapes (freehand, ruler and protractor, technology)
  from given conditions; for triangles, note when conditions determine a
  unique triangle, more than one, or no triangle.
- **7.G.A.3** — describe 2-D figures from slicing 3-D figures (plane
  sections of right rectangular prisms and right rectangular pyramids).
- **7.G.B.4** — know the area and circumference formulas for a circle;
  use them; give an informal derivation of the circumference–area
  relationship.
- **7.G.B.5** — use supplementary, complementary, vertical, and adjacent
  angle facts in multi-step problems to write and solve simple equations
  for an unknown angle.
- **7.G.B.6** — solve problems involving area, volume, and surface area of
  2-D and 3-D objects composed of triangles, quadrilaterals, polygons,
  cubes, and right prisms.

### Statistics and Probability (7.SP) — U07, U08

- **7.SP.A.1** — statistics from a sample inform about a population;
  generalizations hold only for representative samples; random sampling
  tends to produce them.
- **7.SP.A.2** — draw inferences from random-sample data; generate
  multiple samples of the same size to gauge variation in estimates.
- **7.SP.B.3** — informally assess overlap of two numerical distributions;
  express the center difference as a multiple of a variability measure.
- **7.SP.B.4** — use center and variability measures from random samples
  for informal comparative inferences about two populations.
- **7.SP.C.5** — probability is a number from 0 to 1 expressing
  likelihood; larger means more likely; near 0 unlikely, near 1/2 neither,
  near 1 likely.
- **7.SP.C.6** — approximate probability by long-run relative frequency;
  predict approximate frequencies from a probability.
- **7.SP.C.7.a–b** — (a) develop uniform models; (b) develop models from
  observed frequencies (possibly non-uniform); compare model and observed
  probabilities; explain discrepancies.
- **7.SP.C.8.a–c** — compound events via organized lists, tables, tree
  diagrams, and simulation; identify composing outcomes; design and run a
  simulation (e.g., random digits).

## 5. 36-week sequence

Session model: four 45-minute sessions per week. Each unit runs 16
sessions: 4–6 core lessons (written by the unit build), guided/independent
practice, a reading or reference session, the investigation/project,
formative quiz, culminating assessment, and one review-and-reteach session.
Objectives numbered below are the track objectives from
[README.md](README.md#track-objectives-measurable-adult-assessed).

### Weeks 1–2 — Diagnostic and routines (flexible)

- Week 1: diagnostic tasks on fraction and decimal operations, ratio
  language, unit rates, order of operations, integer addition/subtraction
  on the number line, evaluating expressions, reading dot plots. Adult
  scores same-day and maps gaps.
- Week 2: establish routines — daily 10-minute fluency warm-up,
  number-line and area-model conventions, math-notebook setup, how to
  write a worked solution with a reason check. Begin catch-up sessions
  for flagged gaps (fraction division, negative integers).

### Unit 01 — Rational number operations (Weeks 3–6)

Objectives 1–3 (7.NS). Legacy support: rewrite
`rational-numbers-negatives-quiz` / `-set-02`, `operations-with-fractions-quiz`,
and the fraction items of `ratios-rates-quiz` into one keyed bank;
`hints-for-hints.md` becomes the embedded strategy reference.

- Week 3: add/subtract integers and rationals on the number line;
  opposite-quantities contexts; p − q = p + (−q); distance as |p − q|.
- Week 4: add/subtract fractions and decimals (all sign combinations);
  number-line tape diagrams; estimation checks.
- Week 5: multiply/divide rationals; properties justify sign rules;
  (−1)(−1) = 1; complex fractions; long division to
  terminating/repeating decimals.
- Week 6: multi-step real-world problems with all four operations;
  practice/review sessions; formative quiz and unit assessment.

### Unit 02 — Ratios, rates, and proportional relationships (Weeks 7–10)

Objectives 4–6 (7.RP.A.1–2). Legacy support: rewrite
`proportional-relationships-quiz.md` for proportionality testing; reuse
the car-speed items of `ratios-rates-quiz` with context variety;
`proportional-relationships-shop.md` becomes the unit application.

- Week 7: unit rates from fractional ratios (complex fractions);
  unlike-unit rates with correct units.
- Week 8: testing proportionality — equivalent ratios in tables;
  straight-line-through-origin graphs; distinguishing proportional from
  non-proportional relationships.
- Week 9: constant of proportionality in tables, graphs, equations,
  diagrams, descriptions; writing y = kx; interpreting (0, 0) and (1, r).
- Week 10: practice/review; shop-value application task; formative quiz
  and unit assessment.

### Unit 03 — Percent change, discounts, and simple interest (Weeks 11–14)

Objectives 7–8 (7.RP.A.3). Legacy support: extend
`proportional-relationships-shop.md`'s discount task into a full
percent-problem bank; `financial_tools_and_principles.md` supplies
contexts (rates and prices verified before reuse).

- Week 11: percent as a proportional relationship; percent increase and
  decrease; a + 0.05a = 1.05a rewriting.
- Week 12: discounts, markups, markdowns, sales tax, tips, commissions,
  fees; multi-step problems.
- Week 13: simple interest as proportional growth per period; percent
  error.
- Week 14: practice/review; budget-comparison investigation; formative
  quiz and unit assessment.

### Unit 04 — Expressions, equations, and inequalities (Weeks 15–18)

Objectives 9–12 (7.EE). Legacy support: key and broaden
`equivalent-expressions-quiz.md`; add keys and graphing conventions to
`solving-equations-quiz.md` and `solving-inequalities-quiz.md`;
`expressions-and-equations-checkpoint.md` becomes the practice bank;
`inequalities-budget-challenge.md` becomes the modeling project.

- Week 15: linear expressions with rational coefficients — expand,
  factor, add, subtract; rewriting to reveal structure.
- Week 16: multi-step real-life problems with rationals in any form;
  estimation reasonableness checks.
- Week 17: equations px + q = r and p(x + q) = r; algebraic vs.
  arithmetic solution sequences.
- Week 18: inequalities px + q > r / < r; graphing solution sets and
  interpreting in context; practice/review; budget-challenge project;
  formative quiz and unit assessment.

### Week 19 — Midyear review and catch-up (flexible)

Cumulative review of U01–U04 with a mixed practice set; targeted reteach
on the weakest two objectives per the adult's records; no new content.
The mislabeled `summer-mixed-review-...-quiz.md` is rewritten here as a
genuine mixed review with keys.

### Unit 05 — Scale drawings, angles, and geometric constructions (Weeks 20–23)

Objectives 13–15 (7.G.A.1–2, 7.G.B.5). Legacy support: rewrite
`geometry-angles-quiz.md` with complementary/vertical/adjacent angles
and angle-equation items; `geometry-scale-drawing-studio.md` becomes the
studio project with a rubric; `triangle-spotting-field-lab.md` becomes
the classification warm-up plus construction tasks; golden-ratio spec as
optional enrichment.

- Week 20: scale drawings — actual lengths and areas from a scale;
  reproducing at a different scale.
- Week 21: constructions (freehand, ruler/protractor, technology);
  triangle uniqueness from three measures (unique / multiple / none).
- Week 22: supplementary, complementary, vertical, adjacent angles;
  multi-step problems writing and solving equations for unknown angles.
- Week 23: scale-drawing studio project; practice/review; formative quiz
  and unit assessment.

### Unit 06 — Circles, area, surface area, and volume (Weeks 24–27)

Objectives 16–18 (7.G.A.3, 7.G.B.4, 7.G.B.6). Legacy support: rewrite
`geometry-area-circumference-quiz.md` (circumference items) and
`geometry-volume-surface-area-quiz.md` (prism volume/surface area);
`surface-area-design-studio.md` becomes the design project with rubric
and worked exemplar.

- Week 24: circumference and area of circles; informal derivation of
  the area–circumference relationship.
- Week 25: area of composite 2-D figures; surface area of prisms and
  pyramids via nets.
- Week 26: volume of prisms; cross-sections of right rectangular prisms
  and pyramids.
- Week 27: packaging-design project; practice/review; formative quiz and
  unit assessment.

### Unit 07 — Sampling, comparative statistics, and inference (Weeks 28–31)

Objectives 19–21 (7.SP.A–B). Legacy support: rewrite
`statistics-sampling-quiz.md` with sampling-design and comparative
items; `data-story-mini-lab.md` becomes the inference investigation;
`statistics-sports-analytics.md` becomes keyed practice; repository CSV
datasets (`us_states.csv`, `un_countries.csv`) supply real-data sampling
contexts with columns, units, and dates stated.

- Week 28: populations vs. samples; representative vs. biased samples;
  why random sampling works.
- Week 29: drawing inferences from random samples; multiple samples to
  gauge estimate variation.
- Week 30: comparing two distributions — visual overlap, center
  difference as a multiple of variability (MAD); informal comparative
  inferences.
- Week 31: data-story investigation; practice/review; formative quiz
  and unit assessment.

### Unit 08 — Probability models, experiments, and simulation (Weeks 32–35)

Objectives 22–25 (7.SP.C). Legacy support: rewrite
`probability-quiz.md` with compound-event and model items;
`probability-experiment-lab.md` becomes the long-run-frequency
investigation; `probability-game-lab.md` becomes the design-and-test
project with a rubric.

- Week 32: probability 0–1 with likelihood language; uniform models.
- Week 33: long-run relative frequency; predicting frequencies from
  probability; frequency-based (non-uniform) models.
- Week 34: compound events — organized lists, tables, tree diagrams;
  identifying composing outcomes.
- Week 35: simulations (random digits); model-vs-observed comparison;
  explaining discrepancies; practice/review; formative quiz and unit
  assessment.

### Week 36 — Final review (flexible)

Cumulative review across all eight units: a mixed assessment with keys,
one reteach session on the weakest objectives, and a year-end reflection
task (one strength, one next step). No new content.

## 6. Retrieval and review cadence

- Daily 10-minute warm-ups pull from earlier units (spaced practice:
  sign rules in U03, proportional equations in U05, fraction fluency in
  U08).
- Each unit's final session is review-and-reteach driven by the
  formative quiz evidence; the adult records which objectives needed
  reteach.
- Week 19 (midyear) and Week 36 (final) are cumulative, plus short
  cumulative starters at each unit's week 1.
- The quiz banks inherited from the legacy library are recycled as
  spaced-practice sets once rewritten and keyed.

## 7. Internal resource reuse for future units

| Unit | Repository resource | Use (with checks) |
|---|---|---|
| U01–U02 | `resources/math_fundamentals.md` | warm-up explanations for fractions, ratios; adapt register |
| U01–U02 | `resources/weights_and_measures.md` | unit-conversion contexts |
| U03 | `resources/financial_tools_and_principles.md` | percent/discount/interest contexts; verify current figures |
| U07 | `resources/us_states.csv`, `un_countries.csv`, `solar_system_planets.csv` | sampling/inference datasets; name columns, units, dates; label real vs. rounded |
| U05–U06 | `assignments/math/golden-ratio/` | enrichment only (ratio φ); verify interactives at build |
| U08 | `resources/math_fundamentals.md` (probability section) | supplements, not replacement for lessons |

Semester library and the assignment catalog
(`resources/semester-resource-library.md`, `assignments/README.md`) are
browsed before any citation; the legacy golden-ratio interactives are
previewed by the adult before assignment.

## 8. Safe materials

Household materials only: paper, pencils, ruler, protractor, compass,
two-color counters or dried beans, fraction bars or paper strips,
number-line tape, graph paper, dice, coins, playing cards, spinners,
scissors, tape, string, cardboard for nets. Adult supervises scissor and
compass use. No chemicals, heat, electricity, or shared-food activities.
Outdoor triangle-spotting is adult-accompanied; photographs must exclude
private information (faces, addresses, license plates).

## 9. Accessibility supports

- Every diagram ships with a text-only description carrying the same
  information; no question depends on color alone.
- Keyboard-operable, labeled HTML interactives with reset actions and
  printable text equivalents (tested narrow and desktop in unit builds).
- Word problems available as adult read-aloud; math vocabulary defined in
  context with a unit glossary.
- Manipulative alternatives for every abstract step (counters, bars,
  number lines); large-print and high-contrast variants of practice
  pages.
- Scribed or oral response modes for reflections and exit checks; chunked
  practice sets; extra time without timed speed tests.
- Distraction-reduced workspace option and one-task-at-a-time layouts.

## 10. Gaps and paths for future units

- No lessons, teacher guides, or answer keys exist — the eight unit
  builds supply them.
- No diagnostic instrument; Week 1–2 tasks must be written in U01 or R00.
- Percent/tax/tip/simple-interest content is thin (one discount task);
  U03 writes it new.
- Scale drawings, constructions, triangle uniqueness, cross-sections, and
  sampling/inference have no usable legacy content; U05–U07 write them
  new.
- No generated educational images anywhere; each unit build must create
  at least one genuine raster asset with alt text, caption, and a
  text-only alternative (per unit-requirements), plus deterministic
  SVG/HTML diagrams for precision.
- Defective/duplicate/mislabeled quizzes are rewritten, not deleted —
  their filenames are preserved by unit builds where practical, with
  defects documented in the unit's delivery comment.

## 11. Planned units (prose — no files yet; no links to missing files)

Unit builds follow the issue order. U01 (rational number operations)
comes first and carries the diagnostic and the rewritten number banks;
U02 (ratios, rates, proportional relationships) rebuilds the
proportional-relationships quiz around testing proportionality; U03
(percent change, discounts, simple interest) is mostly new writing; U04
(expressions, equations, inequalities) keys the equation/inequality banks
and builds the budget project; U05 (scale drawings, angles, constructions)
rewrites the angles bank and adds triangle-uniqueness tasks; U06 (circles,
area, surface area, volume) rewrites the two mislabeled geometry banks and
builds the packaging project; U07 (sampling, comparative statistics,
inference) is mostly new writing on top of the data-story investigation;
U08 (probability models, experiments, simulation) rebuilds the probability
bank around models and compound events. R00 delivers the diagnostic,
midyear/final review instruments, cumulative assessment and keys, and the
coherence, accessibility, source, and manifest audit.
