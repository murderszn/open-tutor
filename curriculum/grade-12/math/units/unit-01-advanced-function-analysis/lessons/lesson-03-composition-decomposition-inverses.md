# Lesson 03 — Composition, Decomposition, and Inverses

**Unit 01 · Session S6 · ~50 minutes**
**Standards:** F-BF.1.a (build an explicit formula from a context),
F-BF.1.b (combine function types with operations, including composition),
F-BF.4.a (solve f(x) = c for a simple function and write its inverse),
F-BF.4.d (+) (restrict a domain so a non-invertible function becomes
invertible — marked advanced in the published standards and taught as core
here because Unit 02's inverse trigonometric functions depend on it).

## Student goal

By the end of this lesson I can build a composite function from a two-stage
situation and verify it against the stages, explain with an example why
composition order matters (including domain differences), break a composite
into valid stages, find an inverse and verify it by composition in both
directions, restrict a domain to make a function invertible, and interpret
what an inverse means in a real situation.

## Materials

Notebook, pencil, calculator, graphing technology (for verification).

## Readiness check (5 min)

Let `f(x) = 3x − 2` and `g(x) = x²`.

1. Compute `f(g(2))`: evaluate the inside function first.
2. Compute `g(f(2))`.
3. Which function ran first in each computation, and are the two
   results equal?

## Explicit teaching

### Composition chains two functions into one

When one quantity depends on a second quantity, and that second quantity
depends on a third, the relationship from the first to the third is a
**composite function**. If `g` runs first and `f` runs second, the composite
is written `(f∘g)(x)` and means `f(g(x))` — always evaluate inside-out.

New precision this year: the **domain of a composite** has two
requirements. For `(f∘g)(x)` to exist, `x` must be in the domain of `g`
*and* `g(x)` must land in the domain of `f`. The inner function's output
becomes the outer function's input, so it must be an input the outer
function accepts.

Take `f(x) = √x` and `g(x) = x − 4`. Then `(f∘g)(x) = √(x − 4)`, which
requires `x − 4 ≥ 0`, so its domain is `x ≥ 4`. But `(g∘f)(x) = √x − 4`,
which only requires `x ≥ 0`. Same two building blocks, different order —
different functions *and* different domains. Composition is not
commutative, and its domain is not automatic.

### Decomposition factors a composite into stages

**Decomposition** is composition read backwards: given a composite,
name an inner stage and an outer stage that chain to it. For
`h(x) = (2x − 7)³ + 1`, the last thing done to `x` is "cube, then add 1,"
so a natural decomposition is inner `g(x) = 2x − 7` and outer
`f(u) = u³ + 1`. Check the chaining: `(f∘g)(x) = (2x − 7)³ + 1 = h(x)` ✓.
Decompositions are not unique — a different valid pair is acceptable as
long as the chaining check is shown.

### Inverses undo; verification goes both ways

An **inverse** reverses a function's input–output pairs: if `f(a) = b`,
then `f⁻¹(b) = a`. For a simple function you can find it by writing
`y = f(x)` and solving for `x` (F-BF.4.a). But finding a candidate is
not enough — **verify by composition in both directions**:
`f(f⁻¹(x)) = x` *and* `f⁻¹(f(x)) = x`, on the appropriate domains. One
direction can pass while the other fails when domains are wrong, so both
checks are required.

### Restricting a domain to make an inverse exist

Some functions have no inverse on their natural domain because two
different inputs produce the same output — they fail the
**horizontal line test** (a horizontal line crosses the graph more than
once). `f(x) = x²` is the classic case: `f(2) = f(−2) = 4`, so no single
input can be "the" input that produced 4.

The fix (F-BF.4.d (+)): **restrict the domain** until each output comes
from exactly one input. Restrict `f(x) = x²` to `x ≥ 0`. Now every
nonnegative output has exactly one nonnegative input, and the inverse
exists: `f⁻¹(x) = √x`, with domain `x ≥ 0`. Verification:
`f(f⁻¹(x)) = (√x)² = x` for `x ≥ 0` ✓, and
`f⁻¹(f(x)) = √(x²) = x` for `x ≥ 0` ✓ (note: `√(x²) = |x|`, and the
restriction `x ≥ 0` is exactly what makes `|x| = x`). A different
restriction (`x ≤ 0`) would give a different inverse, `f⁻¹(x) = −√x` —
the restriction is a choice, and it changes the answer. Unit 02 will use
this exact move to define inverse trigonometric functions, so treat it
as a tool, not a curiosity.

### An inverse's meaning in context

When `f` converts units or quantities one way, `f⁻¹` converts them back.
If `F(C) = 1.8C + 32` converts Celsius to Fahrenheit, then solving for
`C` gives `F⁻¹(F) = (F − 32)/1.8`, which converts Fahrenheit to Celsius.
The inverse swaps the roles: its inputs are Fahrenheit readings and its
outputs are Celsius temperatures, and it answers the question "what
Celsius temperature produced this Fahrenheit reading?"

## Worked examples (modeled reasoning)

**Example 1 — Two-stage model from context, with an order check.**

A carrier charges `C(w) = 2.5w + 6` dollars to ship a package weighing
`w` pounds. The package's weight depends on its volume: the packing foam
weighs `w = 12v` pounds for a volume of `v` cubic feet. Write the cost
as a function of volume, and compute the cost for `v = 3` cubic feet.

*Reasoning.* Two stages: `v → w` (volume to weight), then `w → C`
(weight to cost). The composite is `C(w(v))`:

`C(w(v)) = 2.5(12v) + 6 = 30v + 6`.

Check the units: `2.5` dollars/pound × `12v` pounds = `30v` dollars —
units cancel correctly. For `v = 3`: `30·3 + 6 = $96`. Sanity-check
through the stages: 3 ft³ → 36 lb → `2.5·36 + 6 = 90 + 6 = 96` ✓.
The composite and the two-stage computation must agree — when they do
not, the composite was built in the wrong order. Note the reverse
chaining `w(C(v))` would ask "what volume corresponds to a cost of a
cost?" — nonsense, which is how you know the order is wrong.

**Example 2 — Restrict, invert, and verify both ways.**

Let `f(x) = x² − 3` with the domain restricted to `x ≥ 0`. Find its
inverse, state the inverse's domain, and verify by composition in both
directions.

*Reasoning.* First, why restrict? On all real numbers, `f(2) = f(−2) = 1`
— the horizontal line `y = 1` hits twice, so no inverse exists. The
restriction `x ≥ 0` keeps only the right half of the parabola, where
each output comes from exactly one input.

Find the inverse: write `y = x² − 3`, solve for `x`:
`x² = y + 3`, so `x = ±√(y + 3)`. The restriction `x ≥ 0` selects the
positive branch: `x = √(y + 3)`. Swap variables:
`f⁻¹(x) = √(x + 3)`. The range of `f` on `x ≥ 0` is `y ≥ −3`, so the
inverse's domain is `x ≥ −3`.

Verify both directions. `f(f⁻¹(x)) = (√(x + 3))² − 3 = x + 3 − 3 = x`
for `x ≥ −3` ✓. `f⁻¹(f(x)) = √((x² − 3) + 3) = √(x²) = |x| = x` for
`x ≥ 0` ✓ — the absolute value collapses to `x` precisely because of
the restriction. Both checks pass, so `f⁻¹(x) = √(x + 3)` is confirmed.

## Guided practice

1. A bakery's daily cost is `C(n) = 1.25n + 40` dollars for `n` loaves
   baked, and `n = 12d` loaves are baked per day for `d` days. Write
   cost as a function of `d`, check the units, and compute for `d = 6`.
   [Which stage runs first? Multiply the rates and check units
   cancel.]
2. For `f(x) = √x` and `g(x) = x − 4`: write `(f∘g)(x)` and `(g∘f)(x)`,
   state the domain of each, and explain in one or two sentences why
   the domains differ. [Where does each composite break? Test `x = 0`
   in both.]
3. Decompose `h(x) = √(6x − 11)` into an inner and an outer stage in two
   different ways, and show the chaining check for each. [Name the
   inside operation first; the second way can scale the inside and
   compensate in the outside.]
4. For `f(x) = 4x − 7`: find `f⁻¹(x)` and verify it by composition in
   both directions, showing every step. [Write `y = 4x − 7`, solve for
   `x`, then substitute back both ways.]

## Independent practice

1. A water bill is `B(g) = 0.015g + 18` dollars for `g` gallons used,
   and usage is `g = 45p` gallons per person for `p` people in a
   household.
   a) Write the bill as a function of `p`, and compute it for `p = 4`.
   b) State a realistic domain for `p` and explain the restriction.
