# Lesson 01 — Dilations: Center, Scale Factor, Image Properties

**Goal:** You will dilate figures from a stated center and scale
factor, and state exactly what a dilation does to lines and lengths.
**Time:** ~50 minutes. **Materials:** notebook, grid paper, ruler,
protractor, tracing paper (optional), GeoGebra (optional).

## Readiness check (5 minutes)

1. On a grid, plot A(1, 2) and B(4, 2). What is AB? (Answer: 3 units.)
2. A segment is 5 cm long. It is copied at "200%". How long is the
   copy? (Answer: 10 cm.) At "50%"? (Answer: 2.5 cm.)
3. True or false: a translation changes the size of a figure.
   (Answer: false — Unit 02: rigid motions preserve distances.)

If (2) was hard, remember: "k times as long" means multiply the
length by k. That idea is the whole lesson.

## Teaching

### The definition

A **dilation** is determined by two choices: a **center** O (a point)
and a **scale factor** k (a positive number). The image of a point P
is the point P′ on the ray starting at O and passing through P, such
that

> OP′ = k · OP.

The center itself stays put: O′ = O. Every other point moves along
its ray from O — outward if k > 1, inward toward O if 0 < k < 1.
If k = 1, every point stays where it is (the identity).

- k > 1: an **enlargement** (the figure grows).
- 0 < k < 1: a **reduction** (the figure shrinks).
- k = 1: no change.

A dilation is *not* a rigid motion (unless k = 1): it changes
distances. That is the point. Unit 02 asked what stays the same
under motions that preserve distance; this unit asks what stays the
same when distance is scaled by one factor everywhere.

### Coordinates: center at the origin

When the center is the origin O(0, 0), the rule is simple:

> (x, y) → (kx, ky).

Why? The ray from the origin through (x, y) is the set of points
(tx, ty); the point at distance k times OP is (kx, ky) because
distances from the origin scale by |t|.

### Coordinates: center elsewhere

When the center is C(a, b), subtract C, scale, add C back:

> (x, y) → (a + k(x − a), b + k(y − b)).

In words: find the *vector* from the center to the point, scale the
vector by k, then add it back to the center. This "subtract, scale,
add back" pattern is the one to memorize; the origin rule is its
special case (a = 0, b = 0).

### What a dilation does to lines and lengths (G-SRT.1)

These two properties are the lesson's theorems. They are stated
here, verified experimentally in the lab, and used from now on:

1. **(G-SRT.1.a)** A dilation sends a line *not* passing through the
   center to a line **parallel** to it, and leaves a line passing
   through the center **unchanged** (each of its points moves along
   the line itself).
2. **(G-SRT.1.b)** A dilation scales **every** segment length by
   the scale factor: if AB is a segment, then A′B′ = k · AB.

Consequences you should notice immediately: angles are preserved
(the figure's shape does not distort — check this in the lab by
measuring an angle before and after), and the image of a triangle
is a triangle with the same angles and all sides scaled by k.

### A useful diagram (exact, deterministic)

The figure below is drawn from exact coordinates, not from the
generated illustration. Triangle ABC has A(1, 1), B(4, 1), C(1, 3).
Its image under the dilation with center O(0, 0) and k = 2 is
A′(2, 2), B′(8, 2), C′(2, 6). Notice AB = 3 and A′B′ = 6 = 2 · 3;
AC = 2 and A′C′ = 4 = 2 · 2; and the side BC, which does not pass
through the origin, maps to a parallel side B′C′.

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="340" height="300" viewBox="0 0 17 15" role="img" aria-label="Triangle ABC with vertices (1,1), (4,1), (1,3) and its image under a dilation centered at the origin with scale factor 2, vertices (2,2), (8,2), (2,6)">
  <g stroke="#888" stroke-width="0.05" fill="none">
    <path d="M0 0H17M0 1H17M0 2H17M0 3H17M0 4H17M0 5H17M0 6H17M0 7H17M0 8H17M0 9H17M0 10H17M0 11H17M0 12H17M0 13H17M0 14H17M0 15H17M0 0V15M1 0V15M2 0V15M3 0V15M4 0V15M5 0V15M6 0V15M7 0V15M8 0V15M9 0V15M10 0V15M11 0V15M12 0V15M13 0V15M14 0V15M15 0V15M16 0V15M17 0V15"/>
  </g>
  <g transform="translate(0,15) scale(1,-1)">
    <polygon points="1,1 4,1 1,3" fill="#cfe3ff" stroke="#1f5fc4" stroke-width="0.12"/>
    <polygon points="2,2 8,2 2,6" fill="#ffd9d9" stroke="#c41f1f" stroke-width="0.12"/>
    <line x1="0" y1="0" x2="8" y2="2" stroke="#1f5fc4" stroke-width="0.06" stroke-dasharray="0.3 0.3"/>
    <line x1="0" y1="0" x2="8" y2="6" stroke="#c41f1f" stroke-width="0.06" stroke-dasharray="0.3 0.3"/>
    <circle cx="0" cy="0" r="0.18" fill="#000"/>
  </g>
  <text x="8" y="292" font-size="11">Blue: ABC. Red: A'B'C' (k = 2, center O). Dashed rays from O.</text>
