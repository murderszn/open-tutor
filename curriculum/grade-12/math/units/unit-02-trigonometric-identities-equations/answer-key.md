# Answer Key — Unit 02: Trigonometric Identities, Equations, and Applications

**ADULTS ONLY.** Keep this file away from the learner. It contains
worked solutions for every scored item in Unit 02: the six lessons'
readiness checks, guided practice, independent practice, applications,
exit checks, and extensions; Practice Sets A–G; the Week-10 quiz; the
unit assessment; and project scoring guidance with a worked sample.
Every solution below was worked independently from the lesson prose and
then reconciled against it; numeric approximations were verified by
script on 2026-10-21. Open-response items include acceptable-variation
notes. Scoring criteria for the quiz and unit assessment live in those
files; the rubric for the project lives in `project.md`.

---

# Part A: Lessons 01–03

## Lesson 01 — The identity toolkit

### Readiness check

1. `cos θ = x`, `sin θ = y` for the unit-circle point `(x, y)`.
2. `sin²θ + cos²θ = 1`, because the point lies on the circle `x² + y² = 1`.
3. `sin 210°`: reference angle 30°, Quadrant III, sine negative:
   `sin 210° = −sin 30° = −1/2`.

### Guided practice

1. `cos²θ = 1 − sin²θ = 1 − 25/169 = 144/169`. Quadrant III: cosine
   negative, so `cos θ = −12/13`. `tan θ = (−5/13)/(−12/13) = 5/12`.
2. `tan θ · cot θ = (sin θ/cos θ)(cos θ/sin θ) = 1`, valid where
   `sin θ ≠ 0` and `cos θ ≠ 0` (both functions defined and nonzero).
3. Common denominator `cos θ(1 + sin θ)`: numerator
   `cos²θ + (1 + sin θ)² = cos²θ + 1 + 2sin θ + sin²θ = 2 + 2sin θ =
   2(1 + sin θ)`. Dividing gives `2/cos θ = 2 sec θ`. ∎

### Independent practice

1. Divide `sin²θ + cos²θ = 1` by `cos²θ`: `tan²θ + 1 = sec²θ`. Valid
   only where `cos θ ≠ 0` (division step and `sec θ`/`tan θ` domains).
2. `csc²θ − cot²θ = 1` (Pythagorean form: divide `sin² + cos² = 1` by
   `sin²θ`). `sin θ · csc θ = sin θ · (1/sin θ) = 1` (`sin θ ≠ 0`).
3. `cos 20° = sin(90° − 20°) = sin 70°`. `sin 225°`: reference 45°,
   Quadrant III, sine negative: `−√2/2`.
4. `(sin θ + cos θ)² + (sin θ − cos θ)² = (sin²θ + 2sinθcosθ + cos²θ) +
   (sin²θ − 2sinθcosθ + cos²θ) = 2(sin²θ + cos²θ) = 2`.
5. The claim omits the quadrant: `cos θ = ±√(1 − sin²θ) = ±3/5`. With
   `sin θ = 4/5` and `θ` in Quadrant II, `cos θ = −3/5`, not `3/5`
   (e.g., `θ ≈ 126.87°`).

### Applied task

The ramp's angle with the vertical post is `90° − θ` (or `π/2 − θ`):
the ramp, the ground, and the post form a right triangle, so the ramp's
two angles with ground and post are complementary.

### Exit check

`sin²θ + cos²θ + tan²θ = 1 + tan²θ = sec²θ`, using
`1 + tan²θ = sec²θ` in the last step.

### Extension

Multiply numerator and denominator of `(1 − sin θ)/cos θ` by
`(1 + sin θ)`: `(1 − sin²θ)/(cos θ(1 + sin θ)) = cos²θ/(cos θ(1 + sin θ))
= cos θ/(1 + sin θ)`. ∎ (Valid where `cos θ ≠ 0` and `sin θ ≠ −1`.)

## Lesson 02 — Sum and difference formulas

### Readiness check

1. `sin²θ + cos²θ = 1`; `sin(π/2 − θ) = cos θ`.
2. `(a + b)(a − b) = a² − b²`.
3. `cos 45° = √2/2`; `sin 30° = 1/2`.

### Guided practice

1. `cos 105° = cos(60° + 45°) = cos 60° cos 45° − sin 60° sin 45° =
   (1/2)(√2/2) − (√3/2)(√2/2) = √2/4 − √6/4 = (√2 − √6)/4 ≈ −0.2588`. ✓
2. `sin 15° = sin(45° − 30°) = sin 45° cos 30° − cos 45° sin 30° =
   √6/4 − √2/4 = (√6 − √2)/4 ≈ 0.2588`. It differs from `cos 15°`
   because sine and cosine of a non-45° acute angle differ; they agree
   only via cofunction pairs (`sin 15° = cos 75°`).
