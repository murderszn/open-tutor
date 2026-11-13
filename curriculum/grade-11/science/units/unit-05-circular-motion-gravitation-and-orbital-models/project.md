# Project — The Orbit Investigation

**Unit 05 · Sessions S16–S17 · ~50 minutes each**
**Standards:** unit objective 6 (track objective 12); HS-PS2-4,
HS-PS3-5

## The question

Do the real planets obey Kepler's third law — and does the
"Gravity and Orbits" simulation behave the way Newton's law
says it should?

**Testable question (write your own version before starting):**
"For the eight planets, is `T² / r³` the same within the rounding
of the dataset, and does changing a planet's distance in the
simulation change its period in the direction Kepler's third law
predicts?"

## Materials

- Notebook, pencil, calculator, graph paper (or a spreadsheet).
- The planet dataset: `resources/solar_system_planets.csv`
  (columns: `distance_from_sun_million_km`,
  `orbital_period_days`; values are real reference data).
- PhET Interactive Simulations, "Gravity and Orbits"
  (<https://phet.colorado.edu/en/simulations/gravity-and-orbits>),
  free, no account. The adult previews it first and checks it
  runs on the learner's device.
- Constants: `G = 6.67430 × 10⁻¹¹ m³ kg⁻¹ s⁻²`,
  `M_sun = 1.989 × 10³⁰ kg`.

## Safety and supervision

The adult approves the procedure before the learner begins. No
bench apparatus is needed: this investigation is a simulation
plus a dataset analysis, which is the safe alternative the track
uses whenever a procedure would need hazardous materials or
unsupervised equipment. If the simulation will not run, use the
observation alternative below — do not skip the investigation.

## Part 1 — Simulation exploration (S16, first half)

1. Open "Gravity and Orbits" (adult previews first). Choose the
   "Model" view with Earth and the Sun. Turn on the gravity-force
   arrow, the velocity arrow, and the path trace.
2. Run the simulation with the default circular orbit. Record:
   the shape of the path, the direction of the velocity arrow
   relative to the path, and the direction of the gravity arrow.
3. Change one variable at a time and record what happens:
   (a) increase Earth's speed — what happens to the orbit?
   (b) decrease Earth's speed — what happens?
   (c) increase the Sun's mass — what happens to Earth's path
   at the same speed?
   (d) move Earth farther from the Sun at the same speed — what
   happens?
4. For each change, write one sentence linking the observation to
   `F_g = G M m / r²` or `v = √(G M / r)`. Record the simulation
   settings you used so the run could be repeated.

## Part 2 — Kepler's third law from real data (S16, second half)

5. Copy the dataset table into your notebook (planet, distance
   in million km, period in days). Convert distance to meters and
   period to seconds.
6. For each planet, compute the orbital speed `v = 2π r / T`
   and the ratio `T² / r³` in SI units (s²/m³). Show one full
   worked row (Earth) with every substitution; the other seven
   rows may show the result with the formula noted.
7. Compute the predicted constant `4π² / (G M_sun)` and compare
   it with your eight ratios. Record the largest percentage
   difference from the prediction.
8. Plot `T²` (vertical) against `r³` (horizontal) for the eight
   planets, or plot `log T` against `log r`. Describe the shape:
   is it the straight line Kepler's law predicts? Note which
   planet sits farthest from the line and by how much.

## Part 3 — Analysis and conclusion (S17)

9. Answer the testable question with evidence: quote your eight
   ratios, the predicted constant, and the largest percentage
   difference. State whether the data support Kepler's third law
   and within what tolerance.
10. Error and model-limits discussion (at least three points):
    - Rounding in the dataset (distances to 0.1 million km,
      periods to whole days) — how big an effect can it have?
      (Check Saturn, the largest outlier.)
    - The circular-orbit approximation: real orbits are ellipses,
      and the dataset gives mean distances. Which planets does
      this affect most?
    - The two-body approximation: the Sun's mass dominates, but
      the planets also pull on each other and on the Sun. Why is
      ignoring that acceptable here, and where would it fail?
11. Write the conclusion: one paragraph stating what you found,
    what it means for Newton's law of gravitation, and what you
    would change if you repeated the investigation (for example,
    more precise data from the JPL Planetary Physical Parameters
    table, or an elliptical-orbit simulation run).

## Deliverables

1. The testable question and the variables (independent:
   distance/mass/speed changed in the sim; dependent: orbit
   shape and period; controlled: the other settings).
2. Simulation observation table (four changes, each with the
   observed outcome and the one-sentence physics link).
3. Dataset table: all eight planets with `r` (m), `T` (s),
   `v` (km/s), and `T² / r³` (s²/m³), plus the predicted
   constant and the largest percentage difference.
4. The `T²` vs. `r³` (or log–log) graph with labeled axes and
   units.
5. The written analysis: error discussion, model limits, and the
   one-paragraph conclusion.

## Observation alternative (if the simulation will not run)

Use the dataset alone, plus a structured observation: for each
planet, record its distance, period, and computed speed, and
answer the same testable question from the data. Add a second
dataset check: compute `T² / r³` for Earth's Moon
(`r = 3.844 × 10⁸ m`, `T = 27.3 days`) and explain why its ratio
is different — because the central mass is Earth, not the Sun,
so the constant `4π² / (G M)` changes. (Expected Moon ratio:
about `9.9 × 10⁻¹⁴ s²/m³`, versus `2.97 × 10⁻¹⁹ s²/m³` for
Sun-orbiting bodies — a factor of about `3.3 × 10⁵`, which is
`M_sun / M_earth`.)

## Rubric

| Criterion | Excellent (4) | Good (3) | Developing (2) | Beginning (1) |
|---|---|---|---|---|
| Testable question and variables (10%) | Question is testable; all variables named correctly | Question testable; most variables named | Question vague or variables partly named | No testable question |
| Simulation observations (20%) | All four changes recorded with settings; each linked to the correct law | Three–four changes recorded; links mostly correct | One–two changes; links missing or wrong | No systematic sim record |
| Dataset calculations (30%) | All eight planets correct with units; one full worked row; predicted constant computed | Seven–eight correct; minor unit or rounding slips | Four–six correct; method partly shown | Fewer than four correct or no method |
| Graph (15%) | Axes labeled with units; points plotted; straight-line pattern described | Axes labeled; points plotted; pattern named | Graph present but axes or points incomplete | No graph |
| Error and model limits (15%) | Three distinct, specific points with numbers where possible | Two–three points, mostly specific | One vague point | No error discussion |
| Conclusion (10%) | Answers the question with quoted evidence and a repeat-improvement | Answers with evidence | Answers without evidence | No conclusion |

**Scoring:** 24 points total (6 criteria × 4 points). 20+ is on
track; below 16, re-teach the Kepler derivation (Lesson 05) and
redo Part 2 with the adult before moving on. (The percentages show
each criterion's emphasis; they are not multiplied into the score.)

## Teacher notes (summary; full notes in `teacher-guide.md`)

- The predicted constant is `2.97 × 10⁻¹⁹ s²/m³`; learner ratios
  should land between `2.93 × 10⁻¹⁹` (Saturn) and
  `2.98 × 10⁻¹⁹` (Mercury, Venus, Mars, Neptune).
- The Moon check in the observation alternative is a strong
  discriminator: a learner who explains the `M_sun / M_earth`
  factor understands the derivation; one who calls the Moon's
  ratio "wrong" has missed that the constant depends on the
  central mass.
- Common slip: forgetting to convert days to seconds and million
  km to meters before computing `T² / r³`. Require the converted
  columns in the table.
