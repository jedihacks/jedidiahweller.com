"use client";
import { useState, type FormEvent } from "react";
import { engagementTypes } from "@/lib/inquiries";
import { trackEvent } from "./measurement";
export function InquiryForm() {
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(
    null,
  );
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget,
      data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    setBusy(true);
    setStatus(null);
    try {
      const response = await fetch("/api/inquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        error?: string;
        message?: string;
        id?: string;
      };
      if (!response.ok || !result.id)
        throw new Error(
          result.error || "We could not save your inquiry. Please try again.",
        );
      setStatus({
        ok: true,
        text: `${result.message} Reference: ${result.id}`,
      });
      form.reset();
      trackEvent("inquiry_received");
    } catch (error) {
      setStatus({
        ok: false,
        text:
          error instanceof Error
            ? error.message
            : "Unable to connect. Please try again or email hello@openforge.io.",
      });
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="grid gap-5" onSubmit={submit} aria-busy={busy}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Name" autoComplete="name" required />
        <Field
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          name="organization"
          label="Organization"
          autoComplete="organization"
        />
        <label className="field-label">
          Engagement type
          <select name="kind" defaultValue="">
            <option value="">Select one</option>
            {engagementTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <Field name="eventDate" label="Event date" type="date" />
        <Field name="audience" label="Audience & location or time zone" />
      </div>
      <div className="inquiry-trap" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="field-label">
        What would you like the audience or team to take away?
        <textarea name="message" required maxLength={6000} rows={5} />
      </label>
      <p className="text-sm leading-6 text-ink/70">
        Your details are saved to a private inquiry inbox so Jedi can respond.{" "}
        <a href="/privacy/" className="underline">
          How your information is used
        </a>
        .
      </p>
      <button
        className="button w-fit disabled:opacity-60"
        type="submit"
        disabled={busy}
      >
        {busy ? "Sending…" : "Send inquiry"}
        <span aria-hidden="true">→</span>
      </button>
      {status && (
        <p
          className={`rounded-lg p-4 text-sm font-bold ${status.ok ? "bg-teal/15" : "bg-orange/15"}`}
          role={status.ok ? "status" : "alert"}
        >
          {status.text}
        </p>
      )}
      <p className="text-sm leading-6 text-ink/70">
        Prefer email?{" "}
        <a href="mailto:hello@openforge.io" className="underline">
          hello@openforge.io
        </a>
      </p>
      <noscript>
        <p>
          Use <a href="mailto:hello@openforge.io">hello@openforge.io</a> to send
          an inquiry when JavaScript is disabled.
        </p>
      </noscript>
    </form>
  );
}
function Field({
  name,
  label,
  type = "text",
  required = false,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="field-label">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={type === "email" ? 254 : 300}
      />
    </label>
  );
}
