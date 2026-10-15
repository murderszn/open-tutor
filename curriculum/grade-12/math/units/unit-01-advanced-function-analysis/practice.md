# Practice Sets — Unit 01: Advanced Function Analysis and Mathematical Modeling

Student practice for Sessions S2, S4, S7, S9, S12, and S17. Work in
the notebook; the adult scores same-day. All solutions are in the
adult-only answer key (`../answer-key.md`, kept outside the learner
materials) — never beside the problems.

**How to use these sets:** each set targets its lesson, but every set
ends with two *retrieval* items from earlier lessons — spaced review
is part of the plan, not extra credit. Set F (S17) is a full
mixed-retrieval sweep across the unit before the review session.

---

## Practice Set A — the function analysis toolkit (S2)

A1. For `f(x) = −x² + 4x − 3`, give the complete analysis: domain,
   range, x- and y-intercepts, intervals of increase and decrease,
   local extrema, end behavior, and symmetry (even/odd/neither, with
   algebra). Then sketch from the analysis and check with Desmos.

A2. For `g(x) = (x + 1)/(x − 2)`: state the domain, the vertical and
   horizontal asymptotes, the intercepts, and the sign of `g` on
   each interval of its domain (test one point per interval). Show
   that `g` is strictly decreasing on each interval of its domain.

A3. For `h(x) = 2^(x−1) − 1`: state the domain, range, intercepts,
   the horizontal asymptote, and where `h` increases or decreases.
   Explain in one sentence why `h` has no extrema.

A4. State the end behavior of each function as `x → −∞` and
   `x → +∞`, and classify each as even, odd, or neither (algebra
   shown):
   a) `p(x) = 3x⁴ − 2x² + 7`  b) `q(x) = 4/(x² + 1)`  c) `r(x) = −2x³ + x`

A5. A water tank holds `T(w) = 500 − 25w` gallons after `w` weeks of
   steady use.
   a) State the realistic domain and range with units.
   b) Find the intercepts and interpret each in a sentence.
   c) Compute `T(8)` and interpret it; give the average rate of
      change of `T` on its whole domain and say what it means.

A6. (Retrieval — diagnostic) Solve `log₂(x) + log₂(x − 2) = 3`.
   Show the domain restriction first, then verify your solution.

A7. (Retrieval — diagnostic) From `f(x) = x²` to
   `g(x) = −2(x + 3)² + 5`: describe the transformations in order
   and track the vertex `(0, 0)` through the chain.

---

## Practice Set B — equivalent forms and structure (S4)

B1. Write `f(x) = x² − 6x + 11` in vertex form. Give the vertex, the
   minimum value, and where it occurs. Show why the standard form
   tells you the y-intercept instantly while the vertex form does
   not — and why the vertex form answers "where is the minimum?"
   instantly while the standard form does not.

B2. Simplify `g(x) = (2x² + 8x + 6)/(x + 3)` as far as possible.
   State the domain, the location and type of any hole, and the
   resulting function's graph. Explain what the *original* form
   reveals that the simplified form hides.

B3. Write `h(x) = x³ − 4x` in factored form. Use the factored form
   to list the zeros and build a sign chart; use the expanded form
   to state the y-intercept and end behavior. Classify the symmetry.

B4. Write `k(x) = 5 · 2^x` in an equivalent form that reveals the
   growth factor over each 3-unit interval, and prove the two forms
   are equal. Then show that `k(x + 3) = 8 · k(x)`.

B5. Rewrite `m(x) = (x² − 9)/(x² − 4)` as `1` plus a single proper
   fraction (polynomial division). Use the new form to read off the
   horizontal asymptote; then state the domain, zeros, vertical
   asymptotes, and the y-intercept.

B6. (Retrieval — Lesson 01) For `n(x) = −3/(x − 1) + 2`, state the
   domain, range, and both asymptotes.

B7. (Retrieval — Lesson 01) A cup of coffee cools by
   `T(t) = 70 · (0.94)^t + 40` (°F, `t` minutes after pouring).
   State the realistic domain, the y-intercept with its meaning,
   and the value `T(t)` approaches as `t → ∞` — with the physical
   meaning of that limit.