</svg>
```

Text-only alternative: "Triangle ABC has vertices (1, 1), (4, 1),
(1, 3). Under a dilation centered at the origin with scale factor
2, its image has vertices (2, 2), (8, 2), (2, 6). Each side doubles
in length, and each side of the image is parallel to the
corresponding side of the original."

## Worked Example 1 — dilating from the origin

Dilate triangle ABC with A(1, 2), B(4, 2), C(1, 5) using center
O(0, 0) and scale factor k = 2. Find the image vertices and check
two side lengths.

*Reasoning.* The center is the origin, so multiply each coordinate
by 2: A′(2, 4), B′(8, 4), C′(2, 10).

*Check.* AB is horizontal: from x = 1 to x = 4, so AB = 3. A′B′ is
horizontal: from x = 2 to x = 8, so A′B′ = 6 = 2 · 3. ✓. AC is
vertical: from y = 2 to y = 5, so AC = 3. A′C′ is vertical: from
y = 4 to y = 10, so A′C′ = 6 = 2 · 3. ✓. The third side: BC joins
(4, 2) to (1, 5), so BC = √(3² + 3²) = 3√2 ≈ 4.24; B′C′ joins
(8, 4) to (2, 10), so B′C′ = √(6² + 6²) = 6√2 ≈ 8.49 = 2 · BC. ✓.
Every length doubled, as G-SRT.1.b promises. The angles did not
change: angle A is 90° in both triangles.

## Worked Example 2 — dilating from a center that is not the origin

Find the image of P(5, 3) under the dilation with center C(1, 1)
and scale factor k = 1/2.

*Reasoning.* Subtract, scale, add back. The vector from C to P is
(5 − 1, 3 − 1) = (4, 2). Scale it by 1/2: (2, 1). Add it back to
C: (1 + 2, 1 + 1) = (3, 2). So P′ = (3, 2).

*Check.* CP = √(4² + 2²) = √20 ≈ 4.47. CP′ = √(2² + 1²) = √5 ≈
2.24. And √5 = (1/2)√20, since (1/2)√20 = √(20/4) = √5. ✓. The
point moved *toward* the center (k < 1 means reduction), and it
stayed on the ray from C through P: C(1, 1), P′(3, 2), P(5, 3) are
collinear, each step adding (2, 1).

*Common error to avoid:* multiplying P's coordinates directly by
1/2 gives (2.5, 1.5) — that is the dilation centered at the
*origin*, not at C. When the center is not the origin, always
subtract first.

## Guided practice (with hints)

**G1.** Dilate the segment from P(2, 1) to Q(6, 1) with center
O(0, 0), k = 3. *Hint: multiply coordinates; then check the
length.* (Answer in the teacher key: P′(6, 3), Q′(18, 3),
length 12 = 3 · 4.)

**G2.** A dilation with center C(2, 3) and k = 2 sends P to
P′(8, 9). Find P. *Hint: work backwards — halve the vector from C
to P′.* (Answer: P(5, 6).)

**G3.** A line ℓ does not pass through the dilation center. Its
image is parallel to ℓ — but is it the *same* line or a different
one? *Hint: unless k = 1, a point of ℓ moves off ℓ along its ray
from the center.* (Answer: a different, parallel line — except when
k = 1.)

**G4 (error analysis).** A learner dilates triangle ABC, A(2, 2),
B(6, 2), C(2, 6), with center C₀(2, 2) and k = 2, and reports
A′(4, 4), B′(12, 4), C′(4, 12). What went wrong, and what are the
correct images? *Hint: the center is a vertex this time.* (Answer:
the learner used the origin rule; the correct images are A′(2, 2)
— the center stays put — B′(10, 2), C′(2, 10).)

## Independent practice

Do Practice Set A (`practice.md`). It continues this lesson's
skills: dilations from the origin and from other centers, finding
a scale factor from a pair of lengths, and stating the line-image
properties.

## Application

A photocopier is set to 150%. A diagram segment measures 4 cm on
the original. On the copy it measures 6 cm — and the copy's whole
diagram is the original dilated with k = 1.5 about the copier's
reference corner. If a second copy is made from the copy at 150%
again, what is the overall scale factor from the original, and how
long is the segment? (Answer: 1.5 · 1.5 = 2.25; 4 · 2.25 = 9 cm.
Dilations compose by multiplying scale factors when the centers
agree — a fact Lesson 02 uses.)

## Exit check

A segment is 4 cm long. Its image under a dilation is 10 cm long.
What is the scale factor? If the same dilation is applied to a
7 cm segment, how long is its image? (Answers: k = 10/4 = 2.5;
7 · 2.5 = 17.5 cm.)

## Supports and extensions

- **Support:** use tracing paper: trace the figure, pin the center,
  and mark points at k times the distance along each ray with a
  ruler before drawing the image.
- **Support:** keep a "subtract, scale, add back" card on your desk
  until the center-elsewhere rule is automatic.
- **Extension:** prove G-SRT.1.b for a horizontal segment from
  coordinates, then argue the general case by rotating the segment
  (a rigid motion) — or by the distance formula directly.
- **Extension:** a dilation with k = −1 would send P to the point
  opposite O (a half-turn). Why does this unit define k > 0 only?
  (Because the image must lie on the *ray* from O through P, not
  its extension — the definition in this unit keeps dilations
  orientation-preserving in the similarity sense used by the
  standards.)

## Teacher note

The persistent misconception is the origin rule applied to a
non-origin center (see G4). Drill "subtract, scale, add back" with
one center-elsewhere example every practice session until it is
automatic. Also watch for learners who think a dilation changes
angles: have them measure one angle before and after in the lab.
Answer-key reference: `answer-key.md`, Lesson 01 and Practice
Set A.
