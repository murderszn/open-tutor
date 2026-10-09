# Grade 9 Mathematics — Scope and Sequence

Audit section A00 of [issue #42](https://github.com/murderszn/open-tutor/issues/42).
Status: **validated draft** (this document, the track README, and the grade-9
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-06 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-9 hub page | `curriculum/grade-9/README.md` | **New** — created by this run: math track listed as audited draft; science, language arts, social studies listed as planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-9/math/README.md` | **New** — written by this run as a real subject index with course description, 14 measurable objectives, verified standards summary, planned-unit list, and adult guidance |
| Scope and sequence | `curriculum/grade-9/math/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-9/math/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-9/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, or diagnostics exist to keep, revise, or retire |
| Grade-8 math track (#38, audit in open draft PR #105, unmerged) | PR branch | **Prerequisite reference only** — its 15 end-of-year objectives define the entry skills below; no grade-8 lessons copied upward; no learner-facing cross-grade links |
| Same-grade other subjects (#43 science, #44 language arts, #45 social studies) | unaudited | **No reuse** — not yet delivered |
| `resources/math_fundamentals.md` | explicitly grades 4–7 | **Bridge reference only** — integer/fraction fluency warm-ups where grade-8 skills are insecure; never assigned as grade-9 instruction |
| `resources/financial_tools_and_principles.md` | self-described grade 8–9 band | **Reuse with verification** — U02/U07 linear- and exponential-model contexts (pricing plans, compound interest); the adult verifies any prices, rates, or dates before reuse; educational examples are not investment advice |
| `resources/weights_and_measures.md` | comprehensive conversion reference | **Reuse** — U01/U08 unit-consistency and quantity-definition work (N-Q); the adult checks conversion facts before use |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/data sources | **Reuse** — U08 bivariate modeling datasets; every dataset task must name columns and units and state whether values are real, rounded, or fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| Desmos graphing calculator, GeoGebra | free no-account browser tools | **Reuse** — core digital tools for function graphing, transformations, and scatter-plot work; the adult previews for advertising and age suitability |
| `assignments/franchise-business-plan/index.html` (no README on `main`) | shared interactive | **Verify before citing** — an interactive business-plan builder that may supply U02/U03 cost-revenue modeling contexts; not yet reviewed, so it is not recommended until a unit build inspects it |

No answer-key gaps, inaccurate files, or dead links were found in the track —
there is nothing here yet to be inaccurate. The gap is total: no taught
lessons, no assessments, no keys, no diagnostics, no resource packs, and no
teaching images exist anywhere in `curriculum/grade-9/`.

## 2. Prerequisites

Learners typically enter grade-9 math with (the grade-8 track's stated
end-of-year objectives, currently in unmerged draft PR #105):

- Rational-number fluency: all four operations with integers, fractions, and
  decimals; order of operations; number-line reasoning
- Integer exponents and scientific notation: properties of exponents,
  single-digit × integer power of 10, operations in scientific notation
- Linear equations in one variable with rational coefficients, including the
  one / infinitely-many / no-solution classification; multi-step solving with
  the distributive property
- Slope, proportional relationships, and linear graphs: unit rate as slope;
  similar-triangles justification for constant slope; y = mx and y = mx + b
  from graphs, tables, and descriptions
- Systems of two linear equations solved by graphing and algebraically
  (substitution, elimination); intersections interpreted as solutions
- Function intuition at the grade-8 level: a rule assigning exactly one output
  per input; linear vs. nonlinear; qualitative graph reading — but **not**
  function notation
- Real numbers: rational vs. irrational; square and cube roots of perfect
  powers; equations x² = p and x³ = p; rational approximation of irrationals
- The Pythagorean Theorem for coordinate-plane distances
- Bivariate data: scatter plots, informal lines of best fit, two-way tables

The diagnostic weeks (Weeks 1–2) verify these; the track re-teaches insecure
skills in use before assuming them. The audit never assumes fluency with
symbolic factoring, quadratic structure, function notation, rational
exponents, exponential models, sequences, or formal statistical summaries —
those are this track's new content.

## 3. Track objectives

Measurable, adult-assessed by end of year (14 objectives; numbered in the track
README):

1. Interpret the parts of algebraic expressions — terms, factors, coefficients
   — in context, and rewrite expressions into equivalent forms using structure.
2. Solve linear equations and inequalities in one variable, including equations
   with letter coefficients, explaining each step as following from the
   equality of numbers asserted at the previous step.
3. Create equations and inequalities in one variable to solve problems, and
   rearrange formulas to highlight a quantity of interest.
4. Use function notation, evaluate functions, interpret statements written with
   function notation in context, and relate a function's domain to its graph
   and to the situation it describes.
5. Represent linear functions as tables, graphs, equations, and verbal
   descriptions; calculate and interpret average rate of change; interpret
   slope and intercept in context.
6. Build linear functions that model relationships between quantities from
   descriptions, two input-output pairs, tables, or graphs.
7. Solve systems of two linear equations exactly and approximately; justify
   elimination by showing it produces an equivalent system; represent
   constraints with systems of equations or inequalities and interpret
   solutions as viable or nonviable in context; graph linear inequalities in
   two variables.
8. Add, subtract, and multiply polynomials; rewrite radical and
   rational-exponent expressions using exponent properties.
9. Factor quadratic expressions and choose equivalent forms to reveal zeros,
   symmetry, or maximum/minimum values; connect zeros of polynomials to their
   graphs.
10. Solve quadratic equations by inspection, taking square roots, factoring,
    completing the square, and the quadratic formula, choosing the method
    that fits the equation's form; derive the quadratic formula by completing
    the square.
11. Analyze quadratic functions across representations: interpret key features
    of graphs and tables in context, write equivalent forms to reveal
    properties, compare two functions given in different representations, and
    describe the effect of transformations on graphs.
12. Write arithmetic and geometric sequences recursively and explicitly and
    use them to model situations; construct exponential functions; distinguish
    linear from exponential growth and interpret exponential parameters in
    context.
13. Use units to guide multi-step problem solving, define quantities for
    descriptive modeling, and choose a level of accuracy appropriate to
    measurement limitations.
14. Summarize univariate data with appropriate plots, center, and spread,
    accounting for outliers; summarize categorical data in two-way tables; fit
    linear, quadratic, and exponential functions to bivariate data, use fitted
    models in context, interpret slope and intercept of a linear model,
    interpret the correlation coefficient, and assess fit with residual
    analysis.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, High
School conceptual categories. The N-RN, N-Q, A-SSE, A-APR, A-CED, A-REI, F-IF,
F-BF, and S-ID domain pages on
[thecorestandards.org](https://www.thecorestandards.org/Math/) were opened and
read 2026-10-06; the F-LE page's final cluster was truncated in the site's
render, so F-LE.5's code and wording were corroborated against multiple
official-text reproductions the same day (also documented: the site's renders
skipped A-SSE.1.a and A-SSE.3.a, which the same reproductions confirm; and
S-ID.6.b/6.c did not appear in today's render, so residual-fit work is
described in prose under S-ID.6/6.a rather than assigned the unseen sub-codes).
Descriptions below are paraphrases, not reproductions. No state adoption,
accreditation, or alignment certification claimed.

**Course choice note.** The expansion plan proposes Algebra I as the grade-9
pathway. No state or district graduation requirement was specified; this is a
proposed pathway, not a universal requirement. A learner placed in geometry in
9th grade should not use this track as-is. Each unit's build will state its
grade-8 prerequisites explicitly so a guiding adult can re-sequence.

### Number and Quantity — U04, modeling weeks throughout

- **N-RN.1** — rational exponents extend integer-exponent properties, giving a
  notation for radicals in terms of rational exponents.
- **N-RN.2** — rewrite expressions involving radicals and rational exponents
  using exponent properties.
- **N-RN.3** — rational/irrational arithmetic closure facts, used to keep
  exact-vs-approximate distinctions honest in root work.
- **N-Q.1** — use units to understand problems and guide multi-step solutions;
  choose and interpret units, scale, and origin in graphs and data displays.
- **N-Q.2** — define appropriate quantities for descriptive modeling.
- **N-Q.3** — choose a level of accuracy appropriate to measurement limits.

### Algebra: Seeing Structure in Expressions — U01, U04, U05, U06, U07

- **A-SSE.1.a** — interpret parts of an expression (terms, factors,
  coefficients) in context.
- **A-SSE.1.b** — interpret complicated expressions by viewing one or more
  parts as a single entity.
- **A-SSE.2** — use expression structure to identify rewrites (for example,
  recognizing a difference of squares to factor it).
- **A-SSE.3.a** — factor a quadratic to reveal the zeros of the function it
  defines.
- **A-SSE.3.b** — complete the square in a quadratic to reveal its maximum or
  minimum value.
- **A-SSE.3.c** — use exponent properties to transform exponential-function
  expressions (for example, annual to monthly rate forms).

### Algebra: Arithmetic with Polynomials — U04, U05

- **A-APR.1** — polynomials are closed under addition, subtraction, and
  multiplication (analogous to the integers); add, subtract, multiply.
- **A-APR.3** — identify zeros of polynomials from suitable factorizations and
  use the zeros to sketch the function's graph.

### Algebra: Creating Equations — U01, U02, U03, U06

- **A-CED.1** — create equations and inequalities in one variable and use them
  to solve problems (linear, quadratic, and simple rational/exponential cases).
- **A-CED.2** — create equations in two or more variables to represent
  relationships; graph them on labeled, scaled axes.
- **A-CED.3** — represent constraints with equations/inequalities and systems,
  interpreting solutions as viable or nonviable in a modeling context.
- **A-CED.4** — rearrange formulas to highlight a quantity of interest, using
  equation-solving reasoning.

### Algebra: Reasoning with Equations and Inequalities — U01, U03, U06

- **A-REI.1** — explain each solution step as following from the equality of
  numbers asserted at the previous step; construct a viable justification.
- **A-REI.3** — solve linear equations and inequalities in one variable,
  including equations with letter coefficients.
- **A-REI.4.a** — complete the square to transform any quadratic into
  (x − p)² = q form, and derive the quadratic formula from that form.
- **A-REI.4.b** — solve quadratics by inspection, square roots, completing the
  square, the quadratic formula, or factoring, as appropriate to the form
  (complex solutions are recognized as such at the formula level).
- **A-REI.5** — replacing one equation by the sum of it and a multiple of the
  other produces a system with the same solutions (the elimination
  justification).
- **A-REI.6** — solve pairs of linear equations exactly and approximately
  (including by graph).
- **A-REI.7** — solve a simple linear/quadratic two-variable system
  algebraically and graphically (enrichment in U06).
- **A-REI.10** — the graph of a two-variable equation is the set of all its
  solutions plotted in the plane.
- **A-REI.11** — intersection x-coordinates of y = f(x) and y = g(x) solve
  f(x) = g(x); approximate solutions with technology, tables, or successive
  approximation (linear, polynomial, and exponential cases).
- **A-REI.12** — graph a linear inequality in two variables as a half-plane;
  graph a system of linear inequalities as the intersection of half-planes.

### Functions: Interpreting Functions — U02, U05, U07

- **F-IF.1** — a function assigns exactly one output to each domain element;
  f(x) is the output for input x; the graph of f is the graph of y = f(x).
- **F-IF.2** — use function notation, evaluate for domain inputs, interpret
  notation-based statements in context.
- **F-IF.3** — sequences are functions whose domain is a subset of the
  integers, sometimes defined recursively.
- **F-IF.4** — interpret key features of graphs and tables in context and
  sketch graphs from verbal descriptions (intercepts; increasing/decreasing,
  positive/negative intervals; maxima/minima; symmetry; end behavior).
- **F-IF.5** — relate a function's domain to its graph and to the described
  quantitative relationship.
- **F-IF.6** — calculate and interpret average rate of change over an interval
  (symbolic or tabular); estimate rate of change from a graph.
- **F-IF.7** — graph functions expressed symbolically and show key features,
  by hand in simple cases and with technology in harder ones.
- **F-IF.7.e** — graph exponential functions showing intercepts and end
  behavior (the trigonometric portion of this standard is out of scope).
- **F-IF.8** — write a function in different equivalent forms to reveal
  different properties.
- **F-IF.8.a** — use factoring and completing the square in a quadratic to
  show zeros, extreme values, and symmetry, interpreted in context.
- **F-IF.8.b** — use exponent properties to interpret exponential-function
  expressions (for example, identifying percent rate of change and
  growth-vs-decay classification).
- **F-IF.9** — compare properties of two functions given in different
  representations.

### Functions: Building Functions — U02, U05, U07

- **F-BF.1.a** — determine an explicit expression, recursive process, or
  calculation steps from a context.
- **F-BF.1.b** — combine standard function types with arithmetic operations
  (light touch; e.g., adding a constant function to a decaying exponential).
- **F-BF.2** — write arithmetic and geometric sequences recursively and
  explicitly, use them to model situations, translate between forms.
- **F-BF.3** — identify the graph effects of replacing f(x) by
  f(x) + k, k·f(x), f(kx), and f(x + k); find k given the graphs.

### Functions: Linear, Quadratic, and Exponential Models — U02, U07, U08

- **F-LE.1** — distinguish situations modeled by linear functions from those
  modeled by exponential functions.
- **F-LE.1.a** — linear functions grow by equal differences over equal
  intervals; exponential functions grow by equal factors.
- **F-LE.1.b** — recognize constant-rate-per-unit-interval situations.
- **F-LE.1.c** — recognize constant-percent-rate-per-unit-interval
  growth/decay situations.
- **F-LE.2** — construct linear and exponential functions (including
  arithmetic and geometric sequences) from a graph, description, or two
  input-output pairs.
- **F-LE.3** — observe from graphs and tables that exponential growth
  eventually exceeds linear, quadratic, or polynomial growth.
- **F-LE.5** — interpret the parameters in a linear or exponential function in
  terms of a context.

### Statistics and Probability: Interpreting Data — U08

- **S-ID.1** — represent single-variable data with dot plots, histograms, and
  box plots on the real number line.
- **S-ID.2** — compare center (median, mean) and spread (IQR, standard
  deviation) of data sets with statistics matched to the distribution's shape.
- **S-ID.3** — interpret differences in shape, center, and spread in context,
  accounting for outliers' effects.
- **S-ID.4** — use mean and standard deviation to fit data to a normal
  distribution and estimate population percentages where appropriate (with
  calculators/spreadsheets/tables); recognize when this is inappropriate.
- **S-ID.5** — summarize two-category categorical data in two-way frequency
  tables; interpret joint, marginal, and conditional relative frequencies;
  recognize associations and trends.
- **S-ID.6** — plot two quantitative variables on a scatter plot and describe
  how they are related.
- **S-ID.6.a** — fit a function to the data; use fitted functions to solve
  problems in context; emphasize linear, quadratic, and exponential models.
- **S-ID.7** — interpret slope (rate of change) and intercept (constant term)
  of a linear model in context.
- **S-ID.8** — compute (with technology) and interpret the correlation
  coefficient of a linear fit.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) =
36 weeks. Session model: **five 50-minute sessions per week** (20 sessions
per unit): 5–6 core lessons, strategy-based practice sessions, a
reading/reference session, the investigation or project, a formative quiz, the
culminating assessment, one review-and-reteach session, and flex sessions for
catch-up. Objectives numbered below are the track objectives from
[README.md](README.md#track-objectives-measurable-adult-assessed).

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Week 1 goal:** probe integer/rational operations, exponent-property use,
  multi-step linear-equation solving with solution-type classification, slope
  and y = mx + b fluency, algebraic and graphical systems solving,
  qualitative function reading, square/cube roots, and scatter-plot
  interpretation. The adult scores same-day and maps gaps to objectives 1–14.
- **Week 2 goal:** establish routines — math-notebook setup, conventions for
  writing a worked solution with a justification at each step, Desmos/GeoGebra
  orientation, calculator norms. Begin catch-up sessions for flagged gaps
  (fraction operations, negative integers, exponent rules). No new grade-9
  content yet.

### Unit 01 — Algebra foundations: expressions and equations (Weeks 3–6)

- **Standards:** A-SSE.1.a, A-SSE.1.b, A-SSE.2; A-CED.1, A-CED.4; A-REI.1,
  A-REI.3; N-Q.1, N-Q.3
- **Week 3 goal:** expression structure — identify terms, factors, and
  coefficients in context; evaluate expressions; rewrite into equivalent
  forms; view parts of complicated expressions as single entities.
- **Week 4 goal:** linear equations — multi-step solving with rational and
  letter coefficients; write a justification for every step; revisit the
  one / infinitely-many / no-solution classification in equation form.
- **Week 5 goal:** linear inequalities in one variable — solving, compound
  inequalities as an extension, number-line graphs, and what the solution set
  means in context.
- **Week 6 goal:** modeling and formulas — create one-variable
  equations/inequalities from problems; rearrange formulas to highlight a
  quantity (literal equations); accuracy appropriate to the context; review
  week with formative check. Objectives 1–3, 13 in play.

### Unit 02 — Linear functions: graphs and modeling (Weeks 7–10)

- **Standards:** F-IF.1, F-IF.2, F-IF.4, F-IF.5, F-IF.6, F-IF.7;
  F-BF.1.a; F-LE.2, F-LE.5; A-CED.2; A-REI.10, A-REI.11; N-Q.1, N-Q.2
- **Week 7 goal:** the function concept — exactly one output per input;
  domain and range; function notation f(x); evaluate and interpret
  notation-based statements in context; relate domain to graph and situation.
- **Week 8 goal:** linear functions across representations — tables, graphs,
  equations, descriptions; graph y = f(x) by hand; average rate of change
  over intervals from tables, symbols, and graphs; intercepts and intervals
  in context.
- **Week 9 goal:** building linear models — construct from descriptions, two
  input-output pairs, tables, or graphs; define the quantities being modeled;
  interpret slope and intercept parameters in context; constrain the domain to
  the situation.
- **Week 10 goal:** review week — representation-translation challenges,
  model-building scenarios with labeled axes and scales; formative check.
  Objectives 4–6, 13 in play.

### Unit 03 — Systems: inequalities and constraints (Weeks 11–14)

- **Standards:** A-REI.5, A-REI.6, A-REI.10, A-REI.11, A-REI.12;
  A-CED.2, A-CED.3; N-Q.2
- **Week 11 goal:** systems of two linear equations — substitution and
  elimination; prove elimination produces an equivalent system (A-REI.5);
  solve exactly and approximately; intersections are the solutions.
- **Week 12 goal:** constraint modeling — represent constraints with systems
  of equations/inequalities; graph with labels and scales; interpret
  solutions as viable or nonviable options in context.
- **Week 13 goal:** linear inequalities in two variables — graph as
  half-planes; systems of linear inequalities as intersections of
  half-planes; test-point reasoning.
- **Week 14 goal:** review week — break-even, mixture, and resource-constraint
  scenarios; formative check. Objectives 7, 13 in play.

### Unit 04 — Exponents: polynomials and operations (Weeks 15–18)

- **Standards:** N-RN.1, N-RN.2; A-SSE.2; A-APR.1; N-RN.3
- **Week 15 goal:** rational exponents — extend integer-exponent properties to
  rational values; read a^(1/n) as a root; rewrite radical and
  rational-exponent expressions; keep exact forms distinct from decimal
  approximations.
- **Week 16 goal:** polynomial operations — add, subtract, multiply;
  closure under these operations, analogous to the integers; use structure
  to choose rewrites (for example, spotting a difference of squares).
- **Week 17 goal:** geometric models of multiplication — area and volume
  models for polynomial products; degree and leading-term language; review
  of exponent rules in polynomial contexts.
- **Week 18 goal:** midyear review (flexible) — cumulative problems across
  objectives 1–8 and 13; re-teach the highest-need objective; formative check.
  Objectives 8, 13 in play.

### Unit 05 — Quadratic functions and factoring (Weeks 19–22)

- **Standards:** A-SSE.1.b, A-SSE.2, A-SSE.3.a, A-SSE.3.b; A-APR.3;
  F-IF.4, F-IF.7, F-IF.8, F-IF.8.a, F-IF.9; F-BF.3; A-REI.11
- **Week 19 goal:** factoring quadratics — GCF, trinomials, difference of
  squares, perfect-square trinomials; factored form reveals zeros; zeros
  sketch the graph.
- **Week 20 goal:** vertex form — complete the square in quadratic
  expressions to reveal maximum/minimum; symmetry of the graph; graph
  transformations f(x) + k, k·f(x), f(kx), f(x + k) and find k from graphs.
- **Week 21 goal:** key features in context — intercepts, vertex, axis of
  symmetry, increasing/decreasing intervals, end behavior; compare two
  quadratics given in different representations; sketch from verbal
  descriptions.
- **Week 22 goal:** review week — factoring puzzles, feature-analysis tasks,
  form-choice challenges (factored vs. vertex vs. standard); formative check.
  Objectives 9 (partial), 11 in play.

### Unit 06 — Quadratic equations and applications (Weeks 23–26)

- **Standards:** A-REI.4.a, A-REI.4.b; A-CED.1; A-REI.11;
  A-REI.7 (enrichment); F-IF.8.a
- **Week 23 goal:** solving by inspection, square roots, and factoring —
  revisit x² = p with both solutions; match method to form.
- **Week 24 goal:** completing the square — transform any quadratic into
  (x − p)² = q form; derive the quadratic formula; recognize when the formula
  signals non-real solutions.
- **Week 25 goal:** applications — projectile, area, and revenue models;
  create quadratic equations from problems; solve approximately by graphing
  intersections.
- **Week 26 goal:** review week — method-selection tasks ("which method fits
  this form and why"); enrichment: a linear/quadratic system solved
  algebraically and graphically; formative check. Objectives 3, 10 in play.

### Unit 07 — Exponential functions and sequences (Weeks 27–30)

- **Standards:** F-IF.3, F-IF.6, F-IF.7, F-IF.7.e, F-IF.8.b; F-BF.1.a,
  F-BF.1.b, F-BF.2, F-BF.3; F-LE.1, F-LE.1.a, F-LE.1.b, F-LE.1.c, F-LE.2,
  F-LE.3, F-LE.5; A-SSE.3.c; N-RN.2
- **Week 27 goal:** sequences as functions — arithmetic vs. geometric;
  recursive and explicit forms; model situations with sequences and
  translate between the two forms.
- **Week 28 goal:** exponential functions — equal factors over equal
  intervals vs. linear's equal differences; constant percent rate situations;
  construct from two input-output pairs, graphs, or descriptions.
- **Week 29 goal:** exponential forms and parameters — rewrite with exponent
  properties (for example, annual to monthly rate forms); identify percent
  rate of change and growth-vs-decay; interpret parameters in context;
  exponential growth eventually exceeds linear and quadratic.
- **Week 30 goal:** review week — growth-model comparisons, sequence-vs-model
  choice tasks; formative check. Objectives 8 (partial), 12 in play.

### Unit 08 — Descriptive statistics: residuals and model comparison (Weeks 31–34)

- **Standards:** S-ID.1, S-ID.2, S-ID.3, S-ID.4; S-ID.5;
  S-ID.6, S-ID.6.a, S-ID.7, S-ID.8; N-Q.1, N-Q.3; F-LE.2
- **Week 31 goal:** single-variable summaries — dot plots, histograms, box
  plots; center and spread matched to shape (mean/standard deviation vs.
  median/IQR); outliers' effects; normal-distribution fitting where
  appropriate (with technology), and recognizing when it is not.
- **Week 32 goal:** categorical bivariate data — two-way frequency tables;
  joint, marginal, and conditional relative frequencies; associations and
  trends.
- **Week 33 goal:** fitting models to bivariate data — scatter plots; fit
  linear, quadratic, and exponential functions; use fitted models to solve
  problems in context; interpret slope and intercept of a linear model.
- **Week 34 goal:** residuals and model comparison — residual plots to assess
  fit (described under S-ID.6/6.a; S-ID.6.b/6.c were not in the 2026-10-06
  site render, so no sub-code is assigned); correlation coefficient via
  technology; choose among competing models with evidence; formative check.
  Objectives 13, 14 in play.

### Weeks 35–36 — Final review (flexible)

Cumulative tasks across all fourteen objectives — expression-structure
challenges, multi-representation function work, constraint-modeling scenarios,
quadratic and exponential applications, a full data-modeling investigation;
re-teach where evidence shows gaps; final observational assessment and keys
(delivered with R00).

## 6. Retrieval and review cadence

Every unit opens with a retrieval warm-up from prior units (for example, U02
reprises U01's justification habit when solving for parameters; U04's
exponent work retrieves U01's structure language; U06's method-selection
retrieves U05's factored/vertex/standard forms; U08's model fitting is the
data-side twin of U02's and U07's model building). Each unit's Week 4
re-teaches and re-checks that unit's objectives; the midyear week (Week 18)
and final weeks (35–36) are full-track reviews. Formative checks are short
written tasks the adult reviews the same day; each unit's teacher guide
specifies what "ready to move on" looks like. All fluency work is
strategy-based — no timed speed tests.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every
  unit's Resource Pack (queries, verified videos/search links, references,
  task mapping).
- `resources/financial_tools_and_principles.md` (self-described grade 8–9
  band) — U02 linear-model contexts (pricing plans, break-even) and U07
  exponential contexts (compound interest); verify any prices, rates, or
  dates before reuse; educational examples, not investment advice.
- `resources/weights_and_measures.md` — U01/U08 unit-consistency and
  quantity-definition work; the adult checks conversion facts before use.
- `resources/us_states.csv`, `resources/un_countries.csv`,
  `resources/solar_system_planets.csv` — U08 bivariate modeling datasets;
  every dataset task names columns and units and states whether values are
  real, rounded, or fictional practice data.
- `resources/math_fundamentals.md` (grades 4–7) — entry warm-ups only, where
  grade-8 skills are insecure; never grade-9 instruction.
- Desmos (free no-account browser graphing calculator) and GeoGebra —
  U02/U03/U05/U07/U08 graphing, transformations, and scatter-plot work.
- `assignments/franchise-business-plan/index.html` — possible U02/U03
  cost-revenue modeling context; verify before citing (no README on `main`).

## 8. Safe materials

Standard math-class supplies: graph paper, rulers, index cards for
vocabulary, algebra tiles or paper strips for factoring models, dice for
sampling warm-ups. Digital tools: Desmos and GeoGebra (free, no-account
browser versions) for function graphing, transformations, and residual plots;
a calculator app or scientific calculator for U07/U08 — the adult previews
for advertising and age suitability. No lab chemicals, no sharp tools beyond
classroom compasses; indoor alternatives for all measuring tasks. Online
sessions follow the adult-supervised, no-account norms used throughout the
track.

## 9. Accessibility supports

- **Multiple response modes** for all checks: written, oral, typed, or drawn;
  adult scribes when writing stamina lags.
- High-contrast, large-format coordinate grids; graph features described in
  words as well as drawn; color is never the only cue.
- Sessions of about 50 minutes with movement breaks; every investigation has
  a seated-table and a standing/digital variant.
- Language support: vocabulary taught with graphs and objects first, word
  second; visual word walls (coefficient, parameter, residual, domain,
  transformation); home-language labels welcomed alongside English terms.
- Every graph ships with a text-only alternative (table of values or verbal
  description). Desmos and GeoGebra both offer keyboard navigation — the unit
  guides note the keystrokes.
- Fluency work is strategy-based, never timed — no speed tests in any unit.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #42.
- No taught lessons exist anywhere in the track — the largest gap.
- Generated raster teaching images (one per unit, used in an activity with
  alt text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- U02/U05/U07 need reproducible function-graph diagrams (SVG/HTML, not
  generated art) for exact graphing work; U08 needs a labeled fictional
  bivariate dataset if real repository data does not fit the modeling tasks.
- The grade-8 math audit (open draft PR #105, unmerged) is the entry
  prerequisite reference; when it merges, confirm the entry-skills list
  against the merged version.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Algebra foundations: expressions and equations; U02 Linear functions:
graphs and modeling; U03 Systems: inequalities and constraints; U04
Exponents: polynomials and operations; U05 Quadratic functions and factoring;
U06 Quadratic equations and applications; U07 Exponential functions and
sequences; U08 Descriptive statistics: residuals and model comparison; R00
diagnostic, midyear/final review, and cumulative assessments with keys. Each
will follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #42 body, comments, and label state re-read 2026-10-06 before
  claiming; no competing claim (0 comments prior to the claim comment);
  `curriculum-in-progress` label added with a timestamped claim comment.
- No other `curriculum-in-progress` claims active on any queue issue at claim
  time; open worker PRs (#87–#105, other tracks) were not touched. Cross-track
  reviews #58/#59/#60 are ineligible (all-track A00, all-track U01, and
  all-sections-merged dependencies unmet).
- `curriculum/grade-9/` re-inventoried on `main` @ `2c43d24`: 0 files —
  matches the issue's 2026-10-01 baseline of 0 Markdown files.
- Standards codes/descriptions verified 2026-10-06: HSN/RN, HSN/Q, HSA/SSE
  (1.b, 2, 3, 3.b, 3.c, 4 shown), HSA/APR, HSA/CED, HSA/REI, HSF/IF, HSF/BF,
  HSS/ID against thecorestandards.org domain pages; the site's render skipped
  A-SSE.1.a, A-SSE.3.a, the F-LE.B cluster text, and S-ID.6.b/6.c — the same
  rendering quirk documented by earlier audits. A-SSE.1.a, A-SSE.3.a, and
  F-LE.5 were corroborated against multiple official-text reproductions the
  same day; residual-fit work is described under verified S-ID.6/6.a without
  assigning the unseen 6.b/6.c sub-codes. Descriptions in this document are
  paraphrases. No state adoption, accreditation, or alignment certification
  claimed.
- Repository guide reuse decisions checked against the guides' actual content
  and stated grade bands. The fourteen objectives map onto the issue's
  U01–U08 checklist order, kept as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
