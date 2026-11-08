# Grade 8 Language Arts — Scope and Sequence

Audit section A00 of [issue #40](https://github.com/murderszn/open-tutor/issues/40).
Status: **validated draft** (this document, the track README, and the grade-8
hub page); the eight units are planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-06 against `main` (commit `2c43d24`). The track holds
**22 Markdown files** (2026-10-01 baseline said 22; confirmed): one track
README, 3 assignments, 16 quizzes, 2 templates.

| Item | Location | Decision |
|---|---|---|
| Track README (legacy index) | `curriculum/grade-8/language-arts/README.md` | **Replaced in this run** — rewritten as a real track README: course description, 14 measurable objectives, standards summary, planned-unit list, adult guidance. The old index listed assignments/quizzes/templates only; nothing else of value to preserve |
| `assignments/argumentative-essay-studio.md` (123 lines) | track assignments | **Revise into U06 seed** — sound project frame: debatable thesis, two evidence-based body paragraphs, dedicated counterclaim/rebuttal paragraph, ethos/pathos/logos integration, MLA in-text citation, active voice + semicolons as style targets. Topic options (AI & labor, etc.) are usable. Missing: teaching lessons, modeled thesis/rebuttal examples, teacher scoring notes, revision checkpoints. Rebuild at U06 with those added |
| `assignments/hamlet-soliloquy-analysis.md` | track assignments | **Revise into U02 seed** — close-reading checklist (quote lead-ins, Act/Scene/Line citation, diction analysis, literary present tense) is genuinely useful grade-8 material. Rebuild at U02 with lessons that teach the checklist's moves, Folger text links re-verified, and a separate teacher key |
| `assignments/romeo-and-juliet-foils.md` | track assignments | **Revise into U02 seed** — foil-analysis frame plus mature-themes preview note for the adult. Rebuild at U02 with taught lessons on foils/dramatic irony and a separate key |
| 16 `quizzes/*.md` (argumentative foundations; classical rhetoric ethos/pathos/logos; comparative rhetoric & literary synthesis; counterclaims/rebuttals/fallacies; fall-semester final; Harlem Renaissance ×2; mechanics voice ×1; mechanics semicolons ×1; Douglass; Lincoln/Gettysburg; Shakespeare Globe/iambic pentameter; Hamlet ×2; Romeo & Juliet ×2) | track quizzes | **Revise, do not adopt verbatim** — the question stems are real, grade-fitting material (e.g., Douglass vs. McKay on racial violence; Romeo's vs. Hamlet's tragic flaws; vernacular free verse vs. strict sonnet). But every quiz carries two structural problems: (1) the answer key sits inside the **student file** as a "🔒 Parent Answer Key" `<details>` collapsible block — keys must move to separate key files at unit build; (2) each quiz cites a nonexistent "Semester Resource Library" and a YouTube *search* URL whose query string is the quiz title plus em-dashes, which reads as a fabricated video recommendation. Unit builds re-verify every stem, move keys out, and replace the shelf/video links with real Resource Packs |
| `templates/audiobook-trailers.md` (3 lines) | track templates | **Keep as U02/U08 media seed** — a 60–90-second literary trailer with an interpretive angle, one piece of textual evidence, and a spoiler-aware call to action. Thin but sound; the unit builds expand it into a presentation task with a rubric |
| `templates/video-reviews.md` | track templates | **Keep as U05/U08 media seed** — same treatment: expand into a structured task with rubric at build |
| "Semester Resource Library" (cited 19× across all 16 quizzes + 3 assignments) | referenced shelf | **Dangling reference — no such file exists in the repo.** Confirmed by filename search. Unit builds replace every citation with a per-unit verified Resource Pack (internal guides, focused queries, curated or clearly labeled search-link videos, reputable web references, task-to-resource mapping) |
| Grade-8 hub page | `curriculum/grade-8/README.md` | **Update in this run** — Language Arts added to Core Subjects with truthful "draft audit" status; legacy `stem/` link preserved |
| `resources/language_arts_parts_of_speech.md` (203 lines) | LA reference guide | **Reuse with verification** — U04 grammar background; check grade-8 fit of the "kid-friendly" framing before citing |
| `resources/language_arts_sentence_structure.md` (160 lines) | LA reference guide | **Reuse with verification** — U04 sentence variety / subordination; verify before citing |
| `resources/language_arts_literary_terms.md` (263 lines) | LA reference guide | **Reuse with verification** — U01/U02/U05/U08 device vocabulary (foil, irony, motif, extended metaphor); verify definitions before citing |
| `resources/language_arts_great_books_and_stories.md` (176 lines) | LA reference guide | **Reuse with verification** — U02/U08 allusion background (myth, Shakespeare summaries); links to Project Gutenberg, LibriVox, CommonLit; verify before citing |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — drives each unit's Resource Pack format |
| Purdue OWL links (argumentative essays, MLA guide, general writing) | cited references | **Verify at build** — OWL restructured its URLs in recent years; each unit confirms the target page still resolves |
| Folger Shakespeare links (Hamlet, Romeo & Juliet, "How to read Shakespeare") | cited references | **Verify at build** — edition cited by the learner (Folger vs. school text) must match Act/Scene/Line tasks |

No lessons, no taught units, no teacher guides, no diagnostic, no resource
packs, and no teaching images exist anywhere in `curriculum/grade-8/language-arts/`.
The gap is total for core instruction: the legacy files are assessment/project
stems and prompts only. Nothing in the track reproduces copyrighted text; the
quizzes quote brief, fair-use-length excerpts (a few lines of Hughes, the
Gettysburg Address in full is public domain, Douglass's 1852 speech is public
domain).

## 2. Prerequisites

Learners typically enter grade-8 language arts able to (the diagnostic weeks
verify; the track re-teaches insecure skills in use):

- Read grade-7-level fiction and nonfiction independently (about Lexile
  900–1000) and write a multi-paragraph response stating an opinion with at
  least one reason
- Identify basic literary terms (simile, metaphor, theme, plot, character)
  and the eight parts of speech
- Write complete sentences with mostly correct capitalization and end
  punctuation; use a dictionary or digital reference to check spelling
- Participate in a discussion by taking turns and staying on topic

The audit never assumes fluency with evidence-based inference, objective
summary, dramatic irony, rhetorical appeals, counterclaim/rebuttal structure,
research attribution, or formal presentation — those are this track's new
content. Spelling and handwriting/keyboarding fluency are supported, not
assumed, across the writing units.

## 3. Track objectives

Measurable, adult-assessed by end of year (14 objectives; numbered in the
track README):

1. Cite the strongest textual evidence for explicit and inferential claims
   (RL.8.1, RI.8.1).
2. Determine a theme or central idea, analyze its development across a text,
   and write an objective summary (RL.8.2, RI.8.2).
3. Analyze how dialogue or incidents propel action, reveal character, or
   provoke decisions (RL.8.3).
4. Analyze word choice — figurative and connotative meanings — for effect on
   meaning and tone; explain allusions (RL.8.4, L.8.5).
5. Compare text structures and points of view, including dramatic irony, for
   effects such as suspense or humor (RL.8.5, RL.8.6).
6. Analyze how a filmed or staged adaptation stays faithful to or departs
   from a text, evaluating the director's/actors' choices (RL.8.7).
7. Delineate and evaluate an argument's claims: sound reasoning, relevant and
   sufficient evidence, recognition of irrelevant evidence (RI.8.8).
8. Analyze conflicting accounts of the same topic; describe how an author
   acknowledges and responds to conflicting evidence (RI.8.6, RI.8.9).
9. Write arguments with distinguished claims/counterclaims, logical reasoning
   and credible evidence, cohesive transitions, and a supported conclusion
   (W.8.1).
10. Write narratives with dialogue, pacing, description, reflection, and
    sensory language in a well-structured sequence with a reflective
    conclusion (W.8.3).
11. Conduct short research: assess source credibility, quote/paraphrase
    without plagiarism, follow a standard citation format (W.8.7, W.8.8).
12. Demonstrate grade-8 conventions: verbals, active/passive voice,
    conditional/subjunctive mood, semicolons/colons/conjunctive adverbs
    (L.8.1, L.8.2, L.8.3).
13. Engage in evidence-based collaborative discussion; present claims with
    multimedia support in formal English (SL.8.1, SL.8.4, SL.8.5, SL.8.6).
14. Use context, affixes/roots, and reference materials for unknown words;
    use grade-appropriate academic vocabulary accurately (L.8.4, L.8.6).

## 4. Standards crosswalk

Reference framework: **Common Core State Standards for English Language Arts,
grade 8** (thecorestandards.org ELA-Literacy pages for RL, RI, W, SL, L).
Codes and descriptions were verified **2026-10-06** on thecorestandards.org;
descriptions below are paraphrases, not reproductions. No state adoption,
accreditation, or alignment certification is claimed.

**Course choice note.** The expansion plan treats grade 8 as a literature,
rhetoric, and composition year. CCSS does not mandate specific texts or unit
order; schools vary. Each unit's build will name its texts and prerequisites
explicitly so a guiding adult can re-sequence or substitute lawfully.

### Reading: Literature — U01, U02, U05, U08

- **RL.8.1** (U01, U02, U05, U08) — cite the textual evidence that most
  strongly supports an analysis of what the text says explicitly as well as
  inferences drawn from the text.
- **RL.8.2** (U01, U05, U08) — determine a theme or central idea; analyze its
  development over the text including its relationship to characters,
  setting, and plot; provide an objective summary.
- **RL.8.3** (U02, U05) — analyze how particular lines of dialogue or
  incidents propel the action, reveal aspects of a character, or provoke a
  decision.
- **RL.8.4** (U01, U02, U08) — determine word/phrase meaning including
  figurative and connotative meanings; analyze the impact of specific word
  choices on meaning and tone, including analogies or allusions to other
  texts.
- **RL.8.5** (U02, U05, U08) — compare and contrast the structure of two or
  more texts; analyze how differing structure contributes to meaning and
  style.
- **RL.8.6** (U02, U05) — analyze how differences in the points of view of
  characters and the audience/reader (e.g., dramatic irony) create effects
  such as suspense or humor.
- **RL.8.7** (U02) — analyze the extent to which a filmed or live production
  of a story or drama stays faithful to or departs from the text, evaluating
  the director's or actors' choices.
- **RL.8.9** (U08, enrichment) — analyze how a modern work draws on themes,
  patterns, or character types from myths, traditional stories, or religious
  works; kept as optional enrichment, not a core unit goal.
- **RL.8.10** (all reading units) — by year's end, read and comprehend
  literature at the high end of the grades 6–8 complexity band independently
  and proficiently; the reading level ramps across units.

### Reading: Informational Text — U01, U03, U07

- **RI.8.1** (U01, U03, U07) — same evidence standard as RL.8.1, applied to
  informational text.
- **RI.8.2** (U03, U07) — determine a central idea; analyze its development
  including its relationship to supporting ideas; objective summary.
- **RI.8.3** (U03) — analyze how a text makes connections among and
  distinctions between individuals, ideas, or events.
- **RI.8.4** (U03) — word/phrase meaning including technical meanings; impact
  of word choice on meaning and tone.
- **RI.8.5** (U03) — analyze a paragraph's structure, including the role of
  particular sentences in developing and refining a key concept.
- **RI.8.6** (U03) — determine an author's point of view or purpose; analyze
  how the author acknowledges and responds to conflicting evidence or
  viewpoints.
- **RI.8.7** (U02, U08, secondary) — evaluate advantages/disadvantages of
  different mediums for presenting a topic (film vs. print; audio vs. text).
- **RI.8.8** (U03, U06) — delineate and evaluate the argument and specific
  claims: sound reasoning, relevant and sufficient evidence; recognize
  irrelevant evidence.
- **RI.8.9** (U03) — analyze a case where two or more texts provide
  conflicting information on the same topic; identify where they disagree on
  fact or interpretation.
- **RI.8.10** (all reading units) — same complexity-band expectation for
  literary nonfiction.

### Writing — U04, U05, U06, U07, U08

- **W.8.1 / W.8.1.a / W.8.1.b / W.8.1.c / W.8.1.e** (U06; W.8.1.b also U03) —
  write arguments: introduce claims, acknowledge and distinguish opposing
  claims, organize reasons/evidence logically, support with credible
  sources, use cohesive words/phrases/clauses, conclude in support of the
  argument.
- **W.8.2 / W.8.2.a–d / W.8.2.f** (U07) — write informative/explanatory texts:
  clear topic introduction with categories, formatting/graphics/multimedia,
  relevant facts/definitions/quotations, varied transitions, precise
  domain-specific language, supported conclusion.
- **W.8.3 / W.8.3.a–e** (U05) — write narratives: establish context, point
  of view, narrator/characters; natural event sequence; dialogue, pacing,
  description, reflection; transitions across time frames; precise sensory
  language; reflective conclusion.
- **W.8.4** (all writing units) — clear, coherent writing appropriate to
  task, purpose, and audience.
- **W.8.5** (U04, U05, U06, U07) — plan, revise, edit, rewrite with guidance;
  U04's grammar work is explicitly framed as the editing pass for U01–U03
  drafts.
- **W.8.6** (U07, U08) — use technology to produce and publish writing and
  present relationships between ideas (portfolio publication in U08).
- **W.8.7** (U07) — conduct short research projects answering a
  (possibly self-generated) question from several sources, generating
  further focused questions.
- **W.8.8** (U07) — gather from multiple print/digital sources with effective
  search terms; assess credibility and accuracy; quote or paraphrase while
  avoiding plagiarism; follow a standard citation format.
- **W.8.9** (U02, U03, U06, U07, U08) — draw evidence from literary or
  informational texts to support analysis, reflection, and research.
- **W.8.10** (all writing units) — write routinely over extended and shorter
  time frames for varied tasks, purposes, and audiences.

### Speaking and Listening — U02, U03, U06, U08

- **SL.8.1 / SL.8.1.a–d** (U03, U06, U08) — engage in collaborative
  discussion: come prepared with evidence, follow collegial rules, pose
  connecting questions, acknowledge and respond to others' evidence.
- **SL.8.2** (U03, enrichment) — analyze the purpose of information in
  diverse media and evaluate motives behind its presentation.
- **SL.8.3** (U03, U06) — delineate a speaker's argument and claims;
  evaluate reasoning soundness and evidence relevance/sufficiency.
- **SL.8.4** (U06, U08) — present claims and findings with salient points,
  relevant evidence, and sound reasoning; appropriate eye contact, volume,
  and pronunciation.
- **SL.8.5** (U02, U08) — integrate multimedia/visual displays into
  presentations to clarify information and strengthen claims.
- **SL.8.6** (U06, U08) — adapt speech to context; formal English when
  appropriate.

### Language — U01, U04, U05, U06, U08

- **L.8.1.a** (U04) — explain the function of verbals (gerunds, participles,
  infinitives) generally and in particular sentences.
- **L.8.1.c** (U04) — form and use verbs in the indicative, imperative,
  interrogative, conditional, and subjunctive mood.
- **L.8.2** (U04) — conventions of capitalization, punctuation, and spelling;
  U04's core punctuation load is semicolons, colons, and conjunctive
  adverbs.
- **L.8.3.a** (U04) — use active/passive voice and conditional/subjunctive
  mood to achieve particular effects (emphasizing actor vs. action;
  uncertainty; contrary-to-fact states).
- **L.8.4 / L.8.4.a–d** (U01, U03, U07, U08) — vocabulary strategies:
  context clues, Greek/Latin affixes and roots, reference materials,
  verification of inferred meanings.
- **L.8.5 / L.8.5.b–c** (U01, U02, U08) — figurative language, word
  relationships, and connotation vs. denotation.
- **L.8.6** (all units) — acquire and use grade-appropriate general academic
  and domain-specific vocabulary accurately.

## 5. 36-week sequence

Eight 4-week units (Weeks 3–34), two diagnostic weeks (1–2), and two
final-review weeks (35–36); the midyear review is U04's Week 4 (Week 18) =
36 weeks. Session model: **five 45-minute sessions per week** (20 sessions
per unit): 4–6 core lessons, close-reading or writing-workshop practice
sessions, a vocabulary/reference session, discussion sessions, the unit's
applied project or investigation block, a formative quiz, and a unit review
session. The guiding adult adapts session count and length for learners who
need shorter sessions.

### Weeks 1–2 — Diagnostic placement (before Unit 01)

- **Week 1:** reading readiness (grade-7-level passage: main idea, one
  inference with evidence, vocabulary-in-context); writing sample
  (multi-paragraph opinion with reasons); sentence-level conventions scan.
- **Week 2:** literary-terms and parts-of-speech recall check; discussion
  norms practice; text-access setup (library card, public-domain sources,
  adult-approved editions). Results set the re-teaching targets for
  U01–U02.

### Unit 01 — Close reading: inference, theme, and evidence synthesis (Weeks 3–6)

RL.8.1, RL.8.2, RL.8.4, RI.8.1; L.8.4, L.8.5. Objectives 1–2, 4, 14.

- **Week 3:** what counts as evidence — explicit vs. inferred; the "strongest
  evidence" test; quoting, paraphrasing, and lead-ins. Short stories and
  literary nonfiction excerpts.
- **Week 4:** theme vs. topic; tracking a theme's development across a text;
  objective summary (what it includes and excludes).
- **Week 5:** word choice and tone — figurative language, connotation,
  allusion; vocabulary strategies (context, affixes, references).
- **Week 6:** evidence-synthesis practice block; formative quiz (inference,
  theme, vocabulary); unit review. *First drafts from this unit's writing
  tasks are saved for U04's revision work.*

### Unit 02 — Literature: drama, character foils, and adaptation (Weeks 7–10)

RL.8.1, RL.8.3, RL.8.4, RL.8.5, RL.8.6, RL.8.7; RI.8.7; SL.8.5; W.8.9;
L.8.5. Objectives 1, 3–6, 13.

Core texts (public domain): Shakespeare's *Romeo and Juliet* and *Hamlet*
(Folger or another adult-approved edition; line numbers must match the
edition used). *Re-verified legacy seeds: `romeo-and-juliet-foils.md`,
`hamlet-soliloquy-analysis.md`, the four Romeo & Juliet / Hamlet quizzes,
and the Globe/iambic-pentameter quiz.*

- **Week 7:** reading drama — dialogue, stage directions, soliloquy vs.
  monologue; iambic pentameter and the Globe as performance context.
- **Week 8:** character foils (Benvolio/Tybalt; Fortinbras/Laertes/Hamlet)
  and dramatic irony; how dialogue and incidents reveal character and
  provoke decisions.
- **Week 9:** structure comparison across the two plays; adaptation study —
  a filmed or staged scene vs. the script (fidelity, director/actor
  choices). Multimedia presentation (audiobook-trailer template expanded).
- **Week 10:** formative quiz; unit review. *Adult previews mature themes
  (violence, suicide, grief) and offers an alternate text addressing the
  same skills if needed.*

### Unit 03 — Informational rhetoric: argument and conflicting accounts (Weeks 11–14)

RI.8.1–RI.8.6, RI.8.8, RI.8.9; SL.8.1, SL.8.3; W.8.1.b, W.8.9.
Objectives 1, 7–8, 13.

Core texts (public domain anchors): Frederick Douglass's 1852 "What to the
Slave Is the Fourth of July?" and Lincoln's Gettysburg Address, plus one
modern pair of conflicting accounts on a civic topic. *Re-verified legacy
seeds: the Douglass and Lincoln quizzes, argumentative-foundations quiz,
classical-rhetoric (ethos/pathos/logos) quiz, and the comparative-rhetoric
quiz's informational half.*

- **Week 11:** rhetorical appeals — ethos, pathos, logos — identified in
  Douglass and Lincoln; paragraph structure and the role of key sentences.
- **Week 12:** delineating an argument: claims, reasoning, evidence quality;
  spotting irrelevant evidence; author's point of view and purpose.
- **Week 13:** conflicting accounts — two texts on one topic; where they
  disagree on fact vs. interpretation; how each handles opposing evidence.
  Structured discussion (SL.8.1) with prepared evidence.
- **Week 14:** formative quiz (argument evaluation, appeals, conflicting
  accounts); unit review. *Discussion notes feed U06's argument writing.*

### Unit 04 — Grammar: voice, verbals, punctuation, and style (Weeks 15–18)

L.8.1.a, L.8.1.c, L.8.2, L.8.3.a; W.8.5. Objective 12 (plus revision of 9–10
drafts).

Placed mid-year deliberately: the learner now has real drafts (U01–U03) to
revise, so grammar is taught as an editing toolkit, not isolated drills.
*Re-verified legacy seeds: the two mechanics quizzes (active/passive voice;
semicolons/colons/conjunctive adverbs).*

- **Week 15:** verbals — gerunds, participles, infinitives — and what they
  do in sentences; sentence variety through subordination.
- **Week 16:** active vs. passive voice as a stylistic choice; verb moods —
  conditional and subjunctive — for uncertainty and contrary-to-fact
  statements.
- **Week 17:** punctuation for clarity — semicolons, colons, conjunctive
  adverbs; capitalization and spelling conventions review. Editing pass on
  the learner's own U01–U03 drafts.
- **Week 18:** formative quiz + **midyear review block** (U01–U03 key moves:
  evidence citation, theme development, argument evaluation); cumulative
  check-in with answer key.

### Unit 05 — Narrative: perspective, pacing, and crafted scenes (Weeks 19–22)

W.8.3, W.8.3.a–e; RL.8.3, RL.8.5, RL.8.6; W.8.4, W.8.5, W.8.10.
Objectives 3, 5, 10.

- **Week 19:** point of view and narrator reliability; how perspective
  shapes what the reader knows (ties back to RL.8.6 dramatic irony).
- **Week 20:** pacing and scene craft — dialogue, description, reflection;
  transitions across time frames; sensory language.
- **Week 21:** writing workshop — drafting a complete narrative with an
  event sequence that unfolds naturally; peer/adult feedback on craft moves.
- **Week 22:** revision and reflective conclusion; formative quiz
  (narrative technique, POV effects); unit review.

### Unit 06 — Argument writing: counterclaims, rebuttals, and reasoning (Weeks 23–26)

W.8.1, W.8.1.a–c, W.8.1.e; RI.8.8; SL.8.1, SL.8.3, SL.8.4, SL.8.6; W.8.5,
W.8.9, W.8.10; L.8.1–L.8.3 (applied). Objectives 7, 9, 12–13.

*Re-verified legacy seeds: `argumentative-essay-studio.md` (project frame),
counterclaims/rebuttals/fallacies quiz, classical-rhetoric quiz.*

- **Week 23:** from U03 reading to writing — distinguishing claim from
  counterclaim; organizing reasons and evidence logically; thesis workshop.
- **Week 24:** the counterclaim/rebuttal paragraph — fair summary of the
  opposing stance, then rebuttal with stronger evidence; logical fallacies
  to avoid.
- **Week 25:** cohesion — transitions among claims, counterclaims, reasons,
  evidence; rhetorical appeals used intentionally; MLA in-text citation.
  Writing workshop with revision.
- **Week 26:** formal presentation of the argument (SL.8.4/SL.8.6);
  formative quiz (argument structure, fallacies, citation); unit review.

### Unit 07 — Research synthesis, attribution, and explanatory essays (Weeks 27–30)

W.8.2, W.8.2.a–d, W.8.2.f; W.8.7, W.8.8, W.8.9; RI.8.1, RI.8.2; SL.8.1;
W.8.6. Objectives 2, 8, 11, 14.

- **Week 27:** asking researchable questions; search terms; gathering from
  multiple print and digital sources.
- **Week 28:** assessing credibility and accuracy; distinguishing fact,
  interpretation, and opinion across sources (builds on U03).
- **Week 29:** quoting vs. paraphrasing; avoiding plagiarism; standard
  citation format (MLA, continuing U06); organizing findings into
  categories with headings and graphics where useful.
- **Week 30:** explanatory essay workshop; formative quiz (source
  evaluation, attribution, explanatory structure); unit review.

### Unit 08 — Poetry: comparative analysis, presentations, and portfolio (Weeks 31–34)

RL.8.1, RL.8.2, RL.8.4, RL.8.5; RI.8.7; SL.8.1, SL.8.4, SL.8.5, SL.8.6;
W.8.6, W.8.9, W.8.10; L.8.5, L.8.6. Objectives 1–2, 4–6, 13–14.

Core texts: Harlem Renaissance anchor poems — McKay's "If We Must Die"
(1919, public domain), Hughes's "Mother to Son" (1922, public domain);
brief fair-use quotations only from in-copyright Hughes poems ("Harlem"
1951, "Theme for English B" 1951), linked via Poetry Foundation/CommonLit
rather than reproduced. *Re-verified legacy seeds: the two Harlem
Renaissance quizzes, the comparative-rhetoric quiz's literary half, and the
audiobook-trailer template (expanded into the final presentation).*

- **Week 31:** form and sound — vernacular free verse vs. strict sonnet;
  how structure shapes meaning and rhetorical effect.
- **Week 32:** extended metaphor and sensory imagery; connotation and word
  relationships; comparing two poets' treatment of dignity and resistance.
- **Week 33:** comparative analysis essay; multimedia presentation of one
  poem's interpretation (SL.8.5); portfolio assembly — best work from
  U01–U08 with revision reflections (W.8.6 publishing).
- **Week 34:** presentations; formative quiz; track-level review session.

### Weeks 35–36 — Final review and cumulative assessment

- **Week 35:** structured review of U01–U08 key moves with the adult;
  practice with the cumulative question bank (answer key provided).
- **Week 36:** cumulative assessment (separate teacher guide and key in the
  R00 review section when delivered); results feed the next placement
  decision, not a public record.

## 6. Session model, materials, and accessibility

- **Session model:** five 45-minute sessions per week. A typical unit week
  mixes 2–3 lesson sessions, 1 close-reading or writing-workshop session, 1
  vocabulary/reference or discussion session, and (in weeks 4, 8, 12, …) the
  project block, formative quiz, and review. The guiding adult adapts
  session length and count for the learner's stamina.
- **Materials:** books or lawful digital texts (library, Project Gutenberg,
  LibriVox, CommonLit, Poetry Foundation, Folger Shakespeare), a writer's
  notebook (paper or digital), dictionary/thesaurus access (print or free
  digital), and a device for presentations only where the adult approves.
  Nothing requires purchased curriculum; no account-walled resource is the
  sole route to any core objective.
- **Reading level:** unit texts target grade-8 nonfiction and literature
  (about Lexile 1000–1100); key terms are defined in context and in a unit
  glossary; every lesson pairs text with a discussion, model, or graphic
  organizer. Text complexity ramps from U01 to U08 toward RL.8.10/RI.8.10.
- **Accessibility:** every close-reading task names an audio alternative
  (LibriVox, adult read-aloud); writing tasks allow dictation/scribe support
  with the learner directing revisions; discussion participation can be
  written; every generated image ships with alt text, a caption, and a
  text-only alternative; extension tasks (stylistic analysis, additional
  texts) and support tasks (sentence frames, modeled responses) are built
  into each unit.
- **Content guidance:** the adult previews all literary selections for
  mature themes — violence and suicide (Shakespeare), racism and grief
  (Harlem Renaissance, Douglass) — and offers an alternate text addressing
  the same skill where needed. Units never reproduce copyrighted poems or
  prose in full; they link to lawful sources and quote briefly. Biblical
  allusions are taught as literary/historical references, not devotional
  content.

## 7. Internal resource reuse and future unit paths

- `argumentative-essay-studio.md` → U06 project seed (add lessons, modeled
  examples, revision checkpoints, separate key at build).
- `hamlet-soliloquy-analysis.md` + `romeo-and-juliet-foils.md` → U02 lesson
  and project seeds (teach the checklists' moves; separate keys).
- 16 legacy quizzes → question stems re-verified at build; **all embedded
  `<details>` answer keys moved to separate key files**; "Semester Resource
  Library" citations replaced by per-unit Resource Packs; search-URL video
  links replaced with curated or clearly labeled search links.
- `templates/audiobook-trailers.md` → U02/U08 presentation task (expanded
  with rubric); `templates/video-reviews.md` → U05/U08 media task.
- `resources/language_arts_literary_terms.md` → U01/U02/U05/U08 device
  vocabulary (verify definitions before citing).
- `resources/language_arts_parts_of_speech.md`,
  `resources/language_arts_sentence_structure.md` → U04 grammar background
  (check grade-8 fit of the explanatory framing).
- `resources/language_arts_great_books_and_stories.md` → U02/U08 allusion
  background and lawful-text links (Gutenberg, LibriVox, CommonLit).
- U04's grammar instruction should cross-check the grade-8 science and
  social-studies tracks' writing expectations once those units land, so
  conventions language stays consistent — tracked as a note for the unit
  builds, not a blocker.
- Planned file layout (prose until built; no links to unwritten files):
  `curriculum/grade-8/language-arts/units/unit-01-close-reading/` through
  `unit-08-poetry-portfolio/`, each per `unit-requirements.md` (overview,
  pacing, objectives, vocabulary, standards notes, 4–6 lessons,
  investigation/project, quiz, assessment, teacher guide + key, Resource
  Pack, generated image in `assets/`).

## 8. Validation notes (this run)

- Track inventory confirmed on `main`: 22 Markdown files listed in section 1
  (1 legacy README + 3 assignments + 16 quizzes + 2 templates).
- CCSS ELA grade-8 codes RL.8.1–RL.8.10, RI.8.1–RI.8.10, W.8.1–W.8.10,
  SL.8.1–SL.8.6, L.8.1–L.8.6 checked 2026-10-06 against official text on
  thecorestandards.org (RL/8, RI/8, W/8, SL/8, L/8 pages). Descriptions in
  section 4 are paraphrases. Not every sub-code is a unit target; only
  codes mapped to units are claimed, and RL.8.9 is enrichment-only.
- "Semester Resource Library" confirmed absent by repo-wide filename
  search; 19 citations of it found across the track's legacy files.
- No copyrighted material reproduced in the new documents; legacy quizzes
  quote only brief excerpts. Text-rights rules for the unit builds are
  recorded in section 6.
- All links in the two new documents point to existing files or prose; no
  dangling links to planned units.
- Manifest and index updates: `grade-8/language-arts/scope-and-sequence.md`
  added as `subject-index` (README entry already existed); grade-8 hub
  updated; curriculum index updated (see delivery comment).

## Sources checked 2026-10-06

- CCSS ELA grade 8, Reading: Literature — https://www.thecorestandards.org/ELA-Literacy/RL/8/
- CCSS ELA grade 8, Reading: Informational Text — https://www.thecorestandards.org/ELA-Literacy/RI/8/
- CCSS ELA grade 8, Writing — https://www.thecorestandards.org/ELA-Literacy/W/8/
- CCSS ELA grade 8, Speaking & Listening — https://www.thecorestandards.org/ELA-Literacy/SL/8/
- CCSS ELA grade 8, Language — https://www.thecorestandards.org/ELA-Literacy/L/8/
- Legacy track files on `main`: `curriculum/grade-8/language-arts/`
  (22 files inventoried; assignments, quiz, and template samples read in full)
- `resources/language_arts_parts_of_speech.md`,
  `resources/language_arts_sentence_structure.md`,
  `resources/language_arts_literary_terms.md`,
  `resources/language_arts_great_books_and_stories.md`
