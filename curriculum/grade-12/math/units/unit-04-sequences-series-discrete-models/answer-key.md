# Answer Key — Unit 04: Sequences, Series, and Discrete Models

Worked solutions for every lesson item, practice item, quiz
question, and assessment task. Solutions were computed
independently of the student pages and reconciled against them.
Fractions are exact unless a decimal is requested.

## Lesson 01 — Sequences as functions

**Guided.** 1. Geometric, `r = 3`. Recursive: `a_1 = 2`,
`a_n = 3·a_{n−1}`. Explicit: `a_n = 2·3^(n−1)`.
`a_8 = 2·3^7 = 2·2187 = 4374`. 2. Explicit: start at 12, subtract
5 a total of `n − 1` times: `b_n = 12 − 5(n − 1) = 17 − 5n`.
`b_12 = 17 − 60 = −43`. 3. Differences are 4, 5, 6 (not
constant), so not arithmetic; ratios are 7/3, 12/7, 18/12 (not
constant), so not geometric. Second differences are constant (1),
and an explicit formula is `a_n = (n² + 5n)/2`: check
`n = 1 → 3`, `n = 2 → 7`, `n = 3 → 12`, `n = 4 → 18` ✓.

**Independent.** 1. Terms: `a_1 = 1`, `a_2 = 6`, `a_3 = 15`,
`a_4 = 26`; `a_10 = 2·100 − 10 = 190`. 2. Terms: 81, 27, 9, 3;
`a_6 = 81·(1/3)^5 = 81/243 = 1/3`. 3. First eight:
1, 1, 2, 3, 5, 8, 13, 21. 4. `n` counts the row number;
`a_n = 20 + 4(n − 1) = 16 + 4n`; row 15: `16 + 60 = 76` seats.

**Application.** Recursive: `B_0 = 200`, `B_n = B_{n−1} + 35`
for `n ≥ 1`. Explicit: `B_n = 200 + 35n`. After 12 months:
`200 + 420 = $620`. It is arithmetic because the same amount
($35) is added each month; a geometric model would multiply by a
constant factor instead.

**Exit.** 1. `a_n = 14 − 5n` (check: `n = 1 → 9` ✓).
2. A sequence assigns exactly one term to each counting-number
position, so it is a function; its domain is a subset of the
integers (here, the positive integers).

**Extension.** Terms: 2, 5, 14, 41, 122. A formula
`a_n = A·3^(n−1) + B` fits with fixed point `B = 1/2` (solving
`B = 3B − 1`) and `A = 3/2` (from `a_1 = A + 1/2 = 2`). Check:
`a_2 = 3/2·3 + 1/2 = 5` ✓.

## Lesson 02 — Sigma notation and arithmetic series

**Guided.** 1. `2 + 4 + 8 + 16 = 30`. 2. Terms for
`k = 0, 1, 2, 3`: `5, 3, 1, −1`; sum 8; 4 terms
(`3 − 0 + 1`). 3. `a_1 = 3`, `d = 5`; `a_n = 3 + 5(n − 1) = 53`
gives `n = 11`; `S = 11/2·(3 + 53) = 11/2·56 = 308`.

**Independent.** 1. `1 + 4 + 9 + 16 + 25 + 36 = 91`.
2. `a_15 = −4 + 14·7 = 94`; `S_15 = 15/2·(−4 + 94) = 15/2·90
= 675`. 3. First 40 multiples of 3: `a_1 = 3`, `a_40 = 120`;
`S = 40/2·(3 + 120) = 20·123 = 2460`. 4. Terms for
`k = 3, …, 7`: `5, 7, 9, 11, 13`; sum 45; term count
`7 − 3 + 1 = 5` ✓.

**Application.** `a_1 = 8`, `d = 3`, `n = 12`;
`a_12 = 8 + 33 = 41`; total `S = 12/2·(8 + 41) = 6·49 = 294`
chairs.

