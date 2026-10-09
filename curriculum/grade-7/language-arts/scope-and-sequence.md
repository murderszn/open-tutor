# Grade 7 Language Arts — Scope and Sequence

Audit section A00 of [issue #36](https://github.com/murderszn/open-tutor/issues/36).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-05 against `origin/main` (commit `2c43d24`). The folder held
**18 Markdown files** (1 subject README, 7 assignment skeletons, 8 quizzes, 2
practice templates). The issue's 2026-10-01 "18 Markdown files" baseline matches
this re-audit. Decisions: **Keep** = reuse as-is in the named unit with review;
**Revise** = usable skeleton needing substantive improvement (taught content,
modeled examples, answer keys, rubrics) before assignment; **Enrichment** =
optional extension only, never a core-lesson substitute.

### Assignment skeletons

| Item | Location | Decision |
|---|---|---|
| Argument Paragraph Builder | `assignments/argument-paragraph-builder.md` | **Revise** → U06. Five-task skeleton (claim, evidence, reasoning, closing) with no instruction, no modeled example, and no rubric. Becomes a U06 practice task with a worked claim/evidence/commentary example and a rubric. |
| Claim, Evidence, Commentary Lab | `assignments/claim-evidence-commentary-lab.md` | **Revise** → U06. Checklist skeleton referencing a "selected grade's private workspace" (ambiguous; keep private workspace anonymous per boundaries). Rebuilt with a modeled two-paragraph example and a revision-note frame. |
| Context Clues Vocabulary Lab | `assignments/context-clues-vocabulary-lab.md` | **Revise** → U04. Eight-word context-clue routine with no modeled word-solving example and no Greek/Latin affix instruction. Rebuilt as U04 vocabulary practice (L.7.4.a–b) with modeled think-aloud. |
| Narrative Scene Revision | `assignments/narrative-scene-revision.md` | **Revise** → U05. Draft-and-revise scene skeleton (sensory detail, one dialogue exchange) with no craft instruction. Rebuilt inside U05 with modeled dialogue/pacing examples and a revision rubric. |
| Parts of Speech Practice | `assignments/parts-of-speech-practice.md` | **Revise** → U04. Label-and-produce routine with no taught content on phrases/clauses. Folded into U04 word-study practice; the parts-of-speech label work becomes a warm-up, not a core lesson (grade 7's new ground is phrases/clauses/sentence variety per L.7.1). |
| Reading/Podcast Response Log | `assignments/reading-podcast-response-log.md` | **Revise** → U08. Five-takeaway plus summary routine, a solid scaffold as-is but needs an adult review note and vocabulary-connection guidance. Becomes the U08 media-reading routine feeding media analysis (RL.7.7, RI.7.7, SL.7.2). |
| Sentence Structure & Combining | `assignments/sentence-structure-and-combining.md` | **Revise** → U04. Simple-sentence combining skeleton with no instruction on sentence types or modifiers. Rebuilt with modeled combining (simple/compound/complex) and a misplaced-modifier repair pass (L.7.1.b–c). |

### Quizzes (all ten-question, all with no answer key)

| Item | Location | Decision |
|---|---|---|
| Great Books — Ancient Stories, Myths & Shakespeare Quiz | `quizzes/great-books-ancient-stories-myths-shakespeare-quiz.md` | **Revise** → U01/U02 review seed. Tests guide recall (myths, gods, Shakespeare) rather than passage analysis. Unit builds add an answer key and re-anchor questions to read passages (RL.7.2–7.3, RL.7.6). |
| Great Books — Classic Novels, Poems & Short Stories Quiz | `quizzes/great-books-classic-novels-poems-short-stories-quiz.md` | **Revise** → U01/U02 review seed. Same treatment as above; answer key moved to the teacher guide. |
| Literary Terms — Figurative Language Quiz | `quizzes/literary-terms-figurative-language-quiz.md` | **Revise** → U02 review seed. Definition-and-example format is sound; needs an answer key and one passage-based item (RL.7.4). |
| Literary Terms — Story Elements & Narrative Devices Quiz | `quizzes/literary-terms-story-elements-narrative-devices-quiz.md` | **Revise** → U01 review seed. Plot/conflict/setting/character/POV items map directly to RL.7.3 and RL.7.6; needs an answer key and passage items. |
| Parts of a Sentence — Phrases, Clauses & Sentence Types Quiz | `quizzes/parts-of-a-sentence-phrases-clauses-sentence-types-quiz.md` | **Revise** → U04 review seed. Covers phrases/clauses and sentence types (L.7.1.a–b); needs an answer key and a dangling-modifier item (L.7.1.c). |
| Parts of a Sentence — Subject, Predicate & Objects Quiz | `quizzes/parts-of-a-sentence-subject-predicate-objects-quiz.md` | **Revise** → U04 review seed. Needs an answer key; folded in as the U04 entry check. |
| Parts of Speech — Adjectives, Adverbs, Prepositions, Conjunctions & Interjections Quiz | `quizzes/parts-of-speech-adjectives-adverbs-prepositions-conjunctions-interjections-quiz.md` | **Revise** → U04 review seed. Needs an answer key; the FANBOYS/coordinate-adjective item feeds L.7.2. |
| Parts of Speech — Nouns, Pronouns & Verbs Quiz | `quizzes/parts-of-speech-nouns-pronouns-verbs-quiz.md` | **Revise** → U04 review seed. Needs an answer key; serves as the entry-level refresher before phrases/clauses. |

All eight quizzes reference the shared resource guides by relative path
(`../../../../resources/...`) — links resolve on `main` and are not broken.
**Answer-key gap:** every quiz is blank with no key anywhere in the track; unit
teacher guides must supply worked answer keys.

### Templates

| Item | Location | Decision |
|---|---|---|
| Audiobook (or book) trailers | `templates/audiobook-trailers.md` | **Revise** → U08. Sound 60-second pitch scaffold; rebuilt with a modeled pitch and a presentation rubric (SL.7.4–7.5). |
| Video Reviews | `templates/video-reviews.md` | **Revise** → U03/U08. Claim/evidence/reliability scaffold feeds media analysis (SL.7.2, RI.7.7); rebuilt with a modeled review and a bias-check frame. |

### Subject README

| Item | Location | Decision |
|---|---|---|
| Grade 7 Language Arts index | `README.md` | **Revise** → replaced this run by the new track README (coverage summary, measurable objectives, standards reference, audit status, adult guidance). |

Nothing was inaccurate or inappropriate. The legacy library is entirely
supplemental (skeletons and blank quizzes): **there are no taught lessons, no
answer keys, and no diagnostic**, so U01–U08 build instruction new rather than
replacing legacy lessons.

### Repository references

| Item | Decision |
|---|---|
| Grade-7 hub page (`curriculum/grade-7/README.md`) | **Revise** — updated to record the language-arts track's audit status. |
| Grade-6 language-arts track (#32, audit delivered; units planned) | **Reference for entry prerequisites only** — the grade-6 end-of-year objectives (§2) define what this track assumes; no grade-6 content is copied upward. |
| `resources/language_arts_parts_of_speech.md` | **Reuse** → U04. Parts-of-speech tables as the lookup shelf for refresher items; the adult excerpts and explains at grade level, never assigns the whole file. |
| `resources/language_arts_sentence_structure.md` | **Reuse** → U04. Sections 6–10 (phrases, clauses, sentence types) feed L.7.1.a–b; excerpted, not assigned whole. The quiz's assumed section numbering must be verified against the guide during the U04 build. |
| `resources/language_arts_literary_terms.md` | **Reuse** → U01/U02. Plot, setting, conflict, theme, point of view, figurative language, irony, tone/mood for RL.7.2–7.6; excerpted and adapted. The quizzes' assumed "Part 1 / Part 2" headings must be verified against the guide during the unit builds. |
| `resources/language_arts_great_books_and_stories.md` | **Reuse with adult selection** → U01/U02. The adult selects public-domain texts in the grades 6–8 band via the guide's links (myths and legends for U01 theme work; Shakespeare for U02 POV/form); never assign a linked title unpreviewed. Student units reference chosen texts directly with their own verified summaries. |
| `resources/semester-resource-library.md` (Language Arts shelf) | **Limited reuse with adult judgment** → U06 (Purdue OWL: Argumentative Essays) and U07 (Purdue OWL: citation/MLA basics); adult previews every video/link. |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — drives every unit's Resource Pack (focused queries, verified videos or labeled search links, reputable references, task-to-resource mappings). |

## 2. Prerequisites

Learners typically enter grade-7 language arts with (the grade-6 track's
end-of-year objectives): citing textual evidence for explicit meaning and
inferences; determining theme/central idea and summarizing distinct from
opinion; describing plot episodes and character change; analyzing word choice's
impact on meaning and tone; comparing reading vs. audio/video versions;
analyzing how a key individual/event/idea is developed and evaluating arguments;
clarifying words with context clues, Greek/Latin affixes/roots, and reference
materials; interpreting personification and connotation; using pronouns
correctly and punctuating nonrestrictive elements; varying sentence patterns;
writing arguments, informative texts, and narratives with planning/revising;
short multi-source research with quotation, paraphrase, and works-cited basics;
and prepared, evidence-based discussion.

The diagnostic weeks (Weeks 1–2) verify these. U01 re-teaches multi-evidence
citation and theme development before assuming they are secure; U04 re-checks
sentence-level fluency (the quizzes' subject/predicate/parts-of-speech items)
before asking for sentence-type variety and modifier placement.

## 3. Track objectives

Measurable, adult-assessed by end of year (12 objectives; numbered in the
track README):

1. Cite several pieces of textual evidence to support analysis of what a literary or informational text says explicitly as well as inferences drawn from it (RL.7.1, RI.7.1).
2. Determine a theme or central idea and analyze its development over the course of the text; provide an objective summary distinct from personal opinion; analyze how particular elements of a story or drama interact (e.g., how setting shapes the characters or plot) (RL.7.2, RL.7.3, RI.7.2).
3. Determine the meaning of words and phrases as used in a text, including figurative and connotative meanings; analyze the impact of rhymes and other sound repetitions; analyze how a drama's or poem's form or structure contributes to its meaning; analyze how an author develops and contrasts the points of view of different characters or narrators (RL.7.4, RL.7.5, RL.7.6).
4. Compare and contrast a written story, drama, or poem to its audio, filmed, staged, or multimedia version; compare and contrast a fictional portrayal of a time, place, or character with a historical account of the same period (RL.7.7, RL.7.9).
5. In informational text: determine two or more central ideas and analyze their development; analyze the interactions between individuals, events, and ideas; analyze the structure an author uses to organize a text; determine an author's point of view or purpose and analyze how the author distinguishes the position from that of others; compare a text to its audio/video/multimedia version; trace and evaluate the argument and specific claims, assessing whether the reasoning is sound and the evidence is relevant and sufficient; analyze how two or more authors writing about the same topic shape their presentations by emphasizing different evidence or advancing different interpretations of facts (RI.7.3, RI.7.5, RI.7.6, RI.7.7, RI.7.8, RI.7.9).
6. Determine or clarify word meanings with context clues, Greek and Latin affixes and roots, and reference materials; interpret figures of speech in context; use synonym/antonym and analogy relationships; acquire and use grade-appropriate general academic and domain-specific vocabulary (L.7.4, L.7.5, L.7.6).
7. Explain the function of phrases and clauses; choose among simple, compound, complex, and compound-complex sentences; place phrases and clauses within a sentence, recognizing and correcting misplaced and dangling modifiers; use a comma to separate coordinate adjectives; spell correctly; choose language that expresses ideas precisely and concisely, eliminating wordiness and redundancy (L.7.1, L.7.2, L.7.3).
8. Write arguments supporting claims with clear reasons and relevant evidence: introduce claims, acknowledge alternate or opposing claims, support with logical reasoning and relevant evidence from accurate credible sources, use words/phrases/clauses for cohesion, maintain a formal style, and conclude with a statement that follows from and supports the argument (W.7.1).
9. Write informative/explanatory texts and narratives; produce clear coherent writing appropriate to task and audience; strengthen writing through planning, revising, editing, and rewriting; use technology to produce and publish writing (W.7.2–W.7.6).
10. Conduct short research projects; gather relevant information from multiple sources; assess source credibility and accuracy; quote and paraphrase while avoiding plagiarism and following a standard format for citation; draw evidence from literary or informational texts to support analysis, reflection, and research (W.7.7–W.7.9).
11. Engage in collaborative discussions with preparation, evidence, collegial rules, and questions that elicit elaboration; analyze main ideas in diverse media; delineate a speaker's argument and evaluate the soundness of the reasoning and the relevance and sufficiency of the evidence; present claims and findings with multimedia components and visual displays in formal English (SL.7.1–SL.7.6).
12. Read and comprehend literature and literary nonfiction in the grades 6–8 text-complexity band proficiently, with scaffolding as needed at the high end; write routinely over extended and shorter time frames for a range of tasks, purposes, and audiences (RL.7.10, RI.7.10, W.7.10).

## 4. Standards crosswalk

Framework: the Common Core State Standards for English Language Arts
(thecorestandards.org/ELA-Literacy/). Code and description wording verified
against the published grade-7 standards on 2026-10-05 (see §12). The framework
is used as a subject reference; nothing here claims state adoption,
accreditation, or complete standards alignment.

| Strand | Codes used | Verified expectation (paraphrase) |
|---|---|---|
| Reading: Literature — Key Ideas and Details | RL.7.1, RL.7.2, RL.7.3 | Cite several pieces of textual evidence for explicit meaning and inferences; determine a theme or central idea and analyze its development; provide an objective summary; analyze how particular elements of a story or drama interact (e.g., how setting shapes the characters or plot). |
| Reading: Literature — Craft and Structure | RL.7.4, RL.7.5, RL.7.6 | Determine figurative and connotative meanings of words and phrases; analyze the impact of rhymes and other repetitions of sounds on a verse or stanza of a poem or section of a story or drama; analyze how a drama's or poem's form or structure (e.g., soliloquy, sonnet) contributes to its meaning; analyze how an author develops and contrasts the points of view of different characters or narrators. |
| Reading: Literature — Integration of Knowledge | RL.7.7, RL.7.9 | Compare and contrast a written story, drama, or poem to its audio, filmed, staged, or multimedia version, analyzing the effects of techniques unique to each medium (e.g., lighting, sound, color, camera focus and angles); compare and contrast a fictional portrayal of a time, place, or character and a historical account of the same period. |
| Reading: Literature — Range | RL.7.10 | Read and comprehend literature, including stories, dramas, and poems, in the grades 6–8 text complexity band proficiently, with scaffolding as needed at the high end. |
| Reading: Informational — Key Ideas and Details | RI.7.1, RI.7.2, RI.7.3 | Cite several pieces of textual evidence for explicit meaning and inferences; determine two or more central ideas and analyze their development; provide an objective summary; analyze the interactions between individuals, events, and ideas (e.g., how ideas influence individuals or events). |
| Reading: Informational — Craft and Structure | RI.7.4, RI.7.5, RI.7.6 | Determine figurative, connotative, and technical meanings and analyze a specific word choice's impact on meaning and tone; analyze the structure an author uses to organize a text, including how the major sections contribute to the whole and to the development of the ideas; determine an author's point of view or purpose and analyze how the author distinguishes the position from that of others. |
| Reading: Informational — Integration of Knowledge | RI.7.7, RI.7.8, RI.7.9 | Compare and contrast a text to an audio, video, or multimedia version, analyzing each medium's portrayal of the subject; trace and evaluate the argument and specific claims, assessing whether the reasoning is sound and the evidence is relevant and sufficient; analyze how two or more authors writing about the same topic shape their presentations by emphasizing different evidence or advancing different interpretations of facts. |
| Reading: Informational — Range | RI.7.10 | Read and comprehend literary nonfiction in the grades 6–8 band proficiently, with scaffolding as needed. |
| Reading: Foundational Skills | RF.7.3, RF.7.4 | Know and apply grade-level phonics and word analysis in decoding; read with sufficient accuracy and fluency to support comprehension. (Supporting; assessed in diagnostic and word study.) |
| Writing — Text Types and Purposes | W.7.1, W.7.2, W.7.3 | Write arguments supporting claims with reasons and evidence — introducing claims, acknowledging alternate or opposing claims, supporting with logical reasoning and relevant evidence from accurate credible sources, cohesion, formal style, and conclusion; write informative/explanatory texts with relevant facts, definitions, and concrete details; write narratives developing real or imagined experiences with description, dialogue, pacing, and reflection. |
| Writing — Production and Distribution | W.7.4, W.7.5, W.7.6 | Produce clear, coherent writing appropriate to task, purpose, and audience; develop and strengthen writing through planning, revising, editing, and rewriting; use technology, including the Internet, to produce and publish writing and to interact and collaborate. |
| Writing — Research | W.7.7, W.7.8, W.7.9 | Conduct short research projects to answer a question; gather relevant information from multiple sources, using search terms effectively; assess the credibility and accuracy of each source; quote or paraphrase data and conclusions while avoiding plagiarism and following a standard citation format; draw evidence from literary or informational texts to support analysis, reflection, and research. |
| Writing — Range | W.7.10 | Write routinely over extended time frames (research, reflection, revision) and shorter time frames for a range of discipline-specific tasks, purposes, and audiences. |
| Speaking and Listening — Comprehension and Collaboration | SL.7.1, SL.7.2, SL.7.3 | Engage effectively in collaborative discussions with diverse partners (prepared with evidence, collegial rules, questions that elicit elaboration, acknowledging new information); analyze the main ideas and supporting details presented in diverse media and formats; delineate a speaker's argument and specific claims, evaluating the soundness of the reasoning and the relevance and sufficiency of the evidence. |
| Speaking and Listening — Presentation | SL.7.4, SL.7.5, SL.7.6 | Present claims and findings, emphasizing salient points in a focused, coherent manner with pertinent descriptions, facts, details, and examples, with appropriate eye contact, volume, and pronunciation; include multimedia components and visual displays to clarify claims and findings; adapt speech to a variety of contexts and tasks, demonstrating command of formal English. |
| Language — Conventions | L.7.1, L.7.2, L.7.3 | Explain the function of phrases and clauses; choose among simple, compound, complex, and compound-complex sentences; recognize and correct misplaced and dangling modifiers; use a comma to separate coordinate adjectives; spell correctly; choose language that expresses ideas precisely and concisely, recognizing and eliminating wordiness and redundancy. |
| Language — Knowledge and Vocabulary | L.7.4, L.7.5, L.7.6 | Determine or clarify meaning of unknown and multiple-meaning words with context clues, Greek and Latin affixes and roots, and reference materials; interpret figures of speech in context; use the relationship between particular words (e.g., synonym/antonym, analogy); acquire and use grade-appropriate general academic and domain-specific vocabulary. |

Notes: RL.7.8 does not exist in the framework (the literature strand skips 8).
Subpoints (e.g., W.7.1.a–e, SL.7.1.a–d) are the standard's own organizational
text in the published standards; this track uses them as instructional detail,
not as separate standards.

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2 at the start, final
review ×2 at the end) = 36 weeks. Session model: **4 sessions per week, about
45 minutes each** (16 sessions per unit). Session types rotate across explicit
lesson, guided practice, reading or writing practice, and review — named per
unit below. Grade-7 learners do independent written practice (10–14 tasks) that
the adult reviews the same day; oral, drawing, and speech-to-text response modes
remain available for checks and supports.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (word-study warm-ups, read-aloud
  turn-taking, writing-notebook habits, discussion norms, exit-check rituals)
  and baseline each objective's entry point.
- Sessions: read an unfamiliar passage with accuracy and fluency (RF.7.3–7.4);
  cite two or more pieces of evidence for one explicit detail and one
  inference in each of a literary and an informational passage (RL.7.1,
  RI.7.1); write one claim with one reason and one cited detail (W.7.1
  entry); explain the function of one phrase and one clause in a sentence
  (L.7.1.a entry); join a 10-minute prepared discussion, posing one question
  that elicits elaboration (SL.7.1).
- No new instruction; record observations against the track objectives.

### Unit 01 — Close reading: theme and interacting story elements (Weeks 3–6)

- **Standards:** RL.7.1, RL.7.2, RL.7.3; L.7.6
- **Week 3 goal:** cite several pieces of textual evidence for what a text
  says explicitly and for inferences drawn from it (RL.7.1).
- **Week 4 goal:** determine a theme or central idea and analyze its
  development over the text; write an objective summary distinct from opinion
  (RL.7.2); acquire academic verbs signaling analysis (L.7.6).
- **Week 5 goal:** analyze how particular elements of a story or drama
  interact — e.g., how setting shapes the characters or the plot (RL.7.3).
- **Week 6:** review week — formative quiz on theme development and element
  interaction; theme statements drafted for the portfolio.
- Sessions rotate: modeled close-reading lesson → evidence practice → theme
  and story-element practice → review and discussion.
- Reuses: `resources/language_arts_great_books_and_stories.md`
  (adult-selected public-domain myths and legends in the grades 6–8 band);
  the revised story-elements quiz becomes the U01 formative review with an
  answer key.

### Unit 02 — Literary perspective, figurative language, and poetry (Weeks 7–10)

- **Standards:** RL.7.4, RL.7.5, RL.7.6; L.7.5
- **Week 7 goal:** determine figurative and connotative meanings; analyze the
  impact of rhymes and other sound repetitions on a verse, stanza, or passage
  (RL.7.4); interpret figures of speech in context (L.7.5.a).
- **Week 8 goal:** analyze how a drama's or poem's form or structure (e.g.,
  soliloquy, sonnet) contributes to its meaning (RL.7.5); a sonnet scansion
  investigation with labeled structure.
- **Week 9 goal:** analyze how an author develops and contrasts the points of
  view of different characters or narrators in a text (RL.7.6).
- **Week 10:** review week — formative check across craft and POV; one
  crafted poem analysis for the portfolio.
- Sessions rotate: modeled poetry/drama lesson → figurative-language
  practice → POV analysis practice → review and discussion.
- Reuses: `resources/language_arts_literary_terms.md` (figurative language,
  tone/mood — excerpted); the revised figurative-language quiz becomes the
  U02 formative review with an answer key.

### Unit 03 — Informational: structure, rhetoric, and argument evaluation (Weeks 11–14)

- **Standards:** RI.7.2–RI.7.9
- **Week 11 goal:** determine two or more central ideas and analyze their
  development; objective summary (RI.7.2); analyze the interactions between
  individuals, events, and ideas (RI.7.3).
- **Week 12 goal:** analyze how major sections contribute to the whole and to
  the development of ideas (RI.7.5); determine the author's point of view or
  purpose and analyze how the author distinguishes the position from that of
  others (RI.7.6); technical and connotative word meanings (RI.7.4).
- **Week 13 goal:** trace and evaluate the argument and specific claims,
  assessing whether the reasoning is sound and the evidence is relevant and
  sufficient (RI.7.8); analyze how two or more authors on the same topic
  emphasize different evidence or advance different interpretations of facts
  (RI.7.9); compare a text to its audio/video/multimedia version (RI.7.7).
- **Week 14:** review week — formative check across argument evaluation and
  source comparison.
- Sessions rotate: modeled informational lesson → structure/purpose practice
  → argument-evaluation practice → review and discussion.
- Reuses: the revised evidence-based video-review template for RI.7.7 media
  comparison practice.

### Unit 04 — Grammar: clauses, sentence structure, and vocabulary (Weeks 15–18)

- **Standards:** L.7.1, L.7.2, L.7.3, L.7.4, L.7.5.b–c; SL.7.6 (formal English)
- **Week 15 goal:** explain the function of phrases and clauses; choose among
  simple, compound, complex, and compound-complex sentences to signal differing
  relationships among ideas (L.7.1.a–b).
- **Week 16 goal:** recognize and correct misplaced and dangling modifiers
  (L.7.1.c); use a comma to separate coordinate adjectives; spell correctly
  (L.7.2).
- **Week 17 goal:** choose precise, concise language and eliminate wordiness
  and redundancy (L.7.3); vocabulary — context clues, Greek/Latin affixes and
  roots, reference verification (L.7.4); synonym/antonym and analogy
  relationships (L.7.5.b–c).
- **Week 18:** midyear review — cumulative formative check (U01–U04) plus
  targeted reteaching; formative quiz.
- Sessions rotate: explicit grammar lesson → revision/editing practice →
  vocabulary practice → review.
- Reuses: the revised parts-of-speech and parts-of-a-sentence quizzes (with
  answer keys) as entry checks; the revised context-clues vocabulary lab,
  parts-of-speech practice, and sentence-structure-and-combining assignments
  become unit practice; `resources/language_arts_sentence_structure.md`
  (sections 6–10) and `resources/language_arts_parts_of_speech.md` excerpted
  by the adult, never assigned whole.

### Unit 05 — Narrative craft: scene, dialogue, and revision (Weeks 19–22)

- **Standards:** W.7.3, W.7.4, W.7.5; RL.7.3, L.7.1, L.7.3 (in drafting)
- **Week 19 goal:** establish context and point of view; introduce narrator
  and characters; organize event sequences that unfold naturally (W.7.3.a).
- **Week 20 goal:** use narrative techniques — dialogue, pacing, description,
  reflection — and precise words and phrases to develop experiences
  (W.7.3.b–d).
- **Week 21 goal:** transitions that convey sequence and signal shifts in time
  frame or setting; a conclusion that follows from and reflects on the narrated
  experiences (W.7.3.c, W.7.3.e); peer-and-adult revision pass (W.7.5).
- **Week 22:** revision week — revise, edit, and rewrite (W.7.5); formative
  check; one polished narrative for the portfolio.
- Sessions rotate: craft lesson → drafting practice → revision/editing
  practice → share and review.
- Reuses: the revised narrative-scene-revision assignment becomes the unit's
  core drafting practice with a rubric.

### Unit 06 — Argument writing: counterclaims, evidence, and reasoning (Weeks 23–26)

- **Standards:** W.7.1; RI.7.8; SL.7.3, SL.7.4; L.7.1, L.7.3
- **Week 23 goal:** introduce claims, distinguish claim from alternate or
  opposing claims, and organize the reasons and evidence clearly (W.7.1.a).
- **Week 24 goal:** support claims with logical reasoning and relevant
  evidence, using accurate, credible sources and demonstrating understanding
  of the topic (W.7.1.b); assess whether a source's reasoning is sound and its
  evidence relevant and sufficient (RI.7.8 applied to learner drafting);
  words, phrases, and clauses that create cohesion and clarify relationships
  (W.7.1.c).
- **Week 25 goal:** establish and maintain a formal style (W.7.1.d, L.7.3.b);
  a concluding statement or section that follows from and supports the
  argument (W.7.1.e); drafting with technology (W.7.6 introduction).
- **Week 26:** revision and presentation — revise with adult feedback (W.7.5);
  delineate and evaluate a partner's argument (SL.7.3); present the argument
  orally with logical sequencing (SL.7.4); formative check; one polished
  argument for the portfolio.
- Sessions rotate: argument lesson → claim/evidence practice → drafting
  practice → review and presentation.
- Reuses: the revised argument-paragraph-builder and
  claim-evidence-commentary-lab assignments become unit practice tasks with
  rubrics; the semester-resource-library's Purdue OWL argumentative-essays
  item is adult-previewed support.

### Unit 07 — Research: source credibility, paraphrase, and synthesis (Weeks 27–30)

- **Standards:** W.7.7, W.7.8, W.7.9; RI.7.9, RI.7.6; L.7.6
- **Week 27 goal:** conduct a short research project to answer a question;
  gather relevant information from multiple print and digital sources, using
  search terms effectively (W.7.7); analyze how two or more authors on the
  same topic shape their presentations by emphasizing different evidence
  (RI.7.9).
- **Week 28 goal:** assess the credibility and accuracy of each source (W.7.8);
  quote and paraphrase accurately while avoiding plagiarism; follow a standard
  format for citation (W.7.8); determine an author's point of view and how it
  is distinguished from others' (RI.7.6).
- **Week 29 goal:** synthesize into an informative/explanatory text with
  relevant facts, definitions, and concrete details (W.7.2); draw evidence
  from informational texts to support analysis and research (W.7.9.b);
  domain-specific vocabulary (L.7.6); use technology to produce and publish
  (W.7.6).
- **Week 30:** review week — research process check; formative assessment;
  one polished explanatory piece for the portfolio.
- Sessions rotate: research lesson → source-finding and evaluation practice →
  drafting practice → review.
- Reuses: the semester-resource-library's Purdue OWL citation item
  (adult-previewed); the video-review template's reliability frame as a
  source-credibility warm-up.

### Unit 08 — Speaking, listening, media analysis, and portfolio revision (Weeks 31–34)

- **Standards:** RL.7.7; SL.7.1, SL.7.2, SL.7.4, SL.7.5, SL.7.6; W.7.10
- **Week 31 goal:** compare a written story, drama, or poem to its
  audio/filmed/staged/multimedia version, analyzing the effects of techniques
  unique to each medium (RL.7.7); compare a fictional portrayal with a
  historical account of the same period (RL.7.9); analyze main ideas presented
  in diverse media and formats (SL.7.2).
- **Week 32 goal:** prepared collaborative discussion — pose questions that
  elicit elaboration, respond with relevant observations that bring discussion
  back on topic, and acknowledge new information (SL.7.1); delineate a
  speaker's argument in live discussion (SL.7.3).
- **Week 33 goal:** presentation design — emphasize salient points in a
  focused, coherent manner with pertinent facts and details; include
  multimedia components and visual displays; adapt speech to formal English
  (SL.7.4, SL.7.5, SL.7.6).
- **Week 34:** portfolio week — revise one piece from U05–U07 (W.7.5);
  reflective cover letter; present the portfolio; unit formative check.
- Sessions rotate: media-analysis lesson → discussion practice →
  presentation practice → review and share.
- Reuses: the revised reading/podcast response log as the media-reading
  routine; the revised audiobook-trailer template as a presentation scaffold;
  the revised great-books quizzes as review seeds for written-vs-multimedia
  comparisons.

### Weeks 35–36 — Final review and cumulative assessment (flexible)

- Revisit multi-evidence citation (U01), theme development and craft (U01–U02),
  argument evaluation (U03), conventions (U04), and writing process (U05–U07)
  through short mixed practice sets; administer the cumulative assessment;
  confirm the portfolio is complete. Assessment design and keys belong to R00;
  units are not expected to cover them.

## 6. Retrieval and review cadence

Each unit's week 4 is a dedicated review week (practice, formative quiz, and
reteaching). Week 18 adds a midyear cumulative check across U01–U04.
Conventions (L.7.1–7.3) recur in every unit's writing practice so skills do not
decay after U04; vocabulary routines (affixes/roots, context clues) recur in
U01, U04, and U07 research. Evidence-based discussion (SL.7.1) runs in every
unit's discussion sessions; speaker-argument evaluation (SL.7.3) is introduced
in U03, practiced in U06 peer review, and applied in U08. No unit assumes a
skill its predecessor has not taught.

## 7. Internal resource reuse for future units

- All seven revised assignments become unit practice tasks (argument paragraph
  builder and claim-evidence-commentary lab → U06; context clues lab,
  parts-of-speech practice, sentence-structure-and-combining → U04; narrative
  scene revision → U05; reading/podcast response log → U08) — rebuilt with
  instruction, modeled examples, and rubrics.
- All eight revised quizzes become unit formative reviews with answer keys in
  the teacher guides (literary-terms quizzes → U01/U02; great-books quizzes →
  U01/U02; parts-of-speech and parts-of-a-sentence quizzes → U04).
- The two revised templates scaffold U08 presentations (audiobook trailer) and
  U03/U08 media analysis (video review).
- `resources/language_arts_parts_of_speech.md` and
  `resources/language_arts_sentence_structure.md` serve U04 — excerpted by the
  adult at the point of instruction.
- `resources/language_arts_literary_terms.md` serves U01 (story elements) and
  U02 (figurative language) — excerpted, not assigned whole.
- `resources/language_arts_great_books_and_stories.md` serves U01/U02 text
  selection — the adult chooses public-domain passages in the grades 6–8 band;
  units reference chosen texts directly.
- The semester-resource-library Language Arts shelf serves U06 and U07
  (Purdue OWL argumentative and citation items) — adult-previewed.
- `teachers/ai-assistants/resource_finder.md` drives each unit's Resource Pack.

## 8. Safe materials

All reading passages are original or lawful public-domain/licensed texts;
unit builds must not reproduce copyrighted books, poems, or worksheets.
Investigations use observation, discussion, and writing — no hazardous
materials. Multimedia work uses learner-safe tools under adult supervision;
presentations include only the learner's own writing or public-domain texts.
Privacy: keep learner work, names, photos, schedules, and grades in private
storage; nothing learner-identifying enters the repository.

## 9. Accessibility supports

Read-aloud and chunked text, pre-taught vocabulary, outline frames,
speech-to-text or adult-scribed options, extra planning time, and rubric
transparency (criterion bands stated before the task). Oral, drawing, and
speech-to-text response modes remain available for checks. Media-analysis
units add text-only alternatives for every multimedia component and captioning
guidance for recorded speech. Supports are differentiated per learner need,
never optional enrichment alone.

## 10. Gaps and paths for future units

The track starts from skeleton libraries: nothing in the legacy library is a
taught lesson, and no answer keys or diagnostic exist. U01–U08 build
instruction new. Largest new builds: the U02 poetry craft sequence
(sonnet/sonnet-structure investigation, POV contrast), the U04 grammar sequence
(clauses, sentence types, misplaced/dangling modifiers), the U06 argument
sequence (counterclaims, credible-source evaluation), and the U07 research
sequence (source credibility, standard citation format). The grade-7 quizzes'
assumed guide section headings ("Part 1", "Sections 6 through 10") must be
verified against the actual resource guides during the unit builds — the
relative links resolve, but the section names may not match. R00 will reuse
each unit's formative checks; nothing in the legacy library can supply the
diagnostic because no diagnostic exists.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Close reading: theme and interacting story elements; U02 Literary
perspective, figurative language, and poetry; U03 Informational: structure,
rhetoric, and argument evaluation; U04 Grammar: clauses, sentence structure,
and vocabulary; U05 Narrative craft: scene, dialogue, and revision; U06
Argument writing: counterclaims, evidence, and reasoning (absorbs the revised
argument-paragraph and claim-evidence-commentary assignments); U07 Research:
source credibility, paraphrase, and synthesis; U08 Speaking, listening, media
analysis, and portfolio revision (absorbs the revised response-log and trailer
templates); R00 diagnostic, midyear/final review, cumulative assessment and
keys, plus the coherence/accessibility/sources/image audit.

## 12. Verification record

- Existing-file inventory re-audited 2026-10-05 against `origin/main`
  (commit `2c43d24`): 18 Markdown files, all reviewed in §1; no inaccurate or
  inappropriate content found. Answer-key gap: all eight quizzes are blank
  with no keys anywhere in the track.
- Standards codes and descriptions verified 2026-10-05 against the published
  Common Core State Standards for English Language Arts
  (thecorestandards.org/ELA-Literacy/): RL.7.1–7.7, RL.7.9, RL.7.10;
  RI.7.1–7.10; SL.7.1–7.6; and the grade-7 Language conventions/vocabulary
  codes L.7.1–7.6 and Writing codes W.7.1–W.7.10 via the published standard
  wording cross-checked against an independent grade-7 CCSS checklist.
  RL.7.8 does not exist in the framework and is not cited. Framework used as
  subject reference only; no claim of state adoption or accreditation.
- Resource decisions checked 2026-10-05 against the
  `origin/curriculum/expansion-plan` guides and `main` resource guides:
  parts-of-speech, sentence-structure, literary-terms, and great-books guides
  (all links from quizzes resolve to `resources/` on `main`), and the
  semester resource library (OWL items).
- `python3 scripts/validate-library.py` run before delivery (see delivery
  comment on issue #36); Markdown links checked; manifest updated with the new
  scope-and-sequence file.
