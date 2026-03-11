---
name: awwwards-b2b-saas-design
description: Design principles for building an Awwwards top-tier B2B SaaS website
---

## Core Aesthetic
B2B SaaS should feel like a premium tool, not a playful consumer app. 

1. **Dark Mode First**: Use deep rich grays (`#080808` or `#0a0a0a`), never pure black (`#000000`).
2. **High Contrast, Low Saturation**: UI elements should be mostly monochrome. Use the brand color (`#96CC39`) *only* for primary actions, glowing accents, and active states. 
3. **Glassmorphism**: Use backdrop filters (`backdrop-blur-md bg-white/5`) for floating menus, cards, and navbars. Give them a subtle 1px border (`border border-white/10`).
4. **Borders and Lines**: Use ultra-thin, low-opacity lines to section areas, creating a technical, precise feel.

## Typography
- **Hero Headings**: Massive, tight letter spacing, leading-none. (e.g. `text-8xl tracking-tighter`).
- **Body**: Highly readable sans-serif (Inter, Roboto Mono for technical data), `leading-relaxed`. Light gray (`text-zinc-400`).

## Negative Space
Give elements massive room to breathe. Use huge padding (`py-32`, `py-48`) between sections. Do not cramp content.
