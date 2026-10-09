# Grade 9 Language Arts — Scope and Sequence

Audit section A00 of [issue #44](https://github.com/murderszn/open-tutor/issues/44).
Status: **validated draft** (this document, the track README, and the grade-9
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-06 against `main` (commit `2c43d24`).

| Item | Location | Decision |
|---|---|---|
| Grade-9 hub page | `curriculum/grade-9/README.md` | **New** — created by this run: math, science, and language arts tracks listed as audit drafts; social studies planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-9/language-arts/README.md` | **New** — written by this run as a real subject index: course description, 12 measurable objectives, verified standards summary, planned-unit list, adult guidance |
| Scope and sequence | `curriculum/grade-9/language-arts/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-9/language-arts/` before this run | track folder | **Confirmed empty** — `git ls-tree -r origin/main -- curriculum/grade-9/` returns no files; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, diagnostics, resource packs, or teaching images exist to keep, revise, or retire |
| Grade-8 language arts audit (draft PR #109, unmerged) | PR branch | **Prerequisite reference only** — its 14 end-of-year objectives define the entry skills below; no grade-8 lessons copied upward; no learner-facing cross-grade links |
| Same-grade math (#42, draft PR #106) and science (#43, draft PR #107) | PR branches | **Session-model reference only** — ~50-minute sessions, five per week, with same-day adult-reviewed written practice; no math/science content reused |
| Same-grade social studies (#45) | unaudited | **No reuse** — not yet delivered; U03/U07 research and media-literacy skills are expected to coordinate with, not copy from, its future source-analysis work |
| Shared `assignments/language-arts/` relevance studies (Scarlet Letter, Hamlet overview, Romeo & Juliet overview, Harlem Renaissance poetry, flood myths, reflection/video templates) | labeled "8th Grade", high-school band | **Reference only, do not adopt** — these are one-page enrichment seeds whose lesson builds are owned by the grade-8 track's audit; grade-9 unit builds will select their own anchor texts and write their own study materials. The `video-review-template.md` and `relevance-reflection-template.md` may inform U05/U08 media-presentation task design after adult review, but they are not assigned as-is |
| `resources/language_arts_parts_of_speech.md` | eight parts of speech guide | **Adult-side reference for U04** — accurate grammar vocabulary behind the grade-9 syntax work; never assigned as grade-9 instruction (its tone and examples skew younger) |
| `resources/language_arts_sentence_structure.md` | sentence-structure guide (subject/predicate, phrases, clauses, types) | **Adult-side reference for U04** — checked 2026-10-06; accurate at its band, but grade-9 adds participial, prepositional, and absolute phrases plus noun, relative, and adverbial clauses (L.9-10.1.b), which unit lessons must teach explicitly |
| `resources/language_arts_literary_terms.md` | literary terms and devices guide | **Teacher-side vocabulary bank for U01/U02/U08** — simile, metaphor, personification, allusion, theme, point of view, etc. are accurate; grade-9 lessons build on them toward cumulative word-choice impact (RL.9-10.4) and structural effects (RL.9-10.5), which the guide does not reach |
| `resources/language_arts_great_books_and_stories.md` | classics/allusion guide with Gutenberg, LibriVox, CommonLit, SparkNotes links | **Reuse with verification** — U02/U08 allusion background and source-text discovery; every external link re-verified at unit build; the guide's summaries are background for the adult, never learner text |
| `resources/semester-resource-library.md` | shared resource shelf | **Inspect during unit builds** — external starting points only; each candidate opened and assessed before recommendation |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack in the repo's required format |
| Purdue OWL / Folger Shakespeare Library links | cited elsewhere in repo | **Verify at build** — OWL restructured URLs in recent years; Folger edition act/scene/line numbering must match whichever edition the adult selects |
| Repository datasets (CSV/JSON) | none language-related | **No reuse** — units use original word sets and sentence banks authored per unit |

No existing grade-9 language arts material was inaccurate or inappropriate —
there is none. No answer-key gaps, dated facts, or broken links exist in the
track because nothing has been written yet. The gap is total for core
instruction: no taught lessons, no assessments, no keys, no diagnostics, no
resource packs, and no teaching images.

## 2. Prerequisites

Learners typically enter grade-9 language arts able to (the grade-8 track's
stated end-of-year objectives, currently in unmerged draft PR #109; the
diagnostic weeks verify these and the track re-teaches insecure skills in use):

- Cite the strongest textual evidence for explicit and inferential claims
  about literature and informational text (RL.8.1, RI.8.1)
- Determine a theme or central idea, analyze its development, and write an
  objective summary (RL.8.2, RI.8.2)
- Analyze how dialogue or incidents propel action, reveal character, or
  provoke decisions (RL.8.3)
- Analyze word choice — figurative and connotative meanings — for effect on
  meaning and tone; explain allusions (RL.8.4, L.8.5)
- Compare text structures and points of view, including dramatic irony, for
  effects such as suspense or humor (RL.8.5, RL.8.6)
- Analyze how a filmed or staged adaptation stays faithful to or departs from
  a text (RL.8.7)
- Delineate and evaluate an argument's claims: sound reasoning, relevant and
  sufficient evidence, recognition of irrelevant evidence (RI.8.8)
- Write arguments with distinguished claims and counterclaims, logical
  reasoning, cohesive transitions, and a supported conclusion (W.8.1)
- Write narratives with dialogue, pacing, description, reflection, and
  sensory language in a well-structured sequence with a reflective conclusion
  (W.8.3)
- Conduct short research: assess source credibility, quote and paraphrase
  without plagiarism, follow a standard citation format (W.8.7, W.8.8)
- Demonstrate grade-8 conventions: verbals, active/passive voice,
  conditional/subjunctive mood, semicolons, colons, conjunctive adverbs
  (L.8.1, L.8.2, L.8.3)
- Engage in evidence-based collaborative discussion; present claims with
  multimedia support in formal English (SL.8.1, SL.8.4, SL.8.5, SL.8.6)

The audit never assumes fluency with: **strong-and-thorough evidence**
selection (the grade-9 step up from "strongest" evidence); **detailed theme
development** across a full-length text with objective summary; **complex
characters** with multiple or conflicting motivations; **cumulative**
word-choice impact on tone; author's **structural** choices (parallel plots,
pacing, flashbacks) and their effects; **multi-medium** comparison and
**source transformation** analysis; **seminal U.S. documents**; full
**counterclaim fairness** in argument writing; **sustained** multi-source
research with advanced search techniques; **style-manual conformity**
(MLA/Turabian); or grade 9-10 **phrase/clause variety** (participial,
prepositional, absolute phrases; noun, relative, adverbial clauses) — those
are this track's new content. Spelling and handwriting/keyboarding fluency are
supported, not assumed, across the writing units.

## 3. Track objectives

Measurable, adult-assessed by end of year (12 objectives; numbered in the
track README):

1. Cite strong and thorough textual evidence to support analysis of what a
   literary or informational text says explicitly and of inferences drawn
   from it (RL.9-10.1, RI.9-10.1).
2. Determine a theme or central idea and analyze in detail its development
   over the course of a text, including how it emerges and is shaped and
   refined by specific details; write an objective summary (RL.9-10.2,
   RI.9-10.2).
3. Analyze how complex characters develop, interact with other characters,
   and advance the plot or develop the theme; analyze how an author unfolds
   an analysis or series of ideas or events (RL.9-10.3, RI.9-10.3).
4. Determine the meaning of words and phrases as used in a text, including
   figurative, connotative, and technical meanings, and analyze the
   cumulative impact of specific word choices on meaning and tone
   (RL.9-10.4, RI.9-10.4); interpret figures of speech in context
   (L.9-10.5.a).
5. Analyze how an author's choices concerning text structure, event order,
   and time manipulation (pacing, flashbacks) create effects such as mystery,
   tension, or surprise; analyze how claims are developed and refined by
   particular sentences, paragraphs, or larger portions of a text
   (RL.9-10.5, RI.9-10.5).
6. Analyze the representation of a subject or key scene in two different
   artistic mediums; analyze how an author draws on and transforms source
   material; analyze seminal U.S. documents of historical and literary
   significance (RL.9-10.7, RL.9-10.9, RI.9-10.7, RI.9-10.9).
7. Delineate and evaluate the argument and specific claims in a text,
   assessing whether reasoning is valid and evidence is relevant and
   sufficient, and identifying false statements and fallacious reasoning
   (RI.9-10.8).
8. Write arguments to support claims in an analysis of substantive topics or
   texts, using valid reasoning and relevant and sufficient evidence:
   precise claims distinguished from counterclaims, fair development of both,
   cohesive links, formal style and objective tone, and a supported
   conclusion (W.9-10.1).
9. Write narratives to develop real or imagined experiences or events using
   effective technique, well-chosen details, and well-structured event
   sequences, with precise sensory language and a reflective conclusion
   (W.9-10.3).
10. Conduct short and sustained research projects: gather relevant information
    from multiple authoritative print and digital sources using advanced
    searches, assess each source's usefulness, synthesize multiple sources,
    integrate information selectively without plagiarism, and follow a
    standard citation format (W.9-10.7, W.9-10.8, W.9-10.9).
11. Demonstrate command of grade 9-10 conventions and knowledge of language:
    varied phrases and clauses (participial, prepositional, absolute; noun,
    relative, adverbial) for specific meaning and variety; semicolons with
    conjunctive adverbs; work conformed to a style manual (MLA); and accurate
    general academic and domain-specific vocabulary (L.9-10.1.b, L.9-10.2.a,
    L.9-10.3.a, L.9-10.4, L.9-10.6).
12. Initiate and participate effectively in collaborative discussions using
    textual evidence, propel and challenge ideas, respond thoughtfully to
    diverse perspectives, and present findings clearly and logically with
    strategic digital media in formal English (SL.9-10.1, SL.9-10.4,
    SL.9-10.5, SL.9-10.6); evaluate a speaker's point of view, reasoning, and
    use of evidence (SL.9-10.3).

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for English Language Arts,
grades 9-10 band**, as published at
[thecorestandards.org/ELA-Literacy](https://www.thecorestandards.org/ELA-Literacy/).
Each strand page (RL, RI, W, SL, L for grades 9-10) was opened and its codes
and descriptions checked on 2026-10-06. The cluster-level mapping below
summarizes, in the audit's own words, which parts of the track carry each
standard; it makes **no claim of state adoption, accreditation, alignment
certification, or graduation-requirement coverage**.

- **Reading: Literature (RL.9-10).** Key Ideas and Details RL.9-10.1–3 —
  carried by U01 (theme-and-evidence analysis) and reinforced in every
  reading unit. Craft and Structure RL.9-10.4–6 — U02 (word-choice/tone
  analysis, narrative structure, author's structural choices) and U08 (poetry
  and drama; world-literature point of view, RL.9-10.6). Integration of
  Knowledge and Ideas RL.9-10.7, RL.9-10.9 — U03 and U08 (multi-medium
  comparison; source-material transformation). Note: the standard omits
  RL.9-10.8 at this band; the audit does not invent it. Range of Reading
  RL.9-10.10 — the year plan; note its two-tier expectation (grade 9: read
  in the 9-10 complexity band proficiently with scaffolding at the high end;
  grade 10: at the high end independently), which sets this track's
  text-selection ceiling honestly.
- **Reading: Informational Text (RI.9-10).** Key Ideas and Details
  RI.9-10.1–3 — U01 and U03 (evidence, central idea, author's unfolding of
  ideas/events). Craft and Structure RI.9-10.4–6 — U03 (technical word
  choice, claim development through text portions, author's purpose and
  rhetoric). Integration of Knowledge and Ideas RI.9-10.7–9 — U03 (accounts
  in different mediums; argument evaluation including fallacious reasoning;
  seminal U.S. documents). Range of Reading RI.9-10.10 — year plan, same
  two-tier note as RL.9-10.10.
- **Writing (W.9-10).** Text Types and Purposes W.9-10.1–3 — U06 (arguments
  with fair counterclaims, cohesion, formal tone), U07/research and U03
  informative writing (W.9-10.2, including formatting/graphics/multimedia
  selection), U05 (narratives with technique, dialogue, pacing, sensory
  detail). Production and Distribution W.9-10.4–6 — every writing unit
  (revision and editing routines W.9-10.5; optional digital publishing
  W.9-10.6). Research W.9-10.7–9 — U07 (short and sustained inquiry,
  authoritative sources, advanced searches, plagiarism avoidance, standard
  citation; evidence drawn from literary and informational texts). Range of
  Writing W.9-10.10 — the weekly independent writing practice across all 36
  weeks.
- **Speaking & Listening (SL.9-10).** Comprehension and Collaboration
  SL.9-10.1–3 — weekly discussion routines (evidence-based seminars,
  Socratic-style exchanges in U01/U02/U08; media evaluation in U03).
  Presentation of Knowledge and Ideas SL.9-10.4–6 — U05/U08 final
  presentations with strategic digital media in formal English.
- **Language (L.9-10).** Conventions L.9-10.1.b (varied phrase/clause types
  for meaning and variety) and L.9-10.2.a (semicolons with conjunctive
  adverbs) — U04, reinforced in every unit's editing passes. Knowledge of
  Language L.9-10.3.a (conform work to a style manual — MLA for this track)
  — U06/U07. Vocabulary Acquisition and Use L.9-10.4.a–d (context clues,
  word-change patterns, reference materials, verification) and L.9-10.5.a
  (figures of speech such as euphemism and oxymoron) — U04 with
  text-embedded practice in every reading unit; L.9-10.6 (academic
  vocabulary) — the year's cumulative word bank.

The proposed high-school course order ("literary reading and composition" for
grade 9, from the expansion plan's pathway table) is a starting choice, not a
universal requirement; this audit's unit order follows the issue's
prerequisite-ordered unit list (reading foundations → writing application →
research synthesis → comparative portfolio).

## 5. Thirty-six-week sequence

Eight four-week units plus four flexible weeks (diagnostic placement, midyear
review, final review). Sessions are about 50 minutes, five per week (25
sessions per four-week unit). Each week below lists concrete goals plus the
mix of lessons, reading, discussion, writing, and review that fills it —
unit lesson plans will specify sessions 1–25 individually.

**Weeks 1–2 — Diagnostic placement (flexible).**
- Goal: verify every entry prerequisite before U01 assumes it.
- Reading check: one grade-8-level literary passage and one informational
  passage, each followed by evidence-based questions (RL.8.1/RI.8.1 level)
  and an objective summary.
- Writing check: one opinion paragraph with at least one reason and one
  evidence sentence; one narrative paragraph with dialogue and sensory
  detail.
- Conventions check: sentence combining, semicolons, active/passive voice
  identification — all from the grade-8 list.
- Discussion check: one structured seminar on a short text, adult-scored for
  evidence use and turn-taking.
- Outcome: the adult records which skills are secure, which get re-taught in
  use during U01, and which need a warm-up routine all year.

**U01 — Literary close reading: theme and evidence (weeks 3–6).** Objectives
1–3. Anchor texts: original or public-domain short stories and novel
excerpts selected at unit build (grade 9-10 complexity band, scaffolded).

- **Week 3:** reading with a pen — annotation routines (mark, note, question);
  distinguishing explicit statements from inferences; citing evidence
  precisely (author, work, location). Practice: 2 annotation drills, 1
  inference-sort task; independent reading log begins (daily 20–30 min,
  adult-checked weekly).
- **Week 4:** theme as an idea the text develops — tracking a candidate
  theme across chapters/scenes; how specific details shape and refine it;
  objective summary vs. retelling. Practice: theme-tracker worksheet, 2
  summary rewrites with the adult scoring objectivity.
- **Week 5:** "strong and thorough" evidence — selecting the best passage
  among several candidates, explaining *why* it supports the claim better;
  introducing evidence smoothly in a sentence. Practice: evidence-ranking
  task, 3 embedded-citation paragraphs.
- **Week 6:** culminating close-reading essay (2–3 paragraphs, claim +
  theme development + evidence), plus a formative quiz on RL.9-10.1–3 and a
  review session on the week's misconceptions before U02.

**U02 — Narrative structure, characterization, and author choices (weeks
7–10).** Objectives 3–5, with RL.9-10.6. Builds on U01's evidence skills.

- **Week 7:** narrative structure — exposition, rising action, climax,
  resolution; in medias res and nonlinear openings; how event order creates
  mystery, tension, or surprise (RL.9-10.5). Practice: plot-mapping two
  stories; rewriting one scene in a different order and predicting the
  effect.
- **Week 8:** complex characters — multiple or conflicting motivations,
  character arcs, how characters reveal each other through interaction and
  dialogue; static vs. dynamic characters. Practice: character-motivation
  chart, 2 conflict analyses.
- **Week 9:** author's choices — point of view (first/third, limited/
  omniscient, unreliable), narrative distance, pacing and flashbacks;
  cultural point of view in one work of world literature (RL.9-10.6).
  Practice: POV-rewrite exercise (same scene, two narrators), pacing
  analysis of one passage.
- **Week 10:** word choice and tone — figurative, connotative, and technical
  meanings; cumulative impact of diction on meaning and tone (RL.9-10.4);
  culminating analysis essay comparing two author choices across texts;
  formative quiz; review session.

**U03 — Informational rhetoric, argument, and media literacy (weeks 11–14).**
Objectives 6–7, with RI.9-10.1–6 and SL.9-10.2–3. Anchor texts: editorials,
speeches, essays, and one seminal U.S. document excerpt (public domain or
adult-selected); multimedia accounts of one subject for RI.9-10.7.

- **Week 11:** central idea and development — how an author unfolds an
  analysis or series of ideas/events; tracing claims through sentences,
  paragraphs, and sections (RI.9-10.2, RI.9-10.3, RI.9-10.5). Practice: 2
  claim-tracing maps; objective summaries of argumentative prose.
- **Week 12:** rhetoric and purpose — author's point of view and purpose,
  rhetorical strategies (appeals, repetition, framing, diction); how word
  choice differs across genres (RI.9-10.4, RI.9-10.6). Practice: rhetoric
  inventory of one speech; genre-contrast paragraph.
- **Week 13:** argument evaluation — delineating claims, testing reasoning
  validity, checking evidence relevance and sufficiency, spotting false
  statements and fallacious reasoning (RI.9-10.8); seminal U.S. document
  study — theme across a historic text and a modern response (RI.9-10.9).
  Practice: fallacy-identification set; argument-evaluation chart.
- **Week 14:** media literacy — comparing accounts of one subject in print,
  video, and data visualizations (RI.9-10.7); evaluating a speaker's
  reasoning and use of evidence (SL.9-10.3); culminating evaluation essay;
  formative quiz; review session.

**U04 — Grammar precision, syntax, vocabulary, and style (weeks 15–18).**
Objectives 4, 11. Explicitly taught here, then enforced in every later unit's
editing passes.

- **Week 15:** sentence architecture — independent and dependent clauses;
  noun, relative, and adverbial clauses; simple, compound, complex, and
  compound-complex sentences; fragments and run-ons diagnosed in the
  learner's own writing (L.9-10.1.b foundation).
- **Week 16:** phrase variety — participial, prepositional, and absolute
  phrases; noun, verb, adjectival, and adverbial phrases; using phrase types
  to convey specific meanings and add variety (L.9-10.1.b); semicolons
  joining closely related independent clauses, with and without conjunctive
  adverbs (L.9-10.2.a). Practice: 3 sentence-combining sets; 1
  phrase-expansion rewrite of a flat paragraph.
- **Week 17:** vocabulary systems — context clues, word-change patterns
  (analyze/analysis/analytical), reference materials, and verification
  (L.9-10.4.a–d); figures of speech in context, including euphemism and
  oxymoron (L.9-10.5.a); academic and domain-specific vocabulary acquisition
  routines (L.9-10.6). Practice: weekly word-bank of 10–12 words with
  in-text application.
- **Week 18:** style and editing — how language functions in different
  contexts; choosing syntax for meaning and style; a full editing pass over a
  U01–U03 piece applying the unit's tools; formative quiz (sentence analysis
  + vocabulary application); review session.

**Week 19 — Midyear review (flexible).**
- Revisit the U01–U04 culminating pieces: one revision task per unit applying
  the skills learned since.
- Timed evidence-based paragraph (45 min) scored against objectives 1–5;
  conventions check on U04 targets.
- Adult and learner conference: portfolio so far, goals for the writing
  half of the year.

**U05 — Narrative and creative writing workshop (weeks 20–23).** Objective 9,
with W.9-10.4–6 and SL.9-10.4–6.

- **Week 20:** story architecture — problem/situation, character want vs.
  need, event sequences that build on one another; establishing point of
  view and narrator. Practice: 2 story-seed sketches; POV decision memo.
- **Week 21:** craft techniques — dialogue that reveals character, pacing
  (scene vs. summary), description, reflection, multiple plot lines;
  precise sensory language (W.9-10.3.b, W.9-10.3.d). Practice: 3 technique
  drills; peer-style adult feedback round (the adult models response
  language).
- **Week 22:** drafting and revision — full first draft of a short story or
  narrative sequence (1,200–2,000 words); revision pass for structure, then
  for language, then for conventions (W.9-10.5); optional digital
  publication (W.9-10.6).
- **Week 23:** reflective conclusion (W.9-10.3.e); author reading —
  presentation of an excerpt with strategic delivery choices (SL.9-10.4,
  SL.9-10.6); rubric-scored final story; review session on narrative vs.
  argument craft.

**U06 — Argument essays: source integration and revision (weeks 24–27).**
Objective 8, with W.9-10.1, W.9-10.5, W.9-10.9, L.9-10.3.a. Builds directly
on U03's argument evaluation and U04's syntax work.

- **Week 24:** claim design — precise claims distinguished from opposing
  claims; qualifying language; organization that maps
  claim–counterclaim–reasons–evidence relationships (W.9-10.1.a).
  Practice: 2 claim outlines; counterclaim anticipation chart.
- **Week 25:** evidence and fairness — developing claims and counterclaims
  fairly, supplying evidence for each while noting strengths and
  limitations; integrating quotations and paraphrases from literary and
  informational texts read earlier in the year (W.9-10.1.b, W.9-10.9).
  Practice: evidence-pairing task; 1 body-paragraph draft with integrated
  source material.
- **Week 26:** cohesion, tone, and citation — linking words, phrases, and
  clauses between major sections (W.9-10.1.c); formal style and objective
  tone; conforming the essay to MLA guidelines (L.9-10.3.a); full draft of
  the argument essay (1,000–1,500 words).
- **Week 27:** revision cycle — structural revision (does the argument hold?),
  evidence revision (is every claim supported?), language revision
  (W.9-10.5); supported conclusion (W.9-10.1.e); rubric-scored final essay;
  formative quiz on argument structure; review session.

**U07 — Research inquiry: credibility, citation, and synthesis (weeks
28–31).** Objective 10, with W.9-10.2, W.9-10.7–9. Sustained project with
weekly deliverables.

- **Week 28:** question and search — generating a researchable question;
  narrowing/broadening inquiry; advanced search techniques; identifying
  authoritative print and digital sources (W.9-10.7, W.9-10.8). Deliverable:
  approved question + working bibliography of 6–8 candidate sources.
- **Week 29:** credibility judgment — assessing each source's usefulness and
  reliability for the question; corroboration across sources; distinguishing
  reporting, analysis, and opinion. Deliverable: source-evaluation log.
- **Week 30:** synthesis — finding patterns, tensions, and gaps across
  sources; organizing complex ideas with clear connections and distinctions;
  selecting formatting, graphics, or multimedia where they aid comprehension
  (W.9-10.2.a); integrating information selectively to maintain flow.
  Deliverable: synthesis outline + drafted sections.
- **Week 31:** citation and polish — quoting, paraphrasing, and summarizing
  without plagiarism; standard citation format throughout (W.9-10.8);
  informative/explanatory final paper (1,500–2,000 words) with precise
  domain vocabulary (W.9-10.2.d) and formal tone (W.9-10.2.e); research
  process reflection; review session.

**U08 — Poetry, drama seminar, and comparative portfolio (weeks 32–35).**
Objectives 4–6, 12. Culminating comparative work; seminar format with the
adult as discussion partner.

- **Week 32:** poetry — form and sound (line, stanza, meter, rhyme,
  enjambment, free verse); speaker and persona; figurative language density;
  how form shapes meaning. Practice: 3 poem analyses; 1 original poem
  applying a studied form (optional creative extension).
- **Week 33:** drama — reading plays as performance texts (dialogue, stage
  directions, soliloquy); one public-domain play or excerpt studied in full
  (Folger or another adult-approved edition; line numbers must match the
  edition used); how staging choices interpret the text.
- **Week 34:** comparative seminar — one subject or key scene across two
  artistic mediums (poem + painting, play + film scene) analyzing what each
  emphasizes or leaves out (RL.9-10.7); one author drawing on and
  transforming source material (RL.9-10.9); seminal-document echoes.
  Deliverable: comparative essay (800–1,200 words).
- **Week 35:** portfolio assembly — the learner selects, revises, and
  introduces 4–6 pieces from the year with a reflective cover letter
  tracing growth against the 12 objectives; seminar presentation with
  digital media support (SL.9-10.5); adult scores the portfolio against the
  track objectives.

**Week 36 — Final review and portfolio presentation (flexible).**
- Timed synthesis task (60 min): read one new short text, write an
  evidence-based analysis — scored against objectives 1–5 as the year's
  summative reading check.
- Portfolio presentation to the adult (SL.9-10.4, SL.9-10.6); goal-setting
  conversation for grade 10 (world literature and composition).
- Adult records final objective-by-objective status; unresolved gaps become
  summer/grade-10 warm-ups, not failures.

## 6. Resources, reuse, and future-unit paths

- **Internal reuse:** the four resource guides are mapped above
  (parts-of-speech and sentence-structure as U04 adult references; literary
  terms as U01/U02/U08 teacher-side vocabulary; great books/stories as
  allusion and text-discovery background). The `resource_finder.md` format
  drives every unit's Resource Pack. Shared legacy language-arts assignments
  are not adopted into this track (see inventory); unit builds write their
  own text-specific materials.
- **New references needed at unit build:** public-domain or lawfully linked
  anchor texts for U01, U02, U08 (Project Gutenberg, CommonLit, Folger
  Shakespeare Library — each re-verified when selected); seminal U.S.
  document excerpts for U03 (e.g., via the National Archives or Library of
  Congress); captioned short videos on rhetoric, poetry form, and drama
  performance — curated, never fabricated; Purdue OWL pages for MLA
  citation (URLs re-verified); a writer's notebook and dictionary/thesaurus
  access (print or free digital).
- **Materials and safety:** notebook or device for drafting, printed texts or
  a reader, dictionary access. No lab materials, no hazards, no purchased
  curriculum. Nothing requires a paid account; free no-account alternatives
  (Gutenberg, LibriVox, CommonLit, Poetry Foundation, Folger) support every
  core objective. The adult previews all texts and videos for age
  appropriateness; mature literary themes are introduced with expectations
  set in advance.
- **Accessibility supports (every unit):** text alternatives for all images
  and diagrams; audiobook options for anchor texts (LibriVox or library);
  adjustable pacing and chunked assignments; large-print and text-to-speech
  compatibility; caption checks on all videos; quiet/low-stimulation
  alternatives for seminar and presentation tasks; sentence frames and
  graphic organizers available as scaffolds, never as the only route.
- **Future-unit paths:** each unit build will add lessons, practice,
  investigation/project, formative quiz, culminating assessment, separate
  teacher guide and answer key, verified Resource Pack, and at least one
  genuinely generated teaching image with alt text, caption, and generation
  record. Planned unit folders will live under
  `curriculum/grade-9/language-arts/units/unit-NN-<topic>/`. No unit folder
  is linked until its files exist.

*End of audit A00. Next section: U01 — Literary close reading: theme and
evidence.*
