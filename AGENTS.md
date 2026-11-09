# AGENTS.md

Single-page personal portfolio for Deymon González. React 19 + TypeScript + Vite 8 + Tailwind CSS v4. Content is in Spanish and the site is dark-only.

## Commands

- Install with `npm install` (`package-lock.json` is the lockfile).
- `npm run dev` — Vite dev server with HMR.
- `npm run build` — `tsc -b && vite build`. This is the only typecheck; it must pass before considering work done.
- `npm run lint` — ESLint flat config (`eslint .`).
- `npm run preview` — serve the production build.
- No test runner or CI workflows exist; verify changes with `npm run build` + `npm run lint` and the dev server.

## Content lives in data files

- All copy, projects, certifications, nav links, and contact links are in `src/data/portfolioData.ts`; shapes are in `src/types/portfolio.ts`. Components only render data — don't hardcode content into components.
- Section anchors are fixed and referenced by `NAV_ITEMS`: `#experiencia`, `#proyectos`, `#sobre-mi`, `#certificaciones`, `#contacto` (plus `#hero`). If you rename a section `id`, update the nav data too.
- `DetailedProjectItem` overrides `technologies` from `string[]` to `{ name, variant }[]` for `<Badge>` colors. Valid variants are defined in `src/components/ui/Badge.tsx`.

## Styling conventions

- Tailwind v4 is wired via the `@tailwindcss/vite` plugin. There is no `tailwind.config.js`; add theme tokens to the `@theme` block in `src/index.css`.
- Custom tokens: `obsidian-*`, `accent-blue` / `accent-cyan` / `accent-hover` / `accent-indigo`, `surface-*`. Prefer these over raw hex values.
- Design system source of truth: `design-references/DESIGN.md` ("Engineered Obsidian" palette, type scale, glass/elevation rules). Match it when adding UI.
- Dark-only: `index.html` has `<html class="dark">`; there is no theme toggle. Fonts: Plus Jakarta Sans (`font-sans`) and Manrope (`font-body`), loaded from Google Fonts in `index.html`. Icons come from `lucide-react`.

## TypeScript / lint gotchas

- `verbatimModuleSyntax` is on: use `import type` for type-only imports.
- `noUnusedLocals` and `noUnusedParameters` are on: unused imports/variables fail `npm run build`.
- React Compiler is intentionally not enabled.

## Not part of the app

- `README.md` is the stock Vite template and does not describe this project; trust this file and the configs instead.
- `codigo-exportado.html` (root) and `design-references/` are reference snapshots only; do not import them or wire them into the Vite build.
- `dist/` is build output; never edit it.
