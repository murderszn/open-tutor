# Lesson 04 — Probability and Trait Distributions

**Student goal:** I can use the product and sum rules to predict trait
probabilities, compare expected counts with observed counts, and explain
why small samples deviate more than large ones.
**Time:** 50 minutes · **Unit:** [U05](../README.md) · **Session 7 of 20**

## Materials

- Notebook and pencil
- Two coins (or tokens) per learner for the probability game
- The fictional F2 dataset handout (below, in the teaching section —
  the adult prints or copies it)

## Readiness check (5 minutes)

Ask: "In a Bb × Bb cross, the Punnett square says 1 in 4 offspring will
be white. If a family has exactly 4 children from this cross, will exactly
1 be white?" Confirm the learner hesitates or says "not necessarily" — the
square gives a probability *per offspring*, not a guarantee for a small
family. If the learner insists "yes, exactly 1," run the coin game in the
teaching section first and come back to the question.

## Teaching

A Punnett square lists equally likely outcomes. **Probability** turns that
list into numbers: probability = (number of ways an outcome can happen) /
(total number of equally likely outcomes). For one offspring of Bb × Bb,
P(white) = 1/4, P(purple) = 3/4, P(Bb) = 2/4 = 1/2.

Two rules combine probabilities. The **product rule**: for two
*independent* events, P(both) = P(first) × P(second). "Independent" means
one does not change the other — one offspring's genotype does not change
the next one's. The **sum rule**: for two *mutually exclusive* outcomes
(only one can happen), P(one or the other) = P(first) + P(second).

Expected counts follow from probability: expected count = probability ×
sample size. In 400 offspring of Bb × Bb, expect about 300 purple and 100
white. But "about" is doing real work: chance makes real counts wobble
around the expectation, and the wobble is bigger (in percentage terms) in
small samples. Mendel counted 929 F2 plants and got 705 purple : 224
white — expected 696.75 : 232.25 at exactly 3:1. He was off by about 8
plants in each class, roughly 1% of the total. With only 8 plants, being
off by 2 would be a 25% swing. **Big samples tame chance; small samples
let chance shout.**

### The fictional F2 dataset (labeled fictional practice data)

A school's fictional genetics class self-crossed heterozygous purple
plants (Bb × Bb) and grew 400 F2 plants. This dataset was invented for
this unit's arithmetic; it is not a real observation.

| Flower color | Observed count | Expected count at 3:1 (of 400) |
|---|---|---|
| Purple | 296 | 300 |
| White | 104 | 100 |
| **Total** | **400** | **400** |

The observed counts are 4 plants off the expectation in each class — a
1% deviation. The data support the 3:1 model; they do not prove it, and a
single class of 400 plants could not prove it either. A model earns trust
by surviving many independent tests, not one.

**Key vocabulary:** *probability* (the fraction of equally likely
outcomes that give an event), *product rule* (multiply probabilities for
independent "and" events), *sum rule* (add probabilities for exclusive
"or" events), *expected count* (probability × sample size), *observed
count* (what was actually counted), *sample size* (how many individuals
were counted).

## Worked example 1 — "How likely is a white plant — twice in a row?"

Two offspring of Bb × Bb, born one after the other. What is the
probability that *both* are white?

Each offspring independently has P(white) = 1/4. By the product rule:
P(both white) = 1/4 × 1/4 = **1/16**.

What is the probability that *at least one* of the two is white? Two
ways: the sum rule over the cases (first white only: 1/4 × 3/4 = 3/16;
second white only: 3/4 × 1/4 = 3/16; both white: 1/16; total 7/16) — or
the shortcut: 1 − P(neither white) = 1 − (3/4 × 3/4) = 1 − 9/16 = **7/16**.
**Reasoning to name aloud:** "at least one" is almost always easier by
the complement — one minus the chance of none.

## Worked example 2 — "Do the class data fit the model?"

Use the fictional dataset above: 296 purple, 104 white, expected 300 and
100.

- Purple deviation: 296 − 300 = −4. White deviation: 104 − 100 = +4.
  The deviations are equal and opposite, as they must be: the total is
  fixed at 400.
- As percentages: purple is 74% observed vs. 75% expected; white is 26%
  vs. 25%. Each is off by 1 percentage point.
- A quick sense-check (optional extension): a chi-square value of
  (296−300)²/300 + (104−100)²/100 = 16/300 + 16/100 ≈ 0.05 + 0.16 =
  0.21. For one degree of freedom, values below 3.84 are ordinary chance
  variation — 0.21 is far below, so the data fit the 3:1 model well.

