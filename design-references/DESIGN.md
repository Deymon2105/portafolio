---
name: Engineered Obsidian
colors:
  surface: "#10141a"
  surface-dim: "#10141a"
  surface-bright: "#353940"
  surface-container-lowest: "#0a0e14"
  surface-container-low: "#181c22"
  surface-container: "#1c2026"
  surface-container-high: "#262a31"
  surface-container-highest: "#31353c"
  on-surface: "#dfe2eb"
  on-surface-variant: "#c1c7d3"
  inverse-surface: "#dfe2eb"
  inverse-on-surface: "#2d3137"
  outline: "#8b919d"
  outline-variant: "#414751"
  surface-tint: "#a4c9ff"
  primary: "#a4c9ff"
  on-primary: "#00315d"
  primary-container: "#60a5fa"
  on-primary-container: "#003a6b"
  inverse-primary: "#0060ac"
  secondary: "#7bd0ff"
  on-secondary: "#00354a"
  secondary-container: "#00a6e0"
  on-secondary-container: "#00374d"
  tertiary: "#bdc2ff"
  on-tertiary: "#131e8c"
  tertiary-container: "#909aff"
  on-tertiary-container: "#1f2994"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#d4e3ff"
  primary-fixed-dim: "#a4c9ff"
  on-primary-fixed: "#001c39"
  on-primary-fixed-variant: "#004883"
  secondary-fixed: "#c4e7ff"
  secondary-fixed-dim: "#7bd0ff"
  on-secondary-fixed: "#001e2c"
  on-secondary-fixed-variant: "#004c69"
  tertiary-fixed: "#e0e0ff"
  tertiary-fixed-dim: "#bdc2ff"
  on-tertiary-fixed: "#000767"
  on-tertiary-fixed-variant: "#2f3aa3"
  background: "#10141a"
  on-background: "#dfe2eb"
  surface-variant: "#31353c"
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: "800"
    lineHeight: 64px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: "800"
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: "700"
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: "600"
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 26px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: "600"
    lineHeight: 18px
  label-code:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an elevated, high-precision engineering portfolio identity. Targeted at technical recruiters, engineering managers, and enterprise collaborators, the aesthetic merges strict architectural discipline with modern digital craftsmanship.

The aesthetic philosophy draws on refined dark glassmorphism, disciplined typography, and precise cobalt luminescence. It evokes:

- **Architectural Rigor:** Clean geometric layouts, intentional spacing hierarchies, and code-grade clarity.
- **Modern Performance:** Sleek dark obsidian surfaces contrasted with luminous electric blue accents, communicating depth without visual noise.
- **Clarity over Complexity:** High legibility, structural modularity, and focused content containers designed to spotlight impact metrics, architecture decisions, and code proficiency.

## Colors

The color palette is built on deep structural darks punctuated by luminous cyan-blue gradients and crisp neutral steps:

- **Primary Canvas & Surfaces (`#0b0f19` / `#0d1117`):** Deep graphite and obsidian foundations provide an immersive canvas that reduces eye strain and establishes an authentic software terminal ambiance.
- **Container Surfaces (`#161b22`, `#1e293b` with alpha levels):** Layered surfaces with subtle translucent blue undertones, delivering separation through tonal elevation rather than heavy borders.
- **Primary Accent (`#60a5fa`):** Electric soft cobalt used for core interaction hooks, active tabs, primary buttons, and critical status indicators.
- **Secondary Accent (`#38bdf8`):** Vivid cyan utilized for role tags, inline hyperlinks, and focus rings.
- **Tertiary Accent (`#818cf8`):** Deep periwinkle reserved for code metadata, commit tags, and secondary technical highlights.
- **Text & Contrast Steps:** `#f8fafc` for maximum emphasis headline copy, `#cbd5e1` for body copy, and `#64748b` for subtle annotations, breadcrumbs, and metadata.

## Typography

The type system pairs **Plus Jakarta Sans** for structural, modern, and confident display elements with **Manrope** for high-density, technical readability.

- **Display & Headlines:** Set in Plus Jakarta Sans with tight tracking (`-0.02em`) to render compact, architectural header statements. Hero names and role subtitles leverage gradient masking (white transitioning into `#60a5fa`).
- **Body & Metrics:** Manrope provides neutral geometry, ensuring that technical project details, engineering architecture descriptions, and bullet points remain effortless to parse across multi-line blocks.
- **Labels & Chips:** Employs medium-to-semibold weights with slight uppercase letter-spacing (`+0.04em`) when applied to category markers or stack badges.

## Layout & Spacing

The layout is built around a centralized 12-column responsive fluid grid with a maximum content constraint of `1120px` to maintain optimal line lengths and balanced spatial weight.

