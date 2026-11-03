# Lesson 05 — Collision Safety: Stretching the Time

**Unit 04 · Session S11 · ~50 minutes**
**Standards:** unit objective 5 (track objective 6); HS-PS2-3

## Student goal

By the end of this lesson I can compute the average force in a
collision from `Δp` and `Δt`, explain why a longer collision time
means a smaller force, and judge a safety design against that
calculation.

## Materials

Notebook, pencil, calculator. The project design session (S12) follows
this lesson.

## Readiness check (5 min)

5.1. You must catch a fast ball. Do you hold your hands rigid, or
let them move back with the ball as you catch it? Which choice
spreads the stop over a longer time, and which do you expect to
sting less?

5.2. A car hits a solid concrete wall and a car hits a row of
plastic barrels filled with sand. Both cars stop from the same speed.
Is the momentum change the same in both crashes? Is the force the
same? Answer each question separately.

## Explicit teaching

Lesson 02 gave the trade-off; this lesson turns it into design.
Rearrange the impulse–momentum theorem for the average force during
a collision:

> `F_avg = Δp / Δt`

Read it as a design rule: **for a fixed momentum change, average
force is inversely proportional to collision time.** Double the time,
halve the force. Stretch the time tenfold, cut the force to a tenth.
No safety device changes how much momentum must be lost — a car
travelling at 15 m/s must lose all of its momentum to stop, whatever
it hits. What a device can change is **how long the loss takes**,
and **over what area the force is spread** (spreading matters for
injury, because pressure is force per area, but it is a separate
effect from the impulse calculation).

Four familiar devices, one principle:

- **Crumple zones.** The front of the car deforms over a distance,
  so the passenger compartment decelerates over a longer time than
  a rigid body would. The car is sacrificed; the time is bought.
- **Airbags and seat belts.** The bag inflates and the belt stretches
  slightly, extending the occupant's stopping time from a few
  hundredths of a second (dashboard) to a few tenths of a second,
  and spreading the force over the chest and lap instead of a small
  contact patch.
- **Helmets.** The foam liner crushes, extending the head's stopping
  time and spreading the force. A cracked helmet that absorbed a
  crash has done its job and must be replaced: its crush distance is
  spent.
- **Padded landing surfaces and sand barrels.** Same idea for a
  falling object or a roadside barrier: a longer, softer stop.

**What a good design answer does.** It never says "this design
reduces the momentum change" (for a full stop, the change is fixed).
It states the momentum change, estimates or measures the stopping
time with and without the device, computes both average forces, and
compares them — then names the trade-offs: a device that doubles
stopping time but doubles the size or mass may fail its constraints.
HS-PS2-3's assessment boundary is exactly this level: qualitative
evaluation plus algebraic manipulation, which is what the project
rubric asks for.

**Safety note for the project.** All project tests drop an inanimate
payload, never a person, and never aim a moving object at a person.
Falling-object tests are adult-supervised, with a clear drop zone
and eye protection where a device could shed fragments. See
`project.md` for the full procedure and the simulation alternative.

## Worked examples (modeled reasoning)

**Example 1 — Occupant, rigid vs. cushioned stop.** A 60 kg
occupant travels at 12 m/s and is brought to rest. Compare the
average force for a 0.020 s stop (rigid dashboard) and a 0.20 s stop
(airbag and belt).

*Reasoning:* The momentum change is fixed first; only the time
changes.

`Δp = m(v_final − v_initial) = (60 kg)(0 − 12 m/s) = −720 kg·m/s`
(magnitude 720 kg·m/s)

- Rigid: `F_avg = 720 / 0.020 = 36,000 N`
- Cushioned: `F_avg = 720 / 0.20 = 3,600 N`

The cushioned stop applies one tenth of the force — 3,600 N instead
of 36,000 N — for the same momentum change, because it takes ten
times as long. (Practice values; real crash pulses are not
rectangular, so these are average forces, not peak forces.)

**Example 2 — Falling payload, the project's numbers.** A 0.20 kg
payload is dropped from 1.5 m. It hits the ground at
`v = √(2gh) = √(2 × 9.80 × 1.5) = 5.4 m/s` (Unit 03 energy method)
and stops. Compare a hard stop in 0.010 s with a cushioned stop in
0.10 s.

*Reasoning:* Momentum at impact is `p = (0.20 kg)(5.4 m/s) =
1.1 kg·m/s` (1.08 rounded to two significant figures). The momentum
change on stopping is 1.1 kg·m/s in both cases.

- Hard: `F_avg = 1.08 / 0.010 = 108 N` (about 110 N)
- Cushioned: `F_avg = 1.08 / 0.10 = 10.8 N` (about 11 N)

A tenfold longer stop gives a tenfold smaller average force. The
project's job is to build a device that actually achieves the longer
stop — and to measure whether it did, using a damage criterion
rather than claiming a time it did not measure.

## Guided practice

Work these with the adult or a partner; compute `Δp` before dividing
by any time.

5.3. A 0.50 kg ball moving at 8.0 m/s is stopped in 0.0050 s by a
wall, and in a second test in 0.050 s by a pad. Find the momentum
change and both average forces.

5.4. A helmet extends a head's stopping time by a factor of 5 for
the same momentum change. By what factor does the average force
change, and in which direction?

5.5. Two designs protect the same payload with the same momentum
change, 6.0 kg·m/s. Design A stops it in 0.030 s; design B in
0.12 s. Compute both average forces, choose the better design on
force alone, and name one trade-off (size, mass, or reusability)
that could still make A the better choice overall.

## Independent practice

5.6. A 70 kg occupant travels at 10 m/s and stops. Find the
momentum change, then the average force for a 0.025 s stop
(dashboard) and a 0.25 s stop (belt and airbag).

5.7. A 1,000 kg car travels at 15 m/s and stops. Find its momentum
change, then the average force for a 0.10 s stop and a 0.50 s stop.

5.8. **Error analysis.** A learner writes, "Airbags work because
they reduce the momentum change in a crash." Correct the sentence:
what stays the same, what changes, and what second effect (force
spread over area) should be mentioned separately?

## Application

5.9. **Project design draft.** For the Protective-Device
Investigation (`project.md`): choose two cushioning materials you
have at home, predict which will give the longer stopping time and
why, state the device constraints (size, mass, payload), and write
the prediction calculation (impact speed, momentum, and the average
force for a 0.010 s hard stop) that your test will be compared
against. Bring this draft to Session S12.

## Exit check

5.10. In one sentence, explain why extending collision time reduces
average force, naming the equation that shows it.

## Supports and extensions

- **Reading/language access:** Always write "same momentum change,
  longer time, smaller force" before substituting numbers.
- **Alternate response mode:** A learner may answer force
  comparisons as a ratio ("ten times longer, so one tenth the
  force") before computing absolute values.
- **Extension:** Real crash forces are not constant, so average
  force understates the peak. If a force–time pulse is triangular
  with the same impulse as a rectangular pulse, its peak is twice
  the average. For Example 1's cushioned stop (impulse 720 N·s over
  0.20 s), the triangular peak would be `2 × 3,600 = 7,200 N`.
  Explain why a design judged only on average force could still fail
  on peak force, and why the project's damage criterion is a better
  judge than a single computed number.

## Teacher note

Likely misconceptions: "safety devices reduce momentum change";
confusing average with peak force; forgetting that stopping distance
and stopping time are related but not identical (a longer crush
distance gives a longer time only if the speed profile allows it).
Answers: see the answer key, Lesson 05.
