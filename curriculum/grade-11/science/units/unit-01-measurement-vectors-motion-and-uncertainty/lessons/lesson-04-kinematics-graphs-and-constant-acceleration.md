# Lesson 04 — Kinematics Graphs and Constant Acceleration

**Unit 01 · Session S11 · ~50 minutes**
**Standards:** HS-PS2-1 (strand connection: kinematics-data background); unit objectives 3, 4

## Student goal

By the end of this lesson I can read a position–time, velocity–time,
and acceleration–time graph and say what motion it shows; I know what
each graph's slope and area mean; and I can solve constant-acceleration
problems with the kinematic equations, carrying units and significant
figures through every step. I use `g = 9.80 m/s²` for free fall.

## Materials

Notebook, pencil, calculator, graph paper or a ruler for sketching
axes.

## Readiness check (5 min)

4.1. Points (2.0 s, 6.0 m) and (5.0 s, 15.0 m) lie on a position–time
graph. Compute the slope and state its unit. What physical quantity
does the slope represent?
4.2. A velocity–time graph shows a triangle with base 4.0 s and height
20.0 m/s. Compute its area and state the unit. What physical quantity
does the area represent?

(Adult: if either is insecure, spend 10 minutes on slope-as-rate and
area-as-product before continuing — the whole lesson is built on
those two ideas.)

## Explicit teaching

**The three graphs and what they mean.** For motion along one axis:

| Graph | Slope means | Area under the curve means |
|---|---|---|
| position–time (x–t) | velocity (m/s) | — (no simple meaning; don't use it) |
| velocity–time (v–t) | acceleration (m/s²) | displacement (m) |
| acceleration–time (a–t) | "jerk" (not used here) | change in velocity (m/s) |

A straight x–t line means constant velocity; a *curved* x–t graph
means velocity is changing. A horizontal v–t line means constant
velocity; a sloped v–t line means constant acceleration. Read the
*shape* before computing anything — the shape is the story.

**Displacement vs. distance.** *Displacement* is change in position
(final − initial), with a sign; *distance* is the total path length,
always positive. If you walk 12 m east then 8 m west, your displacement
is +4 m east but your distance is 20 m.

**The constant-acceleration equations.** When acceleration `a` is
constant (including free fall, where a = −9.80 m/s² if up is positive):

- v = v₀ + at *(velocity from acceleration over time)*
- Δx = v₀t + ½at² *(displacement from initial velocity and time)*
- v² = v₀² + 2aΔx *(no time in the problem? use this one)*
- Δx = ½(v₀ + v)t *(average-velocity form — often the fastest)*

**Problem-solving routine** (use it every time): 1) sketch and choose a
sign convention (write it down: "up = +"); 2) list knowns with units;
3) choose the equation containing the unknown but not the quantities
you lack; 4) substitute with units; 5) check units, sign, and
reasonableness.

## Worked examples (modeled reasoning)

**Example 1 — Choosing the equation.**

A car accelerates from 12.0 m/s to 28.0 m/s while covering 160 m. Find
its acceleration.

*Routine:* sign convention — direction of motion is positive.
Knowns: v₀ = 12.0 m/s, v = 28.0 m/s, Δx = 160 m. Unknown: a. No time
given or asked — use v² = v₀² + 2aΔx.

*Substitute with units:*
a = (v² − v₀²) / (2Δx)
= ((28.0 m/s)² − (12.0 m/s)²) / (2 × 160 m)
= (784 m²/s² − 144 m²/s²) / (320 m)
= 640 m²/s² / 320 m = **2.00 m/s²**.

*Check:* units m²/s² ÷ m = m/s² ✓. Positive, same direction as motion
(speeding up) ✓. Three significant figures ✓. A typical car
accelerates at 2–4 m/s², so this is reasonable.

**Example 2 — Reading a v–t graph.**

A velocity–time graph: from t = 0 to 4.00 s, velocity rises linearly
from 0 to 20.0 m/s; from 4.00 s to 10.0 s it stays at 20.0 m/s.

