# Answer Key — Unit 05: Probability Distributions and Statistical Inference

**Adults only.** Worked solutions for every scored item in the six
lessons, Practice Sets A–G, the formative quiz, and the culminating
assessment. Every number below was computed independently and
reconciled with the lesson and practice text (all binomial
probabilities, expected values, variances, z-scores, and normal
approximations were verified by direct calculation on 2026-11-12).
Open responses accept any correct reasoning in the learner's own words;
the key gives the idea that must be present.

## Lesson 01 — Random Variables and Distributions

**Readiness check:** 1. 36 equally likely outcomes. 2. `P(sum = 2) =
1/36`; `P(sum = 12) = 1/36`. 3. `P(red) = 5/10 = 0.5`; `P(red) +
P(blue) = 1`.

**Guided practice:** 1. `P(0) = 1/8, P(1) = 3/8, P(2) = 3/8, P(3) =
1/8`. 2. `P(X ≥ 2) = 3/8 + 1/8 = 1/2`; `P(X < 2) = 1/8 + 3/8 = 1/2`,
or by complement `1 − 1/2 = 1/2`. 3. Primes are 2, 3, 5, 7 — four of
eight sectors — so `P(X is prime) = 4/8 = 1/2`.

**Independent practice:** 1. `P(X = 1) = 3/6 = 1/2` (evens 2, 4, 6),
`P(X = 0) = 1/2`; both rules hold (probabilities in [0, 1], sum 1).
2. `P(X = 1) = 4/10 = 0.4`; `P(X = 0) = 6/10 = 0.6`. 3. (a) Valid —
sums to 1. (b) Invalid — sums to 1.2, breaking the sum-to-1 rule.
(c) Invalid — a probability of −0.1 breaks the 0-to-1 rule (and the
sum is 1.0, so the negative value is the only fault). 4. The error is
treating an empirical relative frequency (2/20 from 20 trials) as the
theoretical probability. The theoretical value is `P(X = 7) = 6/36 =
1/6 ≈ 0.167`. 5. `P(X ≥ 3) = 0.2`; `P(X = 0) = 0.5`.

**Applied task:** The probabilities sum to `0.60 + 0.25 + 0.10 + 0.04
+ 0.01 = 1.00`, and each is between 0 and 1 — valid. The bar graph
falls steeply from 0 to 4 (right-skewed; most boxes have no defective
bulbs). `P(at most 1) = P(0) + P(1) = 0.60 + 0.25 = 0.85`. "At most 1"
means the box contains 0 or 1 defective bulbs.

**Exit check:** Rule 1: `0 ≤ P(x) ≤ 1` for every value. Rule 2: `Σ
P(x) = 1`. The table sums to 1.2, so it is not valid.

## Lesson 02 — Binomial Distributions

**Readiness check:** 1. `C(5, 2) = 10`; it counts the 2-element
subsets of a 5-element set (here, the sequences with 2 successes).
2. Multiply the probabilities. 3. `(1/2)^4 = 1/16`.

**Guided practice:** 1. `P(0) = 1/16, P(1) = 4/16, P(2) = 6/16, P(3)
= 4/16, P(4) = 1/16`; the sum is `16/16 = 1`. 2. `n = 10`, `p =
0.25`; `P(X = 3) = C(10, 3)(0.25)^3(0.75)^7 = 120 · 0.015625 ·
0.133484 ≈ 0.250`. 3. `μ = np = 2.5`; `σ = √(10 · 0.25 · 0.75) =
√1.875 ≈ 1.369`. The mean is the number of correct answers a random
guesser expects on average over many such tests.

**Independent practice:** 1. `n = 5`, `p = 0.8`; `P(X = 5) = 0.8^5 =
0.328` (to three decimals 0.328); `P(X = 4) = C(5, 4)(0.8)^4(0.2) =
0.410`. 2. `P(X = 0) = 0.95^20 ≈ 0.358`; `P(X = 1) = 20(0.05)(0.95)^19
≈ 0.377`. 3. Two errors: the `(1 − p)^(n−k)` factor is missing, and
the result 2.4 exceeds 1, which is impossible for a probability. The
correct value is `P(X = 2) = C(6, 2)(0.4)^2(0.6)^4 = 15 · 0.16 ·
0.1296 = 0.311`. 4. `μ = 20`, `σ = √(100 · 0.2 · 0.8) = 4`. 35 is
`(35 − 20)/4 = 3.75` standard deviations above the mean — very
surprising. 5. `P(X ≥ 1) = 1 − P(X = 0) = 1 − 0.75^8 = 1 − 0.100 =
0.900`.

