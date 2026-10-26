# Answer Key — Unit 01: Advanced Function Analysis and Mathematical Modeling

**ADULTS ONLY.** Keep this file away from the learner. It contains worked
solutions for every scored item in Unit 01: the six lessons' readiness
checks, guided practice, independent practice, applications, exit checks,
and extensions; Practice Sets A–F; the Week-04 quiz; the unit assessment;
and project scoring guidance with a worked sample. Every solution below was
worked independently from the lesson prose and then reconciled against it;
where the prose and the algebra disagreed, the algebra won and the
discrepancy is noted at the end. Scoring criteria for the quiz and unit
assessment live in those files; the rubric for the project lives in
`project.md`. Acceptable-response notes mark what earns full credit on open
items.

---
# Answer Key — Part A: Lessons 01–02 (adults only)

Grade 12 Math · Unit 01 "Advanced function analysis and mathematical
modeling" · Sessions S1 and S3. Every scored item from
`lesson-01-function-analysis-toolkit.md` and
`lesson-02-equivalent-forms-and-structure.md`, with full worked
solutions. All arithmetic was computed and verified by script on
2026-10-14. Open-response items include acceptable-variation notes.

---

## Lesson 01 — The function analysis toolkit

### Readiness check

1. `2ˣ = 8` → `x = 3`, since `2³ = 8`.
2. `x = 5` is forbidden (division by zero). Domain: all real numbers
   except 5.
3. `f(−x) = (−x)⁴ − 2(−x)² = x⁴ − 2x² = f(x)`. Even.

### Guided practice

1. **`h(x) = √(x − 3) + 1`.** Domain: `x − 3 ≥ 0`, so `x ≥ 3`. The
   graph *begins* at `(3, 1)` — a starting point, not an asymptote.
   Range: `√(x−3) ≥ 0`, so `h(x) ≥ 1`: `[1, ∞)`. Intercepts: none —
   `x = 0` is outside the domain, and `√(x−3) = −1` has no solution.
   Increasing on `[3, ∞)` (larger x → larger root → larger y). No
   extrema beyond the endpoint minimum `(3, 1)`. End behavior:
   `x → ∞ ⇒ h(x) → ∞`; the left end is the finite point `(3, 1)`.
   No asymptotes, no symmetry. Sketch: start at `(3, 1)`, rise with
   the familiar root-curve shape flattening out. Desmos confirms.
2. **`k(x) = 2ˣ − 3`.** Domain: all real numbers. Range: `2ˣ > 0`
   always, so `k(x) > −3`: `(−3, ∞)`. y-intercept: `k(0) = 1 − 3 =
   −2`. x-intercept: `2ˣ = 3` → `x = log₂3 = ln 3 / ln 2 ≈
   1.0986/0.6931 ≈ 1.585`. Increasing on `(−∞, ∞)` (a larger exponent
   gives a larger power of 2). No extrema. End behavior: as
   `x → −∞`, `2ˣ → 0`, so `k(x) → −3` from above — horizontal
   asymptote `y = −3`; as `x → ∞`, `k(x) → ∞`. No symmetry.
   Sketch: exponential curve through `(0, −2)` and `(1.585, 0)`,
   hugging `y = −3` on the left. Desmos confirms.
3. **`ℓ(x) = ln(x + 2)`.** Domain: `x + 2 > 0`, so `x > −2`. Range:
   all real numbers (the log covers every y). x-intercept:
   `ln(x+2) = 0` → `x + 2 = 1` → `x = −1`. y-intercept: `ℓ(0) =
   ln 2 ≈ 0.693`. Vertical asymptote `x = −2` (as `x → −2⁺`,
   `x + 2 → 0⁺`, `ln → −∞`). Increasing on `(−2, ∞)`. No extrema.
   End behavior: `x → −2⁺ ⇒ ℓ → −∞`; `x → ∞ ⇒ ℓ → ∞` (slowly). No
   symmetry. Sketch: log curve through `(−1, 0)` and `(0, 0.693)`,
   plunging along `x = −2`. Desmos confirms.
4. **Error analysis.** The flaw: each piece only "sees" its own
   x-interval, so each piece's outputs are restricted too. Left
   piece: `x < 1` gives `2x + 1 < 2(1) + 1 = 3`, and as `x → −∞`,
   `2x + 1 → −∞`: contributes `(−∞, 3)`. Right piece: `x ≥ 1` gives
   `−x + 4 ≤ −1 + 4 = 3`, and as `x → ∞`, `−x + 4 → −∞`:
   contributes `(−∞, 3]`. Union: range is `(−∞, 3]`, not all of ℝ.
   Continuity at `x = 1`: left value `2(1)+1 = 3`, right value
   `−1+4 = 3` — equal, so the graph is continuous there (no jump).
   Increasing on `(−∞, 1)`, decreasing on `(1, ∞)`, global maximum
   `(1, 3)`. (Acceptable variation: a student may phrase the range
   argument via "the highest output either piece attains is 3, at
   `x = 1`.")

### Independent practice

1. **`s(x) = sin x`.** Domain: all real numbers. Range: `[−1, 1]`.
   Intercepts: `y = 0` at `(0, 0)`; `x`-intercepts at `x = nπ`
   (…, −π, 0, π, 2π, …). Odd: `sin(−x) = −sin x`. On `[0, 2π]`:
   increasing on `[0, π/2]` and `[3π/2, 2π]`, decreasing on
   `[π/2, 3π/2]`; local/global max `1` at `x = π/2 + 2πn`,
   min `−1` at `x = 3π/2 + 2πn`. End behavior: there is none in the
   limit sense — the function oscillates between −1 and 1 forever,
   never settling toward a value or growing without bound. "It
   approaches a value" is wrong because for any proposed limit L you
   can find x-values arbitrarily far out where `sin x` is far from
   L (it keeps hitting 1 and −1). No asymptotes.
2. **`q(x) = (x + 1)/(x − 3)`.** Domain: `x ≠ 3`. Intercepts:
   `(0, −1/3)`; x-intercept `x = −1`. Vertical asymptote `x = 3`
   (check: `q(2.9) = 3.9/(−0.1) = −39`; `q(3.1) = 4.1/0.1 = 41`).
   Horizontal asymptote `y = 1` (degrees equal, leading coefficients
   both 1). Range: solve `y = (x+1)/(x−3)` → `y(x−3) = x+1` →
   `yx − 3y = x + 1` → `yx − x = 3y + 1` → `x(y − 1) = 3y + 1` →
   `x = (3y+1)/(y−1)`, which requires `y ≠ 1`: range is `y ≠ 1`.
   Decreasing on `(−∞, 3)` (e.g. `q(0) = −1/3 ≈ −0.333`, `q(1) =
   −1`, `q(2) = −3`) and decreasing on `(3, ∞)` (`q(4) = 5`,
   `q(5) = 3`, `q(6) = 7/3 ≈ 2.333`). No extrema. Point symmetry
   about `(3, 1)`: `q(3+h) = (4+h)/h = 1 + 4/h` and `q(3−h) =
   (4−h)/(−h) = 1 − 4/h`, which sum to 2 — mirror images about
   `(3, 1)`. Sketch: two decreasing branches hugging the dashed
   lines `x = 3`, `y = 1`. Desmos confirms.
3. **Explain your reasoning.** Student A is more correct. Both do go
   to infinity, but "stronger" end behavior means *faster* growth,
   and the numbers settle it: at `x = 20`, `x³ = 8000` while `2²⁰
   = 1,048,576` — the exponential is more than 100 times larger,
   and the gap only widens (at `x = 30`: `27,000` vs
   `1,073,741,824`). Student B's "they're the same" ignores rate.
   (Acceptable variation: any correct numerical comparison showing
   the exponential dominating, e.g. `x = 10`: `1000` vs `1024`
   nearly tied, then the exponential pulling away.)
4. **Transformation tracking.** `n(x) = −h(x) + 4 = −(√(x−3)+1) + 4
   = −√(x−3) + 3`. From the table: a vertical reflection and shift
   do not touch the domain, so the domain stays `x ≥ 3`. The range
   `[1, ∞)` reflects to `(−∞, −1]` and shifts up 4 to `(−∞, 3]`.
   The starting point `(3, 1)` maps to `(3, −1+4) = (3, 3)`. The
   graph now *decreases* on `[3, ∞)` (reflection flips rising to
   falling). Quick Desmos check confirms all four.

### Application (fictional data)

`T(t) = 22 + 68(0.9)ᵗ`, `t` minutes, `T` in °C.

a) Family: exponential decay (a transformed `bᵗ` with `0 < b < 1`).
   Domain in context: `t ≥ 0`. Range in context: `22 < T ≤ 90`
   (at `t = 0`, `T = 22 + 68 = 90`; as `t → ∞`, `(0.9)ᵗ → 0`, so
   `T → 22` from above). Intercepts: `T`-intercept `(0, 90)` — the
   loaf's temperature leaving the oven; no `t`-intercept (the
   temperature never reaches 0 °C, or even 22 °C). Horizontal
   asymptote `T = 22`: the room temperature — the loaf can approach
   it but never go below it.
b) Decreasing because the base `0.9` is between 0 and 1: each minute
   multiplies the `68(0.9)ᵗ` term by 0.9, shrinking it. In context:
   the loaf is hotter than the room, so it loses heat — it cools.
c) `22 + 68(0.9)ᵗ = 40` → `68(0.9)ᵗ = 18` → `(0.9)ᵗ = 18/68 =
   9/34` → `t = ln(9/34) / ln(0.9)`. Numerically: `ln 9 ≈
   2.1972`, `ln 34 ≈ 3.5264`, so `ln(9/34) ≈ −1.3291`; `ln(0.9)
   ≈ −0.10536`; `t ≈ (−1.3291)/(−0.10536) ≈ 12.6` minutes. Check:
   `(0.9)^12.6 ≈ e^{12.6·(−0.10536)} = e^{−1.3275} ≈ 0.2652`;
   `68 × 0.2652 ≈ 18.03`; `22 + 18.03 ≈ 40.0` ✓.

### Exit check

1. A vertical asymptote is a dashed line the graph approaches as
   the function blows up near an excluded x-value; a hole is a
   single missing point. From the formula: factor numerator and
   denominator — a factor that cancels leaves a hole at that
   x-value; a denominator zero with no canceling factor gives a
   vertical asymptote.
2. Domain: `x + 4 ≥ 0`, so `x ≥ −4`. Range: `−√(x+4) ≤ 0`, so `y =
   −√(x+4) − 2 ≤ −2`: `(−∞, −2]`.

### Extension

`r(x) = 3/(x−2)`. Swap x and y: `x = 3/(y−2)` → `x(y−2) = 3` →
`xy − 2x = 3` → `y = (2x+3)/x = 2 + 3/x`. Analysis: domain `x ≠
0`; range `y ≠ 2`; y-intercept none (`x = 0` excluded); x-intercept
`2 + 3/x = 0` → `x = −3/2`; vertical asymptote `x = 0`; horizontal
asymptote `y = 2`; decreasing on `(−∞, 0)` and `(0, ∞)`; point
symmetry about `(0, 2)`. What moved: the asymptotes swapped roles
(`x = 2` → `x = 0` vertical; `y = 0` → `y = 2` horizontal), the
domain/ran
...[truncated 7417 chars]

