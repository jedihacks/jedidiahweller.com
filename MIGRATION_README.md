# JedidiahWeller.com migration plan

Status: implementation handoff  
Audit date: August 31, 2026  
Canonical target: `https://jedidiahweller.com`

## Executive summary

The public website is not currently WordPress. It is a single Unbounce landing page published at `www.jedidiahweller.com`. The GitHub repository is a separate, unfinished Stencil prototype from 2018 and does not match the live site. The correct migration is therefore a clean Next.js and Tailwind rebuild that preserves the useful public copy, imagery, video, testimonials, social profiles, and speaking-conversion intent while replacing both legacy implementations.

The new site should position Jedidiah Weller as a founder, mobile product strategist, technology and entrepreneurship speaker, and hands-on maker. It should support speaking inquiries, strengthen the relationship to OpenForge and Startup Wars, and establish a technically sound personal-brand search result.

## Source-of-truth findings

### Live production surface

- Platform: Unbounce landing page, not WordPress.
- Unbounce page ID: `1cdd6a33-3434-49d4-adfa-29b4ef688889`.
- Published route: `/` only.
- Current canonical host: `www.jedidiahweller.com`.
- Apex currently redirects to `www`.
- `www` currently CNAMEs to `ced0f0bc-404d-4ddd-961a-f89fc07540b4.unbouncepages.com`.
- No WordPress REST API or WordPress sitemap is present.
- `/wp-sitemap.xml` and `/sitemap_index.xml` return 404.
- The live form posts to Unbounce's domain-bound `/fsg` endpoint and will not survive a DNS cutover unchanged.

### Existing GitHub repository

- Repository: `https://github.com/jedihacks/jedidiahweller.com.git`.
- Default branch: `master`.
- Current implementation: Stencil starter, approximately 2018.
- The repository includes useful historical portraits and visual assets but does not represent the live website.
- The old implementation contains placeholder events, incomplete navigation, obsolete Webjunto copy, and starter metadata.
- Git history preserves the old implementation, so the working tree can be replaced without deleting its provenance.

## Current public content inventory

### Hero

- Name: Jedidiah Weller / Jedi Weller.
- Positioning: “Founder, Speaker, Maker.”
- Primary action: “Book an Engagement.”
- Primary portrait: current transparent cutout of Jedidiah.

### Credibility

- Featured-in logo strip includes DeveloperWeek, CEO, ProductWorld, MAXCBA, and Driven by Dreams.
- Speaker and mentor references include DeveloperWeek, SXSW, The Web Summit / #hack4good, Duke University / HackDuke, and the University of Pennsylvania.
- Existing video: `https://www.youtube.com/embed/B-fJWnt29nc`.
- Existing “industry leader since 2011” statement.

### Biography

- Mobile applications, product design, and rapid prototyping expertise.
- Founder and CEO relationship to OpenForge.
- Founder and CEO relationship to Startup Wars.
- Historical repository also references operations and technology work, Philadelphia Junto, Geekli.st, Unisys, Analytical Graphics, and community/nonprofit involvement. These historical facts should be used conservatively and only when they remain accurate or are clearly framed as prior experience.

### Testimonials

- Dr. Colleen Robb, Professor of Entrepreneurship.
- Brendan Walsh, Principal, HubSpot Consulting.
- Preserve the source wording while correcting only spacing and obvious display artifacts.

### Personality statistics

- 23 broken bones.
- 133 cities.
- 1,001 stories.
- 500 bruises.
- These are personality/brand elements, not business proof, and should be visually distinguished from professional metrics.

### Ventures and outbound profiles

- OpenForge: `https://openforge.io/`.
- Startup Wars: `https://www.startupwars.com/`.
- LinkedIn: `https://www.linkedin.com/in/jedidiahweller/`.
- X: `https://x.com/jedihacks`.

### Current media

- Hero cutout portrait.
- Speaker/press logo strip.
- OpenForge and Startup Wars visual assets.
- Two testimonial portraits.
- Background photography and texture assets.
- YouTube thumbnail/video.
- Historical repository portraits, project imagery, and Philadelphia skyline image.

All retained raster images must be downloaded locally, converted to WebP, resized into appropriate responsive variants, and served with explicit dimensions. External image hotlinks and one-pixel lazy-load placeholders must not remain in the finished site.

## Problems to fix

### Search and answer-engine visibility

- Empty HTML title.
- No meta description.
- No valid page-level canonical element in the document body; the origin supplies only an HTTP link header.
- No H1 and no semantic heading hierarchy.
- No Open Graph description or image.
- No X/Twitter card metadata.
- No structured data.
- No sitemap.
- No useful robots policy.
- No meaningful 404 page.
- No content pages for speaking, biography, or ventures.
- Thin, dated copy does not clearly explain current expertise or engagement topics.
- The live page exposes a template string: “Double-click to edit this text.”

