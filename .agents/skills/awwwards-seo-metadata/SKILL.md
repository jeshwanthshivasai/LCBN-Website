---
name: awwwards-seo-metadata
description: Best practices for React/SPA SEO on B2B SaaS Awwwards sites
---

## 1. The SPA Problem
Single Page Applications (like standard React Vite sites) often render as blank pages to older crawlers because the content is generated via JavaScript. Since MatNEXT has a Content Marketing Initiative on YouTube, driving organic search traffic requires flawless SEO.

## 2. React Helmet Implementation
Use a library like `react-helmet-async` on every single page route to dynamically inject proper `<title>`, `<meta name="description">`, and canonical URLs.

```jsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>MatNEXT | Circular Economy Ecosystem</title>
  <meta name="description" content="Awwwards winning platform for managing circular economy initiatives." />
</Helmet>
```

## 3. OpenGraph / Twitter Cards
When links to MatNEXT are shared on LinkedIn, X, or Slack, they must render a beautiful preview card.
- Include `<meta property="og:image">` pointing to a high-quality 1200x630 rendering of the site or 3D product.
- Include `<meta name="twitter:card" content="summary_large_image">`.

## 4. Semantic HTML Structure
Never use `<div>` when an `<article>`, `<section>`, `<nav>`, or `<main>` is appropriate. Search engines desperately need this semantic context when trying to parse highly-animated Awwwards DOM trees. Ensure there is strictly *only one* `<h1>` per page.
