import { faqs, siteConfig, tierPreview } from "@/data/site";
import { editorialConfig } from "@/data/editorial";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.domain,
        description: siteConfig.description
      }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: `${siteConfig.gameName} Calculator`,
        operatingSystem: "Web",
        applicationCategory: "GameApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        },
        description: `Free ${siteConfig.gameName} Roblox calculator and decision helper.`
      }}
    />
  );
}

export function FaqJsonLd({ items = faqs.home }: { items?: { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a
          }
        }))
      }}
    />
  );
}

export function ItemListJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${siteConfig.gameName} Tier List`,
        numberOfItems: tierPreview.length,
        itemListElement: tierPreview.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: `${siteConfig.domain}/tier-list`
        }))
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.domain}${item.href}`
        }))
      }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  description,
  path,
  published,
  updated
}: {
  headline: string;
  description: string;
  path: string;
  published: string;
  updated: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        mainEntityOfPage: `${siteConfig.domain}${path}`,
        datePublished: published,
        dateModified: updated,
        author: {
          "@type": "Person",
          name: editorialConfig.author.name,
          url: `${siteConfig.domain}${editorialConfig.author.url}`,
          email: editorialConfig.publicContactEmail
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.domain,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "editorial",
            email: editorialConfig.publicContactEmail
          }
        }
      }}
    />
  );
}
