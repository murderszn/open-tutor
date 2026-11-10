# Lesson 05 — Polar Graphs: Cardioids, Limaçons, and Roses

**Goal:** Predict a polar graph's shape from its equation using
symmetry, zeros, and maxima, then verify with technology.

**Time:** ~50 minutes. **Materials:** polar graph paper or Desmos in
polar mode, a table of values for at least one graph computed by hand.

**Readiness check (5 minutes):** Evaluate `r = 2 + 2 cos θ` at
`θ = 0, π/2, π, 3π/2`. (Answers: 4, 2, 0, 2.) Those four numbers
already tell you the graph touches the pole and reaches farthest to
the east — today's method is that observation, systematized.

## 1. Reading a polar equation before graphing it

A polar graph is the set of points `(r, θ)` satisfying an equation
`r = f(θ)`, with `θ` usually running over `[0, 2π)` (sometimes more,
when a graph needs a wider interval to complete). Three tools predict
the shape before a single point is plotted:

**Symmetry tests** (replace and compare; a test that fails proves
nothing — the graph may still be symmetric, so a failed test means
"plot more points," not "asymmetric"):

- Polar axis (x-axis) symmetry: replacing `θ` by `−θ` leaves the
  equation unchanged. True for equations in `cos θ` alone.
- Line `θ = π/2` (y-axis) symmetry: replacing `θ` by `π − θ` leaves
  it unchanged. True for equations in `sin θ` alone.
- Pole (origin) symmetry: replacing `(r, θ)` by `(−r, θ)` — or `θ`
  by `θ + π` — leaves it unchanged.

**Zeros:** values of `θ` where `r = 0` are pole crossings — the graph
passes through the origin there.

**Maxima:** the largest `|r|` the equation attains, and the `θ` where
it attains it, give the graph's farthest reach and its orientation.

With those three, the standard families are recognizable at a glance:

| Family | Form (a, b > 0) | Shape |
|---|---|---|
| Circle through pole | `r = a cos θ` or `r = a sin θ` | Circle of diameter `a`, centered on the polar axis or the line `θ = π/2` |
| Cardioid | `r = a ± a cos θ` or `r = a ± a sin θ` (equal coefficients) | Heart-shaped, one cusp at the pole |
| Limaçon | `r = a ± b cos θ` or `r = a ± b sin θ`, `a ≠ b` | If `a > b`: one loop, dimpled. If `a < b`: inner loop |
| Rose | `r = a cos(nθ)` or `r = a sin(nθ)` | If `n` odd: `n` petals. If `n` even: `2n` petals. Each petal reaches `|r| = a` |

The rose petal count is the classic trap: `r = 3 cos(2θ)` has **four**
petals, not two, because as `θ` runs over `[0, 2π)`, `2θ` runs over
`[0, 4π)` and each petal is traced twice over part of the interval —
or, counted properly, the even-`n` rule gives `2n = 4`. Negative `r`
values are what let a rose retrace and complete: a petal drawn with
`r < 0` appears opposite its nominal angle. Plotting only `r ≥ 0`
values gives half a rose and a wrong conclusion.

## 2. Worked examples

**Example 1 — a cardioid, by hand.** `r = 2 + 2 cos θ`.

Symmetry: `cos(−θ) = cos θ`, so the graph is symmetric about the
polar axis. Zeros: `2 + 2 cos θ = 0` when `cos θ = −1`, i.e.
`θ = π` — one pole crossing, the cardioid's cusp. Maxima: `r` is
largest when `cos θ = 1`, at `θ = 0`, where `r = 4`.

Table: `θ = 0 → 4`; `π/2 → 2`; `π → 0`; `3π/2 → 2`; back to `2π → 4`.
The graph starts 4 units east, swings in to the pole at the west,
and returns — a heart shape with its cusp at the pole and its bulk
to the east. Desmos confirms; the table predicts.

**Example 2 — a rose, counted correctly.** `r = 4 sin(3θ)`.

