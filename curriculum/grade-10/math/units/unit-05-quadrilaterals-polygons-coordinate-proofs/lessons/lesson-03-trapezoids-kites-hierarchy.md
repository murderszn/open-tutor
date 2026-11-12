# Lesson 03 — Trapezoids, Kites, and the Quadrilateral Hierarchy

**Unit 05 · Week 20, Session 6 · ~50 minutes**

**Goal (learner-facing):** I can define and use isosceles trapezoids
and kites, place every special quadrilateral in the hierarchy, and
name each figure's lines of symmetry and rotational symmetry.

**Materials:** this lesson, notebook, ruler, protractor, paper and
scissors (for the symmetry lab in Session 7), the hierarchy diagram
(`assets/quadrilateral-hierarchy-diagram.svg`).

**Readiness check (5 min):** Draw a square, a rectangle that is not
a square, and a rhombus that is not a square. For each one, fold the
paper (or imagine folding it) and count the lines of symmetry. Now
draw a general parallelogram — one with no right angles and unequal
adjacent sides. How many lines of symmetry does it have? (It has
none — but it does have a symmetry of another kind, which this
lesson names.)

---

## Part 1 — Trapezoids and kites (explicit teaching, 12 min)

**Trapezoid.** In this unit a **trapezoid** is a quadrilateral with
*exactly one* pair of parallel sides. The parallel sides are the
**bases**; the non-parallel sides are the **legs**; the distance
between the bases, measured perpendicularly, is the **height**.
This is the exclusive definition used by Khan Academy's high-school
geometry course and the K–12 LibreTexts geometry text. Some sources
use the inclusive definition — *at least* one pair of parallel
sides — under which every parallelogram is also a trapezoid. Both
conventions are honest; this unit uses the exclusive one, and the
reading session in Week 21 asks you to explain the disagreement.
When you read another source, check its definition first.

An **isosceles trapezoid** has its legs congruent. Its base angles
are congruent (the two angles on the same base are equal), its
diagonals are congruent, and it has exactly one line of symmetry —
the perpendicular bisector of the bases. Why the base angles are
congruent: drop perpendiculars from the ends of the shorter base to
the longer base; the two right triangles formed are congruent by
hypotenuse-leg (the legs are the congruent sides of the trapezoid,
the altitudes are the same segment length), so the base angles
match.

The **midsegment of a trapezoid** joins the midpoints of the legs.
Its length is the average of the bases: (base₁ + base₂) / 2, and it
is parallel to both bases. This follows from the triangle midsegment
theorem of Unit 02: draw a diagonal, and each half of the trapezoid
midsegment is a triangle midsegment. The midsegment is the tool that
turns a trapezoid's area into a rectangle's area:
area = midsegment × height.

**Kite.** A **kite** is a quadrilateral with two *distinct* pairs of
adjacent congruent sides. (Distinct matters: a rhombus has all four
sides equal, so it is not a kite under this definition.) Label a kite
ABCD with AB = AD and CB = CD. Then:

- One diagonal — the one joining the vertices where the equal pairs
  meet (AC here) — is the line of symmetry. It bisects the other
  diagonal (BD) at a right angle, and it bisects the two vertex
  angles it joins.
- The other diagonal (BD) does not bisect AC.
- Exactly one pair of opposite angles is congruent: the angles
  between the unequal sides (∠B = ∠D here). The angles at A and C
  are not equal in general.
- Area = (1/2) · d₁ · d₂, where d₁ and d₂ are the diagonals: the
  diagonals split the kite into four right triangles whose areas
  add to half the product of the diagonals.

**The hierarchy (inclusive definitions).** Every square is a
rectangle and a rhombus; every rectangle and every rhombus is a
parallelogram; every parallelogram is a quadrilateral. A trapezoid
(exclusive definition) sits on its own branch: it is a quadrilateral
but not a parallelogram. A kite sits on its own branch too. The
diagram in `assets/quadrilateral-hierarchy-diagram.svg` shows the
nesting; the same nesting is written as a list below so the work
never depends on reading the picture alone.

