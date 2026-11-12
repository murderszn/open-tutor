# Lesson 03 — Expected Value and Spread

**Goal:** You will compute and interpret the expected value and the
standard deviation of a discrete random variable, including empirical
expected values from observed data. **Time:** ~50 minutes.
**Materials:** paper, the spinner illustration
(`../assets/prize-spinner-game.png`), spreadsheet for repeated
calculations.

## Readiness check

1. A distribution has values 0, 1, 2 with probabilities 0.25, 0.50,
   0.25. What is the ordinary average of the three *values*? (Answer in
   the key: 1.)
2. Why is that ordinary average the wrong summary of what the variable
   typically equals? (Hint: the values are not equally likely.)
3. What does the standard deviation of a dataset measure?

## Teaching

The **expected value** of a discrete random variable `X` is the
weighted average of its values, weighted by their probabilities:

`E(X) = μ = Σ x · P(x)`.

It is the **long-run average**: if the process were repeated very many
times, the average of the observed values would settle near `E(X)`.
It is also called the **mean of the distribution**. Two warnings come
with it. First, the expected value is often a value `X` can never take
(the expected sum of two dice is 7, which is fine — but the expected
number of heads in one coin toss is 0.5, and no single toss gives half
a head). Second, it says nothing about a single play: a game with
expected net gain `+$0.88` per play can still lose money on the next
ten plays. The expected value is a statement about the long run, and
the long run is longer than a learner's patience.

The **variance** and **standard deviation** of a distribution measure
how far values typically wander from the expected value:

`Var(X) = σ² = Σ (x − μ)² · P(x)`, and `σ = √Var(X)`.

Each squared distance from the mean is weighted by its probability,
exactly as the mean weights the values themselves. A large `σ` means
the variable is volatile — individual results often land far from the
mean — and a small `σ` means results cluster near it. For a binomial
distribution, `σ = √(np(1 − p))` is this same formula worked out in
advance; it is not a second definition.

An **empirical expected value** replaces theoretical probabilities with
observed relative frequencies: run the process `N` times, count how
often each value occurred, and compute `Σ x · (count/N)`. That is
exactly the ordinary average of the `N` observed values — and the Law
of Large Numbers says it approaches the theoretical expected value as
`N` grows. Comparing the two is a check on the theory: if 200 spins
give an empirical expected value far from the theoretical one, either
the theory's probabilities are wrong or the spinner is not fair.

### Worked example 1 — The prize spinner: expected net gain

The spinner in `../assets/prize-spinner-game.png` has four sectors:
red covers `1/2` of the circle, blue `1/4`, green `1/8`, yellow `1/8`.
A ticket costs $1. The prize is $2 for red, $1 for blue, $0 for green,
and $5 for yellow. Let `G` be the player's **net gain** (prize minus
the $1 ticket) on one play:

| sector | red | blue | green | yellow |
|---|---|---|---|---|
| `P(sector)` | 1/2 | 1/4 | 1/8 | 1/8 |
| prize | $2 | $1 | $0 | $5 |
| net gain `g` | +$1 | $0 | −$1 | +$4 |

`E(G) = (1/2)(1) + (1/4)(0) + (1/8)(−1) + (1/8)(4) = 0.5 + 0 − 0.125
+ 0.5 = 0.875`.

Interpretation: over very many plays, the player gains about $0.88
per play on average — the game favors the player at a $1 ticket price.
That does **not** mean the player gains $0.88 on the next play: the
next play gains $1, $0, −$1, or $4, and never $0.88.

The spread: `μ = 0.875`, so

`Var(G) = (1 − 0.875)²(1/2) + (0 − 0.875)²(1/4) + (−1 − 0.875)²(1/8)
+ (4 − 0.875)²(1/8)`
`= 0.015625(0.5) + 0.765625(0.25) + 3.515625(0.125) + 9.765625(0.125)`
`= 0.0078125 + 0.19140625 + 0.439453125 + 1.220703125 = 1.859375`.

`σ = √1.859375 ≈ 1.364`. A typical single play lands about $1.36
away from the $0.88 average — the game is volatile relative to its
edge, so short runs of plays will often disagree with the long-run
average. Both numbers matter: the mean says who wins in the long run,
and the standard deviation says how bumpy the road there is.

### Worked example 2 — Empirical expected value: 200 spins

Suppose the spinner is spun 200 times (fictional practice data) with
these results: red 96 times, blue 54 times, green 22 times, yellow 28
times. The relative frequencies are `96/200 = 0.48`, `54/200 = 0.27`,
`22/200 = 0.11`, and `28/200 = 0.14`. The empirical expected net gain
is

