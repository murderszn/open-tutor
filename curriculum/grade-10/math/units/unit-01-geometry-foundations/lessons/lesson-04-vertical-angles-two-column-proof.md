# Lesson 04 — Saying Why: Vertical Angles and Linear Pairs in Proof

**Unit 01 · Week 5, Session 11 · ~50 minutes**

**Goal (learner-facing):** I can write the vertical-angles theorem as a
proof — in two-column and paragraph form — with a stated reason for every
step, and use it to find unknown angle measures.

**Materials:** this lesson, notebook with *theorems* and *proofs*
sections, pencil.

**Readiness check (5 min):** Two lines cross, making angles numbered 1, 2,
3, 4 clockwise from the top. Without measuring, which angles *must* be
equal, and which *must* add to 180°? Write your guesses — today we stop
guessing and start proving.

---

## Part 1 — What a proof is (explicit teaching, 10 min)

A **proof** is a logical argument that starts from things we have already
accepted — definitions, postulates, given information, and theorems we
have already proved — and reaches a new conclusion with no gaps. Every
statement in a proof needs a **reason**, and the allowed reasons in this
unit are:

1. **Given** — information stated in the problem or marked on the
   diagram.
2. **Definition** — e.g., "definition of angle bisector."
3. **Postulate** — e.g., "two points determine a line."
4. **Algebra** — e.g., "substitution," "subtraction property of
   equality."
5. **Previously proved theorem** — e.g., after today, "Vertical Angles
   Theorem."

Two formats say the same thing:

- **Two-column proof:** left column = statements, numbered; right column
  = the reason for each statement. Rigor is visible at a glance.
- **Paragraph proof:** the same statements and reasons woven into
  sentences. Reads like an explanation; every sentence still carries its
  reason.

A proof with an unstated reason is a draft, not a proof. Today's habit:
*no statement without a reason.*

## Part 2 — Vertical angles, proved (explicit teaching, 15 min)

**Definitions.** When two lines intersect: **vertical angles** are the
opposite pairs (they share a vertex but no sides); **adjacent angles**
share a side; a **linear pair** is two adjacent angles whose non-shared
sides form a line. A linear pair's measures add to 180° — that is the
**Linear Pair Postulate** (accepted without proof: a straight angle
measures 180° by definition, and the pair composes it).

**Theorem (Vertical Angles).** *Vertical angles are congruent.*

*Two-column proof.* Given: lines *AB* and *CD* intersect at *E*; angle
*AEC* and angle *BED* are vertical angles. Prove: angle *AEC* ≅ angle
*BED*.

| # | Statement | Reason |
|---|---|---|
| 1 | Angle *AEC* and angle *CEB* form a linear pair | Definition of linear pair (their non-shared sides form line *AB*) |
| 2 | m∠*AEC* + m∠*CEB* = 180° | Linear Pair Postulate |
| 3 | Angle *CEB* and angle *BED* form a linear pair | Definition of linear pair (non-shared sides form line *CD*) |
| 4 | m∠*CEB* + m∠*BED* = 180° | Linear Pair Postulate |
| 5 | m∠*AEC* + m∠*CEB* = m∠*CEB* + m∠*BED* | Substitution (both equal 180°) — or Transitive Property of Equality |
| 6 | m∠*AEC* = m∠*BED* | Subtraction Property of Equality (subtract m∠*CEB*) |
| 7 | Angle *AEC* ≅ angle *BED* | Definition of congruent angles (equal measures) |

*Paragraph proof.* Angles *AEC* and *CEB* form a linear pair, so their
measures sum to 180° by the Linear Pair Postulate. Angles *CEB* and *BED*
likewise form a linear pair, so their measures also sum to 180°.
Therefore m∠*AEC* + m∠*CEB* = m∠*CEB* + m∠*BED* by substitution, and
subtracting m∠*CEB* from both sides gives m∠*AEC* = m∠*BED*. Angles with
equal measures are congruent by definition, so angle *AEC* ≅ angle *BED*.

Notice the proof's skeleton: express the *same quantity* two ways, then
cancel. You will reuse this skeleton all year.

## Worked example 1 — Using the theorem with algebra

*Problem.* In the intersecting-lines diagram, m∠1 = 3x + 10 and its
vertical angle m∠3 = 5x − 30. Find x and both measures.

*Solution.* Vertical angles are congruent (Vertical Angles Theorem), so
their measures are equal: 3x + 10 = 5x − 30. Subtract 3x: 10 = 2x − 30.
Add 30: 40 = 2x, so x = 20. Then m∠1 = 3(20) + 10 = 70°, and m∠3 =
5(20) − 30 = 70°. Check: equal, as the theorem requires. **Common error:**
setting the expressions *supplementary* (summing to 180°) when the angles
are vertical — always classify the pair first (vertical? linear pair?
neither?) before writing the equation.

## Worked example 2 — A linear-pair chain

*Problem.* Angle *PQR* and angle *RQS* form a linear pair. m∠*PQR* =
2x − 8 and m∠*RQS* = x + 38. A ray *QT* bisects angle *RQS*. Find
m∠*RQT*.

*Solution.* Linear pair ⇒ supplementary (Linear Pair Postulate):
(2x − 8) + (x + 38) = 180 → 3x + 30 = 180 → 3x = 150 → x = 50. Then
m∠*RQS* = 50 + 38 = 88°. The bisector splits it into two equal angles
(definition of angle bisector), so m∠*RQT* = 44°. Check: 2(44) = 88 ✓;
and m∠*PQR* = 2(50) − 8 = 92°, with 92 + 88 = 180 ✓. Every number earns
its keep twice — that is how you know the work is right.

