# Grade 10 Language Arts — Scope and Sequence

Audit section A00 of [issue #48](https://github.com/murderszn/open-tutor/issues/48).
Status: **validated draft** (this document, the track README, and the grade-10
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-07 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-10 hub page | `curriculum/grade-10/README.md` | **New** — created by this run: math and science audits delivered as validated drafts in unmerged draft PRs #114 and #115; language arts audit delivered by this run; social studies planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-10/language-arts/README.md` | **New** — written by this run as a real subject index: course description, 12 measurable objectives, verified standards summary, planned-unit list, adult guidance |
| Scope and sequence | `curriculum/grade-10/language-arts/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-10/language-arts/` before this run | track folder | **Confirmed empty** — `git ls-tree -r HEAD -- curriculum/grade-10/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, diagnostics, resource packs, or teaching images exist to keep, revise, or retire |
| Grade-9 language arts audit (draft PR #111, unmerged) | PR branch | **Prerequisite reference only** — its 12 end-of-year objectives define the entry skills below; no grade-9 lessons copied upward; no learner-facing cross-grade links |
| Same-grade math (#46, draft PR #114) and science (#47, draft PR #115) | PR branches | **Session-model reference only** — ~50-minute sessions, five per week, with same-day adult-reviewed written practice; no math/science content reused |
| Same-grade social studies (#49) | unaudited | **No reuse** — not yet delivered; U03/U07 rhetoric, source evaluation, and multi-perspective research are expected to coordinate with, not copy from, its future world-history and civics work |
| Shared `assignments/language-arts/` relevance studies | labeled high-school band | **Reference only, do not adopt** — the Shakespeare overviews (Hamlet, Romeo & Juliet), Harlem Renaissance poetry study, archetypal flood-myths study, and Scarlet Letter study are one-page enrichment seeds whose lesson builds are owned by the grade-8 track's audit; grade-10 unit builds will select their own anchor texts (including world-literature selections with vetted cultural context) and write their own study materials |
| `resources/language_arts_parts_of_speech.md` | eight parts of speech guide | **Adult-side reference for U04** — accurate grammar vocabulary behind the grade-10 syntax work; never assigned as grade-10 instruction (its tone and examples skew younger) |
| `resources/language_arts_sentence_structure.md` | sentence-structure guide (subject/predicate, phrases, clauses, types) | **Adult-side reference for U04** — accurate at its band; grade-10 applies participial, prepositional, and absolute phrases plus noun, relative, and adverbial clauses (L.9-10.1.b) in stylistic analysis and the learner's own writing |
| `resources/language_arts_literary_terms.md` | literary terms and devices guide | **Teacher-side vocabulary bank for U01/U02/U08** — simile, metaphor, personification, allusion, theme, point of view, etc. are accurate; grade-10 lessons build on them toward world-literature point of view (RL.9-10.6), comparative analysis, and cumulative word-choice impact (RL.9-10.4) |
| `resources/language_arts_great_books_and_stories.md` | classics/allusion guide with Gutenberg, LibriVox, CommonLit, SparkNotes links | **Reuse with verification** — U01/U02 allusion background and source-text discovery for world-literature selections (epic, myth, tale, and poetry traditions); every external link re-verified at unit build; the guide's summaries are background for the adult, never learner text |
| `resources/semester-resource-library.md` | shared resource shelf | **Inspect during unit builds** — external starting points only; each candidate opened and assessed before recommendation |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack in the repo's required format |
| Purdue OWL / Folger Shakespeare Library links | cited elsewhere in repo | **Verify at build** — OWL URLs restructured in recent years; Folger edition act/scene/line numbering must match whichever edition the adult selects |
| Repository datasets (CSV/JSON) | none language-related | **No reuse** — units use original word sets and sentence banks authored per unit |

No existing grade-10 language arts material was inaccurate or inappropriate —
there is none. No answer-key gaps, dated facts, or broken links exist in the
track because nothing has been written yet. The gap is total for core
instruction: no taught lessons, no assessments, no keys, no diagnostics, no
resource packs, and no teaching images.

## 2. Prerequisites

Learners typically enter grade-10 language arts able to (the grade-9 track's
stated end-of-year objectives, currently in unmerged draft PR #111; the
diagnostic weeks verify these and the track re-teaches insecure skills in use):

- Cite strong and thorough textual evidence for explicit and inferential
  claims about literature and informational text (RL.9-10.1, RI.9-10.1)
- Determine a theme or central idea, analyze its development in detail, and
  write an objective summary (RL.9-10.2, RI.9-10.2)
- Analyze how complex characters develop, interact, and advance plot or
  theme; analyze how an author unfolds an analysis or series of ideas/events
  (RL.9-10.3, RI.9-10.3)
- Analyze word choice — figurative, connotative, and technical meanings — for
  cumulative impact on meaning and tone; interpret figures of speech in
  context (RL.9-10.4, RI.9-10.4, L.9-10.5.a)
- Analyze an author's structural choices (event order, parallel plots,
  pacing, flashbacks) and their effects; analyze claim development through
  text portions (RL.9-10.5, RI.9-10.5)
- Analyze subjects across artistic mediums; analyze source-material
  transformation; analyze seminal U.S. documents (RL.9-10.7, RL.9-10.9,
  RI.9-10.7, RI.9-10.9)
- Delineate and evaluate an argument's claims: valid reasoning, relevant and
  sufficient evidence, false statements, fallacious reasoning (RI.9-10.8)
- Write arguments with precise claims distinguished from counterclaims,
  fair development of both, cohesion, formal tone, and a supported
  conclusion (W.9-10.1)
- Write narratives with technique, dialogue, pacing, description, reflection,
  and sensory language in well-structured sequences (W.9-10.3)
- Write informative/explanatory texts with clear organization and domain
  vocabulary (W.9-10.2)
- Conduct short and sustained research: authoritative sources, advanced
  searches, credibility judgment, synthesis, selective integration without
  plagiarism, standard citation (W.9-10.7, W.9-10.8)
- Demonstrate grade 9-10 conventions: varied phrase/clause types (L.9-10.1.b),
  semicolons (L.9-10.2.a), style-manual conformity (L.9-10.3.a), vocabulary
  strategies (L.9-10.4), academic vocabulary (L.9-10.6)
- Engage in evidence-based collaborative discussion and present findings
  clearly with strategic digital media in formal English (SL.9-10.1,
  SL.9-10.4, SL.9-10.5, SL.9-10.6); evaluate a speaker's reasoning and
  evidence (SL.9-10.3)

The audit never assumes fluency with: **independent reading at the high end
of the 9-10 complexity band** (the grade-10 step up from scaffolded grade-9
reading, per RL.9-10.10/RI.9-10.10); **world-literature cultural point of
view** — analyzing a cultural experience reflected in literature from
outside the United States across a wide reading (RL.9-10.6); **comparative
theme analysis across cultures** with source-transformation awareness
(RL.9-10.9 applied across traditions); **translation as interpretation** —
reading translated work with translator/edition awareness and comparing
translation choices; **sustained multi-source argument synthesis** where
counterargument is anticipated from genuinely different cultural or
disciplinary perspectives; **multimodal composition** where graphics, audio,
and visual elements are chosen for rhetorical purpose (W.9-10.2.a,
SL.9-10.5); or the grade-10 **revised portfolio** with comparative reflection
— those are this track's new content. Spelling and keyboarding fluency are
supported, not assumed, across the writing units.

## 3. Track objectives

Measurable, adult-assessed by end of year (12 objectives; numbered in the
track README). The grade-10 bar above grade 9: independence at the high end
of the complexity band, world-literature cultural perspective as the
throughline, comparison as the signature analytical move, and multimodal,
multi-perspective synthesis as the signature compositional move.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for English Language Arts,
grades 9-10 band**, as published at
[thecorestandards.org/ELA-Literacy](https://www.thecorestandards.org/ELA-Literacy/).
Each strand page (RL, RI, W, SL, L for grades 9-10) was opened and its codes
and descriptions checked on 2026-10-07. The cluster-level mapping below
summarizes, in the audit's own words, which parts of the track carry each
standard; it makes **no claim of state adoption, accreditation, alignment
certification, or graduation-requirement coverage**.

- **Reading: Literature (RL.9-10).** Key Ideas and Details RL.9-10.1–3 —
  carried by U01 (evidence, theme development in world-literature selections)
  and U02 (comparative theme analysis), reinforced in every reading unit.
  Craft and Structure RL.9-10.4–6 — U02 (comparative word-choice and
  structural analysis), U04 (tone/syntax vocabulary work), and U08 (poetry
  and drama), with **RL.9-10.6 as the track's signature standard**: analyzing
  a particular point of view or cultural experience reflected in literature
  from outside the United States, drawing on a wide reading of world
  literature — carried primarily by U01 and U02 and revisited in U08.
  Integration of Knowledge and Ideas RL.9-10.7, RL.9-10.9 — U02 and U08
  (multi-medium comparison; how authors draw on and transform source
  material, including across literary traditions). Note: the standard omits
  RL.9-10.8 at this band (the strand goes 7 to 9); the audit does not invent
  it. Range of Reading RL.9-10.10 — the year plan; note its two-tier
  expectation (end of grade 9: in the 9-10 band proficiently with scaffolding
  at the high end; end of grade 10: at the high end of the band
  independently and proficiently), which drives this track's move from
  scaffolded to independent complex-text reading.
- **Reading: Informational Text (RI.9-10).** Key Ideas and Details
  RI.9-10.1–3 — U01 (cultural context essays) and U03 (evidence, central
  idea, author's unfolding of ideas/events). Craft and Structure RI.9-10.4–6
  — U03 (technical word choice, claim development through text portions,
  author's point of view and use of rhetoric) and U07 (source evaluation).
  Integration of Knowledge and Ideas RI.9-10.7–9 — U03 (accounts in different
  mediums; argument evaluation including fallacious reasoning; seminal U.S.
  documents) and U07 (cross-perspective source comparison). Range of Reading
  RI.9-10.10 — year plan, same two-tier independence note as RL.9-10.10.
- **Writing (W.9-10).** Text Types and Purposes W.9-10.1–3 — U06
  (arguments with precise claims, fair counterclaims, cohesion, formal tone;
  evidence drawn from literary and informational texts, W.9-10.9), U05
  (narratives with technique, dialogue, pacing, sensory detail, reflective
  conclusions) and literary analysis essays, U07 research and U03/U07
  informative writing (W.9-10.2, including formatting, graphics, and
  multimedia selection, W.9-10.2.a). Production and Distribution
  W.9-10.4–6 — every writing unit (revision and editing routines W.9-10.5;
  technology for production and linking, W.9-10.6). Research W.9-10.7–9 —
  U07 (short and sustained inquiry across perspectives, authoritative
  sources, advanced searches, credibility judgment, synthesis, plagiarism
  avoidance, standard citation; evidence drawn from literary and
  informational texts). Range of Writing W.9-10.10 — the weekly independent
  writing practice across all 36 weeks.
- **Speaking & Listening (SL.9-10).** Comprehension and Collaboration
  SL.9-10.1–3 — weekly discussion routines (evidence-based seminars and
  cross-cultural comparison discussions in U01/U02/U08; media and rhetoric
  evaluation in U03/U07). Presentation of Knowledge and Ideas
  SL.9-10.4–6 — U05 author readings, U07 multimodal presentations, and the
  U08 portfolio seminar with strategic digital media in formal English.
- **Language (L.9-10).** Conventions L.9-10.1.b (varied phrase/clause types
  — noun, verb, adjectival, adverbial, participial, prepositional, absolute
  phrases; independent, dependent, noun, relative, adverbial clauses — for
  meaning and variety) and L.9-10.2.a (semicolons linking closely related
  independent clauses) — U04, reinforced in every unit's editing passes.
  Knowledge of Language L.9-10.3.a (conform work to a style manual — MLA for
  this track) — U06/U07. Vocabulary Acquisition and Use L.9-10.4.a–d
  (context clues, word-change patterns, reference materials, verification)
  and L.9-10.5.a (figures of speech such as euphemism and oxymoron in
  context) — U04 with text-embedded practice in every reading unit;
  L.9-10.6 (academic and domain-specific vocabulary) — the year's cumulative
  word bank.

The proposed high-school course order ("world literature and composition"
for grade 10, from the expansion plan's pathway table) is a starting choice,
not a universal requirement; this audit's unit order follows the issue's
prerequisite-ordered unit list (world-literature reading foundations →
comparative analysis → writing application in three modes → research
synthesis → comparative portfolio).

## 5. Thirty-six-week sequence

Eight four-week units plus four flexible weeks (diagnostic placement, midyear
review, final review). Sessions are about 50 minutes, five per week (25
sessions per four-week unit). Each week below lists concrete goals plus the
mix of lessons, reading, discussion, writing, and review that fills it —
unit lesson plans will specify sessions 1–25 individually.

**Weeks 1–2 — Diagnostic placement (flexible).**
- Goal: verify every entry prerequisite before U01 assumes it.
- Reading check: one grade-9-level literary passage and one informational
  passage, each followed by evidence-based questions (RL.9-10.1/RI.9-10.1
  level), a theme/central-idea analysis, and an objective summary.
- Independence check: one complex passage (high end of the 9-10 band) read
  with light scaffolding, noting where the learner stalls.
- Writing check: one argument paragraph with a claim, one reason, and one
  cited evidence sentence; one narrative paragraph with dialogue and sensory
  detail; one informative paragraph explaining a concept.
- Conventions check: sentence combining, phrase/clause variety, semicolons,
  all from the grade-9 list.
- Discussion check: one structured seminar on a short text, adult-scored for
  evidence use and turn-taking.
- Outcome: the adult records which skills are secure, which get re-taught in
  use during U01, and which need a warm-up routine all year. The independence
  check sets the scaffolding-release schedule for the year's reading.

**U01 — World literature cultural context and interpretation (weeks 3–6).**
Objectives 1, 2, 6. Anchor texts: original or public-domain world-literature
selections (stories, myths, tale collections, excerpts in translation)
chosen at unit build for the high end of the 9-10 band, with adult-vetted
cultural background notes. The adult selects one translated work and notes
the translator and edition for every selection.

- **Week 3:** reading across cultures — what "cultural context" means for a
  reader (historical moment, social norms, belief systems, genre traditions);
  how to use (and not overuse) background notes; distinguishing what the
  text says from what the reader assumes (RL.9-10.1, RL.9-10.6). Practice:
  2 context-mapping exercises; 1 inference-sort task separating textual
  evidence from cultural assumption; independent reading log begins (daily
  25–35 min, adult-checked weekly).
- **Week 4:** point of view and cultural experience — analyzing whose
  perspective shapes the telling and what cultural experience it reflects;
  narrator reliability across traditions; comparing two English translations
  of one short passage to see translation as interpretation. Practice:
  POV/culture annotation of one selection; translation-comparison paragraph
  citing specific word-choice differences and their effects.
- **Week 5:** theme in world literature — tracking a candidate theme as it
  emerges and is refined by specific details across a full selection;
  objective summary vs. retelling; how a theme lands differently in a
  different cultural setting (RL.9-10.2). Practice: theme-tracker worksheet;
  2 summary rewrites with the adult scoring objectivity and completeness.
- **Week 6:** culminating interpretive essay (3–4 paragraphs: claim about a
  cultural point of view or experience + theme development + strong and
  thorough evidence), plus a formative quiz on RL.9-10.1/2/6 and a review
  session on the week's misconceptions before U02.

**U02 — Comparative theme structure and perspective (weeks 7–10).**
Objectives 2, 5, 6, with RL.9-10.7/9. Builds on U01's world-literature
reading; the signature comparative move of the track.

- **Week 7:** comparison as a method — what makes a comparison fair (shared
  question, comparable evidence, named differences); organizing by
  point-by-point vs. block structure; thesis statements for comparative
  claims. Practice: 2 comparison outlines on paired short texts; 1 thesis
  revision drill.
- **Week 8:** theme across cultures — how the same human concern (duty,
  exile, honor, fate, hospitality) is shaped differently by two traditions;
  analyzing development in detail in each text before comparing
  (RL.9-10.2). Practice: dual theme-tracker; 1 comparative paragraph with
  embedded evidence from both works.
- **Week 9:** structure and perspective in comparison — how event order,
  parallel plots, pacing, and point of view create different effects in two
  works (RL.9-10.5); how a later author draws on and transforms source
  material (RL.9-10.9), including across traditions. Practice: structural
  contrast chart; 1 source-transformation analysis.
- **Week 10:** multi-medium extension — one subject or key scene in two
  artistic mediums (e.g., a mythic scene in text and in a painting or film
  still), analyzing what each treatment emphasizes or leaves out
  (RL.9-10.7); culminating comparative essay (900–1,200 words); formative
  quiz; review session.

**U03 — Nonfiction rhetoric reasoning and source evaluation (weeks 11–14).**
Objectives 1, 7, 12, with RI.9-10.1–8 and SL.9-10.2–3. Anchor texts:
editorials, speeches, essays, and seminal-document excerpts (public domain
or adult-selected), including at least one international document (e.g., a UN
declaration) alongside U.S. seminal documents for the world-literature
throughline; multimedia accounts of one subject for RI.9-10.7.

- **Week 11:** central idea and development — how an author unfolds an
  analysis or series of ideas/events; tracing claims through sentences,
  paragraphs, and sections; objective summaries of argumentative prose
  (RI.9-10.2, RI.9-10.3, RI.9-10.5). Practice: 2 claim-tracing maps;
  summaries scored for objectivity.
- **Week 12:** rhetoric and purpose — an author's point of view and how
  rhetoric advances it (RI.9-10.6); rhetorical strategies (appeals,
  repetition, framing, diction); how word choice differs across genres
  (RI.9-10.4). Practice: rhetoric inventory of one speech; genre-contrast
  paragraph.
- **Week 13:** argument evaluation — delineating claims, testing reasoning
  validity, checking evidence relevance and sufficiency, identifying false
  statements and fallacious reasoning (RI.9-10.8); seminal-document study —
  related themes addressed in a U.S. founding-era document and in an
  international document (RI.9-10.9). Practice: fallacy-identification set;
  argument-evaluation chart; theme-comparison notes across the two documents.
- **Week 14:** media and speaker evaluation — comparing accounts of one
  subject in print, video, and data visualizations (RI.9-10.7); integrating
  information across formats while evaluating each source's credibility and
  accuracy (SL.9-10.2); evaluating a speaker's reasoning and use of evidence
  (SL.9-10.3); culminating evaluation essay; formative quiz; review session.

**U04 — Language syntax tone vocabulary and conventions (weeks 15–18).**
Objectives 4, 11. Explicitly taught here, then enforced in every later unit's
editing passes; examples drawn from the year's world-literature and
nonfiction readings.

- **Week 15:** sentence architecture — independent and dependent clauses;
  noun, relative, and adverbial clauses; simple, compound, complex, and
  compound-complex sentences; fragments and run-ons diagnosed in the
  learner's own writing (L.9-10.1.b foundation).
- **Week 16:** phrase variety and punctuation — participial, prepositional,
  and absolute phrases; noun, verb, adjectival, and adverbial phrases; using
  phrase types to convey specific meanings and add variety (L.9-10.1.b);
  semicolons joining closely related independent clauses, with and without
  conjunctive adverbs (L.9-10.2.a). Practice: 3 sentence-combining sets; 1
  phrase-expansion rewrite of a flat paragraph from the learner's U01/U02
  work.
- **Week 17:** vocabulary systems — context clues, word-change patterns
  (analyze/analysis/analytical), reference materials, and verification
  (L.9-10.4.a–d); figures of speech in context, including euphemism and
  oxymoron, analyzing their role in the text (L.9-10.5.a); cumulative
  word-choice impact on tone in a translated passage (RL.9-10.4); academic
  and domain-specific vocabulary routines (L.9-10.6). Practice: weekly
  word-bank of 10–12 words with in-text application.
- **Week 18:** style and editing — how language functions in different
  contexts and effective choices for meaning or style (L.9-10.3); choosing
  syntax for tone; a full editing pass over a U01–U03 piece applying the
  unit's tools; formative quiz (sentence analysis + vocabulary application);
  review session.

**Week 19 — Midyear review (flexible).**
- Revisit the U01–U04 culminating pieces: one revision task per unit applying
  the skills learned since (translation note added to the U01 essay;
  comparison sharpened in U02; source added to U03; style pass from U04).
- Timed evidence-based comparative paragraph (45 min) scored against
  objectives 1, 2, and 6; conventions check on U04 targets.
- Adult and learner conference: portfolio so far, independence progress
  against the RL.9-10.10/RI.9-10.10 two-tier bar, goals for the writing half
  of the year.

**U05 — Narrative craft and literary analysis essays (weeks 20–23).**
Objectives 3, 5, 9, with W.9-10.3, W.9-10.5, and SL.9-10.4/6. The year's
creative-composition center; narrative technique then literary analysis.

- **Week 20:** story architecture — problem/situation, character want vs.
  need, event sequences that build on one another; establishing point of
  view and narrator; multiple plot lines. Practice: 2 story-seed sketches;
  POV decision memo.
- **Week 21:** craft techniques — dialogue that reveals character, pacing
  (scene vs. summary), description, reflection; precise sensory language
  (W.9-10.3.b, W.9-10.3.d). Practice: 3 technique drills; adult feedback
  round (the adult models response language).
- **Week 22:** drafting and revision — full first draft of a short story or
  narrative sequence (1,500–2,500 words); revision passes for structure, then
  language, then conventions (W.9-10.5); reflective conclusion (W.9-10.3.e).
- **Week 23:** literary analysis essays — turning narrative-craft knowledge
  into analysis: how a studied author's choices (complex characters,
  structure, time manipulation) create effects (RL.9-10.3, RL.9-10.5);
  analysis essay (800–1,000 words); author reading — presentation of an
  excerpt with strategic delivery choices (SL.9-10.4, SL.9-10.6);
  review session on narrative vs. analysis craft.

**U06 — Argument synthesis and counterargument workshop (weeks 24–27).**
Objective 8, with W.9-10.1, W.9-10.9, L.9-10.3.a, RI.9-10.8. Builds directly
on U03's argument evaluation and U04's syntax work; counterarguments are
drawn from genuinely different perspectives studied this year.

- **Week 24:** claim design — precise claims distinguished from alternate or
  opposing claims; qualifying language; organization mapping
  claim–counterclaim–reasons–evidence relationships (W.9-10.1.a). Practice:
  2 claim outlines; counterclaim anticipation chart.
- **Week 25:** evidence and fairness — developing claims and counterclaims
  fairly, supplying evidence for each while noting strengths and
  limitations, anticipating the audience's knowledge and concerns
  (W.9-10.1.b); drawing evidence from literary and informational texts read
  earlier in the year (W.9-10.9). Practice: evidence-pairing task; 1
  body-paragraph draft with integrated source material.
- **Week 26:** cohesion, tone, and citation — linking words, phrases, and
  clauses between major sections (W.9-10.1.c); formal style and objective
  tone (W.9-10.1.d); conforming the essay to MLA guidelines (L.9-10.3.a);
  full draft of the argument essay (1,200–1,800 words).
- **Week 27:** revision cycle — structural revision (does the argument
  hold?), evidence revision (is every claim supported?), language revision
  (W.9-10.5); concluding statement that follows from and supports the
  argument (W.9-10.1.e); rubric-scored final essay; formative quiz on
  argument structure; review session.

**U07 — Research across perspectives and multimodal composition (weeks
28–31).** Objective 10, with W.9-10.2, W.9-10.7–9, SL.9-10.5. Sustained
project with weekly deliverables; the research question must admit at least
two credible perspectives (cultural, disciplinary, or historical).

- **Week 28:** question and search — generating a researchable question;
  narrowing/broadening inquiry; advanced search techniques; identifying
  authoritative print and digital sources across perspectives (W.9-10.7,
  W.9-10.8). Deliverable: approved question + working bibliography of 8–10
  candidate sources.
- **Week 29:** credibility and perspective judgment — assessing each
  source's usefulness and reliability for the question; corroboration across
  sources; distinguishing reporting, analysis, and opinion; naming each
  source's perspective and what it cannot see. Deliverable:
  source-evaluation log.
- **Week 30:** synthesis — finding patterns, tensions, and gaps across
  sources; organizing complex ideas with clear connections and distinctions;
  developing the topic with well-chosen facts, definitions, details, and
  quotations (W.9-10.2.b); selecting formatting, graphics, or multimedia
  where they aid comprehension (W.9-10.2.a); integrating information
  selectively to maintain flow. Deliverable: synthesis outline + drafted
  sections.
- **Week 31:** citation, polish, and presentation — quoting, paraphrasing,
  and summarizing without plagiarism; standard citation format throughout
  (W.9-10.8); informative/explanatory final paper (1,800–2,500 words) with
  precise domain vocabulary (W.9-10.2.d) and formal tone (W.9-10.2.e);
  multimodal presentation of findings with strategic digital media
  (SL.9-10.5); research process reflection; review session.

**U08 — Poetry drama discussion and revised portfolio (weeks 32–35).**
Objectives 4, 6, 12. Culminating comparative work; seminar format with the
adult as discussion partner. Selections include poetry and drama from at
least two cultural traditions.

- **Week 32:** poetry — form and sound (line, stanza, meter, rhyme,
  enjambment, free verse; and one non-English form such as haiku or ghazal
  studied in translation with a form note); speaker and persona; figurative
  language density; how form shapes meaning; cumulative word-choice impact
  (RL.9-10.4). Practice: 3 poem analyses; 1 original poem applying a studied
  form (optional creative extension).
- **Week 33:** drama — reading plays as performance texts (dialogue, stage
  directions, soliloquy); one public-domain play or excerpt studied in full
  in an adult-approved edition (line numbers must match the edition used);
  how staging choices interpret the text; cultural point of view in
  performance (RL.9-10.6).
- **Week 34:** comparative seminar — one subject or key scene across two
  artistic mediums, analyzing what each emphasizes or leaves out
  (RL.9-10.7); one author drawing on and transforming source material
  (RL.9-10.9); translation-comparison reprise at higher difficulty.
  Deliverable: comparative essay (1,000–1,500 words).
- **Week 35:** revised portfolio — the learner selects, revises, and
  introduces 5–7 pieces from the year with a reflective cover letter tracing
  growth against the 12 objectives and the move to independent complex-text
  reading; seminar presentation with digital media support (SL.9-10.5);
  adult scores the portfolio against the track objectives.

**Week 36 — Final review and portfolio presentation (flexible).**
- Timed synthesis task (60 min): read one new short complex text at the high
  end of the band, write an evidence-based comparative or interpretive
  analysis — scored against objectives 1, 2, and 6 as the year's summative
  reading check (the RL.9-10.10 independence bar).
- Portfolio presentation to the adult (SL.9-10.4, SL.9-10.6); goal-setting
  conversation for grade 11 (American literature, rhetoric, and research).
- Adult records final objective-by-objective status; unresolved gaps become
  summer/grade-11 warm-ups, not failures.

## 6. Resources, reuse, and future-unit paths

- **Internal reuse:** the four resource guides are mapped above
  (parts-of-speech and sentence-structure as U04 adult references;
  literary terms as U01/U02/U08 teacher-side vocabulary; great
  books/stories as world-literature allusion and text-discovery
  background). The `resource_finder.md` format drives every unit's Resource
  Pack. Shared legacy language-arts assignments are not adopted into this
  track (see inventory); unit builds write their own text-specific
  materials, and may consult the relevance-study format as a design model
  after adult review.
- **New references needed at unit build:** public-domain or lawfully linked
  anchor texts for U01, U02, U08 (Project Gutenberg, CommonLit, Poetry
  Foundation, Folger Shakespeare Library — each re-verified when selected,
  with translator/edition recorded for translated works); U.S. seminal
  document excerpts (e.g., via the National Archives or Library of
  Congress) and one international document for U03; captioned short videos
  on rhetoric, poetry form, and drama performance — curated, never
  fabricated; Purdue OWL pages for MLA citation (URLs re-verified); a
  writer's notebook and dictionary/thesaurus access (print or free digital);
  adult-vetted cultural background notes for every non-U.S. tradition
  studied.
- **Materials and safety:** notebook or device for drafting, printed texts
  or a reader, dictionary access. No lab materials, no hazards, no purchased
  curriculum. Nothing requires a paid account; free no-account alternatives
  (Gutenberg, LibriVox, CommonLit, Poetry Foundation, Folger, Library of
  Congress) support every core objective. The adult previews all texts and
  videos for age appropriateness; mature literary themes are introduced
  with expectations set in advance, and cultural context notes are checked
  for accuracy before the learner sees them.
- **Accessibility supports (every unit):** text alternatives for all images
  and diagrams; audiobook options for anchor texts (LibriVox or library);
  adjustable pacing and chunked assignments; large-print and
  text-to-speech compatibility; caption checks on all videos;
  quiet/low-stimulation alternatives for seminar and presentation tasks;
  sentence frames and graphic organizers available as scaffolds, never as
  the only route.
- **Future-unit paths:** each unit build will add lessons, practice,
  investigation/project, formative quiz, culminating assessment, separate
  teacher guide and answer key, verified Resource Pack, and at least one
  genuinely generated teaching image with alt text, caption, and generation
  record. Planned unit folders will live under
  `curriculum/grade-10/language-arts/units/unit-NN-<topic>/`. No unit folder
  is linked until its files exist.

## 7. Validation record

- Standards codes and descriptions verified against thecorestandards.org
  ELA-Literacy RL/RI/W/SL/L 9-10 strand pages on 2026-10-07; all codes
  cited in the objectives and crosswalk confirmed present with matching
  descriptions; RL.9-10.8 confirmed absent at this band.
- Target folder confirmed empty on `main` (2026-10-07); no legacy content
  to reconcile.
- `python3 scripts/validate-library.py` run after authoring: see delivery
  comment for result.
- New/edited Markdown links checked: all relative links resolve to files
  created by this run or pre-existing files on `main`; no links to planned
  unit folders (units are described in prose only).
- No TODO/TBD/FIXME markers. No generated images are required for an audit
  section; none were substituted.
- `curriculum/manifest.json` updated with the three new files using the
  existing schema; counts verified against actual entries.

*End of audit A00. Next section: U01 — World literature cultural context and
interpretation.*
