# Lesson 05 — Slope Proved by Similar Triangles, Slope Criteria, and the Midsegment Theorem

**Goal:** You will prove that slope is the same between any two
points of a nonvertical line, prove the slope criteria for
parallel and perpendicular lines, and prove the midsegment
theorem by similarity. **Time:** ~50 minutes. **Materials:**
notebook, grid paper, ruler.

## Readiness check (5 minutes)

1. Find the slope between (1, 2) and (4, 8). (Answer:
   (8 − 2)/(4 − 1) = 6/3 = 2.)
2. From Unit 02: if two triangles have two pairs of equal
   corresponding angles, what follows? (Answer: similarity by
   AA, so corresponding sides are proportional.)
3. A line has slope 3. A second line is perpendicular to it.
   What is the second line's slope? (Answer: −1/3 — today you
   prove why.)

## Teaching

### Slope is well defined — because of similar triangles (G-GPE.5)

The slope between two points P(x₁, y₁) and Q(x₂, y₂) on a
nonvertical line is (y₂ − y₁)/(x₂ − x₁) — rise over run. But
why does this number not depend on which two points you pick?
Draw the picture: for points P, Q, and R on the same line, form
right triangles by dropping verticals and drawing horizontals:
each triangle has a horizontal leg (the run) and a vertical leg
(the rise), and the hypotenuse lies on the line.

> **Claim.** The slope computed from any two points of a
> nonvertical line is the same.

*Proof.* Take two pairs of points on the line, giving triangles
T₁ and T₂ with legs (run₁, rise₁) and (run₂, rise₂). Both
triangles have a right angle (horizontal meets vertical). They
also share the angle the line makes with the horizontal: the
horizontal legs are parallel (both horizontal), and the line is
a transversal cutting them, so the corresponding angles at the
line are equal. By AA, T₁ ~ T₂. Therefore rise₁/run₁ =
rise₂/run₂ — the slopes are equal. ∎

This is the similarity idea doing foundational work: "slope" is
a property of the *line*, not of the pair of points, precisely
because the rise-and-run triangles are similar. (For a vertical
line, run = 0 and slope is undefined — the triangles collapse.
That case is excluded, and the proof says why.)

### Slope criteria (G-GPE.5)

> **Parallel lines.** Two nonvertical lines are parallel exactly
> when their slopes are equal.

*Why.* If the lines are parallel, the rise-and-run triangles on
one line can be mapped onto corresponding triangles on the other
by a translation (a rigid motion) — equal angles, equal slope.
Conversely, if two lines have equal slopes, their rise-and-run
triangles are similar with the same rise/run ratio, so the
lines make equal corresponding angles with any horizontal —
and equal corresponding angles imply parallel lines (Unit 01's
transversal theorem, used in reverse).

> **Perpendicular lines.** Two nonvertical lines are
> perpendicular exactly when their slopes are negative
> reciprocals: if one slope is m, the other is −1/m.

*Why (direction vectors).* A line of slope m has direction
vector (1, m): move 1 right, m up. A line perpendicular to it
has a direction vector perpendicular to (1, m). The vector
(−m, 1) is perpendicular to (1, m) because their dot product is
(1)(−m) + (m)(1) = 0. The slope of the line with direction
(−m, 1) is 1/(−m) = −1/m. Conversely, if two slopes multiply
to −1, the direction vectors (1, m₁) and (1, m₂) have dot
product 1 + m₁m₂ = 1 + (−1) = 0, so the directions are
perpendicular. ∎

Edge cases to state, not skip: a horizontal line (slope 0) is
perpendicular to a vertical line (undefined slope) — the
negative-reciprocal rule does not cover that pair, because
−1/0 is meaningless. State it separately.

### The midsegment theorem, proved by similarity (G-SRT.5)

Unit 02 proved triangle theorems but left this one open, noting
it needs similarity. Here it is:

> **Midsegment theorem.** The segment joining the midpoints of
> two sides of a triangle is parallel to the third side and half
> its length.

*Proof.* In ΔABC, let D be the midpoint of AB and E the midpoint
of AC. Consider the dilation centered at A with scale factor
1/2: it sends B to D (since AD = AB/2 along the ray AB) and C
to E (since AE = AC/2 along the ray AC). A dilation sends a line
not through the center to a parallel line (Lesson 01, G-SRT.1.a)
— and BC does not pass through A — so the image of BC is the
line through D and E, parallel to BC. And it scales lengths by
1/2 (G-SRT.1.b), so DE = (1/2)BC. ∎

Equivalently, by AA: ΔADE shares angle A with ΔABC, and
AD/AB = AE/AC = 1/2, so ΔADE ~ ΔABC with factor 1/2 — the same
conclusion. Either proof earns the theorem; the dilation proof
is shorter because the dilation definition already contains
both the parallel and the length facts.

### A useful diagram (exact, deterministic)

Triangle ABC has A(0, 0), B(6, 0), C(2, 4). The midpoints of AB
and AC are D(3, 0) and E(1, 2). The midsegment DE has length
√((3 − 1)² + (0 − 2)²) = √8 = 2√2; the third side BC has length
√((6 − 2)² + (0 − 4)²) = √32 = 4√2 = 2 · DE. The slope of DE is
(2 − 0)/(1 − 3) = −1, and the slope of BC is (4 − 0)/(2 − 6) =
−1 — equal slopes, so DE ∥ BC, confirming the theorem twice
over (length and slope).

