# Grade 5 Mathematics — Scope and Sequence

Audit section A00 of [issue #26](https://github.com/murderszn/open-tutor/issues/26).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-04 against `main` (commit `2c43d24`). The folder held 19
Markdown files at the issue's 2026-10-01 baseline; the count is confirmed
(1 subject README, 6 assignments, 12 quizzes). Decisions: **Keep** = reuse in
the named unit with review; **Revise** = usable skeleton needing substantive
improvement (content, key separation, or grade fit) before assignment;
**Rebuild** = not usable as written; the unit will replace it; **Enrichment** =
optional extension only, never a core-lesson substitute.

Unlike the grade-4 library (no keys), every grade-5 quiz carries an embedded
"🔑 Parent Answer Key (Educator)" beside the student questions. Keys are
accurate, but unit builds must separate them from learner view.

### Assignments

| Item | Location | Decision |
|---|---|---|
| Grade 5 — Powers of Ten | `assignments/powers-of-ten-practice.md` | **Keep** → U01. Blank organizer; 36 × 100, 7 × 1,000, 4.2 × 100; "explain how the value of each digit changes" and a missing-power problem — direct 5.NBT.A.2 work. |
| Grade 5 — Production Budget Multiplication | `assignments/multi-digit-multiplication.md` | **Keep** → U02. Pretend-workshop order: 14 lamps × $126, 18 microphones × $57, 25 boxes × $38; estimate-then-calculate with partial products, then + $70 shipping. Re-solved this run: 1,764 + 1,026 + 950 = 3,740; total $3,810 — correct. Fits 5.NBT.B.5. |
| Grade 5 — Multi-Digit Division | `assignments/multi-digit-division-practice.md` | **Keep** → U02. 936 ÷ 24 = 39; 1,344 ÷ 32 = 42; 775 ÷ 18 = 43 R1; check by multiplication; remainder-interpretation story (775 objects in boxes of 18). Fits 5.NBT.B.6. |
| Grade 5 — Decimal Products | `assignments/decimal-products-practice.md` | **Keep** → U03. 0.4 × 0.7 = 0.28, 6 × 0.35 = 2.1, 2.6 × 1.4 = 3.64, 3.75 × 2.2 = 8.25; area-diagram model and "explain why a product can be smaller than either factor" — links 5.NBT.B.7 to 5.NF.B.5.b scaling. |
| 🍕 Fraction Feast & Recipe Scaling Studio | `assignments/fraction-operations-studio.md` | **Keep** → U04/U05. Recipe studio: liquids 3/4 + 1/3 (LCD 12 → 13/12 = 1 1/12); cheese 1 2/3 + 3/8 (LCD 24 → 2 1/24); doubling (2 1/2 → 5 cups; 3/4 → 1 1/2 cups); 4 ÷ 1/4 = 16 cups; 1/3 ÷ 3 = 1/9 quart. Includes workspace template and rubric. Standards focus cites 5.NF.A.1, 5.NF.B.4, 5.NF.B.7 — correct; 5.NF.A.2/B.6/B.7.c also apply. |
| 🧊 Minecraft Architect — Volume & Coordinate Grid Studio | `assignments/volume-and-coordinate-planes.md` | **Keep** → U06/U07. V = l × w × h and V = B × h: vault 8 × 5 × 4 = 160 m³; watchtower 16 × 15 = 240 m³; composite barracks 180 + 60 = 240 m³; Quadrant I coordinate waypoints. Includes workspace template and rubric. Standards focus cites 5.MD.C.3, 5.MD.C.5, 5.G.A.1, 5.G.A.2 — correct. |

### Quizzes

Every quiz below is ten items with a **blank response organizer**, a "Learn &
Review" block (Khan Academy labeled-search YouTube link + Khan 5th-grade
course reference), and an embedded answer key that unit builds must separate.
Item answers were spot-checked this run and are correct.

