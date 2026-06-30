import type { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

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
    title: "Hourly mountain claim",
    label: "Official description",
    body: "The Roblox page says there is a new mountain every hour. This site does not list exact rotation names until they are confirmed from reliable sources."
  },
  {
    title: "Digging Luck bonus",
    label: "Official description",
    body: "The game page says players can like the game and join the group for +1 Digging Luck. Treat exact luck math as pending until tested."
  },
  {
    title: "Code status",
    label: "Latest site check",
    body: "No active Mine a Mountain codes were verified during the latest site check. New code claims should go through the codes page before being listed as active."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Updates`,
  description: `${siteConfig.gameName} update notes, hourly mountain status, code checks, and source-backed Roblox change tracking.`,
  alternates: { canonical: `${siteConfig.domain}/updates` },
  openGraph: {
    title: `${siteConfig.gameName} Updates`,
    description: `${siteConfig.gameName} update notes, hourly mountain status, code checks, and source-backed Roblox change tracking.`,
    url: `${siteConfig.domain}/updates`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Updates`,
    description: `${siteConfig.gameName} update notes, hourly mountain status, code checks, and source-backed Roblox change tracking.`,
    images: ["/opengraph-image"]
  }
};

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <FaqJsonLd items={updateFaqs} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />

      <PageIntro
        eyebrow="Updates"
        title={`${siteConfig.gameName} Updates`}
        description="Track confirmed update notes, hourly mountain wording, code status, and source checks without mixing verified details with guesses."
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
          <Link href="/updates/update-log" className="button-secondary">
            Update log
          </Link>
        </div>
      </PageIntro>

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
          title="What is confirmed right now"
          copy="These notes focus on what can be tied to the Roblox page or the latest site check. Add exact mountain names, crystal values, and upgrade costs only after confirmation."
        />
        <div className="mt-6 grid gap-4">
          {updateNotes.map((note) => (
            <article key={note.title} className="content-card">
              <span className="mini-label">{note.label}</span>
              <h2 className="mt-3 text-2xl font-extrabold text-white">{note.title}</h2>
              <p className="mt-3 max-w-4xl text-white/68">{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Next checks"
          title="What should be verified before deeper pages"
          copy="The launch version should stay useful without inventing data. These checks are the next content targets."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/wiki" className="content-card">
            <span className="mini-label">Wiki</span>
            <h3 className="mt-3 text-lg font-bold text-white">Crystal values</h3>
            <p className="mt-2 text-sm text-white/66">Confirm crystal names, value ranges, and which routes produce better cash per climb.</p>
          </Link>
          <Link href="/calculator" className="content-card">
            <span className="mini-label">Calculator</span>
            <h3 className="mt-3 text-lg font-bold text-white">Upgrade costs</h3>
            <p className="mt-2 text-sm text-white/66">Replace estimates with tested warmth, pickaxe, and backpack costs when available.</p>
          </Link>
          <Link href="/trello" className="content-card">
            <span className="mini-label">Trello</span>
            <h3 className="mt-3 text-lg font-bold text-white">Creator links</h3>
            <p className="mt-2 text-sm text-white/66">Keep official Trello, Discord, and community-link status separate from unverified claims.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