---

## Practice Set C — composition, decomposition, inverses (S7)

C1. For `f(x) = x² + 1` and `g(x) = 3x − 2`: write `(f∘g)(x)` and
   `(g∘f)(x)` in expanded form, evaluate both at `x = 1`, and write
   two sentences explaining why the results differ.

C2. A truck burns fuel at `F(m) = m/25` gallons per `m` miles driven
   (25 miles per gallon), and drives `r(t) = 40t` miles in `t` hours.
   a) Write fuel used as a function of hours, `G(t)`.
   b) Show the units cancel correctly through the composition.
   c) Compute the fuel used on a 5-hour trip two ways — by the
      composite and stage-by-stage — and confirm they agree.

C3. Decompose `h(x) = (2x − 5)³ + 7` into an inner and an outer
   function, and verify by recomposing. Then give a *different*
   valid decomposition and prove it chains correctly.

C4. Find the inverse of `f(x) = (3x − 7)/2` by swap-and-solve, and
   verify with *both* compositions.

C5. The function `f(x) = x² − 6x + 8` is restricted to the domain
   `x ≤ 3`.
   a) Complete the square to find the vertex, and explain why the
      restriction makes `f` invertible.
   b) Find `f⁻¹` by swap-and-solve, choosing the correct square-root
      sign; state the domain of `f⁻¹`.
   c) Verify your inverse with one composition.

C6. (Retrieval — Lesson 02) Write `f(x) = −2x² + 8x + 6` in vertex
   form, give the vertex and maximum, and say which question each
   form answers best.

C7. (Retrieval — Lesson 01) For `r(x) = x/(x² − 9)`: give the domain,
   zeros, asymptotes, and symmetry, then show `r` is strictly
   decreasing on each interval of its domain and give the sign of
   `r` on each interval (one test point each).

---

## Practice Set D — average rate of change and the difference quotient (S9)

D1. Compute the average rate of change of `f(x) = x³ − 2x` on the
   interval `[−1, 2]`, and interpret it in one sentence (units of
   "output units per input unit").

D2. Simplify the difference quotient `[f(x + h) − f(x)]/h` fully for
   `f(x) = 4x² − x`. Then evaluate your simplified form at `x = 2`,
   `h = 0.1`, and say what value it approaches as `h` gets very
   small.

D3. A dropped stone falls `s(t) = 16t²` feet in `t` seconds.
   a) Find the average rate of change on `[1, 3]` with units.
   b) Simplify the difference quotient at `t = 1` and read off the
      instantaneous rate as `h → 0`.
   c) Explain in one sentence why the two numbers differ.

D4. Give an example of a non-constant function whose average rate of
   change over `[0, 2]` is exactly 0. Compute the rate, verify it is
   0, and explain in one sentence how the function can move while
   its average rate is 0.

D5. A town's rabbit population is modeled by `P(t) = 500 · (1.08)^t`
   (rabbits, `t` years after 2026).
   a) Compute the average rate of change on `[0, 5]` (nearest tenth)
      with units.
   b) Compute the average rate of change on `[5, 10]` (nearest tenth)
      with units.
   c) Explain why the two rates differ, using the word
      *exponential* correctly.

D6. (Retrieval — Lesson 03) Find the inverse of `g(x) = 2x³ + 1` by
   swap-and-solve and verify with one composition.

D7. (Retrieval — Lesson 02) Factor `p(x) = x³ + x² − 4x − 4`
   completely, list the zeros, and say which form (factored or
   expanded) reveals the zeros and which reveals the y-intercept.

---
## Practice Set E — piecewise and rational rigor (S12)

E1. For `f(x) = { 2x + 1,  x < 1;  x²,  1 ≤ x < 3;  4,  x ≥ 3 }`:
   a) Evaluate `f(0)`, `f(1)`, `f(2)`, `f(3)`, `f(5)`.
   b) State the domain and range.
   c) Decide whether `f` is continuous at `x = 1` and at `x = 3`,
      with left-hand and right-hand evidence.
   d) Give the intervals where `f` increases, decreases, or is
      constant.

