# MAT Ready Method - Agent Handoff

## Project Overview

Dark premium landing page for **MAT Ready Method**, a sub-product of Mattera Physical Therapy. Built with Next.js 16, Tailwind CSS, and Framer Motion.

**Location:** `mat-ready-method-redesign/`

**Owner:** Dr. Jenna Mattera, DPT, CSCS
- Email: Jmatteradpt@gmail.com
- Instagram: @matterapt
- Booking: matterapt.janeapp.com
- Location: 2 Cedar St., Woburn, MA (inside Team Forsa BJJ)

---

## Current State

✅ **Build passes** - `npm run dev` to preview

### Page Structure (Top to Bottom)
1. **Navbar** - Logo + "by Mattera PT" lime badge + nav links
2. **Hero** - Full-bleed background image, floating CTA with red glow, parallax
3. **What is MAT READY?** - Split layout, 5 benefit checkmarks with gradient wrapper
4. **4 Pillars** - Connected pathway diagram (Mobility, Strength, Resilience, Integration)
5. **From Technique to Tissue** - Split layout, 5-step protocol card with gradient
6. **Bulletproof Your Frame** - 3 module cards (centered, gradient wrappers)
7. **Instructor** - Dr. Jenna Mattera bio, photo gallery, gradient card
8. **Seminar** - Live training section (unchanged from original)
9. **FAQ** - Accordion with gradient wrapper
10. **Footer** - Contact info, location, social links, Mattera PT brand button

---

## Design System

### Colors (in `globals.css`)
- `--primary`: Red (oklch 0.55 0.22 25) - CTAs, accents, highlights
- `--mattera-lime`: hsl(72 100% 70%) - Parent brand connection
- `--mattera-navy`: hsl(230 70% 25%) - Badge text
- `--shadow-cta`: Red glow for CTA elements

### Gradient Card Pattern
Used throughout for visual consistency:
```jsx
<div className="relative group">
  {/* Gradient glow */}
  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />

  <div className="relative p-6 rounded-2xl bg-secondary/50 border border-primary/20">
    {/* Content */}
  </div>
</div>
```

### Animation Pattern
- Fade + slide reveals via `heartbeat-section.tsx` (pulse removed)
- Floating CTA: `animate={{ y: [0, -8, 0] }}` over 4s
- Hero parallax via Framer Motion `useTransform`
- All animations respect `useReducedMotion()`

---

## Assets

**In `public/`:**
- `hero.webp` - 331KB (compressed from 7.4MB)
- `matready-logo.jpeg` - Navbar/hero logo
- `portrait0.jpeg`, `portrait1.jpeg`, `portrait2.jpeg` - Dr. Jenna photos

**Needed (Midjourney prompts provided in code):**
- Module preview images for Bulletproof Your Frame section
- See `components/bulletproof-frame.tsx` for prompts

---

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Page composition |
| `app/globals.css` | CSS tokens, glass effects, scrollbar |
| `components/hero.tsx` | Hero with parallax, floating CTA |
| `components/navbar.tsx` | Logo, nav links, mobile menu |
| `components/heartbeat-section.tsx` | Animation wrapper (fade + slide) |
| `components/what-is-matready.tsx` | Benefits checklist |
| `components/four-pillars.tsx` | 4 pillars pathway |
| `components/technique-to-tissue.tsx` | 5-step protocol |
| `components/bulletproof-frame.tsx` | Module cards |
| `components/instructor.tsx` | Dr. Jenna bio + gallery |
| `components/faq.tsx` | Accordion |
| `components/footer.tsx` | Contact info, social, brand |

---

## Business Context

**Biz profile:** `/biz-profile.md` - Full details on Dr. Jenna, services, pricing, reviews

**MAT Ready Method:**
- Online platform for BJJ/combat sports joint health
- Status: Coming Soon (waitlist capture)
- In-person seminars also available

**Parent brand:** Mattera Physical Therapy (matterapt.com) - White/light theme
**Sub-brand:** MAT Ready - Dark/premium theme

---

## Known Issues / TODO

1. **Module images** - Currently placeholders, need Midjourney generations
2. **Email capture** - UI only, no backend integration
3. **Seminar section** - Unchanged from original vibe-coded version, may need polish
4. **Progress bars** - Mock values (33%, 0%, 0%), not functional

---

## Commands

```bash
cd mat-ready-method-redesign
npm install
npm run dev    # Development server
npm run build  # Production build
```

---

## Original Design Doc

See `docs/plans/2026-01-19-mat-ready-polish-pass.md` for the original implementation plan.
