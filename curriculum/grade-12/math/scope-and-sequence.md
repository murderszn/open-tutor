# Grade 12 Mathematics — Scope and Sequence

Audit section A00 of [issue #54](https://github.com/murderszn/open-tutor/issues/54).
Status: **validated draft** (this document, the track README, and the grade-12
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-08 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-12 hub page | `curriculum/grade-12/README.md` | **New** — created by this run: math track listed as audited draft; science, language arts, social studies listed as planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-12/math/README.md` | **New** — written by this run as a real subject index with course description, 13 measurable objectives, verified standards summary, planned-unit list, and adult guidance |
| Scope and sequence | `curriculum/grade-12/math/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-12/math/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-12/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, or diagnostics exist to keep, revise, or retire |
| Grade-11 math track (#50, audit in open draft PR #117, unmerged) | PR branch | **Prerequisite reference only** — its 14 end-of-year objectives define the function-family entry skills below; no grade-11 lessons copied upward; no learner-facing cross-grade links |
| Grade-9 math track (#42, audit in open draft PR #106, unmerged) and grade-10 math track (#46, audit in open draft PR #114, unmerged) | PR branches | **Background reference only** — symbolic fluency and geometric reasoning are assumed via the grade-11 objectives; no lessons copied |
| Same-grade other subjects (#55 science, #56 language arts, #57 social studies) | unaudited | **No reuse** — not yet delivered |
| `resources/math_fundamentals.md` | explicitly grades 4–7 | **Bridge reference only** — arithmetic fluency warm-ups where grade-11 skills are insecure; never assigned as grade-12 instruction |
| `resources/weights_and_measures.md` | comprehensive conversion reference | **Reuse** — U02–U03 angle/velocity unit consistency and U05–U08 quantity-definition work (N-Q); the adult checks conversion facts before use |
| `resources/financial_tools_and_principles.md` | self-described grade 8–9 band | **Verify before reuse** — U04 series-based savings/loan contexts and U05 expected-value game contexts; the adult verifies any rates, prices, or dates before reuse; educational examples are not investment or gambling advice |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/data sources | **Reuse** — U05 empirical distribution frames and U08 capstone modeling data; every dataset task must name columns and units and state whether values are real, rounded, or fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| Desmos graphing calculator; spreadsheet software | free no-account browser tools | **Reuse** — core digital tools for polar/parametric graphing, distribution tables, simulations, and residual tables; the adult previews for advertising and age suitability |
| `resources/semester-resource-library.md` | discovery library | **Verify before citing** — lists Khan Academy precalculus-adjacent paths and Desmos as discovery starting points; every linked item will be opened and checked for fit by the building run before recommendation |

No answer-key gaps, inaccurate files, or dead links were found in the track —
there is nothing here yet to be inaccurate. The gap is total: no taught
lessons, no assessments, no keys, no diagnostics, no resource packs, and no
teaching images exist anywhere in `curriculum/grade-12/`.

## 2. Prerequisites

Learners typically enter grade-12 math with the grade-11 track's
function-family reasoning (Algebra II pathway, currently in unmerged draft
PR #117):

- Graph transformations f(x) + k, kf(x), f(kx), f(x + k); even/odd
  functions; composition, decomposition, and inverses of simple functions
- Polynomial factoring, the Remainder and Factor Theorems, zeros including
  complex zeros a ± bi, polynomial graphs with end behavior
- Rational expressions and functions: simplification, asymptotes, extraneous
  solutions in rational and radical equations
- Exponential and logarithmic forms, logarithm properties, solving
  ab^(ct) = d; fitting exponential models to data
- The unit circle, radian measure, the Pythagorean identity; sine/cosine
  models for periodic phenomena with amplitude, period/frequency, midline
- Arithmetic and geometric sequences (recursive and explicit); the finite
  geometric series sum; compound-interest models
- Surveys vs. experiments vs. observational studies; simulation-based
  inference; conditional probability; permutations and combinations
- Written justification of every solution step; function notebooks with
  definition / key-features / model-library sections; Desmos and
  spreadsheet fluency

The diagnostic weeks (Weeks 1–2) verify these; the track re-teaches insecure
skills in use before assuming them. The audit never assumes fluency with
vectors, parametric or polar representations, complex numbers in polar form,
probability distributions and expected value, infinite series, the Binomial
Theorem, mathematical induction, trigonometric sum/difference identities,
algebraic optimization, or limits — those are this track's new content.

## 3. Track objectives

Measurable, adult-assessed by end of year (13 objectives; numbered in the track
README):

1. Analyze functions across families (polynomial, rational, radical,
   exponential, logarithmic, trigonometric, piecewise) for domain, range,
   intercepts, intervals of increase and decrease, extrema, end behavior,
   asymptotes, and symmetry; sketch graphs from the analysis and verify
   with technology.
2. Compose and decompose functions in context; construct and interpret
   inverse functions, including restricting a domain to produce an
   invertible function; interpret an inverse's meaning in a real situation.
3. Prove and apply trigonometric identities — Pythagorean, cofunction,
   even/odd, sum and difference, double-angle — simplifying expressions and
   verifying identities with a justification at each step.
4. Solve trigonometric equations in context, finding all solutions over a
   stated interval; use inverse trigonometric functions and interpret each
   solution in the situation.
5. Represent vectors geometrically and in component form; add, subtract, and
   scale vectors; solve velocity, force, and displacement problems with
   magnitude-direction reasoning.
6. Model motion and curves with parametric equations; convert among
   parametric, rectangular, and polar representations; graph polar equations
   and interpret their features; represent complex numbers in polar form.
7. Write sequences recursively and explicitly; derive and apply finite and
   infinite geometric series sums; use sigma notation; apply the Binomial
   Theorem; prove statements with mathematical induction.
8. Construct probability distributions for random variables; compute and
   interpret expected value; weigh decisions by expected value; evaluate
   whether a decision procedure is fair.
9. Use normal and binomial models for distributions; connect simulation-based
   inference to distribution-based inference; interpret parameters of a
   distribution in context.
10. Build algebraic models for optimization contexts; locate maxima and minima
    with algebraic methods (equivalent forms, completing the square,
    endpoint analysis); interpret solutions as viable or nonviable options.
11. Estimate limits numerically, graphically, and algebraically; describe
    one-sided limits, limits at infinity, and continuity in plain language;
    connect average rate of change to instantaneous rate of change
    (optional calculus bridge).
12. Compare competing mathematical models for a real dataset or situation;
    defend the choice with rate-of-change, residual, distribution, and
    domain reasoning in writing.
13. Use units to understand and guide multi-step solutions; define
    appropriate quantities for descriptive modeling; report results with
    accuracy appropriate to measurement limits.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, High
School conceptual categories. The N-VM, N-CN, S-MD, and G-GPE domain pages on
[thecorestandards.org](https://www.thecorestandards.org/Math/) were opened
and read 2026-10-08 (live browser); N-VM.C.8 and G-GPE.2 were skipped by the
site's render that day and are noted as corroborated by the grade-11 audit's
2026-10-07 method. The F-TF page was behind a request-verification wall on
2026-10-08, so F-TF.9 is corroborated against multiple official-text
reproductions opened the same day (consistent with the method the grade-11
audit used on 2026-10-07). The remaining codes below were verified against
the official framework on 2026-10-07 by the grade-11 audit run and are
re-cited here. Descriptions below are paraphrases, not reproductions. No
state adoption, accreditation, or alignment certification claimed.

Standards marked **(+)** are advanced in the published document; the track
teaches some as core where the unit list demands them, always with the
marking stated.

**Course choice note.** The expansion plan proposes "Precalculus, statistics,
and modeling; optional calculus bridge" as the grade-12 pathway. No state or
district graduation requirement was specified; this is a proposed pathway,
not a universal requirement. A learner placed in calculus, statistics, or a
terminal algebra course in 12th grade should not use this track as-is. Each
unit's build will state its grade-11 prerequisites explicitly so a guiding
adult can re-sequence.

### Algebra: Seeing Structure in Expressions — U01, U06

- **A-SSE.1.a** — interpret parts of an expression (terms, factors,
  coefficients) in context. (Verified 2026-10-07.)
- **A-SSE.1.b** — interpret complicated expressions by viewing one or more
  of their parts as a single entity. (Verified 2026-10-07.)
- **A-SSE.2** — use the structure of an expression to identify ways to
  rewrite it. (Verified 2026-10-07.)

### Algebra: Arithmetic with Polynomials & Rational Expressions — U01, U04

- **A-APR.2** — know and apply the Remainder Theorem. (Verified 2026-10-07;
  grade-11 core, used as prerequisite fluency.)
- **A-APR.3** — identify zeros of polynomials when suitable factorizations
  are available; use zeros to sketch graphs. (Verified 2026-10-07;
  prerequisite fluency.)
- **A-APR.5 (+)** — know and apply the Binomial Theorem for (x + y)ⁿ with
  coefficients from Pascal's Triangle. (Verified 2026-10-07; (+) technically,
  but this track teaches it as core in U04 since binomial expansion is a
  precalculus staple; the marking is stated, not hidden.)

### Algebra: Creating Equations — U01, U06, U08

- **A-CED.1** — create equations and inequalities in one variable and use
  them to solve problems. (Verified 2026-10-07.)
- **A-CED.2** — create equations in two or more variables to represent
  relationships; graph with labels and scales. (Verified 2026-10-07.)
- **A-CED.3** — represent constraints by equations, inequalities, or
  systems; interpret solutions as viable or nonviable options in a modeling
  context. (Verified 2026-10-07; central to U06 optimization.)
- **A-CED.4** — rearrange formulas to highlight a quantity of interest.
  (Verified 2026-10-07.)

### Algebra: Reasoning with Equations & Inequalities — U01, U02, U06

- **A-REI.1** — explain each step in solving an equation as following from
  the previous step; construct a viable justification argument. (Verified
  2026-10-07; the track's written-justification habit.)
- **A-REI.11** — explain why intersection x-coordinates solve f(x) = g(x);
  find solutions approximately with technology. (Verified 2026-10-07;
  U01 equation/graph reasoning.)

### Number & Quantity: The Complex Number System — U03

- **N-CN.4 (+)** — represent complex numbers on the complex plane in
  rectangular and polar form, and explain why the two forms of a given
  number represent the same number. (Verified 2026-10-08.)
- **N-CN.5 (+)** — represent addition, subtraction, multiplication, and
  conjugation of complex numbers geometrically on the complex plane; use
  the representation for computation. (Verified 2026-10-08.)
- **N-CN.6 (+)** — calculate the distance between numbers in the complex
  plane as the modulus of the difference, and the midpoint of a segment as
  the average of the numbers at its endpoints. (Verified 2026-10-08;
  enrichment in U03.)

### Number & Quantity: Vector & Matrix Quantities — U03

- **N-VM.1 (+)** — recognize vector quantities as having magnitude and
  direction; represent them by directed line segments with appropriate
  symbols. (Verified 2026-10-08.)
- **N-VM.2 (+)** — find a vector's components by subtracting the initial
  point's coordinates from the terminal point's. (Verified 2026-10-08.)
- **N-VM.3 (+)** — solve problems involving velocity and other quantities
  representable by vectors. (Verified 2026-10-08.)
- **N-VM.4.a** — add vectors end-to-end, component-wise, and by the
  parallelogram rule; understand that the magnitude of a sum is typically
  not the sum of the magnitudes. (Verified 2026-10-08.)
- **N-VM.4.b** — given two vectors in magnitude-direction form, determine
  the magnitude and direction of their sum. (Verified 2026-10-08.)
- **N-VM.4.c** — understand vector subtraction as adding the opposite
  vector; represent it graphically and compute it component-wise.
  (Verified 2026-10-08.)
- **N-VM.5.a** — represent scalar multiplication graphically by scaling
  (and possibly reversing) vectors; multiply component-wise. (Verified
  2026-10-08.)
- **N-VM.5.b** — compute the magnitude of a scalar multiple cv as
  |c| times the magnitude of v; determine its direction from the sign of c.
  (Verified 2026-10-08.)
- **N-VM.C.6–C.12 (+)** — matrices for data, transformations, and systems.
  (Verified 2026-10-08; C.8 was skipped by the site's render that day.)
  These are all (+) advanced and are **not scheduled** in this track's eight
  units; the issue's unit list contains no matrices. They are documented
  here only so a future run knows the gap explicitly rather than silently.

### Number & Quantity: Quantities — every unit

- **N-Q.1** — use units to understand problems and guide multi-step
  solutions; choose units, scales, and origins deliberately. (Verified
  2026-10-07.)
- **N-Q.2** — define appropriate quantities for descriptive modeling.
  (Verified 2026-10-07.)
- **N-Q.3** — choose accuracy appropriate to measurement limits when
  reporting quantities. (Verified 2026-10-07.)

### Functions: Interpreting Functions — U01 (review and extension)

- **F-IF.1, F-IF.2** — the function concept and notation. (Verified
  2026-10-07; prerequisite fluency.)
- **F-IF.4** — interpret key features of graphs and tables: intercepts,
  increasing/decreasing intervals, extrema, symmetries, end behavior,
  periodicity. (Verified 2026-10-07; extended to all families in U01.)
- **F-IF.5** — relate domain to graph and quantitative relationship.
  (Verified 2026-10-07.)
- **F-IF.6** — calculate and interpret average rate of change; estimate
  from a graph. (Verified 2026-10-07; difference quotients in U01 preview
  U07 limits.)
- **F-IF.7.a–e** — graph functions symbolically showing key features:
  linear/quadratic (a), root and piecewise (b), polynomial (c), rational
  with asymptotes (d, (+)), exponential/logarithmic/trigonometric (e).
  (Verified 2026-10-07; U01 synthesizes all five.)
- **F-IF.8** — write a function in different equivalent forms to reveal
  different properties. (Verified 2026-10-07; central to U06 optimization.)
- **F-IF.9** — compare properties of two functions given in different
  representations. (Verified 2026-10-07.)

### Functions: Building Functions — U01

- **F-BF.1.a** — determine explicit expressions, recursive processes, or
  calculation steps from a context. (Verified 2026-10-07.)
- **F-BF.1.b** — combine standard function types with arithmetic
  operations. (Verified 2026-10-07.)
- **F-BF.3** — identify the effect of replacing f(x) by f(x) + k, kf(x),
  f(kx), f(x + k); find k from graphs. (Verified 2026-10-07; prerequisite
  fluency extended to every family.)
- **F-BF.4.a** — solve f(x) = c for a simple invertible function and write
  the inverse. (Verified 2026-10-07; prerequisite fluency.)
- **F-BF.4.d (+)** — produce an invertible function from a non-invertible
  one by restricting the domain. (Verified 2026-10-07; core in U01 — this
  is the working tool behind inverse trigonometric functions in U02.)

### Functions: Trigonometric Functions — U02

- **F-TF.3 (+), F-TF.4 (+)** — special-triangle values; symmetry and
  periodicity from the unit circle. (Verified 2026-10-07; review.)
- **F-TF.6 (+)** — restricting a trigonometric function to a monotone
  domain so its inverse exists. (Verified 2026-10-07; core in U02 via
  F-BF.4.d.)
- **F-TF.7 (+)** — use inverse functions to solve trigonometric equations
  in modeling contexts; evaluate with technology. (Verified 2026-10-07;
  core in U02.)
- **F-TF.8** — prove the Pythagorean identity and use it to find trig
  values given one value and a quadrant. (Verified 2026-10-07; review.)
- **F-TF.9 (+)** — prove the addition and subtraction formulas for sine,
  cosine, and tangent and use them to solve problems. (Corroborated
  2026-10-08 against multiple official-text reproductions; the site's TF
  page was behind a request-verification wall that day. Core new content
  in U02; double-angle and half-angle identities follow as corollaries.)

### Functions: Linear, Quadratic & Exponential Models — U01, U08 (review)

- **F-LE.1, 1.a–c, 2–5** — distinguish linear from exponential situations;
  construct the functions; interpret parameters in context. (Corroborated
  2026-10-07; U01 review, U08 capstone model-choice.)

### Geometry: Expressing Geometric Properties with Equations — background

- **G-GPE.1** — derive a circle's equation from center and radius with the
  Pythagorean Theorem; complete the square to recover center and radius.
  (Verified 2026-10-08; background from the grade-10 track.)
- **G-GPE.2** — derive a parabola's equation from focus and directrix.
  (Render-skipped by the site on 2026-10-08; documented as enrichment in
  the grade-10 track's unmerged audit, PR #114, per the grade-11 audit.)
- **G-GPE.3 (+)** — derive ellipse and hyperbola equations from the foci
  using constant sums/differences of distances. (Verified 2026-10-08.)
  This is **not scheduled** in the eight units; conic sections beyond
  circles and parabolas are a documented gap a future run may add as U01
  enrichment or an R00 extension.

### Statistics & Probability: review clusters — U05

- **S-ID.1–4** — data displays; center/spread matched to shape; normal
  models. (Verified 2026-10-07; prerequisite fluency for distributions.)
- **S-IC.1–5** — sampling, simulation-based model checks, study design,
  margins of error, treatment comparisons. (Verified 2026-10-07;
  prerequisite fluency; U05 connects simulation inference to
  distribution-based inference.)
- **S-CP.1–9** (8 and 9 are (+) advanced) — sample spaces, conditional
  probability, independence, addition and multiplication rules, counting.
  (Verified 2026-10-07; prerequisite fluency.)

### Statistics & Probability: Using Probability to Make Decisions — U05

The entire S-MD domain is marked (+) in the published document; this track
teaches S-MD.1–5 as core probability-distribution content with the marking
stated, and reserves S-MD.6–7 as enrichment:

- **S-MD.1 (+)** — define a random variable by assigning a numerical value
  to each event in a sample space; graph the probability distribution.
  (Verified 2026-10-08.)
- **S-MD.2 (+)** — calculate the expected value of a random variable;
  interpret it as the mean of the distribution. (Verified 2026-10-08.)
- **S-MD.3 (+)** — develop a probability distribution where theoretical
  probabilities can be calculated; find the expected value. (Verified
  2026-10-08.)
- **S-MD.4 (+)** — develop a probability distribution where probabilities
  are assigned empirically; find the expected value. (Verified 2026-10-08.)
- **S-MD.5 (+)** — weigh a decision's possible outcomes by assigning
  probabilities to payoffs and finding expected values. (Verified
  2026-10-08.)
- **S-MD.5.a** — find the expected payoff for a game of chance. (Verified
  2026-10-08; educational analysis only — not gambling advice.)
- **S-MD.5.b** — evaluate and compare strategies by expected values.
  (Verified 2026-10-08.)
- **S-MD.6 (+)** — use probabilities to make fair decisions. (Verified
  2026-10-08; enrichment.)
- **S-MD.7 (+)** — analyze decisions and strategies with probability
  concepts. (Verified 2026-10-08; enrichment.)

### Precalculus topics without CCSS-M codes

Stated honestly so a future run does not hunt for codes that do not exist:

- **Parametric equations** — no CCSS-M code names them; they are standard
  precalculus modeling tools. Taught as core in U03 alongside vectors.
- **Infinite geometric series and convergence** — CCSS-M names only the
  finite sum (A-SSE.4). Taught as core in U04.
- **Mathematical induction** — no CCSS-M code; standard precalculus proof
  method. Taught as core in U04.
- **Limits, continuity, instantaneous rate of change** — outside CCSS-M
  entirely. U07 is an explicitly optional calculus bridge; no unit claims
  standards coverage for it.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) =
36 weeks. Session model: **five 50-minute sessions per week** (20 sessions
per unit): 4–6 core lessons, strategy-based practice sessions, a
reading/reference session, the investigation or project, a formative quiz,
the culminating assessment, one review-and-reteach session, and flex sessions
for catch-up. Objectives numbered below are the track objectives from
[README.md](README.md#track-objectives-measurable-adult-assessed).

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Week 1 goal:** probe function notation and transformations, polynomial
  factoring and zeros, rational-expression algebra, logarithm properties,
  unit-circle values and radian measure, sequence formulas, compound
  interest, two-way-table probability, and simulation-based inference
  vocabulary. The adult scores same-day and maps gaps to objectives 1–13.
- **Week 2 goal:** establish routines — precalculus notebook setup
  (definitions / family library / proof and modeling journal sections),
  conventions for writing a solution with a justification at every step
  (A-REI.1), Desmos polar/parametric and spreadsheet-distribution
  orientation, and the rule that every model answer states its assumptions.
  Begin catch-up sessions for flagged gaps (factoring, logarithms, unit
  circle). No new grade-12 content yet.

### Unit 01 — Advanced function analysis and mathematical modeling (Weeks 3–6)

- **Standards:** F-IF.1, 2, 4–9 (7.d is (+)); F-BF.1.a, 1.b, 3, 4.a,
  4.d (+); F-LE.1–5 (review); A-SSE.1.a, 1.b, 2; A-CED.1–4; A-REI.1, 11;
  N-Q.1–3
- **Week 3 goal:** the family library rebuilt — domain, range, intercepts,
  increase/decrease, extrema, end behavior, asymptotes, symmetry analyzed
  for one member of each family; sketch-from-analysis then verify with
  Desmos; transformations of a general f across all families.
- **Week 4 goal:** composition and decomposition in context — two-stage
  models; inverses of simple functions; restricting domains to invert
  (the tool U02's inverse trig will use); average rate of change and the
  difference quotient as a slope preview.
- **Week 5 goal:** piecewise and rational deepening — F-IF.7.b and 7.d
  (+) revisited with precalculus rigor; equivalent forms chosen to reveal
  properties (F-IF.8); model-building from two-variable contexts with
  constraints (A-CED.2, 3).
- **Week 6 goal:** modeling week — build, compare, and select among
  function families for a real dataset with written rate-of-change and
  residual justification; review week with formative check. Objectives 1,
  2, 13 in play.

### Unit 02 — Trigonometric identities, equations, and applications (Weeks 7–10)

- **Standards:** F-TF.3 (+), 4 (+), 6 (+), 7 (+), 8 (review), 9 (+);
  F-BF.4.d (+) (applied); F-IF.7.e (review); A-REI.1; N-Q.1, 2
- **Week 7 goal:** identity toolkit — Pythagorean, cofunction, even/odd
  identities proved and applied; simplifying expressions with a
  justification at each step; exact values from special angles.
- **Week 8 goal:** sum and difference formulas — prove sin(A±B) and
  cos(A±B) (F-TF.9 (+)); derive double-angle and half-angle identities as
  corollaries; use them for exact values and simplifications.
- **Week 9 goal:** trigonometric equations — solve in context over stated
  intervals; inverse trigonometric functions with restricted domains;
  interpret every solution in the situation (tides, rotation, oscillation).
- **Week 10 goal:** applications and proof workshop — identity proofs
  presented in writing; applied periodic problems with parameter
  interpretation; review week with formative check. Objectives 3, 4 in
  play.

### Unit 03 — Vectors, parametric equations, and polar representations (Weeks 11–14)

- **Standards:** N-VM.1 (+), 2 (+), 3 (+), 4.a–c, 5.a–b; N-CN.4 (+), 5 (+),
  6 (+) (enrichment); parametric equations and polar graphs (no CCSS-M
  codes — standard precalculus content, stated in §4); N-Q.1–3
- **Week 11 goal:** vectors as quantities — magnitude and direction;
  geometric representation; components from coordinates; adding,
  subtracting, and scaling vectors geometrically and component-wise.
- **Week 12 goal:** vector applications — velocity, force, and displacement
  problems; magnitude-direction form and the parallelogram rule; resultant
  reasoning with the triangle inequality intuition.
- **Week 13 goal:** parametric equations — modeling motion and curves with
  (x(t), y(t)); eliminating the parameter; projectile and path contexts;
  polar coordinates, conversion, and polar graphs (lines, circles,
  cardioids, roses) with technology.
- **Week 14 goal:** complex numbers in polar form — modulus and argument;
  geometric multiplication; distance and midpoint on the complex plane
  (enrichment); review week with formative check. Objectives 5, 6 in play.

### Unit 04 — Sequences, series, and discrete models (Weeks 15–18)

- **Standards:** F-IF.3, F-BF.2 (review); A-SSE.4 (review, finite sums);
  A-APR.5 (+) (Binomial Theorem, core here); A-CED.1 (modeling); infinite
  geometric series and induction (no CCSS-M codes — standard precalculus
  content, stated in §4); N-Q.1–3
- **Week 15 goal:** sequences revisited with rigor — recursive and explicit
  forms; sequences as functions on the integers; sigma notation; modeling
  discrete situations.
- **Week 16 goal:** series — arithmetic and finite geometric sums derived;
  infinite geometric series and convergence (|r| < 1); savings and loan
  models as series applications (educational examples, not advice).
- **Week 17 goal:** the Binomial Theorem and induction — Pascal's Triangle
  to (x + y)ⁿ; proving sequence and series statements with mathematical
  induction; discrete-model project work.
- **Week 18 goal:** **midyear review** — cumulative retrieval of U01–U04
  (function analysis, identities, vectors/parametric/polar, series);
  proof-writing workshop; formative cumulative check. Objective 7 in play,
  objectives 1–6 revisited.

### Unit 05 — Probability distributions and statistical inference (Weeks 19–22)

- **Standards:** S-MD.1–5 (+) (core here, marking stated), 5.a, 5.b,
  6 (+), 7 (+) (enrichment); S-ID.4, S-IC.1–5, S-CP.1–9 (review);
  N-Q.1–3
- **Week 19 goal:** random variables and distributions — assigning values
  to events; graphing probability distributions; theoretical vs. empirical
  distributions; binomial distributions from repeated trials.
- **Week 20 goal:** expected value — computing and interpreting it as the
  distribution's mean; theoretical and empirical expected values;
  connecting to simulation-based inference from grade 11.
- **Week 21 goal:** decisions by expected value — weighing payoffs;
  expected payoff of games of chance (educational analysis, not gambling
  advice); comparing strategies; fair-decision procedures (enrichment).
- **Week 22 goal:** distributions in inference — normal and binomial
  models; distribution-based reasoning alongside simulation; review week
  with formative check. Objectives 8, 9 in play.

### Unit 06 — Optimization and modeling with algebraic methods (Weeks 23–26)

- **Standards:** A-CED.1–4; A-SSE.1.a, 1.b, 2, 3.b (review); F-IF.8;
  F-BF.1.a; A-REI.1; N-Q.1–3
- **Week 23 goal:** equivalent forms that reveal extrema — vertex form by
  completing the square; factored form for zeros; choosing forms for the
  question asked (F-IF.8).
- **Week 24 goal:** algebraic optimization — maxima and minima from forms
  and endpoint analysis; constraint modeling with systems; viable vs.
  nonviable solutions (A-CED.3); area, volume, cost, and revenue contexts.
- **Week 25 goal:** modeling project — build and optimize a model for a
  real context; compare algebraic candidates; defend choices in writing
  with assumption statements.
- **Week 26 goal:** review week with formative check. Objective 10 in play;
  objectives 1, 2, 13 revisited.

### Unit 07 — Limits and rates of change: optional calculus bridge (Weeks 27–30)

- **Standards:** none in CCSS-M — this unit is explicitly optional
  enrichment (see §4). Builds on F-IF.6 (average rate of change) and
  F-IF.7.d (+) (asymptote behavior).
- **Week 27 goal:** limits numerically and graphically — tables and graphs
  approaching a point; one-sided limits; limits at infinity and end
  behavior revisited with limit notation.
- **Week 28 goal:** limits algebraically — direct substitution, factoring,
  rationalizing; continuity in plain language; removable vs. jump vs.
  infinite discontinuities.
- **Week 29 goal:** rates of change — the difference quotient and the
  secant-to-tangent idea; instantaneous rate as a limit; slope of a curve
  at a point, conceptually; velocity as a motivating context.
- **Week 30 goal:** bridge review — what calculus will formalize;
  formative check; learners not continuing to calculus consolidate U01–U06
  modeling instead. Objective 11 in play for those taking the bridge.

### Unit 08 — Capstone: comparing models and defending conclusions (Weeks 31–34)

- **Standards:** cumulative — F-LE.1–5, F-IF.9, A-CED.2, 3, N-Q.1–3;
  S-IC.6 (evaluate reports based on data); S-MD.5.b (compare strategies)
- **Week 31 goal:** capstone launch — choose a real dataset or situation
  (dataset tasks name columns, units, and real/rounded/fictional status);
  candidate model families proposed with assumption statements.
- **Week 32 goal:** model building — fit and compare at least three
  candidate models; rate-of-change, residual, distribution, and domain
  evidence assembled; peer-critique of assumptions (adult-facilitated).
- **Week 33 goal:** defense — written report defending the chosen model
  with evidence; evaluation of a published data-based claim (S-IC.6);
  presentation with text alternatives for all visuals.
- **Week 34 goal:** capstone presentations; cumulative assessment;
  portfolio assembly. Objective 12 in play, all objectives revisited.

### Weeks 35–36 — Final review (flexible)

- **Week 35 goal:** cumulative retrieval — function families and key
  features, identity proofs, vector operations, parametric/polar
  conversions, series formulas, distribution vocabulary, optimization
  strategies, limit intuition; capstone portfolio finalization.
- **Week 36 goal:** final cumulative assessment with keys; learning
  reflection; plan next-course placement (calculus, statistics, or applied
  modeling) with the adult.

## 6. Materials, safety, and accessibility

**Core kit (all year):** graph paper, pencils, erasers, ruler, protractor,
scientific calculator (or calculator app), compass and straightedge for
geometric constructions, notebook with definition / family-library /
proof-and-modeling-journal sections, index cards for vocabulary and
identities. A laptop or tablet with a browser for Desmos (including polar
and parametric modes) and spreadsheet work.

**Safety:** adult supervision for any cutting or craft tools used in
model-building tasks. No chemicals, heat, or hazardous materials anywhere in
this track. Hands-on alternatives (simulation or observation) are provided
for any activity a learner cannot perform physically.

**Accessibility supports:** bold-grid graph paper; colorblind-safe palettes
with every color paired to a label; read-aloud of definitions, proofs, and
worked solutions; solution-writing scaffolds (reason banks,
fill-in-then-free progression); extended time on multi-step symbolic work;
Desmos and spreadsheet accessibility features previewed by the adult;
text-only alternatives for every visual activity including polar graphs and
vector diagrams; large-print and high-contrast options for function graphs.

## 7. Paths for future units

- Each unit's Resource Pack will be generated with
  `teachers/ai-assistants/resource_finder.md`, using the Resource Finder
  format (summary, 3–6 focused queries, 3–7 videos or labeled search links,
  4–7 reputable references, task-to-resource mapping).
- The [semester resource library](../../../resources/semester-resource-library.md)
  lists Khan Academy precalculus-adjacent paths and Desmos as discovery
  starting points; every linked item will be opened and checked for fit by
  the building run before recommendation.
- Each unit needs one genuinely generated raster teaching image used in an
  activity (with alt text, caption, generation record in `assets/README.md`,
  and a text-only alternative), plus precise SVG/HTML diagrams wherever
  measurements, labels, or function graphs must be exact. A unit missing its
  generated image stays unchecked per the issue requirements.
- Shared datasets are available for practice tasks; dataset tasks name
  columns, units, and whether values are real, rounded, or fictional.
- Financial and game-of-chance contexts (U04, U05) must be verified against
  current sources by the building run and labeled educational examples, not
  advice.
- U07 is optional: a unit run may instead deliver an applied-modeling
  extension for learners not taking the calculus bridge, keeping the
  eight-unit count and prerequisite order intact.

## 8. Validation and delivery record

- `git ls-tree -r origin/main -- curriculum/grade-12/` confirmed the track
  folder empty on `main` at commit `2c43d24` before this run.
- Standards codes verified against the official framework: N-VM, N-CN, S-MD,
  and G-GPE on 2026-10-08 (live browser; N-VM.C.8 and G-GPE.2 skipped by the
  site's render that day, noted above); F-TF.9 corroborated 2026-10-08
  against multiple official-text reproductions (the site's TF page was
  behind a request-verification wall); all remaining codes verified
  2026-10-07 by the grade-11 audit run. Descriptions are paraphrases, not
  reproductions. (+) markings follow the published document exactly
  (N-VM.1–3, N-CN.3–6, S-MD.1–7, G-GPE.3, F-TF.3, 4, 6, 7, 9, A-APR.5,
  F-BF.4.d, F-IF.7.d). A-APR.5 and S-MD.1–5 are (+) but taught as core
  where the unit list requires them; the marking is stated, not hidden. No
  state adoption, accreditation, or alignment certification is claimed.
- Topics without CCSS-M codes (parametric equations, infinite series,
  induction, limits) are named explicitly in §4 rather than force-fit to
  codes.
- Link check on new files: internal relative links verified by hand and by
  `python3 scripts/validate-library.py` (run at delivery).
- No generated images are required for an audit section; none were produced.
- Manifest and indexes updated truthfully (see delivery comment on
  issue #54).

## 9. Remaining sections

Issue #54's next section is **U01 — Advanced function analysis and
mathematical modeling** (four to six written lessons, investigation, quiz,
assessment, keys, Resource Pack, generated image), then U02–U08 in
prerequisite order, then R00 (diagnostic, midyear/final review, cumulative
assessment and keys).
