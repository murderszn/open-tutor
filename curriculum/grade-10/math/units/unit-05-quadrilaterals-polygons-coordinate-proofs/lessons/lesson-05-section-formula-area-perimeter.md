# Lesson 05 — Dividing Segments, Coordinate Area, and Modeling

**Unit 05 · Week 21, Session 11 · ~50 minutes**

**Goal (learner-facing):** I can find the point that divides a
segment in a given ratio, compute perimeters and areas from
coordinates, and model a real site with a quadrilateral.

**Materials:** this lesson, notebook, grid paper, calculator, the
courtyard illustration (`assets/quadrilateral-courtyard-illustration.png`).

**Readiness check (5 min):** Points A(2, 3) and B(10, 7). The
midpoint is (6, 5) — the average of the coordinates. Now find the
point one quarter of the way from A to B. (It is not the average of
anything obvious — yet.) This lesson finds it, and any other fraction
of the way, with one formula.

---

## Part 1 — The section formula and the shoelace formula (explicit teaching, 12 min)

**Dividing a segment in a ratio (G-GPE.6).** The point P that
divides the segment from A(x₁, y₁) to B(x₂, y₂) in the ratio m:n
— meaning AP : PB = m : n — is

P = ( (n·x₁ + m·x₂) / (m + n), (n·y₁ + m·y₂) / (m + n) ).

Read it as a weighted average: P is m/(m + n) of the way from A to
B, so B's coordinates get weight m and A's get weight n. The
midpoint is the 1:1 case: ((x₁ + x₂)/2, (y₁ + y₂)/2). A useful
check: the distances satisfy AP : PB = m : n, and P lies on the
segment — its coordinates are between A's and B's.

**Coordinate perimeter (G-GPE.7).** A polygon's perimeter is the sum
of its side lengths, each found with the distance formula. Nothing
new — just careful bookkeeping, one side at a time, in order around
the figure.

**Coordinate area — the shoelace formula.** List the vertices in
order around the polygon, repeat the first vertex at the end, and
compute

Area = (1/2) · | (x₁y₂ + x₂y₃ + … + xₙy₁) − (y₁x₂ + y₂x₃ + … + yₙx₁) |.

The name comes from the criss-cross pattern of the multiplication,
like lacing a shoe. Why it works: each term xᵢyᵢ₊₁ − yᵢxᵢ₊₁ is twice
the signed area of the triangle formed by the origin and one side;
adding them telescopes to twice the polygon's area, with the parts
outside the polygon canceling. Two warnings: list the vertices in
order (clockwise or counterclockwise — mixing the order gives a
wrong answer), and take the absolute value at the end (the sign only
records the direction you went around).

**Modeling (G-MG.1, N-Q.1, N-Q.3).** A model turns a real object
into a geometric figure, computes with the figure, and translates
the answer back — with units, and with a reasonableness check. In
this lesson the object is a courtyard plot: the plot is a
quadrilateral, the fencing is its perimeter, the turf is its area,
and the walkway is a diagonal. Prices in this unit are fictional
practice figures, labeled as such; the adult checks any real price
before a real purchase. Report lengths to the accuracy the
measurements support: coordinates given to the nearest metre earn
answers to at most one decimal place, usually a whole number.

---

## Part 2 — Dividing, measuring, modeling (modeled reasoning, 15 min)

**Worked example 1 — a 3:1 division point.** Find the point P that
divides AB in the ratio 3:1, where A(2, 3) and B(10, 7).

- P = ( (1·2 + 3·10) / 4, (1·3 + 3·7) / 4 ) = ( 32/4, 24/4 )
  = (8, 6).
- Check by distances: AP = √((8 − 2)² + (6 − 3)²) = √(36 + 9)
  = √45 = 3√5. PB = √((10 − 8)² + (7 − 6)²) = √(4 + 1) = √5.
  AP : PB = 3√5 : √5 = 3 : 1. ✓
- Check by position: P is three quarters of the way from A to B,
  and (8, 6) sits between (2, 3) and (10, 7). ✓ A point outside
  the segment would mean the ratio was applied backwards — the
  weights m and n swapped.

**Worked example 2 — area by shoelace, verified a second way.**
Find the area of quadrilateral A(0, 0), B(4, 1), C(7, 5), D(3, 4)
(the parallelogram of Lesson 04).

- Shoelace, going around A → B → C → D → A:
  xᵢ·yᵢ₊₁: 0·1 + 4·5 + 7·4 + 3·0 = 0 + 20 + 28 + 0 = 48.
  yᵢ·xᵢ₊₁: 0·4 + 1·7 + 5·3 + 4·0 = 0 + 7 + 15 + 0 = 22.
  Area = (1/2) · |48 − 22| = 13 square units.
- Second way (base × height): AB = √17 is a base. The height is
  the distance from D(3, 4) to the line AB. Line AB has equation
  x − 4y = 0 (through the origin with slope 1/4). Distance =
  |3 − 4·4| / √(1 + 16) = 13/√17. Area = √17 · 13/√17 = 13. ✓
- The two methods agree, as they must. If they disagree, the
  usual cause is a vertex listed out of order in the shoelace.

