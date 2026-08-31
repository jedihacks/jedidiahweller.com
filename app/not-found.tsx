import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/site";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };
export default function NotFound() { return <main id="main-content"><section className="bg-cream py-28"><Container><p className="text-sm font-bold uppercase tracking-[.18em] text-orange">404</p><h1 className="mt-4 max-w-2xl text-5xl font-black tracking-[-.06em] text-ink sm:text-7xl">This page is not available.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-ink/75">The link may have changed or the page may have been retired.</p><ButtonLink href="/">Return home</ButtonLink></Container></section></main>; }