**Reasoning to name aloud:** never judge a fit by raw counts alone —
always compare the deviation with the sample size. Being off by 4 in 400
is a good fit; being off by 4 in 8 would be a disaster.

## The coin game (10 minutes)

Each offspring is a coin toss: heads = "got the B from this parent,"
tails = "got the b." Two coins = one offspring of Bb × Bb (one coin per
parent). Toss the pair 16 times and record: HH (BB, purple), HT or TH
(Bb, purple), TT (bb, white).

1. Before tossing, predict: how many of the 16 should be white?
   (Expected: 16 × 1/4 = 4.)
2. Toss 16 times. Count the white (TT) results. How far off were you?
3. Combine your 16 tosses with the adult's 16 (32 total). Is the combined
   count closer to the expectation than either set of 16 alone? It usually
   is — and that is the lesson: bigger samples, smaller wobble.

## Guided practice (adult stays close, hints allowed)

Work through these together, 4–6 minutes each.

1. In a Bb × Bb cross, what is P(BB)? P(Bb)? P(bb)? Use the Punnett
   square to justify each.
2. Two offspring of Bb × Bb: what is the probability both are purple?
   *(Hint: P(purple) per offspring is 3/4; combine with the product
   rule.)*
3. Error analysis: "The Punnett square says 1 in 4, so in a family of 4
   children exactly one will be white." What is wrong?
4. Mendel's F2 flower counts were 705 purple and 224 white out of 929.
   What counts would an exact 3:1 ratio predict? How far off was he, in
   plants and in percentage points? *(Hint: 929 × 3/4 and 929 × 1/4.)*
5. A class grows 40 F2 plants and counts 34 purple and 6 white. Is this
   evidence against the 3:1 model? Explain using sample size.

## Independent practice (6–8 meaningful tasks)

1. A couple are both heterozygous carriers for a recessive trait (Aa ×
   Aa). What is the probability their first child is aa? Their second
   child is aa? Both children are aa?
2. What is the probability that at least one of those two children is aa?
   Show two ways, or one way with the complement explained.
3. In a cross Yy × Yy (yellow dominant), 1,000 offspring are expected.
   How many yellow and how many green does the model predict? A real
   class counts 742 yellow and 258 green. How far off is each class, in
   plants and in percentage points? Does the data support the model?
4. A dihybrid cross YyRr × YyRr predicts 9:3:3:1. In 160 offspring, how
   many of each phenotype are expected? (Show the multiplication.)
5. A learner tosses two coins 8 times to model Bb × Bb and gets TT five
   times. They conclude the model is wrong. Write a 3-sentence reply.
6. Explain in your own words why Mendel needed thousands of plants, not
   dozens, to see the 3:1 pattern clearly.
7. A test cross Bb × bb predicts 1:1. In 100 offspring, 58 are purple and
   42 white. Expected counts? Deviation? Does the data fit the 1:1 model
   better or worse than the F2 dataset fit 3:1? Explain with numbers.

## Application

Take the fictional F2 dataset (296 purple, 104 white of 400). Suppose the
class had grown only 40 plants and counted 29 purple and 11 white — the
same percentages, a tenth the sample. Compute the expected counts for 40
and the deviations. Then write a short paragraph: which dataset (40 or
400) gives stronger support for the 3:1 model, and why? (The percentages
are the same; the *evidence* is not.)

## Exit check

Without looking back: state the product rule and the sum rule in one
sentence each; compute P(bb) for one offspring of Bb × Bb; and explain in
one sentence why a 4-plant sample can mislead while a 400-plant sample
rarely does.

## Supports and extensions

- **Language access:** say "and means multiply, or means add" as the
  memory hook for the two rules; keep a coin pair on the table while
  working.
- **Alternate response mode:** the learner may run the coin game with
  tokens and dictate results while the adult records, or draw the
  Punnett-square boxes and count them instead of multiplying fractions.
- **Extension:** compute the chi-square value for the 40-plant version of
  the dataset (29 purple, 11 white; expected 30 and 10) and compare it
  with the 400-plant value (0.21). Same percentages, different verdicts
  about certainty — discuss why.

## Teacher note — likely misconceptions

The deepest error is treating a probability as a promise: "1 in 4 means
the fourth child will be white." The coin game is the antidote — run it
live, do not just describe it. Second: adding probabilities for events
that are not mutually exclusive, or multiplying for events that are not
independent — always ask "and or or? independent or not?" before choosing
a rule. Third: judging fit by raw deviation without the sample size — the
40-vs-400 application exists to make that mistake visible.
Answer-key references: [answer key](../answer-key.md#lesson-04).
