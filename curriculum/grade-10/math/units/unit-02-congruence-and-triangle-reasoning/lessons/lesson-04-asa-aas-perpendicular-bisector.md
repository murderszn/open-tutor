# Lesson 04 — ASA, AAS, and the Perpendicular-Bisector Theorem

**Unit 02 · Week 8, Session 8 · ~50 minutes**

**Goal (learner-facing):** I can justify ASA and AAS by rigid motions,
and prove the perpendicular-bisector theorem — the proof Unit 01
promised would come.

**Materials:** this lesson, notebook, compass, straightedge, ruler.

**Readiness check (5 min):** Unit 01, Lesson 03 built the perpendicular
bisector of a segment with compass and straightedge — and admitted the
honest gap: *why* do those arc-steps guarantee the result? Write down
the construction steps from memory. By the end of today you will be
able to prove the theorem that closes the gap.

---

## Part 1 — ASA and AAS by rigid motion (explicit teaching, 12 min)

**Worked example 1 — ASA.** Given ∠*A* = ∠*D*, *AB* = *DE*,
∠*B* = ∠*E* (the side *between* the two known angles):

1. **Translate** *A* to *D*; **rotate** about *D* until ray *AB*
   aligns with ray *DE*. Since *AB* = *DE*, *B* lands on *E*.
2. Ray *AC* forms angle ∠*A* with ray *AB*; ray *DF* forms the equal
   angle ∠*D* with ray *DE*. So the motion carries ray *AC* onto ray
   *DF* — or onto its mirror image across line *DE*, in which case one
   **reflection** across *DE* fixes it.
3. Likewise ray *BC* (forming ∠*B* with *BA*) lands on ray *EF*
   (forming the equal ∠*E* with *ED*).
4. Point *C* is the intersection of rays *AC* and *BC*; point *F* is
   the intersection of rays *DF* and *EF*. The motion carries the
   first pair of rays onto the second pair, so it carries their
   intersection *C* onto the intersection *F*.
5. △*ABC* is carried exactly onto △*DEF*. **ASA is proved.**

The pinning idea: two rays from known points intersect in exactly one
point — the third vertex has nowhere else to go.

**Worked example 2 — AAS.** Given ∠*A* = ∠*D*, ∠*B* = ∠*E*,
*BC* = *EF* (the known side is *not* between the known angles):

- **Lemma (borrowed, debt marked):** the interior angles of a triangle
  sum to 180°. *We have not proved this yet — Lesson 05 proves it.
  Everything below is conditional on the lemma; the debt is recorded
  here and paid there.* (This is the same honest borrowing Lesson 01
  did with reflections.)
- Then ∠*C* = 180° − ∠*A* − ∠*B* = 180° − ∠*D* − ∠*E* = ∠*F*.
- Now we know ∠*B* = ∠*E*, *BC* = *EF*, ∠*C* = ∠*F* — which is ASA.
  **AAS is proved** (modulo the lemma).

*Why this matters.* AAS is the workhorse of real triangle-solving: you
usually measure two angles and one side (a baseline), not the included
side. Lesson 05's surveying application runs on AAS.

---

## Part 2 — The perpendicular-bisector theorem, proved (modeled reasoning, 15 min)

**Theorem (G-CO.C.9).** *A point lies on the perpendicular bisector of
segment AB if and only if it is equidistant from A and B.*

The "if and only if" means two proofs. Both use the criteria from
Lessons 03–04 — watch the unit pay its own debts.

**Worked example 3 — forward direction.** *Assume P is on the
perpendicular bisector of AB. Prove PA = PB.*

| # | Statement | Reason |
|---|---|---|
| 1 | Let *M* be the midpoint of *AB*; line *PM* is the perpendicular bisector | Definition of perpendicular bisector; *P* is on it by assumption |
| 2 | *AM* = *BM* | Definition of midpoint |
| 3 | ∠*AMP* and ∠*BMP* are right angles | Definition of perpendicular |
| 4 | *PM* = *PM* | Reflexive property |
| 5 | △*AMP* ≅ △*BMP* | SAS (steps 2, 3, 4) |
| 6 | *PA* = *PB* | CPCTC |

