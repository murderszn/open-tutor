# Grade 12 Language Arts — Scope and Sequence

Audit section A00 of [issue #56](https://github.com/murderszn/open-tutor/issues/56).
Status: **validated draft** (this document, the track README, and the grade-12
hub page); the eight units and the R00 review package are planned, not yet
written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-08 against `main` (commit `2c43d24`; verified with
`git ls-tree -r origin/main --name-only -- curriculum/grade-12/`, which returns
no files — the track folder does not exist on `main` yet).

| Item | Location | Decision |
|---|---|---|
| Grade-12 hub page | `curriculum/grade-12/README.md` | **New** — created by this run: the mathematics audit is a validated draft in unmerged draft PR #122 (issue #54); the language arts audit is delivered by this run; science and social studies are planned; truthful status, no cross-grade links |
| Track README | `curriculum/grade-12/language-arts/README.md` | **New** — written by this run as a real subject index: course description, 12 measurable objectives, verified standards summary, planned-unit list, adult guidance |
| Scope and sequence | `curriculum/grade-12/language-arts/scope-and-sequence.md` | **New** — this document |
| `curriculum/grade-12/language-arts/` before this run | track folder | **Confirmed empty** — the folder does not exist on `main`; the issue's 2026-10-01 "0 Markdown files" baseline holds. No legacy assignments, quizzes, lessons, keys, diagnostics, resource packs, or teaching images exist to keep, revise, or retire |
| Grade-11 language arts audit (draft PR #119, unmerged) | PR branch | **Prerequisite reference only** — its end-of-year objectives define the entry skills in §2; no grade-11 lessons copied upward; no learner-facing cross-grade links |
| Same-grade mathematics (#54, draft PR #122) | PR branch | **Session-model reference only** — about 50-minute sessions, five per week, with same-day adult-reviewed written practice; no mathematics content reused |
| Same-grade science (#55) and social studies (#57) | unaudited | **No reuse** — not yet delivered; U03 media-era rhetoric and U07 civic communication are expected to coordinate with, not copy from, their future tracks |
| Shared `assignments/language-arts/` enrichment seeds (Shakespeare overviews for *Hamlet* and *Romeo and Juliet*, Harlem Renaissance poetry study, archetypal flood-myths study, *Scarlet Letter* study) | `assignments/language-arts/` | **Reference only, do not adopt** — one-page enrichment seeds whose lesson builds are owned by the grade-8 track's audit; grade-12 unit builds will select their own anchor texts (public-domain world literature in translation plus adult-selected licensed editions) and write their own study materials |
| `resources/language_arts_literary_terms.md` | literary terms and devices guide | **Teacher-side vocabulary bank for U01** — simile, metaphor, irony, theme, point of view, and related terms are accurate; grade-12 lessons build on them toward critical-lens interpretation (RL.11-12.6), comparative theme treatment (RL.11-12.9), and cumulative figurative-language analysis (L.11-12.5.a) |
| `resources/language_arts_parts_of_speech.md` | eight parts of speech guide | **Adult-side reference for U04** — accurate grammar vocabulary behind the grade-12 style work; never assigned as grade-12 instruction (its tone and examples skew younger) |
| `resources/language_arts_sentence_structure.md` | sentence-structure guide (subject/predicate, phrases, clauses, sentence types) | **Adult-side reference for U04** — accurate at its band; grade-12 applies contested-usage resolution (L.11-12.1.a–b) and deliberate syntactic variation for effect (L.11-12.3.a) in stylistic revision |
| `resources/language_arts_great_books_and_stories.md` | classics/allusion guide with Gutenberg, LibriVox, CommonLit, SparkNotes links | **Reuse with verification** — U01/U02 allusion background and public-domain source-text discovery for world-literature selections; every external link re-verified at unit build; the guide's summaries are background for the adult, never learner text |
| `resources/semester-resource-library.md` | shared resource shelf | **Inspect during unit builds** — external starting points only; each candidate opened and assessed before recommendation |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack in the repo's required format |
| Purdue OWL / Folger Shakespeare Library / Library of Congress links | cited elsewhere in the repo and in `resource-map.md` | **Verify at build** — OWL's research, MLA, and rhetoric sections were restructured in recent years; LOC document URLs must be opened and confirmed per unit |
| Repository datasets (CSV/JSON) | none language-related | **No reuse** — units use original text sets, sentence banks, and word lists authored per unit |

No existing grade-12 language arts material was inaccurate or inappropriate —
there is none. No answer-key gaps, dated facts, or broken links exist in the
track because nothing has been written yet. The gap is total for core
instruction: no taught lessons, no assessments, no keys, no diagnostics, no
resource packs, and no teaching images.

## 2. Prerequisites

Learners typically enter grade-12 language arts able to (the grade-11 track's
stated end-of-year objectives, currently in unmerged draft PR #119; the
diagnostic week verifies these and the track re-teaches insecure skills in
use):

- Cite strong and thorough textual evidence for explicit and inferential
  claims about literature and informational text (RL.11-12.1, RI.11-12.1)
- Determine two or more themes or central ideas, analyze their development and
  interaction, and write an objective summary (RL.11-12.2, RI.11-12.2)
- Analyze an author's choices — setting, plot order, character development,
  structure, point of view including satire, sarcasm, irony, and understatement
  — and their contribution to meaning and aesthetic impact (RL.11-12.3,
  RL.11-12.5, RL.11-12.6)
- Analyze word choice — figurative, connotative, technical — for impact on
  meaning and tone; interpret figures of speech in context (RL.11-12.4,
  RI.11-12.4, L.11-12.5.a)
- Delineate and evaluate reasoning in seminal U.S. texts and works of public
  advocacy; analyze foundational U.S. documents for themes, purposes, and
  rhetorical features (RI.11-12.8, RI.11-12.9)
- Analyze multiple interpretations of a work across versions, including a
  Shakespeare play and a play by an American dramatist (RL.11-12.7)
- Write arguments with precise claims distinguished from counterclaims, fair
  development of both, cohesion, formal tone, and a supported conclusion
  (W.11-12.1); write informative/explanatory texts (W.11-12.2); write
  narratives with technique and sensory language (W.11-12.3)
- Conduct short and sustained research: advanced searches, authoritative
  sources, credibility judgment, synthesis, selective integration without
  plagiarism, standard citation (W.11-12.7, W.11-12.8)
- Demonstrate grades 11–12 conventions and college-ready vocabulary strategies
  (L.11-12.1–6); initiate and participate in evidence-based collaborative
  discussion and present findings with strategic media in formal English
  (SL.11-12.1, SL.11-12.4–6); evaluate a speaker's reasoning, evidence, and
  rhetoric (SL.11-12.3)

The audit never assumes fluency with: **independent reading at the high end
of the 11–CCR complexity band** (the grade-12 line of RL.11-12.10 and
RI.11-12.10 expects independent proficiency by end of grade 12, without the
scaffolding the grade-11 line permits); **critical-lens interpretation** —
applying feminist, Marxist, postcolonial, reader-response, and new-historicist
lenses to produce competing readings (U01); **comparative world literature in
translation** with historical-context method (U02); **contemporary media
criticism** — evaluating speakers and multi-format sources to address a
question (U03, SL.11-12.2, SL.11-12.3, RI.11-12.7); **precision style** —
contested-usage resolution and deliberate syntactic variation for effect
(U04, L.11-12.1.a–b, L.11-12.3.a); **sustained independent research
synthesis** at capstone depth (U06, W.11-12.7, W.11-12.8); **professional,
civic, and postsecondary communication** genres (U07); or **seminar
leadership with synthesis across perspectives** (U08, SL.11-12.1.c–d) — those
are this track's new content. Spelling and keyboarding fluency are supported,
not assumed, across the writing units.

## 3. Track objectives

Measurable, adult-assessed by end of year (12 objectives; numbered in the
track README). The grade-12 bar above grade 11: independence at the high end
of the complexity band, critical lenses as the signature interpretive move,
world literature in translation as the reading throughline, contemporary
media criticism as the signature analytical move, precision style, sustained
independent research synthesis, professional and civic communication, and
seminar leadership with a capstone portfolio as the signature compositional
moves. The full objective text lives in [README.md](README.md); the standards
crosswalk in §5 maps each objective to verified codes.

## 4. Eight-unit sequence and weekly pacing

About 36 weeks: eight four-week units (20 sessions each) plus four flexible
weeks — diagnostic placement (week 1), midyear review (week 14), catch-up
(week 15), and final review (week 36). Sessions are about 50 minutes, five per
week. A unit's 20 sessions are budgeted as: 4–6 written lessons (8–10
sessions), reading or writing workshops (4–5 sessions), seminar or discussion
(1–2 sessions), independent practice and drafting (2–3 sessions), and review
plus the formative quiz (1–2 sessions). Reading volume rises across the year
toward independent full-length works.

### Week 1 — Diagnostic placement

Verifies the §2 entry skills with short evidence-citation, theme-analysis,
and argument-writing tasks; identifies insecure skills to re-teach in use;
sets the independent-reading baseline. No new instruction.

### Weeks 2–5 — U01: Advanced close reading: critical lenses and interpretation

Establishes lens-based interpretation as the year's signature reading move.
Anchor texts (public domain): Chekhov short stories and a reread passage set
from a grade-11-familiar work, read again through new lenses.

- **Week 2:** The close-reading routine at the high end of the complexity
  band; annotation for lenses; what a "lens" asks that plain reading does
  not. Workshop: one familiar passage, two lens readings.
- **Week 3:** Feminist and Marxist lenses: the questions each lens brings;
  applying both to a Chekhov story; where the lenses agree and collide.
- **Week 4:** Postcolonial and new-historicist lenses; reader-response
  journals; comparing lens readings of one text with textual evidence.
- **Week 5:** Multi-lens interpretation essay (drafted, adult-reviewed);
  formative quiz on lens vocabulary and application; review.

### Weeks 6–9 — U02: Comparative world literature and historical context

Reading in translation with the historical-context method. Anchor texts
(public domain): Homer's *Odyssey* (translation excerpt), Sophocles'
*Antigone*, Dante's *Inferno* (excerpt), Cervantes' *Don Quixote* (excerpt),
Ibsen's *A Doll's House*.

- **Week 6:** Why read in translation; the historical-context method; epic
  conventions in the *Odyssey* excerpt; translation comparison (two public-
  domain translations of one passage).
- **Week 7:** Greek tragedy: *Antigone* — civic conflict and competing
  duties; comparing ancient and modern stagings (recorded productions as
  multiple interpretations, RL.11-12.7).
- **Week 8:** Medieval to early modern: *Inferno* and *Don Quixote*
  excerpts — satire and moral order across cultures; how similar themes are
  treated in different periods.
- **Week 9:** Modern world voices: *A Doll's House*; comparative essay
  drafting (two texts, one theme); formative quiz; review.

### Weeks 10–13 — U03: Rhetorical analysis: argument and media criticism

Contemporary rhetoric and media, all adult-selected, previewed, and
supervised. No copyrighted texts reproduced in the repo.

- **Week 10:** The rhetorical triangle and appeals; analyzing an
  adult-selected contemporary speech for point of view, style, and power
  (RI.11-12.6).
- **Week 11:** Argument structure evaluation: claims, evidence, warrants;
  fallacies; whether a structure makes its points clear, convincing, and
  engaging (RI.11-12.5).
- **Week 12:** Media criticism: news, opinion, visual and digital media;
  integrating and evaluating multiple sources in different formats to address
  a question; misinformation literacy (RI.11-12.7, SL.11-12.2).
- **Week 13:** Evaluating a speaker's reasoning, evidence, and rhetoric
  (SL.11-12.3); learner-led seminar debate; formative quiz; review.

### Week 14 — Midyear review

Revisits U01–U03 skills with mixed practice: lens application, comparative
analysis, rhetorical evaluation. Reteaches insecure skills; no new content.

### Week 15 — Catch-up

Flex week: unfinished drafting, revision, and conferencing from U01–U03;
independent reading continues.

### Weeks 16–19 — U04: Precision style: grammar and vocabulary refinement

- **Week 16:** Usage as convention: contested usage and how reference works
  resolve it (L.11-12.1.a–b); editing for conventions with adult reference
  checks.
- **Week 17:** Syntax for effect: varying sentence structure deliberately;
  applying syntax study to complex texts (L.11-12.3.a); sentence-level
  revision of earlier writing.
- **Week 18:** Academic and domain-specific vocabulary: context clues,
  word-change patterns, etymology, dictionary verification (L.11-12.4.a–d);
  building a personal academic word bank.
- **Week 19:** Style revision workshop: revising U01/U02 essays for
  precision; formative quiz on usage and vocabulary strategies; review.

### Weeks 20–23 — U05: Advanced analytical, argumentative, and creative writing

- **Week 20:** Long-form argument: thesis, counterclaim architecture, and
  evidence selection; cohesion through varied syntax (W.11-12.1).
- **Week 21:** Analytical writing on literature: integrating quotation,
  lens-based claims, and the grades 11–12 reading standards as evidence
  (W.11-12.9.a).
- **Week 22:** Creative writing craft: narrative technique, voice, pacing,
  and revision (W.11-12.3).
- **Week 23:** Full revision cycle studio with peer-review protocols;
  formative quiz; review.

### Weeks 24–27 — U06: Research synthesis: methodology and source evaluation

- **Week 24:** Self-generated research questions; narrowing and broadening
  inquiry; advanced search strategies (W.11-12.7).
- **Week 25:** Source evaluation: strengths, limitations, bias,
  corroboration; assessing sources against task, purpose, and audience
  (W.11-12.8).
- **Week 26:** Synthesis: integrating multiple sources selectively;
  avoiding plagiarism and overreliance; standard citation format.
- **Week 27:** Sustained drafting with research conferences; formative
  quiz; review.

### Weeks 28–31 — U07: Professional, civic, and postsecondary communication

- **Week 28:** Postsecondary writing: application essays and personal
  statements; adapting voice to purpose and audience (W.11-12.4).
- **Week 29:** Professional communication: resumes, cover letters, and
  professional correspondence; formal tone and conventions.
- **Week 30:** Civic communication: letters to representatives, public
  comment, op-eds — adult-reviewed and completed privately before any
  external sharing.
- **Week 31:** Formal presentations: clear perspective, strategic digital
  media, adapting speech to context (SL.11-12.4–6); formative quiz; review.

### Weeks 32–35 — U08: Independent reading seminar and revised capstone portfolio

- **Week 32:** Independent reading selection (adult-approved, high end of
  the 11–CCR band); reading plan and evidence log.
- **Week 33:** Seminar leadership: facilitating discussion, propelling
  conversation with probing questions, synthesizing perspectives and
  resolving contradictions (SL.11-12.1.c–d).
- **Week 34:** Capstone portfolio: selecting, revising, and sequencing the
  year's best work; reflective introductions drawing evidence from the work
  itself.
- **Week 35:** Portfolio presentations; final seminar; formative quiz;
  review.

### Week 36 — Final review

Cumulative review of the year's objectives; the R00 cumulative assessment is
administered here once delivered.

## 5. Standards crosswalk

Codes and descriptions verified against the official standards pages at
<https://www.thecorestandards.org/ELA-Literacy/> on 2026-10-08 (Reading:
Literature, Reading: Informational Text, Writing, Speaking & Listening, and
Language, grades 11–12). The crosswalk paraphrases expectations and cites
exact codes; it is a planning reference, not a claim of state adoption,
accreditation, or certification.

| Track objective | Verified standards |
|---|---|
| 1 — Independent complex-text reading with strong evidence | RL.11-12.1 (strong and thorough textual evidence, including where the text leaves matters uncertain); RL.11-12.10 (by end of grade 12, read literature at the high end of the 11–CCR band independently and proficiently); RI.11-12.1, RI.11-12.10 (same for literary nonfiction) |
| 2 — Themes/central ideas, development, objective summary | RL.11-12.2 (two or more themes, how they interact and build to a complex account; objective summary); RI.11-12.2 (same for central ideas) |
| 3 — Critical lenses; stated vs. meant (satire/irony) | RL.11-12.6 (point of view requiring distinguishing what is stated from what is meant: satire, sarcasm, irony, understatement); RL.11-12.3 (author's choices in developing story elements) |
| 4 — Comparative world literature; multiple interpretations | RL.11-12.9 (foundational American works of the 18th–early-20th centuries; how two or more texts from the same period treat similar themes); RL.11-12.7 (multiple interpretations across versions, including a Shakespeare play and a play by an American dramatist) |
| 5 — Word choice, syntax, figures of speech | RL.11-12.4 (figurative and connotative meanings; impact of word choices on meaning and tone); RI.11-12.4 (figurative, connotative, technical meanings; how an author refines a key term); L.11-12.5, L.11-12.5.a (figurative language; figures of speech in context) |
| 6 — Seminal-text reasoning; rhetorical power; argument structure | RI.11-12.8 (reasoning in seminal U.S. texts: constitutional principles, legal reasoning, public-advocacy premises); RI.11-12.6 (author's point of view in highly rhetorical texts; style and content as power, persuasiveness, beauty); RI.11-12.5 (effectiveness of exposition/argument structure) |
| 7 — Contemporary argument and media criticism | SL.11-12.3 (evaluate a speaker's point of view, reasoning, evidence, rhetoric); RI.11-12.7 (integrate and evaluate multiple sources in different media to address a question); SL.11-12.2 (integrate multi-format sources, evaluate credibility, note discrepancies) |
| 8 — Argument, informative, and narrative writing | W.11-12.1.a–e (precise claims, fair counterclaims, cohesion, formal style, supported conclusion); W.11-12.2.a–f (complex ideas organized; precise domain vocabulary); W.11-12.3.a–e (narrative technique, sensory language, coherent sequencing) |
| 9 — Sustained independent research | W.11-12.7 (short and sustained research on self-generated questions; synthesis); W.11-12.8 (advanced searches; assess source strengths and limitations; selective integration; standard citation) |
| 10 — Evidence-based analysis; routine writing | W.11-12.9.a–b (apply grades 11–12 reading standards to literature and literary nonfiction); W.11-12.10 (write routinely across extended and short time frames) |
| 11 — Discussion leadership; formal presentation | SL.11-12.1.a–d (prepared, civil discussion; probing questions; synthesizing perspectives; resolving contradictions); SL.11-12.4 (clear perspective, addressed counterpoints); SL.11-12.5 (strategic digital media); SL.11-12.6 (formal English when appropriate) |
| 12 — Grammar, usage, syntax, academic vocabulary | L.11-12.1.a–b (usage as contested convention; resolve with references); L.11-12.2 (capitalization, punctuation, spelling); L.11-12.3.a (vary syntax for effect); L.11-12.4.a–d (vocabulary strategies); L.11-12.6 (college- and career-ready academic vocabulary) |

Notes: RL.11-12.8 is not applicable to literature (the strand skips it, as the
official page confirms). W.11-12.4 (task-appropriate writing), W.11-12.5
(revision), and W.11-12.6 (technology for publishing) apply across the writing
units' studio and revision sessions rather than to a single objective.

## 6. Internal resource reuse and new reference needs

Reuse from §1: the literary-terms guide as the U01 teacher-side vocabulary
bank; the sentence-structure and parts-of-speech guides as adult-side U04
references; the great-books guide for public-domain source discovery with
per-unit link verification; the Resource Finder format for every unit's
Resource Pack. New needs at unit build: public-domain translations of the
U02 anchor works (compare at least two translations per work at build time);
adult-selected contemporary speeches and media for U03 (no standing
recommendations — the adult selects and previews per cohort); reference works
for contested usage (dictionary of English usage) for U04; a standard citation
format chosen by the adult for U06 (MLA or APA, used consistently).

## 7. Materials, safety, and accessibility

Language arts investigations carry no physical hazards. The standing safety
rules: a guiding adult previews every text, video, and website before the
learner sees it; supervises all internet searching and media viewing; keeps
the learner's name, photos, schedules, and identifying details out of research
products, correspondence, and any public repository; and reviews civic
letters and portfolio pieces privately before any external sharing.
Contemporary media for U03 is never assigned unsupervised.

Accessibility supports ship with every unit: audiobook alternatives (e.g.,
LibriVox) for long texts, chunked reading with guided annotation,
speech-to-text for drafting, graphic organizers for argument and research,
sentence frames for seminar leadership, extended time, and written discussion
alternatives to live seminars. Text rights: use original passages or lawful
public-domain/licensed texts only — never reproduce copyrighted books, poems,
or worksheets. Any AI-generated teaching illustration is labeled as such and
never presented as a primary source.

## 8. What each future unit section must deliver

Per the worker requirements, each unit (U01–U08) ships: a unit README with
measurable goals, prerequisites, vocabulary, verified standards/source notes,
and 16–20-session pacing; four to six fully written lessons (explicit
explanations, ≥2 worked or modeled examples each, guided and independent
practice, an applied task, an exit check); differentiated supports and
extensions; one investigation/project with materials, steps, deliverables, and
rubric; a formative quiz and a culminating assessment; separate teacher
guides and answer keys (every question solved independently and reconciled);
a verified Resource Pack (internal links, focused queries, curated or clearly
labeled search-link videos, reputable references, task-to-resource mappings,
free no-account alternatives for core learning); and at least one genuinely
generated educational raster image used in an activity, with alt text,
caption, and a generation record in `assets/README.md`. R00 ships the
diagnostic, midyear/final reviews, cumulative assessment and keys, then audits
whole-track coherence, accessibility, sources, image accuracy, and all
index/manifest entries.

## 9. Index status after this run

- `curriculum/grade-12/README.md` — new in this run's draft: mathematics
  audit is a validated draft in unmerged draft PR #122 (issue #54); language
  arts audit is a validated draft in this run's draft PR (issue #56); science
  (issue #55) and social studies (issue #57) are planned with no folders.
- `curriculum/README.md` — Grade 12 line updated truthfully: draft audits
  for mathematics (issue #54) and language arts (issue #56); science and
  social studies planned (issues #55, #57); no complete subject tracks.
- `curriculum/manifest.json` — three new entries (`grade-12/README.md`,
  `grade-12/language-arts/README.md`,
  `grade-12/language-arts/scope-and-sequence.md`); counts updated.
