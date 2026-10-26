# Lesson 05 — Triangle Reasoning: Angle Sums and Isosceles Triangles

**Unit 02 · Week 9, Session 11 · ~50 minutes**

**Goal (learner-facing):** I can prove the interior angle-sum theorem,
use it to prove the exterior-angle and isosceles base-angles theorems,
and combine theorems with algebra to find unknown measures.

**Materials:** this lesson, notebook, straightedge.

**Readiness check (5 min):** Open your notebook to the "debt" mark from
Lesson 04: *Lemma — the interior angles of a triangle sum to 180°.*
Today the debt gets paid, in full, with a proof. Before reading on,
try: can you prove it using only Unit 01's parallel-line theorems?
Sketch your idea — then compare with the proof below.

---

## Part 1 — Paying the debt: the angle-sum theorem (explicit teaching, 12 min)

**Theorem.** *The measures of the interior angles of a triangle sum to
180°.* (This is the lemma Lesson 04 borrowed for AAS. The borrowing is
now repaid — cross out the "debt" mark and write "proved, Lesson 05.")

**Worked example 1 — proof.** Given △*ABC*:

1. Through vertex *C*, draw line ℓ parallel to *AB*. (Unit 01,
   Lesson 03 constructed parallels; the parallel postulate guarantees
   exactly one such line.)
2. Transversal *AC* cuts the parallel lines: ∠*A* (at *A*, between
   *AB* and *AC*) and ∠*ACE* (at *C*, between ℓ and *AC*) are
   **alternate interior angles**, so ∠*A* ≅ ∠*ACE*. (Unit 01,
   Lesson 05.)
3. Transversal *BC* cuts the parallels: ∠*B* ≅ ∠*BCD* for the same
   reason.
4. At point *C*, angles ∠*ACE*, ∠*ACB*, ∠*BCD* form a straight line:
   m∠*ACE* + m∠*ACB* + m∠*BCD* = 180°.
5. Substitute from steps 2–3: m∠*A* + m∠*ACB* + m∠*B* = 180°. ∎

One auxiliary line, two old theorems, one new theorem. This is what
"standing on Unit 01" looks like.

**Corollary — the Exterior Angle Theorem.** An *exterior angle* of a
triangle (one side extended) equals the sum of the two *remote
interior* angles.

*Proof.* At vertex *C*, interior ∠*C* and exterior ∠*E* form a linear
pair: m∠*E* = 180° − m∠*C*. By the angle-sum theorem,
m∠*A* + m∠*B* = 180° − m∠*C*. So m∠*E* = m∠*A* + m∠*B*. ∎

## Part 2 — Base angles of an isosceles triangle (modeled reasoning, 12 min)

**Theorem.** *In an isosceles triangle, the base angles are congruent.*
(An isosceles triangle has two congruent sides, the **legs**; the
angles opposite them are the **base angles**; the angle between the
legs is the **vertex angle**.)

**Worked example 2 — proof by reflection.** Given △*ABC* with *AB* =
*AC* (legs):

1. Construct the bisector of the vertex angle ∠*A* (Unit 01,
   Lesson 03).
2. **Reflect** the plane across this bisector line. The reflection
   swaps ray *AB* and ray *AC* (a bisector makes equal angles with
   both sides — that is what "bisector" means).
3. Point *B* lies on ray *AB* at distance *AB* from *A*; its image
   *B′* lies on ray *AC* at the same distance *AB* = *AC* from *A* —
   so *B′* = *C*. Likewise *C′* = *B*.
4. The reflection carries ∠*ABC* exactly onto ∠*ACB*. Reflections are
   rigid motions, so the angles are congruent: ∠*B* ≅ ∠*C*. ∎

