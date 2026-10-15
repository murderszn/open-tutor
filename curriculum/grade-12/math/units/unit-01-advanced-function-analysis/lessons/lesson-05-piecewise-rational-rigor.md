# Lesson 05 — Piecewise and Rational Functions with Precalculus Rigor

**Student goal:** I can analyze piecewise and rational functions feature by
feature — domain, seams, holes vs. asymptotes, sign, and end behavior —
sketch them by hand from that analysis, and build a model with written
constraints that tell me which solutions are viable.
**Time:** ~50 minutes · **Unit:** [U01 — Advanced function analysis and
mathematical modeling](../README.md) · **Session S11 (Week 5)**

Standards addressed (paraphrased): graph piecewise-defined and rational
functions showing key features (F-IF.7.b, 7.d); create equations in two
variables to model relationships, graphing with labels and scales (A-CED.2);
write constraints as equations or inequalities and interpret which solutions
are viable in context (A-CED.3).

## Materials

- Graph paper and a straightedge
- Calculator (for arithmetic checks, not for drawing the graph for you)
- Desmos graphing calculator (free, no account) — for *verification after*
  hand-sketching

## Readiness check (5 minutes)

Factor these and name the zeros: (a) x² − 9; (b) x² − 2x − 3; (c) x² + 2x + 5
over the reals. (Expected: (a) (x−3)(x+3), zeros ±3; (b) (x−3)(x+1), zeros
3 and −1; (c) does not factor over the reals — discriminant 4 − 20 = −16.)
If factoring is not fluent, spend the session's extension time on it rather
than skipping the analysis below.

## Teaching

### Piecewise functions: each rule gets its own territory

A **piecewise-defined function** is one rule built out of several smaller
rules, each one governing a different piece of the number line. The input
value decides which rule fires. The interesting questions always happen at
the **seams** — the x-values where one rule hands off to the next.

To evaluate at a seam, check which rule's territory includes that exact
value. (A common trap: using the rule that *approaches* the seam but doesn't
include it.) Then ask the continuity question in plain language: **do the
two pieces join?** Compute what the left rule says at the seam and what the
right rule says at the seam. If they agree, the graph joins there; if they
disagree, the graph jumps. No limits needed — just compare two numbers.

### Rational functions: factor first, then interrogate

A **rational function** is a ratio of two polynomials, P(x)/Q(x), with Q not
the zero polynomial. The single most important move: **factor both, then
cancel only what is common**. The factored form tells you everything.

- **Domain:** every x except where the *original* denominator is zero.
  Canceling a factor never puts an x-value back into the domain.
- **Hole (removable discontinuity):** an x-value that zeroes a factor
  present in *both* numerator and denominator. The graph has a single missing
  point there. Find its y-coordinate by simplifying first, then plugging the
  x-value into the *simplified* form.
- **Vertical asymptote:** an x-value that zeroes the denominator *after*
  simplification. Near it, the function's values blow up in magnitude.
- **Sign chart:** mark zeros and vertical asymptotes (and holes) on a number
  line, test one point per interval, and record + or −. This tells you which
  side of the x-axis the graph lives on between features.
- **End behavior:** what happens as x → ±∞. Divide the polynomials. If the
  degrees are equal, the **horizontal asymptote** is the ratio of leading
  coefficients. If the numerator's degree is exactly one more, polynomial
  division gives a line plus a remainder that vanishes — a **slant
  asymptote**. (Numerator degree lower: horizontal asymptote y = 0.)
- **Intercepts and graph:** x-intercepts come from zeros of the simplified
  numerator; the y-intercept comes from the original form at x = 0 (if 0 is
  in the domain). Sketch the asymptotes as dashed lines, plot the intercepts
  and the hole, respect the sign chart, then draw — and verify with Desmos
  afterward, not before.

### Models with constraints: the math must respect the situation

When a model describes something real, equations alone are not enough. A
**constraint** — written as an equation or inequality — states what the
situation allows (nonnegative counts, a capacity limit, whole people). A
solution is **viable** only if it satisfies both the equation and every
constraint; otherwise it is nonviable and must be rejected, however tidy the
algebra looks.

## Worked example 1 — piecewise evaluation and the seam question

Consider

$$f(x) = \begin{cases} 2x - 1, & x < 1 \\ 5 - x, & x \ge 1 \end{cases}$$

Evaluate at x = −2, x = 1, x = 3.