2. Error analysis: "Mara claims `(f∘g)(x)` always has the same domain as
   `g`, because you start with `g`. For `f(x) = √x` and `g(x) = x² − 9`,
   she says the domain of `f∘g` is all real numbers, since `g` accepts
   every real input." Identify every error in Mara's claim, give the
   correct composite and its domain, and explain the rule she forgot.
3. For `f(x) = (x − 2)²` with domain `x ≥ 2`: find `f⁻¹(x)`, state the
   inverse's domain, and verify by composition in both directions.
4. A function converts kilometers to miles: `M(k) = 0.621k`.
   a) Write `M⁻¹` and compute `M⁻¹(10)` to two decimal places.
   b) Verify `M(M⁻¹(10)) = 10`, and explain in context what `M⁻¹(10)`
      tells you.
5. Explain your reasoning: why does `f(x) = x²` need its domain
   restricted before it can be inverted, and why does the restriction
   `x ≥ 0` (rather than some other restriction) determine *which*
   inverse you get? Then: the sine function also fails the horizontal
   line test — predict how the same restriction idea will let Unit 02
   define an inverse sine function.

## Application

A school fundraiser sells candles. Candles sold depends on advertising
days: `n(d) = 15d + 10`. Revenue from `n` candles is `R(n) = 6n − 50`
dollars ($6 each, minus $50 fixed materials cost).

