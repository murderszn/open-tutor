# Lesson 04 — Decisions by Expected Value

**Goal:** You will weigh decisions by expected value: find fair prices,
compare strategies, and judge whether a decision procedure is fair.
**Time:** ~50 minutes. **Materials:** paper, the spinner illustration
(`../assets/prize-spinner-game.png`), spreadsheet for repeated
calculations.

## Readiness check

1. From Lesson 03: what is the expected net gain of the spinner game
   at a $1 ticket price? (Answer in the key: +$0.875 per play.)
2. What ticket price would make the game's expected net gain exactly
   zero? (Hint: the price should equal the expected prize.)
3. If a game has expected net gain −$0.50 per play, who wins in the long
   run — the player or the house?

## Teaching

A decision under uncertainty is weighed by expected value: list the
possible outcomes, attach probabilities and payoffs, compute the
expected value of each option, and compare. The option with the higher
expected value is the better bet **in the long run** — which is the
only sense in which "better" can be computed from probabilities alone.
Risk, one-shot stakes, and what a loss would cost a particular person
are real considerations too, and they belong in the final judgment; the
expected value is the starting point, not the whole decision.

Three tools from this lesson:

- **Expected payoff.** For a game of chance, `E(payoff) = Σ prize ·
  P(prize)`. The **fair price** of a ticket is the expected payoff:
  at that price the expected net gain is zero, and neither side has a
  long-run edge. Charge more and the house wins on average; charge less
  and the player wins on average.
- **Comparing strategies.** Two strategies are compared by their
  expected values, computed the same way, on the same scale (net gain
  per play, dollars per customer, points per attempt). The better
  strategy is the one with the higher expected value — but a strategy
  with a slightly lower expected value and a much smaller standard
  deviation may be the wiser choice for a player who cannot afford a
  bad run.
- **Fair decision procedures (S-MD.6, enrichment).** A procedure is
  fair when every party has the same probability of the favorable
  outcome. A coin flip is fair (1/2 each). A spinner is fair only if
  the sectors used are equal in probability. "Green goes first" on our
  spinner gives one player a 1/8 chance and the other 7/8 — unfair,
  however official it looks.

A warning that belongs in every game-of-chance lesson: analyzing a
game's expected value is mathematics, not gambling advice. Real games
of chance are designed so the house's expected value is positive; the
mathematics usually says the rational choice is not to play. The
examples here are educational models with stated, checkable
probabilities.

### Worked example 1 — The fair price of the spinner game

The spinner game from Lesson 03: red (probability 1/2) pays $2, blue
(1/4) pays $1, green (1/8) pays $0, yellow (1/8) pays $5.

`E(prize) = (1/2)(2) + (1/4)(1) + (1/8)(0) + (1/8)(5) = 1 + 0.25 + 0
+ 0.625 = 1.875`.

The fair ticket price is $1.875 — $1.88 rounded to the cent. At the
$1 price used in Lesson 03, the player gains $0.875 per play on
average, which is exactly `1.875 − 1`. At a $2 price, the player's
expected net gain would be `1.875 − 2 = −$0.125` per play: the house
now wins about 13 cents per play on average. The fair price is the
fulcrum: it is the only price at which neither side has an edge, and
it is computed from the distribution, not negotiated.

### Worked example 2 — Comparing two strategies

Game A is the spinner game at a $1 ticket: `E(net) = +$0.875` per play
(Lesson 03). Game B is a die game, also $1 a play: roll a fair die;
a 6 wins $5, a 5 wins $1, anything else wins $0. Net gains: +$4 with
probability 1/6, $0 with probability 1/6, −$1 with probability 4/6.

`E(net for B) = (1/6)(4) + (1/6)(0) + (4/6)(−1) = 4/6 + 0 − 4/6 = 0`.

Game B is a fair game: in the long run nobody wins. Game A favors the
player by $0.88 per play. A player choosing by expected value picks
Game A. But look at the spread: Game B's standard deviation is
`σ = √[(4 − 0)²(1/6) + (0 − 0)²(1/6) + (−1 − 0)²(4/6)] = √(16/6 +
4/6) = √(20/6) ≈ 1.826`, larger than Game A's `σ ≈ 1.364`. A player
with only $5 who must survive 10 plays might still prefer A — here
the higher expected value and the smaller spread agree, so the choice
is clear. When they disagree, the learner must say so in words, not
hide behind one number.

