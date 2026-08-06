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

export function CalculatorTool() {
  const [stage, setStage] = useState<(typeof routeStages)[number]["value"]>("lower");
  const [blocker, setBlocker] = useState<(typeof blockers)[number]>("unsure");
  const [goal, setGoal] = useState<(typeof goals)[number]>("safer-climb");

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

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="content-card">
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

      <div className="content-card">
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
  );
}