3. `(sin A cos B + cos A sin B)(sin A cos B − cos A sin B) =
   sin²A cos²B − cos²A sin²B = sin²A(1 − sin²B) − (1 − sin²A)sin²B =
   sin²A − sin²B`. ∎

### Independent practice

1. `sin 105° = sin(60° + 45°) = sin 60° cos 45° + cos 60° sin 45° =
   √6/4 + √2/4 = (√6 + √2)/4`. Cofunction check: `sin 105° = cos(90° −
   105°) = cos(−15°) = cos 15° = (√6 + √2)/4`. ✓
2. `tan 75° = tan(45° + 30°) = (1 + √3/3)/(1 − √3/3) = (3 + √3)/(3 − √3)
   = (3 + √3)²/6 = (12 + 6√3)/6 = 2 + √3 ≈ 3.732`. ✓
3. `cos(x − π/3) + cos(x + π/3) = [cos x cos(π/3) + sin x sin(π/3)] +
   [cos x cos(π/3) − sin x sin(π/3)] = 2 cos x · (1/2) = cos x`.
4. `sin(x + π/2) = sin x cos(π/2) + cos x sin(π/2) = sin x · 0 + cos x · 1
   = cos x`. It is the cofunction identity with the shift written as a
   sum: `sin(π/2 + x) = cos(−x) = cos x` (cosine even).
5. `A = B = 0` gives `0 = 0` for almost any false formula; a check must
   use values where the two sides can differ. Counterexample:
   `A = B = 90°`: left `sin 180° = 0`, right `sin 90° + sin 90° = 2`.

### Applied task

Angle between the lines 15°: `sin 15° = (√6 − √2)/4 ≈ 0.2588`.
Angle 75°: `sin 75° = (√6 + √2)/4 ≈ 0.9659`. The 75° case is larger, as
is geometrically obvious: the lines are farther apart, so the sine of
the angle between them (nearly perpendicular) is near 1.

### Exit check

`cos(A − B) = cos A cos B + sin A sin B`. `cos(π/12) = cos 15° =
(√6 + √2)/4` (from 45° − 30° as in Worked example 1).

### Extension

`sin(A + B + C) = sin((A + B) + C) = sin(A + B)cos C + cos(A + B)sin C`.
For 105° = 60° + 30° + 15°: expanding gives the same `(√6 + √2)/4`
after simplification (verify by numeric check: `≈ 0.9659`).

## Lesson 03 — Double-angle and half-angle

### Readiness check

1. `sin(A + B) = sin A cos B + cos A sin B`;
   `cos(A + B) = cos A cos B − sin A sin B`.
2. `cos θ = −4/5` (Quadrant II).
3. `2 · (3/5) · (−4/5) = −24/25`.

### Guided practice

1. `tan 2θ = 2tan θ/(1 − tan²θ) = (4/3)/(1 − 4/9) = (4/3)/(5/9) = 12/5`.
2. `θ ∈ (3π/2, 2π)` (Quadrant IV), so `θ/2 ∈ (3π/4, π)` (Quadrant II),
   sine positive: `sin(θ/2) = +√((1 − cos θ)/2) = √((1 − 3/5)/2) =
   √(1/5) = √5/5`.
3. `cos⁴x = (cos²x)² = ((1 + cos 2x)/2)² = (1 + 2cos 2x + cos²2x)/4`
   with `cos²2x = (1 + cos 4x)/2`: `= (3 + 4cos 2x + cos 4x)/8`.

### Independent practice

1. `sin θ = +24/25` (Quadrant II, `sin²θ = 1 − 49/625 = 576/625`).
   `sin 2θ = 2(24/25)(−7/25) = −336/625`.
   `cos 2θ = 2cos²θ − 1 = 98/625 − 1 = −527/625`.
2. Half-angle with `A = 30°`: `cos 15° = +√((1 + cos 30°)/2) =
   √((1 + √3/2)/2) = √((2 + √3)/4) = √(2 + √3)/2`. Equality with
   `(√6 + √2)/4`: squaring both gives `(2 + √3)/4` (left, squared) and
   `(6 + 2 + 2√12)/16 = (8 + 4√3)/16 = (2 + √3)/4` (right, squared);
   both positive, so they are equal. ∎
3. `(sin θ + cos θ)² = sin²θ + 2sin θ cos θ + cos²θ = 1 + sin 2θ`. ∎
4. Common denominator `sin θ(1 + cos θ)`: numerator
   `sin²θ + (1 + cos θ)² = sin²θ + 1 + 2cos θ + cos²θ = 2 + 2cos θ =
   2(1 + cos θ)`. Result: `2/sin θ = 2 csc θ`.
