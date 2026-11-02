export async function database() {
  const { env } = await import("cloudflare:workers");
  if (!env.DB) throw new Error("Database is unavailable");
  return env.DB;
}
