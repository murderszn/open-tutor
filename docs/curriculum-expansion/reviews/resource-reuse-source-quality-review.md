# Review #59 — Resource Reuse, Source Quality, and Generated-Image Review

**Issue:** [#59](https://github.com/murderszn/open-tutor/issues/59) ·
**Review date:** 2026-10-15 ·
**Eligibility:** U01 delivered on all 52 track issues (verified 2026-10-15:
47 unit-01 drafts merged on `main` at `d558ba8`, 5 in open draft PRs
#171–#175). Review #58 fully delivered (2/2 boxes).

**Method.** Automated sweep of all 52 unit-01 drafts (file inventory,
`assets/README.md` record completeness, image reference style, alt text,
resource-pack verification dates, external-link extraction, internal
guide/dataset reference counts) plus sampled manual reads of resource
packs and generation records, and live spot-checks of cited URLs via the
browser on 2026-10-15. Pixel-level inspection of all ~65 generated images
was out of scope for one run; generation records assert pre-link
inspection by the producing run and were checked for completeness, not
re-verified pixel by pixel.

## 1. Generated images — records complete; presentation practice improved over time

- All 52 units ship at least one generated raster image in `assets/`
  with a generation/source record in `assets/README.md`. Record
  completeness across all 52: prompt (52/52), generation date (52/52),
  tool/model (52/52, worded "Tool", "Tool/model", or "built-in image
  generation pipeline"), learning purpose / intended use (52/52),
  factual review note (52/52), caption (52/52), alt text (52/52).
- Field-name drift (non-blocking): older drafts use "Learning purpose",
  newer ones "Intended use"; "Tool" vs "Tool/model". Recommend the
  `unit-requirements.md` field names be treated as canonical for U02+.
- **R1 — presentation improvement (filed, not a defect):** the 47 merged
  unit-01 drafts reference their generated images by Markdown *link*
  only (link text pointing at the file under `assets/`); zero inline
  image embeds and zero HTML `img` tags were found in any merged unit. Alt text and captions
  therefore live only in `assets/README.md`, not at the point of use.
  The 5 newest draft PRs (#171–#175) already embed images inline with
  alt text (e.g. pr-175 embeds `two-good-farm-ppf.png` twice). The
  units meet the letter of the generation requirement (image generated,
  used in an activity, recorded), but inline embeds render in the
  library UI and carry alt text to the learner. **Recommendation:**
  adopt inline `![]()` embeds with alt text + caption as the standard
  for U02+ units; backfilling the 47 merged units is optional
  educator-supervised follow-up.
- No placeholder images, no prompt-only "assets", no SVG-substituted
  generation claims were found. Deterministic SVGs (number lines,
  scales, schematics) are correctly labeled as hand-built diagrams,
  not generated images.

## 2. Resource packs — verification discipline is strong

- All 52 resource packs record a source-check date (wording varies:
  "Fact-check record (2026-10-11)", "checked 2026-10-09", "Found via
  search 2026-10-11" — all acceptable).
- Video citations follow the honest convention: quoted title + channel
  + "Found via search; description confirms; adult previews; free, no
  account", with unverifiable single episodes replaced by explicitly
  labeled preferred-channel *search links*. No invented titles,
  runtimes, or quotations were found in the sampled packs.
- Free/no-account alternatives support core learning in all 52 packs.
- **Live spot-checks (2026-10-15), all resolving and matching their
  citations:**
  - `https://fcrr.org/reading-success/instructional-routines` — live;
    K–3 instructional routines page as cited (grade-1 LA U01).
  - `http://oceanservice.noaa.gov/facts/howmanyoceans.html` — live;
    confirms the five-ocean list as cited (grade-4 SS U01).
  - `https://www.youtube.com/watch?v=hUgsUgLQDYk` — live; title
    "How to FIND YOUR WAY for Kids…" matches the citation verbatim
    (grade-4 SS U01).
  - `https://classx.org/ones-tens-hundreds-place-value-for-kids-khan-academy-kids/`
    — live, but see D1 below.
- Task-to-resource mapping tables are present in the sampled packs and
  point at real unit tasks.

## 3. Defects found and corrected in this PR

- **D1 — third-party mirror cited as the lesson source (corrected).**
  Grade-1 math U01 `resource-pack.md` listed "Khan Academy Kids
  place-value lesson overview" pointing at `classx.org`, a third-party
  mirror/aggregator, not khanacademy.org. The URL resolves and the
  content is aligned, so this was a labeling defect, not a dead link.
  Corrected to label it a third-party mirror of the Khan Academy Kids
  material and to prefer the canonical `khanacademy.org` route, with
  the adult-preview note retained.
- **D2 — shared shelf typo and missing shelf guidance (corrected).**
  `resources/README.md` listed "Math Fundamentals — Grades 47"
  (missing en dash). Fixed to "Grades 4–7". The shelf also gave no
  grade-fit guidance although `resource-map.md` warns several guides
  are middle-grade-targeted, and mixed optional-enrichment guides
  (faith-based, coding/game how-tos) into the core list. Corrected:
  grade-fit annotations added where the guide itself states a level,
  an "Optional enrichment" section now separates faith-based and
  coding/game/tech how-to guides from the four core curricula, dataset
  column-unit and as-of notes added, and a pointer to this review
  added. (Existing bottom note about religious-study guides retained
  and moved into the new section.)

## 4. Reuse gaps — filed for future unit runs (no unit-01 defect)

Internal guide/dataset references across all 52 unit-01 drafts
(filename match, link or named reference). Well-reused:
`math_fundamentals.md` (10), `weights_and_measures.md` (8),
`world_facts.md` (6), `physics_fundamentals.md` (6),
`language_arts_literary_terms.md` (5),
`language_arts_great_books_and_stories.md` (5), `un_countries.csv` (5).

Never referenced by any unit-01 draft:

| Guide / dataset | Natural future home (not a U01 defect) |
|---|---|
| `thermodynamics_laws.md` | Grade 10–11 science energy/heat units (U02+) |
| `astronomy_fundamentals.md` | Grade 12 science Earth/space units; grade-1 science sky-patterns units (U06–U07) |
| `solar_system_planets.csv` | Math counting/graphing units; grade-1 science sun/moon unit |
| `financial_tools_and_principles.md` | Grade-12 social-studies economics units (U02+; U01 already links `supply_and_demand_economics.md`) |
| `micronutrients.md` | Grade-9 science nutrition/biochemistry units (U01 already links `cooking_and_nutrition.md`) |
| `semester-resource-library.md` | Referenced once (grade-12 science U01 draft PR); consider linking from unit resource packs as the shared shelf |
| `un_countries.json` | Machine-readable twin of `un_countries.csv`; shelf now documents the relationship |

Correctly unreferenced (out of scope by design): `bible_fundamentals.md`,
`weekly_scriptures.md` (faith-based enrichment stays separate),
`minecraft-scripting-intro.md`, `roblox-lua-fundamentals.md`,
`roblox-shaders-and-meshes.md`, `flutter-mobile-development.md`,
`game-development-fundamentals.md` (coding/engineering is optional
enrichment), `windows-cli-and-shell-fundamentals.md`, `file-types.md`,
`web-design-fundamentals.md`, `computer-parts-custom-pc.md`,
`computer_science_fundamentals.md`, `automotive-basics.md`,
`franchising_in_america.md`, `careers.md`,
`physical-activity-fundamentals.md`, `black-panther-party-rise-1970s.md`
(all legitimate enrichment or later-unit material; none is a gap for
unit-01 scope).

## 5. Text rights — clean in sample

`texts/` directories exist in grade-9 and grade-10 language-arts U01.
The grade-10 texts were read in full: two pre-1929 public-domain
Aesop translations (Townsend 1867, Jones 1912) reproduced with edition,
publisher, and verification citations, plus an original informational
passage on translation. No full-text copyrighted reproductions found.
No learner-identifying content found in any sampled unit.

## 6. Limitations and next steps

- External-link checking was sampled (4 URLs live-verified); a full
  52-pack link re-check belongs to review #60's browser/render pass.
- Image factual accuracy relies on the producing runs' recorded
  pre-link inspections; this review verified record completeness, not
  pixels.
- The 5 open draft PRs (#171–#175) were inspected at their current
  heads; re-verify after merge.
- **For review #59 box 2 (later run):** confirm D1/D2 corrections are
  merged; confirm the `resources/README.md` shelf updates render;
  record any educator decisions on R1 (inline-embed backfill).

*Report ends. Corrections D1–D2 are in this PR; R1 and §4 are filed
recommendations for U02+ runs and educator review.*

## 7. Verification — corrections merged (2026-10-26)

**Verification date:** 2026-10-26 · **Issue:** #59, box 2 ·
**Corrections PR:** #176, merged 2026-10-26T14:12:08Z,
merge commit `02a47e6765b0727f5cd0cefcf033fa481f744df6`
(head `841d98d`, base `d558ba8`) · **Main HEAD at verification:**
`bf57de84` ("Curriculum: correct coverage totals from unit inventory",
2026-10-26T15:27:12Z). Verification was done through the GitHub API
(file contents on `main`, per-path commit history, and PR merge
records), because a full `git fetch` from this VM stalls and the
shared local checkout holds unrelated uncommitted scratch from earlier
runs that this run did not touch.

- **D1 confirmed on `main`.** Grade-1 math U01 `resource-pack.md`
  now labels the ClassX entry a mirror ("ClassX mirror of a Khan
  Academy Kids hundreds/tens/ones lesson") and states the canonical
  source is Khan Academy Kids (`khanacademy.org` / the Khan Academy
  Kids app), to be preferred over the mirror when available, with the
  adult-preview note retained.
- **D2 confirmed on `main`.** `resources/README.md` now reads "Math
  Fundamentals — Grades 4–7" with a grade-fit annotation, carries a
  separate "Optional enrichment (separate from the four core courses)"
  section for faith-based and coding/game/tech guides, and points to
  this review ("Review #59 — resource reuse, source quality,
  generated images (2026-10-15)").
- **No later overwrites.** The latest `main`-touching commit for all
  three PR #176 files (this report, `resources/README.md`, the
  grade-1 math U01 resource pack) is still `841d98d`, the PR #176
  head commit — the merged corrections are exactly what is live.
- **§6 follow-up, partly resolved.** The five open draft PRs inspected
  at their heads in §1 (#171–#175) have all since merged
  (2026-10-26, ~14:12Z), so their U01 content is now on `main`. Their
  content was already inspected for this review; a fresh pixel-level
  or full-link re-verification of those five units belongs to review
  #60's browser/render pass, not to this box.
- **R1 adopted for new units, in mixed form.** Spot-check of the
  three U03 units merged 2026-10-26 (grade-8 science, grade-7 social
  studies, grade-9 math) finds inline `![]()` image embeds in their
  lessons (1, 1, and 2 embeds respectively) alongside some plain
  Markdown asset links (3, 3, and 0). New units are therefore
  following the §1 recommendation, but not uniformly.
- **§4 gaps closing naturally.** Two guides listed in §4 as never
  referenced by any U01 draft are now referenced by merged U03
  resource packs: `thermodynamics_laws.md` (grade-8 science U03, 2
  mentions) and `financial_tools_and_principles.md` (grade-9 math
  U03, 2 mentions). The remaining §4 entries stay filed as
  future-unit homes, not defects.

**Remaining educator decisions (open, not blocking this box):**

1. **R1 backfill:** whether to retrofit inline embeds with alt text
   and captions into the 47 merged U01 units — optional per §1,
   still awaiting an educator call.
2. **Field-name canonicalization:** whether `unit-requirements.md`
   field names are treated as canonical for U02+ records (§1 drift
   note) — no decision recorded in this verification.
3. **Full link re-check:** the full 52-pack external-link re-check
   remains deferred to review #60, per §6.

**Validation for this verification section:** this change touches only
this existing review report (prose appendix, no new curriculum files,
so `curriculum/manifest.json` is unchanged). The appendix adds no new
local Markdown links; its links are GitHub issue/PR references
(#59, #176, #171–#175) whose targets were confirmed live through the
API during this run. No unfinished-marker strings were added. A full
`scripts/validate-library.py` pass over a clean `main` checkout could
not be completed in this run (see the fetch note above); that pass
remains part of review #60's scope and is not claimed here.