5. `θ = 300°` is in Quadrant IV, but `θ/2 = 150°` is in Quadrant II,
   where cosine is negative — so `cos(150°) = −√3/2`, while the
   positive root `+√((1 + cos 300°)/2) = +√((1 + 1/2)/2) = +√3/2` has
   the wrong sign. The quadrant of `θ/2`, not of `θ`, decides.

### Applied task

`sin²(ωt) = (1 − cos 2ωt)/2`. Over a full period the cosine term
averages to zero, so the average intensity is the constant `1/2` (times
the proportionality constant) — visible only in the rewritten form.

### Exit check

`cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A`. Given only `sin A`,
use `1 − 2sin²A`. Given `sin A = 5/13`, Quadrant I: `cos A = 12/13`,
so `sin 2A = 2(5/13)(12/13) = 120/169`.

### Extension

Adding the sine sum and difference formulas:
`sin(A + B) + sin(A − B) = 2 sin A cos B`, so
`sin A cos B = (1/2)[sin(A + B) + sin(A − B)]`. Then
`sin 3x cos x = (1/2)[sin 4x + sin 2x]`.

---

# Part B: Lessons 04–06

## Lesson 04 — Inverse trigonometric functions

### Readiness check

1. `sin 0 = sin π = 0`: sine repeats values, so it is not one-to-one
   on its whole domain and has no inverse there.
2. Restrict to `[−π/2, π/2]`: sine climbs from −1 to 1 exactly once.
3. `cos(π/3) = 1/2`; `tan(π/4) = 1`.

### Guided practice

1. Let `α = arctan(5/12)`. `α ∈ (−π/2, π/2)` and `tan α = 5/12 > 0`,
   so `α` is in Quadrant I. The 5-12-13 triangle gives
   `cos α = 12/13`.
2. `sin(4π/3) = −√3/2` (Quadrant III, reference `π/3`). The angle in
   `[−π/2, π/2]` with sine `−√3/2` is `−π/3`. So
   `arcsin(sin(4π/3)) = −π/3`.
3. Let `α = arcsin(3/5)`: `sin α = 3/5`, `cos α = 4/5` (Quadrant I).
   `sin 2α = 2 sin α cos α = 2(3/5)(4/5) = 24/25`.

### Independent practice

1. `sin(π/3) = √3/2`. The angle in `[0, π]` with cosine `√3/2` is
   `π/6`. So `arccos(sin(π/3)) = π/6`.
2. `arccos(−5/13)` lands in Quadrant II (negative cosine, range
   `[0, π]`): `sin = +12/13`, `cos = −5/13`, so
   `tan = (12/13)/(−5/13) = −12/5`.
3. Let `θ = arctan(3/4)`: `sin θ = 3/5`, `cos θ = 4/5` (Quadrant I).
   By double-angle: `cos 2θ = 2cos²θ − 1 = 32/25 − 1 = 7/25`. By
   `1 − 2sin²θ`: `1 − 18/25 = 7/25`. Both routes agree.
4. `arcsin(1/2) = π/6`, `arccos(1/2) = π/3`; sum `= π/2`. In a right
   triangle the two acute angles are complementary: if one acute
   angle has sine `1/2`, the other has cosine `1/2`, and they sum to
   `π/2`.
5. `tan(5π/4) = 1` is true, but `5π/4` is outside arctan's principal
   range `(−π/2, π/2)`. Correct value: `arctan(1) = π/4`.

### Applied task

`θ = arctan(0.6) ≈ 30.96°` (calculator: `arctan 0.6 ≈ 0.5404` rad).
Height `= 100 · tan θ = 100 · 0.6 = 60` m exactly — not taller than
60 m; it is exactly 60 m, by the definition of tangent.

### Exit check

- `arcsin`: domain `[−1, 1]`, range `[−π/2, π/2]`.
- `arccos`: domain `[−1, 1]`, range `[0, π]`.
- `arctan`: domain all reals, range `(−π/2, π/2)`.
- `arcsin(−√2/2) = −π/4`.

### Extension

In a right triangle with hypotenuse 1 and one leg `x`, the acute angle
opposite that leg has sine `x` (so it is `arcsin x`) and the other
acute angle has cosine `x` (so it is `arccos x`); acute angles sum to
`π/2`. Hence `arcsin x + arccos x = π/2` for `x ∈ [−1, 1]`.

## Lesson 05 — Solving trigonometric equations

### Readiness check

1. `2x − 1 = 0` gives `x = 1/2`. `x² − x = 0` factors as `x(x − 1) = 0`,
   giving `x = 0` or `x = 1`; dividing by `x` would lose `x = 0`.
