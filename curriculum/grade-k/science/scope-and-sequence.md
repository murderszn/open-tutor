# Kindergarten Science — Scope and Sequence

Audit section A00 of [issue #7](https://github.com/murderszn/open-tutor/issues/7).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-01 against `main` (commit `4870c53`).

| Item | Location | Decision |
|---|---|---|
| Grade-K hub page | `curriculum/grade-k/README.md` | **Revise** — updated to reflect the science track's audit status and link the new subject folder |
| Kindergarten science folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade science content | none (0 Markdown files under `curriculum/grade-k/` before this run, math aside) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (audit delivered) | `curriculum/grade-k/math/` | **No direct reuse** — math scope-and-sequence is a sibling reference for pacing/format only; no cross-grade-track links are created. Observing/counting moments (weather tally, seed-growth measurements) coordinate informally through the guiding adult. |
| `stem/` legacy folder | 0 Markdown files | **No reuse** — nothing to inventory or preserve |
| `resources/biology_fundamentals.md` | cells, photosynthesis, water cycle — aimed at grades 4–8 | **Teacher-side reuse only** — the guiding adult may consult it for background (e.g., water cycle when planning the weather unit); never assigned to the learner |
| `resources/physics_fundamentals.md` | grades 4–8 physics vocabulary | **Teacher-side reuse only** — adult background for push/pull wording in U02 |
| `resources/astronomy_fundamentals.md` | grades 4–8 astronomy | **Teacher-side reuse only** — adult background for the sun as a star in U07 |
| `resources/thermodynamics_laws.md` | formal thermodynamics | **Teacher-side reuse only** — the K track uses comparative warmer/cooler language only (per the NGSS assessment boundary); the laws themselves are beyond the grade band |
| `resources/chemistry_fundamentals.md` | grades 4–8 chemistry | **No reuse** at K — beyond grade band |
| `resources/cooking_and_nutrition.md` | food science | **No reuse** at K — adult background at most; never assigned |
| Repository datasets (`solar_system_planets.csv`, `periodic_table_elements.csv`, etc.) | models/graphing sources | **No direct reuse at K** — magnitudes and abstractions exceed the K band; future units will use original small-observation scenarios instead |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |
| Discovery shelf (`docs/curriculum-expansion/resource-map.md`) | NASA Space Place, NOAA SciJinks, USGS education, PhET, Smithsonian Learning Lab, PBS LearningMedia | **Reuse via resource_finder** — candidate sources for unit Resource Packs; every item opened and checked for K fit before use |

No existing K science material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter K science with:

- Everyday sensory exploration (touching, looking, listening) and simple
  cause–effect play (push a toy car, it moves)
- Emerging "I notice / I wonder" language when prompted
- Ability to sort familiar objects (by color, size) and to draw recognizably
- Willingness to repeat an action and notice what changed

The diagnostic weeks (Weeks 1–2) probe these through play; Unit 01 assumes
none are secure and teaches observing and questioning explicitly.

## 3. Track objectives

Measurable, adult-assessed by end of year. All investigations and observations
are adult-supervised; oral, drawing, pointing, or adult-scribed responses count.

1. Observe carefully with the senses (and simple tools such as a hand lens),
   describe what is noticed using words or drawings, and ask questions that
   can be explored by looking, touching, or testing.
2. Plan and carry out simple push-and-pull investigations; compare how
   different strengths and directions of pushes and pulls change how an
   object moves; and tell whether a design solution changes an object's
   motion as intended.
3. Compare everyday materials by observable properties (color, texture, bend,
   sink/float, warm/cool) and design a simple object or structure — with a
   sketch or model — that solves a stated problem.
4. Use observations to describe patterns in what plants need to live and grow,
   and care for a growing plant over several weeks, recording changes.
5. Use observations to describe patterns in what animals need to survive, and
   model the relationship between an animal's needs and where it lives.
6. Observe, record, and share local weather conditions over time; describe
   daily and seasonal patterns; and explain why people watch forecasts to
   prepare for severe weather.
7. Make observations to determine how sunlight warms Earth's surface
   (warmer/cooler comparisons only), and design and build a simple structure
   that reduces the warming effect of sunlight on an area.
8. Communicate a solution that reduces the impact of people on the land,
   water, air, or living things in the local environment.

## 4. Standards crosswalk

Reference framework: **Next Generation Science Standards (NGSS),
kindergarten performance expectations**, as published by Achieve, Inc. (2013)
and listed at [nextgenscience.org/search-standards](https://www.nextgenscience.org/search-standards).
Descriptions below match the official performance-expectation text (verified
2026-10-01; see §12). K–2 engineering-design codes are the K–2 band standards
NGSS designates for kindergarten use. No state adoption, accreditation, or
alignment certification is claimed.

### Motion and Stability: Forces and Interactions (K-PS2)

| Code | Description |
|---|---|
| K-PS2-1 | Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object. |
| K-PS2-2 | Analyze data to determine if a design solution works as intended to change the speed or direction of an object with a push or a pull. |

### Energy (K-PS3)

| Code | Description |
|---|---|
| K-PS3-1 | Make observations to determine the effect of sunlight on Earth's surface. (Assessment boundary: temperature limited to relative measures such as warmer/cooler.) |
| K-PS3-2 | Use tools and materials to design and build a structure that will reduce the warming effect of sunlight on an area. |

### From Molecules to Organisms: Structures and Processes (K-LS1)

| Code | Description |
|---|---|
| K-LS1-1 | Use observations to describe patterns of what plants and animals (including humans) need to survive. |

### Earth's Systems (K-ESS2)

| Code | Description |
|---|---|
| K-ESS2-1 | Use and share observations of local weather conditions to describe patterns over time. (Assessment boundary: quantitative observations limited to whole numbers and relative measures such as warmer/cooler.) |
| K-ESS2-2 | Construct an argument supported by evidence for how plants and animals (including humans) can change the environment to meet their needs. |

### Earth and Human Activity (K-ESS3)

| Code | Description |
|---|---|
| K-ESS3-1 | Use a model to represent the relationship between the needs of different plants and animals (including humans) and the places they live. |
| K-ESS3-2 | Ask questions to obtain information about the purpose of weather forecasting to prepare for, and respond to, severe weather. |
| K-ESS3-3 | Communicate solutions that will reduce the impact of humans on the land, water, air, and/or other living things in the local environment. |

### Engineering Design, K–2 band (K-2-ETS1)

| Code | Description |
|---|---|
| K-2-ETS1-1 | Ask questions, make observations, and gather information about a situation people want to change to define a simple problem that can be solved through the development of a new or improved object or tool. |
| K-2-ETS1-2 | Develop a simple sketch, drawing, or physical model to illustrate how the shape of an object helps it function as needed to solve a given problem. |
| K-2-ETS1-3 | Analyze data from tests of two objects designed to solve the same problem to compare the strengths and weaknesses of how each performs. |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×2) = 36 weeks. Session model: **3–4 sessions per week, 15–20
minutes each** (~14 sessions per unit). Session types rotate: core
investigation lesson, observation/journal practice, design or play session,
review — named per unit below. K–2 tasks are oral, pointing, drawing,
manipulative, or adult-scribed, with explicit adult directions. All
investigations are adult-supervised; every unit's teacher guide lists the
observation-only or simulation alternative for any hazardous task.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish science routines (observation corner, science journal
  with adult scribing, turn-taking with tools) and baseline each objective's
  entry point through play.
- Sessions: playful one-on-one probes — "what do you notice?", sorting shells
  and buttons, pushing cars down a ramp, drawing a favorite animal, "what does
  a plant need?"
- No new instruction; record observations against the track objectives.

### Unit 01 — Observing, describing, and asking questions (Weeks 3–6)

- **Standards:** foundational science and engineering practices — asking
  questions; planning and carrying out investigations; using observations;
  crosscutting concept of patterns (supports all later units)
- **Week 3 goal:** use the five senses to observe one object; say or draw
  three things noticed; adult scribes "I notice…" statements.
- **Week 4 goal:** use a hand lens and simple tools (ruler, cup) to observe
  more closely; sort objects by an observable property and name it.
- **Week 5 goal:** ask "I wonder…" questions; separate questions we can
  explore by looking/testing from questions we cannot.
- **Week 6:** review week — observation walk, re-teach as needed, formative check.
- Sessions rotate: guided-noticing lesson → journal drawing practice →
  sorting/object-play → share-and-review circle.

### Unit 02 — Pushes, pulls, and moving objects (Weeks 7–10)

- **Standards:** K-PS2-1, K-PS2-2
- **Week 7 goal:** vocabulary push/pull; observe that pushes and pulls start,
  stop, or change how objects move (toy cars, balls, swings).
- **Week 8 goal:** compare strong vs. gentle pushes (ramp with a ball: "how
  far does it go?"); compare directions of pulls.
- **Week 9 goal:** design a solution — build a ramp, bumper, or turn so a
  rolling object follows a path; test whether it works as intended and improve it.
- **Week 10:** review week — push/pull obstacle course, re-teach, formative check.
- Sessions rotate: investigation lesson → test-and-measure play →
  design-and-build session → share-and-review.

### Unit 03 — Comparing materials and designing simple solutions (Weeks 11–14)

- **Standards:** K-2-ETS1-1, K-2-ETS1-2, K-2-ETS1-3
- **Week 11 goal:** describe materials by observable properties — color,
  texture (rough/smooth), bendy/stiff, sink/float, warm/cool to the touch.
- **Week 12 goal:** define a simple problem people want solved (e.g., keep a
  toy dry in "rain" from a watering can); sketch how the shape of an object
  helps it solve the problem.
- **Week 13 goal:** build and test two solutions; compare which works better
  and tell why, using observations.
- **Week 14:** review week — materials market, design showcase, formative check.
- Sessions rotate: property-exploration lesson → sketch/planning session →
  build-and-test session → share-and-review.

### Unit 04 — Plant needs and growth observations (Weeks 15–18)

- **Standards:** K-LS1-1, K-ESS3-1
- **Week 15 goal:** name what plants need (water, light, air, soil/space) by
  observing classroom plants; plant bean seeds in cups.
- **Week 16 goal:** tend and observe daily; draw growth in the journal;
  describe the pattern (sprout appears, stem grows taller, leaves open).
- **Week 17 goal:** fair-test introduction — one plant gets light, one does
  not (adult sets up); observe and compare with adult guidance.
- **Week 18:** midyear review (flexible) — cumulative observation games and
  journal walk, re-teach highest-need objective, formative check of Units 01–04.
- Sessions rotate: investigation lesson → daily plant-tending and journaling →
  measurement/counting play → share-and-review.

### Unit 05 — Animal needs, habitats, and patterns (Weeks 19–22)

- **Standards:** K-LS1-1, K-ESS3-1, K-ESS2-2
- **Week 19 goal:** describe patterns in what animals need (food, water,
  shelter, air) through observation, books, or video — never by capturing wildlife.
- **Week 20 goal:** model how an animal's needs relate to where it lives
  (build a habitat diorama or tabletop model: pond, tree, burrow).
- **Week 21 goal:** observe how plants and animals change their environment
  (squirrel buries food, roots crack soil, people build) and argue with
  evidence that the change meets a need.
- **Week 22:** review week — habitat guessing game, formative check.
- Sessions rotate: observation/research lesson → model-building session →
  evidence-talk circle → share-and-review.

### Unit 06 — Weather observations and daily patterns (Weeks 23–26)

- **Standards:** K-ESS2-1, K-ESS3-2
- **Week 23 goal:** describe today's weather (sunny, cloudy, rainy, windy,
  warm/cool); start the daily weather journal with symbols.
- **Week 24 goal:** look for patterns over two weeks — count sunny vs. cloudy
  days (whole numbers only); notice morning cooler than afternoon.
- **Week 25 goal:** ask questions about weather forecasting — why do people
  watch forecasts? Practice a severe-weather safety drill indoors (never
  observe storms outside).
- **Week 26:** review week — weather-report role play, formative check.
- Sessions rotate: daily observation ritual → journaling/counting session →
  question-and-answer circle → share-and-review.

### Unit 07 — Sunlight, shade, and warming surfaces (Weeks 27–30)

- **Standards:** K-PS3-1, K-PS3-2
- **Week 27 goal:** make observations to compare surfaces in sunlight vs.
  shade (sand, soil, rock, water); describe which feels warmer/cooler —
  comparative language only, no thermometers for the learner.
- **Week 28 goal:** design and build a structure (umbrella, canopy, tent) that
  reduces the warming effect of sunlight on an area; test with a touch-check.
- **Week 29 goal:** improve the design after testing; compare two structures'
  strengths and weaknesses.
- **Week 30:** review week — shade-design fair, formative check.
- Safety: never look directly at the sun; short outdoor periods with sun
  protection; adult handles all timing.
- Sessions rotate: investigation lesson → build session → test-and-improve
  session → share-and-review.

### Unit 08 — Caring for local environments and engineering solutions (Weeks 31–34)

- **Standards:** K-ESS3-3, K-2-ETS1-1, K-2-ETS1-2, K-2-ETS1-3
- **Week 31 goal:** notice how people change the local environment (litter,
  trampled grass, garden beds); sort changes into helpful and harmful.
- **Week 32 goal:** define a simple local problem (e.g., litter blows into the
  school garden); sketch a solution.
- **Week 33 goal:** build, test, and communicate the solution (a litter trap,
  a watering system, a bird shelter); tell the class what it does.
- **Week 34:** review week — community-care showcase, formative check.
- Sessions rotate: observation-walk lesson → sketch/planning session →
  build-and-communicate session → share-and-review.

### Weeks 35–36 — Final review (flexible)

- Cumulative investigations and performance tasks across all eight objectives;
  re-teach where evidence shows gaps; final observational assessment and keys
  (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 06 opens with
observation practice from Unit 01; Unit 08 reuses the design cycle from
Unit 03). Midyear (Week 18) and final (Weeks 35–36) weeks are full-track
reviews. Formative checks are oral/observed, adult-scribed, with each unit's
teacher guide specifying what "ready to move on" looks like. The long
observation journals (plants in U04, weather in U06) are revisited in later
units so recording-and-pattern skills stay alive all year.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- Science fundamentals guides (`biology_fundamentals.md`,
  `physics_fundamentals.md`, `astronomy_fundamentals.md`,
  `thermodynamics_laws.md`) — adult background only, never learner-facing.
- Discovery shelf — NASA Space Place, NOAA SciJinks, USGS education, PhET,
  Smithsonian Learning Lab, PBS LearningMedia — candidate sources for Resource
  Packs, each opened and checked for K fit before use.
- Shared journal/symbol templates (weather symbols, growth-log frames) will be
  created once in U01/U04 and reused; do not duplicate per unit.
- Datasets and grades 4–8 guides are **not** reused at K (grade-band mismatch).

## 8. Safe materials and safety boundaries

- Household and dollar-store materials: cups, bean or pea seeds, potting soil,
  hand lenses, rulers, toy cars and balls, ramps (books/cardboard), fabric
  scraps, cardboard, tape, watering cans, paper, crayons, sorting trays.
- **Every investigation is adult-supervised.** Never leave the learner alone
  with water containers, soil, or tools.
- **Sun:** never look directly at the sun. Sunlight investigations compare
  surfaces and shade only; keep outdoor time short with sun protection; the
  adult manages timing.
- **No tasting lab materials:** soil, seeds, and found objects are not food
  unless the adult confirms an item is edible. Check for seed, soil, and
  pollen allergies before planting or outdoor work.
- **Living things:** observe wildlife in place — no capturing, handling, or
  bringing wild animals indoors. Classroom plants are tended with the adult;
  wash hands after soil and outdoor work.
- **Weather:** severe-weather learning is a safety drill and questions,
  practiced indoors. Never observe storms outside.
- **Small parts:** no small parts for children under 3 in shared settings.
- Every unit's teacher guide lists the observation-only or simulation
  alternative for any task a family cannot or should not do hands-on.

## 9. Accessibility supports

- **Oral, pointing, drawing, and adult-scribed response modes** for all checks;
  the adult writes the words the child dictates.
- Observations can be made by touch, smell, and listening — not only sight;
  textured materials and large-print symbols for low-vision learners.
- Short sessions with movement breaks; every lesson includes a table version
  and a floor/outdoor-play version.
- Language support: vocabulary taught with the object first, the word second;
  visual word walls; home-language labels welcomed alongside English science words.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue (weather symbols differ in shape, not only color).

## 10. Gaps and paths for future units

- Units U02–U08 and the R00 diagnostic/final-review package are unbuilt —
  each is a later worker section on issue #7. U01 was delivered as a
  validated draft on 2026-10-04 (not educator-reviewed, not merged).
- No K-appropriate internal observation datasets exist; units will use original
  small-observation scenarios with named fictional practice data where needed
  (e.g., a sample two-week weather log).
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- The NGSS assessment boundaries above (warmer/cooler, whole numbers) must
  carry through into every unit's assessments and keys.

## 11. Planned units (prose — no files yet except U01; no links to missing files)

U01 Observing, describing, and asking questions — **delivered as a validated
draft** ([units/unit-01-observing-describing-asking-questions/](units/unit-01-observing-describing-asking-questions/));
U02 Pushes, pulls, and moving objects; U03 Comparing materials and designing
simple solutions; U04 Plant needs and growth observations; U05 Animal needs,
habitats, and patterns; U06 Weather observations and daily patterns; U07
Sunlight, shade, and warming surfaces; U08 Caring for local environments and
engineering solutions; R00 diagnostic, midyear/final review, and cumulative
assessments with keys. U02–U08 and R00 will each follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #7 body, comments (none), and label state re-read 2026-10-01 before claiming.
- No `curriculum-in-progress` claims active on any queue issue; no open worker PRs.
- `curriculum/grade-k/` and `stem/` re-inventoried on `main` @ `4870c53`:
  no science files; science folder created by this run.
- NGSS kindergarten codes and descriptions verified 2026-10-01 against:
  the official standards search page
  ([nextgenscience.org/search-standards](https://www.nextgenscience.org/search-standards):
  K-PS2-1, K-PS2-2, K-LS1-1, K-ESS2-1, K-ESS2-2, K-ESS3-1, K-ESS3-2, K-ESS3-3)
  and Achieve's official NGSS Kindergarten publication (June 2013 PDF:
  K-PS2-1, K-PS2-2, K-PS3-1, K-PS3-2, K-LS1-1, K-ESS2-1, K-ESS2-2). K–2
  engineering-design codes (K-2-ETS1-1, K-2-ETS1-2, K-2-ETS1-3) cross-checked
  against a published NGSS correlation document.
- No state adoption, accreditation, or alignment certification is claimed.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); `curriculum/manifest.json` updated with the new files;
  Markdown links checked for existence (only relative links to existing files).