This is the unit's thesis in miniature: *a rigid motion does the
proving*. (Euclid proved this as Proposition 5 — the famous *pons
asinorum*, "bridge of asses" — by a longer route. You will compare the
two in S13's reading session.)

**CPCTC, named and used.** *Corresponding Parts of Congruent Triangles
are Congruent.* Once △*ABC* ≅ △*DEF* is established (any criterion),
every matched part is equal: all three sides, all three angles. Worked
example 1's proof *used* CPCTC implicitly at every substitution.

**Worked example 3 — angle chasing with algebra.** The angles of a
triangle measure *x*°, 2*x*°, 3*x*°. Find each angle.

- Angle sum: *x* + 2*x* + 3*x* = 180 → 6*x* = 180 → *x* = 30.
- Angles: 30°, 60°, 90°. Check: 30 + 60 + 90 = 180. ✓
- *Classify before you compute* (Unit 01's habit): this is a right
  triangle — and now you know *why* the classification was forced.

**Worked example 4 — isosceles algebra.** △*DEF* is isosceles with
*DE* = *DF* and vertex angle ∠*D* = 40°. Find the base angles.

- Base angles are ∠*E* and ∠*F* (opposite the legs *DF*, *DE*
  respectively — draw it; the base is *EF*).
- ∠*E* = ∠*F* (base-angles theorem), and ∠*E* + ∠*F* = 180° − 40° =
  140°, so each is 70°. Check: 70 + 70 + 40 = 180. ✓

---

## Part 3 — Guided practice (10 min)

1. In △*PQR*, m∠*P* = 50°, m∠*Q* = 60°. (a) Find m∠*R* two ways:
   angle-sum directly, and via the exterior angle at *R* plus the
   linear pair. (b) Which way is shorter? Why does the longer way
   still matter?
2. An exterior angle at vertex *X* of △*XYZ* measures (4*x* + 10)°;
   the remote interiors measure (*x* + 30)° and (2*x* + 10)°. Find
   *x* and the exterior measure. *(Hint: exterior = sum of remotes.)*
3. △*ABC* ≅ △*DEF* by SAS. *AB* = 8 cm, ∠*C* = 50°. (a) Find *DE*.
   (b) Find m∠*F*. (c) Which principle justifies (a) and (b)?

## Part 4 — Independent practice (8 min)

4. Prove: *the exterior angle at the vertex angle of an isosceles
   triangle equals twice each base angle.* (Two-column or paragraph;
   state every reason.)
5. **Error analysis.** "△*ABC* and △*DEF* have ∠*A* = ∠*D* and
   ∠*B* = ∠*E*, so the triangles are congruent by AA." (a) What is
   the error? (b) What *can* you conclude? (c) Which future unit
   studies that conclusion? *(Hint: Unit 03's title.)*
6. Draw any triangle. Mark all three exterior angles (extend each side
   one direction, consistently). Without measuring, what do the three
   exterior measures sum to? Prove it. *(Hint: each exterior pairs
   with an interior; use the angle sum twice.)*

## Part 5 — Application: surveying across the river (8 min)

A surveyor on your side of a river measures baseline *AB* = 100 m.
From *A*, the line of sight to a tree *C* across the river makes 60°
with the baseline; from *B*, 70°.

(a) Explain why the distance *AC* is **determined** by these
measurements — which criterion, and what does "determined" mean here?
(b) Draw the triangle to scale (1 cm = 10 m) and estimate *AC*.
(c) What would you need to compute *AC* **exactly**? (Honest answer:
the Law of Sines — Unit 04, right-triangle trigonometry extended. This
unit proves the distance is *fixed*; Unit 04 computes it.)

This is real surveying: triangulation networks mapped continents with
exactly this logic — measure a baseline and angles, let congruence do
the rest. Your scale drawing is how it was done for centuries before
electronic computation.

## Exit check (5 min)

1. Prove the interior angle-sum theorem (statement + the 5-step
   skeleton; fill the reasons).
2. △*MNO* is isosceles with *MN* = *MO* and m∠*M* = 100°. Find
   m∠*N* and m∠*O*. Then give the measure of the exterior angle at
   *M*.
3. In one sentence: why does the reflection proof of base angles
   *need* the hypothesis *AB* = *AC*? (Where would step 3 break?)

**Teacher note:** Problem 6's answer is 360° — a lovely result learners
remember. The #1 misconception in this lesson: applying the base-angles
theorem to the *wrong* pair (the angles adjacent to the base are the
base angles — learners often pick the vertex angle's neighbors
incorrectly when the triangle is drawn "upside down"; rotate the
paper). The AAS debt is paid — verify the notebook cross-out in S12.
Answer-key reference: `answer-key.md`, Lesson 05.
