
# Lesson 04 — Average Rate of Change and the Difference Quotient

**Unit 01 · Session S8 · ~50 minutes**
**Standards:** F-IF.6 (calculate and interpret average rate of change of
a function over an interval, including from a graph); F-LE (review:
linear functions grow by equal differences over equal intervals —
used to interpret why a linear difference quotient is constant).

## Student goal

By the end of this lesson I can compute the average rate of change of a
function over an interval from a table, a graph, or a formula; interpret
its sign and size in context with correct units; compute and fully
simplify the difference quotient `[f(x + h) − f(x)] / h` for polynomial
functions; and explain how the difference quotient is an average rate of
change over `[x, x + h]` — and therefore a preview of the slope of a
curve that Unit 07 will explore.

## Materials

Notebook, pencil, calculator, graphing technology (for verification).

## Readiness check (5 min)

For `f(x) = x²`:

1. Compute `[f(5) − f(2)] / (5 − 2)`. Show the arithmetic.
2. This number is the average rate of change of `f` on `[2, 5]`. What
   geometric object has this number as its slope?

## Explicit teaching

### Average rate of change

The **average rate of change** of a function `f` over an interval
`[a, b]` is

`average rate of change = (f(b) − f(a)) / (b − a)`

— the change in output divided by the change in input. On a graph it is
the slope of the **secant line** through `(a, f(a))` and `(b, f(b))`.
Its units are always "output units per input unit" (miles per hour,
dollars per day, degrees per hour), and stating the units is part of the
answer.

**Sign** tells direction: positive means the quantity grew on average
over the interval, negative means it shrank. **Magnitude** tells
steepness: a larger absolute value means faster average change. Compare
intervals to say *when* change was faster — that comparison is the
interpretation, not just the number.

### The difference quotient

Now let the interval start at a variable `x` and have width `h`:
the interval is `[x, x + h]`. The average rate of change becomes

`[f(x + h) − f(x)] / h`

called the **difference quotient**. It is not a new idea — it is the
same average-rate formula with `a = x` and `b = x + h`. Keeping `x` and
`h` symbolic lets one computation give the average rate over *every*
starting point and *every* width at once.

For a linear function the difference quotient is constant — no
surprise, since linear functions grow by equal differences over equal
intervals (F-LE). Check `f(x) = 5x − 2`:

`[(5(x + h) − 2) − (5x − 2)] / h = 5h / h = 5`.

For `f(x) = x²`, the full algebra is:

`[(x + h)² − x²] / h = [x² + 2xh + h² − x²] / h = (2xh + h²) / h = 2x + h`.

Every term of the numerator must contain a factor of `h` — that is how
you know the algebra is right; if an `h`-free term survives, recheck
the expansion. The result `2x + h` says: starting at `x`, with a step
of width `h`, the average rate of change is `2x + h`. The `h` in the
formula is never zero (division by zero is undefined), so simplify
*first*; the formula only makes sense for `h ≠ 0`.

For `f(x) = x³`, expanding `(x + h)³ = x³ + 3x²h + 3xh² + h³` gives

`[(x + h)³ − x³] / h = (3x²h + 3xh² + h³) / h = 3x² + 3xh + h²`.

Notice the pattern: for each power, the difference quotient is a
polynomial in `x` and `h` whose `h`-free part involves only `x`.

**Slope preview, no limits yet.** The difference quotient is the slope
of the secant line through `(x, f(x))` and `(x + h, f(x + h))`. As `h`
gets smaller, that secant line hugs the curve more tightly near `x` —
Unit 07 will make "as `h` gets smaller" precise. In this lesson, keep
`h` nonzero and algebraic: the difference quotient is an exact average
rate of change, not an approximation.

## Worked examples (modeled reasoning)

**Example 1 — Average rate of change from a table, interpreted.**

A cyclist's distance (miles) after `t` hours is recorded (fictional
practice data):

| t (hours) | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| d(t) (miles) | 0 | 14 | 24 | 30 | 44 |

Compute the average rate of change on `[1, 3]` and on `[3, 4]`, and
interpret both with units.

*Reasoning.* On `[1, 3]`: `(d(3) − d(1)) / (3 − 1) = (30 − 14) / 2 =
16 / 2 = 8` miles per hour. On `[3, 4]`:
`(d(4) − d(3)) / (4 − 3) = (44 − 30) / 1 = 14` miles per hour.
Interpretation: between hours 1 and 3 the cyclist averaged 8 mph; in
the final hour the average was 14 mph — the pace quickened later in the
ride. Both numbers are *average* speeds; they say nothing about the
speed at any single instant. For reference, the whole-ride average on
`[0, 4]` is `44 / 4 = 11` mph, which lies between the two — a useful
sanity check.

**Example 2 — Difference quotient with full algebra, then used.**

For `f(x) = 2x² − 5x + 1`, compute and simplify the difference
quotient, then use it to find the average rate of change of `f` on
`[2, 5]`. Check by direct computation.

*Reasoning.* Expand `f(x + h)`:
`f(x + h) = 2(x + h)² − 5(x + h) + 1`
`= 2(x² + 2xh + h²) − 5x − 5h + 1`
`= 2x² + 4xh + 2h² − 5x − 5h + 1`.

Subtract `f(x) = 2x² − 5x + 1`:
`f(x + h) − f(x) = 4xh + 2h² − 5h`
(every term has a factor of `h` — the algebra checks out).

Divide by `h`: `[f(x + h) − f(x)] / h = 4x + 2h − 5`.

