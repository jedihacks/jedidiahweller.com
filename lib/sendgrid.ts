export type InquiryNotification = {
  name: string;
  email: string;
  message: string;
  organization: string;
  kind: string;
  eventDate: string;
  audience: string;
};
export async function notifyInquiry(
  id: string,
  inquiry: InquiryNotification,
  config: { apiKey?: string; from?: string; to?: string },
  transport: typeof fetch = fetch,
): Promise<"not_configured" | "accepted" | "failed"> {
  if (!config.apiKey || !config.from || !config.to) return "not_configured";
  const text = [
    `Inquiry ${id}`,
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Organization: ${inquiry.organization}`,
    `Type: ${inquiry.kind}`,
    `Date: ${inquiry.eventDate}`,
    `Audience: ${inquiry.audience}`,
    "",
    inquiry.message,
    "",
    "Private inbox: https://jedidiahweller.com/admin/",
  ].join("\n");
  try {
    const response = await transport("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: config.to }] }],
        from: { email: config.from, name: "Jedidiah Weller Website" },
        reply_to: { email: inquiry.email, name: inquiry.name },
        subject: `Website inquiry: ${inquiry.kind || "Speaking or collaboration"}`,
        content: [{ type: "text/plain", value: text }],
        tracking_settings: {
          click_tracking: { enable: false, enable_text: false },
          open_tracking: { enable: false },
        },
      }),
      signal: AbortSignal.timeout(10000),
    });
    return response.status === 202 ? "accepted" : "failed";
  } catch {
    return "failed";
  }
}
