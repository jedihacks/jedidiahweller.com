# Jedidiah Weller UI brand audit

Audit date: August 31, 2026
Sources inspected: the live Unbounce page at `https://www.jedidiahweller.com/` (1920 × 907 desktop and 390 × 844 mobile viewports) and the legacy Stencil repository assets.

## Brand in one sentence

The useful brand is a personable, stage-ready founder identity: a dark editorial hero, a large candid portrait, warm orange moments of action, calm teal editorial structure, and small doses of playful autobiographical data.

The rebuild should preserve that warmth and confidence while replacing the live page's pixel-positioned landing-page mechanics with a calm, semantic content system.

## Visual foundations

### Palette

The following values are taken from the live page's computed/inline design rules. They should become semantic design tokens rather than being copied as one-off values.

| Token | Value | Live role | Rebuild use |
| --- | --- | --- | --- |
| `--ink` | `#252525` | Header, speaker CTA panel, testimonial surface | Primary dark surface and high-contrast text on light surfaces |
| `--teal-700` | `#345355` | Hero gradient start, section headings, biography/venture heading | Brand anchor and dark readable text on white |
| `--teal-950` | `#091314` | Hero gradient end | Deep hero/background terminus |
| `--orange` | `#E88212` | Current CTA and orange number tile | Brand accent only; do not use white 16px text on this value |
| `--orange-action` | `#A85100` | New accessible CTA derivative | White CTA text, focus/hover starting point; preserves the warm-orange family at AA contrast |
| `--teal-blue` | `#297A8C` | “Stories” tile | Supporting data/stat tile |
| `--rust` | `#924A2E` | “Bruises” tile | Supporting data/stat tile |
| `--paper` | `#FFFFFF` | Main content ground | Default page ground |
| `--body` | `#292A2D` | Live long-form copy | Primary text on `--paper` |
| `--muted` | `#6E8185` | OpenForge wordmark/supporting copy | Secondary text only after contrast check |

Keep the hero as a restrained `#345355 → #091314` vertical gradient. Use orange as a deliberate conversion/brand signal, not as a general heading color. The live orange (`#E88212`) with white text is below normal-text AA contrast; use `--orange-action` for buttons or set the live orange against dark text for non-button accents.

### Typography

| Role | Live face and weight | Rebuild recommendation |
| --- | --- | --- |
| Hero/display, major section headings, metric numerals | Montserrat 500–700 | Montserrat if self-hosted/`next/font` is approved; otherwise a geometric system fallback. Use 700 for the hero and 500/600 for section headings. |
| Eyebrow, navigation, body, labels | Muli 300–600 | Use a locally loaded replacement such as Nunito Sans only if no licensed Muli source is available, or a system sans fallback. Keep the open, friendly rhythm—not condensed corporate UI text. |
| Testimonial names | Lato regular | Fold into the body system unless the visual distinction is purposeful; it does not merit a third remote font request. |
| Legacy prototype only | Quicksand 700 | Do not reintroduce solely for continuity. It belongs to the unrelated 2018 prototype. |

Type scale: hero `clamp(3rem, 6vw, 5rem)` with a tight 0.98–1.05 line height; section headings `clamp(2rem, 3.4vw, 3rem)`; card/venture headings 1.25–1.5rem; body 1rem/1.6; eyebrow 0.75–0.875rem with modest tracking. The live hero is heavy and compact, while supporting copy is notably relaxed—retain that contrast.

### Shape, imagery, and motion

- Use mostly square surfaces and small 2–8px radii. The four metric cards are the only conspicuously rounded repeated element.
- Let the hero portrait overlap/break its containing visual area on larger screens, but never crop the face or rely on fixed positioning.
- Use the retained logo strip at its natural wide ratio; do not recolor its third-party marks.
- The live success and testimonial backgrounds are atmospheric, not essential content. Recreate their role with CSS gradients, subtle noise/overlay, and a dark scrim. Do not restore fixed background attachment on touch devices.
- Keep movement minimal: optional opacity/translate entrance only when `prefers-reduced-motion: no-preference`; no autoplaying video or parallax requirement.

## Layout and section comparison

