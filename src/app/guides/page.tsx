import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides`,
  description: `Beginner, progression, and advanced strategy guides for ${siteConfig.gameName}.`,
  alternates: { canonical: `${siteConfig.domain}/guides/` }
};

export default function GuidesPage() {
  const description = "A focused Mine a Mountain guide hub for learning the first route, diagnosing upgrade bottlenecks, checking code status, and verifying sources.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Guides`} description={description} path="/guides/" published={pageDates.guides.published} updated={pageDates.guides.updated} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description={description}
      />
      <ArticleMeta {...pageDates.guides} />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with pages that match real player questions"
          copy="The previous collection of overlapping tips, strategy, levels, and walkthrough pages has been consolidated into stronger destinations."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/guides/beginner/" className="content-card"><span className="mini-label">Start here</span><h2 className="mt-3 text-xl font-bold text-white">Beginner route</h2><p className="mt-2 text-sm leading-6 text-white/65">Learn one complete climb, mine, sell, and upgrade loop.</p></Link>
          <Link href="/wiki/upgrades/" className="content-card"><span className="mini-label">Decision guide</span><h2 className="mt-3 text-xl font-bold text-white">Warmth, Pickaxe, or Backpack?</h2><p className="mt-2 text-sm leading-6 text-white/65">Choose the category tied to the first problem that ended the last run.</p></Link>
          <Link href="/calculator/" className="content-card"><span className="mini-label">Interactive tool</span><h2 className="mt-3 text-xl font-bold text-white">Route bottleneck planner</h2><p className="mt-2 text-sm leading-6 text-white/65">Turn a run observation into a cautious next-upgrade test.</p></Link>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Guide route map"
          title="Choose the guide by your current problem"
          copy="Every retained route answers a different question instead of repeating the same three upgrade paragraphs."
        />
        <div className="mt-6 overflow-hidden rounded-lg border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-white/[0.06] text-white">
              <tr>
                <th className="px-4 py-3">Player question</th>
                <th className="px-4 py-3">Open this guide</th>
                <th className="px-4 py-3">Use it when</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/68">
              <tr>
                <td className="px-4 py-4 font-semibold text-white">How to start</td>
                <td className="px-4 py-4">Beginner guide</td>
                <td className="px-4 py-4">You need the first climb, first sale, and first upgrade route.</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-white">What to upgrade</td>
                <td className="px-4 py-4">Upgrades guide</td>
                <td className="px-4 py-4">A specific bottleneck is stopping your next run.</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-white">How to climb higher</td>
                <td className="px-4 py-4">Route bottleneck planner</td>
                <td className="px-4 py-4">You understand the loop but need to identify which system limits it.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Evidence policy"
          title="What these guides will and will not claim"
          copy="A useful answer is better than a long page of unsupported numbers."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card"><h2 className="text-xl font-bold text-white">Official facts</h2><p className="mt-3 text-sm leading-6 text-white/66">Roblox listing text, public Roblox API snapshots, and official game media.</p><EvidenceLabel level="Confirmed" /></article>
          <article className="content-card"><h2 className="text-xl font-bold text-white">Conditional advice</h2><p className="mt-3 text-sm leading-6 text-white/66">Recommendations explain the condition under which they apply and include a way to test them.</p><EvidenceLabel level="Practical inference" /></article>
          <article className="content-card"><h2 className="text-xl font-bold text-white">Missing values</h2><p className="mt-3 text-sm leading-6 text-white/66">Unverified costs, prices, odds, and level tables stay out of indexed pages.</p><EvidenceLabel level="Needs verification" /></article>
        </div>
      </section>
    </main>
  );
}
