# Lesson 06 — Power and Spreadsheet Energy Budgets

**Goal:** You will be able to calculate power and build a
spreadsheet energy budget that finds an unknown energy change
from the known ones.
**Time:** ~50 minutes. **Materials:** notebook, calculator,
spreadsheet app (or paper table).
**Readiness check (3 minutes):** Two learners lift identical
boxes to the same shelf. One takes 4 s, the other 8 s. They do
the same work — but who uses more power? (Answer: the faster
one, twice as much. Same energy, different rate. This lesson
is about rates — and about bookkeeping a whole system at once.)

## Teaching

**Power** is the rate at which work is done or energy is
transferred:

```
P = W / t
```

Power is measured in **watts (W)**: `1 W = 1 J/s`. A 100 W
light bulb transfers 100 J every second; a 1000 W (1 kW)
heater transfers 1000 J every second. Power cares about time;
energy does not. Climbing a flight of stairs slowly or quickly
takes the same energy — but the faster climb needs more power,
which is why it feels harder.

For a constant force `F` acting along the motion at speed `v`,
there is a second form:

```
P = Fv
```

It follows from `P = W/t = Fd/t = Fv`. It is the right tool
when a problem gives a force and a speed (a cyclist against air
resistance, a motor lifting at constant velocity) rather than
an energy and a time. Distinguish **average power** (`W/t`
over an interval) from **instantaneous power** (`Fv` at one
moment) — they agree only when the rate is steady.

The second half of this lesson turns energy accounting into a
**computational model**: a spreadsheet energy budget. A budget
is a table with one row per instant and one column per energy
component (kinetic, gravitational potential, thermal). Each row
must balance: the components sum to the system's total energy.
If energy flows in or out, the total changes by exactly that
flow; in a closed system the total is constant, so an unknown
component can be *computed* from the others:

```
unknown component = total − (all known components)
```

That is HS-PS3-1 in spreadsheet form: given the changes in two
components, find the third. The model is only as honest as its
rows — every component that matters must have a column, and
"thermal" must be a real column, not a dumping ground for
arithmetic errors.

### Worked example 1 — lifting power

A motor lifts a 60 kg mass 8.0 m vertically in 4.0 s. Find the
average power.

Work done against gravity: `W = mgh = (60)(9.80)(8.0) =
4704 J`. Average power: `P = W/t = 4704 / 4.0 = 1176 W ≈
1.2 × 10³ W`. (At three significant figures, 1176 W is
1.18 × 10³ W; the inputs 60 kg and 8.0 m support two to three
figures, so 1.2 × 10³ W is a fair report. Note the judgment:
significant figures are a report of confidence, not decoration.)

### Worked example 2 — power from force and speed

A cyclist rides at a constant 8.0 m/s against a total resistive
force of 25 N. What power must the cyclist deliver?

At constant velocity the cyclist's driving force equals the
resistive force (25 N), so:

```
P = Fv = (25 N)(8.0 m/s) = 200 W
```

A fit cyclist sustaining 200 W is realistic — which is a good
sanity check on the arithmetic. If you had answered 200,000 W,
the `Fv` form would still be right but a unit or decimal
error would be hiding somewhere.

### Worked example 3 — the budget model (HS-PS3-1)

A 60 kg skateboarder drops in from a ramp top 3.0 m above the
bottom (the same skater as Lesson 04's image activity, now
with friction). Build the budget. Total mechanical-plus-thermal
energy is constant at the starting value: `E_total = 1764 J`
(all gravitational potential at the top).

| Instant | KE (J) | GPE (J) | Thermal (J) | Total (J) |
|---|---|---|---|---|
| Top (at rest) | 0 | 1764 | 0 | 1764 |
| Bottom (measured) | 1200 | 0 | ? | 1764 |

The thermal column at the bottom is the unknown component.
Compute it from the balance:

```
Thermal = Total − KE − GPE = 1764 − 1200 − 0 = 564 J
```

So 564 J became thermal energy on the way down — and the
bottom speed implied by KE = 1200 J is
`v = √(2 × 1200 / 60) = √40 = 6.3 m/s`, slower than the
frictionless 7.7 m/s from Lesson 04, exactly as expected.
The spreadsheet version of this table uses formulas, not typed
numbers, in the thermal column (`= total − KE − GPE`), so
that changing a measured speed updates the whole account.

## Guided practice

1. A machine does 1000 J of work in 20 s. Find its average
   power.
2. A motor lifts a 20 kg mass 5.0 m in 2.5 s. Find the work
   and the average power.
3. A car engine pushes with 1200 N while the car travels at
   25 m/s. Find the power in watts and kilowatts.
4. Two climbers lift identical loads to the same height. One
   takes half the time. Who uses more power, and by what
   factor? Explain in one sentence.

## Independent practice

1. A learner climbs stairs: 70 kg, 3.0 m vertical rise, in
   5.0 s. Find the work done against gravity and the average
   power.
2. A 500 W motor runs for 10 s. How much energy does it
   transfer?
3. **Budget table.** A cart system's total energy is 500 J.
   At one instant its KE is 300 J and its GPE is 0 J. The
   system is closed. Find its thermal energy at that instant,
   and explain in one sentence how you know.
4. **Explain your reasoning.** A learner says, "A more
   powerful motor always does more work." Correct this with a
   time-based example: a 100 W motor running 60 s vs. a
   1000 W motor running 1 s.

## Applied task — the project budget

Build the spreadsheet energy budget your project device will
use (project.md, S16–S17). Columns: instant, input energy
form, kinetic energy, useful output energy, thermal energy,
total. Rows: start, one middle instant, end. Write the formula
for the unknown column (thermal, or useful output) in words
before typing it: "unknown = total − (known components)."
Bring the blank budget to S16; the adult checks that every
column a device needs is present before trials begin.

## Exit check

1. A motor does 1200 J of work in 6.0 s. Average power = ?
2. A force of 50 N pushes an object at 4.0 m/s along the
   motion. Power = ?
3. A closed system's total energy is 900 J. At one instant
   KE = 400 J and GPE = 300 J. Thermal energy = ? How do you
   know?

## Supports and extensions

- **Reading access:** keep the two power forms side by side
  (`P = W/t` for energy-and-time problems, `P = Fv` for
  force-and-speed problems). Choosing the form is the skill.
- **Alternate response mode:** build the applied-task budget
  as a paper table first; the spreadsheet is a convenience,
  not the learning.
- **Extension:** a force–distance graph's *area* is work.
  Sketch a constant 40 N force over 5.0 m as a rectangle and
  confirm its area is 200 J — the seed of variable-force work
  (Unit 08 enrichment, not assessed here).

## Teacher note

Misconceptions to watch: power confused with energy ("more
powerful" for "more energy"); average vs. instantaneous power
mixed; budget totals that don't balance accepted without
investigation (an unbalanced row means a missing component or
a bad measurement — both are findings, not failures). The
answer key solves every item independently. Next: the project
— build the device and keep its account honestly.
