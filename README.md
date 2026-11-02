# JedidiahWeller.com

The production personal website for Jedidiah “Jedi” Weller, built with Next.js, TypeScript, Tailwind CSS, vinext, and OpenAI Sites.

## Routes

- `/` — personal-brand overview
- `/speaking/` — speaking topics, video, and engagement path
- `/about/` — biography and operating philosophy
- `/ventures/` — OpenForge, Startup Wars, and Summon Worlds
- `/ventures/summon-worlds/` — Summon Worlds venture profile
- `/contact/` — speaking and collaboration inquiries
- `/blog/` — essays and interactive tools
- `/blog/ai-llm-cost-comparison/` — AI economics essay and cost/ROI calculator
- `/privacy/` — privacy disclosure

The application also supplies a sitemap, robots policy, structured metadata, canonical-host redirects, a custom 404, and a reviewed redirect from `/profile/jedi/` to `/about/`.

## Local development

```bash
npm install
npm run dev
```

The development server prints its local URL when it starts.

## Validation

```bash
npm run lint
npm run typecheck
npm test
```

`npm test` creates the production vinext build and validates rendered route, metadata, redirect, 404, and video-loading behavior.

## Content and migration documentation

- [Migration plan](MIGRATION_README.md)
- [SEO and content audit](docs/SEO_CONTENT_AUDIT.md)
- [UI and brand audit](docs/UI_BRAND_AUDIT.md)
- [Media provenance](public/media/MANIFEST.md)

Public copy lives in `lib/site-content.ts`. Keep factual claims evidence-bounded and review any item marked `owner-review` before promoting it as verified proof.

## Inquiry handling

The former Unbounce form was coupled to the previous domain. The current accessible form transparently prepares an email to the verified OpenForge contact channel. `app/api/inquiry/route.ts` is reserved for a future approved server-side email or CRM transport; it intentionally returns a clear unavailable response until one is configured.

## Deployment

The build is Cloudflare Worker compatible and configured for OpenAI Sites. `.openai/hosting.json` stores only the Sites project identifier after project creation; runtime settings and secrets belong in the hosting environment rather than the repository.

## AI economics article

Article metadata lives in `lib/blog.ts`; calculator formulas and illustrative scenarios live in `lib/ai-cost.ts`. The calculator supports invoice/token baselines, cached input, partial API displacement, power and labor, rented GPUs, shareable scenarios, and CSV export. Prices are not fetched live. See `docs/AI_COST_SEO_STRATEGY.md` for measured search demand and editorial priorities.
