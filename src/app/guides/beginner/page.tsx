import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { editorialConfig, pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Beginner Guide`,
  description: `Beginner guide for ${siteConfig.gameName}: climb, mine crystals, sell for cash, avoid freezing, and choose early upgrades.`,
  alternates: { canonical: `${siteConfig.domain}/guides/beginner/` }
};

export default function BeginnerGuidePage() {
  const description = "A first-session path based on confirmed game mechanics for learning the climb, mine, sell, and upgrade loop without relying on unverified prices or shortcuts.";
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Beginner", href: "/guides/beginner" }]} />
      <ArticleJsonLd headline={`${siteConfig.gameName} Beginner Guide`} description={description} path="/guides/beginner/" published={pageDates.beginner.published} updated={pageDates.beginner.updated} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Beginner", href: "/guides/beginner" }]} />
      <PageIntro
        eyebrow="Beginner guide"
        title={`${siteConfig.gameName} Beginner Guide`}
        description={description}
      />
      <ArticleMeta {...pageDates.beginner} />

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeader eyebrow="Quick answer" title="Learn one complete route before optimizing" copy="The official Roblox listing confirms the core actions but does not publish a universal first-upgrade order. Your first useful session should reveal which system ends the route." />
          <EvidenceLabel level="Confirmed">Climb, mine rare crystals, avoid freezing, sell for cash, then upgrade Warmth, Pickaxe, and Backpack.</EvidenceLabel>
        </div>
        <figure className="official-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={editorialConfig.officialMedia[0].src} alt={editorialConfig.officialMedia[0].alt} width="768" height="432" />
          <figcaption>{editorialConfig.officialMedia[0].caption} Source: Roblox game media API, checked August 6, 2026.</figcaption>
        </figure>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Step-by-step"
          title="Your first complete climb, mine, and sell route"
          copy="The safest early path is to learn when cold, mining time, or bag capacity is slowing your progress."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Step 1</span>
            <h2 className="mt-3 text-xl font-bold text-white">Climb and test the cold</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Walk a route you can remember. Note where the environment becomes cold and do not assume the highest visible point is already the best farming path.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Step 2</span>
            <h2 className="mt-3 text-xl font-bold text-white">Mine crystals and sell</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Mine what you can reach, then return to the selling point. A crystal only advances the account after it survives the full return-and-sell loop.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Step 3</span>
            <h2 className="mt-3 text-xl font-bold text-white">Watch backpack capacity</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Write down what stopped the route first: cold, slow mining, or a full Backpack. That observation is more useful than copying a generic upgrade order.</p>
          </article>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="First upgrade decision" title="Match the spend to the failed run" copy="These are conditional recommendations, not claims about exact costs or guaranteed returns." />
        <div className="mt-6 overflow-x-auto rounded-lg border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-white/[0.06] text-white"><tr><th className="px-4 py-3">What happened?</th><th className="px-4 py-3">First comparison</th><th className="px-4 py-3">Test after buying</th></tr></thead>
            <tbody className="divide-y divide-white/10 text-white/68">
              <tr><td className="px-4 py-4 font-semibold text-white">Cold forced you back or ended the run</td><td className="px-4 py-4">Warmth</td><td className="px-4 py-4">Repeat the route and check whether the safe turn-back point moved higher.</td></tr>
              <tr><td className="px-4 py-4 font-semibold text-white">You reached crystals but mining consumed the run</td><td className="px-4 py-4">Pickaxe</td><td className="px-4 py-4">Time one comparable crystal before and after upgrading.</td></tr>
              <tr><td className="px-4 py-4 font-semibold text-white">A full bag caused extra sell trips</td><td className="px-4 py-4">Backpack</td><td className="px-4 py-4">Count capacity-driven returns on the same route.</td></tr>
            </tbody>
          </table>
        </div>
        <EvidenceLabel level="Practical inference">The advice follows confirmed upgrade roles; exact tier values remain unverified.</EvidenceLabel>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Claim the confirmed Digging Luck bonus carefully</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">The Roblox description says liking the game and joining the group grants +1 Digging Luck. It does not explain exact drop odds, stacking rules, or how that number changes each crystal.</p>
          <EvidenceLabel level="Confirmed">The +1 wording is official; probability math is not published here.</EvidenceLabel>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Treat each hourly mountain as a fresh route</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">The official description says a new mountain appears every hour. Recheck familiar paths after a rotation instead of assuming the same safe line or crystal placement remains.</p>
          <EvidenceLabel level="Confirmed">Hourly mountain wording comes from the official listing.</EvidenceLabel>
        </article>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">{"If you're stuck"}</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Shorten the route until you can return and sell consistently. Then change only one thing—height, mining target, or upgrade—so the result tells you what improved.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Common mistakes</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Do not chase the highest visible crystal before checking cold and return time. Do not buy the same category from habit, and do not treat promotional crystal colors as a verified price ranking.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="Beginner questions" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card"><h2 className="text-xl font-bold text-white">Should I always upgrade Warmth first?</h2><p className="mt-3 text-sm leading-6 text-white/66">No. Compare Warmth first only when cold ends the route. If mining or capacity stops you earlier, test Pickaxe or Backpack instead.</p></article>
          <article className="content-card"><h2 className="text-xl font-bold text-white">Is the highest route always the best?</h2><p className="mt-3 text-sm leading-6 text-white/66">No. A lower route can be more useful when it produces completed sell trips more consistently. Compare the full loop, not height alone.</p></article>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Use calculator</Link>
        <Link href="/wiki/upgrades" className="button-secondary">Upgrade guide</Link>
        <Link href="/wiki/crystals" className="button-secondary">Crystal notes</Link>
      </div>
    </main>
  );
}
