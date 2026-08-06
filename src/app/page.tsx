import type { Metadata } from "next";
import Link from "next/link";
import {
  activeCodes,
  editorialSignals,
  faqs,
  guideClusters,
  heroMetrics,
  officialLinks,
  siteConfig,
  tierPreview,
  toolCards,
  wikiCards
} from "@/data/site";
import { editorialConfig, pageDates } from "@/data/editorial";
import { FaqJsonLd, SoftwareApplicationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, EvidenceLabel, SectionHeader, TrustNote } from "@/components/ui/content";
import { BrandHero } from "@/components/home/BrandHero";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Wiki, Codes, Tier List and Tools`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    title: `${siteConfig.gameName} Wiki, Codes and Tools`,
    description: siteConfig.description,
    url: siteConfig.domain,
    type: "website",
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Wiki, Codes and Tools`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

export default function HomePage() {
  return (
    <main>
      <WebSiteJsonLd />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.home} />

      <BrandHero />

      <div className="mx-auto max-w-7xl px-4">
        <ArticleMeta {...pageDates.home} />
      </div>

      <section className="border-y border-white/10 bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="bg-white/[0.03] px-4 py-4">
              <div className="text-2xl font-bold text-[color:var(--accent)]">{metric.value}</div>
              <div className="mt-1 text-sm font-semibold text-white">{metric.label}</div>
              <div className="mt-1 text-sm text-white/60">{metric.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Freshness center"
            title={`${siteConfig.gameName} codes and update status`}
            copy="The homepage shows the latest code check and sends players to the full status page before they try copied reward strings."
          />
          <Link className="button-secondary" href="/codes">
            View all codes
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {activeCodes.length ? activeCodes.slice(0, 4).map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex items-center justify-between gap-3">
                <span className="status-pill">{code.status}</span>
                <span className="text-xs text-white/50">{code.addedDate}</span>
              </div>
              <h3 className="mt-4 font-mono text-xl font-bold text-[color:var(--accent)]">{code.code}</h3>
              <p className="mt-2 text-sm text-white/65">{code.reward}</p>
            </article>
          )) : (
            <article className="content-card md:col-span-2 lg:col-span-4">
              <span className="mini-label">Checked August 6, 2026</span>
              <h3 className="mt-3 text-2xl font-bold text-white">No verified active code is listed</h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/66">The official Roblox description checked for this review contains no reward string. The site will not fill this space with copied or guessed codes.</p>
              <EvidenceLabel level="Confirmed">Official Roblox listing checked; in-game code UI still needs direct verification.</EvidenceLabel>
            </article>
          )}
        </div>
      </section>

      <section className="bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Tier preview"
            title={`${siteConfig.gameName} tier list preview`}
            copy="There is no universal first-place upgrade. Each category moves to the front only when it fixes the problem ending the current route."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {tierPreview.map((item) => (
              <Link key={item.name} href="/tier-list" className="content-card">
                <div className="flex items-center justify-between">
                  <span className="tier-badge">{item.tier}</span>
                  <span className="text-sm text-white/50">{item.role}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-white/65">{item.reason}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Core tools"
          title="Tools players can use immediately"
          copy="Start with codes, tier list, calculator, and source checks before spending rare resources or committing to a build."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {toolCards.map((tool) => (
            <Link key={tool.href} href={tool.href} className="content-card">
              <span className="mini-label">{tool.eyebrow}</span>
              <h3 className="mt-3 text-xl font-bold text-white">{tool.title}</h3>
              <p className="mt-2 text-sm text-white/65">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Guides"
              title="Pick the next problem to solve"
              copy="The guide library has been consolidated so each destination solves a different problem."
            />
            <div className="mt-6 grid gap-3">
              {guideClusters.map((guide) => (
                <Link key={guide.href} href={guide.href} className="row-link">
                  <span>
                    <strong>{guide.title}</strong>
                    <small>{guide.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Wiki coverage"
              title="Confirmed Mine a Mountain systems"
              copy="The wiki stays focused on crystals, upgrades, and the hourly mountain loop instead of inventing unrelated entities."
            />
            <div className="mt-6 grid gap-3">
              {wikiCards.map((item) => (
                <Link key={item.href} href={item.href} className="row-link">
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="Source check"
          title="Official and community sources"
          copy="Use these links and notes to see what is official, what is community reported, and what still needs checking."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{link.title}</h3>
                <p className="mt-2 text-sm text-white/65">{link.description}</p>
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
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {editorialSignals.map((signal) => (
            <TrustNote key={signal.title} title={signal.title} body={signal.body} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Official snapshot" title="A dated Roblox status—not an evergreen counter" copy={`Captured ${editorialConfig.officialSnapshot.capturedAt}. Live values change continuously, so this snapshot is evidence of the check rather than a promise that the numbers are current today.`} />
            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="content-card"><dt className="text-xs uppercase text-white/45">Players</dt><dd className="mt-2 text-2xl font-bold text-white">{editorialConfig.officialSnapshot.playerCount.toLocaleString("en-US")}</dd></div>
              <div className="content-card"><dt className="text-xs uppercase text-white/45">Visits</dt><dd className="mt-2 text-2xl font-bold text-white">{editorialConfig.officialSnapshot.visits.toLocaleString("en-US")}</dd></div>
              <div className="content-card"><dt className="text-xs uppercase text-white/45">Favorites</dt><dd className="mt-2 text-2xl font-bold text-white">{editorialConfig.officialSnapshot.favorites.toLocaleString("en-US")}</dd></div>
              <div className="content-card"><dt className="text-xs uppercase text-white/45">Positive votes</dt><dd className="mt-2 text-2xl font-bold text-white">{editorialConfig.officialSnapshot.upVotes.toLocaleString("en-US")}</dd></div>
            </dl>
          </div>
          <figure className="official-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={editorialConfig.officialMedia[0].src} alt={editorialConfig.officialMedia[0].alt} width="768" height="432" />
            <figcaption>{editorialConfig.officialMedia[0].caption} Source: Roblox game media API.</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeader
          eyebrow="FAQ"
          title={`${siteConfig.gameName} quick answers`}
          copy="Concise answers for codes, sources, rankings, and the next page to check."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.home.map((faq) => (
            <article key={faq.q} className="content-card">
              <h3 className="text-lg font-bold text-white">{faq.q}</h3>
              <p className="mt-2 text-sm leading-6 text-white/68">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
