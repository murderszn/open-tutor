# Lesson 05 — Solving Exponential and Logarithmic Equations

**Goal:** solve exponential equations of the form `ab^(ct) = d`
(bases 2, 10, and `e`) and logarithmic equations, expressing exact
answers as logarithms where needed and checking every solution in
the original equation.

**Time:** about 100 minutes across Sessions 9–10. **Materials:** this
lesson, Practice Set E, a calculator with `ln` and `log` keys.

## Readiness check (5 minutes)

1. Solve `2^x = 128` by converting to a logarithm.
2. Solve `log_3(x) = 5` by converting to exponential form.
3. Why must a solution of `log(x − 2) = 1` satisfy `x > 2` before
   any algebra is done?

(Answers in the answer key. Item 3 is the lesson's discipline: the
domain is stated *first*, so extraneous candidates are recognized
when they appear, not argued about afterward.)

## Teaching

### Exponential equations: isolate, then take the logarithm

The strategy never changes: isolate the power, then undo it with a
logarithm of the same base (or with `ln` and change of base).

**Step 1.** Isolate the exponential term (divide off `a`, move other
terms). **Step 2.** Take the logarithm of both sides, or convert to
logarithmic form. **Step 3.** Solve the resulting linear equation.
**Step 4.** If the answer is not exact, give the exact logarithmic
form first, then the decimal approximation — and check by
substitution.

The number `e ≈ 2.71828` enters here as the base of continuous
growth: a quantity growing continuously at rate `r` follows
`A(t) = A_0·e^(rt)`. Its inverse is `ln`, so `e`-equations are solved
with `ln`, exactly as base-2 equations are solved with `log_2`.

### Logarithmic equations: state the domain, combine, convert, check

**Step 1.** State the domain: every argument must be positive.
**Step 2.** Combine logarithms with the properties (Lesson 04) until
one logarithm equals a number. **Step 3.** Convert to exponential
form and solve. **Step 4.** Check every candidate in the *original*
equation: a candidate that makes any argument non-positive, or that
fails the equation, is **extraneous** and is rejected with that
reason stated.

### Worked example 1 — exponential, with an exact answer

Solve `200 · (1.04)^t = 500`. How long until $200 growing at 4% per
year reaches $500?

- Isolate: `(1.04)^t = 500/200 = 2.5`.
- Take logarithms: `t = log_(1.04)(2.5)`. This is the exact answer.
- Approximate by change of base: `t = ln(2.5)/ln(1.04) ≈
  0.9163/0.03922 ≈ 23.36` years.
- Check: `200 · 1.04^23.36 ≈ 200 · 2.5 = 500`. ✓
- In context: about 23.4 years. Note what the model assumes — a
  constant 4% every year for over two decades — and say so when
  reporting the answer.

### Worked example 2 — a logarithmic equation with an extraneous solution

Solve `log_2(x) + log_2(x − 2) = 3`.

- Domain first: `x > 0` and `x − 2 > 0`, so `x > 2`.
- Combine (product property): `log_2(x(x − 2)) = 3`.
- Convert: `x(x − 2) = 2^3 = 8`, so `x² − 2x − 8 = 0`, giving
  `(x − 4)(x + 2) = 0`, candidates `x = 4` and `x = −2`.
- Check in the original: `x = 4` gives `log_2(4) + log_2(2) = 2 + 1
  = 3`. ✓ `x = −2` fails the domain (`x > 2`) and makes both
  arguments negative, so it is extraneous and is rejected. Note
  *why* it appeared: combining the logarithms hid the separate
  arguments, and the quadratic step added a root the original
  equation never had. The check is not busywork; it is the step
  that removes it.

### Worked example 3 — base `e` and a doubling time

Solve `100·e^(0.05t) = 300` and find the doubling time at 6% per year.

- `e^(0.05t) = 3`, so `0.05t = ln(3)`, `t = ln(3)/0.05 ≈
  1.0986/0.05 ≈ 21.97`. Exact answer: `t = ln(3)/0.05`.
- Doubling at 6%: `(1.06)^t = 2`, so `t = ln(2)/ln(1.06) ≈
  0.6931/0.05716 ≈ 11.90` years. At 7% the same computation gives
  `ln(2)/ln(1.07) ≈ 10.24` years — a useful pair to quote when a
  rate changes by one percentage point.

### The intersection check

Every equation in this lesson can also be solved approximately by
graphing: the solutions of `f(x) = g(x)` are the x-coordinates of
the intersection points (A-REI.11). For `200·1.04^t = 500`, graph
`y = 200·1.04^t` and `y = 500` and read the intersection near
`t ≈ 23.4`. Use the graph as a check on the algebra, never as a
replacement for the exact logarithmic answer.

## Guided practice

1. Solve `5 · 2^t = 640`. (Isolate: `2^t = 128`, so `t = 7`.)
2. Solve `3^(2x − 1) = 27`. (Convert: `2x − 1 = 3`, so `x = 2`.)
3. Solve `log_3(2x − 1) = 4`, stating the domain first.
   (`2x − 1 = 81`, `x = 41`; domain `x > 1/2`, satisfied.)
4. Solve `log(x) + log(x − 1) = log(6)` (common logarithms) and
   check every candidate. (Combine: `log(x(x − 1)) = log(6)`, so
   `x² − x − 6 = 0`, candidates `3` and `−2`; domain `x > 1`
   keeps `3` and rejects `−2`.)
5. A medicine decays as `M(t) = 800 · (1/2)^(t/5)` mg, `t` in hours
   (half-life 5 hours). After how many hours is 100 mg left?
   (Solve `800 · (1/2)^(t/5) = 100`: `(1/2)^(t/5) = 1/8`, so
   `t/5 = 3`, `t = 15` hours — three half-lives, as expected.)

## Independent practice

Do Practice Set E (practice.md). Then:

1. A population `P(t) = 400 · e^(0.02t)` reaches 1,000 when?
   Give the exact answer and a decimal to two places.
   (Exact: `t = ln(2.5)/0.02`; decimal: about 45.81 years.)
2. Explain in your own words why checking in the *multiplied* or
   *combined* equation is not enough — the check must use the
   original equation. Use Worked example 2 as your illustration.

## Exit check

1. Solve `2^x = 100`, giving the exact answer and an approximation
   to two decimal places. (Exact: `x = log_2(100)`; about 6.64.)
2. A candidate solution to a logarithmic equation is `x = 0`, and
   the original equation contains `log(x + 1)`. Is it extraneous?
   Why or why not? (No — `log(1) = 0` is defined. A candidate is
   extraneous only if it breaks the domain or fails the equation.)

## Supports and extensions

- **Support:** if the base is 2, 10, or `e`, match the logarithm to
  the base (`log_2`, `log`, `ln`); for any other base, use `ln` on
  both sides and divide.
- **Extension:** solve `4^x − 2^(x+1) − 8 = 0` by substituting
  `u = 2^x`, giving `u² − 2u − 8 = 0`, `u = 4` (reject `u = −2`,
  since `2^x > 0`), so `x = 2`.
- **Reading/language access:** "exact answer" means the answer
  written with a logarithm in it, like `ln(3)/0.05`; "approximation"
  means its decimal value, like 21.97.

## Teacher note

Likely misconceptions: (a) dividing by a logarithm as if it were a
number; (b) accepting a negative candidate because "the algebra gave
it"; (c) rounding mid-solution and then failing the check — keep the
logarithm exact until the final step. Answer-key reference:
answer-key.md, Lesson 05.