Here `n = 3`, odd, so expect **3** petals, each reaching `|r| = 4`.
Check by values: `θ = π/6` gives `sin(π/2) = 1`, so `r = 4` (a petal
tip on the line `θ = π/6`); `θ = π/2` gives `sin(3π/2) = −1`, so
`r = −4`, which plots 4 units in the direction `π/2 + π = 3π/2`
(a petal tip pointing down, drawn by a negative radius). The three
tips are at angles `π/6`, `5π/6`, and `3π/2` — evenly spaced, as a
3-petal rose requires. If you had counted "3" from the coefficient
alone and then plotted only positive `r`, you would have missed the
downward petal entirely.

**Example 3 — a limaçon with an inner loop.** `r = 2 + 3 cos θ`.

Here `a = 2 < b = 3`, so expect an inner loop. Zeros:
`2 + 3 cos θ = 0` when `cos θ = −2/3`, at `θ ≈ 131.8°` and `228.2°` —
two pole crossings, which is what makes the inner loop: the graph
passes through the pole, loops back inside, and passes through again.
Maxima: `r = 5` at `θ = 0` (outer reach east); the most negative
value is `r = −1` at `θ = π`, which plots 1 unit east of the pole —
the inner loop's far side. Contrast `r = 3 + 2 sin θ` (`a > b`): no
zeros at all (`sin θ = −3/2` has no solution), so the graph never
reaches the pole — a dimpled single loop. **The zero test is the
difference between a dimple and a loop.**

## 3. Guided practice

1. For `r = 3 cos θ`, use Lesson 04's conversion to name the curve
   in rectangular form, then confirm the polar prediction (a circle
   through the pole) from the equation's zeros and maxima.
2. Predict the shape of `r = 2 − 2 sin θ` (family, symmetry, zeros,
   maxima, orientation), then verify with Desmos. Where is its cusp?
3. How many petals does `r = 5 cos(4θ)` have, and how far does each
   reach? Answer from the rule first, then check with a table at
   multiples of `π/8`.

## 4. Independent practice

1. Classify `r = 4 + 2 cos θ` and `r = 1 + 3 sin θ` (family, loop or
   dimple, zeros, maxima). Sketch each from a table before checking
   with technology.
2. Find all zeros of `r = 2 cos(3θ)` in `[0, 2π)` and explain, in
   words, why a rose's zeros are the angles *between* its petals.
3. A polar graph is symmetric about the polar axis and has
   `r = 0` only at `θ = π`. It reaches `r = 6` at `θ = 0`. Give a
   plausible equation, and explain why more than one equation could
   fit this description (a description of features is not a unique
   equation).
4. **Error analysis.** A classmate graphs `r = 3 cos(2θ)` and reports
   "two petals, because `n = 2`." Explain the error, give the correct
   petal count, and name the mechanism (negative `r` retracing) that
   makes the even-`n` rule work.

## 5. Application

A signal-strength pattern for a small antenna is modeled, in polar
form, by `r = 5 + 3 cos θ` (units arbitrary, `r ≥ 0` in the physical
reading). Find its maximum and minimum signal strengths and the
directions in which they occur; determine whether the pattern ever
drops to zero; and sketch it, labeling the direction of strongest
signal. Then answer the modeling question: the equation, taken
literally over all `θ`, never gives a negative `r` here — why does
that make the physical reading simpler than the rose in Example 2?

## 6. Exit check

Predict, without graphing technology, the family, petal/loop
structure, symmetry, zeros, and maxima of `r = 4 sin(2θ)`, then
verify with Desmos and correct any misprediction in writing.

## Supports and extensions

- **Support:** The table of values is not busywork: for every new
  family, one hand-computed table (at least the four cardinal angles
  plus the zeros) precedes the technology check.
- **Alternate response mode:** A sketch with labeled maxima, zeros,
  and symmetry axis earns the same credit as a paragraph describing
  them, provided the labels are present.
- **Extension:** Investigate `r = θ` (the Archimedean spiral) for
  `θ ≥ 0`: why do the symmetry tests and the petal rules not apply,
  and what does the graph do as `θ` grows without bound? This is the
  unit's reminder that the families are a catalog, not the whole
  subject.

## Teacher note

The two errors to watch are petal counting for even `n` and treating
a failed symmetry test as proof of asymmetry. Both are explicitly
named in the lesson so the adult can quote them back. See
`../teacher-guide.md` (adults only) and `../answer-key.md`.
