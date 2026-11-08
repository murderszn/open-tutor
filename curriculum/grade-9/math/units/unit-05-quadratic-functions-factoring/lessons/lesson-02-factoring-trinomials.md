# Lesson 02 — Factoring Trinomials

**Goal:** I can factor trinomials of the form `x² + bx + c` and
`ax² + bx + c`, and tell when a trinomial is prime over the integers.
**Time:** 50 minutes · **Materials:** notebook, factor-pair list.

## Readiness check (5 min)

Factor `x² + 5x + 6` from Lesson 01. Then list all factor pairs of 24:
1 and 24, 2 and 12, 3 and 8, 4 and 6. If both are quick, you are ready:
today's work is choosing the right pair.

## Teaching: two numbers that multiply to `c` and add to `b` (15 min)

For `x² + bx + c`, the factors are `(x + m)(x + n)` where `m` and `n`
multiply to `c` and add to `b`. The signs tell you where to look
before you list pairs:

- `c` positive, `b` positive: `m` and `n` are both positive.
- `c` positive, `b` negative: `m` and `n` are both negative.
- `c` negative: `m` and `n` have opposite signs, and the one with the
  larger absolute value carries the sign of `b`.

When the leading coefficient is not 1, use the **ac method**: multiply
`a` by `c`, find two numbers that multiply to `ac` and add to `b`,
split the middle term with them, and factor by grouping. Always factor
the GCF first — sometimes it turns an `ax² + bx + c` problem into an
`x² + bx + c` problem.

Some trinomials do not factor over the integers at all. If no factor
pair fits, the trinomial is **prime** — say so, and show the pairs you
tried. "Prime" is an answer, not a failure.

### Worked example 1 — `x² + bx + c`

> Factor `x² + 7x + 10`.

1. `c = 10` is positive and `b = 7` is positive, so both numbers are
   positive.
2. Factor pairs of 10: 1 and 10 (sum 11), 2 and 5 (sum 7). The pair
   2 and 5 fits.
3. `x² + 7x + 10 = (x + 2)(x + 5)`.
4. **Check:** `(x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10`. ✓

### Worked example 2 — the ac method

> Factor `2x² + 7x + 3`.

1. `ac = 2 · 3 = 6`. Find two numbers that multiply to 6 and add to 7:
   6 and 1.
2. Split the middle term: `2x² + 6x + x + 3`.
3. Group: `2x(x + 3) + 1(x + 3)`. Both groups share the factor
   `(x + 3)`, so `2x² + 7x + 3 = (2x + 1)(x + 3)`.
4. **Check:** `(2x + 1)(x + 3) = 2x² + 6x + x + 3 = 2x² + 7x + 3`. ✓

### Worked example 3 — negative `c`, and a prime trinomial

> Factor `x² − 5x − 24`. Then decide whether `x² + 3x + 7` factors.

1. `c = −24` is negative, so the numbers have opposite signs. The
   larger one must be negative, because `b = −5` is negative.
2. Factor pairs of 24 with difference 5: 3 and 8 (8 − 3 = 5).
   So `x² − 5x − 24 = (x − 8)(x + 3)`. **Check:**
   `(x − 8)(x + 3) = x² + 3x − 8x − 24 = x² − 5x − 24`. ✓
3. For `x² + 3x + 7`: `c = 7` is positive, so both numbers have the
   same sign. Pairs of 7: 1 and 7 (sum 8), −1 and −7 (sum −8).
   Neither sum is 3, so `x² + 3x + 7` is **prime** over the integers.

## Guided practice (10 min, with hints)

1. Factor `x² − 9x + 20`. *Hint: `c` positive, `b` negative — both numbers negative.*
2. Factor `3x² + 11x + 6` by the ac method. *Hint: `ac = 18`; the numbers are 9 and 2.*
3. Factor `x² + 2x − 15`. *Hint: `c` negative — opposite signs; the larger number is positive.*

## Independent practice (10 min)

1. Factor `x² + 11x + 24`.
2. Factor `x² − 12x + 35`.
3. Factor `2x² − 5x − 3` by the ac method.
4. Factor `5x² + 13x + 6` by the ac method.
5. Is `x² + 4x + 9` prime? Justify your answer by listing the factor
   pairs you tried.

## Application (5 min)

A rectangle has area `2x² + 9x + 4` square units and length `2x + 1`
units. Factor the area to find the width, and check your answer by
multiplying length by width.

## Exit check (5 min)

Factor `3x² − 10x + 8` by the ac method, showing the split-middle-term
step.

## Supports, extension, teacher note

- **Reading/language access:** keep a factor-pair table on the board
  (pairs of 12, 18, 24, 30, 36); say "multiply to, add to" as one
  phrase for `m` and `n`.
- **Alternate response mode:** a learner may work entirely with a
  factor-pair list and point to the fitting pair before writing the
  binomials.
- **Extension:** factor `6x² + 5x − 6` (answer: `(3x − 2)(2x + 3)`;
  `ac = −36`, numbers 9 and −4) and `x² + 6xy + 8y²` (answer:
  `(x + 2y)(x + 4y)`).
- **Teacher note — misconception:** learners often pick a pair that
  multiplies to `c` but forget to check the sum — or they split the
  middle term with the wrong sign when `c` is negative. Insist on the
  multiply-back check every time. **Answer key:** `answer-key.md`,
  Lesson 02.
