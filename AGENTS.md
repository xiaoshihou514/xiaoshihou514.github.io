# AGENTS.md

## Quick start

```bash
npm ci            # install (no lockfile changes)
npm run dev       # dev server with hot reload
npm run build     # production build → .vitepress/dist
npm run preview   # preview production build
```

There are no lint, typecheck, or test commands. Build is the only verification step.

## Multi-forge deployment

This repo is mirrored to **6 forges** via `git-mirror.json` (managed by `git-mirror` tool). All deploy on push to `main`:

| Forge | CI file | Deploy target |
|---|---|---|
| GitHub | `.github/workflows/deploy.yml` | GitHub Pages |
| GitLab | `.gitlab-ci.yml` | GitLab Pages (`public/` dir) |
| Codeberg | `.forgejo/workflows/deploy.yml` | Codeberg Pages |
| SourceHut | `make upload` (manual via `hut` CLI) | srht.site |
| Framagit | GitLab CI (same as GitLab) | Framagit Pages |
| Disroot / GitGud | push only, no CI | — |

The full release command is: `./release.sh` (git push + mirror push + sourcehut upload).

## Architecture

- **VitePress** static site, 3 locales: `/en/`, `/zh/`, `/ja/`
- Auto-redirect in root `index.md`: detects `navigator.language`, sets `sessionStorage` to avoid re-redirect
- Giscus comments via `vitepress-plugin-comment-with-giscus` (configured in `.vitepress/theme/index.ts`)
- Custom social icons loaded synchronously via `fs.readFileSync` in `.vitepress/config.mts` -- add new SVGs to `public/binary/`
- `ignoreDeadLinks: ["/ndpc/index", "/en/ndpc/docs/index"]` in config (don't remove)

## Key paths

| Path | Purpose |
|---|---|
| `.vitepress/config.mts` | All nav, sidebar, locale config |
| `.vitepress/theme/index.ts` | Giscus setup, theme extensions |
| `components/ProjectCard.vue` | Reusable project showcase card |
| `components/IconProjectCard.vue` | Alternative project card with icons |
| `en/blogs/` | English blog posts (date-named `YYYY-M-D.md`) |
| `zh/blogs/` `ja/blogs/` | Localized blog copies |
| `en/ndpc/` | NDPC language docs (English) |
| `zh/ndpc/` | NDPC language docs (Chinese) |
| `public/binary/` | Custom SVG social icons |

## Style conventions

- `.editorconfig`: 2-space indent for `.vue`, `.mts`, `.ts`
- Blog filenames: `YYYY-M-D.md` (no zero-padded month/day)
- Giscus comment field added globally by theme (disabled on homepage)