**Reasoning:** the input decides the rule. −2 < 1, so the first rule fires:
f(−2) = 2(−2) − 1 = −4 − 1 = **−5**. The seam x = 1 belongs to the second
rule (x ≥ 1), so f(1) = 5 − 1 = **4** — not 2(1) − 1. For x = 3, the second
rule fires: f(3) = 5 − 3 = **2**.

Do the pieces join at x = 1? Compare what each rule *says* at the seam.
Left rule: 2(1) − 1 = 1. Right rule: 5 − 1 = 4. Since 1 ≠ 4, the graph
**jumps** at x = 1 — an open circle at (1, 1) on the left piece, a filled
dot at (1, 4) on the right piece. Intuitive continuity fails here: the
pieces do not join.

## Worked example 2 — a rational function, fully analyzed

$$r(x) = \frac{x^2 - 9}{x^2 - 2x - 3}$$

**Step 1 — factor and simplify.**
Numerator: (x − 3)(x + 3). Denominator: (x − 3)(x + 1). So

$$r(x) = \frac{(x-3)(x+3)}{(x-3)(x+1)} = \frac{x+3}{x+1}, \qquad x \ne 3$$

**Step 2 — domain and features.**
The original denominator is zero at x = 3 and x = −1, so the domain is all
reals except 3 and −1. The factor (x − 3) is common to both, so x = 3 is a
**hole**; x = −1 zeroes the simplified denominator, so x = −1 is a
**vertical asymptote**.

**Step 3 — locate the hole.**
Plug x = 3 into the *simplified* form: (3 + 3)/(3 + 1) = 6/4 = 3/2. The
hole is the single missing point (3, 3/2).

**Step 4 — end behavior.**
Degrees are equal (2 and 2), so there is a horizontal asymptote at the ratio
of leading coefficients: **y = 1**. Equivalently, polynomial division gives
1 + (2x − 6)/(x² − 2x − 3), and the fraction vanishes as |x| → ∞.

**Step 5 — intercepts and sign chart.**
x-intercept: simplified numerator zero at x = −3 → (−3, 0).
y-intercept: r(0) = (−9)/(−3) = 3 → (0, 3).
Sign chart on (x+3)/(x+1): positive on (−∞, −3), negative on (−3, −1),
positive on (−1, 3) and (3, ∞). Near x = −1, both sides go to +∞ (same sign
on both sides — allowed; the chart told us so).

**Step 6 — sketch and verify.**
Dashed lines x = −1 and y = 1; points (−3, 0), (0, 3), hole at (3, 1.5).
The graph crosses at (−3, 0), climbs through (0, 3), shoots to +∞ left of
the asymptote, descends from +∞ right of it, and levels toward y = 1 —
passing the hole at (3, 1.5). *Then* check in Desmos.

## Worked example 3 — end behavior by division (slant asymptote)

$$s(x) = \frac{x^2 + 2x + 5}{x + 1}$$

Numerator degree exceeds denominator degree by one, so divide:
x² + 2x + 5 = (x + 1)(x + 1) + 4. Check: (x+1)(x+1) = x² + 2x + 1, plus 4
gives x² + 2x + 5. ✓. So

$$s(x) = x + 1 + \frac{4}{x+1}$$

As |x| → ∞, the fraction 4/(x+1) → 0, so the graph approaches the **slant
asymptote y = x + 1**. Vertical asymptote x = −1; y-intercept s(0) = 5.
The division made the hidden line visible.

## Guided practice (hints allowed)

1. Let $h(x) = \begin{cases} x^2, & x \le 0 \\ 3x + 1, & x > 0 \end{cases}$.
   Compute h(−2), h(0), h(1). Do the pieces join at x = 0? Justify with the
   two seam values.
   *Hint: which rule owns the exact value 0? Compare the rules' values
   there.*
2. Simplify $p(x) = \dfrac{x^2 - 4}{x + 2}$ and state its domain. Is there a
   hole or a vertical asymptote? Give coordinates or equations.
   *Hint: factor the top first; a canceled factor means a missing point,
   not an asymptote.*
3. **Error analysis.** A classmate looks at
   $f(x) = \dfrac{x^2 - 1}{x - 1}$ and says, "x = 1 is a vertical asymptote
   because the denominator is zero there." Is the claim correct? What is
   actually at x = 1, and how do you know?
   *Hint: factor the numerator before deciding.*
4. Hand-sketch $q(x) = \dfrac{2x + 6}{x - 2}$ from a complete feature list:
   domain, vertical and horizontal asymptotes, intercepts, a sign chart, and
   one-sided behavior at the asymptote. Verify with Desmos only after the
   sketch is finished.
   *Hint: start with the two dashed asymptote lines; the sign chart tells
   you which region each curve branch occupies.*
