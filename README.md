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

The form submits directly to a protected D1 inbox and displays a receipt after acceptance. Optional notifications use OpenForge’s SendGrid service. See the owner-inbox and runtime configuration details below.

## Deployment

The build is Cloudflare Worker compatible and configured for OpenAI Sites. `.openai/hosting.json` stores only the Sites project identifier after project creation; runtime settings and secrets belong in the hosting environment rather than the repository.

## AI economics article

Article metadata lives in `lib/blog.ts`; calculator formulas and illustrative scenarios live in `lib/ai-cost.ts`. The calculator supports invoice/token baselines, cached input, partial API displacement, power and labor, rented GPUs, shareable scenarios, and CSV export. Prices are not fetched live. See `docs/AI_COST_SEO_STRATEGY.md` for measured search demand and editorial priorities.

## Inquiries, measurement, and owner inbox

The contact form POSTs to `/api/inquiry/`. Valid submissions are stored in D1 before a receipt is returned; a honeypot, bounded payload, same-origin guard, and persistent five-per-hour IP-hash limit protect the public endpoint. `/admin/` requires dispatch-owned ChatGPT identity plus the exact `SITE_OWNER_EMAIL` runtime allowlist. It displays the latest 100 inquiries and 28 days of first-party event counts from visitors who have not opted out. Keep this route private and out of the sitemap.

Sites provisions the `DB` binding declared in `.openai/hosting.json` and applies the schema-only migrations in `drizzle/`. Generate changes with `npm run db:generate`; do not edit deployed migrations. For local preview, build and apply each new migration with `npx wrangler d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/<migration>.sql`.

Runtime values belong in Sites environment settings:

- `SITE_OWNER_EMAIL`: owner’s verified ChatGPT email (secret).
- `GOOGLE_ANALYTICS_ID`: verified GA4 measurement ID; production property is `561922842` in OpenForge account `118169306`, stream `16256969848` (`G-8NHBEYMZ7B`).
- `SENDGRID_API_KEY`: OpenForge SendGrid mail-send credential (secret).
- `INQUIRY_FROM_EMAIL`: verified SendGrid sender address.
- `INQUIRY_TO_EMAIL`: owner’s inquiry notification recipient.

SendGrid notifications run only when all three mail values are configured. The database is the durable inbox; notification state is recorded as `not_configured`, `accepted` (SendGrid HTTP 202, not a delivery guarantee), or `failed`. A failed notification does not discard a saved inquiry. Review `/admin/` while notification configuration is pending. No visitor auto-reply is sent.

Google Analytics and local aggregate event counting run by default unless the visitor opts out. Existing saved opt-outs, Do Not Track, and Global Privacy Control remain effective. GA enhanced measurement is off; the app sends explicit sanitized page events (referrer domain only) and maps accepted inquiry submissions to `generate_lead`. Never transmit form values, calculator inputs, URL queries, or full referrer URLs. `/measurement/` changes consent. Review the actual privacy disclosure when providers or collection change.

CI runs on PRs and pushes to `master`: type checking, financial and service tests, the production build, and rendered-route checks. It deliberately contains no hosting or email credentials.

## Editorial evidence and speaker kit

The public title “Founder & Software Guru” was selected by the owner. OpenForge’s founder/CEO listing is sourced to its public team page. Other venture descriptions are product context rather than claims of personal financial outcomes. The two-page speaker kit is generated with `scripts/create-speaker-kit.py` (ReportLab), rendered and visually checked before release.

The follow-up field notes distinguish hypothetical worked calculations from hardware measurements. `public/downloads/record-local-benchmark.mjs` is a local sequential recorder; it has no measured results bundled, no concurrency or first-token benchmark, and requires manual acceptance review. A measured workstation case study still needs hardware, workload, power, latency, acceptance, and repair-time evidence.