**Applied task:** (a) Approximately binomial: the shipment is large,
so removing 12 items barely changes the defective proportion; `n =
12`, `p = 0.1`. (b) `P(X = 0) = 0.9^12 ≈ 0.282`; `P(X ≤ 1) = 0.282 +
12(0.1)(0.9)^11 ≈ 0.282 + 0.377 = 0.659`. (c) `P(X ≥ 3) = 1 − [P(0) +
P(1) + P(2)] = 1 − [0.282 + 0.377 + 0.230] ≈ 0.111`. (d) About 11%
of samples drawn from such a shipment would trigger rejection.

**Exit check:** Binary, independent, fixed `n`, same `p`. Example:
drawing cards without replacement fails independence (and constant
`p`).

## Lesson 03 — Expected Value and Spread

**Readiness check:** 1. 1. 2. The values are not equally likely, so
the ordinary average weights them wrongly — the probabilities are the
weights. 3. How far values typically lie from the mean.

**Guided practice:** 1. `E(X) = 0(0.25) + 1(0.50) + 2(0.25) = 1`;
`Var = (0−1)²(0.25) + 0 + (2−1)²(0.25) = 0.5`; `σ = √0.5 ≈ 0.707`.
2. `E = 0(0.5) + 1(0.3) + 3(0.2) = 0.9` points per draw. 3. `E(X) =
7` by symmetry (each die averages 3.5; expected values add).

**Independent practice:** 1. `E(prize) = 10(0.1) + 2(0.4) + 0 = 1.8`;
expected net gain `1.8 − 2 = −$0.20` per ticket. 2. `E(X) = −1(0.5) +
0(0.3) + 2(0.2) = −0.1`; `Var = (−1+0.1)²(0.5) + (0+0.1)²(0.3) +
(2+0.1)²(0.2) = 0.405 + 0.003 + 0.882 = 1.29`; `σ = √1.29 ≈ 1.136`.
3. Empirical expected points per attempt `= 0.68`; the theoretical
value at 70% skill is 0.70 — the 100 attempts came in slightly below
the long-run average, which is ordinary sampling variation. 4. The
error is taking an unweighted average: probabilities are the weights.
Correct: `E = 2(0.8) + 4(0.2) = 2.4`. 5. The `σ = $5.00` game is
riskier: a typical result lands about $5 from the average, so a short
run can easily lose the whole $10, while the `σ = $0.50` game stays
near its average.

**Applied task:** (a) `P(0) = 10/20 = 0.5, P(5) = 6/20 = 0.3, P(10) =
3/20 = 0.15, P(50) = 1/20 = 0.05`; `E(X) = 0 + 1.5 + 1.5 + 2.5 =
$5.50`. (b) Expected total cost `5.50 + 4 = $9.50` per customer.
(c) `Var = (0−5.5)²(0.5) + (5−5.5)²(0.3) + (10−5.5)²(0.15) +
(50−5.5)²(0.05) = 15.125 + 0.075 + 3.0375 + 99.0125 = 117.25`;
`σ = √117.25 ≈ 10.83`. (d) The standard deviation matters because
the rare $50 prizes make costs lumpy: most customers cost little, but
occasional customers cost a lot, so the business must be able to
absorb the swings even though the average is fixed.

**Exit check:** `E(X) = 0(0.25) + 1(0.75) = 0.75`. Over many
repetitions the average value is 0.75.

## Lesson 04 — Decisions by Expected Value

**Readiness check:** 1. +$0.875 per play. 2. $1.875 (the expected
prize). 3. The house.

