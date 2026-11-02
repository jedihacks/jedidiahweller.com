declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    jediGaId?: string;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}
export function analyticsAllowed() {
  try {
    return (
      localStorage.getItem("jedi-usage-counts") === "yes" &&
      navigator.doNotTrack !== "1" &&
      !(navigator as Navigator & { globalPrivacyControl?: boolean })
        .globalPrivacyControl
    );
  } catch {
    return false;
  }
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
  if (w.gtag) return;
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
