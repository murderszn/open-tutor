# Lesson 02 — Sum and Difference Formulas

**Goal:** You will prove `cos(A − B)` from the unit circle, derive the
other sum and difference formulas from it, and use them for exact
values. **Time:** ~50 minutes. **Materials:** unit-circle table,
paper, Desmos for checking only.

## Readiness check

1. State the Pythagorean identity and the cofunction identity for sine.
2. Expand `(a + b)(a − b)`.
3. What is `cos 45°`? What is `sin 30°`? (You will need both below.)

## Teaching

Some exact values are not on the special-angle table but are sums or
differences of table angles: 15° = 45° − 30°, 75° = 45° + 30°,
105° = 60° + 45°. If we know how sine and cosine behave on a sum of two
angles, those values fall out exactly — no calculator needed.

**Proving `cos(A − B)`.** Place angles `A` and `B` on the unit circle.
Their terminal points are `P = (cos A, sin A)` and `Q = (cos B,
sin B)`. The angle between the two rays is `A − B`. Now rotate the
whole picture so that `Q` lands on the point `(1, 0)`; the angle between
the rays does not change, so `P` moves to `(cos(A − B), sin(A − B))`.
Rotation preserves distance, so the distance `PQ` is the same before and
after rotation.

Before rotation, by the distance formula:
`PQ² = (cos A − cos B)² + (sin A − sin B)²`
`= cos²A − 2cos A cos B + cos²B + sin²A − 2sin A sin B + sin²B`
`= 2 − 2(cos A cos B + sin A sin B)`, using `sin² + cos² = 1` twice.

After rotation, `Q = (1, 0)` and `P = (cos(A − B), sin(A − B))`, so:
`PQ² = (cos(A − B) − 1)² + sin²(A − B)`
`= cos²(A − B) − 2cos(A − B) + 1 + sin²(A − B) = 2 − 2cos(A − B)`.

Set the two expressions for `PQ²` equal and cancel: `cos(A − B) =
cos A cos B + sin A sin B`. That is the difference formula for cosine.
Notice the sign: the formula for a *difference* has a *plus* in the
middle. That sign flip is the single most tested detail of this unit.

**The rest follow.** Replace `B` by `−B` and use even/odd identities:
`cos(A + B) = cos A cos B − sin A sin B`. For sine, use the cofunction
identity: `sin(A − B) = cos(π/2 − (A − B)) = cos((π/2 − A) + B)`, then
apply the cosine sum formula and cofunction identities again to get
`sin(A − B) = sin A cos B − cos A sin B`; replacing `B` by `−B` gives
`sin(A + B) = sin A cos B + cos A sin B`. For tangent, divide sine by
cosine and divide numerator and denominator by `cos A cos B`:
`tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)` — again, the sign in
the denominator is opposite to the sign in the angle.

Summary (memorize the cosine and sine forms; derive tangent when needed):

- `cos(A ± B) = cos A cos B ∓ sin A sin B`
- `sin(A ± B) = sin A cos B ± cos A sin B`
- `tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)`

### Worked example 1 — Exact value of cos 15°

Write 15° as 45° − 30° and use the cosine difference formula:
`cos 15° = cos(45° − 30°) = cos 45° cos 30° + sin 45° sin 30°`
`= (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4 = (√6 + √2)/4`.
Check with a calculator: `(√6 + √2)/4 ≈ (2.449 + 1.414)/4 ≈ 0.9659`,
and `cos 15° ≈ 0.9659`. The decimal check confirms the exact form; it
does not replace it.

### Worked example 2 — Exact value of sin 75°

`sin 75° = sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30°`
`= (√2/2)(√3/2) + (√2/2)(1/2) = (√6 + √2)/4`.
So `sin 75° = cos 15°` — which must be true, since 75° and 15° are
complementary and the cofunction identity says so. When two routes agree,
that agreement is evidence, not coincidence.

### Worked example 3 — Exact value of tan 15°

`tan 15° = tan(45° − 30°) = (tan 45° − tan 30°)/(1 + tan 45° tan 30°)`
`= (1 − √3/3)/(1 + √3/3)`. Multiply numerator and denominator by 3:
`(3 − √3)/(3 + √3)`. Rationalize by multiplying by `(3 − √3)/(3 − √3)`:
`(3 − √3)²/(9 − 3) = (9 − 6√3 + 3)/6 = (12 − 6√3)/6 = 2 − √3`.
So `tan 15° = 2 − √3 ≈ 0.2679`, matching a calculator's `tan 15°`.

## Guided practice (with hints)

1. Find `cos 105°` exactly by writing 105° as 60° + 45°. (Hint: the
   answer is negative — check your sign against `cos 105° ≈ −0.2588`.)
2. Find `sin 15°` exactly. (Hint: 15° = 45° − 30°; compare with Worked
   example 1 and explain why `sin 15° ≠ cos 15°`.)
3. Show that `sin(A + B) sin(A − B) = sin²A − sin²B` by expanding the
   left side with the sine formulas and using `cos² = 1 − sin²`.

## Independent practice

1. Find `sin 105°` exactly (60° + 45°), and verify it equals `cos 15°`
   by a cofunction argument.
2. Find `tan 75°` exactly, then show it equals `2 + √3` by rationalizing.
   (Check: `tan 75° ≈ 3.732`, and `2 + √3 ≈ 3.732`.)
3. Simplify `cos(x − π/3) + cos(x + π/3)` to a single term. (Hint: add
   the two cosine formulas; two terms cancel.)
4. Verify the identity `sin(x + π/2) = cos x` using a sum formula, and
   explain how it is also a cofunction identity.
5. **Error analysis.** A learner writes `sin(A + B) = sin A + sin B`
   and "checks" it with `A = B = 0`. Explain why that check proves
   nothing, and give one pair of angles where the claim fails.

## Applied task

Two survey sight-lines make angles of 30° and 45° with a baseline. The
angle between the sight-lines is therefore 15° (or 75°, depending on
which side of the baseline they fall). Using the exact values from this
lesson, write the exact value of the sine of the angle between them for
each case, and state which case gives the larger value and why that is
geometrically obvious.

## Exit check

Write the difference formula for cosine from memory, then use it to find
`cos(π/12)` exactly. (Note: `π/12` radians is 15°.)

## Supports, alternate modes, and extensions

- **Reading/language access:** say each formula as a sentence ("cosine
  of a difference equals cosine cosine plus sine sine") before writing
  it; the rhythm carries the sign pattern.
- **Alternate response mode:** the guided-practice derivations may be
  presented as a two-column proof (step | reason) instead of prose.
- **Extension:** derive `sin(A + B + C)` by applying the sum formula
  twice, and use it to find `sin 105°` a second way (60° + 30° + 15°).

## Teacher note

Likely misconceptions: (a) distributing sine/cosine over a sum
(`sin(A + B) = sin A + sin B`); (b) the sign flip in the cosine formulas
— drill it with the sentence above; (c) choosing a split that is not
made of table angles (e.g., 15° = 10° + 5°) and then stalling. Answers:
`answer-key.md`, Lesson 02.
