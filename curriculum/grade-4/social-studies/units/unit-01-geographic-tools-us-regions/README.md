# Unit 01 — Geographic Tools, U.S. Regions, and Map Evidence

**Grade:** 4 (ages 9–10) · **Subject:** Social Studies · **Track issue:** [#25](https://github.com/murderszn/open-tutor/issues/25)
**Status:** draft — awaiting educator review and merge. **Weeks:** 3–6 of the 36-week track (see [scope-and-sequence](../../scope-and-sequence.md)).
**Session model:** 4 sessions per week, about 35 minutes each (16 sessions total).

## What this unit is about

This unit builds the geographic toolbelt the rest of the year reuses: reading
a map's **title, key, compass rose, scale bar, and grid**; using map evidence
to support a claim ("this map shows…"); naming the **four U.S. Census regions**
(Northeast, Midwest, South, West) and describing each region's environmental
characteristics; locating the **five oceans** and explaining why the United
States recognizes five; naming **state capitals** from data; modeling
**time zones** with a globe and lamp; and reading a real dataset —
`resources/us_states.csv` — to compare states by area, population, and
density. The unit's project, the **Region Data Explorer report**, sends the
learner to investigate five never-visited states with the kept
[Five States report](../../assignments/creed-five-states-report.md) assignment
as its engine, then explain what the data says about regions. The scale habit,
the region-sort routine, and the "claim needs map evidence" rule return in
Units 02, 05, 06, and 08.

## Prerequisites (developmental expectations; re-taught here as needed)

- Read a simple map with title, key, symbols, labels, and a compass rose;
  name the four cardinal directions (grade-3 entry expectations; the
  diagnostic Weeks 1–2 probed these at multi-state scale).
- Compare two numbers and explain which is larger (grade-4 math).
- Write 3–5 sentences in the learner's own words; draw and label with
  clear intent.
- Tell time to the hour on an analog or digital clock.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to:

1. **Use** a map's title, key, compass rose, scale bar, and grid to locate
   places, describe directions, and **estimate** a real distance from a map
   measurement; **support** a geographic claim with the map part that proves
   it (D2.Geo.1.3-5, D2.Geo.3.3-5).
2. **Name** the four U.S. Census regions, **sort** states into regions using
   the dataset's `subregion` column, and **describe** one environmental
   characteristic of each region with evidence (D2.Geo.2.3-5, D2.Geo.3.3-5).
3. **Locate** the five oceans on a world map and **explain** why the United
   States recognizes five; **name** state capitals from the dataset's
   `capital` column (D2.Geo.2.3-5, D2.Geo.10.3-5).
4. **Explain** with the globe-and-lamp model why local times differ around
   the Earth; **use** a U.S. time-zone map to tell the time in a second city
   when given the time in a first city (D2.Geo.2.3-5).
5. **Read** `us_states.csv` columns (`capital`, `population_approx`,
   `area_sq_mi`, `population_density_per_sq_mi`, `statehood_year`,
   `state_fact`); **compare** two states by area, population, and density;
   and **explain** what "approx" means for rounded data (D2.Geo.3.3-5,
   D2.Geo.10.3-5).
6. **Ask** a compelling geographic question about a U.S. region with at
   least two supporting questions (D1.2.3-5).

## Essential question

*How do maps and data help us explain why the four U.S. regions look and feel
so different — and how do we know our answers are right?*

## Vocabulary

**Key (legend)** — the box on a map that explains what each symbol means. ·
**Compass rose** — the star-like drawing on a map that shows directions. ·
**Cardinal directions** — north, south, east, west. · **Intercardinal
directions** — northeast, southeast, southwest, northwest (between the
cardinal directions). · **Scale bar** — the ruler-like drawing on a map that
shows what a measured distance stands for in real life. · **Grid** — the
letter-and-number squares across a map used to name exact spots (like B4).
· **Region** — an area whose places share something in common, such as
location, climate, or landforms. · **Subregion** — a smaller division inside
a region (the dataset's word for each state's region). · **Environment** —
the land, water, weather, plants, and animals of a place. · **Landform** — a
shape of the land, such as a mountain, plain, valley, or coastline. ·
**Ocean** — one of Earth's five very large areas of salt water. · **Sea** —
a smaller area of salt water, often partly enclosed by land. · **Capital** —
the city where a state's government is located. · **Time zone** — a region
of the Earth where clocks are set to the same standard time. ·
**Rotation** — Earth's spin on its axis, which causes day and night. ·
**Approximate (approx)** — close to the real number, but rounded, not exact.
· **Population density** — how crowded a place is: people per square mile.
· **Map evidence** — the specific part of a map (a symbol, label, scale bar,
grid square) that proves a claim about a place.

## Standards and source notes

- Reference framework: the **College, Career, and Civic Life (C3)
  Framework** (NCSS), grades 3–5 band. Codes and descriptions below were
  copied from the track audit's crosswalk, verified against the NCSS C3
  standards page and the framework's 3–5 indicator table (opened and read
  2026-10-03). No state adoption, accreditation, or alignment certification
  is claimed. This track teaches each indicator at the grade-4 mid-band
  level.
- **D2.Geo.1.3-5** — Construct maps and other graphic representations of
  both familiar and unfamiliar places. → Objectives 1, 6 (lessons 01–02;
  project map).
- **D2.Geo.2.3-5** — Use maps, satellite images, photographs, and other
  representations to explain relationships between the locations of places
  and regions and their environmental characteristics. → Objectives 2, 3, 4
  (lessons 03–04; project).
