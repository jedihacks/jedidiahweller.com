# Go-live runbook

Status: application published; DNS cutover completed on 2026-08-31. The `www`
hostname is active and the apex certificate is provisioning.

## Production

- Hosted deployment: `https://jedidiah-weller.openforge-2104.chatgpt.site`
- Canonical domain: `https://jedidiahweller.com`
- Canonical host policy: apex domain is primary; `www` redirects to apex.
- Public routes: `/`, `/speaking/`, `/about/`, `/ventures/`, `/contact/`, and `/privacy/`.
- Discovery routes: `/robots.txt` and `/sitemap.xml`.
- Legacy route: `/profile/jedi/` permanently redirects to `/about/`.

## DNS cutover

The authoritative nameservers are Cloudflare:

- `gigi.ns.cloudflare.com`
- `tom.ns.cloudflare.com`

GoDaddy accepted the nameserver change on 2026-08-31. Cloudflare is configured
with the following DNS-only records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `162.159.143.30` |
| A | `@` | `172.66.3.26` |
| CNAME | `www` | `custom-domains.chatgpt.site` |
| TXT | `_openai-site-verification` | `openai-site-verification=3SYZPW3FOh8-2fjES7nnm0cVxJP1o6ZBvACb-ErpiGw` |
| TXT | `_cf-custom-hostname` | `c0f50780-7975-4dde-8422-10251b01ec50` |
| TXT | `_openai-site-verification.www` | `openai-site-verification=gFbIvJTQpYHTj_j1L6bw9vjv1HDc-xaOYB0o0e6_8qA` |
| TXT | `_cf-custom-hostname.www` | `fe4988f0-e4b8-4656-9df6-95013314f5a7` |

The records above and the authoritative nameserver change have been confirmed
through public DNS. Existing non-web records were preserved during the zone
migration.

## Rollback values

If the new host does not validate or serve correctly, move DNS authority back
to GoDaddy and restore these records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `3.33.251.168` |
| A | `@` | `15.197.225.128` |
| CNAME | `www` | `ced0f0bc-404d-4ddd-961a-f89fc07540b4.unbouncepages.com` |

Do not unpublish or delete the existing Unbounce page until the new domain has
served successfully through a normal DNS propagation window.

## Production verification

After DNS propagation:

1. Confirm `https://jedidiahweller.com/` returns `200` with a valid certificate.
2. Confirm `https://www.jedidiahweller.com/` permanently redirects to the apex.
3. Confirm every public route returns `200`, contains one H1, and uses its
   canonical apex URL.
4. Confirm `/profile/jedi/` redirects to `/about/`.
5. Confirm an unknown path returns a real `404` with `noindex`.
6. Confirm `/robots.txt` references the production sitemap and
   `/sitemap.xml` contains all six public routes.
7. Check the browser console, responsive layouts, and contact workflow.
8. Submit the sitemap in Google Search Console after the domain is serving the
   new site.

## Form operations

The contact form currently opens a prepared email to `hello@openforge.io` so
messages are not silently dropped. The `/api/inquiry` route is an explicit
integration seam and returns `501` until an approved transactional-email or CRM
provider is configured.
