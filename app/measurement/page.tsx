import { Container } from "@/components/site";
import { Measurement } from "@/components/site/measurement";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Measurement & Privacy Preferences | Jedidiah Weller",
  "Choose whether to allow Google Analytics and aggregate usage counts, and learn what the site measures.",
  "/measurement/",
);
export default function MeasurementPage() {
  return (
    <main id="main-content">
      <section className="bg-cream py-20">
        <Container>
          <p className="blog-kicker">A SMALL, TRANSPARENT FEEDBACK LOOP</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight">
            Measure usefulness. Respect the visitor.
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 leading-8">
            <p>
              Optional Google Analytics and first-party measurement count page
              views, calculator edits, exports and shares, contact clicks,
              speaker-kit download clicks, and successful inquiry submissions.
              First-party counts are grouped by UTC day, page, and action. They
              are interactions, not unique visitors or verified leads. Google
              Analytics provides separate visit and engagement reporting.
            </p>
            <p>
              Measurement is off until you allow it. Your choice is kept in
              local storage on this browser. First-party count events contain no
              visitor identifier or cookie. Google Analytics uses analytics
              cookies and processes technical request information after you opt
              in. We send page paths and named actions with query strings
              removed and only the referring site’s domain retained. Calculator
              values and inquiry details are excluded. Global Privacy Control
              and Do Not Track disable optional events.
            </p>
            <Measurement
              settings
              googleId={process.env.GOOGLE_ANALYTICS_ID || ""}
            />
            <p>
              First-party aggregate counters are stored in the site’s database
              and are available only to the site owner. Hosting infrastructure
              may separately process technical request information for delivery
              and abuse prevention. Search-engine impressions and rankings
              require separate Search Console reporting.
            </p>
            <p>
              <a className="underline" href="/privacy/">
                Full privacy notice
              </a>
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
