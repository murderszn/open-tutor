# Lesson 02 — From DNA to Protein: The Central Dogma

**Student goal:** I can read a short mRNA sequence with a codon chart,
predict the amino-acid sequence, and explain how a base change can alter
or leave a protein unchanged.
**Time:** 50 minutes · **Unit:** [U05](../README.md) · **Session 3 of 20**

## Materials

- Notebook and pencil
- The DNA model from Lesson 1
- The simplified codon chart below (printed or copied — the learner keeps
  it for the whole unit; the full 64-codon table is never memorized)

## Readiness check (5 minutes)

Point to the gene-sized segment on the Lesson 1 model and ask: "This DNA
segment codes for a protein. But DNA stays in the nucleus, and proteins
are built out in the cytoplasm, on ribosomes. How does the instruction get
from the nucleus to the ribosome?" Accept "a copy is made" — the lesson
names that copy (mRNA) and the reading step (translation).

## Teaching

The **central dogma** is the flow of genetic information in a cell:
**DNA → RNA → protein**. DNA holds the instructions. A working copy is
made as **messenger RNA (mRNA)** — that step is **transcription**. The
mRNA travels to a **ribosome**, where its message is read to build a
protein — that step is **translation**. DNA itself stays safe in the
nucleus; the cell sends copies, not originals.

RNA differs from DNA in two small ways that matter here: RNA uses the
sugar ribose (not deoxyribose), it is usually single-stranded, and it uses
the base **uracil (U)** in place of thymine (T). So when DNA is
transcribed, A in the DNA template pairs with U in the RNA, T pairs with
A, C pairs with G, and G pairs with C.

The genetic code is read in **codons**: groups of **three** mRNA bases,
each coding for one **amino acid** (or a stop signal). There are 4³ = 64
possible three-letter codons and only 20 amino acids used in proteins, so
most amino acids are coded by more than one codon — the code is
**degenerate**. Three codons (UAA, UAG, UGA) are **stop codons**: they end
protein building. One codon, **AUG**, is the **start codon**: it codes for
the amino acid methionine (Met) *and* sets the reading frame — the ribosome
starts reading there, three bases at a time.

Proteins are chains of amino acids, and the amino-acid sequence determines
how the chain folds and what job the protein does. Change the DNA
sequence, and you may change the protein — or you may not. That is the
heart of this lesson.

### Simplified codon chart (the only codons this unit uses)

Read mRNA 5' → 3', three bases at a time. Start at AUG; stop at UAA, UAG,
or UGA.

| mRNA codon | Amino acid | | mRNA codon | Amino acid |
|---|---|---|---|---|
| AUG | Met (start) | | UAU, UAC | Tyr |
| UUU, UUC | Phe | | CAU, CAC | His |
| UUA, UUG, CUU | Leu | | CAA, CAG | Gln |
| AUU, AUC, AUA | Ile | | AAU, AAC | Asn |
| GUU, GUC, GUA, GUG | Val | | AAA, AAG | Lys |
| UCU, UCC, UCA, UCG | Ser | | GAU, GAC | Asp |
| CCU, CCC, CCA, CCG | Pro | | GAA, GAG | Glu |
| ACU, ACC, ACA, ACG | Thr | | UGU, UGC | Cys |
| GCU, GCC, GCA, GCG | Ala | | UGG | Trp |
| CGU, CGC, CGA, CGG | Arg | | GGU, GGC, GGA, GGG | Gly |
| UAA, UAG, UGA | Stop | | AGU, AGC | Ser |

(A codon not on this chart does not appear in this unit's examples. The
full 64-codon table is in OpenStax Biology 2e §15.1 for the curious.)

**Key vocabulary:** *central dogma* (DNA → RNA → protein),
*transcription* (copying DNA into mRNA), *translation* (reading mRNA to
build a protein), *messenger RNA (mRNA)* (the working copy), *codon* (a
three-base unit of the code), *amino acid* (one of 20 protein building
blocks), *protein* (a folded chain of amino acids), *start codon* (AUG —
begins translation), *stop codon* (UAA, UAG, UGA — ends translation),
*degenerate* (most amino acids have more than one codon).

## Worked example 1 — "Transcribe, then translate"

**DNA template strand (3' → 5'):** TAC AAA GGA CTT

Step 1 — transcribe (template 3' → 5', mRNA built 5' → 3', A→U):

| Template | T | A | C | A | A | A | G | G | A | C | T | T |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| mRNA | A | U | G | U | U | U | C | C | U | G | A | A |

mRNA: **5'-AUG UUU CCU GAA-3'**

Step 2 — translate, three bases at a time from the start codon:

- AUG → Met (start)
- UUU → Phe
- CCU → Pro
- GAA → Glu

