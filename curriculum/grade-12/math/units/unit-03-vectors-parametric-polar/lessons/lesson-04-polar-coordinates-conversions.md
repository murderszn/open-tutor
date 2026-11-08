# Lesson 04 — Polar Coordinates: One Point, Infinitely Many Names

**Goal:** Convert points and equations between polar and rectangular
forms, and handle negative `r` and quadrant placement correctly.

**Time:** ~50 minutes. **Materials:** polar graph paper or Desmos in
polar mode, the deterministic polar grid in
`../assets/vector-polar-diagram.svg`.

**Readiness check (5 minutes):** Plot `(3, 4)` in rectangular
coordinates. Its distance from the origin is 5; its angle from the
positive x-axis is `arctan(4/3) ≈ 53.13°`. Polar coordinates simply
name the point by those two numbers: `(5, 53.13°)`. That is the whole
idea — and the complications are all in the details.

## 1. The polar frame

Fix a **pole** (the origin) and a **polar axis** (the positive x-axis).
A point is named `(r, θ)` where `r` is its signed distance from the
pole and `θ` is the angle from the polar axis, counterclockwise
positive. Conversion formulas, which are right-triangle trigonometry
in disguise:

Polar to rectangular: `x = r cos θ`, `y = r sin θ`.

Rectangular to polar: `r = √(x² + y²)` (taking `r ≥ 0` by convention),
`tan θ = y/x`, with `θ` placed in the point's quadrant.

Three consequences that surprise first-time users, all worth stating
plainly:

1. **A point has infinitely many polar names.** `(r, θ)`,
   `(r, θ + 2π)`, `(r, θ − 2π)`, and `(−r, θ + π)` all name the same
   point. Rectangular coordinates give one name per point; polar
   coordinates give infinitely many. That is a feature (it makes some
   equations short), not a bug — but an answer in polar form must be
   checked as a *point*, not as a pair of numbers.
2. **Negative `r` walks backwards.** `(−2, π/6)` does not sit at
   angle π/6 with a negative distance (there is no such place). It
   sits 2 units from the pole in the direction opposite π/6 — angle
   `π/6 + π = 7π/6`. Plot the angle, then walk the other way.
3. **The arctangent quadrant trap returns.** `tan θ = y/x` alone cannot
   distinguish `(3, 3)` from `(−3, −3)`: both give `tan θ = 1`. The
   point's quadrant decides, exactly as in Lessons 01–02. Write the
   quadrant before the angle.

## 2. Worked examples

**Example 1 — polar point to rectangular, exact values.**
`(3, π/3)`: `x = 3 cos(π/3) = 3(1/2) = 3/2`,
`y = 3 sin(π/3) = 3(√3/2) = 3√3/2`. So `(3, π/3) = (3/2, 3√3/2)`.

With negative `r`: `(−2, π/6)`: `x = −2 cos(π/6) = −2(√3/2) = −√3`,
`y = −2 sin(π/6) = −2(1/2) = −1`. So `(−2, π/6) = (−√3, −1)`, which
is the same point as `(2, 7π/6)` — check: `2 cos(7π/6) = 2(−√3/2) = −√3`,
`2 sin(7π/6) = 2(−1/2) = −1`. Two names, one point.

**Example 2 — rectangular point to polar, with quadrant care.**
`(−3, 3)`: `r = √(9 + 9) = 3√2`. `tan θ = 3/(−3) = −1`, so the
reference angle is π/4. The point is in Quadrant II, so
`θ = π − π/4 = 3π/4`. Answer: `(3√2, 3π/4)`. A calculator answering
`−π/4` has given the reference angle's sign, not the point's angle.

`(2, −2)`: `r = 2√2`, reference angle π/4, Quadrant IV, so
`θ = −π/4` (or `7π/4`). Both are correct; state one and note the other
exists.

**Example 3 — polar equation to rectangular equation (and a named
curve).** Convert `r = 4 cos θ`.

