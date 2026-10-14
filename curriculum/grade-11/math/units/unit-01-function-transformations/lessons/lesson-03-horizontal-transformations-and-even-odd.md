# Lesson 03 — Horizontal Changes and Even/Odd Functions

**Unit 01 · Session S6 · ~50 minutes**
**Standards:** F-BF.3, F-IF.4, F-IF.7

## Student goal

By the end of this lesson I can predict the graph effects of `f(kx)`
and `f(x + k)`, explain why horizontal shifts "feel backwards," combine
horizontal and vertical transformations in the right order, and prove a
function even or odd from its expression.

## Materials

Notebook, pencil, graph paper or Desmos (free, no account).

## Readiness check (5 min)

1. If `f(5) = 12`, what is the value of `f(5) + 3`? What point moved,
   and where did it go?
2. Solve `x + 4 = 9`. Now: for the function `g(x) = f(x + 4)`, which
   input to `g` produces the output that `f` produced at input 5?

Question 2 is the whole lesson in one line — keep its answer visible.

## Explicit teaching

**Horizontal shift: `g(x) = f(x + k)`.** Changing the *input* before the
function acts shifts the graph **horizontally**, and the direction
surprises everyone: `f(x + 3)` shifts the graph **left** 3, and
`f(x − 3)` shifts it **right** 3.

Why "backwards"? Think of the readiness check. The point that used to
appear at input 5 — with output `f(5) = 12` — now appears where?
`g(x) = f(x + 4)` gives output 12 when `x + 4 = 5`, i.e., at `x = 1`.
The same output now happens **4 units earlier** — the whole graph moved
left. The `+4` makes the function "reach" its old values sooner, so
everything slides left. Adding to the input moves the graph in the
*negative* x-direction.

**Horizontal scaling: `g(x) = f(kx)`.** Multiplying the *input* by `k`
scales horizontally, again "backwards" from vertical intuition:

- `|k| > 1`: **horizontal compression** — the graph squeezes toward
  the y-axis (it reaches old outputs sooner).
- `0 < |k| < 1`: **horizontal stretch** — the graph widens away from
  the y-axis.
- `k = −1`: **reflection across the y-axis** — `(a, b)` becomes
  `(−a, b)`.

Reason it out: `g(2) = f(2k)`. If `k = 3`, then at input 2 the function
already sees what `f` saw at input 6 — it is running *ahead*, so the
picture compresses.

**The order rule for mixed transformations.** Work from the inside out:
horizontal (input) changes first, then vertical (output) changes. For
`g(x) = 2f(3x − 1) + 4`:

1. Inside: `3x − 1` — factor the input change as `3(x − 1/3)`:
   horizontal compression by 3, then shift right `1/3`. (Factoring
   first is the reliable move; `3x − 1` does **not** shift right 1.)
2. Outside: multiply outputs by 2 (vertical stretch), then add 4
   (shift up 4).

Factoring the input expression before naming the shift prevents the
most common error in this unit.

**Even and odd, algebraically (F-BF.3).** From Lesson 01's symmetry:

- **Even:** `f(−x) = f(x)` for all `x` in the domain — y-axis symmetry.
  All-even-powered polynomials like `x⁴ − 3x² + 1` are even; so is
  `f(x) = |x|`.
- **Odd:** `f(−x) = −f(x)` — origin symmetry. All-odd-powered
  polynomials like `x³ − 2x` are odd.
- **Neither:** anything else, e.g., `x² + x` (compute `f(−x)` and watch
  it match neither test).

Test the *expression*, not the picture: compute `f(−x)`, simplify, and
compare with `f(x)` and `−f(x)`.

## Worked examples (modeled reasoning)

**Example 1 — Predict, verify, and explain the "backwards" shift.**

Predict the graph of `g(x) = (x + 2)²` from `f(x) = x²`, then verify.

*Reasoning.* Prediction: `+2` is inside, on the input — horizontal
shift, and by the readiness-check logic it goes **left** 2. The vertex
`(0, 0)` should move to `(−2, 0)`.

Verification by tracking: `g(−2) = (−2 + 2)² = 0` ✓ — the old output
at input 0 now happens at input −2, two units earlier. A 5-point table
confirms the whole parabola slid left with its shape unchanged. If I
had guessed "right 2," the table would have convicted me: `g(2) = 16`,
not 0.

**Example 2 — Mixed transformations in the right order.**

Describe, in order, the transformations that turn `f(x) = √x` into
`g(x) = −2√(4x + 8) − 1`. Track the landmark point `(4, 2)` (since
`√4 = 2`).

*Reasoning.* Start inside: `4x + 8 = 4(x + 2)`. Input changes:
horizontal compression by factor 4, then shift **left** 2 (because
`x + 2`). Outside: multiply by −2 — vertical stretch by 2 plus
reflection across the x-axis — then shift down 1.

