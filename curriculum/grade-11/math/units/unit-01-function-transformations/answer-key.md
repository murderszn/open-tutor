# Answer Key — Unit 01: Function Transformations, Composition, Inverses

**ADULTS ONLY.** Keep this file away from the learner. It contains
worked solutions for every scored item in Unit 01: the five lessons'
readiness checks, guided practice, independent practice, applications,
exit checks, and extensions; Practice Sets A–E; the project rubric
guidance with a worked sample machine; the Week-04 quiz; and the unit
assessment. Every solution below was worked independently from the
lesson prose and then reconciled against it; where the prose and the
algebra disagreed, the algebra won and the discrepancy is noted.
Scoring criteria for the quiz and unit assessment live in those files;
the rubric for the project lives in `project.md`. Acceptable-response
notes mark what earns full credit on open items.

---

## Lesson 01 — The Function Concept, Rebuilt

### Readiness check

1. `g(4) = 3(4) − 7 = 12 − 7 = 5`.
2. `C(n) = 2.50n` dollars for `n` rides. Sensible inputs: whole
   numbers `n = 0, 1, 2, …` up to a realistic daily maximum (e.g.
   `n ≤ 10`). Negative or fractional rides are not sensible — the
   context trims the domain.

### Guided practice

1. Yes, a function: each x-value (0, 1, 2, 3) appears exactly once.
   Domain: `{0, 1, 2, 3}`. Range: `{1, 3, 5, 7}`.
2. `C(t) = 30 + 0.10t` dollars, `t ≥ 0` whole texts (realistic:
   `0 ≤ t ≤` a few thousand). `C(200) = 30 + 20 = 50` means
   "200 texts cost $50." Units required for full credit.
3. `f(−x) = 5(−x)⁴ − 3(−x)² = 5x⁴ − 3x² = f(x)` → **even**.
4. Yes — no vertical line hits `y = x²` twice. Domain: all real
   numbers. Range: `[0, ∞)` (only nonnegative y-values occur).

### Independent practice

1. Function (each x once). Domain `{−2, −1, 0, 1, 2}`. Range
   `{0, 1, 4}`. Rule: `f(x) = x²` — check: `(−2)² = 4` ✓, `1² = 1` ✓,
   `0² = 0` ✓.
2. `P(h) = 3 + 2(h − 1) = 2h + 1` dollars for `1 ≤ h ≤ 8`
   (whole hours; `P(0) = 0` if the car is not parked). `P(5) = 11`
   means "5 hours of parking cost $11."
3. Not a function of `x`: `x = y²` gives `y = ±√x`; e.g. the points
   `(4, 2)` and `(4, −2)` share x-value 4, so the vertical line
   `x = 4` hits the graph twice.
4. a) `f(−x) = (−x)⁵ − (−x) = −x⁵ + x = −(x⁵ − x) = −f(x)` → **odd**.
   b) `g(−x) = x⁴ + 2x² − 1 = g(x)` → **even**.
   c) `h(−x) = 2⁻ˣ = 1/2ˣ`; this equals neither `2ˣ` nor `−2ˣ`
   → **neither**.
5. The error: `y = ±√x` is two outputs for each positive x (e.g.
   `(4, 2)` and `(4, −2)`), so the vertical line `x = 4` meets it
   twice — it is not the graph of a function of `x`. "Just the
   square root" would be `y = √x` (principal root) alone.

### Application

a) `T(m) = 2.50 + 1.75m` dollars, `A(m) = 2.60m` dollars;
   realistic domains: `m ≥ 0` miles (up to a reasonable trip length).
b) `T(6) = 2.50 + 10.50 = 13.00`: "6 miles by taxi cost $13.00."
   `A(6) = 15.60`: "6 miles by app cost $15.60."
c) `2.50 + 1.75m = 2.60m` → `2.50 = 0.85m` → `m = 2.50/0.85 ≈ 2.94`
   miles. Cost there: `T(2.94) ≈ $7.65`. The ordered pair
   `(2.94, 7.65)` is the intersection of the two graphs — the
   mileage where both charge the same.

### Exit check

1. Acceptable: "A function gives every allowed input exactly one
   output."
2. `f(x) = 4 − x²`: domain all real numbers; range `(−∞, 4]`
   (maximum 4 at `x = 0`, decreasing without bound);
   `f(−x) = 4 − (−x)² = 4 − x² = f(x)` → **even**.

### Extension

Product of two odds is even: `(fg)(−x) = f(−x)g(−x) = (−f(x))(−g(x))
= f(x)g(x) = (fg)(x)` ✓.
Sum of an even and an odd function: `(e+o)(−x) = e(x) − o(x)`. This
equals `(e+o)(x) = e(x) + o(x)` for all `x` only when `o(x) = 0`
identically. So yes — exactly when the odd part is the zero
function (e.g. `e(x) = x²`, `o(x) = 0`, sum `x²` is even).

---

## Lesson 02 — Vertical Shifts and Vertical Scaling

### Readiness check

1. Points: `(−2, 4)`, `(−1, 1)`, `(0, 0)`, `(1, 1)`, `(2, 4)`;
   vertex `(0, 0)`.
2. Every point's y-value changes; the new vertex is `(0, 3)`.
   (This is `f(x) + 3` before it is named.)

### Guided practice

1. `g(x) = |x| − 4`: every y-value drops 4; x-values do not move.
   Vertex moves `(0, 0) → (0, −4)`; V-shape unchanged.
   Table: `x = −2, −1, 0, 1, 2` → `g = −2, −3, −4, −3, −2` ✓.
2. `h(x) = −(1/2)(x² − 1)`: reflect across the x-axis and compress
   vertically by `1/2`. Vertex `(0, −1)` → reflect → `(0, 1)` →
   compress → `(0, 1/2)`. Verification: `h(0) = −(1/2)(−1) = 1/2` ✓.