---

# Answer Key — Part A2: Lesson 02 (adults only)

Grade 12 Math · Unit 01 "Advanced function analysis and mathematical
modeling" · Session S3, `lesson-02-equivalent-forms-and-structure.md`.
Every scored item with full worked solutions; all arithmetic computed and
verified by script (sympy) on 2026-10-15.

---

## Lesson 02 — Equivalent forms and structure

### Readiness check

1. `x² − 5x + 6 = (x − 2)(x − 3)`.
2. `(x − 4)² = x² − 8x + 16`. Constant term 16, from `(−4)²` — the square
   of the constant in the binomial.
3. `(x² + 7x + 12) ÷ (x + 3)`: quotient `x + 4`, remainder `0`
   (since `x² + 7x + 12 = (x + 3)(x + 4)`).

### Guided practice

1. `f(x) = x³ − 4x² − 7x + 10`. Test `x = 1`: `1 − 4 − 7 + 10 = 0`, so
   `(x − 1)` is a factor. Dividing out gives `x² − 3x − 10`, which
   factors as `(x − 5)(x + 2)`. Complete factorization:
   `f(x) = (x − 1)(x − 5)(x + 2)`; zeros `1, 5, −2`.
2. `m(x) = 3x² − 12x + 5 = 3(x² − 4x) + 5 = 3[(x − 2)² − 4] + 5`
   `= 3(x − 2)² − 12 + 5 = 3(x − 2)² − 7`. Vertex `(2, −7)`; minimum
   (leading coefficient `3 > 0`); axis of symmetry `x = 2`.
3. Mara is wrong. `(x² − 9)/(x + 3) = (x − 3)(x + 3)/(x + 3) = x − 3`
   **for `x ≠ −3`**. There is no vertical asymptote at `x = −3` — there
   is a **hole** (removable discontinuity) at `(−3, −6)`. The graph is
   the line `y = x − 3` with that single point missing; near `x = −3`
   the graph approaches `(−3, −6)` from both sides but never includes it.
4. Let `u = x²`: `u² − 5u + 4 = 0` → `(u − 1)(u − 4) = 0`, so `u = 1`
   or `u = 4`. Then `x² = 1` gives `x = ±1` and `x² = 4` gives `x = ±2`.
   Solutions: `−2, −1, 1, 2`.

### Independent practice

1. `g(x) = −x² + 8x − 12`:
   (a) `g(x) = −(x² − 8x + 12) = −(x − 2)(x − 6)`; zeros `2, 6`.
   (b) `g(x) = −(x² − 8x) − 12 = −[(x − 4)² − 16] − 12`
   `= −(x − 4)² + 4`. Maximum value `4` at `x = 4`.
   (c) `−(x − 2)(x − 6) = −(x² − 8x + 12) = −x² + 8x − 12` ✓.
2. `r(x) = (2x² + 5x − 3)/(x + 1)`:
   (a) Division: `2x² + 5x − 3 = (x + 1)(2x + 3) − 6`, so
   `r(x) = 2x + 3 − 6/(x + 1)`.
   (b) Vertical asymptote `x = −1`; slant asymptote `y = 2x + 3`.
   (c) Numerator `2x² + 5x − 3 = (2x − 1)(x + 3)`; zeros `x = 1/2`
   and `x = −3` (neither equals `−1`, so both are genuine zeros).
3. The error: equivalent expressions produce the same output for every
   input, so they have identical graphs — term count is irrelevant.
   `(x + 3)²` spotlights the (double) zero at `x = −3` and the vertex
   `(−3, 0)`; `x² + 6x + 9` spotlights the y-intercept `9` and is the
   convenient form for evaluating or adding.
4. Gardener: `A(x) = x(30 − 2x) = −2x² + 30x`.
   (a) `A(x) = −2(x² − 15x) = −2[(x − 7.5)² − 56.25]`
   `= −2(x − 7.5)² + 112.5`.
   (b) Maximum at `x = 7.5` m (sides perpendicular to the wall); the
   side parallel to the wall is `30 − 2(7.5) = 15` m; maximum area
   `112.5` m².
   (c) Vertex form spotlights the maximum directly (vertex
   `(7.5, 112.5)`); factored form `x(30 − 2x)` spotlights the zeros
   (`x = 0` and `x = 15`, the no-area boundary cases). Part (b) asks
   for a maximum, so vertex form is the right tool.

### Application

`h(t) = −16t² + 64t + 5` (fictional data), `t` in seconds, `h` in feet.

(a) `h(t) = −16(t² − 4t) + 5 = −16[(t − 2)² − 4] + 5`
`= −16(t − 2)² + 69`. Maximum height **69 ft** at **t = 2 s**.

(b) Divide by `−16`: `t² − 4t − 5/16 = 0`. By the quadratic formula,
`t = [4 ± √(16 + 4·(5/16))]/2 = [4 ± √(69/4)]/2 = 2 ± √69/4`.
So `r₁ = 2 − √69/4 ≈ −0.077`, `r₂ = 2 + √69/4 ≈ 4.077`.
The landing time is `r₂ ≈ 4.08` s (the positive root); `r₁ ≈ −0.08` s
is discarded because negative time is before launch — outside the
viable domain.

(c) Sample response: *Disagree. The vertex form answers extremum
questions — "how high" and "when" — while the factored form answers
zero questions — "when is the height zero." Landing is a zero of
height, so the factored form is the right tool; the vertex form would
force you to solve the equation anyway. Each form spotlights one
feature; matching the form to the question is the skill.*
Accept any response that correctly matches forms to questions with a
reason.

### Exit check

1. Factored form: `y = 2x² − 8x + 6 = 2(x² − 4x + 3) = 2(x − 1)(x − 3)`.
   x-intercepts `(1, 0)` and `(3, 0)`.
2. Division form: `(x³ − 8) ÷ (x² + 1) = x` remainder `−x − 8`, so
   `y = x + (−x − 8)/(x² + 1)`. As `x → ±∞` the fraction → 0, so the
   graph approaches the line `y = x` (slant asymptote).

### Extension

`ax² + bx + c = 0` with `a ≠ 0`. Divide by `a` (**this step requires
`a ≠ 0`** — division by zero is undefined): `x² + (b/a)x + c/a = 0`.
Complete the square: `(x + b/(2a))² = b²/(4a²) − c/a = (b² − 4ac)/(4a²)`.
Take square roots: `x + b/(2a) = ±√(b² − 4ac)/(2a)`, so
`x = (−b ± √(b² − 4ac))/(2a)`. Accept a correct step-by-step proof;
the division-by-`a` justification is the required insight.

---

# Answer Key — Part B: Lessons 03 & 04 (Grade 12, Unit 01)

Scored items for `lessons/lesson-03-composition-decomposition-inverses.md`
and `lessons/lesson-04-average-rate-of-change.md`. All arithmetic was
double-checked (script-verified 2026-10-14). These are teacher keys —
never placed beside student questions.

---

## Lesson 03 — Composition, Decomposition, and Inverses

### Readiness check

`f(x) = 3x − 2`, `g(x) = x²`.

1. `f(g(2)) = f(4) = 3(4) − 2 = 12 − 2 = 10`.
2. `g(f(2)) = g(4) = 4² = 16`.
3. In `f(g(2))`, `g` ran first; in `g(f(2))`, `f` ran first. The
   results differ (10 vs 16) because composition order matters.

### Guided practice

1. Stages: `d → n` then `n → C`, so `C(n(d)) = 1.25(12d) + 40`.
   `1.25 × 12 = 15`, so `C(d) = 15d + 40`. Units: `1.25` dollars/loaf
   × `12d` loaves = `15d` dollars ✓. For `d = 6`:
   `15(6) + 40 = 90 + 40 = $130`. Stage check: 6 days → 72 loaves →
   `1.25(72) + 40 = 90 + 40 = 130` ✓.
2. `(f∘g)(x) = √(x − 4)`, domain `x ≥ 4` (need `x − 4 ≥ 0`).
   `(g∘f)(x) = √x − 4`, domain `x ≥ 0`. The domains differ because
   `(f∘g)(x)` additionally requires `g(x)` to be an acceptable input
   to `f`: at `x = 0`, `(f∘g)(0) = √(−4)` is undefined while
   `(g∘f)(0) = −4` is fine.
3. Way 1: inner `g(x) = 6x − 11`, outer `f(u) = √u`.
   Check: `(f∘g)(x) = √(6x − 11) = h(x)` ✓.
   Way 2: inner `g(x) = 3x − 11/2`, outer `f(u) = √(2u)`.
   Check: `(f∘g)(x) = √(2(3x − 11/2)) = √(6x − 11) = h(x)` ✓.
   (Domain of `h`: `x ≥ 11/6`.)
4. `y = 4x − 7` → `4x = y + 7` → `x = (y + 7)/4`, so
   `f⁻¹(x) = (x + 7)/4`.
   `f(f⁻¹(x)) = 4·(x + 7)/4 − 7 = (x + 7) − 7 = x` ✓.
   `f⁻¹(f(x)) = ((4x − 7) + 7)/4 = 4x/4 = x` ✓. Both pass.

### Independent practice

1. a) `B(g(p)) = 0.015(45p) + 18`. `0.015 × 45 = 0.675`, so
   `B(p) = 0.675p + 18`. For `p = 4`: `0.675(4) + 18 = 2.70 + 18 =
   $20.70`. Stage check: 4 people → 180 gallons →
   `0.015(180) + 18 = 2.70 + 18 = 20.70` ✓.
   b) Realistic domain: `p ≥ 0`, and realistically a whole number of
   people (`p = 0, 1, 2, …`); negative people are meaningless, and the
   model is a household bill, so `p` is small.
2. Mara's errors: (i) she used only `g`'s domain and forgot the
   second requirement — `g(x)` must lie in `f`'s domain;
   (ii) her conclusion "all real numbers" is wrong.
   Correct: `(f∘g)(x) = √(x² − 9)`; need `x² − 9 ≥ 0`, i.e.
   `x ≤ −3` or `x ≥ 3`. E.g., `x = 0` is in `g`'s domain but
   `(f∘g)(0) = √(−9)` is undefined. The rule she forgot: the domain
   of `f∘g` is `{x in dom(g) : g(x) in dom(f)}`.
3. `y = (x − 2)²` → `√y = |x − 2|`. With `x ≥ 2`, `|x − 2| = x − 2`,
   so `x = 2 + √y`, giving `f⁻¹(x) = 2 + √x`.
   Inverse domain: the range of `f` on `x ≥ 2` is `y ≥ 0`, so
   `x ≥ 0`.
   `f(f⁻¹(x)) = (2 + √x − 2)² = (√x)² = x` for `x ≥ 0` ✓.
   `f⁻¹(f(x)) = 2 + √((x − 2)²) = 2 + |x − 2| = 2 + (x − 2) = x`
   for `x ≥ 2` ✓.
