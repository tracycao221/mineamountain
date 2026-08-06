import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { editorialConfig, pageDates } from "@/data/editorial";
import { ArticleMeta, Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} Fan-made Disclosure`,
  description: `Unofficial fan-made disclosure for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/disclosure/` }
};

export default function DisclosurePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Disclosure", href: "/disclosure" }]} />
      <PageIntro
        eyebrow="Fan-made disclosure"
        title="Unofficial Roblox fan resource"
        description={`${siteConfig.name} is not operated by Roblox, the game creators, or an official support team. It is a community information site built from public sources.`}
      />
      <ArticleMeta {...pageDates.disclosure} />
      <section className="mt-10 content-card">
        <h2 className="text-2xl font-bold text-white">Official sources remain authoritative</h2>
        <p className="mt-3 leading-7 text-white/68">
          If this site, a community tracker, and the official Roblox game page disagree, treat the official Roblox page and live in-game behavior as more authoritative.
        </p>
        <p className="mt-3 leading-7 text-white/68">
          Advertising is paused during AdSense review. If sponsored links or advertising are enabled later,
          they will be identified and will not change the site&apos;s evidence standards or official-source boundary.
        </p>
        <p className="mt-3 leading-7 text-white/68">
          Editorial corrections can be sent to <a className="text-[color:var(--accent-2)] hover:underline" href={editorialConfig.publicContactHref}>{editorialConfig.publicContactEmail}</a>.
        </p>
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/privacy" className="content-card">
          <h2 className="text-lg font-bold text-white">Privacy note</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">See how advertising, analytics, and third-party links are handled.</p>
        </Link>
        <Link href="/contact" className="content-card">
          <h2 className="text-lg font-bold text-white">Corrections</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Send a correction with a supporting link when a page needs an update.</p>
        </Link>
      </section>
    </main>
  );
}
