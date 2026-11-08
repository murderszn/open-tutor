# Project — Harbor Navigation, Parametric Crossing, and a Polar Signal Pattern

**Deliverable:** one written report (paper or document) plus a Desmos
check: the three parts below, each with a labeled sketch or graph, all
directions stated with their reference, all units stated. The adult
reviews the report against the rubric below; the learner self-checks
against the rubric before submitting.

**Situation (fictional practice data — not measurements from a real
harbor).** A rescue boat must cross a straight channel to a dock
directly north of its starting point. The channel is 1.2 km wide
(north–south crossing). The boat's speed through the water is
10 km/h. A current flows due east at 6 km/h across the whole channel.
A shore antenna at the dock broadcasts a signal whose polar pattern is
`r = 5 + 3 cos θ` (arbitrary signal units). All numbers in this brief
are given; nothing is to be read off the Lesson 02 illustration, which
carries no measurements.

## Part A — Harbor navigation with vectors (Lessons 01–02)

1. If the boat steers due north, find its velocity over ground as a
   vector, its speed, and its actual direction (state the reference).
   How far east of the dock does it land, and how long does the
   crossing take?
2. Find the heading the boat must steer to land exactly at the dock,
   and its speed over ground on that heading. Sketch the vector
   triangle (boat velocity, current, resultant) with labels.
3. State one assumption of this model that would fail in a real
   channel (for example, a current that varies across the channel),
   and how the answer would change qualitatively if it failed.

## Part B — The crossing as a parametric model (Lesson 03)

1. Using the heading from Part A, question 2, write parametric
   equations `(x(t), y(t))` for the boat's position over ground, with
   `x` east and `y` north in km, `t` in hours, starting at `(0, 0)`.
   State the `t`-interval for the crossing.
2. Eliminate the parameter and give the rectangular equation of the
   path with its domain. Explain what the parametric form tells you
   that the rectangular equation alone does not (at least: time to
   cross, and position at a given time).
3. Give the boat's position at `t = 0.05` h (3 minutes) from your
   parametric equations, and check it against the rectangular equation.

## Part C — The polar signal pattern, and a complex check (Lessons 04–06)

1. For `r = 5 + 3 cos θ`, classify the curve (family, symmetry, zeros
   or absence of zeros, maxima), and sketch it, labeling the direction
   of strongest and weakest signal and their values.
2. The dock lies due north of the antenna. In polar terms, which
   direction is that, and what signal strength does the pattern give
   there? Which direction gives the strongest signal, and by what
   factor does it exceed the dock-direction signal?
3. **Complex check.** Write the complex number whose modulus is the
   maximum signal strength and whose argument is the direction of
   maximum signal, in both polar and rectangular form. Then multiply
   it by `cis 90°` geometrically and interpret the result as a
   rotation of the maximum-signal direction. (This is a check of the
   geometry, not a claim about how antennas work.)

## Rubric (40 points)

| Row | Full credit | Partial credit |
|---|---|---|
| A1 — drifted landing (8) | Correct resultant vector, speed, direction with reference, eastward landing distance, and crossing time, all with units | Correct vector but missing direction reference or time (at most 5); arithmetic slip with method visible (at most 5) |
| A2 — corrective heading (8) | Correct heading angle with reference, ground speed, and labeled vector triangle | Correct angle but no sketch, or sketch unlabeled (at most 5) |
| A3 — assumption (4) | One stated assumption plus a qualitative consequence if it fails | Assumption stated without consequence (at most 2) |
| B1 — parametric model (6) | Correct `(x(t), y(t))` with units, origin, and crossing `t`-interval | Correct path but wrong interval or missing units (at most 4) |
| B2 — elimination + interpretation (6) | Correct rectangular equation with domain, plus time/position information the rectangular form alone lacks | Equation without domain, or interpretation missing (at most 3) |
| B3 — timed position check (2) | Correct position at 3 minutes, checked against the rectangular equation | Position without the check (1) |
| C1 — pattern classification + sketch (4) | Correct family/symmetry/zeros/maxima and a labeled sketch | Classification without sketch labels (at most 2) |
| C2 — dock direction + comparison (2) | Correct dock-direction strength and strongest-direction factor | One of the two correct (1) |
| Total | **40** | |

**Scoring note for the adult:** a direction answer without a stated
reference earns at most half credit for that row, even if the number
is correct — the reference is part of the mathematics in this unit.
A report that reads any number off the Lesson 02 illustration instead
of computing it from this brief's numbers loses the affected row
entirely; the illustration is qualitative by design.
