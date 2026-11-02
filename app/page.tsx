import Link from "next/link";
import {
  ButtonLink,
  Container,
  SectionHeading,
  VideoEmbed,
} from "@/components/site";
import { jsonLd, pageMetadata } from "@/lib/seo";
import {
  homeContent,
  personalityNumbers,
  speakingTopics,
  testimonials,
} from "@/lib/site-content";

export const metadata = pageMetadata(
  homeContent.seo.title,
  homeContent.seo.description,
  homeContent.route,
);

export default function HomePage() {
  const faq = homeContent.faqs;
  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-charcoal py-18 text-white sm:py-24">
        <div className="rule-grid absolute inset-0 opacity-50" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-orange">
              Jedidiah Weller · Jedi
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[.94] tracking-[-.065em] sm:text-7xl">
              <span className="sr-only">Jedidiah Weller: </span>
              Founder.
              <br />
              Speaker.
              <br />
              <span className="text-orange">Maker.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
              {homeContent.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact/">Book an engagement</ButtonLink>
              <ButtonLink href="/about/" secondary>
                Meet Jedi
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-orange/50" />
            <img
              src="/media/jedi-hero.webp"
              width="593"
              height="570"
              alt="Jedidiah Weller smiling in a hoodie"
              className="relative w-full"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/10 bg-cream py-10">
        <Container>
          <p className="text-center text-sm font-bold uppercase tracking-[.16em] text-ink/65">
            Featured speaker references
          </p>
          <img
            src="/media/featured-in-logos.webp"
            width="921"
            height="60"
            alt="DeveloperWeek, CEO, ProductWorld, MAXCBA, and Driven by Dreams"
            className="mx-auto mt-5 w-full max-w-4xl"
          />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <SectionHeading
            eyebrow="The work"
            title="Product strategy grounded in making."
          >
            <p>
              Jedi works across mobile applications, product design, and rapid
              prototyping. Explore the ventures associated with this work for
              current details.
            </p>
            <p className="mt-4">
              The throughline is practical: make better product decisions, turn
              uncertain ideas into something real, and help people learn by
              doing.
            </p>
            <ButtonLink href="/ventures/" secondary>
              Explore the ventures
            </ButtonLink>
          </SectionHeading>
          <aside className="rounded-2xl bg-teal p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-white/75">
              On the work
            </p>
            <p className="mt-5 text-3xl font-black leading-tight tracking-[-.045em]">
              A stage-ready perspective on the choices behind useful products.
            </p>
            <Link
              className="mt-8 inline-block font-bold underline"
              href="/speaking/"
            >
              Speaking topics and engagement details →
            </Link>
          </aside>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Speaking" title="Ideas built for the room." />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {speakingTopics.map((topic, index) => (
              <li
                key={topic}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
              >
                <span className="text-xl font-black text-orange">
                  0{index + 1}
                </span>
                <p className="font-bold leading-6">{topic}</p>
              </li>
            ))}
          </ul>
          <ButtonLink href="/speaking/">Explore speaking</ButtonLink>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="On stage"
              title="A conversation about making and momentum."
            >
              <p>
                Watch a featured video, then get in touch about a technology or
                entrepreneurship engagement.
              </p>
            </SectionHeading>
            <ButtonLink href="/contact/">Start an inquiry</ButtonLink>
          </div>
          <VideoEmbed title="Jedidiah Weller video" />
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What collaborators say"
            title="Direct, practical, and human."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                className="rounded-2xl bg-white p-7 shadow-sm sm:p-9"
                key={testimonial.name}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      testimonial.name.includes("Colleen")
                        ? "/media/testimonial-colleen-robb.webp"
                        : "/media/testimonial-brendan-walsh.webp"
                    }
                    alt={testimonial.name}
                    width="171"
                    height="171"
                    loading="lazy"
                    className="size-16 rounded-full object-cover"
                  />
                  <figcaption>
                    <strong className="block text-ink">
                      {testimonial.name}
                    </strong>
                    <span className="text-sm text-ink/65">
                      {testimonial.role}
                    </span>
                  </figcaption>
                </div>
                <blockquote className="mt-6 text-lg leading-8 text-ink/75">
                  “{testimonial.quote}”
                </blockquote>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream py-16">
        <Container className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div><p className="blog-kicker">LATEST FIELD NOTE · AI ECONOMICS</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">What does a useful AI result actually cost?</h2><p className="mt-4 max-w-2xl leading-7 text-ink/75">Compare APIs, rented GPUs, and local hardware. Read the essay, change the assumptions, and calculate the break-even point for your own setup.</p></div>
          <ButtonLink href="/blog/ai-llm-cost-comparison/">Read & run the numbers</ButtonLink>
        </Container>
      </section>

      <section className="bg-charcoal py-20 text-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[.16em] text-orange">
            A little human
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-[-.045em] text-white sm:text-5xl">
            The stats behind the stories.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {personalityNumbers.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/15 p-5"
              >
                <p className="text-3xl font-black text-orange">{value}</p>
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="About Jedidiah and speaking engagements."
          />
          <div className="mt-8 grid gap-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-ink/15 p-5"
              >
                <summary className="cursor-pointer font-bold">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-ink/75">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-orange py-18">
        <Container className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.16em] text-charcoal/70">
              Speaking and collaboration
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-.055em] text-charcoal sm:text-5xl">
              Bring a builder’s perspective to your next room.
            </h2>
          </div>
          <ButtonLink href="/contact/" secondary>
            Book an engagement
          </ButtonLink>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
