# Lesson 02 — Rotations and Putting Motions Together

**Unit 02 · Week 7, Session 3 · ~50 minutes**

**Goal (learner-facing):** I can perform a rotation, compose rigid
motions, predict the single motion equivalent to two reflections, and
tell whether a motion preserves or reverses orientation.

**Materials:** this lesson, notebook, tracing paper, protractor, grid
paper, blue/red pencils.

**Readiness check (5 min):** Reflect △*ABC* from Lesson 01
(*A*(1,1), *B*(4,1), *C*(4,3)) across the line *x* = 2. Write the image
coordinates. Then reflect the *image* across *x* = 5. What single
motion would have taken △*ABC* straight to the final triangle? Guess
first — today you will prove the pattern.

---

## Part 1 — Rotation, the third rigid motion (explicit teaching, 10 min)

A **rotation** is determined by a **center** *O*, an **angle** θ, and a
**direction** (clockwise or counterclockwise). The image *P′* of *P*
satisfies two conditions: *OP′* = *OP* (so *P′* lies on the circle
centered at *O* through *P*), and ∠*POP′* = θ in the chosen direction.
The center *O* itself stays fixed.

Like translations and reflections, a rotation is a rigid motion: turn
the whole plane about *O* and every distance and angle rides along
unchanged. Trace a figure on tracing paper, pin the center with your
pencil point, turn the paper — that is a rotation, and nothing in the
figure stretched.

**Orientation.** Label the vertices of △*ABC* counterclockwise: *A* →
*B* → *C*. After a translation or a rotation, the image vertices *A′*
→ *B′* → *C′* still run counterclockwise — the motion **preserves
orientation** (a *direct* motion). After a reflection, the order flips
to clockwise — the motion **reverses orientation** (an *opposite*
motion). Two reversals cancel: reflect twice and orientation is
preserved again. This is not decoration — in Lesson 03, orientation
tells you whether a congruence mapping needs a reflection in its
sequence.

## Part 2 — Composing motions (modeled reasoning, 15 min)

The **composition** of two transformations means applying one, then the
other. A composition of rigid motions is always a rigid motion (each
step preserves distances, so the chain does). The surprises are how
*simple* the results are.

**Worked example 1 — two reflections across parallel lines.** Reflect
△*ABC* (*A*(1,1), *B*(4,1), *C*(4,3)) across *x* = 2, then across
*x* = 5.

- After *x* = 2: *A*₁ = (3, 1), *B*₁ = (0, 1), *C*₁ = (0, 3).
  (Check *A*: (1 + 3)/2 = 2. ✓ Check *B*: (4 + 0)/2 = 2. ✓)
- After *x* = 5: *A*₂ = (7, 1), *B*₂ = (10, 1), *C*₂ = (10, 3).
  (Check *A*₁: (3 + 7)/2 = 5. ✓)
- Final: *A*₂(7,1), *B*₂(10,1), *C*₂(10,3). Compare with the original:
  every point moved **+6 in x**. The composition is a translation by
  6 units right.
- The lines were 3 units apart; the translation is **twice** that: 6.
  Direction: perpendicular to the mirror lines, from the first toward
  the second.

**Theorem (stated, proved in the teacher guide / extension).** Two
reflections across parallel lines distance *d* apart compose to a
translation of 2*d*, perpendicular to the lines. Two reflections
across *intersecting* lines with angle θ between them compose to a
rotation of 2θ about the intersection point.

**Worked example 2 — two reflections across intersecting lines.**
Reflect point *P*(4, 0) across the *x*-axis (θ = 0° line), then across
the line *y* = *x* (45° line).

- After the *x*-axis: *P*₁ = (4, 0) — on the mirror, fixed.
- After *y* = *x*: swap coordinates → *P*₂ = (0, 4).
- *P* went from angle 0° to angle 90° about the origin: a 90°
  counterclockwise rotation. The mirrors met at 45°; the rotation is
  **twice** that: 90°. ✓

*Why 2d and 2θ — the one-line reason.* A reflection moves each point
across its mirror; doing it twice moves the point across *both*
mirrors, and each crossing contributes the full mirror-to-mirror
separation (or angle) once per side. Tracing-paper check: fold, fold
again, and watch a marked point land exactly 2*d* away. The teacher
guide carries the full proof.

**Consequence.** Every rigid motion of the plane is a translation,
rotation, reflection, or glide reflection (translation + reflection —
enrichment; not needed this year). Three basic motions generate
everything. That is why "rigid motion" is a workable definition of
congruence: the family is small and fully understood.

---

## Part 3 — Guided practice (10 min)

1. Rotate △*ABC* (*A*(1,1), *B*(4,1), *C*(4,3)) 90° **clockwise** about
   the origin. *(Hint: (x, y) → (y, −x) for 90° clockwise. Verify with
   tracing paper before trusting the formula.)* List the image
   coordinates and verify one side length.
2. Reflect △*ABC* across the horizontal line *y* = 2, then across
   *y* = 6. Predict the single motion (type + amount) *before*
   computing; then compute to confirm.
3. The two mirror lines *y* = *x* and *y* = −*x* meet at 90°. A figure
   is reflected across the first, then the second. What single motion
   results? About what center, through what angle?
4. **Orientation check.** △*PQR* is labeled clockwise. After a
   translation, a reflection, and a rotation (in that order), is
   △*P‴Q‴R‴* labeled clockwise or counterclockwise? Explain using
   direct/opposite counting.

## Part 4 — Independent practice (10 min)

5. A regular hexagon is centered at the origin with a vertex at (2, 0).
   (a) List all its rotational symmetries (angles < 360°).
   (b) How many lines of symmetry does it have? Sketch and mark them.
   (c) A learner claims "a regular hexagon has 12 symmetries." Is the
   learner right? What are they counting?
6. **Error analysis.** "Reflecting across two parallel lines gives a
   reflection, because each step is a reflection." Give the correct
   result and a one-sentence reason the learner's logic fails. (Hint:
   what does each reflection do to *orientation*?)
7. Parallelogram *WXYZ* (non-rectangle, non-rhombus). (a) Does it have
   any line of symmetry? (b) What rotational symmetry does it have?
   (c) How does this differ from a rectangle, and why?

## Part 5 — Application: reading a frieze pattern (5 min)

Look at a repeating border pattern (the adult prints one, or you sketch
three repeats of a simple motif: △▽△▽…). For *your* pattern, find: one
translation that maps the pattern onto itself; any reflection or
rotation symmetries it has; and one motion that does *not* preserve it.
Real wallpaper and textile designers work with exactly this
classification (the seven *frieze groups* — enrichment). The question
"which rigid motions carry this figure onto itself" is the same
question G-CO.A.3 asks about rectangles and regular polygons — you are
doing standards mathematics on a border print.

## Exit check (5 min)

1. Define rotation using the three required pieces of information.
2. Two reflections across parallel lines 4 cm apart: what single
   motion, and how far?
3. Is the composition of three reflections orientation-preserving or
   reversing? Why?

**Teacher note:** The 2*d*/2θ results are the lesson's payoff — insist
learners *predict before computing* in problem 2; the prediction habit
is the reasoning skill. Common error: applying the 90° rotation
formula in the wrong direction; tracing paper adjudicates. The full
2*d*/2θ proofs are in the teacher guide as an extension. Answer-key
reference: `answer-key.md`, Lesson 02.
