# Lesson 01 — Rational Expressions as Fractions: Simplify, and Keep the Restrictions

**Goal (learner hears):** "I can simplify a rational expression and
state every value the variable cannot take — including values that
disappear when I cancel a factor."
**Time:** ~50 minutes · **Materials:** paper, pencil, factoring
reference from Unit 02 (grouping, difference of squares).
**Standards:** A-APR.7 (+), A-SSE.1.b.

## Readiness check (5 min)

Simplify the number fraction 12/18, and say what happens if you try
12/0. Then factor: (a) `x^2 - 9`, (b) `x^2 - 3x`, (c) `x^2 - 4`.
(Answers: 12/18 = 2/3; 12/0 is undefined, never "infinity" as an
answer. (a) `(x - 3)(x + 3)`; (b) `x(x - 3)`; (c) `(x - 2)(x + 2)`.)
If factoring is shaky, re-teach it before this lesson — every step
below depends on it.

## Explicit teaching

A **rational expression** is a fraction whose numerator and
denominator are polynomials, like `(x^2 - 9)/(x^2 - 3x)`. It behaves
exactly like a number fraction: you may cancel a factor that appears
in both numerator and denominator, because you are dividing by that
factor over itself, which is 1 — **except where that factor is zero**.
And here is the rule students most often break:

> **Find the restrictions FIRST, from the original denominator, before
> you cancel anything. A cancelled factor does not stop being a
> restriction.**

Why? The original expression and the simplified expression are equal
only where the original is defined. If `x = 3` makes the original
denominator zero, the original expression has no value there — so the
simplified expression, which might look perfectly fine at `x = 3`,
cannot be "the same function" there. The graph gets a **hole** at
that input (Lesson 03 makes this visual). Writing `x ≠ 3` next to the
simplified form is not decoration; it is part of the answer.

The rational-number analogy, stated once and used all unit:

| Number fraction | Rational expression |
|---|---|
| 12/18 = 2/3 (divide top and bottom by 6) | `(x^2 - 9)/(x^2 - 3x) = (x + 3)/x`, for `x ≠ 0, 3` |
| 12/0 is undefined | any input making the denominator zero is excluded |
| 0/12 = 0 | a numerator zero (with nonzero denominator) gives value 0 |

**Domain** of a rational expression = all real numbers except the
zeros of its (original) denominator.

### Modeled example 1 — cancel, and carry both restrictions

Simplify `(x^2 - 9)/(x^2 - 3x)` and state the domain.

*Step 1 — restrictions first.* Denominator `x^2 - 3x = x(x - 3)`.
It is zero when `x = 0` or `x = 3`. So `x ≠ 0, 3`, before any
cancelling.

*Step 2 — factor and cancel.* Numerator `x^2 - 9 = (x - 3)(x + 3)`.
So the expression is `(x - 3)(x + 3) / (x(x - 3))`. Cancel the common
factor `(x - 3)`:

`(x + 3)/x`, with `x ≠ 0, 3`.

*Step 3 — sanity check.* Pick `x = 6`: original `(36 - 9)/(36 - 18)
= 27/18 = 3/2`; simplified `(6 + 3)/6 = 3/2`. Match. Pick `x = 3`:
original is `0/0` (undefined); simplified gives `6/3 = 2` — which is
exactly why the restriction must travel with the answer. The value 2
is what the simplified form *would* give; it is not the value of the
original, because the original has none there.

### Modeled example 2 — a restriction that is not a zero of the answer

Simplify `(x^2 - 5x + 6)/(x^2 - 4)` and state the domain.

*Step 1 — restrictions first.* Denominator `x^2 - 4 = (x - 2)(x + 2)`,
zero at `x = 2` and `x = -2`. So `x ≠ 2, -2`.

*Step 2 — factor and cancel.* Numerator `x^2 - 5x + 6 = (x - 2)(x -
3)`. So the expression is `(x - 2)(x - 3) / ((x - 2)(x + 2))`.
Cancel `(x - 2)`:

`(x - 3)/(x + 2)`, with `x ≠ 2, -2`.

