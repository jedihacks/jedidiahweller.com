import Link from "next/link";
import {
  ButtonLink,
  Container,
  SectionHeading,
  VideoEmbed,
} from "@/components/site";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { talks, speakerBio } from "@/lib/speaking";
export const metadata = pageMetadata(
  "AI, Product & Entrepreneurship Speaker | Jedidiah Weller",
  "Explore Jedidiah Weller’s talks on AI economics, product strategy, and entrepreneurship. See audiences, takeaways, and download the speaker kit.",
  "/speaking/",
);
const faq = [
  {
    question: "Who are these sessions for?",
    answer:
      "Product and engineering teams, founders, event organizers, educators, and entrepreneurship communities. The outlines below describe the best-fit audience for each conversation.",
  },
  {
    question: "Can a session be tailored to our team?",
    answer:
      "Yes. Share the decision your audience faces, what they already know, and what you want them to take away. We can use that context to shape the scope and format.",
  },
  {
    question: "How do we plan format, duration, and fees?",
    answer:
      "Include your event date or planning window, location or time zone, audience size, and preferred format in your inquiry. Availability, duration, delivery mode, and fees are confirmed directly before booking.",
  },
  {
    question: "What happens after we inquire?",
    answer:
      "Your inquiry is saved to a private inbox with a reference number. Jedi can review the context and respond to the email address you provide. If submission fails, your message stays in the form and you can retry or email directly.",
  },
];
export default function SpeakingPage() {
  return (
    <main id="main-content">
      <section className="bg-charcoal py-20 text-white sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="blog-kicker text-orange">FOR TEAMS THAT BUILD</p>
            <h1 className="mt-4 text-5xl font-black tracking-[-.055em] sm:text-6xl">
              A useful perspective.
              <br />A clearer next decision.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Practical conversations about AI economics, product strategy, and
              entrepreneurship, grounded in the questions your audience is
              working through.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contact/">Discuss your event</ButtonLink>
              <a
                href="/downloads/jedidiah-weller-speaker-kit.pdf"
                className="button button-secondary"
                download
              >
                Download speaker kit ↓
              </a>
            </div>
          </div>
          <img
            src="/media/speaking-stage.webp"
            width="1200"
            height="684"
            alt="Jedidiah Weller at a speaking event"
            className="aspect-video w-full rounded-2xl object-contain"
          />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Session outlines"
            title="Start with the question in the room."
          />
          <div className="mt-10 grid gap-7">
            {talks.map((talk, i) => (
              <article key={talk.title} className="speaker-talk">
                <div>
                  <p className="blog-kicker">
                    0{i + 1} /{" "}
                    {i === 0
                      ? "AI ECONOMICS"
                      : i === 1
                        ? "PRODUCT STRATEGY"
                        : "ENTREPRENEURSHIP"}
                  </p>
                  <h2>{talk.title}</h2>
                  <p>{talk.summary}</p>
                  <p>
                    <strong>For:</strong> {talk.audience}
                  </p>
                  {talk.href && (
                    <Link
                      href={talk.href}
                      className="mt-5 inline-block text-sm font-bold underline"
                    >
                      Explore the essay & calculator →
                    </Link>
                  )}
                </div>
                <div>
                  <h3>Intended takeaways</h3>
                  <ul>
                    {talk.takeaways.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <p className="speaker-format">{talk.format}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-cream py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Meet the speaker"
              title="A builder in the conversation."
            >
              <p>{speakerBio}</p>
            </SectionHeading>
            <Link
              href="/about/"
              className="mt-6 inline-block font-bold underline"
            >
              Biography, ventures & work →
            </Link>
            <p className="mt-5 text-sm leading-6 text-ink/65">
              Watch the featured video for a sense of Jedi’s speaking style.
              Sessions are scoped around the audience and the question.
            </p>
          </div>
          <VideoEmbed title="Jedidiah Weller featured talk" />
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Planning"
            title="Bring the context. We’ll shape the session."
          />
          <div className="mt-8 grid gap-4">
            {faq.map((f) => (
              <details
                key={f.question}
                className="rounded-xl border border-ink/15 p-5"
              >
                <summary className="cursor-pointer font-bold">
                  {f.question}
                </summary>
                <p className="mt-3 leading-7 text-ink/75">{f.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact/">Start an inquiry</ButtonLink>
            <a
              href="/downloads/jedidiah-weller-speaker-kit.pdf"
              className="button button-secondary"
              download
            >
              Download speaker kit ↓
            </a>
          </div>
        </Container>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Speaking with Jedidiah Weller",
            url: "https://jedidiahweller.com/speaking/",
            about: { "@id": "https://jedidiahweller.com/#person" },
          }),
        }}
      />
    </main>
  );
}
