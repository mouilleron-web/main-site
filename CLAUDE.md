# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Freelance web developer portfolio for Cédric Mouilleron. Single-page landing site in French, built with Astro 6 and Tailwind CSS v4.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Static build to dist/
npm run preview   # Preview production build
```

No linter or test runner is configured.

## Architecture

Single-page Astro site. `src/pages/index.astro` composes all section components:

- `src/layouts/Layout.astro` — root HTML shell (meta, fonts, global styles)
- `src/components/Header.astro` — sticky nav with mobile hamburger menu (client-side JS)
- `src/components/Hero.astro` — hero with CTAs
- `src/components/Services.astro` — service cards with inline SVG icons
- `src/components/Portfolio.astro` — project showcase cards
- `src/components/Contact.astro` — contact form (Formspree: `formspree.io/f/mdayewgn`) + info
- `src/components/Footer.astro` — footer nav and copyright

## Styling

- Tailwind CSS v4 via `@tailwindcss/vite` plugin (configured in `astro.config.mjs`)
- Custom theme in `src/styles/global.css`: color variables (cream, terracotta, charcoal, warm-gray)
- Font: Inter via Google Fonts
- Mobile-first responsive: breakpoint classes like `hidden md:flex`

## Conventions

- All user-facing copy is in French (`lang="fr"`)
- TypeScript strict mode (`astro/tsconfigs/strict`)
- Node.js >=22.12.0 required
