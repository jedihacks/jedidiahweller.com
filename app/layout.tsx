import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site";
import { jsonLd, sameAs, siteUrl } from "@/lib/seo";
import { Measurement } from "@/components/site/measurement";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jedidiah Weller | Founder, Speaker, Maker",
    template: "%s | Jedidiah Weller",
  },
  description:
    "Jedidiah Weller is a founder, mobile product strategist, technology and entrepreneurship speaker, and hands-on maker.",
  applicationName: "Jedidiah Weller",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Jedidiah Weller",
    alternateName: "Jedi Weller",
    url: `${siteUrl}/`,
    jobTitle: "Founder & Software Guru",
    sameAs,
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Jedidiah Weller",
    url: `${siteUrl}/`,
    publisher: { "@id": `${siteUrl}/#person` },
  };
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Measurement googleId={process.env.GOOGLE_ANALYTICS_ID || ""} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(person) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(website) }}
        />
      </body>
    </html>
  );
}
