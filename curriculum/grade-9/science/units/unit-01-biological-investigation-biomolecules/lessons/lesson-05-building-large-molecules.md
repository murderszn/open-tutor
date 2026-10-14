# Lesson 05 — Building Large Molecules

**Student goal:** I can explain how small molecules join into large ones,
and I can account for every atom.
**Time:** 50 minutes · **Unit:** [U01](../README.md) · **Session 10 of 20**

## Materials

- Notebook and pencil
- Craft modeling materials: one color per element (C, H, O), used
  consistently — clay balls, beads, or a ball-and-stick kit; each atom token
  also gets a letter stamp (C/H/O) so color is never the only cue
- The atom-inventory diagram below (also as
  [`assets/atom-inventory.svg`](../assets/atom-inventory.svg))

## Readiness check (5 minutes)

Ask: "A glucose molecule is C₆H₁₂O₆. How many atoms is that in total?"
(6 + 12 + 6 = 24.) Then: "If two glucoses join and one water molecule
(H₂O) is released, how many atoms are in the joined molecule?" Confirm the
learner computes 24 + 24 − 3 = 45 before the teaching block — this is the
lesson's core move.

## Teaching

A **monomer** is a small building-block molecule. A **polymer** is a large
molecule built by linking many monomers. Most polymers are built by
**dehydration synthesis** — "putting together while losing water": the
hydrogen of one monomer joins the hydroxyl group (OH) of another, a water
molecule (H₂O) is released, and the monomers share electrons in a new
**covalent bond**. Two glucose monomers (C₆H₁₂O₆ each) link into the
disaccharide maltose this way — and the reverse reaction, **hydrolysis**,
splits polymers apart by *adding* a water molecule back across the bond.
(Verified 2026-10-13 against OpenStax Biology 2e §3.1, CC BY.)

The non-negotiable rule: **atoms are conserved**. Every atom in the polymer
came from the monomers, minus exactly the atoms of the released water.
Nothing appears; nothing vanishes. If your model ends with a different atom
count than it started with, the model is wrong — not the chemistry.

Carbohydrate polymers show the power of rearrangement: the *same* glucose
monomer builds **starch** (energy storage in plants), **glycogen** (energy
storage in animals), and **cellulose** (plant structure) — different
linkages, different jobs, same building block.

## Atom-inventory diagram (deterministic SVG)

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" role="img" aria-label="Atom inventory: two glucose molecules, C6H12O6 each, join by dehydration synthesis, releasing one water molecule H2O, forming maltose with 45 atoms.">
  <rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
  <text x="20" y="28" font-family="sans-serif" font-size="16" font-weight="bold">Dehydration synthesis: atom inventory</text>
  <text x="20" y="58" font-family="sans-serif" font-size="14">Glucose A: C6 H12 O6 = 24 atoms</text>
  <text x="20" y="82" font-family="sans-serif" font-size="14">Glucose B: C6 H12 O6 = 24 atoms</text>
  <text x="20" y="106" font-family="sans-serif" font-size="14">Starting total: 48 atoms</text>
  <line x1="20" y1="120" x2="260" y2="120" stroke="#000" stroke-width="1"/>
  <text x="20" y="144" font-family="sans-serif" font-size="14">Released: 1 water, H2O = 3 atoms</text>
  <text x="20" y="168" font-family="sans-serif" font-size="14" font-weight="bold">Maltose formed: 48 - 3 = 45 atoms</text>
  <text x="20" y="196" font-family="sans-serif" font-size="13">C: 12 | H: 22 | O: 11 (check: 12+22+11 = 45)</text>
  <text x="20" y="228" font-family="sans-serif" font-size="13" font-style="italic">Rule: atoms are conserved. Count them before and after —</text>
  <text x="20" y="248" font-family="sans-serif" font-size="13" font-style="italic">every atom in the product came from the starting materials.</text>
  <rect x="300" y="50" width="240" height="200" fill="#f5f5f5" stroke="#999"/>
  <text x="315" y="78" font-family="sans-serif" font-size="13" font-weight="bold">How to read it</text>
  <text x="315" y="102" font-family="sans-serif" font-size="13">C6H12O6 means: 6 carbon,</text>
  <text x="315" y="122" font-family="sans-serif" font-size="13">12 hydrogen, 6 oxygen atoms</text>
  <text x="315" y="142" font-family="sans-serif" font-size="13">in one glucose molecule.</text>
  <text x="315" y="170" font-family="sans-serif" font-size="13">H2O means: 2 hydrogen,</text>
  <text x="315" y="190" font-family="sans-serif" font-size="13">1 oxygen atom in one water</text>
  <text x="315" y="210" font-family="sans-serif" font-size="13">molecule.</text>
