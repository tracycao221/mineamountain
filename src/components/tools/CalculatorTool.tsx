"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

const routeStages = [
  { value: "lower", label: "Lower slopes / learning the route" },
  { value: "higher", label: "Higher route / cold is noticeable" },
  { value: "summit", label: "Near the top / long return trip" }
] as const;

const blockers = ["cold", "mining", "capacity", "unsure"] as const;
const goals = ["safer-climb", "cash", "rare-crystals"] as const;

const comparisonMetrics = [
  { key: "duration", label: "Route duration", unit: "min" },
  { key: "cash", label: "Cash returned", unit: "cash" },
  { key: "sellTrips", label: "Completed sell trips", unit: "trips" }
] as const;

type ComparisonMetricKey = (typeof comparisonMetrics)[number]["key"];
type ComparisonInputs = Record<ComparisonMetricKey, string>;

const emptyComparisonInputs: ComparisonInputs = {
  duration: "",
  cash: "",
  sellTrips: ""
};

function parseComparisonValue(rawValue: string) {
  if (!rawValue.trim()) return { kind: "empty" as const };
  const value = Number(rawValue);
  if (!Number.isFinite(value) || value < 0) return { kind: "invalid" as const };
  return { kind: "value" as const, value };
}

function formatMeasuredValue(value: number) {
  return value.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export function CalculatorTool() {
  const [stage, setStage] = useState<(typeof routeStages)[number]["value"]>("lower");
  const [blocker, setBlocker] = useState<(typeof blockers)[number]>("unsure");
  const [goal, setGoal] = useState<(typeof goals)[number]>("safer-climb");
  const [baselineRun, setBaselineRun] = useState<ComparisonInputs>(emptyComparisonInputs);
  const [afterRun, setAfterRun] = useState<ComparisonInputs>(emptyComparisonInputs);
  const [comparableRoute, setComparableRoute] = useState(false);

  const result = useMemo(() => {
    if (blocker === "cold") {
      return {
        title: "Compare Warmth first",
        reason: "Cold is ending the route before mining speed or carrying capacity can create value.",
        confidence: "High: the official Roblox description confirms cold pressure and Warmth upgrades.",
        test: "On the next run, repeat the same path after one Warmth upgrade and note whether you reach a new crystal area and still return to sell."
      };
    }
    if (blocker === "mining") {
      return {
        title: "Compare Pickaxe first",
        reason: "You are reaching crystals safely, but breaking them is consuming the useful part of the run.",
        confidence: "High for the role; exact Pickaxe costs and power values are not verified here.",
        test: "Mine the same type of visible crystal before and after the next Pickaxe upgrade and compare the time without changing routes."
      };
    }
    if (blocker === "capacity") {
      return {
        title: "Compare Backpack first",
        reason: "The route is still safe and mining is workable, but a full bag is forcing extra sell trips.",
        confidence: "High for the role; exact capacity tiers are not verified here.",
        test: "Count how many times capacity alone sends you back to sell. A Backpack upgrade should reduce that count on the same route."
      };
    }
    if (goal === "safer-climb" || stage === "higher" || stage === "summit") {
      return {
        title: "Test Warmth before spending",
        reason: "For a higher or safer climb, survival is the first constraint to rule out when you are unsure.",
        confidence: "Medium: this is a practical inference from confirmed cold and Warmth mechanics.",
        test: "Run the same route once and record whether cold, mining time, or a full bag stops you first. Return with that answer."
      };
    }
    return {
      title: goal === "rare-crystals" ? "Measure the route before choosing" : "Measure cash returned before choosing",
      reason: "Without a clear bottleneck, buying any one upgrade would be guesswork.",
      confidence: "Medium: the recommendation avoids unsupported ROI claims.",
      test: "Use one complete climb-mine-sell run. Record the first limit you hit, then select Cold, Mining speed, or Backpack capacity above."
    };
  }, [blocker, goal, stage]);

  const comparison = useMemo(() => {
    const invalidLabels: string[] = [];
    const deltas: Array<{
      key: ComparisonMetricKey;
      label: string;
      unit: string;
      before: number;
      after: number;
      delta: number;
      percent: number | null;
    }> = [];

    for (const metric of comparisonMetrics) {
      const before = parseComparisonValue(baselineRun[metric.key]);
      const after = parseComparisonValue(afterRun[metric.key]);
      if (before.kind === "invalid") invalidLabels.push(`Baseline ${metric.label}`);
      if (after.kind === "invalid") invalidLabels.push(`After-change ${metric.label}`);
      if (before.kind === "value" && after.kind === "value") {
        const delta = after.value - before.value;
        deltas.push({
          ...metric,
          before: before.value,
          after: after.value,
          delta,
          percent: before.value > 0 ? (delta / before.value) * 100 : null
        });
      }
    }

    return { invalidLabels, deltas };
  }, [afterRun, baselineRun]);

  function updateRun(
    run: "baseline" | "after",
    key: ComparisonMetricKey,
    value: string
  ) {
    if (run === "baseline") {
      setBaselineRun((current) => ({ ...current, [key]: value }));
      return;
    }
    setAfterRun((current) => ({ ...current, [key]: value }));
  }

  function clearComparison() {
    setBaselineRun(emptyComparisonInputs);
    setAfterRun(emptyComparisonInputs);
    setComparableRoute(false);
  }

  return (
    <div className="grid min-w-0 gap-5">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="content-card min-w-0">
          <SectionHeader eyebrow="Inputs" title="Plan your next move" />
          <div className="mt-6 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-white">Where does your current route reach?</span>
              <select value={stage} onChange={(event) => setStage(event.target.value as (typeof routeStages)[number]["value"])} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
                {routeStages.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-white">What stopped the last useful run?</span>
              <select value={blocker} onChange={(event) => setBlocker(event.target.value as (typeof blockers)[number])} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
                <option value="unsure">I am not sure yet</option>
                <option value="cold">I froze or had to turn back</option>
                <option value="mining">Crystals took too long to mine</option>
                <option value="capacity">My backpack filled too early</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-white">Immediate goal</span>
              <select value={goal} onChange={(event) => setGoal(event.target.value as (typeof goals)[number])} className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white">
                <option value="safer-climb">Climb higher without losing the run</option>
                <option value="cash">Return more cash per completed route</option>
                <option value="rare-crystals">Reach better crystal areas</option>
              </select>
            </label>
          </div>
        </div>

        <div className="content-card min-w-0">
          <SectionHeader eyebrow="Output" title="Recommendation" />
          <p className="mt-6 text-2xl font-extrabold leading-9 text-white">{result.title}</p>
          <p className="mt-4 leading-7 text-white/70">{result.reason}</p>
          <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
            <p className="text-sm font-bold text-[color:var(--accent-2)]">Confidence</p>
            <p className="mt-2 text-sm leading-6 text-white/64">{result.confidence}</p>
          </div>
          <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-4">
            <p className="text-sm font-bold text-[color:var(--accent)]">Next in-game test</p>
            <p className="mt-2 text-sm leading-6 text-white/64">{result.test}</p>
          </div>
          <p className="mt-5 text-xs leading-5 text-white/48">No exact cost, crystal price, or cash-per-minute claim is used in this result.</p>
        </div>
      </div>

      <section className="content-card min-w-0" aria-label="Compare two completed runs">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <SectionHeader
            eyebrow="Your own evidence"
            title="Compare two completed runs"
            copy="Enter only values you observed in-game. The calculator shows simple differences and does not store or transmit them."
          />
          <button type="button" onClick={clearComparison} className="button-secondary">Clear comparison</button>
        </div>
        <div className="mt-6 min-w-0 overflow-x-auto">
          <div className="grid min-w-[680px] grid-cols-[1.2fr_1fr_1fr] gap-3">
            <p className="text-sm font-bold text-white">Measurement</p>
            <p className="text-sm font-bold text-white">Baseline run</p>
            <p className="text-sm font-bold text-white">After one change</p>
            {comparisonMetrics.map((metric) => (
              <div key={metric.key} className="contents">
                <div className="rounded-lg border border-white/10 bg-black/15 px-3 py-3">
                  <p className="text-sm font-semibold text-white">{metric.label}</p>
                  <p className="mt-1 text-xs text-white/48">Unit: {metric.unit}</p>
                </div>
                <div className="grid gap-1">
                  <input
                    aria-label={`Baseline ${metric.label}`}
                    type="number"
                    min="0"
                    step="any"
                    inputMode="decimal"
                    value={baselineRun[metric.key]}
                    onChange={(event) => updateRun("baseline", metric.key, event.target.value)}
                    className="h-full min-h-12 rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
                    placeholder="Optional"
                  />
                </div>
                <div className="grid gap-1">
                  <input
                    aria-label={`After-change ${metric.label}`}
                    type="number"
                    min="0"
                    step="any"
                    inputMode="decimal"
                    value={afterRun[metric.key]}
                    onChange={(event) => updateRun("after", metric.key, event.target.value)}
                    className="h-full min-h-12 rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white"
                    placeholder="Optional"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <label className="mt-5 flex items-start gap-3 rounded-lg border border-white/10 bg-black/20 p-4">
          <input type="checkbox" checked={comparableRoute} onChange={(event) => setComparableRoute(event.target.checked)} className="mt-1 h-4 w-4" />
          <span className="text-sm leading-6 text-white/68">I kept the route, main equipment, and goal similar enough for a useful comparison.</span>
        </label>

        <div className="mt-5" aria-live="polite">
          {comparison.invalidLabels.length ? (
            <p className="rounded-lg border border-red-300/25 bg-red-400/10 p-4 text-sm text-red-100">
              Use zero or a positive number for: {comparison.invalidLabels.join(", ")}.
            </p>
          ) : null}
          {!comparison.invalidLabels.length && !comparison.deltas.length ? (
            <p className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/60">
              Enter a baseline and after-change value in the same row to create a comparison. Blank rows are ignored.
            </p>
          ) : null}
          {!comparison.invalidLabels.length && comparison.deltas.length ? (
            <div className="grid gap-3 md:grid-cols-3">
              {comparison.deltas.map((metric) => {
                const sign = metric.delta > 0 ? "+" : "";
                return (
                  <article key={metric.key} className="rounded-lg border border-white/10 bg-black/20 p-4">
                    <p className="text-sm font-bold text-white">{metric.label}</p>
                    <p className="mt-2 text-lg font-extrabold text-[color:var(--accent-2)]">
                      {formatMeasuredValue(metric.before)} → {formatMeasuredValue(metric.after)} {metric.unit}
                    </p>
                    <p className="mt-2 text-sm text-white/62">
                      Difference: {sign}{formatMeasuredValue(metric.delta)} {metric.unit}
                      {metric.percent === null ? " (percentage omitted because the baseline is zero)" : ` (${metric.percent > 0 ? "+" : ""}${metric.percent.toFixed(1)}%)`}
                    </p>
                  </article>
                );
              })}
            </div>
          ) : null}
          {comparison.deltas.length ? (
            <p className={`mt-4 rounded-lg border p-4 text-sm leading-6 ${comparableRoute ? "border-emerald-300/25 bg-emerald-400/10 text-emerald-100" : "border-amber-300/25 bg-amber-400/10 text-amber-100"}`}>
              {comparableRoute
                ? "The runs are marked comparable. Use the differences as your own observation, then repeat once before treating the change as a pattern."
                : "The runs are not marked comparable. Treat the differences as notes only; route or equipment changes may explain them."}
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
