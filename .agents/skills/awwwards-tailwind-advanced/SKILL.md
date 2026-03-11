---
name: awwwards-tailwind-advanced
description: Best practices for advanced Tailwind CSS usage in Awwwards sites
---

## 1. Dynamic Merging
Use `clsx` and `tailwind-merge` everywhere you have dynamic class components. This prevents nasty specificity bugs when applying conditional states (e.g., hovering, active, inactive).

```tsx
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// usage: <div className={cn("bg-black p-4", isActive && "bg-brand")} />
```

## 2. Custom Configuration
Avoid ad-hoc magic numbers (`w-[312px]`). Add them to the `tailwind.config.js` or `index.css` `@theme` block so they are accessible as semantic tokens globally.

```css
@theme {
  --color-brand: #96CC39;
  --font-display: "Clash Display", sans-serif;
  --ease-custom: cubic-bezier(0.83, 0, 0.17, 1);
}
```

## 3. Keep Utility Counts Low
If a DOM node has 15+ tailwind classes, abstract it into an `@apply` block in your `index.css` under the `@layer components` section to keep React files readable.
