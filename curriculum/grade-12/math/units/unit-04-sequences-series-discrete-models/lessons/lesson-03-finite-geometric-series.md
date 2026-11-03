# Lesson 03 — Finite Geometric Series

**Goal:** I can derive the finite geometric series formula and use
it for growth, savings, and repeated-payment models, handling
`r = 1` as a separate case.

**Time:** 50 minutes. **Materials:** notebook, calculator.

**Readiness check (5 minutes):** Write `S = 3 + 6 + 12 + 24` and
`rS` with `r = 2` underneath it, aligned term by term. What
cancels when you subtract? (Almost everything: only the first term
of `S` and the last term of `rS` survive. That cancellation is
today's derivation.)

## Teaching

A **geometric series** adds the terms of a geometric sequence.
For `S_n = a_1 + a_1·r + a_1·r² + … + a_1·r^(n−1)`, multiply by
`r` and subtract:

```
S_n     = a_1 + a_1·r + … + a_1·r^(n−1)
r·S_n   =       a_1·r + … + a_1·r^(n−1) + a_1·r^n
S_n − r·S_n = a_1 − a_1·r^n
S_n(1 − r) = a_1(1 − r^n)
```

So, for `r ≠ 1`:

```
S_n = a_1 · (1 − r^n) / (1 − r)
```

This is A-SSE.4: the formula is *derived*, not handed down, and the
derivation explains its one restriction. When `r = 1`, every term
is `a_1`, the denominator `1 − r` is zero, and the sum is simply
`S_n = n · a_1`. Dividing by `1 − r` when `r = 1` is the error to
watch for; naming the case before computing prevents it.

Two setup habits make geometric-series problems routine:

1. Name `a_1`, `r`, and `n` in words before touching the formula.
   In a savings story, `a_1` is the *first* deposit, `r` is the
   growth factor per period, and `n` is the *number of deposits*.
2. Check the sign of `r`. A negative ratio makes terms alternate;
   the formula handles it, but a learner who "simplifies"
   `1 − (−3)^n` carelessly will lose the sign. Keep parentheses
   around negative ratios until the last step.

### Worked Example 1 — a growing series

Find the sum of the first 8 terms of `3 + 6 + 12 + …`.

Here `a_1 = 3`, `r = 2`, `n = 8` (and `r ≠ 1`, so the formula
applies):

`S_8 = 3 · (1 − 2^8)/(1 − 2) = 3 · (1 − 256)/(−1) = 3 · 255 = 765`.

Check by scale: the last term is `3 · 2^7 = 384`, and the sum of a
doubling series is just under twice its last term (`765 < 768`),
which is the right neighborhood. Direct addition
(`3 + 6 + 12 + 24 + 48 + 96 + 192 + 384`) also gives 765.

### Worked Example 2 — a decaying series

Find the sum of the first 6 terms of `100 + 50 + 25 + …`.

Here `a_1 = 100`, `r = 1/2`, `n = 6`:

`S_6 = 100 · (1 − (1/2)^6)/(1 − 1/2) = 100 · (1 − 1/64)/(1/2)`
`= 200 · (63/64) = 196.875`.

Sanity check: the terms shrink toward zero and the running total
approaches 200 from below — 196.875 after six terms is consistent,
and it previews Lesson 04's infinite sum of 200.

## Guided practice

1. Find the sum of the first 5 terms of `2 − 6 + 18 − 54 + 162`
   using the formula, then confirm by direct addition.
2. Find the sum of the first 10 terms of `1 + 1/2 + 1/4 + …`.
   Give the exact fraction and a decimal.
3. A geometric series has `r = 3` and `S_4 = 80`. Find `a_1`.

## Independent practice

1. Find the sum of the first 7 terms of `5, 15, 45, …`.
2. Evaluate `Σ_{k=0}^{5} 4·(1/2)^k`. How many terms are there?
3. A prize starts at $5 in year 1 and doubles each year. What is
   the total awarded over 6 years?
4. Find the sum of 9 terms each equal to 7. Explain why the
   geometric formula cannot be used directly here.

## Application

A family saves with a growing plan: the first month's deposit is
$20, and each later month's deposit is 10% larger than the previous
month's (so `r = 1.1`). What is the total deposited over 12
months? Give the answer in dollars and cents. Then write one
sentence about what this model assumes — and one way reality could
break that assumption.

## Exit check

1. Use the formula to find `8 + 4 + 2 + 1`, and confirm by
   addition.
2. In your own words: why does the derivation fail when `r = 1`?

## Supports and extensions

- **Support:** Write `a_1 = ___, r = ___, n = ___` as the first
  line of every solution before writing the formula.
- **Alternate response mode:** Describe the series in a sentence
  ("start at 100, halve each time, 6 terms") before symbolizing.
- **Extension:** A loan balance of $1,000 grows by 2% per month
  while a $50 payment is made each month. Write the recursive
  rule for the balance, compute the first three balances, and
  explain why this is *not* a geometric series. (It is an
  affine recursion: `B_n = 1.02·B_{n−1} − 50`.)

## Teacher note

Likely misconceptions: (a) using `r^n` with the wrong `n`
(usually `n − 1`, confusing the last term's exponent with the
term count); (b) dropping parentheses around a negative `r`;
(c) applying the formula when `r = 1`. The antidote to (a) is
stating "the last term is `a_1·r^(n−1)` but the formula uses
`r^n`" out loud. Money contexts are educational examples only,
not financial advice. Answer-key reference: `answer-key.md`,
Lesson 03.
