---
name: awwwards-react-architecture
description: Best practices for Awwwards-level React project structure
---

## 1. Separation of Concerns
- Keep 3D components strictly in `src/canvas/` or `src/components/3d/`.
- Keep regular DOM UI strictly in `src/components/dom/`.
- Never blend complex R3F logic directly into the same file as standard HTML/Tailwind.

## 2. Global State Sync
- Use `zustand` to sync the scroll position (from Lenis) or user interactions (from DOM) directly to the 3D scene (in R3F). DO NOT pass props down deeply for global animation states.
```javascript
import { create } from 'zustand';
export const useStore = create((set) => ({ scrollY: 0, setScrollY: (y) => set({ scrollY: y }) }));
```

## 3. The `Tunnel` Pattern
- Use `@react-three/drei`'s `<View>` or `<tunnel>` pattern if you need to position a 3D canvas snippet exactly perfectly behind a DOM element container without fighting absolute positioning z-indexes.