3. Pair `(0, 2) → (0, −1)`: `−1 = 2 + k` → `k = −3`. Check with
   `(4, 6) → (4, 3)`: `3 = 6 − 3` ✓. Shift down 3.
4. At an x-intercept, `y = 0`, and `k·0 = 0` for any `k` — the
   point `(a, 0)` stays `(a, 0)` under `y = kf(x)`. So a vertical
   stretch fixes every x-intercept.

### Independent practice

1. `g(x) = √x + 2`: shift up 2. Table (`x = 0, 1, 4, 9`):
   `g = 2, 3, 4, 5` ✓. Range: `[2, ∞)`.
   `h(x) = 3√x`: vertical stretch by 3. Table: `h = 0, 3, 6, 9` ✓.
   Range: `[0, ∞)`. Domain of both: `x ≥ 0` (unchanged).
2. Reflect then shift down: `y = −x³ − 5`. At `x = 2`: `−8 − 5 =
   −13`. Landmark check: `(2, 8)` on `x³` → reflect → `(2, −8)` →
   down 5 → `(2, −13)` ✓.
3. Pairs `(0,1)→(0,2)`, `(1,2)→(1,4)`, `(2,4)→(2,8)`: each output
   doubled, so `k = 2`. Vertical stretch by factor 2 (no reflection).
4. The error: the vertex of `y = 2x² + 1` is `(0, 1)`, not `(0, 2)`.
   The reasoning stretched first (vertex `(0,0)` → `(0,0)`, since
   `2·0 = 0`) and then shifted up 1 — but it applied the "+1" to the
   stretch factor's result as if the vertex had moved to `(0, 2)`
   before shifting. Correct order: `(0,0)` → stretch → `(0,0)` →
   up 1 → `(0, 1)`.
5. `p(x) = −x² + 4x = −(x² − 4x) = −(x² − 4x + 4) + 4 = −(x − 2)² + 4`.
   Vertex `(2, 4)`. From `y = x²`: reflect across the x-axis, shift
   right 2, shift up 4 (horizontal first, then vertical). Check:
   `p(2) = −4 + 8 = 4` ✓.

### Application

a) `P(d) = −2d² + 80d − 200 = −2(d² − 40d) − 200
   = −2(d − 20)² + 800 − 200 = −2(d − 20)² + 600`.
   Vertex `(20, 600)`: maximum profit **$600** at **20 dozen** muffins.
b) New profit: `P(d) − 50 = −2d² + 80d − 250` — a vertical shift
   down 50. New maximum: `$600 − $50 = $550` (same 20 dozen).
c) `2P(d)` doubles the *cost* terms too (`−400` fixed cost, and the
   `−2d²` curvature term), which is not what "double prices" does —
   doubling prices doubles revenue only. `2P(d)` models a world
   where every dollar figure, costs included, is doubled. Accept any
   answer that names the cost-doubling.

### Exit check

1. The `+k` acts on the **outputs** (the y-values). Adding `k` to
   every output moves every point up (or down) by `k` — that is why
   the shift is vertical.
2. `g(3) = −3·f(3) + 1 = −3(10) + 1 = −29`.

### Extension

X-intercepts preserved by `y = kf(x)`, `k ≠ 0`: `f(a) = 0 ⇔
kf(a) = 0` (multiply/divide by nonzero `k`), so the intercept sets
are identical. Domain preserved by `y = f(x) + k`, `k ≠ 0`:
defined wherever `f` is. Intercepts may change: `f(x) = x²`
(one intercept at `(0,0)`); `f(x) + 1 = x² + 1` has none;
`f(x) − 1 = x² − 1` has two (`(±1, 0)`).

---
## Lesson 03 — Horizontal Changes and Even/Odd Functions

### Readiness check

1. `f(5) + 3 = 12 + 3 = 15`. The point `(5, 12)` moved to `(5, 15)`
   — straight up.
2. `x = 5`. For `g(x) = f(x + 4)`: need `x + 4 = 5`, so `x = 1`.
   The input that used to be 5 is now 1 — the output arrives
   4 units earlier.

### Guided practice

1. `h(x) = (x − 5)³`: shift **right** 5. Landmark `(0, 0)` on `x³`
   moves to `(5, 0)`: `h(5) = 0³ = 0` ✓ (the old output at input 0
   now happens at input 5).
2. Factor first: `2x − 6 = 2(x − 3)`. From `|x|`: horizontal
   compression by factor 2, shift right 3, reflect across the
   x-axis, shift up 3. Vertex `(0, 0)` → compress: `(0, 0)` →
   right 3: `(3, 0)` → reflect: `(3, 0)` → up 3: `(3, 3)`.
   Check: `g(3) = −|2·3 − 6| + 3 = 3` ✓.
3. `f(x) = 3x⁵ + x³`: `f(−x) = −3x⁵ − x³ = −f(x)` → **odd**.
   `g(x) = x² − 4|x|`: `g(−x) = x² − 4|−x| = x² − 4|x| = g(x)`
   → **even**. `h(x) = x³ + x²`: `h(−x) = −x³ + x²`, which equals
   neither `h(x)` nor `−h(x)` → **neither**.
4. Acceptable: "`f(2x)` changes the *input* before the function
   acts, so old outputs arrive sooner — the graph squeezes
   horizontally. `2f(x)` changes the *output* after the function
   acts, stretching heights vertically. Same 2, different axis,
   because one touches inputs and the other touches outputs."

### Independent practice

1. Shift left 4: `f(x + 4) = (x + 4)²`. Horizontal stretch by 3:
   `f(x/3) = (x/3)²`. Reflection across y-axis: `f(−x) = (−x)²`.
   At `x = 6`: `(6+4)² = 100`; original `f(10) = 100` ✓ (the old
   output at 10 now at 6 — 4 earlier). `(6/3)² = 4`; original
   `f(2) = 4` ✓ (old output at 2 now at 6 — 3× later).
   `(−6)² = 36 = f(6)` ✓ (reflection fixes even `x²`).