2. `sin x = 1/2` on `[0, 2π)`: `x = π/6, 5π/6` — sine takes each value
   in `(−1, 1)` exactly twice per period.
3. Checking means substituting the candidate into the *original*
   equation; squaring can add values that satisfy the squared equation
   but not the original.

### Guided practice

1. `cos x = −√3/2`: reference `π/6`, Quadrants II and III:
   `x = 5π/6, 7π/6`.
2. `sin x cos x = 0` gives `sin x = 0` (`x = 0, π`) or `cos x = 0`
   (`x = π/2, 3π/2`): four solutions, one per quadrant boundary.
3. Let `u = 2x ∈ [0, 4π)`. `cos u = 1/2`: `u = π/3, 5π/3, 7π/3, 11π/3`.
   Divide by 2: `x = π/6, 5π/6, 7π/6, 11π/6`.

### Independent practice

1. `tan x = −1`: reference `π/4`, Quadrants II and IV:
   `x = 3π/4, 7π/4`. General solution: `x = 3π/4 + πn`.
2. `2sin²x − 3sin x + 1 = (2sin x − 1)(sin x − 1) = 0`: `sin x = 1/2`
   gives `π/6, 5π/6`; `sin x = 1` gives `π/2`. Set:
   `{π/6, π/2, 5π/6}`.
3. If `cos x = 0` then `sin x = ±1`, so `sin x = cos x` is impossible
   there; no solutions are lost by dividing. Then `tan x = 1`:
   `x = π/4, 5π/4`.
4. `2cos²x − 1 = sin x` → `2(1 − sin²x) − 1 = sin x` →
   `2sin²x + sin x − 1 = 0` → `(2sin x − 1)(sin x + 1) = 0`:
   `sin x = 1/2` gives `π/6, 5π/6`; `sin x = −1` gives `3π/2`.
   Checks: `x = π/6`: LHS `2(3/4) − 1 = 1/2`, RHS `1/2` ✓;
   `x = 5π/6`: same ✓; `x = 3π/2`: LHS `2(0) − 1 = −1`, RHS `−1` ✓.
   Set: `{π/6, 5π/6, 3π/2}`.
5. `sin 2x = 0` with `u = 2x ∈ [0, 4π)` gives `u = 0, π, 2π, 3π`, so
   `x = 0, π/2, π, 3π/2`. The learner solved over `[0, 2π)` for `u`
   instead of stretching the interval — the second period's solutions
   were missed.

### Applied task

`3 + 2sin(πt/6) = 4` gives `sin(πt/6) = 1/2`, so `πt/6 = π/6` or `5π/6`
in the first 12 hours: `t = 1` and `t = 5`. At `t = 1` the sine is
rising through `1/2` (tide rising); at `t = 5` it is falling through
`1/2` (tide falling).

### Exit check

`4cos²x − 3 = 0` gives `cos²x = 3/4`, so `cos x = √3/2` or `−√3/2`:
reference `π/6` in all four quadrants:
`x = π/6, 5π/6, 7π/6, 11π/6`.

### Extension

`sin x + cos x = √2 sin(x + π/4)`: expand the right side with the sine
sum formula: `√2[sin x cos(π/4) + cos x sin(π/4)] = √2[sin x·√2/2 +
cos x·√2/2] = sin x + cos x`. Setting it equal to 1:
`sin(x + π/4) = √2/2`, so `x + π/4 = π/4, 3π/4` (plus `2πn`), giving
`x = 0, π/2` in `[0, 2π)`. Both check: `sin 0 + cos 0 = 1` ✓;
`sin(π/2) + cos(π/2) = 1` ✓.

## Lesson 06 — Periodic applications and proof workshop

### Readiness check

1. In `h(t) = A + B sin(ωt + φ)`: `A` is the midline, `B` is the
   amplitude, and the period is `T = 2π/ω`.
2. `cos x = −1/2` on `[0, 2π)`: reference `π/3`, Quadrants II and III:
   `x = 2π/3, 4π/3`.
3. An identity is true for every angle in its domain; an equation is
   true only for its solutions.

### Guided practice

1. Closer: `d = 30/tan 20° ≈ 30/0.3640 ≈ 82.4` m (was ≈ 141.1 m).
   A larger depression angle with the same height means a shorter
   horizontal distance.
2. `h(t) = 22 − 20cos(πt/10) = 22` gives `cos(πt/10) = 0`:
   `πt/10 = π/2, 3π/2`, so `t = 5, 15` minutes. At `t = 5` the capsule
   is rising (`sin(π/2) > 0` in the derivative); at `t = 15` it is
   falling.
