import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, wikiCards } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki`,
  description: `${siteConfig.gameName} wiki hub for items, maps, systems, builds, rewards, and Roblox game entities.`,
  alternates: { canonical: `${siteConfig.domain}/wiki/` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Wiki hub"
        title={`${siteConfig.gameName} Wiki`}
        description="Use this hub for game systems, items, maps, rewards, builds, and other details that help players decide what to do next."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Choose the wiki topic you need"
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

      <section className="mt-10">
        <SectionHeader
          eyebrow="System map"
          title="How the Mine a Mountain wiki topics fit together"
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
    </main>
  );
}
