import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { pageDates } from "@/data/editorial";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ArticleMeta, Breadcrumbs, EvidenceLabel, PageIntro, SectionHeader } from "@/components/ui/content";

const items = [
  {
    q: "Are there working Mine a Mountain codes?",
    a: "No active code is verified on this site as of August 6, 2026. The official Roblox description checked on that date does not publish a reward string."
  },
  {
    q: "What should I upgrade first?",
    a: "There is no verified universal order. Compare Warmth when cold ends the route, Pickaxe when mining consumes the route, and Backpack when capacity causes extra sell trips."
  },
  {
    q: "How often does the mountain change?",
    a: "The official Roblox description says there is a new mountain every hour. This site has not verified a complete list of rotation names."
  },
  {
    q: "What does +1 Digging Luck mean?",
    a: "The official listing says liking the game and joining the group grants +1 Digging Luck. It does not provide exact probability or stacking math, so this site does not invent it."
  },
  {
    q: "Does the calculator show exact return on investment?",
    a: "No. It diagnoses whether cold, mining speed, or capacity appears to be the route bottleneck and suggests a comparable in-game test."
  },
  {
    q: "Is this the official Mine a Mountain wiki?",
    a: "No. It is an independent fan resource edited under the pen name Michell. Roblox and creator-owned channels remain authoritative."
  }
];

export const metadata: Metadata = {
  title: `${siteConfig.gameName} FAQ`,
  description: `Checked answers about ${siteConfig.gameName} codes, upgrades, hourly mountains, Digging Luck, and the route planner.`,
  alternates: { canonical: `${siteConfig.domain}/faq/` }
};

export default function FaqPage() {
  const description = `Checked answers about ${siteConfig.gameName} codes, upgrades, hourly mountains, Digging Luck, and the route planner.`;
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />
      <FaqJsonLd items={items} />
      <ArticleJsonLd headline={`${siteConfig.gameName} FAQ`} description={description} path="/faq/" published={pageDates.faq.published} updated={pageDates.faq.updated} />
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
      <PageIntro eyebrow="FAQ" title={`${siteConfig.gameName} Questions and Answers`} description={description} />
      <ArticleMeta {...pageDates.faq} />

      <section className="mt-10">
        <SectionHeader eyebrow="Checked answers" title="Short answers with clear evidence limits" copy="Each answer links back to a stronger page when the question needs explanation or an interactive test." />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-xl font-bold text-white">{item.q}</h2>
              <p className="mt-3 text-sm leading-6 text-white/68">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes/" className="content-card"><span className="mini-label">Codes</span><h2 className="mt-3 text-lg font-bold text-white">Latest code check</h2><p className="mt-2 text-sm text-white/66">See the source policy and current no-verified-codes state.</p></Link>
        <Link href="/wiki/upgrades/" className="content-card"><span className="mini-label">Upgrades</span><h2 className="mt-3 text-lg font-bold text-white">Decision guide</h2><p className="mt-2 text-sm text-white/66">Compare Warmth, Pickaxe, and Backpack by the problem they solve.</p></Link>
        <Link href="/sources/" className="content-card"><span className="mini-label">Sources</span><h2 className="mt-3 text-lg font-bold text-white">Evidence method</h2><p className="mt-2 text-sm text-white/66">See which facts are official and which values remain withheld.</p></Link>
      </section>
      <EvidenceLabel level="Confirmed">FAQ last source-checked August 6, 2026.</EvidenceLabel>
    </main>
  );
}