3. `(sin θ + cos θ)² = sin²θ + 2sin θ cos θ + cos²θ = 1 + sin 2θ`. ∎

### Independent practice

1. Maximum `1.5 + 0.9 = 2.4` m; minimum `1.5 − 0.9 = 0.6` m; period
   `2π/(π/3) = 6` hours. `h(t) = 2.0` gives `sin(πt/3) = 5/9`:
   reference angle `arcsin(5/9) ≈ 0.5890` rad; `πt/3 = 0.5890, 2.5526`
   (plus `2πk`), so in `[0, 12)`: `t ≈ 0.56, 2.44, 6.56, 8.44` hours.
2. `sin 3θ = sin(2θ + θ) = sin 2θ cos θ + cos 2θ sin θ =
   2sin θ cos²θ + (1 − 2sin²θ)sin θ = 2sin θ(1 − sin²θ) + sin θ −
   2sin³θ = 3sin θ − 4sin³θ`. ∎
3. `θ(t) = (2π/24)t = πt/12` radians. `θ = 5π/6` gives `t = 10`
   seconds; the next revolution adds 24 s: `t = 34` seconds.
4. Errors: (i) `sin t` has period `2π` (in whatever unit `t` carries),
   not 12 hours — the argument must be scaled to `πt/6` (or
   `2πt/12`); (ii) the argument `t` is in hours but the sine expects
   radians, so the units do not match without the scale factor.
   Corrected model: `h(t) = 5 + 3 sin(πt/6)` (or with a phase shift if
   a different feature time is specified).

### Applied task

Acceptable answers: (a) a new lighthouse problem with a different
height or angle, solved as `d = height/tan(angle)` with a
reasonableness check (e.g., a larger angle must give a smaller
distance; the distance must exceed the height when the angle is below
45°); or (b) a paragraph using cosine symmetry: `cos(πt/10) = −1/2`
has solutions symmetric about `π` (the top at `t = 10`), because
`cos(π + δ) = cos(π − δ)` — hence `t = 20/3` and `40/3` are symmetric
about 10.

### Exit check

Midline 4 m, amplitude 2 m, period `2π/(π/6) = 12` hours. High tide
(`cos = 1`) first after `t = 0` at `t = 1`. `h(t) = 5` gives
`cos(π(t − 1)/6) = 1/2`: `t = 3` (falling: the cosine is decreasing
through `1/2`) and `t = 11` (rising). First falling time: `t = 3`.

### Extension

`h(t) ≥ 7` for the project model is solved in Part D below; the key
point for the preview: the inequality holds on intervals around each
high tide because the cosine stays above `2/3` for a range of times,
not at one instant.

---

# Part C: Practice Sets A–G

## Set A

1. `sin²θ = 1 − 64/289 = 225/289`; Quadrant II: `sin θ = +15/17`.
   `tan θ = (15/17)/(−8/17) = −15/8`.
2. Quadrant IV triangle: opposite −3, adjacent 4, hypotenuse 5:
   `sin θ = −3/5`, `cos θ = 4/5`.
3. `(1 − sin²θ)/cos θ = cos²θ/cos θ = cos θ`, valid where `cos θ ≠ 0`.
4. `sec θ · sin θ = (1/cos θ) · sin θ = tan θ` (quotient identity in
   the last step).
5. `(1 + cos θ)(1 − cos θ) = 1 − cos²θ = sin²θ`. ∎
6. `cos 150° = −√3/2` (Quadrant II, reference 30°).
   `sin 150° = cos(90° − 150°) = cos(−60°) = cos 60° = 1/2`.

## Set B

1. `sin 75° = sin(45° + 30°) = (√6 + √2)/4`. Cofunction check:
   `sin 75° = cos 15° = (√6 + √2)/4`. ✓
2. `cos 15° = cos(60° − 45°) = cos 60° cos 45° + sin 60° sin 45° =
   √2/4 + √6/4 = (√6 + √2)/4`. ✓
3. `tan 105° = tan(60° + 45°) = (√3 + 1)/(1 − √3) = −2 − √3`
   (rationalize: `(√3 + 1)²/(1 − 3) = (4 + 2√3)/(−2)`). ≈ −3.732. ✓
4. `sin(x + π/6) − sin(x − π/6) = 2 cos x sin(π/6) = 2 cos x · (1/2) =
   cos x`.
5. `cos(A − B) − cos(A + B) = (cos A cos B + sin A sin B) −
   (cos A cos B − sin A sin B) = 2 sin A sin B`. ∎
6. `sin(π/4)cos(π/6) − cos(π/4)sin(π/6) = sin(π/4 − π/6) = sin(π/12) =
   sin 15° = (√6 − √2)/4`.

## Set C

