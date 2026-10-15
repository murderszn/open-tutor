# Teacher Guide — Unit 01: Advanced Function Analysis and Mathematical Modeling

**Adults only.** This guide supports the guiding adult; it contains no
student answer keys (those are in `answer-key.md`, also adults-only).
Student pages never link here with answers visible.

## Unit at a glance

Four weeks, 20 sessions of ~50 minutes. The unit's central habit is
**analyze first, then verify**: the learner predicts a graph's features
from the formula before graphing, and predicts a model's behavior from
its family before computing residuals. Enforce the prediction in writing
— one sentence or a sketched feature list — because the habit is the
actual curriculum; the algebra is its vehicle.

This unit sits between grade-11 Algebra II (transformations, basic
composition, simple inverses — all prerequisite fluency now) and Unit 02
(trigonometric identities and equations). The domain-restriction work in
Lesson 03 is load-bearing for Unit 02's inverse trigonometric functions:
if restricting `x²` to `x ≥ 0` felt arbitrary, revisit it before U02.

## Pacing notes

- **S5 fluency clinic** is not optional padding. The week's new content
  (equivalent forms) fails silently when L01's feature vocabulary is
  shaky. Use S5 to re-teach in use, not to preview.
- **S10 quiz** is formative: score it the same day, classify every error
  (concept / algebra / reading), and re-work one error of each type with
  the learner before S11. A learner who cannot yet read a hole from
  factored form will drown in Lesson 05.
- **Project studios (S13, S15, S16)** need the adult present but not
  directing. The rubric rewards correct, complete, explained mathematics;
  artistry earns nothing. If the learner stalls on S13, narrow the choice:
  assign the dataset yourself rather than letting the session evaporate.
- **S20 debrief** sets up Unit 02: the learner should leave able to say
  which objective is strongest and which needs watching.

## Lesson-by-lesson notes

### Lesson 01 — The function analysis toolkit (S1)

The most common failure is step-skipping: learners compute intercepts and
then sketch from memory of the "parent shape," ignoring the asymptote and
end-behavior steps — exactly the steps that distinguish `3/(x − 2)` from a
line. Require the dashed asymptotes drawn before any curve is sketched. A
second trap: reporting increase/decrease intervals that include a vertical
asymptote's x-value (e.g. "decreasing on `(−∞, ∞)`"). Intervals must never
cross a point outside the domain.

### Lesson 02 — Equivalent forms and structure (S3)

Two stubborn misconceptions: (1) learners cancel a common factor in a
rational function and then forget the hole — they graph the simplified
function as if the canceled x-value were still allowed. Require the
restriction written next to every simplification. (2) Learners treat
completing the square as a ritual rather than a choice: drill the question
"what do I need to know?" *before* any rewriting, or every problem becomes
"factor everything."

### Lesson 03 — Composition, decomposition, inverses (S6)

Watch for: (1) computing outside-in — learners evaluate `f` first in
`f(g(x))`; insist on the inner function first, every time; (2) finding an
inverse formula but skipping both composition checks — require both
directions, since a wrong-branch choice passes one direction and fails the
other; (3) treating "restrict the domain" as a formality — ask "what would
change if you restricted to `x ≤ 0` instead?"; (4) in context work, writing
the composite in the wrong order — have them narrate "this goes into that"
before writing any symbols.

### Lesson 04 — Average rate of change (S8)

Watch for: (1) "simplifying" `[(x + h)² − x²] / h` to `h` by dropping the
`2xh` term — require the full binomial expansion written out until it is
automatic; (2) substituting `h = 0` into the unsimplified quotient and
declaring the answer `0/0` — the quotient is only defined for `h ≠ 0`;
simplification must come first; (3) computing the number correctly but
omitting units or interpretation — the units and the sentence are the
answer, not decoration; (4) confusing average rate with the function value:
"the average rate was 8 mph" does not mean "the cyclist rode at 8 mph the
whole time."

### Lesson 05 — Piecewise and rational rigor (S11)

Likely misconceptions: (1) treating every denominator zero as a vertical
asymptote — the canceled-factor hole is the classic miss; always factor
*before* classifying; (2) evaluating a piecewise function at a seam with
the wrong branch — have learners circle the inequality containing the seam
value; (3) "simplifying away" the domain — canceling `(x − 3)` does not put
`x = 3` back; (4) reading continuity off a calculator graph, which may draw
a solid line through a hole — hand analysis first, technology second. Watch
for sign-chart errors near asymptotes where the sign is the same on both
sides; learners often assume it must flip.

### Lesson 06 — Modeling from data (S14)

Likely misconceptions: (1) "small residuals = good model" — drill that
*patternless* matters as much as *small*; a curved residual pattern is a
rejected model wearing a disguise; (2) fitting the raw values' ratios in an
exponential-cooling context instead of the *drops'* ratios — the
constant-ratio signature belongs to the excess above the asymptote;
(3) treating "the line looks close" as a defense — this unit requires
residual and rate-of-change reasoning in writing; (4) extending a model past
its viable domain — always ask "does the situation still exist there?";
(5) confusing residual sign — a negative residual means the model
*over*predicted.

## When to reteach, and what to use

| Signal | Reteach target | Follow-up |
|---|---|---|
| S2 sketches miss asymptotes or end behavior | L01 feature list order | Re-do two L01 independent-practice items with the asymptote-first rule enforced |
| S4 rewrites are ritual, not choice | L02 "what do I need to know?" | Oral: for each of three expressions, state the needed feature before touching the algebra |
| S7 composites in wrong order | L03 narration habit | Context-first: describe the stages in words, then symbolize |
| S9 difference quotients lose terms | L04 binomial expansion | Expand `(x + h)³` and `(x + h)⁴` by hand until automatic |
| S12 holes misclassified | L05 factor-before-classify | Three rational functions: factor, classify, then graph |
| S15 defense cites only "closeness" | L06 residual-pattern reading | Plot residuals for a deliberately wrong family and narrate the pattern |

## Readiness for Unit 02

The learner is ready for Unit 02 (trigonometric identities and equations)
when they can: restrict a domain to invert a function and say why the
restriction was chosen (L03); read amplitude/period/midline from the
Lesson 06 Ferris-wheel model (L06); and justify each algebra step in
writing (the A-REI.1 habit from every lesson). If the inverse-verification
by composition is still shaky after S18, spend the first Unit 02 session
re-running it on `f(x) = sin(x)` restricted to `[-π/2, π/2]` before any
new identities.
