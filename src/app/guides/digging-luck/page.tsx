import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Digging Luck Guide`,
  description: `${siteConfig.gameName} Digging Luck guide with verified like and group bonus wording plus testing notes.`,
  alternates: { canonical: `${siteConfig.domain}/guides/digging-luck` }
};

export default function DiggingLuckGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Digging Luck", href: "/guides/digging-luck" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Digging Luck", href: "/guides/digging-luck" }]} />
      <PageIntro
        eyebrow="Digging Luck"
        title={`${siteConfig.gameName} Digging Luck Guide`}
        description="The official Roblox description says liking the game and joining the group grants +1 Digging Luck. Exact drop-rate math still needs live testing."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Verified wording"
          title="What is known"
          copy="Keep the confirmed bonus separate from untested claims about rare crystal odds or exact cash value."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Confirmed</span>
            <h2 className="mt-3 text-xl font-bold text-white">Like and group bonus</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">The public game description mentions +1 Digging Luck for liking and joining the group.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Needs testing</span>
            <h2 className="mt-3 text-xl font-bold text-white">Rare crystal odds</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Do not publish exact odds until repeated in-game samples or creator notes support them.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Use with</span>
            <h2 className="mt-3 text-xl font-bold text-white">Route and upgrade checks</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Luck may matter more once your route reaches crystal spots where rarity can actually pay off.</p>
          </article>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/wiki/crystals" className="button-secondary">Crystal notes</Link>
        <Link href="/updates" className="button-secondary">Update notes</Link>
        <Link href="/sources" className="button-secondary">Source checklist</Link>
      </div>
    </main>
  );
}