4. a) `y = 0.621k` → `k = y/0.621`, so `M⁻¹(m) = m/0.621`.
   `M⁻¹(10) = 10/0.621 ≈ 16.10` (to two decimals: 16.103… → 16.10).
   b) `M(M⁻¹(10)) = 0.621 × (10/0.621) = 10` ✓.
   Meaning: the inverse converts miles back to kilometers — a 10-mile
   distance is about 16.1 kilometers (e.g., a 10-mile race is a
   ~16.1 km race).
5. `f(x) = x²` fails the horizontal line test on ℝ: `f(2) = f(−2) = 4`,
   so the output 4 does not determine a unique input — no inverse
   function can exist. Restricting to `x ≥ 0` keeps exactly one input
   per output, and the *choice* of restriction fixes the answer:
   `x ≥ 0` gives `f⁻¹(x) = √x`, while `x ≤ 0` would give
   `f⁻¹(x) = −√x`. Prediction for Unit 02: sine also repeats values
   (fails the horizontal line test), so restricting sine to an
   interval where it takes each value exactly once (such as
   `[−π/2, π/2]`) will let us define an inverse sine function the
   same way.

### Application

a) `R(n(d)) = 6(15d + 10) − 50 = 90d + 60 − 50 = 90d + 10`.
   For `d = 12`: `90(12) + 10 = 1080 + 10 = $1090`.
   Stage check: 12 days → `15(12) + 10 = 190` candles →
   `6(190) − 50 = 1140 − 50 = 1090` ✓.
b) `R(d) = 90d + 10` → `d = (R − 10)/90`, so
   `R⁻¹(R) = (R − 10)/90`. It answers: "how many advertising days
   does it take to raise a given revenue?" For $2000:
   `(2000 − 10)/90 = 1990/90 ≈ 22.11` → 23 full days (22.11 days of
   advertising; in practice round up to 23 days).
c) With `d ≥ 0`, revenue `R = 90d + 10 ≥ 10`; a revenue below $10
   would require negative advertising days. So the inverse is only
   meaningful for `R ≥ 10` — the domain restriction on the original
   (`d ≥ 0`) becomes a domain restriction on the inverse, exactly as
   in the lesson: a function and its inverse trade domains and ranges.

### Exit check

1. `(f∘g)(x) = 2x² + 3`; `(g∘f)(x) = (2x + 3)² = 4x² + 12x + 9`.
   At `x = 1`: `f∘g` gives `2 + 3 = 5`; `g∘f` gives `5² = 25`.
   One sentence: they differ because squaring-then-doubling applies
   the operations in the opposite order from doubling-then-squaring.
2. `h(5)` is the shipping cost (in dollars) for a package whose
   volume is 5 cubic feet — the volume is first converted to weight,
   then the weight is converted to cost.

---

## Lesson 04 — Average Rate of Change and the Difference Quotient

### Readiness check

1. `[f(5) − f(2)]/(5 − 2) = (25 − 4)/3 = 21/3 = 7`.
2. The slope of the secant line through `(2, 4)` and `(5, 25)`.

### Guided practice

1. On `[0, 4]`: `(240 − 120)/(4 − 0) = 120/4 = 30` thousand
   dollars/year. On `[2, 4]`: `(240 − 168)/(4 − 2) = 72/2 = 36`
   thousand dollars/year. The later period grew faster — 36 > 30, so
   profit per year was higher on `[2, 4]`.
2. `f(x + h) = (x + h)² + 3(x + h) = x² + 2xh + h² + 3x + 3h`.
   Subtract `f(x) = x² + 3x`: numerator `= 2xh + h² + 3h`
   (every term has `h` ✓). Divide by `h`: `2x + h + 3`.
   On `[1, 4]`: `x = 1`, `h = 3` → `2(1) + 3 + 3 = 8`.
   Direct check: `f(4) = 16 + 12 = 28`; `f(1) = 1 + 3 = 4`;
   `(28 − 4)/3 = 24/3 = 8` ✓.
3. Leo's error: `(x + h)² = x² + 2xh + h²`, not `x² + h²` — he dropped
   the cross term. Correct: `[(x + h)² − x²]/h = (2xh + h²)/h =
   2x + h`. At `x = 4`, `h = 1`: the average rate is `2(4) + 1 = 9`,
   not `1` — Leo's answer missed the starting-point term entirely.
4. `[(5(x + h) − 2) − (5x − 2)]/h = (5x + 5h − 2 − 5x + 2)/h =
   5h/h = 5`. It must be constant because a linear function grows by
   the same amount over every equal-width interval (F-LE): the change
   in output is always `5` times the change in input, so the quotient
   is always `5`, independent of `x` and `h`.

### Independent practice

1. On `[0, 2]`: `(17 − 5)/(2 − 0) = 12/2 = 6` thousand cells/hour.
   On `[1, 3]`: `(33 − 9)/(3 − 1) = 24/2 = 12` thousand cells/hour.
   The rate doubled between the two intervals — the culture is
   growing faster and faster (accelerating growth).
2. `f(x + h) = 3(x + h)² + 2(x + h) − 7`
   `= 3(x² + 2xh + h²) + 2x + 2h − 7`
   `= 3x² + 6xh + 3h² + 2x + 2h − 7`.
   Subtract `f(x) = 3x² + 2x − 7`: `6xh + 3h² + 2h`.
   Divide by `h`: **`6x + 3h + 2`**.
3. `(x + h)³ = x³ + 3x²h + 3xh² + h³` (check: `(x + h)(x + h)² =
   (x + h)(x² + 2xh + h²) = x³ + 2x²h + xh² + x²h + 2xh² + h³ =
   x³ + 3x²h + 3xh² + h³` ✓).
   `f(x + h) = x³ + 3x²h + 3xh² + h³ − 2x − 2h`.
   Subtract `f(x) = x³ − 2x`: `3x²h + 3xh² + h³ − 2h`.
   Divide by `h`: **`3x² + 3xh + h² − 2`**.
4. On `[0, 3]`: `(1 − 4)/(3 − 0) = −3/3 = −1` °C/hour — negative, so
   the temperature was falling (cooling) on average over the first
   three hours. On `[3, 9]`: `(12 − 1)/(9 − 3) = 11/6 ≈ 1.83`
   °C/hour — positive, so the temperature was rising (warming) on
   average over hours 3 to 9.
5. Substituting `h = 0` into the unsimplified form gives
   `[f(x) − f(x)]/0 = 0/0`, which is undefined — the quotient is only
   defined for `h ≠ 0`, and no algebra has been done yet to remove
   the zero denominator. The simplified form `2x + h` is valid for
   every `h ≠ 0`; over a very short interval (tiny `h`) starting at
   `x`, the average rate is close to `2x`, with the `h` term showing
   exactly how the interval width nudges it. (Making "tiny `h`"
   precise is Unit 07's job — limits; here `h` stays nonzero.)

### Application

a) `[R(b) − R(a)]/(b − a) = [(3.2b + 8) − (3.2a + 8)]/(b − a) =
   3.2(b − a)/(b − a) = 3.2` for any `a ≠ b`. Interpretation: each
   additional mile adds $3.20 of revenue on average — 3.2 dollars per
   mile, the constant per-mile price.
b) `S(x + h) = 8 + 3.2(x + h) − 0.05(x + h)²`
   `= 8 + 3.2x + 3.2h − 0.05(x² + 2xh + h²)`
   `= 8 + 3.2x + 3.2h − 0.05x² − 0.1xh − 0.05h²`.
   Subtract `S(x) = 8 + 3.2x − 0.05x²`:
   numerator `= 3.2h − 0.1xh − 0.05h² = h(3.2 − 0.1x − 0.05h)`.
   Divide by `h`: **`3.2 − 0.1x − 0.05h`**.
c) On `[0, 20]`: `x = 0`, `h = 20` →
   `3.2 − 0.1(0) − 0.05(20) = 3.2 − 1 = 2.2` dollars/mile.
   Direct check: `S(20) = 8 + 3.2(20) − 0.05(400) = 8 + 64 − 20 = 52`;
   `S(0) = 8`; `(52 − 8)/20 = 44/20 = 2.2` ✓.
d) The standard model earns more per mile on average over the first
   20 miles: 3.2 $/mi vs 2.2 $/mi. The difference quotient
   `3.2 − 0.1x − 0.05h` shows why: the discount subtracts `0.1x`,
   which grows with distance, plus `0.05h` for the interval width —
   so the longer the trip (larger `x`), the more the per-mile rate
   is pulled below 3.2. The discount compounds with distance.

### Exit check

1. `g(3) = 9 − 12 = −3`; `g(−1) = 1 + 4 = 5`.
   `(g(3) − g(−1))/(3 − (−1)) = (−3 − 5)/4 = −8/4 = −2`.
2. The sign tells whether the quantity grew (positive) or shrank
   (negative) on average over the interval; the magnitude tells how
   fast that average change was — larger absolute value, steeper
   average change.

---

# Answer Key — Part C: Unit 01 Lessons 05 & 06 (Grade 12 Math)

Unit: U01 "Advanced function analysis and mathematical modeling", sessions
S11 and S14. All datasets are fictional practice data invented for the
lessons. Every number below was computed twice; calculator-style arithmetic
is shown step by step.

---

## Lesson 05 — Piecewise and rational functions with precalculus rigor

### Readiness check

(a) x² − 9 = (x − 3)(x + 3); zeros x = 3, x = −3.
(b) x² − 2x − 3 = (x − 3)(x + 1); zeros x = 3, x = −1. (Check: (x−3)(x+1) =
x² + x − 3x − 3 = x² − 2x − 3 ✓.)
(c) x² + 2x + 5: discriminant b² − 4ac = 4 − 20 = −16 < 0, so no real zeros;
does not factor over the reals.

### Guided practice

**1.** h(−2) = (−2)² = 4 (first rule, −2 ≤ 0). h(0) = 0² = 0 — the exact
value 0 belongs to the first rule (x ≤ 0). h(1) = 3(1) + 1 = 4 (second
rule, 1 > 0). Seam at x = 0: left rule says 0² = 0; right rule says
3(0) + 1 = 1. 0 ≠ 1, so the pieces do **not** join — the graph jumps from
(0, 0) up to an open circle at (0, 1).

**2.** x² − 4 = (x − 2)(x + 2), so p(x) = (x−2)(x+2)/(x+2) = x − 2 for
x ≠ −2. Domain: all reals except x = −2. The canceled factor (x + 2) gives
a **hole** at x = −2 with y-coordinate (−2) − 2 = −4, i.e. the missing
point (−2, −4). No vertical asymptote (nothing zeroes the simplified
denominator). No horizontal/slant asymptote either — after simplification
it is the line y = x − 2 with one point removed.

**3.** The claim is **incorrect**. Factor: (x² − 1)/(x − 1) =
(x−1)(x+1)/(x−1) = x + 1 for x ≠ 1. The factor (x − 1) is common to top and
bottom, so x = 1 is a **hole**, not a vertical asymptote — the single
missing point (1, 2), since 1 + 1 = 2. A vertical asymptote requires the
*simplified* denominator to be zero; here the simplified denominator is
the constant 1.

