# Lesson 05 — Building Linear Models

**Goal:** I can write a linear function that models a real relationship —
from a description, two input-output pairs, a table, or a graph — and I
define my quantities, units, and domain before I compute.
**Time:** 50 minutes · **Materials:** notebook, calculator (check only)

## Readiness check (5 min)

Two points: `(2, 10)` and `(5, 25)`. Find the slope. If you can
(`(25 − 10)/(5 − 2) = 15/3 = 5`), you are ready — slope is the engine of
every model you build today.

## Teaching: the model-building habit (15 min)

A **model** is a function that stands in for a real relationship. Building
one is a four-step habit:

1. **Name the quantities and units** (N-Q.2). What is the input? What is the
   output? In what units? Write it down before any algebra.
2. **Find the rate** — the slope — from the data. From two pairs
   `(a, f(a))` and `(b, f(b))`: `m = [f(b) − f(a)]/(b − a)`.
3. **Find the starting value** — the intercept — by substituting one pair
   into `y = mx + b` and solving for `b` (Unit-01 equation solving, reused).
4. **Constrain the domain** to the situation (F-IF.5). Negative hours,
   fractional people, and million-mile commutes are not in the domain.

Then **verify**: does your model reproduce the data you built it from? A
model that fails its own data is wrong, not "close enough."

### Worked example 1 — from two input-output pairs

> A print shop charges by the mug for a custom order. Five mugs cost $55;
> twelve mugs cost $125. Build the cost model.

1. **Quantities:** input `n` = number of mugs (whole mugs, `n ≥ 0`);
   output `C` = total cost in dollars. Model form: `C(n) = mn + b`.
2. **Rate:** `m = (125 − 55)/(12 − 5) = 70/7 = 10` dollars per mug.
3. **Starting value:** substitute `(5, 55)` into `C = 10n + b`:
   `55 = 10(5) + b` → `55 = 50 + b` → `b = 5`. So `C(n) = 10n + 5`.
   The $5 is a setup fee — you pay it even for a (hypothetical) zero-mug
   order.
4. **Domain:** `n` is a whole number, `n ≥ 0`. (A shop cannot print −3 mugs.)
5. **Verify:** `C(12) = 10(12) + 5 = 125` ✓ — reproduces the second pair.
   Predict: 20 mugs cost `C(20) = 205` dollars.

### Worked example 2 — from a graph and a description

> A phone plan is described as "$12 monthly fee plus $0.20 per minute."
> (a) Write the model. (b) A graph shows a savings plan passing through
> `(0, 15)` and `(4, 47)` — write its model and interpret both parameters.

1. **(a) From the description:** input `m` = minutes used (whole minutes,
   `m ≥ 0`); output `M` = monthly cost in dollars. Rate $0.20/min,
   starting value $12: `M(m) = 0.20m + 12`. Description → model in one
   step when the rate and starting value are stated outright.
2. **(b) From the graph:** slope `= (47 − 15)/(4 − 0) = 32/4 = 8`.
   Intercept is the point where the input is 0: `(0, 15)` gives `b = 15`.
   Model: `S(w) = 8w + 15`.
3. **Interpret (preview of Lesson 06):** `w` = weeks, `S` = savings in
   dollars; $8 per week deposited, $15 already saved. Verify: `S(4) =
   8(4) + 15 = 47` ✓.

## Guided practice (10 min, with hints)

1. Two pairs: `(1, 9)` and `(4, 24)`. Find the slope. *Hint: (24 − 9)/(4 − 1).*
2. Build the full model for the pairs in #1: substitute one pair to find
   `b`. *Hint: 9 = 5(1) + b.*
3. From a description: "A gym charges a $40 signup fee plus $15 per month."
   Define the quantities and write `G(m)`. *Hint: input m = months.*
4. **Error analysis:** "Jo built a model from (2, 10) and (5, 25) and got
   slope `(5 − 2)/(25 − 10) = 3/15 = 1/5`." Name the mistake and give the
   correct slope and model.

## Independent practice (12 min)

5. A copy shop charges $6 for 20 copies and $22 for 100 copies. Define
   quantities, build `C(n)` (n = copies), constrain the domain, and predict
   the cost of 60 copies. Verify against both given pairs.
6. A line passes through `(0, 25)` and `(5, 65)`. Write its equation in
   `y = mx + b` form and give a one-sentence story it could model.
7. Table: `x`: 0, 2, 4, 6 → `y`: 11, 17, 23, 29. Show the rate is constant,
   then write the model. (Check: differences of 6 over runs of 2.)
8. A dog-walking business charges $12 per walk plus a $5 weekly travel fee.
   Write `W(n)` with quantities, units, and domain. What does `W(4)`
   mean, and what is its value?

## Application (5 min)

A community garden charges a $20 annual fee plus $3.50 per square meter of
plot. (a) Write `G(s)` with the quantities defined. (b) What is the cost of
a 12 m² plot? (`G(12) = 3.5(12) + 20 = 42 + 20 = $62`.) (c) For what plot
size is the cost exactly $100? (Solve `3.5s + 20 = 100` → `s = 80/3.5 ≈
22.86` m² — and note the sensible-accuracy question: plots are probably
rented in whole square meters.)

## Exit check (3 min)

From two pairs `(3, 17)` and `(7, 37)`: write the linear model `y = mx + b`
and verify it reproduces both pairs.

## Supports and extensions

- **Reading access:** fill a four-row template before computing: input /
   unit, output / unit, rate, starting value.
- **Alternate response:** build the model as a table first (extend the
   pattern), then write the equation from the table.
- **Extension:** The print-shop model `C(n) = 10n + 5` assumes the rate
   never changes. Name one real reason the per-mug price might drop for a
   500-mug order, and explain what that would do to the model's shape.
   (Volume discounts bend the line — a first taste of nonlinearity.)

## Teacher note

Likely misconception: learners compute the slope and stop, writing `y = 10x`
and forgetting the intercept — then "verify" against only one pair. Require
the verify-against-both-pairs step; it catches the missing `b` every time.
Second trap: swapping rise and run in the slope fraction (Jo's error) —
have them say "change in output over change in input" aloud while writing
the fraction. Answer-key reference:
[answer-key.md](../answer-key.md#lesson-05).
