# Lesson 04 — Inverse Trigonometric Functions

**Goal:** You will use restricted domains and principal values to
evaluate inverse trigonometric functions and their compositions
exactly. **Time:** ~50 minutes. **Materials:** unit-circle table,
paper, calculator for approximate values only.

## Readiness check

1. Why does `sin x` have no inverse function on its whole domain?
   (Hint: what happens at `x = 0` and `x = π`?)
2. Unit 01 taught that restricting `f(x) = x²` to `x ≥ 0` makes it
   invertible. What interval would you restrict `sin x` to, so that it
   takes every value from −1 to 1 exactly once?
3. Evaluate `cos(π/3)` and `tan(π/4)` from the table.

## Teaching

A function has an inverse only if it never repeats a value. Sine repeats
every `2π`, so on its whole domain it has no inverse. The fix, from
Unit 01, is restriction: keep one monotone piece that still covers the
whole range, and invert that piece.

- **Inverse sine**, `arcsin x` or `sin⁻¹x`: restrict sine to
  `[−π/2, π/2]` (Quadrants IV and I, where sine climbs from −1 to 1).
  So `arcsin x` is defined for `x ∈ [−1, 1]` and always returns an angle
  in `[−π/2, π/2]`. That output interval is the **principal value**
  range.
- **Inverse cosine**, `arccos x` or `cos⁻¹x`: restrict cosine to
  `[0, π]` (Quadrants I and II, where cosine falls from 1 to −1).
  Defined for `x ∈ [−1, 1]`, returns angles in `[0, π]`.
- **Inverse tangent**, `arctan x` or `tan⁻¹x`: restrict tangent to
  `(−π/2, π/2)`. Defined for every real `x`, returns angles in
  `(−π/2, π/2)`.

Two consequences that cause most errors. First, `arcsin(sin x) = x`
only when `x` is already in the principal range; otherwise the arcsine
returns the *reference* angle in the principal range with the right
sign, not `x` itself. Second, `sin(arcsin x) = x` always (for `x` in
`[−1, 1]`), because arcsine's output is fed straight back into sine —
but `arcsin(sin x)` first throws away everything outside the principal
range.

**Evaluating compositions exactly.** For something like
`sin(arccos(3/5))`, draw the triangle: let `α = arccos(3/5)`. Then
`cos α = 3/5` and `α ∈ [0, π]`. In that range, cosine `3/5` puts `α` in
Quadrant I (cosine positive), so draw a right triangle with adjacent 3,
hypotenuse 5, opposite 4 (a 3-4-5 triangle). Then `sin α = 4/5`. The
triangle is the method — never guess the quadrant.

### Worked example 1 — Sine of an arccosine

Evaluate `sin(arccos(3/5))` exactly.

Let `α = arccos(3/5)`. Then `cos α = 3/5` and `α ∈ [0, π]`. Since
`cos α > 0` and `α ∈ [0, π]`, `α` is acute (Quadrant I). The 3-4-5
triangle gives `sin α = 4/5`. So `sin(arccos(3/5)) = 4/5`.

### Worked example 2 — Tangent of an arcsine

Evaluate `tan(arcsin(−12/13))` exactly.

Let `β = arcsin(−12/13)`. Then `sin β = −12/13` and `β ∈ [−π/2, π/2]`.
A negative sine in that range puts `β` in Quadrant IV. The 5-12-13
triangle: opposite −12, hypotenuse 13, adjacent `+5` (Quadrant IV has
positive cosine). So `tan β = opposite/adjacent = −12/5`. The sign comes
from the quadrant, and the quadrant comes from the principal range.

### Worked example 3 — The principal-value trap

Evaluate `arccos(cos(7π/6))`.

Tempting answer: `7π/6`. Wrong: arccosine must return an angle in
`[0, π]`, and `7π/6` is outside it. Compute first: `cos(7π/6) = −√3/2`
(Quadrant III, reference angle `π/6`). Then ask: which angle in
`[0, π]` has cosine `−√3/2`? That is `5π/6`. So
`arccos(cos(7π/6)) = 5π/6`. The composition "undoes" the cosine only up
to reflection into the principal range.

## Guided practice (with hints)

1. Evaluate `cos(arctan(5/12))`. (Hint: `arctan` returns a Quadrant I
   angle here — why? Draw the 5-12-13 triangle.)
2. Evaluate `arcsin(sin(4π/3))`. (Hint: find `sin(4π/3)` first, then
   find the angle in `[−π/2, π/2]` with that sine.)
3. Evaluate `sin(2 arcsin(3/5))`. (Hint: let `α = arcsin(3/5)` and use
   the double-angle formula from Lesson 03.)

## Independent practice

1. Evaluate `arccos(sin(π/3))`. (Hint: `sin(π/3) = √3/2`; which angle
   in `[0, π]` has that cosine?)
2. Evaluate `tan(arccos(−5/13))`. (Hint: arccosine of a negative number
   lands in Quadrant II — what does that do to the tangent's sign?)
3. Evaluate `cos(2 arctan(3/4))` two ways: by the double-angle formula
   for cosine, and by first finding `sin` and `cos` of the angle.
   (Check: both routes give `7/25`.)
4. Find the exact value of `arcsin(1/2) + arccos(1/2)` without a
   calculator, and explain the result with a right-triangle picture.
5. **Error analysis.** A learner writes `arctan(1) = 5π/4` "because
   `tan(5π/4) = 1`." Explain the error and give the correct value.

## Applied task

A surveyor stands 100 m from the base of a building and measures the
angle of elevation to its top as `θ`, where `tan θ = 0.6`. Write `θ`
with an inverse trigonometric function, then approximate it to two
decimal places in degrees with a calculator, and state whether the
building is taller than 60 m — and how you know without computing
further. (Answers: `θ = arctan(0.6) ≈ 30.96°`; the building's height is
`100 · tan θ = 60 m` exactly, by the definition of tangent.)

## Exit check

State the domain and principal-value range of each inverse function
(`arcsin`, `arccos`, `arctan`), then evaluate `arcsin(−√2/2)`.

## Supports, alternate modes, and extensions

- **Reading/language access:** always write the principal range next to
  the inverse function before computing; the range is part of the
  answer's definition, not an afterthought.
- **Alternate response mode:** compositions may be answered with a
  labeled triangle (sides, quadrant, principal range) plus the final
  value, instead of a paragraph.
- **Extension:** prove `arcsin x + arccos x = π/2` for `x ∈ [−1, 1]`
  using a right triangle with hypotenuse 1, and explain why the two
  principal ranges make the sum work.

## Teacher note

Likely misconceptions: (a) `arcsin(sin x) = x` for all `x`; (b)
`sin⁻¹x` read as `1/sin x` — stress that the `−1` is function-inverse
notation, not a reciprocal (the reciprocal is `csc x`); (c) forgetting
that arccosine outputs never go negative. Answers: `answer-key.md`,
Lesson 04.
