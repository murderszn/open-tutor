# Grade 6 Mathematics — Scope and Sequence

Audit section A00 of [issue #30](https://github.com/murderszn/open-tutor/issues/30).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-05 against `main` (commit `2c43d24`). The folder held
**2 Markdown files** (1 subject README, 1 starter lesson). The issue's
2026-10-01 "0 Markdown files" baseline counted legacy curriculum content only
and excluded the README and the starter lesson; this re-audit counts every
Markdown file. Decisions: **Keep** = reuse in the named unit with review;
**Revise** = usable skeleton needing substantive improvement (content, key
separation, or grade fit) before assignment; **Rebuild** = not usable as
written; the unit will replace it; **Enrichment** = optional extension only,
never a core-lesson substitute.

### Starter lesson

| Item | Location | Decision |
|---|---|---|
| Starter Lesson — Represent ratios and find a unit rate | `starter-lesson.md` | **Keep** → U01. Three 35-minute sessions: ratio language and order (3 red beads : 5 blue), equivalent ratios by scaling both quantities (2:3 → 8:12 with factor 4), unit rate with units (42 km ÷ 3 h = 14 km/h; 150 mi ÷ 3 h = 50 mph; $12 ÷ 4 notebooks = $3 per notebook). The error-check task correctly diagnoses additive scaling (2:3 → 4:5 is not equivalent; both parts must scale by the same factor, 2:3 → 4:6). Exit check: 4 cups water per 6-cup batch = 4/6 = 2/3 cup per cup of batch. Every computation was re-solved this run and is correct. The rubric (ratio / equivalent ratio / unit rate at 2-1-0) and accessibility notes (ratio strips, pre-labeled table headings, calculator only after setup, oral explanation allowed) are sound. This is direct 6.RP.A.1, 6.RP.A.2, and 6.RP.A.3.a–b work. **Gap the U01 build fixes:** "Answer checks" sit beside the student tasks — the unit build moves them into the teacher guide. |

### Subject README

| Item | Location | Decision |
|---|---|---|
| Grade 6 Mathematics index | `README.md` | **Revise** → replaced this run by the new track README (coverage summary, measurable objectives, standards reference, structure, adult guidance). |

There is no legacy assignment or quiz library for grade-6 math (unlike grades
4–5). Nothing was inaccurate or inappropriate. The starter lesson is the only
instructional content and covers a fraction of the 6.RP domain — everything
else in the track is built new.

### Repository references

| Item | Decision |
|---|---|
| Grade-6 hub page (`curriculum/grade-6/README.md`) | **Revise** — updated to record the math track's audit status. |
| Grade-5 math track (#26, audit delivered; units planned) | **Reference for entry prerequisites only** — the grade-5 end-of-year objectives (§2) define what this track assumes; no grade-5 lessons are copied upward. |
| `resources/math_fundamentals.md` (Grades 4–7) | **Reuse** — in-band for grade 6. Ratios & Unit Rates → U01; Fractions → U02 (division meaning); Percent & Decimals → U01/U08; Common Conversions → U01 (6.RP.A.3.d); Geometry Basics area formulas → U06 as lookup only (the unit builds composing/decomposing reasoning itself). Excerpted and explained at grade level; never assigned whole. |
| `resources/weights_and_measures.md` | **Reuse** — conversion tables (customary and metric length, weight, volume) for ratio-based unit conversion in U01; the Temperature section for U03 integer and absolute-value contexts (above/below zero, magnitude of a debt or temperature swing); Time Units and Time Zones (vs Chicago) for U01 constant-speed and rate contexts. The forex, digital-storage, and electricity-adjacent sections are out of scope. |
| `resources/financial_tools_and_principles.md` | **Limited reuse** → U08 only. The Handy Formulas percent applications (Profit = Revenue − Expenses; Net margin = Net Profit ÷ Revenue; currency conversion as a rate) support 6.RP.A.3.c modeling; the adult selects these rows only. Investment, credit/loan, mortgage, and compound-interest sections are out of scope (above band). |
| `resources/us_states.csv` | **Reuse** → U07/U08. Public dataset with `population_approx` and `area_sq_mi` columns for real-data distributions, center/spread, box plots, and percent applications; columns and units are named in every task that uses them. |
| `resources/un_countries.csv`, `resources/solar_system_planets.csv` | **Enrichment only** — magnitudes sit above the core number band; optional adult-supervised use with calculator support, never core assessment. |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — drives every unit's Resource Pack (focused queries, verified videos or labeled search links, reputable references, task-to-resource mappings). |

## 2. Prerequisites

Learners typically enter grade-6 math with (the grade-5 track's end-of-year objectives):

- Fluent multi-digit multiplication with the standard algorithm; division with up to four-digit dividends and two-digit divisors, interpreting remainders from context
- Decimal place value to thousandths; decimal arithmetic to hundredths with models; rounding to any place; powers of 10 and whole-number exponents
- Fraction equivalence; unlike-denominator addition/subtraction including mixed numbers; fraction-as-division; fraction multiplication with area models; scaling reasoning (a product vs its factors); unit-fraction division
- Measurement conversions within one system; volume of right rectangular prisms (V = l × w × h, V = B × h); the Quadrant I coordinate plane; numerical expressions with parentheses, brackets, braces; paired numerical patterns; two-dimensional figure classification; line plots with fractional data

The diagnostic weeks (Weeks 1–2) verify these. U01 re-teaches ratio language
from equal-groups multiplication before assuming it is secure; U02 re-checks
fraction and decimal fluency before extending to fraction division.

## 3. Track objectives

Measurable, adult-assessed by end of year (21 objectives; numbered in the track
README):

1. Use ratio language to describe a ratio relationship between two quantities,
   attending to order; generate equivalent ratios with tables, tape diagrams,
   and double number lines; find missing values in ratio tables.
2. Compute unit rates — including unit pricing and constant speed — and
   interpret them with correct units in context.
3. Find a percent of a quantity as a rate per 100; solve problems that find
   the whole given a part and the percent.
4. Convert measurement units by ratio reasoning, manipulating and transforming
   units appropriately when multiplying or dividing quantities.
5. Interpret and compute quotients of fractions; solve word problems involving
   division of fractions by fractions with visual models and equations; explain
   why the invert-and-multiply procedure gives the correct quotient.
6. Divide multi-digit whole numbers fluently with the standard algorithm; add,
   subtract, multiply, and divide multi-digit decimals fluently with the
   standard algorithm for each operation.
7. Find the greatest common factor of two whole numbers (≤ 100) and the least
   common multiple of two whole numbers (≤ 12); use the distributive property
   to write a sum of two whole numbers as a multiple of a sum of two numbers
   with no common factor.
8. Use positive and negative numbers to describe quantities with opposite
   directions or values (temperature, elevation, credits/debits); explain what
   0 means in each context.
9. Plot integers and other rational numbers on horizontal and vertical number
   lines; plot ordered pairs with negative coordinates in all four quadrants;
   describe reflections across one or both axes.
10. Interpret inequality statements as claims about relative position on the
    number line; write, interpret, and explain order statements for rational
    numbers in real-world contexts.
11. Interpret absolute value as distance from 0 and as magnitude in context;
    distinguish comparisons of absolute value from statements about order.
12. Solve real-world and mathematical problems by graphing points in all four
    quadrants; use coordinates and absolute value to find distances between
    points that share a first or second coordinate.
13. Write and evaluate numerical expressions involving whole-number exponents;
    evaluate expressions at given variable values using the conventional order
    of operations.
14. Write expressions that record operations with numbers and with letters
    standing for numbers; identify parts of an expression (sum, term, product,
    factor, quotient, coefficient) and view a part as a single entity.
15. Apply properties of operations — including the distributive property — to
    generate equivalent expressions; identify when two expressions are
    equivalent.
16. Treat solving an equation or inequality as answering "which values, if any,
    make this true?"; use substitution to test candidate values; solve
    equations of the form x + p = q and px = q for nonnegative rational p, q.
17. Use variables to represent unknown or varying numbers; write inequalities
    of the form x > c or x < c for constraints, recognize they have infinitely
    many solutions, and represent solutions on number-line diagrams.
18. Represent two quantities that change in relationship to one another with
    tables, graphs, and an equation relating dependent and independent
    variables; analyze how the variables change together.
19. Find areas of right triangles, other triangles, special quadrilaterals, and
    polygons by composing into rectangles or decomposing into triangles and
    other shapes; apply these techniques to real-world problems.
20. Find volumes of right rectangular prisms with fractional edge lengths
    (V = l × w × h and V = B × h); draw polygons on the coordinate plane from
    vertex coordinates and use coordinates for side lengths; find surface area
    of prisms and pyramids with nets of rectangles and triangles.
21. Distinguish statistical questions (anticipating variability) from
    non-statistical ones; describe a distribution by its center, spread, and
    shape; display numerical data with dot plots, histograms, and box plots;
    summarize data sets by observation count, measures of center and
    variability, and shape-aware choices of measures.

## 4. Standards crosswalk

Objectives reference the Common Core State Standards for Mathematics, grade 6
domains (verified against the framework 2026-10-05 at
`thecorestandards.org/Math/Content/6/{RP,NS,EE,G,SP}/`; not a claim of state
adoption or accreditation). Every standard below is covered by the named unit;
no standard is split except 6.RP.A.3.c, whose "finding the whole" problems wait
for the equation work of U05 and land in U08.

### Ratios and Proportional Relationships (6.RP) — U01, U08

- **6.RP.A.1** — Understand the concept of a ratio and use ratio language to
  describe a ratio relationship between two quantities. → U01
- **6.RP.A.2** — Understand the concept of a unit rate a/b associated with a
  ratio a:b with b ≠ 0, and use rate language in the context of a ratio
  relationship. → U01
- **6.RP.A.3** — Use ratio and rate reasoning to solve real-world and
  mathematical problems, e.g., by reasoning about tables of equivalent ratios,
  tape diagrams, double number line diagrams, or equations. → U01
  - **6.RP.A.3.a** — Make tables of equivalent ratios relating quantities with
    whole-number measurements, find missing values in the tables, and plot the
    pairs of values on the coordinate plane. Use tables to compare ratios. → U01
  - **6.RP.A.3.b** — Solve unit rate problems including those involving unit
    pricing and constant speed. → U01
  - **6.RP.A.3.c** — Find a percent of a quantity as a rate per 100 (e.g., 30%
    of a quantity means 30/100 times the quantity); solve problems involving
    finding the whole, given a part and the percent. → U01 (percent as a rate
    per 100) and U08 (finding the whole; percent in data and modeling)
  - **6.RP.A.3.d** — Use ratio reasoning to convert measurement units;
    manipulate and transform units appropriately when multiplying or dividing
    quantities. → U01

### The Number System (6.NS) — U02, U03

- **6.NS.A.1** — Interpret and compute quotients of fractions, and solve word
  problems involving division of fractions by fractions, e.g., by using visual
  fraction models and equations to represent the problem. (In general,
  (a/b) ÷ (c/d) = ad/bc.) → U02
- **6.NS.B.2** — Fluently divide multi-digit numbers using the standard
  algorithm. → U02
- **6.NS.B.3** — Fluently add, subtract, multiply, and divide multi-digit
  decimals using the standard algorithm for each operation. → U02
- **6.NS.B.4** — Find the greatest common factor of two whole numbers less
  than or equal to 100 and the least common multiple of two whole numbers less
  than or equal to 12. Use the distributive property to express a sum of two
  whole numbers 1–100 with a common factor as a multiple of a sum of two whole
  numbers with no common factor. → U02
- **6.NS.C.5** — Understand that positive and negative numbers are used
  together to describe quantities having opposite directions or values (e.g.,
  temperature above/below zero, elevation above/below sea level,
  credits/debits, positive/negative electric charge); use positive and
  negative numbers to represent quantities in real-world contexts, explaining
  the meaning of 0 in each situation. → U03
- **6.NS.C.6** — Understand a rational number as a point on the number line.
  Extend number line diagrams and coordinate axes familiar from previous grades
  to represent points on the line and in the plane with negative number
  coordinates. → U03
  - **6.NS.C.6.a** — Recognize opposite signs of numbers as indicating
    locations on opposite sides of 0 on the number line; recognize that the
    opposite of the opposite of a number is the number itself, e.g.,
    -(-3) = 3, and that 0 is its own opposite. → U03
  - **6.NS.C.6.b** — Understand signs of numbers in ordered pairs as
    indicating locations in quadrants of the coordinate plane; recognize that
    when two ordered pairs differ only by signs, the locations of the points
    are related by reflections across one or both axes. → U03
  - **6.NS.C.6.c** — Find and position integers and other rational numbers on
    a horizontal or vertical number line diagram; find and position pairs of
    integers and other rational numbers on a coordinate plane. → U03
- **6.NS.C.7.a** — Interpret statements of inequality as statements about the
  relative position of two numbers on a number line diagram. → U03
- **6.NS.C.7.b** — Write, interpret, and explain statements of order for
  rational numbers in real-world contexts. → U03
- **6.NS.C.7.c** — Understand the absolute value of a rational number as its
  distance from 0 on the number line; interpret absolute value as magnitude
  for a positive or negative quantity in a real-world situation. → U03
- **6.NS.C.7.d** — Distinguish comparisons of absolute value from statements
  about order. → U03
- **6.NS.C.8** — Solve real-world and mathematical problems by graphing points
  in all four quadrants of the coordinate plane. Include use of coordinates
  and absolute value to find distances between points with the same first
  coordinate or the same second coordinate. → U03

### Expressions and Equations (6.EE) — U04, U05

- **6.EE.A.1** — Write and evaluate numerical expressions involving
  whole-number exponents. → U04
- **6.EE.A.2.a** — Write expressions that record operations with numbers and
  with letters standing for numbers. → U04
- **6.EE.A.2.b** — Identify parts of an expression using mathematical terms
  (sum, term, product, factor, quotient, coefficient); view one or more parts
  of an expression as a single entity. → U04
- **6.EE.A.2.c** — Evaluate expressions at specific values of their variables.
  Include expressions that arise from formulas used in real-world problems.
  Perform arithmetic operations, including those involving whole-number
  exponents, in the conventional order when there are no parentheses to
  specify a particular order. → U04
- **6.EE.A.3** — Apply the properties of operations to generate equivalent
  expressions. → U04
- **6.EE.A.4** — Identify when two expressions are equivalent (i.e., when the
  two expressions name the same number regardless of which value is
  substituted into them). → U04
- **6.EE.B.5** — Understand solving an equation or inequality as a process of
  answering a question: which values from a specified set, if any, make the
  equation or inequality true? Use substitution to determine whether a given
  number in a specified set makes an equation or inequality true. → U05
- **6.EE.B.6** — Use variables to represent numbers and write expressions when
  solving a real-world or mathematical problem; understand that a variable can
  represent an unknown number, or, depending on the purpose at hand, any
  number in a specified set. → U05
- **6.EE.B.7** — Solve real-world and mathematical problems by writing and
  solving equations of the form x + p = q and px = q for cases in which p, q
  and x are all nonnegative rational numbers. → U05
- **6.EE.B.8** — Write an inequality of the form x > c or x < c to represent
  a constraint or condition in a real-world or mathematical problem. Recognize
  that inequalities of the form x > c or x < c have infinitely many solutions;
  represent solutions of such inequalities on number line diagrams. → U05
- **6.EE.C.9** — Use variables to represent two quantities in a real-world
  problem that change in relationship to one another; write an equation to
  express one quantity, thought of as the dependent variable, in terms of the
  other quantity, thought of as the independent variable. Analyze the
  relationship between the dependent and independent variables using graphs and
  tables, and relate these to the equation. → U05

### Geometry (6.G) — U06

- **6.G.A.1** — Find the area of right triangles, other triangles, special
  quadrilaterals, and polygons by composing into rectangles or decomposing
  into triangles and other shapes; apply these techniques in the context of
  solving real-world and mathematical problems. → U06
- **6.G.A.2** — Find the volume of a right rectangular prism with fractional
  edge lengths by packing it with unit cubes of the appropriate unit fraction
  edge lengths, and show that the volume is the same as would be found by
  multiplying the edge lengths of the prism. Apply the formulas V = l w h and
  V = B h to find volumes of right rectangular prisms with fractional edge
  lengths in the context of solving real-world and mathematical problems. → U06
- **6.G.A.3** — Draw polygons in the coordinate plane given coordinates for
  the vertices; use coordinates to find the length of a side joining points
  with the same first coordinate or the same second coordinate. Apply these
  techniques in the context of solving real-world and mathematical problems.
  → U06
- **6.G.A.4** — Represent three-dimensional figures using nets made up of
  rectangles and triangles, and use the nets to find the surface area of these
  figures. Apply these techniques in the context of solving real-world and
  mathematical problems. → U06

### Statistics and Probability (6.SP) — U07

- **6.SP.A.1** — Recognize a statistical question as one that anticipates
  variability in the data related to the question and accounts for it in the
  answers. → U07
- **6.SP.A.2** — Understand that a set of data collected to answer a
  statistical question has a distribution which can be described by its
  center, spread, and overall shape. → U07
- **6.SP.A.3** — Recognize that a measure of center for a numerical data set
  summarizes all of its values with a single number, while a measure of
  variation describes how its values vary with a single number. → U07
- **6.SP.B.4** — Display numerical data in plots on a number line, including
  dot plots, histograms, and box plots. → U07
- **6.SP.B.5** — Summarize numerical data sets in relation to their context,
  such as by:
  - **6.SP.B.5.a** — Reporting the number of observations. → U07
  - **6.SP.B.5.b** — Describing the nature of the attribute under
    investigation, including how it was measured and its units of
    measurement. → U07
  - **6.SP.B.5.c** — Giving quantitative measures of center (median and/or
    mean) and variability (interquartile range and/or mean absolute
    deviation), as well as describing any overall pattern and any striking
    deviations from the overall pattern with reference to the context in which
    the data were gathered. → U07
  - **6.SP.B.5.d** — Relating the choice of measures of center and variability
    to the shape of the data distribution and the context in which the data
    were gathered. → U07

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) =
36 weeks. Session model: **4 sessions per week, about 45 minutes each**
(16 sessions per unit). Session types rotate across concept lesson, guided
practice, fluency/practice game, and review — named per unit below. Grade-6
learners do independent written practice (12–16 tasks) that the adult reviews
the same day; written reasoning is expected and grows across the year, with
the adult still supervising and redirecting.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (warm-up number talks, model-draw
  trays, exit-check rituals) and baseline each objective's entry point.
- Sessions: playful probes — read and expand 5,042,683; compute 348 × 26 and
  1,632 ÷ 16; add 3/4 + 2/3; express 0.62 as a fraction; plot (6, 3) in
  Quadrant I; measure a book in centimeters and convert to meters; write an
  expression for "5 less than twice a number."
- No new instruction; record observations against the track objectives and
  re-teach any insecure grade-5 skill in U01's first two sessions.

### Unit 01 — Ratios, unit rates, and ratio reasoning (Weeks 3–6)

- **Standards:** 6.RP.A.1, 6.RP.A.2, 6.RP.A.3.a, 6.RP.A.3.b, 6.RP.A.3.d;
  6.RP.A.3.c (percent as a rate per 100, first pass)
- **Week 3 goal:** ratio language and order — a ratio compares two quantities
  in a given order; equivalent ratios from tables, tape diagrams, and double
  number lines; find missing values. The starter lesson's Sessions 1–2 land
  here (trail-mix scaling 2:3 → 4:6; the additive-scaling error check).
- **Week 4 goal:** unit rates — divide to one unit and label units; unit
  pricing and constant speed; interpret rates in context. The starter lesson's
  Session 3 lands here (42 km ÷ 3 h = 14 km/h; $12 ÷ 4 notebooks).
- **Week 5 goal:** percent as a rate per 100 (30% = 30/100 of the quantity);
  find a percent of a quantity; convert measurement units by ratio reasoning
  (customary and metric tables from `weights_and_measures.md`), manipulating
  units appropriately.
- **Week 6:** review week — ratio-reasoning games, plot equivalent-ratio pairs
  on the coordinate plane (6.RP.A.3.a), formative check; the starter lesson's
  answer checks move to the teacher guide here.

### Unit 02 — Fraction and decimal operations (Weeks 7–10)

- **Standards:** 6.NS.A.1, 6.NS.B.2, 6.NS.B.3, 6.NS.B.4
- **Week 7 goal:** division of fractions — story contexts and visual models for
  (a/b) ÷ (c/d); explain why invert-and-multiply gives the quotient
  (e.g., (2/3) ÷ (3/4) = 8/9 because 3/4 of 8/9 is 2/3).
- **Week 8 goal:** fluency — multi-digit division with the standard algorithm;
  all four decimal operations with the standard algorithm for each; estimate
  to check reasonableness.
- **Week 9 goal:** GCF of two whole numbers (≤ 100), LCM of two whole numbers
  (≤ 12); the distributive property to rewrite sums (36 + 8 = 4(9 + 2)).
- **Week 10:** review week — mixed operation problem solving across fractions
  and decimals; formative check.

### Unit 03 — Integers, rational numbers, and the coordinate plane (Weeks 11–14)

- **Standards:** 6.NS.C.5, 6.NS.C.6.a–c, 6.NS.C.7.a–d, 6.NS.C.8
- **Week 11 goal:** positive and negative numbers for opposite quantities
  (temperature, elevation, credits/debits); what 0 means in each context;
  opposites on the number line (-(-3) = 3; 0 is its own opposite).
- **Week 12 goal:** ordering rational numbers; inequalities as relative
  position; absolute value as distance from 0 and as magnitude (a −$30 balance
  has |-30| = 30); absolute-value comparisons vs order statements.
- **Week 13 goal:** all four quadrants — plot ordered pairs with negative
  coordinates; reflections across axes; graph points to solve problems; use
  coordinates and absolute value for distances between points sharing a
  coordinate.
- **Week 14:** review week — integer/rational games, coordinate-plane
  challenges, formative check.

### Unit 04 — Expressions, properties, and variable meaning (Weeks 15–18)

- **Standards:** 6.EE.A.1, 6.EE.A.2.a–c, 6.EE.A.3, 6.EE.A.4
- **Week 15 goal:** whole-number exponents — write and evaluate expressions
  with exponents; order of operations including exponents.
- **Week 16 goal:** variables — write expressions that record operations with
  letters standing for numbers; name parts (sum, term, product, factor,
  quotient, coefficient); view a part as a single entity.
- **Week 17 goal:** equivalent expressions — apply properties of operations
  (especially the distributive property: 3(2 + x) = 6 + 3x; y + y + y = 3y);
  identify when two expressions are equivalent.
- **Week 18:** midyear review week — full-track retrieval (ratios, fraction
  and decimal operations, integers); formative midyear check.

### Unit 05 — Equations, inequalities, and quantitative relationships (Weeks 19–22)

- **Standards:** 6.EE.B.5, 6.EE.B.6, 6.EE.B.7, 6.EE.B.8, 6.EE.C.9
- **Week 19 goal:** solving as "which values make this true?" — substitution
  to test candidates; write and solve x + p = q and px = q for nonnegative
  rational p, q (fraction-division fluency from U02 returns here).
- **Week 20 goal:** inequalities — write x > c / x < c for constraints;
  infinitely many solutions; graph solution sets on number lines.
- **Week 21 goal:** quantitative relationships — dependent vs independent
  variables; tables, graphs, and equations together (e.g., d = 65t for constant
  speed, connecting back to U01 unit rates).
- **Week 22:** review week — equation/inequality problem solving; formative
  check.

### Unit 06 — Area, surface area, and volume (Weeks 23–26)

- **Standards:** 6.G.A.1, 6.G.A.2, 6.G.A.3, 6.G.A.4
- **Week 23 goal:** area by composing into rectangles and decomposing into
  triangles — right triangles, other triangles, parallelograms, trapezoids,
  polygons; real-world applications.
- **Week 24 goal:** volume of right rectangular prisms with fractional edge
  lengths — pack with unit-fraction cubes, then V = l × w × h and V = B × h
  (exponent/formula work from U04 returns: V = s³, A = 6s² for cubes).
- **Week 25 goal:** polygons on the coordinate plane — draw from vertex
  coordinates, side lengths from shared coordinates; nets of rectangles and
  triangles for surface area.
- **Week 26:** review week — geometry problem solving; formative check.

### Unit 07 — Statistical questions, distributions, and variability (Weeks 27–30)

- **Standards:** 6.SP.A.1, 6.SP.A.2, 6.SP.A.3, 6.SP.B.4, 6.SP.B.5.a–d
- **Week 27 goal:** statistical vs non-statistical questions (anticipating
  variability); distributions described by center, spread, and shape.
- **Week 28 goal:** display data — dot plots, histograms, box plots;
  measures of center (mean, median) and of variation (interquartile range,
  mean absolute deviation).
- **Week 29 goal:** summarize data sets in context — observation count,
  attribute and units, center/variability with shape-aware choices, striking
  deviations; real `us_states.csv` data (columns and units named).
- **Week 30:** review week — statistics mini-project workshop; formative
  check.

### Unit 08 — Percent, data, and integrated modeling (Weeks 31–34)

- **Standards:** 6.RP.A.3.c (finding the whole given a part and the percent);
  integrated application of 6.RP, 6.NS, 6.EE, 6.G, 6.SP
- **Week 31 goal:** find the whole given a part and the percent; percent
  applications — discounts, markups, simple interest (I = P × r × t),
  profit/margin as percent (selected `financial_tools_and_principles.md`
  rows).
- **Week 32 goal:** percent of data — population shares and survey results
  from `us_states.csv`; choose center/variability measures for skewed data.
- **Week 33 goal:** integrated modeling project — one real-world scenario
  using ratios, equations, geometry, and statistics together (e.g., plan a
  community garden: area, soil volume, watering rates, cost percents, and a
  data summary of plant growth).
- **Week 34:** review week — cumulative problem solving across all domains;
  formative check.

### Weeks 35–36 — Final review (flexible)

- **Goal:** full-track retrieval across all 21 objectives; cumulative
  assessment preparation; the R00 package (diagnostic, midyear/final review,
  cumulative assessments and keys) is built as its own later section.
- Sessions: mixed-domain problem sets, error-analysis discussions, learner
  portfolio review of the year's investigations.

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each
unit opens with a retrieval warm-up from prior units (U02 opens with ratio
retrieval — scaling connects to fraction division; U03 reprises U01's plotting
of equivalent-ratio pairs on the coordinate plane; U05 reprises U02's fraction
division when solving equations with rational p and q; U06 reprises U04's
exponents and formulas; U07 reprises U01's rate language for "per 100" percent
work; U08 reprises U01, U05, and U07 in the modeling project). Midyear
(Week 18) and final (Weeks 35–36) weeks are full-track reviews. Formative
checks are short written tasks (12–14 items) the adult reviews the same day;
each unit's teacher guide specifies what "ready to move on" looks like.
Fluency work is strategy-based — no timed speed tests.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every
  unit's Resource Pack (queries, verified videos/search links, references,
  task mapping).
- `resources/math_fundamentals.md` — in-band adult/learner reference: Ratios
  & Unit Rates for U01, Fractions for U02, Percent & Decimals for U01/U08,
  Common Conversions for U01, Geometry Basics as a U06 formula lookup —
  excerpted and explained at grade level, never assigned whole.
- `resources/weights_and_measures.md` — conversion-table reference for U01
  (customary and metric length/weight/volume); Temperature section for U03
  integer/absolute-value contexts; Time Units and Time Zones (vs Chicago) for
  U01 rate contexts. The adult selects in-band tables only (forex, digital
  storage, and electricity-adjacent sections are out of scope).
- `resources/financial_tools_and_principles.md` — U08 only: the Handy Formulas
  percent rows (Profit, Net margin, currency conversion as a rate); investment,
  credit/loan, mortgage, and compound-interest sections stay out of scope.
- `resources/us_states.csv` — `population_approx`, `area_sq_mi` columns as
  real, labeled public data for U07 distributions and U08 percent modeling;
  columns and units named in every task using it.
- The starter lesson feeds the U01 build per the keep decision in §1; shared
  manipulative patterns (ratio tables, double number lines, two-color integer
  counters, number-line tape, coordinate grids, card-stock nets) will be
  created once in Units 01–03 and reused; do not duplicate per unit.
- Datasets with above-band magnitudes (`un_countries.csv`,
  `solar_system_planets.csv`) are **enrichment only** at grade 6.

## 8. Safe materials

Household or dollar-store manipulatives: counters, two-color counters
(integers), number-line tape, digit cards, ratio-table trays, double number
line strips, grid paper, rulers, measuring cups (milliliter/liter), kitchen
scale, unit cubes (or sugar cubes), fraction strips, card stock for nets,
crayons. No sharp tools; adult supervises scissors; water only for liquid
measuring, spill mats; small parts supervised in shared settings;
indoor/observation alternatives for all outdoor measuring tasks. Calculators
may check work only after the written method is shown — never as the first
method.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  written work when writing stamina lags (grade 6 expects growing written
  reasoning — extensions require full written explanations).
- High-contrast, large numeral cards; textured number lines and coordinate
  grids for low-vision learners; two-color counters with shape as well as
  color cues for positive/negative.
- Sessions about 45 min with movement breaks; every lesson includes a
  seated-table and a floor-play variant.
- Language support: vocabulary taught with objects first, word second; visual
  word walls; home-language labels welcomed alongside English terms.
- Every drawn diagram ships with a text-only alternative; color is never the
  only cue.
- Fluency work is strategy-based, never timed — no speed tests in Units 01–03.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #30.
- The starter lesson's answer checks sit beside the student tasks; the U01
  build separates them into the teacher guide.
- There is no legacy assignment/quiz library for grade-6 math, so every unit
  builds its practice, investigations, and assessments new.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Ratios, unit rates, and ratio reasoning; U02 Fraction and decimal
operations; U03 Integers, rational numbers, and the coordinate plane; U04
Expressions, properties, and variable meaning; U05 Equations, inequalities, and
quantitative relationships; U06 Area, surface area, and volume; U07
Statistical questions, distributions, and variability; U08 Percent, data, and
integrated modeling; R00 diagnostic, midyear/final review, and cumulative
assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #30 body, comments, and label state re-read 2026-10-05 before
  claiming; no competing claim (0 comments prior to the claim comment);
  `curriculum-in-progress` label added with a timestamped claim comment
  (2026-10-05T01:57:03Z).
- `curriculum/grade-6/math/` re-inventoried on `main` @ `2c43d24`: 2 Markdown
  files confirmed (1 subject README, 1 starter lesson); the issue's 2026-10-01
  "0 files" baseline excluded the README and starter lesson.
- Starter-lesson computations re-solved independently this run: 42 ÷ 3 = 14
  km/h and 5 × 14 = 70; 150 ÷ 3 = 50 mph and 5 × 50 = 250; $12 ÷ 4 = $3 per
  notebook and 7 × $3 = $21; 2:3 scaled by 4 = 8:12; the additive-scaling error
  diagnosis (2:3 → 4:5 is not equivalent) is correct; exit check 4/6 = 2/3 cup
  per cup — all correct.
- Standards codes and descriptions verified 2026-10-05 against the official
  Common Core framework (`thecorestandards.org/Math/Content/6/` for the RP,
  NS, EE, G, and SP domains); the crosswalk claims no state adoption or
  accreditation.
- New Markdown links checked: only relative links to existing files and the
  issue link; planned units are described in prose with no links to missing
  files.
- `python3 scripts/validate-library.py` will run at delivery time against the
  new files.
