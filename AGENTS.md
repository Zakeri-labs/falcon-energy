# Repository Guidelines

## Project Structure & Module Organization

This is a React 19 and TanStack Start site built with Vite and TypeScript. Route modules live in `src/routes/`; TanStack generates `src/routeTree.gen.ts`, so never edit that file manually. Shared page chrome and marketing components belong in `src/components/site/`, while reusable primitives live in `src/components/ui/`. Put hooks in `src/hooks/`, utilities and localization in `src/lib/`, global styles in `src/styles.css`, imported media in `src/assets/`, and directly served files in `public/`. The server entry is `src/server.ts`.

## Build, Test, and Development Commands

- `npm install` — install the locked dependencies from `package-lock.json`.
- `npm run dev` — start the local Vite development server.
- `npm run build` — create the production SSR build and catch integration errors.
- `npm run build:dev` — build using development-mode environment settings.
- `npm run preview` — serve the completed build locally for final checks.
- `npm run lint` — run ESLint, TypeScript-aware rules, React Hooks checks, and Prettier validation.
- `npm run format` — rewrite supported files with Prettier.

## Coding Style & Naming Conventions

Use strict TypeScript, ES modules, two-space indentation, double quotes, and trailing commas as produced by Prettier. Name React components and their files in PascalCase (`SectionHeading.tsx`), hooks with a `use-` prefix (`use-mobile.tsx`), and route files after lowercase URL segments (`services.tsx`). Prefer the `@/` alias for imports from `src`. Keep Tailwind classes readable and use `cn()` from `src/lib/utils.ts` for conditional classes. Preserve file-based routing conventions documented in `src/routes/README.md`.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Before submitting changes, run `npm run lint` and `npm run build`, then manually verify `/`, `/about`, `/services`, and `/contact` at desktop and mobile sizes. Check both English and Arabic layouts, especially RTL alignment and navigation. If adding tests, colocate them as `*.test.ts` or `*.test.tsx` and add the corresponding npm script in the same change.

## Commit & Pull Request Guidelines

Recent history uses brief descriptive subjects such as `Capabilities section` and `fixed og`. Keep subjects concise, imperative, and specific; avoid vague messages like `Bug fixed`. Pull requests should explain the user-visible change, list verification performed, link relevant issues, and include before/after screenshots for visual or responsive changes. Do not force-push, rebase, amend, or squash commits already published to the Lovable-connected branch; pushed history syncs back to Lovable.
