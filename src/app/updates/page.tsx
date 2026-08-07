import type { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";
import { editorialConfig, pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

const updateFaqs = [
  {
    q: `How often does ${siteConfig.gameName} update?`,
    a: "The official Roblox description says a new mountain appears every hour. Exact rotation names and reward details should still be checked in-game or through creator-owned sources."
  },
  {
    q: `Where should ${siteConfig.gameName} update claims be verified?`,
    a: "Start with the official Roblox page, then use verified creator-owned channels and dated community reports when official details are not available."
  }
];

const updateNotes = [
  {
    date: "2026-08-07",
    title: "Evidence-led guide and calculator update",
    label: "Editorial change",
    body: "Michell added a dated code-check ledger, controlled upgrade worksheet, official-media crystal observations, and a browser-only two-run comparison tool. Dormant third-party advertising code was removed from this site while AdSense review remains pending."
  },
  {
    date: "2026-08-06",
    title: "Full source and content review",
    label: "Editorial change",
    body: "Michell rechecked the official Roblox listing and public API snapshot, paused third-party ads for AdSense review, consolidated overlapping guides, and removed unsupported exact-value expectations."
  },
  {
    date: "2026-08-05",
    title: "Roblox public record changed",
    label: "Official API timestamp",
    body: "The public Roblox games API reported the experience updated at 2026-08-05 20:00 UTC. The timestamp does not identify a patch, so this log does not invent patch notes."
  },
  {
    date: "2026-06-27",
    title: "Initial official-source baseline",
    label: "Source check",
    body: "The site recorded the official creator, climb-mine-sell loop, cold pressure, three upgrade categories, hourly mountain wording, and +1 Digging Luck wording. No verified active code was added."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates`,
  description: `${siteConfig.gameName} update notes, hourly mountain status, code checks, and dated Roblox change tracking.`,
  alternates: { canonical: `${siteConfig.domain}/updates/` },
  openGraph: {
    title: `${siteConfig.gameName} Updates`,
    description: `${siteConfig.gameName} update notes, hourly mountain status, code checks, and dated Roblox change tracking.`,
    url: `${siteConfig.domain}/updates/`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Updates`,
    description: `${siteConfig.gameName} update notes, hourly mountain status, code checks, and dated Roblox change tracking.`,
    images: ["/opengraph-image"]
  }
};

export default function UpdatesPage() {
  const description = "A dated Mine a Mountain update log that separates observable Roblox changes, code checks, and editorial revisions from unverified patch claims.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <FaqJsonLd items={updateFaqs} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Updates`} description={description} path="/updates/" published={pageDates.updates.published} updated={pageDates.updates.updated} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />

      <PageIntro
        eyebrow="Updates"
        title={`${siteConfig.gameName} Updates`}
        description={description}
      >
        <div className="flex flex-wrap gap-3">
          <a href={gameConfig.dataSources.officialGameUrl} className="button-secondary" target="_blank" rel="noreferrer">
            Open Roblox page
          </a>
          <Link href="/codes" className="button-secondary">
            Check codes
          </Link>
          <Link href="/sources" className="button-secondary">
            View sources
          </Link>
        </div>
      </PageIntro>
      <ArticleMeta {...pageDates.updates} />

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Checked date</span>
          <h2 className="mt-3 text-xl font-bold text-white">{siteConfig.lastUpdated}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Update notes should be refreshed after visible Roblox page changes, creator posts, or repeated in-game reports.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Cadence</span>
          <h2 className="mt-3 text-xl font-bold text-white">{gameConfig.updateCadence}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Fast-moving code and update claims need dated checks so players can see what is current.
          </p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source rule</span>
          <h2 className="mt-3 text-xl font-bold text-white">Official first</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">
            Roblox and creator-owned links should outrank community summaries when details disagree.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Current notes"
          title="Dated changes and checks"
          copy="A date appears only when an official record or this site's published content actually changed."
        />
        <div className="mt-6 grid gap-4">
          {updateNotes.map((note) => (
            <article key={note.title} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3"><span className="mini-label">{note.label}</span><time dateTime={note.date} className="text-sm font-bold text-white/55">{note.date}</time></div>
              <h2 className="mt-3 text-2xl font-extrabold text-white">{note.title}</h2>
              <p className="mt-3 max-w-4xl text-white/68">{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Current official snapshot"
          title="What was observable on August 6, 2026"
          copy="These values came from Roblox public APIs and are dated because they will change."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card"><span className="mini-label">Roblox updated</span><h3 className="mt-3 text-lg font-bold text-white">August 5, 2026</h3><p className="mt-2 text-sm text-white/66">Public API timestamp: {editorialConfig.officialSnapshot.robloxUpdatedAt}</p></article>
          <article className="content-card"><span className="mini-label">Players at capture</span><h3 className="mt-3 text-lg font-bold text-white">{editorialConfig.officialSnapshot.playerCount.toLocaleString("en-US")}</h3><p className="mt-2 text-sm text-white/66">Snapshot, not a live counter.</p></article>
          <article className="content-card"><span className="mini-label">Visits at capture</span><h3 className="mt-3 text-lg font-bold text-white">{editorialConfig.officialSnapshot.visits.toLocaleString("en-US")}</h3><p className="mt-2 text-sm text-white/66">Snapshot, not a current guarantee.</p></article>
        </div>
        <EvidenceLabel level="Confirmed">Roblox public games and votes APIs, captured {editorialConfig.officialSnapshot.capturedAt}.</EvidenceLabel>
      </section>
    </main>
  );
}
