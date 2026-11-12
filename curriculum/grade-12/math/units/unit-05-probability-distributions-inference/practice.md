# Practice — Unit 05: Probability Distributions and Statistical Inference

Work each set after its lesson (see the pacing table in the unit README).
Show a reason for every step. Solutions are in `answer-key.md`
(adults only). All datasets here are theoretical or clearly labeled
fictional practice data.

## Practice Set A — Distributions (after Lesson 01)

1. Toss a fair coin three times. Let `X` be the number of heads. Build
   the distribution table for `X` and find `P(X ≥ 2)`.
2. Roll a fair die once. Let `X` be 1 if the result is prime (2, 3, or
   5) and 0 otherwise. Build the distribution table for `X`.
3. Decide whether this table can be a probability distribution. If not,
   say which rule fails: `P(0) = 0.15, P(1) = 0.35, P(2) = 0.40,
   P(3) = 0.20`.
4. A spinner has 8 equal sectors numbered 1–8. Let `Y` be 1 if the
   sector is a multiple of 3 and 0 otherwise. Find `P(Y = 1)`.
5. Two fair dice are rolled. Find `P(the sum is 7 or 11)`.
6. A marble bag (5 red, 3 blue, 2 green) is drawn from 50 times, with
   the marble replaced each time (fictional practice data): red 24
   times, blue 16 times, green 10 times. Write the empirical
   distribution and compare each relative frequency with the
   theoretical probability.
7. **Error analysis.** A learner writes: "My distribution is
   `P(1) = 0.2, P(2) = 0.5, P(3) = 0.4`." Explain the error.

## Practice Set B — Binomial distributions (after Lesson 02)

1. For `X ~ B(10, 0.5)`, find `P(X = 5)` to three decimal places.
2. For `X ~ B(8, 0.25)`, find `P(X = 0)` and `P(X = 1)` to three
   decimal places.
3. A free-throw shooter makes 80% of attempts. In 10 attempts, find
   `P(X ≥ 9)` to three decimal places, and state `μ` and `σ`.
4. For `X ~ B(20, 0.1)`, find `μ`, `σ` (to three decimal places), and
   `P(X = 2)` to three decimal places.
5. Explain why drawing 3 cards without replacement from a deck and
   counting aces is **not** a binomial setting. Name the condition
   that fails.
6. A spinner lands on green with probability 1/4. It is spun 12 times.
   Find `P(X = 3)` to three decimal places, and state `μ` and `σ`.
7. Build the full distribution table for `X ~ B(6, 0.3)` (seven values,
   to six decimal places) and check that the probabilities sum to 1.

## Practice Set C — Expected value and spread (after Lesson 03)

1. A random variable takes values 0, 1, 2, 3 with probabilities 0.1,
   0.2, 0.4, 0.3. Find `E(X)` and `σ` (to three decimal places).
2. A die game: roll a fair die; a 6 wins $6, a 5 wins $2, anything else
   wins $0. A ticket costs $1. Find the expected prize, the expected
   net gain, and the fair ticket price.
3. Let `X` be the sum of two fair dice. Find `E(X)` and `σ` (to three
   decimal places). You may use the fact that one die has variance
   `35/12`.
4. A die is rolled 120 times (fictional practice data) with these
   counts: 1 appears 18 times, 2 appears 22 times, 3 appears 19 times,
   4 appears 21 times, 5 appears 17 times, 6 appears 23 times. Find
   the empirical expected value and compare it with the theoretical
   value 3.5.
5. A game pays $20 with probability 0.05, $5 with probability 0.25,
   and $0 with probability 0.70. Find the expected payout. A ticket
   costs $3 — what is the expected net gain, and who has the edge?
6. A random variable takes values −2, 0, 5 with probabilities 0.5, 0.3,
   0.2. Find `E(X)` and `σ` (to three decimal places).
7. **Error analysis.** A learner computes the expected value of a
   variable with values 2 and 4 and probabilities 0.8 and 0.2 as
   `(2 + 4)/2 = 3`. Explain the error and give the correct value.

## Practice Set D — Decisions by expected value (after Lesson 04)

1. A card is drawn from a standard 52-card deck. A red ace wins $10,
   another ace wins $5, anything else wins $0. A ticket costs $1. Find
   the expected net gain per play to the nearest cent, and say who has
   the edge.
