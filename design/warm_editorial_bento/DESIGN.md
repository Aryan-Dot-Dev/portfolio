# Design System Specification

## 1. Overview & Creative North Star: The Tactile Curator
This design system is a departure from the sterile, high-gloss world of tech-centric portfolios. Its Creative North Star is **"The Tactile Curator."** It treats the digital screen as a physical workspace—a collection of high-grade paper, bespoke stationery, and intentional objects arranged on a warm canvas.

The system breaks the "template" aesthetic through a **Bento Editorial** approach: a structured yet asymmetric layout where information density varies, mimicking the layout of a premium independent magazine. By utilizing a heavy contrast between tight technical details (DM Mono) and expansive, character-rich headlines (Instrument Sans), we create an environment that feels both authoritative and deeply personal.

## 2. Colors
The palette is rooted in warmth and "ink-on-paper" depth. It avoids pure blacks and harsh whites in favor of a nuanced, layered experience.

### The Palette
*   **Canvas & Sheet:** The foundation is `surface` (#fef9ea) and `surface_container_lowest` (#ffffff). These provide the "paper" substrate.
*   **Card Hierarchy:** Use `surface_container` (#f2eedf) for primary bento cells and `surface_container_highest` (#e7e2d4) for nested elements to create a subtle shift in visual weight.
*   **The Inks:** `on_surface` (#1d1c13) is our primary text. Secondary details use `on_tertiary_container` (#67655a) for a faded, archival feel.
*   **The Accents:** 
    *   **Orange Accent (`secondary`):** Used strictly for signature motifs (diamonds) and media rings. It represents the "collector’s mark."
    *   **Lime Accent (`primary_container`):** Reserved exclusively for the Primary CTA to ensure immediate actionability against the warm neutrals.

### Editorial Color Rules
*   **The "No-Line" Rule:** Standard 1px solid borders are prohibited for sectioning. Boundaries must be defined by background shifts (e.g., a `surface_container` section sitting on a `surface` background).
*   **Surface Hierarchy & Nesting:** Treat the UI as stacked sheets. A card should never just "sit" on the background; it should feel like a physical layer. Nesting is key: place `surface_container_lowest` cards inside `surface_container_high` sections to create "natural" depth.
*   **Signature Textures:** For high-impact areas like hero buttons or large media containers, use a subtle radial gradient transitioning from `primary` (#576500) to `primary_container` (#d6f044) to provide a "soulful" polish that flat color cannot achieve.

## 3. Typography
The typography system is designed to mimic high-end print editorial, where technical precision meets expressive character.

*   **Display & Headline (Instrument Sans):** High-contrast and elegant. Use `display-lg` (3.5rem) for hero statements and `headline-md` (1.75rem) for section titles. This font carries the brand’s personality—sophisticated and modern.
*   **Body & Navigation (DM Sans):** Chosen for its neutrality and high legibility. Use `body-md` (0.875rem) for long-form content. It allows the headlines to shine without competing for attention.
*   **Technical Details (DM Mono):** The "Curator's Voice." Use `label-md` (0.75rem) for stats, dates, and metadata. This adds an archival, precise feel to the portfolio's data points.

## 4. Elevation & Depth: Tonal Layering
In this system, shadows are a last resort, not a default. We convey hierarchy through **Tonal Layering**.

*   **The Layering Principle:** Stack `surface-container` tiers to create lift. A card (`surface_container_lowest`) on a page foundation (`surface_dim`) creates a soft, natural edge.
*   **Ambient Shadows:** If a floating state is required (e.g., a hovering card), use a shadow with a blur of `32px` and an opacity of `4-6%`. The shadow color must be a tint of `on_surface` (#1d1c13), never pure black, to mimic ambient room light.
*   **The "Ghost Border" Fallback:** If a container lacks sufficient contrast against its neighbor, use a "Ghost Border"—the `outline_variant` (#c7c8af) at **15% opacity**. This provides a whisper of a boundary that disappears upon casual glance.
*   **Glassmorphism:** For the navigation bar or floating "Watch" buttons, use a semi-transparent `surface_container_low` with a `20px` backdrop blur. This allows the bento grid colors to bleed through, making the UI feel like a single cohesive object.

## 5. Components

### Buttons & Pills
*   **Primary CTA:** Pill-shaped (999px), using `primary_container` (#d6f044) with `on_primary_container` text.
*   **Secondary/Video:** A "Ghost" style with a `20px` backdrop blur and a thin `outline_variant` border.
*   **Signature Motif:** Use the orange diamond ◆ (`secondary`) as a prefix or suffix icon to denote "Premium" or "Featured" content.

### Cards & Bento Cells
*   **Radius:** A consistent `1.25rem` (20px) on all cards.
*   **Internal Padding:** Use Spacing Scale `6` (2rem) for generous, editorial breathing room.
*   **Forbid Dividers:** Horizontal lines are banned. Separate content within cards using vertical white space (Scale `4` or `5`) or a shift to `surface_variant`.

### Media Rings
*   **Styling:** Circular profile images or icons should be encased in a thick ring of `secondary_container` (#fd5f2e). This creates a "stamp" effect, drawing the eye to the human elements of the portfolio.

### Inputs & Interaction
*   **Fields:** Use `surface_container_low` with a bottom-only border of `outline` (#767962) to mimic a physical form.
*   **Checkboxes/Radios:** Must use the `secondary` (#af3000) orange for selected states to maintain SuspiciousDude’s mark.

## 6. Do's and Don'ts

### Do
*   **Do** embrace asymmetry. One large bento cell should be balanced by two smaller ones.
*   **Do** use `DM Mono` for all numbers. It makes the data feel "measured" and professional.
*   **Do** overlap elements slightly. A profile picture or an orange diamond ◆ breaking the edge of a container adds a high-end, custom-built feel.

### Don't
*   **Don't** use pure white backgrounds for everything. The system relies on the "warm" `surface` (#fef9ea) to feel premium.
*   **Don't** use standard icon sets. Use the signature ◆ motif or custom thin-stroke icons that match the `outline` token weight.
*   **Don't** use tight leading. Editorial design requires "air"—ensure `line-height` for body text is at least 1.6.