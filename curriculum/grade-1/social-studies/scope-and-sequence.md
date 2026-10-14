# Grade 1 Social Studies — Scope and Sequence

Audit section A00 of [issue #13](https://github.com/murderszn/open-tutor/issues/13).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-02 against `main` (commit `4870c53`; branch from current
`origin/main` head).

| Item | Location | Decision |
|---|---|---|
| Grade-1 hub page | `curriculum/grade-1/README.md` | **Revise** — updated to reflect the social studies track's audit status and link the new subject folder |
| Grade 1 social studies folder | did not exist | **Created** — `README.md` (subject index) and this scope-and-sequence |
| Same-grade social studies content | none (0 Markdown files under `curriculum/grade-1/` for this subject before this run) | **Gap** — all instruction to be authored in later unit sections |
| Same-grade language arts track (#12, audit delivered) | `curriculum/grade-1/language-arts/` | **Reference only** — session model (4 × ~20-minute sessions/week), diagnostic weeks, adult-reviewed short written tasks (2–3 word labels/dictated sentences) reused as pattern; no language-arts content reused |
| Same-grade math track (#10, audit delivered as draft PR) | `curriculum/grade-1/math/` | **Reference only** — session-model pattern reused; no math content reused (map/grid skills in Unit 02 stay social-studies specific) |
| Kindergarten social studies (#9, audit still an unmerged draft PR) | not on `main` | **No reuse possible yet** — entry prerequisites below are written from typical K-end expectations and verified against the grade-1 language-arts audit's entry assumptions, not from a delivered K audit |
| Same-subject content, grades 4/5/7/8 | `curriculum/grade-4/social-studies/` etc. | **No reuse for grade-1 instruction** — content targets ages 9+ and presumes abstract political/economic reasoning; kept as reference for where the track leads, not as source material |
| `resources/government_basics.md` | three branches, agencies, quick links | **Teacher-side only** — branch-of-government detail is far above the K–2 band; the adult may skim it for vocabulary accuracy. Grade-1 civics names local people in authority (mayor, principal, teacher, firefighters, police officers), not the three branches |
| `resources/united_states_understanding_and_principles.md` | founding-era narrative, kid-friendly bullet | **Teacher-side only** — grade-1 civics stays at classroom/community rules and local helpers; the colonies-to-Constitution arc is reserved for later grades |
| `resources/world_facts.md` | continent/ocean snapshots with dataset links | **Teacher-side only** — snapshot lists are dated; verify dates before citing anything from them. Used only for adult map context in Units 02 and 05 |
| `resources/black_excellence_figures.md` | figure profiles with Wikipedia links | **Teacher-side candidate pool** — the adult vets age-appropriateness and sources before any read-aloud use in Unit 07; the guide's entertainer-heavy roster is one input among historical and community figures, never assigned to the learner |
| `resources/wars_fundamentals.md` | global-conflicts guide | **No reuse** — wars and global conflicts are out of the grade-1 band |
| `resources/supply_and_demand_economics.md` | age-tracked for grades 5/8 | **Teacher-side only** — grade-1 needs/wants work is oral and concrete (choice, scarcity, saving); supply/demand graphs stay out |
| Repository datasets (`us_states.csv`, `us_presidents.csv`, `un_countries.csv/json`) | name/list tables | **No direct learner reuse** — too granular for grade 1; adult-side reference only for map puzzles and "where does it come from" mapping in Unit 05 |
| `teachers/ai-assistants/resource_finder.md` | Resource Pack generator | **Reuse** — will drive each unit's Resource Pack (focused queries, curated videos/search links, references, task mapping) |

No existing grade-1 social studies material was inaccurate or inappropriate; there
was simply none. No keep decisions beyond the hub page; everything substantive
is a gap to be built.

## 2. Prerequisites

Learners typically enter grade-1 social studies able to (verified or checked in
the Weeks 1–2 diagnostic; nothing assumed):

- Follow group discussion routines: listen, take turns, respond to others
- Use everyday location words: in/out, up/down, near/far (left/right and
  above/below emerge and are taught, not required on entry)
- Talk about their own communities: people at home, at school, in the neighborhood
- Draw and label with adult help; dictate a sentence for the adult to scribe
- Count to ~10 (used to sequence events and label timeline positions)
- Retell a simple 3-event sequence from a read-aloud (shared skill with the
  language-arts track)

The diagnostic weeks verify these; Units 01–02 re-teach discussion rules and
location words rather than assuming them secure.

## 3. Track objectives

Measurable, adult-assessed by end of year:

1. Describe the communities they belong to (classroom, home, neighborhood) and
   name at least one right and one responsibility in each.
2. Explain the need for rules in different settings; follow agreed-upon rules in
   discussions; explain how rules function in classroom and school settings.
3. Describe the roles and responsibilities of people in authority (teacher,
   principal, mayor, firefighters, police officers); explain what a government
   is and name one thing it does; make a classroom decision with others using
   listening, consensus, or voting, and take part in the resulting action.
4. Construct simple maps and picture representations of familiar places; use
   location and direction words (near, far, left, right, above, below, next to);
   describe places using cultural and environmental characteristics.
5. Order events on a past–present–future timeline; compare life in the past to
   life today; name kinds of historical sources (photographs, objects, stories)
   and use one source to answer a question.
6. Explain that scarcity makes choices necessary; name a benefit and a cost of a
   personal decision; sort needs and wants; describe goods and services people
   in the local community produce; explain how people earn income and why people
   save.
7. Describe celebrations and cultural practices — their own and others' — with
   respect; compare their own point of view with another person's; compare
   perspectives of people in the past with those of people today.
8. Ask and answer questions about a historical figure from a simple source;
   name the maker, date, or place of origin of a historical source when it is
   evident; gather relevant information from one or two sources.
9. With the guiding adult, identify a classroom or community problem, name a way
   people are trying to address it, and help take a small, safe action.

## 4. Standards crosswalk

Reference framework: **NCSS College, Career, and Civic Life (C3) Framework**
inquiry indicators, K–2 band — the framework's official indicators for this
band are written "by the end of grade 2" (there is no separate grade-1 set), so
this track treats them as year-1 progressions toward the band target.
Descriptions below were verified against the framework's indicator text
2026-10-02 (reproduced in the NCSS-derived K–2 instructional planning guide,
Herczog/LA County Office of Education, Oct 2013, opened 2026-10-02; civics
codes D2.Civ.1–2 spot-checked against an HMH Into Social Studies C3 visual
correlation, opened 2026-10-02). This is a reference use only — no state
adoption, accreditation, or alignment certification is claimed. The C3
Framework does not prescribe one national grade-by-grade content sequence.

### Civics (Dimension 2)

| Code | Description |
|---|---|
| D2.Civ.1.K-2 | Describe roles and responsibilities of people in authority. |
| D2.Civ.2.K-2 | Explain how all people, not just official leaders, play important roles in a community. |
| D2.Civ.3.K-2 | Explain the need for and purposes of rules in various settings inside and outside of school. |
| D2.Civ.5.K-2 | Explain what governments are and some of their functions. |
| D2.Civ.6.K-2 | Describe how communities work to accomplish common tasks, establish responsibilities, and fulfill roles of authority. |
| D2.Civ.7.K-2 | Apply civic virtues when participating in school settings. |
| D2.Civ.8.K-2 | Describe democratic principles such as equality, fairness, and respect for legitimate authority and rules. |
| D2.Civ.9.K-2 | Follow agreed-upon rules for discussions while responding attentively to others when addressing ideas and making decisions as a group. |
| D2.Civ.10.K-2 | Compare their own point of view with others' perspectives. |
| D2.Civ.11.K-2 | Explain how people can work together to make decisions in the classroom. |
| D2.Civ.12.K-2 | Identify and explain how rules function in public (classroom and school) settings. |
| D2.Civ.14.K-2 | Describe how people have tried to improve their communities over time. |

### Economics (Dimension 2)

| Code | Description |
|---|---|
| D2.Eco.1.K-2 | Explain how scarcity necessitates decision making. |
| D2.Eco.2.K-2 | Identify the benefits and costs of making various personal decisions. |
| D2.Eco.4.K-2 | Describe the goods and services that people in the local community produce and those that are produced in other communities. |
| D2.Eco.6.K-2 | Explain how people earn income. |
| D2.Eco.10.K-2 | Explain why people save. |

### Geography (Dimension 2)

| Code | Description |
|---|---|
| D2.Geo.1.K-2 | Construct maps, graphs, and other representations of familiar places. |
| D2.Geo.2.K-2 | Use maps, graphs, photographs, and other representations to describe places and the relationships and interactions that shape them. |
| D2.Geo.3.K-2 | Use maps, globes, and other simple geographic models to identify cultural and environmental characteristics of places. |
| D2.Geo.4.K-2 | Explain how weather, climate, and other environmental characteristics affect people's lives in a place or region. |
| D2.Geo.6.K-2 | Identify some cultural and environmental characteristics of specific places. |
| D2.Geo.7.K-2 | Explain why and how people, goods, and ideas move from place to place. |
| D2.Geo.8.K-2 | Compare how people in different types of communities use local and distant environments to meet their daily needs. |

### History (Dimension 2)

| Code | Description |
|---|---|
| D2.His.1.K-2 | Create a chronological sequence of multiple events. |
| D2.His.2.K-2 | Compare life in the past to life today. |
| D2.His.3.K-2 | Generate questions about individuals and groups who have shaped a significant historical change. |
| D2.His.4.K-2 | Compare perspectives of people in the past to those of people in the present. |
| D2.His.6.K-2 | Compare different accounts of the same historical event. |
| D2.His.9.K-2 | Identify different kinds of historical sources. |
| D2.His.10.K-2 | Explain how historical sources can be used to study the past. |
| D2.His.11.K-2 | Identify the maker, date, and place of origin for a historical source from information within the historical source itself. |
| D2.His.12.K-2 | Generate questions about a particular historical source as it relates to a particular historical event or development. |
| D2.His.14.K-2 | Generate possible reasons for an event or development in the past. |
| D2.His.16.K-2 | Select which reasons might be more likely than others to explain a historical event or development. |

### Inquiry, sources, and informed action (Dimensions 1, 3, 4)

| Code | Description |
|---|---|
| D1.1.K-2 | Explain why the compelling question is important to the student. |
| D1.2.K-2 | Identify disciplinary ideas associated with a compelling question. |
| D1.3.K-2 | Identify facts and concepts associated with a supporting question. |
| D1.4.K-2 | Make connections between supporting questions and compelling questions. |
| D1.5.K-2 | Determine the kinds of sources that will be helpful in answering compelling and supporting questions. |
| D3.1.K-2 | Gather relevant information from one or two sources while using the origin and structure to guide the selection. |
| D3.2.K-2 | Evaluate a source by distinguishing between fact and opinion. |
| D4.1.K-2 | Construct an argument with reasons. |
| D4.2.K-2 | Construct explanations using correct sequence and relevant information. |
| D4.3.K-2 | Present a summary of an argument using print, oral, and digital technologies. |
| D4.4.K-2 | Ask and answer questions about arguments. |
| D4.5.K-2 | Ask and answer questions about explanations. |
| D4.6.K-2 | Identify and explain a range of local, regional, and global problems, and some ways in which people are trying to address these problems. |
| D4.7.K-2 | Identify ways to take action to help address local, regional, and global problems. |
| D4.8.K-2 | Use listening, consensus-building, and voting procedures to decide on and take action in their classrooms. |

## 5. 36-week sequence

Eight 4-week units (32 weeks) plus Weeks 1–2 diagnostic and Weeks 35–36 final
review = 36 weeks; the midyear review is embedded as Week 18 (Unit 04's review
week covers Units 01–04). Session model: **4 sessions per week, 15–20 minutes
each** (16 sessions per unit), aligned with the grade-1 language-arts track's
4 × ~20-minute model. Social studies sessions lean oral: the learner's written
recording stays to 2–3 word labels, dictated sentences, drawings, and maps;
the adult scribes anything longer. Session types rotate across explicit lesson
(discussion + model), guided practice (drawing/map/timeline or read-aloud
response), exploration practice (observation walk or source looking), and review.

### Weeks 1–2 — Diagnostic and routines (flexible)

- **Goal:** establish session routines (circle-up listening, turn-taking,
  drawing-then-dictating, exit-check rituals) and baseline each objective's
  entry point.
- Sessions: playful one-on-one probes — name your communities (who helps you
  where?); one rule at home and one at school (why does it exist?); put these
  three pictures in past–present order; where is the toy — in, under, near, far?;
  is a toy a need or a want?; draw something people in the neighborhood do for
  others.
- No new instruction; record observations against the track objectives.

### Unit 01 — Community membership, rights, and responsibilities (Weeks 3–6) — delivered as a validated draft

- **Location:** `units/unit-01-community-membership-rights-responsibilities/` (5 lessons, practice sessions, charter project, quiz, assessment, teacher guide, answer key, resource pack, generated illustration).
- **Standards:** D2.Civ.1–3, D2.Civ.7–9, D2.Civ.12; D1.1
- **Week 3 goal:** name the communities the learner belongs to; distinguish
  what membership means (rights: e.g., be heard, be safe; responsibilities:
  e.g., listen, help).
- **Week 4 goal:** why rules exist at home, in class, in public places; compare
  a rule with a responsibility (D2.Civ.3).
- **Week 5 goal:** practice discussion rules (listen, one speaker, respond to
  others) while talking about fairness and respect for legitimate authority
  (D2.Civ.8–9).
- **Week 6:** review week — classroom-community sort (right or responsibility?);
  formative check.
- Sessions rotate: explicit lesson → discussion/drawing practice → read-aloud
  response practice → review game.

### Unit 02 — Local maps, land, water, and location (Weeks 7–10)

- **Standards:** D2.Geo.1–3, D2.Geo.6
- **Week 7 goal:** location words in the room and on the table (near/far,
  left/right, above/below, next to); picture-map of the bedroom or classroom.
- **Week 8 goal:** maps as bird's-eye views; simple symbols and keys; map the
  route from front door to a neighborhood landmark.
- **Week 9 goal:** land and water on maps and globes; local landforms and water
  bodies the learner has seen; cultural and environmental features of a place
  (D2.Geo.3, D2.Geo.6).
- **Week 10:** review week — symbol match, map walk, formative check.
- Sessions rotate: explicit lesson → map-drawing practice → observation-walk or
  globe practice → review game. No ruler-measured scale or coordinate grids
  (reserved for later grades).

### Unit 03 — Past, present, timelines, and family-neutral histories (Weeks 11–14)

- **Standards:** D2.His.1–2, D2.His.4, D2.His.9–10; D1.3
- **Week 11 goal:** past–present–future in the learner's own day; order 3–5
  events on a strip timeline (D2.His.1).
- **Week 12 goal:** compare life in the past to life today through photos and
  objects (lighting, washing, travel); what changed, what stayed (D2.His.2).
- **Week 13 goal:** kinds of historical sources — photographs, objects, stories
  people tell; use one source to answer a question about the past (D2.His.9–10).
- **Week 14:** review week — perspective comparison (a child's day: past vs.
  today); formative check.
- **Family-neutral rule:** read-aloud histories never assume a family structure
  (no "mom and dad" defaults; varied households, elders, caregivers, found
  family). Any personal or family timeline the learner makes is kept in private
  storage — never in this public repository. Sessions rotate: explicit lesson →
  timeline/sort practice → source-looking (photos/objects) practice → review.

### Unit 04 — Community leaders, rules, and decision making (Weeks 15–18)

- **Standards:** D2.Civ.1, D2.Civ.5–6, D2.Civ.11, D2.Civ.14; D4.8
- **Week 15 goal:** roles and responsibilities of people in authority — teacher,
  principal, mayor, firefighters, police officers (D2.Civ.1); how all people,
  not just leaders, play important roles (D2.Civ.2).
- **Week 16 goal:** what a government is and one thing it does (D2.Civ.5); how
  communities work together to accomplish common tasks (D2.Civ.6).
- **Week 17 goal:** make a real classroom decision together — listen, propose,
  vote (D2.Civ.11, D4.8); carry out the decision and reflect.
- **Week 18:** midyear review (flexible, replaces the unit review week) —
  cumulative re-check of Units 01–04 objectives; re-teach the highest-need
  objective; formative check of Units 01–04.
- Sessions rotate: explicit lesson → discussion/drawing practice → role-play or
  interview practice → review.

### Unit 05 — Needs, wants, producers, and consumers (Weeks 19–22)

- **Standards:** D2.Eco.1–2, D2.Eco.4, D2.Eco.6, D2.Eco.10; D2.Geo.7; D3.1
- **Week 19 goal:** needs vs. wants — sort with objects and pictures; scarcity
  means choices (D2.Eco.1).
- **Week 20 goal:** benefits and costs of a personal decision (spend or save?;
  share or keep?) with two concrete choices compared (D2.Eco.2).
- **Week 21 goal:** producers and consumers — goods and services people in the
  local community produce; where a familiar product travels from (D2.Eco.4,
  D2.Geo.7); how people earn income; why people save (D2.Eco.6, D2.Eco.10).
- **Week 22:** review week — needs/wants sort, simple "earn–spend–save" jars,
  formative check.
- No play-money transactions with real currency exchanges and no market-price
  data (out of band; the resource guides' price data is dated). Sessions
  rotate: explicit lesson → sort/drawing practice → neighborhood-producer
  observation practice → review game.

### Unit 06 — Cultures, celebrations, and diverse perspectives (Weeks 23–26)

- **Standards:** D2.Civ.10; D2.His.4; D2.Geo.6, D2.Geo.8; D1.2
- **Week 23 goal:** what culture means at age 6 — foods, songs, clothes,
  greetings, celebrations in the learner's own life (D2.Geo.6).
- **Week 24 goal:** celebrations around the world and around the block —
  compare how two different celebrations mark the same occasion (D2.His.4
  perspectives, lightly).
- **Week 25 goal:** compare my point of view with yours — two people, one
  story; why perspectives differ (D2.Civ.10).
- **Week 26:** review week — celebration museum (drawn artifacts), formative check.
- All comparisons are descriptive and respectful; no ranking of cultures and no
  faith-based enrichment inside the core units (kept separate per repo
  boundaries). Sessions rotate: explicit lesson → drawing/making practice →
  read-aloud or elder-interview practice → review and share.

### Unit 07 — Historical figures, stories, and simple sources (Weeks 27–30)

- **Standards:** D2.His.3, D2.His.6, D2.His.11–12, D2.His.14, D2.His.16; D3.1–2; D4.2
- **Week 27 goal:** what a historical figure is — a real person from the past
  whose story survives; generate questions about them (D2.His.3).
- **Week 28 goal:** story sources — compare two simple accounts of the same
  person's deed (D2.His.6); identify a source's maker, date, or place when
  evident (D2.His.11).
- **Week 29 goal:** possible reasons a figure acted (D2.His.14); which reasons
  seem more likely and why (D2.His.16); fact vs. opinion about the figure
  (D3.2).
- **Week 30:** review week — retell a figure's story in correct sequence with
  relevant information (D4.2); formative check.
- Figure selection rules: adult vets every figure story for age suitability,
  source quality, and non-hagiographic balance; `resources/black_excellence_figures.md`
  is one teacher-side candidate pool among historical and local-community
  figures; AI-generated illustrations of figures are labeled as illustrations,
  never primary sources. Sessions rotate: explicit lesson → read-aloud and
  question practice → source-looking practice → review.

### Unit 08 — Community problem solving and civic inquiry (Weeks 31–34)

- **Standards:** D4.1–8; D2.Civ.14; D1.4–5
- **Week 31 goal:** spot a problem — walk, look, listen (classroom or
  neighborhood); name it in one sentence (D1.1, D4.6).
- **Week 32 goal:** gather information from one or two sources — who knows
  about this? who is already trying to help? (D1.5, D3.1, D2.Civ.14).
- **Week 33 goal:** propose and choose an action — listen, discuss, vote
  (D4.8); make the case with reasons (D4.1).
- **Week 34:** review week — carry out the small, safe action with the adult;
  reflect: did it help? what next? (D4.7); formative check.
- Actions stay classroom/household-scale and adult-supervised; no contact with
  outside authorities, no fundraising, no public posting. Sessions rotate:
  explicit lesson → observation/inquiry practice → plan-and-present practice →
  review and share.

### Weeks 35–36 — Final review (flexible)

- Cumulative games and performance tasks across all nine objectives: community
  sort, map walk, timeline relay, needs/wants sort, figure retelling, class
  vote; re-teach where evidence shows gaps; final observational assessment and
  keys (delivered with R00).

## 6. Retrieval and review cadence

Every unit's Week 4 re-teaches and re-checks that unit's objectives; each unit
opens with a retrieval warm-up from prior units (Unit 02 opens by placing
community members on a map; Unit 04 by re-using Unit 01's rules language;
Unit 05 by sequencing a product's journey on a timeline strip; Unit 08 by
re-using the map, rules, and voting routines from Units 02, 01, and 04).
Midyear (Week 18) and final (Weeks 35–36) weeks are full-track reviews.
Formative checks are observed, oral, drawn, or short written tasks (2–3 items)
the adult reviews the same day; each unit's teacher guide specifies what
"ready to move on" looks like.

## 7. Internal resource reuse for future units

- `teachers/ai-assistants/resource_finder.md` — required input for every unit's
  Resource Pack (focused queries, verified videos/search links, references,
  task-to-resource mappings).
- `resources/government_basics.md` — adult background reference only; grade-1
  units name local people in authority, not branches of government.
- `resources/united_states_understanding_and_principles.md` — adult background
  only; founding-era narratives are out of band until later grades.
- `resources/world_facts.md` plus `us_states.csv` / `us_presidents.csv` /
  `un_countries.csv` / `un_countries.json` — adult-side map and "where does it
  come from" references; verify snapshot dates before citing; never assigned to
  the learner.
- `resources/black_excellence_figures.md` — teacher-side candidate pool for
  Unit 07 figure stories; the adult vets age-appropriateness and sources.
- `resources/supply_and_demand_economics.md`, `resources/wars_fundamentals.md`
  — no grade-1 learner reuse; economic concepts stay concrete and oral.
- Map, timeline-strip, needs/wants-sort, and symbol-card templates will be
  created once (Units 01–03) and reused; do not duplicate per unit.
- Same-grade math/science/language-arts tracks and grades 4–8 social studies
  are **not** reused for grade-1 instruction (grade-band mismatch).

## 8. Safe materials

Household or dollar-store supplies: large drawing paper and crayons, blank
timeline strips and picture cards, simple map paper with symbol stickers, globe
or world map (adult-side), old photographs and safe household objects for
source-looking, pocket chart, notebooks and pencils, timer. No sharp tools;
adult supervises small parts in shared settings. Neighborhood observation walks
are adult-accompanied with a defined route and no contact with strangers;
classroom actions stay inside the learning space. Read-aloud and figure-story
selections are previewed by the adult for age suitability and advertising-free
access.

## 9. Accessibility supports

- **Oral, pointing, and drawing response modes** for all checks; adult scribes
  dictated writing; short independent written practice (2–3 items) reviewed the
  same day.
- Large-print, high-contrast map symbols and timeline cards; textured shapes
  for low-vision learners.
- Short sessions with movement breaks; every lesson includes a seated-table and
  a floor-play variant.
- Language support: vocabulary taught with objects, pictures, and walks first,
  word second; visual word walls; home-language labels welcomed alongside English.
- Every diagram ships with a text-only alternative; color is never the only cue.
- Hearing support: face the learner during discussions; visual cues and written
  sentence frames supplement listening during votes and retellings.

## 10. Gaps and paths for future units

- Units U01–U08 and the R00 diagnostic/final-review package are all unbuilt —
  each is a later worker section on issue #13.
- No grade-1-appropriate map templates, timeline strips, needs/wants sorts, or
  read-aloud figure stories exist; units will author originals and use clearly
  labeled public-domain texts or adult-vetted simple sources, never copyrighted
  reproductions.
- Generated raster teaching images (one per unit, used in an activity with alt
  text, caption, and text alternative) are required for U01–U08 — not
  applicable to this audit section.
- A shared grade-1 map/timeline/symbol asset set should be created once
  (Units 01–03) and reused across units rather than regenerated per unit.
- The family-neutral history rule (Section 5, Unit 03) and the private-storage
  rule for personal/family timelines apply to all future units.

## 11. Planned units (prose — no files yet; no links to missing files)

U01 Community membership, rights, and responsibilities — **delivered as a validated
draft** (see `units/unit-01-community-membership-rights-responsibilities/`);
U02 Local maps, land,
water, and location; U03 Past, present, timelines, and family-neutral histories;
U04 Community leaders, rules, and decision making; U05 Needs, wants, producers,
and consumers; U06 Cultures, celebrations, and diverse perspectives; U07
Historical figures, stories, and simple sources; U08 Community problem solving
and civic inquiry; R00 diagnostic, midyear/final review, and cumulative
assessments with keys. Each will follow
`docs/curriculum-expansion/unit-requirements.md`.

## 12. Verification record

- Issue #13 body, comments, and label state re-read 2026-10-02 before claiming;
  no competing claim (0 comments prior to the claim comment); the
  `curriculum-in-progress` label and claim comment were added by this run.
- No other `curriculum-in-progress` claims active on any queue issue at claim
  time; open worker PRs (#63–68, other tracks) were not touched.
- `curriculum/grade-1/` re-inventoried on `main` @ current `origin/main` head:
  `README.md` and `language-arts/` only; the social studies folder was created
  by this run.
- Standards codes/descriptions verified against the C3 Framework indicator text
  (NCSS-derived K–2 planning guide, Herczog/LA County Office of Education,
  Oct 2013, opened 2026-10-02; civics D2.Civ.1–2 spot-checked against the HMH
  Into Social Studies C3 visual correlation, opened 2026-10-02) — no state
  adoption, accreditation, or alignment certification claimed. Note: the K–2
  guide renders D2.Geo.12 as "K-12" (layout artifact); the framework's bands
  are K–2/3–5/6–8/9–12 and the indicator is used here as D2.Geo.12.K-2
  ("Identify ways that a catastrophic disaster may affect people living in a
  place") — not targeted by this track's objectives.
- Repository guide reuse decisions checked against the guides' actual content
  and grade band; social-studies guides target older learners, hence
  teacher-side only. The objectives map onto the issue's U01–U08 checklist
  order, kept as the prerequisite sequence.
- Validation: `python3 scripts/validate-library.py` run after changes (see
  delivery comment); manifest JSON validated; Markdown links checked for
  existence (only relative links to existing files).
