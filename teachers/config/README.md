# Deployment Config (Reference Copies)

This folder mirrors deployment-related config so teachers can find everything in one place. The canonical, active files that GitHub/Firebase actually use remain at the repository root.

- Active files (used by CI/CD and Firebase CLI):
  - `/.github/workflows/firebase-hosting.yml`
  - `/firebase.json`
  - `/.firebaserc`

- Reference copies (for organization only):
  - `teachers/config/github/workflows/firebase-hosting.yml`
  - `teachers/config/firebase/firebase.json`
  - `teachers/config/firebase/.firebaserc`
  - `teachers/config/assets/` (static assets referenced by the site)

Notes
- Keep root configs as the source of truth. If you change these reference copies, also update the root files.
- GitHub Actions only reads workflows from `/.github/workflows` at the repo root.
- Firebase CLI reads `/firebase.json` and `/.firebaserc` at the repo root by default.

Assets
- Static assets (e.g., lockscreen image) live under `teachers/config/assets/` and are served by Firebase Hosting. Paths in HTML/CSS are updated to point here.