**4.** q(x) = (2x + 6)/(x − 2).
- Domain: x ≠ 2. Vertical asymptote: x = 2. Horizontal asymptote: degrees
  equal, leading coefficients 2/1 → y = 2.
- x-intercept: 2x + 6 = 0 → x = −3 → (−3, 0).
- y-intercept: q(0) = 6/(−2) = −3 → (0, −3).
- Sign chart (zero at −3, VA at 2): test x = −4: (−8+6)/(−4−2) = (−2)/(−6)
  = +1/3 > 0; test x = 0: 6/(−2) = −3 < 0; test x = 3: 12/1 = 12 > 0.
  Positive on (−∞, −3), negative on (−3, 2), positive on (2, ∞).
- One-sided behavior at x = 2: from the left, x = 1.999 → numerator
  2(1.999)+6 = 9.998 > 0, denominator −0.001 < 0 → q → −∞; from the right,
  x = 2.001 → numerator 10.002 > 0, denominator +0.001 > 0 → q → +∞.
- Sketch: dashed x = 2, y = 2; branch through (−3, 0) and (0, −3) diving to
  −∞ left of x = 2; branch descending from +∞ right of x = 2 toward y = 2.
  Verify in Desmos afterward.

**5.** (Sample.) A vertical asymptote at x = a means a is not in the
function's domain — the function is undefined there. For the graph to cross
the line x = a, the point (a, k) would have to be on the graph for some
k, which would require f(a) = k to exist. Since f(a) does not exist, no
such point exists, so the graph can approach the asymptote but never touch
it. (Note: graphs *can* cross horizontal or slant asymptotes, which are
about end behavior, not domain.)

**6.** First 100 flyers: \$2 each → 2n. Beyond 100: the first 100 cost
\$200, plus \$1.50 for each of the (n − 100) extra flyers.
C(n) = { 2n, 0 ≤ n ≤ 100; 200 + 1.5(n − 100), n > 100 }, n a whole number.
C(80) = 2(80) = \$160. C(120) = 200 + 1.5(20) = 200 + 30 = \$230.
C(250) = 200 + 1.5(150) = 200 + 225 = \$425. At n = 100: first rule gives
2(100) = 200; second rule gives 200 + 1.5(0) = 200. Equal — the pieces
**join**; C is continuous at n = 100 (no price jump).

### Independent practice

**1.** m(x) = (x² + x − 6)/(x² − 4) = (x+3)(x−2)/((x−2)(x+2)).
Check factoring: (x+3)(x−2) = x² + x − 6 ✓; (x−2)(x+2) = x² − 4 ✓.
Simplified: (x + 3)/(x + 2), x ≠ 2.
- Domain: x ≠ 2, x ≠ −2. Hole at x = 2: (2+3)/(2+2) = 5/4 → missing point
  (2, 5/4) = (2, 1.25).
- Vertical asymptote: x = −2. Horizontal asymptote: y = 1.
- x-intercept: x + 3 = 0 → x = −3 → (−3, 0) (check original: (9−3−6)/(9−4)
  = 0/5 = 0 ✓). y-intercept: m(0) = (−6)/(−4) = 3/2 → (0, 1.5).
- Sign chart (zero −3, VA −2, hole 2): test −4: (−1)/(−2) = +0.5 > 0;
  test −2.5: (6.25−2.5−6)/(6.25−4) = (−2.25)/(2.25) = −1 < 0; test 0:
  +1.5 > 0; test 3: (9+3−6)/(9−4) = 6/5 > 0. Positive on (−∞, −3),
  negative on (−3, −2), positive on (−2, 2) and (2, ∞).
- Sketch: dashed x = −2, y = 1; points (−3, 0), (0, 1.5); hole at
  (2, 1.25); verify with Desmos.

**2.** Divide x² − 1 by x − 3: x² − 1 = (x − 3)(x + 3) + 8 (check:
(x−3)(x+3) = x² − 9; x² − 9 + 8 = x² − 1 ✓). So t(x) = x + 3 + 8/(x − 3);
**slant asymptote y = x + 3** (the remainder 8/(x−3) → 0 as |x| → ∞).
Vertical asymptote: x = 3. x-intercepts: x² − 1 = 0 → x = ±1 → (−1, 0),
(1, 0) (check: t(1) = 0/(−2) = 0 ✓; t(−1) = 0/(−4) = 0 ✓). y-intercept:
t(0) = (−1)/(−3) = 1/3 → (0, 1/3).

**3.** The student missed/misstated three things. (a) (x−1)/(x²−1) =
(x−1)/((x−1)(x+1)) = 1/(x+1) for x ≠ 1, so there is a **hole at x = 1** —
value 1/(1+1) = 1/2, missing point (1, 1/2) — which the student never
mentioned. (b) The vertical asymptote at x = −1 is correct, but the
student's blanket statement "the only feature" ignores the hole and the
horizontal asymptote y = 0 (numerator degree < denominator degree).
(c) Wording: the student "concludes" from the simplified form alone, but
the hole is invisible in 1/(x+1) — you must carry the domain restriction
x ≠ 1 from the original form.

### Application

(a) Constraints: n is a whole number, 20 ≤ n ≤ 150. (As inequalities:
n ≥ 20, n ≤ 150, n ∈ ℤ.)
(b) (120 + 18n)/n ≤ 20 with n > 0: multiply by n: 120 + 18n ≤ 20n →
120 ≤ 2n → n ≥ 60. Intersect with the constraints: **viable n are the
whole numbers 60, 61, …, 150**.
(c) P(40) = (120 + 18·40)/40 = (120 + 720)/40 = 840/40 = **\$21 per
person** — above \$20, so n = 40 fails the cost requirement even though it
satisfies the venue constraints; it is nonviable. P(150) = (120 +
18·150)/150 = (120 + 2700)/150 = 2820/150 = **\$18.80 per person** —
viable. The horizontal asymptote: P(n) = 18 + 120/n → **y = 18**, so for
very large events the per-person cost approaches \$18 — the per-guest
charge dominates and the \$120 setup fee spreads thin. (At the cap,
\$18.80 is already close to \$18.)

### Exit check

(a) f(2) = 2² − 2 = **2** (second rule, x ≥ 2). Seam values: left rule
says 2 + 1 = 3; right rule says 2. 3 ≠ 2 → the pieces do **not** join at
x = 2 (jump from open circle (2, 3) down to filled dot (2, 2)).
(b) (x² − 5x + 6)/(x² − 4) = (x−2)(x−3)/((x−2)(x+2)). Check: (x−2)(x−3) =
x² − 5x + 6 ✓. At **x = 2: hole** — the factor (x − 2) cancels; value
(2−3)/(2+2) = −1/4, missing point (2, −1/4). At **x = −2: vertical
asymptote** — (x + 2) zeroes the simplified denominator.

### Extension

r(x) = (x² + 1)/x = x + 1/x (division: x²+1 = x·x + 1 ✓). No x-intercepts:
x² + 1 = 0 has no real solution. No holes: nothing cancels. Slant
asymptote **y = x** (remainder 1/x → 0). For x > 0, 1/x > 0 so
r(x) = x + 1/x > x — graph above y = x; for x < 0, 1/x < 0 so r(x) < x —
graph below y = x.

---

## Lesson 06 — Building, comparing, and choosing models

### Readiness check

1, 4, 9, 16, 25. First differences: 4−1 = 3; 9−4 = 5; 16−9 = 7; 25−16 = 9.
Second differences: 5−3 = 2; 7−5 = 2; 9−7 = 2 — **constant 2**, the
quadratic signature.

### Worked example 1 — arithmetic verified

Vertex form h(t) = a(t − 1)² + 7 through (0, 2): a(1) + 7 = 2 → a = −5.
Checks: t = 0.5: −5(0.5−1)² + 7 = −5(0.25) + 7 = −1.25 + 7 = 5.75 ✓;
t = 1.5: same, 5.75 ✓; t = 2: −5(1) + 7 = 2 ✓.
Linear rival: mean height = (2 + 5.75 + 7 + 5.75 + 2)/5 = 22.5/5 = 4.5;
slope numerator: (−1)(2−4.5) + (−0.5)(5.75−4.5) + 0(7−4.5) +
(0.5)(5.75−4.5) + (1)(2−4.5) = (−1)(−2.5) + (−0.5)(1.25) + 0 +
(0.5)(1.25) + (1)(−2.5) = 2.5 − 0.625 + 0 + 0.625 − 2.5 = 0; denominator
1 + 0.25 + 0 + 0.25 + 1 = 2.5; slope = 0/2.5 = 0 → line h = 4.5.
Residuals (observed − 4.5): 2 − 4.5 = −2.5; 5.75 − 4.5 = 1.25; 7 − 4.5 =
2.5; 5.75 − 4.5 = 1.25; 2 − 4.5 = −2.5 — arch pattern (−, +, +, +, −).
First differences: 5.75−2 = 3.75; 7−5.75 = 1.25; 5.75−7 = −1.25;
2−5.75 = −3.75. Second differences: 1.25−3.75 = −2.5; −1.25−1.25 = −2.5;
−3.75−(−1.25) = −2.5 — constant ✓.

### Worked example 2 — arithmetic verified

Drops: 76.4 − 90 = −13.6; 65.5 − 76.4 = −10.9; 56.8 − 65.5 = −8.7;
49.9 − 56.8 = −6.9. Drop ratios: 10.9/13.6 = 0.8015 ≈ 0.80;
8.7/10.9 = 0.7982 ≈ 0.80; 6.9/8.7 = 0.7931 ≈ 0.79. All ≈ 0.80.
Model T(t) = 22 + 68(0.8)^t: t=0: 22+68(1) = 90 ✓; t=1: 22+68(0.8) =
22+54.4 = 76.4 ✓; t=2: 22+68(0.64) = 22+43.52 = 65.52 ✓; t=3:
22+68(0.512) = 22+34.816 = 56.816 ✓; t=4: 22+68(0.4096) = 22+27.8528 =
49.8528 ✓. Residuals (observed − predicted): 90−90 = 0; 76.4−76.4 = 0;
65.5−65.52 = −0.02; 56.8−56.816 = −0.016; 49.9−49.8528 = 0.0472 ≈ +0.05.
Tiny, no pattern ✓. Long-run: 0.8^t → 0, so T → 22 °C.

### Guided practice

**1.** First differences: 3.75, 1.25, −1.25, −3.75 (computed above — not
constant, so not linear). Second differences: −2.5, −2.5, −2.5 —
constant. Signature: **quadratic**.

**2.** 6.9/8.7 = 0.7931 ≈ 0.79 ≈ 0.80, matching the first two ratios.
A roughly constant ratio of consecutive *drops* means each step's change
is a fixed proportion of the previous step's change — the exponential
signature, here carried by the temperature excess above room temperature
(the asymptote), not by the raw temperatures.

