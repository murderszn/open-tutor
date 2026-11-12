# Project — The Fair-Game Audit

**40 points · Sessions S10, S15, S16 (plus homework between) · adult
reviews the draft at S16.**

## The task

You are the auditor for a school fair. A stallholder has brought a new
game of chance and wants to charge $2 per play. Your job is to decide
whether $2 is a fair price, whether the game favors the player or the
stallholder, and what price *would* be fair — and to prove it with a
distribution, an expected value, and a simulation you run yourself.

**Design your own game.** It must use a chance device you can build
and repeat: a spinner you draw and cut out (use the prize spinner in
`assets/prize-spinner-game.png` as a model, or design your own with
sectors whose fractions you state), a pair of dice, a deck of cards, or
marbles in a bag. No device may depend on skill, and every outcome's
probability must be computable from the device — no "about a third"
guesses. State the ticket price ($2, as given), every outcome, its
prize, and its probability.

## Steps

1. **Define the game (S10).** Name the device, the outcomes, the
   prize for each outcome, and the ticket price. State the probability
   of each outcome and show how you computed it (counting, sector
   fractions, or card counts).
2. **Build the theoretical distribution (S10).** Write the probability
   distribution of the net gain `G` (prize minus ticket price) as a
   table, check both distribution rules, and compute `E(G)` and the
   standard deviation of `G`. State whether the game favors the player,
   the stallholder, or neither, and by how much per play.
3. **Find the fair price (S10–S15).** Compute the expected prize
   `E(prize)` and state the fair ticket price to the nearest cent.
   Say what happens to the player's expected net gain at the $2 price
   and at the fair price.
4. **Simulate (S15).** Run your game 100 times — by hand with the
   physical device, or in a spreadsheet with a random-number function
   (the adult checks the method before you start). Record the outcomes
   in a table, compute the empirical distribution and the empirical
   expected net gain, and compare them with the theoretical values.
   Explain any difference: is it sampling variation, or evidence that
   your theoretical probabilities are wrong?
5. **Recommend (S15–S16).** Write a one-page audit report: the game,
   the distribution, the expected value and spread, the simulation
   comparison, the fair price, and your recommendation — keep the $2
   price, change it, or reject the game — with the reasoning. Include
   the fairness question (S-MD.6–7, enrichment): is the procedure fair
   to both sides, and what would make it fair?

## Deliverables

- A game definition sheet (device, outcomes, prizes, probabilities
  with working shown).
- The net-gain distribution table with both rules checked, `E(G)`,
  `σ(G)`, and the fair price.
- A simulation record (100 trials: outcome counts, empirical
  distribution, empirical expected net gain) and a comparison paragraph.
- A one-page audit report with a recommendation.

## Rubric (40 points)

| Criterion | Excellent (full marks) | Developing (half) | Missing / incorrect (0) |
|---|---|---|---|
| Game design (8 pts) | Device is repeatable; every outcome's probability is computed from the device and shown; prizes and ticket price stated | Device or probabilities partly stated; one probability unjustified | Probabilities guessed or not computable; device depends on skill |
| Theoretical distribution (8 pts) | Complete net-gain table; both rules checked; `E(G)` and `σ(G)` correct with working | Table complete but a rule unchecked, or a small arithmetic error | Table incomplete or invalid; expected value missing |
| Fair price (8 pts) | Fair price correct to the cent; effect of the $2 price and the fair price on expected net gain stated correctly | Fair price correct but the price comparison missing or wrong | Fair price missing or computed from net gain instead of prize |
| Simulation (8 pts) | 100 trials recorded; empirical distribution and empirical expected value computed; comparison with theory explained as variation or as evidence | Trials recorded but the comparison is a bare "close/far" with no reasoning | Fewer than 100 trials, or no empirical expected value |
| Report and recommendation (8 pts) | One page; recommendation follows from the numbers; fairness addressed; assumptions stated; readable by a non-specialist | Recommendation given but not tied to the numbers, or fairness unaddressed | No recommendation, or the recommendation contradicts the computed expected value |

**Scoring (adult):** total the five rows. 36–40: audit ready to present
to the stallholder. 28–35: revise the weakest row and resubmit.
Below 28: rework with the adult, starting from the distribution table.
