import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { fieldNotes } from "@/lib/field-notes";
import { aiCostArticle } from "@/lib/blog";
import { routeContent } from "@/lib/site-content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...fieldNotes.map((p) => ({
      url: `${siteUrl}/blog/${p.slug}/`,
      lastModified: "2026-11-02",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${siteUrl}/measurement/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...Object.values(routeContent).map((page, index) => ({
      url: `${siteUrl}${page.route}`,
      changeFrequency: "yearly" as const,
      priority: index === 0 ? 1 : 0.7,
    })),
    { url: `${siteUrl}/blog/`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${siteUrl}${aiCostArticle.path}`,
      lastModified: aiCostArticle.published,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
