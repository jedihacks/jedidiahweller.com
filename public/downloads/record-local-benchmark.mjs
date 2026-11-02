/** Node >=22. Local sequential smoke-test recorder; manual acceptance required. */
import { readFile, open } from "node:fs/promises";
const [input, output] = process.argv.slice(2);
if (!input || !output) throw new Error("Usage: node record-local-benchmark.mjs tasks.jsonl results.jsonl");
const url = new URL(process.env.LOCAL_LLM_URL || "http://127.0.0.1:11434/v1/chat/completions");
if (!["localhost", "127.0.0.1", "[::1]"].includes(url.hostname) || !["http:", "https:"].includes(url.protocol) || url.username || url.password) throw new Error("Use a loopback HTTP endpoint without URL credentials.");
const model = process.env.LOCAL_LLM_MODEL;
if (!model) throw new Error("Set LOCAL_LLM_MODEL to the installed model identifier.");
const tasks = (await readFile(input, "utf8")).split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
if (!tasks.length || tasks.some(t => typeof t.id !== "string" || typeof t.prompt !== "string")) throw new Error("Each task needs string id and prompt fields.");
const file = await open(output, "wx");
try {
  for (const task of tasks) {
    const start = performance.now();
    const record = { id: task.id, model, endpoint: url.origin + url.pathname, timestamp: new Date().toISOString(), streaming: false, concurrency: 1, accepted: null, repairMinutes: null };
    try {
      const response = await fetch(url, { method: "POST", redirect: "error", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model, messages: [{ role: "user", content: task.prompt }], stream: false, temperature: 0 }), signal: AbortSignal.timeout(180000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      Object.assign(record, { completionMs: performance.now() - start, usage: result.usage ?? null, output: result.choices?.[0]?.message?.content ?? null, error: null });
    } catch (error) { Object.assign(record, { completionMs: performance.now() - start, error: String(error) }); }
    await file.write(JSON.stringify(record) + "\n");
  }
} finally { await file.close(); }
console.log(`Recorded ${tasks.length} attempts. Review outputs and fill accepted/repairMinutes. This is not a capacity or power benchmark.`);