### Accessibility and usability

- Absolute-positioned landing-page layout instead of document flow.
- Mobile document width is 417px in a 390px viewport.
- No semantic headings or navigation landmarks.
- Most images have empty alternative text.
- Social links have no accessible names.
- Form fields are not required and the form does not include a message field.
- Keyboard and focus behavior depend on legacy scripts.
- Video loads eagerly and lacks a privacy-conscious poster/activation pattern.

### Performance and maintainability

- Large generated inline stylesheet.
- Multiple legacy Unbounce runtime scripts.
- Remote CloudFront image variants and tracking redirect URLs.
- Very permissive content security policy.
- No maintainable content model.
- The existing repository depends on obsolete Stencil, TSLint, and Jest versions.

## New information architecture

The site should remain concise, but a small set of focused pages provides substantially better search intent coverage and clearer visitor journeys.

| Route | Purpose | Primary intent |
| --- | --- | --- |
| `/` | Personal-brand overview and conversion hub | Jedidiah Weller, founder, speaker, mobile product strategist |
| `/speaking/` | Topics, audience value, proof, video, testimonials, inquiry CTA | technology speaker, entrepreneurship speaker, mobile app strategy speaker |
| `/about/` | Current biography, operating philosophy, career/community background | Jedidiah Weller biography |
| `/ventures/` | OpenForge and Startup Wars with concise, accurate descriptions | Jedidiah Weller companies, OpenForge, Startup Wars |
| `/contact/` | Accessible speaking and collaboration inquiry path | book Jedidiah Weller, contact Jedidiah Weller |
| `/privacy/` | Plain-language privacy disclosure for analytics and inquiry handling | trust/compliance |

Support surfaces:

- `/robots.txt`
- `/sitemap.xml`
- custom 404 response with `noindex, follow`
- permanent canonical-host redirects from `www` to the apex
- reviewed redirects for likely legacy Stencil paths such as `/profile/jedi`

No blog is currently live or discoverable. Do not invent or publish fabricated articles during the migration. A future insights section can be added only when authored source material is approved.

## Content and positioning

### Homepage narrative

1. Immediate personal identity and current category.
2. Clear primary CTA for speaking engagements.
3. Credibility strip and selected event references.
4. Concise biography with links to OpenForge and Startup Wars.
5. Speaking topics and outcomes.
6. Video and testimonials.
7. Human personality statistics.
8. Final contact CTA and social links.

### Recommended positioning

- Primary: founder, mobile product strategist, technology and entrepreneurship speaker.
- Supporting: builder and operator working across product strategy, UX, mobile applications, entrepreneurship education, and responsible AI-assisted delivery.
- Avoid positioning Jedidiah as a generic developer for hire.
- Use “Jedi” as the familiar name while retaining “Jedidiah Weller” in the H1, metadata, structured data, and biography.
- Do not repeat stale superlatives or partner rankings unless they are supported by the current linked company sites.

### Speaking topics

- Mobile product strategy in the AI era.
- Building products people have a reason to use.
- Entrepreneurship through simulation and experiential learning.
- Founder lessons from turning uncertain ideas into operating companies.
- Product, design, and engineering collaboration.

The exact wording may be polished for clarity, but it must not introduce unverified awards, client names, audience sizes, revenue, or event appearances.

## Design direction

- Preserve the recognizable charcoal, warm orange, white, and muted teal palette from the live page.
- Use the current hero portrait as the central visual anchor.
- Retain the bold, editorial “Founder, Speaker, Maker” character while improving hierarchy and whitespace.
- Use responsive Tailwind components and semantic document flow, not pixel-positioned recreation.
- Add restrained visual motifs that suggest stage lighting, product systems, and motion without creating decorative clutter.
- Maintain a personable, energetic tone rather than making the site resemble a corporate agency homepage.
- Meet WCAG AA contrast, keyboard navigation, visible-focus, reduced-motion, and touch-target requirements.

## Technical implementation

- Next.js App Router with TypeScript.
- Tailwind CSS.
- Cloudflare-compatible `vinext` production build, following the OpenForge deployment pattern.
- Server-rendered pages with minimal client JavaScript.
- Local, optimized WebP media with responsive `srcset` behavior.
- `next/font` or self-hosted/system font stack with no render-blocking font dependency.
- Route-level metadata and canonical URLs.
- Open Graph and X metadata.
- Person, WebSite, ProfilePage, Organization reference, VideoObject, BreadcrumbList, and FAQ structured data where appropriate.
- Explicit sitemap and robots output.
- Accessible skip link, landmarks, headings, alt text, form labels, error states, and success state.
- Security headers and privacy-aware, consent-gated analytics if a verified analytics identifier is available.
- Automated tests for route coverage, canonical metadata, headings, structured data, redirects, and 404 behavior.

