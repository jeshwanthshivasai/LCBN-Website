---
name: awwwards-performance-auditing
description: Best practices for Awwwards-level performance optimization
---

## 1. WebGL & R3F Optimization
- **Instancing**: Use `InstancedMesh` when rendering hundreds of identical geometries.
- **Texture Compression**: Use `.ktx2` or `.webp` for textures, never massive PNGs/JPGs.
- **dpr control**: Scale `dpr` dynamically based on device performance: `<Canvas dpr={[1, 2]}>` or scale down if frames drop.
- **Postprocessing**: Merge passes where possible. Don't use too many heavy passes (like Screen Space Reflections) on mobile.

## 2. DOM Performance
- Use `will-change: transform` directly before animating an element, and remove it after to save memory.
- Avoid animating `width`, `height`, `top`, `left`, `margin`, `padding`. Animate `transform: translate3d()` to force GPU acceleration.
- Defer loading of heavy components (like the R3F Canvas) until the user scrolls them into view, or show a sleek loader.