2. Two raffles: Raffle A sells 100 tickets at $5 each with one $200
   prize. Raffle B sells 500 tickets at $2 each with one $300 prize.
   For a buyer of one ticket, find the expected net gain of each raffle
   and say which loses less.
3. Design a fair decision procedure for four learners sharing one prize,
   using a single fair die. State each learner's probability of winning
   and verify the probabilities sum to 1.
4. A shop offers a free repair service: 5% of its $200 items need a $40
   repair the shop covers. What is the shop's expected repair cost per
   item? What warranty price would exactly cover that expected cost?
5. Two basketball plays: Play X scores 2 points with probability 0.6
   and 0 otherwise; Play Y scores 3 points with probability 0.4 and 0
   otherwise. Find each play's expected points and standard deviation.
   Which play is steadier, and why might a team still choose the other?
6. A game has expected net gain +$0.50 per play and standard deviation
   $10. A player has $20 to spend. In two or three sentences, explain
   the risk the player faces despite the positive expected value.

## Practice Set E — The normal distribution (after Lesson 05)

1. `X ~ N(50, 5)`. Use the empirical rule to estimate `P(X > 55)`,
   `P(45 < X < 55)`, and `P(X < 40)`.
2. A value `x = 72` comes from a distribution with `μ = 60`, `σ = 6`.
   A value `y = 88` comes from a distribution with `μ = 75`,
   `σ = 10`. Find both z-scores and say which value is more unusual.
3. For `X ~ B(300, 0.4)`, check the large-counts condition and, if it
   holds, estimate `P(X ≥ 135)` with a continuity correction, to three
   decimal places.
4. Adult heights (fictional practice data) are approximately normal with
   mean 165 cm and standard deviation 7 cm. Estimate the percentage of
   adults between 158 cm and 172 cm, and the percentage taller than
   179 cm. Find the z-score of a height of 151 cm.
5. For `X ~ B(60, 0.05)`, check the large-counts condition. Can the
   normal approximation be used? Explain.
6. A machine fills bags with weights approximately normal, mean 250 g
   and standard deviation 4 g. A bag weighs 242 g. Find its z-score and
   estimate `P(X < 242)`.

## Practice Set F — Inference from distributions (after Lesson 06)

1. A poll of 900 voters finds 54% support for a measure. Using a
   conservative margin of error (`p = 0.5`), give the plausible range
   for true support. Is a majority established? Explain.
2. A company claims a coin is fair (`p = 0.5` for heads). In 64 tosses,
   40 heads appear (`p̂ = 0.625`). Compute the z-score under the claim
   and say whether the result is surprising.
3. Two polls estimate the same proportion: Poll A has `n = 100`, Poll B
   has `n = 10,000`. How do their margins of error compare? Explain
   with the `1/√n` pattern.
4. A sample of 36 gives `p̂ = 0.30`. The claimed population proportion
   is 0.40. Compute the z-score under the claim and state the verdict.
5. A survey is sent to a magazine's subscribers and 2,000 reply; 80%
   say they exercise daily. In two or three sentences, explain why a
   large sample does not fix the problem with this survey.
6. In grade 11, a simulation of 1,000 samples of size 100 from a
   population with `p = 0.5` showed the sample proportions spreading
   with a standard deviation of about 0.05. What does the formula
   `√(p(1 − p)/n)` give for the same setting, and what does the
   agreement show?

## Practice Set G — Mixed review (before the quiz)

1. Two fair dice are rolled. Find `P(the sum is 8)`.
2. For `X ~ B(5, 0.6)`, find `P(X = 3)` to three decimal places, and
   state `μ` and `σ` (to three decimal places).
3. A random variable takes values 0, 2, 5 with probabilities 0.5, 0.3,
   0.2. Find `E(X)` and `σ` (to three decimal places).
4. A game pays $8 with probability 0.25 and $0 with probability 0.75.
   What is the fair ticket price?
5. `X ~ N(80, 10)`. Estimate `P(70 < X < 90)` and find the z-score of
   `x = 100`.
6. A poll of 2,500 voters finds 48% support. Using a conservative
   margin of error, give the plausible range for true support. Is a
   majority established?
7. In your own words, explain why a fair game (expected net gain zero)
   can still leave a player poorer after 10 plays. Two or three
   sentences.
