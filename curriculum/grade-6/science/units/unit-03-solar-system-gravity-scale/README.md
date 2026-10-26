# Unit 03 — Solar System, Gravity, and Scale

**Grade:** 6 · **Subject:** Science · **Track issue:** [#31](https://github.com/murderszn/open-tutor/issues/31)
**Status:** draft — awaiting educator review and merge. **Weeks:** 11–14 of the 36-week track (see [scope-and-sequence](../../scope-and-sequence.md)).
**Session model:** 4 sessions per week, about 45 minutes each (16 sessions total).

## What this unit is about

Textbook pictures of the solar system lie to you — politely, and on purpose.
They draw the planets big enough to see and close enough to fit on a page, so
a learner can easily walk away believing Jupiter sits just past Mars and is
only a little bigger than Earth. This unit replaces that picture with two
honest ones: a **gravity model** that explains why the planets stay in orbit
at all, and **scale models** built from real numbers that show how enormous
the gaps between planets really are.

The unit runs on one dataset: the repository's `solar_system_planets.csv`
(eight planets, with mean distance from the Sun, orbital period, equatorial
diameter, and surface gravity). From it the learner computes ratios, orders
planets by size, distance, and year length, and discovers the patterns
themselves: the four small rocky planets huddle close to the Sun, the four
giants live far out, and the farther a planet is, the longer its year. Then
the learner builds the models — planet-size circles on a paper strip, and a
playground distance line — and learns the unit's central discipline: **one
model cannot show both true sizes and true distances in a room**, so every
model must carry a limits card saying what it distorts.

Two misconceptions get direct treatment: that gravity is something Earth
alone has (it is a pull between any two masses, and the Sun's pull is what
holds the whole system together), and that an orbit is a track planets ride
on (an orbit is a continuous fall around the Sun, with forward motion keeping
the fall from ending in a crash).

## Prerequisites (earlier-unit skills re-used; re-taught as needed)

- Testable questions, labeled data tables with units, repeated trials (Unit 01).
- Line and bar graphs with labeled axes; describing patterns without
  overclaiming (Unit 01).
- Models include some things and leave others out; a model is not the real
  system (Units 01–02).
- Rotation vs. revolution; Earth's year as one revolution around the Sun
  (Unit 02).
- Safety: an adult supervises every investigation; **never look directly at
  the Sun**; the ball-and-string gravity demo uses soft balls only, with
  clear space around the learner.

## Objectives (measurable, adult-assessed)

By the end of the unit the learner will be able to (mapped to the track
objectives in parentheses):

1. **Name the eight planets in order from the Sun** and **classify** them as
   rocky (Mercury, Venus, Earth, Mars) or giant (Jupiter, Saturn, Uranus,
   Neptune); locate the asteroid belt between Mars and Jupiter; describe
   dwarf planets as enrichment only, not as a ninth planet.
   (Track objective 7)
2. **Model gravity's role in the solar system:** explain that the Sun's
   gravitational pull holds the planets in orbit, that gravity acts between
   any two masses (not only on Earth), and that an orbit is forward motion
   combined with a continuous fall toward the Sun; use the model to predict
   qualitatively what happens when mass or distance changes.
   (Track objective 6)
3. **Analyze the planet dataset:** compute size, distance, and year-length
   ratios; order planets by each quantity; state the patterns the data show
   (giants are farther out; farther planets have longer years) with the
   numbers as evidence, without memorizing the table.
   (Track objective 7)
4. **Build two honest scale models:** a planet-size strip at Earth = 1 cm
   (Jupiter ≈ 11 cm, Mercury ≈ 0.4 cm, the Sun ≈ 109 cm) and a distance line
   at 1 AU = 10 m (Neptune ≈ 300 m); explain why a single true-scale model
   (Earth = 1 cm) would put Neptune about 3.5 km away and therefore cannot
   fit in a room.
   (Track objective 7)
5. **Audit the unit's models** (generated orbit illustration, size strip,
   distance line, ball-and-string demo): name what each **includes and
   leaves out** — especially that textbook and illustration scales are
   distorted — and revise a claim when a model is overextended.
   (Track objective 3)

## Essential question

*What holds the solar system together, and why does every picture of it have
to lie about size or distance — and how can you tell which lie a picture is
telling?*

## Vocabulary

