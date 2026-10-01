# K–12 Curriculum Expansion

Expand the four core subjects—math, science, language arts, and social studies—for Kindergarten through Grade 12. This is a production plan and issue backlog, not a claim that those courses already exist or are ready to teach.

The structured backlog contains **56 GitHub issues: one roadmap, 52 grade/subject tracks, and three cross-track reviews**. The tracks contain **416 unit sections**, plus an initial audit and final review for each track. Each recurring invocation works on exactly one section.

- [GitHub roadmap and all track links](https://github.com/murderszn/open-tutor/issues/5)
- [Full AI worker prompt](../../teachers/ai-assistants/curriculum-worker.md)
- [Unit delivery requirements and worked-example models](unit-requirements.md)
- [Internal resource reuse and authoritative source shelf](resource-map.md)
- [Initial inventory and known gaps](audit-baseline.md)
- [Machine-readable tracks, unit titles, and issue URLs](backlog.json)
- [Prepared scheduler configuration and saved entry prompt](schedule.json)

## Grade and Subject Queue

| Grade | Math | Science | Language arts | Social studies | Initial status |
|---|---|---|---|---|---|
| Kindergarten | [#6](https://github.com/murderszn/open-tutor/issues/6) | [#7](https://github.com/murderszn/open-tutor/issues/7) | [#8](https://github.com/murderszn/open-tutor/issues/8) | [#9](https://github.com/murderszn/open-tutor/issues/9) | placeholder |
| Grade 1 | [#10](https://github.com/murderszn/open-tutor/issues/10) | [#11](https://github.com/murderszn/open-tutor/issues/11) | [#12](https://github.com/murderszn/open-tutor/issues/12) | [#13](https://github.com/murderszn/open-tutor/issues/13) | placeholder |
| Grade 2 | [#14](https://github.com/murderszn/open-tutor/issues/14) | [#15](https://github.com/murderszn/open-tutor/issues/15) | [#16](https://github.com/murderszn/open-tutor/issues/16) | [#17](https://github.com/murderszn/open-tutor/issues/17) | placeholder |
| Grade 3 | [#18](https://github.com/murderszn/open-tutor/issues/18) | [#19](https://github.com/murderszn/open-tutor/issues/19) | [#20](https://github.com/murderszn/open-tutor/issues/20) | [#21](https://github.com/murderszn/open-tutor/issues/21) | placeholder |
| Grade 4 | [#22](https://github.com/murderszn/open-tutor/issues/22) | [#23](https://github.com/murderszn/open-tutor/issues/23) | [#24](https://github.com/murderszn/open-tutor/issues/24) | [#25](https://github.com/murderszn/open-tutor/issues/25) | existing; expand/review |
| Grade 5 | [#26](https://github.com/murderszn/open-tutor/issues/26) | [#27](https://github.com/murderszn/open-tutor/issues/27) | [#28](https://github.com/murderszn/open-tutor/issues/28) | [#29](https://github.com/murderszn/open-tutor/issues/29) | existing; expand/review |
| Grade 6 | [#30](https://github.com/murderszn/open-tutor/issues/30) | [#31](https://github.com/murderszn/open-tutor/issues/31) | [#32](https://github.com/murderszn/open-tutor/issues/32) | [#33](https://github.com/murderszn/open-tutor/issues/33) | placeholder |
| Grade 7 | [#34](https://github.com/murderszn/open-tutor/issues/34) | [#35](https://github.com/murderszn/open-tutor/issues/35) | [#36](https://github.com/murderszn/open-tutor/issues/36) | [#37](https://github.com/murderszn/open-tutor/issues/37) | existing; expand/review |
| Grade 8 | [#38](https://github.com/murderszn/open-tutor/issues/38) | [#39](https://github.com/murderszn/open-tutor/issues/39) | [#40](https://github.com/murderszn/open-tutor/issues/40) | [#41](https://github.com/murderszn/open-tutor/issues/41) | existing; expand/review |
| Grade 9 | [#42](https://github.com/murderszn/open-tutor/issues/42) | [#43](https://github.com/murderszn/open-tutor/issues/43) | [#44](https://github.com/murderszn/open-tutor/issues/44) | [#45](https://github.com/murderszn/open-tutor/issues/45) | planned |
| Grade 10 | [#46](https://github.com/murderszn/open-tutor/issues/46) | [#47](https://github.com/murderszn/open-tutor/issues/47) | [#48](https://github.com/murderszn/open-tutor/issues/48) | [#49](https://github.com/murderszn/open-tutor/issues/49) | planned |
| Grade 11 | [#50](https://github.com/murderszn/open-tutor/issues/50) | [#51](https://github.com/murderszn/open-tutor/issues/51) | [#52](https://github.com/murderszn/open-tutor/issues/52) | [#53](https://github.com/murderszn/open-tutor/issues/53) | planned |
| Grade 12 | [#54](https://github.com/murderszn/open-tutor/issues/54) | [#55](https://github.com/murderszn/open-tutor/issues/55) | [#56](https://github.com/murderszn/open-tutor/issues/56) | [#57](https://github.com/murderszn/open-tutor/issues/57) | planned |

The first worker run normally selects [Kindergarten math #6](https://github.com/murderszn/open-tutor/issues/6), section A00: inspect resources and draft its scope-and-sequence. Subsequent runs prefer tracks with the fewest delivered sections and the oldest last delivery, then issue number, while honoring prerequisites and active claims. You can override selection by providing a specific issue number.

Every track has the same section identifiers:

1. **A00:** audit existing material; deliver a verified scope-and-sequence, weekly pacing, and grade/subject indexes.
2. **U01–U08:** build eight distinct, prerequisite-ordered units with substantive lessons, examples, exercises, assessments, resource packs, and teaching visuals.
3. **R00:** deliver diagnostic/cumulative reviews and keys, then check the whole track for coherence and usability.

The eight four-week units plus four flexible diagnostic/catch-up/review weeks form an approximately 36-week proposal. Units require actual session-level plans, not eight topic headings standing in for a year of instruction.

## Delivery Standard

Each unit contains four to six written Markdown lessons; at least two worked examples or modeled reasoning examples per lesson; guided and independent practice; an applied project/investigation; quiz and culminating assessment; separate teacher guides and keys; differentiated supports; and a verified Resource Pack. Each unit also contains at least one genuinely generated teaching image used by an exercise, saved locally with alt text, caption, generation provenance, factual review, and a text alternative.

Use precise reproducible diagrams/charts in addition to generation when measurement, labels, or geography matter. An image-generation prompt or SVG alone does not meet the generated-raster requirement. A unit missing generation, keys, or other required artifacts remains unchecked even if a partial PR is available.

Read and improve existing guides, datasets, same-grade assignments, and quizzes before duplicating content. New core science uses `science/`, preserving `stem/` content and links while keeping coding/engineering optional. Existing grade 4/5/7/8 material needs review and expansion, not wholesale replacement.

Checked issue boxes mean **validated drafts delivered with a linked PR/commit**. They do not mean merged, educator-approved, accredited, or standards-certified curriculum. Track issues remain open until the full track is merged and reviewed.

## Proposed High-School Pathway

No state/district or graduation requirements were specified. These are editable starting choices; each track's audit must establish prerequisites and verified grade-band expectations.

| Grade | Math | Science | Language arts | Social studies |
|---|---|---|---|---|
| 9 | Algebra I | Biology | Literary reading and composition | Modern world history |
| 10 | Geometry | Chemistry | World literature and composition | U.S. history after Reconstruction |
| 11 | Algebra II | Physics | American literature, rhetoric, and research | U.S. government and civics |
| 12 | Precalculus, statistics, and modeling; optional calculus bridge | Earth and environmental science | Advanced literature, writing, and communication | Economics and policy inquiry |

Core social studies remains inquiry-based and nonpartisan. Core science uses evidence-based explanations and safe investigations. Optional religious enrichment stays separate. Original/public-domain/licensed texts and properly attributed primary sources support language arts and history.

## Cross-Track Review Issues

- [#58 — K–12 progression and standards crosswalk review](https://github.com/murderszn/open-tutor/issues/58) — after all track audits are delivered.
- [#59 — Resource reuse, source quality, and generated-image review](https://github.com/murderszn/open-tutor/issues/59) — after Unit 01 is delivered for every track.
- [#60 — Final K–12 content, assessment, accessibility, and navigation review](https://github.com/murderszn/open-tutor/issues/60) — after all track sections are delivered and merged.

The review issue bodies specify their dependencies. They are in the queue, but are not eligible before those dependencies are met. The roadmap itself is never a worker section.

## Every-Three-Hour Schedule

**Status: prepared, not activated.** This session exposed no scheduled-task creation tool, and computer-use access to the Codex app was blocked. No background worker or system cron job was installed. Issue creation does not start a schedule.

Prepared settings:

| Setting | Value |
|---|---|
| Task name | `opentutor-curriculum-worker` |
| Local project | `/Users/jahflyx/opentutor` |
| Repository | `murderszn/open-tutor` |
| Cadence | Every three hours, every day |
| Recurrence | `RRULE:FREQ=HOURLY;INTERVAL=3` |
| Time zone | `America/Chicago` |
| Execution | One standalone task; isolated worktree; one section per run |
| Model | Current project default |
| Required capabilities | Repository read/write, GitHub issue/PR access, browsing, image generation and inspection |

After merging the expansion-plan PR, create a standalone local-project task in Scheduled/Automations and use the `prompt` from [schedule.json](schedule.json). Select the project above and an isolated worktree, set the custom three-hour recurrence, and run it manually once to verify issue selection, resource access, generated images, validation, and PR delivery. Keep the computer awake and the desktop app running for tasks using local files. The [official scheduled-task documentation](https://learn.chatgpt.com/docs/automations?surface=app) describes project/worktree execution, custom recurrence rules, and local-machine availability.

Use only one recurring worker. The GitHub claim label is advisory, not an atomic lock. Avoid overlapping invocations; recover a stale claim only after inspecting its latest comment and branch/PR. Runs should target 60–90 minutes and preserve honest partial delivery if a section needs more work. Do not keep producing identical blocker comments.

### Short Entry Prompt

```text
Work in murderszn/open-tutor at /Users/jahflyx/opentutor, using the supplied worktree if present. Read AGENTS.md, teachers/ai-assistants/curriculum-worker.md, and docs/curriculum-expansion/README.md. Fetch the open curriculum-queue issues and their comments/PRs. Follow the worker prompt to deliver exactly one eligible section with verified resources, full Markdown lessons and worked exercises, separate teacher keys, generated teaching images, validation, a scoped draft PR, and an issue progress update. Leave partial sections unchecked. Stop after one section and report the issue/PR, assets, validation, blockers, and next action.
```

## Maintenance and Verification

`backlog.json` stores topic proposals, initial file counts, internal references, framework sources, and published issue URLs. Current progress lives in GitHub issue checklists/comments and linked PRs; do not treat the initial file counts as live status. The schedule file is a prepared configuration, not an installed automation.

The publication helper validates complete K–12 subject coverage and resource paths. Its default mode is a preview:

```bash
python3 scripts/publish-curriculum-issues.py
python3 scripts/validate-library.py
```

To publish an intentional backlog change, use `python3 scripts/publish-curriculum-issues.py --publish`. It reuses matching issue titles across open and closed issues, creates missing labels/issues, saves their URLs, and refreshes the roadmap. It does not replace existing track issue bodies, so deliberate changes to an existing sequence need a reviewed issue edit as well as the JSON change. Preserve existing human edits and checked progress.

Keep all material anonymous. No named learner folders, completed responses, real schedules, or grade records belong in this public expansion. See [content review](../content-review.md), [teaching-library usage](../teaching-library-usage.md), and the [AI agent registry](../../teachers/ai-assistants/agents.md).
