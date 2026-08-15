# Augustine D — Portfolio

**Live demo: [augustinedhanavel1506.github.io/portfolio](https://augustinedhanavel1506.github.io/portfolio/)**

A creative portfolio: a photo hero with GSAP scroll-driven sections and a
Three.js/React Three Fiber physics-based tech-stack ball pit — built with
React, TypeScript, and Vite. Deploys automatically to GitHub Pages on every
push to `main` via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Getting Started

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173` (or the next free port).

## Project Structure

```
src/
  components/
    Landing.tsx        # Hero section with photo
    About.tsx           # About section
    WhatIDo.tsx          # "What I do" cards
    Career.tsx           # Career timeline
    Work.tsx             # Horizontal scroll project gallery
    TechStack.tsx        # 3D physics ball pit (skill badges)
    Contact.tsx           # Contact + social links
    Character/            # Hero photo rendering + scroll animation
    styles/                # Component CSS files
public/
  avatar-photo.webp        # Hero photo
  resume.pdf                # Downloadable resume
  models/char_enviorment.hdr  # Lighting environment for the tech-stack ball pit
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. `vite.config.ts` sets `base:
'/portfolio/'` to match the Pages project-site URL — update it if you rename
the repo or move to a custom domain / user site.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # TypeScript check + Vite production build
npm run lint      # oxlint
npm run preview   # Preview production build locally
```
