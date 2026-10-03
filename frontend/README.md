# OpenTutor frontend

Vite + React 19 + Tailwind CSS static app (no server needed beyond static hosting).
Merged from the shell + five team tracks: auth, parent, student, browse/library, agents cockpit.

## Run

```bash
cd frontend
npm install
npm run dev
```

Build: `npm run build` → `dist/`.

## Routes

- `/` home · `/auth/login` · `/auth/register` · `/student-login` · `/onboarding`
- `/parent/schedule` · `/parent/curriculum` · `/parent/grading` · `/parent/reports`
- `/student/today` · `/student/assignments/:id` · `/student/resources`
- `/browse` curriculum explorer + assignment spec viewer
- `/library` searchable resource center (video modal activates when a resource entry carries a url)
- `/agents` assistant directory + links to the static teaching-team cockpit at `agents/*.html`

## Notes

- `src/pages/agents/*.html` sources are mirrored to `public/agents/` (with
  `public/lib/agentClient.js`) so Vite serves the cockpit as static pages.
- `package.json` pins the shell's React 19 / react-router 7 / Tailwind 4 stack;
  all team components use plain React + router APIs compatible with it.
- Local-first mock data in `src/data.js` + `src/data/*.json`; IndexedDB stub in `src/db.js`.
