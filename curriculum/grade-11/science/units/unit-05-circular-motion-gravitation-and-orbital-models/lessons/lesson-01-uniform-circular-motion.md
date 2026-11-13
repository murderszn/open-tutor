# Lesson 01 — Uniform Circular Motion

**Unit 05 · Session S1 · ~50 minutes**
**Standards:** unit objective 1 (track objective 7)

## Student goal

By the end of this lesson I can explain why an object moving in a
circle at constant speed is still accelerating; I can compute its
period, frequency, speed, and centripetal acceleration; and I can
state the direction of that acceleration.

## Materials

Notebook, pencil, calculator. A stopwatch or phone timer (for the
readiness observation, adult-supervised).

## Readiness check (5 min)

1.1. A car drives around a roundabout at a steady 10 m/s. Its
speedometer never changes. Is the car accelerating? Give one
reason for your answer before reading on.
1.2. A stone on a string is whirled in a horizontal circle. The
string is cut. In which direction does the stone fly the instant
after the cut — toward the center, away from the center, or along
a straight line tangent to the circle? Sketch your prediction.

## Explicit teaching

**Velocity is a vector.** It has a speed *and* a direction.
Acceleration is any change in velocity — a change in speed, a
change in direction, or both. That is the whole key to this unit:

> An object moving in a circle at constant speed is accelerating,
> because its direction of motion keeps changing.

Picture the stone on the string. At the top of the circle it moves
to the right; a quarter-turn later it moves downward. Its speed is
the same, but its velocity has turned. Turning is a change in
velocity, and a change in velocity is acceleration. The acceleration
always points **toward the center of the circle** — it is called
**centripetal acceleration** (*centripetal* means "center-seeking").

**Uniform circular motion** means motion around a circle at
constant speed. Three numbers describe it:

- **Period** `T` — the time for one complete trip around the
  circle, in seconds.
- **Frequency** `f` — the number of trips per second, in hertz
  (Hz). Period and frequency are reciprocals: `f = 1 / T` and
  `T = 1 / f`.
- **Speed** `v` — distance around the circle divided by the time
  for one trip. One trip is the circumference `2π r`, so

  `v = 2π r / T = 2π r f`

The centripetal acceleration follows from the geometry of the
turning velocity (the full derivation is in the teacher guide;
the result is what you use):

`a_c = v² / r`

Two other forms are handy. Substituting `v = 2π r / T`:

`a_c = 4π² r / T²`

So centripetal acceleration grows with the square of the speed,
grows with the radius at fixed period, and shrinks with the radius
at fixed speed. Keep those three patterns straight — they are the
source of most errors in this lesson.

The diagram below shows the pattern: at two points on the circle,
the velocity arrow is tangent to the path and the acceleration
arrow points to the center.

<svg width="300" height="300" viewBox="0 0 300 300" role="img" aria-label="Diagram of uniform circular motion: a circle with two points marked. At each point a velocity arrow runs tangent to the circle and an acceleration arrow points toward the center.">
  <circle cx="150" cy="150" r="120" fill="none" stroke="#333" stroke-width="2"/>
  <circle cx="150" cy="150" r="3" fill="#333"/>
  <text x="150" y="140" font-size="13" text-anchor="middle">center</text>
  <circle cx="270" cy="150" r="6" fill="#b00"/>
  <line x1="270" y1="150" x2="270" y2="90" stroke="#007" stroke-width="2" marker-end="url(#ah)"/>
  <text x="282" y="120" font-size="13">v</text>
  <line x1="270" y1="150" x2="212" y2="150" stroke="#b00" stroke-width="2" marker-end="url(#ah)"/>
  <text x="228" y="140" font-size="13">a_c</text>
  <circle cx="150" cy="30" r="6" fill="#b00"/>
  <line x1="150" y1="30" x2="90" y2="30" stroke="#007" stroke-width="2" marker-end="url(#ah)"/>
  <text x="112" y="22" font-size="13">v</text>
  <line x1="150" y1="30" x2="150" y2="88" stroke="#b00" stroke-width="2" marker-end="url(#ah)"/>
  <text x="158" y="66" font-size="13">a_c</text>
  <defs>
    <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#333"/>
    </marker>
  </defs>
</svg>

*Diagram: uniform circular motion. The blue arrows (v) are tangent
to the circle; the red arrows (a_c) point to the center. Exact
geometry: circle center (150, 150), radius 120; points at (270, 150)
and (150, 30).*

**A common trap:** "constant speed" does not mean "constant
velocity," and it does not mean "no acceleration." Speed is a
number; velocity is a number *with a direction*. Circular motion
at constant speed changes velocity every instant — that is why
`a_c` is never zero while the object keeps turning.

