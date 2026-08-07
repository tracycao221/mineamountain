import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Calculator`,
  description: `Use the ${siteConfig.gameName} upgrade calculator to identify route bottlenecks and compare two player-recorded runs without invented game values.`,
  alternates: { canonical: `${siteConfig.domain}/calculator/` }
};

export default function CalculatorPage() {
  const description = "Use this evidence-labeled planner to identify whether cold, mining speed, or backpack capacity is limiting a route, then compare two runs using your own observations.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Route Bottleneck Planner`} description={description} path="/calculator/" published={pageDates.calculator.published} updated={pageDates.calculator.updated} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Route Bottleneck Planner`}
        description={description}
      />
      <ArticleMeta {...pageDates.calculator} />
      <section className="mt-10">
        <CalculatorTool />
      </section>
      <section className="mt-10 content-card">
        <SectionHeader
          eyebrow="Comparison method"
          title="What makes two route records useful"
          copy="A delta is only meaningful when the two runs answer roughly the same question."
        />
        <div className="mt-5 grid gap-4 text-sm leading-6 text-white/68 md:grid-cols-3">
          <div><strong className="text-white">Change one category.</strong> Compare one Warmth, Pickaxe, or Backpack change instead of replacing the entire loadout.</div>
          <div><strong className="text-white">Complete the loop.</strong> Record cash after selling, not the apparent value of crystals still on the mountain.</div>
          <div><strong className="text-white">Repeat before concluding.</strong> One mountain or route can differ; a second comparable run helps separate a pattern from noise.</div>
        </div>
        <EvidenceLabel level="Practical inference">The comparison math uses only the visitor&apos;s entries and remains in the current browser session.</EvidenceLabel>
      </section>
      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <SectionHeader eyebrow="What is confirmed" title="The official loop" />
          <p className="mt-4 text-sm leading-6 text-white/66">The Roblox listing confirms climbing, mining crystals, selling for cash, cold near the top, and upgrades for Warmth, Pickaxe, and Backpack.</p>
          <EvidenceLabel level="Confirmed">Official Roblox game description, checked August 7, 2026.</EvidenceLabel>
        </article>
        <article className="content-card">
          <SectionHeader eyebrow="What is inferred" title="Fix the first constraint" />
          <p className="mt-4 text-sm leading-6 text-white/66">If one system consistently ends a route first, testing the related upgrade is a practical next step. It is not a universal ranking.</p>
          <EvidenceLabel level="Practical inference">Derived from the confirmed roles of the three upgrades.</EvidenceLabel>
        </article>
        <article className="content-card">
          <SectionHeader eyebrow="What is missing" title="No fake ROI" />
          <p className="mt-4 text-sm leading-6 text-white/66">Exact costs, power gains, capacities, crystal prices, and cash-per-minute values are not used because this site has not verified them.</p>
          <EvidenceLabel level="Needs verification">Check live in-game shop and sell screens after balance updates.</EvidenceLabel>
        </article>
      </section>
    </main>
  );
}
