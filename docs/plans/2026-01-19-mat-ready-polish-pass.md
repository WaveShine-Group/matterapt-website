# MAT Ready Method Redesign — Polish Pass

## Overview

Quick polish pass on the inherited vibe-coded MAT Ready landing page. Focus: hero image, simplified animations, logo swap, and restructuring content sections based on design reference images.

## Page Structure (Final)

```
Navbar
Hero (full bleed image + email CTA)
"What is MAT READY?" (headline + 5 benefit checkmarks)
4 Pillars (connected pathway diagram)
"From Technique to Tissue" (split layout + 5-step protocol)
"Bulletproof Your Frame" (module carousel)
Instructor (keep existing)
Seminar (keep existing)
FAQ (keep existing)
Footer (keep existing)
```

## Changes

### 1. Hero Background Image

**Goal:** Full bleed BJJ action shot with dark gradient overlay and subtle parallax.

**Assets:**
- Source: `assets/hero.png` (7.4MB — optimize before use)
- Target: `public/hero.webp` (compressed)

**Implementation:**
- `next/image` with `fill` + `object-cover` + `priority`
- Gradient overlay: `bg-gradient-to-b from-background/80 via-background/60 to-background`
- Subtle parallax via CSS `background-attachment: fixed` or Framer Motion scroll-linked transform
- Heavier gradient at top for navbar legibility

**File:** `components/hero.tsx`

---

### 1b. Email CTA Treatment

**Goal:** Make the email capture form stand out as the primary CTA without breaking the dark theme.

**Treatment:**
- Container: `bg-secondary/80` (dark but lifted)
- Border: `border border-primary/30` (subtle red)
- Glow: Custom shadow using primary color at 20-30% opacity
- Padding: `p-6` with `rounded-xl`

**Visual hierarchy (dark → light):**
1. Page background (darkest)
2. Hero image with gradient overlay
3. Email card with red glow (draws eye)
4. Red CTA button (brightest, action point)

**Token to add in `globals.css`:**
```css
--shadow-cta: 0 0 40px hsl(var(--primary) / 0.25),
              0 0 80px hsl(var(--primary) / 0.1);
```

**File:** `components/hero.tsx`, `app/globals.css`

---

### 2. Navbar Logo

**Goal:** Replace placeholder with actual MAT Ready logo.

**Assets:**
- Source: `assets/matready-full-logo.jpeg`
- Target: `public/matready-logo.jpeg`

**Implementation:**
- `next/image` component, ~40px height, auto width
- Alt text: "MAT Ready Method"
- Check contrast against dark navbar background

**File:** `components/navbar.tsx`

---

### 3. Animation Simplification

**Goal:** Remove "pulse" effect, keep clean fade + slide reveals.

**Current behavior:**
1. Fade in (opacity 0 → 1)
2. Slide up (y: 20px → 0)
3. Scale pulse (1 → 1.02 → 1) ← REMOVE

**New behavior:**
```js
hidden:  { opacity: 0, y: 20 }
visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
```

Staggered delays preserved. No pulse animation.

**File:** `components/heartbeat-section.tsx`

**Note:** User wants to test and compare — may adjust after seeing it live.

---

### 4. Remove Existing Sections

**Remove from page:**
- `bento-grid.tsx` — "What's Included" section (replaced by new sections)
- `overview.tsx` — Current overview (replaced by "What is MAT READY?" section)

**Keep files:** May repurpose later, just remove from `page.tsx`.

---

### 5. New Section: "What is MAT READY?"

**Layout:** Split — headline left, benefit checkmarks right.

**Left side:**
- Headline: "What is MAT READY?"
- Subhead (optional): Brief positioning statement

**Right side — 5 benefit checkmarks:**
1. Improved Joint Mobility & Flexibility
2. Injury Prevention Strategies
3. Enhanced On-Mat Performance
4. Specialized Strength Programs
5. Expert Guidance for Grapplers

**Visual treatment:**
- Checkmarks use primary color (red)
- Clean typography, generous whitespace
- Subtle background differentiation from hero

**Copy source:** Design image. Validate/refine with `/copy` if needed.

**File:** `components/what-is-matready.tsx` (new)

---

### 6. New Section: "4 Pillars"

**Layout:** Connected pathway diagram with 4 pillars arranged in a visual flow.

