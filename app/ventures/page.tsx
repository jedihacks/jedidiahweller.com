import Link from "next/link";
import { ButtonLink, Container } from "@/components/site";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { ventures, venturesContent } from "@/lib/site-content";

export const metadata = pageMetadata(
  venturesContent.seo.title,
  venturesContent.seo.description,
  venturesContent.route,
);

const imageByVenture = {
  OpenForge: { src: "/media/openforge.webp", width: 1200, height: 633 },
  "Startup Wars": { src: "/media/startup-wars.webp", width: 375, height: 242 },
  "Summon Worlds": { src: "/media/summon-worlds.webp", width: 1200, height: 900 },
} as const;

const cards = ventures.map((venture) => ({
  ...venture,
  image: imageByVenture[venture.name as keyof typeof imageByVenture],
}));

export default function VenturesPage() {
  return (
    <main id="main-content">
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[.18em] text-orange">
            The ventures
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-[-.06em] text-ink sm:text-7xl">
            {venturesContent.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">
            {venturesContent.intro}
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((venture) => (
            <article
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/15 bg-white"
              key={venture.name}
            >
              <img
                src={venture.image.src}
                width={venture.image.width}
                height={venture.image.height}
                alt={`${venture.name} venture`}
                className={`aspect-3/2 w-full ${venture.name === "Summon Worlds" ? "object-cover" : "object-contain p-5"}`}
              />
              <div className="flex flex-1 flex-col p-7">
                <h2 className="text-3xl font-black tracking-[-.04em]">
                  {venture.name}
                </h2>
                <p className="mt-4 flex-1 leading-7 text-ink/75">
                  {venture.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold">
                  {venture.detailHref && (
                    <Link className="text-orange underline" href={venture.detailHref}>
                      Explore the venture <span aria-hidden="true">→</span>
                    </Link>
                  )}
                  <a
                    href={venture.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal underline"
                  >
                    Visit {venture.name} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-charcoal py-18 text-white">
        <Container className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-orange">
              Speaker and founder
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-[-.05em]">
              Need a perspective from the operating side?
            </h2>
          </div>
          <ButtonLink href="/contact/">Get in touch</ButtonLink>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            cards.map((venture) => ({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: venture.name,
              url: venture.href,
            })),
          ),
        }}
      />
    </main>
  );
}
