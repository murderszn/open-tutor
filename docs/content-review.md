# Public Content Review

The public library has four independent, anonymous grade tracks: 4, 5, 7, and 8. Track content belongs only in `curriculum/grade-<n>/`. Do not refer a learner to another grade, combine grade tracks, share work between learners, compare results, or use sibling/peer language. Shared `assignments/` material is grade-neutral only.

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

Run `python3 scripts/validate-library.py` to check local links and structured data. Interactive HTML should be browser-tested as well; passing link checks alone does not prove an activity works.

## Git-history limitation

A clean working tree or new branch does not erase earlier public commits, forks, caches, clones, or deployed copies. The existing public repository history includes identifiers and family-specific material. This branch does not rewrite that history. If full historical removal is required, coordinate a separate history rewrite and removal request, rotate any exposed credentials, and notify collaborators before force-pushing. Old public clones may still retain copies.

## Hosting

The Firebase workflow is gated on a `FIREBASE_PROJECT_ID` repository variable and a matching service-account secret. Do not configure it to point at a private classroom project.