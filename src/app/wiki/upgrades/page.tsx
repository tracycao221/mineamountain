import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Upgrades`,
  description: `${siteConfig.gameName} upgrade guide for warmth, pickaxe, backpack, cash farming, and progression bottlenecks.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/upgrades/` }
};

export default function UpgradesWikiPage() {
  const description = "A consolidated Mine a Mountain upgrade guide explaining when Warmth, Pickaxe, or Backpack is the relevant next comparison and what to test after buying.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Upgrades", href: "/wiki/upgrades" }]} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Upgrades Guide`} description={description} path="/wiki/upgrades/" published={pageDates.upgrades.published} updated={pageDates.upgrades.updated} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Upgrades", href: "/wiki/upgrades" }]} />
      <PageIntro
        eyebrow="Wiki"
        title={`${siteConfig.gameName} Upgrades Guide`}
        description={description}
      />
      <ArticleMeta {...pageDates.upgrades} />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Upgrade roles"
          title="Choose the bottleneck, then buy"
          copy="This role model is safer than exact ROI claims until upgrade prices and crystal values are confirmed."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Warmth</span>
            <h2 className="mt-3 text-xl font-bold text-white">Survive higher climbs</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Buy warmth when cold ends your run before you reach the crystals you want.</p>
            <EvidenceLabel level="Confirmed">Warmth and cold pressure are named in the official Roblox description.</EvidenceLabel>
          </article>
          <article className="content-card">
            <span className="mini-label">Pickaxe</span>
            <h2 className="mt-3 text-xl font-bold text-white">Mine faster</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Buy pickaxe upgrades when mining time is slowing cash farming more than survival or capacity.</p>
            <EvidenceLabel level="Practical inference">The Pickaxe role is confirmed; exact performance gains are not.</EvidenceLabel>
          </article>
          <article className="content-card">
            <span className="mini-label">Backpack</span>
            <h2 className="mt-3 text-xl font-bold text-white">Carry longer</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Buy backpack space when frequent sell trips cut into your crystal route.</p>
            <EvidenceLabel level="Practical inference">The Backpack role is confirmed; exact capacities are not.</EvidenceLabel>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="Decision order" title="Use observations, not a universal shopping list" copy="A fixed Warmth → Pickaxe → Backpack order can waste cash when a different system is ending the run." />
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="content-card">
            <h2 className="text-xl font-bold text-white">Before the purchase</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
              <li>1. Complete one route without changing equipment.</li>
              <li>2. Record the first limit: cold, mining time, or capacity.</li>
              <li>3. Choose the upgrade category tied to that limit.</li>
              <li>4. Keep enough of the route unchanged to make the next run comparable.</li>
            </ol>
          </article>
          <article className="content-card">
            <h2 className="text-xl font-bold text-white">After the purchase</h2>
            <ol className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
              <li>1. Repeat the route under similar conditions.</li>
              <li>2. Check whether the original limit improved.</li>
              <li>3. Count completed sell trips rather than crystals left on the mountain.</li>
              <li>4. Re-diagnose after the hourly mountain changes.</li>
            </ol>
          </article>
        </div>
      </section>

      <section className="mt-10 content-card">
        <SectionHeader eyebrow="Evidence boundary" title="Values this guide intentionally does not publish" />
        <p className="mt-4 leading-7 text-white/68">This page does not currently list upgrade costs, Pickaxe power, Backpack capacity, Warmth duration, or a guaranteed best order. Those details can change and were not available through the official public listing used for this review.</p>
        <EvidenceLabel level="Needs verification">Use the live in-game shop as the source of record before spending cash.</EvidenceLabel>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Compare upgrades</Link>
        <Link href="/guides/beginner" className="button-secondary">Beginner guide</Link>
        <Link href="/tier-list" className="button-secondary">Role list</Link>
      </div>
    </main>
  );
}
