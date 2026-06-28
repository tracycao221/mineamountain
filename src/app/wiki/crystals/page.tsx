import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Crystals`,
  description: `${siteConfig.gameName} crystal guide for mining, cash farming, value tracking, rare crystal notes, and route verification.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/crystals` }
};

export default function CrystalsWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Crystals", href: "/wiki/crystals" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Crystals", href: "/wiki/crystals" }]} />
      <PageIntro
        eyebrow="Wiki"
        title={`${siteConfig.gameName} Crystals`}
        description="Use this page for crystal mining notes, cash farming questions, and value tracking while exact crystal prices are still being verified."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Crystal value tracking"
          title="What to record next"
          copy="The launch page avoids fake price tables. Add exact values only after they are checked in-game."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Cash farm</span>
            <h2 className="mt-3 text-xl font-bold text-white">Track cash per climb</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Compare short safe routes with higher cold routes once crystal rewards are measured.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Value calculator</span>
            <h2 className="mt-3 text-xl font-bold text-white">Hold exact formulas</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">The calculator can add crystal value math after reliable values are available.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Rare crystals</span>
            <h2 className="mt-3 text-xl font-bold text-white">Separate rarity from value</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">A rare crystal is only a better farm target when its value and route time are both known.</p>
          </article>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Use calculator</Link>
        <Link href="/guides/digging-luck" className="button-secondary">Digging Luck guide</Link>
        <Link href="/wiki/upgrades" className="button-secondary">Upgrade notes</Link>
      </div>
    </main>
  );
}
