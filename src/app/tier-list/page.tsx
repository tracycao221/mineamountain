import type { Metadata } from "next";
import Link from "next/link";
import { faqs, siteConfig, tierPreview } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Tier List`,
  description: `${siteConfig.gameName} upgrade role tier list for warmth, pickaxe, backpack, crystal mining, and climbing progression.`,
  alternates: { canonical: `${siteConfig.domain}/tier-list` },
  openGraph: {
    title: `${siteConfig.gameName} Tier List`,
    description: `${siteConfig.gameName} upgrade role tier list for warmth, pickaxe, backpack, crystal mining, and climbing progression.`,
    url: `${siteConfig.domain}/tier-list`,
    images: ["/tier-list/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Tier List`,
    description: `${siteConfig.gameName} upgrade role tier list for warmth, pickaxe, backpack, crystal mining, and climbing progression.`,
    images: ["/tier-list/opengraph-image"]
  }
};

export default function TierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tier List", href: "/tier-list" }]} />
      <ItemListJsonLd />
      <FaqJsonLd items={faqs.tierList} />
      <Breadcrumbs items={[{ label: "Tier List", href: "/tier-list" }]} />

      <PageIntro
        eyebrow="Tier list"
        title={`${siteConfig.gameName} Tier List`}
        description="Use this role list to compare warmth, pickaxe, backpack, and crystal-route decisions before spending cash on the next upgrade."
      />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Checked date</span>
          <h2 className="mt-3 text-xl font-bold text-white">{siteConfig.lastUpdated}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Rankings should be refreshed after codes, updates, balance changes, or repeated community reports.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Ranking criteria</span>
          <h2 className="mt-3 text-xl font-bold text-white">Survival, cash speed, route length, and bottlenecks</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Compare upgrade roles by whether cold, mining speed, or backpack capacity is currently slowing your climb.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source notes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Official, creator, wiki, and community checks</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Treat official Roblox and creator-owned sources as strongest. Videos and community reports help with trends and use cases.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Rankings"
          title="Best current upgrade roles"
          copy="Compare the strongest early decisions with clear confidence labels until exact upgrade costs and crystal values are verified."
        />
        <div className="mt-6 grid gap-4">
          {tierPreview.map((item) => (
            <article key={item.name} className="content-card">
              <div className="flex flex-wrap items-center gap-4">
                <span className="tier-badge">{item.tier}</span>
                <div>
                  <h2 className="text-2xl font-extrabold text-white">{item.name}</h2>
                  <p className="mt-1 text-sm text-white/50">{item.role}</p>
                </div>
                {item.confidence ? <span className="status-pill">{item.confidence}</span> : null}
              </div>
              {item.bestFor?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.bestFor.map((label) => (
                    <span key={label} className="mini-label">{label}</span>
                  ))}
                </div>
              ) : null}
              <p className="mt-4 max-w-4xl text-white/68">{item.reason}</p>
              {item.teamNote ? <p className="mt-3 text-sm text-white/60">Upgrade note: {item.teamNote}</p> : null}
              {item.sourceNote ? <p className="mt-2 text-xs uppercase tracking-wide text-white/45">Source check: {item.sourceNote}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Beginner ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Start with the upgrade that fixes the first problem stopping your climb.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Farming ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Rank options by repeatable crystal income, return trips, and how long you survive near the top.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Endgame ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Add sharper rankings after upgrade costs, crystal values, and mountain rotation data are confirmed.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Team combo notes"
          title="Good choices depend on your current bottleneck"
          copy="Mine a Mountain is about improving the loop: stay warm, mine faster, carry more, sell crystals, and climb higher."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/guides" className="content-card">
            <span className="mini-label">Build guide</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check upgrade roles</h3>
            <p className="mt-2 text-sm text-white/66">Use guides for warmth, pickaxe, backpack, Digging Luck, and first-session route decisions.</p>
          </Link>
          <Link href="/wiki" className="content-card">
            <span className="mini-label">Wiki</span>
            <h3 className="mt-3 text-lg font-bold text-white">Read system notes</h3>
            <p className="mt-2 text-sm text-white/66">Use wiki pages for crystals, upgrades, mountain status, and source-backed progression notes.</p>
          </Link>
          <Link href="/sources" className="content-card">
            <span className="mini-label">Sources</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check evidence</h3>
            <p className="mt-2 text-sm text-white/66">Use source notes when creator videos, wiki pages, or community reports disagree.</p>
          </Link>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Get codes</Link>
        <Link href="/calculator" className="button-secondary">Use the calculator</Link>
        <Link href="/trello" className="button-secondary">Check source status</Link>
      </div>
    </main>
  );
}