2. Factor: `−2(x + 1)`; inside `5(·)³ + 7`. Order: shift left 1,
   horizontal compression by 2, reflection across y-axis, vertical
   stretch by 5, shift up 7. Image of `(2, 8)`: input `2 → 2/−2 −
   1 = −2`… track forward instead: `−2(2 + 1) = −6`; `(−6)³ =
   −216`; `5(−216) + 7 = −1073`. So `(2, 8) → (−2, −1073)`.
   Direct: `g(2) = 5(−2·3)³ + 7 = 5(−216) + 7 = −1073` ✓.
3. Disagree. Table for `y = x²` at `x = 0, 1, 2`: `0, 1, 4`.
   `y = (2x)²` at `x = 0, 1, 2`: `0, 4, 16`. The output 4 arrives
   at `x = 1` instead of `x = 2` — sooner, not later. Correct:
   **horizontal compression** by factor 2.
4. `(fg)(−x) = f(−x)g(−x) = (−f(x))(g(x)) = −(fg)(x)` → **odd** ✓.
   Composition `f(g(x))` with `f` odd, `g` even:
   `f(g(−x)) = f(g(x))` (since `g(−x) = g(x)`), so the composite
   equals its own `−x` value → **even**.
5. `g(x) = f(x + k)`: vertex `(1, −2)` moves to `(1 − k, −2) =
   (−3, −2)` → `k = 4`: shift left 4. A vertical description is
   not possible here: both vertices sit at `y = −2`, so any
   vertical shift would move the vertex off that line; the change
   is purely horizontal. (Accept: "no — the y-coordinates match,
   so a vertical shift of 0 is the only vertical option, which
   describes nothing.")

### Application

a) `A(t) = −20t² + 400t = −20(t² − 20t) = −20(t − 10)² + 2000`.
   Vertex `(10, 2000)`: maximum altitude **2000 m** at **10 min**.
b) `B(t) = A(t − 3)`: the graph of `A` shifted **right 3** —
   the same altitude profile, beginning 3 minutes later.
   (Domain becomes `3 ≤ t ≤ 23`.)
c) Camera time `t`, real time `t/2`: `R(t) = A(t/2)` — a
   **horizontal stretch by factor 2** (events appear at twice the
   clock time). Recorded maximum: real max at `t = 10` → recorded
   at `t = 20` minutes camera time.

### Exit check

1. `f(−x) = (−x)³ − 4(−x) = −x³ + 4x = −(x³ − 4x) = −f(x)`
   → **odd**.
2. `g(x) = √(x − 3) − 2`. Domain: `x − 3 ≥ 0` → `[3, ∞)`
   (the right-3 shift moved the domain; the down-2 shift did not).

### Extension

`E(−x) = (f(−x) + f(x))/2 = E(x)` → even ✓.
`O(−x) = (f(−x) − f(x))/2 = −(f(x) − f(−x))/2 = −O(x)` → odd ✓.
`E(x) + O(x) = (2f(x))/2 = f(x)` ✓. (Needs a symmetric domain so
`f(−x)` is defined — that is why the hypothesis is there.)

---

## Lesson 04 — Composition: Chaining Functions

### Readiness check

1. `f(3) = 7`; `g(7) = 49`.
2. `g(3) = 9`; `f(9) = 19`.
3. Not the same (49 vs 19) — doubling-then-squaring ≠
   squaring-then-doubling.

### Guided practice

1. Cost stage: `C(m) = 45 + 0.25m` dollars; miles stage first:
   `C(d) = 45 + 0.25(180d) = 45 + 45d` dollars. Units:
   `0.25` dollars/mile × `180` miles/day = `45` dollars/day ✓.
   `d = 5`: `45 + 225 = $270`.
2. `(f∘g)(x) = √(x + 9)`, domain `x ≥ −9` (needs `x + 9 ≥ 0`).
   `(g∘f)(x) = √x + 9`, domain `x ≥ 0`. Domains differ because
   the square root *refuses* negative inputs: in `f∘g` the inner
   output `x + 9` must clear that refusal; in `g∘f` the inner
   output `√x` is always fine for `g`, which accepts all reals.
3. Way 1: inner `g(x) = 2x + 5`, outer `f(x) = 1/x`;
   `f(g(x)) = 1/(2x + 5)` ✓. Way 2: inner `g(x) = x + 5/2`,
   outer `f(x) = 1/(2x)`; `f(g(x)) = 1/(2(x + 5/2)) = 1/(2x + 5)`
   ✓. (Any pair with the chaining shown earns credit.)
4. `x² − 2x = −x + 4` → `x² − x − 4 = 0` →
   `x = (1 ± √(1 + 16))/2 = (1 ± √17)/2`. Points:
   `((1+√17)/2, (7−√17)/2)` and `((1−√17)/2, (7+√17)/2)`
   (y from `y = −x + 4`). Numerically `≈ (2.56, 1.44)` and
   `≈ (−1.56, 5.56)`; Desmos confirms the crossings.

### Independent practice

1. a) `B(e) = 100 − 8(0.75e) = 100 − 6e` percent. Realistic
      domain: `0 ≤ e ≤ 100/6 ≈ 16.67` episodes (battery cannot go
      negative; whole episodes in practice).
   b) `100 − 6e = 20` → `6e = 80` → `e ≈ 13.3` episodes —
      about 13 full episodes before the battery hits 20%.
2. `(f∘g)(x) = 2^(x−3)`; `(g∘f)(x) = 2ˣ − 3`. At `x = 5`: `2² = 4`
   and `32 − 3 = 29`. In words: `f∘g` shifts the *exponent* down
   3 (divides the power by 8); `g∘f` computes the power first,
   then subtracts 3 from the *result*.
3. Every error: (i) "commutative up to order" is false — the two
   composites are different functions, not the same numbers
   swapped; (ii) the values 35 and 9 are just two evaluations,
   not a general relationship; (iii) order is structural (which
   machine runs first), not a sign flip.
