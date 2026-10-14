# Lesson 05 — Projectile Motion: Predicting Range

**Unit 01 · Session S16 · ~50 minutes**
**Standards:** HS-PS2-1 (strand connection: kinematics-data background); unit objectives 3, 4

## Student goal

By the end of this lesson I can separate a projectile's motion into
independent horizontal and vertical parts; I can predict flight time,
maximum height, and range from launch height, speed, and angle using
`g = 9.80 m/s²`; and I can read a launch-scene diagram to compare the
two motions along the arc — using the spacing of equal-time markers
to tell which velocity component changes during the fall.

## Materials

Notebook, pencil, calculator, protractor. Safety glasses for the
Session S17 Launch Lab.

## Readiness check (5 min)

5.1. Resolve a launch velocity of 12.0 m/s at 35.0° above the
horizontal into v_x and v_y. (cos 35.0° = 0.81915, sin 35.0° =
0.57358.)
5.2. An object is dropped from rest from 10.0 m (up = +). How long
until it hits the ground? Show the equation choice.

(Adult: both must be solid — this lesson *is* Lesson 03's components
plus Lesson 04's free fall running at the same time.)

## Explicit teaching

**The independence of motion.** A projectile moves in two
one-dimensional motions at once, and they do not interfere:

- **Horizontal:** no forces (ignoring air resistance), so a_x = 0 and
  v_x stays constant. x = v_x · t.
- **Vertical:** gravity acts, so a_y = −9.80 m/s² (up = +) and the
  vertical motion is free fall: y = y₀ + v_y₀t − ½(9.80)t².

The two motions share only the clock — the same `t` appears in both
equations. Gravity bends the path into a parabola, but it never
changes the horizontal speed.

**Horizontal launch (v_y₀ = 0) from height y₀.** The fall time comes
from the vertical motion alone: 0 = y₀ − ½(9.80)t², so
t = √(2y₀ / 9.80). Then range R = v_x · t.

**Angled launch from ground level (y₀ = 0).** Split v₀ into
components. Time up to the apex: v_y = 0 = v_y₀ − 9.80·t_up, so
t_up = v_y₀ / 9.80; total flight T = 2·t_up (symmetric trip up and
down). Maximum height H = v_y₀² / (2 × 9.80). Range R = v_x · T.

**Where does mass appear?** Nowhere. In free fall, gravitational force
scales with mass but so does inertia, and they cancel — a fact the
Launch Lab tests directly. If your prediction formula contains `m`,
something went wrong.

## Worked examples (modeled reasoning)

**Example 1 — Horizontal launch: predict the range.**

A launcher at the edge of a 1.20 m high table fires a ball
horizontally at 6.00 m/s. Where does it land? (up = +, air resistance
ignored.)

*Separate the motions:* v_x = 6.00 m/s (constant), v_y₀ = 0, y₀ =
1.20 m.

*Vertical first — the clock:* 0 = 1.20 m − ½(9.80 m/s²)t²
t² = 2(1.20 m) / (9.80 m/s²) = 2.40 / 9.80 s² = 0.24490 s²
t = √0.24490 s = **0.495 s**.

*Horizontal — spend that time at constant speed:*
R = v_x · t = 6.00 m/s × 0.49487 s = **2.97 m**.

*Check:* units s × m/s = m ✓; three significant figures ✓; a
half-second fall from desk height at a brisk throw landing ~3 m away
is physically sensible.

**Example 2 — Angled launch: full prediction.**

A ball is launched from ground level at 10.0 m/s, 40.0° above the
horizontal.

*Resolve:* v_x = 10.0 × cos 40.0° = 10.0 × 0.76604 = **7.66 m/s**;
v_y₀ = 10.0 × sin 40.0° = 10.0 × 0.64279 = **6.43 m/s**.

*Flight time:* t_up = 6.4279 m/s / 9.80 m/s² = **0.656 s**; T =
2 × 0.65591 s = **1.31 s**.

*Maximum height:* H = (6.4279 m/s)² / (2 × 9.80 m/s²) = 41.318 /
19.6 m = **2.11 m**.

*Range:* R = 7.6604 m/s × 1.3118 s = **10.0 m**.

*Checks:* at the apex v_y = 6.43 − 9.80(0.656) ≈ 0 ✓; H from the
no-time equation with Δy = H gives the same 2.11 m ✓; units
consistent everywhere.

## Image activity — reading the launch scene

Study the illustration below, then answer the questions. A full
text-only description follows for anyone who cannot view the image.

![Illustration of a projectile launch scene: a metal ball leaves a wooden ramp attached to a table and follows a dotted trajectory down to the right, landing inside a dashed ellipse marked on the floor. The ball is drawn at six successive positions along the dotted path; the horizontal gaps between consecutive positions stay roughly equal while the vertical gaps grow larger toward the landing.](../assets/projectile-launch-illustration.png)

*Figure 1 — Launch scene: a ball leaves a ramp on a table and follows
a dotted trajectory to a marked landing zone on the floor. The six
ball positions mark equal time intervals: horizontal gaps stay roughly
equal while vertical gaps grow.*

**Text-only alternative (contains everything needed to answer):**
A wooden table has a short ramp attached to its right side, and a
metal ball sits at the ramp's end — the launch point. From there a
dotted curve descends to the right and ends at a dashed ellipse drawn
on the floor, marking the landing zone. The ball is drawn at six
positions along the curve, representing equal time intervals: the
horizontal distance between consecutive positions stays roughly equal
all the way down, while the vertical distance between consecutive
positions starts small near the launch and grows larger toward the
landing. The ramp tilts slightly downward at the launch point, so the
ball leaves with a small downward component as well as its horizontal
motion. No numbers, arrows, or labels appear on the trajectory.

Answer in the notebook:

5.3. Using the horizontal-launch method from Example 1: a launcher at
1.50 m height fires horizontally at 5.00 m/s. Predict the range.
5.4. Use Figure 1's equal-time markers.
a) The horizontal gaps between consecutive ball positions stay roughly
equal, while the vertical gaps grow larger toward the landing. In two
sentences, state what each pattern tells you about that component of
the velocity.
b) The ramp tilts slightly downward at the launch point. Does this
change *which* motion determines the flight time? Explain in one
sentence.
5.5. Where is the ball moving fastest — just after launch or just
before landing? Justify with the marker spacing, then confirm with
the independence-of-motion reasoning: which velocity component changes
during the fall, and which does not?

