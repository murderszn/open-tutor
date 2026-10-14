# Grade 2 Language Arts — Scope and Sequence

Audit section A00 of [issue #16](https://github.com/murderszn/open-tutor/issues/16).
Status: **validated draft** (this document and the track README); Unit 01 delivered as a
validated draft, Units 02–08 planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-03 against `main` (commit `247bf79`).

| Item | Location | Decision |
|---|---|---|
| Grade-2 hub page | `curriculum/grade-2/README.md` | **Revise** — updated to reflect the language arts track's audit status and link the new subject folder |
| Grade 2 language arts folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade language arts content | none (0 Markdown files under `curriculum/grade-2/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#14, audit delivered as draft PR #71) | `curriculum/grade-2/math/` | **Reference only** — session model (4 × 25–30 min sessions/week) and adult-reviewed independent practice (6–8 tasks) reused as pattern; no math content reused |
| Same-grade science track (#15, audit delivered as draft PR #72) | `curriculum/grade-2/science/` | **No reuse** — audit-stage only; future shared-research writing (W.2.7) may coordinate with science observation recording, but no content borrowed |
| Grade 1 language arts track (#12, audit delivered as draft PR #69) | `curriculum/grade-1/language-arts/` | **Reference for entry prerequisites only** — grade-1 end-of-year objectives define what this track assumes; no grade-1 lessons copied upward |
| Kindergarten language arts track (#8, audit delivered as draft PR #65) | `curriculum/grade-k/language-arts/` | **Prerequisite reference two years back only** — no reuse |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/language-arts/` etc. | **No reuse for grade-2 instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| Shared language-arts assignments | `assignments/language-arts/` (Shakespeare, Scarlet Letter, Harlem Renaissance, myths) | **No reuse** — high-school/college band; far above grade 2 |
| `resources/language_arts_parts_of_speech.md` | student-friendly guide (collective/abstract nouns, etc.) | **Teacher-side only** — adult reads for accurate grammar vocabulary used in Unit 05 teacher guides; never assigned to the learner |
| `resources/language_arts_sentence_structure.md` | subject/predicate, clauses | **Teacher-side only** — beyond the grade-2 band; adult reference for the sentence-expansion work in Unit 05 |
| `resources/language_arts_literary_terms.md` | simile, metaphor, foreshadowing, etc. | **Teacher-side only** — grade-2 work names story structure and characters' points of view (RL.2.5–6), not literary terms |
| `resources/language_arts_great_books_and_stories.md` | classics guide incl. Aesop's fables | **Selective adult-side reuse** — Aesop's fables (public domain) are candidates for Unit 03 read-alouds and recounts (RL.2.2); the guide's summaries are too advanced and are not reused as learner text |
| Repository datasets (CSV/JSON) | none language-related | **No reuse** — units will use original small word sets and word lists authored per unit |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |

No existing grade-2 language arts material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-2 language arts with (the grade-1 track's end-of-year objectives):

- Phonemic awareness: blend and segment sounds in spoken single-syllable words, including consonant blends; distinguish long from short vowel sounds by ear
- Decoding: common consonant digraphs, regularly spelled one-syllable words, final-e and common vowel-team long-vowel spellings, two-syllable words, words with inflectional endings, grade-appropriate irregularly spelled (high-frequency) words
- Fluency: read grade-level text orally with accuracy, appropriate rate, and expression; use context to confirm or self-correct word recognition
- Stories: ask and answer questions about key details; retell with key details and the central message or lesson; describe characters, settings, and major events; identify words that suggest feelings or appeal to the senses; tell storybooks apart from information books; identify who is telling the story; use illustrations and details to describe characters, settings, and events; compare characters' adventures
- Informational text: ask and answer questions about key details; identify the main topic and retell key details; describe connections between people, events, and ideas; use text features (headings, table of contents, glossaries, icons) to locate facts; tell picture information apart from word information; use illustrations and details to describe key ideas; name the reasons an author gives; compare two texts on the same topic
- Writing: opinion pieces (topic, opinion, a reason, some closure), informative texts (topic, facts, some closure), narratives (two or more sequenced events with details, temporal words, some closure); revise with adult and peer guidance; take part in shared research and writing projects
- Speaking and listening: follow discussion rules, build on others' comments, ask questions to clear up confusion; ask and answer questions about key details from read-alouds and other media; describe people, places, things, and events with relevant details; add drawings to clarify ideas; speak in complete sentences
- Language: print all upper- and lowercase letters; common, proper, and possessive nouns; singular and plural nouns with matching verbs; personal, possessive, and indefinite pronouns; past, present, and future verb forms; frequently occurring adjectives, conjunctions, determiners, and prepositions; complete simple and compound declarative, interrogative, imperative, and exclamatory sentences; capitalize dates and names of people; end punctuation; commas in dates and in series; spell common patterns and frequent irregular words conventionally and untaught words phonetically; clarify word meanings with sentence context, affixes, and root words; sort words into categories, define words by attributes, connect words to real life, distinguish shades of meaning

The diagnostic weeks (Weeks 1–2) verify these; Unit 01 re-teaches long/short vowel distinction and vowel teams rather than assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Decode grade-level words: distinguish long and short vowels when reading regularly spelled one-syllable words; read additional common vowel teams; decode regularly spelled two-syllable words with long vowels; decode words with common prefixes and suffixes; identify words with inconsistent but common spelling-sound correspondences; read grade-appropriate irregularly spelled words.
2. Read grade-level text with purpose and understanding — orally with accuracy, appropriate rate, and expression on successive readings — and use context to confirm or self-correct word recognition.
3. In stories: ask and answer such questions as who, what, where, when, why, and how to demonstrate understanding of key details; recount stories, including fables and folktales from diverse cultures, and determine their central message, lesson, or moral; describe how characters respond to major events and challenges; describe how words and phrases supply rhythm and meaning; describe the overall structure of a story (beginning introduces, ending concludes); acknowledge differences in the points of view of characters; use information gained from the illustrations and words to demonstrate understanding of characters, setting, or plot; compare and contrast two or more versions of the same story.
4. In informational text: ask and answer such questions as who, what, where, when, why, and how to demonstrate understanding of key details; identify the main topic of a multiparagraph text as well as the focus of specific paragraphs; describe the connection between a series of historical events, scientific ideas or concepts, or steps in technical procedures; determine the meaning of words and phrases in a text relevant to a grade 2 topic or subject area; know and use various text features (e.g., captions, bold print, subheadings, glossaries, indexes, electronic menus, icons) to locate key facts or information efficiently; identify the main purpose of a text, including what the author wants to answer, explain, or describe; explain how specific images (e.g., a diagram showing how a machine works) contribute to and clarify a text; describe how reasons support specific points the author makes; compare and contrast the most important points presented by two texts on the same topic.
5. Write opinion pieces in which they introduce the topic or book they are writing about, state an opinion, supply reasons that support the opinion, use linking words (e.g., *because*, *and*, *also*) to connect opinion and reasons, and provide a concluding statement or section; write informative/explanatory texts in which they introduce a topic, use facts and definitions to develop points, and provide a concluding statement or section; write narratives in which they recount a well-elaborated event or short sequence of events, include details to describe actions, thoughts, and feelings, use temporal words to signal event order, and provide a sense of closure; with guidance and support from adults and peers, focus on a topic and strengthen writing as needed by revising and editing; with guidance and support from adults, use a variety of digital tools to produce and publish writing; participate in shared research and writing projects; recall information from experiences or gather information from provided sources to answer a question.
6. Participate in collaborative conversations with diverse partners about grade 2 topics and texts with peers and adults in small and larger groups: follow agreed-upon rules for discussions (e.g., gaining the floor in respectful ways, listening to others with care, speaking one at a time about the topics and texts under discussion); build on others' talk in conversations by linking their comments to the remarks of others; ask for clarification and further explanation as needed about the topics and texts under discussion. Recount or describe key ideas or details from a text read aloud or information presented orally or through other media; ask and answer questions about what a speaker says in order to clarify comprehension, gather additional information, or deepen understanding of a topic or issue; tell a story or recount an experience with appropriate facts and relevant, descriptive details, speaking audibly in coherent sentences; create audio recordings of stories or poems; add drawings or other visual displays to stories or recounts of experiences when appropriate to clarify ideas, thoughts, and feelings; produce complete sentences when appropriate to task and situation in order to provide requested detail or clarification.
7. Use grade-2 language conventions: collective nouns (e.g., *group*); frequently occurring irregular plural nouns (e.g., *feet*, *children*, *teeth*, *mice*, *fish*); reflexive pronouns (e.g., *myself*, *ourselves*); past tense of frequently occurring irregular verbs (e.g., *sat*, *hid*, *told*); adjectives and adverbs, choosing between them depending on what is to be modified; complete simple and compound sentences produced, expanded, and rearranged. Capitalize holidays, product names, and geographic names; use commas in greetings and closings of letters; use an apostrophe to form contractions and frequently occurring possessives; generalize learned spelling patterns when writing words (e.g., *cage* → *badge*; *boy* → *boil*); consult reference materials, including beginning dictionaries, as needed to check and correct spellings. Use knowledge of language and its conventions when writing, speaking, reading, or listening: compare formal and informal uses of English.
8. Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 2 reading and content, choosing flexibly from an array of strategies: use sentence-level context as a clue to the meaning of a word or phrase; determine the meaning of the new word formed when a known prefix is added to a known word (e.g., *happy/unhappy*, *tell/retell*); use a known root word as a clue to the meaning of an unknown word with the same root (e.g., *addition*, *additional*); use knowledge of the meaning of individual words to predict the meaning of compound words (e.g., *birdhouse*, *lighthouse*, *housefly*; *bookshelf*, *notebook*, *bookmark*); use glossaries and beginning dictionaries, both print and digital, to determine or clarify the meaning of words and phrases. Demonstrate understanding of word relationships and nuances in word meanings: identify real-life connections between words and their use (e.g., describe foods that are spicy or juicy); distinguish shades of meaning among closely related verbs (e.g., *toss*, *throw*, *hurl*) and closely related adjectives (e.g., *thin*, *slender*, *skinny*, *scrawny*). Use words and phrases acquired through conversations, reading and being read to, and responding to texts, including using adjectives and adverbs to describe.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for English Language Arts**,
grade 2 strands, from the official framework document
([CCSSI_ELA Standards.pdf](https://www.thecorestandards.org/assets/CCSSI_ELA%20Standards.pdf),
opened and verified 2026-10-03; RF/2/ and RL/2/ strand pages on
[thecorestandards.org/ELA-Literacy](https://www.thecorestandards.org/ELA-Literacy)
opened the same day). Descriptions below match the official grade-2 standard
text. **No state adoption, accreditation, or alignment certification is claimed.**
Notes: L.2.3 begins in grade 2, so this track is its first target year; W.2.4,
W.2.9, and W.2.10 begin in grades 3–4 and are not taught here; RL.2.8 is not
applicable to literature.

### Reading: Foundational Skills

| Code | Description |
|---|---|
| RF.2.3 | Know and apply grade-level phonics and word analysis skills in decoding words. |
| RF.2.3.a | Distinguish long and short vowels when reading regularly spelled one-syllable words. |
| RF.2.3.b | Know spelling-sound correspondences for additional common vowel teams. |
| RF.2.3.c | Decode regularly spelled two-syllable words with long vowels. |
| RF.2.3.d | Decode words with common prefixes and suffixes. |
| RF.2.3.e | Identify words with inconsistent but common spelling-sound correspondences. |
| RF.2.3.f | Recognize and read grade-appropriate irregularly spelled words. |
| RF.2.4 | Read with sufficient accuracy and fluency to support comprehension. |
| RF.2.4.a | Read grade-level text with purpose and understanding. |
| RF.2.4.b | Read grade-level text orally with accuracy, appropriate rate, and expression on successive readings. |
| RF.2.4.c | Use context to confirm or self-correct word recognition and understanding, rereading as necessary. |

### Reading: Literature

| Code | Description |
|---|---|
| RL.2.1 | Ask and answer such questions as who, what, where, when, why, and how to demonstrate understanding of key details in a text. |
| RL.2.2 | Recount stories, including fables and folktales from diverse cultures, and determine their central message, lesson, or moral. |
| RL.2.3 | Describe how characters in a story respond to major events and challenges. |
| RL.2.4 | Describe how words and phrases (e.g., regular beats, alliteration, rhymes, repeated lines) supply rhythm and meaning in a story, poem, or song. |
| RL.2.5 | Describe the overall structure of a story, including describing how the beginning introduces the story and the ending concludes the action. |
| RL.2.6 | Acknowledge differences in the points of view of characters, including by speaking in a different voice for each character when reading dialogue aloud. |
| RL.2.7 | Use information gained from the illustrations and words in a print or digital text to demonstrate understanding of its characters, setting, or plot. |
| RL.2.9 | Compare and contrast two or more versions of the same story (e.g., Cinderella stories) by different authors or from different cultures. |
| RL.2.10 | By the end of the year, read and comprehend literature, including stories and poetry, in the grades 2–3 text complexity band proficiently, with scaffolding as needed at the high end of the range. |

### Reading: Informational Text

| Code | Description |
|---|---|
| RI.2.1 | Ask and answer such questions as who, what, where, when, why, and how to demonstrate understanding of key details in a text. |
| RI.2.2 | Identify the main topic of a multiparagraph text as well as the focus of specific paragraphs within the text. |
| RI.2.3 | Describe the connection between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text. |
| RI.2.4 | Determine the meaning of words and phrases in a text relevant to a grade 2 topic or subject area. |
| RI.2.5 | Know and use various text features (e.g., captions, bold print, subheadings, glossaries, indexes, electronic menus, icons) to locate key facts or information in a text efficiently. |
| RI.2.6 | Identify the main purpose of a text, including what the author wants to answer, explain, or describe. |
| RI.2.7 | Explain how specific images (e.g., a diagram showing how a machine works) contribute to and clarify a text. |
| RI.2.8 | Describe how reasons support specific points the author makes in a text. |
| RI.2.9 | Compare and contrast the most important points presented by two texts on the same topic. |
| RI.2.10 | By the end of year, read and comprehend informational texts, including history/social studies, science, and technical texts, in the grades 2–3 text complexity band proficiently, with scaffolding as needed at the high end of the range. |

### Writing

| Code | Description |
|---|---|
| W.2.1 | Write opinion pieces in which they introduce the topic or book they are writing about, state an opinion, supply reasons that support the opinion, use linking words (e.g., because, and, also) to connect opinion and reasons, and provide a concluding statement or section. |
| W.2.2 | Write informative/explanatory texts in which they introduce a topic, use facts and definitions to develop points, and provide a concluding statement or section. |
| W.2.3 | Write narratives in which they recount a well-elaborated event or short sequence of events, include details to describe actions, thoughts, and feelings, use temporal words to signal event order, and provide a sense of closure. |
| W.2.5 | With guidance and support from adults and peers, focus on a topic and strengthen writing as needed by revising and editing. |
| W.2.6 | With guidance and support from adults, use a variety of digital tools to produce and publish writing, including in collaboration with peers. |
| W.2.7 | Participate in shared research and writing projects (e.g., read a number of books on a single topic to produce a report; record science observations). |
| W.2.8 | Recall information from experiences or gather information from provided sources to answer a question. |

### Speaking and Listening

| Code | Description |
|---|---|
| SL.2.1 | Participate in collaborative conversations with diverse partners about grade 2 topics and texts with peers and adults in small and larger groups. |
| SL.2.1.a | Follow agreed-upon rules for discussions (e.g., gaining the floor in respectful ways, listening to others with care, speaking one at a time about the topics and texts under discussion). |
| SL.2.1.b | Build on others' talk in conversations by linking their comments to the remarks of others. |
| SL.2.1.c | Ask for clarification and further explanation as needed about the topics and texts under discussion. |
| SL.2.2 | Recount or describe key ideas or details from a text read aloud or information presented orally or through other media. |
| SL.2.3 | Ask and answer questions about what a speaker says in order to clarify comprehension, gather additional information, or deepen understanding of a topic or issue. |
| SL.2.4 | Tell a story or recount an experience with appropriate facts and relevant, descriptive details, speaking audibly in coherent sentences. |
| SL.2.5 | Create audio recordings of stories or poems; add drawings or other visual displays to stories or recounts of experiences when appropriate to clarify ideas, thoughts, and feelings. |
| SL.2.6 | Produce complete sentences when appropriate to task and situation in order to provide requested detail or clarification. |

### Language

| Code | Description |
|---|---|
| L.2.1 | Demonstrate command of the conventions of standard English grammar and usage when writing or speaking. |
| L.2.1.a | Use collective nouns (e.g., group). |
| L.2.1.b | Form and use frequently occurring irregular plural nouns (e.g., feet, children, teeth, mice, fish). |
| L.2.1.c | Use reflexive pronouns (e.g., myself, ourselves). |
| L.2.1.d | Form and use the past tense of frequently occurring irregular verbs (e.g., sat, hid, told). |
| L.2.1.e | Use adjectives and adverbs, and choose between them depending on what is to be modified. |
| L.2.1.f | Produce, expand, and rearrange complete simple and compound sentences (e.g., The boy watched the movie; The little boy watched the movie; The action movie was watched by the little boy). |
| L.2.2 | Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing. |
| L.2.2.a | Capitalize holidays, product names, and geographic names. |
| L.2.2.b | Use commas in greetings and closings of letters. |
| L.2.2.c | Use an apostrophe to form contractions and frequently occurring possessives. |
| L.2.2.d | Generalize learned spelling patterns when writing words (e.g., cage → badge; boy → boil). |
| L.2.2.e | Consult reference materials, including beginning dictionaries, as needed to check and correct spellings. |
| L.2.3 | Use knowledge of language and its conventions when writing, speaking, reading, or listening. |
| L.2.3.a | Compare formal and informal uses of English. |
| L.2.4 | Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 2 reading and content, choosing flexibly from an array of strategies. |
| L.2.4.a | Use sentence-level context as a clue to the meaning of a word or phrase. |
| L.2.4.b | Determine the meaning of the new word formed when a known prefix is added to a known word (e.g., happy/unhappy, tell/retell). |
| L.2.4.c | Use a known root word as a clue to the meaning of an unknown word with the same root (e.g., addition, additional). |
| L.2.4.d | Use knowledge of the meaning of individual words to predict the meaning of compound words (e.g., birdhouse, lighthouse, housefly; bookshelf, notebook, bookmark). |
| L.2.4.e | Use glossaries and beginning dictionaries, both print and digital, to determine or clarify the meaning of words and phrases. |
| L.2.5 | Demonstrate understanding of word relationships and nuances in word meanings. |
| L.2.5.a | Identify real-life connections between words and their use (e.g., describe foods that are spicy or juicy). |
| L.2.5.b | Distinguish shades of meaning among closely related verbs (e.g., toss, throw, hurl) and closely related adjectives (e.g., thin, slender, skinny, scrawny). |
| L.2.6 | Use words and phrases acquired through conversations, reading and being read to, and responding to texts, including using adjectives and adverbs to describe (e.g., When other kids are happy that makes me happy). |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×2) = 36 weeks. Session model: **4 sessions per week, 25–30 minutes
each** (16 sessions per unit), matching the same-grade math track. Session
types rotate across explicit lesson, word-work or writing practice, reading
practice, and review — named per unit below. K–2 tasks remain oral, pointing,
drawing, manipulative, or adult-scribed as needed, with explicit adult
directions; grade 2 begins short independent written practice (6–8 tasks) that
the adult reviews the same day.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (sound warm-ups, tile/card trays, read-aloud
  turn-taking, exit-check rituals) and baseline each objective's entry point.
- Sessions: playful one-on-one probes — long or short vowel in these words?;
  read these vowel-team words; read this short passage aloud; retell a
  read-aloud; ask your who/what/why questions about a picture book; write one
  sentence about your day; take turns speaking about a favorite animal.
- No new instruction; record observations against the track objectives.

### Unit 01 — Phonics: vowel teams, syllables, and word parts (Weeks 3–6)

- **Standards:** RF.2.3a–f; L.2.2.d; L.2.4.b–d
- **Week 3 goal:** distinguish long and short vowels when reading regularly
  spelled one-syllable words (review); additional common vowel teams —
  ai/ay, ee/ea.
- **Week 4 goal:** vowel teams igh, oa/ow, oo, ou/ow; decode regularly spelled
  two-syllable words with long vowels by breaking them into syllables.
- **Week 5 goal:** common prefixes (un-, re-, pre-) and suffixes (-ful, -less,
  -ed, -ing); compound words (birdhouse, lighthouse); words with inconsistent
  but common spelling-sound correspondences; grade-appropriate irregularly
  spelled words.
- **Week 6:** review week — vowel-team sorts, two-syllable decoding races,
  prefix/suffix building, sight-word check, formative check.
- Sessions rotate: explicit phonics lesson → word-sort and word-building
  practice → connected decodable reading → review game.

### Unit 02 — Fluency, vocabulary, and comprehension monitoring (Weeks 7–10)

- **Standards:** RF.2.4a–c; L.2.4.a; L.2.6; SL.2.2
- **Week 7 goal:** read with purpose and understanding; monitor while reading —
  use context to confirm or self-correct word recognition, rereading as
  necessary.
- **Week 8 goal:** read grade-level text orally with accuracy, appropriate
  rate, and expression on successive readings; echo and partner rereading.
- **Week 9 goal:** vocabulary from conversation and reading — adjectives and
  adverbs to describe; sentence-level context clues for new words; word wall
  of describing words.
- **Week 10:** review week — fluency self-check with the reading rubric,
  vocabulary sorts, formative check.
- Sessions rotate: modeled fluent-reading lesson → rereading and echo practice
  → vocabulary word work → review game.

### Unit 03 — Story structure, characters, and multiple perspectives (Weeks 11–14)

- **Standards:** RL.2.1–7, RL.2.9–10; SL.2.4–5
- **Week 11 goal:** ask and answer who/what/where/when/why/how questions about
  key details; recount stories — including fables and folktales from diverse
  cultures — and determine the central message, lesson, or moral.
- **Week 12 goal:** describe how characters respond to major events and
  challenges; describe the overall story structure — how the beginning
  introduces the story and the ending concludes the action.
- **Week 13 goal:** how words and phrases (regular beats, alliteration,
  rhymes, repeated lines) supply rhythm and meaning; differences in
  characters' points of view — speak in a different voice for each character
  when reading dialogue aloud; use illustrations and words to show
  understanding of characters, setting, or plot.
- **Week 14:** review week — compare and contrast two or more versions of the
  same story; formative check.
- Sessions rotate: read-aloud story lesson → retelling and perspective
  practice → illustration and word work → review.

### Unit 04 — Informational reading: main topics, details, and text features (Weeks 15–18)

- **Standards:** RI.2.1–10
- **Week 15 goal:** ask and answer who/what/where/when/why/how about key
  details; identify the main topic of a multiparagraph text and the focus of
  specific paragraphs.
- **Week 16 goal:** text features — captions, bold print, subheadings,
  glossaries, indexes, electronic menus, icons — to locate key facts
  efficiently; determine the meaning of words and phrases relevant to grade-2
  topics.
- **Week 17 goal:** identify the main purpose of a text (what the author wants
  to answer, explain, or describe); explain how specific images contribute to
  and clarify a text; describe how reasons support specific points; describe
  connections between historical events, scientific ideas, or steps in
  technical procedures; compare and contrast the most important points of two
  texts on the same topic.
- **Week 18:** midyear review (flexible) — cumulative decoding, fluency,
  story, and informational reading; re-teach the highest-need objective;
  formative check of Units 01–04.
- Sessions rotate: informational read-aloud lesson → text-feature scavenger
  practice → question-and-explain practice → review.

### Unit 05 — Grammar, sentence expansion, and conventions (Weeks 19–22)

- **Standards:** L.2.1a–f; L.2.2a–e; L.2.3.a; SL.2.6
- **Week 19 goal:** collective nouns; irregular plural nouns (feet, children,
  teeth, mice, fish); reflexive pronouns (myself, ourselves); past tense of
  irregular verbs (sat, hid, told).
- **Week 20 goal:** adjectives and adverbs — choose between them by what is
  modified; produce, expand, and rearrange complete simple and compound
  sentences.
- **Week 21 goal:** capitalize holidays, product names, and geographic names;
  commas in greetings and closings of letters; apostrophes for contractions
  and frequently occurring possessives.
- **Week 22:** review week — generalize learned spelling patterns when writing
  (cage → badge; boy → boil); beginning dictionaries; compare formal and
  informal uses of English; formative check.
- Sessions rotate: explicit grammar lesson → sentence-building practice →
  dictation and editing practice → review game.

### Unit 06 — Narrative writing: description and sequence (Weeks 23–26)

- **Standards:** W.2.3, W.2.5; RL.2.2–3, RL.2.5; L.2.1.e
- **Week 23 goal:** recount a well-elaborated event or short sequence of
  events; include details to describe actions, thoughts, and feelings.
- **Week 24 goal:** temporal words to signal event order; adjectives and
  adverbs to describe the action (ties to L.2.1.e).
- **Week 25 goal:** provide a sense of closure; with adult and peer guidance,
  focus on the topic and strengthen writing by revising and editing.
- **Week 26:** review week — narrative checklist read-through; share and
  celebrate; formative check.
- Sessions rotate: writing-model lesson → guided drafting practice →
  describing-word practice → share-and-revise circle.

### Unit 07 — Opinion and explanatory writing with evidence (Weeks 27–30)

- **Standards:** W.2.1–2, W.2.5; RI.2.8; L.2.4–5
- **Week 27 goal:** opinion pieces — introduce the topic or book, state an
  opinion, supply reasons that support it, use linking words (because, and,
  also), provide a concluding statement or section.
- **Week 28 goal:** informative/explanatory texts — introduce a topic, use
  facts and definitions to develop points, provide a concluding statement or
  section; gather information from provided sources.
- **Week 29 goal:** word relationships to strengthen writing — real-life
  connections between words and their use; shades of meaning among closely
  related verbs (toss/throw/hurl) and adjectives (thin/slender/skinny/scrawny).
- **Week 30:** review week — revise and edit with adult and peer guidance;
  formative check.
- Sessions rotate: writing-model lesson → guided drafting practice →
  evidence and word-choice practice → share-and-revise circle.

### Unit 08 — Research, poetry, speaking, and portfolio revision (Weeks 31–34)

- **Standards:** W.2.6–8; RL.2.4; SL.2.1a–c, SL.2.2–6; L.2.6; W.2.5
- **Week 31 goal:** discussion rules — gain the floor in respectful ways,
  listen with care, speak one at a time; link comments to others' remarks; ask
  for clarification as needed.
- **Week 32 goal:** shared research and writing project — recall information
  from experiences and gather information from provided sources to answer a
  question (e.g., record observations); use digital tools with adult guidance
  to produce and publish writing.
- **Week 33 goal:** poetry — how words and phrases (regular beats,
  alliteration, rhymes, repeated lines) supply rhythm and meaning; create
  audio recordings of stories or poems; add drawings or visual displays to
  clarify ideas.
- **Week 34:** review week — portfolio revision across the year's pieces
  (W.2.5); tell a story or recount an experience with facts and descriptive
  details, speaking audibly in coherent sentences; formative check.
- Sessions rotate: discussion and research lesson → recording and performance
  practice → portfolio revision → share and review.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all eight objectives; re-teach
  where evidence shows gaps; final observational assessment and keys (delivered
  with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with a
vowel-team read, Unit 04 with the who/what/why question routine, Unit 05 with
fluency rereading, Unit 07 with sentence punctuation, Unit 08 with the
retelling routine). Midyear (Week 18) and final (Weeks 35–36) weeks are
full-track reviews. Formative checks are observed, oral, drawn, or short
written tasks (6–8 items) the adult reviews the same day; each unit's teacher
guide specifies what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/language_arts_parts_of_speech.md`,
  `resources/language_arts_sentence_structure.md`,
  `resources/language_arts_literary_terms.md` — adult vocabulary references
  only; keep grammar terminology accurate in teacher guides. Do not assign to the
  learner.
- `resources/language_arts_great_books_and_stories.md` — Aesop's fables as
  public-domain read-aloud and recount candidates for Unit 03 (RL.2.2);
  original grade-2 passages otherwise. Do not reproduce the guide's summaries
  as learner text.
- Word-card, word-sort, and sentence-strip templates will be created once in
  Units 01 and 05 and reused; do not duplicate per unit.
- Same-grade math/science tracks and grades 4–8 language arts are **not**
  reused for grade-2 instruction (grade-band mismatch).

## 8. Safe materials

Household or dollar-store supplies: letter tiles or magnetic letters, word
cards (vowel teams, prefixes/suffixes, high-frequency words), pocket chart,
notebooks and pencils, drawing paper and crayons, picture books and decodable
readers (library or adult-made), small mirror (mouth shapes for sounds), sand
tray or whiteboard, timer, a simple audio recorder (adult's phone or tablet)
for Unit 08 recordings, one beginning dictionary or children's dictionary app.
No sharp tools; adult supervises small parts in shared settings. Read-aloud
selections previewed by the adult for age suitability and advertising-free
access.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  dictated writing; short independent written practice (6–8 tasks) reviewed the
  same day.
- Large-print, high-contrast word and letter cards; textured/tactile letters
  for low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table and
  a floor-play variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual word walls; home-language labels welcomed alongside English.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue.
- Hearing support: face the learner when modeling sounds and discussion turns;
  mirror work and visual mouth-shape cues supplement auditory discrimination.
- Speaking tasks accept audio recording in place of live performance; the
  adult may record on the learner's behalf.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #16.
- No grade-2-appropriate internal word lists, decodable passages, or read-aloud
  sets exist; units will author original passages and clearly labeled
  public-domain texts (e.g., Aesop's fables for U03) with named fictional
  practice data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- A shared grade-2 word-card/word-sort/sentence-strip asset set should be
  created once (Units 01, 05) and reused across units rather than regenerated
  per unit.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Phonics: vowel teams, syllables, and word parts; U02 Fluency, vocabulary,
and comprehension monitoring; U03 Story structure, characters, and multiple
perspectives; U04 Informational reading: main topics, details, and text
features; U05 Grammar, sentence expansion, and conventions; U06 Narrative
writing: description and sequence; U07 Opinion and explanatory writing with
evidence; U08 Research, poetry, speaking, and portfolio revision; R00
diagnostic, midyear/final review, and cumulative assessments with keys. Each
will follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #16 body, comments, and label state re-read 2026-10-03 before claiming;
  no competing claim (0 comments prior to the claim comment).
- No `curriculum-in-progress` claims active on any other queue issue at claim
  time; `curriculum-blocked` label absent from the queue; open worker PRs
  (#63–72, other tracks) were not touched.
- `curriculum/grade-2/` re-inventoried on `main` @ `247bf79`: only `README.md`
  present; language-arts folder created by this run. A stale local branch and
  uncommitted A00 duplicates from the #15 run were verified identical to the
  delivered commit `bea2f08` (PR #72) and removed before this work began.
- Standards codes/descriptions verified against the official Common Core ELA
  framework (CCSSI_ELA Standards.pdf opened and read 2026-10-03; RF/2/ and
  RL/2/ pages on thecorestandards.org opened the same day) — no state
  adoption, accreditation, or alignment certification claimed.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; language-arts guides are middle-grade oriented, hence
  teacher-side only. The eight track objectives map onto the issue's U01–U08
  checklist order, kept as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
