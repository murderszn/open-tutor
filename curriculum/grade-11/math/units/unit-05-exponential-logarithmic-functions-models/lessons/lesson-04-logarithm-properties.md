# Lesson 04 — Logarithm Properties, Proved from Exponents

**Goal:** apply the product, quotient, and power properties of
logarithms to expand and condense expressions, and use change of base
to evaluate logarithms with technology.

**Time:** about 50 minutes (Session 7), plus the Session 8 workshop.
**Materials:** this lesson, Practice Set D.

## Readiness check (5 minutes)

1. Use exponent properties to simplify `2^3 · 2^4` and `2^7 / 2^4`.
2. Write `log_2(8)` and `log_2(4)` as numbers. What is their sum?
   What single logarithm equals that sum?
3. Evaluate `log(100) − log(10)` using common logarithms.

(Answers in the answer key. Item 2 previews the whole lesson: the
sum of two logarithms is the logarithm of a product.)

## Teaching

### Why the properties are true

Logarithms inherit everything exponents can do, because a logarithm
*is* an exponent. Let `log_b(M) = p` and `log_b(N) = q`, so
`M = b^p` and `N = b^q` by definition. Then:

- **Product:** `M·N = b^p · b^q = b^(p+q)`, so
  `log_b(M·N) = p + q = log_b(M) + log_b(N)`.
- **Quotient:** `M/N = b^p / b^q = b^(p−q)`, so
  `log_b(M/N) = log_b(M) − log_b(N)`.
- **Power:** `M^k = (b^p)^k = b^(pk)`, so
  `log_b(M^k) = k · log_b(M)`.

In short:

> `log_b(MN) = log_b(M) + log_b(N)` · `log_b(M/N) = log_b(M) − log_b(N)` · `log_b(M^k) = k·log_b(M)`

valid for `b > 0`, `b ≠ 1`, `M > 0`, `N > 0`. The domain conditions
matter: `log_b(MN)` requires `MN > 0`, which can hold when `M` and
`N` are both negative — but then `log_b(M)` and `log_b(N)` are
separately undefined, so the expanded form is valid only when each
factor's logarithm exists. State the domain before expanding.

### Change of base

Calculators offer `log` (base 10) and `ln` (base `e`) buttons, not a
button for every base. **Change of base** bridges the gap:

> `log_b(M) = log(M) / log(b) = ln(M) / ln(b)`

Proof sketch: let `y = log_b(M)`, so `b^y = M`; take `ln` of both
sides, `y · ln(b) = ln(M)`, so `y = ln(M)/ln(b)`. The choice of
`log` or `ln` on top and bottom does not matter, as long as it is
the same on both.

### Worked example 1 — expanding

Expand `log_2(8x^3)` and `log(5x / y^2)` (common logarithm), stating
domains.

- `log_2(8x^3) = log_2(8) + log_2(x^3) = 3 + 3·log_2(x)`, for `x > 0`.
  (The product property splits the product; the power property
  pulls the 3 out front. Note the order: `log_2(8) = 3` is a number,
  not a term to carry.)
- `log(5x / y^2) = log(5) + log(x) − log(y^2) = log(5) + log(x) −
  2·log(y)`, for `x > 0`, `y ≠ 0` (the squared argument allows
  `y < 0` in the original, but the expanded form's `log(y)` needs
  `y > 0` — a genuine domain narrowing to flag, not hide).

### Worked example 2 — condensing and evaluating

Condense `2·log(x) + log(y) − log(z)` and evaluate `log_2(40)` two
ways.

- Condensing reverses the properties: `2·log(x) = log(x^2)`, so the
  expression is `log(x^2) + log(y) − log(z) = log(x^2·y / z)`,
  for `x > 0`, `y > 0`, `z > 0`.
- `log_2(40)`: split, `log_2(8 · 5) = log_2(8) + log_2(5) = 3 +
  log_2(5)`. With technology, `log_2(5) ≈ 2.322`, so
  `log_2(40) ≈ 5.322`. By change of base as a check:
  `ln(40)/ln(2) ≈ 3.6889/0.6931 ≈ 5.322`. ✓ Two routes, one answer —
  that agreement is the check.
- `log_5(200) = ln(200)/ln(5) ≈ 5.2983/1.6094 ≈ 3.292`.

### What the properties do NOT say

- `log_b(M + N) ≠ log_b(M) + log_b(N)`. There is no "sum property."
  Counterexample: `log_10(100 + 100) = log_10(200) ≈ 2.301`, but
  `log_10(100) + log_10(100) = 2 + 2 = 4`.
- `log_b(M) / log_b(N) ≠ log_b(M/N)`. The quotient property splits
  the *argument*, not the logarithms. `log(M/N) = log(M) − log(N)`
  is a subtraction, not a division.
- A coefficient in front of a logarithm is an exponent inside:
  `3·log(x) = log(x^3)`, not `log(3x)`.

## Guided practice

1. Expand: `log_3(27x^2)`, for `x > 0`.
2. Condense: `log_2(x) + 3·log_2(y)`.
3. Evaluate `log_4(64)` two ways: by the definition and by splitting
   `64 = 16 · 4`.
4. Use change of base to evaluate `log_7(50)` to three decimal
   places, and check by raising 7 to your answer.
5. Error analysis: a classmate writes
   `log(20) = log(10) + log(10) = 1 + 1 = 2`. Find the error.
   (The sum property does not exist: `log(10 + 10) = log(20) ≈
   1.301`, while `log(10) + log(10) = log(100) = 2`. The classmate
   computed `log(10 · 10)`, not `log(10 + 10)`.)

## Independent practice

Do Practice Set D (practice.md). Then:

1. Expand `ln(3x^4 / √y)` as far as possible, stating the domain.
2. Explain, using the proof at the top of this lesson, why there
   cannot be a sum property for logarithms. (Hint: `b^p + b^q` is
   not a power of `b` in general.)

## Exit check

1. Condense `log(x) − 2·log(y)` to a single logarithm.
2. Evaluate `log_6(216)` without a calculator.

## Supports and extensions

- **Support:** expand in two passes — first split products and
  quotients, then pull out powers. Condensing runs the same two
  passes backward.
- **Extension:** prove change of base for base 10 from the
  definition, then use it to show `log_b(a) · log_a(b) = 1`.
- **Reading/language access:** "expand" means write as a sum or
  difference of simpler logarithms; "condense" means write as one
  logarithm.

## Teacher note

Likely misconceptions: (a) the sum-property error above — it is the
single most durable error in the unit, so drill it in Session 8;
(b) moving a coefficient inside as a multiplier instead of an
exponent; (c) expanding across a domain the expanded form does not
have. Answer-key reference: answer-key.md, Lesson 04.