**3.** h(t) = 17 − 15cos(πt/20):
t = 0: 17 − 15cos(0) = 17 − 15(1) = 2; residual 2 − 2 = 0.
t = 10: 17 − 15cos(π/2) = 17 − 15(0) = 17; residual 17 − 17 = 0.
t = 20: 17 − 15cos(π) = 17 − 15(−1) = 32; residual 32 − 32 = 0.
t = 30: 17 − 15cos(3π/2) = 17 − 15(0) = 17; residual 0.
t = 40: 17 − 15cos(2π) = 17 − 15(1) = 2; residual 0.
All residuals 0 — the cosine model fits the fictional data exactly.

**4.** (Sample, two reasons.) (a) Residuals: "under 4 °C" is not the test
— the test is *pattern*. A line through curving data leaves residuals that
are systematically positive in the middle and negative at the ends (or
vice versa); a curved pattern means the model is structurally wrong no
matter how small the numbers are. (b) Situation: a line keeps falling at a
constant rate forever, so it eventually predicts the soup cooling *below*
room temperature (and below 0 °C) — physically impossible. The exponential
model levels off at the 22 °C asymptote, which the situation requires.

**5.** Diameter 30 m → radius 15 m → **amplitude 15**. One rotation per
40 s → **period 40 s**. Boarding (lowest) height 2 m → minimum 2, maximum
2 + 30 = 32 → **midline (2+32)/2 = 17 m**. Model: h(t) = 17 − 15cos(2πt/40)
= **17 − 15cos(πt/20)** (cosine with a minus sign because the rider starts
at the minimum). Diagram marks: t = 0 at the bottom (2 m), t = 10 at the
right-side midline point rising (17 m), t = 20 at the top (32 m).

### Independent practice

**1.** Model X's residuals (−2.5, 1.25, 2.5, 1.25, −2.5) arch
systematically — a clear curve pattern, so X is the wrong family despite
moderate sizes. Model Y's residuals (0.1, −0.1, 0.0, 0.2, −0.1) are all
≤ 0.2 in magnitude *and* show no pattern. **Model Y wins**: smaller
residuals and, more importantly, patternless ones.

**2.** Ratios: 1050/1000 = 1.05; 1102.5/1050 = 1.05 (1050 × 1.05 =
1102.5 ✓); 1157.6/1102.5 ≈ 1.05002 ≈ 1.05 (1102.5 × 1.05 = 1157.625,
rounds to 1157.6 ✓). Constant ratio ≈ 1.05 → **exponential**. In context:
the balance grows by about 5% each year (compound growth).

**3.** h(50) = 17 − 15cos(50π/20) = 17 − 15cos(2.5π). 2.5π = 5π/2; cos(5π/2)
= 0. So h(50) = 17 − 0 = **17 m**. Not viable: the ride ends at t = 40 s,
so the viable domain is 0 ≤ t ≤ 40; at t = 50 s the rider has already
exited — the situation the model describes no longer exists, so the
prediction is meaningless even though the algebra computes cleanly.

### Application — sample defense paragraph

*I chose an exponential model because the temperature drops shrink in a
regular way: the drops are 13.6, 10.9, 8.7, and 6.9 °C, and the ratios of
consecutive drops are about 0.80 each time (10.9/13.6 ≈ 0.80, 8.7/10.9 ≈
0.80, 6.9/8.7 ≈ 0.79) — the constant-ratio signature of exponential decay
in the temperature excess. The model T(t) = 22 + 68(0.8)^t leaves residuals
of 0, 0, −0.02, −0.016, and +0.05 °C: all under a tenth of a degree and
with no visible pattern, so nothing systematic is missing. The 22 °C
asymptote means the soup approaches room temperature but never drops below
it, which matches the physics. A linear model would fail this last test —
it would keep falling past room temperature forever.*

### Formative review

1. x² − 9 = 0 → x = ±3. Domain: **all real numbers except x = 3 and
   x = −3**.
2. y = 3x + 7 → swap: x = 3y + 7 → 3y = x − 7 → **y = (x − 7)/3**.
   (Check: p((x−7)/3) = 3(x−7)/3 + 7 = x ✓.)
3. 0.88 is the **decay factor**: each year the car keeps 88% of the
   previous year's value, i.e. it loses about 12% of its value per year.
4. s(2) = **4** (first rule, x ≤ 2). Seam: left says 4, right says 2 + 1 =
   3. 4 ≠ 3 → the pieces do **not** join (jump at x = 2).
5. Residual = observed − predicted = 65.5 − 65.52 = **−0.02 °C**. The
   negative sign means the model **overpredicted** — it guessed 0.02 °C
   warmer than the thermometer read.
6. Constant consecutive ratios ≈ 1.05 → try the **exponential** family
   first.

### Exit check

Try the **quadratic** family first. Justification: constant second
differences are the quadratic rate-of-change signature — the first
differences change by the same amount each step, exactly how a parabola's
slope changes steadily.

### Extension

(Sample conclusion.) The degree-4 polynomial will fit the five data points
nearly perfectly (five points determine a degree-4 polynomial), so its
largest absolute residual is ~0 — smaller than the sine model's. But for
predicting the *next* rotation, choose the **sine model**: the polynomial
will swing wildly outside the data (huge values beyond t = 40), while the
sine model repeats the 2 m–32 m cycle the wheel actually produces.
Situational meaning beats in-sample fit.

---

# Answer Key — Part D (adults only)

Worked solutions for Unit 01 practice sets A–F, the Week 4 quiz,
and the unit assessment of Grade 12 math, Unit 01 ("Advanced
function analysis and mathematical modeling"). **Never place beside
a student question.** Every number below was computed twice.

---

## Practice Set A solutions

**A1.** `f(x) = −x² + 4x − 3`.
- Domain: all real numbers.
- Zeros: `−x² + 4x − 3 = 0` → `x² − 4x + 3 = 0` → `(x − 1)(x − 3) = 0` →
  x-intercepts `(1, 0)`, `(3, 0)`.
- y-intercept: `f(0) = −3` → `(0, −3)`.
- Vertex: `x = −b/(2a) = −4/(2·−1) = 2`; `f(2) = −4 + 8 − 3 = 1` →
  local (global) maximum `1` at `(2, 1)`.
- Increasing on `(−∞, 2)`; decreasing on `(2, ∞)`.
- Range: `(−∞, 1]`.
- End behavior: `x → ±∞` ⇒ `f(x) → −∞` (negative leading coefficient,
  even degree).
- Symmetry: `f(−x) = −x² − 4x − 3`, which equals neither `f(x)` nor
  `−f(x) = x² − 4x + 3` → neither even nor odd.
- Sketch: downward parabola through `(0,−3)`, `(1,0)`, `(3,0)`, peak
  `(2,1)`; Desmos check confirms.

**A2.** `g(x) = (x + 1)/(x − 2)`.
- Domain: `x ≠ 2` → `(−∞, 2) ∪ (2, ∞)`.
- Vertical asymptote `x = 2` (denominator zero, numerator nonzero);
  horizontal asymptote `y = 1` (equal degrees, leading-coefficient
  ratio `1/1`).
- x-intercept: `x + 1 = 0` → `(−1, 0)`. y-intercept: `g(0) = −1/2` →
  `(0, −1/2)`.
- Sign: on `(−∞, −1)`, test `x = −2`: `(−1)/(−4) = 1/4 > 0`;
  on `(−1, 2)`, test `x = 0`: `1/(−2) = −1/2 < 0`;
  on `(2, ∞)`, test `x = 3`: `4/1 = 4 > 0`.
- Decreasing: `g′(x) = [(1)(x − 2) − (x + 1)(1)]/(x − 2)²`
  `= −3/(x − 2)² < 0` for every `x` in the domain → strictly
  decreasing on each interval.

**A3.** `h(x) = 2^(x−1) − 1`.
- Domain: all reals. Range: `2^(x−1) > 0` always, so `h(x) > −1` →
  `(−1, ∞)`.
- y-intercept: `h(0) = 2^(−1) − 1 = 1/2 − 1 = −1/2`.
- x-intercept: `2^(x−1) = 1` → `x − 1 = 0` → `(1, 0)`.
- Horizontal asymptote: `y = −1` as `x → −∞`; `h(x) → ∞` as `x → ∞`.
- Strictly increasing everywhere (base `2 > 1`).
- No extrema: an exponential `2^(x−1)` is strictly monotone and
  unbounded in one direction, so it never turns around — shifting
  down by 1 cannot create a max or min.

**A4.**
- a) `p(x) = 3x⁴ − 2x² + 7`: `x → ±∞` ⇒ `p → +∞`; `p(−x) = p(x)` → even.
- b) `q(x) = 4/(x² + 1)`: `x → ±∞` ⇒ `q → 0`; `q(−x) = q(x)` → even.
- c) `r(x) = −2x³ + x`: `x → −∞` ⇒ `r → +∞`, `x → +∞` ⇒ `r → −∞`;
  `r(−x) = 2x³ − x = −(−2x³ + x) = −r(x)` → odd.

**A5.**
- a) Realistic domain `[0, 20]` weeks (tank empties when
  `500 − 25w = 0` → `w = 20`); range `[0, 500]` gallons.
- b) `(0, 500)`: the tank starts full at 500 gallons.
  `(20, 0)`: the tank is empty after 20 weeks.
- c) `T(8) = 500 − 25·8 = 500 − 200 = 300` gallons remain after
  8 weeks. Average rate of change on `[0, 20]`:
  `(T(20) − T(0))/20 = (0 − 500)/20 = −25` gallons per week —
  the tank drains at a steady 25 gal/week.

**A6.** Domain first: `x > 0` and `x − 2 > 0` → `x > 2`.
`log₂(x(x − 2)) = 3` → `x² − 2x = 2³ = 8` → `x² − 2x − 8 = 0` →
`(x − 4)(x + 2) = 0` → `x = 4` or `x = −2`. Reject `x = −2`
(outside the domain). Check: `log₂(4) + log₂(2) = 2 + 1 = 3` ✓.
Solution: `x = 4`.

**A7.** Order: (1) replace `x` by `x + 3` → shift left 3;
(2) multiply by `−2` → reflect across the x-axis and vertically
stretch by factor 2; (3) add `5` → shift up 5.
Vertex trace: `(0, 0)` → `(−3, 0)` → `(−3, 0)` (reflection/stretch
fix the vertex) → `(−3, 5)`.

---

## Practice Set B solutions

**B1.** `x² − 6x + 11 = (x² − 6x + 9) + 2 = (x − 3)² + 2`.
Vertex `(3, 2)`; minimum value `2` at `x = 3`. The standard form
shows the y-intercept `11` as its constant term; the vertex form
hides it (you would have to evaluate at `x = 0`: `(−3)² + 2 = 11`).
The vertex form shows the minimum `(3, 2)` immediately; the
standard form would require `x = −b/(2a) = 3` first.

**B2.** `g(x) = (2x² + 8x + 6)/(x + 3) = 2(x + 1)(x + 3)/(x + 3)`
`= 2x + 2`, for `x ≠ −3`. Domain: `x ≠ −3`. Hole at
`x = −3`: `y = 2(−3) + 2 = −4` → hole at `(−3, −4)`. The graph is
the line `y = 2x + 2` with that one point removed. The original
form reveals the hole (the canceled factor `x + 3`); the simplified
form hides it.