4. Shared: the inner stage `x² + 4` (both wrap the same inside).
   Differ: the outer stage — square root vs. cubing. So
   `g(x) = x² + 4` with `f₁(x) = √x` and `f₂(x) = x³`;
   chaining checks: `√(x²+4)` ✓, `(x²+4)³` ✓.
5. `3x − 2 = x² + x − 6` → `x² − 2x − 4 = 0` →
   `x = (2 ± √(4 + 16))/2 = 1 ± √5`. Points: `(1 + √5, 1 + 3√5)`
   and `(1 − √5, 1 − 3√5)` (y from `y = 3x − 2`; check against
   `g`: `(1+√5)² + (1+√5) − 6 = 1 + 3√5` ✓). Sentence: "the
   algebra found the x-values where the two expressions are
   equal, and the graph shows those as the crossing points."

### Application

a) `R(h) = 4.50(30h + 20) = 135h + 90` dollars. Slope 135:
   each extra hour open adds **$135** of revenue
   (dollars/hour). Intercept 90: **$90** from the 20 regulars'
   cups even at `h = 0`.
b) 2 extra hours: `ΔR = 135 × 2 = $270`. Average rate of change
   on `[8, 10]`: `(R(10) − R(8))/2 = (1440 − 1170)/2 = 135`
   dollars/hour — the same as the slope, because the model is
   linear; it is the revenue earned per additional hour open.
c) `(f∘g)(h) = 4.50(30h + 20)` ✓ matches `S(h)`. `g(h) = 30h +
   20` is "cups from hours"; `f(c) = 4.50c` is "revenue from
   cups" — the claim is correct and each stage has a story
   meaning.

### Exit check

1. `(f∘g)(x) = (2x)² + 1 = 4x² + 1`; `(g∘f)(x) = 2(x² + 1) =
   2x² + 2`. They differ because in `f∘g` the doubling happens
   *before* the squaring, while in `g∘f` it happens *after* —
   different machines.
2. `x = −1` and `x = 3` solve `f(x) = g(x)`.

### Extension

Both odd: `(f∘g)(−x) = f(g(−x)) = f(−g(x)) = −f(g(x)) =
−(f∘g)(x)` → **odd** ✓. Composite of two evens:
`(f∘g)(−x) = f(g(−x)) = f(g(x)) = (f∘g)(x)` → **even** — the
claim is *true*, proved, not refuted. For `f∘g = g∘f` for
*every* `g`: take constant `g(x) = c`; then `f(c) = c` for all
`c`, so `f` is the **identity** `f(x) = x` (and it works:
`f∘g = g = g∘f`). This is the only such function.

---

## Lesson 05 — Inverse Functions: Running the Machine Backwards

### Readiness check

1. `3x − 5 = 10` → `3x = 15` → `x = 5`.
2. `a = 5` — same question in different words: "the input that
   gives output 10" *is* solving `f(x) = 10`. (This is the seed
   of the inverse idea.)

### Guided practice

1. `4x + 2 = 14` → subtract 2 from both sides (equals subtracted
   from equals stay equal) → `4x = 12` → divide by 4 (nonzero)
   → `x = 3`.
2. `y = x/2 − 7` → swap → `x = y/2 − 7` → `y/2 = x + 7` →
   `y = 2x + 14`. So `h⁻¹(x) = 2x + 14`. Verify:
   `h(h⁻¹(x)) = (2x+14)/2 − 7 = x + 7 − 7 = x` ✓;
   `h⁻¹(h(x)) = 2(x/2 − 7) + 14 = x − 14 + 14 = x` ✓.
3. Yes: `x³` is strictly increasing, so every horizontal line
   hits it once — one-to-one on all reals. `y = x³` → `x = y³`
   → `y = ∛x`. Verify: `(∛x)³ = x` ✓ and `∛(x³) = x` ✓.
4. `M = 35 + 12v` → `v = (M − 35)/12`, so
   `M⁻¹(x) = (x − 35)/12`. Sentence: "`M⁻¹(x)` is the number of
   gym visits that cost `x` dollars in a month." Domain:
   range of `M` = `[35, 275]` dollars (`M(0) = 35`,
   `M(20) = 275`).

### Independent practice

1. a) `f⁻¹(x) = (5 − x)/2`. Check: `f(f⁻¹(x)) = 5 − 2(5−x)/2 =
      5 − (5 − x) = x` ✓; `f⁻¹(f(x)) = (5 − (5−2x))/2 = x` ✓.
   b) `g⁻¹(x) = x³ − 4`. Check: `∛((x³−4) + 4) = x` ✓;
      `(∛(x+4))³ − 4 = x` ✓.
   c) `h⁻¹(x) = √(x − 3)` (nonnegative branch; domain `x ≥ 0`
      forces `y ≥ 0`). Domain of `h⁻¹`: range of `h` = `[3, ∞)`.
      Check: `(√(x−3))² + 3 = x` ✓; `√((x²+3) − 3) = √x² = x`
      for `x ≥ 0` ✓.
2. a) Yes — all outputs (3, 7, 11, 15) are distinct, so `f` is
      one-to-one. b) `f⁻¹`: `3→1, 7→2, 11→3, 15→4`.
   c) `f⁻¹(11) = 3` (the input that produced 11).
3. The confusion: `f⁻¹` is *inverse-function* notation, not the
   reciprocal `1/f(x)`. Correct: `y = 2x + 6` → `x = 2y + 6` →
   `y = (x − 6)/2`. Verify: `2((x−6)/2) + 6 = x` ✓ and
   `((2x+6) − 6)/2 = x` ✓.
4. `f(a) = b` puts `(a, b)` on `f`'s graph; then `g(b) = a`
   puts `(b, a)` on `g`'s graph. Reflecting `(a, b)` across
   `y = x` gives `(b, a)` — so every point of `g` is the
   reflection of a point of `f`. (Requires `f` one-to-one so
   that `g` is a function.)
