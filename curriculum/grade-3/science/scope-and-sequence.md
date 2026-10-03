# Grade 3 Science — Scope and Sequence

Audit section A00 of [issue #19](https://github.com/murderszn/open-tutor/issues/19).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-03 against `main` (commit `247bf79`).

| Item | Location | Decision |
|---|---|---|
| Grade-3 hub page | `curriculum/grade-3/README.md` | **Revise** — updated to reflect the science track's audit status and link the new subject folder |
| Grade-3 science folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade science content | none (0 Markdown files under `curriculum/grade-3/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#18, audit delivered as draft PR #75, unmerged) | `curriculum/grade-3/math/` (PR head) | **Reference only** — session model (4 × ~30 min sessions/week) reused as pattern; 3.MD connections noted for U01/U07 (mass/volume in grams, kilograms, liters; scaled picture and bar graphs; line plots); no math content reused |
| Grade-2 science track (#15, audit delivered as draft PR #72, unmerged) | `curriculum/grade-2/science/` (PR head) | **Reference for entry prerequisites only** — grade-2 end-of-year objectives (fair one-variable investigations, centimeter measurement, labeled drawings/tallies/tables, reversible/irreversible changes, plant needs and growth logs, seed-dispersal models, habitat biodiversity counts, quick-vs.-slow Earth events, landform/water maps, engineering design comparisons) define what this track assumes; no grade-2 lessons copied upward |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/science/` etc. | **No reuse for grade-3 instruction** — content targets ages 9+; kept as reference for where the track leads, not as source material |
| `stem/` | 0 Markdown files | **No legacy content** — nothing to review; new core science belongs in `science/` per the worker prompt |
| `assignments/science/physical-science-roadmap` | beginner-lab-menu and lab-report template (accelerated grades 8–9 framing) | **Adult-side inspiration only** — the guiding adult may adapt beginner-lab activity *ideas* (measure-five-objects scavenger, melting race reframed as a fair test) into grade-3 language; nothing assigned to the learner as written |
| `resources/physics_fundamentals.md` | grades 4–8 guide (measurement & units, motion & forces) | **Teacher-side only** — adult background wording for push/pull, friction, and net-force ideas in U02–U03; learner work stays at qualitative, relative force language per the 3-PS2-1 assessment boundary (no quantitative force size) |
| `resources/biology_fundamentals.md` | water cycle, cells, photosynthesis, reproduction — aimed at grades 4–8 | **Teacher-side only** — adult background (e.g., why variation matters in U05, what fossils record in U06); no cell vocabulary for the learner; life-cycle work stays at observable stages |
| `resources/chemistry_fundamentals.md`, `resources/thermodynamics_laws.md`, `resources/astronomy_fundamentals.md` | grades 4–8 guides | **No direct reuse** — beyond the grade-3 band and outside this track's performance expectations |
| Repository datasets (CSV) | e.g., `solar_system_planets.csv`, `periodic_table_elements.csv` | **No direct reuse at grade 3** — magnitudes and abstractions exceed the grade band; units will use original small-observation scenarios (e.g., one learner's bean-growth log, classroom weather tallies) with clearly labeled practice data where needed |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |
| Discovery shelf (`docs/curriculum-expansion/resource-map.md`) | NASA Space Place, NOAA SciJinks, USGS education, PhET, PBS LearningMedia, SciShow Kids | **Reuse via resource_finder** — candidate sources for unit Resource Packs; every item opened and checked for grade-3 fit before use |

No existing grade-3 science material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-3 science with (the grade-2 science track's end-of-year objectives; that track's audit is delivered, units not yet written):

- Asking questions that can be explored by observing, touching, or testing; making careful observations with the senses and simple tools (hand lens, flashlight, ruler); recording in words, drawings, or tallies; communicating findings
- Planning simple fair investigations: one variable changed at a time, length measured to the nearest centimeter, observations in labeled drawings, tallies, and simple tables
- Comparing everyday materials by observable properties; arguing with evidence about reversible and irreversible changes
- Plant needs (sunlight, water); tracking growth with drawings and measurements over weeks; models that mimic seed dispersal or pollination
- Comparing the diversity of living things across habitats by counting kinds; quick-vs.-slow Earth events from media evidence; landform and water maps
- Engineering habits: defining a simple problem, sketching how a shape does its work, testing two designs and comparing strengths and weaknesses with data
- Science safety practices: adult-supervised investigations, materials away from the mouth, living things handled gently, never looking directly at the sun

Math entry (the grade-3 math track's prerequisites, from the grade-2 math end-of-year objectives): three-digit place value and comparing; addition and subtraction within 1000; arrays as repeated addition; length measurement with standard tools; picture graphs, bar graphs (single-unit scale), and line plots; halves, thirds, and fourths. Unit 01 extends these to mass, volume, and scaled displays; Unit 07 uses scaled bar graphs and pictographs for weather data.

The diagnostic weeks (Weeks 1–2) probe these through play and talk; Unit 01 re-teaches
questioning, fair-test structure, and measuring explicitly rather than assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year. All investigations are adult-supervised.
Short written responses (8–10 items) reviewed the same day count as evidence, alongside
oral, drawn, and manipulative responses. Objectives mirror the track README.

1. Plan and carry out fair investigations: ask a testable question, change one
   variable at a time while controlling the rest, repeat trials, and record data
   in tables, bar graphs, pictographs, and line plots (3-PS2-1; 3-5-ETS1-3).
2. Provide evidence from investigations of how balanced forces leave an object's
   motion unchanged while unbalanced forces change its speed or direction; use
   an observed motion pattern to predict future motion (3-PS2-1, 3-PS2-2).
3. Ask and answer cause-and-effect questions about electric (static) and magnetic
   interactions between objects not in contact — including how distance and magnet
   orientation affect the interaction — and define a simple magnet-based design
   problem (3-PS2-3, 3-PS2-4).
4. Develop models showing that organisms have unique and diverse life cycles with
   birth, growth, reproduction, and death in common (3-LS1-1).
5. Analyze and interpret data to show that plants and animals inherit traits from
   parents and that variation exists among similar organisms; use evidence to
   explain how the environment can influence traits (3-LS3-1, 3-LS3-2).
6. Construct evidence-based arguments that some animals form groups that help
   members survive; use fossil data as evidence of past organisms and environments;
   explain how variations can aid survival and reproduction; argue which organisms
   survive well, less well, or not at all in a given habitat; and judge the merit
   of a solution to a problem caused when an environment changes (3-LS2-1, 3-LS4-1,
   3-LS4-2, 3-LS4-3, 3-LS4-4).
7. Represent weather data in tables and graphical displays to describe typical
   seasonal conditions; combine information from sources to describe climates in
   different world regions; and make a claim about the merit of a design solution
   that reduces a weather-related hazard (3-ESS2-1, 3-ESS2-2, 3-ESS3-1).
8. Complete an engineering design cycle: define a problem with criteria and
   constraints, generate and compare multiple solutions, and run fair tests that
   control variables and consider failure points to improve a prototype
   (3-5-ETS1-1, 3-5-ETS1-2, 3-5-ETS1-3).

## 4. Standards crosswalk

Reference framework: **Next Generation Science Standards**, grade-3 performance
expectations and the 3–5 engineering band. Each code and description below was
checked 2026-10-03 against the California Department of Education's official
reproduction of the NGSS grade-3 release ("NGSS Grade Three Arranged by DCI,"
revised March 2015, read in full). No state adoption, accreditation, or alignment
certification is claimed. An asterisk (*) marks performance expectations that
integrate engineering through a practice or disciplinary core idea, per the framework.

### Motion and Stability: Forces and Interactions (3-PS2)

| Code | Description |
|---|---|
| 3-PS2-1 | Plan and conduct an investigation to provide evidence of the effects of balanced and unbalanced forces on the motion of an object. |
| 3-PS2-2 | Make observations and/or measurements of an object's motion to provide evidence that a pattern can be used to predict future motion. |
| 3-PS2-3 | Ask questions to determine cause and effect relationships of electric or magnetic interactions between two objects not in contact with each other. |
| 3-PS2-4 * | Define a simple design problem that can be solved by applying scientific ideas about magnets. |

Clarifications carried from the framework: an unbalanced force on one side of a
ball can make it start moving; balanced forces pushing on a box from both sides
produce no motion at all (3-PS2-1). Predictable motion patterns include a child
swinging, a ball rolling back and forth in a bowl, and two children on a seesaw
(3-PS2-2). Electric examples include a charged balloon lifting hair and a charged
rod attracting paper; magnetic examples include two permanent magnets, an
electromagnet with steel paper clips, and one magnet versus two; distance affects
strength and magnet orientation affects direction (3-PS2-3). Magnet design problems
include a latch to keep a door shut and a device to keep two moving objects from
touching (3-PS2-4). Assessment boundaries: one variable at a time (number, size,
or direction of forces); no quantitative force size — qualitative and relative
only; gravity addressed as a force that pulls objects down (3-PS2-1); no technical
terms such as period and frequency (3-PS2-2); manipulable objects only and static
electricity only (3-PS2-3). Unit 02 teaches forces qualitatively throughout.

### From Molecules to Organisms: Structures and Processes (3-LS1)

| Code | Description |
|---|---|
| 3-LS1-1 | Develop models to describe that organisms have unique and diverse life cycles but all have in common birth, growth, reproduction, and death. |

Clarification: changes organisms go through during their life form a pattern.
Assessment boundary: plant life cycles limited to flowering plants; animal life
cycles limited to egg-laying animals in practice; no details of human
reproduction. Unit 04 models bean-plant and butterfly/frog/chicken cycles.

### Ecosystems: Interactions, Energy, and Dynamics (3-LS2)

| Code | Description |
|---|---|
| 3-LS2-1 | Construct an argument that some animals form groups that help members survive. |

Core idea: being part of a group helps animals obtain food, defend themselves,
and cope with changes; groups (herd, school, flock, hive) vary in size and
function. Unit 06 builds evidence-based arguments from observations and media.

### Heredity: Inheritance and Variation of Traits (3-LS3)

| Code | Description |
|---|---|
| 3-LS3-1 | Analyze and interpret data to provide evidence that plants and animals have traits inherited from parents and that variation of these traits exists in a group of similar organisms. |
| 3-LS3-2 | Use evidence to support the explanation that traits can be influenced by the environment. |

Clarifications: patterns are the similarities and differences in traits shared
between offspring and their parents, or among siblings; emphasis on organisms
other than humans (3-LS3-1). Environmental examples: normally tall plants grown
with insufficient water are stunted; a pet dog given too much food and little
exercise may become overweight (3-LS3-2). Assessment boundary: no genetic
mechanisms or trait prediction; non-human examples only. Units 04–05 use the
learner's own bean-seedling measurements as the variation dataset.

### Biological Evolution: Unity and Diversity (3-LS4)

| Code | Description |
|---|---|
| 3-LS4-1 | Analyze and interpret data from fossils to provide evidence of the organisms and the environments in which they lived long ago. |
| 3-LS4-2 | Use evidence to construct an explanation for how the variations in characteristics among individuals of the same species may provide advantages in surviving, finding mates, and reproducing. |
| 3-LS4-3 | Construct an argument with evidence that in a particular habitat some organisms can survive well, some survive less well, and some cannot survive at all. |
| 3-LS4-4 * | Make a claim about the merit of a solution to a problem caused when the environment changes and the types of plants and animals that live there may change. |

Clarifications: fossil data includes type, size, and distributions — e.g., marine
fossils found on dry land, tropical plant fossils in Arctic areas, fossils of
extinct organisms (3-LS4-1). Variation advantages include larger thorns deterring
predators and better camouflage aiding survival and reproduction (3-LS4-2).
Environmental changes include land characteristics, water distribution,
temperature, food, and other organisms (3-LS4-4). Assessment boundaries: no
identification of specific fossils; major fossil types and relative ages only
(3-LS4-1); a single environmental change; no greenhouse effect or climate change
(3-LS4-4). All four sit in Unit 06, with 3-LS4-1 framed as "habitats long ago."

### Earth's Systems (3-ESS2)

| Code | Description |
|---|---|
| 3-ESS2-1 | Represent data in tables and graphical displays to describe typical weather conditions expected during a particular season. |
| 3-ESS2-2 | Obtain and combine information to describe climates in different regions of the world. |

Clarification: weather data includes average temperature, precipitation, and wind
direction. Assessment boundary: graphical displays limited to pictographs and bar
graphs; no climate change. Unit 07 builds the learner's own seasonal weather
tables and scaled displays, then combines sources for world climates.

### Earth and Human Activity (3-ESS3)

| Code | Description |
|---|---|
| 3-ESS3-1 * | Make a claim about the merit of a design solution that reduces the impacts of a weather-related hazard. |

Clarification: design solutions include barriers to prevent flooding,
wind-resistant roofs, and lightning rods. Core idea: humans cannot eliminate
natural hazards but can reduce their impacts. Unit 07 tests model flood barriers
and wind-resistant structures.

### Engineering Design, 3–5 band (3-5-ETS1)

| Code | Description |
|---|---|
| 3-5-ETS1-1 | Define a simple design problem reflecting a need or a want that includes specified criteria for success and constraints on materials, time, or cost. |
| 3-5-ETS1-2 | Generate and compare multiple possible solutions to a problem based on how well each is likely to meet the criteria and constraints of the problem. |
| 3-5-ETS1-3 | Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved. |

Unit 08 runs the full cycle; 3-5-ETS1-3's fair-test language is introduced in
Unit 01 and reused in Units 02, 03, and 07 so the vocabulary is secure before
the capstone.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34) plus two diagnostic weeks (1–2) and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) = 36
weeks. Session model: **4 sessions per week, about 30 minutes each** (16 sessions
per unit), matching the grade-3 math track. Session types rotate across
investigation lesson, data and measuring practice, science reading-and-talk or
model-building, and review — named per unit below. Grade 3 does short
independent written work (8–10 tasks) that the adult reviews the same day, with
oral, drawn, and manipulative response options always available and explicit
adult directions for every investigation.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish science session routines (question board, tool tray,
  data-table ritual, cleanup and safety check) and baseline each objective's
  entry point.
- Sessions: playful one-on-one probes — ask a question we could test vs. one we
  couldn't; observe an object with a hand lens and describe it; measure length
  and mass with standard tools; sort objects by one property; draw and label a
  plant and an animal life stage; name what plants need to live and grow; sort
  events into quick vs. slow; show safe handling of tools, magnets, and living
  things.
- No new instruction; record observations against the track objectives.

### Unit 01 — Fair tests, measurement, data and explanations (Weeks 3–6)

- **Standards:** science and engineering practices focus; 3-PS2-1 assessment
  boundary (one variable at a time); 3-5-ETS1-3 (fair tests, controlled
  variables, failure points considered).
- **Week 3 goal:** testable vs. untestable questions; observe with hand lens,
  ruler, and balance; record in labeled diagrams and data tables.
- **Week 4 goal:** fair tests — change one thing, keep the rest the same, repeat
  trials; measure length (centimeters/millimeters), mass (grams), and volume
  (milliliters) with standard tools.
- **Week 5 goal:** display the data — bar graphs, pictographs, and line plots
  from the learner's own measurements; read patterns ("how many more," trends).
- **Week 6:** review week — measurement challenge, fair-test redesign game,
  formative check.
- Sessions rotate: investigation lesson → data and measuring practice →
  science reading-and-talk → review game.

### Unit 02 — Balanced and unbalanced forces and motion (Weeks 7–10)

- **Standards:** 3-PS2-1, 3-PS2-2.
- **Week 7 goal:** pushes and pulls; balanced forces leave motion unchanged
  (tug-of-war nobody wins, book resting on a table) while unbalanced forces
  change speed or direction (ball starts rolling, car speeds up downhill).
- **Week 8 goal:** one-variable-at-a-time investigations — change the number,
  size, or direction of pushes and measure how far a toy car rolls; qualitative
  and relative comparisons only, no force numbers.
- **Week 9 goal:** motion patterns — swing, pendulum, ball rolling back and
  forth in a bowl; measure, record, and use the pattern to predict what happens
  next.
- **Week 10:** review week — force-and-motion fair with stations, formative check.
- Sessions rotate: investigation lesson → ramp-and-car data practice →
  reading-and-talk about pushes and pulls in everyday life → review game.
- Safety: ramps built from books and boards at table height; rolling objects
  kept clear of stairs; adult sets up and checks every ramp.

### Unit 03 — Magnetic and electric interactions (Weeks 11–14)

- **Standards:** 3-PS2-3, 3-PS2-4.
- **Week 11 goal:** magnets push and pull without touching; poles attract and
  repel; flipping a magnet changes the direction of the interaction.
- **Week 12 goal:** distance and strength — how many paper clips a magnet chain
  holds at different distances; one magnet vs. two; qualitative comparisons.
- **Week 13 goal:** static electricity — a charged balloon lifts hair and paper;
  ask cause-and-effect questions (what changed? what happened?) and test them.
- **Week 14:** review week — define a simple magnet design problem (a latch to
  keep a box shut; a device to keep two moving objects from touching) with
  criteria; formative check.
- Sessions rotate: investigation lesson → magnet and static-electricity station
  practice → cause-and-effect talk ("when ___, then ___") → review game.
- Safety: large bar magnets only — never small magnets near the mouth, and the
  adult handles any pair that pinches; static electricity only, no mains-powered
  equipment.

### Unit 04 — Life cycles, growth and reproduction (Weeks 15–18)

- **Standards:** 3-LS1-1, 3-LS3-1 (data on inherited traits begins here).
- **Week 15 goal:** life-cycle models — a flowering plant (seed, seedling,
  adult, flower, seed) and an egg-laying animal (butterfly, frog, or chicken);
  every cycle shows birth, growth, reproduction, and death.
- **Week 16 goal:** plant bean seeds; start the growth log (height, leaf count,
  labeled drawings) — this log runs as a background thread through Unit 06 and
  becomes the variation dataset for Unit 05.
- **Week 17 goal:** compare cycles — unique and diverse, with the four stages
  in common; sort organisms by cycle pattern.
- **Week 18:** midyear review (flexible) — first growth-log checkpoint with an
  evidence claim; cumulative re-teach of Units 01–04 highest-need objectives;
  formative check.
- Sessions rotate: investigation or planting lesson → growth-log and measuring
  practice → model-building (cycle wheels and diagrams) → review.
- Living things are handled gently and observed, never harmed; hands washed
  after soil work.

### Unit 05 — Inherited traits, environmental effects and variation (Weeks 19–22)

- **Standards:** 3-LS3-1, 3-LS3-2.
- **Week 19 goal:** inherited traits — offspring resemble parents; find patterns
  in similarities and differences between parents and offspring and among
  siblings (non-human examples: bean plants, classroom pet observations, photo
  sets of animal families).
- **Week 20 goal:** variation in a group — measure the Unit 04 bean seedlings'
  heights, plot the data, and analyze what varies and by how much.
- **Week 21 goal:** environment influences traits — compare seedlings grown with
  less water or less light (adult-set demo tray) to the main tray; use evidence
  to explain stunting; the classic "normally tall plants grown with insufficient
  water are stunted" case.
- **Week 22:** review week — trait sorting and "inherited or environment?"
  evidence talks; formative check.
- Sessions rotate: data-analysis lesson → measuring and plotting practice →
  evidence talk → review game.

### Unit 06 — Habitats, adaptations and survival (Weeks 23–26)

- **Standards:** 3-LS2-1, 3-LS4-1, 3-LS4-2, 3-LS4-3, 3-LS4-4.
- **Week 23 goal:** animal groups that help members survive — herds, flocks,
  schools, hives; construct arguments with evidence (food, defense, coping with
  change).
- **Week 24 goal:** variation advantages — use evidence to explain how
  differences (camouflage coloring, thorns) can help individuals of the same
  species survive and reproduce.
- **Week 25 goal:** habitats past and present — argue with evidence which
  organisms survive well, less well, or not at all in a habitat; fossil data
  (major types, relative ages only) as evidence of organisms and environments
  long ago — e.g., marine fossils found on dry land.
- **Week 26:** review week — make a claim about the merit of a solution to a
  problem caused by a single environmental change (land, water, temperature,
  food, or other organisms; no greenhouse effect or climate change per the
  assessment boundary); formative check.
- Sessions rotate: argument-building lesson → habitat observation and data
  practice → model-building (habitat dioramas, fossil-layer trays) → review.
- Living things observed, never collected; fossil work uses images, casts, or
  purchased replicas — never real collected specimens of unknown provenance.

### Unit 07 — Weather, climate patterns and natural hazards (Weeks 27–30)

- **Standards:** 3-ESS2-1, 3-ESS2-2, 3-ESS3-1.
- **Week 27 goal:** weather data — record temperature, precipitation, and wind
  direction; build tables and bar graphs/pictographs describing typical
  conditions for a season.
- **Week 28 goal:** world climates — obtain and combine information from books
  and media to describe climates in different regions; compare with local data.
- **Week 29 goal:** weather-related hazards — flooding, high wind, lightning;
  build and test model solutions (flood barriers, wind-resistant roofs,
  lightning rods) and make claims about their merit with evidence.
- **Week 30:** review week — weather-station challenge (read instruments, graph
  the week, forecast from the pattern); formative check.
- Sessions rotate: data-collection lesson → graphing and map practice →
  reading-and-talk about climates and hazards → review game.
- Safety: all weather observation from indoors or fair-weather outings; storms
  are studied through media only, never by going out in them.

### Unit 08 — Engineering investigations and evidence-based solutions (Weeks 31–34)

- **Standards:** 3-5-ETS1-1, 3-5-ETS1-2, 3-5-ETS1-3; integrates Units 03
  (magnets), 06 (environment change), and 07 (hazards).
- **Week 31 goal:** define a simple design problem — a need or want with
  specified criteria for success and constraints on materials, time, or cost.
- **Week 32 goal:** generate multiple possible solutions and compare how well
  each is likely to meet the criteria and constraints.
- **Week 33 goal:** plan and carry out fair tests with controlled variables;
  consider failure points; identify what to improve and rebuild.
- **Week 34:** review week — design showcase for the household with test data;
  formative check.
- Sessions rotate: design lesson → build-and-test practice → data-comparison
  talk → review.
- Materials are household and dollar-store safe; the adult previews every build
  for pinch, topple, and small-part risks.

### Weeks 35–36 — Final review (flexible)

- Cumulative investigations and design re-tests across all eight objectives;
  re-teach where evidence shows gaps; final assessment and keys (delivered
  with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with the
fair-test routine from U01, Unit 05 with measuring and plotting from U01/U04,
Unit 08 with the cause-and-effect and evidence frames from U03/U06). Midyear
(Week 18) and final (Weeks 35–36) weeks are full-track reviews. Formative checks
are short written tasks (8–10 items) the adult reviews the same day, alongside
oral, drawn, and manipulative options; each unit's teacher guide specifies what
"ready to move on" looks like. The bean-plant growth log started in Unit 04 runs
as a background thread through Units 05–06, giving spaced retrieval of
measuring, data plotting, and variation thinking; the fair-test routine from
Unit 01 is reused in Units 02, 03, 07, and 08.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/physics_fundamentals.md`, `resources/biology_fundamentals.md` —
  adult background references only; learner language stays qualitative and
  observable. Do not assign to the learner.
- `assignments/science/physical-science-roadmap` — adult-side activity-idea
  inspiration only; never assigned as written.
- Data-table, bar-graph, pictograph, line-plot, and growth-log templates will be
  created once in Units 01 and 04 and reused; do not duplicate per unit.
- Same-grade math and grades 4–8 science are **not** reused for grade-3
  instruction (grade-band mismatch); the math track's 3.MD coverage is a timing
  reference, not source material.

## 8. Safe materials

Household or dollar-store supplies: rulers (centimeters/millimeters) and tape
measures, balance scale, measuring cups and plastic graduated cylinders,
stopwatch, marbles and balls, ramps (books and boards), rubber bands, large bar
magnets, steel paper clips, balloons, wool cloth, bean seeds, potting soil,
cups, hand lenses, non-mercury thermometers (adult-read), homemade rain gauge,
craft materials (straws, tape, paper, cardboard, cotton balls, fabric scraps),
drawing paper and crayons, notebooks and pencils. Safety rules: adult supervises
every investigation and previews every procedure; large bar magnets only — kept
away from the mouth, and the adult handles any magnets that pinch; static
electricity only, no mains-powered equipment; living things are observed gently,
never collected or harmed; hands washed after soil and outdoor work; never look
directly at the sun; weather studied from indoors or in fair weather, storms
through media only; the adult substitutes an observation or simulation
alternative whenever the real thing is unsafe.

## 9. Accessibility supports

- Short written responses (8–10 tasks) reviewed the same day; oral, pointing,
  drawing, and manipulative response modes always available; adult scribes
  dictated observations on request.
- Large-print, high-contrast data tables and word cards; tactile exploration
  built into magnet, material, and tray work for low-vision learners.
- Short sessions with movement breaks; every lesson includes a table variant
  and an active-investigation variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual science word wall; home-language labels welcomed alongside English.
- Sentence frames for evidence talk ("My evidence is ___," "When ___ changed,
  then ___ happened"); every diagram ships with a text-only alternative; color
  is never the only cue in graphs or sorts.
- Hearing support: face the learner when giving directions; visual step cards
  for multi-step investigations and builds.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #19.
- No grade-3-appropriate internal observation scenarios, data sets, or
  investigation guides exist; units will author original small-observation
  scenarios (e.g., one learner's bean-growth log, classroom weather tallies)
  with clearly labeled practice data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- A shared grade-3 measurement/data asset set (ruler-use card, data-table and
  graph templates, growth log, fair-test step cards) should be created once
  (Units 01 and 04) and reused across units rather than regenerated per unit.
- The midyear (Week 18) and final (Weeks 35–36) review assessments and keys
  arrive with R00.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Fair tests, measurement, data and explanations; U02 Balanced and unbalanced
forces and motion; U03 Magnetic and electric interactions; U04 Life cycles,
growth and reproduction; U05 Inherited traits, environmental effects and
variation; U06 Habitats, adaptations and survival; U07 Weather, climate patterns
and natural hazards; U08 Engineering investigations and evidence-based solutions;
R00 diagnostic, midyear/final review, and cumulative assessments with keys. Each
will follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #19 body, comments, and label state re-read 2026-10-03 before claiming;
  no competing claim (0 comments prior to the claim comment); the
  `curriculum-in-progress` label was added by this run and will be removed on
  delivery.
- No `curriculum-in-progress` claims active on any other queue issue at claim
  time; open worker PRs on other tracks (#63–#68, #70–#75) were not touched.
- `curriculum/grade-3/` re-inventoried on `main` @ `247bf79`: only `README.md`
  present; the science folder was created by this run. Existing `stem/` has 0
  Markdown files, as the issue baseline states.
- Standards codes/descriptions verified 2026-10-03 against the California
  Department of Education's official reproduction of the NGSS grade-3 release
  ("NGSS Grade Three Arranged by DCI," revised March 2015, read in full),
  cross-checked with nextgenscience.org topic pages via search results — no
  state adoption, accreditation, or alignment certification claimed. Asterisks
  follow the framework's engineering-integration marking (3-PS2-4, 3-LS4-4,
  3-ESS3-1).
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; the fundamentals guides are grades 4–8 oriented, hence
  teacher-side only. The eight objectives map onto the issue's U01–U08 checklist
  order, kept as the prerequisite sequence (practices and measurement first,
  engineering design last).
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
