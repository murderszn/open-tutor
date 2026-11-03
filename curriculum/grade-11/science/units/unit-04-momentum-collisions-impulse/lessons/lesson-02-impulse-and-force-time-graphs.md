# Lesson 02 — Impulse: Force Acting Over Time

**Unit 04 · Session S3 · ~50 minutes**
**Standards:** unit objective 2 (track objective 6)

## Student goal

By the end of this lesson I can calculate impulse from a force and a
time, from a force–time graph, and from a velocity change, and I can
explain why stopping slowly needs a smaller average force than
stopping suddenly.

## Materials

Notebook, pencil, calculator, ruler (for measuring graph areas).

## Readiness check (5 min)

2.1. A ball is stopped by a brick wall and, in a second test, by a
thick foam pad. In which test does the ball take longer to stop, and
which stop would you expect to feel as the harder hit? (No numbers
yet — answer from experience.)

2.2. A 1.0 kg object speeds up from rest to 4.0 m/s. What is its
change in momentum?

## Explicit teaching

Lesson 01 defined momentum. This lesson asks: **how does momentum
change?** Only a force can change it, and the change depends on two
things — how large the force is, and how long it acts. Their product
is called **impulse**:

> `J = F × Δt`

where `J` is impulse, `F` is the (average) force in newtons, and `Δt`
is the time in seconds. The **impulse–momentum theorem** says this
product is exactly the change in momentum:

> `J = Δp = m(v_final − v_initial)`

Impulse is measured in newton-seconds, N·s — and since
`1 N = 1 kg·m/s²`, one N·s is exactly one kg·m/s, the unit of
momentum. The two sides of `J = Δp` therefore carry the same unit,
as they must. Impulse, like momentum, is a vector in one dimension:
its sign follows the force's direction, right positive.

**Why the theorem matters.** For a fixed momentum change, force and
time trade off against each other: `F_avg = Δp / Δt`. Halve the
stopping time and the average force doubles; stretch the stopping
time tenfold and the average force falls to a tenth. Nothing about
the total momentum change has altered — only how it is spread out.
Lesson 05 turns this trade-off into engineering.

**Force–time graphs.** When the force is not constant, impulse is the
**area under the force–time graph** between the start and end times.
For the shapes in this unit:

- Rectangle: area = base × height.
- Triangle: area = ½ × base × height.
- A graph below the time axis gives negative area — a force to the
  left, a negative impulse.

This is the same "area means something" idea as velocity–time graphs
in Unit 01 (area = displacement); here area = momentum change.

**Stopping vs. bouncing — the trap to notice now.** An object that
stops changes its momentum from `mv` to zero: `Δp = −mv`. An object
that bounces back at the same speed changes its momentum from `+mv`
to `−mv`: `Δp = −2mv`, twice as large. Bouncing demands twice the
impulse of stopping, which is why a bouncing ball can hit harder than
one that sticks — and why Lesson 05's designs aim to prevent a hard
rebound as well as to cushion a stop.

## Worked examples (modeled reasoning)

**Example 1 — A constant force.** A 0.40 kg ball at rest is pushed
with a constant force of 20 N for 0.30 s. What impulse does it
receive, and how fast is it moving afterwards?

*Reasoning:* Impulse is force times time; then the velocity change
is impulse divided by mass, since `Δp = mΔv`.

`J = FΔt = (20 N)(0.30 s) = 6.0 N·s`
`Δv = J / m = 6.0 / 0.40 = 15 m/s`

Starting from rest, the ball moves at 15 m/s in the direction of the
force. Check the units: N·s divided by kg gives m/s, as required.

**Example 2 — A triangular force–time graph.** A force rises
steadily from 0 to 50 N over 0.40 s and then stops. It acts on a
2.0 kg object at rest. Find the impulse and the object's final speed.

*Reasoning:* The force is not constant, so multiply no single force
by the time. The impulse is the triangular area under the graph.

`J = ½ × base × height = ½ × (0.40 s) × (50 N) = 10 N·s`
`Δv = J / m = 10 / 2.0 = 5.0 m/s`

The object ends at 5.0 m/s. A common error is to use the peak force
(50 N) as if it acted for the whole 0.40 s, giving 20 N·s — double
the true impulse. The area, not the peak, is the impulse.

## Guided practice

Work these with the adult or a partner; write `J = Δp` before
substituting numbers.

2.3. A force of 120 N acts for 0.050 s on a 0.50 kg object at rest.
Find the impulse and the object's final speed.

2.4. A force–time graph is a rectangle: 30 N for 0.20 s. Find the
impulse, and the velocity change of a 1.5 kg object.

2.5. A 0.20 kg ball moves right at 10 m/s, hits a wall, and rebounds
left at 8.0 m/s. Find its change in momentum and the impulse the
wall gave it.

## Independent practice

2.6. A 1.2 kg object changes velocity from +3.0 m/s to −1.0 m/s.
Find the impulse that acted on it.

2.7. A 0.30 kg ball moving at 12 m/s is stopped in 0.060 s. Find the
magnitude of the average stopping force.

2.8. Two pushes act on identical objects at rest. Push A: 200 N for
0.020 s. Push B: 40 N for 0.10 s. Compute both impulses and say
whether the final speeds are equal. Explain in one sentence.

## Application

2.9. **Airbag arithmetic.** A 60 kg occupant travels at 12 m/s and
is brought to rest. (a) Find the momentum change. (b) Find the
average force if the stop takes 0.020 s (rigid dashboard) and if it
takes 0.20 s (airbag and belt). (c) By what factor does the longer
stop reduce the force?

## Exit check

2.10. Show, using units only, that 1 N·s equals 1 kg·m/s, and state
in one sentence what impulse equals.

## Supports and extensions

- **Reading/language access:** Always write the sentence "impulse
  equals change in momentum" before the symbols `J = Δp`.
- **Alternate response mode:** For graph problems, shade the area
  under the graph and label it with its computed value before doing
  any division by mass.
- **Extension:** A force–time graph shaped as a trapezoid (rises to
  40 N in 0.10 s, holds 40 N for 0.20 s, falls to zero in 0.10 s) has
  area ½ × (0.40 + 0.20) × 40 = 12 N·s. Verify this by splitting the
  shape into two triangles and a rectangle, and find the velocity
  change it gives a 3.0 kg object (4.0 m/s).

## Teacher note

Likely misconceptions: using peak force instead of graph area;
forgetting that a bounce doubles the momentum change; dropping the
sign on `Δp = m(v_final − v_initial)`. Answers: see the answer key,
Lesson 02.
