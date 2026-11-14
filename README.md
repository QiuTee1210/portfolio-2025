# Quí Trọng — Graphic Designer Portfolio

Portfolio of Nguyễn Quí Trọng (graphic designer, Vietnam): brand identity, game art, video animation and storyboard projects, in English and Vietnamese.

Live: https://qiutee1210.github.io/portfolio-2025/

Built on the open portfolio template by David Heckhoff (see Credits below) with **Vue 3**, **TypeScript**, **Vite**, **three.js**, **GSAP**, **Lenis** and **Howler**.

## Updating content

| What | Where |
| ---- | ----- |
| Name, job title, about text, all UI copy | `src/i18n/messages/namespaces/common/{en,vi}.json`, `src/features/home/components/{Hero,BoxDetails,BoxDescription}.vue` |
| Skills list | `src/features/home/components/BoxServices.vue` |
| Social links (mail, Facebook, Behance) | `src/content/social.ts` |
| Project cards | `src/content/projects/previews/{en,vi}.ts` + thumbnails in `src/assets/thumbnails/` |
| Project pages | `src/content/projects/{en,vi}/<slug>.ts`; images and captions in `src/content/projects/galleries/<slug>.ts` |
| Right monitor in the 3D room | Edit `design-sources/desktops/right-screen.png` (or the Blender export `design-sources/port.glb`), then run `python scripts/build_desktops_atlas.py` (needs Pillow) |

Deployment runs automatically on every push to `main` through `.github/workflows/deploy.yml` (GitHub Pages, source: GitHub Actions).

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `npm run dev`   | Dev server on port **3000** (`strictPort`) |
| `VITE_BASE_PATH=/portfolio-2025/ npm run build` | Build for a sub-path (what CI does) |
| `npm run build` | `vue-tsc` then production bundle to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Typecheck only (`vue-tsc -b`) |

## Content

- **Projects**: `src/content/projects/{en,vi}/<slug>.ts` — copy, tags, media, links. Slugs must align with `projectIds` in `src/content/projects/index.ts`.
- **Previews / listing**: `src/content/projects/previews/`.
- **Tags**: variants and labels live in `src/components/tagVariants.ts` (used by `Tag.vue` and content types).

## Stack (high level)

- Vue 3 (`<script setup>`), SCSS with shared mixins (`src/assets/styles/`)
- i18n helpers under `src/i18n/`
- WebGL / GLSL under `src/three/` where applicable

## Credits & Attribution

This project was created and designed by David Heckhoff.

If you use this project or substantial parts of its source code as a base for your own portfolio or work, attribution must be preserved.

Please keep:

- existing credit comments in the source code
- this attribution section in the README
- a visible reference to the original project/repository in derivative works

Original portfolio:
-> https://david-hckh.com

Commercial reuse or redistribution of substantial portions of this project without permission is prohibited.
