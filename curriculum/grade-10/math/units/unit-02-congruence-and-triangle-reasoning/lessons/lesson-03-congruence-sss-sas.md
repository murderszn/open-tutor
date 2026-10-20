# Lesson 03 — Congruence Means a Rigid Motion Exists: SSS and SAS

**Unit 02 · Week 8, Session 6 · ~50 minutes**

**Goal (learner-facing):** I can state the rigid-motion definition of
congruence, justify SSS and SAS by describing the motions, and show why
SSA fails with an explicit counterexample.

**Materials:** this lesson, notebook, tracing paper, compass,
straightedge, ruler, protractor.

**Readiness check (5 min):** Two triangles are drawn on tracing paper.
You slide, flip, and turn the top sheet until one triangle lies exactly
on the other. Are the triangles congruent? What did you just *do*,
in the language of Lessons 01–02? (Answer: yes — you exhibited a rigid
motion carrying one onto the other. Today that action becomes the
definition.)

---

## Part 1 — The definition (explicit teaching, 10 min)

**Definition.** Two figures are **congruent** if and only if there is a
rigid motion — a translation, reflection, rotation, or composition of
them — carrying one figure exactly onto the other. Write ≅ for
congruence: △*ABC* ≅ △*DEF*.

This replaces "same size and same shape" (vague) and "all measurements
match" (untestable — you cannot measure everything). One motion, checked
once, settles all six parts of two triangles at once: three sides and
three angles, because a rigid motion preserves every distance and every
angle (G-CO.B.6, G-CO.B.7).

**Correspondence order is the contract.** △*ABC* ≅ △*DEF* means *A* ↔
*D*, *B* ↔ *E*, *C* ↔ *F* — the motion carries *A* to *D*, *B* to *E*,
*C* to *F*. So *AB* = *DE*, ∠*B* = ∠*E*, and so on, *in that order*.
Writing △*ABC* ≅ △*DFE* says something different (and usually false).
**CPCTC** — *corresponding parts of congruent triangles are
congruent* — is just this definition unfolded: once the motion exists,
every matched part matches.

**How much information determines a triangle?** Six parts is overkill.
The criteria below say which *three* parts suffice — and each criterion
is proved by *exhibiting the rigid motion*.

---

## Part 2 — SSS and SAS, justified by motions (modeled reasoning, 20 min)

**Worked example 1 — SSS.** Given △*ABC* and △*DEF* with *AB* = *DE*,
*BC* = *EF*, *AC* = *DF*. Exhibit the motion:

1. **Translate** △*ABC* so that *A* lands on *D*. (A translation is
   determined by the vector from *A* to *D*.)
2. **Rotate** about *D* until ray *AB* lines up with ray *DE*. Since
   *AB* = *DE*, point *B* lands exactly on *E*.
3. Where is *C*? It is at distance *DF* from *D* and distance *EF*
   from *E* — so it lies at an intersection of the circle centered
   *D* with radius *DF* and the circle centered *E* with radius *EF*.
   Point *F* is at such an intersection too. Two circles meet in at
   most two points, mirror images across line *DE*. If *C* is already
   at *F*, done; if it is at the *other* intersection, **reflect**
   across line *DE* to swap them.
4. A composition of rigid motions carried △*ABC* exactly onto △*DEF*.
   By the definition, the triangles are congruent. **SSS is proved.**

Notice the structure: translate → rotate → (maybe) reflect. You will
use this three-step engine for every criterion.

**Worked example 2 — SAS.** Given *AB* = *DE*, ∠*A* = ∠*D*,
*AC* = *DF* (the *included* angle — the angle *between* the two known
sides):

1. Translate *A* to *D*; rotate so ray *AB* aligns with ray *DE*
   (*B* lands on *E* since *AB* = *DE*).
2. Ray *AC* makes angle ∠*A* with ray *AB*; ray *DF* makes the equal
   angle ∠*D* with ray *DE*. So ray *AC* lands on ray *DF* — or on its
   mirror across line *DE*, in which case reflect across *DE* first.
3. Since *AC* = *DF*, point *C* lands exactly on *F*.
4. The motion carries △*ABC* onto △*DEF*. **SAS is proved.**

The included angle does the pinning: two sides and the angle *between*
them lock the third vertex to exactly one spot.

**Worked example 3 — why SSA fails (the ambiguous case).** Given
∠*A* = 30°, *AC* = 7, *BC* = 4 — two sides and a *non-included* angle:

1. Draw ray from *A*; mark *C* on it with *AC* = 7. The angle between
   the ray and the second side must be 30°.