*Story first:* the object speeds up uniformly for 4 s, then cruises at
constant velocity for 6 s.

*Displacement (area):* triangle ½ × 4.00 s × 20.0 m/s = 40.0 m; plus
rectangle 6.00 s × 20.0 m/s = 120 m. Total Δx = **160 m**.

*Acceleration (slope):* 0–4 s: (20.0 − 0) m/s / 4.00 s = **5.00 m/s²**;
4–10 s: **0 m/s²** (horizontal line = no change in velocity).

*Check against the equations:* Δx = ½at² for the first phase =
½ × 5.00 × 16.0 = 40.0 m ✓ — graph and equation agree, as they must.

## Guided practice (with hints)

4.3. A position–time table: t (s): 0.0, 2.0, 4.0, 6.0; x (m): 0.0,
10.0, 20.0, 30.0.
a) Find the velocity from the slope. What kind of motion is this?
b) Predict x at t = 8.0 s and explain your assumption.
*Hint:* slope = Δx/Δt between any two points. If the slope is the
same everywhere, the velocity never changes.

4.4. A car moving at 25.0 m/s brakes to a stop over 75.0 m with
constant acceleration.
a) Find the acceleration (use the no-time equation).
b) Find the stopping time.
*Hint:* "to a stop" means v = 0. Watch the sign of a — which
direction is positive?

## Independent practice

4.5. An acceleration–time graph shows a constant 3.00 m/s² from
t = 0 to 4.00 s for an object starting from rest.
a) What is the change in velocity? (Use the area.)
b) Find the displacement using Δx = v₀t + ½at², and check it against
a second equation.
4.6. A ball is dropped from rest from a 20.0 m platform (up = +,
so a = −9.80 m/s²).
a) How long until it hits the ground?
b) What is its velocity just before impact?
c) A classmate says the answer to (a) would double if the platform
were 40.0 m. Without computing, explain why that is wrong, then
compute the 40.0 m time to check yourself.

## Application

4.7. A small plane needs 85.0 m/s to lift off. The runway is 900 m
long, and the plane can sustain 4.50 m/s².
a) What acceleration is *required* to reach liftoff speed within the
runway? Show the equation choice.
b) Is the available acceleration enough? Compute the safety margin
in m/s² and in extra runway meters if it lifts off early (or state
the shortfall if it cannot).
c) Name one real-world factor this constant-acceleration model
ignores.

## Exit check (5 min)

4.8. On a velocity–time graph, what does a horizontal line segment
mean? What does a line sloping downward mean?
4.9. A ball is thrown straight up. Sketch (in words) its v–t graph
from release until it returns to the release height, and state the
graph's slope. (Take up as positive.)

## Reading and language support

- Session S12 drill: for each new graph, write one sentence of story
  *before* any computation — "the object speeds up, then cruises."
  Numbers without the story are the main source of sign errors.
- Glossary: *displacement, velocity, acceleration, slope, area under
  the curve, sign convention, free fall*. Each entry gets a unit and
  a one-line example.
- The resource pack's graph-reading video search is assigned for
  Session S12; the adult previews for caption quality.

## Alternate response mode

The learner may answer graph-interpretation items (4.8, 4.9) orally
while tracing the described graph in the air or on paper. The
assessed skill is connecting shape → motion, not draftsmanship.

## Extension

Derive the average-velocity form Δx = ½(v₀ + v)t from the area of a
trapezoid on a v–t graph (v₀ and v as the two parallel sides, t as
the width). Then use it to re-solve Example 1's numbers and confirm
you get the same displacement.

## Teacher note (misconception)

Three traps dominate: (1) reading the *area* under an x–t graph as a
distance — it means nothing; insist "slope on x–t, area on v–t";
(2) sign errors from an undeclared convention — require the written
"up = +" line on every free-fall problem; (3) using v² = v₀² + 2aΔx
with Δx as a *distance* when the motion reverses direction — the
equation needs displacement with the sign convention, not path
length.

*Answers for all numbered items (4.1–4.9) are in `../answer-key.md`
under "Lesson 04".*