Text-only alternative: "Triangle ABC has vertices (0, 0),
(6, 0), (2, 4). Its midsegment joining the midpoints of AB and
AC runs from (3, 0) to (1, 2): length 2√2, slope −1. The third
side BC runs from (6, 0) to (2, 4): length 4√2, slope −1. The
midsegment is half as long as, and parallel to, the third side."

## Worked Example 1 — slope is constant

A line passes through (1, 2), (4, 8), and (7, 14). Show the
slope is the same for both pairs.

*Reasoning.* From (1, 2) to (4, 8): rise 6, run 3, slope 6/3 = 2.
From (4, 8) to (7, 14): rise 6, run 3, slope 6/3 = 2. From
(1, 2) to (7, 14): rise 12, run 6, slope 12/6 = 2. All equal —
as the similar-triangles proof guarantees. The rise-and-run
triangles are (3, 6) and (6, 12): the second is the first
dilated by 2, so they are similar, and rise/run = 2 in both.

## Worked Example 2 — slope criteria and a coordinate proof

(a) Lines ℓ₁ and ℓ₂ have slopes 2 and −1/2. Are they
perpendicular? 2 · (−1/2) = −1, so yes — the slopes are
negative reciprocals.

(b) Prove that the quadrilateral with vertices P(0, 0), Q(4, 0),
R(5, 3), S(1, 3) is a parallelogram. *Reasoning.* Slope of PQ:
(0 − 0)/(4 − 0) = 0. Slope of SR: (3 − 3)/(1 − 5) = 0 — equal,
so PQ ∥ SR. Slope of PS: (3 − 0)/(1 − 0) = 3. Slope of QR:
(3 − 0)/(5 − 4) = 3 — equal, so PS ∥ QR. Both pairs of opposite
sides parallel: a parallelogram by definition. (Length check,
optional: PQ = 4, SR = 4; PS = √10, QR = √10 — opposite sides
equal as well, consistent with Unit 02's parallelogram
theorems.)

## Guided practice (with hints)

**G1.** A line passes through (2, 1) and (5, 10). Find its slope.
Then find the slope between (5, 10) and (8, 19) and confirm it
matches. *Hint: (10 − 1)/(5 − 2) = 3; (19 − 10)/(8 − 5) = 3.*
(Answer: both 3 — the triangles are (3, 9) and (3, 9).)

**G2.** Line m has slope 4. What is the slope of a line parallel
to m? Of a line perpendicular to m? *Hint: parallel = same;
perpendicular = negative reciprocal.* (Answer: 4; −1/4.)

**G3.** In ΔABC, A(0, 0), B(8, 0), C(0, 6). Find the midpoints of
AB and AC, the midsegment's length and slope, and the third
side's length and slope. *Hint: midpoints (4, 0) and (0, 3).*
(Answer: midsegment from (4, 0) to (0, 3): length 5, slope
(3 − 0)/(0 − 4) = −3/4. Third side BC from (8, 0) to (0, 6):
length 10, slope (6 − 0)/(0 − 8) = −3/4. Half the length, same
slope — the theorem holds.)

**G4 (error analysis).** A learner computes the slope between
(2, 3) and (5, 3) as "undefined" because "the rise is 0 and you
cannot divide by zero." What is the error? (Answer: the run is
3, not 0 — slope = 0/3 = 0, a horizontal line. Undefined slope
comes from run = 0 (vertical line), not rise = 0. Swapping rise
and run is the error.)

## Independent practice

Do Practice Set E (`practice.md`). It continues this lesson's
skills: slope constancy proofs, slope criteria, midsegment
computations and proofs, and coordinate proofs of
parallelograms.

## Application

A roof's pitch is its slope: rise over run. A roof rises 6 m over
a horizontal run of 8 m (slope 6/8 = 3/4). A second roof section
is parallel to the first: what is its pitch? A gable end
perpendicular to the first roof: what is its slope? (Answers:
parallel: 3/4. Perpendicular: −4/3. The negative reciprocal
rule is a construction rule: a builder who confuses it with
the reciprocal (4/3, missing the sign) builds a roof sloping
the wrong way.)

## Exit check

State in one sentence why slope does not depend on the pair of
points chosen, and give the slope of a line perpendicular to a
line of slope 5. (Answers: the rise-and-run triangles for any
two pairs are similar by AA, so rise/run is the same. The
perpendicular slope is −1/5.)

## Supports and extensions

- **Support:** always sketch the rise-and-run triangle and
  label rise and run before computing — most slope errors are
  rise/run swaps or sign errors.
- **Support:** for coordinate proofs, make a slope table (side |
  endpoints | rise | run | slope) before writing sentences.
- **Extension:** prove the *converse* direction of
  the slope criteria: if two lines have equal slopes, prove they
  are parallel using the transversal theorem (not just assert
  it), and handle the vertical-line case separately.
- **Extension:** prove the Varignon parallelogram: the
  quadrilateral formed by joining the midpoints of any
  quadrilateral's sides is a parallelogram (use the midsegment
  theorem twice, once for each diagonal's triangles).

## Teacher note

The direction-vector proof of the perpendicular criterion is the
one learners remember; the similar-triangles proof of slope
constancy is the one they need for Unit 04 (where the same
argument shows trigonometric ratios depend only on the angle).
Teach both, and name which is which. Watch for the rise/run swap
(G4) and for learners applying the negative-reciprocal rule to a
horizontal/vertical pair. Answer-key reference: `answer-key.md`,
Lesson 05 and Practice Set E.