The desktop live page has a 950px absolute-position canvas centered in full-width blocks. The mobile version is a separate 320px canvas scaled into a 390px viewport; its document is 417px wide and overflows horizontally. Preserve sequence and contrast, not coordinates.

| Section | Live visual behavior | Preserve | Correct in the rebuild |
| --- | --- | --- | --- |
| Header | 100px charcoal bar; centered `JEDI WELLER`; orange engagement button at right | Short, confident identity + clear CTA | Semantic header/nav, a 44px minimum CTA target, normal flow. On mobile, show the CTA first only if it remains visually balanced; do not use absolute offsets. |
| Hero | 692px teal-to-near-black gradient; large left portrait; orange eyebrow; 72px three-line white statement | Portrait as central anchor; “Founder, Speaker, Maker”; dark editorial drama | Two-column grid from about 900px, one-column content/portrait stack below. Use `min-height`, not a fixed height; ensure heading and face remain fully visible. |
| Featured-in strip | White 145px band, a fine uppercase caption and very wide logo raster | The quiet credibility break and original logo marks | Center inside a max-width container; use the local `featured-in-logos.webp` with explicit `921 × 60` dimensions, responsive max width, meaningful group label, and no invented individual alt text. |
| Biography + numbers | Large centered heading, left biography, right 2 × 2 colored metrics | Human narrative and the playful 23/133/1001/500 motif | One prose column plus a responsive stats grid. Mark metrics as personal facts, not performance proof; reorder freely at mobile without visual priority inversion. |
| Speaker invitation/video | 701px black panel; centered ask/CTA; embedded YouTube is placed in the panel on desktop but absent from the narrow live presentation | Strong high-contrast speaking conversion moment | Use an aspect-ratio 16:9 poster (`speaking-stage.webp`) and an explicit “Play talk” action. Load the YouTube iframe only after activation and provide title/transcript/context. |
| Ventures / “Success Stories” | Light textured section, alternating OpenForge logo + copy and Startup Wars visual + copy | Two ventures, warm editorial pacing | Use two equal semantic cards/rows that stack. Retain the local venture artwork but treat historical claims as copy requiring verification. |
| Inquiry | Centered heading, video thumbnail beside a four-field Unbounce form | Direct conversion path and concise engagement choices | Accessible form in normal flow: labels, required states, message field, inline errors, success/failure state, privacy explanation, and a real controlled submission endpoint. Do not copy the Unbounce `/fsg` endpoint. |
| Testimonials | Dark photographic background, two white speech bubbles, orange quote glyph | Social proof with a friendly informal tone | Two `blockquote` cards with `cite`/role, portrait alt text, and stable reading order. Keep the background as CSS treatment and retain contrast under all overlay conditions. |
| Social footer | Black 90px strip, text + LinkedIn/X image icons | Brief close | Use labeled SVG/icon controls or text links, 44px targets, `rel="me"` where appropriate, and visible focus styles. |

## Responsive requirements

- Start with a one-column document. Introduce a two-column hero and biography/metrics layout only when their actual content has room (roughly 900px+), not because a device label says “desktop.”
- Use a shared content container: `max-width` approximately 70–76rem, inline padding `clamp(1.25rem, 4vw, 3rem)`. Avoid the live 950px fixed canvas.
- Header may wrap from brand + CTA into a compact stacked/row layout below 560px. It must not hide navigation, force horizontal scrolling, or rely on `transform: scale()`.
- Hero: copy first in DOM; portrait may be visually ordered first on desktop only if the H1 remains the first meaningful content. At small widths, keep 24–32px gutter space and let the portrait occupy the lower part of the hero without clipping.
- Metrics: four equal cards as 2 × 2 from 320px upward; cards must retain at least 44px of content height and never use tiny scaled typography.
- Venture artwork: `object-fit: contain`, an explicit aspect ratio, and no hard-cropped trademark/logo content. The Startup Wars source is only 375px wide, so do not render it materially larger than its intrinsic size.
- Video, forms, and testimonial cards take full available width. Maintain 16:9 video ratio and 44px controls; target one card per row below about 700px.
- Validate at 320, 390, 768, 1024, 1440, and 1920 CSS pixels. Horizontal overflow must be zero at each size.