| Item | Location | Decision |
|---|---|---|
| Decimal Place Value & Comparing to Thousandths | `quizzes/decimal-place-value-comparing-to-thousandths-quiz.md` | **Revise** → U01. Word/expanded form (0.458; 4.305), place identification, comparisons (0.65 vs 0.605; sprint 11.35/11.085/11.309 — B wins), ordering, rounding (6.784 → 6.8; 14.296 → 14.30). Fits 5.NBT.A.3.a–b, 5.NBT.A.4; needs separated key. |
| Adding & Subtracting Decimals with Regrouping | `quizzes/adding-subtracting-decimals-with-regrouping-quiz.md` | **Revise** → U03. Ten items (4.56 + 2.83 = 7.39 … 100.40 − 38.75 = 61.65); fits 5.NBT.B.7. **Editing error:** the Q1 answer "7.39" leaked into the instruction line ("double-check your calculations. 7.39") — unit build fixes this. |
| Dividing Decimals by Whole Numbers | `quizzes/dividing-decimals-by-whole-numbers-quiz.md` | **Revise** → U03. 4.8 ÷ 6 = 0.8 … 3 ÷ 4 = 0.75 … 34.80 ÷ 4 = $8.70; fits 5.NBT.B.7; needs separated key. |
| Decimal Operations Review & Mid-Semester Check | `quizzes/decimal-operations-review-mid-semester-check-quiz.md` | **Revise** → U03/R00 midyear. 56 × 34 = 1,904 (5.NBT.B.5); 1,248 ÷ 16 = 78 (5.NBT.B.6); decimals; 5.089 < 5.09 (5.NBT.A.3.b); rounding 8.456 → 8.5/8.46. The stated standard focus (5.NBT.B.5, 5.NBT.B.7) understates the item range — unit build widens it. |
| Equivalent Fractions & Finding Common Denominators | `quizzes/equivalent-fractions-finding-common-denominators-quiz.md` | **Revise** → U04. LCM work (4,6 → 12; 6,8 → 24), conversions (2/3 → 8/12), simplification via GCF (18/24 → 3/4), improper/mixed (17/5 = 3 2/5; 4 2/3 = 14/3); fits 5.NF.A.1. |
| Adding & Subtracting Fractions with Unlike Denominators | `quizzes/adding-subtracting-fractions-with-unlike-denominators-quiz.md` | **Revise** → U04. 1/2 + 1/4 = 3/4; 2/3 + 1/6 = 5/6; 3/4 − 1/3 = 5/12; 2/5 + 1/2 = 9/10; 7/8 − 1/4 = 5/8; 3/4 + 2/3 = 1 5/12; fits 5.NF.A.1–2; needs separated key. |
| Adding & Subtracting Mixed Numbers with Regrouping | `quizzes/adding-subtracting-mixed-numbers-with-regrouping-quiz.md` | **Revise** → U04. 2 1/3 + 3 1/3 = 5 2/3; 1 1/2 + 2 1/4 = 3 3/4; 3 2/3 + 1 3/4 = 5 5/12; 5 − 2 1/4 = 2 3/4; 6 1/4 − 2 3/4 = 3 1/2; fits 5.NF.A.1–2; needs separated key. |
| Multiplying Fractions & Visual Area Models | `quizzes/multiplying-fractions-visual-area-models-quiz.md` | **Revise** → U05. 6 × 2/3 = 4; 1/2 × 3/5 = 3/10; area 4/5 × 2/3 = 8/15 m²; scaling explanation; fits 5.NF.B.4–5; needs separated key. |
| Unit Fraction Division & Story Problems | `quizzes/unit-fraction-division-story-problems-quiz.md` | **Revise** → U05. 1/3 ÷ 4 = 1/12; 4 ÷ 1/2 = 8; the Q10 pair contrasts 4 ÷ 1/2 = 8 with 1/2 ÷ 4 = 1/8 (dividend/divisor order matters — excellent); fits 5.NF.B.7.a–c; needs separated key. |
| Volume of Rectangular Prisms | `quizzes/volume-of-rectangular-prisms-v-l-times-w-times-h-quiz.md` | **Revise** → U06. 6 × 4 × 5 = 120 cm³; V = B × h (35 × 8 = 280 ft³); missing height from volume (96 ÷ 24 = 4 cm); composite 24 + 30 = 54; fits 5.MD.C.5.a–c; needs separated key. |
| The Coordinate Plane in Quadrant I | `quizzes/the-coordinate-plane-in-quadrant-i-quiz.md` | **Revise** → U07. Origin (0,0); axis points (8,0), (0,5); plot (6,3); square of side 4 (area 16); order matters ((2,5) ≠ (5,2)); pattern (1,3),(2,5),(3,7),(4,9); fits 5.G.A.1–2 and 5.OA.B.3; needs separated key. |
| Comprehensive Semester 1 Final Review & Math Celebration | `quizzes/comprehensive-semester-1-final-review-math-celebration-quiz.md` | **Revise** → R00 midyear review. Ten items spanning NBT/NF/MD/G (348 × 26 = 9,048; 1,632 ÷ 16 = 102; 24.75 + 18.6 = 43.35; 4.5 × 0.8 = 3.6; 3/5 + 1/4 = 17/20; 4 1/3 − 1 2/3 = 2 2/3; 3/4 × 8/9 = 2/3; 6 ÷ 1/2 = 12 servings; V = 7 × 5 × 4 = 140 cm³ — all correct). The broad domain-level standard focus is honest for a mixed review; rebuild at cumulative midyear difficulty with separated key. |

No item was inaccurate or inappropriate. Nothing at grade 5 covers 5.MD.A.1
(measurement conversions), 5.MD.B.2 (line plots), 5.OA.A.1–A.2 (numerical
expressions), or 5.G.B.3 (figure classification) — those are built new.

### Repository references

