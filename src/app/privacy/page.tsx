import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} Privacy`,
  description: `Privacy note for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/privacy` }
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Privacy", href: "/privacy" }]} />
      <PageIntro
        eyebrow="Privacy"
        title="Privacy and advertising"
        description="This fan site may use analytics or advertising when configured, but it does not manage Roblox accounts, purchases, support tickets, or moderation."
      />
      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">No Roblox account handling</h2>
          <p className="mt-2 text-white/68">Do not enter Roblox passwords, payment details, or account recovery information on this site.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Third-party links</h2>
          <p className="mt-2 text-white/68">Links to Roblox, Discord, Trello, YouTube, and trackers are separate services with their own policies.</p>
        </article>
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/disclosure" className="content-card">
          <h2 className="text-lg font-bold text-white">Fan-made disclosure</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Confirm that this site is unofficial and source-backed.</p>
        </Link>
        <Link href="/contact" className="content-card">
          <h2 className="text-lg font-bold text-white">Corrections</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Send source-backed correction notes for code, guide, or source updates.</p>
        </Link>
      </section>
    </main>
  );
}
