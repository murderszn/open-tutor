# Lesson 04 — Coordinate Proofs I: Slope, Distance, and Midpoint Tests

**Unit 05 · Week 20, Session 8 · ~50 minutes**

**Goal (learner-facing):** I can classify any quadrilateral from its
vertices by testing slopes, side lengths, and diagonal midpoints,
and I can find a missing vertex of a parallelogram.

**Materials:** this lesson, notebook, grid paper, ruler, calculator.

**Readiness check (5 min):** Points A(0, 0), B(4, 0), C(5, 3),
D(1, 3). Plot them. What shape do you think ABCD is? Now compute
the four slopes. What do the slopes tell you? Keep the method — it
is the whole lesson: guess from the picture, prove from the numbers.

---

## Part 1 — The three tests (explicit teaching, 12 min)

A **coordinate proof** proves a geometric fact with algebra: the
vertices are numbers, and slope, distance, and midpoint formulas do
the proving. Three tests settle almost every quadrilateral question.

**Test 1 — slopes (parallel and perpendicular).** For a line through
(x₁, y₁) and (x₂, y₂), slope m = (y₂ − y₁) / (x₂ − x₁). Two lines
are parallel exactly when their slopes are equal (G-GPE.5, proved
from similar right triangles in Unit 03), and perpendicular exactly
when their slopes are negative reciprocals — their product is −1 —
except for the vertical/horizontal pair (a vertical line has no
slope; a horizontal line has slope 0; they are perpendicular).
So: equal slopes mean parallel sides; product −1 means a right
angle.

**Test 2 — distances (congruent sides and diagonals).** The distance
between (x₁, y₁) and (x₂, y₂) is
√((x₂ − x₁)² + (y₂ − y₁)²) — the Pythagorean Theorem in coordinate
form. Equal distances mean congruent segments. Use distances to test
whether adjacent sides are equal (rhombus? square?) and whether the
diagonals are equal (rectangle?).

**Test 3 — midpoints (bisecting diagonals).** The midpoint of the
segment joining (x₁, y₁) and (x₂, y₂) is
((x₁ + x₂)/2, (y₁ + y₂)/2). The diagonals of a quadrilateral bisect
each other exactly when they have the same midpoint. By the Lesson 02
converse, that alone proves a parallelogram — the fastest single test
when the question is only "parallelogram or not?"

**The test chain.** Work in this order and stop as soon as the
classification is forced:

1. **Slopes of all four sides.** Two pairs of equal slopes → both
   pairs of opposite sides parallel → parallelogram. One pair →
   trapezoid (exclusive definition). No pairs → general
   quadrilateral or kite.
2. **Adjacent slopes' products.** A product of −1 → a right angle.
   Four right angles in a parallelogram → rectangle.
3. **Distances of all four sides.** All four equal in a parallelogram
   → rhombus. All four equal plus right angles → square.
4. **Diagonal midpoints.** Same midpoint → the diagonals bisect each
   other → parallelogram (useful when slopes are messy).
5. **Diagonal lengths.** Equal diagonals in a parallelogram →
   rectangle; perpendicular diagonals in a parallelogram → rhombus.

A common error is testing only one property: a quadrilateral with
one pair of parallel sides and one pair of equal sides can be an
isosceles trapezoid, not a parallelogram — run the full chain before
naming the figure.

**Finding a missing vertex.** If ABCD is a parallelogram in order,
the diagonals AC and BD share a midpoint. Given A, B, C, the fourth
vertex D satisfies: midpoint of AC = midpoint of BD, so
D = (2·mid_x − x_B, 2·mid_y − y_B). Equivalently, D = A + C − B as
vectors: going from B to C is the same step as going from A to D.

---

## Part 2 — Classifying from coordinates (modeled reasoning, 15 min)

**Worked example 1 — a parallelogram, nothing fancier.**
Classify A(0, 0), B(4, 1), C(7, 5), D(3, 4).

- Slopes: AB = (1 − 0)/(4 − 0) = 1/4. BC = (5 − 1)/(7 − 4) = 4/3.
  CD = (4 − 5)/(3 − 7) = (−1)/(−4) = 1/4. DA = (0 − 4)/(0 − 3)
  = (−4)/(−3) = 4/3.
- AB ∥ CD (both 1/4) and BC ∥ DA (both 4/3): two pairs of parallel
  sides → parallelogram.
- Right angles? (1/4) · (4/3) = 1/3 ≠ −1, so no right angle: not a
  rectangle.
- Distances: AB = √(16 + 1) = √17. BC = √(9 + 16) = 5. Adjacent
  sides unequal: not a rhombus, not a square.
- Check by midpoints: midpoint of AC = (3.5, 2.5); midpoint of BD
  = ((4 + 3)/2, (1 + 4)/2) = (3.5, 2.5). Same midpoint — the
  diagonals bisect each other, confirming the parallelogram.