2. Point *B* must lie on the 30° ray *and* satisfy *BC* = 4. Swing an
   arc of radius 4 centered at *C*: it cuts the 30° ray **twice**
   (the perpendicular distance from *C* to the ray is 7·sin 30° = 3.5,
   which is less than 4, while 4 < 7 — so the circle enters and exits
   the ray).
3. Two different points *B*₁ and *B*₂ (about 8.0 and about 4.1 units
   from *A*) both satisfy the given data. △*ACB*₁ and △*ACB*₂ share
   ∠*A* = 30°, *AC* = 7, *BC* = 4 — but *AB*₁ ≠ *AB*₂, so the
   triangles are **not** congruent.

No rigid motion can carry △*ACB*₁ onto △*ACB*₂ while fixing the given
data, because the data does not determine the triangle. **SSA is not a
criterion.** (The special case where the known angle is a *right*
angle — HL — *does* work, and returns as enrichment in Unit 04's
trigonometry.)

---

## Part 3 — Observation: triangles hold the world up (10 min)

Look at the generated illustration below (AI illustration — a
reconstruction of a truss bridge, not a photograph of a real bridge).

![AI-generated illustration of a steel truss bridge seen from the side: a long repeating series of identical triangular steel beams forming the bridge's framework over a river, blue sky, no text.](../assets/bridge-truss-illustration.webp)
*Caption: AI illustration of a truss bridge. The load-bearing
framework repeats one triangular unit along the whole span.*

**Observation task.** (a) Count the repeating triangular units in the
framework. (b) The triangles look identical — what would it mean, in
this unit's language, for two of them to be *congruent*? (c) The
project (S14) asks you to build straw structures: predict, using SSS,
whether a triangle or a quadrilateral made of fixed-length straws will
hold its shape, and why. Write all three answers in your notebook.

**Text-only alternative** (same information, no image needed): *A
bridge's steel framework is drawn as a long row of N identical
triangles sharing sides, spanning a river between two banks. Answer
(a)–(c) for the described framework with N = 8.*

**Teacher note:** The point of (c) is the SSS rigidity insight: three
side lengths determine a triangle completely, so a triangular frame
cannot deform; four side lengths do *not* determine a quadrilateral, so
it can shear. Do not let learners measure the illustration — its
proportions are approximate (see `assets/README.md`); the reasoning is
about the *idea* of repetition and rigidity.

## Part 4 — Guided practice (10 min)

1. △*ABC* has *AB* = 5, *BC* = 6, *AC* = 7. △*DEF* has *DE* = 5,
   *EF* = 7, *DF* = 6. (a) Are they congruent? By which criterion?
   (b) Write the correct congruence statement (watch the
   correspondence order). *(Hint: match longest to longest.)*
2. In the diagram (draw it): *AB* ≅ *DE*, ∠*A* ≅ ∠*D*, *AC* ≅ *DF*.
   Prove △*ABC* ≅ △*DEF* in **two-column** form, citing the criterion
   — then add one sentence naming the rigid-motion sequence (translate
   → rotate → reflect?) your proof relies on.
3. A learner writes "△*PQR* ≅ △*STU* by SSA because *PQ* = *ST*,
   *QR* = *TU*, ∠*P* = ∠*S*." (a) What is wrong? (b) Redraw the
   given parts so the triangles *are* congruent, naming the correct
   criterion.

## Part 5 — Independent practice (5 min)

4. Explain in your own words why the SSS justification needed *at
   most* one reflection at step 3 — why couldn't it need two?
   *(Hint: what does one reflection do to the two candidate points?)*
5. **Error analysis.** "SSS says three sides determine a triangle, so
   any three lengths work." Give a counterexample triple of lengths
   and explain what goes wrong geometrically. *(Hint: Unit 01 —
   when can three segments not meet tip to tip?)*

## Exit check (5 min)

1. State the rigid-motion definition of congruence.
2. You are given *AB* = *DE*, *BC* = *EF*, ∠*B* = ∠*E*. Which
   criterion applies, and is the known angle included? Sketch the
   translate → rotate → reflect sequence.
3. True or false, with a reason: "If two triangles have two pairs of
   congruent sides and one pair of congruent angles, they must be
   congruent."

**Teacher note:** Problem 5's answer is the triangle inequality —
three lengths must satisfy it, or the circles in the SSS justification
never meet. Learners who see this connect Unit 01 constructions to
today's proof. The #1 misconception: reading "SSS" off *any* three
marked sides without checking correspondence order. Answer-key
reference: `answer-key.md`, Lesson 03.
