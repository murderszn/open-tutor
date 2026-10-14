# Grade 3 Mathematics — Scope and Sequence

Audit section A00 of [issue #18](https://github.com/murderszn/open-tutor/issues/18).
Status: **validated draft** (this document and the track README); Unit 01 drafted
in a worker PR, Units 02–08 planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-03 against `main` (commit `247bf79`).

| Item | Location | Decision |
|---|---|---|
| Grade-3 hub page | `curriculum/grade-3/README.md` | **Revise** — updated to reflect the math track's audit status and link the new subject folder |
| Grade 3 math folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade math content | none (0 Markdown files under `curriculum/grade-3/` before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade other subjects (science #19, language arts #20, social studies #21) | placeholder hubs only | **No reuse** — nothing substantive to borrow yet |
| Grade 2 math track (#14, audit in draft PR #71) | `curriculum/grade-2/math/` (PR branch, unmerged) | **Reference for entry prerequisites only** — grade-2 end-of-year objectives (three-digit place value to 1000, add/subtract within 1000 with models, equal groups and arrays as repeated addition, length measurement, time to five minutes, money, data displays, shape partitions) define what this track assumes; no grade-2 lessons copied upward |
| Kindergarten (#6, audit delivered; U01 in draft) and Grade 1 (#10, audit in draft) math tracks | `curriculum/grade-k/math/`, `curriculum/grade-1/math/` | **No direct reuse** — foundations sit two or more years back; prerequisites for grade 3 are carried by the grade-2 track |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/math/`, etc. | **No reuse for grade-3 instruction** — content targets ages 9+; kept only as reference for where the track leads |
| `resources/math_fundamentals.md` | explicitly grades 4–7 (place value to millions, decimals, fractions, ratios) | **Teacher-side reference only** — adult may consult its rounding and fraction sections when writing grade-3 teacher guides; never assigned to the learner |
| `resources/weights_and_measures.md` | comprehensive conversion reference (customary/metric, dimensional analysis) | **Teacher-side reuse only** — adult reads to keep Unit 06 volume/mass vocabulary accurate in teacher guides (liters, grams, kilograms); never assigned to the learner |
| `resources/financial_tools_and_principles.md` | grades 5+ money concepts (stocks, credit, mortgages) | **No reuse** at grade 3 — no money objectives in this track |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/data sources in the plan | **No direct reuse at grade 3** — magnitudes sit above the grade-3 number range; Unit 08 scaled-graph work will use original small-count scenarios with clearly labeled fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |

No existing grade-3 math material was inaccurate or inappropriate; there was simply
none. No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-3 math with (the grade-2 track's end-of-year objectives):

- Three-digit place value: hundreds, tens, ones; 100 as ten tens; 100–900 as
  hundreds; counting within 1000; skip-counting by 5s, 10s, 100s; reading and
  writing numbers to 1000 as numerals, number names, and expanded form
- Comparing two three-digit numbers with `>`, `=`, `<`
- Fluent addition and subtraction within 20; all sums of two one-digit numbers
  from memory
- Fluent addition and subtraction within 100 (place-value strategies, up to four
  two-digit numbers); adding and subtracting within 1000 with models; mentally
  adding/subtracting 10 and 100; explaining why strategies work
- One- and two-step word problems within 100 of every situation type, unknowns
  in all positions, equations with a symbol for the unknown
- Odd/even to 20; rectangular arrays (up to 5 × 5) as repeated addition —
  the direct bridge to Unit 02 multiplication
- Length measurement with standard tools; estimation; length word problems;
  number-line sums and differences
- Time to the nearest five minutes; money to dollar-bills/quarters/dimes/nickels/pennies
- Line plots, picture graphs, bar graphs (single-unit scale, up to four categories)
- Shape attributes; partitioning rectangles into rows and columns (array bridge);
  halves, thirds, fourths of circles and rectangles

The diagnostic weeks (Weeks 1–2) verify these; Unit 01 re-teaches three-digit
grouping and within-1000 strategies before assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year (15 objectives; numbered in the track
README):

1. Use place-value understanding to round whole numbers to the nearest 10 or 100.
2. Fluently add and subtract within 1000 using strategies and algorithms based on
   place value, properties of operations, and/or the relationship between
   addition and subtraction.
3. Multiply one-digit whole numbers by multiples of 10 in the range 10–90
   (e.g., 9 × 80, 5 × 60) using strategies based on place value and properties
   of operations.
4. Interpret products of whole numbers (e.g., 5 × 7 as 5 groups of 7 objects)
   and whole-number quotients (e.g., 56 ÷ 8 as objects per share or number of
   shares); determine the unknown whole number in a multiplication or division
   equation relating three whole numbers.
5. Use multiplication and division within 100 to solve word problems involving
   equal groups, arrays, and measurement quantities, using drawings and equations
   with a symbol for the unknown number.
6. Fluently multiply and divide within 100 using strategies such as the
   relationship between multiplication and division or properties of operations;
   by year's end, know from memory all products of two one-digit numbers.
7. Apply properties of operations as multiplication/division strategies
   (commutative, associative, distributive) and understand division as an
   unknown-factor problem (e.g., find 32 ÷ 8 by finding the number that makes 32
   when multiplied by 8).
8. Solve two-step word problems using the four operations; represent them with
   equations using a letter for the unknown; assess reasonableness of answers
   with mental computation and estimation strategies including rounding;
   identify arithmetic patterns and explain them using properties of operations.
9. Understand a fraction 1/b as one part of b equal parts and a/b as a parts of
   size 1/b (denominators 2, 3, 4, 6, 8); represent fractions on a number line;
   explain equivalence in special cases; express whole numbers as fractions;
   compare two fractions with the same numerator or denominator, recording with
   `>`, `=`, `<`.
10. Tell and write time to the nearest minute; measure time intervals in minutes;
    solve word problems involving addition and subtraction of time intervals,
    e.g., with a number-line diagram.
11. Measure and estimate liquid volumes and masses using grams (g), kilograms
    (kg), and liters (l); solve one-step word problems involving masses or
    volumes in the same units, e.g., with a drawing of a beaker scale.
12. Draw scaled picture graphs and scaled bar graphs for a data set with several
    categories; solve one- and two-step "how many more"/"how many less" problems
    from scaled bar graphs; measure lengths to the nearest half and quarter inch
    and show the data on a line plot.
13. Understand area as an attribute of plane figures measured in unit squares;
    measure areas by counting unit squares; find rectangle areas by tiling and by
    multiplying side lengths; use tiling/area models for the distributive
    property; find areas of rectilinear figures by decomposing into
    non-overlapping rectangles and adding.
14. Solve problems involving perimeters of polygons — finding the perimeter given
    side lengths, finding an unknown side length, and exhibiting rectangles with
    the same perimeter and different areas or the same area and different
    perimeters.
15. Reason with shapes: shared attributes define larger categories (rhombuses,
    rectangles, squares as quadrilaterals); draw quadrilaterals outside those
    subcategories; partition shapes into parts with equal areas and express each
    part's area as a unit fraction of the whole.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, grade 3
domains, as published at
[thecorestandards.org/Math](https://www.thecorestandards.org/Math/).
All five grade-3 domain pages re-opened 2026-10-03. One rendering note:
thecorestandards.org's rendered Grade 3 NBT page lists only A.2 and A.3; the
standard 3.NBT.A.1 exists in the official text and its wording was corroborated
against multiple official-text reproductions (the same page-rendering quirk the
grade-2 audit documented for 2.NBT.A.2 and 2.MD.A.3). No state adoption or
accreditation claimed.

### Operations and Algebraic Thinking (3.OA)

| Code | Description |
|---|---|
| 3.OA.A.1 | Interpret products of whole numbers, e.g., interpret 5 × 7 as the total number of objects in 5 groups of 7 objects each. *For example, describe a context in which a total number of objects can be expressed as 5 × 7.* |
| 3.OA.A.2 | Interpret whole-number quotients of whole numbers, e.g., interpret 56 ÷ 8 as the number of objects in each share when 56 objects are partitioned equally into 8 shares, or as a number of shares when 56 objects are partitioned into equal shares of 8 objects each. *For example, describe a context in which a number of shares or a number of groups can be expressed as 56 ÷ 8.* |
| 3.OA.A.3 | Use multiplication and division within 100 to solve word problems in situations involving equal groups, arrays, and measurement quantities, e.g., by using drawings and equations with a symbol for the unknown number to represent the problem. |
| 3.OA.A.4 | Determine the unknown whole number in a multiplication or division equation relating three whole numbers. *For example, determine the unknown number that makes the equation true in each of the equations 8 × ? = 48, 5 = _ ÷ 3, 6 × 6 = ?* |
| 3.OA.B.5 | Apply properties of operations as strategies to multiply and divide. *Examples: If 6 × 4 = 24 is known, then 4 × 6 = 24 is also known. (Commutative property of multiplication.) 3 × 5 × 2 can be found by 3 × 5 = 15, then 15 × 2 = 30, or by 5 × 2 = 10, then 3 × 10 = 30. (Associative property of multiplication.) Knowing that 8 × 5 = 40 and 8 × 2 = 16, one can find 8 × 7 as 8 × (5 + 2) = (8 × 5) + (8 × 2) = 40 + 16 = 56. (Distributive property.)* |
| 3.OA.B.6 | Understand division as an unknown-factor problem. *For example, find 32 ÷ 8 by finding the number that makes 32 when multiplied by 8.* |
| 3.OA.C.7 | Fluently multiply and divide within 100, using strategies such as the relationship between multiplication and division (e.g., knowing that 8 × 5 = 40, one knows 40 ÷ 5 = 8) or properties of operations. By the end of Grade 3, know from memory all products of two one-digit numbers. |
| 3.OA.D.8 | Solve two-step word problems using the four operations. Represent these problems using equations with a letter standing for the unknown quantity. Assess the reasonableness of answers using mental computation and estimation strategies including rounding. |
| 3.OA.D.9 | Identify arithmetic patterns (including patterns in the addition table or multiplication table), and explain them using properties of operations. *For example, observe that 4 times a number is always even, and explain why 4 times a number can be decomposed into two equal addends.* |

### Number and Operations in Base Ten (3.NBT)

| Code | Description |
|---|---|
| 3.NBT.A.1 | Use place value understanding to round whole numbers to the nearest 10 or 100. (Official-text wording; not rendered on the site's Grade 3 NBT page, 2026-10-03 — see verification note above.) |
| 3.NBT.A.2 | Fluently add and subtract within 1000 using strategies and algorithms based on place value, properties of operations, and/or the relationship between addition and subtraction. |
| 3.NBT.A.3 | Multiply one-digit whole numbers by multiples of 10 in the range 10–90 (e.g., 9 × 80, 5 × 60) using strategies based on place value and properties of operations. |

### Number and Operations — Fractions (3.NF)

| Code | Description |
|---|---|
| 3.NF.A.1 | Understand a fraction 1/*b* as the quantity formed by 1 part when a whole is partitioned into *b* equal parts; understand a fraction *a*/*b* as the quantity formed by *a* parts of size 1/*b*. |
| 3.NF.A.2 | Understand a fraction as a number on the number line; represent fractions on a number line diagram. |
| 3.NF.A.2.a | Represent a fraction 1/*b* on a number line diagram by defining the interval from 0 to 1 as the whole and partitioning it into *b* equal parts. Recognize that each part has size 1/*b* and that the endpoint of the part based at 0 locates the number 1/*b* on the number line. |
| 3.NF.A.2.b | Represent a fraction *a*/*b* on a number line diagram by marking off a lengths 1/*b* from 0. Recognize that the resulting interval has size *a*/*b* and that its endpoint locates the number *a*/*b* on the number line. |
| 3.NF.A.3 | Explain equivalence of fractions in special cases, and compare fractions by reasoning about their size. |
| 3.NF.A.3.a | Understand two fractions as equivalent (equal) if they are the same size, or the same point on a number line. |
| 3.NF.A.3.b | Recognize and generate simple equivalent fractions, e.g., 1/2 = 2/4, 4/6 = 2/3. Explain why the fractions are equivalent, e.g., by using a visual fraction model. |
| 3.NF.A.3.c | Express whole numbers as fractions, and recognize fractions that are equivalent to whole numbers. *Examples: Express 3 in the form 3 = 3/1; recognize that 6/1 = 6; locate 4/4 and 1 at the same point of a number line diagram.* |
| 3.NF.A.3.d | Compare two fractions with the same numerator or the same denominator by reasoning about their size. Recognize that comparisons are valid only when the two fractions refer to the same whole. Record the results of comparisons with the symbols >, =, or <, and justify the conclusions, e.g., by using a visual fraction model. |

Grade 3 expectations in this domain are limited to fractions with denominators
2, 3, 4, 6, and 8 (per the framework's footnote).

### Measurement and Data (3.MD)

| Code | Description |
|---|---|
| 3.MD.A.1 | Tell and write time to the nearest minute and measure time intervals in minutes. Solve word problems involving addition and subtraction of time intervals in minutes, e.g., by representing the problem on a number line diagram. |
| 3.MD.A.2 | Measure and estimate liquid volumes and masses of objects using standard units of grams (g), kilograms (kg), and liters (l). Add, subtract, multiply, or divide to solve one-step word problems involving masses or volumes that are given in the same units, e.g., by using drawings (such as a beaker with a measurement scale) to represent the problem. (Excludes compound units such as cm³ and the geometric volume of a container; excludes multiplicative comparison problems.) |
| 3.MD.B.3 | Draw a scaled picture graph and a scaled bar graph to represent a data set with several categories. Solve one- and two-step "how many more" and "how many less" problems using information presented in scaled bar graphs. *For example, draw a bar graph in which each square in the bar graph might represent 5 pets.* |
| 3.MD.B.4 | Generate measurement data by measuring lengths using rulers marked with halves and fourths of an inch. Show the data by making a line plot, where the horizontal scale is marked off in appropriate units — whole numbers, halves, or quarters. |
| 3.MD.C.5.a | A square with side length 1 unit, called "a unit square," is said to have "one square unit" of area, and can be used to measure area. |
| 3.MD.C.5.b | A plane figure which can be covered without gaps or overlaps by *n* unit squares is said to have an area of *n* square units. |
| 3.MD.C.6 | Measure areas by counting unit squares (square cm, square m, square in, square ft, and improvised units). |
| 3.MD.C.7.a | Find the area of a rectangle with whole-number side lengths by tiling it, and show that the area is the same as would be found by multiplying the side lengths. |
| 3.MD.C.7.b | Multiply side lengths to find areas of rectangles with whole-number side lengths in the context of solving real world and mathematical problems, and represent whole-number products as rectangular areas in mathematical reasoning. |
| 3.MD.C.7.c | Use tiling to show in a concrete case that the area of a rectangle with whole-number side lengths *a* and *b* + *c* is the sum of *a* × *b* and *a* × *c*. Use area models to represent the distributive property in mathematical reasoning. |
| 3.MD.C.7.d | Recognize area as additive. Find areas of rectilinear figures by decomposing them into non-overlapping rectangles and adding the areas of the non-overlapping parts, applying this technique to solve real world problems. |
| 3.MD.D.8 | Solve real world and mathematical problems involving perimeters of polygons, including finding the perimeter given the side lengths, finding an unknown side length, and exhibiting rectangles with the same perimeter and different areas or with the same area and different perimeters. |

### Geometry (3.G)

| Code | Description |
|---|---|
| 3.G.A.1 | Understand that shapes in different categories (e.g., rhombuses, rectangles, and others) may share attributes (e.g., having four sides), and that the shared attributes can define a larger category (e.g., quadrilaterals). Recognize rhombuses, rectangles, and squares as examples of quadrilaterals, and draw examples of quadrilaterals that do not belong to any of these subcategories. |
| 3.G.A.2 | Partition shapes into parts with equal areas. Express the area of each part as a unit fraction of the whole. *For example, partition a shape into 4 parts with equal area, and describe the area of each part as 1/4 of the area of the shape.* |

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two final-review
weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36 weeks. Session
model: **4 sessions per week, about 30 minutes each** (16 sessions per unit).
Session types rotate across concept lesson, guided practice, fluency/practice
game, and review — named per unit below. Grade-3 learners do independent written
practice (8–10 tasks) that the adult reviews the same day; the adult still
supervises and may scribe when writing stamina lags.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (warm-up number talks, manipulative trays,
  multiplication-chart reference rules, exit-check rituals) and baseline each
  objective's entry point.
- Sessions: one-on-one playful probes — read and expand 476, round 234 to the
  nearest 10, add 345 + 278 with blocks, build a 3 × 4 array and write the
  repeated-addition equation, tell time on an analog clock to the minute,
  measure a book in centimeters, split a shape into thirds, explain odd vs. even.
- No new instruction; record observations against the track objectives and
  re-teach any insecure grade-2 skill in Unit 01's first two sessions.

### Unit 01 — Place value, rounding, and multi-digit operations (Weeks 3–6)

- **Standards:** 3.NBT.A.1, 3.NBT.A.2, 3.NBT.A.3
- **Week 3 goal:** three-digit numbers re-anchored: hundreds/tens/ones with flats,
  rods, ones; expanded form; fluency warm-up in adding/subtracting within 1000
  with models.
- **Week 4 goal:** round whole numbers to the nearest 10 and 100 with number
  lines and benchmark landmarks (halfway points); rounding games with digit cards.
- **Week 5 goal:** multiply one-digit numbers by multiples of 10 (10–90) —
  9 × 80 as 9 × 8 tens; use rounding and estimates to check sums and differences.
- **Week 6:** review week — place-value bookkeeping, estimation challenges,
  formative check.
- Session rotation: model lesson (base-ten blocks, number lines) → guided
  practice (build-and-round trays) → fluency game (estimation races) →
  review/write.

### Unit 02 — Multiplication concepts and facts (Weeks 7–10)

- **Standards:** 3.OA.A.1, 3.OA.A.3 (multiplication), 3.OA.B.5, 3.OA.C.7
- **Week 7 goal:** products as equal groups and arrays (from the grade-2 array
  work): 5 × 7 as 5 groups of 7; drawings and equations; measurement-quantity
  situations (for example, 4 rows of 6 chairs).
- **Week 8 goal:** properties as strategies — commutativity (arrays turned
  sideways), breaking arrays apart (distributive: 8 × 7 as 8 × 5 + 8 × 2);
  the adult names the properties, the learner uses them.
- **Week 9 goal:** fluency within 100 — fact families through 6s, then 7s–9s;
  strategies over memorization, but by year's end all one-digit products known
  from memory.
- **Week 10:** review week — array build challenge, fact stations, formative check.
- Each unit opens with a rounding/estimation retrieval warm-up from Unit 01.

### Unit 03 — Division concepts and facts (Weeks 11–14)

- **Standards:** 3.OA.A.2, 3.OA.A.3 (division), 3.OA.A.4, 3.OA.B.6, 3.OA.C.7
- **Week 11 goal:** quotients as fair shares and as group counts — 56 ÷ 8 as
  objects per share and as number of shares; equal-sharing manipulatives.
- **Week 12 goal:** division as the unknown-factor problem — find 32 ÷ 8 by
  asking what times 8 makes 32; fact-family triangles.
- **Week 13 goal:** unknown whole numbers in multiplication/division equations
  (8 × ? = 48, 5 = _ ÷ 3); division word problems with equal groups and arrays.
- **Week 14:** review week — fair-share games, mixed multiplication/division
  practice, formative check.
- Every session pairs each division fact with its multiplication partner.

### Unit 04 — Multiplication, division, and two-step problems (Weeks 15–18)

- **Standards:** 3.OA.A.4, 3.OA.C.7, 3.OA.D.8, 3.OA.D.9
- **Week 15 goal:** two-step word problems — read, model each step, write an
  equation with a letter for the unknown (for example, 48 = 6 × n).
- **Week 16 goal:** assess reasonableness — rounding and mental computation to
  check answers; decide which operation each step needs.
- **Week 17 goal:** arithmetic patterns in the multiplication table (even
  products of 4; 9s patterns) and explanations using properties; mixed review of
  Units 01–04 fluency.
- **Week 18:** midyear review (flexible) — cumulative two-step problems,
  multiplication/division fluency, rounding; re-teach the highest-need objective;
  formative check.
- Rounding from Unit 01 is reused deliberately as the estimation tool for D.8.

### Unit 05 — Fractions on models and number lines (Weeks 19–22)

- **Standards:** 3.NF.A.1, 3.NF.A.2, 3.NF.A.3
- **Week 19 goal:** 1/b as one part of b equal parts (denominators 2, 3, 4, 6,
  8); a/b as a parts of size 1/b; fraction strips and folded-paper models.
- **Week 20 goal:** fractions as numbers on the number line — interval 0 to 1 as
  the whole, partitioned into b equal parts; mark a/b by counting unit fractions
  from 0.
- **Week 21 goal:** equivalence in special cases (1/2 = 2/4; 4/6 = 2/3) with
  visual models; whole numbers as fractions (3 = 3/1); comparing same-numerator
  or same-denominator fractions with `>`, `=`, `<`, valid only for the same whole.
- **Week 22:** review week — fair-share baking scenarios (fictional data),
  number-line placement games, formative check.
- Equal-share language from grade 2 (2.G.A.3) is the entry bridge; the adult
  keeps denominators to 2, 3, 4, 6, 8.

### Unit 06 — Measurement, time, and liquid volume (Weeks 23–26)

- **Standards:** 3.MD.A.1, 3.MD.A.2, 3.MD.B.4
- **Week 23 goal:** time to the nearest minute (analog and digital); elapsed-time
  intervals in minutes; number-line diagrams for time word problems.
- **Week 24 goal:** liquid volume in liters — measuring cups, estimating, then
  measuring; volume word problems in the same units (drawings of beaker scales).
- **Week 25 goal:** mass in grams and kilograms — kitchen scale, estimating,
  then measuring; one-step mass problems.
- **Week 26:** review week — measure lengths to halves/fourths of an inch;
  build a line plot (3.MD.B.4); formative check.
- Water is the only liquid measured; spill mats; adult handles any glass;
  indoor/observation alternatives for mobility limits.

### Unit 07 — Area, perimeter, and rectilinear shapes (Weeks 27–30)

- **Standards:** 3.MD.C.5, 3.MD.C.6, 3.MD.C.7, 3.MD.D.8
- **Week 27 goal:** area as covering with unit squares — count square units;
  improvised unit squares (index cards) before grid paper.
- **Week 28 goal:** rectangles — tiling vs. multiplying side lengths; area models
  of the distributive property (3.MD.C.7.c) as a reprise of Unit 02 array work.
- **Week 29 goal:** perimeter of polygons — given side lengths, unknown side
  lengths; rectangles with the same perimeter and different areas, and vice versa.
- **Week 30:** review week — rectilinear figures decomposed into non-overlapping
  rectangles; additive area in real-world problems; formative check.
- Area language connects back to multiplication; perimeter stays visually
  distinct (string-and-fence activities) to avoid confusion.

### Unit 08 — Geometry and scaled data displays (Weeks 31–34)

- **Standards:** 3.G.A.1, 3.G.A.2, 3.MD.B.3
- **Week 31 goal:** shapes by shared attributes — rhombuses, rectangles, squares
  as quadrilaterals; draw quadrilaterals outside those subcategories.
- **Week 32 goal:** partition shapes into equal areas; express each part's area
  as a unit fraction of the whole (ties back to Unit 05 fraction language).
- **Week 33 goal:** scaled picture and bar graphs — each symbol/square worth more
  than 1 (for example, one pet icon = 5 pets); "how many more"/"how many less"
  problems from scaled bars; clearly labeled fictional survey data.
- **Week 34:** review week — category-sort geometry games, data display
  challenge, formative check.

### Weeks 35–36 — Final review (flexible)

- Cumulative tasks across all fifteen objectives — two-step problems, fluency
  stations, fraction number lines, area/perimeter builds, scaled graphs;
  re-teach where evidence shows gaps; final observational assessment and keys
  (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with
rounding/estimation, Unit 04 reuses rounding as its estimation tool, Unit 07
reprises Unit 02's array-distributive work, Unit 08 reprises Unit 05's fraction
language). Midyear (Week 18) and final (Weeks 35–36) weeks are full-track
reviews. Formative checks are observed, drawn, or short written tasks (8–10
items) the adult reviews the same day; each unit's teacher guide specifies what
"ready to move on" looks like. Multiplication/division fluency is
strategy-based — no timed speed tests.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/weights_and_measures.md` — adult vocabulary reference only (Unit 06:
  liters, grams, kilograms).
- `resources/math_fundamentals.md` — adult reference only for its rounding and
  fraction sections when drafting Unit 01/05 teacher guides (its grade 4–7 band
  is above the learner).
- Shared manipulative patterns (0–999 charts, hundreds/tens/ones mats, fact
  families, number-line strips, fraction strips, clock and beaker templates, unit
  squares) will be created once in Units 01–02 and reused; do not duplicate per unit.
- Datasets, `financial_tools_and_principles.md`, and the grade 4–8 guides are
  **not** reused at grade 3 (grade-band mismatch).
- The grade-2 math track's materials serve as prerequisite reference, never as
  grade-3 lesson content.

## 8. Safe materials

Household or dollar-store manipulatives: counters, base-ten blocks (or bundled
straws/sticks), digit cards, 0–100 multiplication reference charts (introduced
as reference after fluency is built, never as a crutch), fraction strips and
folded-paper models, rulers marked with halves and fourths, measuring cups
(milliliter/liter), kitchen scale, toy analog clock, unit-square tiles (index
cards), graph paper, crayons. No sharp tools; adult supervises scissors; water
only for liquid measuring, spill mats; small parts supervised in shared
settings; indoor/observation alternatives for all outdoor measuring tasks.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  written work when writing stamina lags.
- High-contrast, large numeral/fact cards, clocks, and rulers; textured fraction
  strips and shape tiles for low-vision learners.
- Short sessions (about 30 min) with movement breaks; every lesson includes a
  seated-table and a floor-play variant.
- Language support: vocabulary taught with objects first, word second; visual
  word walls; home-language labels welcomed alongside English terms.
- Every drawn diagram ships with a text-only alternative; color is never the
  only cue.
- Multiplication/division fluency is strategy-based, never timed — no speed
  tests in Units 02–04.

## 10. Gaps and paths for future units

- Units U02–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #18. U01 (Place value, rounding, and
  multi-digit operations) is delivered as a validated draft in a worker PR;
  its files live under
  `curriculum/grade-3/math/units/unit-01-place-value-rounding-and-operations/`.
- No grade-3-appropriate internal datasets exist; Unit 08 scaled-graph work will
  use original small-count fictional survey data, clearly labeled.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- Unit 06 requires a measuring-cup/beaker-scale visual and a liter reference;
  these will be original diagrams, not stock photos.

## 11. Planned and drafted units (prose — no links to missing files)

U01 Place value, rounding, and multi-digit operations — **draft delivered**
(validated draft in a worker PR; files under
`curriculum/grade-3/math/units/unit-01-place-value-rounding-and-operations/`,
not educator-reviewed, not merged); U02 Multiplication concepts
and facts; U03 Division concepts and facts; U04 Multiplication, division, and
two-step problems; U05 Fractions on models and number lines; U06 Measurement,
time, and liquid volume; U07 Area, perimeter, and rectilinear shapes; U08
Geometry and scaled data displays; R00 diagnostic, midyear/final review, and
cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #18 body, comments, and label state re-read 2026-10-03 before claiming;
  no competing claim (0 comments prior to the claim comment); `curriculum-in-progress`
  label added with a timestamped claim comment.
- No other `curriculum-in-progress` claims active on any queue issue at claim
  time (latest prior claim on #17 at 08:00 UTC, delivered same run); open worker
  PRs (#63–#74, other tracks) were not touched.
- `curriculum/grade-3/` re-inventoried on `main` @ `247bf79`: only the placeholder
  `README.md` present; math folder created by this run.
- Standards codes/descriptions verified against the official Common Core
  mathematics framework grade-3 domain pages
  (thecorestandards.org/Math/Content/3/{OA,NBT,NF,MD,G}, re-opened 2026-10-03);
  3.NBT.A.1's description was corroborated against multiple official-text
  reproductions because the site's page rendering skips it (same quirk the
  grade-2 audit documented for 2.NBT.A.2/2.MD.A.3) — no state adoption,
  accreditation, or alignment certification claimed.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; grade 4–7 guides are beyond the grade-3 band, hence
  teacher-side only or no reuse. The fifteen objectives map onto the issue's
  U01–U08 checklist order, kept as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
