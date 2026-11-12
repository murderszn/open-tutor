# Lesson 01 — Random Variables and Probability Distributions

**Goal:** You will define a random variable, build its probability
distribution as a table and a graph, and check the two rules every
distribution must obey. **Time:** ~50 minutes. **Materials:** paper,
two dice (or a dice-roller in a spreadsheet), Desmos for graphing only.

## Readiness check

1. Two fair dice are rolled. How many equally likely outcomes are there
   in total? (Answer in the key: 36.)
2. What is the probability of rolling a sum of 2? A sum of 12?
3. A bag holds 5 red and 5 blue marbles. You draw one marble without
   looking. What is `P(red)`? What is `P(red) + P(blue)`?

## Teaching

A **random variable** is a number assigned to the outcome of a chance
process. Roll two dice and let `X` be the sum: `X` can be 2, 3, 4, …,
12. Draw a marble and let `X` be the points it is worth. Toss a coin
three times and let `X` be the number of heads. The variable is
"random" because we do not know its value before the process runs — but
we *can* know the probability of every value it might take.

A **probability distribution** lists every possible value of a random
variable together with its probability. It can be a table, a graph, or
a formula. Every distribution must pass two checks:

1. **Each probability is between 0 and 1, inclusive:** `0 ≤ P(x) ≤ 1`
   for every value `x`. A probability of 1.2 or −0.1 is impossible, and
   its presence means the table is wrong.
2. **The probabilities add to 1:** `Σ P(x) = 1`. Something must happen;
   the probabilities of all the possibilities must account for all of
   the chance.

A **theoretical distribution** is built from the assumptions of the
process (a fair die has six equally likely faces). An **empirical
distribution** is built from observed data: run the process many times
and use relative frequencies as the probabilities. The Law of Large
Numbers — from grade 11 — says that as the number of repetitions grows,
the empirical distribution settles toward the theoretical one. They are
not the same thing, and confusing them is the most common error in this
unit: a theoretical probability is a claim about the process; an
empirical probability is a summary of what happened so far.

A **discrete** random variable takes separate, countable values (2, 3,
4, …). This unit works with discrete variables until Lesson 05, where
the normal curve handles a continuous one.

### Worked example 1 — The two-dice sum distribution

Let `X` be the sum of two fair dice. There are 36 equally likely
outcomes. Count the pairs that give each sum: sum 2 has 1 pair (1, 1);
sum 3 has 2 pairs; sum 4 has 3; sum 5 has 4; sum 6 has 5; sum 7 has 6;
sum 8 has 5; sum 9 has 4; sum 10 has 3; sum 11 has 2; sum 12 has 1.
So the distribution is:

| `x` | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `P(X = x)` | 1/36 | 2/36 | 3/36 | 4/36 | 5/36 | 6/36 | 5/36 | 4/36 | 3/36 | 2/36 | 1/36 |

Check the rules: every probability is between 0 and 1, and the
numerators add to `1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1 = 36`,
so the probabilities add to `36/36 = 1`. The distribution is valid.
Notice the shape: it rises to a peak at 7 and falls symmetrically —
7 is the most likely sum, with `P(X = 7) = 6/36 = 1/6 ≈ 0.167`. A graph
of this table (value on the horizontal axis, probability on the
vertical axis) is a triangle-shaped bar chart, symmetric about 7.

To find the probability of an event, add the probabilities of the
values in it: `P(X ≥ 10) = P(10) + P(11) + P(12) = 3/36 + 2/36 + 1/36
= 6/36 = 1/6`. And `P(X is even) = P(2) + P(4) + P(6) + P(8) + P(10) +
P(12) = (1 + 3 + 5 + 5 + 3 + 1)/36 = 18/36 = 1/2`, as symmetry suggests.

### Worked example 2 — A points distribution from a bag

A bag holds 5 red marbles, 3 blue marbles, and 2 green marbles (10 in
all), well mixed. One marble is drawn. Let `X` be the points the draw
is worth: red is worth 0 points, blue is worth 1 point, green is worth
3 points.

