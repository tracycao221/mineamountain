import type { Metadata } from "next";
import Link from "next/link";
import { officialLinks, siteConfig } from "@/data/site";
import { pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Sources`,
  description: `Source and verification notes for ${siteConfig.gameName} codes, guides, wiki claims, and tier-list updates.`,
  alternates: { canonical: `${siteConfig.domain}/sources/` }
};

export default function SourcesPage() {
  const description = "The source hierarchy, check dates, and evidence rules used for Mine a Mountain codes, upgrades, crystals, updates, and guide claims.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Sources", href: "/sources" }]} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Sources`} description={description} path="/sources/" published={pageDates.sources.published} updated={pageDates.sources.updated} />
      <Breadcrumbs items={[{ label: "Sources", href: "/sources" }]} />
      <PageIntro
        eyebrow="Verification"
        title={`${siteConfig.gameName} Sources`}
        description={description}
      />
      <ArticleMeta {...pageDates.sources} />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Primary references"
          title="Where claims should be checked"
          copy="Start with official Roblox and creator-owned links, then use dated community references only when official details are unavailable."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{link.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Official data checked on August 6, 2026</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>Roblox game listing for experience identity, creator, description, and public availability.</li>
            <li>Roblox games API for updated time, players, visits, and favorites.</li>
            <li>Roblox votes API for positive and negative vote counts.</li>
            <li>Roblox game media and thumbnails APIs for official promotional images.</li>
          </ul>
          <EvidenceLabel level="Confirmed">Primary sources are recorded with a check date.</EvidenceLabel>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Information still withheld</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/68">
            <li>Exact upgrade prices and level effects.</li>
            <li>Complete crystal names, values, rarities, and spawn odds.</li>
            <li>Exact hourly mountain rotation names.</li>
            <li>Any code string not tied to a reliable source and live verification.</li>
          </ul>
          <EvidenceLabel level="Needs verification">Missing data is not converted into filler or copied tables.</EvidenceLabel>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Evidence rules"
          title="Which Mine a Mountain claims can change player-facing pages"
          copy="This source page now documents the editorial rule behind code, tier-list, and guide updates so thin source pages do not look interchangeable with Trello or wiki pages."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Code claims</span>
            <h2 className="mt-3 text-xl font-bold text-white">Exact string plus reward</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">A code should name the exact text, reward, source, and checked date before it moves to the active list.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Upgrade claims</span>
            <h2 className="mt-3 text-xl font-bold text-white">Visible mechanic first</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Warmth, pickaxe, backpack, and crystal claims need official wording or repeatable gameplay evidence.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Community claims</span>
            <h2 className="mt-3 text-xl font-bold text-white">Label confidence</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Videos and posts can explain player language, but they stay labelled until stronger evidence confirms the fact.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
