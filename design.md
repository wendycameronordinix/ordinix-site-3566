# Ordinix Limited — Design Direction

Light-on-dark corporate-technical site. Two surfaces: a one-page company/services site (`/`) and a
deliberately minimal book page (`/evolveordie`). No server components — everything is client-side
React; the subscribe form posts to FormSubmit.

## Brand source

Extracted from the supplied Ordinix logo files (all four are the same mark at different sizes):

| Token | Value | Use |
|---|---|---|
| `--navy-900` | `#050d1c` | page background base |
| `--navy-800` | `#081832` | logo navy, section panels |
| `--navy-700` | `#0d2246` | raised cards, borders |
| `--cyan-400` | `#01ccfe` | primary accent (logo cyan) |
| `--cyan-300` | `#5fddff` | hover / highlight |
| `--steel-500` | `#1a7fb5` | gradient midpoint |
| `--ink-050` | `#e8f6fd` | primary text |
| `--ink-300` | `#9fb3c8` | secondary text |

Logo assets in `packages/web/public/images/`:
- `ordinix-logo-light.png` — wordmark recoloured for dark backgrounds (navy → `#e8f6fd`), used large in header/hero/footer.
- `ordinix-logo.png` — original (dark navy) for any light surface.
- `ordinix-mark-light.png` / `ordinix-mark.png` — ring/node icon only, used as a watermark and favicon-scale badge.
- `ordinix-logo-square.webp` — square variant.
- `evolve-or-die-cover.png` — book cover.

Logos are used at a generous scale (header wordmark 48–60px tall, hero wordmark up to 120px, footer
72px) — never shrunk to a token favicon.

## Typography

- Display: **Poppins** 600/700 — geometric, matches the logo wordmark. Tight tracking on headings.
- Body: **Manrope** 400/500 — 1.7 line height, `--ink-300` for paragraphs.
- Self-hosted woff2 in `public/fonts/` (no external font requests).
- Eyebrow labels: Manrope 600, 0.72rem, uppercase, `0.22em` tracking, cyan.

## Layout & motion

- Max width 1200px, 24px gutters; asymmetric two-column splits (7/5) rather than even card grids.
- Background: layered radial cyan glows over `--navy-900`, a faint node-grid pattern, and the ring
  mark as a large low-opacity watermark bleeding off the right edge.
- Borders are 1px `rgba(1,204,254,0.18)`; surfaces are `rgba(13,34,70,0.55)` with backdrop blur.
- One orchestrated page-load reveal: staggered fade-up (CSS keyframes, 60ms steps) plus
  intersection-observer reveals per section. No scattered micro-animations.
- Capability items: numbered rows with a cyan rule that grows on hover — not rounded card grids.

## Pages

1. `/` — sticky header (large logo + anchor nav + book link), hero, overview, capabilities (5),
   how we work, book teaser linking `/evolveordie`, contact (mailto only).
2. `/evolveordie` — cover image, title, "Coming soon", subscribe form (name + email) → FormSubmit
   AJAX endpoint for `wendy.cameron@ordinix.co.uk`, success state, mailto fallback on failure.
   Nothing else.

## Rules

- Every email address on the site is `wendy.cameron@ordinix.co.uk`.
- No third-party runtime dependencies beyond the template's own (React, Wouter, Tailwind, lucide).
- No API procedures, no database — the site is fully static/client-side.