1. `cos θ = 5/13` (Quadrant I). `sin 2θ = 2(12/13)(5/13) = 120/169`;
   `cos 2θ = 1 − 2(144/169) = −119/169`.
2. `sin θ = −4/5` (Quadrant III), so `tan θ = (−4/5)/(−3/5) = 4/3`.
   `tan 2θ = (2 · 4/3)/(1 − 16/9) = (8/3)/(−7/9) = −24/7`.
3. `sin²15° = (1 − cos 30°)/2 = (1 − √3/2)/2 = (2 − √3)/4`; 15° is in
   Quadrant I, so `sin 15° = √(2 − √3)/2`. Squaring `(√6 − √2)/4`
   gives `(2 − √3)/4`, and both values are positive, so they are
   equal. ∎
4. `sin²(3x) = (1 − cos 6x)/2`.
5. `sin 2θ/(1 + cos 2θ) = 2sin θ cos θ/(1 + 2cos²θ − 1) =
   2sin θ cos θ/(2cos²θ) = tan θ`. ∎
6. `θ ∈ (0, π/2)` gives `θ/2 ∈ (0, π/4)` (Quadrant I, cosine positive):
   `cos(θ/2) = +√((1 + cos θ)/2) = √((1 + 7/25)/2) = √(16/25) = 4/5`.

## Set D

1. `arcsin(√3/2) = π/3` (range `[−π/2, π/2]`);
   `arccos(−1/2) = 2π/3` (range `[0, π]`).
2. `arctan(−3/4)` is in Quadrant IV: opposite −3, adjacent 4,
   hypotenuse 5, so `sin = −3/5`.
3. `arcsin(5/13)` is in Quadrant I: `cos = 12/13`.
4. `tan(5π/6) = −√3/3`; the angle in `(−π/2, π/2)` with that tangent
   is `−π/6`. So `arctan(tan(5π/6)) = −π/6`, not `5π/6`.
5. Let `α = arccos(5/13)`: `sin α = 12/13`, `cos α = 5/13`;
   `sin 2α = 2(12/13)(5/13) = 120/169`.
6. `θ = arccos(0.8) ≈ 36.87° ≈ 36.9°`.

## Set E

1. `sin x = √3/3`: reference angle `arcsin(√3/3) ≈ 0.6155` rad;
   solutions `x = arcsin(√3/3) ≈ 0.62` and `x = π − arcsin(√3/3) ≈ 2.53`.
2. `(2cos x + 1)(cos x − 1) = 0`: `cos x = −1/2` gives `2π/3, 4π/3`;
   `cos x = 1` gives `0`. Set: `{0, 2π/3, 4π/3}`.
3. Let `u = 3x ∈ [0, 6π)`. `sin u = −1/2`: `u = 7π/6, 11π/6, 19π/6,
   23π/6, 31π/6, 35π/6`. Divide by 3: `x = 7π/18, 11π/18, 19π/18,
   23π/18, 31π/18, 35π/18`.
4. `tan x = ±√3`: `x = π/3, 2π/3, 4π/3, 5π/3`.
5. Division is safe: `cos x = 0` would give `sin x = ±1 ≠ 0`, so it
   cannot satisfy `cos x = sin x`. Then `tan x = 1`:
   `x = π/4, 5π/4`.
6. Square both sides: `(sin x + 1)² = cos²x = 1 − sin²x`, so
   `2sin²x + 2sin x = 0`, i.e., `sin x(sin x + 1) = 0`. Candidates:
   `sin x = 0` gives `x = 0, π`; `sin x = −1` gives `x = 3π/2`.
   Checks in the original `sin x + 1 = cos x`: `x = 0`: `1 = 1` ✓;
   `x = π`: `1 ≠ −1` ✗ (extraneous, introduced by squaring);
   `x = 3π/2`: `0 = 0` ✓. Solution set: `{0, 3π/2}`.

## Set F

1. `h(t) = 30 − 25cos(πt/8)` (period `2π/(π/8) = 16` ✓, bottom
   `h(0) = 5` ✓). `h(t) = 40` gives `cos(πt/8) = −0.4`:
   `πt/8 = arccos(−0.4) ≈ 1.9823`, so first time `t ≈ 5.05` minutes.
2. Maximum `4.5` m; period `2π/(π/6) = 12` hours. `h(t) = 3.75` gives
   `sin(πt/6) = 0.5`: `t = 1` and `t = 5` in `[0, 12)`.
3. `(1 − cos 2θ)/sin 2θ = (1 − (1 − 2sin²θ))/(2sin θ cos θ) =
   2sin²θ/(2sin θ cos θ) = tan θ`. ∎
