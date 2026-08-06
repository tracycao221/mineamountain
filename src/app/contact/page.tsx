import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { editorialConfig, pageDates } from "@/data/editorial";
import { ArticleMeta, Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.name}`,
  description: `Contact and correction guidance for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/contact/` }
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <PageIntro
        eyebrow="Contact"
        title="Corrections and source updates"
        description="Use this page for site corrections, source updates, and editorial feedback. Official game support belongs on Roblox and creator-owned channels."
      />
      <ArticleMeta {...pageDates.contact} />
      <section className="mt-10 content-card">
        <h2 className="text-2xl font-bold text-white">Email Michell</h2>
        <p className="mt-3 leading-7 text-white/68">
          Include the page URL, the claim that needs correction, the source that supports the change, and the date you checked it.
        </p>
        <a
          href={editorialConfig.publicContactHref}
          className="button-primary mt-5"
        >
          Email {editorialConfig.publicContactEmail}
        </a>
        <p className="mt-4 text-sm leading-6 text-white/52">
          This opens your normal email app; no website login is required. Do not include Roblox passwords,
          payment details, authentication codes, or private account information.
        </p>
      </section>
      <section className="mt-6 content-card">
        <h2 className="text-xl font-bold text-white">Public correction option</h2>
        <p className="mt-2 leading-7 text-white/68">
          If the correction can be discussed publicly, you can also open a GitHub issue. Messages posted there are visible to everyone.
        </p>
        <a href={editorialConfig.contactUrl} target="_blank" rel="noreferrer" className="button-secondary mt-5">
          Open a public GitHub issue
        </a>
      </section>
      <section className="mt-6 content-card">
        <h2 className="text-xl font-bold text-white">Official game support</h2>
        <p className="mt-2 leading-7 text-white/68">
          Michell can review this fan site&apos;s text and links. Official support for account recovery, purchases,
          moderation, bugs, and bans must go through Roblox or creator-owned channels.
        </p>
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/disclosure" className="content-card">
          <h2 className="text-lg font-bold text-white">Fan-made disclosure</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Check the unofficial status and source boundaries for this site.</p>
        </Link>
        <Link href="/privacy" className="content-card">
          <h2 className="text-lg font-bold text-white">Privacy note</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Review the privacy and advertising boundary before sending feedback.</p>
        </Link>
      </section>
    </main>
  );
}