## Contact and conversion plan

The current Unbounce `/fsg` form endpoint is coupled to the old Unbounce hostname and cannot be copied safely into the new deployment.

Implementation should:

1. Build the complete accessible inquiry UI with name, email, organization, engagement type, event date, audience, and message fields.
2. Use a transparent interim email route to the publicly verified OpenForge contact channel rather than silently dropping submissions.
3. Keep the form transport behind one documented server endpoint so it can be connected to an approved email/CRM provider without redesigning the page.
4. Never expose an API key in client code.
5. Add spam protection, validation, a clear success/failure state, and privacy disclosure when the final transport is connected.

Production cutover is blocked if the inquiry path neither sends successfully nor provides a clearly labeled working email alternative.

## SEO and migration safeguards

- Canonical apex: `https://jedidiahweller.com`.
- Redirect all HTTP and `www` variants to the canonical apex while preserving paths and query strings.
- Preserve `/` as a 200 response.
- Redirect any confirmed legacy paths only to semantically equivalent new destinations.
- Return a branded 404 for unknown routes; do not redirect all missing pages to the homepage.
- Submit the new sitemap in Google Search Console after cutover.
- Confirm rendered title, description, canonical, one H1, Open Graph, X card, JSON-LD, and indexability on every canonical route.
- Run a duplicate-title and duplicate-description audit.
- Confirm that staging/preview URLs are not indexable as canonical production content.

## Analytics and privacy

No Google Analytics, Google Tag Manager, Meta Pixel, or equivalent marketing identifier was found in the live Unbounce HTML during this audit. Do not invent a tracking ID. The site should be prepared for consent-gated analytics and can reuse a verified account identifier only after ownership is confirmed.

Basic privacy-friendly server/platform traffic reporting is acceptable. Any optional marketing script must remain disabled until a real identifier and privacy disclosure are approved.

## Delivery workstreams

### Foundation and implementation

- Replace the obsolete Stencil app with the Next.js/Tailwind/vinext structure.
- Build shared layout, navigation, footer, buttons, cards, testimonial, video, FAQ, and inquiry components.
- Implement every route in the information architecture.
- Add metadata, structured data, sitemap, robots, redirects, security headers, tests, and deployment configuration.

### Content and SEO

- Reconcile the live Unbounce copy with useful, non-conflicting historical repository material.
- Write current, evidence-bounded page copy.
- Create route-specific keyword intent, titles, descriptions, internal links, FAQs, and structured-data inputs.
- Document every factual statement that should receive owner review.

### UI and brand

- Audit the live desktop and mobile page side by side.
- Preserve its recognizable palette, portrait-led hero, credibility strip, and energetic speaker identity.
- Replace absolute layout with responsive components.
- Check desktop, tablet, and mobile visual quality, overflow, focus behavior, image crops, and CTA prominence.

## Acceptance criteria

- All six canonical pages render successfully.
- One H1 per page with a logical heading hierarchy.
- No copied template placeholder or stale Stencil placeholder content.
- No external hotlinked raster media.
- All raster media is WebP and appropriately sized.
- No horizontal overflow at 390px.
- Keyboard navigation and visible focus work throughout.
- Inquiry CTA has a working, non-deceptive destination.
- Sitemap, robots, redirects, custom 404, canonical metadata, social metadata, and structured data pass automated checks.
- Production build, lint, type checking, tests, dependency audit, route crawl, and Lighthouse audit pass.
- Browser review covers every page at desktop and mobile sizes.
- DNS cutover includes a documented rollback target and preserves the prior Unbounce origin until the rollback window closes.

## Go-live sequence

1. Complete local implementation and audits.
2. Commit and push the exact validated source to GitHub.
3. Create or reuse the Sites project and publish a private preview.
4. Validate every route, media asset, metadata field, inquiry path, and responsive layout on the preview.
5. Record current DNS and the Unbounce rollback target.
6. Attach `jedidiahweller.com` to the new deployment.
7. Replace apex DNS with the Sites targets.
8. configure `www` to permanently redirect to the apex while preserving paths and query strings.
9. Confirm TLS, canonical URLs, robots, sitemap, 404 behavior, and social previews.
10. Run a production crawl and Lighthouse audit.
11. Submit the sitemap and monitor indexing, conversions, and errors.
12. Keep the Unbounce origin and DNS values available during the rollback window.

## Explicit non-goals

- Do not copy the Unbounce-generated DOM, CSS, tracking redirects, or scripts.
- Do not retain the obsolete Stencil component architecture.
- Do not publish invented blog posts, events, awards, clients, or speaking appearances.
- Do not use a generic agency template that obscures Jedidiah's individual identity.
- Do not remove the old production origin until the new site has been verified and the rollback window has passed.