**B3.** `h(x) = x³ − 4x = x(x² − 4) = x(x − 2)(x + 2)`.
Zeros: `−2, 0, 2`. Sign chart: negative on `(−∞, −2)`, positive on
`(−2, 0)`, negative on `(0, 2)`, positive on `(2, ∞)`.
Expanded form: y-intercept `(0, 0)`; end behavior `x → −∞` ⇒
`h → −∞`, `x → +∞` ⇒ `h → +∞`. `h(−x) = −h(x)` → odd.

**B4.** `5 · 2^x = 5 · (2³)^(x/3) = 5 · 8^(x/3)`: raising `x` by 3
replaces `8^(x/3)` by `8^((x+3)/3) = 8 · 8^(x/3)`, so the function
is multiplied by 8 every 3 input units. Check:
`k(x + 3) = 5 · 2^(x+3) = 5 · 2^x · 2³ = 8 · k(x)` ✓.

**B5.** `(x² − 9)/(x² − 4)`: divide → `1 + (−5)/(x² − 4)`
`= 1 − 5/(x² − 4)`. As `x → ±∞`, the fraction → 0, so the
horizontal asymptote `y = 1` is visible in the new form. Domain:
`x ≠ ±2`. Zeros: `x = ±3`. Vertical asymptotes: `x = 2`, `x = −2`.
y-intercept: `m(0) = (−9)/(−4) = 9/4`.

**B6.** Domain: `x ≠ 1`. Range: `y ≠ 2`. Vertical asymptote `x = 1`;
horizontal asymptote `y = 2`.

**B7.** Realistic domain `t ≥ 0` (minutes). y-intercept `(0, 110)`:
the coffee is poured at 110 °F. As `t → ∞`, `(0.94)^t → 0`, so
`T(t) → 40` — the coffee approaches the 40 °F room temperature and
never drops below it in this model.

---

## Practice Set C solutions

**C1.** `(f∘g)(x) = f(3x − 2) = (3x − 2)² + 1 = 9x² − 12x + 5`.
`(g∘f)(x) = g(x² + 1) = 3(x² + 1) − 2 = 3x² + 1`.
At `x = 1`: `(f∘g)(1) = 9 − 12 + 5 = 2`; `(g∘f)(1) = 3 + 1 = 4`.
They differ because composition applies the functions in opposite
orders: `(f∘g)(1)` squares *after* the linear step (`3·1−2 = 1`,
then `1² + 1 = 2`), while `(g∘f)(1)` applies the linear step *after*
squaring (`1² + 1 = 2`, then `3·2 − 2 = 4`).

**C2.**
- a) `G(t) = F(r(t)) = (40t)/25 = 1.6t` gallons.
- b) Units: `F` outputs gallons per mile times miles → `(gal/mi)·mi
  = gal` ✓; the composite takes hours → gallons ✓.
- c) Composite: `G(5) = 1.6·5 = 8` gallons. Stage-by-stage:
  `r(5) = 200` miles; `F(200) = 200/25 = 8` gallons ✓. Agree.

**C3.** Inner `g(x) = 2x − 5`, outer `f(u) = u³ + 7`:
`f(g(x)) = (2x − 5)³ + 7 = h(x)` ✓. Different decomposition:
inner `a(x) = x − 5/2`, outer `f̃(u) = (2u)³ + 7`:
`f̃(a(x)) = (2(x − 5/2))³ + 7 = (2x − 5)³ + 7 = h(x)` ✓.

**C4.** `y = (3x − 7)/2` → `2y = 3x − 7` → `x = (2y + 7)/3` →
`f⁻¹(x) = (2x + 7)/3`.
`f(f⁻¹(x)) = (3(2x + 7)/3 − 7)/2 = (2x + 7 − 7)/2 = x` ✓.
`f⁻¹(f(x)) = (2(3x − 7)/2 + 7)/3 = (3x − 7 + 7)/3 = x` ✓.

**C5.**
- a) `x² − 6x + 8 = (x − 3)² − 1`; vertex `(3, −1)`. On `x ≤ 3`
  the parabola is strictly decreasing (left of the vertex), so it
  passes the horizontal line test → invertible.
- b) `y = x² − 6x + 8` → `x = y² − 6y + 8` → `y² − 6y + (8 − x) = 0`
  → `y = [6 ± √(36 − 4(8 − x))]/2 = [6 ± √(4 + 4x)]/2`
  `= 3 ± √(x + 1)`. Range of `f` is `[−1, ∞)`, so the domain of
  `f⁻¹` is `x ≥ −1`; with `f`'s domain `y ≤ 3`, choose the minus
  sign: `f⁻¹(x) = 3 − √(x + 1)`, `x ≥ −1`.
- c) `f(3) = 9 − 18 + 8 = −1`; `f⁻¹(−1) = 3 − √0 = 3` ✓.

**C6.** `−2x² + 8x + 6 = −2(x² − 4x) + 6 = −2(x − 2)² + 8 + 6`
`= −2(x − 2)² + 14`. Vertex `(2, 14)`; maximum `14` at `x = 2`.
The vertex form answers "where is the extreme value?" directly;
the standard form answers "what is the y-intercept?" (here `6`)
directly.

**C7.** Domain: `x ≠ ±3`. Zero: `x = 0`. Vertical asymptotes
`x = 3`, `x = −3`; horizontal asymptote `y = 0`. Odd:
`r(−x) = −r(x)`. Derivative:
`r′(x) = [(x² − 9) − x(2x)]/(x² − 9)² = (−x² − 9)/(x² − 9)² < 0`
on the whole domain → strictly decreasing on `(−∞, −3)`,
`(−3, 3)`, `(3, ∞)`. Sign: `r(−4) = −4/7 < 0`;
`r(−1) = −1/(−8) = 1/8 > 0`; `r(1) = 1/(−8) < 0`; `r(4) = 4/7 > 0`.

---

## Practice Set D solutions

**D1.** `f(2) = 8 − 4 = 4`; `f(−1) = −1 + 2 = 1`.
ARoC `= (4 − 1)/(2 − (−1)) = 3/3 = 1`. On average, `f` rises 1
output unit per 1 input unit across `[−1, 2]`.

**D2.** `[4(x + h)² − (x + h) − (4x² − x)]/h`
`= [4x² + 8xh + 4h² − x − h − 4x² + x]/h`
`= (8xh + 4h² − h)/h = 8x + 4h − 1`.
At `x = 2`, `h = 0.1`: `16 + 0.4 − 1 = 15.4`. As `h → 0` it
approaches `8x − 1` (here `15`).

**D3.**
- a) `s(1) = 16`, `s(3) = 144`. ARoC `= (144 − 16)/(3 − 1) = 64`
  ft/s.
- b) `[16(1 + h)² − 16]/h = [16 + 32h + 16h² − 16]/h = 32 + 16h`;
  as `h → 0`, `32` ft/s.
- c) The average rate (64 ft/s) blends the slow start with the
  fast finish; the instantaneous rate (32 ft/s) measures only the
  speed at the 1-second mark, when the stone is still accelerating.

**D4.** Example: `f(x) = (x − 1)² + 3`. `f(0) = 1 + 3 = 4`;
`f(2) = 1 + 3 = 4`; ARoC `= (4 − 4)/2 = 0` ✓. The function dips to
its minimum `3` at `x = 1` and climbs back — equal endpoint values
give zero average change even though the function moves between.

**D5.**
`1.08² = 1.1664`; `1.08⁴ = 1.1664² = 1.36048896`;
`1.08⁵ = 1.36048896 · 1.08 = 1.4693280768`.
- a) `P(5) = 500 · 1.4693280768 = 734.6640384 ≈ 734.66`.
  ARoC `= (734.6640384 − 500)/5 = 234.6640384/5 ≈ 46.93`
  rabbits/year.
- b) `P(10) = 500 · 1.4693280768² ≈ 500 · 2.158925 ≈ 1079.46`.
  ARoC `= (1079.46 − 734.66)/5 = 344.80/5 ≈ 68.96` rabbits/year.
- c) The rates differ because growth is exponential: each year's
  population is 8% larger than the last, so the same 8% adds more
  rabbits as the base grows — the average rate must increase.

**D6.** `y = 2x³ + 1` → `x = (y − 1)/2` → `y = ∛((x − 1)/2)` →
`g⁻¹(x) = ∛((x − 1)/2)`. Check:
`g(g⁻¹(x)) = 2·((x − 1)/2) + 1 = x` ✓.

**D7.** Group: `x²(x + 1) − 4(x + 1) = (x² − 4)(x + 1)`
`= (x − 2)(x + 2)(x + 1)`. Zeros: `−2, −1, 2`. The factored form
reveals the zeros; the expanded form reveals the y-intercept
(`p(0) = −4`).

---
## Practice Set E solutions

**E1.**
- a) `f(0) = 2·0 + 1 = 1`; `f(1) = 1² = 1`; `f(2) = 2² = 4`;
  `f(3) = 4`; `f(5) = 4`.
- b) Domain: all reals. Range: first branch gives `(−∞, 3)`,
  second gives `[1, 9)`, third gives `{4}`; union = `(−∞, 9)`.
- c) At `x = 1`: left-hand value → `2·1 + 1 = 3`, but
  `f(1) = 1` → jump discontinuity. At `x = 3`: left-hand limit
  → `3² = 9`, but `f(3) = 4` → jump discontinuity.
- d) Increasing on `(−∞, 1)` and on `[1, 3)`; constant on
  `[3, ∞)`; never decreasing.

**E2.** `g(x) = x(x + 3)/((x − 3)(x + 2))`. Domain: `x ≠ 3, −2`.
Zeros: `x = 0` and `x = −3` (numerator roots, neither cancels).
Vertical asymptotes: `x = 3` and `x = −2` (denominator roots, no
common factor → **no holes**). Horizontal asymptote: `y = 1`
(equal degrees). y-intercept: `g(0) = 0`.

**E3.** Critical numbers: `x = 1` (zero), `x = −4` (excluded).
Sign: `(−∞, −4)`: test `x = −5` → `(−6)/(−1) = 6 ≥ 0` ✓;
`(−4, 1)`: test `x = 0` → `(−1)/4 < 0` ✗;
`(1, ∞)`: test `x = 2` → `1/6 ≥ 0` ✓.
Solution: `(−∞, −4) ∪ [1, ∞)` (`x = 1` included since `≥`;
`x = −4` excluded since undefined).

**E4.** `3/(x − 2) + 1 = (3 + (x − 2))/(x − 2) = (x + 1)/(x − 2)`.
Domain: `x ≠ 2`. Vertical asymptote `x = 2`; horizontal asymptote
`y = 1`. x-intercept: `x = −1`; y-intercept: `h(0) = 1/(−2) =
−1/2`. The shifted-reciprocal form reveals the asymptotes
directly (shift of `3/x` right 2, up 1); the single-fraction form
reveals the zero (`x = −1`) directly.

**E5.**
- a) `C(2) = 6`; `C(5) = 6 + 1.5·3 = 6 + 4.5 = 10.5`;
  `C(12) = 18 + 3·2 = 18 + 6 = 24`.
