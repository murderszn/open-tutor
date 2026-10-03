# Grade 3 Language Arts — Scope and Sequence

Audit section A00 of [issue #20](https://github.com/murderszn/open-tutor/issues/20).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-03 against `main` (commit `247bf79`).

| Item | Location | Decision |
|---|---|---|
| Grade-3 hub page | `curriculum/grade-3/README.md` | **Revise** — updated to reflect the language arts track's audit status and link the new subject folder |
| Grade 3 language arts folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade language arts content | none (0 Markdown files under `curriculum/grade-3/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#18, audit delivered as draft PR #75) | `curriculum/grade-3/math/` | **Reference only** — session model (4 × ~30 min sessions/week) and same-day adult-reviewed independent written practice reused as pattern; no math content reused |
| Same-grade science track (#19, audit delivered as draft PR #76) | `curriculum/grade-3/science/` | **Reference only** — no content borrowed; Unit 07 research and note-taking skills may later coordinate with science observation recording, but no science content reused |
| Grade 2 language arts track (#16, audit delivered as draft PR #73) | `curriculum/grade-2/language-arts/` | **Reference for entry prerequisites only** — grade-2 end-of-year objectives (two-syllable decoding, fluency, story recounting, informational text features, three writing genres, discussion routines, grade-2 conventions) define what this track assumes; no grade-2 lessons copied upward |
| Grade 1 language arts track (#12, audit merged) | `curriculum/grade-1/language-arts/` | **Prerequisite reference two years back only** — no reuse |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/language-arts/` etc. | **No reuse for grade-3 instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| Shared language-arts assignments | `assignments/language-arts/` (Shakespeare, Scarlet Letter, Harlem Renaissance, myths) | **No reuse** — high-school/college band; far above grade 3 |
| `resources/language_arts_parts_of_speech.md` | student-friendly guide to the eight parts of speech | **Teacher-side only** — adult reads for accurate grammar vocabulary behind Unit 04 teacher guides (L.3.1.a asks learners to *explain functions* of nouns, pronouns, verbs, adjectives, adverbs); never assigned to the learner |
| `resources/language_arts_sentence_structure.md` | subject/predicate, clauses, complex sentences | **Teacher-side only** — adult reference for the simple/compound/complex sentence work in Unit 04 (L.3.1.i); the guide's examples skew older and are not reused as learner text |
| `resources/language_arts_literary_terms.md` | simile, metaphor, theme, point of view, etc. | **Teacher-side only** — grade-3 work names character traits, theme, point of view, and literal vs. nonliteral language (RL.3.2–4, RL.3.6, L.3.5.a), not the guide's broader literary-term set |
| `resources/language_arts_great_books_and_stories.md` | classics guide incl. Aesop's fables and mythology | **Selective adult-side reuse** — Aesop's fables (public domain) are candidates for Unit 02 read-alouds and recounts (RL.3.2); myths from diverse cultures will need original retellings or clearly public-domain sources — never the guide's summaries as learner text |
| Repository datasets (CSV/JSON) | none language-related | **No reuse** — units will use original small word sets and word lists authored per unit |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |
| `resources/semester-resource-library.md` | shared resource shelf | **Inspect during unit sections** — external starting points only; each candidate link opened and assessed before recommendation |

No existing grade-3 language arts material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-3 language arts with (the grade-2 track's end-of-year objectives):

- Decode: long/short vowel distinction in regularly spelled one-syllable words; common vowel teams; regularly spelled two-syllable words with long vowels; common prefixes and suffixes; inconsistent but common spelling–sound correspondences; grade-appropriate irregularly spelled words
- Fluency: read grade-level text with purpose and understanding — orally with accuracy, appropriate rate, and expression — and self-correct with context
- Literature: who/what/where/when/why/how questions; recount stories (incl. fables and folktales from diverse cultures) with central message; characters' responses to events; story structure (beginning/ending); characters' points of view; illustrations and words together; compare versions of the same story
- Informational text: key-detail questions; main topic of multiparagraph text; connections between events, ideas, and procedures; grade-2 topic vocabulary; text features (captions, bold print, subheadings, glossaries, indexes, electronic menus, icons); main purpose; how images clarify; how reasons support points; compare two texts on the same topic
- Writing: opinion pieces (opinion, reasons, linking words, conclusion), informative texts (topic, facts/definitions, conclusion), narratives (elaborated events, actions/thoughts/feelings, temporal words, closure); revise and edit with guidance; digital tools with guidance; shared research; gather from provided sources
- Discussion: prepared, rules, linked comments, clarification questions; recount key ideas from media; questions to speakers; tell/recount with details in coherent sentences; audio recordings with visual displays; complete sentences
- Conventions: collective nouns; irregular plurals; reflexive pronouns; past tense of irregular verbs; adjectives/adverbs matched to what is modified; simple and compound sentences; capitalization (holidays, product names, geographic names); commas in letter greetings/closings; apostrophes for contractions and possessives; spelling patterns; beginning dictionaries
- Vocabulary: sentence-level context; prefixes on known words; root words; compound-word parts; glossaries and dictionaries; real-life connections; shades of meaning among related verbs and adjectives

The diagnostic weeks (Weeks 1–2) verify these — especially multisyllable decoding,
fluency rate, and the three writing genres; Unit 01 re-teaches morphology and
multisyllable strategies rather than assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Decode grade-level words: identify and use the meaning of the most common
   prefixes and derivational suffixes; decode words with common Latin suffixes;
   decode multisyllable words; read grade-appropriate irregularly spelled words.
2. Read grade-level text with purpose and understanding — orally with accuracy,
   appropriate rate, and expression on successive readings — and use context to
   confirm or self-correct word recognition and understanding.
3. In stories: ask and answer questions referring explicitly to the text; recount
   fables, folktales, and myths from diverse cultures, determine the central
   message, lesson, or moral, and explain how key details convey it; describe
   characters (traits, motivations, feelings) and explain how their actions
   contribute to the sequence of events; distinguish literal from nonliteral
   language; refer to parts of stories, dramas, and poems with chapter, scene,
   and stanza; distinguish their own point of view from the narrator's or
   characters'; explain how illustrations contribute mood or emphasis; compare
   and contrast themes, settings, and plots of stories by the same author about
   the same or similar characters.
4. In informational text: ask and answer questions referring explicitly to the
   text; determine the main idea, recount key details, and explain how they
   support it; describe relationships between historical events, scientific
   ideas, or steps in technical procedures using time, sequence, and
   cause/effect language; determine the meaning of grade-3 academic and
   domain-specific words; use text features and search tools to locate
   information efficiently; distinguish their own point of view from the
   author's; use illustrations (maps, photographs) with words to demonstrate
   understanding; describe the logical connection between sentences and
   paragraphs; compare and contrast the most important points and key details
   of two texts on the same topic.
5. Write opinion pieces (introduce the topic or text, state an opinion, create
   an organizational structure that lists reasons, use linking words, provide a
   conclusion), informative/explanatory texts (introduce a topic and group
   related information, develop with facts, definitions, and details, use
   linking words, provide a conclusion), and narratives (establish a situation
   and introduce a narrator and/or characters, organize a natural event
   sequence, use dialogue and descriptions of actions, thoughts, and feelings,
   use temporal words, provide closure); plan, revise, and edit with peer and
   adult guidance; use technology to produce and publish writing; conduct short
   research projects; recall information from experiences or gather information
   from print and digital sources, take brief notes, and sort evidence into
   provided categories; write routinely over extended and shorter time frames.
6. Join discussions: come prepared; follow agreed-upon rules; ask questions to
   check understanding, stay on topic, and link comments to others' remarks;
   explain their own ideas in light of the discussion; determine main ideas and
   supporting details from diverse media; ask and answer questions about what a
   speaker says; report, tell, or recount with appropriate facts and relevant
   descriptive details at an understandable pace; create engaging audio
   recordings of stories or poems and add visual displays; speak in complete
   sentences.
7. Use grade-3 language conventions: explain the function of nouns, pronouns,
   verbs, adjectives, and adverbs; form and use regular and irregular plural
   nouns; use abstract nouns; form and use regular and irregular verbs and
   simple verb tenses; ensure subject–verb and pronoun–antecedent agreement;
   form and use comparative and superlative adjectives and adverbs; use
   coordinating and subordinating conjunctions; produce simple, compound, and
   complex sentences. Capitalize appropriate words in titles; use commas in
   addresses; use commas and quotation marks in dialogue; form and use
   possessives; spell high-frequency and studied words and suffix additions
   conventionally; use spelling patterns and generalizations; consult beginning
   dictionaries. Choose words and phrases for effect; recognize differences
   between spoken and written standard English.
8. Clarify word meanings with sentence-level context, affixes added to known
   words, known root words, and glossaries or beginning dictionaries; distinguish
   the literal and nonliteral meanings of words and phrases in context; identify
   real-life connections between words and their use; distinguish shades of
   meaning among related words describing states of mind or degrees of
   certainty; acquire and use grade-appropriate conversational, general
   academic, and domain-specific words and phrases, including spatial and
   temporal signals.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for English Language Arts**,
grade 3 strands, as published at
[thecorestandards.org/ELA-Literacy](https://www.thecorestandards.org/ELA-Literacy/)
(opened and verified 2026-10-03; no state adoption or accreditation claimed).
RF/3, RL/3, RI/3, W/3, SL/3, and L/3 strand pages were opened directly on
thecorestandards.org; entries the page extraction skipped were cross-checked
against district CCSS reproductions (Rogers Public Schools grade-3 pacing
guides, Ouachita River School District literacy units, CA Dept. of Education
standards map, CCSS ELA K–12 quick reference). Descriptions below match the
official grade-3 standard text.

Two codes do not exist in the official framework and are not cited: **RL.3.8**
and **W.3.9**. Grade-3 Reading: Foundational Skills covers only RF.3.3 and
RF.3.4 (RF.3.1–2 stop at grade 1).

### Reading: Foundational Skills

| Code | Description |
|---|---|
| RF.3.3 | Know and apply grade-level phonics and word analysis skills in decoding words. |
| RF.3.3.a | Identify and know the meaning of the most common prefixes and derivational suffixes. |
| RF.3.3.b | Decode words with common Latin suffixes. |
| RF.3.3.c | Decode multisyllable words. |
| RF.3.3.d | Read grade-appropriate irregularly spelled words. |
| RF.3.4 | Read with sufficient accuracy and fluency to support comprehension. |
| RF.3.4.a | Read grade-level text with purpose and understanding. |
| RF.3.4.b | Read grade-level prose and poetry orally with accuracy, appropriate rate, and expression on successive readings. |
| RF.3.4.c | Use context to confirm or self-correct word recognition and understanding, rereading as necessary. |

### Reading: Literature

| Code | Description |
|---|---|
| RL.3.1 | Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers. |
| RL.3.2 | Recount stories, including fables, folktales, and myths from diverse cultures; determine the central message, lesson, or moral and explain how it is conveyed through key details in the text. |
| RL.3.3 | Describe characters in a story (e.g., their traits, motivations, or feelings) and explain how their actions contribute to the sequence of events. |
| RL.3.4 | Determine the meaning of words and phrases as they are used in a text, distinguishing literal from nonliteral language. |
| RL.3.5 | Refer to parts of stories, dramas, and poems when writing or speaking about a text, using terms such as chapter, scene, and stanza; describe how each successive part builds on earlier sections. |
| RL.3.6 | Distinguish their own point of view from that of the narrator or those of the characters. |
| RL.3.7 | Explain how specific aspects of a text's illustrations contribute to what is conveyed by the words in a story (e.g., create mood, emphasize aspects of a character or setting). |
| RL.3.9 | Compare and contrast the themes, settings, and plots of stories written by the same author about the same or similar characters (e.g., in books from a series). |
| RL.3.10 | By the end of the year, read and comprehend literature, including stories, dramas, and poetry, at the high end of the grades 2–3 text complexity band independently and proficiently. |

### Reading: Informational Text

| Code | Description |
|---|---|
| RI.3.1 | Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers. |
| RI.3.2 | Determine the main idea of a text; recount the key details and explain how they support the main idea. |
| RI.3.3 | Describe the relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text, using language that pertains to time, sequence, and cause/effect. |
| RI.3.4 | Determine the meaning of general academic and domain-specific words and phrases in a text relevant to a grade 3 topic or subject area. |
| RI.3.5 | Use text features and search tools (e.g., key words, sidebars, hyperlinks) to locate information relevant to a given topic efficiently. |
| RI.3.6 | Distinguish their own point of view from that of the author of a text. |
| RI.3.7 | Use information gained from illustrations (e.g., maps, photographs) and the words in a text to demonstrate understanding of the text (e.g., where, when, why, and how key events occur). |
| RI.3.8 | Describe the logical connection between particular sentences and paragraphs in a text (e.g., comparison, cause/effect, first/second/third in a sequence). |
| RI.3.9 | Compare and contrast the most important points and key details presented in two texts on the same topic. |
| RI.3.10 | By the end of the year, read and comprehend informational texts, including history/social studies, science, and technical texts, at the high end of the grades 2–3 text complexity band independently and proficiently. |

### Writing

| Code | Description |
|---|---|
| W.3.1 | Write opinion pieces on topics or texts, supporting a point of view with reasons. |
| W.3.1.a | Introduce the topic or text they are writing about, state an opinion, and create an organizational structure that lists reasons. |
| W.3.1.b | Provide reasons that support the opinion. |
| W.3.1.c | Use linking words and phrases (e.g., *because, therefore, since, for example*) to connect opinion and reasons. |
| W.3.1.d | Provide a concluding statement or section. |
| W.3.2 | Write informative/explanatory texts to examine a topic and convey ideas and information clearly. |
| W.3.2.a | Introduce a topic and group related information together; include illustrations when useful to aiding comprehension. |
| W.3.2.b | Develop the topic with facts, definitions, and details. |
| W.3.2.c | Use linking words and phrases (e.g., *also, another, and, more, but*) to connect ideas within categories of information. |
| W.3.2.d | Provide a concluding statement or section. |
| W.3.3 | Write narratives to develop real or imagined experiences or events using effective technique, descriptive details, and clear event sequences. |
| W.3.3.a | Establish a situation and introduce a narrator and/or characters; organize an event sequence that unfolds naturally. |
| W.3.3.b | Use dialogue and descriptions of actions, thoughts, and feelings to develop experiences and events or show the response of characters to situations. |
| W.3.3.c | Use temporal words and phrases to signal event order. |
| W.3.3.d | Provide a sense of closure. |
| W.3.4 | With guidance and support from adults, produce writing in which the development and organization are appropriate to task and purpose. |
| W.3.5 | With guidance and support from peers and adults, develop and strengthen writing as needed by planning, revising, and editing. |
| W.3.6 | With guidance and support from adults, use technology to produce and publish writing (using keyboarding skills) as well as to interact and collaborate with others. |
| W.3.7 | Conduct short research projects that build knowledge about a topic. |
| W.3.8 | Recall information from experiences or gather information from print and digital sources; take brief notes on sources and sort evidence into provided categories. |
| W.3.10 | Write routinely over extended time frames (time for research, reflection, and revision) and shorter time frames (a single sitting or a day or two) for a range of discipline-specific tasks, purposes, and audiences. |

### Speaking and Listening

| Code | Description |
|---|---|
| SL.3.1 | Engage effectively in a range of collaborative discussions (one-on-one, in groups, and teacher-led) with diverse partners on grade 3 topics and texts, building on others' ideas and expressing their own clearly. |
| SL.3.1.a | Come to discussions prepared, having read or studied required material; explicitly draw on that preparation and other information known about the topic to explore ideas under discussion. |
| SL.3.1.b | Follow agreed-upon rules for discussions (e.g., gaining the floor in respectful ways, listening to others with care, speaking one at a time about the topics and texts under discussion). |
| SL.3.1.c | Ask questions to check understanding of information presented, stay on topic, and link their comments to the remarks of others. |
| SL.3.1.d | Explain their own ideas and understanding in light of the discussion. |
| SL.3.2 | Determine the main ideas and supporting details of a text read aloud or information presented in diverse media and formats, including visually, quantitatively, and orally. |
| SL.3.3 | Ask and answer questions about information from a speaker, offering appropriate elaboration and detail. |
| SL.3.4 | Report on a topic or text, tell a story, or recount an experience with appropriate facts and relevant, descriptive details, speaking clearly at an understandable pace. |
| SL.3.5 | Create engaging audio recordings of stories or poems that demonstrate fluid reading at an understandable pace; add visual displays when appropriate to emphasize or enhance certain facts or details. |
| SL.3.6 | Speak in complete sentences when appropriate to task and situation in order to provide requested detail or clarification. (See grade 3 Language standards 1 and 3 for specific expectations.) |

### Language

| Code | Description |
|---|---|
| L.3.1 | Demonstrate command of the conventions of standard English grammar and usage when writing or speaking. |
| L.3.1.a | Explain the function of nouns, pronouns, verbs, adjectives, and adverbs in general and their functions in particular sentences. |
| L.3.1.b | Form and use regular and irregular plural nouns. |
| L.3.1.c | Use abstract nouns (e.g., *childhood*). |
| L.3.1.d | Form and use regular and irregular verbs. |
| L.3.1.e | Form and use the simple (e.g., *I walked; I walk; I will walk*) verb tenses. |
| L.3.1.f | Ensure subject-verb and pronoun-antecedent agreement. |
| L.3.1.g | Form and use comparative and superlative adjectives and adverbs, and choose between them depending on what is to be modified. |
| L.3.1.h | Use coordinating and subordinating conjunctions. |
| L.3.1.i | Produce simple, compound, and complex sentences. |
| L.3.2 | Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing. |
| L.3.2.a | Capitalize appropriate words in titles. |
| L.3.2.b | Use commas in addresses. |
| L.3.2.c | Use commas and quotation marks in dialogue. |
| L.3.2.d | Form and use possessives. |
| L.3.2.e | Use conventional spelling for high-frequency and other studied words and for adding suffixes to base words (e.g., *sitting, smiled, cries, happiness*). |
| L.3.2.f | Use spelling patterns and generalizations (e.g., *word families, position-based spellings, syllable patterns, ending rules, meaningful word parts*) in writing words. |
| L.3.2.g | Consult reference materials, including beginning dictionaries, as needed to check and correct spellings. |
| L.3.3 | Use knowledge of language and its conventions when writing, speaking, reading, or listening. |
| L.3.3.a | Choose words and phrases for effect. |
| L.3.3.b | Recognize and observe differences between the conventions of spoken and written standard English. |
| L.3.4 | Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 3 reading and content, choosing flexibly from a range of strategies. |
| L.3.4.a | Use sentence-level context as a clue to the meaning of a word or phrase. |
| L.3.4.b | Determine the meaning of the new word formed when a known affix is added to a known word (e.g., *agreeable/disagreeable, comfortable/uncomfortable, care/careless, heat/preheat*). |
| L.3.4.c | Use a known root word as a clue to the meaning of an unknown word with the same root (e.g., *company, companion*). |
| L.3.4.d | Use glossaries or beginning dictionaries, both print and digital, to determine or clarify the precise meaning of key words and phrases. |
| L.3.5 | Demonstrate understanding of figurative language, word relationships and nuances in word meanings. |
| L.3.5.a | Distinguish the literal and nonliteral meanings of words and phrases in context (e.g., *take steps*). |
| L.3.5.b | Identify real-life connections between words and their use (e.g., describe people who are *friendly* or *helpful*). |
| L.3.5.c | Distinguish shades of meaning among related words that describe states of mind or degrees of certainty (e.g., *knew, believed, suspected, heard, wondered*). |
| L.3.6 | Acquire and use accurately grade-appropriate conversational, general academic, and domain-specific words and phrases, including those that signal spatial and temporal relationships (e.g., *After dinner that night we went looking for them*). |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×2) = 36 weeks. Session model: **4 sessions per week, 25–30
minutes each** (16 sessions per unit). Session types rotate across explicit
lesson, word-work or writing practice, reading practice, and review — named per
unit below. Grade-3 learners do independent written practice (8–12 tasks) that
the adult reviews the same day; oral, pointing, and drawing response modes
remain available for checks.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (word-study warm-ups, card/sort trays,
  read-aloud turn-taking, writing-notebook habits, exit-check rituals) and
  baseline each objective's entry point.
- Sessions: read a grade-level passage and note accuracy/rate; decode
  multisyllable words aloud; explain three affixes; retell a read-aloud with a
  lesson; find the main idea of a short informational paragraph; write one
  opinion sentence with a reason; write one sequenced narrative event; join a
  5-minute discussion following rules.
- No new instruction; record observations against the track objectives.

### Unit 01 — Word analysis, morphology, vocabulary, and fluency (Weeks 3–6)

- **Standards:** RF.3.3, RF.3.3.a–d; RF.3.4, RF.3.4.a–c; L.3.4.a–d; L.3.6
- **Week 3 goal:** multisyllable decoding (RF.3.3.c) — break words into
  syllables using vowel-sound knowledge; common prefixes *un-*, *re-*, *dis-*,
  *pre-* — identify and use their meanings (RF.3.3.a).
- **Week 4 goal:** common Latin suffixes *-tion*, *-sion*, *-able*, *-ible*,
  *-ment* (RF.3.3.b); derivational suffixes *-ful*, *-less*, *-ness* and how
  they change meaning (RF.3.3.a).
- **Week 5 goal:** word-meaning strategies — sentence-level context, affixes on
  known words, known root words (L.3.4.a–c); glossaries and beginning
  dictionaries, print and digital (L.3.4.d); grade-appropriate irregularly
  spelled words (RF.3.3.d).
- **Week 6:** review week — fluency with purpose: read grade-level prose and
  poetry orally with accuracy, appropriate rate, and expression (RF.3.4.a–b);
  self-correct with context (RF.3.4.c); formative check.
- Sessions rotate: explicit word-analysis lesson → affix/syllable sort and
  word-building practice → connected-reading fluency practice → review game.

### Unit 02 — Literary comprehension: character and theme (Weeks 7–10)

- **Standards:** RL.3.1, RL.3.2, RL.3.3, RL.3.4, RL.3.6, RL.3.7, RL.3.9,
  RL.3.10; L.3.5.a
- **Week 7 goal:** ask and answer questions referring explicitly to the text
  (RL.3.1); recount fables, folktales, and myths from diverse cultures
  (RL.3.2, first pass).
- **Week 8 goal:** determine the central message, lesson, or moral and explain
  how key details convey it (RL.3.2); describe characters' traits, motivations,
  and feelings and explain how their actions contribute to the sequence of
  events (RL.3.3).
- **Week 9 goal:** literal vs. nonliteral language in stories (RL.3.4,
  L.3.5.a); own point of view vs. narrator's or characters' (RL.3.6);
  illustrations contributing mood or emphasis (RL.3.7).
- **Week 10:** review week — compare and contrast themes, settings, and plots
  of stories by the same author about the same or similar characters (RL.3.9);
  formative check.
- Sessions rotate: modeled read-aloud lesson → discussion-and-text-evidence
  practice → character/theme analysis practice → review.

### Unit 03 — Informational text: main idea, structures, and evidence (Weeks 11–14)

- **Standards:** RI.3.1–10
- **Week 11 goal:** ask and answer questions referring explicitly to the text
  (RI.3.1); determine the main idea; recount key details and explain how they
  support it (RI.3.2).
- **Week 12 goal:** relationships between historical events, scientific ideas,
  or steps in procedures — time, sequence, cause/effect language (RI.3.3);
  grade-3 academic and domain-specific vocabulary (RI.3.4); text features and
  search tools to locate information efficiently (RI.3.5).
- **Week 13 goal:** own point of view vs. the author's (RI.3.6);
  illustrations (maps, photographs) with words to demonstrate understanding
  (RI.3.7); logical connections between sentences and paragraphs —
  comparison, cause/effect, sequence (RI.3.8).
- **Week 14:** review week — compare and contrast the most important points
  and key details of two texts on the same topic (RI.3.9); formative check.
- Sessions rotate: informational read lesson → text-feature and illustration
  practice → question-and-evidence practice → review.

### Unit 04 — Sentence structure, grammar, and conventions (Weeks 15–18)

- **Standards:** L.3.1.a–i; L.3.2.a–g; L.3.3.a–b; SL.3.6
- **Week 15 goal:** parts-of-speech functions — nouns, pronouns, verbs,
  adjectives, adverbs in sentences (L.3.1.a); regular and irregular plural
  nouns (L.3.1.b); abstract nouns (L.3.1.c); regular and irregular verbs and
  simple tenses (L.3.1.d–e); subject–verb and pronoun–antecedent agreement
  (L.3.1.f).
- **Week 16 goal:** comparative and superlative adjectives and adverbs
  (L.3.1.g); coordinating and subordinating conjunctions (L.3.1.h); simple,
  compound, and complex sentences (L.3.1.i); choosing words and phrases for
  effect (L.3.3.a); spoken vs. written conventions (L.3.3.b).
- **Week 17 goal:** capitalization in titles (L.3.2.a); commas in addresses
  (L.3.2.b); commas and quotation marks in dialogue (L.3.2.c); possessives
  (L.3.2.d); conventional spelling of high-frequency and studied words and
  suffix additions (L.3.2.e); spelling patterns and generalizations (L.3.2.f);
  beginning dictionaries (L.3.2.g).
- **Week 18:** midyear review (flexible) — cumulative word analysis, reading,
  and conventions; speak in complete sentences to give detail or
  clarification (SL.3.6); re-teach the highest-need objective; formative
  check of Units 01–04.
- Sessions rotate: explicit grammar lesson → sentence-building practice →
  dictation and editing practice → review game.

### Unit 05 — Narrative writing: dialogue and revision (Weeks 19–22)

- **Standards:** W.3.3.a–d; W.3.5; W.3.10; L.3.2.c; L.3.3.a
- **Week 19 goal:** establish a situation; introduce a narrator and/or
  characters; organize an event sequence that unfolds naturally (W.3.3.a);
  temporal words and phrases to signal event order (W.3.3.c).
- **Week 20 goal:** dialogue and descriptions of actions, thoughts, and
  feelings to develop experiences and events (W.3.3.b); commas and quotation
  marks in dialogue (L.3.2.c).
- **Week 21 goal:** a sense of closure (W.3.3.d); choosing words and phrases
  for effect (L.3.3.a); plan, revise, and edit with peer and adult guidance
  (W.3.5).
- **Week 22:** review week — routine writing over short and extended time
  frames (W.3.10); formative check.
- Sessions rotate: writing-model lesson → guided drafting practice →
  dialogue-and-revision practice → share circle.

### Unit 06 — Opinion writing: reasons and linked evidence (Weeks 23–26)

- **Standards:** W.3.1.a–d; W.3.5; W.3.10; RL.3.1, RI.3.1
- **Week 23 goal:** introduce the topic or text, state an opinion, and create
  an organizational structure that lists reasons (W.3.1.a).
- **Week 24 goal:** reasons that support the opinion (W.3.1.b); refer
  explicitly to texts as the basis for reasons (RL.3.1, RI.3.1).
- **Week 25 goal:** linking words and phrases — *because, therefore, since,
  for example* — to connect opinion and reasons (W.3.1.c); a concluding
  statement or section (W.3.1.d).
- **Week 26:** review week — revise and edit with guidance (W.3.5);
  formative check.
- Sessions rotate: opinion-model lesson → reason-gathering practice →
  drafting practice → share-and-revise.

### Unit 07 — Research, explanatory writing, and source use (Weeks 27–30)

- **Standards:** W.3.2.a–d; W.3.4; W.3.6; W.3.7; W.3.8; W.3.10; RI.3.5
- **Week 27 goal:** short research project — build knowledge about a topic
  (W.3.7); gather information from print and digital sources, take brief
  notes, sort evidence into provided categories (W.3.8); text features and
  search tools to locate information (RI.3.5).
- **Week 28 goal:** introduce a topic and group related information together,
  with illustrations where useful (W.3.2.a); develop the topic with facts,
  definitions, and details (W.3.2.b).
- **Week 29 goal:** linking words — *also, another, and, more, but* — to
  connect ideas within categories (W.3.2.c); a concluding statement or
  section (W.3.2.d); writing appropriate to task and purpose (W.3.4).
- **Week 30:** review week — produce and publish writing with technology,
  using keyboarding skills (W.3.6); formative check.
- Sessions rotate: research lesson → note-taking and sorting practice →
  explanatory drafting practice → review and share.

### Unit 08 — Poetry, speaking, listening, and reading–writing portfolio (Weeks 31–34)

- **Standards:** RL.3.5; RF.3.4.b; SL.3.1.a–d, SL.3.2–5; W.3.4–6; L.3.5.b–c;
  RL.3.10, RI.3.10
- **Week 31 goal:** parts of poems — stanza; how each successive part builds
  on earlier sections (RL.3.5); shades of meaning among words for states of
  mind and degrees of certainty (L.3.5.c); real-life connections between
  words and their use (L.3.5.b).
- **Week 32 goal:** come to discussions prepared; follow rules; ask questions
  to check understanding, stay on topic, and link comments to others'
  remarks; explain own ideas in light of the discussion (SL.3.1.a–d);
  determine main ideas and supporting details from diverse media (SL.3.2);
  ask and answer questions about what a speaker says (SL.3.3).
- **Week 33 goal:** report, tell, or recount with facts and details at an
  understandable pace (SL.3.4); create engaging audio recordings of stories
  or poems; add visual displays (SL.3.5); assemble the revised reading–writing
  portfolio; produce and publish with technology (W.3.6).
- **Week 34:** review week — portfolio share of revised reading and writing;
  read literature and informational texts at the high end of the grades 2–3
  complexity band independently and proficiently (RL.3.10, RI.3.10);
  formative check.
- Sessions rotate: poetry/discussion lesson → speaking practice →
  recording-and-portfolio practice → review and share.

### Weeks 35–36 — Final review (flexible)

- Cumulative tasks across all eight objectives — word-analysis games, read-aloud
  and retell, informational evidence hunt, convention editing pass, writing
  portfolio revision, discussion and recording showcase; re-teach where evidence
  shows gaps; final observational assessment and keys (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with
multisyllable-word review, Unit 04 with the opinion-evidence routine, Unit 06
with dialogue punctuation). Midyear (Week 18) and final (Weeks 35–36) weeks are
full-track reviews. Formative checks are observed, oral, drawn, or short
written tasks (8–12 items) the adult reviews the same day; each unit's teacher
guide specifies what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/language_arts_parts_of_speech.md`,
  `resources/language_arts_sentence_structure.md`,
  `resources/language_arts_literary_terms.md` — adult vocabulary references
  only; keep grammar terminology accurate in teacher guides (note L.3.1.a asks
  learners to *explain* parts-of-speech functions — Unit 04 learner materials
  use the learner's own words, the guides use the reference vocabulary). Do not
  assign to the learner.
- `resources/language_arts_great_books_and_stories.md` — Aesop's fables as
  public-domain read-aloud candidates for Unit 02 (RL.3.2); myths from diverse
  cultures require original retellings or clearly public-domain sources. Do not
  reproduce the guide's summaries as learner text.
- Affix cards, syllable-sort sets, and word-meaning strategy cards will be
  created once in Unit 01 and reused; do not duplicate per unit.
- Same-grade math/science tracks and grades 4–8 language arts are **not**
  reused for grade-3 instruction (grade-band mismatch).

## 8. Safe materials

Household or dollar-store supplies: affix and word cards, syllable-sort trays,
notebooks and pencils, drawing paper and crayons, library books and adult-made
original passages, beginning dictionaries (print), pocket chart, audio recorder
(phone or simple device), timer. No sharp tools; adult supervises small parts in
shared settings. Read-aloud and research selections previewed by the adult for
age suitability and advertising-free access; research sources are
adult-selected print or digital pages, never open web searching by the learner.

## 9. Accessibility supports

- Oral, pointing, and drawing response modes for all checks; adult scribes
  dictated writing when needed; independent written practice (8–12 tasks)
  reviewed the same day.
- Large-print, high-contrast word and affix cards; textured/tactile letters for
  low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table and
  a floor-play variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual word walls with affix families; home-language labels welcomed
  alongside English.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue.
- Hearing support: face the learner when modeling sounds; visual syllable and
  mouth-shape cues supplement auditory discrimination.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #20.
- No grade-3-appropriate internal word lists, multisyllable word sets, or
  read-aloud sets exist; units will author original passages and clearly
  labeled public-domain texts (e.g., Aesop's fables for Unit 02; original
  retellings for myths from diverse cultures) with named fictional practice
  data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- A shared grade-3 affix-card/syllable-sort/strategy-card asset set should be
  created once (Unit 01) and reused across units rather than regenerated per
  unit.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Word analysis, morphology, vocabulary, and fluency; U02 Literary
comprehension: character and theme; U03 Informational text: main idea,
structures, and evidence; U04 Sentence structure, grammar, and conventions; U05
Narrative writing: dialogue and revision; U06 Opinion writing: reasons and
linked evidence; U07 Research, explanatory writing, and source use; U08 Poetry,
speaking, listening, and reading–writing portfolio; R00 diagnostic, midyear/
final review, and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #20 body, comments, and label state re-read 2026-10-03 before claiming;
  no competing claim (0 comments prior to the claim comment).
- No `curriculum-in-progress` claims active on any other queue issue at claim
  time; open worker PRs (#63–76, other tracks) were not touched.
- `curriculum/grade-3/` re-inventoried on `main` @ `247bf79`: only `README.md`
  present; language-arts folder created by this run.
- Standards codes/descriptions verified against the Common Core ELA framework
  2026-10-03 (thecorestandards.org/ELA-Literacy RF/3, RL/3, RI/3, W/3, SL/3,
  L/3 strand pages opened directly; entries the page extraction skipped were
  cross-checked against district CCSS reproductions: Rogers Public Schools
  grade-3 pacing guides, Ouachita River SD literacy units, CA Dept. of
  Education standards map, CCSS ELA K–12 quick reference) — no state adoption,
  accreditation, or alignment certification claimed. Confirmed during
  verification: RL.3.8 and W.3.9 do not exist in the official framework, and
  grade-3 Reading: Foundational Skills covers only RF.3.3 and RF.3.4.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; language-arts guides are middle-grade oriented, hence
  teacher-side only. The eight unit objectives map onto the issue's U01–U08
  checklist order, kept as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
