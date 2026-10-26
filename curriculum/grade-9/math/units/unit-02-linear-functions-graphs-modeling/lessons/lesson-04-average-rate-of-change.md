# Lesson 04 — Average Rate of Change

**Goal:** I can compute the average rate of change of a function over an
interval — from a table, a formula, or a graph — and interpret it as a rate
with the right units.
**Time:** 50 minutes · **Materials:** notebook, calculator (check only)

## Readiness check (5 min)

A car travels 240 miles in 4 hours at a steady speed. What is its speed?
If you can do it (`240 ÷ 4 = 60` mph), you are ready — today's formula is
that division, generalized.

## Teaching: the rate formula (15 min)

The **average rate of change** of `f` from `x = a` to `x = b` is

> average rate = (change in output) ÷ (change in input) = `[f(b) − f(a)] / (b − a)`

It answers: "per unit of input, how much output did we gain on average?"
Three things to get right every time:

1. **Order matters in the subtraction** — later minus earlier, on top and
   bottom. `f(b) − f(a)`, not the reverse.
2. **Units are the interpretation** (N-Q.1). If output is dollars and input
   is hours, the rate is dollars per hour — a price of time.
3. **For a linear function, the rate is the same on every interval** — it
   equals the slope. That constancy is the signature of linearity (F-LE.1.b):
   equal changes in input always give equal changes in output. A changing
   rate means the function is not linear.

A negative rate means the output decreases as the input increases — a tank
draining, a balance shrinking.

### Worked example 1 — from a table

> A cyclist's distance from home, `D` miles, at time `t` hours:

| t | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| D | 5 | 32 | 59 | 86 |

Find the average rate of change over `[0, 3]`, and over `[1, 2]`.

1. Over `[0, 3]`: `[D(3) − D(0)] / (3 − 0) = (86 − 5)/3 = 81/3 = 27` mph.
   The cyclist averaged 27 miles per hour over the three hours.
2. Over `[1, 2]`: `[D(2) − D(1)] / (2 − 1) = (59 − 32)/1 = 27` mph.
3. Same rate on both intervals — and check `[0, 1]`: `(32 − 5)/1 = 27` mph
   too. The constant 27 mph says this ride was (nearly) linear: equal hours
   gave equal miles.

### Worked example 2 — from a formula, with a negative rate

> A tank holds `V(t) = 500 − 25t` gallons, `t` minutes after draining starts.

1. Over `[0, 10]`: `V(0) = 500`, `V(10) = 500 − 250 = 250`.
   Rate = `(250 − 500)/10 = −250/10 = −25` gallons per minute.
2. The negative sign is the meaning: the tank **loses** 25 gallons per
   minute. A rate of "−25 gal/min" and a rate of "25 gal/min" describe
   opposite processes — never drop the sign.
3. Check `[10, 20]`: `V(20) = 0`; rate = `(0 − 250)/10 = −25` gal/min.
   Constant again — the drain is linear, which matches the formula's form:
   for `V = mt + b`, the average rate on any interval is exactly `m`.

## Guided practice (10 min, with hints)

1. For the cyclist's table above, find the rate over `[2, 3]`. *Hint: use
   D(3) and D(2).*
2. For `V(t) = 500 − 25t`, find the average rate over `[4, 12]`.
   *Hint: compute V(12) and V(4) first; V(12) = 200, V(4) = 400.*
3. From a graph: a line passes through `(1, 2)` and `(5, 14)`. Find the
   average rate of change between these points. *Hint: (14 − 2)/(5 − 1).*
4. **Error analysis:** "Priya computed the average rate of `f` over [2, 6]
   as `f(6)/6 − f(2)/2`." Explain what the formula actually requires, then
   compute the correct rate for `f(x) = 5x + 1` over `[2, 6]`.

## Independent practice (12 min)

5. A pond's volume is `W(t) = 900 − 40t` liters, `t` in minutes.
   (a) Find the average rate of change over `[0, 15]`.
   (b) Interpret the sign and units in a sentence.
   (c) Verify the rate is the same over `[5, 10]` — what does that tell you?
6. Table: `x`: 0, 2, 4, 6 → `y`: 12, 20, 28, 36. Find the average rate over
   `[0, 6]` and over `[2, 4]`. Is the underlying function linear? Justify
   with the rates.
7. A hiker's elevation is `E(t) = 1200 + 350t` feet, `t` in hours.
   (a) Compute the average rate over `[0, 2]`.
   (b) Explain what "350 feet per hour" means to someone planning the hike.
   (c) At this rate, when does the hiker reach 2950 feet? (Solve
   `1200 + 350t = 2950`.)
8. **Explain your reasoning:** Two runners' distance tables give average
   rates of 6 mph and 9 mph over the same 2-hour interval. Which runner went
   farther, and how do you know? Does a higher average rate guarantee the
   runner was faster at every moment? Explain.

## Application (5 min)

A delivery van's odometer reads `M(t) = 55t + 12000` miles, `t` hours into a
trip. (a) Find the average rate of change over `[0, 3]` and state its units.
(b) In plain words, what does that number tell the driver? (c) Why is the
rate exactly 55 on every interval?

## Exit check (3 min)

For `f(x) = −3x + 10`, compute the average rate of change over `[1, 5]`.
Write the units if `x` is seconds and `f(x)` is meters.

## Supports and extensions

- **Reading access:** say the formula as "f of b minus f of a, over b minus
  a — later minus earlier."
- **Alternate response:** build the rate as a two-row table (change in
  output row, change in input row) before dividing.
- **Extension:** Show algebraically that for `f(x) = mx + b`, the average
  rate over `[a, b]` simplifies to `m` — the `b` cancels. This is why
  Lesson 03's slope triangle and today's rate are the same number.

## Teacher note

Likely misconception: learners subtract in the wrong order (earlier minus
later) and then "fix" the sign by intuition. Insist on later-minus-earlier
written out; the sign carries the increase/decrease meaning. Second trap:
computing `f(b)/b − f(a)/a` (Priya's error) — it looks rate-like but divides
by the wrong things; the denominator must be the change in input. Answer-key
reference: [answer-key.md](../answer-key.md#lesson-04).
