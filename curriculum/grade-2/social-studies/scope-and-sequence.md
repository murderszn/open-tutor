# Grade 2 Social Studies — Scope and Sequence

Audit section A00 of [issue #17](https://github.com/murderszn/open-tutor/issues/17).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-03 against `main` (commit `247bf79`).

| Item | Location | Decision |
|---|---|---|
| Grade-2 hub page | `curriculum/grade-2/README.md` | **Revise** — updated to reflect the social studies track's audit status and link the new subject folder |
| Grade 2 social studies folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade social studies content | none (0 Markdown files under `curriculum/grade-2/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade math track (#14, audit delivered as draft PR #71) | `curriculum/grade-2/math/` (draft PR, unmerged) | **Reference only** — session model (4 × 25–30 min sessions/week) and adult-reviewed independent practice reused as pattern; no math content reused |
| Same-grade science track (#15, audit delivered as draft PR #72) | `curriculum/grade-2/science/` (draft PR, unmerged) | **No reuse** — audit-stage only; no content borrowed |
| Same-grade language arts track (#16, audit delivered as draft PR #73) | `curriculum/grade-2/language-arts/` (draft PR, unmerged) | **Reference for read-aloud pairing only** — informational-text and discussion routines may coordinate timing; no language-arts content copied |
| Grade 1 social studies track (#13, audit delivered as draft PR #70) | `curriculum/grade-1/social-studies/` (draft PR, unmerged) | **No objective reuse** — track is itself audit-stage; entry prerequisites below are stated as general developmental expectations, not as grade-1 objectives |
| Kindergarten social studies track (#9, audit delivered as draft PR #66) | `curriculum/grade-k/social-studies/` (draft PR, unmerged) | **Prerequisite reference two years back only** — no reuse |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/social-studies/` etc. | **No reuse for grade-2 instruction** — content targets ages 9+; keep as reference for where the track leads, not as source material |
| Shared social studies assignments | `assignments/social-studies/` | **No reuse** — upper bands; far above grade 2 |
| `resources/world_facts.md` | continents/oceans/country lists (Wikipedia-linked) | **Adult-side reference** — adult checks dates and facts before Units 01–02 teacher guides use any figures; never assigned to the learner |
| `resources/government_basics.md` | branches, agencies, official-site links | **Adult-side reference** — adult reads for accurate civics vocabulary in Unit 04 teacher guides; not assigned to the learner |
| `resources/united_states_understanding_and_principles.md` | colonies-to-Constitution overview | **Adult-side background only** — adult adapts to grade 2 for Unit 04 (governments and functions) and Unit 07; learner sees simplified, adult-authored passages |
| `resources/black_excellence_figures.md` | research guide (middle-grade oriented) | **Adult-side candidate pool** — adult vets and adapts entries for Unit 07 public-figure choices; never assigned to the learner |
| `resources/wars_fundamentals.md` | conflict/state-building vocabulary | **No reuse in K–2 instruction** — topics and framing are above grade 2; Unit 07 treats change through local/community examples |
| `resources/supply_and_demand_economics.md` | markets, prices, scarcity (upper-band detail) | **Adult-side vocabulary reference** — Unit 05 teacher guides keep the economics accurate; the learner experiences scarcity, cost, and price concretely, not the guide's models |
| Repository datasets (`resources/us_states.csv`, `resources/us_presidents.csv`, `resources/un_countries.csv`, `resources/un_countries.json`) | real-world CSV/JSON tables | **Conditional reuse** — column names, units, source, and date must be verified before any unit activity; datasets are never handed to the learner raw; Units 01/06/07 may use small, clearly labeled subsets (e.g., state names, country names) |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack |

No existing grade-2 social studies material was inaccurate or inappropriate; there was simply none.
No keep decisions beyond the hub page; everything substantive is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-2 social studies able to:

- Name familiar people, places, and roles in their home, school, and neighborhood (who lives here, who helps here)
- Follow simple rules and routines; take turns; listen when others speak
- Sort and compare objects by one or two attributes (a math-reinforced skill, not a math lesson)
- Retell a sequence of 2–3 familiar events in order (morning, afternoon, evening)
- Point, draw, and describe what they observe; dictate a sentence for an adult to scribe
- Ask "why" and "how" questions about the world around them

The diagnostic weeks (Weeks 1–2) verify these through play-based probes: draw your route from bed to breakfast; point to the classroom door's direction; name three people who help our neighborhood; tell what happened first, next, last in a read-aloud; draw one thing you want and one thing you need. Unit 01 re-teaches map symbols and directions rather than assuming map literacy.

## 3. Track objectives

Measurable, adult-assessed by end of year (see track README for full wording):

1. Use geographic tools — construct and read simple maps with title, symbols, key, compass rose, and labels; name cardinal directions; use maps, globes, and photographs to describe places (D2.Geo.1–3).
2. Connect people and environment — explain how weather, landforms, and environment affect daily life; describe how people change places and how places shape choices (D2.Geo.4–6, 8–9).
3. Do history with timelines and evidence — sequence events; compare past and present; identify kinds of historical sources; ask questions about people who shaped change; compare accounts of the same event (D2.His.1–4, 6, 9–12, 14, 16).
4. Practice citizenship — explain purposes of rules; describe roles of people in authority; apply civic virtues; make group decisions through listening, discussion, consensus, and voting (D2.Civ.1–3, 5–12, 14; D4.8).
5. Make economic choices — explain scarcity and decision making; weigh benefits and costs; describe work, skills, income, prices, saving, and trade (D2.Eco.1–7, 9–10, 12–15; D2.Geo.7, 11).
6. Understand communities and movement — explain why and how people, goods, and ideas move; identify cultural and environmental characteristics of communities; compare viewpoints (D2.Geo.7–8, 10–11; D2.Civ.10; D2.His.4).
7. Gather evidence and communicate — with adult support, gather information from one or two sources; distinguish fact from opinion; build arguments with reasons and sequenced explanations; present summaries orally, with drawings, or with digital tools (D1.1–1.5; D3.1–3.2; D4.1–4.5).
8. Take informed action — describe how people improved communities; identify ways to help with a local problem; carry out a small, adult-supervised evidence-based community project (D2.Civ.7, 9, 11, 14; D4.6–4.8).

## 4. Standards crosswalk

Reference framework: the **College, Career, and Civic Life (C3) Framework for
Social Studies State Standards** (NCSS), Grade K–2 band. Codes and descriptions
below were verified against the framework's K–2 indicator table on
[the NCSS C3 standards page](https://www.socialstudies.org/standards/c3) and
the reproducing K–2 planning guide (Los Angeles County Office of Education,
2013, [guide PDF](https://5il.co/p0qk)), both opened and read 2026-10-03.
**No state adoption, accreditation, or alignment certification is claimed.**
Indicators the framework defers to later grade bands are noted and are not
taught in this track.

### Dimension 1 — Developing Questions and Planning Inquiries

| Code | Description |
|---|---|
| D1.1.K-2 | Explain why the compelling question is important to the student. |
| D1.2.K-2 | Identify disciplinary ideas associated with a compelling question. |
| D1.3.K-2 | Identify facts and concepts associated with a supporting question. |
| D1.4.K-2 | Make connections between supporting questions and compelling questions. |
| D1.5.K-2 | Determine the kinds of sources that will be helpful in answering compelling and supporting questions. |

### Dimension 2 — Civics

| Code | Description |
|---|---|
| D2.Civ.1.K-2 | Describe roles and responsibilities of people in authority. |
| D2.Civ.2.K-2 | Explain how all people, not just official leaders, play important roles in a community. |
| D2.Civ.3.K-2 | Explain the need for and purposes of rules in various settings inside and outside of school. |
| D2.Civ.4.K-2 | Begins in grades 3–5 (not taught in this track). |
| D2.Civ.5.K-2 | Explain what governments are and some of their functions. |
| D2.Civ.6.K-2 | Describe how communities work to accomplish common tasks, establish responsibilities, and fulfill roles of authority. |
| D2.Civ.7.K-2 | Apply civic virtues when participating in school settings. |
| D2.Civ.8.K-2 | Describe democratic principles such as equality, fairness, and respect for legitimate authority and rules. |
| D2.Civ.9.K-2 | Follow agreed-upon rules for discussions while responding attentively to others when addressing ideas and making decisions as a group. |
| D2.Civ.10.K-2 | Compare their own point of view with others' perspectives. |
| D2.Civ.11.K-2 | Explain how people can work together to make decisions in the classroom. |
| D2.Civ.12.K-2 | Identify and explain how rules function in public (classroom and school) settings. |
| D2.Civ.13.K-2 | Begins in grades 3–5 (not taught in this track). |
| D2.Civ.14.K-2 | Describe how people have tried to improve their communities over time. |

### Dimension 2 — Economics

| Code | Description |
|---|---|
| D2.Eco.1.K-2 | Explain how scarcity necessitates decision making. |
| D2.Eco.2.K-2 | Identify the benefits and costs of making various personal decisions. |
| D2.Eco.3.K-2 | Describe the skills and knowledge required to produce certain goods and services. |
| D2.Eco.4.K-2 | Describe the goods and services that people in the local community produce and those that are produced in other communities. |
| D2.Eco.5.K-2 | Identify prices of products in a local market. |
| D2.Eco.6.K-2 | Explain how people earn income. |
| D2.Eco.7.K-2 | Describe examples of costs of production. |
| D2.Eco.8.K-2 | Begins in grades 3–5 (not taught in this track). |
| D2.Eco.9.K-2 | Describe the role of banks in an economy. |
| D2.Eco.10.K-2 | Explain why people save. |
| D2.Eco.11.K-2 | Begins in grades 3–5 (not taught in this track). |
| D2.Eco.12.K-2 | Describe examples of the goods and services that governments provide. |
| D2.Eco.13.K-2 | Describe examples of capital goods and human capital. |
| D2.Eco.14.K-2 | Describe why people in one country trade goods and services with people in other countries. |
| D2.Eco.15.K-2 | Describe products that are produced abroad and sold domestically and products that are produced domestically and sold abroad. |

### Dimension 2 — Geography

| Code | Description |
|---|---|
| D2.Geo.1.K-2 | Construct maps, graphs, and other representations of familiar places. |
| D2.Geo.2.K-2 | Use maps, graphs, photographs, and other representations to describe places and the relationships and interactions that shape them. |
| D2.Geo.3.K-2 | Use maps, globes, and other simple geographic models to identify cultural and environmental characteristics of places. |
| D2.Geo.4.K-2 | Explain how weather, climate, and other environmental characteristics affect people's lives in a place or region. |
| D2.Geo.5.K-2 | Describe how human activities affect the cultural and environmental characteristics of places or regions. |
| D2.Geo.6.K-2 | Identify some cultural and environmental characteristics of specific places. |
| D2.Geo.7.K-2 | Explain why and how people, goods, and ideas move from place to place. |
| D2.Geo.8.K-2 | Compare how people in different types of communities use local and distant environments to meet their daily needs. |
| D2.Geo.9.K-2 | Describe the connections between the physical environment of a place and the economic activities found there. |
| D2.Geo.10.K-2 | Describe changes in the physical and cultural characteristics of various world regions. |
| D2.Geo.11.K-2 | Explain how the consumption of products connects people to distant places. |
| D2.Geo.12.K-2 | Identify ways that a catastrophic disaster may affect people living in a place. |

### Dimension 2 — History

| Code | Description |
|---|---|
| D2.His.1.K-2 | Create a chronological sequence of multiple events. |
| D2.His.2.K-2 | Compare life in the past to life today. |
| D2.His.3.K-2 | Generate questions about individuals and groups who have shaped a significant change. |
| D2.His.4.K-2 | Compare perspectives of people in the past to those of people in the present. |
| D2.His.5.K-2 | Begins in grades 3–5 (not taught in this track). |
| D2.His.6.K-2 | Compare different accounts of the same historical event. |
| D2.His.7.K-2 | Marked in the framework as beginning in a later grade band (not taught in this track). |
| D2.His.8.K-2 | Marked in the framework as beginning in a later grade band (not taught in this track). |
| D2.His.9.K-2 | Identify different kinds of historical sources. |
| D2.His.10.K-2 | Explain how historical sources can be used to study the past. |
| D2.His.11.K-2 | Identify the maker, date, and place of origin for a historical source from information within the historical source itself. |
| D2.His.12.K-2 | Generate questions about a particular historical source as it relates to a particular historical event or development. |
| D2.His.13.K-2 | Begins in grades 3–5 (not taught in this track). |
| D2.His.14.K-2 | Generate possible reasons for an event or development in the past. |
| D2.His.15.K-2 | Marked in the framework as beginning in a later grade band (not taught in this track). |
| D2.His.16.K-2 | Select which reasons might be more likely than others to explain a historical event or development. |
| D2.His.17.K-2 | Begins in grades 3–5 (not taught in this track). |

### Dimension 3 — Evaluating Sources and Using Evidence

| Code | Description |
|---|---|
| D3.1.K-2 | Gather relevant information from one or two sources while using the origin and structure to guide the selection. |
| D3.2.K-2 | Evaluate a source by distinguishing between fact and opinion. |
| D3.3.K-2 | Begins in grades 3–5 (not taught in this track). |
| D3.4.K-2 | Begins in grades 3–5 (not taught in this track). |

### Dimension 4 — Communicating Conclusions and Taking Informed Action

| Code | Description |
|---|---|
| D4.1.K-2 | Construct an argument with reasons. |
| D4.2.K-2 | Construct explanations using correct sequence and relevant information. |
| D4.3.K-2 | Present a summary of an argument using print, oral, and digital technologies. |
| D4.4.K-2 | Ask and answer questions about arguments. |
| D4.5.K-2 | Ask and answer questions about explanations. |
| D4.6.K-2 | Identify and explain a range of local, regional, and global problems, and some ways in which people are trying to address these problems. |
| D4.7.K-2 | Identify ways to take action to help address local, regional, and global problems. |
| D4.8.K-2 | Use listening, consensus-building, and voting procedures to decide on and take action in their classrooms. |

## 5. 36-week sequence

Eight 4-week units plus four flexible weeks (diagnostic ×2, midyear review ×1,
final review ×2) = 36 weeks. Session model: **4 sessions per week, 25–30 minutes
each** (16 sessions per unit), matching the same-grade math and language arts
audits. Session types rotate across an explicit inquiry lesson, a hands-on or
practice session (maps, timelines, role play, market play), a discussion or
read-aloud session, and a review session — named per unit below. K–2 tasks
remain oral, pointing, drawing, manipulative, or adult-scribed as needed, with
explicit adult directions; grade 2 adds short written/drawn products (one
labeled map, one timeline, one market record, one project poster) that the adult
reviews the same day. Each unit opens with a **compelling question** and
supporting questions (Dimension 1) and closes with a communicated conclusion or
argument (Dimension 4).

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (map-table setup, turn-taking talk,
  exit-check rituals) and baseline each objective's entry point.
- Sessions: playful one-on-one probes — draw your route from bed to breakfast;
  point toward the classroom door, then name the direction; name three people
  who help our neighborhood; tell what happened first, next, last in a
  read-aloud; show one thing you want and one thing you need; decide a tiny
  class rule together by voting.
- No new instruction; record observations against the track objectives.

### Unit 01 — Geographic tools, directions, and community maps (Weeks 3–6)

- **Standards:** D2.Geo.1–3; D1.1, D1.3, D1.5; D4.3
- **Compelling question:** How can a map help someone who has never been to
  our classroom find their way?
- **Week 3 goal:** map parts — title, symbols, key, labels; the compass rose
  and cardinal directions (north, south, east, west); find directions in the
  classroom.
- **Week 4 goal:** reading simple community maps — use a map of the school or
  block to find rooms, doors, and paths; compare a map, a globe, and a
  photograph of the same place.
- **Week 5 goal:** a globe as a model of Earth; name the continents and
  oceans; identify cultural and environmental characteristics of two familiar
  places (e.g., our town and a grandparent's town).
- **Week 6:** review week — draw a labeled classroom or bedroom map with key
  and compass rose; formative check.
- Sessions rotate: explicit map-tool lesson → map-drawing and direction
  practice → globe/photo comparison discussion → review game.

### Unit 02 — Landforms, environments, and human choices (Weeks 7–10)

- **Standards:** D2.Geo.4–6, 8–9; D2.Eco.4
- **Compelling question:** How does where you live change how you live?
- **Week 7 goal:** landforms — hill, valley, plain, river, lake, coast — with
  labeled, reproducible diagrams (deterministic visuals, not AI geography);
  find examples in photos of the region.
- **Week 8 goal:** weather versus climate; how weather and climate affect
  clothing, food, shelter, and activities.
- **Week 9 goal:** how people change places (farms, roads, buildings) and how
  places shape people's work and choices — including what local people produce
  (D2.Eco.4); safe, local examples only.
- **Week 10:** review week — compare two communities (e.g., a city and a
  countryside community): how each uses its local environment to meet daily
  needs; formative check.
- Sessions rotate: explicit landform/environment lesson → photo-sorting and
  diagram practice → read-aloud and comparison discussion → review.

### Unit 03 — Local history, timelines, and evidence (Weeks 11–14)

- **Standards:** D2.His.1–3, 9–12, 14; D1.3, D1.5; D3.1–3.2
- **Compelling question:** What was our neighborhood like before we lived here?
- **Week 11 goal:** chronological sequences — past, present, future; make a
  personal timeline (baby, toddler, now) and a family/event timeline strip.
- **Week 12 goal:** compare life in the past to life today (school, homes,
  travel, communication); kinds of historical sources — photographs, objects,
  interviews; how sources are used to study the past.
- **Week 13 goal:** local history — generate questions about individuals and
  groups who shaped a significant local change; identify a source's maker,
  date, and place from information within the source itself; adult-prepared
  local photos and oral-history excerpts.
- **Week 14:** review week — build a classroom or school timeline; generate
  possible reasons for one local change and pick the likelier reason (D2.His.14,
  16); formative check.
- Sessions rotate: explicit history-tool lesson → timeline and source practice
  → compare past-and-present discussion → review.

### Unit 04 — Rules, laws, leadership, and citizenship (Weeks 15–18)

- **Standards:** D2.Civ.1–3, 5–12, 14; D4.8; D1.2; D4.1
- **Compelling question:** Who decides what's fair, and how?
- **Week 15 goal:** the need for and purposes of rules at home, in the
  classroom, on the playground, and in public places; how rules function in
  school settings.
- **Week 16 goal:** roles and responsibilities of people in authority
  (teacher, principal, police officer, mayor); what governments are and some
  of their functions; how all people — not just leaders — play important roles
  in a community.
- **Week 17 goal:** democratic principles — equality, fairness, respect for
  legitimate authority and rules; how people can work together to make
  classroom decisions; practice listening, consensus, and voting on a real
  classroom choice (D4.8); how people have tried to improve their communities
  over time (local, age-appropriate examples).
- **Week 18:** midyear review (flexible) — cumulative retrieval from Units
  01–04; re-teach the highest-need objective; formative check of the first
  half of the year.
- Sessions rotate: explicit civics lesson → rule-making and role-play practice
  → discussion and decision-making circle → review.

### Unit 05 — Work, resources, trade, and economic choices (Weeks 19–22)

- **Standards:** D2.Eco.1–7, 9–10, 12–15; D2.Geo.7, 11; D4.2
- **Compelling question:** Why can't we have everything we want?
- **Week 19 goal:** wants versus needs; scarcity necessitates decision making;
  identify the benefits and costs of personal decisions (a classroom play-store
  choice task).
- **Week 20 goal:** work and income — how people earn income; the skills and
  knowledge required to produce certain goods and services; what people in our
  local community produce and what is produced in other communities.
- **Week 21 goal:** prices in a local market (play-store pricing with play
  coins); the role of money in exchange; why people save; the role of banks;
  simple examples of costs of production (ingredients, time, tools).
- **Week 22:** review week — trade: why people in one place trade goods and
  services with people in other places; goods that travel (Geo.7, 11);
  goods and services governments provide (roads, schools, libraries, parks);
  formative check.
- Sessions rotate: explicit economics lesson → market-play and price practice
  → goods-and-services sorting discussion → review game.

### Unit 06 — Migration, cultural diversity, and communities (Weeks 23–26)

- **Standards:** D2.Geo.7–8, 10–11; D2.Civ.10; D2.His.4; D4.6
- **Compelling question:** Why do families move, and what changes when they do?
- **Week 23 goal:** why and how people, goods, and ideas move from place to
  place — moves within a lifetime (new house, new school, new country),
  discussed with sensitivity; no learner's personal story required.
- **Week 24 goal:** cultural and environmental characteristics of communities;
  compare communities (city/suburb/rural; communities in different world
  regions) with photographs; describe how consumption of products connects
  people to distant places (Geo.11).
- **Week 25 goal:** multiple viewpoints — compare your own point of view with
  others' perspectives (Civ.10); compare perspectives of people in the past
  to people in the present (His.4) through an age-appropriate story of a
  community change; practice responding attentively during discussion (Civ.9).
- **Week 26:** review week — describe changes in the physical and cultural
  characteristics of a world region studied with photos; formative check.
- Sessions rotate: explicit movement/culture lesson → photo-mapping and
  compare practice → respectful discussion circle → review.

### Unit 07 — Public historical figures, change, and multiple viewpoints (Weeks 27–30)

- **Standards:** D2.His.3–4, 6, 14, 16; D2.Civ.10, 14; D3.1–3.2; D4.1–4.5
- **Compelling question:** How do we know what really happened, and who made
  it happen?
- **Week 27 goal:** what a public historical figure is; generate questions
  about individuals and groups who shaped a significant change (adult-vetted,
  age-appropriate figures — e.g., local founders, community builders, widely
  taught figures such as Ruby Bridges or George Washington Carver, with
  adult-simplified biographies).
- **Week 28 goal:** compare two different accounts of the same historical
  event (adult-provided picture-book accounts); generate possible reasons for
  the event and select which reasons are likelier.
- **Week 29 goal:** perspectives — compare viewpoints of people in the past
  with people today; fact versus opinion in sources; how people tried to
  improve their communities over time (Civ.14).
- **Week 30:** review week — construct a short argument with reasons about a
  local community change; present it orally, with drawings, or with a digital
  summary; ask and answer questions about arguments (D4.4); formative check.
- Sessions rotate: explicit figure/change lesson → account-comparison and
  reason practice → perspective discussion → review.
- Note: war and conflict topics are excluded from this track; change is
  studied through community-building and civic examples appropriate to age 7–8.

### Unit 08 — Community inquiry and evidence-based civic project (Weeks 31–34)

- **Standards:** D1.1–1.5; D3.1–3.2; D4.1–4.8; D2.Civ.7, 9, 11
- **Compelling question:** What is one small thing we could improve in our
  classroom or neighborhood, and how do we know it matters?
- **Week 31 goal:** build the inquiry — explain why the compelling question
  matters (D1.1); write supporting questions; determine what kinds of sources
  would help (photos, interviews, counts, observations).
- **Week 32 goal:** gather information from one or two sources with adult
  help (an adult-led interview, a photo walk, a simple count); evaluate
  sources by distinguishing fact from opinion.
- **Week 33 goal:** construct the explanation in correct sequence with reasons;
  prepare the summary (poster, oral talk with drawings, or short digital
  slides).
- **Week 34:** present the summary; as a group, decide an action using
  listening, consensus-building, and voting (D4.8); carry out a small,
  adult-supervised action (e.g., a classroom kindness plan, a book-drive shelf,
  a thank-you visit to a community helper); reflect on what changed.
- Sessions rotate: inquiry-planning lesson → evidence-gathering practice →
  explanation-building and rehearsal → presentation and decision circle.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all eight objectives —
  re-draw a community map, re-sequence a timeline, re-vote a classroom
  decision, re-run the market play; re-teach where evidence shows gaps; final
  observational assessment and keys (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (e.g., Unit 02 opens with a
compass-rose check, Unit 04 with the map-key routine, Unit 05 with a rules-and-
fairness warm-up, Unit 07 with a timeline read, Unit 08 with the
question→evidence→conclusion routine). Midyear (Week 18) and final (Weeks
35–36) weeks are full-track reviews. Formative checks are observed, oral,
drawn, or short written/drawn tasks the adult reviews the same day; each
unit's teacher guide specifies what "ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (queries, verified videos/search links, references, task mapping).
- `resources/world_facts.md`, `resources/government_basics.md`,
  `resources/united_states_understanding_and_principles.md` — adult-side
  factual references only; verify dates and officeholder claims against an
  authoritative source before Units 01–02 and 04–07 teacher guides repeat any
  figure. Never assign the guides' Wikipedia links to the learner; Units 01–02
  use verified, adult-curated country/continent/ocean names.
- `resources/black_excellence_figures.md` — adult vets and adapts entries for
  Unit 07's figure choices; the guide's research framing is too advanced to
  assign. Figures are introduced with adult-simplified biographies and local or
  widely taught examples.
- `resources/supply_and_demand_economics.md` — adult-side economics vocabulary
  reference for Unit 05 teacher guides; the learner's economics stays concrete
  (play-store prices, saving a few coins, benefits/costs of a choice).
- `resources/wars_fundamentals.md` — **no reuse** in this track; conflict
  topics are out of scope for grade 2.
- `resources/us_states.csv`, `resources/us_presidents.csv`,
  `resources/un_countries.csv` / `un_countries.json` — verify columns, units,
  source, and date at authoring time; mark values as real, rounded, or
  fictional practice data per task. Candidate uses: state-name labels in Unit
  01 map extensions, president name/photo pairs for Unit 07 timelines, country
  names for Unit 06 community comparisons. Raw datasets never go to the learner.
- Map, timeline, market-play, and discussion-circle templates will be created
  once in Units 01, 03, 05, and 04 and reused; do not duplicate per unit.
- Same-grade math/science/language-arts tracks and grades 4–8 social studies
  are **not** reused for grade-2 instruction (band mismatch); timing may be
  coordinated with the language-arts read-aloud routine.

## 8. Safe materials

Household or dollar-store supplies: crayons, colored pencils, and paper; a
ruler; printable compass roses and map symbols; a wall map and a globe (or an
inflatable globe); photo prints of local places, landforms, and community
helpers; a timeline string or paper strip with clothespins; play coins and
small containers for the market play; picture books (library or adult-made);
a magnifier for source "detective" work. No sharp tools; adult supervises any
walk or window observation; a from-the-window or map-only alternative replaces
any outdoor observation for safety, weather, or access reasons. All read-aloud
selections previewed by the adult for age suitability and advertising-free
access. Historical figures and local stories are vetted for accuracy and tone
before Unit 07; war, violence, and conflict topics are excluded entirely.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  dictated writing; short labeled products (map, timeline, market record,
  project poster) reviewed the same day.
- Large-print, high-contrast map symbols and timeline cards; textured/tactile
  pieces (felt landforms, raised-route string) for low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table
  and a floor-play variant.
- Language support: vocabulary taught with objects and pictures first, word
  second; visual word walls; home-language labels welcomed alongside English.
- Every map, diagram, and generated image ships with a text-only alternative;
  color is never the only cue (shape + label always accompany color).
- Hearing support: face the learner during discussion circles and voting;
  visual turn-taking cues; written/drawn option for every spoken check.
- Speaking tasks accept audio recording in place of live presentation; the
  adult may record on the learner's behalf.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #17.
- No grade-2-appropriate map templates, timeline sets, play-store kits, local
  photo sets, or adult-simplified figure biographies exist; units will author
  original materials and clearly labeled subsets of repository datasets.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- Shared assets to create once and reuse: compass-rose/map-symbol cards (U01),
  timeline string + event cards (U03), discussion-circle and voting props
  (U04), play-store price tags and coin trays (U05) — not regenerated per unit.
- Unit 06's migration discussion and Unit 07's figure choices need explicit
  adult-vetting guidance in their teacher guides; no learner's personal or
  family story is ever required.
- D2.Geo.12 (catastrophic disasters) is a K–2 indicator but is introduced only
  gently — as "what helpers do when a storm hurts a town" — never with
  frightening detail; units decide its placement or defer it to a later grade
  band with an explicit note.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Geographic tools, directions, and community maps; U02 Landforms,
environments, and human choices; U03 Local history, timelines, and evidence;
U04 Rules, laws, leadership, and citizenship; U05 Work, resources, trade, and
economic choices; U06 Migration, cultural diversity, and communities; U07
Public historical figures, change, and multiple viewpoints; U08 Community
inquiry and evidence-based civic project; R00 diagnostic, midyear/final
review, and cumulative assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #17 body, comments, and label state re-read 2026-10-03 before claiming;
  no competing claim (0 comments prior to the claim comment); `curriculum-in-progress`
  label applied with this run's claim.
- No other `curriculum-in-progress` claims active on the queue at claim time;
  `curriculum-blocked` label absent from the queue; open worker PRs (#63–73,
  other tracks) were not touched. Local uncommitted #16-run residue was left
  untouched and is excluded from this run's tree.
- `curriculum/grade-2/` re-inventoried on `main` @ `247bf79`: only `README.md`
  present; social-studies folder created by this run. Grade-2 baseline matches
  the issue body (0 Markdown files for this subject).
- C3 Framework codes/descriptions verified against the NCSS C3 standards page
  and the framework's K–2 indicator table (both opened and read 2026-10-03) —
  no state adoption, accreditation, or alignment certification claimed.
  Later-band indicators (e.g., D2.Civ.4, D2.Civ.13, D2.Eco.8, D2.Eco.11,
  D2.His.5, D2.His.13, D2.His.17, D3.3, D3.4) are explicitly excluded from the
  track.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; all six named guides are middle-grade oriented, hence
  adult-side only, with `wars_fundamentals.md` explicitly excluded from K–2
  instruction. Dataset columns/units/dates must be verified at unit-authoring
  time; none are assigned to the learner raw.
- The eight track objectives map onto the issue's U01–U08 checklist order, kept
  as the prerequisite sequence; grade-1 social studies is itself audit-stage,
  so prerequisites are stated as developmental expectations.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
