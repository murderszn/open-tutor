# Kindergarten Language Arts — Scope and Sequence

Audit section A00 of [issue #8](https://github.com/murderszn/open-tutor/issues/8).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-02 against `main` (commit `4870c53`).

| Item | Location | Decision |
|---|---|---|
| Grade-K hub page | `curriculum/grade-k/README.md` | **Revise** — updated to reflect the language arts track's audit status and link the new subject folder |
| Kindergarten language arts folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade language arts content | none (0 Markdown files under `curriculum/grade-k/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#6, audit + Unit 01 delivered) | `curriculum/grade-k/math/` | **Reuse patterns only** — session model (4 × 15–20 min sessions/week), oral/pointing/drawing response modes, adult-scribed work; no math content reused |
| Same-grade science track (#7, audit delivered as draft PR) | `curriculum/grade-k/science/` | **No reuse** — science audit is an unmerged draft; nothing substantive to borrow |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/language-arts/` etc. | **No reuse for K instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| `resources/language_arts_parts_of_speech.md` | student-friendly guide, middle-grade examples | **Teacher-side only** — adult reads for accurate grammar vocabulary (nouns, verbs, adjectives) used in oral language modeling; never assigned to the learner |
| `resources/language_arts_sentence_structure.md` | subject/predicate, clauses | **Teacher-side only** — beyond the K band; adult reference for the sentence foundations in Unit 06 |
| `resources/language_arts_literary_terms.md` | plot, metaphor, etc. | **Teacher-side only** — K work names characters/settings/events (RL.K.3), not literary terms |
| `resources/language_arts_great_books_and_stories.md` | classics guide incl. Aesop's fables | **Selective adult-side reuse** — Aesop's fables (public domain) are candidates for Unit 05 read-alouds; the guide's summaries and analyses are too advanced for K and are not reused |
| Repository datasets (CSV/JSON) | none language-related | **No reuse at K** — units will use original small word sets and word lists authored per unit |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |

No existing K language arts material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter K language arts with:

- Spoken language: talks in multi-word sentences, follows two-step oral directions
- Listening stamina for a 10-minute read-aloud with pictures
- Fine-motor readiness: holds a crayon, traces lines, attempts letter-like marks
- Print awareness from shared reading: knows a book has a front and a back

The diagnostic weeks (Weeks 1–2) assess these; Unit 01 assumes none are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Handle print with purpose: track words left-to-right, top-to-bottom, page-by-page; point to words separated by spaces; name all upper- and lowercase letters.
2. Play with spoken language: recognize and produce rhymes; count, blend, and segment syllables; blend and segment onsets and rimes; isolate initial, medial, and final sounds in simple CVC words; change one sound to make a new word.
3. Know letter–sound correspondences for consonants and the long/short sounds of the five major vowels; read common high-frequency words by sight.
4. Read simple emergent-reader and decodable texts with purpose and understanding.
5. Retell familiar stories with key details; identify characters, settings, and major events; describe what an illustration shows about the story.
6. Ask and answer questions about key details in informational texts; name the main topic; use illustrations to describe people, places, things, or ideas.
7. Compose opinion, informative, and narrative pieces by drawing, dictating, and writing; add details with adult guidance.
8. Join conversations about topics and texts: follow discussion rules, ask and answer questions, describe familiar people, places, things, and events, and add drawings for detail.
9. Use grade-level language conventions: question words and common prepositions; regular plural nouns in speech; write letters for most consonant and short-vowel sounds; spell simple words phonetically; sort objects into categories; connect words to opposites and real-life uses.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for English Language Arts**,
kindergarten strands, as published at
[thecorestandards.org/ELA-Literacy](https://www.thecorestandards.org/ELA-Literacy/)
(opened and verified 2026-10-02; no state adoption or accreditation claimed).
Descriptions below match the official kindergarten standard text; strand and
cluster structure cross-checked against the framework.

### Reading: Foundational Skills

| Code | Description |
|---|---|
| RF.K.1 | Demonstrate understanding of the organization and basic features of print. |
| RF.K.1.a | Follow words from left to right, top to bottom, and page by page. |
| RF.K.1.b | Recognize that spoken words are represented in written language by specific sequences of letters. |
| RF.K.1.c | Understand that words are separated by spaces in print. |
| RF.K.1.d | Recognize and name all upper- and lowercase letters of the alphabet. |
| RF.K.2 | Demonstrate understanding of spoken words, syllables, and sounds (phonemes). |
| RF.K.2.a | Recognize and produce rhyming words. |
| RF.K.2.b | Count, pronounce, blend, and segment syllables in spoken words. |
| RF.K.2.c | Blend and segment onsets and rimes of single-syllable spoken words. |
| RF.K.2.d | Isolate and pronounce the initial, medial vowel, and final sounds (phonemes) in three-phoneme (consonant-vowel-consonant, or CVC) words. (This does not include CVCs ending with /l/, /r/, or /x/.) |
| RF.K.2.e | Add or substitute individual sounds (phonemes) in simple, one-syllable words to make new words. |
| RF.K.3 | Know and apply grade-level phonics and word analysis skills in decoding words. |
| RF.K.3.a | Demonstrate basic knowledge of one-to-one letter-sound correspondences by producing the primary sound or many of the most frequent sounds for each consonant. |
| RF.K.3.b | Associate the long and short sounds with the common spellings (graphemes) for the five major vowels. |
| RF.K.3.c | Read common high-frequency words by sight (e.g., *the*, *of*, *to*, *you*, *she*, *my*, *is*, *are*, *do*, *does*). |
| RF.K.3.d | Distinguish between similarly spelled words by identifying the sounds of the letters that differ. |
| RF.K.4 | Read emergent-reader texts with purpose and understanding. |

### Reading: Literature

| Code | Description |
|---|---|
| RL.K.1 | With prompting and support, ask and answer questions about key details in a text. |
| RL.K.2 | With prompting and support, retell familiar stories, including key details. |
| RL.K.3 | With prompting and support, identify characters, settings, and major events in a story. |
| RL.K.6 | With prompting and support, name the author and illustrator of a story and define the role of each in telling the story. |
| RL.K.7 | With prompting and support, describe the relationship between illustrations and the story in which they appear (e.g., what moment in a story an illustration depicts). |
| RL.K.9 | With prompting and support, compare and contrast the adventures and experiences of characters in familiar stories. |

### Reading: Informational Text

| Code | Description |
|---|---|
| RI.K.1 | With prompting and support, ask and answer questions about key details in a text. |
| RI.K.2 | With prompting and support, identify the main topic and retell key details of a text. |
| RI.K.3 | With prompting and support, describe the connection between two individuals, events, ideas, or pieces of information in a text. |
| RI.K.4 | With prompting and support, ask and answer questions about unknown words in a text. |
| RI.K.6 | Name the author and illustrator of a text and define the role of each in presenting the ideas or information in a text. |
| RI.K.7 | With prompting and support, describe the relationship between illustrations and the text in which they appear (e.g., what person, place, thing, or idea in the text an illustration depicts). |
| RI.K.8 | With prompting and support, identify the reasons an author gives to support points in a text. |
| RI.K.9 | With prompting and support, identify basic similarities in and differences between two texts on the same topic (e.g., in illustrations, descriptions, or procedures). |

### Writing

| Code | Description |
|---|---|
| W.K.1 | Use a combination of drawing, dictating, and writing to compose opinion pieces in which they tell a reader the topic or the name of the book they are writing about and state an opinion or preference about the topic or book (e.g., *My favorite book is...*). |
| W.K.2 | Use a combination of drawing, dictating, and writing to compose informative/explanatory texts in which they name what they are writing about and supply some information about the topic. |
| W.K.3 | Use a combination of drawing, dictating, and writing to narrate a single event or several loosely linked events, tell about the events in the order in which they occurred, and provide a reaction to what happened. |
| W.K.5 | With guidance and support from adults, respond to questions and suggestions from peers and add details to strengthen writing as needed. |
| W.K.6 | With guidance and support from adults, explore a variety of digital tools to produce and publish writing, including in collaboration with peers. |
| W.K.7 | Participate in shared research and writing projects (e.g., explore a number of books by a favorite author and express opinions about them). |
| W.K.8 | With guidance and support from adults, recall information from experiences or gather information from provided sources to answer a question. |

### Speaking and Listening

| Code | Description |
|---|---|
| SL.K.1 | Participate in collaborative conversations with diverse partners about *kindergarten topics and texts* with peers and adults in small and larger groups. |
| SL.K.1.a | Follow agreed-upon rules for discussions (e.g., listening to others and taking turns speaking about the topics and texts under discussion). |
| SL.K.2 | Confirm understanding of a text read aloud or information presented orally or through other media by asking and answering questions about key details and requesting clarification if something is not understood. |
| SL.K.3 | Ask and answer questions in order to seek help, get information, or clarify something that is not understood. |
| SL.K.4 | Describe familiar people, places, things, and events and, with prompting and support, provide additional detail. |
| SL.K.5 | Add drawings or other visual displays to descriptions as desired to provide additional detail. |

### Language

| Code | Description |
|---|---|
| L.K.1 | Demonstrate command of the conventions of standard English grammar and usage when writing or speaking. |
| L.K.1.c | Form regular plural nouns orally by adding /s/ or /es/ (e.g., *dog, dogs; wish, wishes*). |
| L.K.1.d | Understand and use question words (interrogatives) (e.g., *who, what, where, when, why, how*). |
| L.K.1.e | Use the most frequently occurring prepositions (e.g., *to, from, in, out, on, off, for, of, by, with*). |
| L.K.2 | Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing. |
| L.K.2.c | Write a letter or letters for most consonant and short-vowel sounds (phonemes). |
| L.K.2.d | Spell simple words phonetically, drawing on knowledge of sound-letter relationships. |
| L.K.4 | Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on kindergarten reading and content. |
| L.K.4.a | Identify new meanings for familiar words and apply them accurately (e.g., knowing *duck* is a bird and learning the verb to *duck*). |
| L.K.4.b | Use the most frequently occurring inflections and affixes (e.g., *-ed, -s, re-, un-, pre-, -ful, -less*) as a clue to the meaning of an unknown word. |
| L.K.5 | With guidance and support from adults, explore word relationships and nuances in word meanings. |
| L.K.5.a | Sort common objects into categories (e.g., shapes, foods) to gain a sense of the concepts the categories represent. |
| L.K.5.b | Demonstrate understanding of frequently occurring verbs and adjectives by relating them to their opposites (antonyms). |
| L.K.5.c | Identify real-life connections between words and their use (e.g., note places at school that are colorful). |
| L.K.5.d | Distinguish shades of meaning among verbs describing the same general action (e.g., *walk, march, strut, prance*) by acting out the meanings. |
| L.K.6 | Use words and phrases acquired through conversations, reading and being read to, and responding to texts. |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×2) = 36 weeks. Session model: **4 sessions per week, 15–20 minutes
each** (16 sessions per unit). Session types rotate: read-aloud/modeling lesson
→ sound-play or letter practice → drawing/writing practice → review/game —
named per unit below. All K tasks are oral, pointing, drawing, manipulative, or
adult-scribed, with explicit adult directions.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish routines (read-aloud listening, turn-taking in conversation,
  name card use, crayon grip) and baseline each objective's entry point.
- Sessions: playful one-on-one probes — "tell me about this picture," "can you
  find the front of the book?," clap the beats in your name, "what sound does
  your name start with?", draw and dictate one sentence about it.
- No new instruction; record observations against the track objectives.

### Unit 01 — Oral language listening and print concepts (Weeks 3–6)

- **Standards:** RF.K.1, RF.K.1.a–d; SL.K.1, SL.K.1.a, SL.K.2, SL.K.3
- **Week 3 goal:** book handling and directionality — front/back, top-to-bottom,
  left-to-right tracking with a big book; discussion rules (listen, take turns).
- **Week 4 goal:** spoken words map to print; words separated by spaces — point
  to each word as the adult reads a short repeated line.
- **Week 5 goal:** uppercase letter names, A–M; ask and answer questions during
  read-alouds (SL.K.2, SL.K.3).
- **Week 6:** review week — letter and book games, re-teach as needed, formative
  check.
- Sessions rotate: interactive read-aloud → big-book pointing lesson → talk
  circle (asking/answering) → letter card review game.

### Unit 02 — Rhyme syllables and phonemic awareness (Weeks 7–10)

- **Standards:** RF.K.2, RF.K.2.a–c; SL.K.1
- **Week 7 goal:** recognize and produce rhyming words in songs, poems, and
  picture sorts.
- **Week 8 goal:** count and clap syllables in spoken words; blend spoken
  syllables into words.
- **Week 9 goal:** blend and segment onsets and rimes (e.g., /c/ + /at/ → *cat*);
  segment syllables in two-syllable words.
- **Week 10:** review week — rhyme and syllable games, formative check.
- Sessions rotate: song/poem lesson → rhyme picture-sort practice → syllable
  clapping and blending games → review.

### Unit 03 — Letter recognition and sound correspondences (Weeks 11–14)

- **Standards:** RF.K.1.d, RF.K.3.a–b; L.K.2.c
- **Week 11 goal:** name all uppercase letters; primary consonant sounds for the
  first half of the alphabet.
- **Week 12 goal:** name all lowercase letters; consonant sounds for the second
  half; short vowel sounds (a, e, i, o, u).
- **Week 13 goal:** long vowel sounds with common spellings; match letters to
  their sounds in any order; write letters for most consonant and short-vowel
  sounds (L.K.2.c).
- **Week 14:** review week — alphabet arc, sound bingo, formative check.
- Sessions rotate: letter-of-the-day lesson → sound-matching practice →
  letter-formation/writing practice → review.

### Unit 04 — Blending segmenting and regular CVC words (Weeks 15–18)

- **Standards:** RF.K.2.d–e, RF.K.3.c–d; L.K.2.d
- **Week 15 goal:** isolate initial, medial-vowel, and final sounds in CVC words
  (no /l/, /r/, /x/ endings); blend sounds to read CVC words.
- **Week 16 goal:** segment CVC words into sounds; change one sound to make a new
  word (RF.K.2.e); read high-frequency words by sight (*the, of, to, you*).
- **Week 17 goal:** spell simple CVC words phonetically (L.K.2.d); distinguish
  similarly spelled words by the differing letter's sound (RF.K.3.d).
- **Week 18:** midyear review (flexible) — cumulative letter/sound/rhyme games,
  re-teach highest-need objective, formative check of Units 01–04.
- Sessions rotate: sound-blending lesson → word-building (tiles/cards) practice
  → phonetic spelling/dictation practice → review.

### Unit 05 — Shared reading retelling and sequence (Weeks 19–22)

- **Standards:** RL.K.1–3, RL.K.6–7, RL.K.9; SL.K.2; W.K.8
- **Week 19 goal:** ask and answer questions about key details in a read-aloud;
  name author and illustrator and their roles (RL.K.6).
- **Week 20 goal:** retell familiar stories with key details; identify
  characters, settings, and major events in order.
- **Week 21 goal:** describe what illustrations show about the story (RL.K.7);
  compare characters' adventures across two familiar stories (RL.K.9).
- **Week 22:** review week — story-acting retell, sequence cards, formative check.
- Sessions rotate: shared-reading lesson → retelling with props practice →
  illustration-talk and sequencing → review.

### Unit 06 — Decodable reading and sentence foundations (Weeks 23–26)

- **Standards:** RF.K.3, RF.K.4; L.K.1.d–e, L.K.2.c; SL.K.4–5
- **Week 23 goal:** decode regular CVC and high-frequency words in short
  sentences; read emergent-reader texts with purpose (RF.K.4).
- **Week 24 goal:** sentence foundations — question words (*who, what, where*)
  and common prepositions (*in, on, under*) in speech and dictation (L.K.1.d–e).
- **Week 25 goal:** describe familiar people, places, things, and events with
  detail, adding drawings (SL.K.4–5); regular plural nouns in speech (*dogs,
  wishes* — L.K.1.c).
- **Week 26:** review week — decodable book re-reads, sentence dictation,
  formative check.
- Sessions rotate: decodable-reading lesson → sentence/word practice →
  describe-and-draw practice → review.

### Unit 07 — Informational text questions and drawing-to-writing (Weeks 27–30)

- **Standards:** RI.K.1–4, RI.K.6–7, RI.K.8–9; W.K.2, W.K.8; L.K.4–6
- **Week 27 goal:** ask and answer questions about key details in informational
  read-alouds; identify the main topic and retell key details (RI.K.2).
- **Week 28 goal:** use illustrations to describe ideas (RI.K.7); ask about
  unknown words and learn new word meanings (RI.K.4, L.K.4).
- **Week 29 goal:** draw–dictate–write informative pieces naming a topic and
  giving information (W.K.2); gather information from provided sources (W.K.8).
- **Week 30:** review week — topic books, information posters, formative check.
- Sessions rotate: informational read-aloud lesson → question-and-word practice
  → drawing-to-writing practice → review.

### Unit 08 — Opinion narrative and informational oral-written sharing (Weeks 31–34)

- **Standards:** W.K.1, W.K.3, W.K.5, W.K.7; SL.K.4–5; L.K.5
- **Week 31 goal:** opinion pieces by drawing, dictating, and writing — state a
  topic or book and a preference (W.K.1); explore word opposites and shades of
  meaning through acting (L.K.5.b, L.K.5.d).
- **Week 32 goal:** narrative pieces — tell events in order with a reaction
  (W.K.3); add details with adult guidance (W.K.5).
- **Week 33 goal:** shared research and writing projects — explore books by a
  favorite author, express opinions, present with drawings (W.K.7, SL.K.4–5).
- **Week 34:** review week — author celebration share, formative check.
- Sessions rotate: writing-model lesson → draw–dictate–write practice →
  share-and-respond circle → review.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all nine objectives; re-teach
  where evidence shows gaps; final observational assessment and keys (delivered
  with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 05 opens with letter
sounds, Unit 08 with rhyming). Midyear (Week 18) and final (Weeks 35–36) weeks
are full-track reviews. Formative checks are oral/observed/drawn, adult-scribed,
with each unit's teacher guide specifying what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/language_arts_parts_of_speech.md`,
  `resources/language_arts_sentence_structure.md`,
  `resources/language_arts_literary_terms.md` — adult vocabulary references
  only; keep grammar terminology accurate in teacher guides.
- `resources/language_arts_great_books_and_stories.md` — Aesop's fables as
  public-domain read-aloud candidates for Unit 05; original K-level passages
  otherwise. Do not reproduce the guide's summaries as learner text.
- Alphabet/letter-card and rhyme-picture templates will be created once in
  Units 01–03 and reused; do not duplicate per unit.
- Same-grade math/science tracks and grades 4–8 language arts are **not**
  reused for K instruction (grade-band mismatch).

## 8. Safe materials

Household or dollar-store supplies: picture books and big books (library or
homemade), alphabet cards (upper/lowercase), magnetic letters or letter tiles,
rhyme picture cards, drawing paper, crayons and pencils, pocket chart, small
mirror (mouth shapes for sounds), name cards, story props and puppets. No sharp
tools; adult supervises small parts in shared settings; no food allergens as
manipulatives without checking. Read-aloud selections previewed by the adult for
age suitability and advertising-free access.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  all dictated writing.
- Large-print, high-contrast letter cards; textured/tactile letters for
  low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table and
  a floor-play variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual word walls; home-language labels welcomed alongside English.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue.
- Hearing support: face the learner when modeling sounds; mirror work and
  visual mouth-shape cues supplement auditory discrimination.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #8.
- No K-appropriate internal word lists, decodable passages, or read-aloud sets
  exist; units will author original passages and clearly labeled public-domain
  texts (e.g., Aesop) with named fictional practice data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- A shared K letter-card/rhyme-picture asset set should be created once and
  reused across units rather than regenerated per unit.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Oral language listening and print concepts; U02 Rhyme syllables and phonemic
awareness; U03 Letter recognition and sound correspondences; U04 Blending
segmenting and regular CVC words; U05 Shared reading retelling and sequence;
U06 Decodable reading and sentence foundations; U07 Informational text questions
and drawing-to-writing; U08 Opinion narrative and informational oral-written
sharing; R00 diagnostic, midyear/final review, and cumulative assessments with
keys. Each will follow `docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #8 body, comments, and label state re-read 2026-10-02 before claiming;
  no competing claim (0 comments prior to the claim comment).
- No `curriculum-in-progress` claims active on any other queue issue at claim
  time; open worker PRs (#63 science audit, #64 K math Unit 01) belong to other
  tracks and were not touched.
- `curriculum/grade-k/` re-inventoried on `main` @ `4870c53`: only `README.md`
  and the `math/` track present; language-arts folder created by this run.
- Standards codes/descriptions verified against the Common Core ELA framework
  (thecorestandards.org/ELA-Literacy, opened 2026-10-02; descriptions
  cross-checked against official page text for RF.K.1a–d, RF.K.2a–e, RF.K.3a–d,
  RF.K.4, RL.K.1–3/6/7/9, RI.K.1–4/6/7/8/9, W.K.1–3/5/6/7/8, SL.K.1–5, L.K.1/1c–e/2/2c–d/4/4a–b/5/5a–d/6) —
  no state adoption, accreditation, or alignment certification claimed.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; language-arts guides are middle-grade oriented, hence
  teacher-side only.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); modified JSON validated; Markdown links checked for
  existence (only relative links to existing files).