### Worked example 3 — A fair way to choose who goes first

Two learners must decide who goes first in a game. Three procedures
are proposed:

- (a) Flip a fair coin; heads goes first. Each learner's chance is
  1/2 — fair.
- (b) Spin the prize spinner; green goes first. Green has probability
  1/8, so one learner has a 1/8 chance and the other 7/8 — unfair.
- (c) Spin the prize spinner; red or blue goes first (one learner
  takes red-or-blue, the other takes green-or-yellow). Red-or-blue has
  probability `1/2 + 1/4 = 3/4`; green-or-yellow has `1/8 + 1/8 =
  1/4` — unfair, 3/4 against 1/4.

Only (a) is fair. The test is always the same: compute each party's
probability of the favorable outcome and check whether they are equal.
A procedure can look balanced and be unfair; the probabilities decide.

## Guided practice (with hints)

1. A game pays $4 with probability 1/4, $1 with probability 1/2, and
   $0 with probability 1/4. Find the expected payoff and the fair
   ticket price. (Hint: `E = 1 + 0.5 + 0`.)
2. A shop owner must choose between two promotions. Promotion P costs
   $3 per customer on average (expected cost $3.00, SD $1.00).
   Promotion Q costs $2.80 per customer on average (expected cost
   $2.80, SD $4.00). Which promotion is cheaper on average, and why
   might the owner still choose the other one?
3. Two learners will share one prize. Procedure: roll a fair die; the
   first learner wins on 1–3, the second on 4–6. Is it fair? What if
   the first learner wins on 1–2 and the second on 3–6?

## Independent practice

1. A carnival game costs $3 to play. You draw one card from a standard
   52-card deck: an ace wins $20, a face card (jack, queen, king) wins
   $5, anything else wins $0. Find the expected net gain per play to
   the nearest cent, and say who has the edge.
2. A spinner has three equal sectors: A, B, C. A game pays $6 for A, $3
   for B, and $0 for C. What is the fair ticket price? A ticket sells
   for $2.50 — who has the edge, and by how much per play?
3. **Error analysis.** A learner says: "This game has expected net gain
   +$2, so if I play once I will win $2." Explain the error in two
   sentences.
4. A business can buy insurance Option X with expected annual cost
   $1,200 and SD $300, or Option Y with expected annual cost $1,100
   and SD $2,000. Which option has the lower expected cost, and what
   risk does it carry that X does not?
5. Design a fair decision procedure for three learners sharing one
   prize, using a fair die. State each learner's probability of
   winning and verify the probabilities sum to 1.

## Applied task

A school fair runs a ring toss (fictional practice data): each $1 play
wins a $5 prize with probability 0.10, a $1 prize with probability
0.30, and nothing with probability 0.60. (a) Find the expected prize
per play and the fair ticket price. (b) The fair charges $1 per play.
Who has the edge, and by how much per play? (c) Over 500 plays, about
how much does the fair expect to gain or lose in total? (d) The fair
considers raising the price to $1.50. What would the expected net gain
per play become for the player? In one sentence, say whether the new
price is fair, favorable to the player, or favorable to the fair.

## Exit check

A game's expected payoff is $4.20. What ticket price makes it a fair
game, and what is the player's expected net gain at a $5 ticket price?

## Supports, alternate modes, and extensions

- **Reading/language access:** keep "expected" attached to its unit and
  its time scale: "expected net gain of +$0.88 *per play, on average,
  over many plays*."
- **Alternate response mode:** a learner may compare strategies with a
  two-column table (option, outcomes, probabilities, expected value)
  instead of a paragraph.
- **Extension (S-MD.7):** analyze a real-world decision with stated
  probabilities — for example, whether a shop should offer a warranty
  — and write the expected-value comparison with the assumptions and
  the risk stated, not just the winning number.

## Teacher note

Likely misconceptions: (a) treating a positive expected value as a
guarantee for one play; (b) comparing strategies by their best-case
payoffs instead of their expected values; (c) calling a procedure fair
because it "looks even" without computing the probabilities; (d)
forgetting the ticket cost when computing net gain. The gambling
boundary: these are educational models with stated probabilities, not
encouragement to gamble; the mathematics usually advises against
playing real games of chance. Answers: `answer-key.md`, Lesson 04.