`E_empirical(G) = 0.48(1) + 0.27(0) + 0.11(−1) + 0.14(4) = 0.48 + 0 −
0.11 + 0.56 = 0.93`.

The theoretical expected value is 0.875, so the empirical value 0.93
is close — within $0.06 — which is what the Law of Large Numbers
leads us to expect after 200 trials. If the empirical value had been,
say, −$0.50, that would be evidence that the spinner's true sector
sizes differ from the picture, or that the spins were not random. The
comparison is the point: theory predicts, data checks.

### Worked example 3 — A raffle: expected loss

A school sells 1,000 raffle tickets at $2 each. There is one $500
prize, one $100 prize, and five $20 prizes; every other ticket wins
nothing. Let `G` be the net gain on one ticket.

`P(G = 498) = 1/1000` (win $500, net `500 − 2`), `P(G = 98) =
1/1000`, `P(G = 18) = 5/1000`, `P(G = −2) = 993/1000`.

`E(G) = (1/1000)(498) + (1/1000)(98) + (5/1000)(18) + (993/1000)(−2)`
`= 0.498 + 0.098 + 0.09 − 1.986 = −1.30`.

A ticket buyer loses $1.30 on average per ticket. The raffle is a
fundraiser, not a fair game: the expected loss is the donation. Notice
the expected value is negative even though most tickets lose exactly
$2 — the rare big prizes pull the average up from −$2 to −$1.30.

## Guided practice (with hints)

1. A random variable takes values 0, 1, 2 with probabilities 0.25,
   0.50, 0.25. Find `E(X)` and the standard deviation `σ`. (Hint:
   the mean is 1; the variance is `0.25 + 0 + 0.25`.)
2. For the marble bag of Lesson 01 (red 0 points with probability 0.5,
   blue 1 point with probability 0.3, green 3 points with probability
   0.2), find the expected number of points per draw.
3. The two-dice sum `X` has the distribution from Lesson 01. Find
   `E(X)`. (Hint: symmetry says the answer before you compute it.)

## Independent practice

1. A game pays $10 with probability 0.1, $2 with probability 0.4, and
   $0 with probability 0.5. Find the expected payout. If a ticket costs
   $2, what is the expected net gain?
2. A random variable takes values −1, 0, 2 with probabilities 0.5, 0.3,
   0.2. Find `E(X)` and `σ` to two decimal places.
3. A basketball player takes 100 free throws and makes 68. The
   empirical distribution of "makes" per single attempt is `P(make) =
   0.68`, `P(miss) = 0.32`. What is the empirical expected number of
   points (1 per make) per attempt? How does it compare with the
   theoretical value if her true skill is 70%?
4. **Error analysis.** A learner computes the expected value of a
   distribution with values 1, 2, 3 and probabilities 0.2, 0.3, 0.5 as
   `(1 + 2 + 3)/3 = 2`. Explain the error and give the correct value.
5. Two games have the same expected net gain, $0. One has `σ = $0.50`,
   the other `σ = $5.00`. Which game is riskier for a player with
   only $10 to spend, and why? Answer in two or three sentences.

## Applied task

A small business runs a promotion: every customer draws one card from
a deck of 20 cards (fictional practice data). 10 cards win $0, 6 cards
win $5, 3 cards win $10, and 1 card wins $50. (a) Build the
distribution of the prize `X` and find `E(X)`. (b) The promotion costs
the business $4 per customer in handling. What is the business's
expected total cost per customer (prize plus handling)? (c) Find the
standard deviation of the prize. (d) In one sentence, explain why the
standard deviation matters to the business even though the expected
cost is fixed.

## Exit check

A distribution has values 0 and 1 with probabilities 0.25 and 0.75.
Find `E(X)`, and explain in one sentence what the answer means over
many repetitions.

## Supports, alternate modes, and extensions

- **Reading/language access:** always write the expected value with its
  unit ("dollars per play", "points per draw") — a bare number hides
  the meaning.
- **Alternate response mode:** a learner may compute expected values in
  a spreadsheet with one column for values, one for probabilities, and
  one for their products, then sum the product column.
- **Extension:** prove that the expected value of the two-dice sum is 7
  without the full table — use the fact that each die has expected
  value 3.5 and expected values add. (This additivity is used again in
  the project.)

## Teacher note

Likely misconceptions: (a) reading `E(X)` as the outcome of the next
trial instead of a long-run average; (b) computing an unweighted
average of the values; (c) forgetting to subtract the ticket cost when
the question asks for net gain; (d) treating a large `σ` as a sign the
mean is wrong, rather than a sign the results are spread out. Answers:
`answer-key.md`, Lesson 03.