---

## Guided practice (with hints)

1. Complete the two-column proof skeleton: Given vertical angles ∠1, ∠3
   with adjacent ∠2: statements 1–4 are filled (two linear pairs and
   their sums); supply statements 5–7 with reasons. (Follow Part 2's
   proof line by line — substitution, subtraction, definition.)
2. Rewrite your completed proof from item 1 as a paragraph proof.
   (Every row of the table becomes a sentence; keep every reason.)
3. m∠*A* = 4x + 7 and its vertical angle m∠*B* = 6x − 13. Solve for x
   and both measures. (Set equal, not supplementary — why?)
4. Two angles form a linear pair; one measures 5x°, the other (x + 54)°.
   Find both measures. (Sum to 180° — which postulate says so?)
5. **Explain your reasoning:** A learner says "the paragraph proof is
   less rigorous than the two-column proof." Agree or disagree, with a
   precise reason. (Disagree — rigor lives in the *reasons*, not the
   layout. A paragraph proof with every reason stated is fully rigorous;
   a two-column proof with a missing reason is not.)
6. In a diagram, ∠1 and ∠2 are vertical, and ∠2 and ∠3 form a linear
   pair. If m∠1 = 118°, find m∠3 without measuring. (∠2 = 118° by
   vertical angles; ∠3 = 180 − 118 = 62° by linear pair.)

## Independent practice

1. Write the full two-column proof of the Vertical Angles Theorem from
   memory, then check it against Part 2. Mark any reason you forgot —
   that reason is your study target.
2. Prove: *If two angles are supplementary to the same angle, they are
   congruent.* (This is the general form of the vertical-angles
   argument — statements: m∠A + m∠C = 180°, m∠B + m∠C = 180°,
   substitution, subtraction. A theorem worth keeping.)
3. m∠*DEF* = (2x + 15)° is vertical to m∠*GEH* = (7x − 60)°. Solve for
   x, find both measures, and verify with the theorem.
4. Angle *JKL* and angle *LKM* form a linear pair; ray *KN* bisects angle
   *JKL*. If m∠*JKL* = (5x + 10)° and m∠*LKM* = (4x − 10)°, find
   m∠*JKN*, showing the check. (Pair first: 5x + 10 + 4x − 10 = 180 →
   9x = 180 → x = 20; m∠*JKL* = 110°; the bisector halves it to 55°.
   Check: m∠*LKM* = 4(20) − 10 = 70°, and 110 + 70 = 180 ✓.)
5. **Error analysis:** A proof reads: "∠1 ≅ ∠3 because they look equal
   in the diagram." Name exactly which proof rule this violates and
   rewrite the reason correctly. (Violates "reasons must be given,
   definitions, postulates, algebra, or proved theorems" — "looks equal"
   is none of these. Correct: Vertical Angles Theorem, once the angles
   are identified as vertical.)
6. Draw two intersecting lines. Mark one angle 37° *without* a
   protractor — instead, write the chain of reasons that determines every
   other angle, and compute all four measures. (Vertical: 37°; linear
   pairs: 143° each.)
7. **Extension:** Prove that the bisectors of a linear pair are
   perpendicular. (Let the pair be angles *a*, *b* with a + b = 180°;
   bisectors make a/2 and b/2; their sum is (a+b)/2 = 90° — so the angle
   between the bisectors is right. Cite the angle-addition reasoning and
   the definition of perpendicular.)

## Application

Two straight roads cross at an intersection, forming four angles. A
surveyor measures one angle as 63°. Write a three-sentence argument —
citing the theorems by name — that determines all four angles without
further measuring, and state each measure. Then add one sentence on why
the surveyor still re-measures in practice (N-Q.3: the theorem is exact;
the field measurement that produced "63°" carries instrument error, so
independent checks bound the real uncertainty).

## Exit check

(1) State the Vertical Angles Theorem and the Linear Pair Postulate from
memory. (2) Complete this skeleton: "m∠1 + m∠2 = 180° and m∠2 + m∠3 =
180°, therefore ___ by ___, therefore ___ by ___." (3) One sentence: what
makes a reason *legal* in a proof? The adult checks against Part 1's
allowed-reasons list before Session 12.

---

## Supports

- **Reading/language access:** Before writing any proof, say it aloud in
  plain sentences ("these two make a straight line, so they add to 180"),
  then translate each sentence into a table row. The table is a
  translation, not a new idea.
- **Alternate response mode:** Proofs may be dictated while the adult
  scribes the two columns verbatim; the learner must still supply every
  reason. Diagram tasks may use GeoGebra's angle-measure tool to *check*,
  never to *replace*, the reasoning.
- **Extension:** Prove the general supplement theorem from Independent
  practice item 2, then show how the Vertical Angles Theorem is its
  one-line corollary. (This is the "theorems from theorems" habit that
  powers the whole course.)

## Teacher note

Learners reliably confuse *which* equation to write: vertical ⇒ set
equal; linear pair ⇒ sum to 180. Insist on the two-word classification
("vertical" / "linear pair" / "neither") written *before* any equation —
it eliminates most errors. Also insist that "given" is never a reason
for a conclusion, only for starting facts. The proof skeleton
(same-quantity-two-ways, then cancel) deserves explicit naming; point it
out again in Lesson 05. See `teacher-guide.md` (Lesson 04) and
`answer-key.md` (Practice Set D).