- **Answer: a parallelogram (not a rectangle, rhombus, or square).**

**Worked example 2 — a rectangle proved twice.** Classify
P(0, 0), Q(4, 2), R(5, 0), S(1, −2).

- Slopes: PQ = 2/4 = 1/2. QR = (0 − 2)/(5 − 4) = −2.
  RS = (−2 − 0)/(1 − 5) = (−2)/(−4) = 1/2. SP = (0 − (−2))/(0 − 1)
  = 2/(−1) = −2.
- PQ ∥ RS (both 1/2) and QR ∥ SP (both −2): parallelogram.
- (1/2) · (−2) = −1: adjacent sides are perpendicular, so ∠Q is
  a right angle, and a parallelogram with one right angle is a
  rectangle.
- Distances: PQ = √(16 + 4) = √20; QR = √(1 + 4) = √5. Unequal
  adjacent sides: not a rhombus, not a square.
- Second proof by diagonals: PR = √(25 + 0) = 5; QS =
  √((1 − 4)² + (−2 − 2)²) = √(9 + 16) = 5. Equal diagonals in a
  parallelogram confirm the rectangle. Midpoints: PR midpoint
  (2.5, 0); QS midpoint (2.5, 0). ✓
- **Answer: a rectangle (not a square).**

**Worked example 3 — finding the fourth vertex.** A(1, 2), B(5, 3),
C(6, 7) are three vertices of parallelogram ABCD in order. Find D.

- The diagonals AC and BD share a midpoint. Midpoint of AC =
  ((1 + 6)/2, (2 + 7)/2) = (3.5, 4.5).
- D must satisfy (5 + x_D)/2 = 3.5 and (3 + y_D)/2 = 4.5, so
  x_D = 2 and y_D = 6. **D = (2, 6).**
- Check by slopes: AB slope = 1/4; DC slope = (7 − 6)/(6 − 2)
  = 1/4 ✓. BC slope = 4; AD slope = (6 − 2)/(2 − 1) = 4 ✓.
  Both pairs parallel, as required.

---

## Guided practice (with hints)

1. Classify A(0, 0), B(3, 0), C(4, 2), D(1, 2) using the test
   chain. *(Hint: compute all four slopes first. Two pairs equal?)*
2. The diagonals of quadrilateral EFGH have midpoints (2, 3) and
   (2, 3). What does that prove, and what does it not prove?
   *(Hint: bisecting diagonals prove a parallelogram. Do they prove
   a rectangle?)*
3. A(0, 0), B(6, 0), C(6, 4) are three vertices of rectangle ABCD
   in order. Find D two ways: by slopes and by the diagonal
   midpoint. *(Hint: the fourth vertex completes the rectangle;
   the midpoint of AC equals the midpoint of BD.)*

## Independent practice

4. Classify M(1, 1), N(5, 2), O(6, 6), P(2, 5). Give the slope,
   distance, and midpoint evidence.
5. Prove that quadrilateral A(0, 0), B(3, 2), C(6, 0), D(3, −2)
   is a rhombus but not a square. (Compute all four side lengths,
   the diagonal lengths, and the diagonal slopes.)
6. A quadrilateral has vertices (0, 0), (4, 0), (5, 3), (1, 3).
   Is it a parallelogram? A trapezoid? A rectangle? Justify each
   answer with a computation, not a picture.

## Applied task

7. A city block is bounded by the corners (0, 0), (80, 0), (80, 60),
   and (0, 60), in metres. (a) Prove the block is a rectangle.
   (b) A developer claims the block is a square. Disprove the
   claim with a computation. (c) The block's diagonal footpath is
   planned from (0, 0) to (80, 60). How long is it, to the nearest
   metre?

## Exit check

8. Write the test chain (the five numbered tests from Part 1) from
   memory, and in one sentence say which single test proves a
   quadrilateral is a parallelogram all by itself.

## Supports, extension, teacher note

- **Reading/language access:** *test chain* means the ordered list
  of checks: slopes, then right angles, then side lengths, then
  diagonal midpoints, then diagonal lengths. Keep the chain on a
  card and check off each test as it is run.
- **Alternate response mode:** a learner may answer the exit check
  orally, or by sorting four given quadrilaterals into named boxes
  with a one-line justification each.
- **Extension:** prove that the quadrilateral formed by joining the
  midpoints of any quadrilateral's sides in order is always a
  parallelogram (Varignon's theorem). Use the triangle midsegment
  theorem twice: each side of the inner quadrilateral is parallel
  to a diagonal of the outer one.
- **Teacher note — likely misconception:** the commonest error is
  reading slopes off a sketch instead of computing them, and the
  second commonest is stopping after one test ("opposite sides
  look parallel, so it is a parallelogram") without checking the
  other pair. Insist on all four slopes written out before any
  conclusion. **Answer-key reference:** Lesson 04 in
  `answer-key.md`.