</svg>

*Text equivalent:* Two glucose molecules (C₆H₁₂O₆ each, 24 atoms each = 48
total) join by dehydration synthesis, releasing one water molecule (H₂O, 3
atoms). The maltose formed contains 45 atoms: 12 carbon, 22 hydrogen, 11
oxygen (12 + 22 + 11 = 45 ✓).

## Worked example 1 — counting the maltose

Two glucose molecules: C₆H₁₂O₆ + C₆H₁₂O₆.

- Carbon: 6 + 6 = 12
- Hydrogen: 12 + 12 = 24, minus the 2 lost in water = **22**
- Oxygen: 6 + 6 = 12, minus the 1 lost in water = **11**
- Total: 12 + 22 + 11 = **45** atoms — matches 48 − 3 ✓

**Reasoning to name aloud:** the subtraction is the whole point. The water
does not "disappear" — we *count* it leaving. A model that forgets the water
will claim 48 atoms in the product and be wrong in a checkable way.

## Worked example 2 — starch from many glucoses

Starch is a polymer of *hundreds* of glucose monomers. Each new bond
releases one water. If a short starch chain has 10 glucose units:

- Starting atoms: 10 × 24 = 240
- Water molecules released: 9 (one per bond between 10 units)
- Final atoms: 240 − (9 × 3) = 240 − 27 = **213**

**Reasoning to name aloud:** the pattern generalizes — *n* monomers, *n−1*
bonds, *n−1* waters. The learner will use this in Session 11's practice,
and the same "count before, count after" habit powers the amino-acid model
in Lesson 6.

## Guided practice (adult stays close, hints allowed)

1. Build two "glucose" clusters with your tokens (6 C, 12 H, 6 O each —
   or a labeled shorthand if tokens run short). Remove one H from the
   first and one OH from the second; set them aside as "water." Count what
   remains. *(Hint: you should have 45 atom tokens left.)*
2. Where did the "water" tokens come from — were they added from outside?
   *(Hint: no — they were part of the monomers.)*
3. A learner's model shows maltose with 48 atoms. What did the learner
   forget, and how would you check?
4. Error analysis: "Dehydration synthesis creates water out of nothing, so
   atoms are not conserved." Identify the error in one sentence.
5. If 4 glucose monomers link into a chain, how many water molecules are
   released? How many atoms in the final chain? Show the subtraction.

## Independent practice (6–8 meaningful tasks)

1. Compute the atom inventory for a disaccharide formed from two glucose
   molecules: C, H, O counts and total. Show every step.
2. A 5-glucose chain: starting atoms, waters released, final atom total.
3. Cellulose is also built from glucose. In 2–3 sentences, explain how the
   *same* monomer can make both starch (food storage) and cellulose
   (tough plant walls). *(Hint: the linkage — how units connect — differs.)*
4. Hydrolysis is the reverse of dehydration synthesis. If maltose (45
   atoms) is split by hydrolysis, how many atoms do the two products have
   in total? Explain where the "extra" 3 atoms come from.
5. Draw a before/after atom map for joining two monomers of your choice
   (real or clearly labeled fictional practice molecules — label which).
   Include the released water and a conservation check.
6. Explain in your own words why "atoms are conserved" is a *checkable*
   rule, not just a slogan — how would you use it to catch a wrong model?

## Application

Begin the project model plan: choose how you will represent atoms (tokens,
drawings, or both) for the Lesson 6 amino-acid build, and write the
conservation check you will run on your finished model. The adult confirms
the element key (color + letter) before Session 14.

## Exit check

Define *monomer*, *polymer*, *dehydration synthesis*, and *hydrolysis* in
your own words; then state the atom-conservation rule and demonstrate it
with the glucose → maltose numbers.

## Supports and extensions

- **Language access:** "dehydration synthesis" broken into parts on the
  board — *de-* (remove), *hydra* (water), *synthesis* (putting together).
- **Alternate response mode:** the learner may do all inventories with
  physical tokens and dictate the numbers while the adult scribes the
  table.
- **Extension:** read OpenStax Biology 2e §3.1's hydrolysis section (see
  [resource pack](../resource-pack.md)) and explain, with the atom math,
  why digestion is a hydrolysis story.

## Teacher note — likely misconceptions

"Water is created from nothing" — the water's atoms were always in the
monomers; the reaction just rearranges them. "Bigger molecule = more kinds
of atoms" — maltose has exactly the same *kinds* (C, H, O) as glucose, just
more of them. Watch for learners who add water from "outside" the system
in their models — the conservation check catches it. Answer-key references:
[answer key](../answer-key.md#lesson-05).
