# Grade 1 Mathematics — Scope and Sequence

Audit section A00 of [issue #10](https://github.com/murderszn/open-tutor/issues/10).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-02 against `main` (commit `4870c53`).

| Item | Location | Decision |
|---|---|---|
| Grade-1 hub page | `curriculum/grade-1/README.md` | **Revise** — updated to reflect the math track's audit status and link the new subject folder |
| Grade 1 math folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade math content | none (0 Markdown files under `curriculum/grade-1/` before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade other subjects (science #11, language arts #12, social studies #13) | placeholder hubs only | **No reuse** — nothing substantive to borrow yet |
| Kindergarten math track (#6, audit delivered; U01 in draft) | `curriculum/grade-k/math/` | **Reference for entry prerequisites only** — K objectives (counting to 100, numerals to 20, add/subtract within 10) define what this track assumes; no K lessons copied upward |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/math/`, etc. | **No reuse for grade-1 instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| `resources/math_fundamentals.md` | grades 4–7 focus (place value to millions, decimals, fractions, ratios) | **Not reusable at grade 1** — beyond grade band; flag only as a downstream reference |
| `resources/weights_and_measures.md` | teacher reference | **Teacher-side reuse only** — adult reads for accurate length/attribute vocabulary; never assigned to the learner |
| `resources/financial_tools_and_principles.md` | grades 5+ concepts | **No reuse** at grade 1 |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/data sources in the plan | **No direct reuse at grade 1** — magnitudes (dozens of states, hundreds) sit mostly above the grade-1 number range; Unit 07 data work will use original small-count categorical scenarios (≤ 3 categories) with clearly labeled fictional practice data |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |

No existing grade-1 math material was inaccurate or inappropriate; there was simply
none. No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-1 math with (the K track's end-of-year objectives):

- Counting to 100 by ones and tens, numerals written 0–20, counting forward from any number within 20
- One-to-one counting of sets to 20 with cardinality
- Comparing numbers 1–10; composing/decomposing 11–19 as ten ones + some ones
- Adding/subtracting within 10 with objects/drawings; fluency within 5
- 2D/3D shape names and attributes; direct measurement comparison

The diagnostic weeks (Weeks 1–2) verify these; Unit 01 re-teaches ten-and-ones
grouping (K.NBT.A.1 → 1.NBT.B.2) rather than assuming it is secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Count to 120 from any starting number within the range; read and write numerals to 120.
2. Explain two-digit numbers as tens and ones: teen numbers as a ten plus ones, decade numbers as groups of ten with zero ones.
3. Compare two two-digit numbers using the meanings of tens and ones digits, recording with `>`, `=`, `<`.
4. Add and subtract within 20 fluently within 10 — using counting on, making ten, decomposing to a ten, addition–subtraction fact families, and creating easier known sums.
5. Solve word problems within 20 of every situation type (add to, take from, put together, take apart, compare), with unknowns in all positions, including three-addend problems (sum ≤ 20).
6. Interpret and work with equations: meaning of the equal sign, true/false equations, and the unknown number in addition/subtraction equations.
7. Add within 100 (two-digit + one-digit; two-digit + multiple of 10); mentally find 10 more/10 less than a two-digit number; subtract multiples of 10 (10–90).
8. Order objects by length, compare lengths indirectly via a third object, and measure by iterating same-size units with no gaps or overlaps.
9. Tell and write time to the hour and half-hour on analog and digital clocks.
10. Organize, represent, and interpret data with up to three categories; answer total/per-category/more-or-less questions.
11. Distinguish defining from non-defining shape attributes; compose shapes into composite shapes; partition circles and rectangles into halves, fourths, and quarters and describe the shares.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**, grade 1
domains, as published at
[thecorestandards.org/Math](https://www.thecorestandards.org/Math/)
(each domain page re-opened and descriptions cross-checked 2026-10-02 against the
official text; no state adoption or accreditation claimed).

### Operations and Algebraic Thinking (1.OA)

| Code | Description |
|---|---|
| 1.OA.A.1 | Use addition and subtraction within 20 to solve word problems involving situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions, e.g., by using objects, drawings, and equations with a symbol for the unknown number to represent the problem. |
| 1.OA.A.2 | Solve word problems that call for addition of three whole numbers whose sum is less than or equal to 20, e.g., by using objects, drawings, and equations with a symbol for the unknown number to represent the problem. |
| 1.OA.B.3 | Apply properties of operations as strategies to add and subtract. (Examples: If 8 + 3 = 11 is known, then 3 + 8 = 11 is also known — commutative property of addition; 2 + 6 + 4 = 2 + 10 = 12 — associative property of addition. Students need not use formal terms.) |
| 1.OA.B.4 | Understand subtraction as an unknown-addend problem. (For example, subtract 10 − 8 by finding the number that makes 10 when added to 8.) |
| 1.OA.C.5 | Relate counting to addition and subtraction (e.g., by counting on 2 to add 2). |
| 1.OA.C.6 | Add and subtract within 20, demonstrating fluency for addition and subtraction within 10. Use strategies such as counting on; making ten (e.g., 8 + 6 = 8 + 2 + 4 = 10 + 4 = 14); decomposing a number leading to a ten (e.g., 13 − 4 = 13 − 3 − 1 = 10 − 1 = 9); using the relationship between addition and subtraction (e.g., knowing that 8 + 4 = 12, one knows 12 − 8 = 4); and creating equivalent but easier or known sums (e.g., adding 6 + 7 by creating the known equivalent 6 + 6 + 1 = 12 + 1 = 13). |
| 1.OA.D.7 | Understand the meaning of the equal sign, and determine if equations involving addition and subtraction are true or false. (For example, 6 = 6; 7 = 8 − 1; 5 + 2 = 2 + 5; 4 + 1 = 5 + 2.) |
| 1.OA.D.8 | Determine the unknown whole number in an addition or subtraction equation relating three whole numbers. (For example, the unknown in 8 + ? = 11, 5 = _ − 3, 6 + 6 = _.) |

### Number and Operations in Base Ten (1.NBT)

| Code | Description |
|---|---|
| 1.NBT.A.1 | Count to 120, starting at any number less than 120. In this range, read and write numerals and represent a number of objects with a written numeral. |
| 1.NBT.B.2 | Understand that the two digits of a two-digit number represent amounts of tens and ones. Special cases: (a) 10 is a bundle of ten ones — a "ten"; (b) numbers 11–19 are a ten and one, two, …, nine ones; (c) 10, 20, …, 90 refer to one, two, …, nine tens (and 0 ones). |
| 1.NBT.B.3 | Compare two two-digit numbers based on meanings of the tens and ones digits, recording the results of comparisons with the symbols >, =, and <. |
| 1.NBT.C.4 | Add within 100, including adding a two-digit number and a one-digit number, and adding a two-digit number and a multiple of 10, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction; relate the strategy to a written method and explain the reasoning used. Understand that in adding two-digit numbers, one adds tens and tens, ones and ones; and sometimes it is necessary to compose a ten. |
| 1.NBT.C.5 | Given a two-digit number, mentally find 10 more or 10 less than the number, without having to count; explain the reasoning used. |
| 1.NBT.C.6 | Subtract multiples of 10 in the range 10–90 from multiples of 10 in the range 10–90 (positive or zero differences), using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction; relate the strategy to a written method and explain the reasoning used. |

### Measurement and Data (1.MD)

| Code | Description |
|---|---|
| 1.MD.A.1 | Order three objects by length; compare the lengths of two objects indirectly by using a third object. |
| 1.MD.A.2 | Express the length of an object as a whole number of length units, by laying multiple copies of a shorter object (the length unit) end to end; understand that the length measurement of an object is the number of same-size length units that span it with no gaps or overlaps. (Limit to contexts where the object is spanned by a whole number of length units.) |
| 1.MD.B.3 | Tell and write time in hours and half-hours using analog and digital clocks. |
| 1.MD.C.4 | Organize, represent, and interpret data with up to three categories; ask and answer questions about the total number of data points, how many in each category, and how many more or less are in one category than in another. |

### Geometry (1.G)

| Code | Description |
|---|---|
| 1.G.A.1 | Distinguish between defining attributes (e.g., triangles are closed and three-sided) versus non-defining attributes (e.g., color, orientation, overall size); build and draw shapes to possess defining attributes. |
| 1.G.A.2 | Compose two-dimensional shapes (rectangles, squares, trapezoids, triangles, half-circles, and quarter-circles) or three-dimensional shapes (cubes, right rectangular prisms, right circular cones, and right circular cylinders) to create a composite shape, and compose new shapes from the composite shape. |
| 1.G.A.3 | Partition circles and rectangles into two and four equal shares, describe the shares using the words halves, fourths, and quarters, and use the phrases half of, fourth of, and quarter of. Describe the whole as two of, or four of the shares. Understand for these examples that decomposing into more equal shares creates smaller shares. |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×1) = 36 weeks. Session model: **4 sessions per week, 20–25 minutes
each** (16 sessions per unit). Session types rotate across core lesson, guided
practice, fluency/practice game, and review — named per unit below. K–2 tasks
remain oral, pointing, drawing, manipulative, or adult-scribed as needed, with
explicit adult directions; grade 1 begins short independent written practice
(4–6 tasks) that the adult reviews the same day.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (number talk warm-ups, manipulative trays,
  turn-taking, exit-check rituals) and baseline each objective's entry point.
- Sessions: one-on-one playful probes — count from 57, write the teen numerals,
  solve a take-from story within 10, order three pencils by length, name shapes,
  read an o'clock time.
- No new instruction; record observations against the track objectives and re-teach
  any insecure K skill in Unit 01's first two sessions.

### Unit 01 — Counting, place value, and tens (Weeks 3–6)

- **Standards:** 1.NBT.A.1, 1.NBT.B.2, 1.NBT.B.3, 1.OA.C.5 (counting-on connection)
- **Week 3 goal:** bundles of ten: ten ones = one ten; count by tens to 120; read/write teen numerals as ten + ones.
- **Week 4 goal:** build two-digit numbers with tens rods/ten-sticks and ones; decade numbers as groups of ten; 10 more/10 less on a hundred chart.
- **Week 5 goal:** compare two-digit numbers by tens then ones; record with `>`, `=`, `<`; count from any starting number within 120.
- **Week 6:** review week — hundred-chart races, comparison card games, formative check.
- Session rotation: model lesson (bundles) → guided practice (build-a-number trays) → fluency game (decade-number bingo) → draw/record review.

### Unit 02 — Addition strategies within 20 (Weeks 7–10)

- **Standards:** 1.OA.B.3, 1.OA.C.5, 1.OA.C.6 (addition), 1.OA.D.7, 1.OA.D.8
- **Week 7 goal:** counting on from the larger addend; order doesn't matter (commutative).
- **Week 8 goal:** make-ten strategy with ten frames; doubles and near-doubles.
- **Week 9 goal:** missing-addend equations (`8 + ? = 11`); true/false equations; meaning of the equal sign.
- **Week 10:** review week — strategy choice stations, formative check.
- Each unit opens with a counting retrieval warm-up from Unit 01.

### Unit 03 — Subtraction strategies within 20 (Weeks 11–14)

- **Standards:** 1.OA.B.4, 1.OA.C.6 (subtraction), 1.OA.D.7, 1.OA.D.8
- **Week 11 goal:** subtraction as unknown-addend ("what goes with 8 to make 10?"); count back and count up.
- **Week 12 goal:** decompose to a ten (13 − 4 = 13 − 3 − 1); use known addition facts for subtraction.
- **Week 13 goal:** missing-subtrahend/minuend equations; true/false equations with subtraction.
- **Week 14:** review week — fact-family triangles, formative check.

### Unit 04 — Addition and subtraction story problems (Weeks 15–18)

- **Standards:** 1.OA.A.1, 1.OA.A.2, 1.OA.C.6, 1.OA.D.7
- **Week 15 goal:** add-to and take-from stories, unknowns in all positions (start-unknown, change-unknown, result-unknown).
- **Week 16 goal:** put-together/take-apart and compare stories; draw and write the equation.
- **Week 17 goal:** three-addend stories (sum ≤ 20); choose a strategy; explain the reasoning.
- **Week 18:** midyear review (flexible) — cumulative story-problem sorts, re-teach the highest-need objective, formative check of Units 01–04.

### Unit 05 — Two-digit addition and subtraction foundations (Weeks 19–22)

- **Standards:** 1.NBT.C.4, 1.NBT.C.5, 1.NBT.C.6, 1.NBT.B.2, 1.NBT.B.3
- **Week 19 goal:** add two-digit + one-digit with models (no regrouping, then composing a ten); tens-and-ones bookkeeping.
- **Week 20 goal:** add two-digit + multiple of 10; relate drawings to written methods.
- **Week 21 goal:** mentally find 10 more/10 less; subtract multiples of 10 (10–90).
- **Week 22:** review week — hundred-chart jumps, formative check.

### Unit 06 — Length measurement and comparison (Weeks 23–26)

- **Standards:** 1.MD.A.1, 1.MD.A.2
- **Week 23 goal:** order three objects by length; compare two lengths indirectly with a third object (string).
- **Week 24 goal:** iterate same-size nonstandard units (cubes, paper clips) end to end, no gaps/overlaps.
- **Week 25 goal:** the number of units IS the length; same-size units matter — measure the same object with two unit sizes and compare counts.
- **Week 26:** review week — measure-and-record relay, formative check.
- Adult directions cover every measuring task; no sharp tools; indoor alternatives for outdoor measuring.

### Unit 07 — Time and data displays (Weeks 27–30)

- **Standards:** 1.MD.B.3, 1.MD.C.4
- **Week 27 goal:** analog clock anatomy (hour hand, minute hand); tell time to the hour; match analog to digital.
- **Week 28 goal:** half-hour times; "half past" language; read and write o'clock and half-hour times both ways.
- **Week 29 goal:** sort data into up to three categories; tally and picture displays; total, per-category, more/less questions.
- **Week 30:** review week — classroom time scavenger hunt, data survey project, formative check.

### Unit 08 — Shapes, equal shares, and fractions foundations (Weeks 31–34)

- **Standards:** 1.G.A.1, 1.G.A.2, 1.G.A.3
- **Week 31 goal:** defining vs. non-defining attributes; build and draw shapes that have the defining attributes.
- **Week 32 goal:** compose 2D shapes into composite shapes; compose 3D shapes from blocks.
- **Week 33 goal:** partition circles and rectangles into halves and fourths/quarters; describe shares; more equal shares → smaller pieces.
- **Week 34:** review week — shape build challenge, fair-share tasks, formative check.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all eleven objectives; re-teach where
  evidence shows gaps; final observational assessment and keys (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 03 opens with
counting-on; Unit 05 opens with teen-number decomposition; Unit 08 opens with
compare-two-digit-numbers). Midyear (Week 18) and final (Weeks 35–36) weeks are
full-track reviews. Formative checks are oral/observed with short written
independent practice; each unit's teacher guide specifies what "ready to move on"
looks like and what to re-teach when evidence says otherwise.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/weights_and_measures.md` — adult vocabulary reference only (Unit 06).
- Shared manipulative patterns (hundred-chart templates, tens/ones mats, number
  cards 0–120, fact-family triangles) will be created once in Units 01–03 and
  reused; do not duplicate per unit.
- Datasets and grade 4–7 guides are **not** reused at grade 1 (grade-band mismatch).
- The K math track's materials serve as prerequisite reference, never as grade-1
  lesson content.

## 8. Safe materials

Household or dollar-store manipulatives: counters (buttons, beans, blocks),
ten frames, hundred charts, number cards 0–120, linking cubes, tens rods (or
bundled straws), play clay, string, rulers/nonstandard units (paper clips,
cubes), toy analog clock, balance scale (toy), sorting trays, paper shapes.
No sharp tools; adult supervises scissors; check for food-allergen counters;
small parts supervised in shared settings. Outdoor measuring tasks have
indoor/observation alternatives for mobility limits.

## 9. Accessibility supports

- **Oral and pointing response modes** for all checks; adult scribes written work
  when the learner isn't ready to write independently.
- High-contrast, large numeral cards and clocks; textured shape manipulatives for
  low-vision learners.
- Short sessions (20–25 min) with movement breaks; every lesson includes a seated-table
  and a floor-play variant.
- Language support: vocabulary taught with objects first, word second; visual word
  walls; home-language labels welcomed alongside English terms.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue.
- Math-fact fluency is strategy-based, never timed — no speed tests in Units 02–03.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #10.
- No grade-1-appropriate internal datasets exist; Unit 07 data work will use
  original small-count categorical scenarios with fictional practice data, clearly
  labeled.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Counting, place value, and tens; U02 Addition strategies within 20;
U03 Subtraction strategies within 20; U04 Addition and subtraction story problems;
U05 Two-digit addition and subtraction foundations; U06 Length measurement and
comparison; U07 Time and data displays; U08 Shapes, equal shares, and fractions
foundations; R00 diagnostic, midyear/final review, and cumulative assessments
with keys. Each will follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #10 body, comments (none), and label state re-read 2026-10-02 before claiming.
- No `curriculum-in-progress` claims active on any queue issue; no conflicting worker
  claims younger than 3 hours on the chosen issue.
- `curriculum/grade-1/` re-inventoried on `main` @ `4870c53`: only the placeholder
  `README.md` present; math folder created by this run.
- Standards codes/descriptions verified against the official Common Core
  mathematics framework grade-1 domain pages (thecorestandards.org/Math/Content/1/{OA,NBT,MD,G},
  re-opened 2026-10-02; 1.OA.C.5 and 1.MD.B.3 cross-checked against official-text
  mirrors) — no state adoption, accreditation, or alignment certification claimed.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
