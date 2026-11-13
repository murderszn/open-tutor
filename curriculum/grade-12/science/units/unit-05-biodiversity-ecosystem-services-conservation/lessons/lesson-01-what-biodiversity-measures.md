# Lesson 01 — What Biodiversity Measures

**Unit 05 · Session S1–S2 · ~50 minutes each (lesson + worked practice)**
**Standards:** HS-LS2-2 (use mathematical representations to support
explanations about factors affecting biodiversity — planning
reference only; no claim of state adoption)

## Student goal

By the end of this lesson I can say what biodiversity means at three
levels — genetic, species, and ecosystem — and I can compute and
interpret a Shannon diversity index from count data, including what
the number does and does not tell me.

## Materials

Notebook, pencil, calculator (or the adult's phone calculator), the
unit image `../assets/meadow-pond-biodiversity.png` (printed or on
screen), and the natural-logarithm table in this lesson.

## Readiness check (5 min)

Answer in the notebook before the lesson starts. Unit 04 gave you
the carbon cycle and climate feedbacks; this unit asks what lives
inside those cycles.

1. In one sentence, what is an ecosystem? (Use the grade-9
   vocabulary: living things plus their nonliving environment,
   interacting.)
2. Name one producer, one consumer, and one decomposer you could
   find in a local park, and one sentence for what each does.

(Adult: question 1 is the key one — if the learner cannot name both
the living and the nonliving parts, spend 10 minutes revisiting the
ecosystem definition in
[`resources/biology_fundamentals.md`](../../../../../../resources/biology_fundamentals.md)
§ Ecosystems & Food Chains before continuing; everything in this
lesson builds on it.)

## Explicit teaching

**Biodiversity is variety at three levels, not a single number.**
The word packs three different kinds of variety into one term, and
the first skill of this unit is to say which level you mean:

- **Genetic diversity** — the variety of genes within one species.
  A meadow of coneflowers grown from many different parent plants
  holds more genetic diversity than a meadow cloned from one plant,
  even if the species count is the same. Genetic diversity is what
  lets a population adapt when conditions change: if every
  individual carries the same genes, one disease or one hot summer
  can take them all.
- **Species diversity** — the variety of species in a place, and how
  evenly individuals are spread among them. This is the level this
  lesson measures.
- **Ecosystem diversity** — the variety of habitats and ecosystems in
  a region: pond, marsh, meadow, and woodland side by side hold
  more ecosystem diversity than the same area covered by one
  habitat alone.

**Richness is a count; diversity is a count plus a balance.**
**Species richness** is the number of different species present: a
pond with 12 species is richer than a pond with 9. But richness
alone can mislead. Imagine two meadows, each with 5 species:

- Meadow A: 10 oak seedlings, 40 grasses, 20 coneflowers,
  20 milkweed, 10 clover — no species dominates.
- Meadow B: 90 grasses, 4 coneflowers, 2 milkweed, 2 clover,
  2 oak seedlings — one species owns the meadow.

Same richness (5), very different communities. Meadow A is more
diverse because its individuals are spread more **evenly**. The
word for that balance is **evenness**: how equal the abundances
are. A diversity measure worth using must capture both richness
and evenness.

**The Shannon index combines both.** Ecologists often use the
Shannon diversity index, written H′ (pronounced "H-prime"):

> H′ = − (p₁·ln p₁ + p₂·ln p₂ + … + pₙ·ln pₙ)

where p₁, p₂, …, pₙ are the **relative abundances** — each
species' share of all the individuals counted (count ÷ total).
"ln" is the natural logarithm. You do not need to understand
logarithms deeply to use the index: the table below gives the
values you need, and a calculator or spreadsheet does the rest.
What matters is what the formula *does*: a species contributes
most to H′ when it is common but not dominant, and the minus sign
in front turns the (always negative) sum into a positive number.

Two facts make H′ interpretable. First, H′ grows when richness
grows *and* when evenness grows. Second, for a given richness S,
the largest possible H′ is ln S — the value when every species is
exactly equally abundant. So **evenness J = H′ ÷ ln S** tells you
how close a community is to perfectly even (J = 1 means perfectly
even; J near 0 means one species dominates).

**What H′ cannot do.** The index says nothing about *which*
species are present: a meadow of 5 native wildflowers and a
meadow of 5 invasive weeds can have identical H′ values. It says
nothing about rarity, about whether a species is endangered, or
about how the community got that way. And it depends on
**sampling effort**: count longer or over a larger area and you
will usually find more species, so two H′ values can only be
compared when the counting method and effort were the same. A
number without its method is not evidence.

### Observation activity — the meadow pond

Look at `../assets/meadow-pond-biodiversity.png` (caption: "AI
illustration of a meadow pond edge: open pond water with lily
pads and two mallard ducks, a marshy bank with tall cattails and
one grey heron, and a wildflower meadow with purple coneflowers,
yellow black-eyed susans, tall grasses, one monarch butterfly,
and one brown rabbit. This is an illustration of processes, not a
photograph of a real place.").

1. Name the three habitat zones you can see, and one organism
   type that belongs mostly to each zone.
2. Count the organism types you can name in the whole picture.
   (Grasses and background trees each count as one type here —
   the picture does not let you tell grass or tree species apart.)
3. Could you compute a Shannon index from this picture? Why or
   why not?

**Text-only alternative:** the picture shows, left to right,
open pond water with green lily pads, two mallard ducks (one
green-headed male, one brown female), and two blue dragonflies
above the water; a marshy bank of tall green cattails with one
grey heron standing at the water's edge; and a wildflower meadow
with purple coneflowers, yellow black-eyed susans, tall grasses,
one orange monarch butterfly, and one small brown rabbit; trees
and low hills in the background. Every question above can be
answered from this description.

### Natural-logarithm table (for the worked examples)

| p | ln p | p | ln p |
|---|---|---|---|
| 0.02 | −3.91 | 0.20 | −1.61 |
| 0.04 | −3.22 | 0.40 | −0.92 |
| 0.10 | −2.30 | 0.90 | −0.11 |

(A calculator gives more digits; two decimals are enough for this
unit. All datasets in this lesson are **fictional practice data**,
labeled as such — they teach the method, not a real place.)

## Worked examples (modeled reasoning)

**Example 1 — Compute H′ for two meadows with the same richness.**

*Given:* Meadow A counts — oak seedlings 10, grasses 40,
coneflower 20, milkweed 20, clover 10 (total N = 100).
Meadow B counts — grasses 90, coneflower 4, milkweed 2, clover
2, oak seedlings 2 (total N = 100). Both have richness S = 5.

*Reasoning.* Step 1 — relative abundances. Meadow A:
0.10, 0.40, 0.20, 0.20, 0.10. Step 2 — multiply each p by its
ln p (from the table): 0.10 × (−2.30) = −0.23; 0.40 × (−0.92) =
−0.37; 0.20 × (−1.61) = −0.32 (twice); 0.10 × (−2.30) = −0.23.
Step 3 — add: −0.23 − 0.37 − 0.32 − 0.32 − 0.23 = −1.47, so
H′ = **1.47**. The maximum for 5 species is ln 5 = 1.61, so
evenness J = 1.47 ÷ 1.61 = **0.91** — nearly even.
Meadow B: p = 0.90, 0.04, 0.02, 0.02, 0.02. Then
0.90 × (−0.11) = −0.10; 0.04 × (−3.22) = −0.13;
0.02 × (−3.91) = −0.08 (three times). Sum = −0.46, so
H′ = **0.46**, and J = 0.46 ÷ 1.61 = **0.28**. Same richness,
very different diversity: the index caught what the bare count
missed. *Check:* H′ can never exceed ln S (1.61 here) — both
answers pass that check.

**Example 2 — Sampling effort can reverse a ranking.**

*Given:* A fictional survey reports Pond North with 12 species
and Pond South with 9 species. Pond North was surveyed for
6 hours by three people; Pond South for 2 hours by one person.

*Reasoning.* Richness rises with effort: more time and more
eyes find more of the rare species. The two ponds were not
measured the same way, so "12 > 9" is not evidence that North
is more diverse — it may only be evidence that North was
searched harder. The honest conclusion is "cannot compare until
effort is equalized." A fair comparison would re-survey both
ponds with the same time, the same number of observers, and the
same method, or compare only the first 2 hours of the North
survey. *Common error:* reporting the raw counts as a finding
without naming the effort. Every dataset in this unit names its
effort for exactly this reason.

## Guided practice

Work these with the adult; hints are given, answers are in the
adult's answer key.

1. A fictional plot has 4 species with counts 25, 25, 25, 25
   (N = 100). Without calculating, what is H′? *Hint: every
   species is exactly equally abundant, so H′ is at its
   maximum for S = 4 — and ln 4 = 1.39.*
2. Use the image activity: list the three habitat zones in the
   meadow-pond picture and one organism type per zone. Which
   zone holds the most organism types you can name? Does that
   prove it is the most diverse zone? *Hint: count types, then
   ask what the picture does not show — abundances, or species
   you cannot see.*
3. A fictional garden has richness 8 and H′ = 0.90. A fictional
   woodlot has richness 8 and H′ = 1.80. Which is more diverse,
   and what does the difference mean in plain words?
   *Hint: same richness, so the difference is entirely evenness.*

## Independent practice

Do these alone, then check with the adult. (Full items are in
Practice Set A.)

1. Compute H′ and evenness J for a fictional sample: counts 50,
   30, 10, 10 (N = 100, S = 4). Show each p·ln p term.
2. Explain in two sentences why a nature reserve could lose
   diversity even while its species richness stays the same.
3. Error analysis: a classmate says "Meadow B (Example 1) has
   H′ = 0.46, so it has almost no biodiversity." What is wrong
   with that sentence? Correct it.

## Application

Pick one place you know well — a yard, a park, a school ground,
a roadside strip. In your notebook, list (a) the habitat zones
you can see there, (b) the organism types you can name in each
(one line each; "grasses" counts as one type if you cannot tell
species apart), and (c) which of the three biodiversity levels
each of your observations belongs to. Do not collect or disturb
anything; this is observation only, from paths and public areas,
with the adult present outdoors.

## Exit check

Answer in the notebook:

1. Name the three levels of biodiversity in one line each.
2. Two fictional plots both have richness 6. One has H′ = 1.70,
   the other H′ = 0.80. Which is more diverse, and what single
   word explains the difference?

## Supports and extension

- **Reading/language access:** every new term is defined where it
  first appears; the adult reads the worked examples aloud on the
  first pass. The ln table removes calculator-logarithm errors;
  the adult may supply ln values for any new p.
- **Alternate response mode:** the learner may answer the image
  activity orally, pointing at the zones, with the adult
  scribing the list.
- **Extension:** compute H′ for a fictional 3-species sample with
  counts 60, 30, 10 (N = 100) and compare it with the perfectly
  even 3-species case (H′ = ln 3 = 1.10). What does the gap tell
  you? (Answer in the key: H′ = 0.90, J = 0.82 — moderately
  uneven.)

## Teacher note

The most common misconception is treating H′ as a grade: "1.47
is good, 0.46 is bad." The index is a comparison tool, not a
verdict — 0.46 can be the natural state of a healthy grassland
dominated by one grass, and 1.47 can describe five weeds. Watch
for learners who compare H′ values across different sampling
methods; the effort warning in Example 2 is the point of the
lesson, not a footnote. If logarithms feel heavy, let the
spreadsheet do the arithmetic and keep the learner's attention
on the interpretation: which plot is more even, and why does
that matter for resilience?
