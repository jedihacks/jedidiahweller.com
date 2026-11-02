import assert from "node:assert/strict";
import test from "node:test";
import { calculateCosts, defaultInputs, normalizeInputs } from "../lib/ai-cost.ts";
const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 0.01, `${actual} != ${expected}`);

test("original article scenario reproduces cash flows, threshold, and payback", () => {
  const c = calculateCosts(defaultInputs);
  close(c.apiTotal, 156000); close(c.ownedTotal, 360000); close(c.rentedTotal, 838857.6);
  close(c.paybackMonths, 112.5); close(c.requiredBill, 10000); close(c.netSavings, -204000); close(c.roi, -68);
  assert.equal(c.series[0].owned, 300000); assert.equal(c.series[0].api, 0);
});
test("operator labor and partial replacement change savings without erasing fallback", () => {
  const labor = calculateCosts({ ...defaultInputs, laborHours: 208 / 12, laborRate: 100 });
  close(labor.paybackMonths / 12, 300000 / 11200);
  const partial = calculateCosts({ ...defaultInputs, replacementPercent: 50 });
  close(partial.residual, 52000 / 24); close(partial.requiredBill, 20000);
  close(partial.ownedTotal, 438000); close(partial.rentedTotal, 916857.6);
});
test("token estimation separates cached input and output without double charging", () => {
  const c = calculateCosts({ ...defaultInputs, apiMode: "tokens", inputMillions: 10, outputMillions: 2, inputRate: 3, outputRate: 15, cachePercent: 40, cachedRate: 0.3 });
  close(c.apiMonthly, 49.2);
});
test("no savings, sunk hardware, and zero workload never produce invalid ratios", () => {
  const c = calculateCosts({ ...defaultInputs, monthlyBill: 0, replacementPercent: 0 });
  assert.equal(c.paybackMonths, null); assert.equal(c.requiredBill, null);
  const existing = calculateCosts({ ...defaultInputs, hardware: 0, setup: 0, otherMonthly: 0 });
  assert.equal(existing.roi, null); assert.equal(existing.paybackMonths, 0);
  const zero = calculateCosts({ ...defaultInputs, monthlyBill: 0, hardware: 0, setup: 0, otherMonthly: 0, gpuRate: 0 });
  assert.equal(zero.apiTotal, 0); assert.equal(zero.ownedTotal, 0); assert.equal(zero.rentedTotal, 0); assert.equal(zero.paybackMonths, null);
});
test("power is charged for powered hours, rental for allocated hours", () => {
  const c = calculateCosts({ ...defaultInputs, powerWatts: 500, poweredHours: 200, electricityRate: 0.2, gpuCount: 2, gpuRate: 3, rentalHours: 160 });
  close(c.power, 20); close(c.rentalCompute, 960);
});
test("shared scenarios sanitize invalid input, bounds, and discrete fields", () => {
  const i = normalizeInputs({ months: 999, hardware: -10, replacementPercent: 120, gpuCount: 1.7, laborRate: NaN, monthlyBill: "100", poweredHours: Infinity });
  assert.equal(i.months, 120); assert.equal(i.hardware, 0); assert.equal(i.replacementPercent, 100); assert.equal(i.gpuCount, 2);
  assert.equal(i.laborRate, defaultInputs.laborRate); assert.equal(i.monthlyBill, defaultInputs.monthlyBill); assert.equal(i.poweredHours, defaultInputs.poweredHours);
});
