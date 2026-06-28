import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Beginner Guide`,
  description: `Beginner guide for ${siteConfig.gameName}: climb, mine crystals, sell for cash, avoid freezing, and choose early upgrades.`,
  alternates: { canonical: `${siteConfig.domain}/guides/beginner` }
};

export default function BeginnerGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Beginner", href: "/guides/beginner" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Beginner", href: "/guides/beginner" }]} />
      <PageIntro
        eyebrow="Beginner guide"
        title={`${siteConfig.gameName} Beginner Guide`}
        description="Start with the simple loop: climb as high as you can, mine crystals, sell them for cash, then upgrade the bottleneck that ended your run."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="First session"
          title="What to do first"
          copy="The safest early path is to learn when cold, mining time, or bag capacity is slowing your progress."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Step 1</span>
            <h2 className="mt-3 text-xl font-bold text-white">Climb and test the cold</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">If freezing ends the run before you reach better crystals, warmth is the likely first upgrade.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Step 2</span>
            <h2 className="mt-3 text-xl font-bold text-white">Mine crystals and sell</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">If rocks take too long to break, pickaxe upgrades should improve cash speed.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Step 3</span>
            <h2 className="mt-3 text-xl font-bold text-white">Watch backpack capacity</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">If you keep returning to sell before freezing or mining speed matter, backpack capacity is the bottleneck.</p>
          </article>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/calculator" className="button-secondary">Use calculator</Link>
        <Link href="/guides/warmth" className="button-secondary">Warmth guide</Link>
        <Link href="/wiki/crystals" className="button-secondary">Crystal notes</Link>
      </div>
    </main>
  );
}
