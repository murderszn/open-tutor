# Grade 1 Language Arts — Scope and Sequence

Audit section A00 of [issue #12](https://github.com/murderszn/open-tutor/issues/12).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-02 against `main` (commit `4870c53`).

| Item | Location | Decision |
|---|---|---|
| Grade-1 hub page | `curriculum/grade-1/README.md` | **Revise** — updated to reflect the language arts track's audit status and link the new subject folder |
| Grade 1 language arts folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade language arts content | none (0 Markdown files under `curriculum/grade-1/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#10, audit delivered as draft PR) | `curriculum/grade-1/math/` | **Reference only** — session model (4 × 20–25 min sessions/week) and adult-reviewed independent practice (4–6 tasks) reused as pattern; no math content reused |
| Kindergarten language arts track (#8, audit delivered as draft PR) | `curriculum/grade-k/language-arts/` | **Reference for entry prerequisites only** — K end-of-year objectives (print concepts, letter names/sounds, rhyming, syllables, CVC blending, retelling, drawing-to-writing) define what this track assumes; no K lessons copied upward |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/language-arts/` etc. | **No reuse for grade-1 instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| Shared language-arts assignments | `assignments/language-arts/` (Shakespeare, Scarlet Letter, Harlem Renaissance, myths) | **No reuse** — high-school/college band; far above grade 1 |
| `resources/language_arts_parts_of_speech.md` | student-friendly guide (collective/abstract nouns, etc.) | **Teacher-side only** — adult reads for accurate grammar vocabulary used in Unit 06 teacher guides; never assigned to the learner |
| `resources/language_arts_sentence_structure.md` | subject/predicate, clauses | **Teacher-side only** — beyond the grade-1 band; adult reference for the sentence work in Unit 06 |
| `resources/language_arts_literary_terms.md` | simile, metaphor, foreshadowing, etc. | **Teacher-side only** — grade-1 work names feelings/sense words (RL.1.4), not literary terms |
| `resources/language_arts_great_books_and_stories.md` | classics guide incl. Aesop's fables | **Selective adult-side reuse** — Aesop's fables (public domain) are candidates for Unit 04 read-alouds; the guide's summaries are too advanced and are not reused as learner text |
| Repository datasets (CSV/JSON) | none language-related | **No reuse** — units will use original small word sets and word lists authored per unit |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |

No existing grade-1 language arts material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-1 language arts with (the K track's end-of-year objectives):

- Print concepts: directionality, word boundaries, all upper- and lowercase letter names
- Letter–sound correspondences for consonants and short vowels; some high-frequency sight words
- Phonemic awareness: rhyme, syllables, onset-rime, isolating/changing sounds in CVC words
- Retelling familiar stories with characters, settings, and events; drawing–dictating–writing

The diagnostic weeks (Weeks 1–2) verify these; Unit 01 re-teaches blending, segmentation,
and short-vowel decoding rather than assuming they are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Blend and segment the sounds in spoken single-syllable words, including consonant
   blends; distinguish long from short vowel sounds by ear.
2. Decode grade-level words: common consonant digraphs, regularly spelled one-syllable
   words, final-e and common vowel-team long-vowel spellings, two-syllable words, words
   with inflectional endings, and grade-appropriate irregularly spelled (high-frequency) words.
3. Read grade-level text with purpose and understanding — orally with accuracy,
   appropriate rate, and expression — and use context to confirm or self-correct word
   recognition.
4. In stories: ask and answer questions about key details; retell with key details and the
   central message or lesson; describe characters, settings, and major events; identify
   words that suggest feelings or appeal to the senses; tell storybooks apart from
   information books; identify who is telling the story; use illustrations and details to
   describe characters, settings, and events; compare characters' adventures.
5. In informational text: ask and answer questions about key details; identify the main
   topic and retell key details; describe connections between people, events, and ideas;
   use text features (headings, table of contents, glossaries, icons) to locate facts;
   tell picture information apart from word information; use illustrations and details to
   describe key ideas; name the reasons an author gives; compare two texts on the same topic.
6. Write opinion pieces (topic, opinion, a reason, some closure), informative texts (topic,
   facts, some closure), and narratives (two or more sequenced events with details, temporal
   words, and some closure); revise with adult and peer guidance; take part in shared
   research and writing projects.
7. Join discussions: follow discussion rules, build on others' comments, ask questions to
   clear up confusion; ask and answer questions about key details from read-alouds and
   other media; describe people, places, things, and events with relevant details; add
   drawings to clarify ideas; speak in complete sentences.
8. Use grade-1 language conventions: print all upper- and lowercase letters; common,
   proper, and possessive nouns; singular and plural nouns with matching verbs; personal,
   possessive, and indefinite pronouns; past, present, and future verb forms; frequently
   occurring adjectives, conjunctions, determiners, and prepositions; complete simple and
   compound declarative, interrogative, imperative, and exclamatory sentences. Capitalize
   dates and names of people; use end punctuation; use commas in dates and in series;
   spell common patterns and frequent irregular words conventionally and untaught words
   phonetically. Clarify word meanings with sentence context, affixes, and root words;
   sort words into categories, define words by attributes, connect words to real life, and
   distinguish shades of meaning by acting them out.

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for English Language Arts**,
grade 1 strands, as published at
[thecorestandards.org/ELA-Literacy](https://www.thecorestandards.org/ELA-Literacy/)
(opened and verified 2026-10-02; no state adoption or accreditation claimed).
Descriptions below match the official grade-1 standard text: RF/RL pages opened
directly on thecorestandards.org; RI/W/SL/L text cross-checked against district
CCSS reproductions. Note: L.1.3 begins in grade 2, so this track does not target it.

### Reading: Foundational Skills

| Code | Description |
|---|---|
| RF.1.1 | Demonstrate understanding of the organization and basic features of print. |
| RF.1.1.a | Recognize the distinguishing features of a sentence (e.g., first word, capitalization, ending punctuation). |
| RF.1.2 | Demonstrate understanding of spoken words, syllables, and sounds (phonemes). |
| RF.1.2.a | Distinguish long from short vowel sounds in spoken single-syllable words. |
| RF.1.2.b | Orally produce single-syllable words by blending sounds (phonemes), including consonant blends. |
| RF.1.2.c | Isolate and pronounce initial, medial vowel, and final sounds (phonemes) in spoken single-syllable words. |
| RF.1.2.d | Segment spoken single-syllable words into their complete sequence of individual sounds (phonemes). |
| RF.1.3 | Know and apply grade-level phonics and word analysis skills in decoding words. |
| RF.1.3.a | Know the spelling-sound correspondences for common consonant digraphs. |
| RF.1.3.b | Decode regularly spelled one-syllable words. |
| RF.1.3.c | Know final -e and common vowel team conventions for representing long vowel sounds. |
| RF.1.3.d | Use knowledge that every syllable must have a vowel sound to determine the number of syllables in a printed word. |
| RF.1.3.e | Decode two-syllable words following basic patterns by breaking the words into syllables. |
| RF.1.3.f | Read words with inflectional endings. |
| RF.1.3.g | Recognize and read grade-appropriate irregularly spelled words. |
| RF.1.4 | Read with sufficient accuracy and fluency to support comprehension. |
| RF.1.4.a | Read grade-level text with purpose and understanding. |
| RF.1.4.b | Read grade-level text orally with accuracy, appropriate rate, and expression on successive readings. |
| RF.1.4.c | Use context to confirm or self-correct word recognition and understanding, rereading as necessary. |

### Reading: Literature

| Code | Description |
|---|---|
| RL.1.1 | Ask and answer questions about key details in a text. |
| RL.1.2 | Retell stories, including key details, and demonstrate understanding of their central message or lesson. |
| RL.1.3 | Describe characters, settings, and major events in a story, using key details. |
| RL.1.4 | Identify words and phrases in stories or poems that suggest feelings or appeal to the senses. |
| RL.1.5 | Explain major differences between books that tell stories and books that give information, drawing on a wide reading of a range of text types. |
| RL.1.6 | Identify who is telling the story at various points in a text. |
| RL.1.7 | Use illustrations and details in a story to describe its characters, setting, or events. |
| RL.1.9 | Compare and contrast the adventures and experiences of characters in stories. |
| RL.1.10 | With prompting and support, read prose and poetry of appropriate complexity for grade 1. |

### Reading: Informational Text

| Code | Description |
|---|---|
| RI.1.1 | Ask and answer questions about key details in a text. |
| RI.1.2 | Identify the main topic and retell key details of a text. |
| RI.1.3 | Describe the connection between two individuals, events, ideas, or pieces of information in a text. |
| RI.1.4 | Ask and answer questions to help determine or clarify the meaning of words and phrases in a text. |
| RI.1.5 | Know and use various text features (e.g., headings, tables of contents, glossaries, electronic menus, icons) to locate key facts or information in a text. |
| RI.1.6 | Distinguish between information provided by pictures or other illustrations and information provided by the words in a text. |
| RI.1.7 | Use the illustrations and details in a text to describe its key ideas. |
| RI.1.8 | Identify the reasons an author gives to support points in a text. |
| RI.1.9 | Identify basic similarities in and differences between two texts on the same topic (e.g., in illustrations, descriptions, or procedures). |
| RI.1.10 | With prompting and support, read informational texts appropriately complex for grade 1. |

### Writing

| Code | Description |
|---|---|
| W.1.1 | Write opinion pieces in which they introduce the topic or name the book they are writing about, state an opinion, supply a reason for the opinion, and provide some sense of closure. |
| W.1.2 | Write informative/explanatory texts in which they name a topic, supply some facts about the topic, and provide some sense of closure. |
| W.1.3 | Write narratives in which they recount two or more appropriately sequenced events, include some details regarding what happened, use temporal words to signal event order, and provide some sense of closure. |
| W.1.5 | With guidance and support from adults, focus on a topic, respond to questions and suggestions from peers, and add details to strengthen writing as needed. |
| W.1.6 | With guidance and support from adults, use a variety of digital tools to produce and publish writing, including in collaboration with peers. |
| W.1.7 | Participate in shared research and writing projects (e.g., explore a number of "how-to" books on a given topic and use them to write a sequence of instructions). |
| W.1.8 | With guidance and support from adults, recall information from experiences or gather information from provided sources to answer a question. |

### Speaking and Listening

| Code | Description |
|---|---|
| SL.1.1 | Participate in collaborative conversations with diverse partners about grade 1 topics and texts with peers and adults in small and larger groups. |
| SL.1.1.a | Follow agreed-upon rules for discussions (e.g., listening to others with care, speaking one at a time about the topics and texts under discussion). |
| SL.1.1.b | Build on others' talk in conversations by responding to the comments of others through multiple exchanges. |
| SL.1.1.c | Ask questions to clear up any confusion about the topics and texts under discussion. |
| SL.1.2 | Ask and answer questions about key details in a text read aloud or information presented orally or through other media. |
| SL.1.3 | Ask and answer questions about what a speaker says in order to gather additional information or clarify something that is not understood. |
| SL.1.4 | Describe people, places, things, and events with relevant details, expressing ideas and feelings clearly. |
| SL.1.5 | Add drawings or other visual displays to descriptions when appropriate to clarify ideas, thoughts, and feelings. |
| SL.1.6 | Produce complete sentences when appropriate to task and situation. (See grade 1 Language standard 1 for specific expectations.) |

### Language

| Code | Description |
|---|---|
| L.1.1 | Demonstrate command of the conventions of standard English grammar and usage when writing or speaking. |
| L.1.1.a | Print all upper- and lowercase letters. |
| L.1.1.b | Use common, proper, and possessive nouns. |
| L.1.1.c | Use singular and plural nouns with matching verbs in basic sentences (e.g., *He hops; We hop*). |
| L.1.1.d | Use personal, possessive, and indefinite pronouns (e.g., *I, me, my; they, them, their; anyone, everything*). |
| L.1.1.e | Use verbs to convey a sense of past, present, and future (e.g., *Yesterday I walked home; Today I walk home; Tomorrow I will walk home*). |
| L.1.1.f | Use frequently occurring adjectives. |
| L.1.1.g | Use frequently occurring conjunctions (e.g., *and, but, or, so, because*). |
| L.1.1.h | Use determiners (e.g., articles, demonstratives). |
| L.1.1.i | Use frequently occurring prepositions (e.g., *during, beyond, toward*). |
| L.1.1.j | Produce and expand complete simple and compound declarative, interrogative, imperative, and exclamatory sentences in response to prompts. |
| L.1.2 | Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling when writing. |
| L.1.2.a | Capitalize dates and names of people. |
| L.1.2.b | Use end punctuation for sentences. |
| L.1.2.c | Use commas in dates and to separate single words in a series. |
| L.1.2.d | Use conventional spelling for words with common spelling patterns and for frequently occurring irregular words. |
| L.1.2.e | Spell untaught words phonetically, drawing on knowledge of phonemic awareness and spelling conventions. |
| L.1.4 | Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on grade 1 reading and content, choosing flexibly from an array of strategies. |
| L.1.4.a | Use sentence-level context as a clue to the meaning of a word or phrase. |
| L.1.4.b | Use frequently occurring affixes as a clue to the meaning of a word. |
| L.1.4.c | Identify frequently occurring root words (e.g., *look*) and their inflectional forms (e.g., *looks, looked, looking*). |
| L.1.5 | With guidance and support from adults, demonstrate understanding of word relationships and nuances in word meanings. |
| L.1.5.a | Sort words into categories (e.g., colors, clothing) to gain a sense of the concepts the categories represent. |
| L.1.5.b | Define words by category and by one or more key attributes (e.g., *a duck is a bird that swims; a tiger is a large cat with stripes*). |
| L.1.5.c | Identify real-life connections between words and their use (e.g., note places at home that are cozy). |
| L.1.5.d | Distinguish shades of meaning among verbs differing in manner (e.g., *look, peek, glance, stare, glare, scowl*) and adjectives differing in intensity (e.g., *large, gigantic*) by defining or choosing them or by acting out the meanings. |
| L.1.6 | Use words and phrases acquired through conversations, reading and being read to, and responding to texts, including using frequently occurring conjunctions to signal simple relationships (e.g., *because*). |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×2) = 36 weeks. Session model: **4 sessions per week, 20–25 minutes
each** (16 sessions per unit). Session types rotate across explicit lesson,
word-work or writing practice, reading practice, and review — named per unit
below. K–2 tasks remain oral, pointing, drawing, manipulative, or adult-scribed
as needed, with explicit adult directions; grade 1 begins short independent
written practice (4–6 tasks) that the adult reviews the same day.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (sound warm-ups, tile/card trays, read-aloud
  turn-taking, exit-check rituals) and baseline each objective's entry point.
- Sessions: playful one-on-one probes — blend these sounds; segment this word;
  long or short vowel?; read these CVC words; name the letters and their sounds;
  read a short decodable line; retell a read-aloud; draw and dictate one sentence.
- No new instruction; record observations against the track objectives.

### Unit 01 — Phonemic review, short vowels, and decoding (Weeks 3–6)

- **Standards:** RF.1.1, RF.1.1.a; RF.1.2, RF.1.2.a–d; RF.1.3.b
- **Week 3 goal:** sentence features (first word, capitalization, ending
  punctuation — RF.1.1.a); blend and segment review; long vs. short vowel sounds.
- **Week 4 goal:** isolate initial, medial-vowel, and final sounds; decode
  regularly spelled one-syllable short-vowel words.
- **Week 5 goal:** short-vowel word families; word building with letter tiles;
  segmenting dictation.
- **Week 6:** review week — sound games, blending ladders, formative check.
- Sessions rotate: explicit phonics lesson → tile/card word work → decodable-line
  reading practice → review game.

### Unit 02 — Consonant blends, digraphs, and spelling (Weeks 7–10)

- **Standards:** RF.1.2.b; RF.1.3.a–b; L.1.2.d–e
- **Week 7 goal:** initial consonant blends (bl, cr, st, ...); blend and segment
  words with blends orally.
- **Week 8 goal:** final blends; consonant digraphs sh, ch, th, wh.
- **Week 9 goal:** digraphs ck, ng; spelling dictation — conventional patterns
  first, phonetic attempts accepted (L.1.2.d–e).
- **Week 10:** review week — blend/digraph sorts, spelling check, formative check.
- Sessions rotate: explicit phonics lesson → word-sort/word-building practice →
  dictation and spelling practice → review game.

### Unit 03 — Long-vowel patterns and high-frequency word practice (Weeks 11–14)

- **Standards:** RF.1.3.c, RF.1.3.d–g
- **Week 11 goal:** final-e (CVCe) pattern; contrast short vs. long in word pairs
  (*cap/cape*).
- **Week 12 goal:** common vowel teams (ai, ay, ee, ea, oa, ow).
- **Week 13 goal:** inflectional endings (-s, -es, -ed, -ing); two-syllable words
  by breaking into syllables (every syllable has a vowel sound); high-frequency
  irregular words.
- **Week 14:** review week — vowel-pattern sorts, two-syllable practice,
  sight-word check, formative check.
- Sessions rotate: explicit phonics lesson → pattern-sort and word-list practice
  → connected decodable reading → review game.

### Unit 04 — Fluency, retelling, characters, and key details (Weeks 15–18)

- **Standards:** RF.1.4, RF.1.4.a–c; RL.1.1–7, RL.1.9; SL.1.2
- **Week 15 goal:** reread for accuracy, rate, and expression; self-correct with
  context; ask and answer questions about key details.
- **Week 16 goal:** retell with key details and the central message or lesson;
  describe characters, settings, and major events.
- **Week 17 goal:** words that suggest feelings or appeal to the senses; who is
  telling the story; illustrations and details for characters/settings/events;
  compare characters' adventures.
- **Week 18:** midyear review (flexible) — cumulative decoding, fluency, and
  retelling; re-teach the highest-need objective; formative check of Units 01–04.
- Sessions rotate: modeled fluent reading lesson → partner/echo rereading
  practice → retelling and story-talk practice → review.

### Unit 05 — Informational reading: topics and text features (Weeks 19–22)

- **Standards:** RI.1.1–10; RL.1.5; W.1.8; L.1.4
- **Week 19 goal:** ask and answer questions about key details; identify the main
  topic and retell key details; storybooks vs. information books (RL.1.5).
- **Week 20 goal:** text features — headings, table of contents, glossaries,
  icons — to locate facts; distinguish picture information from word information.
- **Week 21 goal:** word meaning in informational text (context, affixes, root
  words); use illustrations and details to describe key ideas; name the reasons
  an author gives.
- **Week 22:** review week — compare two texts on the same topic; describe
  connections between people, events, and ideas; formative check.
- Sessions rotate: informational read-aloud lesson → text-feature scavenger
  practice → question-and-retell practice → review.

### Unit 06 — Sentences, capitalization, punctuation, and grammar (Weeks 23–26)

- **Standards:** RF.1.1.a; L.1.1.a–j; L.1.2.a–c; SL.1.6
- **Week 23 goal:** sentences vs. fragments; four sentence types; end punctuation;
  speak and write in complete sentences.
- **Week 24 goal:** nouns — common, proper, possessive; singular and plural nouns
  with matching verbs; capitalize dates and names of people.
- **Week 25 goal:** pronouns; past, present, and future verbs; adjectives;
  commas in dates and in a series.
- **Week 26:** review week — conjunctions, determiners, prepositions; dictated
  sentences with punctuation; formative check.
- Sessions rotate: explicit grammar lesson → sentence-building practice →
  dictation and editing practice → review game.

### Unit 07 — Opinion, explanatory, and narrative writing (Weeks 27–30)

- **Standards:** W.1.1–3, W.1.5; L.1.2.d–e; L.1.5
- **Week 27 goal:** opinion pieces — topic or book, an opinion, a reason, some
  sense of closure.
- **Week 28 goal:** informative texts — a topic, some facts, some closure; gather
  information from provided sources.
- **Week 29 goal:** narratives — two or more sequenced events with details,
  temporal words, and closure; word shades of meaning through acting (L.1.5.d).
- **Week 30:** review week — revise with adult guidance (W.1.5); spelling
  conventions; formative check.
- Sessions rotate: writing-model lesson → guided drafting practice →
  drawing-and-writing practice → share-and-revise circle.

### Unit 08 — Speaking, listening, research, and revised reading–writing portfolio (Weeks 31–34)

- **Standards:** SL.1.1.a–c, SL.1.2–6; W.1.6–8; RL.1.10, RI.1.10; L.1.6
- **Week 31 goal:** discussion rules; build on others' talk across exchanges; ask
  questions to clear up confusion.
- **Week 32 goal:** shared research and writing project — gather information from
  provided sources and write a sequence of instructions (W.1.7–8).
- **Week 33 goal:** describe people, places, things, and events with relevant
  details; add drawings to clarify ideas; produce and publish writing with adult
  guidance (W.1.6); use conjunctions to signal relationships (L.1.6).
- **Week 34:** review week — portfolio share of revised reading and writing;
  formative check.
- Sessions rotate: discussion lesson → research-and-write practice →
  describe-and-draw practice → review and share.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all eight objectives; re-teach
  where evidence shows gaps; final observational assessment and keys (delivered
  with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 03 opens with
digraph review, Unit 05 with the retelling routine, Unit 07 with sentence
punctuation). Midyear (Week 18) and final (Weeks 35–36) weeks are full-track
reviews. Formative checks are observed, oral, drawn, or short written tasks
(4–6 items) the adult reviews the same day; each unit's teacher guide specifies
what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/language_arts_parts_of_speech.md`,
  `resources/language_arts_sentence_structure.md`,
  `resources/language_arts_literary_terms.md` — adult vocabulary references
  only; keep grammar terminology accurate in teacher guides. Do not assign to the
  learner.
- `resources/language_arts_great_books_and_stories.md` — Aesop's fables as
  public-domain read-aloud candidates for Unit 04; original grade-1 passages
  otherwise. Do not reproduce the guide's summaries as learner text.
- Letter-tile, word-card, and word-sort templates will be created once in
  Units 01–03 and reused; do not duplicate per unit.
- Same-grade math/science tracks and grades 4–8 language arts are **not**
  reused for grade-1 instruction (grade-band mismatch).

## 8. Safe materials

Household or dollar-store supplies: letter tiles or magnetic letters, word cards
(decodable and high-frequency), pocket chart, notebooks and pencils, drawing
paper and crayons, picture books and decodable readers (library or adult-made),
small mirror (mouth shapes for sounds), sand tray or whiteboard for letter
formation, timer. No sharp tools; adult supervises small parts in shared
settings. Read-aloud selections previewed by the adult for age suitability and
advertising-free access.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  dictated writing; short independent written practice (4–6 tasks) reviewed the
  same day.
- Large-print, high-contrast word and letter cards; textured/tactile letters for
  low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table and
  a floor-play variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual word walls; home-language labels welcomed alongside English.
- Every generated or drawn diagram ships with a text-only alternative; color is
  never the only cue.
- Hearing support: face the learner when modeling sounds; mirror work and visual
  mouth-shape cues supplement auditory discrimination.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #12.
- No grade-1-appropriate internal word lists, decodable passages, or read-aloud
  sets exist; units will author original passages and clearly labeled
  public-domain texts (e.g., Aesop) with named fictional practice data where needed.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- A shared grade-1 letter-card/word-card/word-sort asset set should be created
  once (Units 01–03) and reused across units rather than regenerated per unit.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Phonemic review, short vowels, and decoding; U02 Consonant blends, digraphs,
and spelling; U03 Long-vowel patterns and high-frequency word practice; U04
Fluency, retelling, characters, and key details; U05 Informational reading:
topics and text features; U06 Sentences, capitalization, punctuation, and
grammar; U07 Opinion, explanatory, and narrative writing; U08 Speaking,
listening, research, and revised reading–writing portfolio; R00 diagnostic,
midyear/final review, and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #12 body, comments, and label state re-read 2026-10-02 before claiming;
  no competing claim (0 comments prior to the claim comment).
- No `curriculum-in-progress` claims active on any other queue issue at claim
  time; open worker PRs (#63–68, other tracks) were not touched.
- `curriculum/grade-1/` re-inventoried on `main` @ `4870c53`: only `README.md`
  present; language-arts folder created by this run.
- Standards codes/descriptions verified against the Common Core ELA framework
  (thecorestandards.org/ELA-Literacy, RF/1/ and RL/1/ pages opened 2026-10-02;
  RI.1.1–10, W.1.1–3/5–8, SL.1.1–6, and L.1.1/1.2/1.4/1.5/1.6 text cross-checked
  against district CCSS reproductions) — no state adoption, accreditation, or
  alignment certification claimed.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; language-arts guides are middle-grade oriented, hence
  teacher-side only. The four subject objectives map onto the issue's U01–U08
  checklist order, kept as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
