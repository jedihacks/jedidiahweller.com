import Link from "next/link";
import { ButtonLink, Container, SectionHeading } from "@/components/site";
import { jsonLd, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "About Jedidiah Weller",
  "Meet Jedidiah “Jedi” Weller: founder, mobile product strategist, speaker, and maker connecting product decisions, entrepreneurship, and AI economics.",
  "/about/",
);
const work = [
  {
    name: "OpenForge",
    tag: "MOBILE PRODUCT STRATEGY & DELIVERY",
    text: "OpenForge’s public team page identifies Jedi as founder and CEO. The company’s work spans mobile app strategy, consulting, design, development, and testing. That operating context connects the product question to the practical work of designing and shipping an application.",
    href: "https://openforge.io/about-us/",
    label: "Meet the OpenForge team",
  },
  {
    name: "Startup Wars",
    tag: "ENTREPRENEURSHIP THROUGH DECISIONS",
    text: "Startup Wars provides entrepreneurship-first business simulations for high school, CTE, college, and university educators. Learners make decisions about a simulated company, giving instructors material for discussion, reflection, and the consequences of a tradeoff.",
    href: "https://www.startupwars.com/",
    label: "Explore Startup Wars",
  },
  {
    name: "Summon Worlds",
    tag: "AI-ASSISTED CREATIVE TOOLS",
    text: "Summon Worlds connects characters, places, lore, images, and relationships in a shared worldbuilding workspace. It brings AI into a concrete creative workflow for writers, game masters, roleplayers, and collaborators.",
    href: "/ventures/summon-worlds/",
    label: "Explore the venture",
  },
];
export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="bg-cream py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <img
            src="/media/jedi-hero.webp"
            width="593"
            height="570"
            alt="Jedidiah Weller smiling in a hoodie"
            className="mx-auto w-full max-w-md"
          />
          <div>
            <p className="blog-kicker">JEDIDIAH “JEDI” WELLER</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
              The work between an idea and a useful product.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/75">
              I’m a Founder & Software Guru, mobile product strategist, speaker,
              and hands-on maker. My work connects product strategy, design,
              engineering, and entrepreneurship: deciding what to build, which
              assumptions to test, and what the result is worth.
            </p>
            <p className="mt-4 leading-8 text-ink/75">
              I’m interested in the decisions behind useful technology. That
              includes where AI helps, what it costs to operate, and whether the
              economics survive contact with a real workflow.
            </p>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Operating context"
            title="Three ventures. Different product questions."
          >
            <p>
              The work spans mobile products, entrepreneurship education, and
              creative software. Follow each venture for current product and
              company details.
            </p>
          </SectionHeading>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {work.map((w) => (
              <article
                className="rounded-xl border border-ink/15 p-7"
                key={w.name}
              >
                <p className="blog-kicker">{w.tag}</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight">
                  {w.name}
                </h3>
                <p className="mt-5 leading-7 text-ink/75">{w.text}</p>
                <a
                  href={w.href}
                  className="mt-6 inline-block text-sm font-bold underline"
                >
                  {w.label} →
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-ink/60">
            OpenForge role reference:{" "}
            <a href="https://openforge.io/about-us/" className="underline">
              public team page
            </a>
            , checked November 2, 2026. Product descriptions reflect the
            ventures’ public websites.
          </p>
        </Container>
      </section>
      <section className="bg-cream py-20">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="blog-kicker">HOW I APPROACH THE WORK</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Make assumptions visible.
            </h2>
            <p className="mt-6 leading-8 text-ink/75">
              A product decision gets easier to examine when the question, the
              constraints, and the next test are clear. Bring the people
              responsible for product, design, and engineering into that
              conversation early.
            </p>
          </div>
          <div>
            <p className="blog-kicker">A RECENT EXAMPLE</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">
              What does a useful AI result cost?
            </h2>
            <p className="mt-6 leading-8 text-ink/75">
              My AI economics essay turns the API-versus-hardware argument into
              an editable model. Readers can challenge the assumptions about
              operating labor, partial replacement, and payback instead of
              inheriting a single verdict.
            </p>
            <Link
              className="mt-6 inline-block font-bold underline"
              href="/blog/ai-llm-cost-comparison/"
            >
              Read the essay & run the numbers →
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-charcoal py-20 text-white">
        <Container>
          <p className="blog-kicker">Speaking & collaboration</p>
          <h2 className="mt-3 text-4xl font-black text-white">
            Bring a real question.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/75">
            Planning a session for a product team, founder community, or
            entrepreneurship program? Share the audience and the decision you
            want the conversation to help them make.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/speaking/">
              Explore the session outlines
            </ButtonLink>
            <ButtonLink href="/contact/" secondary>
              Start a conversation
            </ButtonLink>
          </div>
        </Container>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "About Jedidiah Weller",
            url: "https://jedidiahweller.com/about/",
            mainEntity: { "@id": "https://jedidiahweller.com/#person" },
          }),
        }}
      />
    </main>
  );
}
