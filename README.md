# Project Name

Next.js + TypeScript + TailwindCSS project

## Setup

Install dependencies:

```bash
npm ci
```

## Scripts

- `npm run dev` – Run Next.js dev server.
- `npm run build` – Build the project.
- `npm run start` – Start production server.
- `npm run lint` – Run ESLint on all `.ts`, `.tsx`, `.js`, `.jsx` files.
- `npm run format` – Auto-format code with Prettier.
- `npm run format:check` – Check code formatting with Prettier.

## Pre-commit Hooks

Husky + lint-staged automatically run lint and format checks on staged files:

- Ensures ESLint and Prettier rules are applied before commit.
- Prevents committing code with unused imports, wrong import order, or formatting issues.

## Continuous Integration (CI)

GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push and pull request:

- Lints JavaScript/TypeScript files (`npm run lint`).
- Checks code formatting (`npm run format:check`).
- Blocks merges if issues exist.

## Code Quality

- ESLint configured with `eslint-config-next` for core web vitals and TypeScript.
- `eslint-plugin-unused-imports` removes unused imports/variables.
- `eslint-plugin-import` enforces import order.
- Prettier + `prettier-plugin-tailwindcss` ensures consistent formatting and Tailwind class order.

## Notes

- Developers must run `npm ci` before first use.
- All commits are automatically checked; CI enforces rules independent of IDE.
