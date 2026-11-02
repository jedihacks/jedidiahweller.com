export const metricEvents = [
  "page_view",
  "calculator_edit",
  "scenario_share",
  "calculator_export",
  "contact_click",
  "inquiry_received",
  "speaker_kit_download",
] as const;
export const metricPaths = [
  "/",
  "/about/",
  "/speaking/",
  "/contact/",
  "/ventures/",
  "/ventures/summon-worlds/",
  "/privacy/",
  "/blog/",
  "/blog/ai-llm-cost-comparison/",
  "/blog/reduce-llm-inference-costs/",
  "/blog/cost-per-successful-ai-task/",
  "/blog/local-llm-benchmark-method/",
  "/measurement/",
];
export function validMetric(
  value: unknown,
): value is { event: (typeof metricEvents)[number]; path: string } {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    metricEvents.some((e) => e === v.event) &&
    typeof v.path === "string" &&
    metricPaths.includes(v.path) &&
    Object.keys(v).every((k) => ["event", "path"].includes(k))
  );
}