- **Desktop (≥ 1024px):** 12-column grid, `1.5rem` gutters, and `2rem` outer padding. Projects utilize a two-column showcase format (interactive preview on one side, technical specs and impact on the other).
- **Tablet (768px – 1023px):** 8-column grid with `1.25rem` gutters. Project cards collapse into a stacked layout while maintaining internal horizontal badges.
- **Mobile (< 768px):** 4-column layout, `1rem` gutters, and `1.25rem` outer margins. Interactive previews stack vertically above descriptions with unified touch-target spacing (`44px` minimum).
- **Vertical Cadence:** Strict 8px baseline rhythm (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px) ensuring cohesive section distancing.

## Elevation & Depth

Visual hierarchy uses a refined dark glassmorphism model combining low-opacity borders with tinted ambient glows:

- **Level 0 (Base Canvas):** Solid `#0b0f19` background augmented with subtle ambient radial gradients in `#1e293b` (opacity 15%) positioned behind major sections.
- **Level 1 (Card & Section Containers):** Dark glass surface styled with `rgba(22, 27, 34, 0.75)` fill, `backdrop-filter: blur(12px)`, and a subtle 1px border of `rgba(148, 163, 184, 0.12)`.
- **Level 2 (Interactive Cards / Focused Containers):** Surface shift to `rgba(30, 41, 59, 0.85)` accompanied by an ambient cobalt drop shadow: `0 8px 32px -8px rgba(96, 165, 250, 0.18)` and border highlight `rgba(96, 165, 250, 0.3)`.
- **Level 3 (Modals, Overlays, Dropdowns):** Solid obsidian fill (`#161b22`), `0 20px 48px -12px rgba(0, 0, 0, 0.75)`, framed with a crisp double edge line.

## Shapes

The interface embraces a disciplined **Rounded (Level 2)** shape standard:

- **Standard Elements (0.5rem / 8px):** Buttons, code chips, input fields, and technical stack badges share this radius, creating cohesive, refined edges without appearing toy-like.
- **Containers & Project Cards (1rem / 16px):** Elevated project showcases and about-section card modules employ larger radii to soften wide bounds and house internal glass reflections.
- **Avatars & Floating Indicators (Full / 9999px):** Status lights, author profile avatars, and social icon pills adopt full circular contours to visually anchor geometric grids.

## Components

### Buttons & Interactive Links

- **Primary Action Button:** Solid `#60a5fa` background, dark graphite text (`#0b0f19`), font-weight 600, padding `10px 20px`, border radius `0.5rem`. Hover state creates a luminous cyan wash (`#38bdf8`) with an ambient outer glow.
- **Secondary / Glass Button:** Background `rgba(255, 255, 255, 0.05)`, border `1px solid rgba(148, 163, 184, 0.2)`, text `#f8fafc`. Hover state transitions border to `#60a5fa` and introduces an internal blue glow.
- **Icon / Social Link:** Rounded pill or square container (`40x40px`) with centered SVG icon, default opacity 70%, transitioning to 100% white with a `#60a5fa` perimeter glow on focus/hover.

### Project Cards

- **Structure:** Dual-pane or stacked glass container with a 1px border of `rgba(148, 163, 184, 0.12)`. Left/top pane holds a live demo viewport preview with subtle aspect ratio (`16:9`) and rounded corners. Right/bottom pane holds the project title, architectural summary, bulleted engineering impact statements, and interactive deployment links.
- **Hover Micro-interaction:** Subtle 2px vertical lift (`translateY(-2px)`), card border transitions to `rgba(96, 165, 250, 0.35)`.

### Technology Badges & Stack Chips

- **Display:** Pill/rounded badges (`border-radius: 0.5rem`) styled with `rgba(96, 165, 250, 0.08)` surface, border `1px solid rgba(96, 165, 250, 0.25)`, and text `#93c5fd`.
- **Grouping:** Grouped categorically under semantic labels (Frontend, Backend, Database, Cloud) with mono-spaced, crisp label hierarchy.

### Timeline & Experience List

- **Visuals:** Vertical track styled as a 1px dashed or subtle solid gradient line (`rgba(148, 163, 184, 0.2)` transitioning to `#60a5fa`).
- **Nodes:** Luminous cyan nodes (`8px` circular dots with `4px` outer halo) marking key career milestones and academic tenure.

### Inputs & Contact Surface

- **Fields:** Dark glass fields (`rgba(15, 23, 42, 0.6)`) with `1px solid rgba(148, 163, 184, 0.2)`. Focus brings a sharp `#38bdf8` outline and soft shadow rings.