`P(X = 0) = 5/10 = 0.5` (red), `P(X = 1) = 3/10 = 0.3` (blue),
`P(X = 3) = 2/10 = 0.2` (green). Check: `0.5 + 0.3 + 0.2 = 1`, and
every probability is between 0 and 1 — valid. Note that `X` never
takes the value 2: that is fine; a value with probability 0 simply
does not appear in the table. `P(X ≥ 1) = P(1) + P(3) = 0.3 + 0.2 =
0.5` — half the draws score at least 1 point. The complement is
useful too: `P(X = 0) = 1 − P(X ≥ 1) = 1 − 0.5 = 0.5`.

### Worked example 3 — Spotting an invalid distribution

A learner proposes this distribution for the number of defective items
in a box of 3: `P(0) = 0.50, P(1) = 0.30, P(2) = 0.15, P(3) = 0.10`.
Each probability is between 0 and 1 — but the sum is `0.50 + 0.30 +
0.15 + 0.10 = 1.05`, which is more than 1. The table is invalid: at
least one probability is wrong, and no calculation built on it can be
trusted. Fixing it means going back to the process and re-counting,
not adjusting a number to make the sum work.

## Guided practice (with hints)

1. Toss a fair coin three times. Let `X` be the number of heads. Build
   the distribution table for `X`. (Hint: list all 8 outcomes first;
   how many give 0 heads? 1 head? 2 heads? 3 heads?)
2. Use your table from (1) to find `P(X ≥ 2)`. Then find `P(X < 2)` two
   ways: by adding, and by complement.
3. A spinner is divided into 8 equal sectors numbered 1–8. Let `X` be
   the number shown. Write the distribution and find `P(X is a prime)`.
   (Hint: the primes from 1 to 8 are 2, 3, 5, 7.)

## Independent practice

1. A fair die is rolled once. Let `X` be 1 if the result is even and 0
   if it is odd. Build the distribution table for `X` and check both
   rules.
2. A box holds 4 white balls and 6 black balls. One ball is drawn. Let
   `X` be 1 for white and 0 for black. Write the distribution and find
   `P(X = 1)`.
3. Decide whether each table can be a probability distribution. If not,
   say which rule fails.
   - (a) `P(0) = 0.2, P(1) = 0.5, P(2) = 0.3`
   - (b) `P(0) = 0.4, P(1) = 0.4, P(2) = 0.4`
   - (c) `P(0) = −0.1, P(1) = 0.6, P(2) = 0.5`
4. **Error analysis.** A learner writes: "I rolled two dice 20 times
   and got a sum of 7 only twice, so `P(X = 7) = 2/20 = 0.1`." Explain
   the error, and state the theoretical value.
5. A game uses the marble bag from Worked example 2. What is the
   probability a draw scores at least 3 points? What is the probability
   it scores exactly 0 points?

## Applied task

A quality-control inspector opens boxes of 4 light bulbs. Historical
records (fictional practice data) give this distribution for `X`, the
number of defective bulbs in a box: `P(0) = 0.60, P(1) = 0.25,
P(2) = 0.10, P(3) = 0.04, P(4) = 0.01`. Verify that it is a valid
distribution, sketch its bar graph (describe the shape in words), and
find the probability that a box contains at most 1 defective bulb.
Then explain in one sentence what "at most 1" means for the inspector.

## Exit check

Write the two rules a probability distribution must obey, and check
whether `P(1) = 0.3, P(2) = 0.3, P(3) = 0.3, P(4) = 0.3` is a valid
distribution.

## Supports, alternate modes, and extensions

- **Reading/language access:** say each distribution aloud in words
  ("the probability that X equals 7 is one sixth") before writing
  symbols; keep the two rules on an index card.
- **Alternate response mode:** a learner may give a distribution as a
  labeled bar sketch with the probabilities written on the bars, plus a
  one-sentence check of each rule, instead of a formal table.
- **Extension:** for the three-coin distribution in Guided practice,
  verify the probabilities another way — count the outcomes with
  `C(3, k)` from Unit 04 and confirm `C(3,0) + C(3,1) + C(3,2) +
  C(3,3) = 8`.

## Teacher note

Likely misconceptions: (a) treating an empirical relative frequency
from a few trials as the theoretical probability; (b) forgetting that
probabilities must sum to exactly 1 and accepting a table that sums to
0.98 or 1.05; (c) listing values with probability 0 as if they were
impossible in principle rather than absent from this process. Answers:
`answer-key.md`, Lesson 01.
