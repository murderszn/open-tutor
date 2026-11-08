# Lesson 02 — Solving Right Triangles: Elevation, Depression, and Multi-Step Problems

**Unit 04 · Week 15, Session 3 · ~50 minutes**

**Goal (learner-facing):** I can solve a right triangle for unknown
sides and angles, use angles of elevation and depression correctly,
combine trigonometry with the Pythagorean Theorem, and check whether
my answer is reasonable.

**Materials:** this lesson, notebook, protractor, calculator (degree
mode — check it again; a radian-mode answer is the classic silent
error), the tree-height illustration below.

**Readiness check (5 min):** A right triangle has hypotenuse 10 and
one acute angle 30°. Find both legs exactly. (Answer: opposite 30°
is 5; adjacent is 5√3 ≈ 8.66.) If you reached for the calculator for
the 5, re-read Lesson 01's special triangles — exact values exist so
that some problems never need a display.

---

## Part 1 — Solving a triangle, and the two angles that look alike (explicit teaching, 12 min)

**Solving a right triangle** means finding all of its unknown sides
and angles. You always know the right angle, so you need two more
pieces (at least one of them a side) and the rest follow: angles sum
to 180°, sides follow from a ratio or from Pythagoras. Two tools
undo the ratios: if sin θ = *o*/*h* and you know *o* and *h*, then
θ = arcsin(*o*/*h*) — the **inverse sine**, written sin⁻¹ on the
calculator. The same holds for arccos and arctan. The inverse
function answers "which angle has this ratio?"; it does not mean
1 ÷ sin θ. (That reciprocal has its own names — cosecant and
friends — and this unit does not need them.)

**Angles of elevation and depression** are both measured from a
*horizontal* line, not from the vertical:

- **Angle of elevation:** from the horizontal line through the
  observer's eye, upward to the object. The observer looks *up*.
- **Angle of depression:** from the horizontal line through the
  observer's eye, downward to the object. The observer looks *down*.