- **D2.Geo.3.3-5** — Use maps of different scales to describe the locations
  of cultural and environmental characteristics. → Objectives 1, 2, 5
  (lessons 02–03, 05; practice sets A, B, D).
- **D2.Geo.10.3-5** — Explain why environmental characteristics vary among
  different world regions. → Objectives 2, 3, 5 (lessons 03–05; project
  reflection).
- **D1.2.3-5** — Identify disciplinary concepts and ideas associated with a
  compelling question that are open to different interpretations. →
  Objective 6 (lesson 03; project questions).
- Four regions: the **U.S. Census Bureau** four-region system (Northeast,
  Midwest, South, West), verified against the Census Bureau's Regions and
  Divisions page (opened 2026-10-11); counts: Northeast 9 states, Midwest
  12, South 16 (plus the District of Columbia), West 13. These match the
  `subregion` column of `resources/us_states.csv` ("United States
  Northeast", etc.). Many children's videos teach a *five*-region system
  (splitting Southeast/Southwest) — the unit names that difference out
  loud.
- Five oceans: **NOAA** ("How many oceans are there?"; opened 2026-10-11) —
  historically four named oceans (Atlantic, Pacific, Indian, Arctic), but
  most countries, including the United States, now recognize the **Southern
  (Antarctic)** Ocean as the fifth. Some older maps show four; the unit
  teaches five.
- Time zones: the contiguous United States spans four time zones (Eastern,
  Central, Mountain, Pacific); Alaska and Hawaii add two more. The unit's
  rule of thumb — each zone west is one hour earlier — is verified against
  the Learning Resources time-zones explainer (opened 2026-10-11). Daylight
  saving is named as a complication the learner must check in a current
  source, not memorized.
- Dataset: `resources/us_states.csv` (main). The unit's instructions name
  exact columns and note that `population_approx` values are rounded
  approximations, not exact counts (verified 2026-10-11; see Lesson 05).

## Pacing (16 sessions, 4 per week)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Use geographic tools: title, key, compass rose, scale, grid; back claims with map evidence | S1: [Lesson 01](lessons/lesson-01-reading-maps-like-a-geographer.md) part 1 — map parts and directions · S2: Lesson 01 part 2 — map evidence claims; [Lesson 02](lessons/lesson-02-scale-grids-and-direction.md) part 1 — scale bars · S3: Lesson 02 part 2 — grids; investigation: find two cities with a scale bar and a grid, justify with map evidence · S4: [practice set A](practice.md#week-3--map-tools-and-map-evidence) + review and check |
| 4 | Name the four U.S. regions; describe each region's environment with evidence | S1: [Lesson 03](lessons/lesson-03-us-regions-and-their-environments.md) part 1 — regions overview with the generated illustration · S2: Lesson 03 part 2 — sort states into regions with the `us_states.csv` `subregion` column · S3: Lesson 03 part 3 — region profile task (environment, landmark, one fact per region) · S4: [practice set B](practice.md#week-4--us-regions) + review and check |
| 5 | Locate oceans and seas; name capitals; model time zones | S1: [Lesson 04](lessons/lesson-04-oceans-seas-capitals-time-zones.md) part 1 — five oceans, named seas, the five-ocean convention · S2: Lesson 04 part 2 — capitals from the dataset; globe-and-lamp day/night model ([time-zones-explanation.md](../../assignments/time-zones-explanation.md)) · S3: Lesson 04 part 3 — investigation: same moment, three cities — what time is it and why? · S4: [formative quiz](assessments/week-05_quiz.md) + review |
| 6 | Compare regions with data; begin the five-states report | S1: [Lesson 05](lessons/lesson-05-comparing-regions-with-data.md) part 1 — dataset launch: columns, "approx", density · S2: Lesson 05 part 2 — compare two states by area, population, density (worked) · S3: [project](project.md) work time — begin the five-states investigation · S4: unit review + [unit assessment](assessments/unit-assessment.md) |

Each lesson is written for one or two 35-minute sessions; the adult adjusts
to the learner's pace. Sessions never repeat a bare "practice" label: each
names the activity and its success criterion.

## Files in this unit

- `README.md` (this file) — overview, pacing, objectives, vocabulary,
  standards notes.
- `lessons/` — five fully written lessons with worked examples, guided and
  independent practice, applications, exit checks, supports, and
  extensions.
- `practice.md` — weekly practice sets (A–D) with hints; answers held in
  `answer-key.md`.
- `project.md` — the Region Data Explorer investigation: five never-visited
  states, dataset comparison table, region map, compelling questions,
  rubric.
- `assessments/week-05_quiz.md` — formative quiz (text-only alternatives
  for image items).
- `assessments/unit-assessment.md` — culminating assessment matched to the
  six objectives.
- `teacher-guide.md` — session-by-session guidance, misconception notes,
  reteaching guidance, readiness signals.
- `answer-key.md` — every question solved independently and reconciled with
  the student materials. **Learner materials never contain answers.**
- `resource-pack.md` — verified videos, web references, focused queries,
  and task-to-resource mapping (check date: 2026-10-11).
- `assets/` — one genuinely generated illustration
  (`four-us-regions-landscapes.png`), inspected before linking, used in
  Lesson 03, practice set B, the quiz, and the assessment, with alt text,
  caption, generation record, and a text-only alternative in every use.
