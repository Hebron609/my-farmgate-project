# ScrollReveal.js Integration – Implementation Guide

This project uses [ScrollReveal.js](https://scrollrevealjs.org/) (v4) for scroll-triggered animations. Animations run only when the user does **not** prefer reduced motion, and the setup is responsive and tuned for performance.

---

## 1. Dependencies

ScrollReveal is already in `package.json`:

```json
"scrollreveal": "^4.0.9"
```

Install if needed:

```bash
npm install
```

---

## 2. Composable and Effects

### Location

- **Composable:** `src/composables/useScrollReveal.js`
- **Effects:** exported as `revealEffects` from the same file.

### Behavior

- **Reduced motion:** If `prefers-reduced-motion: reduce` is set, `init()` does nothing and no animations run. Content stays visible.
- **Options:** You can pass default `duration`, `delay`, `distance`, `easing`, `viewFactor`, `container`, etc. into `useScrollReveal(options)`.
- **Effects:** `revealEffects.fade`, `revealEffects.slideUp`, `revealEffects.slideLeft`, `revealEffects.slideRight`, `revealEffects.stagger` define preset configs. Override any field when calling `reveal()`.

---

## 3. HTML/Template – Class Names

Use these classes on the elements you want to animate. The script targets them and applies the right effect.

| Class | Effect | Typical use |
|--------|--------|-------------|
| `reveal-fade` | Fade-in + subtle scale | Hero titles, logos |
| `reveal-slide-up` | Slide up into view | Paragraphs, blocks |
| `reveal-slide-left` | Slide in from left | Left-side headings, content |
| `reveal-slide-right` | Slide in from right | Buttons, right-side content |
| `reveal-stagger` | Staggered slide-up (e.g. cards) | Lists, grids |
| `reveal-stagger-tag` | Staggered tags/chips | SDG tags, pill lists |

Example:

```html
<h1 class="reveal-fade">OUR IMPACT</h1>
<p class="reveal-slide-up">We are committed to...</p>
<h2 class="reveal-slide-left">OUR IMPACT STATS</h2>
<button class="reveal-slide-right">Join us</button>
<div v-for="stat in stats" :key="stat.id" class="reveal-stagger">...</div>
<span v-for="tag in tags" :key="tag" class="reveal-stagger-tag">{{ tag }}</span>
```

---

## 4. JavaScript – Wiring in a Vue Page

1. Import the composable and effects.
2. Call `useScrollReveal()` (optionally with defaults).
3. In `onMounted`, call `init()`. If it returns nothing (e.g. reduced motion), skip reveals.
4. Call `api.reveal(selector, config)` for each effect. You can override `duration`, `delay`, `interval`, etc. per selector.

Example (as in `OurImpact.vue`):

```js
import { onMounted } from 'vue';
import { useScrollReveal, revealEffects } from '@/composables/useScrollReveal';

const { init: initScrollReveal } = useScrollReveal({
  duration: 800,
  delay: 100,
  viewFactor: 0.12,
  mobile: true,
  desktop: true,
});

onMounted(() => {
  const api = initScrollReveal();
  if (!api) return;

  api.reveal('.reveal-fade', {
    ...revealEffects.fade,
    duration: 900,
    delay: 200,
  });

  api.reveal('.reveal-slide-up', {
    ...revealEffects.slideUp,
    duration: 750,
    delay: 250,
  });

  api.reveal('.reveal-slide-left', {
    ...revealEffects.slideLeft,
    duration: 700,
    delay: 150,
  });

  api.reveal('.reveal-slide-right', {
    ...revealEffects.slideRight,
    duration: 700,
    delay: 200,
  });

  api.reveal('.reveal-stagger', {
    ...revealEffects.stagger,
    duration: 600,
    interval: 120,
    delay: 100,
  });

  api.reveal('.reveal-stagger-tag', {
    ...revealEffects.stagger,
    duration: 500,
    interval: 80,
    delay: 200,
  });
});
```

Custom delays and durations: pass them in the second argument to `api.reveal(selector, { ...effect, delay: 300, duration: 1000 })`.

---

## 5. CSS

### Global (e.g. `src/style.css`)

- **Reduced motion:** so content is still visible when animations are disabled:

```css
@media (prefers-reduced-motion: reduce) {
  [class*="reveal-fade"],
  [class*="reveal-slide-up"],
  [class*="reveal-slide-left"],
  [class*="reveal-slide-right"],
  [class*="reveal-stagger"],
  [class*="reveal-stagger-tag"] {
    opacity: 1;
    transform: none;
  }
}
```

- **Smooth scroll (optional):** `html { scroll-behavior: smooth; }` is already set in this project.

No other CSS is required for the reveal effects; ScrollReveal injects its own styles.

---

## 6. Responsive and Performance

- **Mobile/desktop:** `mobile: true` and `desktop: true` in the composable keep animations on all breakpoints. ScrollReveal uses `transform` and `opacity`, which are GPU-friendly.
- **When to run:** Use `onMounted` so the DOM and any scroll container exist before calling `init()` and `reveal()`.
- **Cleanup:** The composable uses `cleanup: true` so ScrollReveal can remove listeners when appropriate.

---

## 7. Cross-Browser and Accessibility

- **Browsers:** ScrollReveal relies on `IntersectionObserver`, `requestAnimationFrame`, and standard CSS. Supported in all modern browsers.
- **Reduced motion:** Always call `init()` and skip `reveal()` when `init()` returns nothing. The global CSS above ensures elements stay visible.
- **Focus and semantics:** Do not animate only-focusable or critical semantic elements in a way that hides them until scroll. Prefer animating wrappers or decorative content.

---

## 8. Reusing on Other Pages

1. Add the same classes (`reveal-fade`, `reveal-slide-up`, etc.) in the template of the other page.
2. In that page’s `<script setup>`:
   - Import `useScrollReveal` and `revealEffects` from `@/composables/useScrollReveal`.
   - In `onMounted`, call `init()` and then `api.reveal(...)` for the selectors used on that page.
3. No extra CSS is needed if the reduced-motion block is already in `src/style.css`.

---

## 9. Summary of Files Touched

| File | Role |
|------|------|
| `src/composables/useScrollReveal.js` | Composable + `revealEffects` |
| `src/pages/OurImpact.vue` | Example: template classes + `onMounted` wiring |
| `src/style.css` | Reduced-motion and smooth-scroll rules |
| `docs/SCROLL_REVEAL_IMPLEMENTATION.md` | This guide |

ScrollReveal is wired only where you call `useScrollReveal` and `api.reveal()`, so you can roll it out gradually to other pages by repeating the pattern above.