4. `d = 45/tan 15° = 45/(2 − √3) ≈ 45/0.26795 ≈ 167.9` m, so 168 m to
   the nearest meter.
5. Period `2π/(2π/5) = 5` seconds. `d(t) = 3` gives
   `cos(2πt/5) = 1/2`: `2πt/5 = π/3, 5π/3`, so `t = 5/6 ≈ 0.83` s and
   `t = 25/6 ≈ 4.17` s.
6. Acceptable reasoning: a 12-hour period matches the dominant
   twice-daily (semidiurnal) tide cycle, and a sine form captures
   smooth rise and fall around a midline. It would fail if weather
   (wind, pressure), river flow, or a second tidal component made the
   real curve asymmetric or non-periodic — any such feature breaks
   the single-sinusoid assumption.

## Set G

1. `(sin θ + cos θ)² − 2sin θ cos θ = sin²θ + cos²θ = 1`.
2. Split 1 (45° + 30°): `cos 75° = cos 45° cos 30° − sin 45° sin 30° =
   √6/4 − √2/4 = (√6 − √2)/4`. Split 2 (90° − 15°):
   `cos 75° = sin 15° = (√6 − √2)/4` (Lesson 02). The results agree.
3. `arcsin(8/17)` is in Quadrant I: adjacent 15, hypotenuse 17, so
   `tan = 8/15`.
4. `sin x(2sin x + 1) = 0`: `sin x = 0` gives `0, π`;
   `sin x = −1/2` gives `7π/6, 11π/6`. Set: `{0, π, 7π/6, 11π/6}`.
5. Midline 10, amplitude 8, period `2π/(π/6) = 12`. `h(0) = 10 − 8 = 2`.
   `h(t) = 14` gives `cos(πt/6) = −1/2`: first time after `t = 0` is
   `πt/6 = 2π/3`, so `t = 4`.
6. `csc θ − sin θ = 1/sin θ − sin θ = (1 − sin²θ)/sin θ =
   cos²θ/sin θ = (cos θ/sin θ) · cos θ = cot θ cos θ`. ∎

---

# Part D: Quiz, Assessment, and Project

## Week-10 quiz

1. `cos²θ = 1 − 49/625 = 576/625`; Quadrant III: `cos θ = −24/25`.
2. `tan θ/sec θ = (sin θ/cos θ)/(1/cos θ) = sin θ`, valid where
   `cos θ ≠ 0`.
3. `sin 105° = sin(60° + 45°) = sin 60° cos 45° + cos 60° sin 45° =
   (√6 + √2)/4`.
4. Use `cos 2θ = 2cos²θ − 1 = 2(9/25) − 1 = −7/25`.
5. `arctan(−1) = −π/4`; principal range `(−π/2, π/2)`.
6. `arccos(−12/13)` is in Quadrant II: `sin = +5/13`.
7. `cos x = 1/2`: `x = π/3, 5π/3`.
8. Let `u = 2x ∈ [0, 4π)`: `u = 0, π, 2π, 3π`, so
   `x = 0, π/2, π, 3π/2`. Two answers would cover only one period of
   `sin 2x`; the interval holds two.
9. Midline 6, amplitude 4, period `2π/(π/3) = 6` hours; `h(0) = 6 − 4 = 2`.
10. `(1 − sin θ)(1 + sin θ) = 1 − sin²θ = cos²θ` by the Pythagorean
    identity (difference of squares, then `sin² + cos² = 1`).

## Unit assessment

### Task 1 (10 pts)

Work on the left side: common denominator `(1 − cos θ)(1 + cos θ) =
1 − cos²θ = sin²θ` (Pythagorean identity). Numerator:
`sin θ(1 + cos θ) + sin θ(1 − cos θ) = 2sin θ`. So the left side is
`2sin θ/sin²θ = 2/sin θ = 2 csc θ`. ∎ Excluded values: `1 ± cos θ = 0`
gives `cos θ = ±1`, i.e., `θ = kπ` for integer `k` — the same values
where `csc θ` is undefined.

### Task 2 (10 pts)

(a) `tan 15° = tan(45° − 30°) = (1 − √3/3)/(1 + √3/3) = (3 − √3)/(3 + √3)
= 2 − √3` (rationalize as in Lesson 02).
(b) `sin 22.5°`: 22.5° is in Quadrant I (positive sine),
`sin²22.5° = (1 − cos 45°)/2 = (2 − √2)/4`, so
`sin 22.5° = √(2 − √2)/2`.
(c) `cos θ = −12/13` (Quadrant II). `sin 2θ = 2(5/13)(−12/13) = −120/169`;
`cos 2θ = 1 − 2(25/169) = 119/169`.

### Task 3 (8 pts)

