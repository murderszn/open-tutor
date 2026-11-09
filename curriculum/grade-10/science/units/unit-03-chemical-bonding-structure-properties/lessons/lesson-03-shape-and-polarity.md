# Lesson 03 — Molecular Shape (VSEPR) and Polarity

**Goal:** By the end of this lesson you can predict a molecule's shape from its electron
domains, and decide whether the molecule as a whole is polar or nonpolar — even when its
individual bonds are polar.

**Time:** ~50 minutes. **Materials:** periodic table, Lewis structures from Lesson 02,
notebook, Practice Set C, PhET "Molecule Shapes" (adult-previewed).

## Readiness check (5 minutes)

1. Draw the Lewis structure for water (from Lesson 02). How many lone pairs sit on oxygen?
2. In Lesson 01, the O–H bond was polar (oxygen δ−, hydrogen δ+). Do you think that alone
   proves the whole water molecule is polar? Write your guess before reading on.

(If the readiness check is shaky, redo Lesson 02, Worked example 1: water has 2 bonds and
2 lone pairs on oxygen.)

## Teaching

### VSEPR: electron domains push apart

**VSEPR** (valence-shell electron-pair repulsion) says: electron domains around a central
atom repel each other and spread out as far as possible. An **electron domain** is one of:
a single bond, a double bond, a triple bond (each counts as ONE domain, however many pairs
it contains), or a lone pair. Count domains from the Lewis structure, then read the shape:

| Electron domains | Bonding domains | Lone pairs | Shape | Approximate bond angle |
|---|---|---|---|---|
| 2 | 2 | 0 | Linear | 180° |
| 3 | 3 | 0 | Trigonal planar | 120° |
| 4 | 4 | 0 | Tetrahedral | 109.5° |
| 4 | 3 | 1 | Trigonal pyramidal | ~107° |
| 4 | 2 | 2 | Bent | ~104.5° |

Lone pairs push harder than bonding pairs, which is why the angles shrink from 109.5° as lone
pairs are added: a lone pair has no second nucleus pulling it away, so it spreads wider and
squeezes the bonds together. This unit assesses shapes only up to four domains, and bond
angles only as the approximate values in the table.

The deterministic diagram in `assets/vsepr-shapes.svg` shows all five shapes with exact
domain counts; use it beside the table above. Ball-and-stick models in a simulation are a
model, not a photograph: real molecules are far smaller than any drawing, and the "sticks" are
not physical rods.

### Worked example 1 — carbon dioxide, CO₂: polar bonds, nonpolar molecule

Step 1 — Lewis structure (Lesson 02): O=C=O. Central carbon: 2 double bonds = **2 domains**,
0 lone pairs → **linear**, 180°.
Step 2 — Bond polarity: each C=O bond is polar (oxygen pulls harder: EN 3.44 vs. carbon 2.55,
ΔEN = 0.89).
Step 3 — Symmetry check: the two bond dipoles point in exactly opposite directions and are
equal in size, so they **cancel**. The molecule has no net dipole: CO₂ is **nonpolar**.

This is the unit's most important distinction: **bond polarity is not molecular polarity.**
A molecule can have polar bonds and still be nonpolar if its shape cancels them.

### Worked example 2 — water, H₂O: polar bonds, polar molecule

Step 1 — Lewis structure: H–O–H with 2 lone pairs on oxygen. Central oxygen: 2 bonds + 2 lone
pairs = **4 domains**, 2 lone pairs → **bent**, ~104.5°.
Step 2 — Bond polarity: each O–H bond is polar (ΔEN = 1.24, oxygen δ−).
Step 3 — Symmetry check: the bent shape means the two bond dipoles do NOT point in opposite
directions; they partly add, and the lone pairs reinforce the oxygen side. The result is a net
dipole: the oxygen end is δ− overall, the hydrogen end δ+ overall. Water is **polar**.

### The polarity decision procedure

1. Draw the Lewis structure.
2. Count domains on the central atom; name the shape.
3. Mark each bond's polarity from ΔEN (or from the known pull order: F > O > N ≈ Cl > Br >
   S > C > H in this unit's examples).
4. Ask: do the bond dipoles cancel by symmetry? If yes → nonpolar. If no → polar.
5. Special case: a molecule with only one polar bond and no symmetry to cancel it (e.g. HCl)
   is polar.

### A common trap

**"Tetrahedral means four atoms."** Tetrahedral describes the arrangement of four domains,
not the number of atoms you can see. Ammonia (NH₃) has four domains but only three bonds, so
its shape is trigonal pyramidal, not tetrahedral — the lone pair counts as a domain even
though it is not an atom. Always count domains, never just atoms.

## Guided practice

Work these with your adult or a partner; hints are in brackets.

1. Predict the shape and polarity of ammonia, NH₃. [Lewis structure: 3 bonds, 1 lone pair.
   Do the dipoles cancel?]
2. Predict the shape and polarity of methane, CH₄. [Four identical bonds; what does symmetry
   do?]
3. Predict the shape and polarity of boron trifluoride, BF₃. [Central boron: 3 bonds, 0 lone
   pairs. Boron is the octet-rule exception from Lesson 02 — it is stable here with 6
   electrons.]

## Independent practice

Complete Practice Set C (in `practice.md`). Then try the PhET "Molecule Shapes" simulation
(adult-previewed, resource pack): build H₂O, CO₂, and NH₃, switch the lone pairs on and off,
and record in your notebook how the shape changes when a lone pair replaces a bond. Then
answer this application question: carbon tetrachloride, CCl₄, has four polar C–Cl bonds, yet
it is used as a nonpolar solvent. Explain why, using shape and symmetry.

## Exit check

Without looking back: (a) how many domains does a double bond count as, and why does that
matter for CO₂? (b) Name the shape of a molecule with 4 domains and 2 lone pairs, and its
approximate angle. (c) In one sentence, why is CO₂ nonpolar despite having polar bonds?

## Supports and extensions

- **Reading/language access:** say the domain count as a sentence first ("two bonds, two lone
  pairs, four domains, bent") before naming any shape.
- **Alternate response mode:** build shapes with modelling clay (central ball) and toothpicks
  (bonds) plus a flag for each lone pair, then photograph or sketch the result.
- **Extension:** predict the shape of sulfur dioxide, SO₂ (bent, with one lone pair on sulfur
  and one double bond plus one single bond in one resonance form), and explain why its bond
  angle is larger than water's. Note that resonance forms are an extension, not assessed here.

## Teacher note

See `teacher-guide.md`, Lesson 03. Key misconceptions: counting a double bond as two domains;
calling NH₃ tetrahedral; equating bond polarity with molecular polarity; reading bond angles
as exact rather than approximate.
