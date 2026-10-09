# Grade 5 Social Studies — Scope and Sequence

Audit section A00 of [issue #29](https://github.com/murderszn/open-tutor/issues/29).
Status: **validated draft** (this document and the track README); units planned, not yet written.

## 1. Audit: existing-file inventory

Re-audited 2026-10-04 against `main` (commit `2c43d24`). All 20 Markdown files
from the issue's 2026-10-01 baseline were found and read in full (1 subject
README, 4 assignments, 14 quizzes, 1 template). No files added, removed, or
renamed since the baseline.

Decision vocabulary (same as the grade-5 math audit, PR #92): **Keep** = reuse
in the named unit with review; **Revise** = usable skeleton needing substantive
improvement (content, reference, or key separation) before assignment;
**Rebuild** = not usable as written; the unit will replace it; **Enrichment** =
optional extension only, never a core-lesson substitute.

Unlike the grade-4 library (no keys), every grade-5 quiz carries an embedded
"Parent Answer Key" in a `<details>` block beside the student questions. Spot
checks this run found the keys accurate, but unit builds must separate them
into teacher guides — keys never ship in the learner's file.

### Assignments

| Item | Location | Decision |
|---|---|---|
| 🗺️ The 50 States & Capitals Challenge | `assignments/fifty-states-and-capitals-challenge.md` | **Keep** → U01/U08. Blank challenge log + 60-second state-spotlight script outline + 10-capital match-up; genuine submission space. **Region-model conflict:** the assignment uses a 5-region model (Northeast/Southeast/Midwest/Southwest/West & Pacific) while `resources/us_states.csv` uses 4 Census-style subregions (`United States Northeast/Midwest/South/West`) — U01 authoring reconciles to one model before use. Explainer video is a templated search link; Seterra and Census links are real. |
| Regional Geography Review | `assignments/regional-geography-review.md` | **Keep** → U01/U08. Truly blank reusable prompt (3 Northeast + 3 Southeast states, capitals, landform, economic activity, cited sources, one pattern); generic organizer; privacy-safe ("keep the completed response private"). |
| 📰 Road to the Revolution Reporter's Journal | `assignments/road-to-revolution-journal.md` | **Keep** → U03. Three frontline dispatches (Boston Tea Party 1773; Lexington/Concord 1775; a Black-patriot profile — Crispus Attucks, James Armistead Lafayette, or Peter Salem). Facts verified this run: 342 chests, the *Dartmouth*/*Eleanor*/*Beaver*, Attucks's African and Wampanoag descent, Lafayette's double-agent role, Salem at Bunker Hill and Saratoga. Unit build adds a taught model and notes the "Mohawk disguise" as the colonists' own description, keeping two perspectives on every event. |
| 🏡 Daily Life in the 13 Colonies | `assignments/thirteen-colonies-life.md` | **Keep** → U02. Regional comparison chart + colonial-trade job application + Part 3 on enslaved people — honest, plain framing ("forced to work without pay or freedom") that names West African rice/tobacco expertise as the reason the Southern economy depended on enslaved labor. Needs taught models; feeds U02's diverse-perspectives work. |

### Quizzes

Every quiz below is ten items with a "Learn & Review" block and an embedded
`<details>` Parent Answer Key the unit builds must separate. Item answers were
spot-checked this run and are correct. **Two problems recur across all 14
quizzes:** (1) the "Reference" link points to the Library of Congress American
Revolution collection even on geography and Indigenous-nation quizzes where it
does not belong; (2) the "Explainer video" is a templated YouTube *search* link
for a nonexistent "Homeschool Pop US history geography" video title — a
labeled search link, but unit builds replace it with a verified video or a
properly labeled channel-search link. "Full resource shelf: Semester Resource
Library" is unlinked plain text; the shelf exists at
`resources/semester-resource-library.md`.

| Item | Location | Decision |
|---|---|---|
| The Midwest Region: "Breadbasket" States & The Great Lakes | `quizzes/the-midwest-region-breadbasket-states-the-great-lakes-quiz.md` | **Revise** → U01. HOMES acronym, capitals (Springfield, Columbus, Lansing, Indianapolis, Madison), prairie, Mississippi/Missouri confluence — correct. Needs separated key + topic-matched reference. |
| The Southwest Region: States, Deserts, & Canyons | `quizzes/the-southwest-region-states-deserts-canyons-quiz.md` | **Revise** → U01. Four states, capitals (Austin, Phoenix, Santa Fe, Oklahoma City), Grand Canyon, Rio Grande, Four Corners, Ancestral Puebloan adaptation — correct. Santa Fe "oldest state capital city (founded 1610)" is accurate. Needs separated key + topic-matched reference. |
| The West & Pacific Region: Mountains, Oceans, & Capitals | `quizzes/the-west-pacific-region-mountains-oceans-capitals-quiz.md` | **Revise** → U01. Capitals (Sacramento, Olympia, Salem, Juneau, Honolulu, Denver, Carson City), Rockies, Alaska/Hawaii — correct. Needs separated key + topic-matched reference. |
| Indigenous Peoples & First Nations of North America | `quizzes/indigenous-peoples-first-nations-of-north-america-quiz.md` | **Revise** → U01. Strong: culture areas (Plains, Eastern Woodlands/Haudenosaunee, Pacific Northwest, Southwest), Three Sisters, longhouses, totem poles; Q10 names nations as living sovereign communities. **Q4 softening needed:** "influenced early American democratic thinkers" is debated among historians — unit build phrases it as "some historians argue," with evidence. **Q8 wording:** unit build uses "nations/peoples" and notes the Diné preferred name. Needs separated key + topic-matched reference (the Revolution-collection link is wrong here). |
| Roanoke, Jamestown, & Early Virginia (1607–1619) | `quizzes/roanoke-jamestown-early-virginia-16071619-quiz.md` | **Revise** → U02. Lost Colony/CROATOAN, Jamestown 1607, John Smith, Powhatan (Wahunsenacawh)/Pocahontas (Matoaka), Starving Time, John Rolfe's tobacco, House of Burgesses 1619, the *White Lion*'s "20 and odd" captives named plainly as the beginning of chattel slavery — correct and honestly framed. Needs separated key + topic-matched reference. |
| The New England Colonies & Pilgrim Life | `quizzes/the-new-england-colonies-pilgrim-life-quiz.md` | **Revise** → U02. Mayflower 1620, Mayflower Compact, Tisquantum, 1621 harvest/Thanksgiving, Bradford, Winthrop's "City upon a Hill," rocky soil, shipbuilding/fishing/whaling, town meetings, Roger Williams/Rhode Island 1636 — correct. Needs separated key + topic-matched reference. |
| The Middle Colonies: Trade, Tolerance, & Wheat | `quizzes/the-middle-colonies-trade-tolerance-wheat-quiz.md` | **Revise** → U02. Four colonies, "Breadbasket" wheat/rye/barley, Dutch New Netherland/New Amsterdam 1664, William Penn 1681, Quaker Inner Light/pacifism, Philadelphia "City of Brotherly Love," Franklin, ports — correct. Needs separated key + topic-matched reference. |
| The Southern Colonies: Plantations, Labor, & Life | `quizzes/the-southern-colonies-plantations-labor-life-quiz.md` | **Revise** → U02. Five colonies, cash crops (tobacco, rice, indigo), indentured vs. enslaved distinction, Maryland/Toleration Act 1649, Georgia 1732/Oglethorpe, plantation system on tidal rivers, West African rice expertise, Middle Passage, resistance (spirituals, Anansi tales, faith, family) — correct and honestly framed. Needs separated key + topic-matched reference. |
| The French & Indian War & The Royal Proclamation of 1763 | `quizzes/the-french-indian-war-the-royal-proclamation-of-1763-quiz.md` | **Revise** → U03. Britain vs. France, "French and Indian" naming from the British perspective, young Washington, Franklin's "JOIN, or DIE" 1754, Treaty of Paris 1763, Pontiac's Rebellion, Proclamation Line along the Appalachians, war debt → colonial taxation — correct. Needs separated key. |
| "No Taxation Without Representation" & Boston Protests | `quizzes/no-taxation-without-representation-boston-protests-quiz.md` | **Revise** → U03. Slogan meaning, Stamp Act 1765, Sons of Liberty, boycotts/Daughters of Liberty, Boston Massacre 3/5/1770, Crispus Attucks, Revere's engraving, Tea Party 12/16/1773, Intolerable (Coercive) Acts, First Continental Congress 9/1774 — correct. Needs separated key. |
| Lexington, Concord, & The Bunker Hill Courage | `quizzes/lexington-concord-the-bunker-hill-courage-quiz.md` | **Revise** → U03. Minutemen, Old North Church lanterns ("one if by land, two if by sea"), Revere and Dawes, Lexington Green 4/19/1775, "shot heard 'round the world," Concord's gunpowder stores and the Battle Road retreat, Bunker Hill/Breed's Hill 6/1775, Prescott's order, Peter Salem and Major Pitcairn, Washington chosen 6/1775 — correct. Needs separated key. |
| The Declaration of Independence (July 4, 1776) | `quizzes/the-declaration-of-independence-july-4-1776-quiz.md` | **Revise** → U03/U04 bridge. *Common Sense* 1/1776, Jefferson age 33, Philadelphia/Independence Hall, "Life, Liberty, and the pursuit of Happiness," unalienable rights, consent of the governed, 7/4/1776, Hancock's signature, Phillis Wheatley, "our Lives, our Fortunes, and our sacred Honor" — correct. Wheatley item gives the unit a natural bridge into founding-era Black voices. Needs separated key. |
| Valley Forge, Washington's Crossing, & The French Alliance | `quizzes/valley-forge-washington-s-crossing-the-french-alliance-quiz.md` | **Revise** → U03. Delaware crossing Christmas 1776, Trenton morale, Saratoga 10/1777 as turning point, French alliance, Valley Forge winter 1777–78, von Steuben, Lafayette, John Paul Jones, women's roles (Deborah Sampson, "Molly Pitcher") — correct. Needs separated key. |
| Victory at Yorktown, Black Patriots, & A New Nation | `quizzes/victory-at-yorktown-black-patriots-a-new-nation-quiz.md` | **Revise** → U03/U08. Yorktown 10/1781, Cornwallis, de Grasse/Chesapeake, James Armistead Lafayette, Wentworth Cheswell, ~5,000–8,000 Black soldiers/sailors, "The World Turned Upside Down," Treaty of Paris 1783 (Mississippi River west, Spanish Florida south) — correct. Q10's synthesis prompt suits U08 reflection. Needs separated key. |

**Coverage gap:** U04 (founding documents/Constitution), U05 (early republic),
U06 (nineteenth-century change), and U07 (Civil War/Reconstruction) have **no
legacy files at all** and will be built new. The Declaration quiz bridges
U03→U04; the civil-rights template seeds U06/U07's rights work.

### Templates

| Item | Location | Decision |
|---|---|---|
| Civil Rights Evidence Note | `templates/civil-rights-movement.md` | **Keep** → U06/U07/U08. Blank evidence organizer (event/date, people/rights, two evidence pieces, how the event contributed to change, source citation); requires an educator-approved source; privacy-safe. |

### Internal reference decisions

| Item | Decision |
|---|---|
| `resources/government_basics.md` | **Adult-side reference** — accurate branches/agencies definitions behind U04 teacher guides (D2.Civ.1–5.3-5); kid-friendly bullets are adapted, not assigned as learner reading |
| `resources/united_states_understanding_and_principles.md` | **Adult-side reference** — background for U03–U05 teacher guides (colonies → Revolution → Constitution → federalism); learner-facing passages will be original and grade-5-appropriate |
| `resources/supply_and_demand_economics.md` | **Adult-side reference** — informs U02's colonial trade and specialization (D2.Eco.4.3-5) and U06's markets; its macro sections (inflation, unemployment, GDP) are out of scope |
| `resources/world_facts.md` | **Candidate for U01 geography data** — continent/ocean/capital sections are the starting shelf; every figure re-verified at authoring; no quiz cites it, so no dangling references |
| `resources/us_states.csv` | **Candidate for U01/U08 dataset tasks** — columns `name_common, usps, capital, region, subregion, population_approx, area_sq_mi, area_sq_km, population_density_per_sq_mi, statehood_year, biggest_city, biggest_city_population, state_fact, google_maps_url` (header verified 2026-10-04); task instructions will name exact columns and note rounded approximations. **Subregion values are 4 Census-style regions** (`United States Northeast/Midwest/South/West`) — reconcile with the fifty-states assignment's 5-region model in U01 |
| `resources/us_presidents.csv` | **Teacher-side background only** — may inform U04/U05's executive-branch context (columns `presidency_number, president_name, term_start, term_end, status, party, home_state, ...`); no learner-facing presidential content beyond what units author |
| `resources/un_countries.csv` / `.json` | **Candidate for U01 North-America comparisons** (Canada, Mexico) — columns `name_common, region, subregion, capital` are usable; the `population` column is currently empty and must not be used until filled from a verified source |
| `resources/black_excellence_figures.md` | **Adult-side reference** — the adult pre-selects age-appropriate figures for U03 (Black patriots, complementing existing quiz content), U06 (abolitionists), and U07/U08 (Reconstruction and civil-rights figures); entries are not assigned as learner reading |
| `resources/wars_fundamentals.md` | **No grade-5 reuse** — content skews far above this band |
| `resources/semester-resource-library.md` | **Inspect during unit sections** — external starting points only; each candidate link opened and assessed before recommendation |
| `teachers/ai-assistants/resource_finder.md` | **Reuse** — will drive each unit's Resource Pack (queries, verified videos/search links, references, task mapping) |
| Same-grade math track (#26, audit delivered as draft PR #92, unmerged) | **Reference only** — session model (4 × ~40 min sessions/week; 10–14 independent written tasks reviewed same day) reused as the grade-5 pattern; no math content reused |
| Same-grade science track (#27, audit as draft PR #93, unmerged) | **Reference only** — no content borrowed; map/observation routines stay at the social-studies level |
| Same-grade language arts track (#28, audit as draft PR #94, unmerged) | **Reference only** — informational-reading and evidence-based writing routines will align with its work; no LA content reused |
| Grade-4 social studies track (#25, audit delivered as draft PR #90, unmerged) | **Prerequisite reference only** — grade-4 end-of-year objectives define entry expectations (see §2); no grade-4 material copied upward |

No existing file contained reproduced copyrighted text. Four problems were
found: (1) every quiz's embedded answer key sits beside the student questions
(keys are accurate, but they must be separated into teacher guides); (2) the
mismatched Library of Congress Revolution-collection reference on all 14
quizzes; (3) the templated nonexistent-video YouTube search links on all 14
quizzes; (4) the region-model conflict between the fifty-states assignment
(5 regions) and `us_states.csv` (4 Census-style subregions). Three content
softenings are queued for unit authoring: the Haudenosaunee-influence claim
(some historians argue), Diné preferred naming, and the "Mohawk disguise"
framing. The four no-legacy units (U04–U07) are the track's main build work.

## 2. Prerequisites

Learners typically enter grade-5 social studies with the grade-4 social studies
track's end-of-year objectives (that track's audit is delivered as draft PR
#90, unmerged; its units are not yet written):

- Geographic tools — construct and read maps with title, symbols, key, compass
  rose, and labels; name cardinal directions; use maps of different scales;
  describe U.S. regions and their environmental characteristics
- Indigenous nations — explain how geography shaped nations' ways of life;
  take multiple perspectives on encounters
- History with timelines and evidence — sequence events across centuries;
  compare past and present; identify kinds of historical sources; compare
  accounts of the same event; explain probable causes and effects
- Citizenship — explain purposes of rules; describe roles of people in
  authority; explain how groups make rules that protect freedoms
- Economic choices — compare benefits and costs; identify resources used to
  produce goods and services; explain specialization and trade
- Evidence and communication — with adult support, gather information from
  multiple sources; distinguish fact from opinion; build arguments with claims,
  reasons, and sequenced explanations; present summaries orally, in writing, or
  with drawings
- Informed action — describe how people improved communities; identify ways to
  help with a local problem

The diagnostic weeks (Weeks 1–2) verify these — especially map reading at
multi-state scale, timeline sequencing across centuries, perspective-taking,
and benefit/cost weighing. Unit 01 re-teaches map tools (scale, grid, region
boundaries) rather than assuming they are secure; Unit 04 re-teaches the
purposes of rules and laws before the Constitution; Unit 08 re-teaches source
kinds at the inquiry scale before the capstone.

## 3. Track objectives

Measurable, adult-assessed by end of year (see track README for full wording):

1. Do geographic inquiry at North American scale (D2.Geo.1–3, 10.3-5)
2. Explain Indigenous histories and living nations (D2.Geo.2, 4–6, 8.3-5; D2.His.2, 4, 5.3-5)
3. Explain colonial societies with diverse perspectives (D2.His.2, 4, 5, 14.3-5; D2.Eco.3, 4.3-5; D2.Geo.8, 11.3-5)
4. Explain the Revolution's causes, events, and competing viewpoints (D2.His.1, 10, 11, 14, 16.3-5; D3.1–3.4)
5. Understand founding documents, the Constitution, and citizenship (D2.Civ.1–5, 12.3-5; D2.His.3.3-5)
6. Explain the early republic — expansion, displacement, and resistance (D2.Geo.7, 11.3-5; D2.His.4, 5, 14.3-5)
7. Explain nineteenth-century change — abolition and reform (D2.His.3, 14.3-5; D2.Civ.12–14.3-5)
8. Explain the Civil War, Reconstruction, and rights foundations (D2.His.1, 14, 16.3-5; D2.Civ.12.3-5)
9. Inquire and argue from evidence (D1.2–1.5; D3.1–3.4; D4.1–4.3.3-5)
10. Take informed action on a civic or community question (D4.6–4.8.3-5)

## 4. Standards crosswalk

Reference framework: the **College, Career, and Civic Life (C3) Framework for
Social Studies State Standards** (National Council for the Social Studies),
grades 3–5 band. The framework's four Dimensions (Developing Questions and
Planning Inquiries; Applying Disciplinary Tools and Concepts — civics,
economics, geography, history; Evaluating Sources and Using Evidence;
Communicating Conclusions and Taking Informed Action) were re-confirmed on the
NCSS C3 landing page 2026-10-04; indicator codes and descriptions below carry
over from the merged grade-3 audit's 2026-10-03 verification of the framework's
3–5 indicator tables. **No state adoption, accreditation, or alignment
certification is claimed.** The 3–5 band spans three grades; this track teaches
each indicator at the grade-5 upper-band level — source criticism, claims from
evidence, and informed action are practiced more independently here than in
grade 4. Indicators the framework defers to later bands — D2.His.7.3-5 and
D2.His.8.3-5 (begin in grades 9–12), D2.His.15.3-5 (begins in grades 6–8) — are
not taught in this track.

### Dimension 1 — Developing Questions and Planning Inquiries

| Code | Indicator | Track use |
|---|---|---|
| D1.1.3-5 | Explain why compelling questions are important to others (e.g., peers, adults). | U08 capstone framing |
| D1.2.3-5 | Identify disciplinary concepts and ideas associated with a compelling question that are open to different interpretations. | U01, U03, U08 |
| D1.3.3-5 | Identify the disciplinary concepts and ideas associated with a supporting question that are open to interpretation. | U02, U03, U06, U08 |
| D1.4.3-5 | Explain how supporting questions help answer compelling questions in an inquiry. | U03, U06, U08 |
| D1.5.3-5 | Determine the kinds of sources that will be helpful in answering compelling and supporting questions, taking into consideration the different opinions people have about how to answer the questions. | U02, U06, U08 |

### Dimension 2 — Civics

| Code | Indicator | Track use |
|---|---|---|
| D2.Civ.1.3-5 | Distinguish the responsibilities and powers of government officials at various levels and branches of government and in different times and places. | U04 (federal focus; builds on grade-4 state/local) |
| D2.Civ.2.3-5 | Explain how a democracy relies on people's responsible participation, and draw implications for how individuals should participate. | U04, U08 |
| D2.Civ.3.3-5 | Examine the origins and purposes of rules, laws, and key U.S. constitutional provisions. | U02 (colonial self-rule roots), U04 |
| D2.Civ.4.3-5 | Explain how groups of people make rules to create responsibilities and protect freedoms. | U04 |
| D2.Civ.5.3-5 | Explain the origins, functions, and structure of different systems of government, including those created by the U.S. and state constitutions. | U04 |
| D2.Civ.6.3-5 | Describe ways in which people benefit from and are challenged by working together, including through government, workplaces, voluntary organizations, and families. | U06, U08 |
| D2.Civ.7.3-5 | Apply civic virtues and democratic principles in school settings. | U04, U08 |
| D2.Civ.8.3-5 | Identify core civic virtues and democratic principles that guide government, society, and communities. | U04, U08 |
| D2.Civ.9.3-5 | Use deliberative processes when making decisions or reaching judgments as a group. | U04, U08 |
| D2.Civ.10.3-5 | Identify the beliefs, experiences, perspectives, and values that underlie their own and others' points of view about civic issues. | U02, U03, U05, U06, U08 |
| D2.Civ.11.3-5 | Compare procedures for making decisions in a variety of settings, including classroom, school, government, and/or society. | U04, U08 |
| D2.Civ.12.3-5 | Explain how rules and laws change society and how people change rules and laws. | U04, U06, U07 |
| D2.Civ.13.3-5 | Explain how policies are developed to address public problems. | U06, U08 |
| D2.Civ.14.3-5 | Illustrate historical and contemporary means of changing society. | U06, U07, U08 |

### Dimension 2 — Economics

| Code | Indicator | Track use |
|---|---|---|
| D2.Eco.1.3-5 | Compare the benefits and costs of individual choices. | U02, U05 |
| D2.Eco.2.3-5 | Identify positive and negative incentives that influence the decisions people make. | U02, U06 |
| D2.Eco.3.3-5 | Identify examples of the variety of resources (human capital, physical capital, and natural resources) that are used to produce goods and services. | U02, U06 |
| D2.Eco.4.3-5 | Explain why individuals and businesses specialize and trade. | U02 |
| D2.Eco.5.3-5 | Explain the role of money in making exchange easier. | U02 |
| D2.Eco.7.3-5 | Explain how profits influence sellers in markets. | U02, U06 |
| D2.Eco.8.3-5 | Identify examples of external benefits and costs. | U06 |
| D2.Eco.14.3-5 | Explain how trade leads to increasing economic interdependence among nations. | U05 |
| D2.Eco.15.3-5 | Explain the effects of increasing economic interdependence on different groups within participating nations. | U05 (who benefits, who is harmed by expansion-era trade) |

### Dimension 2 — Geography

| Code | Indicator | Track use |
|---|---|---|
| D2.Geo.1.3-5 | Construct maps and other graphic representations of both familiar and unfamiliar places. | U01, U08 |
| D2.Geo.2.3-5 | Use maps, satellite images, photographs, and other representations to explain relationships between the locations of places and regions and their environmental characteristics. | U01 |
| D2.Geo.3.3-5 | Use maps of different scales to describe the locations of cultural and environmental characteristics. | U01, U05 |
| D2.Geo.4.3-5 | Explain how culture influences the way people modify and adapt to their environments. | U01 |
| D2.Geo.5.3-5 | Explain how the cultural and environmental characteristics of places change over time. | U01, U05, U07 |
| D2.Geo.6.3-5 | Describe how environmental and cultural characteristics influence population distribution in specific places or regions. | U01, U05 |
| D2.Geo.7.3-5 | Explain how cultural and environmental characteristics affect the distribution and movement of people, goods, and ideas. | U05, U06 |
| D2.Geo.8.3-5 | Explain how human settlements and movements relate to the locations and use of various natural resources. | U01, U02 |
| D2.Geo.10.3-5 | Explain why environmental characteristics vary among different world regions. | U01 |
| D2.Geo.11.3-5 | Describe how the spatial patterns of economic activities in a place change over time because of interactions with nearby and distant places. | U02, U05 |
| D2.Geo.12.3-5 | Explain how natural and human-made catastrophic events in one place affect people living in other places. | U07 (war's effects on distant communities; adult-guided, observation-level) |

### Dimension 2 — History

| Code | Indicator | Track use |
|---|---|---|
| D2.His.1.3-5 | Create and use a chronological sequence of related events to compare developments that happened at the same time. | U03, U06, U07 |
| D2.His.2.3-5 | Compare life in specific historical time periods to life today. | U01, U02, U07 |
| D2.His.3.3-5 | Generate questions about individuals and groups who have shaped significant historical changes and continuities. | U06, U07 |
| D2.His.4.3-5 | Explain why individuals and groups during the same historical period differed in their perspectives. | U01, U02, U03, U05 |
| D2.His.5.3-5 | Explain connections among historical contexts and people's perspectives at the time. | U01, U02, U03, U05 |
| D2.His.6.3-5 | Describe how people's perspectives shaped the historical sources they created. | U03, U07, U08 (deepened at grade-5 level) |
| D2.His.9.3-5 | Summarize how different kinds of historical sources are used to explain events in the past. | U01, U08 |
| D2.His.10.3-5 | Compare information provided by different historical sources about the past. | U03, U07, U08 |
| D2.His.11.3-5 | Infer the intended audience and purpose of a historical source from information within the source itself. | U03, U07 (deepened at grade-5 level) |
| D2.His.12.3-5 | Generate questions about multiple historical sources and their relationships to particular historical events and developments. | U07, U08 |
| D2.His.13.3-5 | Use information about a historical source, including the maker, date, place of origin, intended audience, and purpose to judge the extent to which the source is useful for studying a particular topic. | U03 (adult-guided), U07, U08 |
| D2.His.14.3-5 | Explain probable causes and effects of events and developments. | U02, U03, U05, U06, U07 |
| D2.His.16.3-5 | Use evidence to develop a claim about the past. | U03, U07, U08 (deepened at grade-5 level) |
| D2.His.17.3-5 | Summarize the central claim in a secondary work of history. | U08 (adult-guided, enrichment) |

### Dimensions 3–4 — Evidence, communication, informed action

| Code | Indicator | Track use |
|---|---|---|
| D3.1.3-5 | Gather relevant information from multiple sources while using the origin, structure, and context to guide the selection. | U01, U06, U07, U08 |
| D3.2.3-5 | Use distinctions among fact and opinion to determine the credibility of multiple sources. | U03, U07 |
| D3.3.3-5 | Identify evidence that draws information from multiple sources in response to compelling questions. | U07, U08 |
| D3.4.3-5 | Use evidence to develop claims in response to compelling questions. | U03, U08 |
| D4.1.3-5 | Construct arguments using claims and evidence from multiple sources. | U08 |
| D4.2.3-5 | Construct explanations using reasoning, correct sequence, examples, and details with relevant information and data. | U03, U07, U08 |
| D4.3.3-5 | Present a summary of arguments and explanations to others outside the classroom using print and oral technologies (e.g., posters, essays, letters, debates, speeches, and reports) and digital technologies. | U08 — presentations stay within adult-supervised settings; nothing is published from this track without the guiding adult's review |
| D4.4.3-5 | Critique arguments. | U08 (peer-review routine, adult-guided) |
| D4.5.3-5 | Critique explanations. | U08 (peer-review routine, adult-guided) |
| D4.6.3-5 | Draw on disciplinary concepts to explain the challenges people have faced and opportunities they have created, in addressing local, regional, and global problems at various times and places. | U06, U07, U08 |
| D4.7.3-5 | Explain different strategies and approaches students and others could take in working alone and together to address local, regional, and global problems, and predict possible results of their actions. | U08 capstone |
| D4.8.3-5 | Use a range of deliberative and democratic procedures to make decisions about and act on civic problems in their classrooms and schools. | U04, U08 |

## 5. Eight-unit sequence with weekly pacing

Session model (same as the grade-5 math audit): four ~40-minute sessions per
week, 16 sessions per unit. **S1** concept launch (explicit explanation +
modeled example), **S2** skills practice (guided then independent — 10–14
written tasks, reviewed by the adult the same day), **S3**
investigation/application (map work, source work, data work, or deliberation),
**S4** review and unit check. Eight units give 32 weeks; four flexible weeks
cover diagnostic (2), midyear review (1), and final review (1), totaling 36
weeks / 144 sessions.

### Weeks 1–2 — Diagnostic and placement

| Week | Goal | Sessions |
|---|---|---|
| 1 | Verify entry map skills at multi-state scale | S1: label a U.S. outline map (title, key, compass rose, cardinal directions, scale bar, bordering countries); S2: guided re-teach of weak map elements; S3: describe a place using a state map + photograph; S4: short map-skills check |
| 2 | Verify entry timeline, perspective, and economic-choice skills | S1: sequence 8–10 events spanning centuries on a timeline; S2: explain one past event from two viewpoints (grade-4 re-teach check); S3: weigh benefits/costs of a historical or community choice (scenario cards); S4: diagnostic review — adult records gaps that U01–U07 re-teach |

### U01 — North American geography, Indigenous histories, and sources (Weeks 3–6)

Sensitive-content note: Indigenous peoples are not a past-tense topic. Nations
are named as living, sovereign communities with homelands; the adult selects
sources with Indigenous authorship or museum/tribal sources where available.
Every culture-area study includes a present-day connection. The existing
Indigenous-nations quiz already models this framing; unit lessons keep it.

| Week | Goal | Sessions |
|---|---|---|
| 3 | Use geographic tools: compass rose, scale, grid, key, and map evidence | S1: launch — how geographers read maps (scale, direction, symbols, evidence claims); S2: practice reading scale and direction on North America maps; S3: investigation — find two cities with a scale bar and a grid, justify with map evidence; S4: review + check |
| 4 | Explain North American regions and their environmental characteristics | S1: regions overview with relief/climate maps (reconcile the region model with `us_states.csv` — see §1 finding); S2: practice — sort states into regions from the CSV's region/subregion columns and justify with map evidence; S3: region profile task — environment, landmarks, one fact per region (kept `fifty-states-and-capitals-challenge.md` begins); S4: review + check |
| 5 | Explain how environment shaped Indigenous nations' ways of life | S1: launch — culture areas (Arctic, Northwest Coast, Plateau, Great Plains, Eastern Woodlands, Southeast, Southwest, California) with environment maps; S2: practice matching environmental features to ways of life (food, shelter, travel) using the revised Indigenous-nations quiz as a practice bank; S3: investigation — one nation, one environment: how did people adapt and modify it?; S4: review + check |
| 6 | Work with sources about Indigenous histories; compare region data | S1: source kinds for Indigenous histories — oral accounts, artifacts, maps, photographs (adult-selected, Indigenous authorship preferred); S2: practice — what does each source kind tell us, and what can't it tell us?; S3: dataset task — compare two states by area, population, density from `us_states.csv` (columns named, "approx" explained); S4: unit review + U01 assessment |

### U02 — Colonial societies: labor, trade, and diverse perspectives (Weeks 7–10)

Sensitive-content note: colonial economic life included enslaved labor. The
adult introduces this honestly and plainly at an age-appropriate level —
people were forced to work without freedom or pay, which is why it is named
plainly — and pre-selects all sources. No graphic detail; focus stays on
systems (labor, crops, trade), on diverse perspectives, and on the people who
resisted.

| Week | Goal | Sessions |
|---|---|---|
| 7 | Compare the three colonial regions: environment, settlement, daily life | S1: launch — New England, Middle, Southern colonies with environment maps; S2: practice matching regional features to ways of life (kept New England / Middle / Southern quizzes as practice banks); S3: then/now task — compare colonial daily life to life today (D2.His.2.3-5); S4: review + check |
| 8 | Explain colonial economic life: resources, specialization, trade | S1: cash crops, crafts, shipping — who produced what and why it grew there; S2: practice production chains (e.g., tobacco: field → port → ship); S3: specialization and trade task — why regions traded with each other and with Europe (D2.Eco.4.3-5); S4: review + check |
| 9 | Explain labor systems, including enslaved labor, honestly and plainly | S1: indentured servitude vs. enslavement — the legal and human difference (kept Southern-colonies quiz Q3 as the teaching core); S2: practice — who did which work, and who chose?; S3: the kept `thirteen-colonies-life.md` assignment (Part 3: West African rice/tobacco expertise) with a taught model; S4: review + check |
| 10 | Take multiple perspectives on colonial events | S1: two perspectives on one event (original age-appropriate accounts, adult-selected); S2: practice naming each perspective and its reasons (D2.His.4, 5.3-5); S3: perspective task — explain one colonial event from a settler's and an Indigenous or enslaved person's viewpoint (adult-guided); S4: unit review + U02 assessment |

### U03 — Revolution: causes, events, and competing viewpoints (Weeks 11–14)

Sensitive-content note: the Revolution is taught as a contest of competing
claims, not a single heroic story. Loyalist, Patriot, British, French, and
Black perspectives appear through adult-selected sources; every event is
examined from at least two viewpoints.

| Week | Goal | Sessions |
|---|---|---|
| 11 | Build timelines of the road to revolution; explain causes and effects | S1: timeline launch — 1754–1776 (French & Indian War → Proclamation of 1763 → Stamp Act → Townshend → Tea Party → Intolerable Acts → First Continental Congress) with the revised French-&-Indian-War quiz as a practice bank; S2: practice sequencing and comparing simultaneous developments; S3: cause/effect chains — one tax, its probable effects on each group; S4: review + check |
| 12 | Explain the Boston protests and the outbreak of war from competing viewpoints | S1: "No taxation without representation" — the colonial claim and the British claim; the revised taxation/Boston quiz as a practice bank; S2: practice — boycott economics (D2.Eco.2.3-5: incentives); S3: the kept `road-to-revolution-journal.md` Dispatches 1–2 begin (Boston Tea Party, Lexington/Concord) with a taught news-report model; S4: review + check |
| 13 | Compare sources about the same revolutionary event; infer audience and purpose | S1: two accounts of one event — what agrees, what differs, who wrote each and why (D2.His.10, 11.3-5); S2: practice inferring audience/purpose from clues inside the source; S3: fact-vs.-opinion credibility work in revolutionary texts (D3.2.3-5); S4: review + check |
| 14 | Explain the war's turning points and use evidence for a claim about the past | S1: Saratoga → French alliance → Yorktown, with the revised Valley Forge and Yorktown quizzes as practice banks; S2: practice turning source evidence into a claim with reasons (D2.His.16.3-5); S3: Dispatch 3 — the Black-patriot profile (Attucks, Armistead Lafayette, Salem, Cheswell, Wheatley) with the kept journal's taught model; S4: unit review + U03 assessment |

### U04 — Founding documents, Constitution, and citizenship (Weeks 15–18)

No legacy files exist for this unit; it is built new against
`resources/government_basics.md` and
`resources/united_states_understanding_and_principles.md` (adult-side
references). The Declaration quiz's Wheatley item bridges U03→U04 with a
founding-era Black voice.

| Week | Goal | Sessions |
|---|---|---|
| 15 | Examine the Declaration's ideas: natural rights and consent of the governed | S1: launch — "Life, Liberty, and the pursuit of Happiness"; unalienable rights; consent of the governed (original grade-5-level passage, adult-read); S2: practice — whose rights? who was included and who was not in 1776, and why that matters; S3: claims task — did the Revolution fulfill the Declaration's promises? (evidence chart, adult-guided); S4: review + check |
| 16 | Explain the Constitution's structure: three branches, checks, federalism | S1: branches and what each does; checks and balances; federal vs. state powers (D2.Civ.1, 5.3-5); S2: practice — which branch handles this situation? (scenario sort); S3: bill-to-law and amendment paths — how the rules can be changed (D2.Civ.12.3-5); S4: review + check |
| 17 | Explain the Bill of Rights and how groups make rules that protect freedoms | S1: key amendments in plain language (speech, press, religion, fair trial, voting amendments); S2: practice — is this situation fair? (scenario cards with reasons); S3: deliberation — write a fair classroom rule with a reason (D2.Civ.4, 9.3-5); S4: review + check |
| 18 | Explain how democracy relies on participation; how people change laws | S1: participation forms — voting, speaking up, helping, serving (D2.Civ.2.3-5); S2: practice comparing decision procedures (consensus, vote, leader decides — D2.Civ.11.3-5); S3: policy task — propose a classroom/school policy for a real problem, with steps (D2.Civ.13.3-5); S4: unit review + U04 assessment |

### Week 19 — Midyear review and catch-up

| Sessions | Goal |
|---|---|
| S1–S2 | Spiral review: map tools and regions, Indigenous nations and perspectives, colonial economies, revolutionary timelines and sources, founding documents — re-check diagnostic gaps |
| S3 | Catch-up session for unfinished investigations (state-spotlight scripts, revolution journal) or re-teaching per adult judgment |
| S4 | Midyear check: one map task, one source-comparison task, one claim-with-evidence task — adult records progress toward track objectives |

### U05 — Early republic: expansion, displacement, and resistance (Weeks 20–23)

Sensitive-content note: westward expansion meant displacement and broken
treaties for Indigenous nations. This unit names displacement plainly,
centers Indigenous and resister perspectives alongside settler accounts, and
keeps all sources adult-selected. No triumphalist framing.

| Week | Goal | Sessions |
|---|---|---|
| 20 | Map the early republic: new states, territories, and movement west | S1: launch — the nation in 1800 vs. 1850 (maps of different scales — D2.Geo.3.3-5); S2: practice tracing expansion on maps; S3: movement task — how did cultural and environmental characteristics shape where settlers went? (D2.Geo.7.3-5); S4: review + check |
| 21 | Explain displacement: treaties, removal, and Indigenous resistance | S1: what treaties promised and what happened (plain, age-appropriate, adult-selected sources); S2: practice — two perspectives on one removal (D2.His.4, 5.3-5); S3: resistance task — how nations and individuals resisted (evidence chart); S4: review + check |
| 22 | Explain how expansion changed places and economic patterns | S1: new economic patterns — how trade routes, ports, and settlement reshaped regions (D2.Geo.11.3-5); S2: practice — who benefits and who is harmed when trade expands? (D2.Eco.15.3-5); S3: interdependence web — goods from many places in one 1840s home (D2.Eco.14.3-5); S4: review + check |
| 23 | Explain probable causes and effects of expansion-era developments | S1: cause/effect for one region's transformation; S2: practice turning source evidence into a claim with reasons; S3: mini-exhibit — claim + two pieces of evidence (writing/drawing/oral); S4: unit review + U05 assessment |

### U06 — Nineteenth-century change: abolition and reform (Weeks 24–27)

No legacy files exist for this unit; the kept civil-rights template seeds its
evidence routines. The adult pre-selects age-appropriate abolitionist and
reformer figures (with `resources/black_excellence_figures.md` as the
adult-side shelf).

| Week | Goal | Sessions |
|---|---|---|
| 24 | Explain how reformers identified problems and proposed changes | S1: launch — what reform movements saw as wrong (slavery, and one more: e.g., working conditions, women's rights, education); S2: practice — problem → proposal chains; S3: the kept civil-rights template introduced as an evidence-note routine (adult-approved source); S4: review + check |
| 25 | Explain abolition: arguments, strategies, and the people who made them | S1: abolitionist arguments and strategies (speeches, newspapers, the Underground Railroad as resistance network); S2: practice — whose strategy was this, and who did it aim to persuade? (D2.Civ.10.3-5); S3: evidence task — two abolitionist sources, one claim (D3.1–3.4); S4: review + check |
| 26 | Explain how movements change rules and laws | S1: how pressure becomes policy — petitions, elections, courts, amendments (D2.Civ.12–14.3-5); S2: practice — trace one reform from idea to law; S3: external-effects task — who else is affected by a change? (D2.Eco.8.3-5, applied to reform); S4: review + check |
| 27 | Generate questions about the people who shaped change | S1: who shaped change and how — question-generation routine (D2.His.3.3-5); S2: practice — one reformer's context → choices chain; S3: then/now task — one reform's effects today, with evidence; S4: unit review + U06 assessment |

### U07 — Civil War, Reconstruction, and rights foundations (Weeks 28–31)

Sensitive-content note: the war's causes include slavery — named plainly as
the central cause, at an age-appropriate level. Battle detail stays at the
strategic/human level, never graphic. Reconstruction is taught as an
unfinished promise: new rights won, then rolled back. All sources
adult-selected.

| Week | Goal | Sessions |
|---|---|---|
| 28 | Build a timeline of the road to war; explain slavery's central role in the conflict | S1: timeline launch — 1820–1861 (Missouri Compromise, abolition growth, Kansas, Dred Scott, election of 1860, secession) with cause/effect chains (D2.His.14.3-5); S2: practice sequencing and comparing simultaneous developments North and South; S3: perspectives task — why did different groups see the same events differently? (D2.His.4, 5.3-5); S4: review + check |
| 29 | Explain the war years: strategy, turning points, and people's experiences | S1: the war at strategic scale — North vs. South resources and plans (maps); S2: practice — Emancipation Proclamation: what it did and did not do; S3: human-experience task — soldiers, families, and enslaved people seeking freedom (adult-selected accounts); S4: review + check |
| 30 | Explain Reconstruction: new rights, new governments, and rollback | S1: the 13th, 14th, and 15th Amendments in plain language (D2.Civ.12.3-5); S2: practice — what changed for whom, and what evidence shows it; S3: rollback task — how new rights were undermined (plain, age-appropriate); S4: review + check |
| 31 | Use evidence to develop claims about rights; explain war's effects on distant communities | S1: claim-building — did Reconstruction fulfill its promises? (D2.His.16.3-5, adult-guided); S2: practice judging source usefulness — maker, date, audience, purpose (D2.His.13.3-5); S3: effects task — how the war and its aftermath affected people far from the battlefields (D2.Geo.12.3-5, observation-level); S4: unit review + U07 assessment |

### U08 — Historical inquiry, U.S. geography, and civic capstone (Weeks 32–35)

| Week | Goal | Sessions |
|---|---|---|
| 32 | Frame the capstone: a compelling question about the American story | S1: launch — choose the compelling question (e.g., "How has the United States changed since 1776, and who shaped that change?"); S2: practice writing supporting questions (D1.2–1.5); S3: source planning — which sources (maps, documents, data, interviews) answer our questions (D1.5, D3.1.3-5); S4: review + check |
| 33 | Gather evidence from multiple sources; complete the geography synthesis | S1: guided source gathering (adult-supervised); S2: practice evidence charting — claim, evidence, source; S3: geography synthesis — complete the kept `fifty-states-and-capitals-challenge.md` and `regional-geography-review.md` as the U.S.-geography portfolio pieces; S4: review + check |
| 34 | Construct arguments and explanations; peer-review with adult guidance | S1: build the argument — claim + evidence + reasoning (D4.1–4.2.3-5); S2: peer-review routine — kind, specific, evidence-based feedback (D4.4–4.5.3-5); S3: revision; S4: review + check |
| 35 | Present the inquiry; deliberate and act on a civic question | S1: presentation preparation (poster, talk, or digital summary — adult-supervised setting only); S2: presentations (D4.3.3-5); S3: civic action — use a democratic procedure to decide one real classroom/school improvement (D4.7–4.8.3-5); S4: unit review + U08 assessment |

### Week 36 — Final review and portfolio

| Sessions | Goal |
|---|---|
| S1 | Spiral review: map tools, Indigenous nations, colonial regions, revolutionary timelines, founding documents, expansion, reform, Civil War and Reconstruction |
| S2 | Portfolio assembly — learner selects best map, timeline, claim-with-evidence, and deliberation reflection (adult keeps the portfolio private) |
| S3 | Final check: one task per track-objective cluster, adult-scored against the track objectives |
| S4 | Celebration and next-year preview — where grade-6 social studies picks up |

## 6. Internal resource reuse plan

- `resources/government_basics.md` and
  `resources/united_states_understanding_and_principles.md`: adult-side
  references behind U03–U05 teacher guides — never assigned as learner reading.
- `resources/supply_and_demand_economics.md`: adult-side reference for U02's
  colonial trade and specialization and U06's markets; its macro sections are
  out of scope.
- `resources/world_facts.md`: U01 geography starting shelf; every figure
  re-verified at authoring.
- `resources/us_states.csv` (U01, U08): columns `name_common, usps, capital,
  region, subregion, population_approx, area_sq_mi, area_sq_km,
  population_density_per_sq_mi, statehood_year, biggest_city,
  biggest_city_population, state_fact, google_maps_url` — task instructions
  will name the exact columns, note that populations/areas are rounded
  approximations, treat `state_fact` as unverified until checked, and
  **reconcile the 4-region CSV model with the assignment's 5-region model in
  U01** (see §1).
- `resources/us_presidents.csv`: teacher-side background only for U04/U05's
  executive-branch context; no learner-facing presidential content beyond what
  units author.
- `resources/un_countries.csv` / `.json` (U01 North-America comparisons):
  columns `name_common, region, subregion, capital` are usable; the
  `population` column is currently empty and must not be used until filled
  from a verified source.
- `resources/black_excellence_figures.md`: adult pre-selects age-appropriate
  figures for U03 (Black patriots), U06 (abolitionists), and U07/U08
  (Reconstruction and civil-rights figures).
- `teachers/ai-assistants/resource_finder.md`: drives each unit's Resource
  Pack (3–6 queries, 3–7 curated or labeled-search videos, 4–7 reputable
  references, task-to-resource mapping, check dates).

## 7. Accessibility supports (built into every unit)

- Map/diagram work: color is always paired with symbols and text labels; every
  image ships with alt text and a text-only description of the same
  information.
- Response modes: oral, pointing, drawing, and manipulative options for map and
  timeline tasks; the adult scribes written explanations whenever writing is
  not the assessed skill.
- Reading: original passages are written at grade-5 level; vocabulary is
  pre-taught; key terms appear with kid-friendly definitions in each lesson.
- Video/media (unit Resource Packs): captions or transcripts required; the
  adult previews for ads, age suitability, and accuracy.
- Deliberation and presentation: sentence starters, choice boards, and
  small-group formats; no learner is required to speak publicly beyond the
  adult-supervised setting.
- Sensitive history (U01–U03, U05–U07): displacement, enslavement, conquest,
  and war are taught through adult-selected, age-appropriate sources with at
  least two viewpoints on every encounter; difficult topics are named honestly
  and plainly, never glossed and never graphic. Indigenous nations are named
  as living communities with homelands throughout.

## 8. What the unit sections must deliver (for future runs)

Per `unit-requirements.md` and the track issue, each of U01–U08 needs: unit
README with objectives/prerequisites/vocabulary/standards notes and 16-session
pacing; 4–6 fully written lessons (explanations, ≥2 worked/modeled examples
each, guided + independent practice, applied task, exit check, supports,
extensions); a project/investigation with rubric; formative quiz and
culminating assessment; **separate** teacher guides and answer keys — every
existing quiz's embedded `<details>` key is extracted into the teacher guide
and every question is solved independently and reconciled; a verified Resource
Pack; and at least one genuinely generated raster image embedded in an
activity with alt text, caption, and an `assets/` generation record. R00 then
delivers the diagnostic, midyear/final reviews, cumulative assessment with
keys, and a full coherence/accessibility/sources/image/manifest audit.

Concrete paths:
- **U01 next:** reconcile the 5-region assignment model with the 4-region CSV
  model; author the U.S.-regions dataset task against `us_states.csv`
  columns; soften the Haudenosaunee-influence claim and add Diné naming;
  replace all 14 quizzes' reference/video links with topic-matched verified
  ones; separate every embedded key into the teacher guide.
- **U02:** draft the production-chain materials; write the taught model for
  the thirteen-colonies assignment (especially Part 3); confirm the
  enslavement framing note with the adult; pre-write the two-perspective
  clue sets.
- **U03:** write the taught news-report model for the revolution journal;
  build the two-account comparison sets with audience/purpose clues;
  pre-select Loyalist/Patriot/British/French/Black-perspective sources.
- **U04:** built new — write the grade-5-level Declaration passage; the
  branches/checks/federalism scenario sort; the Bill-of-Rights scenario
  cards; the classroom deliberation protocol against `government_basics.md`.
- **U05:** built new — adult-select displacement/resistance sources; build
  the interdependence web task; confirm the no-triumphalism framing note.
- **U06:** built new — adult-select abolitionist/reformer figures from
  `black_excellence_figures.md`; write the evidence-note routine around the
  kept civil-rights template; build the reform-idea-to-law trace task.
- **U07:** built new — adult-select the war-accounts and Reconstruction
  sources; pre-write the source-usefulness clue sets; confirm the
  slavery-as-central-cause framing with the adult.
- **U08:** write the peer-review routine and the civic-action decision
  procedure; confirm portfolio-privacy handling with the adult; complete the
  kept fifty-states and regional-geography assignments as portfolio pieces.

## Verification record

- All 20 track files read in full; the issue's 20-file baseline confirmed —
  no files added, removed, or renamed.
- `resources/us_states.csv` header verified on `main` (2026-10-04);
  subregion values are the 4 Census-style regions (`United States
  Northeast/Midwest/South/West`), conflicting with the fifty-states
  assignment's 5-region model — recorded in §1 and §6.
- `resources/un_countries.csv` header verified (2026-10-04); `population`
  column empty — recorded as unusable until filled.
- `resources/semester-resource-library.md` exists on `main` (129 lines);
  the track files' "Semester Resource Library" mentions are unlinked text,
  not broken links.
- C3 Framework: four Dimensions and the D2 sub-strands (civics, economics,
  geography, history) re-confirmed on
  https://www.socialstudies.org/standards/c3 (2026-10-04); indicator codes
  and descriptions carried over from the merged grade-3 audit's 2026-10-03
  verification of the framework's 3–5 indicator tables.
- Spot-checked quiz facts (Boston Tea Party details, colonial dates,
  capitals, Yorktown/Treaty of Paris boundaries, Santa Fe 1610) against
  standard references; keys accurate.
- No copyrighted text reproduced in any track file. No state adoption,
  accreditation, or alignment certification is claimed anywhere in this track.