E2. Analyze `g(x) = (x² + 3x)/(x² − x − 6)` with full rigor: factor
   both parts, state the domain, locate every zero and every
   vertical asymptote, decide whether any hole exists (and if so,
   where), give the horizontal asymptote, and evaluate the
   y-intercept.

E3. Solve `(x − 1)/(x + 4) ≥ 0` with a sign chart: list the critical
   numbers, test one point in each interval, and write the solution
   as a union of intervals. Check one point inside and one point
   outside your solution set.

E4. Write `h(x) = 3/(x − 2) + 1` as a single rational function.
   Give the domain, both asymptotes, and the intercepts. Then
   explain which of the two forms (shifted-reciprocal or
   single-fraction) reveals the asymptotes more directly, and
   which reveals the zero more directly.

E5. A shipper charges `C(w) = { 6,  0 < w ≤ 2;  6 + 1.5(w − 2),  2 < w ≤ 10;  18 + 3(w − 10),  w > 10 }`
   dollars for a package weighing `w` pounds.
   a) Compute `C(2)`, `C(5)`, and `C(12)`.
   b) Check whether `C` is continuous at `w = 2` and at `w = 10`.
   c) State the realistic domain and explain why the domain starts
      where it does.

E6. (Retrieval — Lesson 04) Compute the average rate of change of
   `f(x) = 2^x` on `[0, 3]` (nearest hundredth) and interpret it.

E7. (Retrieval — Lesson 03) Decompose `k(x) = √(3x² + 2)` into an
   inner and an outer function, and verify by recomposing in one
   line.

---

## Practice Set F — mixed retrieval sweep (S17)

F1. Full analysis of `f(x) = x⁴ − 5x² + 4`: factor completely, list
   the zeros, state the symmetry, intercepts, end behavior, the
   critical points and what they give (local max/min values), the
   intervals of increase and decrease, and the range.

F2. Build the rational function with a vertical asymptote at `x = 4`,
   horizontal asymptote `y = 0`, x-intercept `1`, and y-intercept
   `−1/4`. (Hint: a squared denominator keeps the horizontal
   asymptote at 0.) Verify all four features, then rewrite your
   function as a sum of two simpler fractions and explain what that
   form reveals about the behavior near `x = 4`.

F3. Let `f(x) = ln x` and `g(x) = x² + 1`.
   a) Write `(g∘f)(x)` with its domain, and evaluate `(g∘f)(e)`.
   b) Find the inverse of `p(x) = ln x + 1` by swap-and-solve, state
      its domain and range, and verify with one composition.

F4. Simplify the difference quotient for `r(x) = 1/x`. Evaluate it
   at `x = 2`, `h = 0.1` (nearest ten-thousandth), and compare with
   `−1/x²` at `x = 2`. Explain in one sentence what the closeness
   suggests.

F5. **Mini-model (fictional data).** A startup tracks app downloads
   by week since launch, `t` weeks, `D` downloads — values are
   fictional practice data:

   | t | 0 | 1 | 2 | 3 |
   |---|----|----|-----|------|
   | D | 50 | 75 | 112.5 | 168.75 |

   a) Compute the ratios of consecutive downloads. What family does
      this suggest?
   b) Write an exponential model `D(t)` through the points and a
      linear model through the first and last points.
   c) Make a residual table (actual − predicted) for both models.
   d) Compare the rate-of-change behavior of the data with each
      model's, and write two sentences defending your choice.

F6. (Retrieval — Lesson 05) For `f(x) = { x²,  x < 0;  3x − 1,  x ≥ 0 }`:
   evaluate `f(−2)`, `f(0)`, `f(3)`; decide continuity at `x = 0`;
   state the domain and range.

F7. (Retrieval — Lesson 02) To find the maximum of
   `A(x) = −3x² + 12x − 5`, rewrite it by completing the square.
   Give the maximum value and where it occurs, and explain in one
   sentence why the vertex form — not the standard form — answers
   the question directly.
