# Lesson 04 — Horizontal and Slant Asymptotes: What the Graph Approaches

**Goal (learner hears):** "I can decide from the degrees whether a
rational function has a horizontal asymptote, no horizontal
asymptote, or a slant asymptote — and find the slant asymptote by
division."
**Time:** ~50 minutes · **Materials:** paper, pencil, graph paper,
graphing calculator (Desmos), the exact SVG graph
[`../assets/rational-graph.svg`](../assets/rational-graph.svg).
**Standards:** F-IF.7.d (+), F-IF.4, A-APR.6.

## Readiness check (5 min)

For large `x`, which term dominates `3x^2 + 5x - 7`: the `3x^2`, the
`5x`, or the `-7`? (The `3x^2` — as `x` grows, the highest-degree
term outgrows the rest, which is why end behaviour is decided by
degrees and leading coefficients alone. A learner who answers
"`3x^2`, because the others become negligible by comparison" is
ready.)

## Explicit teaching

**End behaviour** means: what happens to `f(x)` as `x` grows
without bound in either direction (`x → ∞` or `x → -∞`)? For a
rational function, only the leading terms matter there, because the
lower terms become negligible by comparison. Let the numerator have
degree `n` with leading coefficient `a`, and the denominator have
degree `m` with leading coefficient `b`.

| Degrees | End behaviour | Asymptote |
|---|---|---|
| `n < m` | `f(x) → 0` both ways | Horizontal asymptote `y = 0` (the x-axis) |
| `n = m` | `f(x) → a/b` both ways | Horizontal asymptote `y = a/b` |
| `n = m + 1` | `f(x)` follows the quotient line, with a shrinking remainder term | **Slant asymptote** `y = q(x)` (from long division) |
| `n > m + 1` | `f(x)` grows without bound, following a curve, not a line | No horizontal or slant asymptote (end behaviour is described by the quotient polynomial) |

Two cautions that prevent most errors:

1. **A horizontal asymptote is about the far ends of the graph, not
   the middle.** A graph *may* cross its horizontal asymptote at
   finite `x` values (solve `f(x) = a/b` to find where); it
   approaches the line as `x → ±∞`. A vertical asymptote, by
   contrast, is never crossed, because the function is undefined
   there. Do not transfer "never crosses" from one kind of asymptote
   to the other.
2. **Find slant asymptotes by division, never by guessing.** Write
   `f(x) = q(x) + r(x)/b(x)` (Lesson 02). As `x → ±∞`, the remainder
   term `r(x)/b(x) → 0`, so the graph approaches the line `y = q(x)`.
   The line is the asymptote; the remainder term is the gap that
   shrinks to nothing.

**The exact graph.** The SVG below is plotted by computation from
`f(x) = (2x - 4)/(x + 3)` — not drawn freehand — so its intercepts
and asymptotes are exact. Study it before the modeled examples.

![Graph of f(x) = (2x - 4) / (x + 3): two branches, vertical asymptote x = -3 (dashed red), horizontal asymptote y = 2 (dashed red), x-intercept (2, 0), y-intercept (0, -4/3). The branches leave the top and bottom of the window near x = -3 because values there exceed the window; the graph itself continues without bound.](../assets/rational-graph.svg)

*Caption: exact plotted graph (see
[`assets/README.md`](../assets/README.md) for the plotting method
and the text alternative). Degrees are equal (1 and 1), so the
horizontal asymptote is `y = 2/1 = 2`; the denominator zero
`x = -3` is the vertical asymptote; the branches approach `y = 2`
from below on the left and from above on the right — check with a
table: `f(6) = 8/9`, below 2; `f(-8) = 4`, above 2.*

### Modeled example 1 — degrees equal: read the asymptote off the leading coefficients

Analyse the end behaviour of `f(x) = (2x - 4)/(x + 3)`, and verify
against the SVG above.

*Degrees:* numerator degree 1, denominator degree 1 — equal. So the
horizontal asymptote is `y = (leading coefficient of numerator) /
(leading coefficient of denominator) = 2/1 = 2`.

*Full feature list (for the sketch):* domain `x ≠ -3`; vertical
asymptote `x = -3`; zero at `x = 2` (numerator zero, in domain);
y-intercept `f(0) = -4/3`; horizontal asymptote `y = 2`.