- b) At `w = 2`: left value → `6`, `C(2) = 6` → continuous.
  At `w = 10`: left → `6 + 1.5·8 = 18`, `C(10) = 18` →
  continuous. (The price has no jumps — only the *rate* changes.)
- c) Realistic domain `w > 0` (a package must weigh something;
  the first piece is defined for `0 < w ≤ 2`).

**E6.** ARoC `= (2³ − 2⁰)/3 = (8 − 1)/3 = 7/3 ≈ 2.33` output units
per input unit. On average, `f` grows about 2.33 units of `y` per
unit of `x` across `[0, 3]`.

**E7.** Inner `g(x) = 3x² + 2`, outer `f(u) = √u`:
`f(g(x)) = √(3x² + 2) = k(x)` ✓.

---

## Practice Set F solutions

**F1.** `f(x) = x⁴ − 5x² + 4 = (x² − 1)(x² − 4)`
`= (x − 1)(x + 1)(x − 2)(x + 2)`. Zeros: `±1, ±2` (all multiplicity
1). Even: `f(−x) = f(x)`. y-intercept `(0, 4)`. End behavior:
`x → ±∞` ⇒ `f → +∞`. Critical points:
`f′(x) = 4x³ − 10x = 2x(2x² − 5) = 0` → `x = 0, ±√(5/2) ≈ ±1.581`.
`f(±√2.5) = 6.25 − 12.5 + 4 = −2.25` (local minima);
`f(0) = 4` (local maximum). Decreasing on `(−∞, −√2.5)` and
`(0, √2.5)`; increasing on `(−√2.5, 0)` and `(√2.5, ∞)`. Range:
`[−2.25, ∞)`.

**F2.** With a squared denominator, `r(x) = a(x − 1)/(x − 4)²` has
VA `x = 4`, HA `y = 0`, x-intercept `1` automatically. y-intercept:
`r(0) = a(−1)/16 = −a/16 = −1/4` → `a = 4`, so
`r(x) = 4(x − 1)/(x − 4)²`. Partial fractions: let `u = x − 4`,
then `x − 1 = u + 3`, so
`r(x) = 4(u + 3)/u² = 4/(x − 4) + 12/(x − 4)²`.
Near `x = 4`, the numerator `4(x − 1) ≈ 12 > 0` while the
denominator `(x − 4)² > 0` on both sides, so `r → +∞` from both
sides — the form reveals the double pole: the graph blows up
upward on both sides instead of flipping sign.

**F3.**
- a) `(g∘f)(x) = g(ln x) = (ln x)² + 1`, domain `x > 0`.
  `(g∘f)(e) = 1² + 1 = 2`.
- b) `y = ln x + 1` → `x = ln y + 1` → `y = e^(x−1)` →
  `p⁻¹(x) = e^(x−1)`, domain all reals, range `y > 0`.
  Check: `p(p⁻¹(x)) = ln(e^(x−1)) + 1 = (x − 1) + 1 = x` ✓.

**F4.** `[1/(x + h) − 1/x]/h = [(x − (x + h))/(x(x + h))]/h`
`= [−h/(x(x + h))]/h = −1/(x(x + h))`.
At `x = 2`, `h = 0.1`: `−1/(2 · 2.1) = −1/4.2 ≈ −0.2381`.
`−1/x²` at `x = 2` is `−0.25`. The closeness suggests the
difference quotient is settling toward a limiting slope —
the instantaneous rate at `x = 2`.

**F5.**
- a) Ratios: `75/50 = 1.5`; `112.5/75 = 1.5`; `168.75/112.5 = 1.5`.
  Constant ratio → exponential family.
- b) Exponential: `D(t) = 50 · 1.5^t` (checks: `50·1.5 = 75`,
  `50·2.25 = 112.5`, `50·3.375 = 168.75` ✓).
  Linear through `(0, 50)`, `(3, 168.75)`:
  slope `= (168.75 − 50)/3 = 118.75/3 ≈ 39.5833` →
  `L(t) = 50 + 39.5833t`.
- c) Residuals (actual − predicted):

  | t | actual | exp. pred. | exp. resid. | lin. pred. | lin. resid. |
  |---|--------|-----------|-------------|-----------|-------------|
  | 0 | 50 | 50 | 0 | 50 | 0 |
  | 1 | 75 | 75 | 0 | 89.5833 | −14.5833 |
  | 2 | 112.5 | 112.5 | 0 | 129.1667 | −16.6667 |
  | 3 | 168.75 | 168.75 | 0 | 168.75 | 0 |

- d) The data's consecutive differences are `25, 37.5, 56.25` —
  growing, not constant — matching the exponential model (whose
  differences are the same) and contradicting the linear model
  (constant difference `39.5833`). Defense: the exponential model
  fits exactly (all residuals 0) while the linear model misses the
  middle points by up to ~17 downloads; the growing differences
  confirm accelerating growth, so the exponential model wins.

**F6.** `f(−2) = (−2)² = 4`; `f(0) = 3·0 − 1 = −1`;
`f(3) = 3·3 − 1 = 8`. At `x = 0`: left-hand limit → `0`,
`f(0) = −1` → jump discontinuity. Domain: all reals. Range: first
branch `(0, ∞)`, second `[−1, ∞)` → union `[−1, ∞)`.

**F7.** `−3x² + 12x − 5 = −3(x² − 4x) − 5 = −3(x − 2)² + 12 − 5`
`= −3(x − 2)² + 7`. Maximum value `7` at `x = 2`. The vertex form
displays the maximum `(2, 7)` directly, while the standard form
would require the vertex formula first.

---

## Week 4 Quiz solutions

**Q1.** Domain: `x ≠ ±2`. Vertical asymptotes: `x = 2`, `x = −2`.
Horizontal asymptote: `y = 0` (numerator degree 1 < denominator
degree 2). x-intercept: `(3, 0)`. y-intercept: `f(0) = (−3)/(−4) =
3/4` → `(0, 3/4)`.

**Q2.** Zeros: `4 − x² = 0` → `x = ±2`. Vertex `(0, 4)` (parabola
opening downward → global maximum). Increasing on `(−∞, 0)`;
decreasing on `(0, ∞)`. Range `(−∞, 4]`. Even: `g(−x) = 4 − (−x)²
= 4 − x² = g(x)` ✓. End behavior: `x → ±∞` ⇒ `g → −∞`.

**Q3.** Mara is right. Evenness is defined by `h(−x) = h(x)` for all
`x` in the domain — and `1/(−x)² = 1/x²` holds everywhere
`h` is defined. Jalen confuses *continuity* with *symmetry*: the
break at `x = 0` means `h` is not continuous there, but the domain
`(–∞, 0) ∪ (0, ∞)` is symmetric about 0 and the values mirror
perfectly, so the graph is symmetric about the y-axis. A function
can be even and discontinuous.

**Q4.** `2x² + 12x + 7 = 2(x² + 6x) + 7 = 2(x + 3)² − 18 + 7`
`= 2(x + 3)² − 11`. Minimum value `−11` at `x = −3`. Use the
standard form for the y-intercept — its constant term `7` is the
y-intercept with no work.

**Q5.** `(f∘g)(x) = √(x² − 4)`; domain `x² − 4 ≥ 0` →
`(−∞, −2] ∪ [2, ∞)`. `(f∘g)(3) = √(9 − 4) = √5`.

**Q6.**
a) On `x ≥ −1` the parabola `x² + 2x = (x + 1)² − 1` is strictly
   increasing (right of its vertex at `x = −1`), so it passes the
   horizontal line test and is invertible.
b) `y = x² + 2x` → `x = y² + 2y` → `y² + 2y − x = 0` →
   `y = [−2 ± √(4 + 4x)]/2 = −1 ± √(x + 1)`. Range of `f` is
   `[−1, ∞)` → domain of `f⁻¹` is `x ≥ −1`; with `f`'s domain
   `y ≥ −1`, choose the plus sign: `f⁻¹(x) = −1 + √(x + 1)`,
   `x ≥ −1`.

**Q7.** `[3(x + h)² + 2(x + h) − 3x² − 2x]/h`
`= [3x² + 6xh + 3h² + 2x + 2h − 3x² − 2x]/h`
`= (6xh + 3h² + 2h)/h = 6x + 3h + 2`.

**Q8.** `s(0) = 1.5`; `s(2) = −4.9(4) + 40 + 1.5 = −19.6 + 41.5 =
21.9`. ARoC `= (21.9 − 1.5)/2 = 20.4/2 = 10.2` m/s. The ball's
average upward velocity over the first 2 seconds is 10.2 meters
per second.

**Q9.** Domain `[0, 200]` shirts; range `[25, 375]` dollars
(`C(0) = 25`, `C(200) = 25 + 350 = 375`). `C(n) = 0` →
`25 + 1.75n = 0` → `n = −25/1.75 ≈ −14.29` — outside the realistic
domain, so the model has no zero in its domain: you cannot order a
negative number of shirts, and the $25 base fee means the cost is
always positive.

**Q10.** Inner `g(x) = 5x + 2`, outer `f(u) = u⁴`:
`f(g(x)) = (5x + 2)⁴ = m(x)` ✓.

---

## Unit Assessment solutions

**Task 1.** `f(x) = (x − 3)²(x + 3)`.
- a) Zeros: `x = 3` (multiplicity 2 — the graph touches the
  x-axis), `x = −3` (multiplicity 1 — crosses). y-intercept:
  `f(0) = 9 · 3 = 27` → `(0, 27)`.
- b) Domain all reals; range all reals (odd-degree polynomial).
  End behavior: `x → −∞` ⇒ `f → −∞`; `x → +∞` ⇒ `f → +∞`.
- c) `f′(x) = 2(x − 3)(x + 3) + (x − 3)² = (x − 3)[2(x + 3) + (x − 3)]`
  `= (x − 3)(3x + 3) = 3(x − 3)(x + 1)`. Critical points
  `x = 3, −1`. Sign: positive on `(−∞, −1)`, negative on
  `(−1, 3)`, positive on `(3, ∞)` → increasing, decreasing,
  increasing. Local max: `f(−1) = 16 · 2 = 32` at `(−1, 32)`;
  local min: `f(3) = 0` at `(3, 0)`.
- d) `f(−x) = (x + 3)²(3 − x)` ≠ `±f(x)` → neither even nor odd.
  No asymptotes (polynomial).

**Task 2.** `g(x) = 4 · (1/2)^x − 2`.
- a) Domain all reals. Range: `4·(1/2)^x > 0`, so `g(x) > −2` →
  `(−2, ∞)`. x-intercept: `4(1/2)^x = 2` → `(1/2)^x = 1/2` →
  `x = 1` → `(1, 0)`. y-intercept: `g(0) = 4 − 2 = 2` → `(0, 2)`.
- b) Horizontal asymptote `y = −2`. As `x → −∞`,
  `(1/2)^x = 2^(−x) → ∞`, so `g → ∞`; as `x → +∞`, `g → −2`.