Multiply both sides by `r` (the standard move, since `r²`, `r cos θ`,
and `r sin θ` are the quantities with rectangular names):
`r² = 4r cos θ`, so `x² + y² = 4x`. Complete the square:
`(x − 2)² + y² = 4`. This is a circle of radius 2 centered at `(2, 0)`.
Note what the polar form hides and reveals: `r = 4 cos θ` is shorter
to write than `(x − 2)² + y² = 4`, and it shows immediately that the
circle passes through the pole (at `θ = π/2`, `r = 0`) — but the
center and radius are clearer in rectangular form. Neither form is
"the" equation; translation is the skill.

Two more conversions to keep in the notebook:

- `x² + y² = 9` becomes `r² = 9`, i.e. `r = 3` (with `r ≥ 0`): a circle
  of radius 3 centered at the pole, in one symbol.
- `y = 2x` becomes `r sin θ = 2r cos θ`, so (for `r ≠ 0`)
  `tan θ = 2`: a line through the pole at angle `arctan 2`, plus the
  pole itself. In polar form the line is an angle, not a slope.

## 3. Guided practice

1. Convert `(4, 5π/6)` and `(−3, π/4)` to rectangular coordinates
   exactly.
2. Convert `(−4, 0)` and `(0, −5)` to polar coordinates with `r > 0`.
   (These edge cases — points on the axes — are where quadrant rules
   get skipped and answers go wrong.)
3. Convert `r = 3 sin θ` to a rectangular equation, complete the
   square, and name the curve with its center and radius.
4. Give three polar names for the point `(2, π/3)`, one of them with
   negative `r`.

## 4. Independent practice

1. Convert `(2√3, 2)` to polar form with `r > 0` and `0 ≤ θ < 2π`.
2. Convert the rectangular equation `x² + y² = 6y` to polar form and
   simplify.
3. Convert `r = 2 sec θ` to rectangular form and name the curve.
   (Hint: `sec θ = 1/cos θ`; multiply by `cos θ`, not by `r`.)
4. **Error analysis.** A classmate converts `(−1, −1)` to polar and
   reports `(√2, π/4)`. Identify the error, give the correct polar
   form, and state the rule that prevents it.

## 5. Application

A radar station at the pole tracks a ship. At noon the ship is at
polar coordinates `(10, 30°)` (distance in km). By 1 p.m. it is at
`(10, 120°)`. Find both positions in rectangular coordinates, the
distance the ship traveled (as the crow flies), and its displacement
vector from noon to 1 p.m. Then explain why the ship's distance from
the station never changed even though it moved — and why a polar
description makes that fact obvious while a rectangular one hides it.

## 6. Exit check

Convert the point `(−2√3, 2)` to polar form with `r > 0`, and convert
the equation `r = −4 sin θ` to rectangular form, naming the curve.
(Check your angle against the quadrant before writing it down.)

## Supports and extensions

- **Support:** Plot every polar point by hand first: draw the angle,
  then walk `r` units — backwards if `r` is negative. Technology
  second, as a check.
- **Alternate response mode:** An angle answer may be given in degrees
  or radians, as long as the unit is stated; a mixed answer with no
  unit is incomplete.
- **Extension:** Prove that `(r, θ)` and `(−r, θ + π)` name the same
  point using the conversion formulas and the identities
  `cos(θ + π) = −cos θ`, `sin(θ + π) = −sin θ` (Unit 02). Then explain
  why a polar equation can produce the same point for two different
  `θ` values — the seed of Lesson 05's petal counting.

## Teacher note

Edge cases (axis points, negative `r`, the pole itself, where `θ` is
undefined) are where this lesson's errors concentrate; the guided
practice deliberately includes them. The radar application previews
Lesson 05's circles and the project, where a constant-`r` path is a
circle by definition. See `../teacher-guide.md` (adults only) and
`../answer-key.md`.