**Worked example 3 — the courtyard, modeled.** A courtyard plot
has corners A(0, 0), B(12, 0), C(10, 8), D(0, 8), in metres. The
illustration `assets/quadrilateral-courtyard-illustration.png`
shows the site from above: a four-sided lawn with a diagonal stone
walkway, a rectangular patio in one corner, round planters, benches,
and a tree. The illustration shows the layout only — every number
below comes from the coordinates in this text.

- *What shape is the plot?* AB is horizontal (slope 0) and CD is
  horizontal (slope 0): AB ∥ CD. AD is vertical; BC has slope
  (8 − 0)/(10 − 12) = −4: not parallel to AD. Exactly one pair of
  parallel sides — the plot is a (right) trapezoid.
- *Perimeter (fencing):* AB = 12, BC = √(4 + 64) = √68 = 2√17 ≈
  8.25, CD = 10, DA = 8. Perimeter ≈ 12 + 8.25 + 10 + 8 = 38.25 m.
- *Area (turf):* trapezoid area = (1/2)(sum of bases)(height) =
  (1/2)(12 + 10)(8) = 88 m². By shoelace: xᵢyᵢ₊₁ = 0·0 + 12·8 +
  10·8 + 0·0 = 176; yᵢxᵢ₊₁ = 0·12 + 0·10 + 8·0 + 8·0 = 0;
  (1/2)(176) = 88. ✓
- *Diagonal walkway A to C:* AC = √(100 + 64) = √164 = 2√41 ≈
  12.81 m.
- *Reasonableness:* the area 88 m² sits between the 10-by-8
  rectangle (80 m²) and the 12-by-8 rectangle (96 m²) that bracket
  the trapezoid — a sensible middle value. The walkway 12.81 m is
  longer than the plot's height (8 m) and shorter than the
  perimeter's longest run, as a diagonal should be.

---

## Guided practice (with hints)

1. Find the point dividing the segment from (0, 0) to (8, 6) in
   the ratio 1:3, and check your answer with distances. *(Hint:
   the point is 1/4 of the way from the first point to the
   second.)*
2. Find the area of triangle (0, 0), (6, 0), (0, 4) by shoelace,
   and verify it with (1/2)·base·height. *(Hint: the shoelace
   needs the first vertex repeated at the end.)*
3. A garden plot has corners (0, 0), (10, 0), (10, 6), (0, 6) in
   metres. Find its perimeter and area, and name the quadrilateral
   with a slope test. *(Hint: all four slopes are 0 or undefined.)*

## Independent practice

4. The point P(7, 4) divides AB in the ratio 2:1, where A(1, 1).
   Find B.
5. Find the area of quadrilateral (1, 1), (5, 1), (6, 4), (2, 5)
   by shoelace, and verify it by splitting the quadrilateral into
   two triangles along a diagonal.
6. A rectangular sign is 90 cm by 120 cm. A diagonal brace runs
   from one corner to the opposite corner. How long is the brace?
   Give an exact answer and a decimal.

## Applied task

7. Look at the courtyard illustration
   (`assets/quadrilateral-courtyard-illustration.png`) and read
   the text-only alternative below it. A planter is to be placed
   on the diagonal walkway from A(0, 0) to C(10, 8) at the point
   that divides AC in the ratio 2:1 from A. (a) Find the planter's
   coordinates. (b) The patio in the illustration sits in corner
   D. A rectangular patio 4 m by 3 m is planned with one corner at
   D(0, 8) and sides parallel to the axes, inside the plot. Give
   the coordinates of its other three corners and its area.
   (c) Fencing costs $18 per metre and turf costs $9 per square
   metre (fictional practice prices). Estimate the cost of fencing
   the plot and turfing it, using the perimeter and area from
   Worked example 3.

**Text-only alternative for the illustration:** a top-down view of
a four-sided lawn. A grey stone walkway runs diagonally from the
top-left region to the bottom-right corner. A rectangular grey patio
with two benches sits in the bottom-left corner. Four round planters
and one small tree stand on the lawn. No measurements can be read
from the picture; all coordinates and lengths in this task are given
in the text.

## Exit check

8. State the section formula in words (not symbols) and the
   shoelace rule in one sentence each. Then say, in one sentence,
   why the shoelace needs the vertices in order around the figure.

## Supports, extension, teacher note

- **Reading/language access:** *weighted average* means an average
  where one end counts more than the other — the nearer end to P
  counts less, the farther end counts more, in the ratio's
  proportion. Work one numerical example by hand before trusting
  the formula.
- **Alternate response mode:** a learner may answer the exit check
  orally, or by working one division point and one shoelace area
  on grid paper instead of stating the rules.
- **Extension:** prove the shoelace formula for a triangle with one
  vertex at the origin, then explain how translating any triangle
  to the origin extends the proof. (The area of triangle
  (0, 0), (x₁, y₁), (x₂, y₂) is (1/2)|x₁y₂ − x₂y₁| — half the
  area of the parallelogram the two vectors span.)
- **Teacher note — likely misconception:** the commonest error is
  swapping the weights in the section formula (using m where n
  belongs), which puts the point on the wrong side of the
  midpoint. The distance check in Worked example 1 is the cure:
  AP : PB must equal m : n, so compute both distances before
  moving on. The second commonest error is listing shoelace
  vertices out of order — insist on a labeled sketch first.
  **Answer-key reference:** Lesson 05 in `answer-key.md`.
