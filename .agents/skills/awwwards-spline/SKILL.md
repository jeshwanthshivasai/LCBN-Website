---
name: awwwards-spline
description: Best practices for embedding Spline 3D scenes in Awwwards sites
---

## 1. Minimal Integration over Full Scenes
- While Spline is excellent for prototyping, importing full interactive `.splinecode` scenes into React via `@splinetool/react-spline` can lead to huge bundle sizes and heavy WebGL context weight.
- Use Spline for complex *assets*, but build the lighting, post-processing, and camera movements natively in React Three Fiber for maximum performance and GSAP scroll control.

## 2. Performance Limits
- Never load more than 1 Spline instance per viewport.
- If the Spline model is too heavy (causes scroll stutter on mobile), record the animation in Spline Studio, export it as a transparent `.webm`, and use the `remotion-best-practices` to play it back via a standard HTML `<video>` element on mobile instead of WebGL.
