---
name: awwwards-preloader-design
description: Best practices for branded, animated preloaders on Awwwards sites
---

## 1. The Necessity of the Preloader
Because Awwwards sites utilize heavy assets (Three.js models, HRDI environment maps, high-res webp textures), a preloader is mandatory. You must never let the user see a flash of unstyled content (FOUC) or a popping 3D model.

## 2. Technical Implementation
- Use `@react-three/drei`'s `useProgress()` hook to track exactly how many WebGL assets have been loaded.
- The preloader must live *outside* the main `<Canvas>` but *above* it in the DOM z-index.

```jsx
import { useProgress } from '@react-three/drei';

export function Preloader() {
  const { progress } = useProgress();
  // Animate the DOM out using GSAP when progress === 100
}
```

## 3. Aesthetic Principles
- The preloader must immediately establish the brand identity. Use the MatNEXT logo or brand-font typography.
- Only hide the preloader mask via a GSAP animation (e.g., slicing the screen in half, or an `expo.inOut` opacity fade) AFTER all fonts and WebGL contexts are fully booted.
