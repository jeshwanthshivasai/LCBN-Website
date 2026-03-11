---
name: awwwards-kinetic-typography
description: Best practices for Awwwards-level moving text and kinetic typography
---

## 1. The Marquee (Infinite Scroller)
A core staple of modern web design. Use GSAP's `horizontalLoop` helper function or CSS animations for a perfectly smooth, infinite scrolling text ribbon.
- **Performance**: Always use `translate3d` to move the text to ensure sub-pixel rendering and GPU acceleration.
- **Direction**: Tie the GSAP timeline's `timeScale` to the user's scroll velocity. If they scroll down, the text moves left. If they scroll up, the text reverses direction.

## 2. Text Pathing and Morphing
- When animating text along a complex SVG path, use GSAP's `MotionPathPlugin`.
- To warp text (like a flag waving or cylindrical wrapping), use WebGL. Turn the text into a texture (via HTML5 Canvas `.fillText()`), apply it to a `<cylinderGeometry>` in R3F, and slowly rotate it.

## 3. Typographic Constraints
- Only use 1 or 2 highly distinct font families.
- Keep the character count low. Kinetic typography works best as a massive background texture or a bold single-word transition, not for paragraph reading.
