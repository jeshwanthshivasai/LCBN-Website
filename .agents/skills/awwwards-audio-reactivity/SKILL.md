---
name: awwwards-audio-reactivity
description: Best practices for React/WebGL Audio Reactivity in Awwwards sites and Remotion
---

## 1. Extracting Frequencies
To make 3D objects or DOM elements react to sound (especially for podcasts or music), you must analyze the audio frequencies.
- **Web**: Use the Web Audio API `AudioContext` and `AnalyserNode`. Use `requestAnimationFrame` to poll `analyser.getByteFrequencyData()`.
- **Remotion**: Use `@remotion/media-utils`'s `getAudioData()` and `visualizeAudio()` functions inside `useVideoConfig()` to perfectly sync visuals to frames for offline rendering.

## 2. Smoothing the Data
Raw frequency data is jittery and looks bad. You must apply a smoothing factor (Lerp or GSAP `quickTo`) so the visualizations feel buttery smooth and high-end, not like a 2005 Winamp visualizer.

```javascript
// Example GSAP smoothing of a scale value based on bass frequencies
let smoothedBass = 0;
function updateFrame(rawBassValue) {
  smoothedBass += (rawBassValue - smoothedBass) * 0.1; // 0.1 is the smoothing factor
  mesh.scale.setScalar(1 + smoothedBass * 0.05);
}
```

## 3. Aesthetic Mapping
- Do not just scale a sphere up and down. Map frequencies to interesting shader uniforms:
  - Bump map intensity (bass makes the texture rougher).
  - Emissive intensity (treble makes the object glow hotter with `#96CC39`).
  - Noise distortion (voice activity warps the geometry via the vertex shader).
