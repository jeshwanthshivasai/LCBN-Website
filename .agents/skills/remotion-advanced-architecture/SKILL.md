---
name: remotion-advanced-architecture
description: Best practices for scaling programmatic Remotion video generation
---

## 1. Parameterized Compositions
Instead of hardcoding text or audio paths in your `Root.tsx`, always use `defaultProps` and `zod` schemas. This allows you to render hundreds of videos via the CLI simply by passing different JSON props.

```tsx
import { z } from 'zod';
export const myCompSchema = z.object({
  titleText: z.string(),
  themeColor: z.string(),
  audioUrl: z.string()
});

<Composition
  id="PodcastMain"
  component={PodcastVideo}
  schema={myCompSchema}
  defaultProps={{ titleText: "Circular Economy 101", themeColor: "#96CC39", audioUrl: "static/pod1.mp3" }}
/>
```

## 2. Data Fetching Strategy
- Do not fetch API data (like YouTube comments or live analytics) directly inside the React components during rendering unless you use `continueRender` and `delayRender` extremely carefully.
- Instead, pre-fetch all data in a Node.js script, generate a JSON file, and pass that JSON to the Remotion renderer as `inputProps`.

## 3. Caching and Asset Management
- Download all remote assets (images/audio) locally before calling `remotion render`. Network requests during frame rendering will cause the build to fail or hallucinate blank frames.
