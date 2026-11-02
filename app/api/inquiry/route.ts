import { notifyInquiry } from "@/lib/sendgrid";
import { database } from "@/lib/site-data";
import { parseInquiry, sameOrigin } from "@/lib/inquiries";
export async function POST(request: Request) {
  const reply = (body: unknown, status: number) =>
    Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
  if (!sameOrigin(request))
    return reply({ error: "Please submit the form from this website." }, 403);
  if (!request.headers.get("content-type")?.includes("application/json"))
    return reply({ error: "Unsupported request format." }, 415);
  // Bound the body before parsing; never log inquiry content.
  const reader = request.body?.getReader();
  if (!reader) return reply({ error: "Please complete the form." }, 400);
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 24000) {
      await reader.cancel();
      return reply({ error: "Your message is too long." }, 413);
    }
    chunks.push(value);
  }
  let inquiry;
  try {
    const body = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      body.set(chunk, offset);
      offset += chunk.length;
    }
    inquiry = parseInquiry(JSON.parse(new TextDecoder().decode(body)));
  } catch (error) {
    return reply(
      {
        error:
          error instanceof Error && !(error instanceof SyntaxError)
            ? error.message
            : "Please check the form.",
      },
      400,
    );
  }
  if (inquiry.website)
    return reply(
      {
        error:
          "Unable to accept this inquiry. Please email hello@openforge.io.",
      },
      400,
    );
  try {
    const db = await database();
    const ip = request.headers.get("cf-connecting-ip");
    if (!ip)
      return reply(
        {
          error:
            "Unable to verify this request. Please email hello@openforge.io.",
        },
        503,
      );
    const hour = Math.floor(Date.now() / 3600000);
    const digest = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(`${hour}:${ip}`),
    );
    const key = Array.from(new Uint8Array(digest), (v) =>
      v.toString(16).padStart(2, "0"),
    ).join("");
    const now = Math.floor(Date.now() / 1000);
    const rate = await db
      .prepare(
        "INSERT INTO request_limits (key,count,expires) VALUES (?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count",
      )
      .bind(key, now + 7200)
      .first<{ count: number }>();
    if (!rate || rate.count > 5)
      return reply(
        {
          error:
            "Too many inquiries. Please try later or email hello@openforge.io.",
        },
        429,
      );
    const id = crypto.randomUUID();
    await db.batch([
      db
        .prepare(
          "INSERT INTO inquiries (id,created_at,name,email,organization,kind,event_date,audience,message) VALUES (?,?,?,?,?,?,?,?,?)",
        )
        .bind(
          id,
          new Date().toISOString(),
          inquiry.name,
          inquiry.email,
          inquiry.organization,
          inquiry.kind,
          inquiry.eventDate,
          inquiry.audience,
          inquiry.message,
        ),
      db.prepare("DELETE FROM request_limits WHERE expires < ?").bind(now),
    ]);
    const notification = await notifyInquiry(id, inquiry, {
      apiKey: process.env.SENDGRID_API_KEY,
      from: process.env.INQUIRY_FROM_EMAIL,
      to: process.env.INQUIRY_TO_EMAIL,
    });
    try {
      await db
        .prepare("UPDATE inquiries SET notification_status=? WHERE id=?")
        .bind(notification, id)
        .run();
    } catch {
      console.warn("Inquiry notification status update failed");
    }
    return reply(
      {
        id,
        message:
          "Your inquiry has been received. Keep this reference for your records.",
      },
      201,
    );
  } catch {
    return reply(
      {
        error:
          "We could not save your inquiry. Your message has not been sent. Please try again or email hello@openforge.io.",
      },
      503,
    );
  }
}