**Visual treatment:**
- Icons in circular containers connected by lines/paths
- Dark background with subtle accent colors (blue/purple from design)
- Underline accent on each pillar title

**Pillars:**
| Icon | Title | Description |
|------|-------|-------------|
| Yoga/stretch pose | Mobility Foundation | Daily routines for hips, shoulders, and spine health |
| Kettlebell | Strength Mastery | Build functional strength specific to BJJ demands |
| Fist/power | Injury Resilience Performance | Build functional strength and resilience |
| Foam roller | Advanced Grappling Mechanics | Address common grappling injuries before they happen |

**Copy source:** Design image. Validate/refine with `/copy` — some descriptions are placeholder-ish.

**File:** `components/four-pillars.tsx` (new)

---

### 7. New Section: "From Technique to Tissue"

**Layout:** Split — left editorial content, right 5-step protocol card.

**Left side:**
- Eyebrow: "THE 5-STEP PROTOCOL" or similar
- Headline: "FROM TECHNIQUE TO TISSUE"
- Body copy: Explain how MAT Ready analyzes BJJ positions and reverse-engineers protocols
- 3 bullet points with icons:
  - Joint-Specific Protocols
  - Injury Prevention Focus
  - Performance Metrics
- CTA link: "Learn about our science →"

**Right side — Protocol card:**
| Step | Name | Description |
|------|------|-------------|
| 01 | Analysis | Video breakdown of submission mechanics |
| 02 | Identification | Pinpointing failure points in ligaments/tendons |
| 03 | Prescription | Custom isometric and eccentric loading |
| 04 | Integration | Blending with on-mat training schedule |
| 05 | Fortification | Increased tissue tolerance and durability |

**Copy source:** Design image has placeholder text. Use `/copy` skill to write real descriptions based on Dr. Mattera's methodology.

**File:** `components/technique-to-tissue.tsx` (new)

---

### 8. New Section: "Bulletproof Your Frame"

**Layout:** Horizontal carousel/slider of module cards.

**Each card shows:**
- Duration badge (e.g., "6 WEEKS")
- Grayscale anatomical/training image
- Module title
- Description
- Progress bar (UI only, not functional)
- Difficulty level + session count

**Modules from design:**
| Duration | Title | Description | Level | Sessions |
|----------|-------|-------------|-------|----------|
| 6 weeks | The Indestructible Knee | MCL/LCL stability and meniscus protection for heavy leg lockers | Beginner to Advanced | 12 |
| 8 weeks | Iron Shoulders | Rotator cuff fortification against kimuras and americanas. Mobility + Strength | All Levels | 10 |
| 4 weeks | Tendinitis Protocol | Specific eccentric loading for golfers and tennis elbow common in gi players | Rehab Focus | Daily Routine |

**Copy source:** Design image. Use `/copy` skill to validate/refine based on Dr. Mattera's actual planned modules.

**File:** `components/bulletproof-frame.tsx` (new)

---

## File Changes Summary

| Action | File |
|--------|------|
| Edit | `app/page.tsx` — update section composition |
| Edit | `app/globals.css` — add CTA shadow token |
| Edit | `components/hero.tsx` — add background image + parallax + CTA glow |
| Edit | `components/navbar.tsx` — swap logo |
| Edit | `components/heartbeat-section.tsx` — remove pulse |
| Add | `public/hero.webp` — optimized hero image (compressed from 7.4MB) |
| Add | `public/matready-logo.jpeg` — navbar logo |
| Add | `public/portrait0.jpeg` — instructor primary photo |
| Add | `public/portrait1.jpeg` — instructor gallery |
| Add | `public/portrait2.jpeg` — instructor gallery |
| Add | `components/what-is-matready.tsx` — new section |
| Add | `components/four-pillars.tsx` — new section |
| Add | `components/technique-to-tissue.tsx` — new section |
| Add | `components/bulletproof-frame.tsx` — new section |
| Edit | `components/instructor.tsx` — new photo + gallery row |

---

## Content Gaps (Need /copy)

1. "What is MAT READY?" — validate 5 benefit checkmarks
2. "4 Pillars" — refine pillar descriptions (current ones feel generic)
3. "From Technique to Tissue" — 5-step protocol descriptions
4. "From Technique to Tissue" — 3 bullet point descriptions + body copy
5. "Bulletproof Your Frame" — module descriptions (validate against real modules)

