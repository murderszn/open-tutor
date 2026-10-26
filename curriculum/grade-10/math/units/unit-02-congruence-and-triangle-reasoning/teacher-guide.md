# Teacher Guide — Unit 02: Congruence, Rigid Motions, and Triangle Reasoning

For the guiding adult. Student materials never contain answer keys; all
solutions are in `answer-key.md`. This guide covers pacing, per-lesson
teaching moves, the misconception table, project and assessment
administration, and reteach triggers.

## Unit at a glance

- **Time:** 20 sessions × ~50 minutes (course Weeks 7–10). Do not
  compress the GeoGebra transformation lab (S4), the proof workshop
  (S9), or the two project studios (S14–S15) — fluency with motions and
  criteria is built there, not in the lessons.
- **Non-negotiables:** (1) the function view — every motion moves
  *every* point by *one* rule; (2) correspondence order in every
  congruence statement; (3) a stated reason for every proof step
  (Unit 01's habit, enforced harder now); (4) the honesty ledger —
  borrowed results (Lesson 01's reflection preservation, Lesson 04's
  angle-sum lemma) are marked as debts and *must* be paid where
  promised (Lessons 04 and 05).
- **What counts as done:** the project rubric (≥16/24) *and* the unit
  assessment (≥35/50) — see the readiness bands in the assessment file.
  The Week-09 quiz is formative; scoring below 20 postpones the
  assessment.

## Per-lesson teaching notes

**Lesson 01 (S1).** The definition of rigid motion is the unit's
foundation — spend the full time on it. Demo a translation on tracing
paper *before* the grid work: learners who start with coordinates treat
the vector as three separate moves. The pool-table application is the
day's payoff; if time is short, cut independent-practice problem 6
(dilation), not the application. Check the "debt" mark: reflection's
distance preservation is *asserted* here and *proved* in Lesson 04 via
the bisector theorem — tell the learner the payment date explicitly.

**Lesson 02 (S3).** The 2*d*/2θ composition results are the intellectual
peak of Week 7. Insist on *predict before computing* — the prediction
is the reasoning; the computation is the check. The full proofs are
below in "Extensions." For orientation, have the learner physically
label a triangle's vertices and watch the order flip under a mirror:
embodied beats verbal here. If the frieze application confuses, replace
it with wallpaper from your own home — any repeating pattern works.

**Lesson 03 (S6).** The translate → rotate → reflect engine is the
lesson. Walk it with tracing paper on a real pair of SSS triangles
*before* reading the worked examples — the text then names what the
hands did. The SSA counterexample is the day's second payoff; make the
learner swing the compass arc themselves. Do not let anyone measure
the truss illustration (proportions are approximate — see
`assets/README.md`); the observation is about *structure*, and the
text-only alternative carries the same content.

**Lesson 04 (S8).** Two debts come due: the angle-sum lemma is
*borrowed* (mark it — Lesson 05 pays it), and the bisector theorem
*pays* Lesson 01's debt. The Unit 01 construction connection (worked
example 4's closing note) is the moment the year's architecture
becomes visible — pause for it. Problem 5's circular-reasoning trap is
the best formative item in the unit; discuss it aloud even if the
learner answered correctly.

**Lesson 05 (S11).** Open by crossing out Lesson 04's "debt" mark
together — the ritual matters. The reflection proof of base angles is
short; spend the saved time on problem 6 (exterior angles sum to
360°), which rewards the learner who trusts algebra over measurement.
The surveying application sets up Unit 04 honestly: "determined" vs.
"computed" is a distinction worth a full discussion.

## Misconception table

| Misconception | Where it surfaces | Correction |
|---|---|---|
| "Rigid" means "doesn't move" | L01 exit, Set A | A rigid motion moves *every* point; what is rigid is the *measurements* |
| Each vertex gets its own translation vector | L01 guided practice | One vector, applied everywhere — check by translating a fourth test point |
| Diagonals of a (non-square) rectangle are symmetry lines | L01 guided #3 | Fold tracing paper; the corners miss — only midline folds work |
| Two reflections = a reflection | L02, Set B #6 | Count orientation flips: opposite + opposite = direct (translation/rotation) |
| Any three equal parts ⇒ congruence (esp. SSA, AAA) | L03–L04, Set C, assessment #7 | SSA: swing the arc; AAA: similarity is Unit 03 — draw two different-sized equiangular triangles |
| Correspondence order doesn't matter | L03 onward, every proof | △ABC ≅ △DFE says something different from △ABC ≅ △DEF — match longest-to-longest first |
| SAS can prove the bisector converse | L04, Set D #7 | SAS needs the angle *between* the known sides — that angle is what's being proved; SSS is the tool |
| Base angles = the angles at the base's endpoints *as drawn* | L05, Set E | Rotate the paper: base angles are opposite the *legs* — identify legs first, always |
| "Determined" = "computed" | L05 application | AAS fixes the triangle; the Law of Sines (Unit 04) computes it — determination is a *proof* claim |

## Project administration (S14–S15, S17)

- **S14:** Joints must stay loose until observations are recorded —
  check this before anyone reaches for glue. The SSS write-up is the
  graded thinking; circulate and ask "which fact about three sides are
  you using?" until the sentence is precise.
- **S15:** The congruence-mapping report needs a *specific* motion
  (vector/line/center+angle), not "a translation." Reject vague
  mappings at the draft stage — S15 is a studio, not homework.
- **S17 gallery:** 2-minute walkthroughs; the adult's critique names
  one strength and one criterion to strengthen. Log critique notes in
  the notebook.
- **Simulation alternative:** GeoGebra polygon drag test replaces the
  straw builds only — the truss design and report are still on paper.

## Assessment administration

- **Week-09 quiz (S18, 30 min):** formative. Score same-day; use the
  bands in the quiz file. Below 20: postpone S19 and reteach.
- **Unit assessment (S19, 50 min):** half credit for correct answers
  without reasoning — say this aloud before starting. Proofs may be
  two-column or paragraph.
- **Reteach triggers:** criteria confusion (esp. SSA/AAA) → redo
  Lesson 03 worked examples with tracing paper; proof-format errors →
  S16 workshop with skeletons; angle-chasing algebra errors → revisit
  Unit 01's equation-solving warm-ups, not the geometry.

## Extensions (for learners who finish early)

1. **Prove the 2*d* composition theorem:** reflect point *P* across
   parallel lines *m*₁, *m*₂ (distance *d*). Show *P″* is the translate
   of *P* by 2*d* perpendicular to the mirrors. (Hint: let *A*, *B* be
   the feet of perpendiculars; chase signed distances.)
2. **Prove the 2θ composition theorem** similarly for intersecting
   mirrors.
3. **HL (hypotenuse-leg):** prove that SSA *does* determine a right
   triangle — the arc cuts the ray exactly once when the angle is 90°.
   (Returns in Unit 04.)
4. **Midsegment preview:** in △*ABC*, join midpoints *D*, *E* of *AB*,
   *AC*. Use SSS on △*ADE* and the angle at *A* to argue the
   midsegment is parallel to *BC* and half its length. (Full proof
   needs similarity — Unit 03.)
5. **Frieze groups:** classify a real border pattern's symmetry group
   (one of the seven frieze groups); present with the motions labeled.
