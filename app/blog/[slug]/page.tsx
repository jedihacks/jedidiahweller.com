import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/site";
import { fieldNotes } from "@/lib/field-notes";
import { jsonLd, pageMetadata, siteUrl } from "@/lib/seo";
export function generateStaticParams() {
  return fieldNotes.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = fieldNotes.find((p) => p.slug === slug);
  if (!note) return {};
  return pageMetadata(
    `${note.title} | Jedidiah Weller`,
    note.description,
    `/blog/${slug}/`,
  );
}
export default async function FieldNotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = fieldNotes.find((p) => p.slug === slug);
  if (!note) notFound();
  return (
    <main id="main-content" className="blog-article">
      <header className="article-hero">
        <Container>
          <Link href="/blog/" className="article-back">
            ← All field notes
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="blog-kicker">AI ECONOMICS / PRACTICAL METHODS</p>
            <h1>{note.title}</h1>
            <p className="article-deck">{note.description}</p>
            <p className="mt-6 text-sm text-ink/65">
              <Link className="underline" href="/about/">
                Jedidiah Weller
              </Link>{" "}
              · <time dateTime="2026-11-02">November 2, 2026</time> ·{" "}
              {note.minutes}
            </p>
          </div>
        </Container>
      </header>
      <Container>
        <article className="article-prose mx-auto py-8">
          {note.sections.map((section, i) => (
            <section key={section.title}>
              <p className="section-index">0{i + 1} / FIELD NOTES</p>
              <h2>{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section>
            <h2>Sources & next steps</h2>
            <ul className="source-list">
              {note.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href}>{s.title}</a>
                </li>
              ))}
            </ul>
            <p className="source-date">
              Published November 2, 2026. Worked examples are hypothetical;
              benchmark methods describe measurements to perform.
            </p>
          </section>
          <section className="article-formula">
            <p className="blog-kicker">MAKE THE ECONOMICS VISIBLE</p>
            <h2>Run your own assumptions.</h2>
            <p>
              <Link href="/blog/ai-llm-cost-comparison/#calculator">
                Compare API, rented GPUs, and owned hardware →
              </Link>
            </p>
            <p>
              <Link href="/contact/">Discuss a session for your team →</Link>
            </p>
          </section>
        </article>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: note.title,
            description: note.description,
            datePublished: "2026-11-02",
            dateModified: "2026-11-02",
            mainEntityOfPage: `${siteUrl}/blog/${note.slug}/`,
            author: { "@id": `${siteUrl}/#person` },
            image: `${siteUrl}/media/og-jedidiah-weller-v2.webp`,
          }),
        }}
      />
    </main>
  );
}
