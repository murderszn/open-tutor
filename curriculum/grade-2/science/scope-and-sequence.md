# Grade 2 Science — Scope and Sequence

Audit section A00 of [issue #15](https://github.com/murderszn/open-tutor/issues/15).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-03 against `main` (commit `a6d2733`, post-merge of PR #69).

| Item | Location | Decision |
|---|---|---|
| Grade-2 hub page | `curriculum/grade-2/README.md` | **Revise** — updated to reflect the science track's audit status and link the new subject folder |
| Grade 2 science folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade science content | none (0 Markdown files under `curriculum/grade-2/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#14, audit delivered as draft PR #71) | `curriculum/grade-2/math/` (PR head) | **Reference only** — session model (4 × 25–30 min sessions/week) and short independent written practice (6–8 tasks, adult-reviewed same day) reused as pattern; measurement connections (2.MD) noted for U01; no math content reused |
| Grade-1 science track (#11, audit delivered as draft PR #68) | `curriculum/grade-1/science/` (PR head) | **Reference for entry prerequisites only** — grade-1 end-of-year objectives (observing with senses and simple tools, comparing materials by observable properties, plant/animal needs, safety practices) define what this track assumes; no grade-1 lessons copied upward |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/science/` etc. | **No reuse for grade-2 instruction** — content targets ages 9+; kept as reference for where the track leads, not as source material |
| `assignments/science/physical-science-roadmap` | accelerated grades 8–9 track with foundational lab menus | **No direct reuse** — reading level and abstractions (atoms, significant figures, energy conservation) far above grade 2. Adult-side inspiration only: the guiding adult may adapt beginner-lab activity *ideas* (ice-cube melting race for U03, measure-five-objects scavenger for U01) into grade-2 language; nothing assigned to the learner as written |
| `resources/physics_fundamentals.md` | grades 4–8 guide (measurement & units, heat) | **Teacher-side only** — adult background wording for fair measurement (U01) and heating/cooling (U03); learner work stays at observable comparison language |
| `resources/chemistry_fundamentals.md` | grades 4–8 guide (physical vs. chemical change) | **Teacher-side only** — adult background at most; reversible/irreversible changes stay at the observation level (melt/freeze/cook/burn examples from the standard) |
| `resources/biology_fundamentals.md` | water cycle, cells, photosynthesis — aimed at grades 4–8 | **Teacher-side only** — adult background (e.g., why roots matter in U04, where water goes in U06); plant work stays at observable needs/parts level, no cell vocabulary for the learner |
| `resources/thermodynamics_laws.md` | formal thermodynamics | **No reuse** — beyond the grade band; warming/cooling stays at comparative observation language |
| Repository datasets (CSV/JSON) | e.g., `solar_system_planets.csv`, `periodic_table_elements.csv` | **No direct reuse at grade 2** — magnitudes and abstractions exceed the grade band; units will use original small-observation scenarios (e.g., one learner's plant-growth log) instead |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |
| Discovery shelf (`docs/curriculum-expansion/resource-map.md`) | NASA Space Place, NOAA SciJinks, USGS education, PBS LearningMedia, SciShow Kids | **Reuse via resource_finder** — candidate sources for unit Resource Packs; every item opened and checked for grade-2 fit before use |

No existing grade-2 science material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-2 science with (the grade-1 science track's end-of-year objectives; that track's audit is delivered, units not yet written):

- Asking questions that can be explored by observing, touching, or testing; making careful observations with the senses and simple tools (hand lens, flashlight, ruler); recording in words, drawings, or tallies; communicating findings
- Comparing everyday materials by observable properties (color, texture, bend, sink/float)
- Patterns in what plants and animals need to live and grow; external parts and how they help the living thing meet its needs
- Science safety practices: keep materials away from the mouth, handle living things gently, never look directly at the sun, name the safe alternative when an investigation is unsafe to touch

The diagnostic weeks (Weeks 1–2) probe these through play and talk; Unit 01 re-teaches
questioning, fair comparison, and measuring explicitly rather than assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year. All investigations are adult-supervised;
oral, drawing, pointing, manipulative, or adult-scribed responses count as evidence
throughout. Objectives mirror the track README.

1. Plan and carry out simple fair investigations: ask a question that can be
   tested, keep conditions the same except one, measure length to the nearest
   centimeter, and record observations in labeled drawings, tallies, and simple
   tables (2-PS1-1, 2-PS1-2).
2. Describe and classify everyday materials by observable properties — color,
   texture, hardness, flexibility, absorbency, sink-or-float — then test
   materials and use the data to choose the best material for a purpose
   (2-PS1-1, 2-PS1-2).
3. Take apart an object made of a small set of pieces and rebuild the pieces
   into a new object; explain with observations what changed and what stayed
   the same (2-PS1-3).
4. Argue with evidence that some changes caused by heating or cooling can be
   undone (melting ice, softening butter) and some cannot (cooking an egg,
   freezing a leaf, heating paper) (2-PS1-4).
5. Plan and carry out a one-variable-at-a-time investigation of whether plants
   need sunlight and water to grow; track growth with drawings and measurements
   over several weeks (2-LS2-1).
6. Build a simple model that mimics how an animal disperses seeds or pollinates
   plants (2-LS2-2).
7. Observe plants and animals in two or more local habitats and compare how
   many different kinds of living things each habitat holds (2-LS4-1).
8. Use books, pictures, and video to show that some Earth events happen quickly
   (volcanic eruption, earthquake) and some happen slowly (erosion of rock)
   (2-ESS1-1).
9. Build and read simple models and maps showing the shapes and kinds of land
   and bodies of water in an area; name where water is found on Earth and
   whether it is solid or liquid (2-ESS2-2, 2-ESS2-3).
10. Compare two or more designs meant to slow or stop wind or water from
    changing the shape of land; define the problem, sketch how each shape does
    its work, test both, and compare strengths and weaknesses with data
    (2-ESS2-1, K-2-ETS1-1, K-2-ETS1-2, K-2-ETS1-3).

## 4. Standards crosswalk

Reference framework: **Next Generation Science Standards**, grade-2 performance
expectations and the K–2 engineering band. Each code and description below was
checked 2026-10-03 against the official April 2013 NGSS Release document
(National Wildlife Federation reproduction of the official grade-2 release, read
in full; 2-LS2-1 and 2-LS2-2 additionally corroborated against the California
Department of Education NGSS pages). No state adoption, accreditation, or
alignment certification is claimed. An asterisk (*) marks performance
expectations that integrate engineering through a practice or disciplinary
core idea, per the framework.

### Matter and Its Interactions (2-PS1)

| Code | Description |
|---|---|
| 2-PS1-1 | Plan and conduct an investigation to describe and classify different kinds of materials by their observable properties. |
| 2-PS1-2 * | Analyze data obtained from testing different materials to determine which materials have the properties that are best suited for an intended purpose. |
| 2-PS1-3 | Make observations to construct an evidence-based account of how an object made of a small set of pieces can be disassembled and made into a new object. |
| 2-PS1-4 | Construct an argument with evidence that some changes caused by heating or cooling can be reversed and some cannot. |

Clarification statements carried from the framework: observable properties may
include color, texture, hardness, and flexibility; reversible-change examples
include water and butter at different temperatures; irreversible examples
include cooking an egg, freezing a plant leaf, and heating paper. Assessment
boundary for 2-PS1-2: quantitative measurement limited to length — this is why
Unit 01 teaches centimeter measurement and nothing finer.

### Ecosystems: Interactions, Energy, and Dynamics (2-LS2)

| Code | Description |
|---|---|
| 2-LS2-1 | Plan and conduct an investigation to determine if plants need sunlight and water to grow. |
| 2-LS2-2 * | Develop a simple model that mimics the function of an animal in dispersing seeds or pollinating plants. |

Assessment boundary for 2-LS2-1: testing one variable at a time — Unit 04's
plant investigation changes sunlight *or* water, never both at once. Core idea:
plants depend on water and light to grow; plants depend on animals for
pollination or to move their seeds around.

### Biological Evolution: Unity and Diversity (2-LS4)

| Code | Description |
|---|---|
| 2-LS4-1 | Make observations of plants and animals to compare the diversity of life in different habitats. |

Clarification: emphasis is on the diversity of living things across a variety of
habitats. Assessment boundary: no specific animal and plant names in specific
habitats — Unit 05 compares *counts of kinds*, not species identification.

### Earth's Place in the Universe (2-ESS1)

| Code | Description |
|---|---|
| 2-ESS1-1 | Make observations from media to construct an evidence-based account that Earth events can occur quickly or slowly. |

Clarification: quick events include volcanic explosions and earthquakes; slow
events include erosion of rocks. Assessment boundary: no quantitative
measurements of timescales — Unit 07 stays at "quick vs. slow" sorting with
evidence, never years or rates.

### Earth's Systems (2-ESS2)

| Code | Description |
|---|---|
| 2-ESS2-1 * | Compare multiple solutions designed to slow or prevent wind or water from changing the shape of the land. |
| 2-ESS2-2 | Develop a model to represent the shapes and kinds of land and bodies of water in an area. |
| 2-ESS2-3 | Obtain information to identify where water is found on Earth and that it can be solid or liquid. |

Clarification for 2-ESS2-1: solutions include different designs of dikes and
windbreaks to hold back wind and water, and different plantings (shrubs, grass,
trees) to hold back the land. Assessment boundary for 2-ESS2-2: no quantitative
scaling in models — Unit 06 maps stay schematic. Core idea for 2-ESS2-3: water
is found in the ocean, rivers, lakes, and ponds; water exists as solid ice and
in liquid form.

### Engineering Design, K–2 band (K-2-ETS1)

| Code | Description |
|---|---|
| K-2-ETS1-1 | Ask questions, make observations, and gather information about a situation people want to change to define a simple problem that can be solved through the development of a new or improved object or tool. |
| K-2-ETS1-2 | Develop a simple sketch, drawing, or physical model to illustrate how the shape of an object helps it function as needed to solve a given problem. |
| K-2-ETS1-3 | Analyze data from tests of two objects designed to solve the same problem to compare the strengths and weaknesses of how each performs. |

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36
weeks. Session model: **4 sessions per week, 25–30 minutes each** (16 sessions
per unit). Session types rotate across investigation lesson, hands-on measuring
and data practice, science reading-and-talk or model-building, and review —
named per unit below. K–2 tasks remain oral, pointing, drawing, manipulative,
or adult-scribed as needed, with explicit adult directions; grade 2 does short
independent written practice (6–8 tasks) that the adult reviews the same day.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish science session routines (question board, observation-tool
  tray, data-table ritual, cleanup and safety check) and baseline each
  objective's entry point.
- Sessions: playful one-on-one probes — ask a question we could test; observe
  an object with a hand lens and describe it; measure three objects with a
  ruler; sort materials by one property; draw and label a plant; name what
  plants need to live and grow; show safe handling of tools and living things.
- No new instruction; record observations against the track objectives.

### Unit 01 — Measurement, fair comparisons, and recording evidence (Weeks 3–6)

- **Standards:** science and engineering practices focus; 2-PS1-1 (classify by
  observable properties including length); 2-PS1-2 assessment boundary
  (quantitative measurement limited to length).
- **Week 3 goal:** questions you can test vs. questions you can't; observe with
  the senses and a hand lens; record in labeled drawings.
- **Week 4 goal:** fair tests — change one thing at a time; measure length to
  the nearest centimeter; tallies and simple tables.
- **Week 5 goal:** compare two materials fairly (e.g., which paper towel
  absorbs more — same water amount, same wait time); picture and bar graphs of
  the data.
- **Week 6:** review week — measurement games, re-measure challenge, formative check.
- Sessions rotate: investigation lesson → hands-on measuring and data practice
  → science reading-and-talk → review game.

### Unit 02 — Material properties and uses (Weeks 7–10)

- **Standards:** 2-PS1-1, 2-PS1-2.
- **Week 7 goal:** observable properties — color, texture, hardness,
  flexibility; classify and sort a material collection.
- **Week 8 goal:** absorbency and sink-or-float; which properties matter for a
  purpose (raincoat vs. towel, bridge vs. cushion).
- **Week 9 goal:** test two materials for one intended purpose fairly; analyze
  the data to choose the best material and say why.
- **Week 10:** review week — property sorts, "best material for the job"
  challenge, formative check.
- Sessions rotate: investigation lesson → testing-station practice →
  reading-and-talk about how things are made → review game.

### Unit 03 — Heating, cooling, and reversible changes (Weeks 11–14)

- **Standards:** 2-PS1-3, 2-PS1-4.
- **Week 11 goal:** take apart an object made of a small set of pieces and
  rebuild the pieces into a new object; evidence-based account of what changed
  and what stayed the same.
- **Week 12 goal:** heating and cooling observations — ice melting, butter
  softening (warm water or sunlight only; adult handles anything hot);
  reversible changes.
- **Week 13 goal:** irreversible changes — adult demonstrations only (cooking
  an egg, freezing a leaf, heating paper); construct an argument with evidence
  for reversible vs. irreversible.
- **Week 14:** review week — reversible/irreversible sorts, formative check.
- Sessions rotate: investigation or adult-demo lesson → observation-drawing
  practice → evidence-talk ("my evidence is…") → review game.
- Safety: no flames, stovetops, or ovens for the learner; adult handles all hot
  water; observation-only alternatives for every heating step.

### Unit 04 — Seed dispersal, plant needs, and habitats (Weeks 15–18)

- **Standards:** 2-LS2-1, 2-LS2-2.
- **Week 15 goal:** what plants need — plan a one-variable-at-a-time
  investigation (sunlight *or* water); plant bean seeds; start growth logs.
- **Week 16 goal:** track growth — measure stems, draw leaves, record weekly;
  seed parts and how seeds travel (wind, water, animal hitchhikers).
- **Week 17 goal:** build simple models that mimic animal seed dispersal or
  pollination — burr-like seeds catching on fabric "fur," a model bee carrying
  "pollen" between paper flowers.
- **Week 18:** midyear review (flexible) — conclude the plant investigation
  with an evidence claim; cumulative re-teach of Units 01–04 highest-need
  objectives; formative check.
- Sessions rotate: investigation lesson → garden and growth-log practice →
  model-building → review.

### Unit 05 — Biodiversity and local living things (Weeks 19–22)

- **Standards:** 2-LS4-1.
- **Week 19 goal:** what a habitat is; observe one local habitat (schoolyard,
  garden bed) and tally the different kinds of plants and animals seen.
- **Week 20 goal:** observe a second habitat (lawn vs. garden, pond edge);
  tally charts for both.
- **Week 21 goal:** compare — which habitat holds more kinds of living things;
  look for patterns without naming species.
- **Week 22:** review week — habitat comparison poster or diorama, formative check.
- Sessions rotate: outdoor observation lesson → tally-and-draw practice →
  reading-and-talk about habitats → review.
- Living things are observed, never collected; plants are not picked; hands are
  washed after outdoor work.

### Unit 06 — Landforms, maps, and bodies of water (Weeks 23–26)

- **Standards:** 2-ESS2-2, 2-ESS2-3.
- **Week 23 goal:** shapes of land — hills, valleys, plains — built in
  sand/clay trays; describe each.
- **Week 24 goal:** bodies of water — rivers, lakes, oceans; where water is
  found on Earth; water as solid ice and liquid (no quantitative scaling).
- **Week 25 goal:** simple maps — map the tray or the yard with symbols and a
  key; read a peer's map.
- **Week 26:** review week — build-a-landscape challenge from a map,
  formative check.
- Sessions rotate: model-building lesson → tray and map practice →
  reading-and-talk about Earth's water → review game.

### Unit 07 — Rapid and slow Earth changes and erosion (Weeks 27–30)

- **Standards:** 2-ESS1-1.
- **Week 27 goal:** events that happen quickly — volcanic eruption, earthquake
  (media observations; shake-tray demonstration).
- **Week 28 goal:** events that happen slowly — erosion and weathering of rock
  (sand-and-water tray observed over days); no timescales measured.
- **Week 29 goal:** wind and water change the shape of land — tray
  investigations with a spray bottle "rain" and a straw "wind."
- **Week 30:** review week — quick-or-slow sorts with evidence accounts,
  formative check.
- Sessions rotate: media-observation lesson → tray-investigation practice →
  evidence-talk → review game.

### Unit 08 — Engineering: protection from wind and water (Weeks 31–34)

- **Standards:** 2-ESS2-1, K-2-ETS1-1, K-2-ETS1-2, K-2-ETS1-3.
- **Week 31 goal:** define the problem — a hill, garden, or model house that
  wind or water damages; ask questions and gather information (K-2-ETS1-1).
- **Week 32 goal:** design — sketches and models showing how the shape does
  the work: dikes, windbreaks, shrub/grass/tree plantings (K-2-ETS1-2).
- **Week 33 goal:** build and test two designs in the tray; collect data on
  how much "land" each saves; compare strengths and weaknesses (K-2-ETS1-3,
  2-ESS2-1).
- **Week 34:** review week — design fair for the household; formative check.
- Sessions rotate: design lesson → build-and-test practice → data-comparison
  talk → review.

### Weeks 35–36 — Final review (flexible)

- Cumulative investigations and design re-tests across all ten objectives;
  re-teach where evidence shows gaps; final observational assessment and keys
  (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 03 opens with fair
measuring from U01, Unit 05 with the observation-and-tally routine, Unit 08 with
the quick-vs.-slow evidence frame). Midyear (Week 18) and final (Weeks 35–36)
weeks are full-track reviews. Formative checks are observed, oral, drawn, or
short written tasks (6–8 items) the adult reviews the same day; each unit's
teacher guide specifies what "ready to move on" looks like. The plant-growth
investigation started in Unit 04 runs as a background thread through Units
05–06, giving spaced retrieval of measuring, recording, and one-variable
thinking.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/physics_fundamentals.md`, `resources/chemistry_fundamentals.md`,
  `resources/biology_fundamentals.md` — adult background references only;
  learner language stays at observable-properties level. Do not assign to the
  learner.
- `assignments/science/physical-science-roadmap` — adult-side activity-idea
  inspiration only (melting race, measure-five-objects); never assigned as written.
- Ruler/tape-measure, hand-lens, tray, tally-chart, and growth-log templates
  will be created once in Units 01 and 04 and reused; do not duplicate per unit.
- Same-grade math and grades 4–8 science are **not** reused for grade-2
  instruction (grade-band mismatch).

## 8. Safe materials

Household or dollar-store supplies: rulers and tape measures (centimeters), hand
lenses, measuring cups, trays and bins, sand, potting soil, pebbles, water,
spray bottles, ice cubes, butter, bean seeds, cups, building bricks, craft
materials (straws, tape, paper, cotton balls, fabric scraps), non-mercury
thermometers (adult-read), flashlights, drawing paper and crayons, notebooks and
pencils. Safety rules: adult supervises every investigation; no flames,
stovetops, or ovens for the learner and the adult handles all hot water;
materials stay away from the mouth; living things are observed, never collected,
and handled gently; hands washed after soil and outdoor work; never look
directly at the sun; the adult previews every procedure and substitutes an
observation or simulation alternative whenever the real thing is unsafe.

## 9. Accessibility supports

- **Oral, pointing, drawing, and manipulative response modes** for all checks;
  adult scribes dictated observations; short independent written practice (6–8
  tasks) reviewed the same day.
- Large-print, high-contrast data tables and word cards; textured/tactile
  material samples for low-vision learners (properties include texture by design).
- Short sessions with movement breaks; every lesson includes a table variant and
  an active-investigation variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual science word wall; home-language labels welcomed alongside English.
- Sentence frames for evidence talk ("I observed ___, so I think ___"); every
  diagram ships with a text-only alternative; color is never the only cue in
  graphs or sorts.
- Hearing support: face the learner when giving directions; visual step cards
  for multi-step investigations.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #15.
- No grade-2-appropriate internal observation scenarios, material sets, or
  tray-investigation guides exist; units will author original small-observation
  scenarios (e.g., one learner's plant-growth log) with clearly labeled
  practice data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- A shared grade-2 measurement/observation asset set (ruler-use card, tally
  chart, growth log, tray-investigation step cards) should be created once
  (Units 01 and 04) and reused across units rather than regenerated per unit.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Measurement, fair comparisons, and recording evidence; U02 Material
properties and uses; U03 Heating, cooling, and reversible changes; U04 Seed
dispersal, plant needs, and habitats; U05 Biodiversity and local living things;
U06 Landforms, maps, and bodies of water; U07 Rapid and slow Earth changes and
erosion; U08 Engineering: protection from wind and water; R00 diagnostic,
midyear/final review, and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #15 body, comments, and label state re-read 2026-10-03 before claiming;
  no competing claim (0 comments prior to the claim comment).
- No `curriculum-in-progress` claims active on any other queue issue at claim
  time; open worker PRs (#63–68, #70–71, other tracks) were not touched.
- `curriculum/grade-2/` re-inventoried on `main` @ `a6d2733`: only `README.md`
  and `math/` present; science folder created by this run. Existing `stem/`
  has 0 Markdown files, as the issue baseline states.
- Standards codes/descriptions verified 2026-10-03 against the official April
  2013 NGSS Release grade-2 document (read in full; NWF reproduction of the
  official release), with 2-LS2-1/2 corroborated against California Department
  of Education NGSS pages — no state adoption, accreditation, or alignment
  certification claimed. Note: 2-ESS1-1's official text reads "Make observations
  from media to construct an evidence-based account that Earth events can occur
  quickly or slowly"; 2-PS1-2, 2-LS2-2, and 2-ESS2-1 carry the framework's
  engineering-integration asterisk.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; the fundamentals guides are grades 4–8 oriented, hence
  teacher-side only. The ten objectives map onto the issue's U01–U08 checklist
  order, kept as the prerequisite sequence (measurement practices first,
  engineering design last).
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
