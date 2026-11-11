# Dushyant Puri — Portfolio

Personal portfolio site for Dushyant Puri, Product & Delivery leader (12+ years across B2B software, embedded systems, IoT, and applied research).

Live: https://vercel.com/dushyantpuri-2150s-projects/v0-portfolio-website
Built with: [v0.app](https://v0.app/chat/oHGRomAne1P)

## Tech stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4, shadcn/ui (Radix primitives)
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Package manager:** pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. Production build:

```bash
pnpm build
pnpm start
```

Type check:

```bash
pnpm exec tsc --noEmit
```

## Project structure

```
app/
  page.tsx            # Single-page portfolio (hero, about, work, skills, contact, ...)
  layout.tsx
  globals.css
components/
  flagship-card.tsx     # Hover-animated flagship case-study wrapper
  reveal-section.tsx    # Scroll-reveal wrapper
  animated-metric.tsx   # Animated KPI counter
  ui/                   # shadcn/ui primitives (card, badge, button, ...)
lib/
  projects.ts           # Typed project data (flagship + compact tiers)
```

## Featured Work — two-tier case studies

Projects are typed in `lib/projects.ts` as a discriminated union (`tier: "flagship" | "compact"`), exported as `flagshipProjects` and `compactProjects`.

- **Tier 1 — Flagship cards:** title, tags, Problem, 3-bullet My Role, Outcome, 4 KPI tiles.
- **Tier 2 — Compact cards:** title, tags, date, one-line summary, 4 KPI tiles.

### Domain filter tabs

Pills above the project grid (`All`, `Embedded & IoT`, `Applied AI / RAG`, `Enterprise & Operations`) filter both tiers via `useState` (`activeDomain`). Tabs are keyboard accessible (arrow keys, Home/End, roving tabindex, `aria-selected`).

### "View System Architecture" toggle

Each card has a toggle button (`aria-expanded` / `aria-controls`) that expands an inline block-diagram flow of that project's `architectureNodes` connected by directional arrows, plus an `architectureNote` on data flow and constraints.

## Credibility & skills

- "Experience & Collaborations" anchor strip below the hero: Conestoga SMART Centre, Dexterra Group, Skyjack Inc., DXC Technologies, Boomi IPaaS.
- Skills grouped into four cards: AI & RAG Systems, Edge & IoT Hardware, Cloud & Enterprise Integration, Delivery & Governance.

## Recent changes (feature/interactive-portfolio)

- Typed project data with `domain`, `architectureNodes`, `architectureNote`.
- Domain filter tabs + architecture toggle with clean state management (`useState`).
- Two-tier Featured Work (4 flagship + 3 compact, incl. SR&ED knurling project).
- Equal-height, aligned cards and centred metric tiles.
- Credibility strip and modern 2026 engineering/product leadership skills stack.
- Mobile responsiveness and keyboard accessibility improvements.
- Production build passes (`npm run build`, `tsc --noEmit`).

## Deployment

This repository stays in sync with [v0.app](https://v0.app) deployments. Vercel deploys the latest version from this repository.