**Exit.** 1. `Σ_{k=1}^{4} (4k + 1)`. 2. No: it has
`6 − 2 + 1 = 5` terms. The count is last − first + 1, not the
last index.

**Extension.** Pairing: `k` and `n + 1 − k` sum to `n + 1`;
there are `n/2` such pairs, so the sum is `n(n + 1)/2`. For
`n = 100`: `100·101/2 = 5050` ✓.

## Lesson 03 — Finite geometric series

**Guided.** 1. `a_1 = 2`, `r = −3`, `n = 5`:
`S = 2·(1 − (−3)^5)/(1 − (−3)) = 2·244/4 = 122`. Direct:
`2 − 6 + 18 − 54 + 162 = 122` ✓. 2. `a_1 = 1`, `r = 1/2`,
`n = 10`: `S = (1 − 1/1024)/(1/2) = 1023/512 ≈ 1.998`.
3. `S_4 = a_1·(1 − 81)/(1 − 3) = 40·a_1 = 80`, so `a_1 = 2`.

**Independent.** 1. `a_1 = 5`, `r = 3`, `n = 7`:
`S = 5·(3^7 − 1)/2 = 5·2186/2 = 5465`. 2. Six terms
(`5 − 0 + 1`): `S = 4·(1 − (1/2)^6)/(1/2) = 8·63/64 = 63/8
= 7.875`. 3. `a_1 = 5`, `r = 2`, `n = 6`:
`S = 5·(2^6 − 1) = 5·63 = $315`. 4. `9·7 = 63`. The formula
cannot be used directly because `r = 1` makes the denominator
`1 − r = 0`; the sum is `n·a_1` instead.

**Application.** `a_1 = 20`, `r = 1.1`, `n = 12`:
`S = 20·(1 − 1.1^12)/(1 − 1.1) ≈ 20·2.138428/0.1 ≈ $427.69`.
Assumption (sample): deposits grow by exactly 10% every month
without interruption; reality could break it through a missed
month, a changed income, or a cap on deposits.

**Exit.** 1. `S_4 = 8·(1 − (1/2)^4)/(1/2) = 16·15/16 = 15`;
direct addition `8 + 4 + 2 + 1 = 15` ✓. 2. The derivation
divides by `1 − r`; when `r = 1` that divisor is zero and the
subtraction step gives `0 = 0` instead of a formula.

**Extension.** Recursive rule: `B_0 = 1000`,
`B_n = 1.02·B_{n−1} − 50`. Balances: `B_1 = 970`,
`B_2 = 939.40`, `B_3 = 908.19` (rounded to cents). Not a
geometric series because each step both multiplies and subtracts
a constant; the differences between consecutive terms are not a
constant multiple of the terms.

## Lesson 04 — Infinite geometric series

**Guided.** 1. `a_1 = 5`, `r = 1/4`, `|r| < 1`:
`S = 5/(1 − 1/4) = 20/3 ≈ 6.67`. 2. No finite sum: `r = 2`,
`|r| ≥ 1`; partial sums `2, 6, 14, 30, …` grow without bound.
3. `0.272727… = 27/100 + 27/10000 + …`, `a_1 = 27/100`,
`r = 1/100`: sum `(27/100)/(99/100) = 27/99 = 3/11`.

**Independent.** 1. `r = −1/3`: `S = 9/(1 + 1/3) = 27/4
= 6.75`. 2. `S = 1/(1 − 1/2) = 2`. 3. Partial sums:
`4, 0, 4, 0, …` — they oscillate and never settle, so the series
diverges. 4. Areas `64, 16, 4, …`, `r = 1/4`:
`S = 64/(3/4) = 256/3 ≈ 85.33` square units.

**Application.** Amount just after the `n`th dose:
`100·(1 + 0.3 + … + 0.3^(n−1))`; as `n` grows this approaches
`100/(1 − 0.3) = 100/0.7 ≈ 142.86` mg. Assumptions: exactly 30%
remains each day, doses are equal and exactly daily, and no
other doses or elimination changes occur. This is a mathematical
model, not medical advice.

