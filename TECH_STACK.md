# Cinematic Website Tech Stack

## Core Framework

**Next.js 14+** (App Router) with **Tailwind CSS 4** + **DaisyUI** plugin

TypeScript for type safety. App Router for layouts, loading states, and server components where beneficial.

---

## Folder Structure

Scene-based architecture optimized for scroll-driven cinematic sites.

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout, providers, fonts
│   ├── page.tsx            # Home page (composes scenes)
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Tailwind imports, CSS tokens
│
├── scenes/                 # Page sections (scroll frames)
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── HeroMedia.tsx   # Background video/image
│   │   └── index.ts
│   ├── [SectionA]/         # e.g., Services, Programs, Features
│   ├── [SectionB]/         # e.g., About, Team, Leadership
│   ├── [SectionC]/         # e.g., Gallery, Facility, Portfolio
│   ├── [SectionD]/         # e.g., Testimonials, Reviews
│   ├── [SectionE]/         # e.g., FAQ, Pricing
│   └── Footer/
│
├── components/             # Shared UI components
│   ├── ui/                 # Primitives (Button, Card, Accordion)
│   ├── Reveal.tsx          # Scroll reveal wrapper
│   ├── LanguageSwitcher.tsx
│   └── Navigation.tsx
│
├── hooks/                  # Custom React hooks
│   ├── useScrollReveal.ts
│   ├── useReducedMotion.ts
│   └── useMediaQuery.ts
│
├── lib/                    # Utilities and setup
│   ├── gsap.ts             # GSAP registration, ScrollTrigger
│   ├── cn.ts               # clsx + tailwind-merge helper
│   └── constants.ts        # Site-wide constants
│
├── i18n/                   # Internationalization
│   ├── config.ts           # i18next setup
│   └── index.ts
│
├── types/                  # TypeScript definitions
│   └── index.ts
│
└── config/                 # Site configuration
    ├── site.ts             # Metadata, URLs, social links
    └── navigation.ts       # Nav items
```

Each scene folder is self-contained with its own components. Scenes are composed in `page.tsx` in scroll order. This maps directly to the cinematic contract's "frame" concept—one scene = one frame.

---

## Motion Layer

**Framer Motion** for baseline reveals and micro-interactions. Built-in `reduceMotion` support, composable with React, handles 90% of animation needs.

**Import from `motion/react`** (not `framer-motion`). Framer Motion v12+ uses this new import path. When adapting code samples from documentation or external sources, update the import:

```tsx
// ✅ Correct (v12+)
import { motion, AnimatePresence } from 'motion/react'

// ❌ Deprecated (still works but avoid)
import { motion, AnimatePresence } from 'framer-motion'
```

**GSAP + ScrollTrigger** loaded conditionally on `lg+` breakpoint only. Reserved for the single hero motion beat per section as defined in the cinematic contract. Do not use GSAP for micro-interactions or mobile.

---

## Navigation

Single-page scroll site with anchor links (`/#services`, `/#about`, `/#contact`). Secondary standalone pages for legal (`/privacy`, `/terms`).

### Smooth Scrolling

CSS-native `scroll-behavior: smooth` handles most cases. IntersectionObserver detects which section is in view and highlights the corresponding nav item. Activation zone in upper-third of viewport so highlighting feels intentional. Respect `prefers-reduced-motion` by falling back to instant scroll. Account for fixed header height with `scroll-margin-top` on sections.

### Mobile Navigation

Full-viewport slide-down overlay (not hamburger drawer or bottom sheet). Hamburgers add friction for single-page sites; bottom sheets conflict with scroll gestures. Overlay preserves cinematic feel while showing all sections at once.

48px touch targets minimum. 250ms open/close animation with staggered link reveals. On anchor tap: close overlay first, scroll begins while overlay animates out. Use Radix Dialog for built-in focus trap, escape key handling, and accessibility.

---

## Design System

**CVA** (class-variance-authority) for variant-based component APIs.

**tailwind-merge** for deduplicating conflicting Tailwind classes.

**clsx** for conditional class composition.

All components consume tokens only. No ad-hoc style overrides inside components. Variants encode intent (`feature-card`, `testimonial-card`, `stat-block`).

---

## Component Libraries

### Cinematic Components

**Aceternity Pro** (`https://pro.aceternity.com/templates`) as the primary source for cinematic, scroll-driven components. Hero sections, animated cards, scroll reveals, and motion-heavy UI.

