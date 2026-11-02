import { database } from "@/lib/site-data";
import { sameOrigin } from "@/lib/inquiries";
import { validMetric } from "@/lib/measurement";
export async function POST(request: Request) {
  if (!sameOrigin(request)) return new Response(null, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json"))
    return new Response(null, { status: 415 });
  // Never accept financial inputs or arbitrary paths/labels in this endpoint.
  if (Number(request.headers.get("content-length")) > 500)
    return new Response(null, { status: 413 });
  const reader = request.body?.getReader();
  if (!reader) return new Response(null, { status: 400 });
  let body = "",
    size = 0;
  const decoder = new TextDecoder();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 500) {
      await reader.cancel();
      return new Response(null, { status: 413 });
    }
    body += decoder.decode(value, { stream: true });
  }
  try {
    const value: unknown = JSON.parse(body);
    if (!validMetric(value)) return new Response(null, { status: 400 });
    const db = await database();
    await db
      .prepare(
        "INSERT INTO daily_metrics (day,path,event,count) VALUES (?,?,?,1) ON CONFLICT(day,path,event) DO UPDATE SET count=count+1",
      )
      .bind(new Date().toISOString().slice(0, 10), value.path, value.event)
      .run();
    return new Response(null, {
      status: 204,
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return new Response(null, { status: 503 });
  }
}
