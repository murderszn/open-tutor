# Project — The Polynomial Garden

**Sessions:** 10 (launch), 14–15 (work). **Deliverables:** a garden
plan diagram, area polynomials, a numeric check, a cost estimate,
and a short reflection. All prices and plot sizes are fictional
practice figures, invented for this project; no real garden, vendor,
or price is described.

## The task

You are planning a small garden with three features on one rectangular
lot. Choose the size factor `x` (in feet) and design — with the rule
that `x` must be greater than `c`, so every side length, including
the strip's width `(x − c)`, is positive:

1. **A rectangular bed** with length `(x + a)` feet and width
   `(x + b)` feet, where `a` and `b` are whole numbers you choose
   with `1 ≤ a, b ≤ 9` and `a ≠ b`.
2. **A square patio** with side length `(x + c)` feet, where `c`
   is a whole number you choose with `1 ≤ c ≤ 9`.
3. **A rectangular path strip** with length `(x + c)` feet and
   width `(x − c)` feet — the same `c` as the patio, so the strip
   and the patio share a special-product relationship.

## Deliverables

1. **Plan diagram.** Draw the three features as rectangles (a
   hand-drawn diagram with labeled side lengths is fine; an area
   model for the bed, splitting its sides into `x` and the
   constant, is required). Label every side with its binomial.
2. **Area polynomials.** Expand each area as a polynomial in
   standard form: bed, patio, strip. For the patio and the strip,
   name the special-product pattern you used. Show the partial
   products or the pattern step — not just the final polynomial.
3. **Numeric check.** Choose one value of `x` (with `x > c`) and
   compute each area two ways: substitute into the side lengths
   and multiply, and substitute into your expanded polynomial.
   Both ways must agree; show both computations.
4. **Cost estimate.** Fictional pricing: soil and plants for a bed
   cost `$6` per square foot; patio stone costs `$10` per square
   foot; path gravel costs `$4` per square foot. Using your chosen
   `x`, compute the cost of each feature and the total. Give the
   total exactly (as a whole number of dollars at your chosen
   `x`) and explain why no rounding was needed.
5. **Reflection (one paragraph).** Answer: (a) How does the patio
   area minus the strip area simplify, and why does the pattern
   make that obvious? (b) Where in this project did you need an
   exact form, and where would a rounded approximation have been
   acceptable? (c) What would go wrong if the strip's width
   `(x − c)` were allowed to be zero or negative?

## Worked starting example (not a substitute for your own design)

Suppose `x = 6`, bed sides `(x + 3)` and `(x + 5)`, patio side
`(x + 2)`, strip sides `(x + 2)` and `(x − 2)`:

- Bed area: `(x + 3)(x + 5) = x² + 8x + 15`. At `x = 6`:
  `(9)(11) = 99`, and `36 + 48 + 15 = 99` ✓.
- Patio area: `(x + 2)² = x² + 4x + 4` (square of a sum). At
  `x = 6`: `8² = 64`, and `36 + 24 + 4 = 64` ✓.
- Strip area: `(x + 2)(x − 2) = x² − 4` (difference of squares).
  At `x = 6`: `(8)(4) = 32`, and `36 − 4 = 32` ✓.
- Costs at `x = 6`: bed `99 · $6 = $594`; patio `64 · $10 =
  $640`; strip `32 · $4 = $128`; total `$1,362`.
- Patio minus strip: `(x² + 4x + 4) − (x² − 4) = 4x + 8` — the
  `x²` terms cancel, which the patterns show immediately: the
  patio keeps a middle term `4x` and a constant `4`, while the
  strip's middle terms cancel and leave `−4`.

Your design must use different numbers from this example (different
`a`, `b`, `c`, or `x` — at least two of the four must differ).

## Rubric (20 points: 5 criteria × 4 points)

| Criterion | 4 — Strong | 2 — Partial | 0 — Missing / incorrect |
|---|---|---|---|
| Diagram | All three features drawn, every side labeled with its binomial, bed area model split shown | Some sides unlabeled or area model missing | No usable diagram |
| Area polynomials | All three correct in standard form, with partial products or pattern steps shown | One area wrong, or steps missing | Two or more areas wrong |
| Numeric check | One `x > c` chosen; both computation routes shown and agreeing for all three areas | One route or one area missing | No check, or disagreement unexplained |
| Cost estimate | All three costs and total correct at the chosen `x`, with pricing applied as stated | Arithmetic slip in one feature, total otherwise consistent | Costs missing or pricing misapplied |
| Reflection | Answers (a), (b), and (c) correctly, with the patio-minus-strip simplification explained and the zero/negative-width consequence stated | One part missing or vague | Reflection missing or incorrect on two or more parts |

**Scoring note for the adult:** accept any design meeting the
constraints (`x > c`; whole-number `a, b, c` in range; `a ≠ b`).
The key checks the method, not one "right" garden: verify each
area polynomial by expanding the learner's own binomials, verify
the numeric check by substitution, and verify the reflection's
patio-minus-strip simplification against the learner's own `c`:
`(x + c)² − (x + c)(x − c) = (x² + 2cx + c²) − (x² − c²) =
2cx + 2c²` (for the worked example, `c = 2`, this is `4x + 8` ✓).
