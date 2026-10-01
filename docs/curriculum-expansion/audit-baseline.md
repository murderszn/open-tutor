# Initial Curriculum Inventory

Snapshot: 2026-10-01, default-branch commit `ed0c07d`, before curriculum expansion. Counts are Markdown files in each subject subtree, including indexes, assignments, quizzes, and templates. They measure file presence, not correctness, lesson completeness, or full-year coverage. Science has no dedicated folders yet; existing science/coding combinations are under `stem/`.

| Grade | Math | Science | Language arts | Social studies | Legacy STEM | Status |
|---|---:|---:|---:|---:|---:|---|
| Kindergarten | 0 | 0 | 0 | 0 | 0 | placeholder hub only |
| Grade 1 | 0 | 0 | 0 | 0 | 0 | placeholder hub only |
| Grade 2 | 0 | 0 | 0 | 0 | 0 | placeholder hub only |
| Grade 3 | 0 | 0 | 0 | 0 | 0 | placeholder hub only |
| Grade 4 | 28 | 0 | 21 | 22 | 33 | existing material; audit required |
| Grade 5 | 19 | 0 | 22 | 20 | 21 | existing material; audit required |
| Grade 6 | 0 | 0 | 0 | 0 | 0 | placeholder hub only |
| Grade 7 | 27 | 0 | 18 | 24 | 43 | existing material; audit required |
| Grade 8 | 20 | 0 | 22 | 21 | 20 | existing material; audit required |
| Grade 9 | 0 | 0 | 0 | 0 | 0 | planned; folder absent |
| Grade 10 | 0 | 0 | 0 | 0 | 0 | planned; folder absent |
| Grade 11 | 0 | 0 | 0 | 0 | 0 | planned; folder absent |
| Grade 12 | 0 | 0 | 0 | 0 | 0 | planned; folder absent |

## Findings for the Worker

- Grades 4, 5, 7, and 8 contain substantive existing material. Read individual files: some are brief task lists with missing instructional explanation or unfinished sections, and some titles/prerequisites exceed the indicated grade.
- K, 1, 2, 3, and 6 currently have only grade-hub READMEs. Their four core subject tracks need to be built.
- Grades 9–12 do not have grade folders. Their proposed course order and prerequisites must be documented and reviewed.
- Existing `stem/` quizzes often combine science with programming. Core science must be usable without coding prerequisites; preserve valid coding/engineering as optional enrichment.
- The curriculum index and teaching guides originally described only four tracks. The expansion documents distinguish those developed tracks from placeholders and planned additions.
- `resources/` has guides for all four subjects and six CSV/JSON data files, but many guides target middle grades. Read them before assigning grade fit. The semester shelf contains generic learner labels and should evolve into anonymous grade/subject shelves.
- The library validator passed on the baseline: 500 teaching files checked for local links and structured data. This does not establish instructional quality, working interactives, complete answer keys, or verified external sources.
- The separate repository hygiene workflow expects root `LICENSE` and `SECURITY.md`, which were absent from tracked files at baseline. PR #61 resolves that metadata gap with a [license-status notice](../../LICENSE) preserving the existing absence of a project-wide license and a [security reporting policy](../../SECURITY.md). This does not grant a new reuse license.

The first section of every track issue produces a more detailed, file-by-file keep/revise/gap audit and a verified scope-and-sequence. The [resource reuse map](resource-map.md) identifies starting guides and source shelves; the [unit requirements](unit-requirements.md) define delivery quality.
