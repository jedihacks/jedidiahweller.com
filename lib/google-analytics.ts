declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    jediGaId?: string;
    jediAnalyticsChoice?: "yes" | "no" | null;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}
export function analyticsAllowed() {
  try {
    return (
      (window.jediAnalyticsChoice ??
        localStorage.getItem("jedi-usage-counts")) !== "no" &&
      navigator.doNotTrack !== "1" &&
      !(navigator as Navigator & { globalPrivacyControl?: boolean })
        .globalPrivacyControl
    );
  } catch {
    return false;
  }
}
export function setAnalyticsPreference(value: "yes" | "no") {
  window.jediAnalyticsChoice = value;
  try {
    localStorage.setItem("jedi-usage-counts", value);
  } catch {
    /* Keep the choice for this page if browser storage is unavailable. */
  }
  window.dispatchEvent(new Event("jedi-analytics-preference"));
}
function referrerOrigin() {
  try {
    const ref = new URL(document.referrer);
    return ref.origin === location.origin ? "" : `${ref.origin}/`;
  } catch {
    return "";
  }
}
export function startAnalytics(id: string) {
  if (
    !/^G-[A-Z0-9]+$/.test(id) ||
    !analyticsAllowed() ||
    window.location.pathname.startsWith("/admin")
  )
    return;
  const w = window;
  w.jediGaId = id;
  w[`ga-disable-${id}`] = false;
  if (w.gtag) {
    w.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    return;
  }
  w.dataLayer = w.dataLayer || [];
  w.gtag = function (..._args: unknown[]) {
    w.dataLayer!.push(arguments);
  };
  w.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  w.gtag("js", new Date());
  w.gtag("config", id, {
    send_page_view: false,
    page_location: location.origin + location.pathname,
    page_referrer: referrerOrigin(),
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}
export function sendAnalyticsEvent(event: string) {
  if (!analyticsAllowed() || window.location.pathname.startsWith("/admin"))
    return;
  const w = window;
  w.gtag?.("event", event === "inquiry_received" ? "generate_lead" : event, {
    send_to: w.jediGaId,
    page_location: location.origin + location.pathname,
    page_path: location.pathname,
    page_referrer: referrerOrigin(),
  });
}
export function stopAnalytics() {
  const w = window;
  if (w.jediGaId) w[`ga-disable-${w.jediGaId}`] = true;
  w.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!/^_ga(?:_|$)/.test(name)) continue;
    for (const domain of [
      "",
      `;domain=${location.hostname}`,
      `;domain=.${location.hostname}`,
    ])
      document.cookie = `${name}=;Max-Age=0;path=/${domain};SameSite=Lax`;
  }
}