Now use it: on `[2, 5]`, `x = 2` and `h = 3`, so the average rate is
`4(2) + 2(3) − 5 = 8 + 6 − 5 = 9`. Direct check:
`f(5) = 2·25 − 25 + 1 = 50 − 25 + 1 = 26`;
`f(2) = 2·4 − 10 + 1 = 8 − 10 + 1 = −1`;
`(26 − (−1)) / (5 − 2) = 27 / 3 = 9` ✓. The formula and the direct
computation agree — they must.

## Guided practice

1. A company's profit (thousands of dollars) `t` years after 2020 is
   recorded (fictional practice data): `(0, 120)`, `(2, 168)`,
   `(4, 240)`. Compute the average rate of change on `[0, 4]` and on
   `[2, 4]`, with units, and say which period grew faster and how you
   know. [Change in profit over change in time; compare the two
   quotients.]
2. For `f(x) = x² + 3x`: compute and fully simplify the difference
   quotient, then use it to find the average rate of change on
   `[1, 4]`. Verify by direct computation. [Expand `(x + h)²`
   carefully; every numerator term must contain `h`.]
3. Error analysis: "Leo computes the difference quotient of `f(x) = x²`
   as `[(x + h)² − x²] / h = (x² + h² − x²) / h = h`, and concludes the
   average rate of change is `h`." Identify the algebra error, give the
   correct simplification, and explain what the correct form tells you
   about the average rate of change starting at `x = 4` with `h = 1`.
4. Explain your reasoning: show that the difference quotient of
   `f(x) = 5x − 2` is the constant 5, and explain *why* it must be
   constant for any linear function — connect your explanation to the
   fact that linear functions grow by equal differences over equal
   intervals.

## Independent practice

1. A bacteria culture's size (thousands of cells) after `t` hours is
   recorded (fictional practice data): `(0, 5)`, `(1, 9)`, `(2, 17)`,
   `(3, 33)`. Estimate the average rate of change on `[0, 2]` and on
   `[1, 3]`, with units. What does the comparison tell you about how
   the culture is growing?
2. Compute and fully simplify the difference quotient of
   `f(x) = 3x² + 2x − 7`. Show every expansion step.
3. Compute and fully simplify the difference quotient of
   `f(x) = x³ − 2x`. (You may use `(x + h)³ = x³ + 3x²h + 3xh² + h³`;
   verify that expansion by multiplying out `(x + h)(x + h)²`.)
4. Outdoor temperature `T(h)` (°C) at hour `h` is recorded (fictional
   practice data): `(0, 4)`, `(3, 1)`, `(6, 6)`, `(9, 12)`. Compute the
   average rate of change on `[0, 3]` and on `[3, 9]`. Interpret the
   sign of each in context, with units.
5. Explain your reasoning: the difference quotient
   `[f(x + h) − f(x)] / h` requires `h ≠ 0`. Explain why you cannot
   simply substitute `h = 0` into the *unsimplified* form, and explain
   what the simplified form `2x + h` (for `f(x) = x²`) tells you about
   the average rate of change over a very short interval starting at
   `x` — without using limits.

## Application

A delivery service is comparing two pricing models (both fictional
practice models, `d` = miles, `d ≥ 0`).

- Standard: `R(d) = 3.2d + 8` dollars.
- Volume discount: `S(d) = 8 + 3.2d − 0.05d²` dollars.

a) Show that the average rate of change of `R` over *any* interval
   `[a, b]` is the constant 3.2, and interpret 3.2 with units in
   context.
b) Compute and fully simplify the difference quotient of `S`.
c) Use your part-(b) result to find the average rate of change of `S`
   on `[0, 20]`, and verify by direct computation.
d) Which model earns more per mile on average over the first 20 miles?
   Use the structure of the difference quotient from part (b) to
   explain *why* the discount model falls behind as `d` grows.

## Exit check

1. Compute the average rate of change of `g(x) = x² − 4x` on
   `[−1, 3]`. Show the arithmetic.
2. In one or two sentences: what does the *sign* of an average rate of
   change tell you about a quantity in context, and what does its
   *magnitude* tell you?

## Supports and extension

- **Reading/language access:** The phrases *average rate of change*,
  *difference quotient*, and *secant line* are defined on the word
  wall with units attached ("change in output per change in input");
  learners restate each Worked Example's interpretation sentence in
  their own words to a partner before writing it.
- **Alternate response mode:** Average rates from tables may be found
  by adding a "change" column (successive differences) to the table
  instead of writing the fraction formula each time; the interpretation
  sentence is still written in full.
- **Extension:** Compute the difference quotient of
  `f(x) = 1/x` (for `x ≠ 0`, `h ≠ 0`, `x + h ≠ 0`) and simplify it to a
  single fraction. Then explain why the average rate of change of
  `1/x` on `[1, 2]` differs from its average rate on `[2, 3]` even
  though the intervals have the same width.

## Teacher note

Watch for: (1) "simplifying" `[(x + h)² − x²] / h` to `h` by dropping
the `2xh` term — require the full binomial expansion written out until
it is automatic; (2) substituting `h = 0` into the unsimplified
quotient and declaring the answer `0/0` or `0` — the quotient is only
defined for `h ≠ 0`; simplification must come first; (3) computing the
number correctly but omitting units or interpretation — the units and
the sentence are the answer, not decoration; (4) confusing average
rate of change with the function value — "the average rate was 8 mph"
does not mean "the cyclist rode at 8 mph the whole time."
Answer-key reference: `../answer-key.md` (adults-only file), Lesson 04.
