# Kindergarten Social Studies — Scope and Sequence

Audit section A00 of [issue #9](https://github.com/murderszn/open-tutor/issues/9).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-02 against `main` (commit `4870c53`).

| Item | Location | Decision |
|---|---|---|
| Grade-K hub page | `curriculum/grade-k/README.md` | **Revise** — updated to reflect the social studies track's audit status and link the new subject folder |
| Curriculum index | `curriculum/README.md` | **Revise** — Kindergarten line now names math and social studies audits |
| Kindergarten social studies folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade social studies content | none (0 Markdown files under `curriculum/grade-k/` before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math audit (issue #6, merged) | `curriculum/grade-k/math/` | **No instructional reuse** — different subject; its manipulative-based pacing model informed session design only |
| Same-grade science (#7) and language arts (#8) audits | open draft PRs, not on main | **No reuse** — not merged; nothing substantive to borrow yet |
| Same-subject content, grades 4/5/7/8 (incl. `assignments/social-studies/history-of-war/`) | `curriculum/grade-4/…` etc., `assignments/` | **No reuse for K instruction** — targets ages 9+; conflict and research topics are not age-appropriate at K |
| `resources/world_facts.md` | snapshot lists, dated | **Teacher-side reference only** — never assigned; units use classroom/school maps, not country data |
| `resources/government_basics.md` | Wikipedia-linked branches/agencies guide | **Teacher-side reference only** — U03's "government as city helpers" adaptation is written at K level; the guide itself is not assignable |
| `resources/united_states_understanding_and_principles.md` | older-learner overview | **No reuse at K** — concepts (monarchy, constitutional change) beyond the K band |
| `resources/black_excellence_figures.md` | research guide for older students | **Not directly reusable** — U07 figure stories will be original simplified retellings at K listening level; the guide's research links target independent readers |
| `resources/wars_fundamentals.md` | conflict/state-building companion | **No reuse at K** — conflict content is not age-appropriate for kindergarten |
| `resources/supply_and_demand_economics.md` | grades 5+ micro/macro guide | **Teacher-side reference only** — adult adapts scarcity/price vocabulary for U05; never assigned |
| Repository datasets (`us_states.csv`, `us_presidents.csv`, `un_countries.csv`, `un_countries.json`) | country/state magnitudes, dated snapshots | **No direct reuse at K** — magnitudes (millions/billions) exceed the K number band; units use original small, familiar scenarios and named fictional practice data where needed |
| Shared assignment catalog | `assignments/README.md` | **No K-applicable items** — all cataloged assignments target older grades |
| `resources/README.md`, `resources/semester-resource-library.md` | reference shelves | **Reference only** — no K-banded social studies shelf exists yet; flagged as a shared gap for the cross-track review |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |

No existing K social studies material was inaccurate or inappropriate; there was
simply none. No keep decisions beyond the two index pages; everything substantive
is a gap to be built.

## 2. Prerequisites

Learners typically enter K social studies with:

- Emerging self/other awareness: can name a favorite food, color, or activity
- Follows one-step directions; two-step directions emerging
- Turn-taking emerging; can sit for a 5–10 minute circle time with movement breaks
- Basic positional and sequence language emerging ("in/on/under", "first/then")
- Curiosity about "why" and "how" questions; points to ask

No reading or writing is required. The adult reads everything aloud, scribes
responses, and adapts every task to oral, pointing, drawing, or manipulative modes.
The diagnostic weeks (Weeks 1–2) assess these; Unit 01 assumes none are secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Describe what makes them unique (favorites, talents, family traditions) in
   words, drawings, or gestures, and participate in classroom community routines —
   without disclosing personal information in shared products.
2. State why classroom rules exist, follow agreed rules, take turns fairly, and
   take part in a classroom vote or consensus decision.
3. Name five or more community helpers, describe what each one does and the tools
   they use, and explain how their work helps the community.
4. Read a simple pictorial map of a familiar place (classroom or school) using
   symbols and a legend, use positional words to find and describe locations, and
   identify land and water on a globe.
5. Distinguish needs from wants with examples; explain that people earn money by
   working, can choose to spend or save it, and exchange goods and services.
6. Order three or more events in sequence (first/next/last; morning/afternoon/
   night; days of the week) and compare one familiar thing "long ago" with today.
7. Name one family or classroom tradition, describe a tradition from another
   culture with respectful curiosity, and show how different traditions can be
   shared kindly.
8. Notice a problem in a shared place, propose and carry out an age-appropriate
   caring action with adult help, and explain how the action helped.

## 4. Standards crosswalk

Reference framework: **C3 Framework for Social Studies State Standards**
(College, Career, and Civic Life), published by the National Council for the
Social Studies; framework landing page
[https://www.socialstudies.org/standards/c3](https://www.socialstudies.org/standards/c3).
Codes and descriptions below are the framework's **K–2 band indicators**
(verified 2026-10-02 against the published indicator tables). The C3 Framework
does not prescribe a kindergarten-specific content sequence: this track's
year-long order is a proposed pathway. No state adoption, accreditation, or
alignment certification is claimed.

### Civics — civic and political institutions, participation, rules

| Code | Description | Units |
|---|---|---|
| D2.Civ.1.K-2 | Describe roles and responsibilities of people in authority. | U02, U03 |
| D2.Civ.2.K-2 | Explain how all people, not just official leaders, play important roles in a community. | U01, U03, U08 |
| D2.Civ.3.K-2 | Explain the need for and purposes of rules in various settings inside and outside of school. | U02 |
| D2.Civ.5.K-2 | Explain what governments are and some of their functions. | U03 (adapted: government as helpers who care for the city) |
| D2.Civ.6.K-2 | Describe how communities work to accomplish common tasks, establish responsibilities, and fulfill roles of authority. | U03, U08 |
| D2.Civ.7.K-2 | Apply civic virtues when participating in school settings. | U01, U02 |
| D2.Civ.8.K-2 | Describe democratic principles such as equality, fairness, and respect for legitimate authority and rules. | U02 |
| D2.Civ.9.K-2 | Follow agreed-upon rules for discussions while responding attentively to others when addressing ideas and making decisions as a group. | U02, U07 |
| D2.Civ.10.K-2 | Compare their own point of view with others' perspectives. | U07 |
| D2.Civ.11.K-2 | Explain how people can work together to make decisions in the classroom. | U02 |
| D2.Civ.12.K-2 | Identify and explain how rules function in public (classroom and school) settings. | U02 |
| D2.Civ.14.K-2 | Describe how people have tried to improve their communities over time. | U08 |

### Economics — decision making, exchange, earning, trade

| Code | Description | Units |
|---|---|---|
| D2.Eco.1.K-2 | Explain how scarcity necessitates decision making. | U05 |
| D2.Eco.2.K-2 | Identify the benefits and costs of making various personal decisions. | U05 (adapted: "what we get / what we give up") |
| D2.Eco.3.K-2 | Describe the skills and knowledge required to produce certain goods and services. | U03 |
| D2.Eco.4.K-2 | Describe the goods and services that people in the local community produce and those that are produced in other communities. | U03, U05 |
| D2.Eco.5.K-2 | Identify prices of products in a local market. | U05 |
| D2.Eco.6.K-2 | Explain how people earn income. | U05 |
| D2.Eco.7.K-2 | Describe examples of costs of production. | U05 (adapted: what a maker needs to make something) |
| D2.Eco.9.K-2 | Describe the role of banks in an economy. | U05 (adapted: a safe place to keep saved money) |
| D2.Eco.10.K-2 | Explain why people save. | U05 |
| D2.Eco.12.K-2 | Describe examples of the goods and services that governments provide. | U03 |
| D2.Eco.13.K-2 | Describe examples of capital goods and human capital. | U03 (adapted: tools helpers use) |
| D2.Eco.14.K-2 | Describe why people in one country trade goods and services with people in other countries. | U05 (adapted: nearby and faraway places) |
| D2.Eco.15.K-2 | Describe products produced abroad and sold domestically and products that are produced domestically and sold abroad. | U05 (adapted: "made far away, sold here") |

### Geography — representations, human–environment interaction, movement

| Code | Description | Units |
|---|---|---|
| D2.Geo.1.K-2 | Construct maps, graphs, and other representations of familiar places. | U04 |
| D2.Geo.2.K-2 | Use maps, graphs, photographs and other representations to describe places and the relationships and interactions that shape them. | U04 |
| D2.Geo.3.K-2 | Use maps, globes, and other simple geographic models to identify cultural and environmental characteristics of places. | U04 |
| D2.Geo.4.K-2 | Explain how weather, climate, and other environmental characteristics affect people's lives in a place or region. | U08 |
| D2.Geo.5.K-2 | Describe how human activities affect the cultural and environmental characteristics of places or regions. | U08 |
| D2.Geo.6.K-2 | Identify some cultural and environmental characteristics of specific places. | U04, U07 |
| D2.Geo.7.K-2 | Explain why and how people, goods, and ideas move from place to place. | U03 |
| D2.Geo.8.K-2 | Compare how people in different types of communities use local and distant environments to meet their daily needs. | U05, U07 |
| D2.Geo.9.K-2 | Describe the connections between the physical environment of a place and the economic activities found there. | U03 (adapted) |
| D2.Geo.10.K-2 | Describe changes in the physical and cultural characteristics of various world regions. | U06 |
| D2.Geo.11.K-2 | Explain how the consumption of products connects people to distant places. | U05 |
| D2.Geo.12.K-2 | Identify ways that a catastrophic disaster may affect people living in a place. | U08 (adapted, safety-conscious: storms and helpers) |

### History — sequence, past vs. present, working with sources

| Code | Description | Units |
|---|---|---|
| D2.His.1.K-2 | Create a chronological sequence of multiple events. | U06 |
| D2.His.2.K-2 | Compare life in the past to life today. | U06 |
| D2.His.3.K-2 | Generate questions about individuals and groups who have shaped a significant historical change. | U07 (adapted) |
| D2.His.4.K-2 | Compare perspectives of people in the past to those of people in the present. | U06 (adapted) |
| D2.His.6.K-2 | Compare different accounts of the same historical event. | U06 (adapted: two adult-told retellings) |
| D2.His.9.K-2 | Identify different kinds of historical sources. | U06 |
| D2.His.10.K-2 | Explain how historical sources can be used to study the past. | U06 |
| D2.His.11.K-2 | Identify the maker, date, and place of origin for a historical source from information within the historical source itself. | U06 (adapted: "who made this picture, when?") |
| D2.His.12.K-2 | Generate questions about a particular historical source as it relates to a particular historical event or development. | U06 (adapted) |
| D2.His.14.K-2 | Generate possible reasons for an event or development in the past. | U06 |
| D2.His.16.K-2 | Select which reasons might be more likely than others to explain a historical event or development. | U06 (adapted) |

### Inquiry — questions, sources, communication, action (Dimensions 1, 3, 4)

| Code | Description | Units |
|---|---|---|
| D1.1.K-2 | Explain why the compelling question is important to the student. | Every unit's opening |
| D1.5.K-2 | Determine the kinds of sources that will be helpful in answering compelling and supporting questions. | U04, U06 |
| D3.1.K-2 | Gather relevant information from one or two sources while using the origin and structure to guide the selection. | U06 |
| D3.2.K-2 | Evaluate a source by distinguishing between fact and opinion. | U07 (adapted: true story vs. pretend story) |
| D4.1.K-2 | Construct an argument with reasons. | U02, U08 (oral) |
| D4.2.K-2 | Construct explanations using correct sequence and relevant information. | U06 |
| D4.3.K-2 | Present a summary of an argument using print, oral, and digital technologies. | U08 |
| D4.4.K-2 / D4.5.K-2 | Ask and answer questions about arguments / explanations. | Throughout |
| D4.6.K-2 | Identify and explain a range of local, regional, and global problems, and some ways in which people are trying to address these problems. | U08 |
| D4.7.K-2 | Identify ways to take action to help address local, regional, and global problems. | U08 |
| D4.8.K-2 | Use listening, consensus-building, and voting procedures to decide on and take action in their classrooms. | U02, U08 |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×1) = 36 weeks. Session model: **4 sessions per week, 15–20 minutes
each** (16 sessions per unit). Session types rotate: circle-time lesson, guided
play/practice, story or investigation, share-and-review — named per unit below.
Every unit opens with an age-appropriate compelling question (D1.1.K-2, adapted:
"why does this matter to you?"). K–2 tasks are oral, pointing, drawing,
manipulative, or adult-scribed, with explicit adult directions.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish circle-time routines (listening signal, turn-taking,
  cleanup song) and baseline each objective's entry point.
- Sessions: playful one-on-one probes — "tell me about something you like"
  (drawn or spoken), follow a two-step direction, point to near/far objects,
  order two morning/night pictures.
- No new instruction; record observations against the track objectives. Confirm
  the household's privacy rule: personal details stay private.

### Unit 01 — Identity, belonging, and classroom community (Weeks 3–6)

- **Compelling question:** "What makes our classroom community special?"
- **Standards:** D2.Civ.2.K-2 (adapted), D2.Civ.7.K-2, D4.5.K-2
- **Week 3 goal:** name what makes each person unique — favorites, talents —
  in words, drawing, or gesture.
- **Week 4 goal:** belonging routines — greetings, including others, classroom
  helper roles (line leader, materials keeper).
- **Week 5 goal:** kindness in action — listening when others speak, gentle
  hands, repairing hurt feelings with words.
- **Week 6:** review week — build an anonymous "our class" collage (drawings
  only, no names); formative check.
- Sessions rotate: circle lesson → partner talk/draw → read-aloud story
  (original, written for K) → share circle.

### Unit 02 — Rules, fairness, and cooperative choices (Weeks 7–10)

- **Compelling question:** "Why do we need rules?"
- **Standards:** D2.Civ.3.K-2, D2.Civ.8.K-2, D2.Civ.9.K-2, D2.Civ.11.K-2,
  D2.Civ.12.K-2, D4.1.K-2 (oral), D4.8.K-2
- **Week 7 goal:** why rules exist — safety and fairness; co-create 3–4
  classroom rules in child words.
- **Week 8 goal:** fair choices — taking turns, sharing limited materials;
  hold the year's first class vote (D4.8.K-2).
- **Week 9 goal:** rules beyond the classroom — school and neighborhood rules;
  who keeps shared places safe; repairing mistakes.
- **Week 10:** review week — rule role-plays (puppet scenarios), formative check.

### Unit 03 — Community helpers: roles and responsibilities (Weeks 11–14)

- **Compelling question:** "Who helps our community, and how?"
- **Standards:** D2.Civ.1.K-2, D2.Civ.2.K-2, D2.Civ.5.K-2 (adapted),
  D2.Civ.6.K-2, D2.Eco.3.K-2, D2.Eco.4.K-2, D2.Eco.12.K-2, D2.Eco.13.K-2
  (adapted), D2.Geo.7.K-2
- **Week 11 goal:** helpers in the school — custodian, nurse, teacher, bus
  driver: roles and the tools they use.
- **Week 12 goal:** helpers in the neighborhood — firefighter, mail carrier,
  grocer, doctor: what they do and how their work helps us.
- **Week 13 goal:** helpers working together — mail moves from place to place
  (D2.Geo.7.K-2); government as helpers who care for the city (D2.Civ.5.K-2,
  D2.Eco.12.K-2 adapted).
- **Week 14:** review week — helper/tool matching games, dramatic-play
  stations, formative check.

### Unit 04 — Maps, symbols, and nearby places (Weeks 15–18)

- **Compelling question:** "How can a map show us where things are?"
- **Standards:** D2.Geo.1.K-2, D2.Geo.2.K-2, D2.Geo.3.K-2, D2.Geo.6.K-2,
  D1.5.K-2
- **Week 15 goal:** what maps are — the bird's-eye view; build a pictorial
  classroom map with symbols and a simple legend.
- **Week 16 goal:** positional words on the map — near/far, left/right,
  above/below; follow-the-map treasure hunts.
- **Week 17 goal:** bigger maps — school and neighborhood; the globe: land and
  water; "where we are" on the map.
- **Week 18:** midyear review (flexible) — cumulative map + rules + helpers
  games; re-teach the highest-need objective; formative check of Units 01–04.

### Unit 05 — Needs, wants, and simple exchanges (Weeks 19–22)

- **Compelling question:** "What do we need, and how do we choose?"
- **Standards:** D2.Eco.1.K-2, D2.Eco.2.K-2 (adapted), D2.Eco.5.K-2,
  D2.Eco.6.K-2, D2.Eco.9.K-2 (adapted), D2.Eco.10.K-2, D2.Eco.14.K-2 (adapted),
  D2.Eco.15.K-2 (adapted), D2.Geo.8.K-2, D2.Geo.11.K-2
- **Week 19 goal:** needs vs. wants — food, water, shelter, clothing; sorting
  games with picture cards.
- **Week 20 goal:** choices and scarcity — we cannot have everything; "what we
  get / what we give up" with two toy choices.
- **Week 21 goal:** work, money, spending, saving — people earn by working;
  prices in a classroom shop; play-money purchases; saving for later.
- **Week 22:** review week — classroom market role-play, formative check.

### Unit 06 — Time, sequence, and change (Weeks 23–26)

- **Compelling question:** "How is today different from long ago?"
- **Standards:** D2.His.1.K-2, D2.His.2.K-2, D2.His.4.K-2 (adapted),
  D2.His.6.K-2 (adapted), D2.His.9.K-2, D2.His.10.K-2, D2.His.11.K-2 (adapted),
  D2.His.12.K-2 (adapted), D2.His.14.K-2, D2.His.16.K-2 (adapted),
  D2.Geo.10.K-2, D4.2.K-2
- **Week 23 goal:** daily and weekly sequences — morning/afternoon/night, days
  of the week, first/next/last picture ordering.
- **Week 24 goal:** long ago vs. today — one familiar thing (lighting, phones,
  travel) through pictures and objects; adult-collected family stories.
- **Week 25 goal:** our year in order — timeline of class events; "then and
  now" picture pairs; asking questions about a source (D2.His.12.K-2 adapted).
- **Week 26:** review week — sequence card games, timeline walk, formative check.

### Unit 07 — Cultures, traditions, and respectful curiosity (Weeks 27–30)

- **Compelling question:** "How can we learn about traditions different from ours?"
- **Standards:** D2.Civ.9.K-2, D2.Civ.10.K-2, D2.His.3.K-2 (adapted),
  D2.Geo.6.K-2, D3.2.K-2 (adapted: true story vs. pretend story), D4.4.K-2,
  D4.5.K-2
- **Week 27 goal:** what a tradition is — family and classroom traditions
  children volunteer to share (never required; no disclosure pressure).
- **Week 28 goal:** traditions around the world — foods, music, greetings;
  respectful curiosity: look, listen, ask kind questions.
- **Week 29 goal:** different perspectives — the same celebration seen by
  different people; kind questions vs. assumptions.
- **Week 30:** review week — voluntary tradition share circle, formative check.

### Unit 08 — Caring for shared places and community inquiry (Weeks 31–34)

- **Compelling question:** "How can we take care of the places we share?"
- **Standards:** D2.Civ.2.K-2, D2.Civ.6.K-2, D2.Civ.14.K-2, D2.Geo.4.K-2,
  D2.Geo.5.K-2, D2.Geo.12.K-2 (adapted: storms and helpers), D4.3.K-2,
  D4.6.K-2, D4.7.K-2, D4.8.K-2
- **Week 31 goal:** noticing shared places — classroom, playground, park; what
  "shared" means and why it matters.
- **Week 32 goal:** problems and helpers — litter, broken things; who fixes
  them; what our part can be; how weather affects our places (D2.Geo.4.K-2).
- **Week 33 goal:** our caring project — class vote on one small action,
  plan and do it with adult help (e.g., tidy a garden bed, make thank-you
  drawings for custodians — kept private, not mailed).
- **Week 34:** review week — share what we did and what changed; formative check.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all eight objectives; re-teach
  where evidence shows gaps; final observational assessment and keys (delivered
  with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 05 opens with a
fair-turn-taking vote from Unit 02; Unit 08 opens with a map of the shared
place from Unit 04). Midyear (Week 18) and final (Weeks 35–36) weeks are
full-track reviews. Formative checks are oral/observed and adult-scribed, with
each unit's teacher guide specifying what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/government_basics.md` — adult vocabulary reference only (branches
  of government are beyond the K band; never assigned).
- `resources/supply_and_demand_economics.md` — adult vocabulary reference only
  for U05 (scarcity, price); never assigned.
- `resources/black_excellence_figures.md` — **not directly reusable at K**:
  figure stories for U07 will be original simplified retellings at K listening
  level; the guide's research links target independent readers.
- `resources/world_facts.md` and the dataset CSVs/JSON — **not reused at K**
  (dated snapshots; magnitudes beyond the K band).
- `resources/wars_fundamentals.md`, `resources/united_states_understanding_and_principles.md`
  — **no reuse at K** (content beyond the grade band).
- Shared concrete patterns (pictorial map templates, picture vocabulary cards,
  play-money sets) will be created once in U04/U05 and reused; do not duplicate
  per unit.
- No cross-grade links from learner materials; the math track's manipulative
  pacing informed session design only.

## 8. Safe materials

Household or dollar-store materials: picture cards, crayons and large paper,
blocks, toy cash register and play money, sorting trays, a simple globe or ball,
dress-up clothes and toy tools for dramatic play, puppets, map mats. No sharp
tools; dramatic-play props checked for choking hazards; no food allergens used as
counters or props without checking. Outdoor observations (U08) are
adult-supervised with indoor observation alternatives for mobility or weather
limits.

## 9. Accessibility supports

- **Oral and pointing response modes** for all checks; adult scribes written work.
- High-contrast, large picture vocabulary cards; textured globe (raised land)
  for low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table and
  a floor-play variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual word walls; home-language labels welcomed.
- Dramatic-play and drawing alternatives for every spoken task; color is never
  the only cue.
- Every generated or drawn diagram ships with a text-only alternative.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #9.
- No K-appropriate internal map templates, picture vocabulary cards, or
  play-money sets exist; units will author originals once and share them.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not applicable
  to this audit section.
- No K-banded social studies resource shelf exists in `resources/`; flagged as
  a shared gap for the cross-track review (issue #59).

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Identity, belonging, and classroom community; U02 Rules, fairness, and
cooperative choices; U03 Community helpers: roles and responsibilities;
U04 Maps, symbols, and nearby places; U05 Needs, wants, and simple exchanges;
U06 Time, sequence, and change; U07 Cultures, traditions, and respectful
curiosity; U08 Caring for shared places and community inquiry; R00 diagnostic,
midyear/final review, and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #9 body, comments (none), and label state re-read 2026-10-02 before claiming.
- No `curriculum-in-progress` claims active on any queue issue at claim time;
  claim placed 2026-10-02 07:55 UTC on issue #9 only.
- `curriculum/grade-k/` re-inventoried on `main` @ `4870c53`: only `README.md`
  and the merged math track present; social studies folder created by this run.
- Standards codes/descriptions verified against the published C3 Framework K–2
  band indicator tables (framework landing page opened 2026-10-02; indicator
  wording cross-checked against the framework's K–2 tables) — grade-band
  reference only; no state adoption, accreditation, or alignment certification
  claimed. Adaptations for kindergarten listening level are labeled "adapted".
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files, plus the C3 framework and
  issue URLs).