**Exit.** 1. `r = 0.8`: `S = 20/(1 − 0.8) = 100`.
2. When `|r| < 1`, `r^n → 0`, so partial sums settle at
`a_1/(1 − r)`. When `|r| ≥ 1`, terms do not shrink to zero, so
partial sums grow without bound or oscillate and never settle.

**Extension.** Total travel: `10 + 2·(8/(1 − 0.8)) = 10 + 80
= 90` meters. Through three rebounds:
`10 + 2·(8 + 6.4 + 5.12) = 49.04` meters, which is
`49.04/90 ≈ 54.5%` of the total.

## Lesson 05 — Binomial Theorem

**Guided.** 1. `(a + b)^5 = a^5 + 5a^4b + 10a³b² + 10a²b³
+ 5ab^4 + b^5`. 2. `(x − 1)^6 = x^6 − 6x^5 + 15x^4 − 20x³
+ 15x² − 6x + 1`; check at `x = 1`: `1 − 6 + 15 − 20 + 15 − 6
+ 1 = 0 = (1 − 1)^6` ✓. 3. The `y^4` term has `k = 4`:
`C(6, 4)·x²·(2y)^4 = 15·16·x²y^4 = 240x²y^4`.

**Independent.** 1. `(3x + 1)³ = 27x³ + 27x² + 9x + 1`.
2. The `x²` term has `k = 3`: `C(5, 3)·x²·4³ = 10·64 = 640`,
so the coefficient is 640. 3. `(2a − b)^4 = 16a^4 − 32a³b
+ 24a²b² − 8ab³ + b^4`. 4. The middle term of `(x + y)^6`
has `k = 3`: `C(6, 3)x³y³ = 20x³y³`.

**Application.** Exactly 2 heads in 6 flips: choose which 2 of
the 6 flips are heads: `C(6, 2) = 15` sequences. This is the
coefficient of `x^4y²` (or the corresponding term) in
`(x + y)^6`, since expanding counts the same choices.

**Exit.** 1. Row 7: `1, 7, 21, 35, 35, 21, 7, 1`.
2. Choosing which `k` items to take is the same as choosing
which `n − k` to leave out, so `C(n, k) = C(n, n − k)`.

**Extension.** The `x^5` term in `(2x + 3)^8` has `k = 3`:
`C(8, 3)·(2x)^5·3³ = 56·32x^5·27 = 48,384x^5`. The `x = 1`
test checks the sum of all coefficients, not any single one,
so it cannot confirm one coefficient alone.

## Lesson 06 — Mathematical induction

**Guided.** 1. **Base:** `n = 1`: left `5`; right
`5·1·2/2 = 5` ✓. **Step:** assume
`5 + … + 5k = 5k(k + 1)/2`. Then adding `5(k + 1)`:
`5k(k + 1)/2 + 5(k + 1) = 5(k + 1)(k/2 + 1)
= 5(k + 1)(k + 2)/2`, the claim for `k + 1`. ∎
2. **Base:** `n = 1`: `4 − 1 = 3`, divisible by 3 ✓.
**Step:** assume `3 | 4^k − 1`. Then
`4^(k+1) − 1 = 4·(4^k − 1) + 3`, a sum of two multiples of 3,
hence divisible by 3. ∎ 3. The flaw is the step from `k = 1`
to `k = 2`: with two horses, the "first 1" and the "last 1" are
different horses with no horse in common, so nothing forces
them to share a color. The inductive step fails exactly at
`k = 1`; for `k ≥ 2` the two groups overlap, which is why the
argument looks plausible.

