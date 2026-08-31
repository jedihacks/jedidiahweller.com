import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, Container, SectionHeading } from "@/components/site";
import { canonical, jsonLd, siteUrl } from "@/lib/seo";
import { summonWorldsContent } from "@/lib/site-content";

const title = summonWorldsContent.seo.title;
const description = summonWorldsContent.seo.description;
const pageUrl = canonical(summonWorldsContent.route);
const imageUrl = `${siteUrl}/media/summon-worlds.webp`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    siteName: "Jedidiah Weller",
    title: summonWorldsContent.seo.ogTitle,
    description: summonWorldsContent.seo.ogDescription,
    url: pageUrl,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 900,
        alt: "A crystalline fantasy world created for Summon Worlds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: summonWorldsContent.seo.ogTitle,
    description: summonWorldsContent.seo.ogDescription,
    images: [imageUrl],
  },
};

const features = [
  {
    title: "Connected creations",
    body: "Keep characters, locations, creatures, objects, lore, relationships, and visuals together inside the world they belong to.",
  },
  {
    title: "AI-assisted exploration",
    body: "Use generation and in-character conversation to explore possibilities while keeping the creator in charge of what becomes canon.",
  },
  {
    title: "Worlds built together",
    body: "Invite collaborators and develop a shared setting for stories, campaigns, roleplay, or an ongoing creative universe.",
  },
] as const;

export default function SummonWorldsPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Ventures", item: `${siteUrl}/ventures/` },
      { "@type": "ListItem", position: 3, name: "Summon Worlds", item: pageUrl },
    ],
  };
  const venture = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Summon Worlds",
    url: "https://www.summonworlds.com/",
    description,
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: summonWorldsContent.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-charcoal py-18 text-white sm:py-24">
        <div className="rule-grid absolute inset-0 opacity-40" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-white/65">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="hover:text-white" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="hover:text-white" href="/ventures/">Ventures</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-orange">Summon Worlds</li>
            </ol>
          </nav>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-orange">
                Creative worldbuilding venture
              </p>
              <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[.96] tracking-[-.06em] sm:text-7xl">
                Summon Worlds
              </h1>
              <p className="mt-6 max-w-xl text-xl font-bold leading-8 text-white">
                Collaborative worldbuilding for creative storytellers.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
                {summonWorldsContent.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="button" href="https://www.summonworlds.com/" target="_blank" rel="noreferrer">
                  Explore Summon Worlds <span aria-hidden="true">↗</span>
                </a>
                <ButtonLink href="/ventures/" secondary>All ventures</ButtonLink>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-3">
              <img
                src="/media/summon-worlds.webp"
                width="1200"
                height="900"
                alt="A crystalline fantasy world created for Summon Worlds"
                className="aspect-4/3 w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The product"
            title="Build a world that can keep evolving."
          >
            <p>{summonWorldsContent.sections[0].paragraphs[0]}</p>
            <p className="mt-4">{summonWorldsContent.sections[0].paragraphs[1]}</p>
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article className="rounded-2xl border border-ink/15 bg-cream p-7" key={feature.title}>
                <p className="text-sm font-black text-orange">0{index + 1}</p>
                <h2 className="mt-4 text-2xl font-black tracking-[-.035em]">{feature.title}</h2>
                <p className="mt-3 leading-7 text-ink/70">{feature.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_.8fr]">
          <SectionHeading
            eyebrow="Who it serves"
            title="A creative workspace for worlds, stories, and adventures."
          >
            <p>{summonWorldsContent.sections[2].paragraphs[0]}</p>
            <p className="mt-4">
              Visit the official site for current product details, learning resources,
              platform availability, and ways to start creating.
            </p>
          </SectionHeading>
          <aside className="rounded-2xl bg-teal p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-white/75">The throughline</p>
            <p className="mt-5 text-3xl font-black leading-tight tracking-[-.045em]">
              Turn a creative spark into a world with people, places, history, and momentum.
            </p>
            <a className="mt-8 inline-block font-bold underline" href="https://www.summonworlds.com/" target="_blank" rel="noreferrer">
              Visit summonworlds.com <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="FAQ" title="About Summon Worlds" />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {summonWorldsContent.faqs.map((item) => (
              <article className="rounded-2xl border border-ink/15 p-7" key={item.question}>
                <h2 className="text-xl font-black tracking-[-.025em]">{item.question}</h2>
                <p className="mt-3 leading-7 text-ink/70">{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-18 text-white">
        <Container className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-orange">Keep exploring</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-.05em]">
              See the other products, companies, and learning platforms.
            </h2>
          </div>
          <ButtonLink href="/ventures/">View all ventures</ButtonLink>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(venture) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faq) }} />
    </main>
  );
}
