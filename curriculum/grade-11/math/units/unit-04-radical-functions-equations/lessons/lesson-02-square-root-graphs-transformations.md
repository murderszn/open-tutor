# Lesson 02 — Square-Root Graphs, Transformations, Domain, and Range

**Goal (learner hears):** "I can graph a square-root function by
hand, find where it starts, and state its domain and range — and I
can move that graph with the same transformations I used all year."
**Time:** ~50 minutes · **Materials:** paper, pencil, graph paper,
Desmos for the check step.
**Standards:** F-IF.7.b, F-IF.4, F-IF.5.

## Readiness check (5 min)

Evaluate `√x` for `x = 0, 1, 4, 9`. Sketch the four points.
(Answers: 0, 1, 2, 3.) Notice the outputs grow, but each step adds
less than the last: 0 → 1 is +1, 1 → 2 is +1 over three more inputs,
2 → 3 is +1 over five more inputs. That slowing-down is the shape of
this whole lesson.

## Explicit teaching

The parent function is `f(x) = √x`. Its **domain** is `x ≥ 0`
(because an even index needs a nonnegative radicand) and its
**range** is `y ≥ 0` (because the principal root is never negative).
Its graph starts at the **starting point** `(0, 0)` and climbs to
the right, ever more slowly, without bound: as `x → ∞`, `f(x) → ∞`,
but the increments shrink. It is increasing on its whole domain,
has no symmetry, and its only intercept is `(0, 0)`.

Transformations act exactly as in Unit 01, and the starting point
carries the whole story:

| Form | Starting point | Domain | Range |
|---|---|---|---|
| `√x` | `(0, 0)` | `x ≥ 0` | `y ≥ 0` |
| `√(x − h) + k` | `(h, k)` | `x ≥ h` | `y ≥ k` |
| `a√(x − h) + k`, `a > 0` | `(h, k)` | `x ≥ h` | `y ≥ k` |
| `a√(x − h) + k`, `a < 0` | `(h, k)` | `x ≥ h` | `y ≤ k` (reflected, falls from the start) |

Two cautions. First, a horizontal stretch or shrink hides inside
the radicand: `√(2x − 6) = √(2(x − 3))` starts at `x = 3`, not at
`x = 6` — factor the coefficient out before reading `h`. Second,
the domain comes from the *equation*, not from the picture: set the
radicand `≥ 0` and solve, then let the graph confirm it.

The exact plotted graph in
[`assets/root-graphs.svg`](../assets/root-graphs.svg) shows `y = √x`
beside `y = ∛x` for comparison; Lesson 03 takes up the cube-root
curve. Use technology to check a hand sketch, never to replace the
domain argument.

### Modeled example 1 — graph from the equation

Graph `f(x) = √(x − 3) + 2` by hand and state its domain, range,
starting point, intercept, and end behavior.

*Step 1 — starting point.* The form is `√(x − h) + k` with `h = 3`,
`k = 2`, so the graph starts at `(3, 2)`.

*Step 2 — domain and range.* Radicand `x − 3 ≥ 0` gives domain
`x ≥ 3`. The root is nonnegative, plus 2, so range `y ≥ 2`.

*Step 3 — points.* From the start, add perfect squares to `x`:
`x = 3 → y = 2`; `x = 4 → y = 3`; `x = 7 → y = 4`; `x = 12 → y = 5`.
Plot and connect with a smooth, flattening curve.

*Step 4 — features.* Intercepts: `y`-intercept none (the graph
starts at `x = 3`); `x`-intercept none (the lowest `y` is 2).
Increasing on `x ≥ 3`. End behavior: as `x → ∞`, `f(x) → ∞`.

### Modeled example 2 — a reflected, stretched root

Graph `g(x) = −2√(x + 1) − 1` and state its domain and range.

*Starting point:* `√(x − (−1)) − 1` shifts left 1 and down 1, so the
start is `(−1, −1)`. *Domain:* `x + 1 ≥ 0`, so `x ≥ −1`. *Range:*
the factor `−2` reflects the root downward, so from `−1` the graph
falls: `y ≤ −1`. *Points:* `x = −1 → y = −1`; `x = 0 → y = −3`
(`−2 · 1 − 1`); `x = 3 → y = −5` (`−2 · 2 − 1`); `x = 8 → y = −7`.
The curve drops steeply at first, then flattens — the reflection of
the parent's slowing climb. Decreasing on its domain. Intercepts:
`y`-intercept at `x = 0` is `(0, −3)`; no `x`-intercept, since
`−2√(x + 1) − 1 = 0` would require a square root to equal `−1/2`.

## Guided practice

1. State the domain, range, and starting point of
   `h(x) = √(2x − 6)`. *(Hint: factor the radicand first.)*
2. Graph `k(x) = 3√x − 4` by hand and give its domain and range.
   *(Hint: start at (0, −4); use x = 0, 1, 4, 9.)*
3. A classmate claims the domain of `√(x − 5)` is `x > 5`. Correct
   the claim in one sentence. *(Hint: what is √(0)?)*

## Independent practice

See [Practice Set B](../practice.md#practice-set-b) (items B1–B8).

## Application

A software team models the time `T` (minutes) to run a data job on
`n` thousand records as `T(n) = 4√n + 10`. What is the domain in
context, what does `T(0) = 10` mean, and how much longer does the job
take for 16 thousand records than for 4 thousand? (Domain in
context: `n ≥ 0`. `T(0) = 10` is the fixed startup overhead, 10
minutes with no records. `T(16) = 4 · 4 + 10 = 26`;
`T(4) = 4 · 2 + 10 = 18`; difference 8 minutes. Note the doubling of
records from 4 to 16 thousand less than doubles the variable part —
the square root's slowing growth, in context.)

## Exit check

Give the domain, range, and starting point of `f(x) = √(x + 2) − 1`.
(Domain `x ≥ −2`; range `y ≥ −1`; starting point `(−2, −1)`.)

## Supports and extension

- **Reading/language access:** describe every graph in a sentence
  before sketching it ("starts at (3, 2), climbs, flattening") so
  the words carry the shape even if the sketch is rough.
- **Alternate response mode:** a learner may give domain, range,
  and starting point in a table instead of a sketch, and verify the
  sketch with Desmos.
- **Extension:** show that `√(x − 3) + 2` is the inverse of
  `y = (x − 2)^2` restricted to `x ≥ 2`, by swapping `x` and `y` and
  solving — and explain why the restriction is what makes the
  inverse a function.

## Teacher note

Likely misconceptions: (1) reading `h` from an unfactored radicand
(`√(2x − 6)` started at 6); (2) excluding the starting point from
the domain (`x > 3` instead of `x ≥ 3` — the root of 0 is 0, a real
value); (3) forgetting that a negative leading factor flips the
range. Reteach: always write the factored form and the starting
point before plotting any point.
Answer-key reference: [answer-key.md](../answer-key.md#lesson-02).
