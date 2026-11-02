import { Container } from "@/components/site";
import { getChatGPTUser, chatGPTSignInPath } from "@/app/chatgpt-auth";
import { database } from "@/lib/site-data";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Private Site Inbox",
  robots: { index: false, follow: false },
};
export default async function AdminPage() {
  const user = await getChatGPTUser();
  if (!user)
    return (
      <main id="main-content">
        <Container className="py-20">
          <h1 className="text-3xl font-black">Private site inbox</h1>
          <p className="mt-5">
            Sign in with the site owner’s ChatGPT account to view inquiries and
            aggregate usage.
          </p>
          <a
            className="button mt-6"
            href={chatGPTSignInPath("/admin/")}
            target="_top"
          >
            Sign in with ChatGPT
          </a>
        </Container>
      </main>
    );
  const owner = process.env.SITE_OWNER_EMAIL;
  if (!owner || user.email.toLowerCase() !== owner.toLowerCase())
    return (
      <main id="main-content">
        <Container className="py-20">
          <h1 className="text-3xl font-black">Owner access required</h1>
          <p className="mt-5">This account cannot view the inbox.</p>
        </Container>
      </main>
    );
  try {
    const db = await database();
    const inquiries = await db
      .prepare(
        "SELECT id,created_at,name,email,organization,kind,event_date,audience,message,notification_status FROM inquiries ORDER BY created_at DESC LIMIT 100",
      )
      .all<{
        id: string;
        created_at: string;
        name: string;
        email: string;
        organization: string;
        kind: string;
        event_date: string;
        audience: string;
        message: string;
        notification_status: string;
      }>();
    const counts = await db
      .prepare(
        "SELECT day,path,event,count FROM daily_metrics WHERE day >= date('now','-28 days') ORDER BY day DESC,path,event LIMIT 1000",
      )
      .all<{ day: string; path: string; event: string; count: number }>();
    return (
      <main id="main-content">
        <Container className="py-14">
          <p className="blog-kicker">OWNER WORKSPACE</p>
          <h1 className="mt-3 text-4xl font-black">
            Inquiries & site measurement
          </h1>
          <p className="mt-4 leading-7">
            Latest 100 inquiries. Reply from your email application. Aggregate
            usage covers the last 28 days and excludes visitors who opt out or
            send browser privacy signals; counters may include repeated or
            automated interactions.
          </p>
          <h2 className="mt-12 text-2xl font-bold">Inquiry inbox</h2>
          {inquiries.results.length === 0 && (
            <p className="mt-5">No inquiries yet.</p>
          )}
          <div className="mt-6 grid gap-5">
            {inquiries.results.map((i) => (
              <article
                key={i.id}
                className="rounded-lg border border-ink/20 p-6"
              >
                <h3 className="text-xl font-bold">
                  {i.name} · {i.kind || "Inquiry"}
                </h3>
                <p className="mt-2 text-sm">
                  {i.created_at} · Reference {i.id}
                </p>
                <p className="mt-3">
                  <a className="underline" href={`mailto:${i.email}`}>
                    {i.email}
                  </a>{" "}
                  · {i.organization}
                </p>
                <p className="mt-2 text-sm">
                  SendGrid notification: {i.notification_status} (accepted means
                  queued by the provider)
                </p>
                <p className="mt-2">
                  {i.event_date} · {i.audience}
                </p>
                <p className="mt-4 whitespace-pre-wrap leading-7">
                  {i.message}
                </p>
              </article>
            ))}
          </div>
          <h2 className="mt-12 text-2xl font-bold">
            Anonymous daily interaction counts
          </h2>
          <div className="table-scroll mt-5">
            <table>
              <thead>
                <tr>
                  <th>UTC day</th>
                  <th>Page</th>
                  <th>Action</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {counts.results.map((r) => (
                  <tr key={`${r.day}-${r.path}-${r.event}`}>
                    <td>{r.day}</td>
                    <td>{r.path}</td>
                    <td>{r.event}</td>
                    <td>{r.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm">
            Search Console impressions, query positions, and qualified-lead
            classification are separate from these counts.
          </p>
        </Container>
      </main>
    );
  } catch {
    return (
      <main id="main-content">
        <Container className="py-20">
          <h1 className="text-3xl font-black">Inbox temporarily unavailable</h1>
          <p className="mt-5">Please try again shortly.</p>
        </Container>
      </main>
    );
  }
}
