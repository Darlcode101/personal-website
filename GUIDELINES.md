# Personal Website — Project Guidelines

## Objective

A personal site that works as three things at once:
1. **Portfolio/resume** — skills, experience, background, contact
2. **Project showcase** — highlight projects (e.g. the run predictor) with writeups/demos
3. **About-me hub** — a landing page that ties it together and points people (recruiters, collaborators, friends) to the right place

## Tech stack

- **Plain HTML/CSS/JS** — no framework, no build step
- **GSAP** for animation (scroll-triggered reveals, transitions, interactive touches) — loaded via CDN
- Deployed on **GitHub Pages**

Rationale: no build tooling to maintain, deploys by pushing to a `gh-pages` branch (or `/docs` folder / GitHub Actions), and GSAP gives strong animation without a framework's overhead. Revisit only if the site outgrows this (e.g. needs a CMS or dynamic content).

## Structure (initial)

```
personal-website/
  index.html          # landing / about-me hub
  projects/           # project showcase pages (or a single projects.html to start)
  css/
    style.css
  js/
    main.js           # GSAP animations, interactions
  assets/
    images/
      hero.jpg         # full-width banner for the hero section
      about.jpg        # pfp, shown as circular avatar over the hero banner
      ski-touring.jpg  # hobbies section photo
      projects/        # one screenshot/preview per project
  GUIDELINES.md
```

Keep it flat and simple until there's a real reason to split further.

## Design principles

- **Animation should support content, not distract from it** — motion on scroll/hover to guide attention, not decoration for its own sake
- **Fast and lightweight** — no unnecessary dependencies; GSAP is the one animation library, loaded from CDN
- **Mobile-first responsive** — most visitors (recruiters especially) will check on a phone at some point
- **Accessible** — respect `prefers-reduced-motion`, sufficient contrast, semantic HTML

## Content sections (draft — refine as we build)

- Hero/intro (who you are, one-line pitch, **full-width banner image with circular pfp overlaid**)
- About / background (text only — pfp already shown in hero)
- Projects (cards or list, linking to writeups — run predictor as first entry, **each project card gets a screenshot/preview image**)
- Hobbies / off the keyboard (**photo**, e.g. outdoor activities — a lighter, personal section)
- Skills
- Contact / links (email, GitHub, LinkedIn, etc.)

Every section above should have a designated image slot, even if it's a placeholder at first — layout should be built around having pictures, not text-only with images bolted on later.

## Out of scope for v1

- CMS or blog engine
- Backend/database
- User accounts or forms with persistence

## Next steps

1. Confirm content sections and initial copy
2. Scaffold `index.html` + base CSS layout
3. Add GSAP and a first animation (hero entrance or scroll reveal)
4. Set up GitHub repo + Pages deployment
