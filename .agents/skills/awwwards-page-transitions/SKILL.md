---
name: awwwards-page-transitions
description: Best practices for seamless SPA page transitions in React
---

## 1. Never Hard Reload
Awwwards sites feel like a single continuous application. In a standard React Router architecture, changing pages instantly replaces the DOM. This breaks immersion.

## 2. The Framer Motion / GSAP Handshake
- Use a library like `framer-motion`'s `<AnimatePresence>` to keep the old page mounted for 1-2 seconds while it animates out.
- The most premium transition is the **"Theater Curtain"**:
  1. User clicks link.
  2. A black SVG/div sweeps across the screen covering everything (`duration: 0.8, ease: power4.inOut`).
  3. The route officially changes behind the curtain.
  4. The curtain sweeps away, revealing the new page with its entry animations (SplitType reveals).

## 3. Preserving 3D State
- If the `<Canvas>` is global (rendered outside the React Router `<Routes>`), it will persist across page changes.
- Use Zustand to tell the 3D scene which page the user is on. The camera can smoothly fly from a "Homepage Overview" position to a "Product Detail" close-up without ever reloading the WebGL context.