**Guided practice:** 1. `E(prize) = 4(0.25) + 1(0.5) + 0 = 1.5`; the
fair ticket price is $1.50. 2. Promotion Q is cheaper on average
($2.80 < $3.00), but its standard deviation is four times larger
($4.00 vs. $1.00), so its costs are much less predictable — an owner
who needs predictable costs may still choose P. 3. The die procedure
is fair: each learner has probability 3/6 = 1/2. The changed procedure
is unfair: the first learner wins with probability 2/6 = 1/3 and the
second with 4/6 = 2/3.

**Independent practice:** 1. `E(prize) = (4·20 + 12·5)/52 = 140/52 ≈
$2.69`; expected net gain `2.69 − 3 ≈ −$0.31` per play — the house has
the edge by about 31 cents per play. 2. Raffle A: `E(net) =
(1/100)(195) + (99/100)(−5) = 1.95 − 4.95 = −$3.00`. Raffle B:
`E(net) = (1/500)(298) + (499/500)(−2) = 0.596 − 1.996 = −$1.40`. B
loses less. 3. The error is treating a long-run average as a
single-play guarantee: the expected value describes the average over
many plays, not the outcome of the next play (which is one of the
game's discrete outcomes). 4. Option Y has the lower expected cost
($1,100 < $1,200), but its standard deviation is $2,000 against X's
$300 — Y carries the risk of a very expensive year that X does not.
5. Roll a fair die: 1 → learner A, 2 → B, 3 → C, 4 → D; re-roll on 5
or 6. Each learner's probability is 1/4, and `1/4 + 1/4 + 1/4 + 1/4 =
1`.

**Applied task:** (a) `E(prize) = 5(0.10) + 1(0.30) + 0 = $0.80`; the
fair ticket price is $0.80. (b) At $1 the fair's edge is `1 − 0.80 =
$0.20` per play. (c) Over 500 plays the fair expects to gain about
`500 · 0.20 = $100`. (d) At $1.50 the player's expected net gain is
`0.80 − 1.50 = −$0.70` per play — the new price favors the fair, and
is not fair.

**Exit check:** The fair price is $4.20. At a $5 ticket the player's
expected net gain is `4.20 − 5 = −$0.80` per play.

## Lesson 05 — The Normal Distribution

**Readiness check:** 1. 2 standard deviations. 2. `P(6 ≤ X ≤ 8) =
(5 + 6 + 5)/36 = 16/36 = 4/9 ≈ 0.444`. 3. `μ = 60`, `σ = √42 ≈ 6.48`.

**Guided practice:** 1. `P(X > 115) ≈ 0.16`; `P(85 < X < 115) ≈
0.68`; `P(X < 70) ≈ 0.025`. 2. `z = (60 − 50)/4 = 2.5`; `z = (130 −
100)/15 = 2.0`. The first value (2.5 standard deviations above its
mean) is more unusual. 3. `np = 32 ≥ 10` and `n(1 − p) = 48 ≥ 10` —
the condition holds; `μ = 32`, `σ = √(80 · 0.4 · 0.6) = √19.2 ≈
4.38`.

**Independent practice:** 1. About 68% between 162 and 178 cm;
about 2.5% taller than 186 cm. 2. `z = (488 − 500)/6 = −2.0` — the bag
is 2 standard deviations below the mean, so yes, it is unusually
light (about 2.5% of bags are lighter). 3. `np = 60 · 0.05 = 3 < 10`
— the condition fails, so the normal approximation should not be
used; use the binomial formula. 4. `μ = 200`, `σ = √(400 · 0.5 · 0.5)
= 10`; with the continuity correction `z = (219.5 − 200)/10 = 1.95`,
so `P(X ≥ 220) ≈ 0.026`. 5. The error is reading "2" as 2 units: the
rule says within 2 *standard deviations* of the mean, i.e. within
`μ ± 2σ`.

**Applied task:** (a) About 68% (105 to 135 is `μ ± σ`). (b) About
2.5% (150 is `μ + 2σ`). (c) `z = (90 − 120)/15 = −2.0` — the battery
lasted 2 standard deviations less than average, which is unusually
short (about 2.5% of batteries are shorter-lived). (d) No: `np = 100 ·
0.025 = 2.5 < 10`, so the large-counts condition fails — use the exact
binomial instead.

**Exit check:** `P(X > 24) ≈ 0.16`; `P(12 < X < 28) ≈ 0.997`; `z =
(30 − 20)/4 = 2.5`.

## Lesson 06 — Inference from Distributions

**Readiness check:** 1. The sample size (and the true proportion).
2. `√(0.5 · 0.5 / 400) = 0.025`. 3. A plausible range for the true
proportion, centered on the sample proportion.

**Guided practice:** 1. `SE = 0.05`, margin `≈ 0.10`, plausible range
36%–56%. It includes 50%, so the poll does not establish which side
is ahead. 2. `SE = √(0.9 · 0.1 / 200) ≈ 0.0212`; `z = (0.85 − 0.90) /
0.0212 ≈ −2.36`; `P(Z ≤ −2.36) ≈ 0.009` — surprising; the claim is
doubtful. 3. Poll B's margin is one-tenth of Poll A's: margins shrink
like `1/√n`, and `√(10,000/100) = 10`.

**Independent practice:** 1. `SE = √(0.25/625) = 0.02`; margin `≈
0.04`; plausible range 51%–59%. 2. `SE = √(0.8 · 0.2 / 50) ≈ 0.0566`;
`z = (0.66 − 0.80)/0.0566 ≈ −2.47`; `P(Z ≤ −2.47) ≈ 0.0067` — a
result this low would happen about 7 times in 1,000 if the claim were
true, so the claim is doubtful. 3. The error is "definitely": the
interval is a plausible range (about 95% confidence), not a guarantee
— the true value could lie outside it. 4. `np = 25 · 0.5 = 12.5 ≥ 10`
and `n(1 − p) = 12.5 ≥ 10`, so the normal approximation is justified
here. If it failed, use simulation or the exact binomial. 5. Accept
any version of: simulation builds the sampling distribution by
repeating the sampling process and watching the spread; the formula
`√(p(1 − p)/n)` gives that spread directly; both show the spread
shrinks like `1/√n`.

**Applied task:** (a) `SE = √(0.6 · 0.4 / 150) = √0.0016 = 0.04`.
(b) `z = (0.52 − 0.60)/0.04 = −2.0`; `P(Z ≤ −2.0) ≈ 0.0228` — about
a 2% chance. (c) Verdict: the claim is doubtful on this evidence,
assuming a random sample and valid normal approximation (`np = 90`,
`n(1 − p) = 60`). (d) The error is that size does not fix bias: a
large sample drawn badly gives a precisely wrong answer; the margin
of error only measures sampling variation, not sampling bias.

**Exit check:** `SE = √(0.55 · 0.45 / 400) ≈ 0.0249`; `z = (0.48 −
0.55)/0.0249 ≈ −2.81`; `P(Z ≤ −2.81) ≈ 0.0025` — surprising; the
sample counts against the claim.

## Practice Set A — Distributions

1. `P(0) = 1/8, P(1) = 3/8, P(2) = 3/8, P(3) = 1/8`; `P(X ≥ 2) = 3/8
   + 1/8 = 1/2`.
2. `P(X = 1) = 3/6 = 1/2` (primes 2, 3, 5); `P(X = 0) = 1/2`.
3. Invalid — the probabilities sum to `0.15 + 0.35 + 0.40 + 0.20 =
   1.10`, breaking the sum-to-1 rule.
4. Multiples of 3 are 3 and 6 — two of eight sectors — so `P(Y = 1) =
   2/8 = 0.25`.
5. `P(sum 7) = 6/36`, `P(sum 11) = 2/36`; total `8/36 = 2/9 ≈
   0.222`.
6. Empirical: red `24/50 = 0.48`, blue `16/50 = 0.32`, green `10/50 =
   0.20`. Theoretical: 0.5, 0.3, 0.2. Each relative frequency is within
   0.02 of its theoretical probability — close, as the Law of Large
   Numbers predicts after 50 trials.
7. The table is invalid: `0.2 + 0.5 + 0.4 = 1.1 > 1`. At least one
   probability is wrong; no calculation built on the table can be
   trusted until it is re-derived.

## Practice Set B — Binomial distributions

1. `P(X = 5) = C(10, 5)(0.5)^10 = 252/1024 ≈ 0.246`.
2. `P(X = 0) = 0.75^8 ≈ 0.100`; `P(X = 1) = 8(0.25)(0.75)^7 ≈
   0.267`.
3. `P(X ≥ 9) = C(10, 9)(0.8)^9(0.2) + (0.8)^10 = 0.268 + 0.107 ≈
   0.376`; `μ = 8`; `σ = √(10 · 0.8 · 0.2) = √1.6 ≈ 1.265`.
4. `μ = 2`; `σ = √(20 · 0.1 · 0.9) = √1.8 ≈ 1.342`; `P(X = 2) =
   C(20, 2)(0.1)^2(0.9)^18 ≈ 0.285`.
5. Not binomial: drawing without replacement changes the probability
   of an ace after each draw, so the trials are not independent and
   `p` is not constant (conditions 2 and 4 fail).
6. `P(X = 3) = C(12, 3)(0.25)^3(0.75)^9 ≈ 0.258`; `μ = 3`; `σ =
   √(12 · 0.25 · 0.75) = 1.5`.
7. `P(0) = 0.117649, P(1) = 0.302526, P(2) = 0.324135, P(3) =
   0.185220, P(4) = 0.059535, P(5) = 0.010206, P(6) = 0.000729`; the
   sum is 1.000000.

## Practice Set C — Expected value and spread

1. `E(X) = 0(0.1) + 1(0.2) + 2(0.4) + 3(0.3) = 1.9`; `Var = 0.89`;
   `σ = √0.89 ≈ 0.943`.
2. `E(prize) = 6(1/6) + 2(1/6) + 0 = $1.33`; expected net gain `1.33
   − 1 = $0.33` per play; fair ticket price $1.33.
3. `E(X) = 7`; `Var = 2 · (35/12) = 35/6`; `σ = √(35/6) ≈ 2.415`.
4. Empirical expected value `= (18 + 44 + 57 + 84 + 85 + 138)/120 =
   426/120 = 3.55`, close to the theoretical 3.5.
5. `E(payout) = 20(0.05) + 5(0.25) + 0 = $2.25`; expected net gain
   `2.25 − 3 = −$0.75` — the house has the edge.
6. `E(X) = −2(0.5) + 0(0.3) + 5(0.2) = 0`; `Var = (−2)²(0.5) + 0 +
   5²(0.2) = 2 + 5 = 7`; `σ = √7 ≈ 2.646`.
7. The error is taking an unweighted average of the values. The
   probabilities are the weights: `E = 2(0.8) + 4(0.2) = 2.4`.

## Practice Set D — Decisions by expected value

1. `E(prize) = (2·10 + 2·5)/52 = 30/52 ≈ $0.58`; expected net gain
   `0.58 − 1 ≈ −$0.42` per play — the house has the edge by about 42
   cents per play.
2. Raffle A: `E(net) = −$3.00`. Raffle B: `E(net) = −$1.40`. B loses
   less; a buyer choosing by expected value picks B.
3. Roll a fair die: 1 → learner 1, 2 → learner 2, 3 → learner 3, 4 →
   learner 4; re-roll on 5 or 6. Each learner's probability is 1/4,
   and the four sum to 1. (Any equivalent fair scheme earns full
   credit.)
4. Expected repair cost `= 0.05 · $40 = $2.00` per item; a $2.00
   warranty exactly covers the expected cost.
5. Play X: `E = 2(0.6) = 1.2` points, `σ = √(4 · 0.6 · 0.4) ≈ 0.980`.
   Play Y: `E = 3(0.4) = 1.2` points, `σ = √(9 · 0.4 · 0.6) ≈
   1.470`. Play X is steadier. A team might still choose Y late in a
   game when it needs a big swing — higher variance means a better
   chance of the 3-point outcome, even though the average is the same.
6. Accept any version of: the expected value is a long-run average and
   the standard deviation is $10, so individual plays commonly swing
   $10 or more from the average; a run of bad plays can exhaust $20
   long before the long run arrives.

## Practice Set E — The normal distribution

1. `P(X > 55) ≈ 0.16`; `P(45 < X < 55) ≈ 0.68`; `P(X < 40) ≈ 0.025`.
2. `z = (72 − 60)/6 = 2.0`; `z = (88 − 75)/10 = 1.3`. The first value
   (2.0 standard deviations above its mean) is more unusual.
3. `np = 120 ≥ 10` and `n(1 − p) = 180 ≥ 10` — the condition holds;
   `μ = 120`, `σ = √(300 · 0.4 · 0.6) = √72 ≈ 8.49`; with the
   continuity correction `z = (134.5 − 120)/8.49 ≈ 1.71`, so `P(X ≥
   135) ≈ 0.044`.
4. About 68% between 158 and 172 cm; about 2.5% taller than 179 cm;
   `z = (151 − 165)/7 = −2.0`.
5. `np = 60 · 0.05 = 3 < 10` — the condition fails; the normal
   approximation should not be used (use the binomial formula).
6. `z = (242 − 250)/4 = −2.0`; `P(X < 242) ≈ 0.025`.

## Practice Set F — Inference from distributions

1. `SE = √(0.25/900) ≈ 0.0167`; margin `≈ 0.033`; plausible range
   50.7%–57.3%. A majority is established, but only just — the lower
   end of the range is barely above 50%.
2. `SE = √(0.25/64) = 0.0625`; `z = (0.625 − 0.5)/0.0625 = 2.0`;
   `P(Z ≥ 2.0) ≈ 0.023` — surprising; the claim that the coin is fair
   is doubtful on this evidence.
3. Poll B's margin is one-tenth of Poll A's: margins shrink like
   `1/√n`, and `√(10,000/100) = 10`.
4. `SE = √(0.4 · 0.6 / 36) ≈ 0.0816`; `z = (0.30 − 0.40)/0.0816 ≈
   −1.22`; `P(Z ≤ −1.22) ≈ 0.11` — not surprising; the claim stands.
5. Accept any version of: the survey is voluntary-response — only
   subscribers who chose to reply are counted, and people who exercise
   daily are more likely to reply. A larger sample of the same biased
   process only sharpens the bias; it cannot fix who was left out.
6. The formula gives `√(0.5 · 0.5 / 100) = 0.05` — the same spread the
   simulation showed. The agreement shows the simulation's pile-up is
   governed by the formula, and the formula is the simulation's result
   written down.

## Practice Set G — Mixed review

1. `P(sum = 8) = 5/36 ≈ 0.139`.
2. `P(X = 3) = C(5, 3)(0.6)^3(0.4)^2 = 10 · 0.216 · 0.16 = 0.346`;
   `μ = 3`; `σ = √(5 · 0.6 · 0.4) = √1.2 ≈ 1.095`.
3. `E(X) = 0(0.5) + 2(0.3) + 5(0.2) = 1.6`; `Var = 3.64`; `σ = √3.64
   ≈ 1.908`.
4. Fair ticket price `= E(prize) = 8(0.25) + 0 = $2.00`.
5. `P(70 < X < 90) ≈ 0.68` (the interval `μ ± σ`); `z = (100 − 80)/10
   = 2.0`.
6. `SE = √(0.25/2500) = 0.01`; margin `≈ 0.02`; plausible range
   46%–50%. A majority is not established — 50% sits at the top edge
   of the range.
7. Accept any version of: a fair game's expected net gain is zero
   *on average over many plays*, but each play still wins or loses a
   discrete amount; the standard deviation means short runs wander
   from the average, so 10 plays can easily end below zero.

## Formative Quiz — Unit 05 (Week 22)

1. `P(sum = 9) = 4/36 = 1/9 ≈ 0.111`. (2 pts)
2. (a) is valid: every probability is between 0 and 1 and they sum to
   1. (b) is invalid: the probabilities sum to 1.2. (2 pts)
3. `P(X = 2) = C(8, 2)(0.25)^2(0.75)^6 = 28 · 0.0625 · 0.177979 ≈
   0.311`. (2 pts)
4. `E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 1.7`. (2 pts)
5. `E(prize) = 2(1/2) + 1(1/4) + 0(1/8) + 5(1/8) = 1.875` — the fair
   ticket price is $1.88 (exact $1.87½). (2 pts)
6. 115 is one standard deviation above the mean, so `P(X > 115) ≈
   0.16`. (2 pts)
7. `z = (84 − 70)/8 = 1.75`. (2 pts)
8. `np = 50 · 0.1 = 5 < 10` — the large-counts condition fails, so the
   normal approximation should not be used. (2 pts)
9. `SE = √(0.25/100) = 0.05`; margin `≈ 0.10`; plausible range 42%–
   62%. (2 pts)
10. Accept any version of: the expected value is the average over very
    many plays, not a promise about one play; the next play pays one
    of the game's discrete outcomes, and the standard deviation says
    how far a single play typically lands from the average. (2 pts)

## Culminating Assessment — Unit 05 (Week 22)

**Task 1 (8 pts):** (a) `P(0) = 1/8, P(1) = 3/8, P(2) = 3/8, P(3) =
1/8`. (b) Each probability is between 0 and 1, and they sum to `8/8 =
1` — valid. (c) `P(X ≥ 2) = 3/8 + 1/8 = 1/2`; `E(X) = 0(1/8) +
1(3/8) + 2(3/8) + 3(1/8) = 12/8 = 1.5`.

**Task 2 (8 pts):** (a) Binary (make/miss), independent attempts,
`n = 5` fixed, `p = 0.8` constant — binomial with `n = 5`, `p =
0.8`. (b) `P(X = 4) = C(5, 4)(0.8)^4(0.2) = 0.410`; `P(X ≥ 4) = 0.410
+ (0.8)^5 = 0.410 + 0.328 = 0.737`. (c) `μ = 4`, `σ = √(5 · 0.8 ·
0.2) = √0.8 ≈ 0.894`; the mean is the number of free throws she is
expected to make per 5 attempts, on average over many games.

**Task 3 (10 pts):** (a) `P(G = 48) = 0.01` (win $50, net `50 − 2`),
`P(G = 3) = 0.09` (win $5, net `5 − 2`), `P(G = −2) = 0.90`.
(b) `E(G) = 48(0.01) + 3(0.09) + (−2)(0.90) = 0.48 + 0.27 − 1.80 =
−$1.05` — a buyer loses $1.05 per card on average. (c) `Var =
(48+1.05)²(0.01) + (3+1.05)²(0.09) + (−2+1.05)²(0.90) = 24.059 +
1.476 + 0.812 = 26.35`; `σ = √26.35 ≈ 5.13`. (d) Fair price `= E(prize)
= 50(0.01) + 5(0.09) + 0 = $0.95`.

**Task 4 (8 pts):** (a) About 68% (162–178 is `μ ± σ`). (b) About
2.5% (186 is `μ + 2σ`). (c) About 95% fall between `170 − 16 = 154`
cm and `170 + 16 = 186` cm. (d) `z = (150 − 170)/8 = −2.5` — unusual:
about 0.6% of adults are that far below the mean.

**Task 5 (8 pts):** (a) `n = 120`, `p = 0.25`; `np = 30 ≥ 10` and
`n(1 − p) = 90 ≥ 10` — the condition holds. (b) `μ = 30`, `σ =
√(120 · 0.25 · 0.75) = √22.5 ≈ 4.74`. (c) With the continuity
correction, `z = (39.5 − 30)/4.74 ≈ 2.00`, so `P(X ≥ 40) ≈ 0.023`.
(d) Yes — getting 40 or more right by guessing would happen only
about 2% of the time, so it is surprising.

**Task 6 (8 pts):** (a) `SE = √(0.8 · 0.2 / 50) = √0.0032 ≈ 0.0566`.
(b) `z = (0.64 − 0.80)/0.0566 ≈ −2.83`. (c) `P(Z ≤ −2.83) ≈ 0.0023`
— about 2 chances in 1,000. (d) Verdict: the claim is doubtful on
this evidence. Assumption: the sample was random (and the normal
approximation applies: `np = 40 ≥ 10`, `n(1 − p) = 10 ≥ 10`).
