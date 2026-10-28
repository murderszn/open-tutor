# Lesson 01 — Vectors as Quantities: Magnitude, Direction, Components

**Goal:** Represent a vector in geometric, component, and
magnitude-direction form, and move fluently among the three.

**Time:** ~50 minutes. **Materials:** graph paper, protractor or
Desmos, the deterministic diagram in `../assets/vector-polar-diagram.svg`.

**Readiness check (5 minutes):** Find the length of the hypotenuse of a
right triangle with legs 3 and 4, and the acute angle whose tangent is
4/3. (Answers: 5; about 53.1°.) If either is shaky, re-do it from the
Pythagorean Theorem and a right-triangle sketch before starting — this
lesson is that triangle, repeated with arrows.

## 1. What a vector is — and is not

A **vector** is a quantity with a **magnitude** (how big) and a
**direction** (which way). Displacement, velocity, and force are
vectors. Distance, speed, and mass are not: they have size but no
direction, and are called **scalars**.

Draw a vector as an arrow, a **directed line segment**. Its length is
its magnitude; the direction it points is its direction. Two arrows with
the same length and the same direction are the **same vector**, even if
they start at different points. That is the first unlearning in this
unit: a vector is not a location. The arrow starting at `(1, 2)` and the
arrow starting at `(0, 0)` are the same vector if they run the same
distance in the same direction.

Notation: a vector is written in bold or with an arrow in print; in
handwriting and in this unit, write `v`. Its magnitude is `|v|`. In
**component form**, `v = <a, b>` means: go `a` units horizontally and
`b` units vertically. The unit vectors `i = <1, 0>` (east) and
`j = <0, 1>` (north) let us write the same vector as `v = a i + b j`.

If a vector runs from initial point `(x₁, y₁)` to terminal point
`(x₂, y₂)`, its components are the differences (N-VM.2):

`v = <x₂ − x₁, y₂ − y₁>`

Its magnitude comes from the Pythagorean Theorem, and its **direction
angle** `θ` — measured counterclockwise from the positive x-axis, the
standard position used throughout this unit — from tangent, with
quadrant care:

`|v| = √(a² + b²)`, `tan θ = b/a` (then place `θ` in the correct quadrant)

## 2. Worked examples

**Example 1 — components, magnitude, direction.** Let `v = <3, 4>`.

Magnitude: `|v| = √(3² + 4²) = √25 = 5`.

Direction: `tan θ = 4/3`, so the reference angle is
`arctan(4/3) ≈ 53.13°`. Both components are positive, so the vector is
in Quadrant I and `θ ≈ 53.13°`. In magnitude-direction form:
`v` has magnitude 5 at about 53.1°.

Its **unit vector** — the vector of length 1 in the same direction — is
`v / |v| = <3/5, 4/5>`. Check: `√((3/5)² + (4/5)²) = √(9/25 + 16/25) = 1`.
Every vector can be rebuilt from its magnitude and its unit vector:
`v = |v| · (unit vector) = 5 · <3/5, 4/5> = <3, 4>`. That rebuild is
N-VM.5.a in action: `v = |v| cos θ i + |v| sin θ j`, since
`cos 53.13° = 3/5` and `sin 53.13° = 4/5`.

**Example 2 — components from two points, and the quadrant trap.** A
displacement runs from `(1, 2)` to `(4, 6)`.

Components: `<4 − 1, 6 − 2> = <3, 4>` — the same vector as Example 1,
despite starting elsewhere. Magnitude 5, direction about 53.1°.

Now take `w = <−5, 12>`. Magnitude: `√(25 + 144) = √169 = 13`.
`arctan(12/5) ≈ 67.38°` is only the **reference** angle. The components
are negative-then-positive, so `w` is in Quadrant II, and
`θ = 180° − 67.38° = 112.62°`. A calculator's arctangent alone would
have answered 67.38° — wrong quadrant, wrong direction. **Rule: write
the quadrant before you write the angle, every time.** The same trap
appeared with inverse trigonometric functions in Unit 02; it is worse
here because a wrong quadrant sends a boat the wrong way.

**Example 3 — magnitude-direction form to components.** A wind blows
at 20 km/h at a direction angle of 150°.

Components: `x = 20 cos 150° = 20 · (−√3/2) = −10√3 ≈ −17.32`,
`y = 20 sin 150° = 20 · (1/2) = 10`. So the wind vector is about
`<−17.3, 10>` km/h: westward and northward, as 150° (Quadrant II)
requires. If your components come out eastward for a 150° vector, you
have mixed up sine and cosine or dropped a sign — check against the
quadrant first, not the calculator.

## 3. Guided practice

Work these with a sketch for each, and say the quadrant aloud before
the angle.

1. For `v = <6, 8>`, find `|v|`, its direction angle, and its unit vector.
2. A displacement runs from `(−2, 3)` to `(2, 6)`. Find its components
   and magnitude. Is it the same vector as `<4, 3>`? Why?
3. A vector has magnitude 10 at direction angle 210°. Find its
   components, exactly where possible and approximately otherwise.
   Which quadrant is it in, and how do you know before computing?

## 4. Independent practice

1. Find magnitude and direction for `<5, −12>` and for `<−8, −15>`.
   (Both have integer magnitudes; both need quadrant care.)
2. A force has magnitude 26 N at 135°. Write it in component form
   exactly, then approximately.
3. Explain in two or three sentences why the vectors from `(0, 0)` to
   `(3, 4)` and from `(2, 1)` to `(5, 5)` are the same vector, and what
   would have to change for them to be different vectors.
4. **Error analysis.** A classmate writes: "`<−3, 4>` has magnitude 5
   and direction `arctan(−4/3) ≈ −53.13°`." Identify the error, give
   the correct direction, and explain the rule the classmate broke.

## 5. Application

A hiker walks 5 km east, then 12 km north, in two legs. Treat each leg
as a vector and the whole walk as one displacement vector. Find the
displacement's components, magnitude, and direction angle. Then explain
why the total distance walked (17 km) is not the displacement's
magnitude — this is N-VM.4.a's warning in advance: magnitudes do not
add the way the vectors do.

## 6. Exit check

Write `v = <−9, 12>` in all three forms: component form (given),
magnitude-direction form, and as a magnitude times a unit vector.
State its quadrant before its angle.

## Supports and extensions

- **Support:** Start every vector on graph paper with its tail at the
  origin (a position vector) until component form feels automatic; only
  then move tails elsewhere. Use the SVG diagram's component triangle
  as a template for every direction computation.
- **Alternate response mode:** A learner may answer direction questions
  by pointing and by stating "Quadrant II, reference angle …" orally
  before writing the angle, rather than writing a full paragraph.
- **Extension:** Prove that the unit vector of any nonzero vector has
  magnitude 1, using `|v| = √(a² + b²)`; then show that scaling a vector
  by a negative scalar reverses its direction but does not change the
  line it lies on. (This anticipates Lesson 02's scalar multiplication.)

## Teacher note

The load-bearing misconceptions are (a) vectors as locations, and
(b) the calculator's arctangent as the direction angle. Insist on the
quadrant sentence before the angle until it is automatic; the answer
key's solutions all model it. See `../teacher-guide.md` (adults only)
and `../answer-key.md` for worked solutions.