*Table check of the ends:* `f(10) = 16/13`, about 1.23 — below 2
and climbing toward it. `f(-10) = (-24)/(-7)`, about 3.43 — above 2
and falling toward it. So the right branch approaches `y = 2` from
below and the left branch from above, exactly as the SVG shows.
The graph does not cross `y = 2` at any finite `x` here (solving
`(2x - 4)/(x + 3) = 2` gives `2x - 4 = 2x + 6`, i.e. `-4 = 6`, which
is false) — but that is a fact about this function, not a rule
about horizontal asymptotes in general.

### Modeled example 2 — one degree higher: the slant asymptote is the quotient

Analyse the end behaviour of `g(x) = (x^2 + 2x + 3)/(x + 1)`, and
sketch its key features.

*Degrees:* numerator degree 2, denominator degree 1 — numerator
exactly one higher. So there is no horizontal asymptote; there is a
slant asymptote, found by division.

*Division (Lesson 02 method):* `(x^2 + 2x + 3) ÷ (x + 1) = x + 1`
with remainder 2, because `(x + 1)(x + 1) + 2 = x^2 + 2x + 3`.
So `g(x) = x + 1 + 2/(x + 1)`, with `x ≠ -1`.

*End behaviour:* as `x → ±∞`, the term `2/(x + 1) → 0`, so the
graph approaches the line `y = x + 1`. That line is the slant
asymptote. Near `x = -1` (the vertical asymptote), the graph still
breaks: just left, `g(-1.1) = (1.21 - 2.2 + 3)/(-0.1) = 2.01/(-0.1)`,
about `-20`; just right, `g(-0.9) = (0.81 - 1.8 + 3)/(0.1) =
2.01/0.1`, about `20`. So the left side dives down and the right
side shoots up around `x = -1`, while both ends settle onto
`y = x + 1`.

*Other features:* domain `x ≠ -1`; the numerator `x^2 + 2x + 3`
has discriminant `4 - 12 = -8 < 0`, so no real zeros and no
x-intercept; y-intercept `g(0) = 3`. A sketch with no x-intercept
is correct here — do not invent one to make the graph look
"complete".

## Guided practice (adult and learner together; 5 tasks)

1. State the horizontal asymptote (or "none") for each, with the
   degree reason: (a) `(5x)/(x^2 + 1)`, (b) `(4x^2 - 1)/(2x^2 + x)`,
   (c) `(x^3)/(x^2 - 1)`.
   ((a) `n < m`, so `y = 0`. (b) `n = m`, so `y = 4/2 = 2`.
   (c) `n = m + 1`, so no horizontal asymptote — a slant asymptote
   exists; dividing gives `x + x/(x^2 - 1)`, so the slant asymptote
   is `y = x`.)
2. Find the slant asymptote of `(x^2 - 3x + 5)/(x - 2)` by division,
   and verify by multiplying back. (Quotient `x - 1`, remainder 3:
   `(x - 2)(x - 1) + 3 = x^2 - 3x + 5`. Slant asymptote `y = x - 1`.)
3. Does `f(x) = (x^2 - 4)/(x^2 - 1)` cross its horizontal asymptote?
   (Horizontal asymptote `y = 1`. Solve `(x^2 - 4)/(x^2 - 1) = 1`:
   `x^2 - 4 = x^2 - 1`, i.e. `-4 = -1`, false — so this function
   never crosses it. Contrast with task 4.)
4. Does `g(x) = (2x^2 + x)/(x^2 + 1)` cross its horizontal asymptote?
   (Horizontal asymptote `y = 2`. Solve `(2x^2 + x)/(x^2 + 1) = 2`:
   `2x^2 + x = 2x^2 + 2`, so `x = 2` — yes, it crosses at `(2, 2)`,
   then approaches `y = 2` from above as `x → ∞`. Crossing a
   horizontal asymptote at finite `x` is allowed.)
5. Sketch by hand, then check with Desmos: `f(x) = (x - 1)/(x + 2)`.
   Mark domain, asymptotes, intercepts, and one test point per
   region. (Vertical asymptote `x = -2`; horizontal asymptote
   `y = 1`; x-intercept `(1, 0)`; y-intercept `(0, -1/2)`; test
   points, e.g. `f(-3) = -4`, `f(0) = -1/2`, `f(2) = 1/4` — the
   Desmos check should agree on all four features, or the hand
   sketch is reworked, not the technology.)

## Independent practice (learner tries; adult reviews same day; 6 tasks)

1. For `f(x) = (3x + 2)/(x - 5)`, give the vertical asymptote,
   horizontal asymptote, intercepts, and end behaviour in words.
