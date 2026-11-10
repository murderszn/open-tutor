# Lesson 06 — Inheritance Patterns, Mutations, and Pedigrees

**Student goal:** I can read a pedigree, tell dominant from recessive
inheritance, recognize incomplete dominance, codominance, and sex-linkage,
and explain how mutations create new alleles.
**Time:** 50 minutes · **Unit:** [U05](../README.md) · **Session 12 of 20**

## Materials

- Notebook and pencil
- The fictional Alvarez pedigree handout (below — the adult prints or
  copies it; it is also the project pedigree)
- Colored pencils for pedigree shading (optional)

## Readiness check (5 minutes)

Ask: "So far every trait has been dominant-or-recessive, one gene, two
alleles. What if a trait has *three* alleles — or what if the heterozygote
looks like neither parent?" Accept "I don't know" or a guess. The lesson
shows three patterns Mendel's peas did not show, then puts them to work
reading a family tree.

## Teaching

Not all inheritance follows the simple dominant/recessive pattern. Three
patterns matter most at this level:

**Incomplete dominance:** the heterozygote is *in between*. In
snapdragons, red flowers (RR) crossed with white (rr) give pink (Rr) —
neither allele hides the other; both contribute, and the result is
intermediate. The F2 ratio is still 1:2:1 by genotype, but the phenotypes
are 1 red : 2 pink : 1 white — three visible classes, not two.

**Codominance:** the heterozygote shows *both* traits fully. Human ABO
blood type is the classic case: the gene has three alleles — I^A, I^B,
and i. I^A and I^B are codominant with each other and dominant over i.
Genotypes: I^A I^A or I^A i → type A; I^B I^B or I^B i → type B; I^A I^B →
type AB; ii → type O. A type AB person expresses both A and B antigens —
neither is hidden.

**Sex-linked inheritance:** some genes sit on the X chromosome. Males
(XY) have only one X, so a recessive allele on their single X is
expressed — there is no second copy to hide it. Color blindness (red–green)
is the textbook example: a carrier mother (X^B X^b) and a non-color-blind
father (X^B Y) can have color-blind sons (X^b Y) with probability 1/2, and
carrier daughters with probability 1/2. Sex-linked recessive traits
therefore appear more often in males, and a color-blind son got his X —
and the allele — from his mother, never his father.

Where do new alleles come from? **Mutations**: changes in the DNA
sequence. Unit 04 named three sources of heritable variation: new meiotic
combinations, viable replication errors, and environment-caused mutations.
A replication error can substitute one base (Lesson 2's silent, missense,
and nonsense changes), insert or delete bases (shifting the reading
frame), or — rarely — duplicate or rearrange whole segments. Most mutations
are neutral or harmful; a few are helpful in a particular environment, and
those are the raw material of evolution (Unit 06). Mutations in body cells
are not inherited; only mutations in the cells that make gametes can be
passed on.

### The fictional Alvarez pedigree (labeled fictional practice data)

The Alvarez family is invented for this unit. No real family is described.
Trait: attached earlobes (recessive, ee) vs. free earlobes (E_).
Textbook simplification: real earlobe shape is influenced by several
genes; this pedigree uses the classic one-gene model so the logic is
visible. Squares = males, circles = females, filled = attached earlobes,
open = free earlobes.

```
I-1 (open) ─── I-2 (filled)
        │   │   │
     II-1  II-2  II-3
    (open) (filled) (open)

II-1 (open) ─── II-4 (filled)        II-3 (open) ─── II-5 (open)
        │   │                              │
     III-1 III-2                        III-3
    (open) (filled)                    (filled)
```

Read it as: I-2 is attached (ee) and has three children, one attached
(II-2, ee) and two free (II-1, II-3). II-1 (free) married II-4 (attached)
and has two children: III-1 free, III-2 attached. II-3 (free) married
II-5 (free) and has one child, III-3, attached.

**Key vocabulary:** *incomplete dominance* (heterozygote is
intermediate), *codominance* (heterozygote shows both traits),
*multiple alleles* (more than two versions of a gene in a population),
*sex-linked* (a gene carried on a sex chromosome), *pedigree* (a
family-tree diagram of a trait), *carrier* (a heterozygote who carries a
recessive allele without showing the trait), *mutation* (a change in the
DNA sequence).

## Worked example 1 — "Deduce the Alvarez genotypes"

Work through the pedigree box by box:

1. **Anyone filled (attached) is ee** — the trait is recessive, so it only
   shows with two copies. I-2, II-2, II-4, III-2, III-3 are all ee.
2. **I-1 is free but has an attached child (II-2, ee).** II-2 got one e
   from each parent, so I-1 gave an e — and I-1 is free, so I-1 must also
   carry E. **I-1 is Ee.**
3. **II-1 and II-3 are free but each has an ee parent (I-2) and an Ee
   parent (I-1).** Each received e from I-2 and either E or e from I-1 —
   but they are free, so they received E. **II-1 and II-3 are both Ee.**
4. **II-5 is free, but has an attached child (III-3, ee).** III-3 got e
   from II-3 (Ee, known) and e from II-5 — so II-5 carries e, and is free,
   so **II-5 is Ee.**
5. **III-1 is free; III-2 is attached (ee).** Their parents are II-1 (Ee)
   × II-4 (ee) — a test cross. III-1 received e from II-4 and E from
   II-1, so **III-1 is Ee**. (And the chance their next child is attached
   is 1/2.)

