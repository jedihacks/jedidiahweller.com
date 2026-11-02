"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  analyticsAllowed,
  startAnalytics,
  sendAnalyticsEvent,
  stopAnalytics,
  setAnalyticsPreference,
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
  const [enabled, setEnabled] = useState<boolean | null>(null);
  useEffect(() => {
    const sync = () => {
      try {
        setChoice(window.jediAnalyticsChoice ?? localStorage.getItem(key));
      } catch {
        setChoice("no");
      }
      const allowed = analyticsAllowed();
      setEnabled(allowed);
      if (!allowed) stopAnalytics();
    };
    const storage = (event: StorageEvent) => {
      if (event.key !== key && event.key !== null) return;
      window.jediAnalyticsChoice = null;
      sync();
      if (!settings && analyticsAllowed()) {
        startAnalytics(googleId);
        trackEvent("page_view");
      }
    };
    sync();
    window.addEventListener("storage", storage);
    window.addEventListener("jedi-analytics-preference", sync);
    return () => {
      window.removeEventListener("storage", storage);
      window.removeEventListener("jedi-analytics-preference", sync);
    };
  }, [settings, googleId]);
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
  function choose(value: "yes" | "no") {
    setAnalyticsPreference(value);
    setChoice(value);
    setEnabled(analyticsAllowed());
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
  if (!settings && (choice !== null || enabled !== true)) return null;
  return (
    <aside
      data-google-analytics={googleId || undefined}
      className={settings ? "measurement-settings" : "measurement-notice"}
      aria-label="Analytics preferences"
    >
      <p>
        <strong>Analytics preferences</strong> Google Analytics and aggregate
        site counts run by default to help improve the content and tools. You
        can opt out at any time. Google Analytics uses cookies; calculator
        values, inquiry fields, and query strings are excluded.
      </p>
      <div>
        <button type="button" onClick={() => choose("no")}>
          Opt out{settings && enabled === false ? " · selected" : ""}
        </button>
        <button type="button" onClick={() => choose("yes")}>
          Keep analytics on{settings && enabled === true ? " · selected" : ""}
        </button>
        <a href="/measurement/">Details & preferences</a>
      </div>
      {settings && (
        <p role="status">
          {enabled === null
            ? "Loading your preference…"
            : enabled
              ? "Analytics is on. You can opt out at any time. Do Not Track and Global Privacy Control override this preference."
              : "Analytics is off on this browser. Saved opt-outs and browser privacy signals are respected."}
        </p>
      )}
    </aside>
  );
}
