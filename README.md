# Vault Blog

A personal blog and portfolio platform built with Next.js App Router. Showcases posts across categories like Dev, Career, and Life — with a live activity panel showing what the author is coding or listening to in real time.

## Concept

Vault Blog is more than a blog: it's a window into the author's day-to-day developer life. Visitors can browse posts by topic, search by keyword, and see a live activity card that reflects the author's current status — whether they're deep in a codebase or listening to Pink Floyd.

The architecture follows a strict **Controller/View** pattern for all feature components, keeping business logic fully decoupled from rendering.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) — App Router |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| UI Primitives | [Base UI](https://base-ui.com) + [Shadcn](https://ui.shadcn.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Forms | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| State Management | [Zustand](https://zustand-demo.pmnd.rs) |
| Carousel | [Embla Carousel](https://www.embla-carousel.com) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| CSS Variants | [class-variance-authority](https://cva.style) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| Testing | [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) |
| Git Hooks | [Husky](https://typicode.github.io/husky) |

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
├── app/
│   ├── (pages)/               # Public pages with shared Header + Footer layout
│   │   ├── layout.tsx
│   │   ├── page.tsx           # / — homepage with Hero
│   │   ├── globals.css
│   │   └── posts/
│   │       └── page.tsx       # /posts — post listing with search and filters
│   ├── (auth)/                # Auth pages with isolated layout
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── config/                # Global config and environment
│   ├── context/               # React Context providers
│   ├── hooks/                 # UI-level custom hooks
│   ├── services/              # External API calls
│   └── utils/
│       ├── enums/             # Typed constants (routes, image URLs, activity types)
│       └── mocks/             # Static mock data (posts, topics, activity)
│
├── components/
│   ├── ui/                    # Primitive components (Button, Badge, Carousel, etc.)
│   └── [feature]/             # Feature components following Controller/View pattern
│       ├── index.tsx          # Public export
│       ├── types.ts
│       ├── controller/        # Logic, handlers, data fetching
│       └── view/              # Pure rendering, receives everything via props
│
├── lib/
│   └── utils.ts               # Pure utility functions (cn, etc.)
│
└── tests/                     # Mirrors the src structure
    ├── app/
    └── components/
```

## Architecture

All feature components follow the **Controller/View** pattern:

- **Controller** (`[feature].controller.tsx`) — owns state, handlers, and service calls. Never renders HTML directly.
- **View** (`[feature].view.tsx`) — purely presentational. Receives everything via props. Zero logic.
- **`index.tsx`** — single public export point for the component.

Path aliases are configured via `@/` pointing to the project root. Relative imports (`../../`) are not allowed.

## Testing

Tests live in `tests/` and mirror the project structure. Each test file uses the `.spec.tsx` suffix.

```bash
npm test
```

The Husky pre-commit hook runs all tests automatically before each commit. Failing tests block the commit.

## Git Flow

- Default base branch: `develop`
- Branch naming follows the commit type: `feat/`, `fix/`, `refactor/`, etc.
- PRs target `develop` unless `main` is explicitly requested.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org): `feat: ...`, `fix: ...`, `refactor: ...`

