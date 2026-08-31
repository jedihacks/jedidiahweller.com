import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { routeContent } from "@/lib/site-content";
export default function sitemap(): MetadataRoute.Sitemap { return Object.values(routeContent).map((page, index) => ({ url: `${siteUrl}${page.route}`, changeFrequency: "yearly", priority: index === 0 ? 1 : 0.7 })); }
