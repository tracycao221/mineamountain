import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiCards } from "@/data/site";
import { pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki`,
  description: `${siteConfig.gameName} wiki hub for items, maps, systems, builds, rewards, and Roblox game entities.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/` }
};

export default function WikiPage() {
  const description = "A focused Mine a Mountain wiki hub for the confirmed crystal, upgrade, cold, hourly mountain, selling, and Digging Luck systems.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Wiki`} description={description} path="/wiki/" published={pageDates.wiki.published} updated={pageDates.wiki.updated} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description={description}
      />
      <ArticleMeta {...pageDates.wiki} />

      <section className="mt-10 content-card">
        <SectionHeader eyebrow="Quick answer" title="What belongs in this Mine a Mountain wiki?" />
        <p className="mt-4 leading-7 text-white/68">Use the wiki to understand the systems that directly change a run: crystals create cash, cold limits height, Warmth extends survival, Pickaxe affects mining, Backpack affects carrying, and the mountain is advertised to change every hour. Exact values stay out until they can be checked in the live game.</p>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Wiki topic pages"
          title="Choose the confirmed topic you need"
          copy="Start with the topics that affect your next upgrade, clear, reward, build, or route decision."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wikiCards.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 content-card">
        <SectionHeader eyebrow="Core systems" title="Current facts from the official Roblox listing" />
        <div className="mt-5 grid gap-3 text-sm leading-6 text-white/68 md:grid-cols-2">
          <p>Players climb a mountain and mine rare crystals.</p><p>Crystals are sold for cash.</p><p>Cold pressure increases near the top.</p><p>Warmth, Pickaxe, and Backpack are upgrade categories.</p><p>A new mountain is advertised every hour.</p><p>Liking the game and joining the group is advertised as +1 Digging Luck.</p>
        </div>
        <EvidenceLabel level="Confirmed">Official Roblox game description checked August 6, 2026.</EvidenceLabel>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Player routes"
          title="How the core systems fit together during a run"
          copy="The wiki hub now answers the broad system query directly: crystals create cash, upgrades change the route, and source notes keep unverified details out of the guide pages."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Crystals</span>
            <h2 className="mt-3 text-xl font-bold text-white">Resource and sale loop</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Use crystal notes when you need to decide whether a higher route is worth the extra cold risk.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Upgrades</span>
            <h2 className="mt-3 text-xl font-bold text-white">Warmth, pickaxe, backpack</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Use upgrade notes when your route fails because of freezing, slow mining, or full inventory.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Updates</span>
            <h2 className="mt-3 text-xl font-bold text-white">What must be rechecked</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Use update notes before changing code status, tier-list roles, or exact upgrade advice.</p>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Codes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Check code status before reward claims</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Use the codes page for active-code checks, no-fake-code rules, and exact reward verification.</p>
        </Link>
        <Link href="/trello" className="content-card">
          <span className="mini-label">Discord</span>
          <h2 className="mt-3 text-xl font-bold text-white">Verify source links</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Use the Trello and Discord status page before trusting community screenshots or unofficial wiki mirrors.</p>
        </Link>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="Mine a Mountain wiki questions" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card"><h2 className="text-xl font-bold text-white">Why is there no full crystal price table?</h2><p className="mt-3 text-sm leading-6 text-white/66">The official public listing used for this review does not provide exact prices. Publishing a copied table without live verification would make the wiki less trustworthy.</p></article>
          <article className="content-card"><h2 className="text-xl font-bold text-white">Where should a new player begin?</h2><p className="mt-3 text-sm leading-6 text-white/66">Start with the beginner guide, complete one climb-mine-sell loop, then use the upgrades guide or planner after identifying the first limit.</p></article>
        </div>
      </section>
    </main>
  );
}
