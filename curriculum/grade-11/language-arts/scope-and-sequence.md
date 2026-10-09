# Grade 11 Language Arts — Scope and Sequence

Audit section A00 of [issue #52](https://github.com/murderszn/open-tutor/issues/52).
Status: **validated draft** (this document, the track README, and the grade-11
hub page); the eight units and the R00 review package are planned, not yet
written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-07 against `main` (commit `2c43d24`; verified with
`git ls-tree -r origin/main --name-only -- curriculum/grade-11/`, which returns
no files — the track folder does not exist on `main` yet).

| Item | Location | Decision |
|---|---|---|
| Grade-11 hub page | `curriculum/grade-11/README.md` | **New** — created by this run: math and science audits delivered as validated drafts in unmerged draft PRs #117 (issue #50) and #118 (issue #51); language arts audit delivered by this run; social studies planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-11/language-arts/README.md` | **New** — written by this run as a real subject index: course description, 12 measurable objectives, verified standards summary, planned-unit list, adult guidance |
| Scope and sequence | `curriculum/grade-11/language-arts/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-11/language-arts/` before this run | track folder | **Confirmed empty** — the folder does not exist on `main`; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, diagnostics, resource packs, or teaching images exist to keep, revise, or retire |
| Grade-10 language arts audit (draft PR #116, unmerged) | PR branch | **Prerequisite reference only** — its end-of-year objectives define the entry skills in §2; no grade-10 lessons copied upward; no learner-facing cross-grade links |
| Same-grade math (#50, draft PR #117) and science (#51, draft PR #118) | PR branches | **Session-model reference only** — about 50-minute sessions, five per week, with same-day adult-reviewed written practice; no math/science content reused |
| Same-grade social studies (#53) | unaudited | **No reuse** — not yet delivered; U02/U06/U07 founding-document and public-advocacy work is expected to coordinate with, not copy from, its future U.S. government and civics track |
| Shared `assignments/language-arts/` enrichment seeds (Shakespeare overviews for *Hamlet* and *Romeo and Juliet*, Harlem Renaissance poetry study, archetypal flood-myths study, *Scarlet Letter* study) | `assignments/language-arts/` | **Reference only, do not adopt** — one-page enrichment seeds whose lesson builds are owned by the grade-8 track's audit; grade-11 unit builds will select their own anchor texts (public-domain American works plus adult-selected licensed editions) and write their own study materials |
| `resources/language_arts_literary_terms.md` | literary terms and devices guide | **Teacher-side vocabulary bank for U01/U03/U08** — simile, metaphor, personification, allusion, theme, point of view, and related terms are accurate; grade-11 lessons build on them toward satire/irony/understatement point of view (RL.11-12.6), word-choice impact (RL.11-12.4), and cumulative figurative-language analysis (L.11-12.5.a) |
| `resources/language_arts_parts_of_speech.md` | eight parts of speech guide | **Adult-side reference for U04** — accurate grammar vocabulary behind the grade-11 syntax work; never assigned as grade-11 instruction (its tone and examples skew younger) |
| `resources/language_arts_sentence_structure.md` | sentence-structure guide (subject/predicate, phrases, clauses, sentence types) | **Adult-side reference for U04** — accurate at its band; grade-11 applies contested-usage resolution (L.11-12.1.a–b) and deliberate syntactic variation for effect (L.11-12.3.a) in stylistic analysis and the learner's own writing |
| `resources/language_arts_great_books_and_stories.md` | classics/allusion guide with Gutenberg, LibriVox, CommonLit, SparkNotes links | **Reuse with verification** — U01 allusion background and public-domain source-text discovery for American selections; every external link re-verified at unit build; the guide's summaries are background for the adult, never learner text |
| `resources/semester-resource-library.md` | shared resource shelf | **Inspect during unit builds** — external starting points only; each candidate opened and assessed before recommendation |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack in the repo's required format |
| Purdue OWL / Folger Shakespeare Library / Library of Congress links | cited elsewhere in the repo and in `resource-map.md` | **Verify at build** — OWL's research, MLA, and rhetoric sections were restructured in recent years; Folger edition act/scene/line numbering must match whichever edition the adult selects; LOC and Founders Online document URLs must be opened and confirmed per unit |
| Repository datasets (CSV/JSON) | none language-related | **No reuse** — units use original word sets, sentence banks, and text sets authored per unit |

No existing grade-11 language arts material was inaccurate or inappropriate —
there is none. No answer-key gaps, dated facts, or broken links exist in the
track because nothing has been written yet. The gap is total for core
instruction: no taught lessons, no assessments, no keys, no diagnostics, no
resource packs, and no teaching images.

## 2. Prerequisites

Learners typically enter grade-11 language arts able to (the grade-10 track's
stated end-of-year objectives, currently in unmerged draft PR #116; the
diagnostic week verifies these and the track re-teaches insecure skills in
use):

- Cite strong and thorough textual evidence for explicit and inferential
  claims about literature and informational text (RL.9-10.1, RI.9-10.1)
- Determine a theme or central idea, analyze its development in detail, and
  write an objective summary (RL.9-10.2, RI.9-10.2)
- Analyze how complex characters develop and interact and how an author
  unfolds an analysis or series of ideas and events (RL.9-10.3, RI.9-10.3)
- Analyze word choice — figurative, connotative, and technical meanings — for
  cumulative impact on meaning and tone; interpret figures of speech in
  context (RL.9-10.4, RI.9-10.4, L.9-10.5.a)
- Analyze an author's structural choices and their effects; analyze claim
  development through portions of a text (RL.9-10.5, RI.9-10.5)
- Analyze subjects across artistic mediums, source-material transformation,
  and seminal U.S. documents (RL.9-10.7, RL.9-10.9, RI.9-10.7, RI.9-10.9)
- Delineate and evaluate an argument's claims: valid reasoning, relevant and
  sufficient evidence, false statements, fallacious reasoning (RI.9-10.8)
- Write arguments with precise claims distinguished from counterclaims,
  fair development of both, cohesion, formal tone, and a supported
  conclusion (W.9-10.1); write narratives with technique and sensory language
  (W.9-10.3); write informative/explanatory texts with clear organization
  (W.9-10.2)
- Conduct short and sustained research: authoritative sources, advanced
  searches, credibility judgment, synthesis, selective integration without
  plagiarism, standard citation (W.9-10.7, W.9-10.8)
- Demonstrate grade 9–10 conventions and vocabulary strategies (L.9-10.1–6
  band); engage in evidence-based collaborative discussion and present
  findings clearly with strategic media in formal English (SL.9-10.1,
  SL.9-10.4–6); evaluate a speaker's reasoning and evidence (SL.9-10.3)

The audit never assumes fluency with: **independent reading at the high end
of the 11–CCR complexity band** (the grade-11 step up from scaffolded
grade-10 reading, per RL.11-12.10 and RI.11-12.10); **foundational American
works as a body of knowledge** — demonstrating knowledge of eighteenth-,
nineteenth-, and early-twentieth-century foundational American literature,
including how two or more texts from the same period treat similar themes
(RL.11-12.9); **seminal-document reasoning evaluation** — delineating and
evaluating constitutional principles and legal reasoning in seminal U.S.
texts and the premises, purposes, and arguments of public advocacy
(RI.11-12.8), and analyzing foundational U.S. documents for themes,
purposes, and rhetorical features (RI.11-12.9); **point of view through
satire, sarcasm, irony, and understatement** (RL.11-12.6); **multiple
interpretations across versions**, including a Shakespeare play and a play
by an American dramatist (RL.11-12.7); **rhetorical style-and-content power
analysis** (RI.11-12.6); **deliberate syntactic variation for effect**
(L.11-12.3.a) and **contested-usage resolution** (L.11-12.1.a–b); **sustained
independent research** with explicit source-limitation assessment (W.11-12.7,
W.11-12.8); or **seminar leadership** with synthesis across perspectives
(SL.11-12.1.c–d) — those are this track's new content. Spelling and
keyboarding fluency are supported, not assumed, across the writing units.

## 3. Track objectives

Measurable, adult-assessed by end of year (12 objectives; numbered in the
track README). The grade-11 bar above grade 10: independence at the high end
of the complexity band, foundational American literature as the throughline,
seminal-document and public-advocacy rhetoric as the signature analytical
move, and sustained ethical research plus seminar leadership as the signature
compositional moves. The full objective text lives in
[README.md](README.md); the standards crosswalk in §5 maps each objective to
verified codes.

## 4. Eight-unit sequence and weekly pacing

About 36 weeks: eight four-week units (20 sessions each) plus four flexible
weeks — diagnostic placement (week 1), catch-up (week 15), midyear review
(week 14), and final review (week 36). Sessions are about 50 minutes, five per
week. A unit's 20 sessions are budgeted as: 4–6 written lessons (8–10
sessions), close-reading or writing workshops (4–5 sessions), seminar or
discussion (1–2 sessions), independent practice and drafting (2–3 sessions),
and review plus the formative quiz (1–2 sessions). Reading volume rises across
the year toward independent full-length works.

### Weeks 2–5 — U01: American literature contexts, themes, and close reading

Establishes the close-reading routine and the historical frame the whole year
uses. Anchor texts (public domain): Frederick Douglass's "What to the Slave
Is the Fourth of July?" (1852, excerpt), Whitman and Dickinson poems, and
F. Scott Fitzgerald's *The Great Gatsby* (1925).

- **Week 2:** What "American literature" means as a field; historical periods
  at a glance; the close-reading routine (annotate, question, connect,
  summarize). Reading workshop: Douglass speech excerpt.
- **Week 3:** Theme development across a novel: tracking two or more themes
  in *Gatsby* and how they interact; objective summary versus analysis.
- **Week 4:** Same period, similar themes: comparing how Douglass, Whitman,
  and Dickinson treat freedom and identity; textual evidence workshops.
- **Week 5:** Review, formative quiz, and unit reflection; reading-log
  conferences with the adult.

### Weeks 6–9 — U02: Founding rhetoric: speeches and primary texts

Rhetoric as craft: how the founding generation argued. Anchor texts (public
domain): the Declaration of Independence (1776), Federalist No. 10 (1787),
the Bill of Rights (1791), Lincoln's Second Inaugural Address (1865).

- **Week 6:** The rhetoric toolkit: claims, evidence, reasoning; ethos,
  pathos, logos; rhetorical devices. Close reading: the Declaration's
  structure and word choices.
- **Week 7:** Madison's argument in Federalist No. 10: delineating premises
  and reasoning; how "faction" is defined and refined across the essay.
- **Week 8:** Presidential rhetoric: Lincoln's Second Inaugural — themes,
  purposes, and rhetorical features; constitutional principles inside
  argument.
- **Week 9:** The Bill of Rights as rhetoric; review; unit assessment — a
  rhetorical analysis essay on one founding text.

### Weeks 10–13 — U03: Literary movements, diverse voices, and interpretation

From movements to the readers who reshaped them. Anchor texts (public
domain): Poe, Hawthorne ("Young Goodman Brown"), Gilman's "The Yellow
Wallpaper," Chopin's *The Awakening* (excerpts), early Hughes poems; one
later work via an adult-selected library edition where essential.

- **Week 10:** Mapping movements: Romanticism, Realism, Naturalism,
  Modernism, the Harlem Renaissance — what each believed literature should
  do, with one representative passage each.
- **Week 11:** Diverse voices and point of view: whose perspective centers
  the story; satire, irony, and understatement as point-of-view tools.
- **Week 12:** Interpretation across versions: comparing a story or play in
  two forms (print and a recorded or live production); how each version
  interprets the source.
- **Week 13:** Interpretation presentations; review; formative quiz.

### Week 14 — Midyear review (flexible)

Revisit U01–U03 objectives: evidence citation, theme analysis, rhetorical
delineation. Re-teach insecure skills in use; the adult adjusts U04–U08
pacing from what this week reveals.

### Week 15 — Catch-up (flexible)

Completes unfinished reading and revisions; extension: an additional primary
source or critical essay for learners ahead of pace. No new objectives.

### Weeks 16–19 — U04: Language, rhetoric, syntax, and stylistic analysis

Language as the year's precision instrument. Sentence banks and passages are
authored per unit; the adult-side grammar guides supply the terminology.

- **Week 16:** Syntax as style: periodic and loose sentences, parallelism,
  repetition, and fragment effects; varying syntax deliberately for effect.
- **Week 17:** Word choice and tone: connotation, figurative language in
  context, words with multiple meanings; how diction builds or undercuts an
  argument.
- **Week 18:** Contested usage: usage as convention that changes over time;
  resolving usage questions with references; editing one's own prose for
  style-manual conformity.
- **Week 19:** Stylistic analysis essay (a passage from U01–U03 reread
  through U04's lens); review; formative quiz.

### Weeks 20–23 — U05: Literary criticism and analytical writing

Criticism as a set of lenses, then as the learner's own essay.

- **Week 20:** Schools of criticism at a working level: formalist,
  historical/biographical, and reader-response approaches; what each lens
  reveals and hides.
- **Week 21:** Applying a lens: re-reading a U01–U03 anchor text through one
  critical approach; building an analytical thesis with textual evidence.
- **Week 22:** Drafting and revising the analytical essay: planning,
  revision, and editing focused on what matters most for the purpose and
  audience.
- **Week 23:** Peer-style review with the adult, revision, and unit
  assessment — the finished analytical essay with reflection on the lens.

### Weeks 24–27 — U06: Argument, evidence, synthesis, and public reasoning

From literary argument to public argument: the citizen-reader.

- **Week 24:** Claims, evidence, and reasoning in public texts; spotting
  valid versus fallacious reasoning; evaluating evidence sufficiency.
- **Week 25:** Counterargument and concession: developing opposing claims
  fairly; synthesizing multiple sources on one question.
- **Week 26:** Public reasoning in practice: drafting an op-ed or speech;
  integrating sources across media formats; strategic use of media in the
  presentation.
- **Week 27:** Presentations with audience questioning; review; formative
  quiz.

### Weeks 28–31 — U07: Independent research, documentation, and ethical source use

The year's sustained project: a self-generated question, answered honestly.

- **Week 28:** Research questions: narrowing and broadening inquiry;
  advanced search techniques; building a working bibliography from
  authoritative print and digital sources.
- **Week 29:** Evaluating sources: strengths and limitations for the task,
  purpose, and audience; note-taking that separates source words from the
  learner's words; what counts as plagiarism and how to avoid it.
- **Week 30:** Synthesis and drafting: integrating sources selectively to
  maintain flow; standard citation format (MLA) for in-text citations and
  the works-cited list.
- **Week 31:** Revision against the rubric, works-cited audit, and research
  presentation; unit assessment — the finished research paper.

### Weeks 32–35 — U08: Poetry, drama, seminar, and capstone portfolio

Performance texts and the year's closing seminar; the portfolio gathers the
year's best work with reflection.

- **Week 32:** Poetry: form, sound, and image — Poe, Dickinson, Whitman,
  Hughes; memorizing and reciting one short poem with attention to sound.
- **Week 33:** Drama: reading a play as literature and as performance;
  comparing interpretations across versions, including one Shakespeare play
  and one play by an American dramatist (adult-selected editions).
- **Week 34:** Seminar leadership: the learner plans and leads two
  evidence-based discussions synthesizing the year's texts; portfolio
  assembly begins.
- **Week 35:** Portfolio presentations; reflective essay on growth across
  the 12 objectives; unit celebration.

### Week 36 — Final review (flexible; R00 delivers the full package)

Cumulative review of the year's objectives and the cumulative assessment with
keys — authored in the R00 section, which also delivers the diagnostic
instruments for week 1 and the midyear review packet for week 14.

## 5. Standards crosswalk (source-backed)

Codes and descriptions verified 2026-10-07 against the official Common Core
State Standards pages for grades 11–12 at
<https://www.thecorestandards.org/ELA-Literacy/> (Reading: Literature,
Reading: Informational Text, Writing, Speaking & Listening, Language).
Descriptions below are paraphrases; exact wording lives on the official
pages. This crosswalk is a planning reference, not a claim of state
adoption, accreditation, or complete alignment — no state or district
requirements were specified.

| Objective(s) | CCSS ELA 11–12 codes | What the band expects (paraphrased) |
|---|---|---|
| 1 | RL.11-12.1, RL.11-12.10 | Cite strong, thorough textual evidence for explicit analysis and inferences, including where the text leaves matters uncertain; by end of grade 11, read literature in the 11–CCR complexity band proficiently, with scaffolding as needed at the high end |
| 2 | RL.11-12.2, RI.11-12.2 | Determine two or more themes/central ideas; analyze their development and interaction into a complex account; write an objective summary |
| 3 | RL.11-12.3, RL.11-12.5, RL.11-12.6 | Analyze author choices in developing story/drama elements (setting, plot order, character introduction); analyze structural choices and their effect on meaning and aesthetic impact; analyze point of view requiring separation of stated from meant (satire, sarcasm, irony, understatement) |
| 1, 3 | RL.11-12.9 | Demonstrate knowledge of 18th-, 19th-, and early-20th-century foundational American works, including how two or more texts from the same period treat similar themes or topics |
| 1, 3 | RL.11-12.7 | Analyze multiple interpretations of a story, drama, or poem (e.g., productions), evaluating how each interprets the source — including at least one Shakespeare play and one play by an American dramatist |
| 4 | RL.11-12.4, L.11-12.3.a, L.11-12.5.a | Determine word/phrase meaning including figurative and connotative senses; analyze word-choice impact on meaning and tone; vary syntax for effect; interpret figures of speech (e.g., hyperbole, paradox) in context and analyze their role |
| 5 | RI.11-12.8, RI.11-12.9 | Delineate and evaluate reasoning in seminal U.S. texts, including constitutional principles and legal reasoning and the premises/purposes/arguments of public advocacy (e.g., *The Federalist*, presidential addresses); analyze 17th–19th-century foundational U.S. documents (Declaration, Preamble, Bill of Rights, Lincoln's Second Inaugural) for themes, purposes, and rhetorical features |
| 6 | RI.11-12.5, RI.11-12.6 | Analyze and evaluate the effectiveness of an author's exposition/argument structure — whether it makes points clear, convincing, engaging; determine point of view/purpose in highly rhetorical texts, analyzing how style and content create power, persuasiveness, or beauty |
| 7 | RI.11-12.7, SL.11-12.2, SL.11-12.3 | Integrate and evaluate multiple sources across media formats to address a question or solve a problem; evaluate source credibility and discrepancies; evaluate a speaker's point of view, reasoning, evidence, and rhetoric |
| 8 | W.11-12.1 (a–e) | Write arguments with precise claims distinguished from counterclaims, fair development of both with the most relevant evidence, cohesion through varied syntax, formal style and objective tone, and a conclusion that follows from the argument |
| 9 | W.11-12.2 (a–f) | Write informative/explanatory texts examining complex ideas clearly and accurately through effective selection, organization, and analysis, with formatting/graphics where useful, precise domain-specific vocabulary, and a supported conclusion |
| 10 | W.11-12.7, W.11-12.8 | Conduct short and sustained research to answer a question (including self-generated), narrowing/broadening inquiry and synthesizing multiple sources; gather from multiple authoritative sources with advanced searches, assess each source's strengths and limitations, integrate selectively avoiding plagiarism and overreliance, and follow a standard citation format |
| 11 | W.11-12.9 (a–b), W.11-12.10 | Draw evidence from literary and informational texts to support analysis, reflection, and research (applying the 11–12 reading standards); write routinely over extended and short time frames for a range of tasks, purposes, and audiences |
| 12 | SL.11-12.1 (a–d), SL.11-12.4, SL.11-12.5, SL.11-12.6, L.11-12.1 (a–b), L.11-12.2, L.11-12.4 (a–d), L.11-12.6 | Initiate and participate in collaborative discussions prepared and evidence-based, promoting civil discussion, probing reasoning, and synthesizing perspectives; present findings with a clear perspective and strategic media, adapting to formal English; command standard English grammar and usage (including contested usage), capitalization/punctuation/spelling, vocabulary strategies, and college-ready academic vocabulary |
| 1–12 (planning) | W.11-12.4, W.11-12.5, W.11-12.6, RI.11-12.1–4, RI.11-12.10, SL.11-12.1 | Produce clear, coherent writing appropriate to task/purpose/audience; strengthen writing through planning, revising, editing, and rewriting; use technology to produce and update writing in response to feedback; cite textual evidence and analyze idea development in informational text; read literary nonfiction in the 11–CCR band |

## 6. Resources, materials, accessibility, and safety

### Internal resource reuse

- `resources/language_arts_literary_terms.md` — teacher-side vocabulary bank
  for U01, U03, U08.
- `resources/language_arts_parts_of_speech.md` and
  `resources/language_arts_sentence_structure.md` — adult-side references for
  U04; never assigned as grade-11 instruction.
- `resources/language_arts_great_books_and_stories.md` — allusion background
  and public-domain text discovery; all external links re-verified at unit
  build.
- `resources/semester-resource-library.md` — inspected per unit; candidates
  opened and assessed before recommendation.
- `teachers/ai-assistants/resource_finder.md` — drives each unit's Resource
  Pack.
- `assignments/language-arts/` seeds — reference only; unit builds write
  their own study materials.

### New reference needs (verified at each unit build)

- **Purdue OWL** — research, rhetoric, and MLA citation guidance
  (<https://owl.purdue.edu/>); OWL's site was restructured in recent years,
  so each unit re-verifies the exact pages it recommends.
- **Folger Shakespeare Library** — Shakespeare texts and performance
  resources (<https://www.folger.edu/explore/shakespeares-works/>); edition
  act/scene/line numbering must match the adult-selected edition.
- **Library of Congress** and **Founders Online**
  (<https://www.loc.gov/>, <https://founders.archives.gov/>) — authoritative
  founding-document texts and primary-source sets for U02.
- **Project Gutenberg** (<https://www.gutenberg.org/>), **LibriVox**
  (<https://librivox.org/>), **CommonLit** (<https://www.commonlit.org/>) —
  free public-domain texts and audiobooks; check each title's page before
  recommending.
- **Reading Rockets** (<https://www.readingrockets.org/>) and
  **ReadWriteThink** (<https://www.readwritethink.org/>) — strategy models;
  verify age fit for grade 11 before use.

Core learning never depends on a paid or account-gated source: every unit's
Resource Pack includes free, no-account alternatives for its core objectives.

### Materials

Public-library access (or printed public-domain texts), a notebook or journal,
and dictionary/thesaurus access (print or free online). No special materials,
fees, or equipment. Audio playback for historical speech recordings where the
adult chooses them.

### Accessibility supports

Audiobook alternatives for long texts; chunked reading with guided
annotation; speech-to-text for drafting; graphic organizers for argument,
analysis, and research; extended time; written discussion-board alternatives
to live seminars; large-print or text-to-speech rendering of public-domain
texts. Extensions: additional primary sources, comparative criticism, and
publication-style revision for learners ahead of pace.

### Safety

The adult previews every text, video, and website before the learner sees it.
All internet research is supervised; the learner's name, image, school, and
contact details never appear in research products, correspondence, or
anything shared outside the household. Seminar recordings, if made, stay in
private storage. Portfolio and civic-facing writing (U06) are reviewed by the
adult and completed privately before any external sharing.

## 7. Index truthfulness and future paths

This A00 delivers: the track README, this scope-and-sequence, the grade-11
hub page, the curriculum-index Grade 11 entry, and manifest entries for the
three new files — all describing planned (not written) units. The eight unit
sections (U01–U08) each require the full unit-requirements package: 4–6
written lessons, worked examples, practice, an investigation or project,
formative quiz, culminating assessment, separate teacher guides and answer
keys, a verified Resource Pack, and at least one generated teaching image
with alt text, caption, and provenance. R00 then delivers the diagnostic,
midyear/final review packets, cumulative assessment and keys, and the
track-wide coherence, accessibility, source, and image-accuracy audit. Unit
builds must re-verify every external link and every standard code they cite,
and must never reproduce copyrighted texts — only original passages,
public-domain works, brief attributed quotations, or adult-selected licensed
editions used privately.
