# Grade 11 Mathematics — Scope and Sequence

Audit section A00 of [issue #50](https://github.com/murderszn/open-tutor/issues/50).
Status: **validated draft** (this document, the track README, and the grade-11
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-07 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-11 hub page | `curriculum/grade-11/README.md` | **New** — created by this run: math track listed as audited draft; science, language arts, social studies listed as planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-11/math/README.md` | **New** — written by this run as a real subject index with course description, 14 measurable objectives, verified standards summary, planned-unit list, and adult guidance |
| Scope and sequence | `curriculum/grade-11/math/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-11/math/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-11/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, or diagnostics exist to keep, revise, or retire |
| Grade-9 math track (#42, audit in open draft PR #106, unmerged) | PR branch | **Prerequisite reference only** — its 14 end-of-year objectives define the symbolic-function entry skills below; no grade-9 lessons copied upward; no learner-facing cross-grade links |
| Grade-10 math track (#46, audit in open draft PR #114, unmerged) | PR branch | **Prerequisite reference only** — its 13 end-of-year objectives define the geometric/coordinate entry skills below; no grade-10 lessons copied upward; no learner-facing cross-grade links |
| Same-grade other subjects (#51 science, #52 language arts, #53 social studies) | unaudited | **No reuse** — not yet delivered |
| `resources/math_fundamentals.md` | explicitly grades 4–7 | **Bridge reference only** — integer/fraction/percent fluency warm-ups where grade-9/10 skills are insecure; never assigned as grade-11 instruction |
| `resources/weights_and_measures.md` | comprehensive conversion reference | **Reuse** — U05–U08 unit-consistency and quantity-definition work (N-Q); the adult checks conversion facts before use |
| `resources/financial_tools_and_principles.md` | self-described grade 8–9 band | **Verify before reuse** — U07 compound-interest, present-value, and payment contexts; the adult verifies any rates, prices, or dates before reuse; educational examples are not investment advice |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/data sources | **Reuse** — U07 series practice frames and U08 survey/sampling, two-way-table, and scatter-plot tasks; every dataset task must name columns and units and state whether values are real, rounded, or fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| Desmos graphing calculator; spreadsheet software | free no-account browser tools | **Reuse** — core digital tools for graph transformations, curve fitting, simulations, and residual tables; the adult previews for advertising and age suitability |
| `resources/semester-resource-library.md` | discovery library | **Verify before citing** — lists Khan Academy Algebra 2 paths and Desmos as discovery starting points; every linked item will be opened and checked for fit by the building run before recommendation |

No answer-key gaps, inaccurate files, or dead links were found in the track —
there is nothing here yet to be inaccurate. The gap is total: no taught
lessons, no assessments, no keys, no diagnostics, no resource packs, and no
teaching images exist anywhere in `curriculum/grade-11/`.

## 2. Prerequisites

Learners typically enter grade-11 math with the grade-9 track's symbolic
fluency (Algebra I pathway, currently in unmerged draft PR #106) and the
grade-10 track's geometric reasoning (Geometry pathway, currently in unmerged
draft PR #114):

- Solving linear equations and inequalities with a justification at each
  step; one / infinitely-many / no-solution classification
- Function notation and function concepts: evaluating, interpreting
  notation-based statements, relating domain to graph and situation
- Polynomial operations; exponent properties including rational exponents;
  radical expressions in exact form
- Quadratic factoring and equivalent forms; solving quadratics by inspection,
  square roots, factoring, completing the square, and the quadratic formula
- Quadratic, linear, and exponential functions: key features, equivalent
  forms, transformations, average rate of change, comparisons across
  representations; fitting functions to data with residual checks
- Coordinate geometry: distance, midpoint, slope, graphing on the coordinate
  plane; the Pythagorean Theorem in coordinate contexts
- Right-triangle trigonometry: sine, cosine, tangent as ratios; angles of
  elevation and depression; laws of sines and cosines (grade 10)
- Proof habits: stated definitions, two-column or paragraph justification,
  counterexamples for false claims

The diagnostic weeks (Weeks 1–2) verify these; the track re-teaches insecure
skills in use before assuming them. The audit never assumes fluency with
complex numbers, rational-function graphs and asymptotes, logarithm
properties, the unit circle and radian measure, statistical inference with
simulation, conditional probability, or financial series — those are this
track's new content.

## 3. Track objectives

Measurable, adult-assessed by end of year (14 objectives; numbered in the track
README):

1. Predict and verify the effect on a graph of replacing f(x) by
   f(x) + k, kf(x), f(kx), and f(x + k) for positive and negative k;
   recognize even and odd functions from graphs and expressions.
2. Compose functions from context and decompose composite functions; solve
   f(x) = c and write the inverse of a simple invertible function; interpret
   an inverse's meaning in a real situation.
3. Factor polynomials of degree 3 and 4; apply the Remainder and Factor
   Theorems; find all zeros including complex zeros written as a ± bi; graph
   polynomial functions showing zeros, end behavior, and turning-point
   counts.
4. Add, subtract, multiply, and divide rational expressions; rewrite a(x)/b(x)
   as q(x) + r(x)/b(x); graph rational functions showing zeros, vertical,
   horizontal, and slant asymptotes, and end behavior.
5. Solve rational and radical equations in one variable; detect and explain
   extraneous solutions; graph square-root and cube-root functions with
   transformations and state their domains and ranges.
6. Convert between exponential and logarithmic forms; apply logarithm
   properties; solve exponential equations of the form ab^(ct) = d and
   logarithmic equations; fit exponential models to data and interpret rate
   parameters in context.
7. Convert between degrees and radians; use the unit circle to evaluate sine,
   cosine, and tangent for standard and non-standard angles; prove and apply
   the Pythagorean identity.
8. Choose sine or cosine models for periodic phenomena with specified
   amplitude, period or frequency, and midline; solve applied periodic
   problems and interpret each parameter in context.
9. Write arithmetic and geometric sequences recursively and explicitly;
   translate between forms; derive and use the finite geometric series sum;
   evaluate savings, loan, and payment models with compound interest.
10. Distinguish sample surveys, experiments, and observational studies; use
    randomization and simulation to judge whether a model fits observed
    results, estimate a margin of error, and decide whether a treatment
    difference is significant.
11. Summarize single-variable data with plots matched to the question and
    center/spread measures matched to shape; fit normal models where
    appropriate; fit linear, quadratic, and exponential functions to bivariate
    data and interpret slope, intercept, and the correlation coefficient.
12. Compute conditional probabilities and test independence with two-way
    frequency tables; apply the addition and multiplication rules; use
    permutations and combinations in counting-based probability.
13. Build, compare, and select function models (polynomial, rational,
    radical, exponential, logarithmic, trigonometric) for a context; justify
    the choice with rate-of-change and residual reasoning in writing.
14. Use units to understand and guide multi-step solutions; define
    appropriate quantities for descriptive modeling; report results with
    accuracy appropriate to measurement limits.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, High
School conceptual categories. The A-SSE, A-APR, A-CED, A-REI, F-IF, F-BF,
F-TF, N-CN, N-VM, S-IC, S-ID, S-CP, and N-Q domain pages on
[thecorestandards.org](https://www.thecorestandards.org/Math/) were opened
and read 2026-10-07 (live browser). The site's HSF/LE page was behind a
request-verification wall on two attempts that day, so the F-LE cluster is
corroborated against multiple official-text reproductions opened the same day
(consistent with the method the grade-9 audit used on 2026-10-06); A-SSE.1.a
and A-SSE.3.a, which the site's SSE render skipped today, were already
verified by that same method and are re-cited here. Descriptions below are
paraphrases, not reproductions. No state adoption, accreditation, or
alignment certification claimed.

Standards marked **(+)** are advanced in the published document; the track
teaches them as optional enrichment where marked.

**Course choice note.** The expansion plan proposes Algebra II as the
grade-11 pathway. No state or district graduation requirement was specified;
this is a proposed pathway, not a universal requirement. A learner placed in
Geometry or Precalculus in 11th grade should not use this track as-is. Each
unit's build will state its grade-9/10 prerequisites explicitly so a guiding
adult can re-sequence.

### Algebra: Seeing Structure in Expressions — U01, U02, U05, U07

- **A-SSE.1.a** — interpret parts of an expression (terms, factors,
  coefficients) in context. (Corroborated 2026-10-06 via official-text
  reproductions; the site's render skipped it today.)
- **A-SSE.1.b** — interpret complicated expressions by viewing one or more
  of their parts as a single entity. (Verified today.)
- **A-SSE.2** — use the structure of an expression to identify ways to
  rewrite it (for example, recognizing x⁴ − y⁴ as a difference of squares
  that factors as (x² − y²)(x² + y²)). (Verified today.)
- **A-SSE.3.a** — factor a quadratic to reveal the zeros of the function it
  defines. (Corroborated 2026-10-06 via official-text reproductions; the
  site's render skipped it today.)
- **A-SSE.3.b** — complete the square in a quadratic expression to reveal
  the maximum or minimum value of the function it defines. (Verified today.)
- **A-SSE.3.c** — use the properties of exponents to transform expressions
  for exponential functions (for example, rewriting 1.15ᵗ to reveal the
  equivalent monthly rate). (Verified today.)
- **A-SSE.4** — derive the formula for the sum of a finite geometric series
  (when the common ratio is not 1) and use the formula to solve problems
  (for example, calculating mortgage payments). (Verified today.)

### Algebra: Arithmetic with Polynomials & Rational Expressions — U02, U03

- **A-APR.1** — polynomials form a system analogous to the integers: closed
  under addition, subtraction, and multiplication; add, subtract, and
  multiply polynomials. (Grade-9 core; reused as prerequisite fluency in
  U02.)
- **A-APR.2** — know and apply the Remainder Theorem: for a polynomial p(x)
  and a number a, the remainder on division by x − a is p(a), so p(a) = 0
  exactly when (x − a) is a factor. (Verified today.)
- **A-APR.3** — identify zeros of polynomials when suitable factorizations
  are available, and use the zeros to construct a rough graph of the
  function. (Verified today.)
- **A-APR.4** — prove polynomial identities and use them to describe
  numerical relationships (for example, the identity
  (x² + y²)² = (x² − y²)² + (2xy)² generating Pythagorean triples).
  (Verified today; enrichment in U02.)
- **A-APR.5 (+)** — know and apply the Binomial Theorem for (x + y)ⁿ with
  coefficients from Pascal's Triangle. (Verified today; enrichment in U02.)
- **A-APR.6** — rewrite simple rational expressions in different forms:
  write a(x)/b(x) as q(x) + r(x)/b(x) with the degree of r(x) less than the
  degree of b(x), using inspection, long division, or a computer algebra
  system for the harder cases. (Verified today.)
- **A-APR.7 (+)** — understand that rational expressions form a system
  analogous to the rational numbers, closed under addition, subtraction,
  multiplication, and division by a nonzero rational expression; add,
  subtract, multiply, and divide rational expressions. (Verified today;
  (+) technically, but this track teaches it as core in U03 since rational
  simplification is an Algebra II staple.)

### Algebra: Creating Equations — U02, U04, U05, U07

- **A-CED.1** — create equations and inequalities in one variable and use
  them to solve problems, including equations from linear and quadratic
  functions and simple rational and exponential functions. (Verified today.)
- **A-CED.2** — create equations in two or more variables to represent
  relationships between quantities; graph equations on coordinate axes
  with labels and scales. (Verified today.)
- **A-CED.3** — represent constraints by equations or inequalities and by
  systems, and interpret solutions as viable or nonviable options in a
  modeling context. (Verified today.)
- **A-CED.4** — rearrange formulas to highlight a quantity of interest,
  using the same reasoning as in solving equations (for example,
  rearranging V = IR to highlight resistance R). (Verified today.)

### Algebra: Reasoning with Equations & Inequalities — U01, U02, U04, U05, U07

- **A-REI.1** — explain each step in solving a simple equation as following
  from the equality of numbers asserted at the previous step, starting from
  the assumption that the original equation has a solution; construct a
  viable argument to justify a solution method. (Verified today; the
  track's written-justification habit.)
- **A-REI.2** — solve simple rational and radical equations in one
  variable, and give examples showing how extraneous solutions may arise.
  (Verified today; U03–U04.)
- **A-REI.4.b** — solve quadratic equations by inspection, square roots,
  completing the square, the quadratic formula, and factoring, as
  appropriate; recognize when the quadratic formula gives complex solutions
  and write them as a ± bi. (Verified today; grade-9 core extended to
  complex solutions in U02.)
- **A-REI.7** — solve a simple system consisting of a linear equation and
  a quadratic equation in two variables, algebraically and graphically
  (for example, the intersections of y = −3x with x² + y² = 3).
  (Verified today; U01, where graph intersections preview f(x) = g(x)
  reasoning.)
- **A-REI.11** — explain why the x-coordinates of the points where the
  graphs of y = f(x) and y = g(x) intersect are the solutions of
  f(x) = g(x); find solutions approximately with technology, including
  cases where f and g are polynomial, rational, absolute value,
  exponential, or logarithmic functions. (Verified today; U02, U03, U05.)

### Number & Quantity: The Complex Number System — U02

- **N-CN.1** — know there is a complex number i such that i² = −1, and
  that every complex number has the form a + bi with a and b real.
  (Verified today.)
- **N-CN.2** — use the relation i² = −1 and the commutative, associative,
  and distributive properties to add, subtract, and multiply complex
  numbers. (Verified today.)
- **N-CN.3 (+)** — find the conjugate of a complex number; use conjugates
  to find moduli and quotients of complex numbers. (Verified today;
  enrichment in U02.)
- **N-CN.8 (+)** — extend polynomial identities to the complex numbers
  (for example, rewriting x² + 4 as (x + 2i)(x − 2i)). (Verified today;
  enrichment in U02.)
- **N-CN.9 (+)** — know the Fundamental Theorem of Algebra; show that it
  is true for quadratic polynomials. (Verified today; enrichment in U02.)

### Functions: Interpreting Functions — U01–U06

- **F-IF.1** — understand a function as assigning exactly one output to
  each element of its domain; f(x) denotes the output for input x; the
  graph of f is the graph of y = f(x). (Verified today.)
- **F-IF.2** — use function notation, evaluate functions for inputs in
  their domains, and interpret notation-based statements in context.
  (Verified today.)
- **F-IF.3** — recognize that sequences are functions, sometimes defined
  recursively, whose domain is a subset of the integers (for example, the
  Fibonacci sequence defined by f(0) = f(1) = 1 and
  f(n+1) = f(n) + f(n−1)). (Verified today; U07.)
- **F-IF.4** — for a function modeling a relationship between two
  quantities, interpret key features of graphs and tables: intercepts;
  increasing/decreasing/positive/negative intervals; relative maximums
  and minimums; symmetries; end behavior; periodicity. (Verified today.)
- **F-IF.5** — relate a function's domain to its graph and to the
  quantitative relationship it describes (for example, positive integers
  for an engine-assembly model). (Verified today.)
- **F-IF.6** — calculate and interpret the average rate of change of a
  function over a specified interval; estimate rate of change from a
  graph. (Verified today.)
- **F-IF.7** — graph functions expressed symbolically and show key
  features, by hand in simple cases and with technology for complicated
  ones. (Verified today.)
- **F-IF.7.b** — graph square root, cube root, and piecewise-defined
  functions, including step and absolute value functions. (Verified
  today; U04.)
- **F-IF.7.c** — graph polynomial functions, identifying zeros when
  suitable factorizations are available, and showing end behavior.
  (Verified today; U02.)
- **F-IF.7.d (+)** — graph rational functions, identifying zeros and
  asymptotes when suitable factorizations are available, and showing end
  behavior. (Verified today; U03.)
- **F-IF.7.e** — graph exponential and logarithmic functions, showing
  intercepts and end behavior, and trigonometric functions, showing
  period, midline, and amplitude. (Verified today; U05, U06.)
- **F-IF.8** — write a function defined by an expression in different but
  equivalent forms to reveal different properties. (Verified today.)
- **F-IF.8.b** — use the properties of exponents to interpret expressions
  for exponential functions (for example, identifying percent rate of
  change in y = (1.02)ᵗ vs. y = (0.97)ᵗ and classifying growth vs.
  decay). (Verified today; U05.)
- **F-IF.9** — compare properties of two functions each represented in a
  different way (algebraically, graphically, numerically, or verbally).
  (Verified today.)

### Functions: Building Functions — U01, U05, U07

- **F-BF.1.a** — determine an explicit expression, a recursive process, or
  steps for calculation from a context. (Verified today; U07.)
- **F-BF.1.b** — combine standard function types using arithmetic
  operations (for example, modeling a cooling body's temperature by
  adding a constant function to a decaying exponential). (Verified today;
  U01 enrichment.)
- **F-BF.1.c (+)** — compose functions (for example, T(h(t)) for a
  weather balloon's height and temperature functions). (Verified today;
  U01 core.)
- **F-BF.2** — write arithmetic and geometric sequences both recursively
  and with an explicit formula, use them to model situations, and
  translate between the two forms. (Verified today; U07.)
- **F-BF.3** — identify the effect on the graph of replacing f(x) by
  f(x) + k, kf(x), f(kx), and f(x + k) for specific values of k (positive
  and negative); find k given the graphs; illustrate explanations with
  technology; recognize even and odd functions from graphs and
  expressions. (Verified today; U01 core.)
- **F-BF.4.a** — solve an equation of the form f(x) = c for a simple
  function f that has an inverse and write an expression for the inverse
  (for example, f(x) = 2x³ or f(x) = (x+1)/(x−1) for x ≠ 1). (Verified
  today; U01, U05.)
- **F-BF.4.c (+)** — read values of an inverse function from a graph or
  table, given that the function has an inverse. (Verified today;
  enrichment in U01.)
- **F-BF.4.d (+)** — produce an invertible function from a non-invertible
  function by restricting the domain. (Verified today; enrichment in U06
  around inverse trigonometry.)
- **F-BF.5 (+)** — understand the inverse relationship between exponents
  and logarithms and use it to solve problems involving logarithms and
  exponents. (Verified today; U05 core in all but name — the (+) marking
  is noted, the content is essential to the logarithm concept.)

### Functions: Linear, Quadratic & Exponential Models — U05, U07

Corroborated 2026-10-07 against multiple official-text reproductions (the
site's HSF/LE page was bot-blocked twice that day; the grade-9 audit
verified the same cluster on 2026-10-06 by the same method):

- **F-LE.1** — distinguish situations modeled by linear functions from
  those modeled by exponential functions.
- **F-LE.1.a** — linear functions grow by equal differences over equal
  intervals; exponential functions grow by equal factors.
- **F-LE.1.b** — recognize constant-rate-per-unit-interval situations.
- **F-LE.1.c** — recognize constant-percent-rate-per-unit-interval
  growth/decay situations.
- **F-LE.2** — construct linear and exponential functions (including
  arithmetic and geometric sequences) from a graph, a description, or two
  input-output pairs.
- **F-LE.3** — observe from graphs and tables that exponential growth
  eventually exceeds linear, quadratic, or polynomial growth.
- **F-LE.4** — for exponential models, express as a logarithm the solution
  to ab^(ct) = d, where a, c, and d are numbers and the base b is 2, 10,
  or e; evaluate the logarithm using technology.
- **F-LE.5** — interpret the parameters in a linear or exponential
  function in terms of a context.

### Functions: Trigonometric Functions — U06

- **F-TF.1** — understand radian measure of an angle as the length of the
  arc on the unit circle subtended by the angle. (Verified today.)
- **F-TF.2** — explain how the unit circle in the coordinate plane enables
  the extension of trigonometric functions to all real numbers,
  interpreted as radian measures of angles traversed counterclockwise
  around the unit circle. (Verified today.)
- **F-TF.3 (+)** — use special triangles to determine geometrically the
  values of sine, cosine, and tangent for π/3, π/4, and π/6, and use the
  unit circle to express values for x, π + x, and 2π − x in terms of
  their values for x. (Verified today; enrichment in U06.)
- **F-TF.4 (+)** — use the unit circle to explain symmetry (odd and even)
  and periodicity of trigonometric functions. (Verified today;
  enrichment in U06.)
- **F-TF.5** — choose trigonometric functions to model periodic phenomena
  with specified amplitude, frequency, and midline. (Verified today.)
- **F-TF.6 (+)** — understand that restricting a trigonometric function to
  a domain on which it is always increasing or decreasing allows its
  inverse to be constructed. (Verified today; enrichment in U06.)
- **F-TF.7 (+)** — use inverse functions to solve trigonometric equations
  that arise in modeling contexts; evaluate solutions with technology and
  interpret them in terms of the context. (Verified today; enrichment in
  U06.)
- **F-TF.8** — prove the Pythagorean identity sin²(θ) + cos²(θ) = 1 and
  use it to find sin(θ), cos(θ), or tan(θ) given one of them and the
  quadrant of the angle. (Verified today.)

### Geometry: Expressing Geometric Properties with Equations — background

- **G-GPE.2** — derive the equation of a parabola from its focus and
  directrix. (Covered as enrichment in the grade-10 track's unmerged
  audit, PR #114; not re-taught here. Conic equations are otherwise
  outside this track's eight units.)

### Number & Quantity: Vector & Matrix Quantities — out of scope

- **N-VM.C.6–C.12 (+)** — matrices to represent data and transformations;
  matrix addition, scalar and matrix multiplication, zero/identity
  matrices, determinants, inverses. (Verified today.) These are all
  (+) advanced and are **not scheduled** in this track's eight units; the
  issue's unit list contains no matrices. They are documented here only so
  a future run knows the gap explicitly rather than silently.

### Statistics & Probability: Interpreting Categorical & Quantitative Data — U07, U08

- **S-ID.1** — represent data with plots on the real number line (dot
  plots, histograms, and box plots). (Verified today; grade-9 review in
  U08.)
- **S-ID.2** — use statistics appropriate to the shape of the data
  distribution to compare center (median, mean) and spread
  (interquartile range, standard deviation) of two or more data sets.
  (Verified today; grade-9 review in U08.)
- **S-ID.3** — interpret differences in shape, center, and spread in the
  context of the data sets, accounting for possible effects of extreme
  data points (outliers). (Verified today; grade-9 review in U08.)
- **S-ID.4** — use the mean and standard deviation of a data set to fit it
  to a normal distribution and to estimate population percentages;
  recognize data sets for which this is not appropriate; use calculators,
  spreadsheets, and tables to estimate areas under the normal curve.
  (Verified today; U08.)
- **S-ID.5** — summarize categorical data for two categories in two-way
  frequency tables; interpret relative frequencies (joint, marginal,
  conditional); recognize associations and trends. (Verified today; U08.)
- **S-ID.6** — represent data on two quantitative variables on a scatter
  plot and describe how the variables are related. (Verified today; U08.)
- **S-ID.6.a** — fit a function to the data; use fitted functions to solve
  problems in context; emphasize linear, quadratic, and exponential
  models. (Verified today; U08. Residual-fit wording is described in
  prose under S-ID.6/6.a, matching the grade-9 audit's convention.)
- **S-ID.7** — interpret the slope (rate of change) and the intercept
  (constant term) of a linear model in the context of the data.
  (Verified today; U08.)
- **S-ID.8** — compute (using technology) and interpret the correlation
  coefficient of a linear fit. (Verified today; U08.)
- **S-ID.9** — distinguish correlation from causation. (Published
  framework code; scheduled in U08 prose alongside S-ID.7–8 rather than
  under a separately rendered sub-code.)

### Statistics & Probability: Making Inferences & Justifying Conclusions — U08

- **S-IC.1** — understand statistics as a process for making inferences
  about population parameters based on a random sample from that
  population. (Verified today.)
- **S-IC.2** — decide if a specified model is consistent with results from
  a given data-generating process, for example using simulation (e.g.,
  does 5 tails in a row make you question a fair-coin model?). (Verified
  today.)
- **S-IC.3** — recognize the purposes of and differences among sample
  surveys, experiments, and observational studies; explain how
  randomization relates to each. (Verified today.)
- **S-IC.4** — use data from a sample survey to estimate a population mean
  or proportion; develop a margin of error through simulation models for
  random sampling. (Verified today.)
- **S-IC.5** — use data from a randomized experiment to compare two
  treatments; use simulations to decide if differences between parameters
  are significant. (Verified today.)
- **S-IC.6** — evaluate reports based on data. (Published framework code;
  reserved for the R00 review package's media-literacy task rather than a
  unit.)

### Statistics & Probability: Conditional Probability & the Rules of Probability — U08

- **S-CP.1** — describe events as subsets of a sample space via outcome
  characteristics or as unions, intersections, or complements of events.
  (Verified today.)
- **S-CP.2** — two events A and B are independent when P(A and B) =
  P(A)·P(B); use this characterization to determine independence.
  (Verified today.)
- **S-CP.3** — understand conditional probability P(A|B) as
  P(A and B)/P(B); interpret independence as conditional probability
  equaling the marginal probability. (Verified today.)
- **S-CP.4** — construct and interpret two-way frequency tables; use them
  as sample spaces to decide independence and approximate conditional
  probabilities. (Verified today.)
- **S-CP.5** — recognize and explain conditional probability and
  independence in everyday language and everyday situations. (Verified
  today.)
- **S-CP.6** — find conditional probability as the fraction of B's
  outcomes that also belong to A; interpret in terms of the model.
  (Verified today.)
- **S-CP.7** — apply the Addition Rule,
  P(A or B) = P(A) + P(B) − P(A and B); interpret in terms of the model.
  (Verified today.)
- **S-CP.8 (+)** — apply the general Multiplication Rule in a uniform
  probability model, P(A and B) = P(A)P(B|A) = P(B)P(A|B); interpret in
  terms of the model. (Verified today.)
- **S-CP.9 (+)** — use permutations and combinations to compute
  probabilities of compound events and solve problems. (Verified today.)

### Number & Quantity: Quantities — every unit

- **N-Q.1** — use units as a way to understand problems and guide the
  solution of multi-step problems; choose and interpret units consistently
  in formulas; choose and interpret scale and origin in graphs and data
  displays. (Verified today.)
- **N-Q.2** — define appropriate quantities for the purpose of descriptive
  modeling. (Verified today.)
- **N-Q.3** — choose a level of accuracy appropriate to limitations on
  measurement when reporting quantities. (Verified today.)

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

- **Week 1 goal:** probe equation solving (linear and quadratic), factoring,
  function notation, rational-exponent and radical manipulation, quadratic
  formulas and forms, coordinate graphing, systems solving, basic trig
  ratios, and univariate data summaries. The adult scores same-day and maps
  gaps to objectives 1–14.
- **Week 2 goal:** establish routines — function-notebook setup
  (definitions / key features / model library sections), conventions for
  writing a solution with a justification at every step (A-REI.1),
  Desmos/spreadsheet orientation, calculator norms, and the rule that every
  model answer states its assumptions. Begin catch-up sessions for flagged
  gaps (factoring, radicals, rational exponents). No new grade-11 content
  yet.

### Unit 01 — Function transformations, composition, and inverses (Weeks 3–6)

- **Standards:** F-IF.1, F-IF.2, F-IF.4, F-IF.5, F-IF.7, F-IF.9; F-BF.1.b
  (enrichment), F-BF.1.c (+), F-BF.3, F-BF.4.a, F-BF.4.c (+) (enrichment);
  A-REI.7, A-REI.11 (intro); A-SSE.1.a, A-SSE.1.b; N-Q.1
- **Week 3 goal:** the function concept rebuilt — domain, range, notation,
  evaluating and interpreting f(x) in context; domain-to-graph-to-situation
  connections; even/odd from graphs and expressions.
- **Week 4 goal:** graph transformations — f(x) + k, kf(x), f(kx),
  f(x + k) for positive and negative k; predict-then-verify with Desmos;
  find k given graphs; key features under transformation.
- **Week 5 goal:** composition — build composite models from two-stage
  contexts; decompose composites; average rate of change over intervals;
  linear-quadratic systems solved algebraically and graphically as an
  intersection preview of f(x) = g(x).
- **Week 6 goal:** inverses — solve f(x) = c and write inverses for simple
  invertible functions; read inverse values from graphs/tables
  (enrichment); interpret inverses in context; review week with formative
  check. Objectives 1, 2 in play.

### Unit 02 — Polynomial functions, zeros, and complex numbers (Weeks 7–10)

- **Standards:** A-SSE.1.a, A-SSE.1.b, A-SSE.2, A-SSE.3.a; A-APR.2, A-APR.3,
  A-APR.4 (enrichment), A-APR.5 (+) (enrichment); A-CED.1; A-REI.4.b,
  A-REI.11; F-IF.4, F-IF.7.c; N-CN.1, N-CN.2, N-CN.3 (+), N-CN.8 (+),
  N-CN.9 (+) (enrichment); N-Q.1
- **Week 7 goal:** complex numbers — i² = −1, a + bi form, adding,
  subtracting, multiplying with properties; solving quadratics with complex
  solutions a ± bi; conjugates and quotients (enrichment).
- **Week 8 goal:** polynomial structure — factoring cubics and quartics by
  grouping and special forms; the Remainder and Factor Theorems; polynomial
  identities and the Binomial Theorem (enrichment).
- **Week 9 goal:** zeros and graphs — find all zeros including complex
  pairs; use zeros to build rough graphs; end behavior and turning-point
  counts; the Fundamental Theorem of Algebra for quadratics (enrichment).
- **Week 10 goal:** equation/graph intersections — solve f(x) = g(x)
  exactly and approximately with technology; review week with formative
  check. Objectives 3, 14 in play.

### Unit 03 — Rational expressions, functions, and asymptotes (Weeks 11–14)

- **Standards:** A-APR.6, A-APR.7 (+); A-REI.2, A-REI.11; F-IF.4, F-IF.7.d
  (+); A-SSE.1.b; N-Q.1, N-Q.2
- **Week 11 goal:** rational-expression algebra — simplify, add, subtract,
  multiply, divide; the rational-number analogy; rewriting a(x)/b(x) as
  q(x) + r(x)/b(x) by inspection and long division.
- **Week 12 goal:** rational-function graphs — zeros, vertical asymptotes,
  horizontal and slant asymptotes, end behavior; domain restrictions and
  holes; graphing by hand in simple cases, technology for complicated
  ones.
- **Week 13 goal:** rational equations and applications — solve rational
  equations in one variable; show how extraneous solutions arise; inverse
  and joint variation contexts with unit checks.
- **Week 14 goal:** review week with formative check. Objective 4 in play.

### Unit 04 — Radical functions and equations (Weeks 15–18)

- **Standards:** A-REI.2; F-IF.4, F-IF.5, F-IF.7.b; A-CED.1, A-CED.2;
  A-SSE.1.a; N-Q.1, N-Q.3
- **Week 15 goal:** radical functions — square-root and cube-root graphs
  with transformations; domain and range from the equation; key features;
  rational exponents revisited as the algebraic engine.
- **Week 16 goal:** radical equations — isolate and power; extraneous
  solutions detected by checking in the original equation; application
  contexts (fall time, pendulum period) with unit and domain sanity
  checks.
- **Week 17 goal:** power and root models — fit square-root and cube-root
  models to data; compare with polynomial and exponential candidates;
  defend the choice with rate-of-change reasoning.
- **Week 18 goal:** **midyear review** — cumulative retrieval of U01–U04
  (transformations, composition, inverses, polynomials, complex zeros,
  rational functions, radicals); justification-writing workshop; formative
  cumulative check. Objective 5 in play, objectives 1–4 revisited.

### Unit 05 — Exponential and logarithmic functions and models (Weeks 19–22)

- **Standards:** A-SSE.3.c; A-CED.1, A-CED.2; A-REI.11; F-IF.4, F-IF.6,
  F-IF.7.e, F-IF.8.b; F-BF.4.a, F-BF.5 (+); F-LE.1, F-LE.1.a–c, F-LE.2–5;
  N-Q.1, N-Q.2
- **Week 19 goal:** exponential functions — equal factors over equal
  intervals; graphing with intercepts and end behavior; percent rate from
  the base; exponential vs. linear vs. quadratic growth compared from
  graphs and tables.
- **Week 20 goal:** logarithms — definition as the inverse of the
  exponential; converting forms; logarithm properties proved from
  exponent properties; solving exponential equations ab^(ct) = d with
  bases 2, 10, and e using technology.
- **Week 21 goal:** logarithmic functions and equations — graphs with
  asymptotes, domain, and end behavior; solving logarithmic equations
  with extraneous-solution checks; parameter interpretation in context.
- **Week 22 goal:** exponential modeling — fit exponentials to real growth
  and decay data; interpret and compare models; review week with
  formative check. Objectives 6, 13 in play.

### Unit 06 — Trigonometric functions and periodic models (Weeks 23–26)

- **Standards:** F-TF.1, F-TF.2, F-TF.3 (+), F-TF.4 (+), F-TF.5, F-TF.6 (+),
  F-TF.7 (+), F-TF.8; F-IF.4, F-IF.7.e; F-BF.4.d (+) (enrichment); N-Q.1,
  N-Q.2
- **Week 23 goal:** radian measure — arc length on the unit circle;
  degree/radian conversion; the unit circle extending sine and cosine to
  all real numbers; evaluating at standard positions.
- **Week 24 goal:** trig graphs and identities — sine and cosine graphs
  with period, midline, amplitude; special-triangle values and symmetry
  relations (enrichment); proving and using the Pythagorean identity.
- **Week 25 goal:** periodic modeling — choose sine or cosine for
  phenomena with given amplitude, frequency/period, and midline; solve
  applied problems (tides, daylight, sound); interpret every parameter
  in context; inverse-trig equation solving (enrichment).
- **Week 26 goal:** review week with formative check. Objectives 7, 8 in
  play.

### Unit 07 — Sequences, series, and financial models (Weeks 27–30)

- **Standards:** A-SSE.4; A-CED.1, A-CED.3, A-CED.4; A-REI.1; F-IF.3,
  F-IF.6; F-BF.1.a, F-BF.2; F-LE.1.a, F-LE.2; S-ID.1 (review frames);
  N-Q.1, N-Q.2, N-Q.3
- **Week 27 goal:** sequences — arithmetic and geometric, recursive and
  explicit forms; sequences as functions on the integers; translate
  between forms; model situations with sequences.
- **Week 28 goal:** series — summation notation; arithmetic series sums;
  deriving and applying the finite geometric series formula; loan and
  savings computations as series applications.
- **Week 29 goal:** financial models — compound interest, present value,
  payment formulas; represent constraints with systems and interpret
  solutions as viable/nonviable; rearrange formulas for a quantity of
  interest. Educational examples only — not investment advice; the adult
  verifies rates and dates.
- **Week 30 goal:** review week with formative check. Objectives 9, 14 in
  play.

### Unit 08 — Probability, inference, and statistical modeling (Weeks 31–34)

- **Standards:** S-IC.1–5; S-ID.1–8 (S-ID.9 in prose); S-CP.1–9 (8, 9 are
  (+) advanced); N-Q.1, N-Q.2; A-CED.2; cumulative function-model choice
- **Week 31 goal:** probability foundations — sample spaces, events as
  subsets, union/intersection/complement; conditional probability and
  independence; two-way frequency tables as sample spaces; everyday-language
  explanations.
- **Week 32 goal:** probability rules — the addition rule and the general
  multiplication rule; permutations and combinations for compound events;
  geometric and model-based probability interpretations.
- **Week 33 goal:** data and inference — summaries matched to shape;
  normal-distribution fitting; scatter plots with linear, quadratic, and
  exponential fits; slope, intercept, and correlation in context; surveys
  vs. experiments vs. observational studies; simulation-based model
  checks, margins of error, and treatment comparisons.
- **Week 34 goal:** cumulative modeling investigation — build, compare,
  and select function models for a real dataset with written
  rate-of-change and residual justification; unit review; cumulative
  assessment. Objectives 10–13 in play, all objectives revisited.

### Weeks 35–36 — Final review (flexible)

- **Week 35 goal:** cumulative retrieval — function families and their key
  features, transformation rules, zero-finding strategies, logarithm
  properties, unit-circle values, series formulas, inference vocabulary;
  model-selection portfolio assembly.
- **Week 36 goal:** final cumulative assessment with keys; learning
  reflection; plan summer or next-course placement with the adult.

## 6. Materials, safety, and accessibility

**Core kit (all year):** graph paper, pencils, erasers, ruler, scientific
calculator (or calculator app), notebook with definition / key-features /
model-library sections, index cards for vocabulary. A laptop or tablet with
a browser for Desmos and spreadsheet work.

**Safety:** adult supervision for any cutting or craft tools used in
model-building tasks. No chemicals, heat, or hazardous materials anywhere in
this track. Hands-on alternatives (simulation or observation) are provided
for any activity a learner cannot perform physically.

**Accessibility supports:** bold-grid graph paper; colorblind-safe palettes
with every color paired to a label; read-aloud of definitions and worked
solutions; solution-writing scaffolds (reason banks, fill-in-then-free
progression); extended time on multi-step symbolic work; Desmos and
spreadsheet accessibility features previewed by the adult; text-only
alternatives for every visual activity; large-print and high-contrast
options for function graphs.

## 7. Paths for future units

- Each unit's Resource Pack will be generated with
  `teachers/ai-assistants/resource_finder.md`, using the Resource Finder
  format (summary, 3–6 focused queries, 3–7 videos or labeled search links,
  4–7 reputable references, task-to-resource mapping).
- The [semester resource library](../../../resources/semester-resource-library.md)
  lists Khan Academy Algebra 2 paths and Desmos as discovery starting
  points; every linked item will be opened and checked for fit by the
  building run before recommendation.
- Each unit needs one genuinely generated raster teaching image used in an
  activity (with alt text, caption, generation record in `assets/README.md`,
  and a text-only alternative), plus precise SVG/HTML diagrams wherever
  measurements, labels, or function graphs must be exact. A unit missing its
  generated image stays unchecked per the issue requirements.
- Shared datasets are available for practice tasks; dataset tasks name
  columns, units, and whether values are real, rounded, or fictional.
- Financial contexts in U07 must be verified against current sources by the
  building run and labeled educational examples, not advice.

## 8. Validation and delivery record

- `git ls-tree -r origin/main -- curriculum/grade-11/` confirmed the track
  folder empty on `main` at commit `2c43d24` before this run.
- Standards codes verified against the official framework on 2026-10-07;
  the HSF/LE cluster and A-SSE.1.a/3.a were corroborated against
  multiple official-text reproductions the same day (site bot-blocked the
  LE page); descriptions are paraphrases, not reproductions. No state
  adoption, accreditation, or alignment certification is claimed.
- (+) markings follow the published document exactly (A-APR.5, A-APR.7,
  F-BF.1.c, F-BF.4.c, F-BF.4.d, F-BF.5, F-TF.3, F-TF.4, F-TF.6, F-TF.7,
  F-IF.7.d, N-CN.3, N-CN.8, N-CN.9, S-CP.8, S-CP.9, N-VM.C.6–12).
  A-APR.7 is (+) but taught as core in U03 because rational simplification
  is an Algebra II staple; the marking is stated, not hidden.
- Link check on new files: internal relative links verified by hand and by
  `python3 scripts/validate-library.py` (run at delivery).
- No generated images are required for an audit section; none were produced.
- Manifest and indexes updated truthfully (see delivery comment on
  issue #50).

## 9. Remaining sections

Issue #50's next section is **U01 — Function transformations, composition,
and inverses** (four to six written lessons, investigation, quiz,
assessment, keys, Resource Pack, generated image), then U02–U08 in
prerequisite order, then R00 (diagnostic, midyear/final review, cumulative
assessment and keys).