5. `C⁻¹(x) = (x − 180)/1.20`. `C⁻¹(600) = 420/1.20 = 350`
   loaves. Sentence: "A $600 budget buys 350 loaves."
   Units: dollars in → loaves out ✓ (`N-Q.1`). "Solve
   `C(n) = 600`" asks for the input giving output 600 — that
   *is* the inverse evaluated at 600.

### Application

a) `D(6) = 48·(1/2)¹ = 24` mg/L — "6 hours after the dose, the
   concentration is 24 mg/L." `D(12) = 48·(1/2)² = 12` mg/L —
   "after 12 hours it is 12 mg/L."
b) "When does the output equal 12?" is the inverse question:
   input-from-output. `48·(1/2)^(t/6) = 12` → `(1/2)^(t/6) =
   1/4 = (1/2)²` → `t/6 = 2` → `t = 12` hours. Verify:
   `D(12) = 12` ✓ (from part a).
c) Domain of `D`: `[0, 48]` hours. Range of `D`: `[0.1875, 48]`
   mg/L (`D(0) = 48`, `D(48) = 48/256 = 0.1875`, decreasing).
   Domain of `D⁻¹`: `[0.1875, 48]` (concentrations); range of
   `D⁻¹`: `[0, 48]` (hours). In words: `D⁻¹(x)` is "the hours
   after the dose when the concentration reaches `x` mg/L."

### Exit check

1. `f⁻¹(x) = (x + 8)/4`. One check: `f(f⁻¹(x)) = 4((x+8)/4) −
   8 = x` ✓. One direction is risky because a wrong "inverse"
   can undo in one direction but not the other (e.g.
   `f(x) = x²`, `g(x) = √x` on all reals: `g(f(−2)) = 2 ≠ −2`).
2. Acceptable: "A cost of $20 corresponds to 10 miles" — i.e.
   10 miles cost $20 (input dollars → output miles).

### Extension (F-BF.4.c)

From the graph of `f`, read `(a, b)` on `f`, then `(b, a)` is on
`f⁻¹` — swap coordinates. Three such swapped points are three
values of `f⁻¹`. The swap is exactly reflection across `y = x`,
as proved in Independent Practice 4.

---
## Practice Sets A–E

### Set A — the function concept

**A1.** `f(−3) = 2(9) − 5 = 13`. `f(0) = −5`. `f(a+1) = 2(a+1)² −
5` (unsimplified); expanded: `2(a² + 2a + 1) − 5 = 2a² + 4a − 3`.

**A2.** `M(h) = 1.25·⌈h⌉` dollars for `0 < h ≤ 4` (`M(0) = 0`) — a
step function (the "fraction thereof" rounds every partial hour
up). Realistic domain: `[0, 4]` hours. `M(2.5) = 1.25·3 = $3.75`:
"2.5 hours of parking cost $3.75."

**A3.** a) Function — no x-value repeats. b) Not a function of
`x`: `y² = 4 − x` gives two y-values per x (e.g. `(0, 2)` and
`(0, −2)`); the vertical line `x = 0` hits twice. c) Function —
`y = |x − 3|` passes the vertical line test.

**A4.** Domain `{−3, −1, 0, 2, 4}`; range `{0, 1, 4, 5}`. Yes, a
function — each listed x appears once.

**A5.** a) `f(−x) = 4x⁶ − 2x² + 7 = f(x)` → **even**.
b) `g(−x) = −x³ − 5x = −g(x)` → **odd**.
c) `h(−x) = 1/2ˣ`, which equals neither `2ˣ` nor `−2ˣ`
→ **neither**.

**A6.** `3(x−2) + 5 = 2x + 1` → `3x − 6 + 5 = 2x + 1` (distribute)
→ `3x − 1 = 2x + 1` (combine) → `x = 2` (subtract `2x`, add 1 —
equals manipulated equally stay equal).

**A7.** Points `(0,3)`, `(1,2)`, `(2,1)`, `(3,0)`. x-intercept
`(3, 0)`; y-intercept `(0, 3)`.

### Set B — vertical transformations

**B1.** a) `g(x) = x³ + 4`: shift up 4. Table `x = −1,0,1,2`:
`g = 3, 4, 5, 12` vs `f = −1, 0, 1, 8` ✓ (each y up 4).
b) `h(x) = −x³`: reflect across x-axis. Table: `h = 1, 0, −1, −8` ✓.
c) `k(x) = (1/2)x³ − 1`: compress vertically by `1/2`, shift down
1. Table: `k = −1.5, −1, −0.5, 3` ✓.

**B2.** `2(x−3)² + 1 = 2(x² − 6x + 9) + 1 = 2x² − 12x + 19`;
completing: `2x² − 12x + 19 = 2(x² − 6x + 9) − 18 + 19 = 2(x−3)² + 1`
✓, vertex `(3, 1)`. From `y = x²`: shift right 3, vertical stretch
by 2, shift up 1.

**B3.** `(2, 5) → (2, −15)`: `−15 = a·5` → `a = −3` — vertical
stretch by 3 plus reflection across the x-axis. Under
`g(x) = −3f(x) + 2`: `(2, 5) → (2, −3·5 + 2) = (2, −13)`.

**B4.** `y = (1/4)√x + 3`. Domain `x ≥ 0` (unchanged). Range:
`[3, ∞)` (was `[0, ∞)`, shifted up 3; compression does not move 0).

**B5.** `f(x) + k = f(x)` would require `k = 0` — for `k ≠ 0` the
equality never holds, so the graphs never meet. `kf(x) = f(x)`
holds wherever `f(x) = 0` (then `k·0 = 0`), i.e. at every
x-intercept of `f` — both graphs pass through each `(a, 0)`.

**B6.** `f(−x) = x⁴ + x`; `−f(x) = −x⁴ + x`. Neither matches:
**neither**.

**B7.** `C(m) = 40 + 25m` dollars, `m ≥ 0` whole months.
`C(6) = 190`: "6 months of membership cost $190."

