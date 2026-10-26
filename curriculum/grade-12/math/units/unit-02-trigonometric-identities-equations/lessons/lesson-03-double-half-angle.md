# Lesson 03 — Double-Angle and Half-Angle Identities

**Goal:** You will derive double-angle, half-angle, and power-reducing
identities as corollaries of the sum formulas and use them for exact
values and rewrites. **Time:** ~50 minutes. **Materials:** Lesson 02
formula sheet, paper, Desmos for checking only.

## Readiness check

1. Write `sin(A + B)` and `cos(A + B)` from memory.
2. If `sin θ = 3/5` and `θ` is in Quadrant II, what is `cos θ`?
3. Simplify `2 · (3/5) · (−4/5)`. (This number appears below.)

## Teaching

Double-angle identities are not new facts: they are the sum formulas
with `B = A`. That is why they are easy to re-derive under pressure and
why forgetting them on an assessment is recoverable — set `B = A` and
start again.

**Double-angle.** From `sin(A + B) = sin A cos B + cos A sin B` with
`B = A`: `sin 2A = 2 sin A cos A`. From `cos(A + B)` with `B = A`:
`cos 2A = cos²A − sin²A`. Replace one square with the Pythagorean
identity to get the other two forms: `cos 2A = 2cos²A − 1` and
`cos 2A = 1 − 2sin²A`. Three forms of `cos 2A` exist because different
problems give you different information — if you know `sin A`, use
`1 − 2sin²A`; if you know `cos A`, use `2cos²A − 1`. And
`tan 2A = 2tan A/(1 − tan²A)` from the tangent sum formula, valid where
`tan A` and `tan 2A` are defined.

**Half-angle.** Replace `A` by `A/2` in the `cos 2A` forms and solve for
the half-angle squares:
`sin²(A/2) = (1 − cos A)/2`, `cos²(A/2) = (1 + cos A)/2`, and
`tan(A/2) = sin A/(1 + cos A) = (1 − cos A)/sin A` (the last two forms
avoid the square-root sign problem entirely — prefer them when you can).

The sign problem is the whole lesson for half-angles. `sin(A/2) =
±√((1 − cos A)/2)`: the `±` is decided by the quadrant of `A/2`, not of
`A`. If `A` is in Quadrant II, `A/2` is in Quadrant I, and sine is
positive there. Halving an angle moves it to a different quadrant — draw
the halved interval before choosing a sign.

**Power-reducing.** Read the half-angle squares backwards with `A`
replaced by `2A`: `sin²A = (1 − cos 2A)/2` and `cos²A = (1 + cos 2A)/2`.
These turn powers into first-degree cosines, which is exactly what
calculus (Unit 07's bridge) and signal work need. Example:
`sin²x cos²x = (1/4)(2 sin x cos x)² = (1/4)sin²2x = (1/4)(1 − cos 4x)/2
= (1 − cos 4x)/8`.

### Worked example 1 — Double-angle values from one value

Given `sin θ = 3/5` with `θ` in Quadrant II, find `sin 2θ` and `cos 2θ`.

First `cos θ`: `cos²θ = 1 − 9/25 = 16/25`, and Quadrant II makes cosine
negative, so `cos θ = −4/5`. Then `sin 2θ = 2 sin θ cos θ = 2(3/5)(−4/5)
= −24/25`. And `cos 2θ = 1 − 2sin²θ = 1 − 2(9/25) = 1 − 18/25 = 7/25`.
Sanity check: `sin²2θ + cos²2θ = 576/625 + 49/625 = 625/625 = 1`. ✓

### Worked example 2 — A half-angle exact value

Find `sin 22.5°` exactly. Note 22.5° = 45°/2, and 22.5° is in Quadrant I,
so its sine is positive. `sin²(22.5°) = (1 − cos 45°)/2 = (1 − √2/2)/2
= (2 − √2)/4`. Taking the positive square root: `sin 22.5° =
√(2 − √2)/2`. Check: `√(2 − 1.4142)/2 = √0.5858/2 ≈ 0.7654/2 ≈ 0.3827`,
and a calculator gives `sin 22.5° ≈ 0.3827`. ✓

### Worked example 3 — Verify with a double-angle identity

Verify `cos⁴θ − sin⁴θ = cos 2θ`.

Factor the left side as a difference of squares:
`(cos²θ − sin²θ)(cos²θ + sin²θ)`. The second factor is 1 by the
Pythagorean identity, and the first factor is `cos 2θ` by the
double-angle formula. So the left side equals `cos 2θ`. The factoring
step is the whole proof — recognizing a difference of squares is a
skill worth naming.

## Guided practice (with hints)

1. Given `tan θ = 2/3`, find `tan 2θ`. (Hint: the tangent double-angle
   formula needs only `tan θ`.)
2. Given `cos θ = 3/5` with `θ` in Quadrant IV, find `sin(θ/2)`.
   (Hint: halve the interval first — which quadrant is `θ/2` in?)
3. Rewrite `cos⁴x` without any power higher than 1, using
   power-reducing identities twice. (Hint: `cos⁴x = (cos²x)²`.)

## Independent practice

1. Given `cos θ = −7/25` with `θ` in Quadrant II, find `sin 2θ` and
   `cos 2θ`. (First find `sin θ` with the quadrant's sign.)
2. Find `cos 15°` a second way: use the half-angle formula with
   `A = 30°`, and show it equals `(√6 + √2)/4` from Lesson 02.
3. Verify `1 + sin 2θ = (sin θ + cos θ)²` by expanding the right side.
4. Simplify `sin θ/(1 + cos θ) + (1 + cos θ)/sin θ` to a single
   cosecant multiple. (Hint: common denominator `sin θ(1 + cos θ)`;
   the numerator becomes `sin²θ + (1 + cos θ)² = 2 + 2cos θ`.)
5. **Error analysis.** A learner computes `cos(θ/2)` from `cos θ` and
   takes the positive root "because cosine is positive in Quadrant I."
   Explain the error, using `θ = 300°` as a counterexample.

## Applied task

A sound wave's intensity is proportional to `sin²(ωt)`. Rewrite the
intensity as a first-degree cosine expression using a power-reducing
identity, and explain in one sentence why the rewritten form makes the
wave's average intensity over a full period obvious (the cosine term
averages to zero, leaving the constant term).

## Exit check

State all three forms of `cos 2A`, and say which form you would use if
you were given only `sin A`. Then find `sin 2A` given `sin A = 5/13`
with `A` in Quadrant I.

## Supports, alternate modes, and extensions

- **Reading/language access:** keep a one-line derivation card:
  "sum formula, set B = A" for double-angle; "solve for the square,
  halve the interval, then choose the sign" for half-angle.
- **Alternate response mode:** guided-practice answers may be given as
  annotated derivations (each line numbered with its reason).
- **Extension:** prove the product-to-sum identity
  `sin A cos B = (1/2)[sin(A + B) + sin(A − B)]` by adding the two sine
  sum formulas, and use it to rewrite `sin 3x cos x`.

## Teacher note

Likely misconceptions: (a) writing `sin 2A = 2 sin A` (doubling the
angle is not doubling the value); (b) taking the positive half-angle
root by default — the halved interval decides; (c) using the wrong
`cos 2A` form for the data given. Answers: `answer-key.md`, Lesson 03.