The key fact: the angle of depression from a high observer to a low
object equals the angle of elevation from that object up to the
observer (alternate interior angles for the two parallel horizontal
lines, Unit 01's transversal theorem). So a depression problem can
always be re-drawn as an elevation problem, and the triangle is the
same triangle.

**The eye-height trap.** When a person measures an angle to a
treetop, the triangle's vertical side runs from *eye level* to the
treetop, not from the ground. The full height is the computed side
*plus* the eye height. Forgetting the eye height is the single most
common applied-trig error; every elevation answer in this unit gets
the question "plus what?" before it is accepted.

**Accuracy.** Report no more precision than the measurements
support: angles given to the nearest degree and distances to the
nearest metre justify answers to about 2–3 significant figures, not
six calculator digits. Round at the end, not in the middle — an
early rounding can move a final answer by more than the measurement
error already in it.

---

## Part 2 — Working the applications (modeled reasoning, 15 min)

![AI-generated illustration of two people measuring a tree: one person stands holding a sighting device to one eye, looking up toward a tall tree, while a second person kneels at the tree's base with a measuring tape stretched along the ground to the first person's feet.](../assets/tree-height-measurement-illustration.png)

*Caption: AI illustration of a tree-height measurement. One person
sights the treetop with a handheld device; a second person measures
the baseline along the ground. The illustration shows the setup only
— no measurements can be read from it.*

**Text-only alternative (the information needed for the task):** A
person stands on flat ground holding a sighting device at eye level,
1.7 m above the ground, looking up at the top of a vertical tree.
A second person measures the horizontal distance along the ground
from the tree's trunk to the first person's feet: 20 m. The angle
between the first person's horizontal line of sight and the line to
the treetop is 38°. The tree, the ground, and the sight line form a
right triangle whose vertical side runs from eye level to the
treetop. Question: how tall is the tree?

**Worked example 1 — the tree (elevation, with eye height).**
Triangle: adjacent side (to the 38° angle) = 20 m, angle = 38°,
unknown = vertical side above eye level, *h*.

- tan 38° = opposite ÷ adjacent = *h* ÷ 20, so
  *h* = 20 × tan 38° ≈ 20 × 0.7813 = 15.63 m.
- Tree height = *h* + eye height = 15.63 + 1.7 = 17.33 m, about
  **17.3 m**.
- Reasonableness check: tan 38° is less than 1 (38° < 45°), so the
  vertical side should be shorter than the 20 m baseline — 15.63 m
  passes. A 17 m tree seen from 20 m away at 38° is plausible; a
  40 m answer would have meant the wrong ratio (or the wrong angle).

**Worked example 2 — depression, re-drawn as elevation.** An
observer stands on a cliff 40 m above the water and measures an
angle of depression of 25° to a boat. How far is the boat from the
base of the cliff, horizontally?

- Re-draw: the angle of elevation from the boat to the observer is
  also 25° (alternate interior angles). Triangle: vertical side
  40 m, angle 25°, unknown horizontal side *d*.
- tan 25° = opposite ÷ adjacent = 40 ÷ *d*, so
  *d* = 40 ÷ tan 25° ≈ 40 ÷ 0.4663 = 85.78 m, about **86 m**.
- Check: 25° is a shallow angle, so the horizontal distance should
  be much larger than the height — 86 m vs. 40 m passes. If you had
  computed 40 × tan 25° ≈ 18.7 m, the boat would be almost under
  the cliff while the observer looks down at a shallow angle —
  impossible, so the setup, not the arithmetic, would be wrong.

**Worked example 3 — multi-step: trig plus Pythagoras.** A kite
string is 50 m long, held 1.2 m above the ground, making a 42° angle
with the horizontal. (a) How high is the kite? (b) How far, on the
ground, is the kite horizontally from the holder?

- (a) Vertical side above the hand: sin 42° = *v* ÷ 50, so
  *v* = 50 × sin 42° ≈ 50 × 0.6691 = 33.46 m. Kite height =
  33.46 + 1.2 = 34.66 m, about **34.7 m**.
- (b) Horizontal side: cos 42° = *h* ÷ 50, so
  *h* = 50 × cos 42° ≈ 50 × 0.7431 = 37.16 m, about **37.2 m**.
- Check with Pythagoras: 33.46² + 37.16² = 1119.6 + 1380.9 =
  2500.5 ≈ 50² = 2500 (difference is rounding). ✓ The two
  methods agree, which is the point of a multi-step problem: the
  second computation audits the first.

---

## Guided practice (with hints)

1. A ladder 6 m long leans against a vertical wall, making a 68°
   angle with the ground. How high up the wall does it reach, and
   how far is its foot from the wall? *(Hint: the ladder is the
   hypotenuse; height uses sine, foot distance uses cosine.)*
2. From a window 25 m above the ground, the angle of depression to
   a bench is 33°. How far is the bench from the building's base,
   horizontally? *(Hint: re-draw as an elevation angle from the
   bench, then decide whether to multiply or divide by tan 33°.)*
3. A right triangle has hypotenuse 26 and one leg 10. Find the
   acute angle opposite the leg of length 10, then find the other
   leg two ways (Pythagoras and a trig ratio) and confirm they
   agree. *(Hint: the angle is arcsin(10/26); the other leg is
   √(26² − 10²).)*

## Independent practice

4. A tower's shadow is 12 m long when the sun's angle of elevation
   is 56°. How tall is the tower? (Treat the sun's rays as parallel
   and the ground as flat.)
5. An observer 50 m from a building measures an angle of elevation
   of 47° to its top from eye level 2 m above the ground. How tall
   is the building?
6. A right triangle has a 55° angle and hypotenuse 18. Find both
   legs, then verify with the Pythagorean Theorem.

## Applied task

7. **Read the illustration again.** Suppose the baseline in the
   picture were 30 m instead of 20 m, the angle 36° instead of 38°,
   and the eye height 1.6 m instead of 1.7 m. Compute the tree's
   height, and write one sentence explaining why the answer must be
   larger than the Worked example 1 answer (17.3 m) even though the
   angle is smaller. (The baseline grew by half; the angle shrank
   only slightly.)

## Exit check

8. In one sentence each: (a) what is an angle of depression measured
   from? (b) In an elevation problem, what must be added to the
   triangle's vertical side before reporting a total height?

## Supports, extension, teacher note

- **Reading/language access:** "elevation" (looking up) and
  "depression" (looking down) are named from the observer's gaze,
  not from the object's position. Rehearse: "my eyes go up / my
  eyes go down."
- **Alternate response mode:** a learner may build the triangle
  with string and a protractor and measure the answer, then compare
  with the computed answer, instead of computing first.
- **Extension:** a two-observation problem — the same treetop
  sighted at 30° from one point and 45° from a point 80 m closer —
  leads to two equations in two unknowns; set it up (solution in
  the teacher guide) and note why one observation alone cannot fix
  both the distance and the height.
- **Teacher note — likely misconception:** learners swap
  multiplication and division with tangent (Example 2's trap) and
  drop the eye height. Require every applied solution to carry a
  labeled diagram and the words "plus eye height" or "eye height
  already included" before the final answer. **Answer-key
  reference:** Lesson 02 in `answer-key.md`.
