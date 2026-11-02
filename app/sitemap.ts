import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { aiCostArticle } from "@/lib/blog";
import { routeContent } from "@/lib/site-content";
export default function sitemap(): MetadataRoute.Sitemap { return [...Object.values(routeContent).map((page, index) => ({ url: `${siteUrl}${page.route}`, changeFrequency: "yearly" as const, priority: index === 0 ? 1 : 0.7 })), { url: `${siteUrl}/blog/`, changeFrequency: "monthly", priority: 0.8 }, { url: `${siteUrl}${aiCostArticle.path}`, lastModified: aiCostArticle.published, changeFrequency: "monthly", priority: 0.8 }]; }
