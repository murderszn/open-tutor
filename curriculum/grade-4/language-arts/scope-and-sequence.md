# Grade 4 Language Arts — Scope and Sequence

Audit section A00 of [issue #24](https://github.com/murderszn/open-tutor/issues/24).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-04 against `main` (commit `2c43d24`). All 21 Markdown files
from the issue's 2026-10-01 baseline were found and read in full (README, 11
assignments, 7 quizzes, 2 templates). No files added, removed, or renamed since
the baseline.

| Item | Location | Decision |
|---|---|---|
| Grade-4 hub page | `curriculum/grade-4/README.md` | **Revise** — add Language Arts audit status with link; keep the `math/`, `stem/`, `science/`, and `social-studies/` listings |
| Curriculum index | `curriculum/README.md` | **Revise** — grade-4 line gains "language arts" draft audit |
| Grade-4 language arts folder | `curriculum/grade-4/language-arts/` (21 Markdown files) | **Revised** — `README.md` rewritten as audit-driven subject index; `scope-and-sequence.md` added; all 20 content files read below, kept in place |
| Manifest | `curriculum/manifest.json` | **Update** — register `scope-and-sequence.md` as subject-index; bump counts |
| Same-grade math track (#22, audit delivered as draft PR #87, unmerged) | `curriculum/grade-4/math/` (PR head) | **Reference only** — session model (4 × ~35 min sessions/week) reused as pattern; no math content reused |
| Same-grade science track (#23, audit delivered as draft PR #88, unmerged) | `curriculum/grade-4/science/` (PR head) | **Reference only** — no content borrowed; Unit 07 research/note-taking skills may later coordinate with science observation recording, but no science content reused |
| Grade-3 language arts track (#20, audit merged) | `curriculum/grade-3/language-arts/` | **Reference for entry prerequisites only** — grade-3 end-of-year objectives define what this track assumes; no grade-3 lessons copied upward |
| Grade-5/7/8 language arts tracks (no audits yet) | `curriculum/grade-5/language-arts/`, etc. | **No reuse** — grade-band mismatch; keep as reference for where the track leads |
| Shared language-arts assignments | `assignments/language-arts/` (archetypal myths, *Scarlet Letter* archetypes, Harlem Renaissance poetry, Shakespeare overviews) | **No reuse** — high-school/college band |
| Repository datasets (CSV/JSON) | none language-related | **No reuse** — units will author original word sets, word lists, and clearly labeled practice data |

### Keep/revise decisions per existing file

All decisions verified by reading each file in full. "Keep" means the file is
grade-appropriate and stays; it does **not** mean the file is a complete
instructional resource — every assignment is a bare prompt with no teaching,
models, or answer key, which the units will supply.

| File(s) | Decision |
|---|---|
| `assignments/character-description.md` | **Keep** — grade-appropriate inference scaffold (two traits with action/dialogue evidence, explain how a character changes); needs a model text and taught lesson to be usable; feeds U01/U02 |
| `assignments/claim-evidence-commentary-lab.md` | **Keep** — solid evidence-paragraph routine (one claim, one source detail, explain what the detail shows); needs a taught model; feeds U01/U06 |
| `assignments/context-clues-word-detective.md` | **Keep** — standard vocabulary routine (guess from context, check dictionary, use in a sentence); would benefit from a worked example; feeds U01 |
| `assignments/main-idea-and-details.md` | **Keep** — matches informational reading; main-idea *teaching* is absent and must be authored; feeds U01/U03 |
| `assignments/opinion-writing-with-evidence.md` | **Keep** — correct opinion skeleton (opinion, reasons, examples, conclusion); needs modeled instruction; feeds U06 |
| `assignments/parts-of-speech-practice.md` | **Keep** — low-floor practice (label nouns/verbs/adjectives/pronouns in copied sentences, write original sentences); needs instruction first; feeds U04 |
| `assignments/reading-podcast-response-log.md` | **Keep** — good ongoing response routine (3 things learned, 2 new words, 1 question, short summary); feeds U01/U03 |
| `assignments/rhyme-poem-workshop.md` | **Keep** — age-appropriate poetry entry point (rhyme sets, 4-line poem, revise, read aloud); needs a model poem and rhyme instruction; feeds U08 |
| `assignments/sentence-parts-practice.md` | **Keep** — exactly grade-4 sentence work (underline subject/predicate, combine sentences with a conjunction); needs taught lessons on fragments/run-ons; feeds U04 |
| `assignments/source-evaluation.md` | **Keep** — good U03/U07 seed (identify author, evidence, satire/opinion/research; compare two reliable sources; separate evidence from unsupported assertions); ambitious for grade 4 as written — needs scaffolding |
| `templates/audiobook-trailers.md` | **Keep** — 20-second book-recommendation routine; feeds U08 presentations |
| `templates/video-reviews.md` | **Keep** — simple informational response (title, one drawn idea, two dictated sentences); feeds U03 |
| `quizzes/parts-of-speech-nouns-pronouns-verbs-quiz.md` | **Keep** — closest to on-grade of all eight quizzes (noun types, irregular plurals, pronoun forms, verb tenses; transitive/intransitive and present perfect are reasonable stretch); feeds U04 |
| `quizzes/great-books-ancient-stories-myths-shakespeare-quiz.md` | **Revise** — 10 multi-part essay items (Odyssey authorship, 6 gods + Roman names, 3–4-sentence tragedy summaries + famous quotes, sonnet form) are high-school-level stamina and depth; Q6 repeats the disputed "Shakespeare invented over 1,700 English words" claim (modern scholarship attributes far fewer); keep only the myths + Aesop-morals items; enrichment only, not core |
| `quizzes/great-books-classic-novels-poems-short-stories-quiz.md` | **Revise** — severe grade-band mismatch: *To Kill a Mockingbird* (racial violence, rape trial), *Animal Farm* (totalitarian allegory), and "The Tell-Tale Heart" (murder, dismemberment) are not age-9–10 material, and two of the named titles are still in copyright (not freely readable as the guide implies); rebuild around age-appropriate children's classics before any use |
| `quizzes/literary-terms-figurative-language-quiz.md` | **Revise** — factually sound but extended metaphor, symbolism, and constant original-generation demands (2+ original examples for nearly every term) make this a middle-school single sitting; split into two quizzes and reduce generation load; feeds U08 |
| `quizzes/literary-terms-story-elements-narrative-devices-quiz.md` | **Revise** — factually sound but 10 dense essay items are too many per sitting; keep plot/setting/character/POV basics as core, move dramatic irony, original-irony generation, and extended theme statements to enrichment; feeds U02 |
| `quizzes/parts-of-a-sentence-phrases-clauses-sentence-types-quiz.md` | **Revise** — participial and gerund phrases, noun clauses, and compound-complex sentences are high-school grammar; grade-4 instruction stops at simple and compound sentences with prepositional phrases; reduce to phrase vs. clause, prepositional phrases, sentence purposes, and fragment/run-on identification; feeds U04 |
| `quizzes/parts-of-a-sentence-subject-predicate-objects-quiz.md` | **Revise** — keep subject/predicate/objects (compound subjects, direct/indirect objects); move predicate nominative and predicate adjective to enrichment (typically grades 5–7); feeds U04 |
| `quizzes/parts-of-speech-adjectives-adverbs-prepositions-conjunctions-interjections-quiz.md` | **Revise** — drop correlative conjunctions (above band); the rest is usable; feeds U04 |

### Internal reference decisions

| Item | Decision |
|---|---|
| `resources/language_arts_parts_of_speech.md` | **Teacher-side only** — adult vocabulary reference behind U04 teacher guides; never assigned to the learner |
| `resources/language_arts_sentence_structure.md` | **Teacher-side only** — adult reference for sentence combining and fragments/run-ons (L.4.1.f); the guide's clause/phrase sections skew older and are not reused as learner text |
| `resources/language_arts_literary_terms.md` | **Teacher-side only** — grade-4 work names theme, character/setting/event in depth, first/third-person point of view, similes/metaphors, and verse/rhythm/meter (RL.4.2–6, L.4.5.a); not the guide's broader term set |
| `resources/language_arts_great_books_and_stories.md` | **Selective adult-side** — myths from diverse cultures and Aesop's fables are candidates for U02 read-alouds (RL.4.9), but only via original retellings or clearly public-domain sources; the guide's summaries and the high-school reading list are never assigned to the learner |
| Discovery shelf (`docs/curriculum-expansion/resource-map.md`) | Reading Rockets, ReadWriteThink, Purdue OWL, Library of Congress, PBS LearningMedia — **reuse via resource_finder**; every item opened and checked for grade-4 fit before use |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |

No existing file contained reproduced copyrighted text. Two factual/grade-band
problems were found: the disputed Shakespeare "1,700 invented words" quiz item,
and the age-inappropriate classic-novel/quiz texts noted above. Answer keys are
absent across the entire legacy library — a gap the unit sections and R00 will fill.

## 2. Prerequisites

Learners typically enter grade-4 language arts with the grade-3 language arts
track's end-of-year objectives (that track's audit is merged; its units are not
yet written):

- Decode: identify and use the meaning of the most common prefixes and
  derivational suffixes; decode words with common Latin suffixes and
  multisyllable words; read grade-appropriate irregularly spelled words.
  Fluency: read grade-level text with purpose and understanding — orally with
  accuracy, appropriate rate, and expression on successive readings — and use
  context to confirm or self-correct word recognition and understanding.
- Literature: ask and answer questions referring explicitly to the text;
  recount fables, folktales, and myths from diverse cultures and determine the
  central message; describe characters' traits, motivations, and feelings and
  explain how their actions contribute to the sequence of events; distinguish
  literal from nonliteral language; refer to chapter, scene, and stanza;
  distinguish their own point of view from the narrator's or characters';
  explain how illustrations contribute mood or emphasis; compare themes,
  settings, and plots of stories by the same author about the same or similar
  characters.
- Informational text: ask and answer questions referring explicitly to the
  text; determine the main idea, recount key details, and explain how they
  support it; describe relationships between events, ideas, or steps using
  time, sequence, and cause/effect language; use text features and search tools;
  distinguish their own point of view from the author's; describe logical
  connections between sentences and paragraphs; compare the most important
  points of two texts on the same topic.
- Writing: opinion pieces (opinion, reasons, linking words, conclusion),
  informative texts (topic, facts/details, linking words, conclusion), and
  narratives (situation, dialogue, temporal words, closure); plan, revise, and
  edit with peer and adult guidance; use technology with guidance; conduct
  short research projects — gather from provided sources, take brief notes,
  sort into categories; write routinely over short and extended time frames.
- Discussion: come prepared; follow rules; ask questions to check
  understanding, stay on topic, and link comments to others' remarks; explain
  own ideas in light of the discussion; determine main ideas from diverse
  media; report with facts and details; create audio recordings with visual
  displays; speak in complete sentences.
- Conventions: explain the function of nouns, pronouns, verbs, adjectives, and
  adverbs; form regular and irregular plurals and verb tenses; subject–verb and
  pronoun–antecedent agreement; comparative/superlative adjectives and adverbs;
  coordinating and subordinating conjunctions; simple, compound, and complex
  sentences. Capitalize titles; commas in addresses; commas and quotation marks
  in dialogue; possessives; spelling patterns and generalizations; beginning
  dictionaries. Choose words for effect; recognize spoken vs. written standard
  English.
- Vocabulary: sentence-level context; affixes on known words; known root
  words; glossaries and beginning dictionaries; real-life connections; shades
  of meaning among related words.

Grade 4 adds: combined morphology for unfamiliar multisyllabic words
(RF.4.3.a); Greek and Latin affixes and roots as meaning clues (L.4.4.b);
determining theme and summarizing (RL.4.2); describing character/setting/event
in depth with text details (RL.4.3); mythology allusions (RL.4.4); poem/drama
structural elements — verse, rhythm, meter (RL.4.5); first- vs. third-person
narration (RL.4.6); themes across cultures (RL.4.9); text structures —
chronology, comparison, cause/effect, problem/solution (RI.4.5); firsthand vs.
secondhand accounts (RI.4.6); integrating two texts (RI.4.9); opinion reasons
supported by facts and details (W.4.1.b); precise domain vocabulary and
concluding sections in explanatory writing (W.4.2.d–e); typing one page in a
single sitting (W.4.6); relative pronouns/adverbs, progressive tenses, modal
auxiliaries, prepositional phrases, adjective order (L.4.1.a–e); idioms,
adages, and proverbs (L.4.5.b).

The diagnostic weeks (Weeks 1–2) probe these through reading, talk, and short
writing; Unit 01 re-teaches morphology and multisyllable strategies explicitly
rather than assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year. Objectives mirror the track README.

1. Read unfamiliar multisyllabic words accurately using combined letter-sound
   knowledge, syllabication patterns, and morphology (roots and affixes); read
   grade-level prose and poetry orally with accuracy, appropriate rate, and
   expression on successive readings; and use context to confirm or self-correct
   word recognition and understanding (RF.4.3, RF.4.3.a, RF.4.4.a–c).
2. Clarify unknown and multiple-meaning words flexibly: context clues
   (definitions, examples, restatements), common grade-appropriate Greek and
   Latin affixes and roots, and print and digital dictionaries, glossaries, and
   thesauruses; explain simple similes and metaphors, common idioms, adages,
   and proverbs in context; acquire and use grade-appropriate academic and
   domain-specific words (L.4.4.a–c, L.4.5.a–c, L.4.6).
3. In literature: refer to details and examples to explain what the text says
   explicitly and draw inferences; determine a theme of a story, drama, or
   poem from details and summarize the text; describe a character, setting, or
   event in depth, drawing on specific details; compare and contrast the point
   of view from which different stories are narrated (first- vs. third-person);
   and compare the treatment of similar themes and topics in stories, myths,
   and traditional literature from different cultures (RL.4.1, RL.4.2, RL.4.3,
   RL.4.4, RL.4.6, RL.4.7, RL.4.9, RL.4.10).
4. In informational text: refer to details and examples to explain explicit
   meaning and draw inferences; determine the main idea, explain how key
   details support it, and summarize; explain events, procedures, ideas, or
   concepts — what happened and why — from specific information; describe
   overall text structures (chronology, comparison, cause/effect,
   problem/solution); explain how an author uses reasons and evidence to
   support points; and integrate information from two texts on the same topic
   to write or speak knowledgeably (RI.4.1–3, RI.4.5, RI.4.8, RI.4.9, RI.4.10).
5. Write narratives to develop real or imagined experiences: establish a
   situation, introduce a narrator and/or characters, organize a natural event
   sequence with transitional words, use dialogue and description with concrete
   words and sensory details, provide a sense of closure; produce writing
   appropriate to task, purpose, and audience; plan, revise, and edit with
   guidance (W.4.3.a–e, W.4.4, W.4.5, W.4.10).
6. Write opinion pieces on topics or texts: introduce the topic clearly, state
   an opinion, group related ideas in an organizational structure, provide
   reasons supported by facts and details, link opinion and reasons with
   transitional words and phrases, and provide a concluding statement; draw
   evidence from literary or informational texts to support analysis
   (W.4.1.a–d, W.4.9.a–b).
7. Conduct short research projects that build knowledge: recall information
   from experiences or gather it from print and digital sources, take notes,
   categorize information, and provide a list of sources; paraphrase rather
   than copy; write informative/explanatory texts that introduce a topic,
   group related information in paragraphs and sections with formatting,
   develop it with facts, definitions, concrete details, and quotations, use
   precise domain-specific vocabulary, and provide a concluding section; type a
   minimum of one page in a single sitting with guidance (W.4.2.a–e, W.4.6,
   W.4.7, W.4.8).
8. Use grade-4 conventions and speaking skills: relative pronouns (*who,
   whose, whom, which, that*) and relative adverbs (*where, when, why*);
   progressive verb tenses; modal auxiliaries (*can, may, must*); conventional
   adjective order; prepositional phrases; complete sentences — recognizing and
   correcting fragments and run-ons; frequently confused words (*to, too,
   two; there, their*); correct capitalization; commas and quotation marks for
   direct speech; commas before coordinating conjunctions in compound
   sentences; grade-appropriate spelling; choosing words and punctuation
   precisely and for effect; distinguishing formal from informal English.
   Engage in collaborative discussions prepared, follow rules and roles, pose
   and respond to specific questions, paraphrase across media, identify a
   speaker's reasons and evidence, and report in organized presentations with
   audio or visual displays (L.4.1.a–g, L.4.2.a–d, L.4.3.a–c; SL.4.1–6).
## 4. Standards crosswalk

Reference framework: **Common Core State Standards for English Language Arts**,
grade 4 strands, as published at
[thecorestandards.org/ELA-Literacy](https://www.thecorestandards.org/ELA-Literacy/)
(opened and verified 2026-10-04; no state adoption or accreditation claimed).
RF/4, RL/4, RI/4, W/4, SL/4, and L/4 strand pages were opened directly on
thecorestandards.org; entries the page extraction skipped (RF.4.4.a, SL.4.1.b,
W.4.1.b/d, L.4.1.c/e, L.4.2.a/c/d, L.4.3.a/b, L.4.5.b) were cross-checked
against independent CCSS reproductions (Connecticut State Dept. of Education
grade-4 unit materials, Mississippi and Maryland CCSS adoptions, NJ
Spotswood SD Literacy unit, district pacing guides). Descriptions below match
the official grade-4 standard text.

Two facts confirmed during verification: **RL.4.8 does not exist** in the
official framework (literature runs RL.4.1–4.7, 4.9, 4.10), and grade-4
Reading: Foundational Skills covers only RF.4.3 and RF.4.4 (RF.4.1–2 stop at
grade 1).

### Reading: Foundational Skills

| Code | Description |
|---|---|
| RF.4.3 | Know and apply grade-level phonics and word analysis skills in decoding words. |
| RF.4.3.a | Use combined knowledge of all letter-sound correspondences, syllabication patterns, and morphology (e.g., roots and affixes) to read accurately unfamiliar multisyllabic words in context and out of context. |
| RF.4.4 | Read with sufficient accuracy and fluency to support comprehension. |
| RF.4.4.a | Read grade-level text with purpose and understanding. |
| RF.4.4.b | Read grade-level prose and poetry orally with accuracy, appropriate rate, and expression on successive readings. |
| RF.4.4.c | Use context to confirm or self-correct word recognition and understanding, rereading as necessary. |

### Reading: Literature

| Code | Description |
|---|---|
| RL.4.1 | Refer to details and examples in a text when explaining what the text says explicitly and when drawing inferences from the text. |
| RL.4.2 | Determine a theme of a story, drama, or poem from details in the text; summarize the text. |
| RL.4.3 | Describe in depth a character, setting, or event in a story or drama, drawing on specific details in the text (e.g., a character's thoughts, words, or actions). |
| RL.4.4 | Determine the meaning of words and phrases as they are used in a text, including those that allude to significant characters found in mythology (e.g., *Herculean*). |
| RL.4.5 | Explain major differences between poems, drama, and prose, and refer to the structural elements of poems (e.g., verse, rhythm, meter) and drama (e.g., casts of characters, settings, descriptions, dialogue, stage directions) when writing or speaking about a text. |
| RL.4.6 | Compare and contrast the point of view from which different stories are narrated, including the difference between first- and third-person narrations. |
| RL.4.7 | Make connections between the text of a story or drama and a visual or oral presentation of the text, identifying where each version reflects specific descriptions and directions in the text. |
| RL.4.9 | Compare and contrast the treatment of similar themes and topics (e.g., opposition of good and evil) and patterns of events (e.g., the quest) in stories, myths, and traditional literature from different cultures. |
| RL.4.10 | By the end of the year, read and comprehend literature, including stories, dramas, and poetry, in the grades 4–5 text complexity band proficiently, with scaffolding as needed at the high end of the range. |

### Reading: Informational Text

| Code | Description |
|---|---|
| RI.4.1 | Refer to details and examples in a text when explaining what the text says explicitly and when drawing inferences from the text. |
| RI.4.2 | Determine the main idea of a text and explain how it is supported by key details; summarize the text. |
| RI.4.3 | Explain events, procedures, ideas, or concepts in a historical, scientific, or technical text, including what happened and why, based on specific information in the text. |
| RI.4.4 | Determine the meaning of general academic and domain-specific words or phrases in a text relevant to a *grade 4 topic or subject area*. |
| RI.4.5 | Describe the overall structure (e.g., chronology, comparison, cause/effect, problem/solution) of events, ideas, concepts, or information in a text or part of a text. |
| RI.4.6 | Compare and contrast a firsthand and secondhand account of the same event or topic; describe the differences in focus and the information provided. |
| RI.4.7 | Interpret information presented visually, orally, or quantitatively (e.g., in charts, graphs, diagrams, time lines, animations, or interactive elements on Web pages) and explain how the information contributes to an understanding of the text in which it appears. |
| RI.4.8 | Explain how an author uses reasons and evidence to support particular points in a text. |
| RI.4.9 | Integrate information from two texts on the same topic in order to write or speak about the subject knowledgeably. |
| RI.4.10 | By the end of year, read and comprehend informational texts, including history/social studies, science, and technical texts, in the grades 4–5 text complexity band proficiently, with scaffolding as needed at the high end of the range. |

### Writing

| Code | Description |
|---|---|
| W.4.1 | Write opinion pieces on topics or texts, supporting a point of view with reasons and information. |
| W.4.1.a | Introduce a topic or text clearly, state an opinion, and create an organizational structure in which related ideas are grouped to support the writer's purpose. |
| W.4.1.b | Provide reasons that are supported by facts and details. |
| W.4.1.c | Link opinion and reasons using words and phrases (e.g., *for instance*, *in order to*, *in addition*). |
| W.4.1.d | Provide a concluding statement or section related to the opinion presented. |
| W.4.2 | Write informative/explanatory texts to examine a topic and convey ideas and information clearly. |
| W.4.2.a | Introduce a topic clearly and group related information in paragraphs and sections; include formatting (e.g., headings), illustrations, and multimedia when useful to aiding comprehension. |
| W.4.2.b | Develop the topic with facts, definitions, concrete details, quotations, or other information and examples related to the topic. |
| W.4.2.c | Link ideas within categories of information using words and phrases (e.g., *another*, *for example*, *also*, *because*). |
| W.4.2.d | Use precise language and domain-specific vocabulary to inform about or explain the topic. |
| W.4.2.e | Provide a concluding statement or section related to the information or explanation presented. |
| W.4.3 | Write narratives to develop real or imagined experiences or events using effective technique, descriptive details, and clear event sequences. |
| W.4.3.a | Orient the reader by establishing a situation and introducing a narrator and/or characters; organize an event sequence that unfolds naturally. |
| W.4.3.b | Use dialogue and description to develop experiences and events or show the responses of characters to situations. |
| W.4.3.c | Use a variety of transitional words and phrases to manage the sequence of events. |
| W.4.3.d | Use concrete words and phrases and sensory details to convey experiences and events precisely. |
| W.4.3.e | Provide a sense of closure. |
| W.4.4 | Produce clear and coherent writing in which the development and organization are appropriate to task, purpose, and audience. (Grade-specific expectations for writing types are defined in standards 1–3 above.) |
| W.4.5 | With guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, and editing. (Editing for conventions should demonstrate command of Language standards 1–3 up to and including grade 4.) |
| W.4.6 | With some guidance and support from adults, use technology, including the Internet, to produce and publish writing as well as to interact and collaborate with others; demonstrate sufficient command of keyboarding skills to type a minimum of one page in a single sitting. |
| W.4.7 | Conduct short research projects that build knowledge through investigation of different aspects of a topic. |
| W.4.8 | Recall relevant information from experiences or gather relevant information from print and digital sources; take notes and categorize information, and provide a list of sources. |
| W.4.9 | Draw evidence from literary or informational texts to support analysis, reflection, and research. |
| W.4.9.a | Apply *grade 4 Reading standards* to literature (e.g., "Describe in depth a character, setting, or event in a story or drama, drawing on specific details in the text [e.g., a character's thoughts, words, or actions]"). |
| W.4.9.b | Apply *grade 4 Reading standards* to informational texts (e.g., "Explain how an author uses reasons and evidence to support particular points in a text"). |
| W.4.10 | Write routinely over extended time frames (time for research, reflection, and revision) and shorter time frames (a single sitting or a day or two) for a range of discipline-specific tasks, purposes, and audiences. |

### Speaking and Listening

| Code | Description |
|---|---|
| SL.4.1 | Engage effectively in a range of collaborative discussions (one-on-one, in groups, and teacher-led) with diverse partners on *grade 4 topics and texts*, building on others' ideas and expressing their own clearly. |
| SL.4.1.a | Come to discussions prepared, having read or studied required material; explicitly draw on that preparation and other information known about the topic to explore ideas under discussion. |
| SL.4.1.b | Follow agreed-upon rules for discussions and carry out assigned roles. |
| SL.4.1.c | Pose and respond to specific questions to clarify or follow up on information, and make comments that contribute to the discussion and link to the remarks of others. |
| SL.4.1.d | Review the key ideas expressed and explain their own ideas and understanding in light of the discussion. |
| SL.4.2 | Paraphrase portions of a text read aloud or information presented in diverse media and formats, including visually, quantitatively, and orally. |
| SL.4.3 | Identify the reasons and evidence a speaker provides to support particular points. |
| SL.4.4 | Report on a topic or text, tell a story, or recount an experience in an organized manner, using appropriate facts and relevant, descriptive details to support main ideas or themes; speak clearly at an understandable pace. |
| SL.4.5 | Add audio recordings and visual displays to presentations when appropriate to enhance the development of main ideas or themes. |
| SL.4.6 | Differentiate between contexts that call for formal English (e.g., presenting ideas) and situations where informal discourse is appropriate (e.g., small-group discussion); use formal English when appropriate to task and situation. |

### Language

| Code | Description |
|---|---|
| L.4.1 | Demonstrate command of the conventions of standard English grammar and usage when writing or speaking. |
| L.4.1.a | Use relative pronouns (*who, whose, whom, which, that*) and relative adverbs (*where, when, why*). |
| L.4.1.b | Form and use the progressive (e.g., *I was walking; I am walking; I will be walking*) verb tenses. |
| L.4.1.c | Use modal auxiliaries (e.g., *can, may, must*) to convey various conditions. |
| L.4.1.d | Order adjectives within sentences according to conventional patterns (e.g., *a small red bag* rather than *a red small bag*). |
| L.4.1.e | Form and use prepositional phrases. |
| L.4.1.f | Produce complete sentences, recognizing and correcting inappropriate fragments and run-ons.* |
| L.4.1.g | Correctly use frequently confused words (e.g., *to, too, two; there, their*).* |
| L.4.2 | Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing. |
| L.4.2.a | Use correct capitalization. |
| L.4.2.b | Use commas and quotation marks to mark direct speech and quotations from a text. |
| L.4.2.c | Use a comma before a coordinating conjunction in a compound sentence. |
| L.4.2.d | Spell grade-appropriate words correctly, consulting references as needed. |
| L.4.3 | Use knowledge of language and its conventions when writing, speaking, reading, or listening. |
| L.4.3.a | Choose words and phrases to convey ideas precisely.* |
| L.4.3.b | Choose punctuation for effect.* |
| L.4.3.c | Differentiate between contexts that call for formal English (e.g., presenting ideas) and situations where informal discourse is appropriate (e.g., small-group discussion). |
| L.4.4 | Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 4 reading and content, choosing flexibly from a range of strategies. |
| L.4.4.a | Use context (e.g., definitions, examples, or restatements in text) as a clue to the meaning of a word or phrase. |
| L.4.4.b | Use common, grade-appropriate Greek and Latin affixes and roots as clues to the meaning of a word (e.g., *telegraph, photograph, autograph*). |
| L.4.4.c | Consult reference materials (e.g., dictionaries, glossaries, thesauruses), both print and digital, to find the pronunciation and determine or clarify the precise meaning of key words and phrases. |
| L.4.5 | Demonstrate understanding of figurative language, word relationships, and nuances in word meanings. |
| L.4.5.a | Explain the meaning of simple similes and metaphors (e.g., *as pretty as a picture*) in context. |
| L.4.5.b | Recognize and explain the meaning of common idioms, adages, and proverbs. |
| L.4.5.c | Demonstrate understanding of words by relating them to their opposites (antonyms) and to words with similar but not identical meanings (synonyms). |
| L.4.6 | Acquire and use accurately grade-appropriate general academic and domain-specific words and phrases, including those that signal precise actions, emotions, or states of being (e.g., *quizzed, whined, stammered*) and that are basic to a particular topic (e.g., *wildlife, conservation,* and *endangered* when discussing animal preservation). |

\* Beginning in grade 4, skills and understandings that are particularly likely
to require continued attention in higher grades as they are applied to
increasingly sophisticated writing and speaking — marked with an asterisk (*)
in the official framework.
## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review
embedded in Unit 04, final review ×2) = 36 weeks. Session model: **4 sessions
per week, 30–35 minutes each** (16 sessions per unit). Session types rotate
across explicit lesson, guided practice, reading or writing practice, and
review — named per unit below. Grade-4 learners do independent written practice
(8–12 tasks) that the adult reviews the same day; oral, pointing, and drawing
response modes remain available for checks.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (word-study warm-ups, read-aloud
  turn-taking, writing-notebook habits, discussion norms, exit-check rituals)
  and baseline each objective's entry point.
- Sessions: read a grade-level passage and note accuracy/rate/expression;
  decode unfamiliar multisyllabic words aloud; use context and a Greek/Latin
  root to explain three words; retell a read-aloud with a theme guess; find the
  main idea of a short informational paragraph; write one opinion sentence with
  a reason; write one sequenced narrative event; join a 5-minute discussion
  following rules.
- No new instruction; record observations against the track objectives.

### Unit 01 — Reading evidence, inference, and vocabulary (Weeks 3–6)

- **Standards:** RL.4.1, RI.4.1; RF.4.3, RF.4.3.a, RF.4.4.a–c; L.4.4.a–c, L.4.6
- **Week 3 goal:** refer to details and examples when explaining explicit
  meaning; draw inferences from the text (RL.4.1, RI.4.1); morphology — roots
  and affixes to read unfamiliar multisyllabic words accurately in and out of
  context (RF.4.3.a).
- **Week 4 goal:** word-meaning strategies — context clues (definitions,
  examples, restatements) (L.4.4.a); common Greek and Latin affixes and roots
  as clues (L.4.4.b — *telegraph, photograph, autograph*).
- **Week 5 goal:** print and digital dictionaries, glossaries, thesauruses
  (L.4.4.c); acquire grade-appropriate academic and domain-specific words
  (L.4.6); grade-level text with purpose and understanding (RF.4.4.a).
- **Week 6:** review week — fluency: read prose and poetry orally with
  accuracy, appropriate rate, and expression on successive readings
  (RF.4.4.b); self-correct with context (RF.4.4.c); formative check.
- Sessions rotate: evidence-modeling lesson → inference/text-evidence practice
  → word-study practice → review game.
- Reuses (after taught lessons): `assignments/character-description.md`,
  `assignments/claim-evidence-commentary-lab.md`,
  `assignments/context-clues-word-detective.md`,
  `assignments/main-idea-and-details.md`,
  `assignments/reading-podcast-response-log.md`.

### Unit 02 — Literary theme, characters, setting, and point of view (Weeks 7–10)

- **Standards:** RL.4.1–4.7, RL.4.9, RL.4.10; L.4.6
- **Week 7 goal:** determine a theme from details in the text; summarize
  (RL.4.2); describe a character, setting, or event in depth, drawing on
  specific details — thoughts, words, actions (RL.4.3).
- **Week 8 goal:** words and phrases in context, including mythology allusions
  (RL.4.4); major differences between poems, drama, and prose; structural
  elements — verse, rhythm, meter; casts of characters, settings, descriptions,
  dialogue, stage directions (RL.4.5).
- **Week 9 goal:** compare and contrast first- and third-person narration
  (RL.4.6); connections between a story's text and a visual or oral
  presentation, identifying where each version reflects specific descriptions
  and directions (RL.4.7).
- **Week 10:** review week — compare the treatment of similar themes and
  topics (e.g., good vs. evil) and patterns of events (e.g., the quest) in
  stories, myths, and traditional literature from different cultures (RL.4.9);
  formative check.
- Sessions rotate: modeled read-aloud lesson → discussion-and-text-evidence
  practice → character/theme analysis practice → review.
- Reuses (revised): `quizzes/literary-terms-story-elements-narrative-devices-quiz.md`
  (halved volume; plot/setting/character/POV core items; dramatic irony and
  extended theme statements moved to enrichment).

### Unit 03 — Informational main ideas, structures, and source comparison (Weeks 11–14)

- **Standards:** RI.4.1–10; W.4.8; SL.4.3
- **Week 11 goal:** refer to details and examples for explicit meaning and
  inferences (RI.4.1); determine the main idea, explain how key details support
  it, summarize (RI.4.2); explain events, procedures, ideas, or concepts —
  what happened and why — from specific information (RI.4.3).
- **Week 12 goal:** academic and domain-specific words (RI.4.4); overall text
  structures — chronology, comparison, cause/effect, problem/solution (RI.4.5);
  firsthand vs. secondhand accounts of the same event or topic (RI.4.6).
- **Week 13 goal:** interpret visual/oral/quantitative information and explain
  how it supports understanding (RI.4.7); explain how an author uses reasons
  and evidence (RI.4.8); integrate information from two texts on the same topic
  (RI.4.9).
- **Week 14:** review week — gather information, take notes, categorize,
  provide a source list (W.4.8); identify the reasons and evidence a speaker
  provides (SL.4.3); formative check.
- Sessions rotate: informational read lesson → text-structure and illustration
  practice → question-and-evidence practice → review.
- Reuses (after taught lessons): `assignments/main-idea-and-details.md`,
  `assignments/reading-podcast-response-log.md`,
  `assignments/source-evaluation.md` (scaffolded), `templates/video-reviews.md`.

### Unit 04 — Grammar, sentence combining, punctuation, and spelling (Weeks 15–18)

- **Standards:** L.4.1.a–g; L.4.2.a–d; L.4.3.a–c; SL.4.6; W.4.5
- **Week 15 goal:** relative pronouns (*who, whose, whom, which, that*) and
  relative adverbs (*where, when, why*) (L.4.1.a); progressive verb tenses
  (L.4.1.b); modal auxiliaries (*can, may, must*) (L.4.1.c); prepositional
  phrases (L.4.1.e); conventional adjective order (L.4.1.d).
- **Week 16 goal:** complete sentences — recognize and correct fragments and
  run-ons (L.4.1.f); frequently confused words (*to, too, two; there,
  their*) (L.4.1.g); choose punctuation for effect (L.4.3.b).
- **Week 17 goal:** correct capitalization (L.4.2.a); commas and quotation
  marks for direct speech (L.4.2.b); comma before a coordinating conjunction in
  a compound sentence (L.4.2.c); spell grade-appropriate words, consulting
  references (L.4.2.d); choose words and phrases precisely (L.4.3.a); formal vs.
  informal English (L.4.3.c, SL.4.6).
- **Week 18:** midyear review (flexible) — cumulative reading, vocabulary, and
  conventions from Units 01–04; re-teach the highest-need objective; formative
  check.
- Sessions rotate: explicit grammar lesson → sentence-building practice →
  dictation and editing practice → review game.
- Reuses: `assignments/parts-of-speech-practice.md`,
  `assignments/sentence-parts-practice.md`,
  `quizzes/parts-of-speech-nouns-pronouns-verbs-quiz.md` (keep); revised
  `quizzes/parts-of-speech-adjectives-adverbs-prepositions-conjunctions-interjections-quiz.md`,
  `quizzes/parts-of-a-sentence-subject-predicate-objects-quiz.md`,
  `quizzes/parts-of-a-sentence-phrases-clauses-sentence-types-quiz.md`.

### Unit 05 — Narrative craft: description, dialogue, and revision (Weeks 19–22)

- **Standards:** W.4.3.a–e; W.4.4; W.4.5; W.4.10; L.4.2.b; L.4.3.a; RL.4.3
- **Week 19 goal:** establish a situation; introduce a narrator and/or
  characters; organize a natural event sequence (W.4.3.a); transitional words
  and phrases to manage the sequence (W.4.3.c).
- **Week 20 goal:** dialogue and description to develop experiences and show
  character responses (W.4.3.b); commas and quotation marks in dialogue
  (L.4.2.b); describe characters in depth with text details as a craft model
  (RL.4.3).
- **Week 21 goal:** concrete words and phrases, sensory details (W.4.3.d); a
  sense of closure (W.4.3.e); choose words precisely (L.4.3.a); plan, revise,
  and edit with peer and adult guidance (W.4.5).
- **Week 22:** review week — clear, coherent writing appropriate to task,
  purpose, and audience (W.4.4); routine writing over short and extended time
  frames (W.4.10); formative check.
- Sessions rotate: writing-model lesson → guided drafting practice →
  dialogue-and-revision practice → share circle.

### Unit 06 — Opinion writing: evidence, reasons, and organization (Weeks 23–26)

- **Standards:** W.4.1.a–d; W.4.4; W.4.5; W.4.9.a–b; W.4.10; RL.4.1, RI.4.1;
  SL.4.1.a–d
- **Week 23 goal:** introduce the topic or text clearly, state an opinion, and
  create an organizational structure grouping related ideas (W.4.1.a).
- **Week 24 goal:** reasons supported by facts and details (W.4.1.b); draw
  evidence from literary and informational texts (W.4.9.a–b; RL.4.1, RI.4.1).
- **Week 25 goal:** link opinion and reasons — *for instance, in order to, in
  addition* (W.4.1.c); a concluding statement or section (W.4.1.d); develop
  and strengthen writing by planning, revising, and editing (W.4.5).
- **Week 26:** review week — test reasons in prepared discussions (SL.4.1.a–d);
  formative check.
- Sessions rotate: opinion-model lesson → reason-gathering practice →
  drafting practice → share-and-revise.
- Reuses (after taught lessons): `assignments/opinion-writing-with-evidence.md`,
  `assignments/claim-evidence-commentary-lab.md`.

### Unit 07 — Research notes, paraphrase, and explanatory writing (Weeks 27–30)

- **Standards:** W.4.2.a–e; W.4.4; W.4.6; W.4.7; W.4.8; W.4.10; RI.4.5, RI.4.7,
  RI.4.9; L.4.4.c; SL.4.2
- **Week 27 goal:** short research projects that build knowledge (W.4.7);
  recall or gather information from print and digital sources, take notes,
  categorize information, list sources (W.4.8); paraphrase practice — say it in
  your own words; consult dictionaries for precise meaning (L.4.4.c).
- **Week 28 goal:** introduce a topic; group related information in paragraphs
  and sections; formatting, illustrations, multimedia (W.4.2.a); develop with
  facts, definitions, concrete details, quotations, examples (W.4.2.b); read
  text structures to plan the report's organization (RI.4.5).
- **Week 29 goal:** link ideas within categories — *another, for example,
  also, because* (W.4.2.c); precise language and domain-specific vocabulary
  (W.4.2.d); a concluding statement or section (W.4.2.e); writing appropriate
  to task, purpose, and audience (W.4.4).
- **Week 30:** review week — use technology to produce and publish; keyboard
  a minimum of one page in a single sitting with guidance (W.4.6); paraphrase
  portions of text read aloud or information in diverse media (SL.4.2);
  formative check.
- Sessions rotate: research lesson → note-taking and sorting practice →
  explanatory drafting practice → review and share.
- Reuses (scaffolded): `assignments/source-evaluation.md`.

### Unit 08 — Poetry, figurative language, presentations, and portfolio (Weeks 31–34)

- **Standards:** RL.4.4, RL.4.5, RL.4.10; RF.4.4.b; L.4.5.a–c; SL.4.1.a–d,
  SL.4.2–6; W.4.4, W.4.6; RI.4.10
- **Week 31 goal:** verse, rhythm, meter in poems (RL.4.5); simple similes and
  metaphors in context (L.4.5.a); common idioms, adages, and proverbs (L.4.5.b);
  antonyms and synonyms (L.4.5.c); mythology allusions (RL.4.4).
- **Week 32 goal:** discussions — prepared, rules and roles, specific
  questions, link comments to others, review key ideas (SL.4.1.a–d); paraphrase
  from diverse media (SL.4.2); identify a speaker's reasons and evidence
  (SL.4.3).
- **Week 33 goal:** report, tell, or recount with facts and details at an
  understandable pace (SL.4.4); add audio recordings and visual displays
  (SL.4.5); formal English for presentations (SL.4.6); assemble the revised
  reading–writing portfolio; produce and publish with technology (W.4.6).
- **Week 34:** review week — portfolio share of revised reading and writing;
  read literature and informational texts in the grades 4–5 complexity band
  proficiently (RL.4.10, RI.4.10); formative check.
- Sessions rotate: poetry/discussion lesson → speaking practice →
  recording-and-portfolio practice → review and share.
- Reuses: `assignments/rhyme-poem-workshop.md`,
  `templates/audiobook-trailers.md`; revised
  `quizzes/literary-terms-figurative-language-quiz.md` (split in two);
  `quizzes/great-books-ancient-stories-myths-shakespeare-quiz.md` myths/Aesop
  items as enrichment only.

### Weeks 35–36 — Final review (flexible)

- Cumulative tasks across all eight objectives — word-analysis games, read-aloud
  and retell, informational evidence hunt, convention editing pass, writing
  portfolio revision, discussion and recording showcase; re-teach where evidence
  shows gaps; final observational assessment and keys (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with
context-clue review, Unit 04 with the text-evidence routine, Unit 06 with
sentence combining for opinion drafting, Unit 07 with paraphrase review).
Midyear (Week 18, inside Unit 04) and final (Weeks 35–36) weeks are full-track
reviews. Formative checks are observed, oral, drawn, or short written tasks
(8–12 items) the adult reviews the same day; each unit's teacher guide
specifies what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every
  unit's Resource Pack (queries, verified videos/search links, references,
  task mapping).
- `resources/language_arts_parts_of_speech.md`,
  `resources/language_arts_sentence_structure.md`,
  `resources/language_arts_literary_terms.md` — adult vocabulary references
  only; keep grammar terminology accurate in teacher guides. Do not assign to
  the learner.
- `resources/language_arts_great_books_and_stories.md` — myths from diverse
  cultures and Aesop's fables as public-domain read-aloud candidates for U02
  (RL.4.9); myths require original retellings or clearly public-domain sources.
  Do not reproduce the guide's summaries as learner text, and never assign the
  high-school reading list to grade-4 learners.
- Greek/Latin root cards and word-meaning strategy cards will be created once
  in Unit 01 and reused; do not duplicate per unit.
- The revised legacy prompts (assignments) and quizzes serve as practice items
  only — each unit teaches with original passages and models first.
- Same-grade math/science tracks and grades 5–8 language arts are **not**
  reused for grade-4 instruction (grade-band mismatch).

## 8. Safe materials

Household or dollar-store supplies: notebooks and pencils, word and affix
cards, syllable-sort trays, drawing paper and crayons, library books and
adult-made original passages, beginning dictionaries (print), pocket chart,
audio recorder (phone or simple device), timer. No sharp tools; adult
supervises small parts in shared settings. Read-aloud and research selections
previewed by the adult for age suitability and advertising-free access;
research sources are adult-selected print or digital pages, never open web
searching by the learner. Texts depicting violence, prejudice, or mature themes
(the legacy great-books quizzes' *To Kill a Mockingbird*, *Animal Farm*, and
"The Tell-Tale Heart") are excluded from grade-4 instruction until rebuilt or
moved to enrichment for older learners.

## 9. Accessibility supports

- Oral, pointing, and drawing response modes for all checks; adult scribes
  dictated writing when needed; independent written practice (8–12 tasks)
  reviewed the same day.
- Large-print, high-contrast word and affix cards; textured/tactile letters
  for low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table
  and a floor-play variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual word walls with root families; home-language labels welcomed
  alongside English.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue.
- Hearing support: face the learner when modeling sounds; visual syllable and
  mouth-shape cues supplement auditory discrimination.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #24.
- No grade-4 reading passages, read-aloud sets, original model paragraphs, or
  note-taking/paraphrase models exist; units will author original passages and
  clearly labeled public-domain texts (myths via original retellings; Aesop's
  fables for U02) with named fictional practice data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- A shared grade-4 Greek/Latin root-card and word-meaning strategy-card asset
  set should be created once (Unit 01) and reused across units rather than
  regenerated per unit.
- The seven quizzes marked **Revise** must be rebuilt or split before any unit
  uses them; answer keys must be authored for every reused item (none exist
  today).

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Reading evidence, inference, and vocabulary; U02 Literary theme,
characters, setting, and point of view; U03 Informational main ideas,
structures, and source comparison; U04 Grammar, sentence combining,
punctuation, and spelling; U05 Narrative craft: description, dialogue, and
revision; U06 Opinion writing: evidence, reasons, and organization; U07
Research notes, paraphrase, and explanatory writing; U08 Poetry, figurative
language, presentations, and portfolio; R00 diagnostic, midyear/final review,
and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #24 body, comments, and label state re-read 2026-10-04 before claiming;
  no competing claim (0 comments prior to the claim comment); no
  `curriculum-in-progress` claims active on any other queue issue at claim
  time; open worker PRs (#87, #88) were not touched.
- `curriculum/grade-4/language-arts/` re-inventoried on `main` @ `2c43d24`: 21
  Markdown files, matching the issue's 2026-10-01 baseline (README, 11
  assignments, 7 quizzes, 2 templates); every file read in full for
  keep/revise decisions.
- Standards codes/descriptions verified against the Common Core ELA framework
  2026-10-04 (thecorestandards.org/ELA-Literacy RF/4, RL/4, RI/4, W/4, SL/4,
  L/4 strand pages opened directly; entries the page extraction skipped were
  cross-checked against independent CCSS reproductions: Connecticut SDE
  grade-4 unit materials, Mississippi/Maryland CCSS adoptions, NJ Spotswood SD
  Literacy unit, district pacing guides) — no state adoption, accreditation,
  or alignment certification claimed. Confirmed during verification: RL.4.8
  does not exist in the official framework, and grade-4 Reading: Foundational
  Skills covers only RF.4.3 and RF.4.4.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; language-arts guides are teacher-side only. The eight unit
  objectives map onto the issue's U01–U08 checklist order, kept as the
  prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