5. **Explain your reasoning.** Why can the graph of a rational function
   never cross its own vertical asymptote? Write 2–3 sentences connecting
   the answer to the domain.
   *Hint: what would the coordinates of a crossing point have to be?*
6. A print shop's pricing is piecewise: \$2 per flyer for the first 100
   flyers, then \$1.50 for each additional flyer. Write C(n), the cost in
   dollars for n flyers (n ≥ 0, whole number), as a piecewise function.
   Compute C(80), C(120), and C(250). Is C continuous at n = 100 — do the
   two prices join there?
   *Hint: the second piece must start from the cost already accumulated at
   100 flyers, not from zero.*

## Independent practice

1. Fully analyze $m(x) = \dfrac{x^2 + x - 6}{x^2 - 4}$: factor, domain,
   hole (with coordinates), vertical asymptote(s), horizontal asymptote,
   intercepts, and a sign chart. Sketch and verify with Desmos.
2. Find the slant asymptote of $t(x) = \dfrac{x^2 - 1}{x - 3}$ by polynomial
   division (show the division), then give the vertical asymptote and all
   intercepts. Confirm your division by re-multiplying.
3. **Error analysis.** A student graphs $y = \dfrac{x - 1}{x^2 - 1}$,
   simplifies to $\dfrac{1}{x + 1}$, and concludes the only feature is a
   vertical asymptote at x = −1. Identify everything the student missed or
   misstated, and correct it.

## Application — constraints decide what counts (A-CED.2, 3)

A caterer charges a \$120 setup fee plus \$18 per guest. The per-person cost
is

$$P(n) = \frac{120 + 18n}{n} \text{ dollars per person,}$$

where n is the number of guests.

(a) Write the constraints on n as inequalities: the caterer requires at
    least 20 guests and the venue holds at most 150; n must be a whole
    number.
(b) Find all viable n for which the per-person cost is at most \$20.
    Solve the inequality, then intersect with the constraints.
(c) Compute P(40) and P(150). Explain in one or two sentences why n = 40
    is nonviable even though it satisfies the venue constraints, and what
    the horizontal asymptote of P tells you about large events.
    *Reading support: "viable" means "allowed by both the math and the
    situation."*

## Exit check

(a) For $f(x) = \begin{cases} x + 1, & x < 2 \\ x^2 - 2, & x \ge 2
    \end{cases}$: compute f(2) and decide whether the pieces join at x = 2.
(b) For $r(x) = \dfrac{x^2 - 5x + 6}{x^2 - 4}$: at x = 2 is there a hole or
    a vertical asymptote? What about at x = −2? Justify by factoring.

Record: secure / developing / not yet.

## Supports

- **Language access:** *piecewise* = "made of pieces"; *seam* = the x-value
  where the rule changes; *hole* = one missing point (canceled factor);
  *asymptote* = a line the graph approaches but (for vertical ones) never
  touches, because that x is outside the domain. Teach each term by pointing
  at the feature on a graph before naming it.
- **Alternate response mode:** dictate the feature list aloud while a partner
  sketches; or build the sign chart with sticky notes on a number line and
  photograph it as the submitted work.
- **Reading support:** the Application problem may be read aloud; underline
  the quantities (setup fee, per-guest charge, guest limits) before writing
  anything.

## Extension

Prove that $r(x) = \dfrac{x^2+1}{x}$ has no x-intercepts and no holes, find
its slant asymptote, and explain why the graph lies entirely above y = x for
x > 0 and entirely below it for x < 0. (Check: division gives
$x + \tfrac{1}{x}$; the remainder 1/x carries the sign.)

## Teacher note

**Likely misconceptions:** (1) treating every denominator zero as a vertical
asymptote — the canceled-factor hole is the classic miss; always factor
*before* classifying; (2) evaluating a piecewise function at a seam with the
wrong branch — have learners circle the inequality that contains the seam
value; (3) "simplifying away" the domain — canceling (x−3) does not put x=3
back; (4) reading continuity off a graph drawn by a calculator, which may
draw a solid line through a hole — hand analysis first, technology second.
Watch for sign-chart errors near asymptotes where the sign is the same on
both sides (as in Worked example 2); learners often assume it must flip.

**Answer-key reference:** Worked solutions for every scored item (guided,
independent, application, exit check, extension) are in
`../answer-key.md`
(Lesson 05 section). Answer keys are kept separate from student materials —
never place a key beside a student question.
