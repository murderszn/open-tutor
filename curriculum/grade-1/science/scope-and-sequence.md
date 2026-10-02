# Grade 1 Science — Scope and Sequence

Audit section A00 of [issue #11](https://github.com/murderszn/open-tutor/issues/11).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-02 against `main` (commit `4870c53`).

| Item | Location | Decision |
|---|---|---|
| Grade-1 hub page | `curriculum/grade-1/README.md` | **Revise** — updated to reflect the science track's audit status alongside the math audit; link the new subject folder without linking files that exist only in other open PRs |
| Grade 1 science folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade science content | none (0 Markdown files under `curriculum/grade-1/` before this run; the folder held only the placeholder hub page) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (audit delivered as PR #67, open) | `curriculum/grade-1/math/` (exists on that branch only, not on `main`) | **No links from this track** — math and science are independent tracks with no cross-links; the math audit is a sibling reference for pacing/format only. Observing/data moments (weather tallies, growth measurements) coordinate informally through the guiding adult, not through file links |
| Kindergarten science track (#7, audit delivered; PR #63 open) | `curriculum/grade-k/science/` (on that branch only) | **Reference for entry prerequisites only** — K objectives (observing/describing/asking, comparing materials, plant and animal needs, weather patterns) define what this track assumes; no K lessons copied upward |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/science/`, etc. | **No reuse for grade-1 instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| `stem/` legacy folder | does not exist in `curriculum/grade-1/`; the issue's baseline notes 0 Markdown files | **No reuse** — nothing to inventory or preserve |
| `resources/physics_fundamentals.md` | grades 4–8 physics vocabulary (waves, sound, light) | **Teacher-side reuse only** — the guiding adult may consult it for background wording on vibration and light in U02–U03; never assigned to the learner |
| `resources/biology_fundamentals.md` | cells, photosynthesis, water cycle — aimed at grades 4–8 | **Teacher-side reuse only** — adult background at most (e.g., why roots matter in U04); plant/animal structure language at grade 1 stays observable-parts level |
| `resources/astronomy_fundamentals.md` | grades 4–8 astronomy | **Teacher-side reuse only** — adult background (e.g., the sun as a star) for U06; the learner's work stays at observable sky patterns |
| `resources/chemistry_fundamentals.md` | grades 4–8 chemistry | **No reuse** at grade 1 — beyond grade band |
| `resources/thermodynamics_laws.md` | formal thermodynamics | **No reuse** at grade 1 — beyond grade band; warming/cooling stays at comparative observation language |
| Repository datasets (`solar_system_planets.csv`, `periodic_table_elements.csv`) | models/graphing sources | **No direct reuse at grade 1** — magnitudes and abstractions exceed the grade band; future units will use original small-observation scenarios (e.g., one learner's weather tally) instead |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |
| Discovery shelf (`docs/curriculum-expansion/resource-map.md`) | NASA Space Place, NOAA SciJinks, USGS education, PhET, Smithsonian Learning Lab, PBS LearningMedia | **Reuse via resource_finder** — candidate sources for unit Resource Packs; every item opened and checked for grade-1 fit before use |

No existing grade-1 science material was inaccurate or inappropriate; there was
simply none. No keep decisions beyond the hub page; everything substantive is a
gap to be built.

## 2. Prerequisites

Learners typically enter grade-1 science with (the K science track's end-of-year
objectives; that track's audit is delivered, units not yet written):

- Observing with the senses and simple tools, describing what is noticed, and
  asking questions that can be explored by looking or testing
- Comparing everyday materials by observable properties (color, texture, bend,
  sink/float)
- Patterns in what plants need to live and grow; patterns in what animals need
  to survive
- Observing, recording, and sharing local weather conditions; daily and seasonal
  patterns

The diagnostic weeks (Weeks 1–2) probe these through play and talk; Unit 01
assumes none are secure and re-teaches observing, questioning, and safe
investigation explicitly.

## 3. Track objectives

Measurable, adult-assessed by end of year. All investigations are
adult-supervised; oral, drawing, pointing, or adult-scribed responses count as
evidence throughout. Objectives mirror the track README; objective 10 is the
safety objective.

1. Ask questions that can be explored by observing, touching, or testing; make
   careful observations with the senses and simple tools (hand lens,
   flashlight, ruler); record observations in words, drawings, or tallies; and
   communicate findings clearly.
2. Plan and carry out investigations showing that vibrating materials can make
   sound and that sound can make materials vibrate (1-PS4-1).
3. Make observations to show that objects in darkness can be seen only when
   illuminated; test transparent, translucent, opaque, and reflective
   materials in the path of a light beam; describe the shadows each material
   makes (1-PS4-2, 1-PS4-3).
4. Design and build a device that uses light or sound to communicate over a
   distance; test it; compare two designs to say which performs better and
   why (1-PS4-4, K-2-ETS1-2, K-2-ETS1-3).
5. Describe the external parts of plants and animals and how those parts help
   the living thing survive, grow, and meet its needs; design a solution to a
   human problem that mimics how a plant or animal part works (1-LS1-1).
6. Use texts and media to identify patterns in the behavior of parents and
   offspring that help the offspring survive (1-LS1-2).
7. Make observations to show that young plants and animals are like — but not
   exactly like — their parents (1-LS3-1).
8. Use observations of the sun, moon, and stars to describe patterns that can
   be predicted — sunrise and sunset position, the moon's changing shape
   (1-ESS1-1).
9. Make observations at different times of year to relate the amount of
   daylight to the time of year (1-ESS1-2).
10. Follow science safety practices: never look directly at the sun, keep lab
    materials away from the mouth, handle living things gently, and name the
    safe alternative when an investigation is unsafe to touch.

## 4. Standards crosswalk

Reference framework: **Next Generation Science Standards**, grade-1 performance
expectations and the K–2 engineering band. Each code and description below was
checked 2026-10-02 against the official framework at
[nextgenscience.org/search-standards](https://www.nextgenscience.org/search-standards)
(1-PS4-1 and 1-PS4-2 read directly there; the remainder corroborated with the
California NGSS DCI arrangement and independent grade-1 standards listings).
No state adoption, accreditation, or alignment certification is claimed.

### Waves and Their Applications in Technologies for Information Transfer (1-PS4)

| Code | Description |
|---|---|
| 1-PS4-1 | Plan and conduct investigations to provide evidence that vibrating materials can make sound and that sound can make materials vibrate. |
| 1-PS4-2 | Make observations to construct an evidence-based account that objects in darkness can be seen only when illuminated. |
| 1-PS4-3 | Plan and conduct an investigation to determine the effect of placing objects made with different materials in the path of a beam of light. |
| 1-PS4-4 | Use tools and materials to design and build a device that uses light or sound to solve the problem of communicating over a distance. |

### From Molecules to Organisms: Structures and Processes (1-LS1)

| Code | Description |
|---|---|
| 1-LS1-1 | Use materials to design a solution to a human problem by mimicking how plants and/or animals use their external parts to help them survive, grow, and meet their needs. |
| 1-LS1-2 | Read texts and use media to determine patterns in behavior of parents and offspring that help offspring survive. |

### Heredity: Inheritance and Variation of Traits (1-LS3)

| Code | Description |
|---|---|
| 1-LS3-1 | Make observations to construct an evidence-based account that young plants and animals are like, but not exactly like, their parents. |

### Earth's Place in the Universe (1-ESS1)

| Code | Description |
|---|---|
| 1-ESS1-1 | Use observations of the sun, moon, and stars to describe patterns that can be predicted. |
| 1-ESS1-2 | Make observations at different times of year to relate the amount of daylight to the time of year. |

### Engineering Design, K–2 band (K-2-ETS1)

| Code | Description |
|---|---|
| K-2-ETS1-1 | Ask questions, make observations, and gather information about a situation people want to change to define a simple problem that can be solved through the development of a new or improved object or tool. |
| K-2-ETS1-2 | Develop a simple sketch, drawing, or physical model to illustrate how the shape of an object helps it function as needed to solve a given problem. |
| K-2-ETS1-3 | Analyze data from tests of two objects designed to solve the same problem to compare the strengths and weaknesses of how each performs. |

Note on assessment boundaries carried from the framework: at this band, light
investigations do not discuss the speed of light, and communication-device
design does not assess technological details of how the devices work.

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×1) = 36 weeks. Session model: **4 sessions per week, 20–25 minutes
each** (16 sessions per unit). Session types rotate across core investigation,
guided practice, observation/recording, and review — named per unit below. K–2
tasks remain oral, pointing, drawing, manipulative, or adult-scribed as needed,
with explicit adult directions; grade 1 begins short independent recording
tasks (drawing + labels, 4–6 items) that the adult reviews the same day.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (observe–record–share rhythm, science
  journal habits, turn-taking, exit-check rituals) and baseline each
  objective's entry point.
- Sessions: one-on-one playful probes — "I notice / I wonder" walks, sort
  familiar objects by property, shine a flashlight in a dark box, draw a
  plant's parts from memory, name what pets and people need.
- No new instruction; record observations against the track objectives and
  re-teach any insecure K skill in Unit 01's first two sessions.

### Unit 01 — Questions, observations, and safe investigations (Weeks 3–6)

- **Standards:** science practices across all PEs; K-2-ETS1-1 (defining simple
  problems); safety foundations.
- **Week 3 goal:** testable questions — questions you can explore by looking,
  touching, or testing; "I notice / I wonder" journaling.
- **Week 4 goal:** careful observing with senses and tools (hand lens,
  flashlight, ruler); recording with words, drawings, tallies.
- **Week 5 goal:** safe investigating — adult supervision rules, what never
  goes near the mouth, gentle handling of living things, the safe-alternative
  question ("what can I observe instead?").
- **Week 6:** review week — observation scavenger hunt, question sorting game,
  formative check.
- Session rotation: observe (walk/hunt) → record (journal + tallies) →
  share (tell-and-draw circle) → safety practice (rule sorts).

### Unit 02 — Sound, vibration, and communication (Weeks 7–10)

- **Standards:** 1-PS4-1, 1-PS4-4 (sound device), K-2-ETS1-1, K-2-ETS1-2,
  K-2-ETS1-3.
- **Week 7 goal:** vibrating materials make sound — plucked rubber bands,
  drummed surfaces; feel and see the vibration; keep other conditions the
  same to make it a fair test.
- **Week 8 goal:** sound can make materials vibrate — rice grains on a
  drummed surface, a paper strip near a loud voice; loud/soft and near/far
  comparisons.
- **Week 9 goal:** design a sound-signaling device (pattern-of-taps code,
  paper-cup-and-string telephone) that communicates a simple message across
  the room; draw the plan first.
- **Week 10:** review week — test two designs, compare strengths and
  weaknesses, formative check.
- Each unit opens with an observation warm-up from prior units (here: "I
  notice / I wonder" on a new sound).

### Unit 03 — Light, visibility, shadows, and materials (Weeks 11–14)

- **Standards:** 1-PS4-2, 1-PS4-3, 1-PS4-4 (light device).
- **Week 11 goal:** objects in darkness can be seen only when illuminated —
  dark-box observations; light source vs. light receiver language.
- **Week 12 goal:** materials in a light beam — transparent (clear plastic),
  translucent (wax paper), opaque (cardboard), reflective (mirror); describe
  the shadows each makes.
- **Week 13 goal:** design a light-signaling device (flashlight code) that
  communicates over a distance; compare with the sound device from Unit 02.
- **Week 14:** review week — shadow-puppet storytelling, formative check.
- Safety: never look directly at the sun; flashlight beams point at objects,
  not eyes. Indoor alternatives for all outdoor sun work.

### Unit 04 — External structures of plants and animals (Weeks 15–18)

- **Standards:** 1-LS1-1, K-2-ETS1-1, K-2-ETS1-2.
- **Week 15 goal:** plant external parts — roots, stems, leaves, flowers;
  what each part does for the plant (observed, not textbook-memorized).
- **Week 16 goal:** animal external parts — legs, ears, eyes, beaks, fins,
  tails; how parts help animals get what they need.
- **Week 17 goal:** design a solution to a human problem that mimics a
  plant/animal part (e.g., a "seed-grip" tool modeled on burdock hooks,
  a scoop modeled on a beak); sketch before building.
- **Week 18:** midyear review (flexible) — revisit Units 01–04 observations,
  re-teach the highest-need objective, formative check.
- Living things are handled gently and returned; observation-only for wild
  animals.

### Unit 05 — Parent–offspring similarities and behavior (Weeks 19–22)

- **Standards:** 1-LS1-2, 1-LS3-1.
- **Week 19 goal:** like but not exactly like — compare young and adult
  plants/animals (pictures and live seedlings) for matching and different
  traits.
- **Week 20 goal:** behavior patterns that help offspring survive — adult
  birds feeding chicks, mammals sheltering young, plant seeds dispersing.
- **Week 21 goal:** texts and media as evidence — guided reading and short
  videos used to find behavior patterns; adult reads and pauses for
  noticing.
- **Week 22:** review week — parent–offspring matching games, formative
  check.
- No live-animal breeding or handling beyond gentle classroom pets; media
  observations substitute freely.

### Unit 06 — Sun, moon, and observable sky patterns (Weeks 23–26)

- **Standards:** 1-ESS1-1.
- **Week 23 goal:** the sun's pattern — rises and sets in predictable
  places; shadows change through the day (observed, never stared at).
- **Week 24 goal:** the moon's changing shape — nightly shape journal over
  two weeks; the moon looks different but follows a pattern.
- **Week 25 goal:** stars appear at night in patterns; day-sky vs. night-sky
  observation chart.
- **Week 26:** review week — sky-pattern storytelling, formative check.
- Safety: never look directly at the sun; sun position observed via shadows
  and horizon markers, never naked-eye staring. Cloudy-day alternatives
  (pictures, models) for every outdoor session.

### Unit 07 — Seasonal daylight and weather observations (Weeks 27–30)

- **Standards:** 1-ESS1-2; builds on K weather observations.
- **Week 27 goal:** daylight amount changes — morning/evening light journal;
  longer and shorter days across the months.
- **Week 28 goal:** weather and daylight together — tally chart of sunny,
  cloudy, rainy days with daylight length; seasons as patterns, not dates.
- **Week 29 goal:** relating daylight to time of year — what is the same
  and different in fall, winter, spring, summer where we live.
- **Week 30:** review week — weather-station role play, formative check.
- Severe weather is learned as a safety drill and questions, never by going
  outside in it.

### Unit 08 — Engineering solutions inspired by living things (Weeks 31–34)

- **Standards:** 1-LS1-1, K-2-ETS1-1, K-2-ETS1-2, K-2-ETS1-3.
- **Week 31 goal:** biomimicry noticing — how are plant and animal parts
  tools? (thorns as hooks, roots as anchors, webbed feet as paddles).
- **Week 32 goal:** define a human problem and sketch a solution that mimics
  a living thing's part; materials plan.
- **Week 33 goal:** build, test, and improve; test two designs and compare
  strengths and weaknesses with a simple data table.
- **Week 34:** review week — design showcase for the guiding adult, formative
  check.
- Adult supervises all building; no sharp tools for the learner.

### Weeks 35–36 — Final review (flexible)

- Cumulative observation games and performance tasks across all ten
  objectives; re-teach where evidence shows gaps; final observational
  assessment and keys (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 03 opens with
"I notice / I wonder" observation routines; Unit 05 opens with plant-part
observations; Unit 08 opens with the U02–U03 device-design cycle). Midyear
(Week 18) and final (Weeks 35–36) weeks are full-track reviews. Formative
checks are oral/observed with short recording tasks; each unit's teacher guide
specifies what "ready to move on" looks like and what to re-teach when evidence
says otherwise. The sky-pattern units (U06–U07) thread through the year:
moon-shape and daylight journals started in their units continue as
two-minute observation rituals, giving spaced retrieval of 1-ESS1-1 and
1-ESS1-2 for free.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- Discovery shelf candidates (NASA Space Place, NOAA SciJinks, USGS education,
  PhET, Smithsonian Learning Lab, PBS LearningMedia) — every item opened and
  checked for grade-1 fit before recommendation.
- `resources/physics_fundamentals.md`, `resources/biology_fundamentals.md`,
  `resources/astronomy_fundamentals.md` — adult background reference only
  (Unit 02–04, U06); never assigned to the learner.
- Shared reusable patterns (observation-journal template, tally-chart template,
  design-plan sketch sheet, "like / not exactly like" comparison chart) will be
  created once in Units 01–02 and reused; do not duplicate per unit.
- Repository datasets are **not** reused at grade 1 (grade-band mismatch).
- The K science track's materials serve as prerequisite reference, never as
  grade-1 lesson content.

## 8. Safe materials and safety boundaries

Household or dollar-store materials: cups and paper cups, string, rubber bands,
paper plates, flashlights, hand lens, cardboard boxes (dark boxes), clear
plastic, wax paper, mirrors (shatterproof/acrylic), bean or pea seeds, potting
soil, spray bottle, thermometer (outdoor/room, non-mercury), journals, crayons,
tally charts, simple building materials (tape, paper, craft sticks).

- **No tasting lab materials:** soil, seeds, and found objects are not food;
  hands washed after handling soil or outdoor objects.
- **Eyes:** never look directly at the sun; flashlight beams point at objects,
  never at eyes; adult sets up any bright-light arrangement.
- **Sound:** comfortable volumes only; no shouting into cup telephones.
- **Living things:** handled gently, kept briefly, and returned; wild animals
  observed only, never captured; no live-animal breeding.
- **Weather:** severe-weather learning is a safety drill and questions,
  practiced indoors; outdoor observation happens only in fair weather.
- Small parts supervised in shared settings; check for food-allergen materials
  (seed handling); no sharp tools for the learner — adult pre-cuts.
- Every outdoor or bright-light session has an indoor/observation alternative
  for mobility limits and cloudy days.

## 9. Accessibility supports

- **Oral, pointing, drawing, and adult-scribed response modes** for all checks;
  the adult scribes written work when the learner isn't ready to write
  independently.
- Large-print observation charts and tally sheets; textured materials and
  high-contrast symbols for low-vision learners; sound-source direction games
  adapted for hearing differences (feel vibration instead).
- Short sessions (20–25 min) with movement breaks; every lesson includes a
  seated-table and a floor-play variant.
- Language support: vocabulary taught with objects first, word second; visual
  word walls with drawings; home-language labels welcomed alongside English
  terms.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue (e.g., transparent/translucent/opaque shown by pattern,
  not hue alone).
- Investigation quality is observation-based, never timed — no speed tests.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #11.
- No grade-1-appropriate internal datasets exist; weather and growth data work
  will use original small-observation scenarios (one learner's tally, clearly
  labeled real-vs-practice where relevant).
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- The sky-pattern journals (U06 moon-shape journal, U07 daylight journal) are
  designed in their units but referenced across later weeks; the R00 review
  package should include their cumulative evidence.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Questions, observations, and safe investigations; U02 Sound, vibration, and
communication; U03 Light, visibility, shadows, and materials; U04 External
structures of plants and animals; U05 Parent–offspring similarities and
behavior; U06 Sun, moon, and observable sky patterns; U07 Seasonal daylight and
weather observations; U08 Engineering solutions inspired by living things; R00
diagnostic, midyear/final review, and cumulative assessments with keys. Each
will follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #11 body, comments (none), and label state re-read 2026-10-02 before claiming.
- No `curriculum-in-progress` claims active on any queue issue; no conflicting worker
  claims younger than 3 hours on the chosen issue.
- `curriculum/grade-1/` re-inventoried on `main` @ `4870c53`: only the placeholder
  `README.md` present (no `science/`, no `stem/`); science folder created by this run.
- NGSS codes and descriptions verified 2026-10-02: 1-PS4-1 and 1-PS4-2 read
  directly at nextgenscience.org/search-standards; 1-PS4-3, 1-PS4-4, 1-LS1-1,
  1-LS1-2, 1-LS3-1, 1-ESS1-1, 1-ESS1-2, K-2-ETS1-1/2/3 corroborated against the
  California NGSS DCI arrangement and independent grade-1 standards listings —
  no state adoption, accreditation, or alignment certification claimed.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files; the math-audit status is
  referenced by PR number, not by a link to a file that exists only on another
  open branch).
