/** Constant-demand, undiscounted cash-flow comparison. All amounts in USD. */
export type CostInputs = {
  apiMode: "bill" | "tokens";
  monthlyBill: number;
  inputMillions: number;
  outputMillions: number;
  inputRate: number;
  outputRate: number;
  cachePercent: number;
  cachedRate: number;
  hardware: number;
  setup: number;
  replacementPercent: number;
  powerWatts: number;
  poweredHours: number;
  electricityRate: number;
  otherMonthly: number;
  laborHours: number;
  laborRate: number;
  gpuCount: number;
  gpuRate: number;
  rentalHours: number;
  rentalOps: number;
  months: number;
  completedTasks: number;
};
export const defaultInputs: CostInputs = {
  apiMode: "bill", monthlyBill: 52000 / 12, inputMillions: 1000, outputMillions: 88.888889,
  inputRate: 3, outputRate: 15, cachePercent: 0, cachedRate: 0.3,
  hardware: 300000, setup: 0, replacementPercent: 100,
  powerWatts: 0, poweredHours: 730, electricityRate: 0.16, otherMonthly: 20000 / 12,
  laborHours: 0, laborRate: 100, gpuCount: 8, gpuRate: 3.99, rentalHours: 730,
  rentalOps: 0, months: 36, completedTasks: 10000,
};
export const inputLimits: Record<Exclude<keyof CostInputs, "apiMode">, [number, number]> = {
  monthlyBill: [0, 1e8], inputMillions: [0, 1e8], outputMillions: [0, 1e8], inputRate: [0, 10000], outputRate: [0, 10000],
  cachePercent: [0, 100], cachedRate: [0, 10000], hardware: [0, 1e9], setup: [0, 1e8], replacementPercent: [0, 100],
  powerWatts: [0, 1e7], poweredHours: [0, 730], electricityRate: [0, 100], otherMonthly: [0, 1e8],
  laborHours: [0, 10000], laborRate: [0, 10000], gpuCount: [1, 10000], gpuRate: [0, 10000], rentalHours: [0, 730],
  rentalOps: [0, 1e8], months: [1, 120], completedTasks: [0, 1e10],
};
export function normalizeInputs(raw: Partial<CostInputs>): CostInputs {
  const result = { ...defaultInputs };
  for (const key of Object.keys(inputLimits) as (keyof typeof inputLimits)[]) {
    const value = raw[key];
    if (typeof value === "number" && Number.isFinite(value)) {
      const [min, max] = inputLimits[key];
      result[key] = Math.min(max, Math.max(min, value));
    }
  }
  result.months = Math.round(result.months);
  result.gpuCount = Math.round(result.gpuCount);
  result.apiMode = raw.apiMode === "tokens" ? "tokens" : "bill";
  return result;
}
export function calculateCosts(raw: CostInputs) {
  const i = normalizeInputs(raw);
  const apiMonthly = i.apiMode === "bill" ? i.monthlyBill :
    i.inputMillions * ((1 - i.cachePercent / 100) * i.inputRate + i.cachePercent / 100 * i.cachedRate) + i.outputMillions * i.outputRate;
  const displaced = apiMonthly * i.replacementPercent / 100;
  const residual = apiMonthly - displaced;
  const power = i.powerWatts / 1000 * i.poweredHours * i.electricityRate;
  const labor = i.laborHours * i.laborRate;
  const operations = power + i.otherMonthly + labor;
  const upfront = i.hardware + i.setup;
  const ownedMonthly = operations + residual;
  const rentalCompute = i.gpuCount * i.gpuRate * i.rentalHours;
  const rentedMonthly = rentalCompute + i.rentalOps + residual;
  const monthlySavings = apiMonthly - ownedMonthly;
  const netSavings = monthlySavings * i.months - upfront;
  const apiTotal = apiMonthly * i.months;
  const ownedTotal = upfront + ownedMonthly * i.months;
  const rentedTotal = rentedMonthly * i.months;
  return { apiMonthly, displaced, residual, power, labor, operations, upfront, ownedMonthly, rentalCompute, rentedMonthly,
    monthlySavings, netSavings, apiTotal, ownedTotal, rentedTotal,
    paybackMonths: monthlySavings > 0 ? upfront / monthlySavings : null,
    roi: upfront > 0 ? netSavings / upfront * 100 : null,
    requiredBill: i.replacementPercent > 0 ? (upfront / i.months + operations) / (i.replacementPercent / 100) : null,
    series: Array.from({ length: i.months + 1 }, (_, month) => ({ month, api: month * apiMonthly, owned: upfront + month * ownedMonthly, rented: month * rentedMonthly })),
  };
}
export const scenarios = [
  { id: "team", label: "Team server", description: "Original article: $52k/year API bill, $300k server, $20k/year operations. Labor excluded until you add it.", values: defaultInputs },
  { id: "workstation", label: "Workstation", description: "Illustrative $8k workstation replacing 70% of a $600/month API bill. Validate model quality and capacity yourself.", values: { ...defaultInputs, monthlyBill: 600, hardware: 8000, setup: 500, replacementPercent: 70, powerWatts: 450, poweredHours: 220, otherMonthly: 25, laborHours: 2, gpuCount: 1, gpuRate: 2, rentalHours: 220, rentalOps: 100, completedTasks: 1500 } },
  { id: "existing", label: "Hardware you own", description: "Illustrative incremental decision: hardware purchase is a sunk cost. Include its opportunity cost in setup if it has another use.", values: { ...defaultInputs, monthlyBill: 400, hardware: 0, setup: 200, replacementPercent: 80, powerWatts: 300, poweredHours: 160, otherMonthly: 10, laborHours: 1, gpuCount: 1, gpuRate: 2, rentalHours: 160, rentalOps: 100, completedTasks: 1000 } },
];