## Worked examples (modeled reasoning)

**Example 1 — The merry-go-round.** A merry-go-round of radius
2.0 m makes one full turn every 4.0 s. Find the speed and the
centripetal acceleration of a rider at the edge.

*Reasoning:* The period is given: `T = 4.0 s`. One trip is the
circumference `2π r = 2π × 2.0 m = 12.6 m`. Speed is distance over
time: `v = 12.6 m / 4.0 s = 3.1 m/s`. Then
`a_c = v² / r = (3.1 m/s)² / 2.0 m = 9.6 / 2.0 = 4.8 m/s²`
(using unrounded values: `v = 3.14 m/s`, `a_c = 4.9 m/s²`).
The acceleration points toward the center — about half of `g`,
which is why a fast merry-go-round feels like a strong sideways
pull. The frequency is `f = 1 / T = 0.25 Hz`.

**Example 2 — The Moon's orbit (a preview of Lesson 05).** The
Moon orbits Earth at a mean distance of `3.84 × 10⁸ m` with a
period of 27.3 days. Find its orbital speed and centripetal
acceleration.

*Reasoning:* First convert the period to seconds:
`T = 27.3 × 24 × 3600 s = 2.36 × 10⁶ s`. Then
`v = 2π r / T = 2π × 3.84 × 10⁸ m / 2.36 × 10⁶ s = 1.02 × 10³ m/s`
— about 1.0 km/s. The centripetal acceleration is
`a_c = v² / r = (1.02 × 10³ m/s)² / 3.84 × 10⁸ m = 2.7 × 10⁻³ m/s²`.
That is tiny next to `g = 9.80 m/s²` at Earth's surface — but
remember this number. In Lesson 03 you will compute Earth's
gravitational pull at the Moon's distance and find the same
value. That match is the clue that gravity is what holds the
Moon in its circle.

## Guided practice

Work these with the adult or a partner; state the direction of
the acceleration before computing its size.

1.3. A car rounds a curve of radius 50 m at 15 m/s. Compute its
centripetal acceleration, and state its direction.
1.4. A bicycle wheel of radius 0.35 m spins so that a point on
the rim makes 2.0 revolutions per second. Find the period, the
rim speed, and the centripetal acceleration of a point on the rim.
1.5. Two identical cars take the same curve at the same speed, but
one takes the inside lane (radius 40 m) and the other the outside
lane (radius 60 m). Which car has the larger centripetal
acceleration, and by what factor? Explain using `a_c = v² / r`.

## Independent practice

1.6. A spinning ride has radius 8.0 m and a period of 5.0 s.
Compute the speed and centripetal acceleration of a rider.
Compare the acceleration with `g = 9.80 m/s²` in a sentence.
1.7. (Error analysis.) A learner writes: "The object moves at
constant speed, so its acceleration is zero." Identify the error
and rewrite the sentence correctly.
1.8. Earth rotates once per day. A point on the equator sits
`6.38 × 10⁶ m` from Earth's center. Compute its speed and its
centripetal acceleration. (Use `T = 24 h = 86,400 s`.) Is the
acceleration large or small compared with `g`? What does that
tell you about why you do not feel Earth's rotation?

## Application

A washing machine's spin drum has radius 0.25 m and spins at
3.0 revolutions per second. (a) Find the period, the speed of a
point on the drum wall, and its centripetal acceleration.
(b) Express the acceleration as a multiple of `g`. Explain in one
sentence why the spin cycle squeezes water out of clothes.
(Numbers are practice values.)

## Exit check

A satellite moves in a circle at constant speed. Is it
accelerating? If yes, in which direction, and what would happen
to its path if that acceleration suddenly vanished?

## Supports and extension

- **Reading/language access:** say "speed stays the same, but
  direction keeps changing" instead of "centripetal acceleration"
  until the idea is secure, then attach the word to the idea.
- **Alternate response mode:** trace a circle on paper with a
  finger at steady speed and point, at four positions, in the
  direction of motion and then toward the center; narrate both
  directions aloud.
- **Extension:** derive `a_c = 4π² r / T²` from `a_c = v² / r`
  and `v = 2π r / T`, showing each substitution step; then use
  it to check Example 1 without first computing `v`.

## Teacher note

The durable error is "constant speed means no acceleration."
It returns in every later lesson whenever a learner treats an
orbit as force-free. The readiness question 1.2 (the cut string)
is the diagnostic: the stone flies off along the tangent, which
is exactly what "no more centripetal force" predicts. Keep the
distinction between speed and velocity visible on the board all
week. Answer-key reference: items 1.1–1.8 and the application.