## Accessibility and interaction requirements

- Use `header`, `nav`, `main`, `section`, `footer`, one H1, and a sequential H2/H3 hierarchy. The current live page has no semantic heading hierarchy.
- Provide a visible skip link and `:focus-visible` outline with at least a 3:1 contrast against each local background. Never remove outline without a replacement.
- Body text needs 4.5:1 contrast; UI/control labels need 4.5:1; large display text needs 3:1. Treat orange-with-white as an exception requiring the darker action token above.
- All controls—including social controls and video activation—must have accessible names, be keyboard operable, and be at least 44 × 44 CSS pixels (or have equivalent spacing).
- Use contextual alt text: hero “Jedidiah Weller smiling in a hoodie”; testimonial portraits identify the person; venture logos should be alt text only when they convey the venture name. The featured strip may use one grouped description because individual logos are not independently interactive.
- Respect `prefers-reduced-motion`, ensure no fixed background/parallax is needed, and avoid video autoplay. Captions/transcript/summary must be reachable before third-party video activation.
- Inquiry fields need programmatic labels, `required` where required, `autocomplete`, descriptive validation tied with `aria-describedby`, and an announced success/error region. The current live form makes every field optional and lacks a message field.
- Preserve text zoom and 320px reflow; do not use canvas scaling, absolute text placement, `vh`-locked content sections, or keyboard-hostile scroll effects.

## Implementation guidance

1. Create semantic color, spacing, radius, and type tokens from the table above. Keep components content-driven: `Hero`, `LogoStrip`, `BioStats`, `SpeakingVideo`, `Ventures`, `InquiryForm`, and `Testimonials` are enough.
2. Reuse the approved local media paths from `public/media/MANIFEST.md`. Supply width/height or `aspect-ratio` to eliminate layout shift, `sizes` appropriate to the layout, and lazy-load all media below the hero.
3. Render the hero image with alpha preserved over the CSS hero gradient; do not bake a new background into it. Use the landscape stage asset for the video poster and Open Graph image until an approved dedicated 1200 × 630 branded OG composition exists.
4. Build the visual rhythm with section padding (`clamp(4rem, 8vw, 7rem)`) and a content grid, not Unbounce coordinate translation. Prefer 1.25–1.5rem internal card gaps and noticeably larger section gaps.
5. Retain live factual content only where still substantiated. The migration README is authoritative on routes, contact, SEO, and deployment expectations.

## Legacy repository assessment

The legacy Stencil images are useful historical source material but not the visual source of truth. Its blue `#3353DF`, Quicksand-led typography, confetti background, Webjunto material, event cards, and old project/article images describe an earlier personal-site concept. Do not carry them into the first rebuild by default.

The historical portraits (`jedi_4`, `jedi-panel`, `jedi-summit`) are not replacements for the current live hero: the current transparent hoodie portrait better matches the founder/speaker position and recent visual system. Keep legacy assets untouched as archival material; introduce one only after editorial approval and a contemporary content use case.

## Factual, trademark, and licensing checks before launch

- Public availability on the Unbounce/CloudFront origin is not a transfer of copyright. Confirm Jedidiah/OpenForge owns or has permission to continue using the portrait, portraits, Startup Wars visual, YouTube thumbnail, and background-derived treatment.
- The featured logo strip contains third-party marks (including DeveloperWeek, CEO, ProductWorld, MAXCBA, and Driven by Dreams). Preserve the existing marks unaltered and verify permission/context before presenting it as an endorsement.
- Reconfirm the titles, approval, and quote wording for Dr. Colleen Robb and Brendan Walsh. “Hubspot” should be styled “HubSpot” if the source relationship is reconfirmed.
- Reconfirm time-sensitive or superlative claims before publishing: “Ionic Framework's #1 Trusted Partner,” “leading brand,” “premier,” and “An Industry Leader Since 2011.” The personality metrics are not business proof and should remain clearly framed as personal details.
- The local `og-jedidiah-weller.webp` is a video-thumbnail derivative, not a purpose-designed Open Graph card. It is an acceptable transitional asset, but commission/approve a branded 1200 × 630 composition before broad social promotion.