## Independent practice

5.6. A tennis serve leaves the racket horizontally from 2.50 m height
at 15.0 m/s. Compute the flight time and the range. (Three
significant figures.)
5.7. A ball is launched from ground level at 12.0 m/s, 30.0° above
the horizontal. Compute v_x, v_y₀, total flight time, maximum
height, and range.
5.8. Two launchers fire identical balls at the same speed, one at 30°
and one at 60° above the horizontal from ground level. Without
computing full trajectories, use the range reasoning to predict which
lands farther — or whether they tie. Then verify with the range
formula for one speed of your choice.

## Application

5.9. Your Launch Lab bench (Session S17) will use a 1.20 m launch
height and about 6.00 m/s launch speed — Example 1 predicts a 2.97 m
range, but the floor target zone is only 2.80 m from the launch
point.
a) By how much does the prediction overshoot the target zone?
b) Name two launch adjustments that would bring the landing into the
zone, and for one of them compute the new predicted range.
c) Your measured range will include uncertainty from the speed and
height measurements. In two sentences, explain how you will decide
whether a miss is "close enough to confirm the prediction."

## Exit check (5 min)

5.10. Explain in two sentences why the projectile's mass does not
appear in any range prediction, and name the experiment in the Launch
Lab that tests this claim.

## Reading and language support

- The phrase "independence of motion" means *the horizontal motion
  does not know the vertical motion is happening*. Rehearse it with
  the image: cover the vertical arrows — the horizontal arrows march
  on unchanged.
- Session S17 pre-read: the Launch Lab procedure in `../project.md`;
  the adult must approve the setup before any launch.
- Glossary: *projectile, trajectory, apex, range, flight time,
  independence of motion, launch angle*.

## Alternate response mode

The learner may answer 5.4 and 5.5 orally while pointing at the
corresponding marker gaps in Figure 1. The adult scribes the reasoning
verbatim into the notebook.

## Extension

For a fixed launch speed from ground level, the range formula is
R = v₀²·sin(2θ)/9.80. Use it to find the angle that maximizes range,
and explain in words why 30° and 60° give the same range (see 5.8).

## Teacher note (misconception)

The most stubborn error is the "take turns" model: learners believe
the projectile finishes moving horizontally and *then* falls, or that
it "pauses" at the apex. The image activity attacks this directly —
the equal horizontal gaps between the equal-time markers show the
horizontal motion never pauses or slows, while the growing vertical
gaps show gravity acting only on the vertical component. A second
trap: adding the horizontal and vertical *distances* as if they were
the trajectory length; range is horizontal distance only. Never let a
speed appear without asking "speed in which direction?"

*Answers for all numbered items (5.1–5.10) are in `../answer-key.md`
under "Lesson 05".*
