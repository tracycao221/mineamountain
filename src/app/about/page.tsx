import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { editorialConfig, pageDates } from "@/data/editorial";
import { ArticleMeta, Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `About ${siteConfig.name}`,
  description: `About ${siteConfig.name}, its author, editorial process, and source standards.`,
  alternates: { canonical: `${siteConfig.domain}/about/` }
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <PageIntro
        eyebrow="About us"
        title={`About Michell and ${siteConfig.name}`}
        description={`${siteConfig.name} is an independent Roblox fan resource edited under the stable pen name Michell. The site separates official facts, practical inferences, and details that still need verification.`}
      />
      <ArticleMeta {...pageDates.about} />

      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Who is Michell?</h2>
          <p className="mt-2 leading-7 text-white/68">
            Michell is the stable pen name used by this site&apos;s independent writer and editor. A pen name keeps
            the byline consistent without inventing a public biography or claiming an official relationship with
            Roblox or 10K Steps.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">How pages are reviewed</h2>
          <p className="mt-2 leading-7 text-white/68">
            The editor checks the official Roblox game page and public Roblox APIs first. Creator-owned channels
            and official game media come next. Community guides are used to discover questions, not as permission
            to copy a table or publish an unverified number. Each core article shows its publication, update, and
            source-check dates.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">What the site does not claim</h2>
          <p className="mt-2 leading-7 text-white/68">
            Michell does not claim to be a game developer, Roblox employee, or official support representative.
            Exact crystal prices, upgrade costs, and route results stay unpublished until evidence is strong enough
            to support them.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Corrections</h2>
          <p className="mt-2 leading-7 text-white/68">
            If a page has an outdated code, wrong source status, missing creator link, or unclear upgrade note,
            use the public correction channel with the page URL, the claim, a supporting source, and the date checked.
          </p>
          <Link href="/contact/" className="button-secondary mt-5">Open contact options</Link>
        </article>
      </section>
      <p className="mt-8 text-sm text-white/48">Editorial profile last reviewed {editorialConfig.lastReviewed}.</p>
    </main>
  );
}