- c) Strictly decreasing everywhere (base `1/2 < 1`). No extrema:
  a strictly decreasing function never turns, and it is bounded
  below only by its horizontal asymptote, which it never reaches.

**Task 3.**
- a) `C(t) = c(r(t)) = 0.02(1200t) + 5 = 24t + 5` grams.
  Units: `(g/L) · L = g` ✓.
- b) Composite: `C(3) = 24·3 + 5 = 77` g. Stage-by-stage:
  `r(3) = 3600` L; `c(3600) = 0.02·3600 + 5 = 72 + 5 = 77` g ✓.
- c) `c = 0.02L + 5` → `L = (c − 5)/0.02 = 50c − 250`, domain
  `c ≥ 5` (range of `c`). Interpretation: `50c − 250` is the
  liters of water that correspond to `c` grams of chemical dosed.

**Task 4.**
- a) Inner `g(x) = 4x² − 7`, outer `f(u) = ∛u`:
  `f(g(x)) = ∛(4x² − 7) = d(x)` ✓.
- b) `y = (x − 2)² + 1` → `x = (y − 2)² + 1` →
  `(y − 2)² = x − 1` → `y = 2 ± √(x − 1)`. Range of `f` is
  `[1, ∞)` → domain of `f⁻¹` is `x ≥ 1`; with `f`'s domain
  `y ≥ 2`, choose the plus sign: `f⁻¹(x) = 2 + √(x − 1)`,
  `x ≥ 1`. (Check: `f(2) = 1`, `f⁻¹(1) = 2` ✓.)

**Task 5.**
- a) Independent: `m`, months since the library opened (months).
  Dependent: `C`, total checkouts that month (checkouts).
  Realistic domain: `m ≥ 0` (accept `0 ≤ m ≤ 5` for the data's
  span, or `m ≥ 0` with the note that extrapolation is the
  model's risk).
- b) Exponential: consecutive ratios `58/40 = 1.45`,
  `84/58 ≈ 1.4483`, `121/84 ≈ 1.4405`, `175/121 ≈ 1.4463`,
  `253/175 ≈ 1.4457` — nearly constant at `≈ 1.445`, so
  `C(m) = 40 · 1.445^m`. (Check: `40·1.445 = 57.8 ≈ 58`;
  `1.445² = 2.088025`, `1.445³ ≈ 3.017196`, `1.445⁴ ≈ 4.359848`,
  `1.445⁵ ≈ 6.299981`.)
  Linear through `(0, 40)` and `(5, 253)`:
  slope `= (253 − 40)/5 = 213/5 = 42.6` → `L(m) = 40 + 42.6m`.
- c) Residuals (actual − predicted):

  | m | actual | exp. pred. | exp. resid. | lin. pred. | lin. resid. |
  |---|--------|-----------|-------------|-----------|-------------|
  | 0 | 40 | 40.00 | 0.00 | 40.0 | 0.0 |
  | 1 | 58 | 57.80 | +0.20 | 82.6 | −24.6 |
  | 2 | 84 | 83.52 | +0.48 | 125.2 | −41.2 |
  | 3 | 121 | 120.69 | +0.31 | 167.8 | −46.8 |
  | 4 | 175 | 174.39 | +0.61 | 210.4 | −35.4 |
  | 5 | 253 | 252.00 | +1.00 | 253.0 | 0.0 |

- d) The data's consecutive differences are `18, 26, 37, 54, 78`
  — clearly growing, not constant — which matches the
  exponential model (its predicted differences grow the same way)
  and contradicts the linear model (constant difference `42.6`).
  Defense: the exponential model wins — its residuals are all
  under about 1 checkout while the linear model's residuals reach
  −46.8, and the accelerating differences confirm compounding
  growth rather than steady growth. Limitation: unchecked
  exponential growth is unrealistic forever — the library's
  checkouts must eventually saturate (room, hours, population),
  so beyond the data's span a saturating family would be needed.

**Task 6.**
- a) `f(2) = 5 − 2 = 3`; `f(4) = 16 − 3 = 13`. At `x = 2`:
  left-hand value `3`, right-hand limit → `4 − 3 = 1` ≠ `3` →
  not continuous (jump).
- b) `q(4) = 16 − 20 = −4`;
  `q(4 + h) = (4 + h)² − 5(4 + h) = 16 + 8h + h² − 20 − 5h`
  `= h² + 3h − 4`. Difference: `(h² + 3h − 4 − (−4))/h`
  `= (h² + 3h)/h = h + 3`. As `h → 0`, approaches `3`.

---

## Project scoring guidance

The project is scored from the rubric in `project.md` (40 points).
What follows is a **worked sample** — one acceptable adult-side
reference using Dataset B — plus guidance on what counts as passing
work.

### Worked sample: Dataset B (robotics club fundraiser, fictional)

**Setup.** Quantities: `w` = weeks since campaign start (weeks),
`R` = cumulative dollars raised ($). Realistic domain `w ≥ 0`
(whole weeks in practice); the model should refuse negative `w`
(the formula would predict positive dollars before the campaign
existed).

**Pattern reading.** First differences: `7, 11, 15, 19, 23`.
Second differences: `4, 4, 4, 4` — constant → quadratic pattern.
Consecutive ratios (`9/2 = 4.5`, `20/9 ≈ 2.22`, …) are not constant
→ not exponential.

**Competing families.** (1) Quadratic: assumes fundraising
*accelerates* — each week adds a fixed 4 dollars more than the
previous week. (2) Linear: assumes a steady weekly take.

**Fits.** Quadratic via second differences: general form
`R(w) = aw² + bw + c`; `c = R(0) = 2`; second difference `2a = 4`
→ `a = 2`; first difference at `w = 0` is `a + b = 7` → `b = 5`.
So `R(w) = 2w² + 5w + 2`. Check: `w = 3` → `18 + 15 + 2 = 35` ✓;
`w = 5` → `50 + 25 + 2 = 77` ✓ — exact on all six points.
Linear through `(0, 2)` and `(5, 77)`: slope `= 75/5 = 15` →
`L(w) = 15w + 2`.

**Residual table (actual − predicted).**

| w | actual | quad. pred. | quad. resid. | lin. pred. | lin. resid. |
|---|--------|------------|-------------|-----------|-------------|
| 0 | 2 | 2 | 0 | 2 | 0 |
| 1 | 9 | 9 | 0 | 17 | −8 |
| 2 | 20 | 20 | 0 | 32 | −12 |
| 3 | 35 | 35 | 0 | 47 | −12 |
| 4 | 54 | 54 | 0 | 62 | −8 |
| 5 | 77 | 77 | 0 | 77 | 0 |

Largest residuals: quadratic 0; linear −12 (at `w = 2, 3`).

**Rate-of-change comparison.** The data's weekly gains grow
`7 → 23`; the quadratic's predicted gains grow the same way
(constant second difference 4); the linear model predicts a flat
gain of 15 every week, which the data contradicts.

**What a passing defense argues.** "I choose the quadratic model
`R(w) = 2w² + 5w + 2` ($, `w` in weeks). Its residuals are all 0
while the linear model's residuals reach −12, meaning the linear
model overpredicts the middle weeks by up to $12. The
rate-of-change evidence agrees: the data's weekly gains increase
by a steady 4 each week, which a quadratic reproduces exactly and
a line cannot. The model must refuse negative `w` (it would claim
$2 raised before the campaign started — the intercept is an
artifact of the fit, not a real week-0 measurement). One honest
limitation: real fundraising cannot accelerate forever — donor
fatigue means the growth must eventually slow, so past the data's
span a saturating model would be needed."

### Scoring guidance

- **Full credit on a criterion** requires the mathematics to be
  right *and* the reasoning written: a correct formula with no
  parameter work shown caps at Proficient.
- **The defense is the heart of the project.** A learner who fits
  both models correctly but defends by preference ("the quadratic
  looks better") rather than evidence scores Developing at best
  on that criterion.
- **Honest limitations earn credit.** "My model breaks down when…"
  with a mathematical reason is Exemplary-level thinking even if
  the limitation is simple (domain edge, saturation, the
  intercept artifact).
- **Common errors to watch:** residuals computed as
  `predicted − actual` (sign flip — Developing if consistent,
  Beginning if mixed); units dropped from the fitted formulas
  (Developing on the fit criterion); choosing the linear model on
  Dataset B or C and defending it anyway (the defense must follow
  the evidence — a well-argued wrong choice still fails the
  residual criterion but can earn partial defense credit if it
  engages the numbers honestly).
- **Revision trigger:** any criterion at Beginning, or a total
  below 26, means the learner revisits Lessons 01, 04, and 06
  with the adult before the unit assessment.

### Notes on the other two datasets (for the adult)

- **Dataset A (cooling cocoa):** the winning family is exponential
  decay toward the 70 °F room temperature:
  `T(t) = 70 + 80 · 0.75^(t/5)` (°F, `t` in minutes) — exact on
  all five points (residuals 0). The linear competitor through
  `(0, 150)` and `(20, 95.3125)` is `L(t) = 150 − 2.734375t`,
  with residuals `0, −6.328125, −7.65625, −5.234375, 0`
  (actual − predicted). The data's consecutive differences
  `−20, −15, −11.25, −8.4375` shrink in magnitude — matching
  exponential decay, contradicting constant linear change. Watch
  for learners who fit the exponential without subtracting the
  70 °F floor first (ratios of raw temperatures are not constant:
  `130/150 ≈ 0.867`, `115/130 ≈ 0.885`); the subtraction step is
  part of Proficient-level work.
- **Dataset C (library sign-ups):** the winning family is
  quadratic (concave down): `S(w) = −1.5w² + 21.5w + 10`
  (sign-ups, `w` in weeks) — exact on all five points. The linear
  competitor through `(1, 30)` and `(5, 80)` is
  `L(w) = 12.5w + 17.5`, residuals (actual − predicted)
  `0, +4.5, +6, +4.5, 0`. The data's differences `17, 14, 11, 8`
  decrease by a steady 3 — the signature of a negative leading
  coefficient. A strong limitation note: the quadratic eventually
  turns downward and predicts negative sign-ups, so its realistic
  domain must stop before the vertex.

---

## Reconciliation notes (run 2026-10-15)

- Lesson 02's key was missing from the drafting agent's delivery (Part A
  covered Lesson 01 only); it was authored in this run as Part A2 with
  every computation verified by script (sympy) before assembly.
- The drafting agent for Lessons 03–04 concatenated both lessons into one
  file; the file was split at the `# Lesson 04` heading into
  `lesson-03-composition-decomposition-inverses.md` and
  `lesson-04-average-rate-of-change.md` with no content changes.
- Lesson 06's Ferris-wheel activity originally described markings (dashed
  lines, labeled positions) as if present in the image; the generated
  image is intentionally text-free, so the activity was corrected to have
  the learner mark a printed copy, with all numbers in the text-only
  alternative. The wheel's numbers are consistent everywhere: diameter
  30 m, period 40 s, boarding height 2 m, midline 17 m, maximum 32 m,
  model `h(t) = 17 − 15·cos(πt/20)`.
- All lesson "Answer-key reference" lines were normalized to point at
  this file (`../answer-key.md`).
