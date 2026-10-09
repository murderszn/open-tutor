# Grade 4 Mathematics — Scope and Sequence

Audit section A00 of [issue #22](https://github.com/murderszn/open-tutor/issues/22).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-03 against `main` (commit `2c43d24`). The folder held 28
Markdown files at the issue's 2026-10-01 baseline; the count is confirmed
(1 subject README, 15 assignments, 12 quizzes). Decisions: **Keep** = reuse in
the named unit with review; **Revise** = usable skeleton needing substantive
improvement (content, separation of keys, or grade fit) before assignment;
**Rebuild** = not usable as written; the unit will replace it; **Enrichment** =
optional extension only, never a core-lesson substitute.

### Assignments

| Item | Location | Decision |
|---|---|---|
| Grade 4 — Rounding and Place Value | `assignments/rounding-place-value.md` | **Keep** → U01. Blank organizer; rounds 3,847; 6,152; 9,965; 12,438 to ten/hundred/thousand — all inside the 1,000,000 range. Number-line sketch and "which adjacent place decides" prompt match 4.NBT.A.3 directly. |
| Learner — Multi-Digit Math Workshop | `assignments/multi-digit-math-workshop.md` | **Keep** → U01/U03. Practice set solved independently this run: 2,486+3,759=6,245; 5,204−1,876=3,328; 6,318+2,047=8,365; 8,005−3,468=4,537; 4,972+1,685=6,657; 9,320−5,147=4,173; 36×7=252; 58×6=348; 24×13=312; 42×21=882 — all correct. **Gap:** the Educator Key sits beside the student questions; unit builds must separate keys. |
| Grade 4 — Factors and Multiples | `assignments/factors-and-multiples.md` | **Keep** → U02. Factor pairs of 18, 24, 35, 47; prime/composite justification; multiples of 6 and 9 with common multiples circled — inside the 1–100 range of 4.OA.B.4. |
| Grade 4 — Multi-Digit Multiplication Practice | `assignments/multi-digit-multiplication-practice.md` | **Keep** → U03. Estimate-then-calculate with partial products (36×14, 72×8, 48×23, 125×6); verify-by-second-method matches 4.NBT.B.5's "illustrate and explain." |
| Learner — Fractions & Equivalent Models | `assignments/fractions-and-equivalent-models.md` | **Revise** → U04. Thin stub: ends at "## Submit" with no task detail. Keep the model-drawing frame (6 models, 3 equivalent pairs, ordering, one story problem); U04 will write the lesson that teaches what the stub assumes. |
| Fraction Word Problem Workshop | `assignments/fraction-word-problem-workshop.md` | **Keep** → U05. Eight like-denominator story problems (hours, miles, trays, ribbons) with visual-model and checking requirements; fits 4.NF.B.3.d. Keys to be separated in the unit build. |
| Decimal Money Math Market | `assignments/decimal-money-math-market.md` | **Keep** → U06. Money-decimal addition/subtraction practice with budgets and change; concrete use of 4.NF.C.6 and 4.MD.A.2 money problems. |
| Learner — Measurement & Line Plots | `assignments/measurement-and-line-plots.md` | **Revise** → U08. Thin stub: ends at "## Submit." Keep the 10-object measurement frame; U08 will require fraction-of-unit precision (1/2, 1/4, 1/8) to serve 4.MD.B.4, which the stub currently lacks. |
| Data Graphs and Comparisons | `assignments/data-graphs-and-comparisons.md` | **Enrichment** → supports U08. Bar graphs and line plots with comparison statements; data collection is valuable but line plots with fractions are the grade-4 core (4.MD.B.4) — this stays optional extension. |
| Data Story Mini Lab | `assignments/data-story-mini-lab.md` | **Enrichment** → supports U08. Thin stub (ends with bare "Submit the table, graph, and data story"); usable as an optional investigation frame after the line-plot core is taught. |
| Perimeter and Area City Plan | `assignments/perimeter-area-city-plan.md` | **Keep** → U08. Grid-paper city with labeled perimeter/area tables; fits 4.MD.A.3 as project material. |
| Triangle Spotting Field Lab | `assignments/triangle-spotting-field-lab.md` | **Keep** → U07. Real-world triangle hunt with equilateral/isosceles/scalene and acute/right/obtuse labels; supports 4.G.A.2's right-triangle category and 4.G.A.1 identification. |
| Golden Ratio | `assignments/golden-ratio.md` | **Enrichment** — above grade 4 (ratio reasoning is grade 6); keep as optional curiosity only, never a core-lesson substitute. |
| May Market Ratios and Unit Rates | `assignments/may-market-ratios.md` | **Enrichment** — ratios and unit rates are grade-6 territory; optional only. |
| Probability Experiment Lab | `assignments/probability-experiment-lab.md` | **Enrichment** — probability is not in the grade-4 CCSS math framework; optional only. |

### Quizzes

All twelve quizzes are machine-generated drafts with **no answer keys** (except
the Educator Key embedded in the workshop assignment above). Every unit build
must add a separated key. Two are filler and will be rebuilt from scratch.

| Item | Location | Decision |
|---|---|---|
| Grade 4 Math — Addition & Subtraction (Multi-Digit) Quiz | `quizzes/addition-subtraction-multi-digit-quiz.md` | **Revise** → U01. Twenty items (e.g., 2062+4284, 3007−1583) inside grade range; needs deduplicated, thoughtfully sequenced items and a separated key. |
| Grade 4 Math — Division Concepts Quiz | `quizzes/division-concepts-quiz.md` | **Revise** → U03. Items like 68÷4, 285÷3, 492÷6; fit 4.NBT.B.6 but repetitive; needs remainder interpretation and a key. |
| Grade 4 Math — Fraction Fundamentals Quiz | `quizzes/fraction-fundamentals-quiz.md` | **Revise** → U04. Comparison items (e.g., 1/2 vs 3/6, 3/7 vs 4/5); needs benchmark strategies and a key. |
| Grade 4 Math — Adding & Subtracting Fractions Quiz | `quizzes/adding-subtracting-fractions-quiz.md` | **Revise** → U05. **Exact duplicate** of `adding-subtracting-fractions-quiz-set-02.md` (verified 2026-10-03: files differ only in the title line). Fold both into one U05 formative quiz; delete the duplicate in the unit build. |
| Grade 4 Math — Adding & Subtracting Fractions Quiz (set-02) | `quizzes/adding-subtracting-fractions-quiz-set-02.md` | **Revise** → U05 (same as above; one survives). |
| Grade 4 Math — Decimals & Fractions Quiz | `quizzes/decimals-fractions-quiz.md` | **Revise** → U06. Comparison items (e.g., 3/4 vs 1/2, 3/5 vs 2/4); needs decimal-notation items to serve 4.NF.C.6 and a key. |
| Grade 4 Math — Measurement (Length & Weight) Quiz | `quizzes/measurement-length-weight-quiz.md` | **Revise** → U06. Conversion items (e.g., 10 ft → in, 3 ft → in); fits 4.MD.A.1; needs two-column-table work and a key. |
| Grade 4 Math — Measurement (Time & Money) Quiz | `quizzes/measurement-time-money-quiz.md` | **Revise** → U06. Money addition items ($6.61+$9.28); fits 4.MD.A.2; needs fraction/decimal measurement items and a key. |
| Grade 4 Math — Geometry (Lines & Angles) Quiz | `quizzes/geometry-lines-angles-quiz.md` | **Rebuild** → U07. Filler: items 1–7 are the identical prompt ("Draw an obtuse angle and estimate its degrees in your drawing"). Not assignable as written. |
| Grade 4 Math — Geometry (Shapes & Symmetry) Quiz | `quizzes/geometry-shapes-symmetry-quiz.md` | **Rebuild** → U07. Filler: twenty near-identical items ("How many sides does a pentagon/hexagon have?"). Not assignable as written. |
| Grade 4 Math — Summer Mixed Review Quiz | `quizzes/summer-mixed-review-place-value-fractions-operations-measurement-quiz.md` | **Revise** → R00. Items are trivially easy (121−17, 122−20…); rebuild at cumulative grade-4 difficulty for the final-review package. |
| Grade 4 Math — Hints for Hints | `quizzes/hints-for-hints.md` | **Revise — rehome.** Misplaced in `quizzes/` (it is hint scaffolds for rounding, not an assessment). Its rounding hints are sound ("which two hundreds is this number between?"); U01 will move them to teacher-side scaffolds and keep this file only as a pointer, or remove it. |

### Repository references

| Item | Decision |
|---|---|
| Grade-4 hub page (`curriculum/grade-4/README.md`) | **Revise** — updated to record the math track's audit status. |
| Grade-3 math track (#18, audit delivered; units planned) | **Reference for entry prerequisites only** — the grade-3 end-of-year objectives (rounding to 10/100, add/subtract within 1000, multiplication/division facts within 100, unit fractions on number lines, time to the minute, area by tiling) define what this track assumes; no grade-3 lessons copied upward. |
| Kindergarten–Grade-2 math tracks (#6, #10, #14) | **No direct reuse** — foundations sit two or more years back. |
| `resources/math_fundamentals.md` (grades 4–7) | **Reuse** — in-band for grade 4: its Place Value section (to millions), Fractions, Percent & Decimals, and Common Conversions sections will be referenced by unit Resource Packs with grade-appropriate explanations; never assigned whole. |
| `resources/weights_and_measures.md` | **Reuse** — its Length/Weight/Volume conversion tables (customary and metric) back 4.MD.A.1 work in U06; adult selects the in-band tables; the forex/crypto/electricity sections are out of scope. |
| `resources/financial_tools_and_principles.md` | **No reuse** at grade 4 — money objectives here are decimal arithmetic, not financial instruments. |
| `resources/us_states.csv` | **Reuse** → U08. Public dataset with `population_approx`, `area_sq_mi` columns — values sit inside the grade-4 number range (≤1,000,000); usable for comparison statements and line-plot/adapted data work with columns and units named. `un_countries.csv` and `solar_system_planets.csv` are **not** reused (magnitudes above the grade-4 range; label as out-of-band). |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping). |

No existing grade-4 math material was inaccurate or inappropriate beyond the
filler quizzes flagged above. Answer keys are the systematic gap: only the
workshop assignment carries one, and it sits beside student questions.

## 2. Prerequisites

Learners typically enter grade-4 math with (the grade-3 track's end-of-year objectives):

- Three-digit place value to 1000 (hundreds/tens/ones, expanded form); rounding
  to the nearest 10 or 100; fluent addition/subtraction within 1000
- Multiplication and division facts within 100 (strategy-based, from memory);
  multiplication/division as equal groups, arrays, and measurement situations;
  two-step word problems with a letter for the unknown
- Fractions as numbers: 1/b as one part of b equal parts (denominators 2, 3, 4,
  6, 8); fractions on number lines; simple equivalence (1/2 = 2/4); comparing
  same-numerator/same-denominator fractions
- Time to the nearest minute; liquid volume in liters; mass in grams/kilograms;
  lengths to halves/fourths of an inch; scaled bar graphs and line plots
- Area by counting unit squares and multiplying side lengths (rectangles);
  perimeter of polygons; quadrilateral categories and equal-area partitions

The diagnostic weeks (Weeks 1–2) verify these; Unit 01 re-teaches three-digit
grouping, rounding logic, and within-1000 strategies before assuming they are
secure.

## 3. Track objectives

Measurable, adult-assessed by end of year (20 objectives; numbered in the track
README):

1. Generalize place value to 1,000,000: digit-place relationships (ten times the
   place to its right); read, write, and compare whole numbers with numerals,
   number names, and expanded form.
2. Round multi-digit whole numbers to any place.
3. Fluently add and subtract multi-digit whole numbers using the standard
   algorithm.
4. Interpret multiplication equations as comparisons; represent verbal
   multiplicative comparisons as equations; solve multiplicative-comparison word
   problems, distinguishing them from additive comparison.
5. Solve multistep whole-number word problems with the four operations
   (including interpreting remainders); represent with equations using a letter
   for the unknown; assess reasonableness with mental computation and estimation
   including rounding.
6. Find all factor pairs for whole numbers 1–100; recognize multiples; determine
   prime or composite.
7. Generate number or shape patterns from a given rule; identify apparent
   features not explicit in the rule.
8. Multiply a whole number of up to four digits by a one-digit whole number,
   and two two-digit numbers, with place-value strategies and properties of
   operations; illustrate with equations, rectangular arrays, and/or area models.
9. Find whole-number quotients and remainders with up to four-digit dividends
   and one-digit divisors using place-value strategies, properties, or the
   multiplication/division relationship; illustrate with models.
10. Explain fraction equivalence (a/b = (n×a)/(n×b)) with visual models,
    attending to how the number and size of parts differ; recognize and generate
    equivalent fractions.
11. Compare two fractions with different numerators and denominators (common
    denominators/numerators, benchmark 1/2); record with `>`, `=`, `<` and
    justify with a visual model; valid only for the same whole.
12. Add/subtract fractions with like denominators as joining/separating parts;
    decompose a fraction into a sum of same-denominator fractions in more than
    one way; add/subtract mixed numbers with like denominators; solve
    like-denominator fraction word problems.
13. Multiply a fraction by a whole number: understand a/b as a multiple of 1/b
    (5/4 = 5 × (1/4)); compute n × (a/b) = (n × a)/b; solve word problems.
14. Express tenths as hundredths (3/10 = 30/100) and add tenths/hundredths; use
    decimal notation for fractions with denominators 10 or 100; locate decimals
    on a number line; compare decimals to hundredths by reasoning about size.
15. Know relative sizes of measurement units within one system (km, m, cm; kg,
    g; lb, oz.; l, ml; hr, min, sec); express larger units in terms of smaller
    ones; record equivalents in a two-column table.
16. Use the four operations to solve word problems involving distances, time
    intervals, liquid volumes, masses, and money, including simple fractions or
    decimals; represent measurements with number-line-scale diagrams.
17. Apply area and perimeter formulas for rectangles in real-world and
    mathematical problems, including finding an unknown side from a known area.
18. Make line plots of measurements in fractions of a unit (1/2, 1/4, 1/8);
    solve addition and subtraction problems from line-plot data.
19. Recognize angles as shapes formed by two rays with a common endpoint;
    understand one-degree angles (1/360 of a circle); measure with a protractor;
    use angle additivity to find unknown angles on diagrams.
20. Draw and identify points, lines, line segments, rays, right/acute/obtuse
    angles, and perpendicular/parallel lines; classify two-dimensional figures
    by lines and angles (right triangles as a category); recognize lines of
    symmetry and draw them.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, grade 4
domains, as published at
[thecorestandards.org/Math](https://www.thecorestandards.org/Math/).
All five grade-4 domain pages were opened 2026-10-03
([4/OA](https://thecorestandards.org/Math/Content/4/OA/),
[4/NBT](https://thecorestandards.org/Math/Content/4/NBT/),
[4/NF](https://thecorestandards.org/Math/Content/4/NF/),
[4/MD](https://thecorestandards.org/Math/Content/4/MD/),
[4/G](https://thecorestandards.org/Math/Content/4/G/)).
Two rendering notes: thecorestandards.org's rendered Grade 4 NBT page skips
4.NBT.A.3 and 4.NBT.B.4; their official-text wording was corroborated against
IXL's verbatim standards reproduction (opened 2026-10-03) — "Use place value
understanding to round multi-digit whole numbers to any place" and "Fluently
add and subtract multi-digit whole numbers using the standard algorithm"
(same page-rendering quirk the grade-3 audit documented for 3.NBT.A.1).
No state adoption, accreditation, or alignment certification is claimed.

### Operations and Algebraic Thinking (4.OA)

| Code | Description |
|---|---|
| 4.OA.A.1 | Interpret a multiplication equation as a comparison, e.g., interpret 35 = 5 × 7 as a statement that 35 is 5 times as many as 7 and 7 times as many as 5. Represent verbal statements of multiplicative comparisons as multiplication equations. |
| 4.OA.A.2 | Multiply or divide to solve word problems involving multiplicative comparison, e.g., by using drawings and equations with a symbol for the unknown number to represent the problem, distinguishing multiplicative comparison from additive comparison. |
| 4.OA.A.3 | Solve multistep word problems posed with whole numbers and having whole-number answers using the four operations, including problems in which remainders must be interpreted. Represent these problems using equations with a letter standing for the unknown quantity. Assess the reasonableness of answers using mental computation and estimation strategies including rounding. |
| 4.OA.B.4 | Find all factor pairs for a whole number in the range 1–100. Recognize that a whole number is a multiple of each of its factors. Determine whether a given whole number in the range 1–100 is a multiple of a given one-digit number. Determine whether a given whole number in the range 1–100 is prime or composite. |
| 4.OA.C.5 | Generate a number or shape pattern that follows a given rule. Identify apparent features of the pattern that were not explicit in the rule itself. *For example, given the rule "Add 3" and the starting number 1, generate terms in the resulting sequence and observe that the terms appear to alternate between odd and even numbers. Explain informally why the numbers will continue to alternate in this way.* |

### Number and Operations in Base Ten (4.NBT)

Grade 4 expectations in this domain are limited to whole numbers less than or
equal to 1,000,000 (per the framework's footnote).

| Code | Description |
|---|---|
| 4.NBT.A.1 | Recognize that in a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right. *For example, recognize that 700 ÷ 70 = 10 by applying concepts of place value and division.* |
| 4.NBT.A.2 | Read and write multi-digit whole numbers using base-ten numerals, number names, and expanded form. Compare two multi-digit numbers based on meanings of the digits in each place, using >, =, and < symbols to record the results of comparisons. |
| 4.NBT.A.3 | Use place value understanding to round multi-digit whole numbers to any place. (Official-text wording; not rendered on the site's Grade 4 NBT page, 2026-10-03 — corroborated via IXL's verbatim reproduction; see verification note above.) |
| 4.NBT.B.4 | Fluently add and subtract multi-digit whole numbers using the standard algorithm. (Same verification note as 4.NBT.A.3.) |
| 4.NBT.B.5 | Multiply a whole number of up to four digits by a one-digit whole number, and multiply two two-digit numbers, using strategies based on place value and the properties of operations. Illustrate and explain the calculation by using equations, rectangular arrays, and/or area models. |
| 4.NBT.B.6 | Find whole-number quotients and remainders with up to four-digit dividends and one-digit divisors, using strategies based on place value, the properties of operations, and/or the relationship between multiplication and division. Illustrate and explain the calculation by using equations, rectangular arrays, and/or area models. |

### Number and Operations — Fractions (4.NF)

Grade 4 expectations in this domain are limited to fractions with denominators
2, 3, 4, 5, 6, 8, 10, 12, and 100 (per the framework's footnote). Addition and
subtraction with unlike denominators in general is not required at this grade.

| Code | Description |
|---|---|
| 4.NF.A.1 | Explain why a fraction *a*/*b* is equivalent to a fraction (*n* × *a*)/(*n* × *b*) by using visual fraction models, with attention to how the number and size of the parts differ even though the two fractions themselves are the same size. Use this principle to recognize and generate equivalent fractions. |
| 4.NF.A.2 | Compare two fractions with different numerators and different denominators, e.g., by creating common denominators or numerators, or by comparing to a benchmark fraction such as 1/2. Recognize that comparisons are valid only when the two fractions refer to the same whole. Record the results of comparisons with symbols >, =, or <, and justify the conclusions, e.g., by using a visual fraction model. |
| 4.NF.B.3.a | Understand addition and subtraction of fractions as joining and separating parts referring to the same whole. |
| 4.NF.B.3.b | Decompose a fraction into a sum of fractions with the same denominator in more than one way, recording each decomposition by an equation. Justify decompositions, e.g., by using a visual fraction model. *Examples: 3/8 = 1/8 + 1/8 + 1/8 ; 3/8 = 1/8 + 2/8 ; 2 1/8 = 1 + 1 + 1/8 = 8/8 + 8/8 + 1/8*. |
| 4.NF.B.3.c | Add and subtract mixed numbers with like denominators, e.g., by replacing each mixed number with an equivalent fraction, and/or by using properties of operations and the relationship between addition and subtraction. |
| 4.NF.B.3.d | Solve word problems involving addition and subtraction of fractions referring to the same whole and having like denominators, e.g., by using visual fraction models and equations to represent the problem. |
| 4.NF.B.4 | Apply and extend previous understandings of multiplication to multiply a fraction by a whole number. |
| 4.NF.B.4.a | Understand a fraction *a*/*b* as a multiple of 1/*b*. *For example, use a visual fraction model to represent 5/4 as the product 5 × (1/4), recording the conclusion by the equation 5/4 = 5 × (1/4).* |
| 4.NF.B.4.b | Understand a multiple of a/b as a multiple of 1/b, and use this understanding to multiply a fraction by a whole number. *For example, use a visual fraction model to express 3 × (2/5) as 6 × (1/5), recognizing this product as 6/5. (In general, n × (a/b) = (n × a)/b.)* |
| 4.NF.B.4.c | Solve word problems involving multiplication of a fraction by a whole number, e.g., by using visual fraction models and equations to represent the problem. *For example, if each person at a party will eat 3/8 of a pound of roast beef, and there will be 5 people at the party, how many pounds of roast beef will be needed? Between what two whole numbers does your answer lie?* |
| 4.NF.C.5 | Express a fraction with denominator 10 as an equivalent fraction with denominator 100, and use this technique to add two fractions with respective denominators 10 and 100. *For example, express 3/10 as 30/100, and add 3/10 + 4/100 = 34/100.* |
| 4.NF.C.6 | Use decimal notation for fractions with denominators 10 or 100. *For example, rewrite 0.62 as 62/100; describe a length as 0.62 meters; locate 0.62 on a number line diagram.* |
| 4.NF.C.7 | Compare two decimals to hundredths by reasoning about their size. Recognize that comparisons are valid only when the two decimals refer to the same whole. Record the results of comparisons with the symbols >, =, or <, and justify the conclusions, e.g., by using a visual model. |

### Measurement and Data (4.MD)

| Code | Description |
|---|---|
| 4.MD.A.1 | Know relative sizes of measurement units within one system of units including km, m, cm; kg, g; lb, oz.; l, ml; hr, min, sec. Within a single system of measurement, express measurements in a larger unit in terms of a smaller unit. Record measurement equivalents in a two-column table. *For example, know that 1 ft is 12 times as long as 1 in. Express the length of a 4 ft snake as 48 in. Generate a conversion table for feet and inches listing the number pairs (1, 12), (2, 24), (3, 36), ...* |
| 4.MD.A.2 | Use the four operations to solve word problems involving distances, intervals of time, liquid volumes, masses of objects, and money, including problems involving simple fractions or decimals, and problems that require expressing measurements given in a larger unit in terms of a smaller unit. Represent measurement quantities using diagrams such as number line diagrams that feature a measurement scale. |
| 4.MD.A.3 | Apply the area and perimeter formulas for rectangles in real world and mathematical problems. *For example, find the width of a rectangular room given the area of the flooring and the length, by viewing the area formula as a multiplication equation with an unknown factor.* |
| 4.MD.B.4 | Make a line plot to display a data set of measurements in fractions of a unit (1/2, 1/4, 1/8). Solve problems involving addition and subtraction of fractions by using information presented in line plots. *For example, from a line plot find and interpret the difference in length between the longest and shortest specimens in an insect collection.* |
| 4.MD.C.5 | Recognize angles as geometric shapes that are formed wherever two rays share a common endpoint, and understand concepts of angle measurement. |
| 4.MD.C.5.a | An angle is measured with reference to a circle with its center at the common endpoint of the rays, by considering the fraction of the circular arc between the points where the two rays intersect the circle. An angle that turns through 1/360 of a circle is called a "one-degree angle," and can be used to measure angles. |
| 4.MD.C.5.b | An angle that turns through *n* one-degree angles is said to have an angle measure of *n* degrees. |
| 4.MD.C.6 | Measure angles in whole-number degrees using a protractor. Sketch angles of specified measure. |
| 4.MD.C.7 | Recognize angle measure as additive. When an angle is decomposed into non-overlapping parts, the angle measure of the whole is the sum of the angle measures of the parts. Solve addition and subtraction problems to find unknown angles on a diagram in real world and mathematical problems, e.g., by using an equation with a symbol for the unknown angle measure. |

### Geometry (4.G)

| Code | Description |
|---|---|
| 4.G.A.1 | Draw points, lines, line segments, rays, angles (right, acute, obtuse), and perpendicular and parallel lines. Identify these in two-dimensional figures. |
| 4.G.A.2 | Classify two-dimensional figures based on the presence or absence of parallel or perpendicular lines, or the presence or absence of angles of a specified size. Recognize right triangles as a category, and identify right triangles. |
| 4.G.A.3 | Recognize a line of symmetry for a two-dimensional figure as a line across the figure such that the figure can be folded along the line into matching parts. Identify line-symmetric figures and draw lines of symmetry. |

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two final-review
weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36 weeks. Session
model: **4 sessions per week, about 35 minutes each** (16 sessions per unit).
Session types rotate across concept lesson, guided practice, fluency/practice
game, and review — named per unit below. Grade-4 learners do independent written
practice (8–12 tasks) that the adult reviews the same day; the adult still
supervises and redirects.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (warm-up number talks, manipulative trays,
  exit-check rituals) and baseline each objective's entry point.
- Sessions: playful probes — read and expand 4,762; round 486 to the nearest
  100; compute 345 + 278 and 6 × 7; solve a two-step word problem with an
  unknown; locate 3/4 on a number line; name an angle and estimate its degrees;
  measure a book in inches and centimeters.
- No new instruction; record observations against the track objectives and
  re-teach any insecure grade-3 skill in Unit 01's first two sessions.

### Unit 01 — Multi-digit place value, rounding, and operations (Weeks 3–6)

- **Standards:** 4.NBT.A.1, 4.NBT.A.2, 4.NBT.A.3, 4.NBT.B.4
- **Week 3 goal:** place value re-anchored to 1,000,000 — ten-times relationships
  between adjacent places (700 ÷ 70 = 10 as place-value reasoning); read, write,
  compare numbers to 1,000,000 with numerals, number names, expanded form.
- **Week 4 goal:** round multi-digit whole numbers to any place with number
  lines and benchmark landmarks; the legacy `rounding-place-value.md` practice
  becomes the Week 4 session task after review.
- **Week 5 goal:** fluent multi-digit addition and subtraction with the standard
  algorithm; estimate first, then compute; legacy `multi-digit-math-workshop.md`
  items (numbers verified this run) supply the practice set — with the key
  separated.
- **Week 6:** review week — place-value bookkeeping, estimation challenges,
  formative check.
- Reuses the legacy `hints-for-hints.md` rounding scaffolds (rehomed to
  teacher-side material).

### Unit 02 — Factors, multiples, and multiplication strategies (Weeks 7–10)

- **Standards:** 4.OA.B.4, 4.OA.C.5 (plus early 4.NBT.B.5 strategy groundwork)
- **Week 7 goal:** factor pairs for numbers 1–100 (arrays of tiles); multiple
  relationships ("18 is a multiple of each of its factors"); legacy
  `factors-and-multiples.md` as the Week 7 task.
- **Week 8 goal:** prime vs. composite — the sieve-style reasoning (a number
  with exactly two factors); justify with factor lists, not memorized lists.
- **Week 9 goal:** number and shape patterns from a given rule ("Add 3",
  "multiply by 2"); identify features not explicit in the rule (alternating
  odd/even; informally explain why).
- **Week 10:** review week — factor-pair challenges, pattern stations; lay
  area-model groundwork for Unit 03 (rectangles as 24 × 13).
- Each unit opens with a rounding/estimation retrieval warm-up from Unit 01.

### Unit 03 — Multi-digit multiplication and division (Weeks 11–14)

- **Standards:** 4.NBT.B.5, 4.NBT.B.6, 4.OA.A.1, 4.OA.A.2, 4.OA.A.3
- **Week 11 goal:** multiplication as comparison — 35 = 5 × 7 as "5 times as
  many"; multiplicative-comparison word problems (distinguished from additive);
  area models and partial products for up to 4-digit × 1-digit and 2-digit ×
  2-digit.
- **Week 12 goal:** division with up to four-digit dividends and one-digit
  divisors; quotients and remainders via place value (partial quotients), arrays,
  and area models; legacy `division-concepts-quiz.md` items (revised, with key)
  become the formative check.
- **Week 13 goal:** multistep word problems — equations with a letter for the
  unknown; interpreting remainders from context; reasonableness checks with
  estimation from Unit 01.
- **Week 14:** review week — multiplication stations, division games, formative
  check; legacy `multi-digit-multiplication-practice.md` items fit here.
- The distributive property learned through area models reprises as the bridge
  to Unit 04's fraction models.

### Unit 04 — Fraction equivalence and comparison (Weeks 15–18)

- **Standards:** 4.NF.A.1, 4.NF.A.2
- **Week 15 goal:** equivalence as same size, different pieces — (n×a)/(n×b) via
  visual fraction models; attend to how the number and size of parts change
  (legacy `fractions-and-equivalent-models.md` revised into taught lessons).
- **Week 16 goal:** comparing fractions with different numerators and
  denominators — common denominators/numerators, benchmark 1/2; valid only for
  the same whole; record with `>`, `=`, `<`.
- **Week 17 goal:** mixed review — equivalence chains, comparing with visual
  justification; denominator range held to 2, 3, 4, 5, 6, 8, 10, 12, 100.
- **Week 18:** midyear review (flexible) — cumulative Units 01–04: multi-digit
  operations, factors, multiplicative comparison, fractions; re-teach the
  highest-need objective; formative check.

### Unit 05 — Fraction addition, subtraction, and whole-number products (Weeks 19–22)

- **Standards:** 4.NF.B.3.a–d, 4.NF.B.4.a–c
- **Week 19 goal:** joining and separating parts of the same whole; decompose a
  fraction into a sum of same-denominator fractions in more than one way
  (3/8 = 1/8 + 1/8 + 1/8 and 1/8 + 2/8).
- **Week 20 goal:** add/subtract mixed numbers with like denominators (replace
  with equivalent fractions or use properties); word problems with visual
  models (legacy `fraction-word-problem-workshop.md` items).
- **Week 21 goal:** a/b as a multiple of 1/b; n × (a/b) = (n × a)/b with models;
  word problems (the roast-beef-style reasoning: how much, between which two
  whole numbers).
- **Week 22:** review week — like-denominator fraction games, model-building
  challenges, formative check.
- The legacy duplicate adding/subtracting-fractions quizzes are folded into one
  U05 formative quiz with a separated key.

### Unit 06 — Decimals, fractions, and measurement conversions (Weeks 23–26)

- **Standards:** 4.NF.C.5–7, 4.MD.A.1–2
- **Week 23 goal:** tenths to hundredths — 3/10 = 30/100; add fractions with
  denominators 10 and 100; decimal notation; locate decimals on a number line.
- **Week 24 goal:** compare decimals to hundredths by reasoning about size
  (same whole; visual justification); money decimals (legacy
  `decimal-money-math-market.md` as the applied market task).
- **Week 25 goal:** measurement conversions within one system — relative sizes
  (1 ft = 12 in; 1 m = 100 cm); two-column conversion tables (legacy
  `measurement-length-weight-quiz.md` revised, with key).
- **Week 26:** review week — measurement word problems with fractions/decimals
  and number-line-scale diagrams (4.MD.A.2); formative check.

### Unit 07 — Lines, angles, shapes, and symmetry (Weeks 27–30)

- **Standards:** 4.MD.C.5.a–b, 4.MD.C.6–7, 4.G.A.1–3
- **Week 27 goal:** draw and identify points, lines, line segments, rays,
  right/acute/obtuse angles, perpendicular and parallel lines in figures;
  protractor introduced hands-on.
- **Week 28 goal:** angles as two rays with a common endpoint; one-degree angles
  (1/360 of a circle); measure whole-number degrees with a protractor; sketch
  angles of specified measure.
- **Week 29 goal:** classify two-dimensional figures by parallel/perpendicular
  lines and angle sizes (right triangles as a category); triangle field lab
  (legacy `triangle-spotting-field-lab.md`).
- **Week 30:** review week — angle additivity (decomposed-angle diagrams;
  equation with a symbol for the unknown angle); lines of symmetry (fold test);
  formative check. The two filler geometry quizzes are rebuilt here with keys.

### Unit 08 — Area, perimeter, line plots, and applications (Weeks 31–34)

- **Standards:** 4.MD.A.3, 4.MD.B.4
- **Week 31 goal:** area and perimeter formulas for rectangles in real-world
  problems; unknown side from known area (area formula as a multiplication
  equation with an unknown factor); city-plan project launched (legacy
  `perimeter-area-city-plan.md`).
- **Week 32 goal:** line plots of measurements in fractions of a unit
  (1/2, 1/4, 1/8) — measure, plot, interpret (legacy
  `measurement-and-line-plots.md` revised for fractional precision).
- **Week 33 goal:** add/subtract fractions using line-plot data (longest minus
  shortest specimens); `us_states.csv` population/area columns as public,
  labeled comparison data; enrichment data-story labs optional.
- **Week 34:** review week — applied project presentations, formative check.

### Weeks 35–36 — Final review (flexible)

- Cumulative tasks across all twenty objectives — multi-digit operations,
  factors, fractions (equivalence through decimals), conversions, area/perimeter
  with unknown sides, angle measurement, line plots, symmetry; re-teach where
  evidence shows gaps; final observational assessment and keys (delivered with
  R00). The legacy summer-mixed-review quiz is rebuilt at cumulative difficulty
  for this package.

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with
rounding/estimation, Unit 03 reprises area models into fraction models, Unit 06
reprises Unit 04's equivalence for tenths/hundredths, Unit 08 reprises Unit 05's
fraction arithmetic for line-plot data). Midyear (Week 18) and final (Weeks
35–36) weeks are full-track reviews. Formative checks are short written tasks
(8–12 items) or observed/drawn tasks the adult reviews the same day; each unit's
teacher guide specifies what "ready to move on" looks like. Multiplication and
division fluency is strategy-based — no timed speed tests.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/math_fundamentals.md` — in-band adult/learner reference: Place
  Value (to millions) for U01, Fractions for U04–U05, Percent & Decimals for
  U06, Common Conversions for U06 — excerpted and explained at grade level,
  never assigned whole.
- `resources/weights_and_measures.md` — conversion-table reference for U06
  (customary and metric length/weight/volume); the adult selects in-band tables
  only (forex, electricity, digital storage sections are out of scope).
- `resources/us_states.csv` — `population_approx`, `area_sq_mi` columns as real,
  labeled public data for U08 comparison and line-plot work; columns and units
  named in every task using it.
- Legacy assignments/quizzes feed unit builds per the keep/revise/rebuild
  decisions in §1; shared manipulative patterns (place-value mats, area-model
  templates, fraction circles/strips, protractor guides, conversion tables)
  will be created once in Units 01–04 and reused; do not duplicate per unit.
- Datasets with above-band magnitudes (`un_countries.csv`,
  `solar_system_planets.csv`), `financial_tools_and_principles.md`, and the
  probability/ratio assignments are **not** core reuse at grade 4.

## 8. Safe materials

Household or dollar-store manipulatives: counters, base-ten blocks (or bundled
straws/sticks), digit cards, multiplication reference charts (introduced as
reference, never a crutch), fraction strips and circles, rulers, measuring cups
(milliliter/liter), kitchen scale, protractors, grid paper, unit-square tiles,
crayons, stopwatch. No sharp tools; adult supervises scissors; water only for
liquid measuring, spill mats; small parts supervised in shared settings;
indoor/observation alternatives for all outdoor measuring tasks (triangle hunt).
Protractors are safe classroom plastic; no glass thermometers.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  written work when writing stamina lags (grade 4 is the transition year toward
  more independent writing — extensions ask for full written reasoning).
- High-contrast, large numeral/place-value cards and protractors; textured
  fraction pieces and shape tiles for low-vision learners.
- Sessions about 35 min with movement breaks; every lesson includes a seated-table
  and a floor-play variant.
- Language support: vocabulary taught with objects first, word second; visual
  word walls; home-language labels welcomed alongside English terms.
- Every drawn diagram ships with a text-only alternative; color is never the
  only cue.
- Fluency work is strategy-based, never timed — no speed tests in Units 01–03.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #22.
- No answer keys exist for any legacy quiz; each unit build adds a separated
  key (the workshop's embedded key must be moved out of learner view).
- The two filler geometry quizzes and the trivial summer-review quiz are flagged
  **rebuild**, not revise — their items are not assignable as written.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- Unit 07 needs an original protractor-use visual and an angle-additivity
  diagram; these will be reproducible diagrams, not stock photos.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Multi-digit place value, rounding, and operations; U02 Factors, multiples,
and multiplication strategies; U03 Multi-digit multiplication and division;
U04 Fraction equivalence and comparison; U05 Fraction addition, subtraction, and
whole-number products; U06 Decimals, fractions, and measurement conversions;
U07 Lines, angles, shapes, and symmetry; U08 Area, perimeter, line plots, and
applications; R00 diagnostic, midyear/final review, and cumulative assessments
with keys. Each will follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #22 body, comments, and label state re-read 2026-10-03 before claiming;
  no competing claim (0 comments prior to the claim comment); `curriculum-in-progress`
  label added with a timestamped claim comment.
- No other `curriculum-in-progress` claims active on any queue issue at claim
  time; no open worker PRs existed to touch.
- `curriculum/grade-4/math/` re-inventoried on `main` @ `2c43d24`: 28 Markdown
  files confirmed (1 subject README, 15 assignments, 12 quizzes), matching the
  issue's 2026-10-01 baseline. The two adding-subtracting-fractions quizzes are
  exact duplicates (diff: title line only).
- The ten `multi-digit-math-workshop.md` practice answers were re-solved
  independently this run (6,245; 3,328; 8,365; 4,537; 6,657; 4,173; 252; 348;
  312; 882) and match the file's key.
- Standards codes/descriptions verified against the official Common Core
  mathematics framework grade-4 domain pages
  (thecorestandards.org/Math/Content/4/{OA,NBT,NF,MD,G}, opened 2026-10-03);
  4.NBT.A.3 and 4.NBT.B.4's official wording was corroborated against IXL's
  verbatim standards reproduction because the site's NBT page rendering skips
  them (same quirk the grade-3 audit documented) — no state adoption,
  accreditation, or alignment certification claimed.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band: `math_fundamentals.md` is explicitly grades 4–7 (in-band),
  `weights_and_measures.md` tables selected per unit, and only `us_states.csv`
  columns inside the grade-4 number range are approved for reuse.
- The twenty objectives map onto the issue's U01–U08 checklist order, kept as
  the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files or prose-planned units).
