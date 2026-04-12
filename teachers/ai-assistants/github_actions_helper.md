# 🛠️ GitHub Actions Helper (Skill)

Use this helper when drafting or fixing GitHub Actions for the JFD Learning Center. It captures common patterns, gotchas, and secure defaults that match our repo.

## Principles
- Prefer simple, explicit YAML with spaces (no tabs) and 2‑space indentation.
- Keep tokens out of the repo. Use Secrets or workflow inputs. Mask logs.
- Default to the built‑in `GITHUB_TOKEN`; allow an optional `ACTIONS_PAT` secret or input override.
- Support current runner Node versions (opt in to Node 24 where needed).
- Fail soft where possible (e.g., Projects disabled), and still deliver value.

## Permissions Cheatsheet
- For classic Projects: `repository-projects: write`
- For issues: `issues: write`
- For contents read: `contents: read`

Example:
```yaml
permissions:
  contents: read
  issues: write
  repository-projects: write
```

## Dispatch + Inputs (secure)
```yaml
on:
  workflow_dispatch:
    inputs:
      token:
        description: 'Optional PAT (defaults to ACTIONS_PAT or GITHUB_TOKEN)'
        required: false
```
Use in steps:
```yaml
with:
  github-token: ${{ inputs.token || secrets.ACTIONS_PAT || secrets.GITHUB_TOKEN }}
```

## Node 24 Opt‑in (deprecation proof)
```yaml
env:
  FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true
```

## Classic Projects (Repo)
```js
const list = await github.rest.projects.listForRepo({ owner, repo, mediaType: { previews: ['inertia'] }});
let project = list.data.find(p => p.name === projectName);
if (!project) {
  project = (await github.rest.projects.createForRepo({ owner, repo, name: projectName, body: desc, mediaType: { previews: ['inertia'] }})).data;
}
const cols = await github.rest.projects.listColumns({ project_id: project.id, mediaType: { previews: ['inertia'] }});
```
Graceful fallback:
```js
try { /* projects code */ } catch (e) { core.warning('Projects disabled…'); /* still create issues */ }
```

## Common YAML Gotchas
- Do not use tabs; Actions YAML requires spaces.
- Quote unusual characters only where necessary; block scalars `|` are great for JS scripts.
- Avoid inline `${{ … }}` within block scalars unless intended for Actions expressions.
- Long multi‑line JS strings: prefer template literals with `\n` escapes.

## Secure Tokens
- Never commit tokens or `.env` files to the repo.
- Add repo Secrets in “Settings → Secrets and variables → Actions”.
- Prefer `GITHUB_TOKEN`; fall back to `ACTIONS_PAT` secret or a one‑time workflow input token.

## Validation Tips
- Run `workflow_dispatch` in a test PR/branch before main.
- Use `actions/github-script@v7` (Node 24 env opt‑in as above).
- Confirm job logging shows guarded warnings (not failures) when optional features are disabled.

## Quick Scaffolds
- Seed issues:
```js
const created = await github.rest.issues.create({ owner, repo, title, body, labels: ['improvements'] });
```
- Create Project card (classic):
```js
await github.rest.projects.createCard({ column_id, content_id: issue.data.id, content_type: 'Issue', mediaType: { previews: ['inertia'] }});
```

## House Style
- Names: “Learning Center – Improvements” (en dash) for the project board.
- Labels: `curriculum`, `planning`, `grade-8`, `grade-5`, `improvements`.
- Keep Actions minimal; prefer one job per workflow unless necessary.

---
This helper is a living doc. Update when GitHub changes runner Node versions, permission keys, or Projects APIs (v2/GraphQL) to keep us future‑proof.