Components are selected manually per section based on the website spec's storyboard requirements. AI adapts and integrates selected components to match brand tokens and content.

### Accessible Primitives

**shadcn/ui** (which wraps Radix) as fallback for accessible primitives when Aceternity doesn't have a suitable component:

- Accordion (aria-expanded, aria-controls out of the box)
- Dialog/Modal
- Navigation Menu
- Dropdown Menu
- Tabs

These handle keyboard navigation and ARIA compliance without custom work.

### Utility Components

**DaisyUI** provides pre-styled Tailwind components for rapid prototyping and utility UI (badges, alerts, loaders). Use sparingly; prefer Aceternity or shadcn for primary UI.

---

## Typography

**next/font** with chosen typeface for zero-layout-shift font loading.

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

---

## Icons

**Lucide React** — tree-shakeable, consistent stroke weights, large icon set.

```tsx
import { Phone, MapPin, Clock } from 'lucide-react'
```

---

## Forms

**React Hook Form** for form state management.

**Zod** for schema validation with TypeScript inference.

```tsx
const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
})

type FormData = z.infer<typeof schema>
```

---

## Internationalization (i18n)

**react-i18next** for client-side language switching without page reload.

No URL-based routing (`/en/`, `/th/`). Language switch triggers React re-render only.

### Dependencies

- `i18next`
- `react-i18next`
- `i18next-http-backend` (fetches JSON on demand)
- `i18next-browser-languagedetector` (optional, for initial detection)

### File Architecture

```
/public/locales
  /en
    common.json      # nav, footer, buttons, shared UI
    hero.json        # hero section copy
    [section].json   # one file per scene/section
    ...
  /[lang]
    common.json
    hero.json
    [section].json
    ...
```

Split by section/domain for lazy loading. `common.json` loads immediately; section files load on demand.

### Key Configuration

```tsx
i18n.init({
  fallbackLng: 'en',
  load: 'currentOnly', // don't prefetch all languages
  ns: ['common'], // default namespace
  defaultNS: 'common',
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  interpolation: {
    escapeValue: false, // React already escapes
  },
})
```

### Language Switching

```tsx
import { useTranslation } from 'react-i18next'

const { i18n } = useTranslation()

// Switch language — no navigation, just re-render
const switchLanguage = (lang: string) => {
  i18n.changeLanguage(lang)
  localStorage.setItem('lang', lang)
}
```

### Tradeoff Accepted

Initial render shows English, then swaps if user previously chose another language. This causes a brief flash on first load. Accepted tradeoff for simpler architecture without SSR language detection or URL-based routing.

---

## Analytics (Optional)

If deploying on Vercel:

- `@vercel/analytics`
- `@vercel/speed-insights`

---

## Development Workflow

AI-guided, incremental section-by-section build process:

1. **Foundation first** — AI establishes design system tokens (colors, typography, spacing) using specialized agents (`!ui-design`)
2. **Component curation** — Human selects Aceternity Pro components for each section based on storyboard requirements
3. **Section-by-section build** — AI adapts selected components to brand tokens and content, one section at a time
4. **Validation** — Each section tested against the website spec's done conditions before moving to next

This workflow keeps the human in the loop on component selection while AI handles technical adaptation and design system compliance.

---

## Summary

| Concern                 | Solution                                         |
| ----------------------- | ------------------------------------------------ |
| Framework               | Next.js 14+ (App Router)                         |
| Structure               | Scene-based (scenes/, components/, hooks/, lib/) |
| Styling                 | Tailwind CSS 4 + DaisyUI plugin                  |
| Variants                | CVA + tailwind-merge + clsx                      |
| Motion (baseline)       | Framer Motion (import from `motion/react`)       |
| Motion (scroll-linked)  | GSAP + ScrollTrigger (lg+ only)                  |
| Navigation              | Anchor scroll + slide-down mobile overlay        |
| Components (cinematic)  | Aceternity Pro                                   |
| Components (primitives) | shadcn/ui (Radix)                                |
| Components (utility)    | DaisyUI                                          |
| Typography              | next/font                                        |
| Icons                   | Lucide React                                     |
| Forms                   | React Hook Form + Zod                            |
| i18n                    | react-i18next + JSON files                       |
| Analytics               | Vercel Analytics (optional)                      |
