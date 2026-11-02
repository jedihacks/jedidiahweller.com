import Link from "next/link";
import { Container } from "@/components/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Privacy — Jedidiah Weller",
  "How this site handles inquiry submissions, optional Google Analytics and aggregate measurement, calculator scenarios, and embedded video.",
  "/privacy/",
);
export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="bg-cream py-20">
        <Container>
          <p className="blog-kicker">UPDATED NOVEMBER 2, 2026</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight">
            A straightforward privacy approach.
          </h1>
        </Container>
      </section>
      <section className="py-16">
        <Container className="max-w-3xl space-y-10 leading-8 text-ink/80">
          <section>
            <h2 className="text-2xl font-black">Information you provide</h2>
            <p className="mt-3">
              The inquiry form sends your name, email, organization, engagement
              type, event date, audience, and message to this website’s server.
              The submission is stored in a private database hosted through
              Sites on Cloudflare and is available only to the site owner
              through an authenticated inbox. A reference number is displayed
              after the database accepts it. If SendGrid is configured, a
              notification is also sent to the site owner. A submission receipt
              confirms database acceptance; it does not promise email delivery.
            </p>
            <p className="mt-3">
              Inquiry information is used to evaluate, respond to, and manage
              your request. Configured notifications are processed by
              OpenForge’s SendGrid service. Inquiry information is not sold or
              added to a marketing list. Please omit sensitive information.
              Contact{" "}
              <a href="mailto:hello@openforge.io" className="underline">
                hello@openforge.io
              </a>{" "}
              to request access, correction, or deletion of an inquiry. Include
              its reference number if available. Inquiries are retained while
              needed for correspondence and engagement records; retention is
              reviewed by the site owner.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black">
              Optional analytics & aggregate usage counts
            </h2>
            <p className="mt-3">
              Google Analytics and first-party usage measurement are off until
              you allow them. The site stores aggregate counts by UTC day, page,
              and action. Events include page views, calculator edits, exports
              and shares, contact clicks, speaker-kit download clicks, and
              successful inquiry submissions. First-party count events contain
              no visitor IDs, cookies, form details, financial inputs, URL query
              strings, or referrers. These counts do not identify unique people.
              Google Analytics uses analytics cookies to measure visits and
              engagement, and Google receives technical request information. The
              site sends page locations with query strings removed, retains only
              the referring site’s domain, disables advertising personalization,
              and excludes calculator values and inquiry fields.
            </p>
            <p className="mt-3">
              Your preference is stored in this browser’s local storage. Do Not
              Track and Global Privacy Control disable optional measurement.{" "}
              <Link href="/measurement/" className="underline">
                Change your preference and read the measurement details
              </Link>
              . Google Analytics is configured for this site. Advertising tags
              and Meta Pixel are not configured. See{" "}
              <a
                href="https://policies.google.com/privacy"
                className="underline"
              >
                Google’s privacy policy
              </a>{" "}
              for its handling of data.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black">
              Hosting and abuse prevention
            </h2>
            <p className="mt-3">
              Hosting providers process technical request information to deliver
              and protect the site. Inquiry rate limiting uses a hash of the
              request IP address and the current hour; the application does not
              store the raw address in its database. Limit records expire after
              two hours and are removed during later submissions. Cloudflare may
              use security cookies and process request data under its own
              service practices.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black">Calculator scenarios</h2>
            <p className="mt-3">
              Changing calculator values does not submit them to the measurement
              endpoint. Copying a scenario link includes the assumptions in the
              URL. Anyone with that link can read those values. Visiting or
              reloading a shared URL sends it to the hosting infrastructure and
              may leave it in browser history. Avoid using confidential budgets
              in links you share. CSV exports are generated in your browser.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black">Video and external links</h2>
            <p className="mt-3">
              The featured video loads a YouTube privacy-enhanced embed only
              after you press Play. YouTube then receives technical request
              information and handles playback under its own privacy practices.
              External company and social links lead to services with their own
              policies.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-black">Questions</h2>
            <p className="mt-3">
              Write to{" "}
              <a href="mailto:hello@openforge.io" className="underline">
                hello@openforge.io
              </a>{" "}
              with privacy questions.
            </p>
          </section>
        </Container>
      </section>
    </main>
  );
}