**Worked example 4 — converse.** *Assume PA = PB. Prove P lies on the
perpendicular bisector of AB.*

| # | Statement | Reason |
|---|---|---|
| 1 | Let *M* be the midpoint of *AB* | Midpoint exists (Unit 01 construction) |
| 2 | *AM* = *BM*; *PM* = *PM*; *PA* = *PB* | Definition of midpoint; reflexive; given |
| 3 | △*PAM* ≅ △*PBM* | SSS |
| 4 | ∠*PMA* ≅ ∠*PMB* | CPCTC |
| 5 | ∠*PMA* and ∠*PMB* form a linear pair, so m∠*PMA* + m∠*PMB* = 180° | Linear Pair Postulate (Unit 01) |
| 6 | m∠*PMA* = m∠*PMB* = 90° | Steps 4–5, algebra |
| 7 | Line *PM* ⊥ *AB* at its midpoint *M* | Step 6 + step 1 |
| 8 | *P* lies on the perpendicular bisector of *AB* | Definition of perpendicular bisector |

**The Unit 01 debt is paid.** Recall the perpendicular-bisector
*construction*: arcs of equal radius centered at *A* and *B* meet at
points *P* and *Q*. Each of *P*, *Q* is equidistant from *A* and *B*
(equal radii!) — so by the theorem just proved, both lie on the
perpendicular bisector, and line *PQ* **is** the perpendicular
bisector. Every compass step in Unit 01 now has its reason. Write this
connection in your notebook's *theorems* section — it is the kind of
link assessments reward.

---

## Part 3 — Guided practice (10 min)

1. Given ∠*X* = ∠*L*, *XY* = *LM*, ∠*Y* = ∠*M*: (a) Which criterion?
   (b) Write the congruence statement with correct correspondence.
   (c) Name the rigid-motion sequence (translate → rotate → ?).
2. Prove in paragraph form: *If PA = PB = PC, then P lies on the
   perpendicular bisector of segment AC.* (One sentence per
   worked-example-4 step; the adult checks the reasons.)
3. Points *A*(−2, 0) and *B*(4, 0). (a) Find the perpendicular bisector
   of *AB* as an equation. (b) Verify that *P*(1, 5) is equidistant
   from *A* and *B*. (c) Is *P* on the bisector? How does the theorem
   predict your answer?

## Part 4 — Independent practice (8 min)

4. **The cell-tower problem.** Two towns are at points *A* and *B*.
   A relay tower must be equidistant from both towns *and* stand on
   the straight highway (line ℓ). (a) Where can it go? Describe the
   construction. (b) When is there no solution? (c) When are there
   infinitely many? *(Hint: intersect two loci — the perpendicular
   bisector of AB and the line ℓ.)*
5. **Error analysis.** A learner proves the converse (Worked example 4)
   but writes step 3 as "△*PAM* ≅ △*PBM* by SAS." What is wrong, and
   what is the knock-on effect on step 4? (Hint: which angle would SAS
   need, and do we know it yet?)

## Exit check (5 min)

1. Prove the forward direction of the perpendicular-bisector theorem
   (you may use the two-column skeleton: statements 1–6, fill the
   reasons).
2. In one sentence, explain how today's theorem justifies Unit 01's
   perpendicular-bisector construction.

**Teacher note:** Problem 5 catches the classic circular-reasoning trap:
SAS would need ∠*APM* = ∠*BPM*, which is what the proof is *trying to
establish* via the right angles. Learners who spot this understand why
"a stated reason for every step" is not bureaucracy. The AAS lemma debt
MUST be paid in Lesson 05 — check the notebook for the "debt" mark.
Answer-key reference: `answer-key.md`, Lesson 04.