**Solar system** — the Sun and everything held in orbit around it by the Sun's
gravity: planets, dwarf planets, moons, asteroids, and comets.
**Orbit** — the curved path of one body around another; for a planet, one full
trip around the Sun. **Gravity** — a pull between any two masses; the pull
that holds planets in orbit. **Mass** — how much matter a body contains;
unlike weight, it does not change when you move to another planet.
**Weight** — the pull of gravity on a mass, measured in newtons (N); it
changes from planet to planet. **Astronomical unit (AU)** — the mean
Earth–Sun distance, about 149.6 million km; the unit's yardstick for solar
system distances. **Scale model** — a model built so that sizes or distances
keep the same ratios as the real thing. **Rocky planet** — a small, dense
planet made mostly of rock and metal (Mercury, Venus, Earth, Mars).
**Giant planet** — a much larger planet far from the Sun (Jupiter, Saturn,
Uranus, Neptune). **Dwarf planet** — a round body orbiting the Sun that has
not cleared its neighborhood of other objects (Pluto is the best-known
example; enrichment only in this unit). **Asteroid belt** — a band of rocky
bodies orbiting mostly between Mars and Jupiter. **Orbital period** — the
time one full orbit takes; a planet's "year."

## The dataset used in this unit

From `resources/solar_system_planets.csv` (real, rounded public data; values
checked 2026-10-25 against the NASA Planetary Fact Sheet — see
[Standards and sources](#standards-and-sources)). The source file also lists
a moon-count column; moon counts change as new moons are confirmed (the
file's Saturn count, 146, is already behind current tallies), so **this unit
does not use or test moon counts**. Distances are mean distances; diameters
are equatorial diameters.

| Planet | Mean distance from Sun (million km) | Orbital period (days) | Equatorial diameter (km) | Surface gravity (m/s²) |
|---|---|---|---|---|
| Mercury | 57.9 | 88 | 4,879 | 3.7 |
| Venus | 108.2 | 225 | 12,104 | 8.87 |
| Earth | 149.6 | 365 | 12,742 | 9.81 |
| Mars | 227.9 | 687 | 6,779 | 3.71 |
| Jupiter | 778.6 | 4,333 | 139,820 | 24.79 |
| Saturn | 1,433.5 | 10,759 | 116,460 | 10.44 |
| Uranus | 2,872.5 | 30,687 | 50,724 | 8.69 |
| Neptune | 4,495.1 | 60,190 | 49,244 | 11.15 |

## Lessons (5)

1. [The neighborhood: eight planets in order](lessons/lesson-01-solar-system-layout.md) —
   planet order, rocky vs. giant groups, the asteroid belt, reading the
   dataset table.
2. [Gravity holds it together](lessons/lesson-02-gravity-holds-it-together.md) —
   gravity between any masses, the Sun's dominant pull, orbit as
   falling-around, the ball-and-string model.
3. [How big? Planet sizes at true scale](lessons/lesson-03-scale-planet-sizes.md) —
   diameter ratios, the Earth = 1 cm size strip, the 109 cm Sun problem.
4. [How far? Orbital distances at true scale](lessons/lesson-04-scale-orbital-distances.md) —
   the astronomical unit, the 1 AU = 10 m playground line, the 3.5 km truth
   about a single-scale model.
5. [Review: what the models show and what they hide](lessons/lesson-05-review-gravity-and-scale.md) —
   model audit across the unit, misconception clinic, gravity-and-scale
   synthesis.

## 16-session pacing

| Week | Sessions | What happens | Success criterion |
|---|---|---|---|
| 11 | S1–S4 | **The neighborhood.** S1: Lesson 01. S2: dataset reading — order, groups, belt (guided table work). S3: guided practice + orbit-illustration activity (Lesson 01 image task). S4: applied ordering task + exit check. | Learner names the eight planets in order and sorts them rocky vs. giant with reasons. |
| 12 | S5–S8 | **Gravity.** S5: Lesson 02. S6: ball-and-string lab — the learner varies swing speed and string length and records what happens (U01 fair-test skill). S7: guided practice + weight-on-other-planets reasoning. S8: project launch (exhibit plan + scale choices) + review. | Learner explains orbits as falling-around and predicts gravity effects of mass/distance changes. |
| 13 | S9–S12 | **Scale.** S9: Lesson 03 (size strip build). S10: Lesson 04 (distance line build or paper number line). S11: scale-properties data task — ratios, orderings, patterns (practice Sets C–D). S12: project work (strip + line + exhibit card drafts). | Learner builds both scale models with correct ratios and states what each distorts. |
| 14 | S13–S16 | **Review.** S13: Lesson 05 + [formative quiz](assessments/week-14_quiz.md). S14: project showcase — defend the exhibit and its limits card. S15: [unit assessment](assessments/unit-assessment.md). S16: assessment debrief, misconception re-check, U04 look-ahead (Earth materials are the rocky-planet story up close). | All five objectives demonstrated; model limits named unprompted. |

Sessions S6 (fair test) and S11 (data task) reprise Unit 01 skills by design;
S16 feeds forward into Unit 04's rock and mineral work.

## Investigation project

[Build a two-scale solar system exhibit](project.md): the learner builds a
planet-size strip and a distance line, writes a gravity explanation for a
visitor, and attaches a model-limits card to each model. Full materials,
steps, deliverables, and rubric in the project file.

## Assessments

- [Week-14 formative quiz](assessments/week-14_quiz.md) — quick check on all
  five objectives; used to reteach before the unit assessment.
- [Unit assessment](assessments/unit-assessment.md) — culminating assessment
  with selected-response, constructed-response, data, and model items matched
  to the objectives.
- [Teacher guide](teacher-guide.md) — misconception notes, pacing guidance,
  and reteaching moves, separate from student materials.
- [Answer key](answer-key.md) — worked solutions for every practice item,
  quiz question, assessment task, and project criterion. Every item was solved
  independently and reconciled with the key.

## Resource pack

[resource-pack.md](resource-pack.md) — internal guide excerpts, focused
queries, video search links (labeled), reputable web references (checked
2026-10-25), task-to-resource mappings, and the dataset note on moon counts.

## Standards and sources

- **NGSS MS-ESS1-2** (grades 6–8 band): "Develop and use a model to describe
  the role of gravity in the motions within galaxies and the solar system."
  Clarification: emphasis is on gravity as the force that holds together the
  solar system and Milky Way galaxy and controls orbital motions within them.
  Assessment boundary: no Kepler's laws of orbital motion, no apparent
  retrograde motion. Code, wording, clarification, and boundary verified
  2026-10-25 against the NSTA NGSS listing and the California Department of
  Education's official NGSS reproduction. No claim of state adoption or
  accreditation is made.
- **NGSS MS-ESS1-3** (grades 6–8 band): "Analyze and interpret data to
  determine scale properties of objects in the solar system." Clarification:
  emphasis is on analysis of data from Earth-based instruments, space-based
  telescopes, and spacecraft to determine similarities and differences among
  solar system objects; scale properties include sizes of layers, surface
  features, and orbital radius. Assessment boundary: no recalling facts about
  properties of the planets. Verified 2026-10-25 from the same two sources.
  This unit therefore assesses **patterns and reasoning from the dataset**,
  never memorized planet facts.
- Planet values in the table above: rounded from
  `resources/solar_system_planets.csv`; cross-checked 2026-10-25 against
  the NASA Planetary Fact Sheet (nssdc.gsfc.nasa.gov/planetary/factsheet).
  Agreement is within rounding for every student-table value (diameters are
  equatorial/mean diameters as listed in the file; the fact sheet's
  equatorial diameters differ by under 3% where mean vs. equatorial values
  differ, e.g. Jupiter 139,820 km mean vs. 142,984 km equatorial — the unit
  uses the file's values consistently and never tests a single diameter to
  the kilometre). Surface-gravity values match the fact sheet to the
  precision shown. Moon counts are excluded for the dated-data reason given
  above (the fact sheet now lists Saturn at 274 moons vs. the file's 146).
- The Sun's diameter, about 1,392,700 km (≈ 109 Earth diameters), and the
  "more than 99% of the system's mass" statement are the standard reference
  values used by NASA/University of Colorado solar-system scale materials
  (checked 2026-10-25).
- Internal reuse: `resources/astronomy_fundamentals.md` (Sun, planet groups,
  star life cycle — excerpted at grade level, never assigned whole; its
  "Mercury: no atmosphere" simplification is not used — Mercury keeps an
  extremely thin exosphere); `resources/physics_fundamentals.md` (mass vs.
  weight, gravity near Earth's surface); `resources/solar_system_planets.csv`
  (the unit dataset); the track's scope-and-sequence U03 weekly goals and
  standards crosswalk.

## Generated and drawn assets

- `assets/solar-system-orbits-top-view.png` — **generated raster image**
  (Lesson 01 activity; alt text, caption, text-only alternative, and
  generation record in `assets/README.md`). The illustration is explicitly
  **not to scale** — its outer planets are drawn large for visibility.
- `assets/planet-diameter-bars.svg` — deterministic diameter-ratio bar chart
  (Lesson 03; Earth = 1, values from the dataset table).
- `assets/orbit-distance-number-line.svg` — deterministic AU number line,
  0–30 AU (Lesson 04; values from the dataset table).
