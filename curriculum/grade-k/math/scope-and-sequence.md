# Kindergarten Mathematics — Scope and Sequence

Audit section A00 of [issue #6](https://github.com/murderszn/open-tutor/issues/6).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-01 against `main` (commit `393bb9d`).

| Item | Location | Decision |
|---|---|---|
| Grade-K hub page | `curriculum/grade-k/README.md` | **Revise** — updated to reflect the math track's audit status and link the new subject folder |
| Kindergarten math folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade math content | none (0 Markdown files under `curriculum/grade-k/` before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade other subjects (science #7, language arts #8, social studies #9) | placeholder hubs only | **No reuse** — nothing substantive to borrow yet |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/math/`, etc. | **No reuse for K instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| `resources/math_fundamentals.md` | grades 4–7 focus (place value, fractions, ratios) | **Not reusable at K** — beyond grade band; flag only as a downstream reference |
| `resources/weights_and_measures.md` | teacher reference | **Teacher-side reuse only** — adult reads for accurate attribute vocabulary; never assigned to the learner |
| `resources/financial_tools_and_principles.md` | grades 5+ concepts | **No reuse** at K |
| Repository datasets (`us_states.csv`, `un_countries.csv`, `solar_system_planets.csv`) | counting/graphing sources in the plan | **No direct reuse at K** — magnitudes (hundreds/thousands) exceed K number range; future units will use original small-count scenarios instead |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |

No existing K math material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter K math with:

- Rote counting (not necessarily to 20) and emerging one-to-one correspondence
- Subitizing very small sets (1–3) perceptually
- Basic attribute language: color, size ("big/little"), shape names for circle/square/triangle
- Fine-motor readiness for pointing, stacking, and simple drawing

The diagnostic weeks (Weeks 1–2) assess these; Unit 01 assumes none are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Count to 100 by ones and tens, count forward from any given number, and write
   the numerals 0–20.
2. Count sets of up to 20 objects with one-to-one correspondence and state the
   total (cardinality).
3. Compare two numbers 1–10 as written numerals and two groups by matching/counting.
4. Compose and decompose numbers 11–19 into ten ones and some more ones; decompose
   numbers ≤ 10 into pairs in more than one way.
5. Represent and solve addition and subtraction story problems within 10 using
   objects, drawings, or acting out; fluently add and subtract within 5.
6. Name 2D and 3D shapes (circle, square, triangle, rectangle, hexagon, cube,
   cone, cylinder, sphere), describe attributes and relative positions, and build
   or compose new shapes from parts.
7. Describe measurable attributes (length, weight, capacity), directly compare two
   objects on one attribute, and classify objects into categories, count each
   category, and sort categories by count.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for Mathematics**,
kindergarten domains, as published at
[thecorestandards.org/Math](https://www.thecorestandards.org/Math/)
(verified 2026-10-01; no state adoption or accreditation claimed).
Descriptions below match the official kindergarten standard text; cluster
structure cross-checked against the framework.

### Counting and Cardinality (K.CC)

| Code | Description |
|---|---|
| K.CC.A.1 | Count to 100 by ones and by tens. |
| K.CC.A.2 | Count forward beginning from a given number within the known sequence (instead of having to begin at 1). |
| K.CC.A.3 | Write numbers from 0 to 20. Represent a number of objects with a written numeral 0–20 (with 0 representing a count of no objects). |
| K.CC.B.4 | Understand the relationship between numbers and quantities; connect counting to cardinality — (a) one number name per object, (b) the last number name said tells how many, (c) each successive number name is one larger. |
| K.CC.B.5 | Count to answer "how many?" questions about as many as 20 things arranged in a line, a rectangular array, or a circle, or as many as 10 things in a scattered configuration; given a number from 1–20, count out that many objects. |
| K.CC.C.6 | Identify whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group, e.g., by using matching and counting strategies. |
| K.CC.C.7 | Compare two numbers between 1 and 10 presented as written numerals. |

### Operations and Algebraic Thinking (K.OA)

| Code | Description |
|---|---|
| K.OA.A.1 | Represent addition and subtraction with objects, fingers, mental images, drawings, sounds (e.g., claps), acting out situations, verbal explanations, expressions, or equations. |
| K.OA.A.2 | Solve addition and subtraction word problems, and add and subtract within 10, e.g., by using objects or drawings to represent the problem. |
| K.OA.A.3 | Decompose numbers less than or equal to 10 into pairs in more than one way, e.g., by using objects or drawings, and record each decomposition by a drawing or equation (e.g., 5 = 2 + 3 and 5 = 4 + 1). |
| K.OA.A.4 | For any number from 1 to 9, find the number that makes 10 when added to the given number, e.g., by using objects or drawings, and record the answer with a drawing or equation. |
| K.OA.A.5 | Fluently add and subtract within 5. |

### Number and Operations in Base Ten (K.NBT)

| Code | Description |
|---|---|
| K.NBT.A.1 | Compose and decompose numbers from 11 to 19 into ten ones and some further ones, e.g., by using objects or drawings, and record each composition or decomposition by a drawing or equation (e.g., 18 = 10 + 8); understand that these numbers are composed of ten ones and one, two, three, four, five, six, seven, eight, or nine ones. |

### Measurement and Data (K.MD)

| Code | Description |
|---|---|
| K.MD.A.1 | Describe measurable attributes of objects, such as length or weight. Describe several measurable attributes of a single object. |
| K.MD.A.2 | Directly compare two objects with a measurable attribute in common, to see which object has "more of"/"less of" the attribute, and describe the difference. For example, directly compare the heights of two children and describe one child as taller/shorter. |
| K.MD.B.3 | Classify objects into given categories; count the numbers of objects in each category and sort the categories by count. |

### Geometry (K.G)

| Code | Description |
|---|---|
| K.G.A.1 | Describe objects in the environment using names of shapes, and describe the relative positions of these objects using terms such as above, below, beside, in front of, behind, and next to. |
| K.G.A.2 | Correctly name shapes regardless of their orientations or overall size. |
| K.G.A.3 | Identify shapes as two-dimensional (lying in a plane, "flat") or three-dimensional ("solid"). |
| K.G.B.4 | Analyze and compare two- and three-dimensional shapes, in different sizes and orientations, using informal language to describe their similarities, differences, parts (e.g., number of sides and vertices/"corners") and other attributes (e.g., having sides of equal length). |
| K.G.B.5 | Model shapes in the world by building shapes from components (e.g., sticks and clay balls) and drawing shapes. |
| K.G.B.6 | Compose simple shapes to form larger shapes. For example, "Can you join these two triangles with full sides touching to make a rectangle?" |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×1) = 36 weeks. Session model: **4 sessions per week, 15–20 minutes
each** (16 sessions per unit). Session types rotate: core lesson, guided
practice, play/practice game, review — named per unit below. K–2 tasks are
oral, pointing, drawing, manipulative, or adult-scribed, with explicit adult
directions.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish routines (counting aloud together, manipulative trays,
  turn-taking) and baseline each objective's entry point.
- Sessions: playful one-on-one probes — "count these buttons," "show me 4,"
  "which pile has more?", shape walks, attribute talk ("which is heavier?").
- No new instruction; record observations against the track objectives.

### Unit 01 — Counting and classifying objects (Weeks 3–6)

- **Standards:** K.CC.B.4, K.CC.B.5 (to 10), K.MD.B.3, K.CC.A.1 (rote 1–20)
- **Week 3 goal:** one-to-one correspondence with sets to 5; sorting by color/size.
- **Week 4 goal:** counting sets to 10 in lines and circles; cardinality language ("how many?").
- **Week 5 goal:** count out a requested number of objects; sort categories by count.
- **Week 6:** review week — counting games, re-teach as needed, formative check.
- Sessions rotate: model-count lesson → sorting tray practice → counting song/game
  → draw/count-and-circle review.

### Unit 02 — Numbers to 10 and one-to-one correspondence (Weeks 7–10)

- **Standards:** K.CC.A.3 (0–10), K.CC.B.4, K.CC.B.5, K.CC.A.2 (within 10)
- **Week 7 goal:** recognize and name numerals 0–5; match numeral to set.
- **Week 8 goal:** numerals 6–10; order the count sequence forward.
- **Week 9 goal:** count on from a given number (e.g., start at 4, count to 9);
  scattered-configuration counting to 10.
- **Week 10:** review week — number-line walk, missing-numeral games, formative check.

### Unit 03 — Comparing numbers and quantities (Weeks 11–14)

- **Standards:** K.CC.C.6, K.CC.C.7, K.CC.A.1 (tens to 30)
- **Week 11 goal:** more/fewer/same with objects; matching strategies.
- **Week 12 goal:** compare written numerals 1–10; "one more" reasoning.
- **Week 13 goal:** compare groups to 10 with counting; vocabulary greater/less/equal.
- **Week 14:** review week — comparison stations, formative check.

### Unit 04 — Teen numbers and ten frames (Weeks 15–18)

- **Standards:** K.NBT.A.1, K.CC.A.3 (0–20), K.CC.B.5 (to 20), K.OA.A.4 (intro via make-ten)
- **Week 15 goal:** ten frames to 10; "a full frame" as a benchmark.
- **Week 16 goal:** 11–15 as ten ones plus some ones (concrete bundles).
- **Week 17 goal:** 16–19; writing teen numerals; partners that make 10 (intro).
- **Week 18:** midyear review (flexible) — cumulative count-and-compare games,
  re-teach highest-need objective, formative check of Units 01–04.

### Unit 05 — Addition stories within 10 (Weeks 19–22)

- **Standards:** K.OA.A.1, K.OA.A.2, K.OA.A.5 (intro), K.OA.A.3 (intro via parts)
- **Week 19 goal:** addition as "putting together"; act out and draw join stories.
- **Week 20 goal:** addition as "adding to"; represent with objects/drawings.
- **Week 21 goal:** solve story problems to 8; decompose 5 and 6 into parts.
- **Week 22:** review week — story-problem card game, formative check.

### Unit 06 — Subtraction stories within 10 (Weeks 23–26)

- **Standards:** K.OA.A.1, K.OA.A.2, K.OA.A.5, K.OA.A.3
- **Week 23 goal:** subtraction as "taking from"; act out and draw take-away stories.
- **Week 24 goal:** subtraction as "taking apart"; find the missing part.
- **Week 25 goal:** solve take-away/take-apart stories to 10; fluency within 5.
- **Week 26:** review week — mixed +/- story sort, formative check.

### Unit 07 — Shapes and spatial relationships (Weeks 27–30)

- **Standards:** K.G.A.1–3, K.G.B.4–6
- **Week 27 goal:** name 2D shapes in any orientation/size; positional words.
- **Week 28 goal:** flat vs. solid; name 3D shapes (cube, cone, cylinder, sphere).
- **Week 29 goal:** analyze/compare shapes by sides, corners, equal length;
  build shapes from sticks/clay; compose larger shapes.
- **Week 30:** review week — shape hunt, build challenge, formative check.

### Unit 08 — Measurement comparison and data sorting (Weeks 31–34)

- **Standards:** K.MD.A.1, K.MD.A.2, K.MD.B.3, K.CC.A.1 (to 100 by tens/ones)
- **Week 31 goal:** measurable attributes of everyday objects (long/short,
  heavy/light, holds more/less).
- **Week 32 goal:** directly compare two objects; describe the difference.
- **Week 33 goal:** classify into categories, count each, sort categories by count;
  finish count to 100 by ones and tens.
- **Week 34:** review week — measurement relay, sorting survey, formative check.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all seven objectives; re-teach
  where evidence shows gaps; final observational assessment and keys (delivered
  with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 06 opens with
counting-on, Unit 08 with comparing). Midyear (Week 18) and final (Weeks 35–36)
weeks are full-track reviews. Formative checks are oral/observed, adult-scribed,
with each unit's teacher guide specifying what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/weights_and_measures.md` — adult vocabulary reference only.
- Shared manipulative patterns (ten-frame templates, number cards) will be created
  once in Unit 01/04 and reused; do not duplicate per unit.
- Datasets and grade 4–7 guides are **not** reused at K (grade-band mismatch).

## 8. Safe materials

Household or dollar-store manipulatives: counters (buttons, beans, blocks),
ten-frame mats, number cards 0–20, linking cubes, play clay, sticks/straws,
sorting trays, balance scale (toy), measuring cups, string, paper shapes.
No sharp tools, no small parts for children under 3 in shared settings (adult
supervises), no food allergens as counters without checking. Outdoor/shape-hunt
tasks are adult-supervised with observation alternatives for mobility limits.

## 9. Accessibility supports

- **Oral and pointing response modes** for all checks; adult scribes written work.
- High-contrast, large numeral cards; textured shape manipulatives for
  low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table and
  a floor-play variant.
- Language support: vocabulary taught with objects first, word second; visual
  word walls; home-language labels welcomed alongside English numerals.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #6.
- No K-appropriate internal counting datasets exist; units will use original
  small-count scenarios with named fictional practice data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Counting and classifying objects; U02 Numbers to 10 and one-to-one
correspondence; U03 Comparing numbers and quantities; U04 Teen numbers and ten
frames; U05 Addition stories within 10; U06 Subtraction stories within 10;
U07 Shapes and spatial relationships; U08 Measurement comparison and data
sorting; R00 diagnostic, midyear/final review, and cumulative assessments with
keys. Each will follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #6 body, comments (none), and label state re-read 2026-10-01 before claiming.
- No `curriculum-in-progress` claims active on any queue issue; no open worker PRs.
- `curriculum/grade-k/` re-inventoried on `main` @ `393bb9d`: only `README.md`
  present; math folder created by this run.
- Standards codes/descriptions verified against the Common Core mathematics
  framework (thecorestandards.org/Math, opened 2026-10-01; descriptions
  cross-checked against quoted official text) — no state adoption, accreditation,
  or alignment certification claimed.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); modified JSON validated; Markdown links checked for
  existence (only relative links to existing files).
