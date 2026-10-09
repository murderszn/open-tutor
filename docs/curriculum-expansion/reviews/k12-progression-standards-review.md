# K–12 Progression and Standards Crosswalk Review

**Review issue:** [#58](https://github.com/murderszn/open-tutor/issues/58) — first section: evidence-backed review report and corrections.
**Date:** 2026-10-09 (UTC). **Run:** open-tutor-curriculum-worker (scheduled, 3-hour cadence).
**Status:** draft delivery for educator review — not approval, not merged curriculum.

## 1. What was inspected

All 52 track A00 scope-and-sequence drafts — the actual linked drafts, not checklist counts:

- **Merged on `main` (16):** Kindergarten and grades 1–3, all four subjects (PRs #62–#78).
- **Open draft PRs (36):** grades 4–12, all four subjects (PRs #87–#90, #92–#96, #98–#125).

For each draft the reviewer extracted the eight-unit sequence, the Prerequisites section, the standards crosswalk codes, and the resource-reuse table; checked every relative Markdown link; and checked week arithmetic (8 × 4-week units + 4 flexible weeks = 36).

## 2. K–12 progression maps (as delivered)

### Mathematics

| Grade | Course shape | Unit arc |
|---|---|---|
| K | Counting & cardinality → operations → geometry/measurement | Counting/classifying → numbers to 10 → comparing → teen numbers/ten frames → addition stories → subtraction stories → shapes/spatial → measurement & data |
| 1 | Place value → add/subtract → measurement/geometry | Counting/place value/tens → addition within 20 → subtraction within 20 → story problems → two-digit foundations → length → time/data → shapes/equal shares |
| 2 | Place value → operations → measurement/geometry | Place value to 1000 → add/subtract within 100 → three-digit add/subtract → word problems → equal groups/arrays → length → time/money/data → shapes/partitions |
| 3 | Operations → fractions → measurement/geometry | Place value/rounding/multi-digit ops → multiplication → division → mult/div problems → fractions → measurement/time/volume → area/perimeter → geometry/scaled data |
| 4 | Multi-digit ops → fractions/decimals → geometry | Place value/rounding/ops → factors/multiples → multi-digit mult/div → fraction equivalence → fraction add/subtract → decimals/measurement → lines/angles/shapes → area/perimeter/line plots |
| 5 | Decimals → fractions → volume/coordinate plane | Place value/decimals/powers of ten → multi-digit mult/div → decimal ops → fraction add/subtract → fraction mult/div → measurement/volume → coordinate plane/patterns → data/line plots |
| 6 | Ratios → rational numbers → expressions/equations → geometry/stats | Ratios/unit rates → fraction/decimal ops → integers/coordinate plane → expressions → equations/inequalities → area/surface area/volume → statistics → percent/modeling |
| 7 | Rational numbers → proportional → algebra → geometry/stats | Rational-number ops → proportional relationships → percent change → expressions/equations → scale drawings/constructions → circles/area/volume → sampling/inference → probability |
| 8 | Exponents → linear → functions → geometry/data | Real numbers/roots → exponents/scientific notation → linear equations → slope/linear graphs → systems → functions/nonlinear → transformations/similarity/Pythagoras → volume/bivariate data |
| 9 | Algebra 1 | Expressions/equations → linear functions → systems/inequalities → exponents/polynomials → quadratics/factoring → quadratic equations → exponential functions/sequences → descriptive statistics |
| 10 | Geometry | Definitions/proof → congruence/rigid motions → similarity/dilations → right-triangle trig → quadrilaterals/coordinate proofs → circles → area/surface area/volume → geometric probability |
| 11 | Algebra 2 / precalculus core | Function transformations/composition/inverses → polynomials/zeros/complex → rational functions → radical functions → exponential/logarithmic → trig functions/periodic models → sequences/series/financial → probability/inference |
| 12 | Precalculus + statistics + modeling (optional calculus bridge) | Advanced function analysis → trig identities → vectors/parametric/polar → sequences/series/discrete models → probability distributions/inference → algebraic optimization → limits/rates (optional) → capstone |

**Coherence verdict:** clean grade-to-grade handoffs K–11; each track's Prerequisites section names the prior grade's end-of-year objectives. The grade 8 → 9 handoff (functions/nonlinear → algebra foundations) is conventional. Grade 12 re-uses grade-11 content explicitly as *prerequisite fluency* and extends it (infinite series, Binomial Theorem, distribution-based inference via S-MD) — the extension framing is present in the crosswalk; unit builds must preserve it (see R2).

### Science

| Grade | Discipline shape | Unit arc |
|---|---|---|
| K | Integrated: pushes/pulls, materials, plants, animals, weather | Observing/asking → pushes/pulls → materials/design → plant needs → animal needs/habitats → weather → sunlight/warming → caring for environments |
| 1 | Physical (sound/light) → life (structures/behavior) → Earth/space | Investigations → sound/vibration → light/shadows → plant/animal structures → parent–offspring/behavior → sun/moon patterns → seasons/weather → biomimicry engineering |
| 2 | Measurement → matter → life → Earth | Fair comparisons → material properties → heating/cooling → seed dispersal/habitats → biodiversity → landforms/maps → Earth changes/erosion → wind/water engineering |
| 3 | Fair tests → forces/magnetism → life cycles/traits → weather | Fair tests/data → balanced/unbalanced forces → magnetic/electric → life cycles → inherited traits/variation → habitats/adaptations → weather/climate/hazards → engineering |
| 4 | Energy/waves → structures/senses → Earth history | Evidence/models → energy transfer/collisions → waves/information → plant/animal structures → senses/information processing → fossils/landscape → weathering/erosion/resources → energy engineering |
| 5 | Matter → ecosystems → Earth systems → space | Models/investigations → particle models/mixtures → matter conservation/chemical change → energy in food/ecosystems → Earth spheres/water → water cycle/stewardship → gravity/stars/sky → engineering |
| 6 | Earth/space science | Investigation design → Earth–Sun–Moon/seasons → solar system/gravity/scale → rocks/minerals/cycles → plate tectonics/geologic evidence → water/atmosphere/weather → climate/human impacts → hazards/engineering |
| 7 | Life science | Evidence/microscopy/cells → cell structures/organization → photosynthesis/respiration → reproduction/inheritance → natural selection/evolution → ecosystems/biodiversity → body systems/homeostasis → investigations |
| 8 | Physical science | Quantities/motion/graphs → forces/Newton/momentum → energy/work/machines → waves/sound/light → electricity/magnetism/circuits → atomic structure/periodic patterns → bonding/reactions → thermal/engineering |
| 9 | Biology | Biological investigation/biomolecules → cells/membranes/transport → photosynthesis/respiration → cell cycle/mitosis/meiosis → molecular genetics/gene expression → population genetics/evolution → ecology/matter cycling → human systems/homeostasis |
| 10 | Chemistry | Lab methods/measurement/uncertainty → atomic models/isotopes/periodicity → bonding/structure/properties → reactions/stoichiometry → gases/intermolecular forces → solutions/concentration → thermochemistry/kinetics/equilibrium → acids/bases/redox |
| 11 | Physics | Measurement/vectors/motion → forces/dynamics → energy/work/power → momentum/collisions → circular motion/gravitation → waves/sound/optics → circuits/electromagnetism → thermal/modern physics |
| 12 | Earth & environmental science (quantitative) | Earth-system evidence/geologic time → plate tectonics/resources/landscapes → atmosphere/ocean/weather → climate evidence/feedbacks → biodiversity/conservation → water/soil/pollution → energy systems/sustainability → environmental investigation |

**Coherence verdict:** a disciplined rotation — integrated K–5, then one Earth year (6), one life year (7), one physical year (8), then biology → chemistry → physics → Earth/environmental. The middle→high spirals (G7 cells/genetics/evolution/ecosystems → G9 molecular/population-genetics biology; G6 plate tectonics/climate/water → G12 quantitative Earth science) are framed as deepening, not repetition. Two prerequisite-framing gaps were found and corrected (C1 is social studies; C2/C3 below).

### Language arts

| Grade | Shape | Unit arc |
|---|---|---|
| K | Oral language → phonemic awareness → print | Oral language/print concepts → rhyme/syllables/phonemic awareness → letters/sounds → blending/CVC → shared reading/retelling → decodable reading/sentences → informational questions/drawing-to-writing → opinion/narrative sharing |
| 1 | Phonics → fluency → comprehension → writing | Phonemic review/short vowels → blends/digraphs → long vowels → fluency/retelling → informational reading → sentences/grammar → opinion/explanatory/narrative writing → speaking/research/portfolio |
| 2 | Phonics → fluency → comprehension → writing | Vowel teams/syllables → fluency/vocabulary → story structure/perspectives → informational reading → grammar/sentences → narrative writing → opinion/explanatory writing → research/poetry/portfolio |
| 3 | Word analysis → comprehension → craft → research | Morphology/vocabulary/fluency → character/theme → informational main idea/evidence → sentence structure/grammar → narrative writing → opinion writing → research/explanatory writing → poetry/speaking/portfolio |
| 4 | Evidence → literary/informational → craft → research | Reading evidence/inference → theme/character/setting/POV → informational structures/sources → grammar/sentences → narrative craft → opinion writing → research/paraphrase → poetry/presentations/portfolio |
| 5 | Fluency → theme/perspective → synthesis → research | Fluency/morphology → theme/perspective/character → informational synthesis → grammar/editing → narrative craft → opinion writing → research/citation → poetry/multimedia/portfolio |
| 6 | Close reading → argument → research | Inference/evidence → theme/plot/narrator → informational argument/structure → grammar/pronouns → narrative craft → argument writing → research/synthesis → poetry/discussion/portfolio |
| 7 | Close reading → rhetoric → argument → research | Theme/story elements → perspective/figurative language/poetry → informational rhetoric/argument → grammar/clauses → narrative craft → argument/counterclaims → research/credibility → speaking/media/portfolio |
| 8 | Close reading → rhetoric → argument → research | Inference/theme/synthesis → drama/character/adaptation → informational rhetoric/conflicting accounts → grammar/voice/verbals → narrative craft → argument/rebuttals → research/attribution → poetry/presentations/portfolio |
| 9 | Literary reading & composition foundations | Close reading/theme/evidence → narrative structure/characterization → informational rhetoric/media literacy → grammar/syntax/style → narrative workshop → argument essays → research inquiry → poetry/drama/portfolio |
| 10 | World literature | World-literature context/interpretation → comparative theme/structure → nonfiction rhetoric → syntax/tone/vocabulary → narrative craft/analysis essays → argument synthesis → research across perspectives → poetry/drama/portfolio |
| 11 | American literature | American-literature contexts/close reading → founding rhetoric/primary texts → literary movements/diverse voices → stylistic analysis → literary criticism → argument/public reasoning → independent research → poetry/drama/capstone |
| 12 | Advanced criticism & professional communication | Critical lenses/interpretation → comparative world literature → rhetorical/media criticism → precision style → advanced analytical/creative writing → research synthesis → professional/civic communication → seminar/capstone portfolio |

**Coherence verdict:** a clean ladder — decoding → fluency → comprehension → craft → argument → research, with the genre rotation (narrative/opinion/research/poetry) stable from grade 4 on and increasing sophistication. The 9–12 band codes are used for high-school units; grade-8 codes appear only in the grade-9 diagnostic (entry check), which is legitimate.

### Social studies

| Grade | Shape | Unit arc |
|---|---|---|
| K | Self → classroom → community → world | Identity/belonging → rules/fairness → community helpers → maps/symbols → needs/wants/exchanges → time/sequence → cultures/traditions → caring for shared places |
| 1 | Community & citizenship | Community membership/rights → local maps/land/water → past/present/timelines → leaders/rules/decisions → needs/wants/producers → cultures/celebrations → historical figures/sources → civic inquiry |
| 2 | Community, geography, local history | Geographic tools/directions → landforms/human choices → local history/timelines → rules/laws/citizenship → work/trade → migration/diversity → historical figures/viewpoints → civic project |
| 3 | Regions & communities | Maps/regions/continents → environment/settlement → communities over time → local government → production/trade/interdependence → cultures/migration → rights/fairness → regional inquiry |
| 4 | U.S. regions → Indigenous → exploration → colonial | Geographic tools/U.S. regions → Indigenous nations → exploration/encounters → colonial regions → state/local government → resources/migration/industry → historical sources → regional capstone |
| 5 | U.S. history: geography → Revolution → Civil War/Reconstruction | North American geography/Indigenous → colonial societies → Revolution → founding documents/Constitution → early republic/expansion → abolition/reform → Civil War/Reconstruction → historical inquiry capstone |
| 6 | Ancient world | Historical inquiry/archaeology → early humans/agriculture → Mesopotamia/Egypt → South/East Asia → Greece → Rome → African/American civilizations → belief systems/exchange |
| 7 | Medieval → early modern world | Medieval inquiry → Byzantine/Islamic/Mediterranean → African kingdoms → South/SE Asian/Pacific → medieval Europe → Indigenous American societies → Renaissance/Reformation → global encounters/colonization |
| 8 | U.S. history to 1877 (second pass) | Colonial/Atlantic exchange → Revolution → Constitution/ratification → early republic → industry/reform/abolition → sectionalism/Civil War → Reconstruction → primary-source capstone |
| 9 | World history, c. 1450–present | World circa 1450 → empires/exchange/colonization → Enlightenment/revolutions → industrialization/imperialism → world wars/ideologies → decolonization/Cold War → globalization → contemporary inquiry |
| 10 | U.S. history, Reconstruction–present | Reconstruction/industrialization → immigration/urbanization/labor → expansion/WWI → 1920s/Depression/New Deal → WWII → Cold War/civil rights → late-20th century → recent history/media inquiry |
| 11 | Civics / government | Constitutional foundations → Constitution/federalism → civil liberties/rights → elections/parties → Congress/presidency/courts → state/local/tribal government → media/comparative government → policy capstone |
| 12 | Economics | Scarcity/incentives → supply/demand/markets → firms/labor/competition → market failures → macro indicators → fiscal/monetary policy → trade/development → personal finance/policy capstone |

**Coherence verdict:** expanding-circles K–3, then U.S. regions (4) → U.S. survey to Reconstruction (5) → ancient (6) → medieval/early-modern (7) → U.S. to 1877 second pass (8) → world 1450–present (9) → U.S. Reconstruction–present (10) → civics (11) → economics (12). Handoffs are clean except one framing gap: grade 8 re-teaches grade 5's entire U.S. arc without naming grade 5 as its content foundation (corrected, C1). The grade 7 → 9 bridge (G7 ends with early colonization; G9 opens circa 1450 with explicit "revisit with a world/global framing, not duplicated lessons") is the model to copy.

## 3. Standards verification

| Check | Source | Date | Result |
|---|---|---|---|
| CCSS ELA RL.9-10 strand listing; RL.9-10.8 omission claim | thecorestandards.org/ELA-Literacy/RL/9-10 (official) | 2026-10-09 | **Confirmed.** The official strand lists 1–7, 9, 10; there is no RL.9-10.8. The grade-9 audit's note is accurate. |
| NGSS engineering-design codes (K-2-ETS1, 3-5-ETS1, MS-ETS1, HS-ETS1) | CA Dept. of Ed. NGSS grade-level documents | 2026-10-09 | **Confirmed.** All ETS codes in the 52 scopes use the official banded forms; no bare "2-ETS1"-style codes exist. |
| C3 Framework indicator numbering (D2.Civ.12/14, D2.His.14/16, D2.Eco.15, D2.Geo.11/12) | C3 Framework K–2 and 6–8 planning guides; HMH C3 correlation | 2026-10-09 | **Confirmed.** All cited high-numbered indicators exist in the framework at the cited bands. |
| Cross-grade code citations (e.g., 3-LS4 in grade 4, MS-PS1-4/5 in grade 10, grade-8 ELA codes in grade 9) | In-file context inspection | 2026-10-09 | **Legitimate.** Every instance is explicitly framed as prerequisite review, remedial background, or diagnostic entry check — never as grade-level instruction. |
| Relative Markdown links in all 52 scope files | Repo-internal check | 2026-10-09 | **0 broken links.** |
| Week arithmetic (8×4 + 4 flexible = 36) | Per-file check | 2026-10-09 | **Consistent** across all 52 tracks (flex-week placement varies by track; totals reconcile). |
| State adoption / accreditation claims | Full-text scan | 2026-10-09 | **None found.** High-school course choices are explicitly labeled proposed pathways, not requirements. |

Description texts in the crosswalks were spot-checked, not exhaustively re-verified; the audits' stated verification dates (2026-10-01 through 2026-10-08) are taken at face value and recorded per file.

## 4. Corrections applied to scope-and-sequence drafts

| # | Track / draft PR | Problem | Correction (committed to the draft branch) |
|---|---|---|---|
| C1 | Grade 8 social studies — PR #110 (`curriculum/issue-41-grade-8-social-studies`) | Prerequisites named only the grade-7 world-history track's *skills*, although the track re-teaches the grade-5 U.S. history track's *entire content arc* (colonial → Reconstruction) with zero mentions of grade 5 anywhere in the file. | Added an explicit content-foundation paragraph: grade 8 is the deeper, primary-source second pass over the grade-5 arc; diagnostic checks grade-5 content retention alongside grade-7 skills. Commit `b2346697`. |
| C2 | Grade 12 science — PR #124 (`curriculum/issue-55-grade-12-science`) | Prerequisites listed grades 9–11 (bio/chem/physics) and grade-12 math, but not the grade-6 Earth/space science track — the direct content foundation for a quantitative Earth/environmental course (plate tectonics, rocks, water/weather, climate, hazards). | Added grade-6 Earth/space science objectives to the prerequisite list with the explicit contract: grade 12 makes each quantitative rather than re-teaching concepts. Commit `788c826c`. |
| C3 | Grade 9 science — PR #107 (`curriculum/issue-43-grade-9-science`) | Prerequisites carried a stale note: "the grade-8 science audit is not yet delivered, so this list is provisional." The grade-8 audit has since been delivered (PR #108). | Updated to reference the delivered grade-7 life-science (PR #102) and grade-8 physical-science (PR #108) tracks explicitly; removed the provisional caveat. Commit `fb02cda7`. |

## 5. Recommendations (recorded, not applied — for track owners / unit-build runs)

- **R1 — Expand compressed C3 shorthand.** Several social-studies scopes cite ranges like `D2.His.1, 14, 16.3-5` or `D2.Eco.1–9, 14, 15.6-8`. The codes are real, but the compressed form is ambiguous to machines and some readers. Prefer one code per citation at unit build.
- **R2 — Guard the grade 11 → 12 math extension.** The crosswalks already frame grade-11 content as prerequisite fluency; when U04 (sequences/series/discrete models) and U05 (probability distributions) are built, keep the extension framing explicit (infinite series, Binomial Theorem, distribution-based inference) so the units do not duplicate grade-11 U07/U08.
- **R3 — Keep the G6 → G12 science contract.** Grade 12's quantitative treatment (radiometric dating, seafloor-spreading rates, convection models, flux estimates) correctly assumes grade-6 conceptual foundations; unit builds should state "no conceptual re-teaching" per unit.

## 6. Remaining educator decisions

- Whether the grade 5 → 8 U.S. history spiral (narrative survey → primary-source second pass) matches the intended depth split, or whether grade 8 should compress further.
- Grade-12 math course identity: the "precalculus + statistics + modeling, optional calculus bridge" pathway is proposed, not prescribed; a learner placed in calculus, statistics, or terminal algebra should not use the track as-is (already noted in the draft).
- Review issues #59 (resource/image review — eligible after U01 for all 52 tracks) and #60 (final review — eligible after all sections delivered and merged) remain ineligible.

---

*One run delivered one review section. Draft delivery is not educator approval. Corrections C1–C3 were committed directly to the three affected draft PR branches so each track keeps a single PR; this report is the record. Keep issue #58 open until its second section (verify corrections are merged and record remaining educator decisions) is delivered.*
