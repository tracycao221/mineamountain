import type { Metadata } from "next";
import Link from "next/link";
import { activeCodes, faqs, siteConfig } from "@/data/site";
import { pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

const codeVerificationLedger = [
  {
    surface: "Official Roblox description",
    checked: "August 7, 2026",
    observed: "The page describes climbing, crystals, cold, cash, three upgrade types, hourly mountains, and Digging Luck. It contains no reward code string or redeem instruction.",
    boundary: "This confirms only that the public description does not announce a code. It does not prove that an in-game code menu can never exist."
  },
  {
    surface: "Official Roblox promotional media",
    checked: "August 7, 2026",
    observed: "The available images show the mountain, crystals, a pickaxe, a backpack, and a crystal weight example. They do not show a code-entry screen.",
    boundary: "Promotional frames are not a complete interface tour, so their silence cannot be used to claim that codes are impossible."
  },
  {
    surface: "Verified creator links in this site's registry",
    checked: "August 7, 2026",
    observed: "No creator-owned Discord invite or Trello board has passed the site's ownership check.",
    boundary: "Unverified community links and screenshots stay outside the active-code evidence chain."
  }
] as const;

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
  const description = "Checked Mine a Mountain code status with a no-fake-code policy, source hierarchy, and safe verification steps.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={faqs.codes} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Codes and Code Status`} description={description} path="/codes/" published={pageDates.codes.published} updated={pageDates.codes.updated} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Freshness-sensitive"
        title={`${siteConfig.gameName} Codes and Code Status`}
        description={description}
      />
      <ArticleMeta {...pageDates.codes} />

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
            <span className="mini-label">Checked August 7, 2026</span>
            <h2 className="mt-3 text-2xl font-extrabold text-white">No active code is confirmed</h2>
            <p className="mt-3 text-sm leading-6 text-white/68">
              We checked the official Roblox game listing and public source surfaces, but did not find a reliable active Mine a Mountain code.
              When a code is confirmed, it belongs here with its reward, source, and checked date. Until then, this page should answer code searches without inventing rewards.
            </p>
            <EvidenceLabel level="Confirmed">No code string appears in the official Roblox description checked on August 7, 2026.</EvidenceLabel>
          </article>
        )}
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Verification ledger"
          title="What was checked—and what each check can prove"
          copy="A dated source trail is more useful than repeating 'no codes' without showing the limits of that conclusion."
        />
        <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="bg-white/[0.06] text-white">
              <tr>
                <th className="px-4 py-3">Surface</th>
                <th className="px-4 py-3">Checked</th>
                <th className="px-4 py-3">Observed</th>
                <th className="px-4 py-3">Evidence boundary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/68">
              {codeVerificationLedger.map((entry) => (
                <tr key={entry.surface}>
                  <th scope="row" className="px-4 py-4 align-top font-semibold text-white">{entry.surface}</th>
                  <td className="px-4 py-4 align-top whitespace-nowrap">{entry.checked}</td>
                  <td className="px-4 py-4 align-top leading-6">{entry.observed}</td>
                  <td className="px-4 py-4 align-top leading-6">{entry.boundary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 content-card">
        <SectionHeader
          eyebrow="Publication gate"
          title="Five checks required before a code becomes active"
          copy="A claim moves into the active table only when the evidence can answer every item below."
        />
        <ol className="mt-5 grid gap-3 text-sm leading-6 text-white/68 md:grid-cols-2">
          <li><strong className="text-white">1. Exact string:</strong> capitalization, numbers, and punctuation are recorded.</li>
          <li><strong className="text-white">2. Exact reward:</strong> the reward is named without guessing its value.</li>
          <li><strong className="text-white">3. Owned source:</strong> the announcement traces to Roblox or a verified creator channel.</li>
          <li><strong className="text-white">4. Current redeem path:</strong> the present interface shows where the string is entered.</li>
          <li><strong className="text-white">5. Dated result:</strong> a successful or expired result has a visible check date.</li>
        </ol>
        <EvidenceLabel level="Needs verification">Until all five fields are available, the claim remains unlisted rather than being labeled active.</EvidenceLabel>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Code claim checklist"
          title="What to do when a Mine a Mountain code claim appears"
          copy="Use the claim itself, its source, and the current in-game interface before treating a reward string as active."
        />
        <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
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
            copy="The public Roblox listing does not document a redeem button, so these are verification steps rather than a claim that a code menu currently exists."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open the game from the official Roblox page.</li>
            <li>2. Finish any tutorial gate that hides menus.</li>
            <li>3. Check whether the current interface has a Codes or Rewards option.</li>
            <li>4. If no official code entry exists, do not use third-party generators or enter Roblox credentials elsewhere.</li>
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
            <p className="mt-2 text-sm leading-6 text-white/66">Rumored Roblox rewards waste player time. This page separates copied claims from evidence that can be checked.</p>
          </article>
          <article className="content-card">
            <h2 className="text-lg font-bold text-white">Where should I check next?</h2>
            <p className="mt-2 text-sm leading-6 text-white/66">Watch official update text, verified creator channels, and the source-status page before trusting a Discord screenshot.</p>
          </article>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/sources" className="content-card">
          <span className="mini-label">Sources</span>
          <h2 className="mt-3 text-lg font-bold text-white">How code claims are checked</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Review the source hierarchy before trying an unverified reward string.</p>
        </Link>
        <Link href="/updates" className="content-card">
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
