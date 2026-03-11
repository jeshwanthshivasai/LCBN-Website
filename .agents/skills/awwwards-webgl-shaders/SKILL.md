---
name: awwwards-webgl-shaders
description: Best practices for custom GLSL shaders in React Three Fiber for Awwwards sites
---

## 1. When to use Custom Shaders
Awwwards sites stand out by breaking the standard polygonal look of 3D objects. Use WebGL custom GLSL shaders (via `@react-three/fiber`'s `<shaderMaterial>`) for:
- Liquid or organic distortion of geometry (vertex shaders).
- Custom animated mathematical noise, gradients, and iridescence (fragment shaders).
- Hover effects on images and DOM elements synced to a WebGL canvas overlay.

## 2. Using Drei's `shaderMaterial` Helper
Instead of writing raw Three.js `ShaderMaterial` boilerplate, ALWAYS use `@react-three/drei`'s `shaderMaterial` factory. It auto-generates setter/getter methods for uniforms, keeping JSX clean.

```jsx
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CustomMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color('#96CC39') }, // Uniforms
  `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`, // Vertex
  `uniform float uTime; uniform vec3 uColor; varying vec2 vUv; void main() { gl_FragColor = vec4(uColor * sin(uTime + vUv.x), 1.0); }` // Fragment
);
extend({ CustomMaterial }); // Registers it globally
```

## 3. Shader Performance
- Avoid branching (`if`/`else`) in fragment shaders whenever possible. Use smoothstep and mathematical blending (`mix`).
- Animate uniforms (like `uTime` or `uMouse`) inside a `useFrame` hook, never trigger React state re-renders for shader animation.
