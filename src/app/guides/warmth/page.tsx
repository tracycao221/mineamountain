import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Warmth Guide`,
  description: `${siteConfig.gameName} warmth guide for freezing, cold climbs, upgrade timing, and higher mountain routes.`,
  alternates: { canonical: `${siteConfig.domain}/guides/warmth` }
};

export default function WarmthGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Warmth", href: "/guides/warmth" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Warmth", href: "/guides/warmth" }]} />
      <PageIntro
        eyebrow="Warmth guide"
        title={`${siteConfig.gameName} Warmth Guide`}
        description="Warmth matters when cold stops the climb before your pickaxe or backpack can create value. Use it to reach higher crystals, not as a blind first purchase every time."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Upgrade timing"
          title="When warmth is worth buying"
          copy="Choose warmth when survival is the bottleneck. Hold it when mining speed or capacity is clearly costing more time."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Buy warmth</span>
            <h2 className="mt-3 text-xl font-bold text-white">You freeze before better crystals</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">More warmth can turn a short climb into a route that reaches better crystal spots.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Buy pickaxe</span>
            <h2 className="mt-3 text-xl font-bold text-white">Mining is the slow part</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">If you survive long enough but crystals take too long, pickaxe speed may pay back sooner.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Buy backpack</span>
            <h2 className="mt-3 text-xl font-bold text-white">Capacity ends the run</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">If you leave because the bag is full, warmth will not solve the main problem yet.</p>
          </article>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Compare upgrades</Link>
        <Link href="/tier-list" className="button-secondary">View role list</Link>
        <Link href="/wiki/upgrades" className="button-secondary">Upgrade notes</Link>
      </div>
    </main>
  );
}
