# Grade 6 Social Studies — Scope and Sequence

Audit section A00 of [issue #33](https://github.com/murderszn/open-tutor/issues/33).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-05 against `main` (commit `2c43d24`). The folder held
**2 Markdown files** (1 subject README, 1 starter lesson). The issue's
2026-10-01 "0 Markdown files" baseline counted legacy curriculum content only
and excluded the README and the starter lesson; this re-audit counts every
Markdown file. Decisions: **Keep** = reuse in the named unit with review;
**Revise** = usable skeleton needing substantive improvement before
assignment; **Enrichment** = optional extension only, never a core-lesson
substitute.

| Item | Location | Decision |
|---|---|---|
| Starter Lesson — Ask what a map and source can show | `starter-lesson.md` | **Keep** → U01. Three 35-minute sessions: observation vs. inference on a fictional town sketch (map shows relative location, not scale/path conditions/travel time); a fictional source note on town-council path requests (creator unnamed, no use-rate or cost data); worked examples correctly label "two requests were received" as observation and "everyone wants a path change" as unsupported; exit check names one observation, one limit, one next inquiry step. The 2-1-0 review rubric (observation/inference, source limits, inquiry) is sound; accessibility notes (read-aloud, enlarged/tactile map, dictated response) are appropriate. This is direct D1.5.6-8 (helpful source kinds), D3.2.6-8 (credibility from relevance and intended use), and D2.Geo.1–3.6-8 (maps as evidence) practice. **Gap the U01 build fixes:** "Answer checks" sit beside the student tasks — the unit build moves them into the teacher guide; the unit adds real-map archaeology/chronology investigations the starter does not teach. |
| Subject README | `README.md` | **Revise** → replaced this run by the new track README (coverage summary, measurable objectives, standards reference, structure, adult guidance). |

No files were added, removed, or renamed since the baseline. Nothing was
inaccurate or inappropriate. The starter lesson teaches source and map
inquiry at a fictional-town scale — everything at ancient-world scale,
chronology, and civilizations is built new.

### Internal reference decisions

| Item | Decision |
|---|---|
| Grade-6 hub page (`curriculum/grade-6/README.md`) | **Revise** — updated to record this audit's status; does not change other subjects' listings. |
| Curriculum index (`curriculum/README.md`) | **Revise** — grade-6 line gains "draft audit for social studies". |
| Manifest (`curriculum/manifest.json`) | **Update** — register `scope-and-sequence.md` as `subject-index`; preserve existing entries and schema. |
| Same-grade math track (#30, audit delivered as draft PR #96, unmerged) | **Reference only** — session model (4 sessions/week) reused as pattern; no math content borrowed. |
| Same-grade science track (#31, audit delivered as draft PR #98, unmerged) | **Reference only** — no content borrowed; U02's agriculture timeline may coordinate dates, but no science material reused. |
| Same-grade language arts track (#32, audit delivered as draft PR #99, unmerged) | **Reference only** — argument-writing and evidence routines align with U08; no LA content copied upward. |
| Grade-5 social studies track (#29, audit delivered as draft PR #95, unmerged) | **Prerequisite reference only** — the grade-5 end-of-year objectives (§2) define entry expectations; no grade-5 material copied upward. |
| Grades 7–12 social studies tracks (no audits yet) | **No reuse** — later grades are planned; kept as reference for where the track leads. |
| Shared `assignments/` material | **No reuse** — nothing verified at the grade-6 ancient-world band. |

No existing file contained reproduced copyrighted text.

## 2. Prerequisites

Learners typically enter grade-6 social studies with the grade-5 social
studies track's end-of-year objectives (that track's audit is delivered as
draft PR #95, unmerged; its units are not yet written):

- Geographic tools — construct and read maps with title, symbols, key,
  compass rose, and labels; name cardinal directions; use maps of different
  scales; describe regions and their environmental characteristics
- Indigenous nations and living histories — explain how geography shaped ways
  of life; take multiple perspectives on encounters
- History with timelines and evidence — sequence events across centuries;
  compare past and present; identify kinds of historical sources; compare
  accounts of the same event; explain probable causes and effects
- Citizenship — explain purposes of rules; describe roles of people in
  authority; explain how groups make rules that protect freedoms
- Economic choices — compare benefits and costs; identify resources used to
  produce goods and services; explain specialization and trade
- Evidence and communication — with adult support, gather information from
  multiple sources; distinguish fact from opinion; build arguments with claims,
  reasons, and sequenced explanations; present summaries orally, in writing,
  or with drawings
- Informed action — describe how people improved communities; identify ways to
  help with a local problem

The diagnostic weeks (Weeks 1–2) verify these — especially map-key/legend
reading at world scale, multi-millennium timeline sequencing, and
cause/effect explanation. U01 re-teaches map tools (scale, grid, projection
limits, symbol conventions) rather than assuming they are secure; U01 also
re-teaches source kinds at the archaeology scale before asking for
perspective comparisons.

## 3. Track objectives

Measurable, adult-assessed by end of year (see track README for full wording):

1. Frame historical inquiries: write compelling and supporting questions and
   determine which source kinds will answer them (D1.1–1.5.6-8)
2. Read maps as historical evidence: construct and interpret maps with
   scale/key/grid; locate early human sites and ancient civilizations;
   explain what a map cannot show (D2.Geo.1–3.6-8)
3. Explain how environments shaped early human life and how the agricultural
   revolution changed settlement, labor, and trade-offs (D2.Geo.4, 8.6-8;
   D2.His.1, 2, 14.6-8)
4. Explain river-valley civilizations — cities, specialization, writing, laws,
   and belief systems — with change-and-continuity analysis
   (D2.His.1, 2, 14.6-8; D2.Geo.5, 11.6-8)
5. Compare ancient South and East Asian societies in their own contexts
   (D2.His.1, 2, 4.6-8; D2.Geo.5, 10.6-8)
6. Explain ancient Greek civic ideas — assemblies, citizenship, law, empire —
   and Mediterranean exchange networks (D2.Civ.3, 5, 9, 14.6-8;
   D2.Geo.7, 11.6-8; D2.Eco.6, 14, 15.6-8)
7. Explain ancient Rome — republic, empire, social life — with multi-cause
   explanations and relative-influence evaluation (D2.His.2, 4, 14, 15.6-8;
   D2.Civ.3, 5.6-8)
8. Explain African and American civilizations in context as living peoples,
   with honest, age-appropriate perspective work (D2.His.1, 2, 4, 5.6-8;
   D2.Geo.5, 10.6-8)
9. Evaluate historical sources: classify kinds, detect limitations, infer
   maker/audience/purpose, judge relevancy and utility (D3.1–3.2.6-8;
   D2.His.9–13.6-8)
10. Explain multiple causes and effects and evaluate the relative influence of
    causes; classify developments as change and/or continuity
    (D2.His.14, 15.6-8; D2.His.2.6-8)
11. Reason economically about the ancient world: specialization, markets,
    supply and demand, external effects, trade barriers, and interdependence
    (D2.Eco.1–9, 14, 15.6-8)
12. Communicate conclusions: build claims and counterclaims from multiple
    sources with noted limitations, construct explanations, critique
    arguments, and plan informed action (D3.3–3.4.6-8; D4.1–4.8.6-8)

## 4. Standards crosswalk

Reference framework: the **College, Career, and Civic Life (C3) Framework for
Social Studies State Standards** (National Council for the Social Studies),
grades 6–8 band. The framework's four Dimensions (Developing Questions and
Planning Inquiries; Applying Disciplinary Tools and Concepts — civics,
economics, geography, history; Evaluating Sources and Using Evidence;
Communicating Conclusions and Taking Informed Action) were re-confirmed on
the NCSS C3 landing page 2026-10-05; indicator codes and descriptions below
were verified 2026-10-05 against the framework's grades 6–8 indicator tables
(C3 Grades 6–8 guide; NCSS C3 Framework for Social Studies State Standards).
**No state adoption, accreditation, or alignment certification is claimed.**
The 6–8 band spans three grades; this track teaches each indicator at the
grade-6 entry-band level — sources are adult-curated, inquiry scaffolds are
heavier than they will be in grades 7–8, and evaluation is observation-level
where the framework names analysis.

Indicators the framework defers to later bands — D2.His.7.6-8 and
D2.His.8.6-8 ("begins in grades 9–12") — are not taught in this track.
D2.Eco.10–12.6-8 (interest rates; employment, unemployment, inflation data;
how inflation/deflation/unemployment affect groups) address modern national
economies and are deferred to later grades; D2.Eco.13.6-8 (productivity and
standards of living) is touched only through the agricultural revolution in
U02. D2.Civ.4.6-8 is taught only for its "in other countries" comparative
half (Athens, Rome) — the U.S.-branches portion is review from grade 5, not
core content here.

### Dimension 1 — Developing Questions and Planning Inquiries

| Code | Indicator | Track use |
|---|---|---|
| D1.1.6-8 | Explain how a question represents key ideas in the field. | U01, U08 |
| D1.2.6-8 | Explain points of agreement experts have about interpretations and applications of disciplinary concepts and ideas associated with a compelling question. | U01, U03, U08 |
| D1.3.6-8 | Explain points of agreement experts have about interpretations and applications of disciplinary concepts and ideas associated with a supporting question. | U03, U05, U08 |
| D1.4.6-8 | Explain how the relationship between supporting questions and compelling questions is mutually reinforcing. | U01, U08 |
| D1.5.6-8 | Determine the kinds of sources that will be helpful in answering compelling and supporting questions, taking into consideration multiple points of view represented in the sources. | U01 (starter lesson), U05, U08 |

### Dimension 2 — Civics

| Code | Indicator | Track use |
|---|---|---|
| D2.Civ.1.6-8 | Distinguish the powers and responsibilities of citizens, political parties, interest groups, and the media in a variety of governmental and nongovernmental contexts. | Review only — the ancient-world analogs (assemblies, factions, orators) appear in U05–U06; modern parties/media are deferred |
| D2.Civ.2.6-8 | Explain specific roles played by citizens (such as voters, jurors, taxpayers, members of the armed forces, petitioners, protesters, and office-holders). | U05 (Athenian citizenship and its limits — who counted), U06 (Roman citizenship) |
| D2.Civ.3.6-8 | Examine the origins, purposes, and impact of constitutions, laws, treaties, and international agreements. | U03 (Hammurabi's code as evidence, age-appropriate excerpts), U05, U06 (Twelve Tables), U08 |
| D2.Civ.4.6-8 | Explain the powers and limits of the three branches of government, public officials, and bureaucracies at different levels in the United States and in other countries. | "Other countries" half only — U05 (Athens), U06 (Rome); U.S. portion is review |
| D2.Civ.5.6-8 | Explain the origins, functions, and structure of government with reference to the U.S. Constitution, state constitutions, and selected other systems of government. | Selected other systems — U05 (Athenian democracy), U06 (Roman republic and empire) |
| D2.Civ.6.6-8 | Describe the roles of political, civil, and economic organizations in shaping people's lives. | U03 (temples, palaces, merchant groups), U06 (legions, trade guilds) |
| D2.Civ.7.6-8 | Apply civic virtues and democratic principles in school and community settings. | U05, U08 (deliberation routines) |
| D2.Civ.8.6-8 | Analyze ideas and principles contained in the founding documents of the United States, and explain how they influence the social and political system. | Deferred to later grades (U.S. focus) — cited here so unit builds do not claim it |
| D2.Civ.9.6-8 | Compare deliberative processes used by a wide variety of groups in various settings. | U05 (Athenian assembly vs. council), U06 (Senate vs. assemblies), U08 |
| D2.Civ.10.6-8 | Explain the relevance of personal interests and perspectives, civic virtues, and democratic principles when people address issues and problems in government and civil society. | U05, U08 |
| D2.Civ.11.6-8 | Differentiate among procedures for making decisions in the classroom, school, civil society, and local, state, and national government in terms of how civic purposes are intended. | U08 capstone (deliberation protocol) |
| D2.Civ.12.6-8 | Assess specific rules and laws (both actual and proposed) as means of addressing public problems. | U03, U06 (code-of-laws inquiry, age-appropriate) |
| D2.Civ.13.6-8 | Analyze the purposes, implementation, and consequences of public policies in multiple settings. | U06 (imperial administration, enrichment) |
| D2.Civ.14.6-8 | Compare historical and contemporary means of changing societies, and promoting the common good. | U07, U08 |

### Dimension 2 — Economics

| Code | Indicator | Track use |
|---|---|---|
| D2.Eco.1.6-8 | Explain how economic decisions affect the well-being of individuals, businesses, and society. | U02 (agriculture trade-offs), U05, U08 |
| D2.Eco.2.6-8 | Evaluate alternative approaches or solutions to current economic issues in terms of benefits and costs for different groups and society as a whole. | U02, U08 (ancient "current issues" framing) |
| D2.Eco.3.6-8 | Explain the roles of buyers and sellers in product, labor, and financial markets. | U03, U05 (Mediterranean markets, enrichment: credit in ancient economies) |
| D2.Eco.4.6-8 | Describe the role of competition in the determination of prices and wages in a market economy. | U05 (Mediterranean traders, enrichment) |
| D2.Eco.5.6-8 | Explain ways in which money facilitates exchange by reducing transactional costs. | U03 (coinage), U05, U06 |
| D2.Eco.6.6-8 | Explain how changes in supply and demand cause changes in prices and quantities of goods and services, labor, credit, and foreign currencies. | U05, U08 (grain supply, trade goods) |
| D2.Eco.7.6-8 | Analyze the role of innovation and entrepreneurship in a market economy. | U02 (agricultural tools), U03 (irrigation, writing as innovation) |
| D2.Eco.8.6-8 | Explain how external benefits and costs influence market outcomes. | U03 (irrigation externalities), U08 |
| D2.Eco.9.6-8 | Describe the roles of institutions such as corporations, non-profits, and labor unions in a market economy. | Ancient analogs only — U06 (guilds/collegia), enrichment |
| D2.Eco.10.6-8 | Explain the influence of changes in interest rates on borrowing and investing. | Deferred (modern national economy) |
| D2.Eco.11.6-8 | Use appropriate data to evaluate the state of employment, unemployment, inflation, total production, income, and economic growth in the economy. | Deferred (modern national economy) |
| D2.Eco.12.6-8 | Explain how inflation, deflation, and unemployment affect different groups. | Deferred (modern national economy) |
| D2.Eco.13.6-8 | Explain why standards of living increase as productivity improves. | U02 only — agricultural surplus and specialization; no modern application |
| D2.Eco.14.6-8 | Explain barriers to trade and how those barriers influence trade among nations. | U05, U08 (tariffs, piracy, terrain; Mediterranean exchange) |
| D2.Eco.15.6-8 | Explain the benefits and the costs of trade policies to individuals, businesses, and society. | U05, U08 (who gained and who lost in ancient exchange) |

### Dimension 2 — Geography

| Code | Indicator | Track use |
|---|---|---|
| D2.Geo.1.6-8 | Construct maps to represent and explain the spatial patterns of cultural and environmental characteristics. | U01, U03, U05 |
| D2.Geo.2.6-8 | Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions, and changes in their environmental characteristics. | U01, U02, U07 |
| D2.Geo.3.6-8 | Use paper based and electronic mapping and graphing techniques to represent and analyze spatial patterns of different environmental and cultural characteristics. | U01 (starter lesson + grid/scale work), U03 |
| D2.Geo.4.6-8 | Explain how cultural patterns and economic decisions influence environments and the daily lives of people in both nearby and distant places. | U02, U03, U07 |
| D2.Geo.5.6-8 | Analyze the combinations of cultural and environmental characteristics that make places both similar to and different from other places. | U03, U04, U07 |
| D2.Geo.6.6-8 | Explain how the physical and human characteristics of places and regions are connected to human identified and cultures. | U04, U07 |
| D2.Geo.7.6-8 | Explain how changes in transportation and communication technology influence the spatial connections among human settlements and affect the diffusion of ideas and cultural practices. | U05 (ships, roads), U06 (Roman roads, enrichment), U08 |
| D2.Geo.8.6-8 | Analyze how relationships between humans and environments extend or contract spatial patterns of settlement and movement. | U02, U07 |
| D2.Geo.9.6-8 | Evaluate the influences of long-term human-induced environmental change on spatial patterns of conflict and cooperation. | U03 (irrigation/salinization, adult-guided), U08 |
| D2.Geo.10.6-8 | Analyze the ways in which cultural and environmental characteristics vary among various regions of the world. | U04, U07 |
| D2.Geo.11.6-8 | Explain how the relationship between the environmental characteristics of places and production of goods influences the spatial patterns of world trade. | U03, U05, U08 |
| D2.Geo.12.6-8 | Explain how global changes in population distribution patterns affect changes in land use in particular places. | U02 (settlement growth), U06 (urban Rome, enrichment) |

### Dimension 2 — History

| Code | Indicator | Track use |
|---|---|---|
| D2.His.1.6-8 | Analyze connections among events and developments in broader historical contexts. | U02, U03, U05, U08 |
| D2.His.2.6-8 | Classify series of historical events and developments as examples of change and/or continuity. | U02, U03, U04, U06, U07 |
| D2.His.3.6-8 | Use questions generated about individuals and groups to analyze why they, and the developments they shaped, are seen as historically significant. | U03, U05, U06, U08 |
| D2.His.4.6-8 | Analyze multiple factors that influenced the perspectives of people during different historical eras. | U02, U04, U05, U06, U07 |
| D2.His.5.6-8 | Explain how and why perspectives of people have changed over time. | U07, U08 |
| D2.His.6.6-8 | Analyze how people's perspectives influenced what information is available in the historical sources they created. | U03, U07, U08 |
| D2.His.7.6-8 | Begins in grades 9–12. | Not taught |
| D2.His.8.6-8 | Begins in grades 9–12. | Not taught |
| D2.His.9.6-8 | Classify the kinds of historical sources used in a secondary interpretation. | U01, U07 |
| D2.His.10.6-8 | Detect possible limitations in the historical record based on evidence collected from different kinds of historical sources. | U01, U07 (adult-guided) |
| D2.His.11.6-8 | Use other historical sources to infer a plausible maker, date, place of origin, and intended audience for historical sources where this information is not easily identified. | U01, U07 |
| D2.His.12.6-8 | Use questions generated about multiple historical sources to identify further areas of inquiry and additional sources. | U07, U08 |
| D2.His.13.6-8 | Evaluate the relevancy and utility of a historical source based on information such as maker, date, place of origin, intended audience, and purpose. | U07 (adult-guided), U08 |
| D2.His.14.6-8 | Explain multiple causes and effects of events and developments in the past. | U02, U03, U05, U06, U07 |
| D2.His.15.6-8 | Evaluate the relative influence of various causes of events and developments in the past. | U06, U08 (adult-guided; scaffolded comparison) |
| D2.His.16.6-8 | Organize applicable evidence into a coherent argument about the past. | U07, U08 |
| D2.His.17.6-8 | Compare the central arguments in secondary works of history on related topics in multiple media. | U08 (two short secondary accounts, adult-selected) |

### Dimensions 3–4 — Evidence, communication, informed action

| Code | Indicator | Track use |
|---|---|---|
| D3.1.6-8 | Gather relevant information from multiple sources while using the origin, authority, structure, context, and corroborative value of the sources to guide the selection. | U01, U07, U08 |
| D3.2.6-8 | Evaluate the credibility of a source by determining its relevance and intended use. | U01 (starter lesson), U07 |
| D3.3.6-8 | Identify evidence that draws information from multiple sources to support claims, noting evidentiary limitations. | U07, U08 |
| D3.4.6-8 | Develop claims and counterclaims while pointing out the strengths and limitations of both. | U08 |
| D4.1.6-8 | Construct arguments using claims and evidence from multiple sources, while acknowledging the strengths and limitations of the arguments. | U08 |
| D4.2.6-8 | Construct explanations using reasoning, correct sequence, examples, and details with relevant information and data, while acknowledging the strengths and weaknesses of the explanations. | U03, U07, U08 |
| D4.3.6-8 | Present adaptations of arguments and explanations on topics of interest to others to reach audiences and venues outside the classroom using print and oral technologies (e.g., posters, essays, letters, debates, speeches, reports, and maps) and digital technologies. | U08 — presentations stay within adult-supervised settings; nothing is published from this track without the guiding adult's review |
| D4.4.6-8 | Critique arguments for credibility. | U08 (peer-review routine, adult-guided) |
| D4.5.6-8 | Critique the structure of explanations. | U08 (peer-review routine, adult-guided) |
| D4.6.6-8 | Draw on multiple disciplinary lenses to analyze how a specific problem can manifest itself at local, regional, and global levels over time, identifying its characteristics and causes, and the challenges and opportunities faced by those trying to address the problem. | U08 capstone (e.g., resource scarcity or civic participation across eras) |
| D4.7.6-8 | Assess their individual and collective capacities to take action to address local, regional, and global problems, taking into account a range of possible levers of power, strategies, and potential outcomes. | U08 capstone |
| D4.8.6-8 | Apply a range of deliberative and democratic procedures to make decisions and take action in their classrooms and schools, and in out-of-school civic contexts. | U05, U08 |

## 5. Eight-unit sequence with weekly pacing

Model: four ~40-minute sessions per week. Each unit = 4 weeks = 16 sessions:
**S1** concept launch (explicit explanation + modeled example), **S2** skills
practice (guided then independent), **S3** investigation/application (map
work, source work, data work, or deliberation), **S4** review and unit check.
Eight units give 32 weeks; four flexible weeks cover diagnostic (2), midyear
review (1), and final review (1), totaling 36 weeks / 144 sessions.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry map skills at world scale | S1: label a world outline map (continents, oceans, compass rose, cardinal directions); S2: guided re-teach of weak map elements; S3: use scale, key, and grid to find two places; S4: short map-skills check |
| 2 | Verify entry timeline, perspective, and economic-choice skills | S1: sequence 6–8 events spanning millennia on a timeline (BCE/CE); S2: explain why two people in the same ancient period saw an event differently; S3: weigh benefits/costs of a historical choice (scenario cards); S4: diagnostic review — adult records gaps that U01–U08 re-teach |

### U01 — Historical inquiry: archaeology, maps, and chronology (Weeks 3–6)

| Week | Goal | Sessions |
|---|---|---|
| 3 | Frame historical inquiries: compelling vs. supporting questions | S1: launch — what makes a historical question compelling (D1.1–1.4); S2: practice turning curiosity into questions; S3: kept starter lesson, part 1 — map/source observation and inference on the fictional sketch; S4: review + check |
| 4 | Read maps as evidence: scale, key, grid, projection limits | S1: map tools at world scale — scale bars, grids, symbol conventions, what projections distort; S2: practice measuring and locating; S3: construct a simple map of a familiar-to-fictional place with all map elements (D2.Geo.1.6-8); S4: review + check |
| 5 | Classify historical sources; detect limits in the record | S1: source kinds — artifacts, documents, images, oral accounts; the kept starter lesson, part 2 — source limits and credibility (D3.2.6-8); S2: practice classifying sources; S3: investigation — what is missing? infer maker/date/audience clues (D2.His.11.6-8); S4: review + check |
| 6 | Build chronology: timelines, BCE/CE, archaeological context | S1: timelines across millennia; how archaeologists read layers and context; S2: practice sequencing and dating; S3: site investigation — order finds by layer, infer what changed (D2.His.9.6-8, D2.His.10.6-8, adult-guided); S4: unit review + U01 assessment |

### U02 — Early humans: agriculture and settlements (Weeks 7–10)

| Week | Goal | Sessions |
|---|---|---|
| 7 | Explain how environments shaped early human life | S1: launch — foraging, mobility, and environmental constraints (water, food, shelter, climate); S2: practice matching environments to ways of life on maps (D2.Geo.4.6-8); S3: map investigation — trace likely settlement spots from environmental evidence; S4: review + check |
| 8 | Explain the agricultural revolution: causes and trade-offs | S1: causes — climate, seed selection, domestication; what changed and what was lost (labor, diet, disease); S2: practice benefit/cost charts (D2.Eco.1–2.6-8); S3: classify the change — what continued, what changed (D2.His.2.6-8); S4: review + check |
| 9 | Explain how agriculture produced surplus, specialization, and settlement growth | S1: surplus → specialists → villages → towns; innovation in tools and irrigation (D2.Eco.7.6-8); S2: practice production chains; S3: settlement-pattern investigation — how human–environment relations extended movement and settlement (D2.Geo.8.6-8); S4: review + check |
| 10 | Compare early farming regions; explain multiple causes | S1: compare two early agricultural regions (Fertile Crescent, one other — adult-selected); S2: practice D2.His.14.6-8 multi-cause explanation; S3: perspectives task — a farmer's and a forager's view of the same change (D2.His.4.6-8, adult-guided); S4: unit review + U02 assessment |

### U03 — Mesopotamia, Egypt, and river-valley civilizations (Weeks 11–14)

| Week | Goal | Sessions |
|---|---|---|
| 11 | Locate river-valley civilizations; explain how rivers shaped them | S1: launch — Tigris–Euphrates, Nile, Indus, Yellow River on maps; irrigation and flood; S2: practice — environment → production → trade patterns (D2.Geo.11.6-8); S3: map investigation — why cities grew where they did (D2.Geo.5.6-8); S4: review + check |
| 12 | Explain cities, specialization, writing, and belief systems | S1: cities and specialists — who did what and why it mattered; writing and record-keeping as innovation; S2: practice — trace one innovation's effects (D2.Eco.7.6-8); S3: belief-systems task — how temples organized economic life (D2.Civ.6.6-8, adult-guided); S4: review + check |
| 13 | Examine early laws as evidence: Hammurabi's code | S1: laws as historical evidence — origins, purposes, impact (D2.Civ.3.6-8); age-appropriate excerpts, adult-selected; S2: practice — what one law reveals about the society; S3: assess the law as a means of addressing a problem (D2.Civ.12.6-8); S4: review + check |
| 14 | Explain multiple causes and effects; build an explanation | S1: cause/effect chains for one civilization's rise; S2: practice — turn map and source evidence into a sequenced explanation (D4.2.6-8); S3: perspectives on sources — how a scribe's or ruler's perspective shaped what survives (D2.His.6.6-8, adult-guided); S4: unit review + U03 assessment |

### U04 — Ancient South and East Asian societies (Weeks 15–18)

Sensitive-content note: South and East Asian societies are taught in their
own terms, not as footnotes to the Mediterranean. Sources are adult-selected
for accuracy; present-day connections are included for living traditions.
Belief systems are described, not evaluated.

| Week | Goal | Sessions |
|---|---|---|
| 15 | Locate South and East Asia; explain environmental and cultural variety | S1: launch — monsoons, rivers, mountains, coastlines; how characteristics vary among regions (D2.Geo.10.6-8); S2: practice — similar-and-different place analysis (D2.Geo.5.6-8); S3: map investigation — trade routes and geographic barriers; S4: review + check |
| 16 | Explain early South Asian societies: cities, social order, belief systems | S1: Indus cities, later kingdoms — planned streets, craft specialization, social hierarchy; S2: practice — evidence from city plans (D2.His.9.6-8); S3: belief-systems task — describe, don't evaluate; trace one idea's spread (D2.Geo.7.6-8); S4: review + check |
| 17 | Explain early Chinese societies: dynasties, bureaucracy, innovation | S1: dynastic change and continuity (D2.His.2.6-8); writing, bronze, irrigation; S2: practice — classify a series as change and/or continuity; S3: perspectives task — how a farmer, an official, and a merchant saw the same tax (D2.His.4.6-8, adult-guided); S4: review + check |
| 18 | Compare two ancient Asian societies; explain physical/human place connections | S1: modeled comparison — what each society did with its environment; S2: practice — explain how physical and human characteristics connect to cultures (D2.Geo.6.6-8); S3: synthesis task — one change, two societies: what differed and why; S4: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Sessions | Goal |
|---|---|
| S1–S2 | Spiral review: inquiry questions, map tools, chronology, agricultural change, river-valley civilizations, Asian societies — re-check diagnostic gaps |
| S3 | Catch-up session for unfinished investigations or re-teaching per adult judgment |
| S4 | Midyear check: one map task, one multi-cause explanation, one source-classification task — adult records progress toward track objectives |

### U05 — Ancient Greece: civic ideas and Mediterranean exchange (Weeks 20–23)

| Week | Goal | Sessions |
|---|---|---|
| 20 | Explain Greek city-states, citizenship, and assemblies | S1: launch — polis, who counted as a citizen and who did not (women, enslaved people, foreigners — named plainly, adult-guided); S2: practice — roles played by citizens (D2.Civ.2.6-8); S3: deliberation lab — compare assembly and council procedures (D2.Civ.9.6-8); S4: review + check |
| 21 | Compare systems of government: Athens, Sparta, and beyond | S1: origins, functions, and structure of two systems (D2.Civ.5.6-8); limits of each; S2: practice — which system for which problem? (D2.Civ.4.6-8, other-countries half); S3: civic-virtues task — democratic principles in the classroom (D2.Civ.7.6-8); S4: review + check |
| 22 | Explain Mediterranean exchange: goods, ideas, and trade networks | S1: ships, colonies, and markets — supply and demand in the grain trade (D2.Eco.6.6-8); S2: practice — barriers to trade: terrain, piracy, tariffs (D2.Eco.14.6-8); S3: who gained and who lost in exchange (D2.Eco.15.6-8, adult-guided); S4: review + check |
| 23 | Explain diffusion: how ideas traveled the Mediterranean | S1: diffusion of practices and ideas — technology and communication (D2.Geo.7.6-8); S2: practice — trace one idea's journey on a map; S3: significance task — use questions about individuals to analyze historical significance (D2.His.3.6-8); S4: unit review + U05 assessment |

### U06 — Ancient Rome: republic, empire, and social life (Weeks 24–27)

Sensitive-content note: Rome practiced slavery at scale and waged wars of
conquest. Both are named honestly and plainly at an age-appropriate level —
who was forced, who decided, who resisted — with no graphic detail and no
glorification of conquest. The adult pre-selects all sources.

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain the Roman republic: Senate, assemblies, citizenship, law | S1: launch — republican institutions and their limits; the Twelve Tables (age-appropriate, D2.Civ.3.6-8); S2: practice — match jobs to institutions; S3: law-as-evidence task — what the Tables reveal (D2.Civ.12.6-8); S4: review + check |
| 25 | Explain social life: city, countryside, work, and family | S1: Rome the city — population, land use, aqueducts, roads (D2.Geo.12.6-8, enrichment); S2: practice — daily-life evidence from artifacts; S3: perspectives task — a senator's, a soldier's, and an enslaved person's Rome (D2.His.4.6-8, adult-guided); S4: review + check |
| 26 | Explain the empire: administration, roads, trade, and money | S1: how the empire was run — provinces, officials, bureaucracy (D2.Civ.4.6-8, D2.Civ.13.6-8 enrichment); roads and communication (D2.Geo.7.6-8); S2: practice — money reducing exchange costs (D2.Eco.5.6-8); S3: production-and-trade investigation — environment and world trade patterns (D2.Geo.11.6-8); S4: review + check |
| 27 | Explain Rome's changes: multiple causes and relative influence | S1: the republic-to-empire shift and later transformations — classify as change and/or continuity (D2.His.2.6-8); S2: practice — multiple causes and effects (D2.His.14.6-8); S3: evaluation task — which cause mattered most, with evidence (D2.His.15.6-8, adult-guided scaffold); S4: unit review + U06 assessment |

### U07 — African and American civilizations in context (Weeks 28–31)

Sensitive-content note: African and American civilizations are presented as
sophisticated societies with living descendants, not as prequels to anyone
else's story. Nations and peoples are named as living communities; every
case study includes a present-day connection. The adult selects sources with
African, Indigenous American, and scholarly authorship where available.
Stereotypes are explicitly corrected; difficult topics (conquest, forced
labor, displacement) are named honestly, never glossed, never graphic.

| Week | Goal | Sessions |
|---|---|---|
| 28 | Locate African civilizations; explain environmental variety | S1: launch — Nile Valley beyond Egypt, West African savanna, Great Lakes, highlands; S2: practice — how cultural and environmental characteristics vary (D2.Geo.10.6-8); S3: map investigation — kingdoms and trade routes across the Sahara; S4: review + check |
| 29 | Explain West African kingdoms: trade, learning, and governance | S1: Ghana, Mali, Songhai — gold-salt trade, Timbuktu's scholars, administration; S2: practice — production and world-trade patterns (D2.Geo.11.6-8); S3: perspectives task — a trader's, a scholar's, a ruler's view (D2.His.4.6-8, adult-guided); S4: review + check |
| 30 | Explain American civilizations: Maya, Aztec, Inca, and others | S1: launch — Mesoamerican and Andean societies: cities, agriculture (chinampas, terraces), writing, roads; S2: practice — similar-and-different analysis across regions (D2.Geo.5.6-8); S3: settlement investigation — human–environment relations extending movement (D2.Geo.8.6-8); S4: review + check |
| 31 | Compare civilizations on their own terms; evaluate sources | S1: comparison without ranking — each society in its context; S2: practice — detect limits in the record from different source kinds (D2.His.10.6-8, D3.1.6-8, adult-guided); S3: source-usefulness task — maker, date, origin, audience, purpose (D2.His.13.6-8); S4: unit review + U07 assessment |

### U08 — Belief systems, exchange networks, and ancient-world inquiry (Weeks 32–35)

| Week | Goal | Sessions |
|---|---|---|
| 32 | Frame the capstone inquiry on exchange or belief | S1: launch — choose the compelling question (e.g., "How did trade networks change what ancient peoples believed and how they lived?"); supporting questions and their mutual reinforcement (D1.1–1.4.6-8); S2: practice — from curiosity to questions; S3: source planning — which kinds answer our questions (D1.5.6-8); S4: review + check |
| 33 | Trace exchange networks: the Silk Roads and the Indian Ocean | S1: networks overview — routes, goods, people, barriers (D2.Eco.14.6-8); S2: practice — benefits and costs of trade policies for different groups (D2.Eco.15.6-8); S3: long-term environmental change and conflict/cooperation patterns, adult-guided (D2.Geo.9.6-8); S4: review + check |
| 34 | Explain how belief systems spread and changed | S1: belief systems as described, not evaluated — Buddhism, Christianity, and others along trade routes (adult-selected, age-appropriate sources); S2: practice — perspectives changing over time (D2.His.5.6-8); S3: compare central arguments in two short secondary accounts (D2.His.17.6-8); S4: review + check |
| 35 | Build claims and counterclaims; peer-review and present | S1: organize evidence into a coherent argument about the past (D2.His.16.6-8; D3.3–3.4.6-8) — claims and counterclaims with noted strengths and limitations; S2: peer-review routine — critique arguments for credibility and explanations for structure (D4.4–4.5.6-8, adult-guided); S3: presentations in the adult-supervised setting (D4.3.6-8); S4: unit review + U08 assessment; capstone informed-action plan (D4.6–4.8.6-8) — the learner assesses capacities, levers, strategies, and outcomes for a real classroom/school/community problem |

### Week 36 — Final review and portfolio

| Sessions | Goal |
|---|---|
| S1 | Spiral review: inquiry questions, map tools, chronology, civilizations, civic ideas, sources, economic reasoning |
| S2 | Portfolio assembly — learner selects best map, timeline, claim-with-evidence, and deliberation reflection (adult keeps the portfolio private) |
| S3 | Final check: one task per track-objective cluster, adult-scored against the track objectives |
| S4 | Celebration and next-year preview — where grade-7 social studies picks up |

## 6. Internal resource reuse plan

- `resources/world_facts.md`: adult-side reference behind U01's geography
  work — continent/ocean/land-superlative sections verified present;
  population and commodity figures are labeled 2025 snapshots and must be
  re-checked during authoring. Never assigned as learner reading.
- `resources/supply_and_demand_economics.md`: adult-side reference for U02's
  agricultural trade-offs, U03/U05/U08's trade and exchange (supply/demand
  basics, specialization, barriers); its modern macro sections are out of
  scope.
- `resources/government_basics.md`: adult-side reference behind U05–U06
  teacher guides — civic vocabulary (origins/purposes/impact of laws,
  deliberative processes, systems of government); it is U.S.-focused, so
  learner-facing passages are written fresh at the ancient-world band.
- `resources/un_countries.csv` / `.json` (U01 world-scale map practice):
  columns `name_common, name_official, cca2, cca3, ccn3, region, subregion,
  capital, population, area_km2, lat, lng, un_status, independent,
  google_maps_url` — verified on `main` 2026-10-05 (195 rows); the
  `population` column is currently empty and must not be used until filled
  from a verified source. Task instructions name exact columns and units.
- `resources/us_states.csv`, `resources/us_presidents.csv`: **no grade-6
  social-studies reuse** — this track's geography and inquiry are world-scale
  and ancient-world; U.S. datasets belong to the grades 4–5 tracks.
- `resources/united_states_understanding_and_principles.md`: **no reuse** —
  U.S.-founding content covered by grade 5; citing it here would duplicate
  the lower-grade track.
- `resources/black_excellence_figures.md`: **no direct reuse** — all profiled
  figures are modern; U07's African civilizations research uses
  adult-selected scholarly and museum sources instead.
- `resources/wars_fundamentals.md`: **no grade-6 reuse** — content skews
  modern; ancient conflicts are taught from adult-selected sources at this
  band.
- `resources/semester-resource-library.md`: inspect during unit sections —
  external starting points only; each candidate link opened and assessed
  before recommendation.
- `teachers/ai-assistants/resource_finder.md`: drives each unit's Resource
  Pack (3–6 queries, 3–7 curated or labeled-search videos, 4–7 reputable
  references, task-to-resource mapping, check dates).

## 7. Accessibility supports (built into every unit)

- Map/diagram work: color is always paired with symbols and text labels; every
  image ships with alt text and a text-only description of the same
  information.
- Response modes: oral, pointing, drawing, and manipulative options for map
  and timeline tasks; the adult scribes written explanations whenever writing
  is not the assessed skill.
- Reading: original passages are written at grade-6 level; vocabulary is
  pre-taught; key terms appear with kid-friendly definitions in each lesson.
- Video/media (unit Resource Packs): captions or transcripts required; the
  adult previews for ads, age suitability, and accuracy.
- Deliberation and presentation: sentence starters, choice boards, and
  small-group formats; no learner is required to speak publicly beyond the
  adult-supervised setting.
- Sensitive history (U02, U04, U06, U07): perspectives are taught through
  adult-selected, age-appropriate sources with at least two viewpoints where
  the record allows; difficult topics (forced labor, conquest, displacement,
  exclusion from citizenship) are named honestly and plainly, never glossed
  and never graphic. Belief systems are described, never evaluated; living
  peoples are named in the present tense.

## 8. What the unit sections must deliver (for future runs)

Per `unit-requirements.md` and the track issue, each of U01–U08 needs: unit
README with objectives/prerequisites/vocabulary/standards notes and 16-session
pacing; 4–6 fully written lessons (explanations, ≥2 worked/modeled examples
each, guided + independent practice, applied task, exit check, supports,
extensions); a project/investigation with rubric; formative quiz and
culminating assessment; **separate** teacher guides and answer keys (every
question solved independently and reconciled); a verified Resource Pack; and
at least one genuinely generated raster image embedded in an activity with alt
text, caption, and an `assets/` generation record. R00 then delivers the
diagnostic, midyear/final reviews, cumulative assessment with keys, and a full
coherence/accessibility/sources/image/manifest audit.

Concrete paths:
- **U01 next:** author the world-scale map investigation around the kept
  starter lesson; move its "Answer checks" into the teacher guide; build the
  archaeology layer-sequencing investigation with adult-selected site data;
  decide the projection-distortion demonstration.
- **U02:** adult-select the two early-farming comparison regions; pre-write
  the benefit/cost scenario cards; confirm the agriculture trade-offs framing
  with the adult.
- **U03:** select the river-valley civilizations and the Hammurabi's code
  excerpts (age-appropriate, public-domain translations); pre-write the
  cause/effect chain materials.
- **U04:** adult-select South/East Asian sources; pre-write the
  change-and-continuity classification sets; confirm the describe-don't-evaluate
  belief-systems protocol.
- **U05:** write the deliberation lab (assembly vs. council) and the
  grain-trade supply/demand investigation; confirm the citizenship-limits
  framing note with the adult.
- **U06:** adult-select the Rome perspective clue sets (senator, soldier,
  enslaved person); pre-write the multi-cause evaluation scaffold for
  D2.His.15.6-8.
- **U07:** adult-select the African and American civilization case studies
  and present-day connections; pre-write the source-limitation clue sets.
- **U08:** write the peer-review routine and the informed-action planning
  protocol; select the two secondary accounts for D2.His.17.6-8; confirm
  portfolio-privacy handling with the adult.

## Verification record

- Both track files read in full; no relative links exist in the track.
- `resources/un_countries.csv` header and row count verified on `main`
  2026-10-05: 195 rows; `population` column empty (must not be used until
  filled from a verified source).
- `resources/world_facts.md` on `main` checked: continent/ocean/superlative
  sections present; population and commodity figures labeled 2025 snapshots.
- C3 Framework: four Dimensions and the D2 sub-strands (civics, economics,
  geography, history) re-confirmed on https://www.socialstudies.org/standards/c3
  (2026-10-05); every indicator code and description above verified against
  the framework's grades 6–8 indicator tables (C3 Grades 6–8 guide, NCSS C3
  Framework for Social Studies State Standards, extracted and checked
  2026-10-05). Deferred indicators are named explicitly (D2.His.7.6-8,
  D2.His.8.6-8 — begin in grades 9–12; D2.Eco.10–12.6-8 — modern national
  economy; D2.Civ.8.6-8 — U.S. founding documents).
- No copyrighted text reproduced in any track file. No state adoption,
  accreditation, or alignment certification is claimed anywhere in this track.
