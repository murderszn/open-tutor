# Teacher Guide — Unit 01: Function Transformations, Composition, Inverses

**Adults only.** This guide supports the guiding adult; it contains no
student answer keys (those are in `answer-key.md`, also adults-only).
Student pages never link here with answers visible.

## Unit at a glance

Four weeks, 20 sessions of ~50 minutes. The unit's central habit is
**predict-then-verify**: the learner states what a transformation,
composition, or inverse should do *before* computing or graphing, then
checks. Enforce the prediction in writing (one sentence or a sketched
arrow) — the habit is the actual curriculum; the algebra is its
vehicle.

## Lesson-by-lesson notes

### Lesson 01 — The function concept (S1)

- The readiness check gates the lesson: if substitution (`g(4)` for
  `g(x) = 3x − 7`) is insecure, spend 10 minutes there. Everything
  downstream assumes it.
- Misconceptions to watch: `f(x)` read as multiplication; context
  domain ignored in favor of formula domain; "every function is even
  or odd" (insist "neither" is a complete, earned answer); the graph
  of `y = ±√x` claimed as a function.
- The even/odd work here is graphical and definitional; Lesson 03
  makes it algebraic. Don't rush the algebra into S1.
- Exit check trap: the range of `4 − x²` is `(−∞, 4]` — learners
  write `[4, ∞)` by reading left-to-right.

### Lesson 02 — Vertical transformations (S3)

- Require the landmark point written next to every prediction.
  "The vertex moves to (0, −3)" beats "it goes down."
- The durable error is importing horizontal intuition ("+3 moves
  right"). Correct the *axis*, not just the direction: "+3 acts on
  outputs, so it moves things up/down."
- The Application part (c) is a deliberate overreach question:
  `2P(d)` doubles costs too, which is not what "double prices"
  means. Reward the noticing, not a corrected model.

### Lesson 03 — Horizontal transformations (S6)

- This is the hardest lesson in the unit. Budget the full session;
  the readiness check's question 2 (`g(x) = f(x + 4)`, which input
  gives `f`'s output at 5?) is the reusable antidote — return to it
  every time the sign error resurfaces.
- Insist on factoring input expressions (`3x − 1 = 3(x − 1/3)`)
  before naming horizontal shifts. Unfactored shifts are the #1
  source of wrong answers in mixed-transformation work.
- Even/odd proofs: require the full `f(−x)` simplification *before*
  comparing with `f(x)` / `−f(x)`. Partial simplification produces
  false "neither" verdicts.

### Lesson 04 — Composition (S11)

- The two classic errors: computing outside-in, and "decomposing" by
  renaming instead of factoring stages. Require the chaining check
  `(f∘g)(x) = h(x)` shown in full for every decomposition.
- The generated image (`assets/two-stage-function-machine.png`) is
  intentionally text-free so the learner can relabel the stages for
  any decomposition task. Its text alternative is in the lesson.
- The intersection work (A-REI.7/11) previews Unit 02's equation
  solving. Keep it graphical-algebraic; don't let it swallow the
  composition time.

### Lesson 05 — Inverses (S13)

- Confront `f⁻¹` vs. `1/f(x)` the first time it appears. Have the
  learner say "f-inverse" aloud.
- Require the explicit "swap" line in swap-and-solve, and *both*
  compositions for verification. The counterexample `f(x) = x²`,
  `g(x) = √x`: `g(f(−2)) = 2 ≠ −2` shows why one direction is not
  enough.
- Domain/unit interpretation (part b of every context problem) is
  where the understanding lives — don't accept a bare formula.

## Differentiation

- **Behind on algebra:** use `resources/math_fundamentals.md`
  warm-ups (adult-selected) before S1 and S11; allow two-column
  tables instead of nested algebra for composites; allow oral
  predictions with the adult scribing.
- **Ahead:** the lesson extensions (even+odd decomposition theorem,
  `f∘g = g∘f` characterization, unwinding proofs) are genuine
  enrichment, not more-of-the-same. The project rubric's mastery
  band expects one extension-level insight in the defense paragraph.
- **Access:** Desmos substitutes for hand-graphing; tables substitute
  for graphs; the machine image has a text alternative; predictions
  may be drawn as arrows on printed graphs.

## Practice sets

Sets A–E run in S2, S4, S7, S12, S14. Each ends with two retrieval
items from earlier lessons — do not skip them; they are the spaced
review. Score same-day; a set below ~70% triggers a 15-minute reteach
at the next session's start, not a full re-lesson.

## Project (S9, S15, S17)

- Part 1 needs a genuinely two-stage story. Veto one-stage stories
  ("I buy apples; cost is price × count") and stories where the
  stages commute — the order-matters defense is the point.
- If neither stage is invertible in Part 2, that is an acceptable
  finding *with* a domain restriction that repairs one stage. "Not
  invertible, and here's the fix" outscores a fudged inverse.
- Gallery critique (S17): use the rubric's language; every critique
  gets a written response or a logged disagreement with backing.

## Assessments

- **Week-04 quiz (S18):** formative. Score in-session; reteach the
  missed objectives immediately in the same session; record the
  reteach plan privately.
- **Unit assessment (S19):** 60 points; mastery 51+, proficient
  42–50, below 42 triggers a reteach cycle before Unit 02. Note Q11
  deliberately reunites decomposition (Lesson 04) with
  transformations (Lessons 02–03) — it is the unit's thesis in one
  question.

## Pacing risks

- S6 (Lesson 03) and S13 (Lesson 05) are the two sessions most likely
  to overrun. If needed, move Practice Set C's retrieval items to
  S10 and Practice Set E's to S15 — but never drop the prediction
  activities.
- S20 is flex by design; protect it for catch-up rather than
  spending it early.

## Answer-key reference

All worked solutions: `answer-key.md`. Every solution there was
worked independently of the lesson prose and reconciled against it;
no discrepancies remain.
