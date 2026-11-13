# Lesson 02 — How Biodiversity Changes

**Unit 05 · Session S6–S7 · ~50 minutes each (lesson + film/data session)**
**Standards:** HS-ESS2-7 (argue from evidence about the coevolution
of Earth's systems and life), HS-LS2-2 (mathematical representations
for biodiversity — planning references only; no claim of state
adoption)

## Student goal

By the end of this lesson I can explain how speciation adds species
and extinction removes them, use the species–area relationship to
predict how richness changes when habitat area changes, and argue
from evidence that Earth's systems and life have shaped each other.

## Materials

Notebook, pencil, calculator, the species–area curve
`../assets/species-area-curve.svg` (printed or on screen), and
access to the HHMI BioInteractive film in the resource pack
(adult previews; the worked-data alternative below stands in if
the film is unavailable).

## Readiness check (5 min)

Answer in the notebook before the lesson starts.

1. Lesson 01 gave you richness and evenness. In one sentence each,
   say what would raise a place's richness and what would lower
   its evenness.
2. What does the word "extinction" mean, in one sentence?

(Adult: question 1 is the key one — if the learner cannot separate
"more species" from "more evenly spread," revisit Lesson 01's
Meadow A / Meadow B example before continuing.)

## Explicit teaching

**Biodiversity is a balance, not a stockpile.** The number of
species alive at any moment is the running total of two opposite
processes: **speciation** adds species and **extinction**
removes them. Speciation is the formation of a new species — most
often when one population splits into two groups that stop
interbreeding (a river changes course, a mountain range rises, a
few individuals colonize an island) and the two groups diverge
until they can no longer produce fertile offspring together.
Extinction is the death of the last individual of a species. When
speciation outruns extinction, diversity grows; when extinction
outruns speciation, it shrinks.

**Most extinction is background; some of it is mass.** Species
have always gone extinct. The usual, slow rate — the
**background extinction rate** — is often estimated at about one
extinction per million species per year. Against that background,
Earth's history holds five **mass extinctions**, short intervals
in which a large share of species vanished worldwide — the most
famous, 66 million years ago, ended the non-avian dinosaurs after
an asteroid impact, and opened the way for mammals. The IPBES
Global Assessment (2019) reports that current extinction rates
are tens to hundreds of times higher than the average over the
last 10 million years. That comparison is the claim to carry
forward: not "extinction is new" but "extinction is running far
faster than the background that built today's diversity."

**Bigger areas hold more species — and the relationship is a power
law.** Isolated habitats show a regular pattern: the number of
species S grows with area A as

> S = c · A^z

where c depends on the kind of place (a rich rainforest has a
larger c than a desert island) and z, the slope, is usually
between 0.15 and 0.35 for islands and habitat fragments. The
relationship matters because it predicts loss: shrink an area and
richness falls, even if nothing else changes — and the fall is
steepest at first. It also explains why fragmentation hurts:
ten separate 1-hectare fragments do not hold what one
10-hectare block holds, because each fragment loses the species
that need large areas. The curve in `assets/species-area-curve.svg`
plots this relationship for the fictional island group in the
worked examples (c = 8, z = 0.25); read it as a model with
fictional numbers, not as data from a real archipelago.

**Life and Earth systems coevolve — each changes the other.**
HS-ESS2-7 asks for an argument from evidence that Earth's systems
and life developed together, and the evidence runs in both
directions:

- *Life changed Earth.* About 2.4 billion years ago, cyanobacteria
  doing photosynthesis filled the atmosphere with oxygen — the
  Great Oxidation Event. Oxygen then made possible the ozone
  layer, which screens ultraviolet light, and later made possible
  large, energy-hungry animals. Life did not merely adapt to the
  atmosphere; it built a new one.
- *Earth changed life.* When continents split apart, populations
  were divided and diverged into new species — the southern
  continents' marsupials are one legacy of that split. When
  flowering plants spread, about 100 million years ago and after,
  pollinating insects diversified with them: flowers and
  pollinators shaped each other, each depending on the other's
  change. And when the asteroid struck 66 million years ago, the
  climate shock that followed did not just kill dinosaurs; it
  rewrote which groups would dominate the next 66 million years.

**Keystone species and trophic cascades.** Some species matter
out of proportion to their numbers. A **keystone species** is one
whose removal changes the whole community. Robert Paine's classic
experiment (1960s, Pacific tidal pools) showed it: when he removed
the predatory starfish *Pisaster ochraceus* from a pool, mussels
took over the rock, and the number of species in the pool fell
from 15 to 8. James Estes and colleagues showed the same pattern
at ocean scale: where sea otters are present, they eat sea
urchins, urchins stay scarce, and kelp forests thrive; where
otters are gone, urchins explode and kelp collapses — a
**trophic cascade**, a change that ripples down the food web from
the top. The HHMI BioInteractive film *"Some Animals Are More
Equal than Others"* tells both stories (see resource pack). A
familiar land example: gray wolves returned to Yellowstone in
1995–96 after a roughly 70-year absence, and elk numbers and
behavior changed, with willow and aspen recovering in some
places — but ecologists still debate how much of that recovery
was wolves and how much was drought, bears, and other factors.
The honest statement is "wolves changed the system; the size of
each link in the chain is still being measured." A cascade is a
claim about a chain of causes, and each link needs its own
evidence.

## Worked examples (modeled reasoning)