| Item | Decision |
|---|---|
| Grade-5 hub page (`curriculum/grade-5/README.md`) | **Revise** — updated to record the math track's audit status. |
| Grade-4 math track (#22, audit delivered; units planned) | **Reference for entry prerequisites only** — the grade-4 end-of-year objectives (place value to 1,000,000, multi-digit operations, fraction equivalence/comparison, like-denominator fraction arithmetic, decimals to hundredths, conversions, area/perimeter, line plots, angles) define what this track assumes; no grade-4 lessons copied upward. |
| `resources/math_fundamentals.md` (grades 4–7) | **Reuse** — in-band for grade 5: its Place Value, Fractions, Percent & Decimals, and Common Conversions sections will be referenced by unit Resource Packs with grade-appropriate explanations; never assigned whole. |
| `resources/weights_and_measures.md` | **Reuse** — its Length/Weight/Volume conversion tables (customary and metric) back 5.MD.A.1 work in U06; adult selects the in-band tables; the forex/crypto/electricity sections are out of scope. |
| `resources/financial_tools_and_principles.md` | **No reuse** at grade 5 — money objectives here are decimal arithmetic, not financial instruments. |
| `resources/us_states.csv` | **Reuse** → U08. Public dataset with `population_approx`, `area_sq_mi` columns — values sit inside the grade-5 number range; usable for comparison statements and line-plot/adapted data work with columns and units named. `un_countries.csv` and `solar_system_planets.csv` are **not** reused (magnitudes above the grade-5 range; label as out-of-band). |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping). |

## 2. Prerequisites