2. For `f(x) = (x^2 + 1)/(x^2 - 9)`, give both asymptotes, the
   intercepts, and say whether the graph crosses its horizontal
   asymptote.
3. Find the slant asymptote of `(x^2 + 4x - 1)/(x + 3)` and the
   vertical asymptote; then give the y-intercept.
4. Find the slant asymptote of `(2x^2 - x + 4)/(x + 1)` and state
   the domain.
5. A function has numerator degree 3 and denominator degree 1.
   Does it have a horizontal asymptote? A slant asymptote? Explain
   in one paragraph. (No to both as lines: the quotient is a
   quadratic, so the end behaviour follows a parabola-like curve,
   not a line. The degree rule for a slant asymptote is exactly
   `n = m + 1`, not merely `n > m`.)
6. Error analysis: a classmate wrote that `(x^2 + 2)/(x - 1)` has
   horizontal asymptote `y = 1` "because the leading coefficients
   are both 1." Correct the error. (The degrees are 2 and 1, not
   equal, so the leading-coefficient ratio does not apply; division
   gives `x + 1 + 3/(x - 1)`, so the slant asymptote is `y = x + 1`
   and there is no horizontal asymptote.)

## Application

A drug's concentration (in mg/L) `t` hours after a dose is modelled
by `C(t) = (40t)/(t^2 + 4)` for `t ≥ 0`. Find the horizontal
asymptote and interpret it: what happens to the concentration
eventually, according to the model? Compute `C(0)`, `C(2)`, and
`C(10)` to support the interpretation, and state one way the model
must break down in reality. (`n < m`, so the horizontal asymptote
is `C = 0`: the model says concentration eventually approaches zero.
`C(0) = 0`, `C(2) = 80/8 = 10`, `C(10) = 400/104`, about 3.85.
So concentration rises to a peak, then falls back toward zero.
Reality check: the model is defined for all `t ≥ 0` and never goes
negative, but a real body eliminates the drug in discrete doses and
the model says nothing about repeated doses — it is a one-dose
model, and the adult should not let it be read as medical advice.)

## Exit check

1. `f(x) = (5x^2 - 3)/(2x^2 + x - 1)`: horizontal asymptote?
   (`y = 5/2`, degrees equal.)
2. `g(x) = (x^2 - x - 2)/(x + 1)`: slant asymptote? (Divide:
   quotient `x - 2`, remainder 0 — so `g(x) = x - 2` for `x ≠ -1`,
   and the "slant asymptote" `y = x - 2` is the simplified line
   with a hole at `x = -1`, where `g` is undefined but the line
   gives `-3`, so the hole is `(-1, -3)`.)
3. In one sentence, why do only the leading terms decide end
   behaviour? (Because as `x` grows without bound, lower-degree
   terms become negligible compared with the leading term.)

## Supports and extension

- **Reading access:** keep the four-row degree table visible for
  every item; the learner points to the row before writing an
  asymptote.
- **Alternate response mode:** end behaviour may be described in a
  table of large-`x` values (`x = ±10, ±100`) instead of limit
  notation, which this unit does not require.
- **Extension:** analyse `f(x) = (x^3 - 2x^2 + x)/(x^2 - 1)` fully:
  factor, holes, asymptotes, and end behaviour. (Answer: factor as
  `x(x - 1)^2/((x - 1)(x + 1)) = x(x - 1)/(x + 1)`, `x ≠ 1, -1`;
  hole at `x = 1` with simplified value `1(0)/2 = 0`, so `(1, 0)`;
  vertical asymptote `x = -1`; no horizontal asymptote; division
  of the simplified form gives slant asymptote `y = x - 2` with
  remainder `2/(x + 1)` — check: `(x + 1)(x - 2) + 2 = x^2 - x`.
  Careful: the slant asymptote describes the simplified form's
  ends, and the original shares those ends wherever it is defined.)

## Teacher note — likely misconceptions

- *"Horizontal asymptotes are never crossed":* the most common
  over-generalisation in this lesson. Guided task 4 exists to break
  it with a concrete crossing point, `(2, 2)`.
- *Leading-coefficient ratio used regardless of degrees:* require
  the degree comparison first, every time; the ratio is step two
  and only applies when `n = m`.
- *Slant asymptote claimed whenever `n > m`:* only `n = m + 1`
  gives a line. For larger gaps the quotient is a curve — name it
  as end behaviour, not as an asymptote line.

**Answer-key reference:** [answer-key.md](../answer-key.md#lesson-04).
