import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Upgrades`,
  description: `${siteConfig.gameName} upgrade guide for warmth, pickaxe, backpack, cash farming, and progression bottlenecks.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/upgrades` }
};

export default function UpgradesWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Upgrades", href: "/wiki/upgrades" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Upgrades", href: "/wiki/upgrades" }]} />
      <PageIntro
        eyebrow="Wiki"
        title={`${siteConfig.gameName} Upgrades`}
        description="Compare warmth, pickaxe, and backpack upgrades by the problem they solve: freezing, slow mining, or too many sell trips."
      />

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
          </article>
          <article className="content-card">
            <span className="mini-label">Pickaxe</span>
            <h2 className="mt-3 text-xl font-bold text-white">Mine faster</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Buy pickaxe upgrades when mining time is slowing cash farming more than survival or capacity.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Backpack</span>
            <h2 className="mt-3 text-xl font-bold text-white">Carry longer</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Buy backpack space when frequent sell trips cut into your crystal route.</p>
          </article>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Compare upgrades</Link>
        <Link href="/guides/warmth" className="button-secondary">Warmth guide</Link>
        <Link href="/tier-list" className="button-secondary">Role list</Link>
      </div>
    </main>
  );
}