### Set C — horizontal transformations

**C1.** a) `g(x) = (x−3)²`: shift **right** 3 (the old output at
input 0 now needs input 3). Table `x = −2..2`: `g = 25, 16, 9, 4, 1`
vs `f = 4, 1, 0, 1, 4` ✓ — the whole table slid right.
b) `h(x) = (2x)²`: **horizontal compression** by 2 (outputs arrive
sooner). Table: `h = 16, 4, 0, 4, 16` ✓.
c) `k(x) = (−x)² = x² = f(x)`: identical — reveals `f` is **even**
(y-axis symmetry).

**C2.** Factor: `−2(x + 4)`. Order: reflect across the y-axis +
horizontal compression by 2, then shift left 4; then vertical
stretch by 3, shift down 5. Vertex `(0,0)` → `(−4, 0)` → `(−4, −5)`.
Check: `g(−4) = 3|−2(0)| − 5 = −5` ✓. (Note: `|−2(x+4)| = 2|x+4|`,
so the horizontal reflection+compression is numerically a vertical
stretch here — the transformation description still stands as the
order-of-operations reading.)

**C3.** a) `g(x) = f(x+5)`: domain `[−7, 1]` (every input arrives
5 early). b) `h(x) = f(3x)`: domain `[−2/3, 2]` (inputs arrive 3×
early: `−2 ≤ 3x ≤ 6`). c) `k(x) = f(x) − 5`: domain `[−2, 6]` —
unchanged, because subtracting 5 touches only outputs.

**C4.** `g`'s vertex `(−4, −1)` is `f`'s vertex shifted left 6:
`1 − k = −4` → **`k = 6`**. Matched pair check: `g(−4) = f(−4+6) =
f(2) = −1` ✓.

**C5.** `f(−x) = (−x)⁵ − 3(−x)³ + (−x) = −x⁵ + 3x³ − x = −f(x)`
→ **odd**. Odd functions satisfy `f(0) = −f(0)`, so `f(0) = 0` —
the graph must pass through the origin (when 0 is in the domain).

**C6.** `(3, 7)` under `y = −2f(x) + 1` → `(3, −2·7 + 1) = (3, −13)`:
reflect across the x-axis, vertical stretch by 2, shift up 1.

**C7.** `x − 2 ≥ 0` → domain `[2, ∞)`; range `[0, ∞)`. One
sentence: "the square root refuses negative inputs, so `x` must
start at 2."

### Set D — composition

**D1.** a) `C(t) = 0.5(4t + 10) + 3 = 2t + 5 + 3 = 2t + 8` dollars.
b) Units: `0.5` dollars/toy × `4` toys/hour = `2` dollars/hour ✓;
`+3` dollars. c) `t = 6`: composite `2(6) + 8 = $20`; stages:
`p = 4·6 + 10 = 34` toys → `0.5·34 + 3 = $20` ✓ agree.

**D2.** `(f∘g)(x) = (x−4)² + 2(x−4) = x² − 8x + 16 + 2x − 8 =
x² − 6x + 8`. `(g∘f)(x) = x² + 2x − 4`. At `x = 1`: `1 − 6 + 8 = 3`
vs `1 + 2 − 4 = −1`. They differ because the subtraction of 4
happens *before* the squaring in one machine and *after* it in the
other — the stages run in opposite orders.

**D3.** a) inner `x³ + 1`, outer `x⁴`: `(x³+1)⁴` ✓.
b) inner `5 − 2x`, outer `√·`: `√(5−2x)` ✓.
c) inner `3x − 1`, outer `2^(·)`: `2^(3x−1)` ✓.

**D4.** `x + 2 = x² − 4x + 2` → `x² − 5x = 0` → `x = 0` or `5`.
Points `(0, 2)` and `(5, 7)`. The x-coordinates solve `x² − 5x = 0`
(equivalently `x + 2 = x² − 4x + 2`).

**D5.** `h(1) = 9`, `h(4) = 81`. ARoC `= (81 − 9)/(4 − 1) = 72/3 =
24`. Interpretation: as the side length grows from 1 to 4, the
garden's area grows on average **24 square units per unit of side
length** (units: length²/length).

**D6.** Inside `3x + 9 = 3(x + 3)`: horizontal compression by 3,
shift left 3. Outside `−2(·)³ + 1`: reflect across x-axis, vertical
stretch by 2, shift up 1.

**D7.** `g(−2) = 3·f(−2) − 4 = 3·6 − 4 = 14`.

### Set E — inverses

**E1.** a) `5x − 9 = 31` → add 9 (equals stay equal): `5x = 40` →
divide by 5: **`x = 8`**. b) `(2/3)x + 4 = 10` → subtract 4:
`(2/3)x = 6` → multiply by `3/2`: **`x = 9`**.

**E2.** a) `f⁻¹(x) = (x − 3)/7`. Check: `7((x−3)/7) + 3 = x` ✓;
`((7x+3) − 3)/7 = x` ✓.
b) `g⁻¹(x) = 4x − 8`. Check: `((4x−8) + 8)/4 = x` ✓;
`4((x+8)/4) − 8 = x` ✓.
c) `h⁻¹(x) = (x³ + 6)/2`. Check: `∛(2(x³+6)/2 − 6) = ∛x³ = x` ✓;
`((∛(2x−6))³ + 6)/2 = (2x − 6 + 6)/2 = x` ✓.

**E3.** a) `C⁻¹(x) = (x − 8)/0.60`. Sentence: "`C⁻¹(x)` is the
number of miles that cost `x` dollars."
b) Domain of `C⁻¹` = range of `C` = `[8, 128]` dollars; range =
`[0, 200]` miles.
c) `C⁻¹(50) = 42/0.60 = 70` miles. Verify: `C(70) = 8 + 42 = 50` ✓.