---

## Interaction Design

### Focus States (Email CTA)
White ring offset from the element — cuts through red glow and dark background.

```css
focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background
```

### Hover State Language (Cohesive)

**Principle:** Subtle lift + border glow. Consistent across all interactive elements.

| Element | Hover Treatment |
|---------|-----------------|
| Buttons (primary) | `brightness-110` + `scale-[1.02]` |
| Cards (modules, pillars) | `translate-y-[-2px]` + `border-primary/50` glow |
| Text links | `text-primary` + underline slide-in from left |
| Nav links | `text-primary` transition |
| "by Mattera PT" badge | `scale-[1.05]` + brightness lift |
| Icon buttons | `bg-white/10` background reveal |

**Shared timing:** `transition-all duration-200 ease-out`

### Module Progress Bars
Mock values for demo purposes:
- The Indestructible Knee: 33%
- Iron Shoulders: 0%
- Tendinitis Protocol: 0%

### 4 Pillars Mobile Treatment
Connected pathway diagram stacks vertically on mobile. Connecting lines become vertical flow instead of horizontal. Prevents cramped layout or horizontal scroll.

### Hero Image Optimization
- Source: `hero.png` (7.4MB)
- Target: `hero.webp` (~200-400KB)
- Use `next/image` with `placeholder="blur"` for loading state
- Prevents layout shift, feels intentional

---

## Instructor Section Update

**Primary photo:** `portrait0.jpeg` — main hero image for the section

**Gallery row:** All 3 portraits (`portrait0.jpeg`, `portrait1.jpeg`, `portrait2.jpeg`) displayed as a small horizontal row below the main bio. Shows Dr. Mattera in different contexts — clinician, athlete, instructor. Adds personality and credibility.

**Treatment:**
- Small thumbnails (~80-100px) with subtle border
- Hover: slight scale + border-primary glow
- Optional: click to enlarge or swap main image

---

## Out of Scope

- Functional email capture (keep UI, no backend)
- Progress tracking functionality
- Responsive carousel logic (basic horizontal scroll OK)
- SEO/metadata updates
- Performance optimization beyond hero image

---

## Implementation Order

1. Copy assets to `public/` (hero image, logo)
2. Navbar logo swap
3. Hero background + gradient + parallax + email CTA glow
4. Animation simplification
5. Remove BentoGrid and Overview from page
6. Create "What is MAT READY?" section
7. Create "4 Pillars" section
8. Create "From Technique to Tissue" section (with /copy)
9. Create "Bulletproof Your Frame" section (with /copy)
10. Test animations, adjust if needed

---

## Brand Connection (Mattera PT ↔ MAT Ready)

MAT Ready is a sub-product of Mattera Physical Therapy. Main site (matterapt.com) is white/light; MAT Ready is dark/premium. Need subtle visual tie-back without diluting the premium aesthetic.

### Implementation

**Footer:**
- Copyright: "© 2026 Mattera Physical Therapy"
- Add: "A product of Mattera Physical Therapy" with link to matterapt.com
- Remove any placeholder disclaimers

**Navbar:**
- Small "by Mattera PT" badge next to MAT Ready logo
- Lime green pill (`--mattera-lime`) with navy text (`--mattera-navy`)
- Echoes parent brand color scheme directly

**Visual bridge — white as secondary accent:**
| Element | Treatment |
|---------|-----------|
| "by Mattera PT" badge | White text or light pill — signals parent brand |
| Footer brand link | White/light container or border |
| Dividers/borders | Occasional `border-white/10` for subtle lift |
| 4 Pillars icon strokes | White strokes instead of blue/purple — cleaner, ties to main site |

**Tokens to add in `globals.css`:**
```css
--accent-light: hsl(0 0% 95%);      /* off-white for subtle accents */
--mattera-lime: hsl(72 100% 70%);   /* parent brand lime green */
--mattera-navy: hsl(230 70% 25%);   /* parent brand navy blue */
```

**Visual hierarchy:**
Dark background → Red primary (CTA, highlights) → White secondary (brand connection)

---

## Design Reference

- Hero treatment: Full bleed dark BJJ image, similar to premium fitness apps
- New sections: Based on user-provided design mockup images
- Copy tone: Professional, confident, BJJ-specific terminology, avoid hype
- Color accents: Primary red for CTAs/highlights, white accents for brand connection
