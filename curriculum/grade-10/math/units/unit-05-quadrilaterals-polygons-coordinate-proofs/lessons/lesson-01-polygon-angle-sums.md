# Lesson 01 — Polygon Angle Sums: How Many Degrees Live Inside a Shape

**Unit 05 · Week 19, Session 1 · ~50 minutes**

**Goal (learner-facing):** I can derive the interior-angle sum
(n − 2)·180° for any polygon, explain why the exterior angles always
add to 360°, and find the angles — and the number of sides — of a
regular polygon.

**Materials:** this lesson, notebook, ruler, protractor, scissors and
paper (for the triangulation lab in Session 2).

**Readiness check (5 min):** Draw a triangle and measure its three
angles. They add to 180° — you proved that in Unit 01. Now draw a
quadrilateral and measure its four angles. What do they add to? Guess
before you measure, then check. Keep that number — it is the first
case of the pattern this lesson proves.

---

## Part 1 — Triangulation: one diagonal at a time (explicit teaching, 12 min)

A **polygon** is a closed figure with straight sides. Name it by its
number of sides: triangle (3), quadrilateral (4), pentagon (5),
hexagon (6), heptagon (7), octagon (8), and so on. A **regular**
polygon has all sides congruent and all angles congruent. A
**diagonal** joins two vertices that are not already joined by a
side. An **interior angle** is the angle inside the polygon at a
vertex. An **exterior angle** is formed by extending one side at a
vertex: it is the angle between the extension and the adjacent side.

**The triangulation idea.** Pick one vertex of a polygon and draw all
the diagonals from it. The polygon splits into triangles, and the
interior angles of the polygon are exactly the angles of those
triangles, rearranged. Since each triangle contributes 180°, the
interior-angle sum is 180° times the number of triangles.

- Quadrilateral (n = 4): one diagonal from a vertex makes 2 triangles.
  Sum = 2 · 180° = 360°. That is the number your readiness check
  found.
- Pentagon (n = 5): two diagonals from a vertex make 3 triangles.
  Sum = 3 · 180° = 540°.
- Hexagon (n = 6): three diagonals make 4 triangles. Sum = 720°.
- In general, from one vertex you can draw n − 3 diagonals (every
  vertex except itself and its two neighbors), making n − 2 triangles.
  **Interior-angle sum = (n − 2) · 180°.**

This argument needs the polygon to be **convex** (every interior
angle less than 180°, so every diagonal from a vertex stays inside).
For a concave polygon the same formula still holds, but the
triangulation is drawn more carefully; the exercises in this unit
use convex polygons unless they say otherwise.

**Exterior angles.** At each vertex, the interior angle and its
exterior angle sit on a straight line, so they add to 180°. Add that
up over all n vertices: the total is n · 180°. But that total is the
interior sum (n − 2) · 180° plus the exterior sum. So:

**Exterior-angle sum = n · 180° − (n − 2) · 180° = 360°.**

The exterior angles of *any* convex polygon add to 360° — three
sides or three hundred. A good intuition: walk around the polygon,
turning at each vertex by the exterior angle; after one full lap you
have turned once around, 360°.

**Regular polygons.** In a regular n-gon every interior angle is the
same and every exterior angle is the same, so divide:

- Each interior angle = (n − 2) · 180° / n.
- Each exterior angle = 360° / n.

And the two are supplementary: interior + exterior = 180°.

---

## Part 2 — Working the sums (modeled reasoning, 15 min)

**Worked example 1 — a regular pentagon.** Find each interior and
exterior angle of a regular pentagon.

- Interior sum = (5 − 2) · 180° = 3 · 180° = 540°.
- Each interior angle = 540° / 5 = 108°.
- Each exterior angle = 360° / 5 = 72°.
- Check: 108° + 72° = 180°. ✓ The two angles at a vertex are
  supplementary, as they must be.