**Example 1 — Predict richness from area with S = cA^z.**

*Given:* A fictional island group follows S = 8 · A^0.25, with
A in square kilometres. (Fictional practice data.)

*Reasoning.* For A = 16 km²: A^0.25 is the fourth root of 16,
which is 2 (because 2 × 2 × 2 × 2 = 16), so S = 8 × 2 = **16
species**. For A = 81 km²: the fourth root of 81 is 3
(3 × 3 × 3 × 3 = 81), so S = 8 × 3 = **24 species**. Now halve
the 16 km² island to 8 km²: 8^0.25 ≈ 1.68, so S ≈ 8 × 1.68 =
**13.5, about 13 species** — losing half the area costs about 3
of 16 species. Double it instead, 16 → 32 km²: 32^0.25 ≈ 2.38,
so S ≈ 8 × 2.38 = **19 species**. *Check:* the curve rises but
flattens — doubling area adds fewer species each time, which is
exactly what the SVG curve shows. *Common error:* assuming
richness is proportional to area (half the area, half the
species). The power law says the loss is smaller than
proportional — but it is still a loss, and it is steepest for
the first hectares cut.

**Example 2 — Argue coevolution from two pieces of evidence.**

*Claim:* Earth's systems and life coevolved — each changed the
other.

*Reasoning.* Evidence 1 (life → Earth): before photosynthesis,
Earth's atmosphere held almost no free oxygen; after
cyanobacteria spread, oxygen rose sharply about 2.4 billion years
ago, and the ozone layer that followed made land life possible.
The atmosphere we breathe is a product of life, not just a
background for it. Evidence 2 (Earth → life): the breakup of the
southern supercontinent isolated populations that became the
distinct marsupial faunas of Australia and South America — a
geologic event writing a biological pattern. Together the two
directions make the argument: neither side alone is coevolution,
and both are needed. *Limit:* neither piece proves the pattern
holds everywhere; the argument is that coevolution is a real,
repeated mechanism, not that every change is coevolutionary.

## Guided practice

Work these with the adult; hints are given, answers are in the
adult's answer key.

1. A fictional reserve follows S = 6 · A^0.30. Compute S for
   A = 10 km² and for A = 100 km². *Hint: 10^0.30 ≈ 2.00 and
   100^0.30 ≈ 3.98 — check with a calculator; the point is the
   tenfold area increase less than doubles richness.*
2. Read the species–area SVG: find A = 16 and A = 81 on the
   horizontal axis and check that the curve passes through
   S = 16 and S = 24. What does the flattening of the curve mean
   in plain words?
3. Starfish removal: Paine's pool fell from 15 species to 8.
   Which changed — richness, evenness, or both? *Hint: the count
   of species changed; the mussels that took over also changed
   the balance.*

## Independent practice

Do these alone, then check with the adult. (Full items are in
Practice Set B.)

1. A fictional forest fragment of 25 km² follows S = 5 · A^0.20.
   Predict S. If logging halves the fragment to 12.5 km²,
   predict the new S and state the loss.
2. In two sentences, explain why "extinction is natural, so
   current extinctions do not matter" is a bad argument. Use the
   background-rate comparison.
3. Error analysis: a classmate says "wolves returned to
   Yellowstone and the willows came back, so wolves caused the
   willow recovery." What is missing from that sentence? Correct
   it.

## Application

Take the fictional island group from Example 1 (S = 8 · A^0.25).
A developer proposes to build on half of the 81 km² island,
leaving 40.5 km² of habitat. Compute the predicted richness
before and after, and write a three-sentence evidence statement
a planner could use: the numbers, what they do and do not prove,
and one question the numbers cannot answer. (The project in
Week 22 will ask for exactly this kind of statement about a real
local place.)

## Exit check

Answer in the notebook:

1. Name the two processes whose balance sets the number of
   species alive, and say which one adds and which one removes.
2. A habitat shrinks from 100 km² to 25 km² and follows
   S = 10 · A^0.25. Predict S before and after. (Fourth roots:
   100^0.25 ≈ 3.16; 25^0.25 ≈ 2.24.)

## Supports and extension

- **Reading/language access:** "fourth root" is defined in the
  worked example as the number that, multiplied by itself four
  times, gives the area; the adult may let the learner use the
  SVG curve instead of the formula for the exit check.
- **Alternate response mode:** the cascade chain in guided
  practice may be drawn as arrows (otter → urchin → kelp) instead
  of written.
- **Extension:** take logs of both sides of S = cA^z and show it
  becomes log S = log c + z·log A — a straight line whose slope
  is z. Plot the fictional island points (A = 1, 16, 81, 256;
  S = 8, 16, 24, 32) on log–log axes and confirm the slope is
  0.25. (Answer in the key: 256^0.25 = 4, so S = 32; the four
  points lie on a line of slope 0.25.)

## Teacher note

The species–area calculation is the unit's first real modeling
moment: learners who treat the formula as a calculator trick will
miss the point, which is that area loss costs species even when
nothing is directly killed. Slow down on Example 1's "halve the
island" step and ask what the model leaves out (it says nothing
about which species are lost — the rare and the wide-ranging go
first — and nothing about edge effects). On Yellowstone, do not
let the wolf story harden into a slogan; the debate about willow
recovery is itself the lesson about evidence: a dramatic before
and after is not a controlled experiment.
