export const engagementTypes = [
  "Speaking engagement",
  "Workshop",
  "Collaboration",
  "Other",
] as const;
export function parseInquiry(raw: unknown) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw))
    throw new Error("Please check the form and try again.");
  const data = raw as Record<string, unknown>;
  const field = (key: string, max: number, required = false) => {
    const value = typeof data[key] === "string" ? data[key].trim() : "";
    if (value.length > max || (required && !value))
      throw new Error(`Please check ${key}.`);
    return value;
  };
  const name = field("name", 120, true),
    email = field("email", 254, true),
    message = field("message", 6000, true);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email))
    throw new Error("Please enter a valid email address.");
  const kind = field("kind", 80);
  if (kind && !engagementTypes.some((value) => value === kind))
    throw new Error("Please select an engagement type.");
  const eventDate = field("eventDate", 10);
  if (eventDate && !/^\d{4}-\d{2}-\d{2}$/.test(eventDate))
    throw new Error("Please check the event date.");
  return {
    name,
    email,
    message,
    kind,
    organization: field("organization", 200),
    eventDate,
    audience: field("audience", 300),
    website: field("website", 200),
  };
}
export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return origin !== null && origin === new URL(request.url).origin;
}
