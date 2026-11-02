"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  analyticsAllowed,
  startAnalytics,
  sendAnalyticsEvent,
  stopAnalytics,
} from "@/lib/google-analytics";
import { metricEvents } from "@/lib/measurement";
const key = "jedi-usage-counts";
export function trackEvent(event: (typeof metricEvents)[number]) {
  if (!analyticsAllowed() || window.location.pathname.startsWith("/admin"))
    return;
  sendAnalyticsEvent(event);
  const path = window.location.pathname.replace(/\/*$/, "/");
  void fetch("/api/metrics/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, path }),
    keepalive: true,
  }).catch(() => {});
}
export function Measurement({
  settings = false,
  googleId = "",
}: {
  settings?: boolean;
  googleId?: string;
}) {
  const [choice, setChoice] = useState<string | null>("loading");
  const path = usePathname();
  useEffect(() => {
    try {
      setChoice(localStorage.getItem(key));
    } catch {
      setChoice("no");
    }
  }, []);
  useEffect(() => {
    if (settings) return;
    if (path.startsWith("/admin")) {
      stopAnalytics();
      return;
    }
    startAnalytics(googleId);
    trackEvent("page_view");
  }, [path, settings, googleId]);
  useEffect(() => {
    if (settings) return;
    const click = (e: MouseEvent) => {
      const link = (e.target as Element)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("/contact")) trackEvent("contact_click");
      if (href.includes("speaker-kit.pdf")) trackEvent("speaker_kit_download");
    };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [settings]);
  function choose(value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* Counts stay off if storage is unavailable. */
    }
    setChoice(value);
    if (value === "yes") {
      startAnalytics(
        googleId ||
          (document
            .querySelector("[data-google-analytics]")
            ?.getAttribute("data-google-analytics") ??
            ""),
      );
      trackEvent("page_view");
    } else {
      stopAnalytics();
    }
  }
  if (!settings && choice !== null) return null;
  return (
    <aside
      data-google-analytics={googleId || undefined}
      className={settings ? "measurement-settings" : "measurement-notice"}
      aria-label="Analytics preferences"
    >
      <p>
        <strong>Help improve this site?</strong> Allow Google Analytics and
        aggregate site counts to help improve the content and tools. Google
        Analytics uses cookies. Calculator values, inquiry fields, and query
        strings are excluded.
      </p>
      <div>
        <button type="button" onClick={() => choose("no")}>
          Decline{settings && choice === "no" ? " · selected" : ""}
        </button>
        <button type="button" onClick={() => choose("yes")}>
          Allow analytics{settings && choice === "yes" ? " · selected" : ""}
        </button>
        <a href="/measurement/">Details & preferences</a>
      </div>
      {settings && (
        <p role="status">
          {choice === "yes"
            ? "Analytics allowed on this browser. Global Privacy Control and Do Not Track override this preference."
            : "Optional analytics is off."}
        </p>
      )}
    </aside>
  );
}
