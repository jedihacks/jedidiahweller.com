import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange">{children}</p>;
}

export function ButtonLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={secondary ? "button button-secondary" : "button"} href={href}>{children}<span aria-hidden="true">→</span></Link>;
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return <div className="max-w-3xl"><>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}</><h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-ink sm:text-5xl">{title}</h2>{children && <div className="mt-5 text-lg leading-8 text-ink/75">{children}</div>}</div>;
}
