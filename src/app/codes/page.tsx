import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Codes & Code Status`,
  description: `Mine a Mountain codes and code status with active-code checks, no-fake-code policy, redeem steps, source-watch notes, and Discord verification guidance.`,
  alternates: { canonical: `${siteConfig.domain}/codes/` },
  openGraph: {
    title: `${siteConfig.gameName} Codes and Code Status`,
    description: `Active ${siteConfig.gameName} codes, code rewards, redemption steps, and source confidence notes.`,
    url: `${siteConfig.domain}/codes/`,
    images: ["/codes/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes and Code Status`,
    description: `Active ${siteConfig.gameName} codes, code rewards, redemption steps, and source confidence notes.`,
    images: ["/codes/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes and Code Status`}
        description="Use this page to check Mine a Mountain codes, code rewards, and source status. Unconfirmed reward strings stay off the active list until a reliable source checks out."
      />

      <section className="mt-10">
          <SectionHeader
            eyebrow="Active list"
            title="Verified active Mine a Mountain codes"
            copy="No active Mine a Mountain code is listed unless it has a checked source. That keeps copied screenshots, guessed reward strings, and unrelated Roblox codes out of the table."
          />
        {activeCodes.length ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {activeCodes.map((code) => (
              <article key={code.code} className="content-card">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                  <span className="status-pill">{code.status}</span>
                </div>
                <p className="mt-3 text-white/70">{code.reward}</p>
                <p className="mt-2 text-sm text-white/45">Added or checked: {code.addedDate}</p>
              </article>
            ))}
          </div>
        ) : (
          <article className="content-card mt-6">
            <span className="mini-label">Checked June 27, 2026</span>
            <h2 className="mt-3 text-2xl font-extrabold text-white">No verified active codes yet</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">
              We checked the Roblox game listing and public source surfaces, but did not find a reliable active Mine a Mountain code.
              When a code is confirmed, it belongs here with its reward, source, and checked date. Until then, this page should answer code searches without inventing rewards.
            </p>
          </article>
        )}
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Code intent map"
          title="What to do when a Mine a Mountain code claim appears"
          copy="GSC has discovered this URL but has not indexed it yet, so the page now gives a clearer first-fold answer for code searches instead of only saying no verified code is available."
        />
        <div className="mt-6 overflow-hidden rounded-lg border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-white/[0.06] text-white">
              <tr>
                <th className="px-4 py-3">Claim type</th>
                <th className="px-4 py-3">Safe action</th>
                <th className="px-4 py-3">Next page</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/68">
              <tr>
                <td className="px-4 py-4 font-semibold text-white">New reward string</td>
                <td className="px-4 py-4">Verify the exact spelling and reward before trying it in-game.</td>
                <td className="px-4 py-4">Sources</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-white">Discord screenshot</td>
                <td className="px-4 py-4">Check whether the Discord or board is creator-owned before trusting it.</td>
                <td className="px-4 py-4">Trello / Discord status</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-white">No working code</td>
                <td className="px-4 py-4">Use warmth, pickaxe, and backpack upgrades instead of wasting runs on copied codes.</td>
                <td className="px-4 py-4">Guides</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem flow"
            title="How to redeem Mine a Mountain codes"
            copy="Update these steps after checking the live in-game UI. Roblox code flows often move between shop, settings, menu, and event panels."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Finish any tutorial gate that hides menus.</li>
            <li>3. Find the Codes, Rewards, Shop, or Settings panel.</li>
            <li>4. Paste the code exactly, then claim the reward.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Verification"
            title="Where Mine a Mountain codes are announced"
            copy="Code claims should be checked against the Roblox page and creator-owned surfaces before they appear as active rewards."
          />
          <div className="mt-5 grid gap-3 text-sm text-white/66">
            <p>Use the official Roblox page as the source of record for title, creator, and live update wording.</p>
            <p>Use the Trello and Discord status page to avoid fake community links and copied code screenshots.</p>
            <p>Keep the no-fake-codes policy visible when searches spike before any active reward is verified.</p>
          </div>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Mine a Mountain code checks"
          copy="Short answers for players searching both Mine a Mountain codes and Mine a Mountain code."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <h2 className="text-lg font-bold text-white">Are there active codes?</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">No verified active Mine a Mountain codes are listed right now. Add one only after a reliable source confirms the exact string and reward.</p>
          </article>
          <article className="content-card">
            <h2 className="text-lg font-bold text-white">Why not list rumored rewards?</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">Rumored Roblox rewards waste player time. This page separates search intent from actual checked code evidence.</p>
          </article>
          <article className="content-card">
            <h2 className="text-lg font-bold text-white">Where should I check next?</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">Watch official update text, verified creator channels, and the source-status page before trusting a Discord screenshot.</p>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes/guide" className="content-card">
          <span className="mini-label">Codes guide</span>
          <h2 className="mt-3 text-lg font-bold text-white">How code claims are checked</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Use the codes guide to understand source checks before trying unverified reward strings.</p>
        </Link>
        <Link href="/updates/update-log" className="content-card">
          <span className="mini-label">Update log</span>
          <h2 className="mt-3 text-lg font-bold text-white">Watch update moments</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Code claims often appear around visible game changes, so pair this page with the update log.</p>
        </Link>
        <Link href="/trello" className="content-card">
          <span className="mini-label">Discord status</span>
          <h2 className="mt-3 text-lg font-bold text-white">Verify community links</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Check whether a Discord, Trello, or wiki source is official before trusting code claims.</p>
        </Link>
        <Link href="/faq" className="content-card">
          <span className="mini-label">FAQ</span>
          <h2 className="mt-3 text-lg font-bold text-white">Quick code answers</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Read short answers for codes, upgrades, updates, and source boundaries.</p>
        </Link>
      </section>
    </main>
  );
}