**Worked example 2 — how many sides?** A regular polygon has each
interior angle 150°. How many sides does it have?

- Method 1 (exterior): each exterior angle is 180° − 150° = 30°.
  The exterior angles add to 360°, and there are n of them, so
  n = 360° / 30° = 12. The polygon is a dodecagon.
- Method 2 (algebra): (n − 2) · 180° / n = 150°. Multiply by n:
  180n − 360 = 150n, so 30n = 360 and n = 12. Same answer.
- The exterior method is faster whenever the angle is given; the
  algebra method is the one to use when the exterior route is not
  obvious. Both must agree — if they do not, re-check the
  arithmetic before doubting the formula.

**Worked example 3 — a missing quadrilateral angle.** A
quadrilateral has angles 95°, 85°, and 110°. Find the fourth angle.

- The four interior angles add to (4 − 2) · 180° = 360°.
- Fourth angle = 360° − (95° + 85° + 110°) = 360° − 290° = 70°.
- Check by exterior angles: the exterior angles are 85°, 95°,
  70°, and 110° — they add to 85 + 95 + 70 + 110 = 360°. ✓
- Notice the check used the *supplements* of the interior angles
  in order: 180 − 95 = 85, 180 − 85 = 95, 180 − 110 = 70,
  180 − 70 = 110. The list is the same four numbers in a different
  order, which is exactly what the 360° theorem promises.

---

## Guided practice (with hints)

1. A hexagon has interior angles 120°, 130°, 110°, 140°, 125°, and
   one unknown angle. Find it. *(Hint: what is the interior sum
   for n = 6? Subtract the five known angles from it.)*
2. Each exterior angle of a regular polygon is 24°. How many sides
   does it have, and what is each interior angle? *(Hint: the
   exterior angles add to 360° — divide. Then use supplementary
   angles.)*
3. A regular octagon is cut from a square sheet of paper. What is
   each interior angle of the octagon? *(Hint: (8 − 2) · 180° / 8.)*

## Independent practice

4. Find the interior-angle sum of a 12-sided polygon (dodecagon)
   and of a 15-sided polygon.
5. A regular polygon has each interior angle 162°. How many sides
   does it have? Show both the exterior method and the algebra
   method.
6. A pentagon has interior angles 100°, 110°, 120°, 90°, and x.
   Find x, and explain in one sentence why your answer must be
   less than 180°.

## Applied task

7. A floor tile is a regular hexagon with side length 10 cm. A
   second tile is a regular octagon with the same side length.
   (a) Find each interior angle of each tile. (b) Which tile has
   the larger interior angle, and by how many degrees? (c) If the
   two tiles are placed side by side so that one side of each
   touches, the two tiles leave a wedge-shaped gap at each shared
   corner. What is the angle of that gap? Explain with a sketch.

## Exit check

8. State the interior-angle sum formula and the exterior-angle sum
   in your own words, and in one sentence say why the exterior sum
   does not depend on the number of sides.

## Supports, extension, teacher note

- **Reading/language access:** *interior* means "inside the
  polygon"; *exterior* means "outside, on the extension of a
  side." Rehearse the two words by pointing at a drawn polygon
  before computing.
- **Alternate response mode:** a learner may answer the exit check
  orally, or by labeling a drawn pentagon's interior and exterior
  angles instead of writing the formulas.
- **Extension:** prove that the interior-angle sum formula also
  holds for a concave quadrilateral by splitting it into two
  triangles along the diagonal that lies inside the figure. Then
  explain why the exterior-angle argument needs the convex case
  (an exterior angle of a concave polygon is measured the "long
  way around" and the simple sum fails).
- **Teacher note — likely misconception:** the commonest error is
  using n · 180° instead of (n − 2) · 180° for the interior sum.
  If a learner's quadrilateral angles add to 720°, ask how many
  triangles the triangulation actually makes — two, not four.
  **Answer-key reference:** Lesson 01 in `answer-key.md`.