Track `(4, 2)` through the chain: input side sends `4 → 4/4 − 2`…
careful — the mapping sends an original input `a` to the new input
`(a − 2)/4`? No: cleaner to verify forward. Evaluate `g` at the
predicted new landmark. Original landmark: input 4 gives output 2.
The input 4 in `g` means `4x + 8` with `x = ?`… Let's instead track:
we want the point where the inside equals 4: `4x + 8 = 4` gives
`x = −1`. Then `g(−1) = −2√4 − 1 = −2·2 − 1 = −5`. So `(4, 2)` on `f`
corresponds to `(−1, −5)` on `g`. Direct check:
`−2√(4(−1) + 8) − 1 = −2√4 − 1 = −5` ✓. Domain note: `4x + 8 ≥ 0` gives
`x ≥ −2`, so the domain shifted left 2 as well — horizontal shifts move
domains, vertical shifts move ranges.

**Example 3 — Even/odd proof from the expression.**

Classify `p(x) = (x³ − x) / (x² + 1)` — wait, rational functions are
Unit 03's territory, but the even/odd test is pure algebra, so it
applies anywhere. Compute `p(−x)`:

`p(−x) = ((−x)³ − (−x)) / ((−x)² + 1) = (−x³ + x) / (x² + 1) = −(x³ − x)/(x² + 1) = −p(x).`

Odd. Note the domain excludes nothing (denominator never zero), and the
test needed the *whole* expression simplified — a common error is
testing only the numerator.

## Guided practice

1. Predict the direction of the shift for `h(x) = (x − 5)³` from
   `f(x) = x³`; verify by tracking the point `(0, 0)`. [Which input
   to `h` gives the old output at input 0?]
2. Describe in order the transformations from `f(x) = |x|` to
   `g(x) = −|2x − 6| + 3`. [Factor the inside first.]
3. Classify as even, odd, or neither with algebra shown:
   `f(x) = 3x⁵ + x³`, `g(x) = x² − 4|x|`, `h(x) = x³ + x²`.
   [Simplify `f(−x)` fully before comparing.]
4. Explain in three sentences why `f(2x)` compresses horizontally
   while `2f(x)` stretches vertically, even though both use the
   number 2. [Which one touches inputs, which touches outputs?]

## Independent practice

1. From `f(x) = x²`, write formulas (in terms of `f`) for: shift left
   4; horizontal stretch by factor 3; reflection across the y-axis.
   Then expand each into `x`-form and verify all three at `x = 6`
   against the original table value `f(6) = 36`.
2. `g(x) = 5(−2(x + 1))³ + 7` is built from `f(x) = x³`. List the
   transformations in application order and find the image of the
   point `(2, 8)` under the full chain. Verify by direct substitution.
3. A learner claims the graph of `y = (2x)²` is a horizontal stretch
   by 2 of `y = x²`. Agree or disagree, with a table or a landmark
   point as evidence. (Then state the correct description.)
4. Prove: if `f` is odd and `g` is even, then `f·g` is odd. Then
   decide: is the composition `f(g(x))` of an odd `f` with an even `g`
   even, odd, or neither? Justify with the definition.
5. Find `k` given graphs (adult supplies two parabolas or Desmos
   screenshots): `g(x) = f(x + k)` where the vertex of `f` is
   `(1, −2)` and the vertex of `g` is `(−3, −2)`. Then give a second
   transformation description of the same pair of graphs using a
   vertical change instead — is it possible? Explain.

## Application

A weather balloon's altitude (meters) `t` minutes after launch is
`A(t) = −20t² + 400t` for `0 ≤ t ≤ 20`.

a) Find the vertex; interpret the maximum altitude and when it occurs.
b) A second balloon launches 3 minutes later with the same profile.
   Write its altitude function as a transformation of `A` and
   interpret what the transformation means physically.
c) A ground camera records altitude but its clock runs at half speed
   (it thinks `t` minutes have passed when only `t/2` have). Write the
   recorded-altitude function in terms of `A` and classify the
   transformation. State the recorded time of maximum altitude.

## Exit check

1. `f(x) = x³ − 4x`. Is `f` even, odd, or neither? Show the
   one-line test.
2. Write the transformation of `f(x) = √x` that shifts the graph
   right 3 and down 2. Then give the domain of the transformed
   function.

## Supports and extension

- **Reading/language access:** "Horizontal" and "vertical" get
  kinesthetic anchors: arms wide for horizontal, arms up for
  vertical, said aloud with each prediction.
- **Alternate response mode:** Direction predictions may be shown by
  sliding a transparency of the parent graph over a grid, with the
  adult recording the final formula.
- **Extension:** Show that any function `f` defined on a symmetric
  domain can be written as the sum of an even function and an odd
  function: `E(x) = (f(x) + f(−x))/2`, `O(x) = (f(x) − f(−x))/2`.
  Prove `E` is even, `O` is odd, and `E + O = f`.

## Teacher note

The durable misconception: horizontal shifts "feel" like they should
follow the sign. The readiness-check question (`g(x) = f(x + 4)`, find
the input giving `f`'s output at 5) is the antidote — reuse it
whenever the error resurfaces. Also watch for unfactored input shifts
(`2x − 6` read as "right 6"); insist on factoring first. Answer-key
reference: `answer-key.md`, Lesson 03.
