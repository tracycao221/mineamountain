import Link from "next/link";
import type { ExpansionPage as ExpansionPageData } from "@/data/seo-expansion";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export function ExpansionPage({
  breadcrumb,
  page
}: {
  breadcrumb: Array<{ href: string; label: string; name: string }>;
  page: ExpansionPageData;
}) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, ...breadcrumb.map((item) => ({ name: item.name, href: item.href }))]} />
      <Breadcrumbs items={breadcrumb.map((item) => ({ label: item.label, href: item.href }))} />
      <PageIntro eyebrow={page.eyebrow} title={page.title} description={page.intro}>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="button-secondary">Home</Link>
          {page.related.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className="button-secondary">
              {item.label}
            </Link>
          ))}
        </div>
      </PageIntro>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Player intent"
          title="What this page helps with"
          copy={page.description}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {page.sections.map((section) => (
            <article key={section.title} className="content-card">
              <span className="mini-label">{section.label}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{section.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/66">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      {page.quickChecks?.length ? (
        <section className="mt-10">
          <SectionHeader
            eyebrow="Quick checks"
            title="Before you change your route"
            copy="Use these checks to make the page actionable without relying on unverified numbers."
          />
          <div className="mt-6 grid gap-3">
            {page.quickChecks.map((check) => (
              <div key={check} className="row-link">
                <span>
                  <strong>{check}</strong>
                  <small>Use this as a practical Mine a Mountain decision check before moving to the next guide.</small>
                </span>
                <span aria-hidden="true">-&gt;</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {page.faqs?.length ? (
        <section className="mt-10">
          <SectionHeader
            eyebrow="FAQ"
            title="Quick answers"
            copy="Short answers for related Mine a Mountain search questions."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <article key={faq.q} className="content-card">
                <h2 className="text-lg font-bold text-white">{faq.q}</h2>
                <p className="mt-2 text-sm leading-6 text-white/66">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <SectionHeader
          eyebrow="Related pages"
          title="Keep researching the same route"
          copy="Use these pages to move between codes, guides, wiki notes, and source checks without returning to search."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {page.related.map((item) => (
            <Link key={item.href} href={item.href} className="content-card">
              <span className="mini-label">Related</span>
              <h2 className="mt-3 text-lg font-bold text-white">{item.label}</h2>
              <p className="mt-2 text-sm leading-6 text-white/66">Open this page for the next step in the Mine a Mountain research path.</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
