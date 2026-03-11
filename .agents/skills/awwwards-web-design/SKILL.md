---
name: awwwards-web-design
description: Design principles for building an Awwwards top-tier B2B SaaS website
---

## 1. Typography Hierarchy
Typography is 80% of the design. 
- Use large display fonts for hero sections (e.g., `text-6xl` to `text-9xl`).
- Maintain tight letter-spacing (`tracking-tighter`) for modern grotesque display fonts.
- Body text should be readable, high contrast against the background, and have generous line-height (`leading-relaxed`).

## 2. The Dark Mode B2B Aesthetic
- **Background**: Avoid `#000000`. Use deep rich grays: `#080808` or `#0a0a0a`.
- **Text**: Off-white for primary text (`#f4f4f5`), muted grays for secondary text (`#a1a1aa`).
- **Accent**: MatNEXT Brand Green (`#96CC39`). Use this for glowing 3D objects, primary CTA buttons, and subtle cursor auras. Avoid overloading the page with the accent.

## 3. White Space (Negative Space)
Give elements room to breathe. Use massive margins/padding between sections (`py-32` or `py-48`). Content should never feel cramped against the viewport edges.

## 4. Micro-Interactions
Every interactable element should respond to the user:
- Buttons should have smooth scale sweeps on hover (`hover:scale-105 duration-300`).
- Magnetic buttons (buttons that follow the cursor slightly when hovering) represent top-tier polish.
- Custom cursors: Replace the default cursor with a custom follower (a small dot that grows/changes color when hovering over links).

## 5. Noise and Texture
Apply a very subtle noise overlay to the entire DOM body using CSS/SVG, or render it via R3F Postprocessing behind the UI. This breaks up flat colors and creates a tactile, physical feel.