- Quadrilateral
  - Parallelogram (both pairs of opposite sides parallel)
    - Rectangle (parallelogram with four right angles)
      - Square (rectangle with four congruent sides)
    - Rhombus (parallelogram with four congruent sides)
      - Square (rhombus with four right angles)
  - Trapezoid — exclusive definition (exactly one pair of parallel
    sides)
    - Isosceles trapezoid (legs congruent)
  - Kite (two distinct pairs of adjacent congruent sides)
  - General quadrilateral (none of the above)

**Symmetry (G-CO.3).** A figure has a **line of symmetry** (a
reflection that carries it onto itself) or **rotational symmetry**
(a rotation about its center that carries it onto itself):

| Figure | Lines of symmetry | Rotational symmetry |
|---|---|---|
| Square | 4 | 90° (and 180°, 270°) |
| Rectangle (not square) | 2 | 180° |
| Rhombus (not square) | 2 | 180° |
| Parallelogram (general) | 0 | 180° |
| Isosceles trapezoid | 1 | none |
| Kite | 1 | none |
| Regular n-gon | n | 360°/n |

A general parallelogram's 180° rotational symmetry is the reason its
opposite sides and angles are congruent — a half-turn swaps them.
That is the same fact Lesson 02 proved with triangles, seen from
the symmetry side.

---

## Part 2 — Working with trapezoids and kites (modeled reasoning, 15 min)

**Worked example 1 — an isosceles trapezoid.** Isosceles trapezoid
ABCD has AB ∥ CD, AD = BC = 6, AB = 8, CD = 14, and ∠A = 70°.
Find ∠B, ∠C, ∠D, the height, the midsegment, and the area.

- Base angles on the same base are congruent: ∠B = ∠A = 70°.
- The angles on the other base are supplementary to them (same-side
  interior angles, AD ∥ ... no — the legs are not parallel; the
  supplementary pair is a base angle with the angle above it on the
  same leg: ∠A + ∠D = 180° because AB ∥ CD makes ∠A and ∠D
  same-side interior angles for transversal AD). So
  ∠D = 180° − 70° = 110°, and ∠C = ∠D = 110°.
- Height: drop perpendiculars from A and B to CD. The horizontal
  offset on each side is (14 − 8) / 2 = 3. Height =
  √(6² − 3²) = √27 = 3√3 ≈ 5.20.
- Midsegment = (8 + 14) / 2 = 11.
- Area = midsegment × height = 11 · 3√3 = 33√3 ≈ 57.16 square
  units. Check: 33 × 1.732 = 57.16. ✓

**Worked example 2 — a kite's diagonals and area.** Kite ABCD has
AB = AD = 5, CB = CD = 2√13, and the diagonals are AC = 9 and
BD = 8. Verify the diagonal facts and find the area.

- The symmetry diagonal is AC: it joins A (where the two sides of
  length 5 meet) and C (where the two sides of length 2√13 meet).
  AC bisects BD at a right angle, so BD is split into two 4s.
- Check with the Pythagorean Theorem: the half-kite triangle with
  hypotenuse AB = 5 and leg 4 has other leg 3 (3–4–5). The triangle
  with hypotenuse CB = 2√13 and leg 4 has other leg
  √(52 − 16) = √36 = 6. The two legs lie on AC: 3 + 6 = 9 = AC. ✓
- Area = (1/2) · d₁ · d₂ = (1/2) · 9 · 8 = 36 square units.
- Check by pieces: the four right triangles have legs (3, 4),
  (3, 4), (6, 4), (6, 4); their areas are 6, 6, 12, 12, totaling
  36. ✓

**Worked example 3 — hierarchy questions.** Answer with a reason,
not just yes or no.

