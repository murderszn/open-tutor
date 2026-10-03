# Public Content Review

The public library has expanded draft assignment and quiz collections for grades 4, 5, 7, and 8; these still need teaching-sequence, answer-key, prerequisite, and grade-placement review. Grades K, 1, 2, 3, and 6 each have one draft starter lesson in four core subjects, not completed units or courses. Grade K math and Grade 1 language arts also have draft audit/scope-and-sequence material. The [K–12 expansion plan](curriculum-expansion/README.md) describes planned coverage; plans, issue checkboxes, and starter drafts must not be described as finished curriculum. Track content belongs only in `curriculum/grade-<k|1..12>/`. Do not refer a learner to another grade, combine grade tracks, share work between learners, compare results, or use sibling/peer language. Shared `assignments/` material is grade-neutral only.

## Privacy boundaries

- Keep completed learner work, names, grades, report cards, photos, attendance, and real schedules out of this public repository.
- `students/student-template/` is an anonymous starter only; local `.gitignore` whitelists only that template. Do not commit real student folders.
- No source-to-learner mapping, private repository names, histories, or student submissions are included here.
- Public planning pages use generic topic examples, never a person-specific timetable.
- Adult contact details and correspondence belong in private, adult-reviewed storage.
- Historical public figures with the surname Johnson are not family references.

## Curriculum quality

- Grade titles and lesson sequences are drafts, not certification. Review the actual reading load, prerequisites, difficulty, and factual accuracy before assigning.
- Some legacy topics may exceed or undershoot the grade indicated. Consider the content, not the filename alone.
- Christian Bible-study pages are optional faith-based enrichment, explicitly separate from secular instruction.
- Financial and technical-analysis materials are educational examples, not investment advice. Verify current prices, law, and market claims.
- Preview third-party links and videos for accuracy, availability, advertising, and age suitability.

## Validation

Run `python3 scripts/test-validate-library.py` for focused validator regression checks, then `python3 scripts/validate-library.py` to check local links, grade-track boundaries, curriculum manifest coverage, CSV/JSON structure, and private learner-path safeguards. Interactive HTML should be browser-tested as well; passing link checks alone does not prove an activity works. The [sampled curriculum review](curriculum-spot-review.md) covers eight named assignments only; its findings do not validate the full library.

## Git-history limitation

A clean working tree or new branch does not erase earlier public commits, forks, caches, clones, or deployed copies. The existing public repository history includes identifiers and family-specific material. This branch does not rewrite that history. If full historical removal is required, coordinate a separate history rewrite and removal request, rotate any exposed credentials, and notify collaborators before force-pushing. Old public clones may still retain copies.

## Hosting

The Firebase workflow is gated on a `FIREBASE_PROJECT_ID` repository variable and a matching service-account secret. Do not configure it to point at a private classroom project.