Notice: `x = 2` is not a zero of the simplified denominator, yet it
is still excluded — it came from the *original* denominator, and the
cancelled factor `(x - 2)` is what makes it a hole rather than a
vertical asymptote (Lesson 03). A student who writes only `x ≠ -2`
has lost half the domain.

## Guided practice (adult and learner together; 5 tasks)

1. State the restrictions for `(x + 1)/(x^2 - 1)` before simplifying.
   (Denominator `(x - 1)(x + 1)`; `x ≠ 1, -1`.)
2. Simplify `(x^2 - 1)/(x^2 + 3x + 2)` with restrictions.
   (`(x - 1)/(x + 2)`, `x ≠ -1, -2`.)
3. Explain in one sentence why `(x - 5)/(x - 5) = 1` is false as a
   blanket statement. (At `x = 5` the original is undefined; the
   correct statement is `(x - 5)/(x - 5) = 1` for `x ≠ 5`.)
4. Decide: is `(2x)/(x)` equal to 2 for every real `x`? (No: at
   `x = 0` the original is undefined, so the domain is `x ≠ 0`.)
5. Write the domain of `(x^2 + 2x + 1)/(x^2 - 2x + 1)` in words and
   symbols. (Denominator `(x - 1)^2`; `x ≠ 1`.)

## Independent practice (learner tries; adult reviews same day; 5 tasks)

1. Simplify `(x^2 - 16)/(x^2 + 4x)`; state the domain.
2. Simplify `(3x^2 - 12)/(x^2 - 2x)`; state the domain.
3. Simplify `(x^2 + 5x + 6)/(x^2 + 2x - 3)`; state the domain.
4. True or false, with a reason: "After cancelling, the restrictions
   are just the zeros of the new denominator." (False — see Modeled
   example 2.)
5. A classmate simplified `(x^2 - 9)/(x - 3)` to `x + 3` and dropped
   the restriction. Write the correction: the full simplified form
   with its restriction, and one input value that shows why it
   matters. (Answer: `x + 3`, `x ≠ 3`; at `x = 3` the original is
   undefined while `x + 3` gives 6.)

## Application

A rectangular garden's area is `x^2 - 9` square metres and its width
is `x - 3` metres. Write its length as a rational expression,
simplify it, and state what values of `x` make sense in context.
(Length = `(x^2 - 9)/(x - 3) = x + 3`, `x ≠ 3`; in context also
`x > 3` so that width and length are positive. The context restriction
is stricter than the algebraic one — both are stated.)

## Exit check

1. Simplify `(x^2 - 25)/(x^2 - 5x)` and state the domain.
   (`(x + 5)/x`, `x ≠ 0, 5`.)
2. In one sentence, say when you find the restrictions: before or
   after cancelling, and why. (Before — from the original
   denominator — because cancelling can hide a zero.)
3. What is the value of `(x^2 - 9)/(x^2 - 3x)` at `x = 3`? (No value;
   undefined. Not 2.)

## Supports and extension

- **Reading access:** read each fraction aloud as "the numerator
  over the denominator" before factoring; keep a factor bank
  (difference of squares, common factor, trinomial) visible.
- **Alternate response mode:** a learner may state restrictions by
  circling the denominator's zeros on a number line instead of
  writing set notation.
- **Extension:** simplify `(x^3 - 8)/(x^2 - 4)` (difference of cubes
  over difference of squares) and state the domain. (Answer:
  `(x^2 + 2x + 4)/(x + 2)`, `x ≠ 2, -2`. The numerator's quadratic
  factor has no real zeros, so no further restriction arises.)

## Teacher note — likely misconceptions

- *Cancelling terms, not factors:* `(x + 3)/x` is not `3`, and
  `(x^2 + 5)/(x^2)` is not `5`. Only common *factors* cancel.
  If this appears, go back to numbers: 12/18 does not become 2/8 by
  cancelling 1s.
- *Restrictions vanish after cancelling:* the most durable error in
  this unit. Insist on the "restrictions first" order every time for
  the first two weeks; the answer-key log should record whether the
  restriction was written before the simplification.
- *Division by zero treated as infinity:* "undefined" is the answer;
  "infinity" is a description of behaviour near the value, not a
  value the expression takes (Lesson 04).

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-01).
