"use client";
import { useState } from "react";

export function VideoEmbed({ title = "Jedidiah Weller featured video" }: { title?: string }) {
  const [playing, setPlaying] = useState(false);
  if (playing) return <div className="aspect-video overflow-hidden rounded-2xl bg-charcoal shadow-xl"><iframe className="h-full w-full" title={title} src="https://www.youtube-nocookie.com/embed/B-fJWnt29nc?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div>;
  return <div className="relative aspect-video overflow-hidden rounded-2xl bg-charcoal shadow-xl"><img src="/media/speaking-stage.webp" width="1200" height="684" alt="" loading="lazy" className="h-full w-full object-cover opacity-75" /><button type="button" onClick={() => setPlaying(true)} className="absolute inset-0 grid place-items-center text-center text-white"><span className="rounded-full bg-orange px-6 py-3 font-black text-charcoal">Play talk <span aria-hidden="true">▶</span></span><span className="sr-only">Loads a YouTube video</span></button></div>;
}
