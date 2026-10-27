# Lesson 02 — Similarity Defined: Rigid Motions Followed by a Dilation

**Goal:** You will decide whether two figures are similar using
the similarity-transformation definition, checking corresponding
angles and proportional sides with correspondence in the right
order. **Time:** ~50 minutes. **Materials:** notebook, grid paper,
ruler, protractor.

## Readiness check (5 minutes)

1. From Lesson 01: a dilation with k = 3 sends a 4 cm segment to
   what length? (Answer: 12 cm.)
2. Two triangles have all three pairs of corresponding angles
   equal. Does that alone guarantee the triangles are congruent?
   (Answer: no — Unit 02: congruence also needs equal sides. Equal
   angles alone is the similarity question, and it is today's
   topic.)
3. Write the three side ratios for triangles with sides 5, 12, 13
   and 10, 24, 26, matching shortest to shortest. (Answer:
   10/5 = 2, 24/12 = 2, 26/13 = 2 — all equal.)

## Teaching

### Similarity transformations

A **similarity transformation** is a rigid motion (translation,
reflection, rotation, or a composition of them — Unit 02) followed
by a dilation, in either order. The rigid motion moves and flips
the figure without changing size; the dilation then scales every
distance by one factor k.

> **Definition.** Two figures are **similar** exactly when some
> similarity transformation carries one onto the other.

Write F ~ G for "F is similar to G". Similarity is the shape idea
made precise: same shape, possibly different size. Congruence is
the special case k = 1.

### The triangle test (G-SRT.2)

For triangles, the definition unpacks into a two-part test:

> Triangles are similar exactly when **corresponding angles are
> equal** and **corresponding sides are proportional**.

"Corresponding" is decided by the similarity transformation, and in
practice by matching: the largest angle corresponds to the largest
angle, the longest side to the longest side, and so on. The
correspondence is always written in order:

> ΔABC ~ ΔDEF means A ↔ D, B ↔ E, C ↔ F — angle A equals angle D,
> angle B equals angle E, angle C equals angle F, and
> AB/DE = BC/EF = CA/FD = the scale factor (or its reciprocal,
> depending on direction — state which).

The **scale factor of the similarity** is the common ratio of
corresponding lengths (image length ÷ preimage length). Keep the
direction explicit: "from ΔABC to ΔDEF, k = 2" means every side of
ΔDEF is twice the corresponding side of ΔABC.

### Why both checks?

For triangles, Lesson 03 will show that the angle check alone
(AA) is enough. But the *definition* requires both, and for
figures that are not triangles both checks are genuinely needed:

- Equal angles do **not** imply proportional sides: a 4×6 rectangle
  and a 5×8 rectangle both have four 90° angles, but 5/4 = 1.25
  while 8/6 ≈ 1.33 — not proportional, not similar.
- Proportional sides do **not** imply equal angles: a rhombus with
  side 2 and angles 60°/120° and a square with side 4 have
  proportional sides (ratio 2) but different angles — not similar.

For polygons in general, always check both. For triangles, check
both until Lesson 03 earns the AA shortcut — and even then, write
down which angles you matched.

### Perimeter (a first scale consequence)

If two figures are similar with scale factor k, then every length
scales by k — including the perimeter. If figure F has perimeter P
and its image under a similarity with factor k has perimeter P′,
then P′ = k · P. (Area and volume scale differently: k² and k³.
That is Lesson 04 — do not guess it here; it is proved there.)

## Worked Example 1 — triangles, both checks

Triangles ΔABC and ΔDEF have angles: ΔABC: 50°, 60°, 70°;
ΔDEF: 70°, 50°, 60°. Their sides, in matching order, are:
AB = 4, BC = 5, CA = 6; DE = 8, EF = 10, FD = 12. Are they
similar? With what correspondence and scale factor?

*Reasoning.* First, angles: both triangles have the angle set
{50°, 60°, 70°}. Match them: the 50° angle of ΔABC corresponds
to the 50° angle of ΔDEF, and so on. But correspondence must be
stated in vertex order. Suppose the vertices are named so that
A is the 50° angle, B the 60°, C the 70° in ΔABC, and D the 50°,
E the 60°, F the 70° in ΔDEF. Then A ↔ D, B ↔ E, C ↔ F.

Second, sides in that order: AB corresponds to DE (the sides
between the 50° and 60° angles): 8/4 = 2. BC corresponds to EF:
10/5 = 2. CA corresponds to FD: 12/6 = 2. All three ratios equal
2. Both checks pass, so ΔABC ~ ΔDEF with scale factor 2 from
ΔABC to ΔDEF.

*Check the direction:* the image sides are twice the preimage
sides, so k = 2 going from ΔABC to ΔDEF; going the other way,
k = 1/2. Always say which direction you mean.

## Worked Example 2 — rectangles, and a non-example