a) Write revenue as a function of advertising days. Compute the revenue
   for `d = 12` days, and verify by computing through the two stages.
b) Find the inverse of your part-(a) function and explain what it
   answers in the fundraiser's story. Use it to find how many
   advertising days are needed to raise $2000.
c) Explain why the inverse only makes sense for revenue values of at
   least $10 — connect this to the domain restriction idea from the
   lesson.

## Exit check

1. For `f(x) = 2x + 3` and `g(x) = x²`: write `(f∘g)(x)` and `(g∘f)(x)`,
   evaluate both at `x = 1`, and state in one sentence why they are
   different functions.
2. If `h = f∘g` models "cost of weight of volume," explain in words
   what `h(5)` means in the situation.

## Supports and extension

- **Reading/language access:** Key terms — *composite, decomposition,
  inverse, horizontal line test, restricted domain* — are posted on a
  word wall with a one-line plain-language definition and a small
  example each; learners read each Worked Example aloud in pairs,
  alternating the "reasoning" sentences, before attempting practice.
- **Alternate response mode:** Any composition or inverse computation
  may be done with a two-column input/output table (inner outputs
  become outer inputs; a function's outputs become its inverse's
  inputs) instead of nested algebra, with the final formula still
  written.
- **Extension:** Prove that if `f` and `g` are both invertible, then
  `(f∘g)⁻¹ = g⁻¹∘f⁻¹` — the inverse of a composite reverses the order.
  Verify your proof on `f(x) = 2x + 1`, `g(x) = x − 4`. Then: find all
  functions `f` such that `f = f⁻¹` (involutions), and give two
  non-trivial examples with verification.

## Teacher note

Watch for: (1) computing outside-in — learners evaluate `f` first in
`f(g(x))`; insist on the inner function first, every time; (2) finding
an inverse formula but skipping both composition checks — require both
directions, since a wrong-branch choice (e.g., `−√x` instead of `√x`)
passes one direction and fails the other; (3) treating "restrict the
domain" as a formality rather than a choice — ask "what would change
if you restricted to `x ≤ 0` instead?"; (4) in context work, writing the
composite in the wrong order — have them narrate "this goes into that"
before writing any symbols.
Answer-key reference: `../answer-key.md` (adults-only file), Lesson 03.