**Independent.** 1. **Base:** `n = 1`: `1 = 2¹ − 1` ✓.
**Step:** assume `1 + … + 2^(k−1) = 2^k − 1`. Adding
`2^k`: `2^k − 1 + 2^k = 2^(k+1) − 1`. ∎
2. **Base:** `n = 1`: `1! = 1 ≥ 2^0 = 1` ✓. **Step:** assume
`k! ≥ 2^(k−1)`. Then `(k + 1)! = (k + 1)·k!
≥ (k + 1)·2^(k−1) ≥ 2·2^(k−1) = 2^k` (using `k + 1 ≥ 2`
for `k ≥ 1`). ∎ 3. (a) The statement "`n ≥ 5`" has a valid
step (if `k ≥ 5` then `k + 1 ≥ 5`) but a false base case
(`1 ≥ 5` is false), so it proves nothing. (b) The statement
"`n ≤ 3`" has a true base case (`1 ≤ 3`) but its step fails at
`k = 3` (`3 ≤ 3` does not imply `4 ≤ 3`), so it proves nothing
beyond the checked cases.

**Application.** **Base:** `n = 1`: left `a_1`; right
`a_1(1 − r)/(1 − r) = a_1` ✓. **Step:** assume the formula
for `n = k`. Then the `k + 1` sum is the `k` sum plus
`a_1·r^k`:
`a_1(1 − r^k)/(1 − r) + a_1·r^k
= a_1[(1 − r^k) + r^k(1 − r)]/(1 − r)
= a_1(1 − r^(k+1))/(1 − r)`. The hypothesis is used in the
first equality, replacing the `k`-term sum by its formula. ∎

**Exit.** 1. (Sample wording.) Step 1: prove the statement for
the first value. Step 2: prove that truth for any `k` implies
truth for `k + 1`. 2. The base case tips the first domino and
the step shows each domino tips the next, so every domino
falls — that is, the statement holds for every counting number.

**Extension.** **Base:** `n = 1`: `1 − 1 = 0`, divisible by 3 ✓.
**Step:** assume `3 | k³ − k`. Then
`(k + 1)³ − (k + 1) = (k³ − k) + 3(k² + k)`, a multiple of 3
plus a multiple of 3. ∎

## Practice

1. Terms: `4, 1, −2, −5`; `a_25 = 7 − 75 = −68`.
2. `a_6/a_3 = r³ = 96/12 = 8`, so `r = 2`; `a_1 = 12/4 = 3`;
   `a_10 = 3·2^9 = 1536`.
3. Terms: `0, 2, 6, 12, 20`; sum 40.
4. `a_1 = 9`, `d = 5`, `a_30 = 154`;
   `S_30 = 30/2·(9 + 154) = 2445`.
5. `a_1 = 6`, `r = 1/2`, `n = 9`:
   `S = 6·(1 − (1/2)^9)/(1/2) = 1533/128 ≈ 11.977`.
6. `r = −1/3`, `|r| < 1`: `S = 18/(1 + 1/3) = 27/2 = 13.5`.
7. `0.181818… = 18/100 + 18/10000 + …`, ratio `1/100`:
   `(18/100)/(99/100) = 18/99 = 2/11`.
8. The `x²` term has `k = 3`:
   `C(5, 3)·x²·3³ = 10·27 = 270`, so the coefficient is 270.
9. `(2x − y)³ = 8x³ − 12x²y + 6xy² − y³`.
10. **Base:** `n = 1`: left `1`; right `1·2/2 = 1` ✓.
    **Step:** assume `1 + 4 + … + (3k − 2) = k(3k − 1)/2`.
    Adding `3k + 1`: `k(3k − 1)/2 + (3k + 1)
    = (3k² − k + 6k + 2)/2 = (3k² + 5k + 2)/2
    = (k + 1)(3k + 2)/2`, the claim for `k + 1`. ∎
11. Arithmetic, `a_1 = 50`, `d = 10`, `n = 24`;
    `a_24 = 280`; total `S = 24/2·(50 + 280) = 3960` dollars.
12. The learner used the formula for a series beginning with 1
    (`1 + 3 + 9 + …`), but this series begins with 3: the first
    term is `a_1 = 3`, not 1. Correct setup:
    `S = 3·(1 − 3^5)/(1 − 3) = 3·121 = 363`. The missing factor
    is exactly `a_1`.

