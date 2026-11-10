# Lesson 06 — Complex Numbers in Polar Form: Multiply by Rotating and Stretching

**Goal:** Represent complex numbers in polar form, multiply, divide,
raise to powers, and find roots geometrically; run the project workshop.

**Time:** ~50 minutes. **Materials:** complex plane sketch paper,
Desmos or a calculator for cube-root checks, the project brief in
`../project.md`.

**Readiness check (5 minutes):** Write `1 + √3 i` in the complex plane:
real part 1 (east), imaginary part √3 (north). Its distance from the
origin is 2 and its angle is 60°. Polar form is that sentence, written
as a formula.

## 1. Modulus, argument, and the two forms of one number

For `z = a + bi`, the **modulus** is `|z| = √(a² + b²)` — the same
Pythagorean length as a vector's magnitude, because a complex number
*is* a point (or vector) in the plane. The **argument** `arg z = θ`
is its direction angle from the positive real axis, with the same
quadrant care as every direction angle in this unit. The **polar form**
is

`z = r(cos θ + i sin θ) = r cis θ`, where `r = |z|` and `θ = arg z`.

Why the two forms name the same number (N-CN.4): expanding the polar
form gives `r cos θ + i r sin θ`, and `r cos θ = a`, `r sin θ = b`
are exactly the rectangular-to-polar conversions of Lesson 04, with
the real axis as the x-axis and the imaginary axis as the y-axis.
The argument is not unique: adding `2π` (or 360°) names the same
number, just as in polar coordinates. For a **principal argument**,
this unit uses `−π < θ ≤ π` unless a problem states otherwise; the
project states its convention explicitly.

## 2. Worked examples

**Example 1 — rectangular to polar, exact.** `z = 1 + √3 i`.

Modulus: `√(1 + 3) = 2`. Argument: `tan θ = √3/1 = √3`, Quadrant I,
so `θ = π/3` (60°). Polar form: `z = 2 cis 60°` (or `2 cis(π/3)`).
Check: `2 cos 60° = 1`, `2 sin 60° = √3`. The number is recovered.

`z = −2 + 2i`: modulus `√(4 + 4) = 2√2`; `tan θ = 2/(−2) = −1`,
Quadrant II, so `θ = 135°` (3π/4). Polar form: `2√2 cis 135°`.

**Example 2 — geometric multiplication and division.**
Multiply moduli, add arguments; divide moduli, subtract arguments:

`(2 cis 30°)(3 cis 45°) = 6 cis 75°`.

Geometrically: the first number rotates the second by 30° and
stretches it by a factor of 2 (or vice versa). Multiplication by a
complex number is a rotation-and-scaling machine — which is why
multiplying by `i` (modulus 1, argument 90°) rotates a point 90°
counterclockwise, and why this unit's vector work and complex work
are the same geometry in two notations.

Division: `(8 cis 100°) / (2 cis 40°) = 4 cis 60°`.

**Example 3 — powers and roots (De Moivre).** For
`z = r cis θ`, De Moivre's Theorem says `zⁿ = rⁿ cis(nθ)` for
positive integer `n` — repeated multiplication, with the arguments
adding each time.

`(2 cis 20°)³ = 8 cis 60° = 8(1/2 + i√3/2) = 4 + 4√3 i`.
Check by expansion if you doubt it: the geometry did in one line what
cubing `(2 cos 20° + 2i sin 20°)` would do in a page.

Roots reverse the process, and they are plural. The cube roots of
`8 cis 60°` have modulus `∛8 = 2` and arguments
`(60° + 360°k)/3` for `k = 0, 1, 2`: `20°`, `140°`, `260°`. So the
roots are `2 cis 20°`, `2 cis 140°`, `2 cis 260°` — three points
evenly spaced on a circle of radius 2. Cubing any one of them returns
`8 cis 60°` (for example, `3 · 260° = 780° = 60° + 720°`). A nonzero
complex number has exactly `n` distinct `n`th roots, evenly spaced —
the fact students most often miss is the second and third root, not
the first.

**Example 4 — distance and midpoint (enrichment, N-CN.6).**
For `z₁ = 3 + 4i` and `z₂ = 1 − 2i`: their distance is the modulus
of their difference,
`|z₁ − z₂| = |2 + 6i| = √40 = 2√10 ≈ 6.32`.
Their midpoint is their average, `(z₁ + z₂)/2 = (4 + 2i)/2 = 2 + i`.
These are the ordinary plane distance and midpoint formulas, seen
through complex notation — which is the point: polar form did not
replace rectangular geometry, it gave it a second language.

## 3. Guided practice

1. Write `−1 − √3 i` in polar form (modulus, argument with quadrant
   stated, `cis` form). Then write `3 cis 270°` in rectangular form.
2. Compute `(3 cis 20°)(2 cis 50°)` and `(6 cis 80°)/(3 cis 30°)`
   geometrically, then convert the first answer to rectangular form
   approximately (you may use a calculator for `cos 70°`, `sin 70°`).
3. Find all four 4th roots of `16 cis 120°`, and plot them (or
   describe their positions) in words: radius, angles, spacing.

## 4. Independent practice

1. Write `2 − 2i` in polar form exactly, then compute its square in
   polar form and verify by squaring in rectangular form.
2. Use De Moivre's Theorem to compute `(1 + i)⁴` two ways: in polar
   form, and by repeated rectangular multiplication. The answers
   must agree; if they do not, the error is in the rectangular
   arithmetic, not the theorem.
3. Find the distance and midpoint between `4 + i` and `−2 + 5i` on
   the complex plane, and interpret both answers geometrically.
4. **Error analysis.** A classmate finds "the" cube root of
   `27 cis 90°` as `3 cis 30°` and stops. Explain what is missing,
   give all three roots, and explain why a cubic equation over the
   complex numbers must have three roots (counting the geometry,
   not quoting a theorem name alone).

## 5. Project workshop

Open `../project.md` and work through its Part A check with a partner
or with the adult: compute the harbor boat's resultant and required
heading from the brief's numbers, sketch the vector triangle, and
state every direction with its reference. Parts B and C are studio
work in S15–S16; today's workshop ends when Part A's numbers are
agreed and sketched, not when the whole project is written.

## 6. Exit check

A complex number has modulus 5 and argument 150°. Write it in
rectangular form exactly. Then multiply it by `2 cis 30°` in polar
form and give the product in both forms.

## Supports and extensions

- **Support:** Keep a two-column notebook page for this lesson:
  rectangular form on the left, polar form on the right, with an
  arrow between them labeled by the conversion used. Every exercise
  is one row of that page.
- **Alternate response mode:** Roots may be listed as angle sets
  with a sketch of evenly spaced points, rather than as fully
  expanded rectangular forms, provided the modulus and every argument
  are stated.
- **Extension:** Show that the `n` distinct `n`th roots of a number
  are the vertices of a regular `n`-gon centered at the origin, and
  explain what happens to that polygon as `n` grows. (This anticipates
  Unit 04's discrete structures only in spirit; no Unit 04 content is
  assumed.)

## Teacher note

The recurring error is stopping at one root. Require the full set
("all `n` roots, evenly spaced") in every root exercise, and mark a
single-root answer as partial even when that root is correct. See
`../teacher-guide.md` (adults only) and `../answer-key.md`.
