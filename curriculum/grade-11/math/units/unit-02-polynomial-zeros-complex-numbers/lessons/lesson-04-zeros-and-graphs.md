# Lesson 04 — Zeros Are the Skeleton of the Graph

**Unit 02 · Session S11 · ~50 minutes**
**Standards:** A-APR.3, F-IF.4, F-IF.7.c, N-CN.8 (+) (enrichment),
N-CN.9 (+) (enrichment)

## Student goal

By the end of this lesson I can find every zero of a polynomial
function — real and complex — and sketch a rough graph from its zeros,
end behavior, and turning-point count; I can explain why complex zeros
come in conjugate pairs.

## Materials

Notebook, pencil, ruler. Desmos (free, no account) for verification.
The illustration `../assets/conjugate-mirror-landscape.png`.

## Readiness check (5 min)

1. Factor `x³ − 3x² − 4x + 12` completely (from Lesson 03). List its
   zeros.
2. For `f(x) = −x³ + 2x`, what happens to `f(x)` as `x` gets very
   large positive? Very large negative?

(Adult: question 1's zeros are the lesson's raw material — confirm
`(x − 3)(x − 2)(x + 2)`, zeros `3, 2, −2`. Question 2 previews end
behavior; the leading term decides.)

## Explicit teaching

**A zero is where the graph touches the axis.** For a polynomial in
factored form, the zeros are immediate: `f(x) = (x − 1)(x + 2)(x −
3)` has zeros `1, −2, 3` — three points where the graph crosses the
x-axis. This is A-APR.3: **zeros from factorization → rough graph.**

**Complex zeros come in conjugate pairs.** Look at the illustration:

![Twin peaks reflected in a still lake as exact mirror images, with
paired points of light above and below the waterline — a visual
metaphor for complex conjugate pairs mirrored across the real axis.
(AI-generated illustration.)](../assets/conjugate-mirror-landscape.png)

*Caption: Twin peaks and their reflections — a visual metaphor for
complex conjugates. (AI-generated illustration.)*

Every glowing point above the lake has a twin below it, mirrored
across the waterline. Complex zeros behave the same way: for a
polynomial with *real* coefficients, if `a + bi` is a zero, then its
mirror `a − bi` is also a zero. Why? Conjugating the equation `p(z)
= 0` (with real coefficients) gives `p(z̄) = 0` — the algebra of the
mirror preserves the zero. So nonreal zeros always arrive in pairs,
and a graph that never crosses the axis between two real zeros may be
"hiding" a complex pair. (The waterline is the real axis; the peaks
are the conjugates. The image is a metaphor, not a plot — the precise
complex plane appears in the extension as a hand-drawn SVG-style
diagram.)

**End behavior: the leading term rules.** For large `|x|`, only the
highest-degree term matters:

- Degree odd, leading coefficient positive: down on the left, up on
  the right (`x³` shape).
- Degree odd, leading coefficient negative: up on the left, down on
  the right.
- Degree even, leading coefficient positive: up on both ends (`x²`
  shape).
- Degree even, leading coefficient negative: down on both ends.

**Turning points: at most `n − 1`.** A degree-`n` polynomial can change
direction at most `n − 1` times. A cubic has at most 2 turning points;
a quartic at most 3. This bounds your sketch: if your rough graph
wiggles more times than allowed, it's wrong.

**The sketching recipe.** For `f(x) = (x − 1)(x + 2)(x − 3)`:

1. Zeros: mark `1, −2, 3` on the x-axis.
2. End behavior: degree 3, leading coefficient +1 → down-left,
   up-right.
3. Turning points: at most 2 — the curve crosses three times, so it
   must turn twice. Draw a smooth curve entering from the lower left,
   crossing at `−2`, turning, crossing at `1`, turning, crossing at
   `3`, exiting upper right.
4. y-intercept (optional anchor): `f(0) = (−1)(2)(−3) = 6`.

Then verify with Desmos: does the technology agree with your zeros
and end behavior? (F-IF.7.c: graph with technology for complicated
cases, by hand in simple ones.)

**The Fundamental Theorem of Algebra (enrichment).** A degree-`n`
polynomial has exactly `n` zeros counting multiplicity and complex
pairs. For quadratics you can prove it: the quadratic formula always
produces two values (possibly equal, possibly complex). So `x² + 4`
isn't "zero-less" — its zeros are `2i` and `−2i`, the mirror pair from
the illustration.

## Worked examples (modeled reasoning)

**Example 1 — All zeros, then the sketch.**

Find all zeros of `f(x) = x³ − 2x² − 5x + 6` and sketch a rough graph.

*Reasoning.* From Lesson 03: `f(x) = (x − 1)(x − 3)(x + 2)`. Zeros:
`1, 3, −2` — all real, no hidden pairs.

End behavior: degree 3, leading coefficient `+1` → down on the left,
up on the right. Turning points: at most 2. y-intercept: `f(0) = 6`.

Sketch: mark `−2, 1, 3`; enter from lower left; cross at `−2`; rise to
a local max between `−2` and `1`; fall through `(0, 6)`? No — `(0,
6)` is above the axis between the crossings at... wait, `f(0) = (−1)(−3)(2)
= 6 > 0`, so between `x = −2` and `x = 1` the graph is above the axis,
peaks, then crosses down through `x = 1`, bottoms out between `1`
and `3`, crosses up through `x = 3`, exits upper right. Two turning
points — exactly the maximum. Verify on Desmos: the technology shows
the same three crossings and the same end behavior.