Learners typically enter grade-5 math with (the grade-4 track's end-of-year objectives):

- Multi-digit place value to 1,000,000 (ten-times relationships); reading, writing, comparing whole numbers; rounding to any place; fluent addition/subtraction with the standard algorithm
- Multi-digit multiplication (up to four-digit × one-digit, two two-digit numbers) and division with one-digit divisors, with remainders; multistep word problems; factors, multiples, prime/composite
- Fraction equivalence ((n×a)/(n×b)) and comparison; like-denominator addition/subtraction; multiplication of a fraction by a whole number
- Decimals to hundredths: notation, number-line location, comparison; measurement conversions within one system; two-column conversion tables
- Area and perimeter of rectangles; line plots with fractional measurements; angle concepts with protractor; lines, angles, shapes, symmetry

The diagnostic weeks (Weeks 1–2) verify these; Unit 01 re-teaches digit-value
relationships and whole-number place value before assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year (20 objectives; numbered in the track
README):

1. Explain digit-value relationships in multi-digit numbers (a digit represents
   10 times what it represents to its right and 1/10 of what it represents to
   its left); read, write, and compare decimals to thousandths with numerals,
   number names, and expanded form.
2. Explain patterns in the number of zeros when multiplying by powers of 10 and
   in decimal-point placement when multiplying/dividing by powers of 10; use
   whole-number exponents to denote powers of 10.
3. Round decimals to any place.
4. Fluently multiply multi-digit whole numbers using the standard algorithm.
5. Find whole-number quotients of whole numbers with up to four-digit dividends
   and two-digit divisors, using place-value strategies, properties of
   operations, and/or the multiplication/division relationship; interpret
   remainders from context; illustrate with equations, arrays, or area models.
6. Add, subtract, multiply, and divide decimals to hundredths using concrete
   models or drawings and place-value/property strategies; relate the strategy
   to a written method and explain the reasoning used.
7. Add and subtract fractions with unlike denominators (including mixed numbers)
   by replacing them with equivalent fractions; estimate mentally and assess
   reasonableness of answers with benchmark fractions.
8. Solve word problems involving addition and subtraction of fractions with
   unlike denominators, referring to the same whole; represent with visual
   models or equations.
9. Interpret a fraction as division of the numerator by the denominator
   (a/b = a ÷ b); solve whole-number division problems leading to fraction or
   mixed-number answers, including finding between which two whole numbers the
   answer lies.
10. Multiply a fraction or whole number by a fraction ((a/b) × (c/d) = (ac)/(bd));
    find areas of rectangles with fractional side lengths by tiling and show
    the area equals the product of the side lengths.
11. Compare the size of a product to the size of one factor from the size of the
    other factor, without multiplying: explain why multiplying by a fraction
    greater than 1 grows a number and by a fraction less than 1 shrinks it.
12. Solve real-world problems involving multiplication of fractions and mixed
    numbers with visual models or equations.
13. Divide unit fractions by whole numbers and whole numbers by unit fractions,
    computing quotients and creating story contexts; explain using the
    multiplication/division relationship.
14. Convert among different-sized standard measurement units within a given
    system (e.g., 5 cm to 0.05 m); use conversions in multistep real-world
    problems.
15. Make line plots of measurements in fractions of a unit (1/2, 1/4, 1/8); use
    grade-level fraction operations to solve problems from line-plot data.
16. Understand volume as an attribute of solid figures: unit cubes; count unit
    cubes to measure volume; find volumes of right rectangular prisms with
    V = l × w × h and V = B × h; recognize volume as additive for composite
    prisms.
17. Define a coordinate system with perpendicular axes; locate points with
    ordered pairs in the first quadrant; graph points to represent real-world
    and mathematical problems and interpret coordinate values in context.
18. Use parentheses, brackets, and braces in numerical expressions and evaluate
    them; write simple expressions that record calculations and interpret
    numerical expressions without evaluating them.
19. Generate two numerical patterns from two given rules; identify apparent
    relationships between corresponding terms; form ordered pairs of
    corresponding terms and graph them on the coordinate plane.
20. Classify two-dimensional figures by properties, understanding that attributes
    belonging to a category also belong to all its subcategories.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, grade 5
domains, as published at
[thecorestandards.org/Math](https://www.thecorestandards.org/Math/).
All five grade-5 domain pages were opened 2026-10-04
([5/OA](https://thecorestandards.org/Math/Content/5/OA/),
[5/NBT](https://thecorestandards.org/Math/Content/5/NBT/),
[5/NF](https://thecorestandards.org/Math/Content/5/NF/),
[5/MD](https://thecorestandards.org/Math/Content/5/MD/),
[5/G](https://thecorestandards.org/Math/Content/5/G/)).
One rendering note: thecorestandards.org's Grade 5 NBT page skips 5.NBT.A.4
("Round decimals to any place") and 5.NBT.B.5 ("Fluently multiply multi-digit
whole numbers using the standard algorithm"); their official-text wording is
used below (same rendering quirk the grade-4 audit documented for its NBT page).
No state adoption, accreditation, or alignment certification is claimed.

### Operations and Algebraic Thinking (5.OA)

| Code | Description |
|---|---|
| 5.OA.A.1 | Use parentheses, brackets, or braces in numerical expressions, and evaluate expressions with these symbols. |
| 5.OA.A.2 | Write simple expressions that record calculations with numbers, and interpret numerical expressions without evaluating them. *For example, express the calculation "add 8 and 7, then multiply by 2" as 2 × (8 + 7). Recognize that 3 × (18932 + 921) is three times as large as 18932 + 921, without having to calculate the indicated sum or product.* |
| 5.OA.B.3 | Generate two numerical patterns using two given rules. Identify apparent relationships between corresponding terms. Form ordered pairs consisting of corresponding terms from the two patterns, and graph the ordered pairs on a coordinate plane. *For example, given the rule "Add 3" and the starting number 0, and given the rule "Add 6" and the starting number 0, generate terms in the resulting sequences, and observe that the terms in one sequence are twice the corresponding terms in the other sequence. Explain informally why this is so.* |

### Number and Operations in Base Ten (5.NBT)

| Code | Description |
|---|---|
| 5.NBT.A.1 | Recognize that in a multi-digit number, a digit in one place represents 10 times as much as it represents in the place to its right and 1/10 of what it represents in the place to its left. |
| 5.NBT.A.2 | Explain patterns in the number of zeros of the product when multiplying a number by powers of 10, and explain patterns in the placement of the decimal point when a decimal is multiplied or divided by a power of 10. Use whole-number exponents to denote powers of 10. |
| 5.NBT.A.3.a | Read and write decimals to thousandths using base-ten numerals, number names, and expanded form, e.g., 347.392 = 3 × 100 + 4 × 10 + 7 × 1 + 3 × (1/10) + 9 × (1/100) + 2 × (1/1000). |
| 5.NBT.A.3.b | Compare two decimals to thousandths based on meanings of the digits in each place, using >, =, and < symbols to record the results of comparisons. |
| 5.NBT.A.4 | Round decimals to any place. (Official-text wording; not rendered on the site's Grade 5 NBT page, 2026-10-04 — see verification note above.) |
| 5.NBT.B.5 | Fluently multiply multi-digit whole numbers using the standard algorithm. (Same verification note as 5.NBT.A.4.) |
| 5.NBT.B.6 | Find whole-number quotients of whole numbers with up to four-digit dividends and two-digit divisors, using strategies based on place value, the properties of operations, and/or the relationship between multiplication and division. Illustrate and explain the calculation by using equations, rectangular arrays, and/or area models. |
| 5.NBT.B.7 | Add, subtract, multiply, and divide decimals to hundredths, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction; relate the strategy to a written method and explain the reasoning used. |

### Number and Operations — Fractions (5.NF)

| Code | Description |
|---|---|
| 5.NF.A.1 | Add and subtract fractions with unlike denominators (including mixed numbers) by replacing given fractions with equivalent fractions in such a way as to produce an equivalent sum or difference of fractions with like denominators. *For example, 2/3 + 5/4 = 8/12 + 15/12 = 23/12. (In general, a/b + c/d = (ad + bc)/bd.)* |
| 5.NF.A.2 | Solve word problems involving addition and subtraction of fractions referring to the same whole, including cases of unlike denominators, e.g., by using visual fraction models or equations to represent the problem. Use benchmark fractions and number sense of fractions to estimate mentally and assess the reasonableness of answers. *For example, recognize an incorrect result 2/5 + 1/2 = 3/7, by observing that 3/7 < 1/2.* |
| 5.NF.B.3 | Interpret a fraction as division of the numerator by the denominator (a/b = a ÷ b). Solve word problems involving division of whole numbers leading to answers in the form of fractions or mixed numbers, e.g., by using visual fraction models or equations to represent the problem. *For example, interpret 3/4 as the result of dividing 3 by 4, noting that 3/4 multiplied by 4 equals 3, and that when 3 wholes are shared equally among 4 people each person has a share of size 3/4.* |
| 5.NF.B.4 | Apply and extend previous understandings of multiplication to multiply a fraction or whole number by a fraction. |
| 5.NF.B.4.a | Interpret the product (a/b) × q as a parts of a partition of q into b equal parts; equivalently, as the result of a sequence of operations a × q ÷ b. *For example, use a visual fraction model to show (2/3) × 4 = 8/3, and create a story context for this equation. Do the same with (2/3) × (4/5) = 8/15. (In general, (a/b) × (c/d) = (ac)/(bd).)* |
| 5.NF.B.4.b | Find the area of a rectangle with fractional side lengths by tiling it with unit squares of the appropriate unit fraction side lengths, and show that the area is the same as would be found by multiplying the side lengths. Multiply fractional side lengths to find areas of rectangles, and represent fraction products as rectangular areas. |
| 5.NF.B.5.a | Comparing the size of a product to the size of one factor on the basis of the size of the other factor, without performing the indicated multiplication. |
| 5.NF.B.5.b | Explaining why multiplying a given number by a fraction greater than 1 results in a product greater than the given number (recognizing multiplication by whole numbers greater than 1 as a familiar case); explaining why multiplying a given number by a fraction less than 1 results in a product smaller than the given number; and relating the principle of fraction equivalence a/b = (n × a)/(n × b) to the effect of multiplying a/b by 1. |
| 5.NF.B.6 | Solve real world problems involving multiplication of fractions and mixed numbers, e.g., by using visual fraction models or equations to represent the problem. |
| 5.NF.B.7 | Apply and extend previous understandings of division to divide unit fractions by whole numbers and whole numbers by unit fractions. (Division of a fraction by a fraction is not required at this grade.) |
| 5.NF.B.7.a | Interpret division of a unit fraction by a non-zero whole number, and compute such quotients. *For example, create a story context for (1/3) ÷ 4, and use a visual fraction model to show the quotient. Use the relationship between multiplication and division to explain that (1/3) ÷ 4 = 1/12 because (1/12) × 4 = 1/3.* |
| 5.NF.B.7.b | Interpret division of a whole number by a unit fraction, and compute such quotients. *For example, create a story context for 4 ÷ (1/5), and use a visual fraction model to show the quotient. Use the relationship between multiplication and division to explain that 4 ÷ (1/5) = 20 because 20 × (1/5) = 4.* |
| 5.NF.B.7.c | Solve real world problems involving division of unit fractions by non-zero whole numbers and division of whole numbers by unit fractions, e.g., by using visual fraction models and equations to represent the problem. *For example, how much chocolate will each person get if 3 people share 1/2 lb of chocolate equally? How many 1/3-cup servings are in 2 cups of raisins?* |

### Measurement and Data (5.MD)

| Code | Description |
|---|---|
| 5.MD.A.1 | Convert among different-sized standard measurement units within a given measurement system (e.g., convert 5 cm to 0.05 m), and use these conversions in solving multi-step, real world problems. |
| 5.MD.B.2 | Make a line plot to display a data set of measurements in fractions of a unit (1/2, 1/4, 1/8). Use operations on fractions for this grade to solve problems involving information presented in line plots. *For example, given different measurements of liquid in identical beakers, find the amount of liquid each beaker would contain if the total amount in all the beakers were redistributed equally.* |
| 5.MD.C.3.a | A cube with side length 1 unit, called a "unit cube," is said to have "one cubic unit" of volume, and can be used to measure volume. |
| 5.MD.C.3.b | A solid figure which can be packed without gaps or overlaps using n unit cubes is said to have a volume of n cubic units. |
| 5.MD.C.4 | Measure volumes by counting unit cubes, using cubic cm, cubic in, cubic ft, and improvised units. |
| 5.MD.C.5.a | Find the volume of a right rectangular prism with whole-number side lengths by packing it with unit cubes, and show that the volume is the same as would be found by multiplying the edge lengths, equivalently by multiplying the height by the area of the base. Represent threefold whole-number products as volumes, e.g., to represent the associative property of multiplication. |
| 5.MD.C.5.b | Apply the formulas V = l × w × h and V = b × h for rectangular prisms to find volumes of right rectangular prisms with whole-number edge lengths in the context of solving real world and mathematical problems. |
| 5.MD.C.5.c | Recognize volume as additive. Find volumes of solid figures composed of two non-overlapping right rectangular prisms by adding the volumes of the non-overlapping parts, applying this technique to solve real world problems. |

### Geometry (5.G)

| Code | Description |
|---|---|
| 5.G.A.1 | Use a pair of perpendicular number lines, called axes, to define a coordinate system, with the intersection of the lines (the origin) arranged to coincide with the 0 on each line and a given point in the plane located by using an ordered pair of numbers, called its coordinates. Understand that the first number indicates how far to travel from the origin in the direction of one axis, and the second number indicates how far to travel in the direction of the second axis, with the convention that the names of the two axes and the coordinates correspond (e.g., x-axis and x-coordinate, y-axis and y-coordinate). |
| 5.G.A.2 | Represent real world and mathematical problems by graphing points in the first quadrant of the coordinate plane, and interpret coordinate values of points in the context of the situation. |
| 5.G.B.3 | Understand that attributes belonging to a category of two-dimensional figures also belong to all subcategories of that category. *For example, all rectangles have four right angles and squares are rectangles, so all squares have four right angles.* |

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two final-review
weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36 weeks. Session
model: **4 sessions per week, about 40 minutes each** (16 sessions per unit).
Session types rotate across concept lesson, guided practice, fluency/practice
game, and review — named per unit below. Grade-5 learners do independent written
practice (10–14 tasks) that the adult reviews the same day; the adult still
supervises and redirects.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (warm-up number talks, model-draw trays,
  exit-check rituals) and baseline each objective's entry point.
- Sessions: playful probes — read and expand 42,683; round 4,857 to the nearest
  1,000; compute 2,486 + 3,759 and 348 × 26; locate 3/4 on a number line; add
  1/4 + 1/8; express 0.62 as a fraction; measure a book in centimeters and
  convert to meters.
- No new instruction; record observations against the track objectives and
  re-teach any insecure grade-4 skill in Unit 01's first two sessions.

### Unit 01 — Place value, decimal patterns, and powers of ten (Weeks 3–6)

- **Standards:** 5.NBT.A.1, 5.NBT.A.2, 5.NBT.A.3.a–b, 5.NBT.A.4
- **Week 3 goal:** digit-value relationships — a digit is 10× the place to its
  right and 1/10 of the place to its left; read, write, compare decimals to
  thousandths with numerals, number names, expanded form.
- **Week 4 goal:** powers of 10 — zero patterns in products, decimal-point
  placement, whole-number exponents (10², 10³); the legacy
  `powers-of-ten-practice.md` becomes the Week 4 session task after review.
- **Week 5 goal:** rounding decimals to any place (number lines, benchmarks);
  compare and order decimals (sprint-times reasoning like the legacy quiz's
  11.35/11.085/11.309 item).
- **Week 6:** review week — place-value bookkeeping, powers-of-ten games,
  formative check; legacy decimal-place-value quiz items (revised, with
  separated key) fit here.

### Unit 02 — Multi-digit multiplication and division (Weeks 7–10)

- **Standards:** 5.NBT.B.5, 5.NBT.B.6, 5.OA.A.1 (expressions emerge in multistep problems)
- **Week 7 goal:** fluent multi-digit whole-number multiplication with the
  standard algorithm (estimate first, then compute); partial-product checking;
  legacy `multi-digit-multiplication.md` production-budget items (numbers
  verified this run) supply the practice set.
- **Week 8 goal:** division with up to four-digit dividends and two-digit
  divisors (936 ÷ 24 = 39, 1,344 ÷ 32 = 42); partial quotients and area models;
  legacy `multi-digit-division-practice.md` items as the Week 8 task.
- **Week 9 goal:** remainders from context (775 ÷ 18 = 43 R1 — boxes, leftovers);
  write expressions with parentheses for multistep order (5.OA.A.1 enters here).
- **Week 10:** review week — multiplication/division stations, remainder games,
  formative check.
- Each unit from here on opens with a decimal/multi-digit retrieval warm-up.

### Unit 03 — Decimal operations and applications (Weeks 11–14)

- **Standards:** 5.NBT.B.7
- **Week 11 goal:** adding and subtracting decimals to hundredths with concrete
  models and place-value reasoning; line up by place value, not by digits
  (legacy `adding-subtracting-decimals-with-regrouping-quiz.md` revised, key
  separated, "7.39" editing error fixed).
- **Week 12 goal:** multiplying decimals to hundredths — area models; the
  legacy `decimal-products-practice.md` area-diagram work (0.4 × 0.7 = 0.28 …)
  teaches the hundredths grid.
- **Week 13 goal:** dividing decimals by whole numbers (4.8 ÷ 6 = 0.8; 3 ÷ 4 =
  0.75); money contexts; legacy `dividing-decimals-by-whole-numbers-quiz.md`
  revised.
- **Week 14:** review week — decimal applications, mixed-operation formative
  check; legacy `decimal-operations-review-mid-semester-check-quiz.md` items
  feed the midyear review bank (standard focus widened to match the items).

### Unit 04 — Fraction addition and subtraction with unlike denominators (Weeks 15–18)

- **Standards:** 5.NF.A.1, 5.NF.A.2, 5.NF.B.3
- **Week 15 goal:** equivalence as the engine — replace fractions with
  equivalents to get like denominators (2/3 + 5/4 = 8/12 + 15/12 = 23/12);
  LCM work (legacy `equivalent-fractions-finding-common-denominators-quiz.md`
  revised).
- **Week 16 goal:** add/subtract with unlike denominators (1/2 + 1/4, 7/8 −
  1/4) and mixed numbers with regrouping (6 1/4 − 2 3/4 = 3 1/2); legacy
  unlike-denominators and mixed-number quizzes revised with separated keys.
- **Week 17 goal:** fraction as division (3 ÷ 4 = 3/4); division problems leading
  to fractions/mixed numbers ("between which two whole numbers does the answer
  lie?"); the recipe studio's liquid tasks (3/4 + 1/3) become the Week 17
  applied session.
- **Week 18:** midyear review (flexible) — cumulative Units 01–04: powers of
  ten, decimals, multi-digit operations, fraction addition/subtraction;
  re-teach the highest-need objective; formative check.

### Unit 05 — Fraction multiplication, division, and models (Weeks 19–22)

- **Standards:** 5.NF.B.4.a–b, 5.NF.B.5.a–b, 5.NF.B.6, 5.NF.B.7.a–c
- **Week 19 goal:** (a/b) × q as a parts of q split into b parts (2/3 × 4 =
  8/3); story contexts; areas of rectangles with fractional sides by tiling
  (legacy `multiplying-fractions-visual-area-models-quiz.md` revised).
- **Week 20 goal:** scaling — compare product size to factors without
  multiplying (multiplying by >1 grows, by <1 shrinks); the legacy
  `decimal-products-practice.md` "product smaller than factor" prompt reprises
  here for fractions.
- **Week 21 goal:** divide unit fractions by whole numbers and whole numbers by
  unit fractions (1/3 ÷ 4 = 1/12; 4 ÷ 1/2 = 20 halves = 8... 4 ÷ 1/2 = 8);
  story contexts and visual models; the Q10 pair (4 ÷ 1/2 vs 1/2 ÷ 4) teaches
  order sensitivity; legacy `unit-fraction-division-story-problems-quiz.md`
  revised.
- **Week 22:** review week — fraction model stations, recipe-studio doubling
  tasks (2 1/2 × 2 = 5), scaling games, formative check.

### Unit 06 — Measurement conversions and volume (Weeks 23–26)

- **Standards:** 5.MD.A.1, 5.MD.C.3.a–b, 5.MD.C.4, 5.MD.C.5.a–c
- **Week 23 goal:** convert among different-sized units within one system
  (5 cm = 0.05 m); two-column conversion tables (new content — no legacy);
  multistep real-world problems.
- **Week 24 goal:** volume as packing unit cubes; count unit cubes; V = l × w ×
  h and V = B × h; legacy volume-quiz items revised (96 ÷ 24 = 4 cm missing
  height; cubic units named).
- **Week 25 goal:** volume as additive — composite prisms (barracks 180 + 60 =
  240 m³); real-world problems; legacy Minecraft barracks task as the Week 25
  project session.
- **Week 26:** review week — conversion races, volume-building challenges,
  formative check.

### Unit 07 — Coordinate planes, patterns, and numerical expressions (Weeks 27–30)

- **Standards:** 5.G.A.1, 5.G.A.2, 5.OA.A.1, 5.OA.A.2, 5.OA.B.3, 5.G.B.3
- **Week 27 goal:** axes, origin, ordered pairs in Quadrant I; x first (right),
  y second (up); plot and identify points; legacy coordinate-quiz items
  revised; Minecraft waypoints become the Week 27 mapping session.
- **Week 28 goal:** real-world problems on the coordinate plane — graph points,
  interpret coordinate values in context (the quiz's traveler: 3 hours, 150
  miles).
- **Week 29 goal:** numerical expressions — parentheses, brackets, braces; write
  expressions that record calculations (2 × (8 + 7)); interpret without
  evaluating (3 × (18932 + 921) is three times as large — no calculation);
  patterns: generate two sequences from two rules, relate corresponding terms,
  graph ordered pairs (Add 3 / Add 6 sequences).
- **Week 30:** review week — figure classification (5.G.B.3: rectangles are
  categories, squares are rectangles — all rectangles have four right angles,
  so all squares do); coordinate games, formative check.

### Unit 08 — Data, line plots, and cumulative problem solving (Weeks 31–34)

- **Standards:** 5.MD.B.2 (plus cumulative application of Units 01–07)
- **Week 31 goal:** line plots of fractional measurements (1/2, 1/4, 1/8) —
  measure, plot, label units (new content — no legacy).
- **Week 32 goal:** solve problems from line-plot data with grade-level
  fraction operations ("redistributed equally" reasoning).
- **Week 33 goal:** cumulative problem solving — multi-domain tasks; public
  `us_states.csv` columns (`population_approx`, `area_sq_mi`) as labeled,
  real-world comparison data with columns and units named in every task.
- **Week 34:** review week — applied project presentations, formative check.

### Weeks 35–36 — Final review (flexible)

- Cumulative tasks across all twenty objectives — powers of ten, multi-digit
  operations, decimal arithmetic, fraction operations and scaling, conversions,
  volume, coordinate graphing, expressions, patterns, line plots; re-teach
  where evidence shows gaps; final observational assessment and keys (delivered
  with R00). The legacy comprehensive-semester-1 quiz is rebuilt at cumulative
  difficulty for this package.

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with
decimal/multi-digit retrieval, Unit 03 reprises Unit 01's powers-of-ten for
decimal placement, Unit 05 reprises Unit 03's decimal products for the
"product smaller than factor" scaling idea, Unit 06 reprises Unit 04's fraction
arithmetic for conversion tables, Unit 08 reprises Units 04–05's fraction work
for line-plot data). Midyear (Week 18) and final (Weeks 35–36) weeks are
full-track reviews. Formative checks are short written tasks (10–12 items) the
adult reviews the same day; each unit's teacher guide specifies what "ready to
move on" looks like. Multiplication and division fluency is strategy-based —
no timed speed tests.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/math_fundamentals.md` — in-band adult/learner reference: Place
  Value for U01, Fractions for U04–U05, Percent & Decimals for U03, Common
  Conversions for U06 — excerpted and explained at grade level, never assigned
  whole.
- `resources/weights_and_measures.md` — conversion-table reference for U06
  (customary and metric length/weight/volume); the adult selects in-band tables
  only (forex, electricity, digital storage sections are out of scope).
- `resources/us_states.csv` — `population_approx`, `area_sq_mi` columns as real,
  labeled public data for U08 comparison and line-plot work; columns and units
  named in every task using it.
- Legacy assignments/quizzes feed unit builds per the keep/revise decisions in
  §1; shared manipulative patterns (decimal place-value mats, powers-of-ten
  sliders, hundredths grids, fraction strips, unit-cube sets, coordinate grids,
  conversion tables) will be created once in Units 01–04 and reused; do not
  duplicate per unit.
- Datasets with above-band magnitudes (`un_countries.csv`,
  `solar_system_planets.csv`) and `financial_tools_and_principles.md` are
  **not** core reuse at grade 5.

## 8. Safe materials

Household or dollar-store manipulatives: counters, base-ten blocks (or bundled
straws/sticks), digit cards, decimal place-value mats, powers-of-ten sliders,
hundredths grids, fraction strips and circles, rulers, measuring cups
(milliliter/liter), kitchen scale, unit cubes (or sugar cubes), grid paper,
unit-square tiles, crayons. No sharp tools; adult supervises scissors; water
only for liquid measuring, spill mats; small parts supervised in shared
settings; indoor/observation alternatives for all outdoor measuring tasks.
Calculators may check work only after the written method is shown — never as
the first method.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  written work when writing stamina lags (grade 5 expects growing written
  reasoning — extensions require full written explanations).
- High-contrast, large numeral/decimal cards; textured fraction pieces and
  coordinate grids for low-vision learners.
- Sessions about 40 min with movement breaks; every lesson includes a seated-table
  and a floor-play variant.
- Language support: vocabulary taught with objects first, word second; visual
  word walls; home-language labels welcomed alongside English terms.
- Every drawn diagram ships with a text-only alternative; color is never the
  only cue.
- Fluency work is strategy-based, never timed — no speed tests in Units 01–03.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #26.
- Every legacy quiz embeds its answer key beside the student questions; each
  unit build separates them (the "7.39" editing error in the decimals quiz is
  fixed in the U03 build).
- 5.MD.A.1 (measurement conversions), 5.MD.B.2 (line plots), 5.OA.A.1–A.2
  (numerical expressions), and 5.G.B.3 (figure classification) have no legacy
  coverage — U06, U08, and U07 build them new.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Place value, decimal patterns, and powers of ten; U02 Multi-digit
multiplication and division; U03 Decimal operations and applications; U04
Fraction addition and subtraction with unlike denominators; U05 Fraction
multiplication, division, and models; U06 Measurement conversions and volume;
U07 Coordinate planes, patterns, and numerical expressions; U08 Data, line
plots, and cumulative problem solving; R00 diagnostic, midyear/final review,
and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #26 body, comments, and label state re-read 2026-10-04 before claiming;
  no competing claim (0 comments prior to the claim comment); `curriculum-in-progress`
  label added with a timestamped claim comment (2026-10-04T13:56:21Z).
- `curriculum/grade-5/math/` re-inventoried on `main` @ `2c43d24`: 19 Markdown
  files confirmed (1 subject README, 6 assignments, 12 quizzes), matching the
  issue's 2026-10-01 baseline.
- Legacy computations re-solved independently this run: multi-digit division
  (39; 42; 43 R1), production budget (1,764; 1,026; 950; $3,810 with shipping),
  powers of ten (3,600; 7,000; 420), decimal products (0.28; 2.1; 3.64; 8.25),
  fraction studio (1 1/12 liquids; 2 1/24 cheese; doubling; 16 cups; 1/9 quart),
  Minecraft volumes (160; 240; 180 + 60 = 240) — all match the files.
- All twelve quiz answer keys spot-checked and correct (e.g., 8.72 − 3.48 =
  5.24; 15.8 + 4.93 = 20.73; 56 × 34 = 1,904; 1,248 ÷ 16 = 78; 3/5 + 1/4 =
  17/20; 4 1/3 − 1 2/3 = 2 2/3; 4 ÷ 1/2 = 8 vs 1/2 ÷ 4 = 1/8).
- Standards codes/descriptions verified against the official Common Core
  mathematics framework grade-5 domain pages
  (thecorestandards.org/Math/Content/5/{OA,NBT,NF,MD,G}, opened 2026-10-04);
  5.NBT.A.4 and 5.NBT.B.5's official-text wording is used because the site's NBT
  page rendering skips them (same quirk the grade-4 audit documented) — no
  state adoption, accreditation, or alignment certification claimed.
- External recommendations checked 2026-10-04: `mathsisfun.com/fractions.html`
  verified live and grade-appropriate (pizza-slice models, equivalence, LCD).
  The Khan Academy legacy deep links cited by the studio assignments
  (`imp-fractions-3`, `5th-volume`, `imp-coordinate-plane`) could not be
  directly verified (client-challenge page on fetch); the YouTube "explainer
  video" links are labeled search links, not claimed videos — unit builds must
  re-verify targets.
- The twenty objectives map onto the issue's U01–U08 checklist order, kept as
  the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files or prose-planned units).
