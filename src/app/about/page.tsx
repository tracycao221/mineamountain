import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `About ${siteConfig.name}`,
  description: `About ${siteConfig.name}, its author, editorial process, and source standards.`,
  alternates: { canonical: `${siteConfig.domain}/about` }
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <PageIntro
        eyebrow="About us"
        title={`About ${siteConfig.name}`}
        description={`${siteConfig.name} is an independent Roblox fan resource focused on codes, source status, tier notes, tools, and practical player guidance for ${siteConfig.gameName}.`}
      />

      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Author and editor profile</h2>
          <p className="mt-2 leading-7 text-white/68">
            The site is maintained by an independent Roblox guide editor who reviews public game pages,
            creator-owned channels, community source reports, and live player-facing changes before
            treating codes, rankings, or status claims as verified.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">How pages are reviewed</h2>
          <p className="mt-2 leading-7 text-white/68">
            Pages should separate official Roblox or creator sources from community reports. Claims that
            need more evidence stay marked as needs check, disputed, or source-limited until a better
            source is available.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Corrections</h2>
          <p className="mt-2 leading-7 text-white/68">
            If a page has an outdated code, wrong source status, missing creator link, or unclear tier note,
            use the contact page with the page URL, the claim, and the source that supports the correction.
          </p>
        </article>
      </section>
    </main>
  );
}
