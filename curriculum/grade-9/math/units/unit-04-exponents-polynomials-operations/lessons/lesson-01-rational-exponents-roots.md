# Lesson 01 — Rational Exponents Are Roots

**Goal:** I can interpret `a^(1/n)` as a root, evaluate `a^(m/n)` and
`a^(-m/n)`, and say when an even root of a negative number has no real
value.
**Time:** 50 minutes · **Materials:** notebook, calculator for
checking only (the root must be named before the calculator is used).

## Readiness check (5 min)

Evaluate `2^3`, `2^2`, `2^1`, `2^0`, and `2^(-1)`. If you got `8, 4,
2, 1, 1/2`, you are ready: the integer-exponent rules already tell
you that exponents can step down by dividing by the base each time.
Today's question is: what exponent would step from `25` down to `5`
in a single step — that is, what power of `25` undoes squaring?

## Teaching: a fractional exponent asks for a root (15 min)

For integer exponents you already know:

- `a^m · a^n = a^(m+n)` (product rule)
- `(a^m)^n = a^(m·n)` (power rule)
- `a^(-n) = 1 / a^n` (negative exponent rule)

Now ask what `a^(1/2)` should mean. If the power rule is to keep
working for fractions, then `(a^(1/2))²` must equal `a^((1/2)·2) =
a^1 = a`. So `a^(1/2)` must be a number whose square is `a` — that
is, the square root of `a`. This is not a new rule invented for the
occasion; it is the old rule, extended, telling us what the new
notation has to mean. That is the content of N-RN.1.

**Definitions (for `n` a positive integer, `n ≥ 2`):**

- `a^(1/n)` is the **principal nth root** of `a`: the number that,
  raised to the `n`th power, gives `a`. Written with a radical sign,
  `a^(1/n) = ⁿ√a`.
- `a^(m/n) = (a^(1/n))^m = ⁿ√(a^m)`. Root first, then power — the
  numbers stay small that way.
- `a^(-m/n) = 1 / a^(m/n)`, exactly as for integer negative
  exponents.
- **Domain rule:** if `n` is even, `a^(1/n)` is a real number only
  when `a ≥ 0`. An even power of a real number is never negative, so
  no real number squares (or fourth-powers) to a negative result.
  If `n` is odd, a negative base is fine: `(-8)^(1/3) = -2`, because
  `(-2)³ = -8`.

A common slip: reading `a^(1/2)` as "half of `a`" or as `a ÷ 2`.
It is neither. `25^(1/2) = 5`, not `12.5`. The exponent `1/2` is a
root instruction, not a multiplication by `1/2`.

### Worked example 1 — unit fractions in the exponent

> Evaluate `25^(1/2)`, `8^(1/3)`, and `16^(1/4)`.

1. `25^(1/2)`: find the number whose square is `25`. That is `5`
   (the principal root is the nonnegative one), so `25^(1/2) = 5`.
2. `8^(1/3)`: find the number whose cube is `8`. That is `2`,
   because `2³ = 8`, so `8^(1/3) = 2`.
3. `16^(1/4)`: find the number whose fourth power is `16`. That is
   `2`, because `2⁴ = 16`, so `16^(1/4) = 2`.
4. Check each by raising the answer to the index: `5² = 25` ✓,
   `2³ = 8` ✓, `2⁴ = 16` ✓.

### Worked example 2 — root first, then power; then the reciprocal

> Evaluate `16^(3/4)` and `27^(-2/3)`.

1. `16^(3/4)`: root first. `16^(1/4) = 2`. Then power: `2³ = 8`.
   So `16^(3/4) = 8`. (Power first would mean cubing `16` to
   `4096` and then taking a fourth root — the same answer, with
   much more arithmetic and much more room for error.)
2. `27^(-2/3)`: the negative exponent means reciprocal, so this is
   `1 / 27^(2/3)`. Root first: `27^(1/3) = 3`. Then power:
   `3² = 9`. So `27^(-2/3) = 1/9`.
3. Check: `8 = 16^(3/4)` satisfies `(16^(3/4))⁴ = 16³ = 4096`, and
   `8⁴ = 4096` ✓.

## Guided practice (10 min, with hints)

1. Evaluate `36^(1/2)`. *Hint: what number squares to 36?*
2. Evaluate `125^(1/3)` and `32^(1/5)`. *Hint: 5³ = 125, 2⁵ = 32.*
3. Evaluate `9^(3/2)`. *Hint: root first — 9^(1/2) — then cube.*
4. Evaluate `4^(-1/2)`. *Hint: reciprocal of 4^(1/2).*
5. Is `(-16)^(1/2)` a real number? Is `(-27)^(1/3)`? Explain in one
   sentence each. *Hint: even index vs. odd index.*

## Independent practice (10 min)

1. Evaluate `49^(1/2)`, `64^(1/3)`, and `81^(1/4)`.
2. Evaluate `25^(3/2)` and `8^(2/3)`.
3. Evaluate `16^(-3/4)` and `100^(-1/2)`.
4. Evaluate `(-32)^(1/5)`. Explain why the sign comes out negative.
5. Which is larger, `36^(1/2)` or `27^(1/3)`? Show the two values.
6. In two or three sentences, explain why `a^(1/2)` cannot mean
   `a ÷ 2`, using `25^(1/2)` as your example.

## Application (5 min)

A square garden bed has area `144` square feet. Its side length is
`144^(1/2)` feet. Find the side length, and explain why the exponent
`1/2` — not division by `2` — is the right tool. (This garden is a
fictional practice context; no real plot is described.)

## Exit check (5 min)

Evaluate `81^(3/4)`. Show the root-first step. Then state whether
`(-81)^(1/4)` is a real number, with a one-sentence reason.

## Supports, extension, teacher note

- **Reading/language access:** read `a^(1/n)` aloud as "a to the
  one-over-n, the nth root of a"; keep the root-first slogan on the
  board.
- **Alternate response mode:** a learner may answer evaluation
  items by naming the root aloud ("the number whose cube is 27 is
  3") before writing the value.
- **Extension:** evaluate `32^(3/5)` (answer: `8`) and
  `64^(-5/6)` (answer: `1/32`), and explain why root-first keeps
  both computations to single-digit bases.
- **Teacher note — misconception:** learners often compute
  `a^(m/n)` as `a^m ÷ n`, or apply the power before the root and
  lose track. Require the root-first line every time in this
  lesson. **Answer key:** `answer-key.md`, Lesson 01.