(a) Rectangle R is 4 by 6. Rectangle S is 6 by 9. Are they
similar? Angles: all 90° in both — the angle check passes. Sides:
match shortest to shortest and longest to longest: 6/4 = 1.5 and
9/6 = 1.5. Both ratios equal, so yes: R ~ S with scale factor
1.5. Their perimeters: R: 20; S: 30 = 1.5 · 20. ✓

(b) Rectangle T is 5 by 8. Compare with R (4 by 6). Angles pass
(all 90°). Sides: 5/4 = 1.25, but 8/6 ≈ 1.333. The ratios differ,
so T is **not** similar to R — even though both are rectangles.
"Same kind of figure" does not mean "similar figure." Squares
are the exception: all squares are similar to each other (all
angles 90°, all sides in a square in ratio 1:1), and all circles
are similar to each other (a fact Unit 06 proves).

## Guided practice (with hints)

**G1.** ΔPQR has sides 9, 12, 15. ΔSTU has sides 6, 8, 10. The
triangles are also known to be equiangular in matching order.
Are they similar? What is the scale factor from ΔPQR to ΔSTU?
*Hint: match shortest to shortest.* (Answer: ratios 6/9 = 8/12 =
10/15 = 2/3, so yes, k = 2/3.)

**G2.** Two triangles have side lengths 7, 24, 25 and 14, 48, 50.
A learner says, "The sides are proportional, so the triangles
are similar — no angle check needed." Is the learner right for
triangles, and why is the reasoning still incomplete as stated?
*Hint: Lesson 03 earns the shortcut; the definition needs both
checks until then. Also, the correspondence must be checked:
here shortest↔shortest, middle↔middle, longest↔longest all give
ratio 2.* (Answer: the conclusion is right — the triangles are
similar — but the justification is incomplete without the angle
check or the AA argument of Lesson 03; and a careless matching
could pair the wrong sides.)

**G3 (error analysis).** A learner writes "ΔABC ~ ΔDEF" for
triangles where angle A = angle E and angle B = angle D (with
sides matched A↔D, B↔E). What is wrong? *Hint: the statement
ΔABC ~ ΔDEF itself asserts A ↔ D.* (Answer: the claimed
correspondence contradicts the angle equalities — the correct
statement is ΔABC ~ ΔEDF, or the angles must be re-matched.
Writing the symbol without checking the order is the error.)

**G4.** A photograph 4 in. by 6 in. is enlarged so the 4 in. side
becomes 10 in. What is the scale factor, and what does the 6 in.
side become if the enlargement is a true similarity? (Answer:
k = 10/4 = 2.5; 6 · 2.5 = 15 in. If a copier instead made it
10 by 14, the picture would be distorted — not similar.)

## Independent practice

Do Practice Set B (`practice.md`). It continues this lesson's
skills: similarity decisions for triangles and quadrilaterals,
correspondence-order writing, scale factors in both directions,
and perimeter scaling.

## Application

Two triangular garden beds are claimed to be "the same design,
different size." Bed 1 has sides 3 m, 4 m, 5 m. Bed 2 has sides
4.5 m, 6 m, 7.5 m. Is the claim true? (Answer: ratios 4.5/3 =
1.5, 6/4 = 1.5, 7.5/5 = 1.5 — proportional. Both are 3-4-5
triangles, so the angle sets match (the same right triangle
shape). Yes, similar with k = 1.5. Note: the right angle is in
both because 3² + 4² = 5² and 4.5² + 6² = 7.5² — the Pythagorean
check agrees, as Lesson 03's similarity proof of Pythagoras
would predict.)

## Exit check

State, in your own words, the two things that must be checked to
call two triangles similar by the definition — and the one
symbol-order rule for writing ΔABC ~ ΔDEF. (Answers: (1)
corresponding angles equal; (2) corresponding sides
proportional. The order rule: the k-th letter of the first name
corresponds to the k-th letter of the second name.)

## Supports and extensions

- **Support:** always build a three-row ratio table (pair of
  corresponding sides | lengths | ratio) before concluding.
- **Support:** when in doubt about correspondence, sort each
  triangle's sides from shortest to longest and match in that
  order — then verify the angles match in the same order.
- **Extension:** prove that all regular n-gons with the same n
  are similar (all angles equal by the polygon angle formula, all
  sides in ratio 1:1 within each figure).
- **Extension:** a figure is dilated by k₁, then by k₂ (same
  center). Show the composition is a dilation by k₁k₂, and that a
  similarity transformation followed by another similarity
  transformation is a similarity transformation.

## Teacher note

Two errors dominate: (1) matching sides in the wrong order
(especially when triangles are drawn in different orientations —
teach "sort by length, then verify angles"); (2) assuming all
figures of the same type are similar (rectangles, rhombuses,
isosceles triangles). The rectangle non-example in this lesson
should be re-used on every later practice set until it stops
surprising learners. Answer-key reference: `answer-key.md`,
Lesson 02 and Practice Set B.
