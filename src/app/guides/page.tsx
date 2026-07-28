import type { Metadata } from "next";
import Link from "next/link";
import { expansionPages } from "@/data/seo-expansion";
import { guideClusters, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Guides`,
  description: `Beginner, progression, and advanced strategy guides for ${siteConfig.gameName}.`,
  alternates: { canonical: `${siteConfig.domain}/guides` }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title={`${siteConfig.gameName} Guides`}
        description="Use this hub for beginner help, farming routes, boss prep, event notes, and advanced strategy."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Start with pages that match real player questions"
          copy="Pick the guide that matches your current problem, then check codes, rankings, calculator notes, or wiki details before spending rare resources."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideClusters.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Guide route map"
          title="Choose the guide by search intent"
          copy="The guide hub now separates first-session, upgrade, and route-planning questions so Google does not see the hub as a thin list of links."
        />
        <div className="mt-6 overflow-hidden rounded-lg border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-white/[0.06] text-white">
              <tr>
                <th className="px-4 py-3">Search intent</th>
                <th className="px-4 py-3">Open this guide</th>
                <th className="px-4 py-3">Use it when</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/68">
              <tr>
                <td className="px-4 py-4 font-semibold text-white">How to start</td>
                <td className="px-4 py-4">Beginner guide</td>
                <td className="px-4 py-4">You need the first climb, first sale, and first upgrade route.</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-white">What to upgrade</td>
                <td className="px-4 py-4">Pickaxe, backpack, or warmth guide</td>
                <td className="px-4 py-4">A specific bottleneck is stopping your next run.</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-semibold text-white">How to climb higher</td>
                <td className="px-4 py-4">Strategy and walkthrough pages</td>
                <td className="px-4 py-4">You already understand the loop but need a better route order.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Upgrade guides"
          title="Choose the upgrade problem"
          copy="These pages split upgrade intent into warmth, pickaxe, backpack, strategy, and route planning without inventing exact values."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[expansionPages.pickaxeGuide, expansionPages.backpackGuide, expansionPages.strategy].map((page) => (
            <Link key={page.canonical} href={page.canonical} className="content-card">
              <span className="mini-label">{page.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{page.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{page.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