**E4.** a) Not one-to-one on ℝ: `f(1) = f(−1) = 3` (fails the
horizontal line test). b) One-to-one on `x ≤ 0` (strictly
decreasing there): `y = 4 − x²` → `x = 4 − y²` → `y = −√(4−x)`
(negative branch). c) One-to-one on ℝ (strictly increasing):
`h⁻¹(x) = ∛((x + 5)/2)`.

**E5.** `(5, 1)`, `(9, 2)`, `(14, 3)` — swap each coordinate,
because `f(a) = b ⇔ f⁻¹(b) = a`.

**E6.** `(f∘g)(x) = √(x² − 3)`, domain `x² ≥ 3` i.e.
`(−∞, −√3] ∪ [√3, ∞)`. `(g∘f)(x) = x − 3`, domain `[0, ∞)`.

**E7.** `f(−x) = 2x⁴ + x² − 3 = f(x)` → **even**.

---
## Project — scoring guidance and worked sample (adults only)

The project has no single correct answer; score against the rubric in
`project.md`. What follows is a complete worked sample the adult can
use as a calibration reference — it is **not** for the learner to
copy (a copied sample earns no credit; the story must be the
learner's own).

**Sample machine — farm stand → jam kitchen.**
Stage 1 (first): `g(p) = 3p` jars from `p` pounds of berries
(`0 ≤ p ≤ 200` pounds; 3 jars per pound). Stage 2 (second):
`f(j) = 8j − 40` dollars from `j` jars (`$8`/jar revenue minus `$40`
fixed kitchen costs; realistic `0 ≤ j ≤ 600`).

- **Story:** berries are picked, then each pound becomes 3 jars,
  then jars sell at $8 with a $40 fixed cost. Order cannot swap:
  selling jars before they exist is nonsense.
- **Composite:** `(f∘g)(p) = 8(3p) − 40 = 24p − 40` dollars.
- **Unit check:** `8` dollars/jar × `3` jars/pound = `24`
  dollars/pound ✓. Two-way verification at `p = 50`: composite
  `24·50 − 40 = 1160`; stages: `150` jars → `8·150 − 40 = 1160` ✓.
- **Transform (Part 2):** shift the input left 10 and stretch
  vertically by 2: `H(p) = 2((24(p + 10) − 40)) = 48p + 400`.
  In words: "start 10 pounds earlier" (left shift) and "double all
  dollar amounts" (vertical stretch). Story meaning: the season
  starts earlier and prices double.
- **Reverse (Part 2):** stage 2 is invertible:
  `f⁻¹(y) = (y + 40)/8` dollars→jars; check
  `f(f⁻¹(y)) = 8(y+40)/8 − 40 = y` ✓. Interpretation: "jars needed
  to net `y` dollars." Domain: range of `f` over `[0, 600]` =
  `[−40, 4760]` dollars.
- **Decompose differently (Part 2):** `g'(p) = 24p`,
  `f'(x) = x − 40`: `f'(g'(p)) = 24p − 40` ✓. Story meaning:
  compute gross revenue per pound first, then subtract the fixed
  cost — same machine, different stage boundary.
- **Defense (Part 3):** order matters most at the fixed-cost
  stage — subtracting $40 before the jars exist breaks the story;
  the vertical stretch was hardest to interpret (it doubles costs
  too, which no real price change does); the model refuses `p < 0`
  (negative pounds would predict negative revenue, i.e. the
  formula "pays" for unpicked berries).

---

## Week-04 Quiz — solutions (14 points, 2 per question)

**Q1.** a) `g(x) = f(x+2)`: **shift left 2** — the `+2` is on the
input, so old outputs arrive 2 early. Verify: `g(−2) = f(0) = −3`;
`g(0) = f(2) = 4 − 3 = 1`. The vertex `(0, −3)` moved to `(−2, −3)` ✓.
b) Reflect then shift up: `−f(x) + 1 = −(x² − 3) + 1 = −x² + 4`.

**Q2.** `f(−x) = (−x)⁶ − 4(−x)² = x⁶ − 4x² = f(x)` → **even**.

**Q3.** a) `(f∘g)(x) = 2x² − 8`; `(g∘f)(x) = (2x − 8)² = 4x² − 32x + 64`.
b) At `x = 3`: `18 − 8 = 10` vs `(−2)² = 4`. The difference shows
composition is not commutative — the machines run in opposite
orders.

**Q4.** Inner `g(x) = 4x + 1`, outer `f(x) = x³`. Chaining check:
`f(g(x)) = (4x + 1)³ = h(x)` ✓.

**Q5.** `y = 6x + 2` → `x = 6y + 2` → `y = (x − 2)/6`.
Verify: `6((x−2)/6) + 2 = x` ✓; `((6x+2) − 2)/6 = x` ✓.

**Q6.** a) "`C⁻¹(285)` asks: how many hours of plumbing work cost
$285?" (interpretation only). b) `C⁻¹(x) = (x − 90)/65`;
`C⁻¹(285) = 195/65 = 3` **hours**. Check: `C(3) = 90 + 195 = 285` ✓;
`3 ∈ [0, 8]` so the domain accepts it.

**Q7.** The error: `+3` was added to the *output* (a vertical shift
up 3), not to the input. A left-3 shift is `g(x) = f(x + 3) =
(x + 3)² + 1`. In one–two sentences: "adding inside the function
moves the graph horizontally; the learner added outside, which
moves it vertically."

---

## Unit Assessment — solutions (60 points)

**Part I**

**1.** a) From `|x|`: shift **left 3** (`x + 3` on the input), then
reflect across the x-axis and **vertical stretch by 2** (`−2` on
the output), then shift **down 1**. (3 pts)
b) `(0,0)` → left 3 → `(−3, 0)` → reflect → `(−3, 0)` → stretch →
`(−3, 0)` → down 1 → `(−3, −1)`. Verify: `g(−3) = −2|0| − 1 = −1` ✓.
(2 pts)
c) Domain: all real numbers. Range: `(−∞, −1]` (opens downward
from the vertex). (2 pts)