(a) `arctan(−8/15)` is in Quadrant IV (negative tangent, range
`(−π/2, π/2)`): opposite −8, adjacent 15, hypotenuse 17, so
`cos = 15/17`.
(b) `cos(5π/6) = −√3/2`. The angle in `[−π/2, π/2]` with sine `−√3/2`
is `−π/3`, so `arcsin(cos(5π/6)) = −π/3`. It is not `5π/6` because
`5π/6` is outside arcsine's principal range.

### Task 4 (10 pts)

(a) `(2sin x + 1)(sin x − 1) = 0`: `sin x = −1/2` gives `7π/6, 11π/6`;
`sin x = 1` gives `π/2`. Set: `{π/2, 7π/6, 11π/6}` (all check).
(b) Let `u = 2x ∈ [0, 4π)`. `cos u = −√3/2`: reference `π/6`,
Quadrants II and III: `u = 5π/6, 7π/6, 17π/6, 19π/6`. Divide by 2:
`x = 5π/12, 7π/12, 17π/12, 19π/12`.
(c) Square: `sin²x = (cos x − 1)² = cos²x − 2cos x + 1`. With
`sin²x = 1 − cos²x`: `2cos²x − 2cos x = 0`, so `cos x = 0` or `1`:
candidates `x = π/2, 3π/2, 0`. Checks in `sin x = cos x − 1`:
`x = 0`: `0 = 0` ✓; `x = π/2`: `1 ≠ −1` ✗ (extraneous);
`x = 3π/2`: `−1 = −1` ✓. Solution set: `{0, 3π/2}`.

### Task 5 (12 pts)

(a) Top at `t = 0` gives a positive cosine model:
`h(t) = 18 + 15cos(πt/6)` (period `2π/(π/6) = 12` ✓).
Verifications: `h(0) = 18 + 15 = 33` (top: 18 + 15) ✓;
`h(3) = 18 + 15cos(π/2) = 18` (midline) ✓;
`h(6) = 18 + 15cos π = 3` (bottom: 18 − 15) ✓.
(b) `h(t) = 25.5` gives `cos(πt/6) = 0.5`: `πt/6 = π/3, 5π/3`, so
`t = 2` and `t = 10` minutes. Derivative sign (or graph): at `t = 2`
the capsule is falling from the top; at `t = 10` it is rising toward
the top.
(c) Acceptable reasoning: the slower wheel's model is
`h(t) = 18 + 15cos(πt/12)` — same center and radius, half the angular
speed, double the period (24 minutes). Heights occur at the same
fractions of a revolution, so the times double: the part-(b) heights
would occur later (at `t = 4` and `t = 20` within the first 24
minutes), not earlier and not unchanged, because each revolution takes
twice as long.

## Project — worked sample (adult scoring reference)

- Table: maximum 8 m, minimum 2 m, midline `(8 + 2)/2 = 5` m,
  amplitude `(8 − 2)/2 = 3` m, period 12 hours (high tides at `t = 2`
  and `t = 14`).
- Model: `h(t) = 5 + 3cos(π(t − 2)/6)`. Verifications: `t = 0`:
  `5 + 3cos(−π/3) = 5 + 1.5 = 6.5` ✓; `t = 2`: `5 + 3 = 8` ✓;
  `t = 8`: `5 + 3cos π = 2` ✓; `t = 20`: `5 + 3cos 3π = 2` ✓.
  (A sine form such as `h(t) = 5 + 3sin(π(t + 1)/6)` is equivalent and
  earns full credit with complete verifications.)
- Safe windows: `h(t) ≥ 7` gives `cos(π(t − 2)/6) ≥ 2/3`, so
  `|π(t − 2)/6 − 2πk| ≤ arccos(2/3) ≈ 0.8411` rad, i.e.,
  `|t − 2 − 12k| ≤ 0.8411 · 6/π ≈ 1.61` hours. In `[0, 24)`:
  `[0.39, 3.61]` and `[12.39, 15.61]` (two decimal places).
  Endpoint checks: `h(0.39) ≈ 7.00`, `h(3.61) ≈ 7.00`,
  `h(12.39) ≈ 7.00`, `h(15.61) ≈ 7.00` (rounding to two decimals).
  The answer is intervals because the depth stays at or above 7 m
  continuously between the two crossing times, not only at instants.
- Report: parameters in harbor words (average depth 5 m, swing ±3 m,
  12-hour cycle, high tide 2 hours after midnight and every 12 hours
  after); captain's action (plan entry inside a window with margin,
  never exactly at an endpoint); assumptions (perfectly periodic,
  fictional data, no weather/river effects); one failure mode (a storm
  surge or strong wind could lower the actual depth below the model
  inside a nominal window).
