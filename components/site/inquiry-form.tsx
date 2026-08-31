"use client";

import { useState, type FormEvent } from "react";

const fallbackEmail = "hello@openforge.io";

export function InquiryForm() {
  const [message, setMessage] = useState<string | null>(null);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = ["Name", "Email", "Organization", "Engagement type", "Event date", "Audience", "Message"].map((label) => `${label}: ${data.get(label) || "Not provided"}`);
    window.location.href = `mailto:${fallbackEmail}?subject=${encodeURIComponent("Speaking or collaboration inquiry for Jedidiah Weller")}&body=${encodeURIComponent(lines.join("\n"))}`;
    setMessage("Your email app should open with your inquiry. If it does not, email hello@openforge.io directly.");
  }
  return <form className="grid gap-5" onSubmit={prepareEmail}><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" required /><Field label="Email" type="email" required /><Field label="Organization" /><label className="field-label">Engagement type<select name="Engagement type" defaultValue=""><option value="" disabled>Select one</option><option>Speaking engagement</option><option>Collaboration</option><option>Other</option></select></label><Field label="Event date" type="date" /><Field label="Audience" /></div><label className="field-label">Message<textarea name="Message" required rows={5} /></label><p className="text-sm leading-6 text-ink/70">Submitting opens your email app addressed to OpenForge. Please do not include sensitive information.</p><button className="button w-fit" type="submit">Prepare inquiry email <span aria-hidden="true">→</span></button>{message && <p className="rounded-lg bg-teal/15 p-4 text-sm font-bold text-ink" role="status">{message}</p>}</form>;
}

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) { return <label className="field-label">{label}<input name={label} type={type} required={required} /></label>; }
