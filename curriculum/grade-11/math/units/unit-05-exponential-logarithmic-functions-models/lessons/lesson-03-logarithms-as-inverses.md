# Lesson 03 — Logarithms as Inverses: Undoing Exponentiation

**Goal:** convert between exponential and logarithmic forms, evaluate
logarithms with bases 2, 10, and `e`, and explain logarithms as the
inverse of exponentiation.

**Time:** about 100 minutes across Sessions 5–6. **Materials:** this
lesson, Practice Set C, graphing technology.

## Readiness check (5 minutes)

1. Solve `2^x = 32` and `10^x = 0.01` by reasoning about powers.
2. If `f(x) = 2^x`, what are `f(0)`, `f(3)`? If `g` undoes `f`, what
   must `g(1)` and `g(8)` be?
3. What input makes `2^x` equal to 0? (None — a power of 2 is always
   positive. Remember this: it becomes the logarithm's domain.)

(Answers in the answer key.)

## Teaching

### The definition

A **logarithm** is an exponent, given a name. The statement

> `log_b(x) = y` means exactly `b^y = x`

where `b > 0`, `b ≠ 1`, and `x > 0`. Read `log_b(x)` as "the exponent
you put on `b` to get `x`." Two special bases have their own names:

- **Common logarithm:** `log(x)` means `log_10(x)`.
- **Natural logarithm:** `ln(x)` means `log_e(x)`, where
  `e ≈ 2.71828` is the base of continuous growth (Lesson 05 uses it
  for continuously compounded models).

The domain restriction `x > 0` is not a rule to memorize — it is the
readiness-check fact: `b^y` is always positive, so no exponent makes
it 0 or negative, so a logarithm of 0 or a negative number is
undefined.

### Converting forms

Conversion is a translation, not a computation. Keep the base, the
exponent, and the result in their places:

- `2^5 = 32` ↔ `log_2(32) = 5`.
- `10^(−3) = 0.001` ↔ `log_10(0.001) = −3`.
- `log_3(81) = 4` ↔ `3^4 = 81`.
- `log_5(1) = 0` ↔ `5^0 = 1` — the logarithm of 1 is always 0, in
  every base, because `b^0 = 1`.

When a logarithm is not an obvious whole number, technology finishes
the job — but the definition still frames the question. `log_2(100)`
asks "2 to what power is 100?" Since `2^6 = 64` and `2^7 = 128`, the
answer is between 6 and 7; a calculator gives about 6.64. Estimating
first, then computing, is the habit that catches a mistyped base.

### Worked example 1 — evaluating by the definition

Evaluate `log_2(1/8)`, `log_10(1,000,000)`, and `log_4(2)`.

- `log_2(1/8)`: "2 to what power is 1/8?" `2^(−3) = 1/8`, so the
  answer is `−3`. Negative logarithms are normal — they come from
  inputs between 0 and 1.
- `log_10(1,000,000)`: `10^6 = 1,000,000`, so the answer is 6.
  Counting zeros is a legitimate shortcut for powers of 10, and it
  generalizes: `log_10` of a number is roughly its order of
  magnitude.
- `log_4(2)`: "4 to what power is 2?" `4^(1/2) = √4 = 2`, so the
  answer is `1/2`. Fractional logarithms are normal too.

### Worked example 2 — solving by converting

Solve `3^x = 729` and `log_7(x) = 3`.

- `3^x = 729`: convert the question to a logarithm, `x = log_3(729)`,
  then recognize `3^6 = 729` (check: `3^5 = 243`, `243 · 3 = 729`),
  so `x = 6`.
- `log_7(x) = 3`: convert to exponential form, `7^3 = x`, so
  `x = 343`.
- A harder one, solved two ways: `5^x = 20`. As a logarithm,
  `x = log_5(20)`. By change of base (Lesson 04 previews it),
  `x = ln(20)/ln(5) ≈ 2.9957/1.6094 ≈ 1.861`. Check:
  `5^1.861 ≈ 20` (technology). The exact answer is `log_5(20)`; the
  decimal is an approximation of it, and the two must never be
  confused — an answer that *is* a logarithm is finished, not
  unfinished.

### The graphs are reflections

`f(x) = 2^x` and `g(x) = log_2(x)` are inverses, so their graphs are
reflections of each other across the line `y = x`: every point
`(a, b)` on one becomes `(b, a)` on the other.

| On `y = 2^x` | On `y = log_2(x)` |
|---|---|
| `(0, 1)` — y-intercept | `(1, 0)` — x-intercept |
| `(3, 8)` | `(8, 3)` |
| Asymptote `y = 0` (as `x → −∞`) | Asymptote `x = 0` (as `x → 0+`) |
| Domain: all real numbers | Domain: `x > 0` |
| Range: `y > 0` | Range: all real numbers |

The domain and range swap, exactly as inverses must: what the
exponential can *output* (positive numbers) is what the logarithm
can *accept*, and vice versa. Sketch both on the same axes, with the
line `y = x` drawn dashed, and the reflection becomes visible rather
than asserted. The deterministic diagram in `assets/` shows this pair
with labels.

## Guided practice

1. Convert: `6^2 = 36` to logarithmic form; `log_2(64) = 6` to
   exponential form.
2. Evaluate without a calculator: `log_3(27)`, `log_10(0.0001)`,
   `log_8(1)`, `log_2(√2)`.
3. Estimate, then compute: `log_2(50)` (between 5 and 6, about 5.64).
4. Solve: `4^x = 1024`; `log_9(x) = 2`.
5. True or false, with a reason: "`log_2(−8) = −3` because
   `2^(−3) = 1/8`." (False on two counts: the argument is negative,
   so the logarithm is undefined, and `2^(−3)` is `1/8`, not `−8`.)

## Independent practice

Do Practice Set C (practice.md). Then:

1. Explain to a peer, in three sentences, why `log_b(1) = 0` and
   `log_b(b) = 1` for every valid base `b`.
2. A function `f(x) = 10^x` has inverse `g(x) = log_10(x)`. Use the
   reflection table to predict `g(1000)` and `g(0.01)`, then verify
   by converting to exponential form.

## Exit check

1. Write `log_5(625) = 4` in exponential form and verify it.
2. Why is `log_3(0)` undefined? Answer in terms of powers of 3.

## Supports and extensions

- **Support:** when stuck on a logarithm, write the sentence "base
  to what power equals the argument?" and fill in the three numbers
  before doing anything else.
- **Extension:** show that `log_b(x)` is increasing when `b > 1`
  but decreasing when `0 < b < 1`, by reflecting the corresponding
  exponential graphs; then state the domain and range of
  `y = log_(1/2)(x)` without graphing it.
- **Reading/language access:** "argument" means the input of the
  logarithm (the `x` in `log_b(x)`); "base" is the same word as in
  Lesson 01, now the base of the power being undone.

## Teacher note

Likely misconceptions: (a) treating a logarithm as a division
(`log_2(8)` as `8 ÷ 2`); (b) allowing negative or zero arguments;
(c) believing a non-whole-number logarithm is "not an answer."
Answer-key reference: answer-key.md, Lesson 03.
