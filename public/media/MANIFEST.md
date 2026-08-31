# Media manifest

All retained raster media in this directory is WebP. Dimensions are output pixel dimensions. Source URLs are recorded for provenance only; the application must serve the local output files and must not hotlink these origins.

| Output file | Dimensions | Source URL / origin | Purpose |
| --- | ---: | --- | --- |
| `jedi-hero.webp` | 593 × 570 | `https://d9hhrg4mnvzow.cloudfront.net/www.jedidiahweller.com/c67cf4b7-jedi-cutout_1000000000000000000028.png` | Primary transparent hero portrait. Highest useful live desktop source. |
| `featured-in-logos.webp` | 921 × 60 | `https://d9hhrg4mnvzow.cloudfront.net/www.jedidiahweller.com/74098b0d-speaker-logos_1000000000000000000028.png` | Live featured-in / speaker logo strip. Preserved at its native desktop dimensions. |
| `openforge.webp` | 1200 × 633 | `https://d9hhrg4mnvzow.cloudfront.net/www.jedidiahweller.com/21da54c0-734c0f78-a3c4-4a1f-a2c9-6216eebf77e6-current-of-logo-standard-color.svg` | OpenForge venture mark, rasterized from the live vector at a practical responsive display size. |
| `startup-wars.webp` | 375 × 242 | `https://d9hhrg4mnvzow.cloudfront.net/www.jedidiahweller.com/f9b59e22-suw_1000000000000000000028.png` | Startup Wars venture visual. Native live source retained without upscaling. |
| `summon-worlds.webp` | 1200 × 900 | Summon Worlds public web repository, `starforged-frontier.webp` | Summon Worlds venture visual reused from the product's current campaign media. |
| `speaking-stage.webp` | 1200 × 684 | `https://d9hhrg4mnvzow.cloudfront.net/www.jedidiahweller.com/86320095-maxresdefault_10000000z30k000800001o.jpg` | Poster for the existing `B-fJWnt29nc` speaker video; derived from the largest useful live thumbnail (1263 × 720). |
| `testimonial-colleen-robb.webp` | 171 × 171 | `https://d9hhrg4mnvzow.cloudfront.net/www.jedidiahweller.com/489e5391-colleen-robb_104r04r00000000000001o.jpeg` | Dr. Colleen Robb testimonial portrait; highest live 3× source. |
| `testimonial-brendan-walsh.webp` | 171 × 171 | `https://d9hhrg4mnvzow.cloudfront.net/www.jedidiahweller.com/93abe53f-ms-website-wordpress-design-co-images-brendan_104r04r000000000000028.png` | Brendan Walsh testimonial portrait; highest live 3× source. |
| `og-jedidiah-weller.webp` | 1200 × 684 | Same approved live video-thumbnail source as `speaking-stage.webp` | Transitional social/Open Graph image alias. Replace with an approved bespoke 1200 × 630 card when available. |
| `og-jedidiah-weller-v2.webp` | 1200 × 630 | OpenAI built-in image generation using `jedi-hero.webp` as the identity-preserving portrait reference | Purpose-designed social/Open Graph card with the exact text “JEDIDIAH WELLER” and “FOUNDER. SPEAKER. MAKER.” |
| `favicon.webp` | 96 × 96 | Cropped from the approved `jedi-hero.webp` portrait | Compact browser/site icon with the same recognizable portrait identity. |

## Processing notes

- Hero and Brendan Walsh outputs preserve source transparency.
- The output set intentionally excludes the live 2602 × 1736 success-story texture and 1600 × 1256 testimonial texture. Both are decorative and should be represented by CSS/gradient treatments rather than additional page weight.
- Do not use the URLs above as runtime image sources. They are provenance records and remain subject to the ownership/trademark review described in `docs/UI_BRAND_AUDIT.md`.
- `og-jedidiah-weller-v2.webp` was generated with the finished site's charcoal, deep-teal, warm-orange, and white palette; a subtle rule-grid; left-aligned exact brand copy; and the approved portrait on the right. The generated PNG was resized to exactly 1200 × 630 and converted to WebP at quality 88 for production use.
