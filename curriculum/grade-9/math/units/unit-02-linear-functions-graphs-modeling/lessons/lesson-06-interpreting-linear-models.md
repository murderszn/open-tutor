# Lesson 06 — Interpreting Linear Models

**Goal:** I can explain what the slope and intercept of a linear model mean
in context, choose sensible units, tell linear growth from nonlinear growth,
and name what a model leaves out.
**Time:** 50 minutes · **Materials:** notebook, calculator (check only)

## Readiness check (5 min)

`C(n) = 10n + 5` models mug-printing cost (Lesson 05). In words: what does
the 10 mean? What does the 5 mean? (You are ready: $10 per mug; $5 setup
fee — today you make that kind of reading systematic.)

## Teaching: parameters tell the story (15 min)

In `y = mx + b`, the numbers `m` and `b` are **parameters** — they tune the
model to the situation. Reading them is a three-part move (F-LE.5):

1. **Slope `m`:** "for each additional unit of input, the output changes
   by `m` units." Always include both units: "$10 per mug," "−25 gallons
   per minute," "8 dollars per week."
2. **Intercept `b`:** "when the input is 0, the output is `b`." It is the
   starting value — the fee before any use, the savings before any deposit,
   the water before any draining.
3. **Units are a choice** (N-Q.2): report the rate in units your audience
   understands. "72 meters per minute" and "1.2 meters per second" are the
   same rate — pick the one that fits the story.

**Linear vs. nonlinear growth.** A linear function grows by **equal
differences over equal intervals** (F-LE.1.a): each extra input unit adds
the same amount. If the differences change — growing, shrinking, or
alternating — the relationship is **nonlinear**, and a line is the wrong
model. (Unit 07 names the most famous nonlinear pattern: equal *factors*.)

**Model limitations.** Every model is a simplification. Name what it leaves
out: price changes, breakdowns, weather, human behavior — and never trust a
model far outside the data that built it (**extrapolation**).

### Worked example 1 — reading parameters in context

> A delivery van's weekly cost is `C(m) = 0.62m + 85` dollars, where `m` is
> miles driven that week, `0 ≤ m ≤ 600`.

1. **Slope:** 0.62 dollars per mile. Each additional mile costs about 62
   cents in fuel and wear. Units chosen: dollars per mile fits a weekly
   budget conversation; cents per mile would fit a per-trip receipt.
2. **Intercept:** `C(0) = 85`. Zero miles still costs $85 — the weekly fixed
   costs (insurance, lease) that do not depend on driving.
3. **Check in context:** 100 miles → `C(100) = 62 + 85 = $147`. Reasonable:
   the fixed $85 dominates short weeks, the per-mile charge dominates long
   ones.
4. **Limitations:** the model assumes gas prices stay fixed, ignores
   repairs and tolls, and says nothing about a 1000-mile week — that is
   extrapolation past the domain the data supports.

### Worked example 2 — equal differences test

> Which table could show a linear function?

Table A: `x`: 0, 1, 2, 3 → `y`: 5, 9, 13, 17.
Table B: `x`: 0, 1, 2, 3 → `y`: 5, 10, 20, 40.

1. **Table A differences:** 9 − 5 = 4; 13 − 9 = 4; 17 − 13 = 4. Equal
   differences of 4 over equal intervals of 1 → **linear**. (Its model is
   `y = 4x + 5`.)
2. **Table B differences:** 10 − 5 = 5; 20 − 10 = 10; 40 − 20 = 20. The
   differences themselves grow — **not linear**. (Each step doubles the
   previous value; Unit 07 will call this exponential.)
3. The test needs **equal intervals**: differences over unequal `x`-steps
   prove nothing until you divide by the step size (that quotient is the
   average rate of change from Lesson 04).

## Guided practice (10 min, with hints)

1. `T(h) = 45h + 30` models a tutor's charge for `h` hours. Interpret the
   slope and intercept in sentences with units. *Hint: 45 is dollars per…?*
2. A walking model gives a rate of 1.2 meters per second. Convert to meters
   per minute and say which unit fits a "30-minute walk" story better.
   *Hint: multiply by 60.*
3. Table: `x`: 0, 2, 4, 6 → `y`: 3, 9, 15, 21. Are the differences equal?
   Is it linear? *Hint: the x-steps are 2, not 1 — divide.*
4. **Error analysis:** "Sam says the intercept of `C(t) = 200 − 15t` is
   (0, 200) and it means the cost grows by $200 per day." Identify both
   mistakes and give the correct interpretation.

## Independent practice (12 min)

5. A caterer charges `C(g) = 45g + 300` dollars for `g` guests. Interpret
   slope and intercept; compute `C(50)`; explain what that number means.
6. A newspaper reports quarterly sales: 2000, 2100, 2250, 2450 copies.
   The reporter calls the growth "linear." Check the differences and write
   a two-sentence correction (or confirmation) with evidence.
7. For the van model `C(m) = 0.62m + 85`: name two real factors the model
   ignores, and explain why using it for a 2000-mile week would be
   extrapolation.
8. **Explain your reasoning:** Two phone plans: `A(d) = 0.10d + 30` and
   `B(d) = 0.05d + 45` (d = texts). Which plan's cost grows faster per text?
   Which costs more at zero texts? Without solving, which plan is cheaper
   for a very heavy texter? Justify each answer from the parameters.

## Application (5 min)

A gym's "founder rate" is `G(m) = 15m + 40` (Lesson 05, #3). A competing gym
advertises `H(m) = 25m + 0`. (a) Interpret both intercepts. (b) Which costs
more after 12 months? (`G(12) = 220`; `H(12) = 300`.) (c) In words, why does
the cheaper-at-first plan lose eventually? (Its slope — the monthly rate —
is higher; the intercept advantage gets eaten by the steeper climb.)

## Exit check (3 min)

`P(t) = 120 − 8t` models pounds of feed in a bin, `t` days after delivery.
Interpret the slope and intercept, with units, in one sentence each.

## Supports and extensions

- **Reading access:** use the sentence frames "Each additional ___ changes
  the ___ by ___" (slope) and "When ___ is zero, ___ is ___" (intercept).
- **Alternate response:** label a printed graph's slope and intercept with
  sticky notes in your own words instead of writing sentences.
- **Extension:** Find a real linear model in the wild (a utility bill with a
  base charge + per-unit rate, a shipping quote, a taxi meter). Write its
  `y = mx + b` form, interpret both parameters, and name two limitations.
  Bring it to Session 14's review.

## Teacher note

Likely misconception: learners describe the intercept as a rate ("the $85
grows each week") or the slope as a starting value. The sentence frames in
Supports exist for exactly this confusion — make them say both frames aloud
until the roles are automatic. Second trap: calling any "steady increase"
linear without checking equal differences — the newspaper task (Independent
6) is the antidote. Answer-key reference:
[answer-key.md](../answer-key.md#lesson-06).
