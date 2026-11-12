# Lesson 02 — Parallelogram Theorems: What a Diagonal Proves

**Unit 05 · Week 19, Session 3 · ~50 minutes**

**Goal (learner-facing):** I can prove that a parallelogram's
opposite sides and opposite angles are congruent and that its
diagonals bisect each other, and I can use the rectangle, rhombus,
and square properties to find unknown measures.

**Materials:** this lesson, notebook, ruler, protractor, compass and
straightedge.

**Readiness check (5 min):** Draw parallelogram ABCD with AB
horizontal on top, going around clockwise: A (top left), B (top
right), C (bottom right), D (bottom left). Measure AB and CD, AD and
BC, and the four angles. What do you notice? Now draw diagonal AC.
The two triangles it makes look congruent — in this lesson you prove
they are, and everything else follows.

---

## Part 1 — One diagonal, three theorems (explicit teaching, 12 min)

A **parallelogram** is a quadrilateral with both pairs of opposite
sides parallel: AB ∥ CD and AD ∥ BC. Everything in this lesson is
proved from that one definition plus the triangle-congruence
criteria of Unit 02.

**Theorem 1 — opposite sides are congruent.** Draw diagonal AC. It
is a transversal cutting the parallel lines AB and CD, so the
alternate interior angles are congruent: ∠BAC = ∠DCA. It is also a
transversal cutting AD and BC, so ∠DAC = ∠BCA. The two triangles
△ABC and △CDA share the side AC. By ASA (two angles and the included
side), △ABC ≅ △CDA. Corresponding parts of congruent triangles are
congruent, so AB = CD and AD = BC. Opposite sides are congruent.

**Theorem 2 — opposite angles are congruent.** From the same
congruence, ∠B = ∠D (corresponding angles of △ABC and △CDA). For
the other pair, ∠A = ∠BAC + ∠DAC and ∠C = ∠DCA + ∠BCA; the two
sums are equal term by term, so ∠A = ∠C. Opposite angles are
congruent. A consequence worth memorizing: consecutive angles are
supplementary — ∠A + ∠B = 180° — because AD ∥ BC makes them
same-side interior angles.

**Theorem 3 — the diagonals bisect each other.** Let the diagonals
AC and BD meet at E. In △AEB and △CED: AB = CD (Theorem 1),
∠BAE = ∠DCE (alternate interior angles, AB ∥ CD), and
∠ABE = ∠CDE (alternate interior angles, AD ∥ BC). By ASA,
△AEB ≅ △CED, so AE = CE and BE = DE. Each diagonal cuts the other
exactly in half: the diagonals bisect each other.

**The converses** (used constantly in Lesson 04) are also true, and
each is proved the same way, in reverse: if a quadrilateral's
opposite sides are congruent, or its opposite angles are congruent,
or its diagonals bisect each other, or one pair of opposite sides is
both parallel and congruent, then it is a parallelogram. You will
prove one converse in the practice set; the others follow the same
pattern — build the diagonal, find the congruent triangles, read
off the parallel sides.

**Special parallelograms.** A **rectangle** is a parallelogram with
one right angle — and then all four angles are right angles (opposite
angles equal, consecutive angles supplementary). Its diagonals are
congruent: in △ABC and △DCB, AB = DC, BC is common, and the included
right angles are congruent, so the triangles are congruent by SAS
and AC = DB. A **rhombus** is a parallelogram with all four sides
congruent. Its diagonals are perpendicular bisectors of each other:
the diagonal joins two vertices, and the four small triangles are
congruent by SSS, so the angles at the crossing are all 90° and each
diagonal bisects the other's endpoints. A rhombus's diagonals also
bisect its vertex angles. A **square** is both a rectangle and a
rhombus: all sides congruent, all angles right, diagonals congruent,
perpendicular, and bisecting the angles. The hierarchy is inclusive:
every square is a rectangle, every square is a rhombus, and all three
are parallelograms.

---

## Part 2 — Using the theorems (modeled reasoning, 15 min)

**Worked example 1 — reading a parallelogram.** Parallelogram ABCD
has AB = 7, BC = 5, and ∠A = 62°. Find CD, AD, ∠B, ∠C, and ∠D.

- Opposite sides are congruent: CD = AB = 7, AD = BC = 5.
- Opposite angles are congruent: ∠C = ∠A = 62°.
- Consecutive angles are supplementary: ∠B = 180° − 62° = 118°,
  and ∠D = ∠B = 118°.
