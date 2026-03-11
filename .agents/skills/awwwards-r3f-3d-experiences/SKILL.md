---
name: awwwards-r3f-3d-experiences
description: Best practices for cinematic 3D in React Three Fiber for Awwwards sites
---

## Core Philosophy
Web 3D should feel like a premium art direction piece, not a clunky video game. Lighting, post-processing, and smooth camera work are the difference between a tech demo and an Awwwards winner.

## 1. Cinematic Post-Processing
Always use `@react-three/postprocessing` to add a filmic look.

- **Vignette**: Focuses the user's eye on the center of the viewport.
- **Noise / Film Grain**: Adds texture, preventing 3D gradients from color banding (essential for premium B2B UI).
- **Bloom**: Used sparingly to give emissive materials a realistic glow.
- **SMAA / FXAA**: Premium anti-aliasing. Native WebGL MSAA can be disabled if using post-processing.

```jsx
import { EffectComposer, Noise, Vignette, Bloom } from '@react-three/postprocessing';

<EffectComposer disableNormalPass>
  <Bloom luminanceThreshold={1} mipmapBlur />
  <Noise opacity={0.02} />
  <Vignette eskil={false} offset={0.1} darkness={1.1} />
</EffectComposer>
```

## 2. Dramatic Studio Lighting
Avoid flat ambient light. Use 3-point lighting setups, RectAreaLights for soft product reflections, or an HDRI Environment map.
```jsx
import { Environment } from '@react-three/drei';
<Environment preset="studio" />
// or soft directional light
<directionalLight position={[10, 10, 5]} intensity={2} castShadow color="#ffffff" />
<ambientLight intensity={0.2} />
```

## 3. Smooth Camera Control (GSAP + R3F)
Tie the camera matrix directly to scroll or mouse movement using GSAP or Zustand, rather than disjointed `OrbitControls`.

## 4. B2B SaaS Aesthetic
For a product like MatNEXT, the aesthetic should be *Dark, Sleek, Glowing*. Use the primary brand color (`#96CC39`) for emissive accents on dark grey/black (`#0a0a0a`) physical materials. Use Glassmorphism (meshPhysicalMaterial with high transmission, low roughness).
