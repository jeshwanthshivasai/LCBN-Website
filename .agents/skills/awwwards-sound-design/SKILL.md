---
name: awwwards-sound-design
description: Best practices for Awwwards-level web sound design
---

## 1. Opt-In is Mandatory
Never auto-play sound on a website. Browsers will block it anyway, but it is terrible UX.
- Always provide a sleek "Sound On/Off" toggle element in the sticky navigation.
- Start muted by default.

## 2. UI Sound Effects
Add subtle, satisfying, physical-sounding "clicks", "swooshes", or "chimes" to:
- Mousing over main navigation links.
- Opening/closing the mobile menu.
- Successfully submitting a form.
- The volume should be very low—barely perceptive, adding texture rather than distraction.

## 3. Atmospheric Background
If the user enables sound, play an evolving, low-frequency atmospheric drone loop. Use the Web Audio API or a simple `<audio loop>` tag synced to the `zustand` global mute state.
