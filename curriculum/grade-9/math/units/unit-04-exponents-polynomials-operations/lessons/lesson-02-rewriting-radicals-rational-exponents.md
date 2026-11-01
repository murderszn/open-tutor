# Lesson 02 — Rewriting Radicals with Exponent Rules

**Goal:** I can rewrite radical expressions using rational exponents,
simplify them to simplest radical form, and keep exact forms separate
from decimal approximations.
**Time:** 50 minutes · **Materials:** notebook, calculator for
approximations only (exact form first, every time).

## Readiness check (5 min)

Write `√25`, `√36`, and `∛27` as whole numbers, and write `√50` as
`50^(1/2)`. If you got `5, 6, 3`, and `50^(1/2)`, you are ready:
some roots come out whole, and the others need a different kind of
answer — a simplified exact form, not a rounded decimal.

## Teaching: simplest form means nothing left to pull out (15 min)

A radical expression is in **simplest form** when:

1. The radicand (the number under the radical) has **no factor that
   is a perfect power of the index** — no perfect square inside a
   square root, no perfect cube inside a cube root.
2. There is **no radical in a denominator**.
3. The index is as small as it can be (this unit keeps indices as
   given; reducing an index is enrichment).

The tool is the product property of radicals, which is the product
rule for exponents in disguise: `√(ab) = √a · √b`, and in general
`ⁿ√(ab) = ⁿ√a · ⁿ√b`, whenever the roots are real numbers.

**The method:** factor the radicand, pull out the largest
perfect-power factor, and leave the rest inside.

- `√48`: `48 = 16 · 3`, and `16` is a perfect square. So
  `√48 = √16 · √3 = 4√3`.
- `∛54`: `54 = 27 · 2`, and `27` is a perfect cube. So
  `∛54 = ∛27 · ∛2 = 3∛2`.
- `√72`: `72 = 36 · 2`, so `√72 = 6√2`. (Factoring as `9 · 8`
  would give `3√8`, which is not finished, because `8` still hides
  the perfect square `4`. Always take the *largest* perfect-power
  factor, or simplify again until none is left.)

**Exact vs. approximate:** `4√3` is the exact answer. Its decimal
value is about `4 · 1.732 = 6.928`, written `√48 ≈ 6.93` (to two
decimal places). The `≈` sign is doing real work: it says "this is
not equal, it is rounded." An answer that writes `√48 = 6.93` is
wrong in exactly the way this unit trains you not to be. Keep the
exact form through all algebra; round only at the end, only if a
context asks for a rounded number, and say to what place.

Rational exponents make rewriting mechanical: `√(x²)` with `x ≥ 0`
is `x^(2 · 1/2) = x^1 = x`; `∛(x²)` is `x^(2/3)`; and a quotient
such as `1/√2` becomes `2^(-1/2)`, or, rationalized by multiplying
top and bottom by `√2`, `(√2)/2`.

### Worked example 1 — simplify by the largest perfect power

> Simplify `√200` and `∛128`.

1. `√200`: factor `200 = 100 · 2`. `100` is a perfect square, so
   `√200 = √100 · √2 = 10√2`. Check: `(10√2)² = 100 · 2 = 200` ✓.
2. `∛128`: factor `128 = 64 · 2`. `64 = 4³` is a perfect cube, so
   `∛128 = ∛64 · ∛2 = 4∛2`. Check: `(4∛2)³ = 64 · 2 = 128` ✓.
3. Note what was *not* done: `10√2` was not replaced by `14.14`.
   `10√2 ≈ 14.14` is an approximation, useful for measuring, not a
   substitute for the exact value.

### Worked example 2 — rewrite with rational exponents, then simplify

> Rewrite `32^(2/5)` as a whole number, and simplify `√(12x²)` for `x ≥ 0`.

1. `32^(2/5)`: root first. `32^(1/5) = 2`, because `2⁵ = 32`.
   Then power: `2² = 4`. So `32^(2/5) = 4`.
2. `√(12x²)`: factor `12 = 4 · 3`, so `√(12x²) = √(4x²) · √3`.
   With `x ≥ 0`, `√(4x²) = 2x`. So the result is `2x√3`.
   The condition `x ≥ 0` matters: without it, `√(x²) = |x|`, not `x`.
3. Check the second result by squaring: `(2x√3)² = 4x² · 3 =
   12x²` ✓.

## Guided practice (10 min, with hints)

1. Simplify `√72`. *Hint: largest perfect-square factor of 72.*
2. Simplify `√98` and `∛40`. *Hint: 98 = 49 · 2; 40 = 8 · 5.*
3. Evaluate `64^(5/6)`. *Hint: root first — 64^(1/6) — then raise to the 5th.*
4. Simplify `√(27x²)` for `x ≥ 0`. *Hint: 27 = 9 · 3.*
5. Write `√50` exactly and then approximately to two decimal
   places. *Hint: exact form first; use ≈ for the decimal.*

## Independent practice (10 min)

1. Simplify `√80`, `√125`, and `∛24`.
2. Evaluate `81^(3/4)` and `125^(-2/3)`.
3. Simplify `√(50x²)` for `x ≥ 0`, and `√(18)` + `√(8)` as a single
   simplified radical (combine like radical terms).
4. Rewrite `∛(x⁴)` using a rational exponent, and rewrite
   `x^(3/2)` using a radical sign.
5. A length is `√72` feet. Give the exact length and an
   approximation to the nearest tenth of a foot. Which would you
   give to a carpenter cutting a board, and which would you keep
   for further algebra? Explain in two sentences.

## Application (5 min)

Two square tiles have areas `50` and `32` square inches. Their side
lengths are `√50` and `√32` inches. Simplify both, add them, and
give the total as one simplified exact expression. Explain why the
total is *not* `√82` inches.

## Exit check (5 min)

Simplify `√180`. Show the factorization you used, and state the
approximate value to two decimal places with `≈` — not `=`.

## Supports, extension, teacher note

- **Reading/language access:** read `4√3` aloud as "four root
  three"; post the three simplest-form rules where they stay
  visible all lesson.
- **Alternate response mode:** a learner may factor the radicand
  with a factor tree drawn by hand and point to the perfect-power
  factor before writing the simplified form.
- **Extension:** simplify `√(72x⁴)` for `x ≥ 0` (answer: `6x²√2`)
  and rationalize `3/√5` (answer: `(3√5)/5`), explaining each step.
- **Teacher note — misconception:** learners stop at the first
  perfect-power factor they find (`√72 = 3√8`) instead of the
  largest, and write `=` where `≈` belongs. Require the
  "nothing left to pull out" check and the `≈` sign. **Answer
  key:** `answer-key.md`, Lesson 02.