- *Is every rhombus a kite?* No, under this unit's definition: a
  kite needs two *distinct* pairs of adjacent congruent sides, and
  a rhombus's pairs are not distinct (all four sides equal).
- *Is every square a trapezoid?* No, under the exclusive
  definition: a square has two pairs of parallel sides, and a
  trapezoid has exactly one.
- *Is every rectangle a parallelogram?* Yes: a rectangle is defined
  as a parallelogram with four right angles, so it inherits both
  pairs of parallel sides.
- *Can a quadrilateral be both a kite and a trapezoid?* Yes: a kite
  with one pair of parallel sides (an isosceles-trapezoid-shaped
  kite) is possible; the definitions do not exclude each other.
  Sketching one is the Session 7 lab challenge.

---

## Guided practice (with hints)

1. An isosceles trapezoid has bases 10 and 18 and legs 5. Find
   its height and its area. *(Hint: the horizontal offset on each
   side is (18 − 10) / 2.)*
2. A kite has diagonals 10 and 24. Find its area. Then explain
   why the area formula (1/2)·d₁·d₂ works, using the four right
   triangles. *(Hint: each triangle's area is (1/2) times its two
   legs, and the legs add up along the diagonals.)*
3. A quadrilateral has vertices in order with one pair of opposite
   sides parallel and the other pair not parallel. Its non-parallel
   sides are congruent. What is it, and how many lines of symmetry
   does it have? *(Hint: exactly one pair parallel plus congruent
   legs.)*

## Independent practice

4. A kite has AB = AD = 13, CB = CD = 20, and the symmetry diagonal
   AC = 21. The other diagonal BD is bisected by AC. Find BD and
   the kite's area.
5. Decide, with a one-sentence reason for each: (a) Is every
   parallelogram a trapezoid? (b) Is every trapezoid a
   parallelogram? (c) Is a square a kite? Use this unit's
   definitions.
6. A regular hexagon has side length 4. How many lines of symmetry
   does it have, and what is its smallest angle of rotational
   symmetry? Then find each interior angle.

## Applied task

7. A kite-shaped garden sign has diagonals 60 cm and 80 cm. (a)
   Find its area in square centimetres and in square metres.
   (b) The sign is cut from a rectangular board 60 cm by 80 cm.
   What fraction of the board is wasted? (c) The frame maker
   reports that all four sides of the sign measure 50 cm. What
   shape is the sign really, and are the diagonal measurements
   consistent with that shape? Explain.

## Exit check

8. Draw the hierarchy from memory (or write it as a nested list)
   and place these three figures in it: a rectangle 3 by 5, a
   rhombus with side 4 and angles 60° and 120°, and an isosceles
   trapezoid with bases 6 and 10. For each, state its lines of
   symmetry.

## Supports, extension, teacher note

- **Reading/language access:** *isosceles* means "two equal legs"
  (the same word as in an isosceles triangle). *Distinct* pairs
  means the two pairs have different lengths. Rehearse both words
  with examples before the hierarchy work.
- **Alternate response mode:** a learner may answer the exit check
  orally, or by sorting paper cut-outs into the hierarchy boxes
  instead of drawing it.
- **Extension:** prove the trapezoid midsegment theorem from the
  triangle midsegment theorem: draw a diagonal, mark the two
  triangle midsegments, and add their lengths. Then prove that the
  diagonals of an isosceles trapezoid are congruent, using SAS on
  the two triangles that share a base.
- **Teacher note — likely misconception:** learners often call any
  four-sided figure with a pair of parallel sides a parallelogram,
  and any slanted quadrilateral a trapezoid. Keep the definition
  test on the board — *how many pairs of parallel sides?* — and
  make every classification answer cite the count. The
  inclusive/exclusive trapezoid difference is a definition choice,
  not a mistake; if a learner's source disagrees, the right
  response is to name the convention, not to argue. **Answer-key
  reference:** Lesson 03 in `answer-key.md`.