## Formative quiz (Week 17)

1. `a_n = 14 − 3n`. 2. `a_6 = 6·(−2)^5 = −192`.
3. Terms for `k = 2, …, 5`: `5, 9, 13, 17`; sum 44.
4. `a_1 = 2`, `r = 5`, `n = 6`:
   `S = 2·(5^6 − 1)/4 = 2·15624/4 = 7812`.
5. `r = 0.4`, `|r| < 1`: `S = 30/(1 − 0.4) = 50`.
6. `(x − 2)^4 = x^4 − 8x³ + 24x² − 32x + 16`.
7. The `a³` term has `k = 4`: coefficient `C(7, 4) = 35`.
8. True. The base case starts the chain and the inductive step
   extends it by one at every stage, so every `n ≥ 1` is reached.
9. `0.636363… = 63/100 + 63/10000 + …`, ratio `1/100`:
   `(63/100)/(99/100) = 63/99 = 7/11`.
10. `a_1 = 100`, `r = 1.05`, `n = 10`:
    `S = 100·(1.05^10 − 1)/0.05 ≈ $1257.79`.

## Unit assessment

1. (a) Arithmetic: differences are all 4. (b) Recursive:
   `a_1 = 5`, `a_n = a_{n−1} + 4`. Explicit:
   `a_n = 5 + 4(n − 1) = 4n + 1`. (c) `a_20 = 81`.
2. By structure: `5·Σ_{k=1}^{20} k + Σ_{k=1}^{20} 2
   = 5·210 + 40 = 1090`. By the arithmetic formula:
   `a_1 = 7`, `a_20 = 102`, `S = 20/2·(7 + 102) = 1090` ✓.
3. `a_1 = 81`, `r = 1/3`, `n = 8`:
   `S = 81·(1 − (1/3)^8)/(2/3) = 3280/27 ≈ 121.48`.
4. (a) Rebound heights `9, 27/4, …` form a geometric series
   with `r = 3/4`, `|r| < 1`, so it converges; sum
   `9/(1 − 3/4) = 36` meters. (b) Total travel
   `12 + 2·36 = 84` meters. Assumption (sample): the rebound
   ratio stays exactly 3/4 forever with no air resistance or
   surface change.
5. `(3x − 2)^4 = 81x^4 − 216x³ + 216x² − 96x + 16`.
   Check at `x = 1`: `81 − 216 + 216 − 96 + 16 = 1
   = (3 − 2)^4` ✓.
6. **Base:** `n = 1`: left `2`; right `1·2 = 2` ✓.
   **Step:** assume `2 + … + 2k = k(k + 1)`. Adding `2(k + 1)`:
   `k(k + 1) + 2(k + 1) = (k + 1)(k + 2)`, the claim for
   `k + 1`. ∎
7. (a) Plan A: arithmetic, `a_1 = 40`, `d = 15`, `n = 12`;
   `a_12 = 205`; total `12/2·(40 + 205) = $1470.00`.
   Plan B: geometric, `a_1 = 30`, `r = 1.1`, `n = 12`;
   total `30·(1.1^12 − 1)/0.1 ≈ $641.53`.
   (b) Recommend Plan A for the larger 12-month total
   ($1470.00 vs $641.53). The recommendation could change if
   the saver cannot sustain the rising Plan A deposits, if
   Plan B's growth rate rises, or if the horizon extends:
   geometric growth eventually overtakes linear growth, so a
   longer horizon could favor Plan B.
8. (a) Domain: `x − 3 ≥ 0` gives `x ≥ 3`, and `x − 5 ≠ 0`
   gives `x ≠ 5`; so `x ≥ 3, x ≠ 5` (in interval form,
   `[3, 5) ∪ (5, ∞)`). (b) For `sin θ ≠ 0` (so
   `1 − cos θ ≠ 0`): `sin²θ = 1 − cos²θ
   = (1 − cos θ)(1 + cos θ)`; dividing by `1 − cos θ` gives
   `1 + cos θ`.