**Reasoning to name aloud:** a recessive trait appearing in the child of
two free-earlobed parents (II-3 × II-5 → III-3) *proves* both parents are
carriers. That is the pedigree signature of recessive inheritance: the
trait skips a generation and reappears.

## Worked example 2 — "Blood types and a color-blind son"

**Blood type:** a mother with type A blood (genotype I^A i) and a father
with type B blood (I^B i) have children. Punnett square:

| | I^B | i |
|---|---|---|
| **I^A** | I^A I^B (AB) | I^A i (A) |
| **i** | I^B i (B) | ii (O) |

Each child has a 1/4 chance of AB, A, B, or O. **Reasoning to name
aloud:** three alleles in the population, but each person carries only
two — and I^A and I^B are codominant, so the AB child shows both.

**Color blindness:** a carrier mother (X^B X^b) × a non-color-blind father
(X^B Y). Sons get their X from their mother: 1/2 X^B Y (not color-blind),
1/2 X^b Y (color-blind). Daughters get X^B from their father and either
X^B or X^b from their mother: 1/2 carriers (X^B X^b), none color-blind in
this cross. **Reasoning to name aloud:** the father gives his sons a Y,
never an X — so a son's X-linked allele always comes from his mother.
That is why the trait "runs through" mothers to sons.

## Guided practice (adult stays close, hints allowed)

Work through these together, 4–6 minutes each.

1. Snapdragons: red (RR) × white (rr) gives pink (Rr). Cross two pink
   plants (Rr × Rr). What are the genotype and phenotype ratios?
2. A man with type O blood (ii) and a woman with type AB blood (I^A I^B)
   have children. What blood types are possible, and with what
   probabilities? *(Hint: each child gets i from the father.)*
3. Error analysis: "Color blindness is more common in males because males
   have more mutations." What is the real reason?
4. In the Alvarez pedigree, II-1 (Ee) and II-4 (ee) have a third child.
   What is the probability it has attached earlobes? What is the
   probability it is a carrier?
5. A mutation changes a DNA base in a skin cell. Will the person's
   children inherit it? Explain the difference between body-cell and
   gamete mutations.

## Independent practice (6–8 meaningful tasks)

1. In snapdragons, cross a pink plant (Rr) with a white plant (rr). Give
   the genotype and phenotype ratios.
2. A woman with type A blood has a child with type O blood. Her partner
   has type B blood. Deduce the mother's and the father's genotypes, and
   explain the deduction. (There is one consistent answer for each.)
3. A non-color-blind woman has a color-blind son. What must the woman's
   genotype be? What is the probability her next son is color-blind?
   What is the probability her next daughter is a carrier?
4. Two free-earlobed parents have an attached-earlobe child. (a) What is
   the pattern of inheritance? (b) What are the parents' genotypes? (c)
   What is the probability their next child has attached earlobes?
5. A couple are both carriers for a recessive condition (Aa × Aa) and have
   four children. A learner says, "Exactly one will be aa." Correct them
   with a probability: what is P(aa) for each child, and what is P(at
   least one aa among the four)?
6. A DNA mutation deletes a single base in the middle of a gene. Explain
   why this is usually more damaging than a single-base substitution that
   changes one codon to another codon for the same amino acid. Use the
   words *reading frame*.
7. Explain in 2–3 sentences why a new allele must come from a mutation —
   and why most new alleles do not help the organism.

## Application

Draw your own pedigree for a fictional family with a recessive trait of
your choice (not earlobes — pick another, e.g., "can roll the tongue" is
often taught as dominant, so use a made-up trait such as "blue-tipped
petals" in a fictional plant family if you prefer plants). Include three
generations, at least one case where the trait skips a generation, and at
least one case where two parents with the dominant phenotype have a child
with the recessive phenotype. Label every person's genotype, with a
one-sentence justification for each deduction. (Fictional only — no real
family information.)

## Exit check

Without looking back: define *incomplete dominance*, *codominance*, and
*sex-linked* in one sentence each; state the Alvarez deduction that proves
I-1 is Ee; and explain in one sentence why mutations in gamete-forming
cells matter for inheritance while mutations in other body cells do not.

## Supports and extensions

- **Language access:** keep the pedigree diagram visible while working;
  shade filled symbols and write genotypes beside each symbol as you go.
  Say "shows both" for codominance and "in between" for incomplete
  dominance.
- **Alternate response mode:** the learner may build the pedigree with
  cards or tokens instead of drawing it, or dictate the deductions while
  the adult scribes.
- **Extension:** research (with the adult) one real sex-linked condition
  beyond color blindness — for example, hemophilia or Duchenne muscular
  dystrophy — and write a short paragraph on how its pedigree pattern
  matches the X-linked recessive logic. Do not use any real family's
  information; use published general descriptions only.

## Teacher note — likely misconceptions

Three to watch. First, "dominant means normal and recessive means a
disorder" — false; many recessive alleles are harmless, and some dominant
alleles cause conditions. Second, earlobe attachment is taught here as a
one-gene model but is really influenced by several genes — say so aloud
(the lesson does), or the learner will over-trust the simplification.
Third, "a carrier is sick" — a carrier of a recessive allele shows no
trait; carrier status matters for offspring, not for the carrier's health.
Answer-key references: [answer key](../answer-key.md#lesson-06).
