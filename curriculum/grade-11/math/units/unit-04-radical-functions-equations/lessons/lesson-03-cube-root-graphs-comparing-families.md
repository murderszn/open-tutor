# Lesson 03 — Cube-Root Graphs and Comparing the Root Families

**Goal (learner hears):** "I can graph a cube-root function by
hand, explain why its domain is every real number, and say how it
differs from a square-root graph — and I can name the inverse pair
behind each root."
**Time:** ~50 minutes · **Materials:** paper, pencil, graph paper,
the exact graph [`assets/root-graphs.svg`](../assets/root-graphs.svg),
Desmos for the check step.
**Standards:** F-IF.7.b, F-IF.4, F-IF.5.

## Readiness check (5 min)

Evaluate `∛x` for `x = −8, −1, 0, 1, 8`. (Answers: −2, −1, 0, 1, 2.)
Compare with Lesson 02's square-root table: the cube root accepts
the negatives the square root refused. That one difference drives
this lesson.

## Explicit teaching

The parent function is `p(x) = ∛x`. Its **domain is all real
numbers** and its **range is all real numbers**, because an odd
index accepts any radicand and returns exactly one real root. Its
graph passes through the **center point** `(0, 0)` and runs in both
directions: as `x → ∞`, `p(x) → ∞`; as `x → −∞`, `p(x) → −∞`.
It is increasing on its whole domain, has rotational symmetry about
its center (it is an odd function: `∛(−x) = −∛x`), and, like the
square root, its increments shrink as `|x|` grows — the curve
flattens toward both ends.

Transformations move the center the way they moved the square
root's starting point: `∛(x − h) + k` centers at `(h, k)`, with
domain and range still all real numbers. A negative leading factor
reflects the curve through its center: it still increases? No — a
negative factor makes it *decreasing* on its whole domain. Check
with points, never with a slogan: `−∛x` at `x = 8` is `−2`, at
`x = −8` is `2`, so as `x` grows the values fall.

**The two root families side by side:**

| Feature | `√x` | `∛x` |
|---|---|---|
| Domain | `x ≥ 0` | all reals |
| Range | `y ≥ 0` | all reals |
| Anchor point | starting point `(0, 0)` | center point `(0, 0)` |
| End behavior | `x → ∞: y → ∞` only | both directions, `y` follows `x` |
| Symmetry | none | odd (180° about center) |
| Inverse of | `x^2` on `x ≥ 0` | `x^3` (no restriction needed) |

**Roots as inverses.** `y = ∛x` undoes `y = x^3`: cubing is
one-to-one over all reals, so its inverse is a function with no
restriction. `y = √x` undoes `y = x^2` only after restricting the
square to `x ≥ 0`; without the restriction, `x^2` sends both 3 and
−3 to 9, and no function can undo that choice. This is the Unit 01
inverse test (a function must be one-to-one to have an inverse
function) wearing new clothes.

### Modeled example 1 — graph from the equation

Graph `f(x) = ∛(x − 2) + 1` by hand and state its domain, range,
center, intercepts, and end behavior.

*Step 1 — center.* The form is `∛(x − h) + k` with `h = 2`,
`k = 1`, so the center is `(2, 1)`.

*Step 2 — domain and range.* Odd index: domain all reals, range
all reals.

*Step 3 — points.* From the center, add perfect cubes to `x`:
`x = 2 → y = 1` (center); `x = 3 → y = 2`; `x = 10 → y = 3`;
`x = 1 → y = 0`; `x = −6 → y = −1`. Plot and connect with an
S-shaped curve that flattens toward both ends.

*Step 4 — features.* Intercepts: `y`-intercept at `x = 0`:
`∛(−2) + 1 ≈ −0.26` (exact form `1 − ∛2`); `x`-intercept at
`y = 0`: `∛(x − 2) = −1` gives `x − 2 = −1`, so `x = 1`, the
point `(1, 0)` already plotted. Increasing on its whole domain.
End behavior: `x → ∞` gives `y → ∞`; `x → −∞` gives `y → −∞`.

### Modeled example 2 — tell the families apart from a description

A function is described as: "domain all real numbers, decreasing
everywhere, passes through (1, −2), flattens toward both ends."
Which family, and what is a possible equation?

Decreasing everywhere with all-real domain and flattening ends fits
a reflected cube root, not a square root (whose domain stops at its
starting point). A candidate: `g(x) = −∛(x − 1) − 2`? Check the
point: `g(1) = −∛0 − 2 = −2`. ✓. Center `(1, −2)`, decreasing,
domain and range all reals. A square-root candidate fails at once:
no square-root function has domain all reals. The domain is the
fastest family test there is.

## Guided practice

1. Graph `h(x) = ∛(x + 3) − 2` by hand; give its center, domain,
   and range. *(Hint: center (−3, −2); use x = −3, −2, −4, 5, −11.)*
2. True or false, with a reason: "Every cube-root function has a
   y-intercept." *(Hint: is x = 0 always in the domain?)*
3. Explain why `√x` needs a domain restriction to have an inverse
   function but `∛x` does not. *(Hint: which power is
   one-to-one?)*

## Independent practice

See [Practice Set C](../practice.md#practice-set-c) (items C1–C8).

## Application

A metal cube's edge length `s` (cm) relates to its volume `V`
(cubic cm) by `s = ∛V`. Find the edge of a 64 cm³ cube and of a
125 cm³ cube, and say by what factor the edge grows when the volume
doubles from 64 to 128 cm³. (Edges: 4 cm and 5 cm. Doubling: edge
becomes `∛128 = 4∛2 ≈ 5.04` cm, a factor of `∛2 ≈ 1.26` — volume
doubling does *not* double the edge. Domain in context: `V ≥ 0`;
negative volumes are meaningless, even though the cube-root function
itself accepts negatives.)

## Exit check

Give the domain, range, and center of `f(x) = 2∛(x − 4) + 3`, and
say whether it is increasing or decreasing. (Domain all reals;
range all reals; center `(4, 3)`; increasing, since the leading
factor 2 is positive.)

## Supports and extension

- **Reading/language access:** call the cube root's anchor a
  "center" and the square root's a "starting point" every time;
  the different names prevent the graphs from blurring together.
- **Alternate response mode:** a learner may build the graph from
  a table of perfect cubes rather than sketching freehand, and
  verify with Desmos.
- **Extension:** prove `∛x` is odd from the definition
  `∛(−x) = −∛x`, and show that the graph of `y = ∛x` reflected
  across `y = x` is `y = x^3` — the inverse pair, drawn.

## Teacher note

Likely misconceptions: (1) giving a cube root a restricted domain
by habit from square roots; (2) claiming a reflected cube root is
still increasing ("reflection" misread as a vertical shift); (3)
forgetting that a cube-root equation's check can still matter for
arithmetic even though cubing creates no extraneous solutions (see
Lesson 05). Reteach: domain first, from the index's parity, before
any point is plotted.
Answer-key reference: [answer-key.md](../answer-key.md#lesson-03).
