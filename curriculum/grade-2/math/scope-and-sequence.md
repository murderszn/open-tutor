# Grade 2 Mathematics — Scope and Sequence

Audit section A00 of [issue #14](https://github.com/murderszn/open-tutor/issues/14).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-02 against `main` (commit `a6d2733`).

| Item | Location | Decision |
|---|---|---|
| Grade-2 hub page | `curriculum/grade-2/README.md` | **Revise** — updated to reflect the math track's audit status and link the new subject folder |
| Grade 2 math folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade math content | none (0 Markdown files under `curriculum/grade-2/` before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade other subjects (science #15, language arts #16, social studies #17) | placeholder hubs only | **No reuse** — nothing substantive to borrow yet |
| Grade 1 math track (#10, audit in draft PR) | `curriculum/grade-1/math/` (PR branch, unmerged) | **Reference for entry prerequisites only** — grade-1 end-of-year objectives (count to 120, two-digit place value, add/subtract within 20, 10 more/10 less, nonstandard measurement, time to half-hour) define what this track assumes; no grade-1 lessons copied upward |
| Kindergarten math track (#6, audit delivered; U01 in draft) | `curriculum/grade-k/math/` | **Prerequisite reference only** — K foundations sit two years back; no reuse |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/math/`, etc. | **No reuse for grade-2 instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| `resources/math_fundamentals.md` | explicitly grades 4–7 (place value to millions, decimals, fractions, ratios) | **Not reusable at grade 2** — beyond grade band; flag only as a downstream reference |
| `resources/weights_and_measures.md` | comprehensive conversion reference (customary/metric, dimensional analysis) | **Teacher-side reuse only** — adult reads to keep length/unit vocabulary accurate in Unit 06 teacher guides; never assigned to the learner |
| `resources/financial_tools_and_principles.md` | grades 5+ money concepts (stocks, credit, mortgages) | **No reuse** at grade 2 — Unit 07 money work uses original small-denomination scenarios with play coins |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/data sources in the plan | **No direct reuse at grade 2** — magnitudes (50 states, 190+ countries) sit above the grade-2 number range; Unit 07 data work will use original small-count scenarios (≤ 4 categories) with clearly labeled fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |

No existing grade-2 math material was inaccurate or inappropriate; there was simply
none. No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-2 math with (the grade-1 track's end-of-year objectives):

- Counting to 120 from any starting number; reading and writing numerals to 120
- Two-digit place value: tens and ones; teens as ten + ones; decade numbers as groups of ten
- Comparing two two-digit numbers with `>`, `=`, `<`
- Adding and subtracting within 20 — fluent within 10 — with counting on, making ten,
  decomposing to a ten, fact families, and easier known sums
- Word problems within 20 of every situation type, unknowns in all positions
- Adding within 100 (two-digit + one-digit; two-digit + multiple of 10); mentally
  finding 10 more/10 less; subtracting multiples of 10
- Ordering objects by length; measuring by iterating same-size nonstandard units
  with no gaps or overlaps
- Telling time to the hour and half-hour; data displays with up to three categories
- Shape attributes; composing shapes; halves and fourths of circles and rectangles

The diagnostic weeks (Weeks 1–2) verify these; Unit 01 re-teaches hundred/tens/ones
grouping (1.NBT.B.2 → 2.NBT.A.1) rather than assuming it is secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Explain three-digit numbers as hundreds, tens, and ones (100 as a bundle of ten
   tens; 100, 200, …, 900 as one through nine hundreds); count within 1000;
   skip-count by 5s, 10s, and 100s; read and write numbers to 1000 using base-ten
   numerals, number names, and expanded form.
2. Compare two three-digit numbers based on the meanings of the hundreds, tens, and
   ones digits, recording with `>`, `=`, `<`.
3. Fluently add and subtract within 20 using mental strategies; by year's end know
   from memory all sums of two one-digit numbers.
4. Fluently add and subtract within 100 using place-value strategies, properties of
   operations, and addition–subtraction relationships; add up to four two-digit
   numbers; mentally add or subtract 10 from a number 100–900; explain why a
   strategy works using place value (explanations may use drawings or objects).
5. Add and subtract within 1000 using concrete models or drawings and place-value
   strategies, relating the strategy to a written method; compose or decompose tens
   and hundreds as needed; mentally add or subtract 100 from a number 100–900.
6. Solve one- and two-step word problems within 100 of every situation type (add to,
   take from, put together, take apart, compare), with unknowns in all positions,
   using drawings and equations with a symbol for the unknown number.
7. Determine whether a group of up to 20 objects has an odd or even number of members
   by pairing objects or counting by 2s; write an even number as a sum of two equal
   addends; find the total of a rectangular array (up to 5 rows × 5 columns) by
   addition, writing the total as a sum of equal addends.
8. Measure lengths by selecting appropriate standard tools (rulers, yardsticks, meter
   sticks, measuring tapes); estimate lengths in inches, feet, centimeters, and
   meters; measure the same object with two different unit sizes and describe how
   the measurements relate to the chosen unit size; find how much longer one object
   is than another in standard units; solve length word problems within 100;
   represent whole numbers as lengths from 0 on a number line and show sums and
   differences within 100 on it.
9. Tell and write time to the nearest five minutes from analog and digital clocks,
   using a.m. and p.m.; solve word problems with dollar bills, quarters, dimes,
   nickels, and pennies, using `$` and `¢` appropriately.
10. Generate measurement data by measuring lengths to the nearest whole unit and show
    it on a line plot with a whole-number scale; draw picture graphs and bar graphs
    (single-unit scale) for data with up to four categories; solve put-together,
    take-apart, and compare problems from a bar graph.
11. Recognize and draw shapes having specified attributes (triangles, quadrilaterals,
    pentagons, hexagons, cubes); partition a rectangle into rows and columns of
    same-size squares and count them; partition circles and rectangles into two,
    three, or four equal shares, describe the shares (halves, thirds, fourths) and
    the whole (two halves, three thirds, four fourths), recognizing that equal
    shares of identical wholes need not have the same shape.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, grade 2
domains, as published at
[thecorestandards.org/Math](https://www.thecorestandards.org/Math/).
All four grade-2 domain pages re-opened 2026-10-02; the two standards the site's
page rendering skipped (2.NBT.A.2, 2.MD.A.3) were cross-checked against
official-text district reproductions. No state adoption or accreditation claimed.

### Operations and Algebraic Thinking (2.OA)

| Code | Description |
|---|---|
| 2.OA.A.1 | Use addition and subtraction within 100 to solve one- and two-step word problems involving situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions, e.g., by using drawings and equations with a symbol for the unknown number to represent the problem. |
| 2.OA.B.2 | Fluently add and subtract within 20 using mental strategies. By end of Grade 2, know from memory all sums of two one-digit numbers. |
| 2.OA.C.3 | Determine whether a group of objects (up to 20) has an odd or even number of members, e.g., by pairing objects or counting them by 2s; write an equation to express an even number as a sum of two equal addends. |
| 2.OA.C.4 | Use addition to find the total number of objects arranged in rectangular arrays with up to 5 rows and up to 5 columns; write an equation to express the total as a sum of equal addends. |

### Number and Operations in Base Ten (2.NBT)

| Code | Description |
|---|---|
| 2.NBT.A.1 | Understand that the three digits of a three-digit number represent amounts of hundreds, tens, and ones; e.g., 706 equals 7 hundreds, 0 tens, and 6 ones. Special cases: (a) 100 can be thought of as a bundle of ten tens — called a "hundred." (b) The numbers 100, 200, 300, 400, 500, 600, 700, 800, 900 refer to one, two, three, four, five, six, seven, eight, or nine hundreds (and 0 tens and 0 ones). |
| 2.NBT.A.2 | Count within 1000; skip-count by 5s, 10s, and 100s. |
| 2.NBT.A.3 | Read and write numbers to 1000 using base-ten numerals, number names, and expanded form. |
| 2.NBT.A.4 | Compare two three-digit numbers based on meanings of the hundreds, tens, and ones digits, using >, =, and < symbols to record the results of comparisons. |
| 2.NBT.B.5 | Fluently add and subtract within 100 using strategies based on place value, properties of operations, and/or the relationship between addition and subtraction. |
| 2.NBT.B.6 | Add up to four two-digit numbers using strategies based on place value and properties of operations. |
| 2.NBT.B.7 | Add and subtract within 1000, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction; relate the strategy to a written method. Understand that in adding or subtracting three-digit numbers, one adds or subtracts hundreds and hundreds, tens and tens, ones and ones; and sometimes it is necessary to compose or decompose tens or hundreds. |
| 2.NBT.B.8 | Mentally add 10 or 100 to a given number 100–900, and mentally subtract 10 or 100 from a given number 100–900. |
| 2.NBT.B.9 | Explain why addition and subtraction strategies work, using place value and the properties of operations. (Explanations may be supported by drawings or objects.) |

### Measurement and Data (2.MD)

| Code | Description |
|---|---|
| 2.MD.A.1 | Measure the length of an object by selecting and using appropriate tools such as rulers, yardsticks, meter sticks, and measuring tapes. |
| 2.MD.A.2 | Measure the length of an object twice, using length units of different lengths for the two measurements; describe how the two measurements relate to the size of the unit chosen. |
| 2.MD.A.3 | Estimate lengths using units of inches, feet, centimeters, and meters. |
| 2.MD.A.4 | Measure to determine how much longer one object is than another, expressing the length difference in terms of a standard length unit. |
| 2.MD.B.5 | Use addition and subtraction within 100 to solve word problems involving lengths that are given in the same units, e.g., by using drawings (such as drawings of rulers) and equations with a symbol for the unknown number to represent the problem. |
| 2.MD.B.6 | Represent whole numbers as lengths from 0 on a number line diagram with equally spaced points corresponding to the numbers 0, 1, 2, ..., and represent whole-number sums and differences within 100 on a number line diagram. |
| 2.MD.C.7 | Tell and write time from analog and digital clocks to the nearest five minutes, using a.m. and p.m. |
| 2.MD.C.8 | Solve word problems involving dollar bills, quarters, dimes, nickels, and pennies, using $ and ¢ symbols appropriately. Example: If you have 2 dimes and 3 pennies, how many cents do you have? |
| 2.MD.D.9 | Generate measurement data by measuring lengths of several objects to the nearest whole unit, or by making repeated measurements of the same object. Show the measurements by making a line plot, where the horizontal scale is marked off in whole-number units. |
| 2.MD.D.10 | Draw a picture graph and a bar graph (with single-unit scale) to represent a data set with up to four categories. Solve simple put-together, take-apart, and compare problems using information presented in a bar graph. |

### Geometry (2.G)

| Code | Description |
|---|---|
| 2.G.A.1 | Recognize and draw shapes having specified attributes, such as a given number of angles or a given number of equal faces. Identify triangles, quadrilaterals, pentagons, hexagons, and cubes. |
| 2.G.A.2 | Partition a rectangle into rows and columns of same-size squares and count to find the total number of them. |
| 2.G.A.3 | Partition circles and rectangles into two, three, or four equal shares, describe the shares using the words halves, thirds, half of, a third of, etc., and describe the whole as two halves, three thirds, four fourths. Recognize that equal shares of identical wholes need not have the same shape. |

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two final-review
weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36 weeks. Session
model: **4 sessions per week, 25–30 minutes each** (16 sessions per unit). Session
types rotate across core lesson, guided practice, fluency/practice game, and
review — named per unit below. K–2 tasks remain oral, pointing, drawing,
manipulative, or adult-scribed as needed, with explicit adult directions; grade 2
does short independent written practice (6–8 tasks) that the adult reviews the
same day.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (number-talk warm-ups, manipulative trays,
  turn-taking, exit-check rituals) and baseline each objective's entry point.
- Sessions: one-on-one playful probes — count from 457, write the teen numerals,
  solve an add-to story within 20, find 10 more than 34, order three books by
  length, measure a pencil in inches, name the shapes on a card, read an o'clock
  and a half-hour time.
- No new instruction; record observations against the track objectives and re-teach
  any insecure grade-1 skill in Unit 01's first two sessions.

### Unit 01 — Place value to 1000 and number comparison (Weeks 3–6)

- **Standards:** 2.NBT.A.1, 2.NBT.A.2, 2.NBT.A.3, 2.NBT.A.4
- **Week 3 goal:** hundreds: ten tens = one hundred (flats); build three-digit
  numbers with flats, rods, and ones; 100–900 as groups of one hundred.
- **Week 4 goal:** read and write numbers to 1000 as numerals, number names, and
  expanded form; count within 1000; skip-count by 5s, 10s, 100s.
- **Week 5 goal:** compare two three-digit numbers by hundreds, then tens, then
  ones; record with `>`, `=`, `<`.
- **Week 6:** review week — thousand-chart races, comparison card games, formative check.
- Session rotation: model lesson (base-ten blocks) → guided practice
  (build-a-number trays) → fluency game (skip-count chains) → draw/record review.

### Unit 02 — Addition and subtraction within 100 (Weeks 7–10)

- **Standards:** 2.OA.B.2, 2.NBT.B.5, 2.NBT.B.6, 2.NBT.B.8 (tens), 2.NBT.B.9
- **Week 7 goal:** mental strategies for fluency within 20 (make-ten, doubles,
  count on/back); begin one-digit sums to memory.
- **Week 8 goal:** add and subtract within 100 with place-value strategies
  (break apart by tens and ones); add up to four two-digit numbers.
- **Week 9 goal:** mentally add/subtract 10 (100–900); explain why a strategy
  works using place value, with drawings or objects.
- **Week 10:** review week — strategy-choice stations, formative check.
- Each unit opens with a place-value retrieval warm-up from Unit 01.

### Unit 03 — Three-digit addition and subtraction (Weeks 11–14)

- **Standards:** 2.NBT.B.7, 2.NBT.B.8 (hundreds), 2.NBT.B.9
- **Week 11 goal:** add three-digit numbers with models; compose a ten or a
  hundred; relate drawings to the written method.
- **Week 12 goal:** subtract three-digit numbers with models; decompose a ten or
  a hundred; relate drawings to the written method.
- **Week 13 goal:** mentally add/subtract 100; choose a strategy and explain it
  (2.NBT.B.9) for mixed three-digit problems.
- **Week 14:** review week — hundreds/tens/ones bookkeeping practice, formative check.

### Unit 04 — Word problems and unknowns (Weeks 15–18)

- **Standards:** 2.OA.A.1, 2.OA.B.2, 2.NBT.B.5
- **Week 15 goal:** one-step stories within 100 — add-to, take-from,
  put-together, take-apart, compare; unknowns in all positions; drawings and
  equations with a symbol for the unknown.
- **Week 16 goal:** two-step stories within 100; choose the right operation for
  each step.
- **Week 17 goal:** unknowns in all positions (start-unknown, change-unknown,
  result-unknown); check reasonableness of answers.
- **Week 18:** midyear review (flexible) — cumulative computation and story
  problems from Units 01–04; re-teach the highest-need objective; formative check.

### Unit 05 — Equal groups, arrays, and repeated addition (Weeks 19–22)

- **Standards:** 2.OA.C.3, 2.OA.C.4, 2.G.A.2 (array connection)
- **Week 19 goal:** odd and even groups to 20 — pairing objects, counting by 2s;
  even numbers as a sum of two equal addends.
- **Week 20 goal:** rectangular arrays (up to 5 × 5) as rows of equal groups;
  repeated-addition equations for the total.
- **Week 21 goal:** partition a rectangle into rows and columns of same-size
  squares and count them (2.G.A.2) — the bridge from arrays to area language.
- **Week 22:** review week — array build challenge, odd/even sorts, formative check.
- Each unit opens with a skip-counting retrieval warm-up from Units 01–02.

### Unit 06 — Length and standard units (Weeks 23–26)

- **Standards:** 2.MD.A.1, 2.MD.A.2, 2.MD.A.3, 2.MD.A.4, 2.MD.B.5, 2.MD.B.6
- **Week 23 goal:** select the right tool (ruler, yardstick, meter stick, tape);
  measure lengths accurately in inches and centimeters.
- **Week 24 goal:** estimate lengths in inches, feet, centimeters, meters; then
  measure to check; measure the same object with two unit sizes and describe
  how the counts relate to unit size.
- **Week 25 goal:** how much longer? — length differences in standard units;
  length word problems within 100 (2.MD.B.5).
- **Week 26:** review week — measure-and-record relay, number-line sums and
  differences within 100 (2.MD.B.6), formative check.
- Adult directions cover every measuring task; no sharp tools; indoor alternatives
  for outdoor measuring.

### Unit 07 — Time, money, and data (Weeks 27–30)

- **Standards:** 2.MD.C.7, 2.MD.C.8, 2.MD.D.9, 2.MD.D.10
- **Week 27 goal:** analog clock anatomy; tell and write time to the nearest five
  minutes, analog and digital, with a.m. and p.m.
- **Week 28 goal:** coins and bills — quarters, dimes, nickels, pennies, dollar
  bills; `$` and `¢`; word problems with money amounts.
- **Week 29 goal:** measure several objects to the nearest whole unit; build a
  line plot; draw picture and bar graphs for up to four categories.
- **Week 30:** review week — data survey project; put-together, take-apart, and
  compare questions from bar graphs; formative check.
- Money scenarios use play coins and clearly labeled fictional practice data.

### Unit 08 — Shapes, partitions, and equal shares (Weeks 31–34)

- **Standards:** 2.G.A.1, 2.G.A.2, 2.G.A.3
- **Week 31 goal:** recognize and draw shapes by specified attributes — triangles,
  quadrilaterals, pentagons, hexagons, cubes; angles and equal faces.
- **Week 32 goal:** partition rectangles into rows and columns of same-size
  squares; count to find totals (connects back to Unit 05 arrays).
- **Week 33 goal:** partition circles and rectangles into halves, thirds, and
  fourths; name the shares; describe the whole; equal shares of identical wholes
  need not have the same shape.
- **Week 34:** review week — shape build challenge, fair-share tasks, formative check.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all eleven objectives; re-teach where
  evidence shows gaps; final observational assessment and keys (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with
three-digit building, Unit 03 with within-100 strategies, Unit 05 with
skip-counting, Unit 08 with array rows-and-columns). Midyear (Week 18) and final
(Weeks 35–36) weeks are full-track reviews. Formative checks are observed,
oral, drawn, or short written tasks (6–8 items) the adult reviews the same day;
each unit's teacher guide specifies what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/weights_and_measures.md` — adult vocabulary reference only (Unit 06).
- Shared manipulative patterns (0–999 charts, hundreds/tens/ones mats, number
  cards, number-line strips, clock and coin templates) will be created once in
  Units 01–02 and reused; do not duplicate per unit.
- Datasets, the grade 4–7 guides, and `financial_tools_and_principles.md` are
  **not** reused at grade 2 (grade-band mismatch).
- The K and grade-1 math tracks' materials serve as prerequisite reference, never
  as grade-2 lesson content.

## 8. Safe materials

Household or dollar-store manipulatives: counters (buttons, beans, blocks),
base-ten blocks or bundled straws/sticks (flats, rods, ones), ten frames,
0–999 number charts, number cards, number-line strips, rulers (inch/cm),
yardstick, meter stick, measuring tape, toy analog clock, play coins and bills,
paper shapes, graph paper, sorting trays, crayons. No sharp tools; adult
supervises scissors; check for food-allergen counters; small parts supervised in
shared settings. Outdoor measuring tasks have indoor/observation alternatives for
mobility limits.

## 9. Accessibility supports

- **Oral and pointing response modes** for all checks; adult scribes written work
  when the learner isn't ready to write independently.
- High-contrast, large numeral cards, clocks, and rulers; textured shape and
  coin manipulatives for low-vision learners.
- Short sessions (25–30 min) with movement breaks; every lesson includes a seated-table
  and a floor-play variant.
- Language support: vocabulary taught with objects first, word second; visual word
  walls; home-language labels welcomed alongside English terms.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue.
- Math-fact fluency is strategy-based, never timed — no speed tests in Units 02–03.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #14.
- No grade-2-appropriate internal datasets exist; Unit 07 data work will use
  original small-count scenarios (≤ 4 categories) with fictional practice data,
  clearly labeled.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Place value to 1000 and number comparison; U02 Addition and subtraction within
100; U03 Three-digit addition and subtraction; U04 Word problems and unknowns;
U05 Equal groups, arrays, and repeated addition; U06 Length and standard units;
U07 Time, money, and data; U08 Shapes, partitions, and equal shares; R00
diagnostic, midyear/final review, and cumulative assessments with keys. Each will
follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #14 body, comments, and label state re-read 2026-10-02 before claiming;
  no competing claim (0 comments prior to the claim comment).
- No `curriculum-in-progress` claims active on any other queue issue at claim
  time; open worker PRs (#63–68, #70, other tracks) were not touched.
- `curriculum/grade-2/` re-inventoried on `main` @ `a6d2733`: only the placeholder
  `README.md` present; math folder created by this run.
- Standards codes/descriptions verified against the official Common Core
  mathematics framework grade-2 domain pages
  (thecorestandards.org/Math/Content/2/{OA,NBT,MD,G}, re-opened 2026-10-02;
  2.NBT.A.2 and 2.MD.A.3 cross-checked against official-text district
  reproductions) — no state adoption, accreditation, or alignment certification
  claimed.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; grade 4–7 guides are beyond the grade-2 band, hence
  teacher-side only or no reuse. The eleven objectives map onto the issue's
  U01–U08 checklist order, kept as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
