# SEO and content audit

**Site:** Jedidiah Weller (`https://jedidiahweller.com`)

**Audit date:** 2026-08-31

**Sources reviewed:** the live Unbounce page at `www.jedidiahweller.com`, its rendered HTML, `MIGRATION_README.md`, and the legacy Stencil repository (source, built output, README, and git history). Current linked company pages were checked only to avoid copying stale descriptions: [OpenForge](https://openforge.io/) and [Startup Wars](https://www.startupwars.com/). The content recommendations below intentionally do not claim awards, audience sizes, clients, revenue, or speaking appearances without owner confirmation.

## Executive findings

The live site is a one-page Unbounce landing page. It has recognizable personal-brand positioning and a speaking conversion goal, but it is not a usable search document: the HTML `<title>` and description are empty, there are no semantic headings, no canonical meta element, no social image/description, no JSON-LD, and no sitemap. `robots.txt` only disallows Unbounce tracking paths. The page includes a visible “Double-click to edit this text” template artifact and an inquiry form that posts to an Unbounce-domain-bound `/fsg` endpoint.

The GitHub repository is not a second current site. It is an unfinished 2018 Stencil starter with a single `app-events` home route and `/profile/:name`. It contains useful historical portrait/texture assets and biography material, but also stale Webjunto references, 2018 placeholder events (“Filming Somewhere”), broken `href="3"` navigation, an obsolete “Surpassed 1M In Annual Revenue” card, and starter metadata. Do not preserve its DOM or route structure.

The recommended six-page architecture below gives each intent one canonical URL while keeping the personal, energetic “Founder, Speaker, Maker” character. The page copy in `lib/site-content.ts` is the implementation source of truth. Every claim requiring an owner check is represented as a review flag rather than silently upgraded into proof.

## Source inventory and claim policy

### Safe to carry forward (source-backed)

- Name: **Jedidiah Weller**, familiar name **Jedi Weller**.
- Positioning: founder, speaker, maker; expertise in mobile applications, product design, and rapid prototyping.
- Public company links: OpenForge and Startup Wars.
- Speaking/mentoring references printed on the live page: DeveloperWeek, SXSW, The Web Summit / `#hack4good`, Duke University / `#hackduke`, and University of Pennsylvania.
- Live-page testimonials attributed to Dr. Colleen Robb and Brendan Walsh.
- Live-page personality numbers: 23 broken bones, 133 cities, 1,001 stories, 500 bruises. Treat these as personality copy, not business proof.
- Public video embed: `https://www.youtube.com/embed/B-fJWnt29nc`.
- Public profiles: LinkedIn (`https://www.linkedin.com/in/jedidiahweller/`) and X (`https://x.com/jedihacks`).

### Historical or owner-review claims

Do not render these as current fact until Jedidiah confirms them: current CEO/title wording for either venture; “industry leader since 2011”; the live page’s “featured in” logo list (DeveloperWeek, CEO, ProductWorld, MAXCBA, Driven by Dreams); “Ionic Framework’s #1 Trusted Partner”; the old Webjunto co-founder/CO-CEO role; Geekli.st, Unisys, Analytical Graphics, Technological Institute of Crete, Kitchen Cred, Philadelphia Junto, or landlord references; any 2014–2017 timeline cards; “first global clients”; “surpassed $1M annual revenue”; and any event details beyond the broad references above. Verify name spelling, titles, quote permission, event names, dates, and links before launch.

### Copy policy

- Say **associated with**, **founder of**, or **works across** when current employment/title is not confirmed; use “Founder & CEO” only after owner approval.
- “Technology speaker” and the topic list describe the offer; they do not imply a particular event booking or audience result.
- Do not use third-party logo strips as awards. Add `aria-label`/text equivalents and link only to approved primary references.
- Keep “Jedi” secondary to “Jedidiah Weller” in H1, metadata, structured data, and the biography.

## Route matrix

| Route        | Search intent                                                     | Recommended title                              | Meta description (150–160 characters target)                                                                                                    | H1                                                           |
| ------------ | ----------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `/`          | Jedidiah Weller; founder/speaker overview                         | `Jedidiah Weller — Founder, Speaker, Maker`    | `Meet Jedidiah Weller, a founder, technology speaker, and mobile product strategist working across product, design, and entrepreneurship.`      | `Jedidiah Weller: Founder, Speaker, Maker`                   |
| `/speaking/` | technology, entrepreneurship, and mobile product strategy speaker | `Speaking — Jedidiah Weller`                   | `Book Jedidiah Weller for practical talks on mobile product strategy, entrepreneurship, AI-era product work, and product-design collaboration.` | `Technology and entrepreneurship talks for teams that build` |
| `/about/`    | Jedidiah Weller biography                                         | `About Jedidiah Weller`                        | `Read Jedidiah Weller’s current biography, operating philosophy, and work across mobile products, design, entrepreneurship, and community.`     | `About Jedidiah Weller`                                      |
| `/ventures/` | Jedidiah Weller companies; OpenForge; Startup Wars                | `Ventures — OpenForge and Startup Wars`        | `Explore the ventures associated with Jedidiah Weller: OpenForge for mobile product work and Startup Wars for entrepreneurship education.`      | `Building companies around products and learning`            |
| `/contact/`  | book/contact Jedidiah Weller                                      | `Contact Jedidiah Weller — Book an Engagement` | `Share your event, team, or collaboration brief with Jedidiah Weller and start a conversation about the right format and next step.`            | `Let’s make the next conversation useful`                    |
| `/privacy/`  | privacy and inquiry-data expectations                             | `Privacy — Jedidiah Weller`                    | `Learn what information the Jedidiah Weller site collects through inquiries, how it is used, and the choices available to you.`                 | `Privacy`                                                    |

Titles are intentionally brand-first and distinct. Do not add a keyword list meta tag. Canonicals should be absolute apex URLs, with trailing-slash policy applied consistently.

## Route-by-route content and SEO brief

### `/` — overview and conversion hub

**Intent:** Establish the entity and route visitors to speaking, biography, ventures, and contact.

**Outline:**

1. Hero: name, “Founder, Speaker, Maker,” one-sentence value proposition, and `Book an engagement` CTA.
2. Evidence strip: approved press/event references as text and/or logos; never imply awards.
3. Short biography: mobile product strategy, product design, rapid prototyping, and entrepreneurship; link to `/about/`.
4. Speaking preview: four approved topic directions; link to `/speaking/`.
5. Ventures preview: OpenForge and Startup Wars; link to `/ventures/` and the verified external sites.
6. Video and testimonials: lazy, privacy-aware YouTube activation; preserve live-page quote wording after permission review.
7. Personality panel: 23 / 133 / 1,001 / 500 with explanatory labels, visually separated from proof.
8. Final CTA: `/contact/`, LinkedIn, X, and `/privacy/`.

**Internal links:** `/speaking/`, `/about/`, `/ventures/`, `/contact/`, `/privacy/`; external OpenForge, Startup Wars, LinkedIn, X, YouTube.

**FAQ candidates:**

- **Who is Jedidiah Weller?** Jedidiah Weller is a founder, technology speaker, and maker whose work spans mobile products, product design, rapid prototyping, and entrepreneurship.
- **What does Jedidiah Weller speak about?** His current topic directions include mobile product strategy in the AI era, useful product building, entrepreneurship through simulation, founder lessons, and product/design/engineering collaboration.
- **How can I invite Jedidiah to speak?** Use the engagement inquiry at `/contact/` with the event context, audience, timing, and the question you want the session to help answer.

**Schema:** `Person` (name, alternateName, sameAs only for approved profiles), `WebSite` (apex URL and name), `ProfilePage` only if the page is treated as the primary profile, `VideoObject` for the YouTube video once title/thumbnail/upload metadata is confirmed, and `Organization` references only for linked ventures. Do not add `Event` or `Review` schema without first-party event/quote evidence.

### `/speaking/` — speaking offer

**Intent:** Match event organizers and product/leadership teams with a clear talk offer and inquiry path.

**Outline:**

1. H1 and audience promise: practical talks for teams building products, companies, and learning experiences.
2. Topic cards: mobile product strategy in the AI era; building products people have a reason to use; entrepreneurship through simulation; founder lessons from uncertainty; product/design/engineering collaboration.
3. What attendees can take away: clearer decisions, testable assumptions, useful collaboration language, and next-step experiments. Phrase as intended outcomes, not guaranteed results.
4. Formats: keynote, workshop, fireside conversation, or tailored session — confirm which formats Jedidiah currently accepts.
5. Proof: approved video, testimonial quotes, and reviewed speaking/mentor references.
6. CTA: `/contact/` with event date, audience, and engagement type fields.

**Internal links:** `/`, `/about/`, `/ventures/`, `/contact/`, `/privacy/`.

**FAQ candidates:**

- **What topics does Jedidiah Weller speak about?** He can shape sessions around mobile product strategy, AI-era product decisions, entrepreneurship, founder lessons, and product/design/engineering collaboration.
- **Who is a good audience for these talks?** Event organizers, product and technology teams, founders, educators, and entrepreneurship communities are plausible audiences; confirm fit and format in the inquiry.
- **Can a talk be tailored to our team?** Yes, the inquiry should capture the audience, context, desired outcome, and constraints so the session can be shaped around the real question.
- **What formats are available?** The site can offer keynote, workshop, fireside, or another format only after Jedidiah confirms availability; avoid promising a format by default.
- **How do we request a speaking proposal?** Submit the `/contact/` form with event details and a short description of the problem the session should address.

**Schema:** `Person`, `ProfilePage` if this page is the primary speaking profile, `FAQPage` only for visible FAQs, `VideoObject` for the confirmed video, and `BreadcrumbList`. Do not use `Event` schema for past references or hypothetical future talks.

### `/about/` — biography and philosophy

**Intent:** Answer “who is Jedidiah Weller?” with a current, human biography rather than a résumé dump.

**Outline:**

1. H1 and short current biography.
2. How he works: connect product strategy, design, engineering, experimentation, and learning.
3. Current venture context: concise links to OpenForge and Startup Wars, with title wording gated by review.
4. Prior experience/community: optional timeline only for facts the owner reconfirms; historical source material should be labeled as prior experience.
5. Personal note: personality numbers as color, not authority proof.
6. CTA to speaking and contact.

**Internal links:** `/`, `/speaking/`, `/ventures/`, `/contact/`, `/privacy/`; external venture/profile links.

**FAQ candidates:**

- **What does Jedidiah Weller do?** He works across mobile product strategy, product design, rapid prototyping, entrepreneurship, and technology speaking.
- **What is Jedidiah Weller’s approach to building products?** Start with the customer problem and the riskiest assumption, make the decision testable, and bring product, design, and engineering into the same conversation.
- **Where can I learn about Jedidiah’s ventures?** Visit `/ventures/` for the concise overview, then follow the approved links to OpenForge and Startup Wars.
- **Is Jedi the same person as Jedidiah Weller?** Yes. “Jedi” is the familiar name used in the public brand; “Jedidiah Weller” is the canonical name for search and identity.

**Schema:** `Person`, `ProfilePage`, `BreadcrumbList`, and visible `FAQPage` if the FAQ remains on-page. `Organization` should describe only the venture pages, not imply that the personal site is an organization.

### `/ventures/` — OpenForge and Startup Wars

**Intent:** Give branded and navigational searchers a clear relationship map without duplicating either company site.

**Outline:**

1. H1 and one-sentence explanation that the page covers ventures associated with Jedidiah.
2. OpenForge card: use the current public description, “mobile app strategy, design, and development,” only with a title/relationship review flag; link to `https://openforge.io/`.
3. Startup Wars card: “entrepreneurship-first business simulation platform for educators and students,” sourced from the current public site; link to `https://www.startupwars.com/`.
4. How the two contexts connect: building products and helping people practice entrepreneurial decisions; mark as editorial framing, not a company claim.
5. CTA to `/about/`, `/speaking/`, and `/contact/`.

**Internal links:** `/`, `/about/`, `/speaking/`, `/contact/`, `/privacy/`; external venture URLs.

**FAQ candidates:**

- **What is OpenForge?** OpenForge presents itself as a mobile app strategy, design, and development company. The personal site should link to OpenForge for current services and team information.
- **What is Startup Wars?** Startup Wars presents itself as an entrepreneurship-first business simulation platform for high school, CTE, college, and university educators.
- **How are Jedidiah Weller and OpenForge connected?** The current personal site and legacy public copy identify a founder/CEO relationship; confirm the current title and exact wording with Jedidiah before publishing it as a present-tense fact.
- **How are Jedidiah Weller and Startup Wars connected?** The current personal site identifies Jedidiah with Startup Wars; confirm current role, capitalization, and preferred description before launch.

**Schema:** `Person` with approved `worksFor`/`founder` relationships only after review; separate `Organization` nodes for OpenForge and Startup Wars with `sameAs`/`url` only. Add `BreadcrumbList`. Do not copy company ratings, user counts, client names, or certifications into this page without a direct approved source.

### `/contact/` — inquiry path

**Intent:** Convert a qualified event, team, or collaboration inquiry and provide a transparent fallback if the transport is not ready.

**Outline:**

1. H1 and expectation-setting copy: what happens after submitting.
2. Accessible form: name, email, organization, engagement type, event date, audience, location/time zone, message, and consent/privacy link.
3. Validation, spam protection, success state, and human-readable failure state.
4. Clearly labeled email alternative using an owner-verified address; never imply that a submission succeeded unless the server confirms it.
5. Links to speaking topics, about, and privacy.

**Internal links:** `/speaking/`, `/about/`, `/ventures/`, `/privacy/`, `/`.

**FAQ candidates:**

- **What should I include in a speaking inquiry?** Include the event or team, audience, date or planning window, location/time zone, desired format, topic, and the decision or outcome the session should support.
- **Can I ask about a collaboration instead of a talk?** Yes; describe the collaboration and the context so the inquiry can be routed appropriately.
- **How quickly will I hear back?** Publish a response window only after Jedidiah confirms one; otherwise say that the inquiry will be reviewed and answered through the submitted contact channel.
- **What happens to the information I submit?** Use it to evaluate and respond to the inquiry, retain it only as long as needed for that purpose, and link to `/privacy/` for the complete disclosure.

**Schema:** `ContactPage`, `BreadcrumbList`, and `FAQPage` for visible FAQs. Do not add `LocalBusiness` or a physical address unless there is an approved public business contact identity. Keep form transport server-side and do not expose provider credentials.

### `/privacy/` — plain-language disclosure

**Intent:** Explain inquiry handling, optional analytics, third-party embeds, retention, rights, and contact method in plain language.

**Outline:**

1. Scope and effective date.
2. Data provided in the inquiry form and why it is used.
3. Technical data and privacy-friendly platform logs; say that no marketing identifier is active unless explicitly approved.
4. YouTube embed behavior and any consent gate.
5. Vendors, retention, security, user choices/rights, and how to ask a privacy question.
6. Last-reviewed date and link back to contact.

The final legal text must be reviewed for the actual deployment, jurisdiction, form provider, cookies, processors, retention period, and privacy contact. Do not claim “no cookies” or a legal basis until the built site is inspected.

**Internal links:** `/contact/`, `/`, `/about/`.

**FAQ candidates:**

- **What information does the inquiry form collect?** List only the fields actually implemented and submitted; at minimum, name, email, organization, engagement details, and message if those fields are present.
- **Does the site use analytics?** As of this audit, no Google Analytics, Google Tag Manager, Meta Pixel, or equivalent marketing identifier was found in the live HTML. Re-check production before publishing this statement.
- **How can I ask a privacy question?** Provide the owner-approved privacy contact route in the final policy; do not invent an address.

**Schema:** `WebPage`/`ContactPage` as appropriate and `BreadcrumbList`; no `FAQPage` unless answers remain visible and legally reviewed. Add `dateModified` only when maintained.

## Internal-link map

Use a persistent navigation with Home, Speaking, About, Ventures, Contact, and Privacy. At least one contextual link should point from each canonical page to the next decision:

| From         | Primary contextual destinations                              |
| ------------ | ------------------------------------------------------------ |
| `/`          | `/speaking/`, `/about/`, `/ventures/`, `/contact/`           |
| `/speaking/` | `/contact/`, `/about/`, `/ventures/`                         |
| `/about/`    | `/speaking/`, `/ventures/`, `/contact/`                      |
| `/ventures/` | `/about/`, `/speaking/`, `/contact/`, external venture sites |
| `/contact/`  | `/speaking/`, `/privacy/`                                    |
| `/privacy/`  | `/contact/`, `/`                                             |

Use descriptive labels (“Explore speaking topics”, “Read the biography”, “Visit OpenForge”), not repeated “Learn more” links. External links should be explicit and open in a new tab only when that behavior is useful and announced accessibly.

## Redirect and canonical plan

- Canonical origin: `https://jedidiahweller.com` (apex, HTTPS, one trailing-slash convention).
- Redirect `http://jedidiahweller.com/*`, `http://www.jedidiahweller.com/*`, and `https://www.jedidiahweller.com/*` permanently to the equivalent apex path while preserving query strings.
- Keep `/` as `200`; do not redirect unknown pages to Home.
- Return a branded `404` with `noindex, follow` for unknown paths.
- The legacy Stencil route `/profile/:name` was never a reliable public URL; `/profile/jedi` returns 404 on the current live site. If server logs or Search Console show historical traffic, redirect only `/profile/jedi` (and any confirmed exact variants) to `/about/` with a permanent redirect. Do not wildcard all `/profile/*` until reviewed.
- No legacy `/events` or `/projects` route was found in the built router. Do not create redirects for invented paths.
- Do not redirect old Unbounce `/fsg` or `clkn` tracking paths into content pages.
- Emit one canonical URL per page and exclude staging/preview hosts from indexing.

## Structured data and metadata checklist

Every canonical route should have:

- One non-empty `<title>` and unique meta description.
- One H1 and logical H2/H3 order.
- Absolute canonical URL on the apex.
- Open Graph `title`, `description`, `url`, and approved image; `og:type=profile` only if supported by the chosen implementation, otherwise `website`.
- X/Twitter card metadata with the same approved image and text.
- `lang="en"`, viewport, theme metadata, and a meaningful 404 response.
- JSON-LD that describes only visible, verifiable content; validate in Rich Results Test and Schema Markup Validator.

Recommended nodes by route are recorded in `lib/site-content.ts` and summarized above. JSON-LD should be generated from those inputs, not duplicated manually in each page.

## Post-launch search and content steps

1. Before DNS cutover, crawl the preview as an anonymous user at desktop and 390px widths. Check status, title, description, canonical, H1, robots, JSON-LD, internal links, form success/failure, and 404 behavior.
2. Confirm apex and `www` redirect chains, HTTPS, path/query preservation, and that no preview URL is canonical or indexable.
3. Publish `/robots.txt` with a sitemap declaration and `/sitemap.xml` containing only the six canonical pages (plus any intentionally public support surface).
4. Submit the sitemap in Google Search Console and Bing Webmaster Tools after the apex is live. Request inspection for `/`, `/speaking/`, `/about/`, `/ventures/`, and `/contact/`.
5. Run URL Inspection on the canonical pages and verify Google-selected canonical, rendered text, indexability, and detected structured data.
6. Validate Open Graph/X previews on representative shares; ensure the portrait/OG image is locally hosted, sized, and has no hotlink dependency.
7. Monitor 404s, redirect hits, crawl anomalies, form submissions, and branded queries for at least the rollback window. Preserve the Unbounce origin and DNS values until the window closes.
8. After one to two weeks, compare impressions/clicks for “Jedidiah Weller”, “Jedi Weller”, speaking terms, OpenForge, and Startup Wars. Use query data to refine headings and internal anchors, not to stuff keywords.
9. Review every flagged fact in the content module, especially role/title, testimonials, event references, logo permissions, and privacy/contact details. Record review date and owner before changing a flag to approved.

## Owner-review queue

Before launch, obtain explicit yes/no decisions for:

1. Current title and relationship to OpenForge and Startup Wars.
2. Whether “industry leader since 2011” remains desired and supportable.
3. Permission, exact wording, and current role for both testimonials.
4. Which featured-in logos and event references may remain, with approved links and alt text.
5. Whether the YouTube video is still representative, embeddable, and correctly titled.
6. Approved response email, privacy contact, inquiry transport, retention period, and analytics identifier (if any).
7. Any historical biography items worth keeping, with dates and “previously” framing.
