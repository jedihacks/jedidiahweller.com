import type { Metadata } from "next";

export const siteUrl = "https://jedidiahweller.com";
export const siteName = "Jedidiah Weller";

export function canonical(path: string) {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
  return `${siteUrl}${normalized}`;
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = canonical(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName, title, description, url, images: [{ url: "/media/og-jedidiah-weller-v2.webp", width: 1200, height: 630, alt: "Jedidiah Weller" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/media/og-jedidiah-weller-v2.webp"] },
  };
}

export function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
}

export const sameAs = ["https://www.linkedin.com/in/jedidiahweller/", "https://x.com/jedihacks"];
