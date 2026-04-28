# stitchIndoorPlantCare

Server-first **React 19 / Next.js App Router** implementation of an indoor plant-care dashboard inspired by the provided 2026 mockups and architecture requirements.

## Modern 2026 stack used

- React 19 + Next.js App Router (RSC-first)
- Suspense for streaming server UI
- Server Actions for task mutations
- TanStack Query for client cache + async sync
- Zustand for lightweight UI state
- Zod for runtime-safe schema validation
- Tailwind CSS for rapid utility-first styling
- TanStack Virtual for chart/list virtualization pattern
- TypeScript strict mode enabled

## Pages

- `/` — Dashboard with plant overview, care tasks, and growth tracking
- `/plant/[id]` — Plant profile with diagnostics panel

## Run

```bash
npm install
npm run dev
```