**2.** a) `h(x) = f(2x)`: `(x, y)` on `f` → `(x/2, y)` on `h`:
`(−0.5, 2)`, `(0, 5)`, `(1, 9)`. (2 pts)
b) **Horizontal compression** by factor 2: e.g. the output 9 that
`f` reached at input 2, `h` reaches at input 1 — sooner, squeezed
toward the y-axis. (2 pts)

**3.** `f(−x) = 5(−x)³ − 2(−x) = −5x³ + 2x = −(5x³ − 2x) = −f(x)`,
so `f` is **odd**. Graphical consequence: origin symmetry — a
half-turn about the origin leaves the graph unchanged (e.g. `(2, 36)`
on the graph forces `(−2, −36)` on it). (3 pts)

**Part II**

**4.** a) `R(s) = 12(40s + 15) − 200 = 480s + 180 − 200 = 480s − 20`
**dollars**. Units: `12` dollars/ticket × `40` tickets/show =
`480` dollars/show ✓; `15` tickets → `180` dollars ✓; `−200`
dollars ✓. (3 pts)
b) `s = 6`: composite `480·6 − 20 = 2860`; stages: `t = 255`
tickets → `12·255 − 200 = 2860` ✓ agree. (2 pts)

**5.** a) `(f∘g)(x) = √(x − 5)`, domain `x ≥ 5`;
`(g∘f)(x) = √x − 5`, domain `x ≥ 0`. (3 pts)
b) `f` (square root) *refuses* negative inputs: in `f∘g` the inner
output `x − 5` must be `≥ 0`, but in `g∘f` the inner output `√x`
is always acceptable to `g` (which takes all reals). (2 pts)

**6.** `2x − 1 = x² − 2x − 2` → `x² − 4x − 1 = 0` →
`x = (4 ± √20)/2 = 2 ± √5`. Points: `(2 + √5, 3 + 2√5)` and
`(2 − √5, 3 − 2√5)` (y via `y = 2x − 1`; cross-check with the
parabola: `(2+√5)² − 2(2+√5) − 2 = 3 + 2√5` ✓). The x-coordinates
solve `x² − 4x − 1 = 0`. (4 pts)

**Part III**

**7.** a) `y = (3x−7)/2` → `x = (3y−7)/2` → `2x = 3y − 7` →
`y = (2x+7)/3`. (3 pts)
b) `f(f⁻¹(x)) = (3(2x+7)/3 − 7)/2 = x` ✓;
`f⁻¹(f(x)) = (2(3x−7)/2 + 7)/3 = x` ✓. (2 pts)
c) "`f⁻¹(85)` is the study hours needed to score 85 points":
`(2·85 + 7)/3 = 59` **hours**. (2 pts)

**8.** a) `D⁻¹(x) = (x − 6)/2.25`. Domain: range of `D` =
`[6, 163.5]` dollars (`D(0) = 6`, `D(70) = 163.5`); range:
`[0, 70]` pounds. (3 pts)
b) `D⁻¹(40) = 34/2.25 = 136/9 ≈ 15.11` **pounds**. Verify:
`D(136/9) = 6 + 2.25·(136/9) = 6 + 34 = 40` ✓. Dollars in,
pounds out — units make sense. (3 pts)

**9.** No inverse on all reals: the horizontal line `y = 2` meets
the parabola at `x = 1` and `x = 3` (vertex `(2, 1)`, opens up),
so it is not one-to-one. Restrict to `x ≥ 2`: then
`y = (x−2)² + 1` → `x = (y−2)² + 1` → `y = 2 + √(x−1)` (nonnegative
root, domain `x ≥ 1`). (4 pts; accept the `x ≤ 2` restriction with
`y = 2 − √(x−1)` instead.)

**Part IV**

**10.** The claim is **true**. Proof: `(f∘g)(−x) = f(g(−x)) =
f(−g(x))` (`g` odd) `= f(g(x))` (`f` even) `= (f∘g)(x)` — so
`f∘g` is even. Example check: `f(x) = x²`, `g(x) = x³` give
`(f∘g)(x) = x⁶`, even ✓. (4 pts; a claimed counterexample earns
no credit — none exists.)

**11.** a) `g(x) = 2x − 8`, `f(x) = 3x² + 5`:
`(f∘g)(x) = 3(2x−8)² + 5 = H(x)` ✓. (2 pts)
b) From `y = x²`: horizontal compression by 2, shift **right 4**
(`2x − 8 = 2(x − 4)` — factor first), vertical stretch by 3,
shift **up 5**; in that order. (3 pts)
c) Acceptable: "the decomposition names the two machines (the
inner affine change and the outer quadratic), while the
transformation list reads the *same* structure as operations on
the parent parabola — the inner function *is* the horizontal
changes, the outer *is* the vertical changes." (2 pts)

---

## Reconciliation notes

- Lesson 02, Example 1 table rechecked: `g(−2) = 2(4) − 3 = 5` ✓,
  `g(2) = 5` ✓, vertex `(0, −3)` ✓; range `[−3, ∞)` ✓.
- Lesson 03, Example 2 landmark rechecked: `g(−1) = −2√(4) − 1 =
  −5` ✓; domain `x ≥ −2` ✓.
- Lesson 03, Guided Practice 2 vertex chain rechecked against
  direct substitution: `g(3) = 3` ✓.
- Lesson 04, Example 2b alternative decomposition rechecked:
  `(5(x − 2/5))² − 1 = (5x − 2)² − 1` ✓ chains correctly.
- Lesson 05, Example 2b domain rechecked: `C(40) = 72.50` ✓.
- Practice C2: the factored-input reading (`−2(x+4)` → reflect +
  compress, then left 4) was re-derived via the point-mapping
  `a' = −a/2 − 4` and agrees with direct evaluation at the vertex.
- Assessment Q11b order rechecked: `2(x − 4)` shifts right 4, not
  8 — the factored form is required (same trap as Lesson 03).
- No discrepancies remain between this key and the lesson prose.
