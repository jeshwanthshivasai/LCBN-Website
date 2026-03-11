---
name: awwwards-accessibility-a11y
description: Best practices for highly animated, accessible Awwwards sites
---

## 1. The Screen Reader Experience
Awwwards juries heavily dock points for sites that ignore accessibility.
- Never let screen readers get lost in a WebGL canvas. Add `<div aria-hidden="true" />` or `role="presentation"` to purely decorative WebGL container elements.
- Ensure all interactive buttons, regardless of how custom they are designed or animated, are actually `<button>` or `<a>` tags under the hood so they remain keyboard focusable.

## 2. Reduced Motion
- Always listen to the user's OS-wide motion preferences.
- If an HR director using the SaaS platform has `prefers-reduced-motion` enabled, entirely disable GSAP scroll hijacking, Lenis, and fast-moving 3D camera animations. Present a static, high-quality, readable fallback.

```css
@media (prefers-reduced-motion) {
  .awwwards-animation {
    transition: none !important;
    animation: none !important;
  }
}
```

## 3. High Contrast Compliance
Even though you are using a Dark Mode Aesthetic for B2B SaaS, ensure the contrast ratio of text against your `#0a0a0a` background meets WCAG AA standards (at least 4.5:1 for normal text). Do not make secondary text too dark.
