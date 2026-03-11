---
name: awwwards-responsive-design
description: Best practices for Awwwards-level responsive design
---

## 1. Fluid Typography
- Don't use standard hard breakpoints (`text-sm md:text-xl lg:text-3xl`).
- Use CSS `clamp()` or Tailwind v4 equivalents so that fonts smoothly grow and shrink with the viewport. This ensures the design *never* breaks at weird intermediate resolutions (like iPads or small laptops).

## 2. Removing Complex Animations on Mobile
- Awwwards desktop experiences are heavily animated. On mobile (width < 768px), disable heavy GSAP scroll triggers and intricate 3D models.
- Swap complex 3D backgrounds for high-quality static images, videos, or bare-minimum CSS gradients to save battery and maintain 60FPS.

## 3. Touch Interactions
- Magnetic buttons and custom cursors DO NOT apply to mobile. Ensure your code checks for touch screens.
```javascript
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
```
