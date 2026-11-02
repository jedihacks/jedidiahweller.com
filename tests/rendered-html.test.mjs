import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import test from "node:test";

async function worker() {
  const url = new URL("../dist/server/index.js", import.meta.url);
  url.searchParams.set("test", `${Date.now()}-${Math.random()}`);
  return (await import(url.href)).default;
}

async function render(path) {
  const app = await worker();
  return app.fetch(new Request(new URL(path, "https://jedidiahweller.com"), { headers: { accept: "text/html" }, redirect: "manual" }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

const pages = [
  ["/", "Jedidiah Weller — Founder, Speaker, Maker"],
  ["/speaking/", "Speaking — Jedidiah Weller"],
  ["/about/", "About Jedidiah Weller"],
  ["/ventures/", "Ventures — OpenForge, Startup Wars, and Summon Worlds"],
  ["/ventures/summon-worlds/", "Summon Worlds — A Jedidiah Weller Venture"],
  ["/contact/", "Contact Jedidiah Weller — Book an Engagement"],
  ["/blog/", "Blog — AI, Product &amp; Building | Jedidiah Weller"],
  ["/blog/ai-llm-cost-comparison/", "LLM Cost Calculator: API vs Local AI &amp; GPU Hosting | Jedi Weller"],
  ["/privacy/", "Privacy — Jedidiah Weller"],
];

test("canonical pages render one H1 with canonical metadata", async () => {
  for (const [path, title] of pages) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.equal([...html.matchAll(/<h1\b/gi)].length, 1, `${path} needs one H1`);
    assert.match(html, new RegExp(`<title>${title.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")}<\\/title>`, "i"));
    assert.match(html, new RegExp(`rel="canonical" href="https://jedidiahweller\\.com${path}"`, "i"));
    assert.match(html, /application\/ld\+json/i);
  }
});

test("unknown pages are a real noindex 404 and legacy profile redirects", async () => {
  const missing = await render("/not-a-real-page/");
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /This page is not available/i);
  const redirected = await render("/profile/jedi/");
  assert.ok([301, 308].includes(redirected.status));
  assert.match(redirected.headers.get("location") || "", /\/about\/$/);
});

test("public pages do not eagerly embed YouTube or publish incomplete VideoObject schema", async () => {
  const html = await (await render("/")).text();
  assert.doesNotMatch(html, /youtube(?:-nocookie)?\.com\/embed/i);
  assert.doesNotMatch(html, /"@type":"VideoObject"/i);
  assert.match(html, /Play talk/i);
  assert.match(html, /Who is Jedidiah Weller\?/i);
});

test("robots, sitemap, and optimized local media are production ready", async () => {
  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/jedidiahweller\.com\/sitemap\.xml/i);

  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const sitemapXml = await sitemap.text();
  for (const [path] of pages) {
    assert.match(sitemapXml, new RegExp(`https://jedidiahweller\\.com${path}`));
  }

  const media = await readdir(new URL("../public/media/", import.meta.url));
  const rasterMedia = media.filter((file) => /\.(?:avif|gif|jpe?g|png|webp)$/i.test(file));
  assert.ok(rasterMedia.length > 0);
  assert.deepEqual(rasterMedia.filter((file) => !file.endsWith(".webp")), []);
});


test("AI essay renders indexable content, formulas, canonical sharing, and author schema", async () => {
  const html = await (await render("/blog/ai-llm-cost-comparison/?costs=invalid")).text();
  assert.match(html, /id="calculator"/);
  assert.match(html, /id="methodology"/);
  assert.match(html, /BlogPosting/);
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /204,000/);
  assert.match(html, /360,000/);
  assert.match(html, /rel="canonical" href="https:\/\/jedidiahweller\.com\/blog\/ai-llm-cost-comparison\/"/);
  assert.match(html, /lambda.ai\/pricing/);
  assert.match(html, /Copy scenario link/);
});