- Check: 62 + 118 + 62 + 118 = 360°. ✓ A quadrilateral's angles
  must add to 360° (Lesson 01) — a fast check that catches most
  arithmetic slips in this unit.

**Worked example 2 — diagonals bisect each other.** The diagonals
of parallelogram PQRS meet at T. PT = 6 and QT = 4. Find PR and QS.

- The diagonals bisect each other, so T is the midpoint of each:
  PR = 2 · PT = 12, and QS = 2 · QT = 8.
- Note what is *not* claimed: the diagonals of a general
  parallelogram are not congruent (PR ≠ QS here) and not
  perpendicular. Congruent diagonals would make it a rectangle;
  perpendicular diagonals would make it a rhombus. Do not assume
  either without evidence.

**Worked example 3 — proving a rectangle.** Quadrilateral ABCD is
a parallelogram with AC = BD (the diagonals are congruent). Prove
it is a rectangle.

- Consider △ABC and △DCB. AB = DC (opposite sides of a
  parallelogram), BC is a common side, and AC = DB (given). By
  SSS, △ABC ≅ △DCB.
- Corresponding angles: ∠ABC = ∠DCB.
- But ∠ABC and ∠DCB are consecutive angles of a parallelogram, so
  they are supplementary: ∠ABC + ∠DCB = 180°.
- Two angles that are both equal and supplementary must each be
  90°. So ∠B = ∠C = 90°, and the opposite angles match them:
  all four angles are right angles. ABCD is a rectangle.
- This is the standard template for the special-parallelogram
  proofs: congruence first, then the angle arithmetic.

---

## Guided practice (with hints)

1. Parallelogram WXYZ has WX = 9, XY = 4, and ∠W = 105°. Find
   YZ, WZ, ∠X, ∠Y, and ∠Z. *(Hint: opposite sides and angles
   match; consecutive angles add to 180°.)*
2. The diagonals of parallelogram ABCD meet at E. AE = 5, BE = 7.
   Find AC and BD. Then explain why ABCD is not necessarily a
   rectangle. *(Hint: bisecting is not the same as congruent.)*
3. A rhombus has side length 10 and one diagonal 12. Find the
   other diagonal. *(Hint: the diagonals are perpendicular
   bisectors — draw one half-diagonal triangle and use the
   Pythagorean Theorem.)*

## Independent practice

4. In parallelogram ABCD, ∠A = 3x + 10 and ∠C = x + 50. Find x
   and the measure of each angle.
5. Prove the converse used in Lesson 04: if a quadrilateral's
   diagonals bisect each other, then it is a parallelogram. (Draw
   the diagonals, prove the two pairs of vertical-angle triangles
   congruent by SAS, and read off the parallel sides with alternate
   interior angles.)
6. A rectangle has diagonal 13 and one side 5. Find the other
   side, and explain why the diagonal must be the longest side.

## Applied task

7. A rectangular garden bed is 6 m by 8 m. A gardener measures the
   diagonal to check that the corners are square. (a) What should
   the diagonal measure? (b) The gardener measures 9.8 m. Is the
   bed a true rectangle? Explain, with a tolerance of 0.1 m.

## Exit check

8. In one sentence each, state the three parallelogram theorems
   from Part 1, and name the one extra property that turns a
   parallelogram into a rectangle and the one that turns it into
   a rhombus.

## Supports, extension, teacher note

- **Reading/language access:** *bisect* means "cut into two equal
  parts." A diagonal *bisects* the other diagonal when they cross
  at the other diagonal's midpoint. Rehearse the word by pointing
  at the crossing point before computing.
- **Alternate response mode:** a learner may answer the exit check
  orally, or by labeling a drawn parallelogram's sides, angles,
  and half-diagonals instead of writing sentences.
- **Extension:** prove that if a parallelogram has one pair of
  adjacent sides congruent, then it is a rhombus. (Use the
  opposite-sides theorem: if AB = BC, then all four sides equal AB.)
  Then prove that a parallelogram with perpendicular diagonals is
  a rhombus.
- **Teacher note — likely misconception:** learners often claim a
  parallelogram's diagonals are congruent or perpendicular because
  "they look equal" in a roughly drawn figure. Keep a lopsided
  parallelogram on the board all week — long thin, diagonals
  visibly unequal and visibly not perpendicular — and ask for the
  measurement before the claim. **Answer-key reference:** Lesson 02
  in `answer-key.md`.