**Example 2 — A hidden complex pair.**

Find all zeros of `g(x) = x³ + x` and describe what its graph does.

*Reasoning.* `g(x) = x(x² + 1) = x(x − i)(x + i)`. Zeros: `0, i, −i`.
Only one real zero — the graph crosses the x-axis exactly once, at
the origin. The conjugate pair `±i` never touches the real axis; they
are "hidden" zeros that still count toward the degree (3 zeros for a
cubic ✓).

End behavior: degree 3, leading `+1` → down-left, up-right. With only
one real crossing and at most 2 turning points, the actual graph is
simple: it rises monotonically through the origin (check: `g'(x) = 3x²
+ 1 > 0` always — no turning points at all, which is allowed since 0
≤ 2). Desmos confirms: one crossing, no wiggles. The complex pair
explains *why* the graph is so calm — two of the three zeros live off
the real axis.

## Guided practice

Work these with the adult nearby; hints are in brackets.

1. Find all zeros of `h(x) = x³ − 4x² + 4x`. Which zero has
   multiplicity 2, and what does the graph do there? [Factor out `x`
   first; a repeated zero touches but doesn't cross.]
2. Find all zeros of `k(x) = x⁴ − 16`, identifying the conjugate pair.
   [From Lesson 03: `(x − 2)(x + 2)(x − 2i)(x + 2i)`.]
3. State the end behavior of `m(x) = −2x⁴ + 3x² − 1` and the maximum
   number of turning points. [Leading term `−2x⁴`: even degree,
   negative coefficient.]
4. Sketch a rough graph of `p(x) = (x + 1)²(x − 2)` using the recipe:
   zeros, end behavior, turning-point bound, y-intercept. [Zero `−1`
   has multiplicity 2 — the graph touches and turns around there.]
5. Study the lesson illustration again. In two sentences, explain the
   connection between the mirrored lights and the zeros `2 + 3i` and
   `2 − 3i` of some polynomial. [What is the "waterline" in the
   complex plane?]

*Text alternative for the illustration (for screen-reader or print
use): "Two glowing peaks — one amber, one teal — rise above a dark
lake under a dotted-grid sky; below the lake's surface their exact
upside-down reflections appear, and small lights hover in mirrored
pairs above and below the waterline." The question above can be
answered from this description alone.*

## Independent practice

Complete in the notebook; the adult scores same-day.

1. Find all zeros of `f(x) = x³ − x² − 4x + 4`. (Factor by grouping.)
2. Find all zeros of `g(x) = x⁴ − 5x² + 4`, listing any complex zeros
   as conjugate pairs.
3. A degree-5 polynomial has zeros `2, −1, 3 + i`. List all five
   zeros. [One is missing — what must it be?]
4. Sketch a rough graph of `h(x) = −(x − 1)(x + 3)(x − 4)`: zeros,
   end behavior, turning-point bound, y-intercept.
5. For `k(x) = x⁴ + 4x²`: find all zeros and explain why the graph
   touches the x-axis only at the origin despite being degree 4.
6. **Error analysis:** A classmate sketched `y = x³ − 3x` with four
   turning points. Identify the error two ways: by the turning-point
   bound, and by finding the actual zeros. (The zeros are `0, ±√3`.)
7. (Enrichment) Prove the Fundamental Theorem of Algebra for
   quadratics: show that `ax² + bx + c = 0` (`a ≠ 0`) always has
   exactly two solutions counting multiplicity, using the quadratic
   formula and the discriminant cases.

## Application

A small company's monthly profit (thousands of dollars) `t` months
after January is modeled by `P(t) = −t³ + 8t² − 5t − 14` for `0 ≤ t ≤
10`. Find all zeros of `P` (hint: test `t = 2` with the Factor
Theorem), sketch the profit curve over the domain, and answer: in
which months is the company profitable? State the units of your
answer and name one reason this polynomial model should not be
trusted past `t = 10`.

## Exit check

For `f(x) = x⁴ − 3x³ + 2x`: factor out the common term, find all
zeros, and state the end behavior and the maximum number of turning
points. (You do not need to sketch.)

## Supports and extension

- **Reading access:** vocabulary cards for *zero, multiplicity, end
  behavior, turning point, conjugate pair*; the adult reads the
  sketching recipe aloud while the learner marks the axes.
- **Alternate response mode:** the learner may dictate the sketch
  steps while the adult draws; Desmos verification may substitute for
  the hand sketch after one hand sketch is completed.
- **Extension:** draw the complex plane precisely (real axis
  horizontal, imaginary axis vertical) and plot `2 + 3i`, `2 − 3i`,
  `−1 + i`, `4`; compute each point's distance from the origin (the
  modulus) and describe the geometric meaning of conjugation as
  reflection across the real axis.

## Teacher note

Likely misconceptions: (1) "complex zeros don't count" — they count
toward the degree and explain graph calmness; (2) confusing
multiplicity with "two zeros at the same place" in sketching — a
double zero *touches and turns*, it doesn't cross twice; (3) drawing
more turning points than `n − 1` — make the bound a checklist item on
every sketch. The illustration is deliberately a metaphor: if a
learner treats it as a plot of a specific function, redirect to the
text alternative and the precise complex-plane extension.

Answer key: `../answer-key.md` § Lesson 04.
