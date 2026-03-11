---
name: awwwards-gsap-animations
description: Best practices for Awwwards-level GSAP scrolling and micro-animations
---

## Core Philosophy
Awwwards-level animations are purpose-driven, perfectly timed, and performant. They never feel sluggish or get in the way of user intent.

## 1. Smooth Scrolling (Lenis)
Always pair GSAP ScrollTrigger with Lenis for butter-smooth scrolling. Native scrolling on Windows/Linux is too jagged for premium experiences.

```javascript
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

## 2. Text Reveals (SplitType)
Premium sites avoid fading blocks of text. Instead, they reveal text by words or characters.

```javascript
import SplitType from 'split-type';

const text = new SplitType('.reveal-text', { types: 'words, chars' });
gsap.from(text.chars, {
  y: 100,
  opacity: 0,
  stagger: 0.02,
  duration: 1,
  ease: 'power4.out',
  scrollTrigger: {
    trigger: '.reveal-text',
    start: 'top 80%',
  }
});
```

## 3. The Custom Ease
Never use default CSS or GSAP `power1` easing. Premium animations use custom bezier curves or `power4`/`expo` for a snappy start and long, smooth tail stop.

`ease: "expo.out"`
`ease: "power4.inOut"`
`ease: "CustomEase.create('custom', 'M0,0,C0.25,1,0.5,1,1,1')"`

## 4. Hardware Acceleration
Animate ONLY transforms (`x`, `y`, `scale`, `rotation`) and `opacity`. Never animate layout properties like `width`, `height`, `top`, or `margin` unless absolutely necessary, and only in a `<canvas>` context if performance drops. Use `will-change: transform` intelligently on target nodes.
