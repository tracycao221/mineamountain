import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { editorialConfig, pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Crystals`,
  description: `${siteConfig.gameName} crystal guide for mining, cash farming, value tracking, rare crystal notes, and route verification.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/crystals/` }
};

export default function CrystalsWikiPage() {
  const description = "A checked guide to the confirmed role of crystals in Mine a Mountain, the information shown by official game media, and the values that still require in-game verification.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Crystals", href: "/wiki/crystals" }]} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Crystals Guide`} description={description} path="/wiki/crystals/" published={pageDates.crystals.published} updated={pageDates.crystals.updated} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Crystals", href: "/wiki/crystals" }]} />
      <PageIntro
        eyebrow="Wiki"
        title={`${siteConfig.gameName} Crystals Guide`}
        description={description}
      />
      <ArticleMeta {...pageDates.crystals} />

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader eyebrow="What official sources show" title="Crystals are the resource behind the sell loop" copy="The official listing tells players to mine rare crystals and sell them for cash. Official promotional media also shows crystals at different heights and displays crystal weight in kilograms." />
          <EvidenceLabel level="Confirmed">Mechanic and visual presentation only; the media does not establish a complete rarity or price table.</EvidenceLabel>
        </div>
        <figure className="official-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={editorialConfig.officialMedia[1].src} alt={editorialConfig.officialMedia[1].alt} width="768" height="432" />
          <figcaption>{editorialConfig.officialMedia[1].caption} Source: Roblox game media API, checked August 6, 2026.</figcaption>
        </figure>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Route decisions"
          title="How to reason about a crystal without a fake price table"
          copy="A useful crystal decision includes whether you can reach it, mine it, carry it, return, and sell it. Visual rarity alone does not prove the best cash route."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Reach</span>
            <h2 className="mt-3 text-xl font-bold text-white">Can the route be completed?</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">A crystal above the safe cold limit has no completed-run value if you cannot return to sell it.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Carry</span>
            <h2 className="mt-3 text-xl font-bold text-white">Does it fit the current Backpack?</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Official media shows crystal weight, so capacity can affect whether a find completes the sell loop.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Sell</span>
            <h2 className="mt-3 text-xl font-bold text-white">Compare completed cash returns</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Record cash only after selling, then compare full route time instead of judging by color or height.</p>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Confirmed facts</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>Crystals are mined and sold for cash.</li>
            <li>The official description calls out rare crystals.</li>
            <li>Official media depicts multiple colors and weighted crystals.</li>
            <li>Cold and mountain height affect the route around them.</li>
          </ul>
          <EvidenceLabel level="Confirmed">Official Roblox description and promotional media.</EvidenceLabel>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Not yet verified here</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>A complete list of crystal names and rarities.</li>
            <li>Exact sell prices or price-per-kilogram rules.</li>
            <li>Spawn odds, luck multipliers, or zone tables.</li>
            <li>A guaranteed highest-profit route.</li>
          </ul>
          <EvidenceLabel level="Needs verification">Check current in-game index and sell UI before publishing numbers.</EvidenceLabel>
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Use calculator</Link>
        <Link href="/guides/beginner" className="button-secondary">Beginner guide</Link>
        <Link href="/wiki/upgrades" className="button-secondary">Upgrade notes</Link>
      </div>
    </main>
  );
}
