"use client";

import { useEffect, useState } from "react";
import { calculateCosts, defaultInputs, inputLimits, normalizeInputs, scenarios, type CostInputs } from "@/lib/ai-cost";

const money = (n: number, digits = 0) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: digits }).format(n);
const compact = (n: number) => new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(n);
type NumericKey = Exclude<keyof CostInputs, "apiMode">;

function NumberField({ name, label, inputs, onChange, hint, step = "any" }: { name: NumericKey; label: string; inputs: CostInputs; onChange: (key: NumericKey, value: number) => void; hint?: string; step?: string }) {
  return <label className="calc-field" htmlFor={`cost-${name}`}><span>{label}</span><input id={`cost-${name}`} type="number" inputMode="decimal" min={inputLimits[name][0]} max={inputLimits[name][1]} step={step} value={Number(inputs[name].toFixed(4))} onChange={e => onChange(name, e.target.value === "" ? 0 : Number(e.target.value))} />{hint && <small>{hint}</small>}</label>;
}

export function CostCalculator() {
  const [inputs, setInputs] = useState<CostInputs>(defaultInputs);
  const [scenario, setScenario] = useState("team");
  const [status, setStatus] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(36);
  useEffect(() => {
    try {
      const encoded = new URLSearchParams(window.location.search).get("costs");
      if (encoded && encoded.length < 12000) {
        const parsed: unknown = JSON.parse(encoded);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          const next = normalizeInputs(parsed as Partial<CostInputs>);
          setInputs(next); setSelectedMonth(next.months); setScenario("custom"); setStatus("Shared scenario loaded.");
        }
      }
    } catch { setStatus("That shared scenario could not be read. Showing the team example."); }
  }, []);
  const c = calculateCosts(inputs);
  function update(key: NumericKey, value: number) {
    setInputs(previous => normalizeInputs({ ...previous, [key]: value }));
    setScenario("custom"); setStatus("");
    if (key === "months") setSelectedMonth(Math.round(Math.min(120, Math.max(1, value))));
  }
  const field = (name: NumericKey, label: string, hint?: string, step?: string) => <NumberField name={name} label={label} inputs={inputs} onChange={update} hint={hint} step={step} />;
  const month = Math.min(inputs.months, selectedMonth);
  const point = c.series[month];
  const chartMax = Math.max(c.apiTotal, c.ownedTotal, c.rentedTotal, 1) * 1.08;
  const x = (m: number) => 76 + (m / inputs.months) * 650;
  const y = (v: number) => 260 - v / chartMax * 224;
  const path = (key: "api" | "owned" | "rented") => c.series.map(p => `${x(p.month)},${y(p[key])}`).join(" ");
  const compositionMax = Math.max(c.apiMonthly, c.ownedTotal / inputs.months, c.rentedMonthly, 1);
  const rows = [
    { label: "Managed API", segments: [{ value: c.apiMonthly, label: "API", color: "#386f70" }], total: c.apiMonthly },
    { label: "Owned + fallback", segments: [{ value: c.upfront / inputs.months, label: "Upfront / months", color: "#e8782e" }, { value: c.operations, label: "Operations", color: "#9b4e1d" }, { value: c.residual, label: "API fallback", color: "#386f70" }], total: c.ownedTotal / inputs.months },
    { label: "Rented + fallback", segments: [{ value: c.rentalCompute + inputs.rentalOps, label: "Rental + operations", color: "#77649e" }, { value: c.residual, label: "API fallback", color: "#386f70" }], total: c.rentedMonthly },
  ];
  async function share() {
    const url = new URL(window.location.href);
    url.search = ""; url.searchParams.set("costs", JSON.stringify(inputs)); url.hash = "calculator";
    window.history.replaceState(null, "", url);
    try { await navigator.clipboard.writeText(url.toString()); setStatus("Scenario link copied. Your assumptions are included in the URL."); }
    catch { setStatus("Scenario saved in the address bar. Copy this page’s URL to share it."); }
  }
  function download() {
    const lines = ["AI / LLM cost comparison — USD", "Model,Constant demand and prices; undiscounted cash flow; no tax or resale", "Assumption,Value", ...Object.entries(inputs).map(([key, value]) => `${key},${value}`), "", "Month,Managed API,Owned plus fallback,Rented plus fallback", ...c.series.map(p => `${p.month},${p.api.toFixed(2)},${p.owned.toFixed(2)},${p.rented.toFixed(2)}`)];
    const url = URL.createObjectURL(new Blob([lines.join("\r\n")], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "llm-cost-comparison.csv"; link.click(); URL.revokeObjectURL(url);
    setStatus("CSV downloaded with your assumptions and monthly cash flows.");
  }
  return <section id="calculator" className="cost-calculator" aria-labelledby="calculator-title">
    <div className="calc-heading"><div><p className="blog-kicker">THE DECISION LAB / 01</p><h2 id="calculator-title">LLM cost & ROI calculator</h2><p>Put your workload through the math. Every assumption is yours to change.</p></div><span className="calc-unit">USD · no sign-up</span></div>
    <div className="scenario-row" aria-label="Example scenarios">{scenarios.map(s => <button key={s.id} type="button" aria-pressed={scenario === s.id} onClick={() => { setInputs({ ...s.values }); setScenario(s.id); setSelectedMonth(s.values.months); setStatus(""); }}>{s.label}<span aria-hidden="true">↗</span></button>)}<button type="button" className="reset-scenario" onClick={() => { setInputs({ ...defaultInputs }); setScenario("team"); setSelectedMonth(36); setStatus("Reset to the team example."); window.history.replaceState(null, "", window.location.pathname + "#calculator"); }}>Reset</button></div>
    <p className="scenario-description">{scenarios.find(s => s.id === scenario)?.description ?? "Custom assumptions. All results update as you edit. These are planning scenarios, not performance benchmarks."}</p>
    <div className="calc-layout"><div className="calc-controls">
      <fieldset><legend>01 / Your API baseline</legend><label className="calc-field" htmlFor="api-mode"><span>Calculate from</span><select id="api-mode" value={inputs.apiMode} onChange={e => { setInputs(p => ({ ...p, apiMode: e.target.value as CostInputs["apiMode"] })); setScenario("custom"); }}><option value="bill">My monthly API bill</option><option value="tokens">Token usage & rates</option></select></label>
        {inputs.apiMode === "bill" ? field("monthlyBill", "API spend / month ($)", "Use metered API spend, not a consumer subscription.") : <><div className="calc-field-pair">{field("inputMillions", "Input M tokens / month")}{field("outputMillions", "Output M tokens / month")}{field("inputRate", "Input $ / M tokens")}{field("outputRate", "Output $ / M tokens")}{field("cachePercent", "Cached input (%)")}{field("cachedRate", "Cached input $ / M")}</div><p className="calc-note">Rates are illustrative, not a provider quote. Use effective rates from your invoice. Include retries and billed reasoning tokens; add cache-write, tool, or storage charges via bill mode.</p></>}
        {field("months", "Comparison period (months)", "1–120 months. No replacement purchases modeled.", "1")}
      </fieldset>
      <fieldset><legend>02 / Own the hardware</legend><div className="calc-field-pair">{field("hardware", "Hardware purchase ($)")}{field("setup", "One-time setup ($)")}</div>
        <label className="calc-field" htmlFor="replacement-range"><span>API spend replaced <strong>{inputs.replacementPercent}%</strong></span><input id="replacement-range" type="range" min="0" max="100" step="1" value={inputs.replacementPercent} onChange={e => update("replacementPercent", Number(e.target.value))} /><small>Share of baseline API dollars eliminated. The rest remains as fallback for both self-hosted options. This is not GPU utilization.</small></label>
        {field("otherMonthly", "Other operations / month ($)", "Hosting, cooling, support, storage; exclude power and labor entered below.")}
        <details className="calc-details"><summary>Power & operating labor</summary><div className="calc-field-pair">{field("powerWatts", "Average wall power (W)", "Include idle power; 0 if already in operations.")}{field("poweredHours", "Powered hours / month", "730 = 8,760 hours / year.")}{field("electricityRate", "Electricity $ / kWh")}{field("laborHours", "Ops hours / month")}{field("laborRate", "Labor $ / hour")}</div></details>
      </fieldset>
      <details className="calc-details calc-group"><summary>03 / Rent the GPUs</summary><div className="calc-field-pair">{field("gpuCount", "GPU count", undefined, "1")}{field("gpuRate", "$ / GPU-hour")}{field("rentalHours", "Billed hours / month")}{field("rentalOps", "Rental ops / month ($)", "Labor, storage, egress, and support.")}</div><p className="calc-note">Team default: 8 × H100 SXM at $3.99/GPU-hour from <a href="https://lambda.ai/pricing">Lambda</a>, checked Nov 2, 2026. Other presets use hypothetical rates. Billing follows allocation, not how busy the GPUs are. No rental setup fee modeled.</p></details>
      <details className="calc-details calc-group"><summary>04 / Cost per useful result</summary>{field("completedTasks", "Accepted tasks / month", "Enter the same completed workload for all options, only after benchmarking. 0 hides unit costs.")}</details>
    </div><div className="calc-results">
      <div className="result-summary" aria-live="polite" aria-atomic="true"><span className="blog-kicker">OWNED VS API / {inputs.months} MONTHS</span><p className="result-headline">{money(Math.abs(c.netSavings))}<span>{c.netSavings > 0 ? "potential savings" : c.netSavings < 0 ? "additional cost" : "difference"}</span></p><div className="result-pair"><div><span>Simple payback</span><strong>{c.paybackMonths === null ? "No payback" : c.paybackMonths === 0 ? "Immediate" : `${c.paybackMonths.toFixed(1)} months`}</strong></div><div><span>Return on upfront cost</span><strong>{c.roi === null ? "N/A · no upfront cost" : `${c.roi.toFixed(1)}%`}</strong></div></div><p>{c.paybackMonths === null ? "Operating costs equal or exceed the API spending eliminated." : c.paybackMonths > inputs.months ? "Payback falls beyond your comparison period. Hardware life and future prices remain unmodeled." : "This result assumes the self-hosted model meets your quality, latency, and capacity requirements."}</p></div>
      <figure className="cost-figure"><figcaption><h3>Cumulative cash outlay</h3><p>Upfront purchase included at month zero.</p></figcaption><div className="chart-legend"><span><i className="legend-api" />Managed API</span><span><i className="legend-owned" />Owned + fallback</span><span><i className="legend-rented" />Rented + fallback</span></div>
        <svg viewBox="0 0 760 310" role="img" aria-labelledby="cash-chart-title cash-chart-desc"><title id="cash-chart-title">{`Cumulative AI spending over ${inputs.months} months`}</title><desc id="cash-chart-desc">{`At month ${inputs.months}: managed API ${money(c.apiTotal)}, owned hardware including API fallback ${money(c.ownedTotal)}, rented GPUs including fallback ${money(c.rentedTotal)}. Exact monthly values are in the expandable data table below.`}</desc>
          {[0, 1, 2, 3, 4].map(t => { const value = chartMax * t / 4; return <g key={t}><line x1="76" x2="726" y1={y(value)} y2={y(value)} stroke="#dbe1dd" /><text x="64" y={y(value) + 4} textAnchor="end">${compact(value)}</text></g>; })}
          <polyline points={path("rented")} fill="none" stroke="#77649e" strokeWidth="3" strokeDasharray="7 5" /><polyline points={path("owned")} fill="none" stroke="#bd5719" strokeWidth="3" /><polyline points={path("api")} fill="none" stroke="#386f70" strokeWidth="3" />
          <line x1={x(month)} x2={x(month)} y1="30" y2="260" stroke="#202323" strokeDasharray="3 5" opacity=".4" />
          {(["api", "owned", "rented"] as const).map((key, index) => <circle key={key} cx={x(month)} cy={y(point[key])} r="5" fill={["#386f70", "#bd5719", "#77649e"][index]} stroke="white" strokeWidth="2" />)}
          {[0, Math.round(inputs.months / 2), inputs.months].filter((m, index, all) => all.indexOf(m) === index).map(m => <text key={m} x={x(m)} y="285" textAnchor={m === inputs.months ? "end" : "middle"}>{m === 0 ? "Now" : `Month ${m}`}</text>)}
        </svg>
        <label className="chart-scrubber" htmlFor="chart-month"><span>Inspect month <strong>{month}</strong></span><input id="chart-month" type="range" min="0" max={inputs.months} value={month} onChange={e => setSelectedMonth(Number(e.target.value))} /></label>
        <div className="chart-values"><span>API <strong>{money(point.api)}</strong></span><span>Owned <strong>{money(point.owned)}</strong></span><span>Rented <strong>{money(point.rented)}</strong></span></div>
      </figure>
      <figure className="cost-figure composition-chart"><figcaption><h3>Where the monthly cost goes</h3><p>Upfront costs spread over {inputs.months} months for comparison; not a cash payment schedule.</p></figcaption>{rows.map(row => <div className="composition-row" key={row.label}><div><span>{row.label}</span><strong>{money(row.total)}</strong></div><div className="composition-track" aria-label={`${row.label}: ${money(row.total)} per month`}>{row.segments.map(s => <span key={s.label} style={{ width: `${s.value / compositionMax * 100}%`, background: s.color }} title={`${s.label}: ${money(s.value)}`} />)}</div><p>{row.segments.map(s => `${s.label} ${money(s.value)}`).join(" · ")}</p></div>)}</figure>
      <div className="break-even-note"><strong>Your break-even hurdle</strong><p>{c.requiredBill === null ? "At 0% replacement, buying hardware cannot recover its cost through API savings." : <>To recover the purchase in {inputs.months} months, your baseline API bill must reach <b>{money(c.requiredBill, 2)}/month</b> at {inputs.replacementPercent}% replacement and these operating costs.</>}</p></div>
    </div></div>
    <details className="calc-data"><summary>View exact totals, unit costs & monthly chart data</summary><div className="table-scroll"><table><caption>{inputs.months}-month comparison · USD</caption><thead><tr><th scope="col">Measure</th><th scope="col">API</th><th scope="col">Owned + fallback</th><th scope="col">Rented + fallback</th></tr></thead><tbody><tr><th scope="row">Total cash outlay</th><td>{money(c.apiTotal, 2)}</td><td>{money(c.ownedTotal, 2)}</td><td>{money(c.rentedTotal, 2)}</td></tr>{inputs.completedTasks > 0 && <tr><th scope="row">Cost / accepted task*</th><td>{money(c.apiMonthly / inputs.completedTasks, 4)}</td><td>{money(c.ownedTotal / inputs.months / inputs.completedTasks, 4)}</td><td>{money(c.rentedMonthly / inputs.completedTasks, 4)}</td></tr>}{c.series.map(p => <tr key={p.month}><th scope="row">Month {p.month}</th><td>{money(p.api, 2)}</td><td>{money(p.owned, 2)}</td><td>{money(p.rented, 2)}</td></tr>)}</tbody></table></div><p className="calc-note">*Uses the same accepted-task volume for each option. Include all retries in the baseline bill and any human repair in operations. This does not establish equivalent model performance.</p></details>
    <div className="calc-actions"><button type="button" onClick={share}>Copy scenario link ↗</button><button type="button" onClick={download}>Download calculations ↓</button><a href="#methodology">Read the methodology</a></div><p role="status" className="calc-status">{status}</p>
    <p className="calc-disclaimer">Planning model, not a benchmark. Constant demand and prices, 730 hours/month. Excludes tax, financing, resale, downtime losses, hardware replacement, and future price changes. Values stay in this browser unless you share the scenario URL. No live pricing feed.</p>
    <noscript><p>Enable JavaScript to change assumptions and explore the charts. The default team-server results and the worked example below remain readable.</p></noscript>
  </section>;
}