Protein: **Met–Phe–Pro–Glu**. **Reasoning to name aloud:** transcription
is base pairing again (Lesson 1's rules, with U standing in for T), and
translation is just reading the codons in order. The DNA never leaves the
nucleus; the mRNA is the copy that travels.

## Worked example 2 — "One base changes — three possible endings"

Start from the same gene. The DNA template changes by one base: the third
codon of the template becomes GAA instead of GGA (template
3'-TAC AAA GAA CTT-5').

- New mRNA: AUG UUU CUU GAA → **Met–Phe–Leu–Glu**. The third amino acid
  changed from Pro to Leu: a **missense** change — the protein is built
  with a different amino acid, and may fold or work differently.
- Compare a different one-base change: template 3'-TAC AAG-5' for the
  second codon gives mRNA AUG UUC → **Met–Phe** — UUC also codes for Phe,
  so the protein is unchanged: a **silent** change. The code's degeneracy
  absorbs it.
- A third kind: a change that creates a stop codon early (for example, a
  template change that makes the mRNA read UAA in the second position)
  would end the protein after one amino acid — a **nonsense** change — and
  the protein would almost certainly not work.

**Reasoning to name aloud:** one base is never "just one base." Whether
it matters depends on what the new codon codes for. And a one- or
two-base *insertion or deletion* is worse still: it shifts the reading
frame, so every codon after it is read wrong. (That is why the code is
read in threes — adding three bases keeps the frame.)

## Guided practice (adult stays close, hints allowed)

Work through these together, 4–6 minutes each.

1. Transcribe this DNA template (3' → 5'): TAC CCA ATT. Write the mRNA
   5' → 3'. *(Hint: pair each base; remember T in DNA pairs with A in
   RNA, and A in DNA pairs with U.)*
2. Translate the mRNA from item 1 using the chart. What is the
   amino-acid sequence? *(Hint: split into threes from the left — the
   first codon should be AUG.)*
3. Error analysis: a learner translates the mRNA 5'-AUGCCCUAA-3' as
   Met–Pro–Stop but writes the protein as "Met–Pro–(nothing)." What is
   right, and what is missing from their answer? *(Hint: what does the
   stop codon do?)*
4. A DNA template base changes so the mRNA codon UUU becomes UUC. What
   happens to the protein? Name the kind of change.
5. Explain in 2–3 sentences why the cell makes an mRNA copy instead of
   sending the DNA itself to the ribosome.

## Independent practice (6–8 meaningful tasks)

1. DNA coding strand (5' → 3'): ATG CCA TAA. The mRNA matches the coding
   strand (with U for T). Write the mRNA and translate it.
2. DNA template (3' → 5'): TAC GGC ATA CTT. Transcribe and translate.
   (Check: your protein should start with Met and end with Glu.)
3. A gene's mRNA reads 5'-AUG CCU ACG UAA-3'. Translate it. Then a
   mutation deletes the second base of the second codon (the C at
   position 5), so the mRNA becomes 5'-AUG CU ACG UAA-3'. Translate the
   shifted message and explain in one sentence why the result is so
   different. *(Hint: regroup into threes from the start codon.)*
4. A point mutation changes an mRNA codon from GAA to GAG. What happens
   to the protein? What kind of change is it?
5. A point mutation changes an mRNA codon from AAA to UAA. What happens,
   and why is this change more serious than the one in item 4?
6. In your own words, explain the central dogma in three sentences: one
   for DNA's job, one for mRNA's job, one for the ribosome's job.
7. Error analysis: "Every mutation changes the protein." Give a
   counterexample from this lesson and explain why it is a counterexample.

## Application

Return to your Lesson 1 DNA model. Choose a 9-base-pair gene segment and
label it with the mRNA it would produce (transcribe it) and the
three-amino-acid protein it codes for (translate it). Then change one base
in the DNA and show, with the chart, whether the protein changes, stays
the same, or stops early. Write the before-and-after in your notebook as a
mini-report: DNA → mRNA → protein, both versions.

## Exit check

Without looking back: write the central dogma as an arrow diagram, name
the start codon and the three stop codons, and explain what "the code is
degenerate" means in one sentence.

## Supports and extensions

- **Language access:** keep the codon chart visible; circle the start and
  stop codons. Say "copy" for transcription and "read and build" for
  translation until the terms stick.
- **Alternate response mode:** the learner may lay out bead codons (three
  beads per amino acid) and dictate the sequence while the adult scribes.
- **Extension:** the genetic code is nearly universal — the same codons
  mean the same amino acids in nearly every species. In 2–3 sentences,
  explain what that suggests about the common ancestry of all life (a
  preview of Unit 06).

## Teacher note — likely misconceptions

Learners often think DNA is *turned into* protein directly — stress the
two steps and the mRNA middleman. Another common slip: reading the DNA
template 5' → 3' and transcribing backwards; always check the direction
labels first. A third: assuming every mutation is harmful — the lesson's
silent change is the counterexample to keep. Finally, some learners
memorize the chart as a list; insist they *use* it to translate, never
recite it. Answer-key references: [answer key](../answer-key.md#lesson-02).
