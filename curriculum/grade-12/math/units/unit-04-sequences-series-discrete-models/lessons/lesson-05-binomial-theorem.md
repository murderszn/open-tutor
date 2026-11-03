# Lesson 05 — The Binomial Theorem

**Goal:** I can expand a binomial power with Pascal's Triangle and
the Binomial Theorem, and find any single term without expanding
the whole thing.

**Time:** 50 minutes. **Materials:** notebook, calculator.

**Readiness check (5 minutes):** Expand `(x + 2)²` and `(x + 2)³`
by multiplication. (They are `x² + 4x + 4` and
`x³ + 6x² + 12x + 8`.) Look at the coefficients: 1, 2, 1 and
1, 3, 3, 1. Those rows are the start of Pascal's Triangle.

## Teaching

**Pascal's Triangle** is built by a single rule: each number is the
sum of the two numbers above it. Row 0 is `1`; row 1 is `1, 1`;
row 2 is `1, 2, 1`; row 3 is `1, 3, 3, 1`; row 4 is
`1, 4, 6, 4, 1`; row 5 is `1, 5, 10, 10, 5, 1`. The entries in row
`n` are the **binomial coefficients** `C(n, k)` — "n choose k,"
the number of ways to choose `k` items from `n`.

The **Binomial Theorem** (A-APR.5 (+), taught as core here) says,
for a counting number `n`:

```
(x + y)^n = Σ_{k=0}^{n} C(n, k) · x^(n−k) · y^k
```

In words: the expansion has `n + 1` terms; in each term the
exponents of `x` and `y` add to `n`; the coefficients are row `n`
of Pascal's Triangle. Two sign habits prevent most errors:

1. With `(x − y)`, write it as `(x + (−y))` so the `y`-part carries
   the minus sign into every term: signs alternate.
2. In a single-term question, identify `k` first: the term with
   `y^k` has coefficient `C(n, k)` and `x`-exponent `n − k`.

The connection to counting is not a coincidence: expanding
`(x + y)^5` by hand means choosing, in each of 5 factors, whether
to take `x` or `y`. The term `x²y³` appears once for every way to
choose which 3 of the 5 factors contribute `y` — exactly `C(5, 3)`
times. Unit 05 will use this counting meaning for probability.

### Worked Example 1 — a full expansion

Expand `(x + 2)^4`.

Row 4 of Pascal's Triangle: `1, 4, 6, 4, 1`. Write
`(x + 2)^4` as `(x + y)^4` with `y = 2`:

```
= 1·x^4 + 4·x³·2 + 6·x²·2² + 4·x·2³ + 1·2^4
= x^4 + 8x³ + 24x² + 32x + 16
```

Checks: 5 terms (`n + 1`), exponents in each term add to 4, and
setting `x = 1` gives `1 + 8 + 24 + 32 + 16 = 81 = 3^4` ✓ — a fast
whole-expansion check worth using every time.

### Worked Example 2 — a single term

Find the coefficient of `x³` in `(2x − 3)^5`.

Write the power as `(2x + (−3))^5`. The general term is
`C(5, k)·(2x)^(5−k)·(−3)^k`. We want the `x`-exponent to be 3, so
`5 − k = 3`, giving `k = 2`:

Term = `C(5, 2)·(2x)³·(−3)² = 10 · 8x³ · 9 = 720x³`.

So the coefficient is 720. Note the method: solve for `k` from the
exponent you want, then compute one term. Never expand all six
terms for a one-term question.

## Guided practice

1. Expand `(a + b)^5` using Pascal's Triangle.
2. Expand `(x − 1)^6` and check it by setting `x = 1`.
3. Find the term containing `y^4` in `(x + 2y)^6`.

## Independent practice

1. Expand `(3x + 1)³`.
2. Find the coefficient of `x²` in `(x + 4)^5`.
3. Expand `(2a − b)^4`.
4. Find the middle term of `(x + y)^6`.

## Application

A fair coin is flipped 6 times. Each sequence of flips can be
coded by choosing which flips are heads. Use binomial coefficients
to find how many sequences have exactly 2 heads — and explain why
that count is also the coefficient of a term in some binomial
expansion. (This previews Unit 05's probability work; no gambling
is involved.)

## Exit check

1. Write row 7 of Pascal's Triangle.
2. In your own words: why does `C(n, k) = C(n, n − k)`?

## Supports and extensions

- **Support:** Build Pascal's Triangle by hand to row 6 before
  starting; most expansion errors are triangle errors.
- **Alternate response mode:** Say each term aloud as "choose k,
  x to the n-minus-k, y to the k" before writing it.
- **Extension:** Find the coefficient of `x^5` in `(2x + 3)^8`
  two ways — by the single-term method and by checking with the
  `x = 1` test on a partial expansion — and explain why the
  `x = 1` test alone cannot confirm a single coefficient.
  (Answer: `C(8, 3)·2^5·3^3 = 56 · 32 · 27 = 48,384`.)

## Teacher note

Likely misconceptions: (a) forgetting that `(x − y)` alternates
signs; (b) using `C(n, k)` with the wrong `k` (counting from the
wrong end); (c) writing `n` terms instead of `n + 1`. The
`x = 1` check catches (a) and (c) instantly. Answer-key reference:
`answer-key.md`, Lesson 05.
