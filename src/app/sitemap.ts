import type { MetadataRoute } from "next";
import { pageDates } from "@/data/editorial";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified: string;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1, lastModified: pageDates.home.updated },
  { path: "/codes", changeFrequency: "daily", priority: 0.95, lastModified: pageDates.codes.updated },
  { path: "/tier-list", changeFrequency: "weekly", priority: 0.88, lastModified: pageDates.tierList.updated },
  { path: "/calculator", changeFrequency: "monthly", priority: 0.86, lastModified: pageDates.calculator.updated },
  { path: "/guides", changeFrequency: "monthly", priority: 0.78, lastModified: pageDates.guides.updated },
  { path: "/guides/beginner", changeFrequency: "monthly", priority: 0.82, lastModified: pageDates.beginner.updated },
  { path: "/wiki", changeFrequency: "monthly", priority: 0.78, lastModified: pageDates.wiki.updated },
  { path: "/wiki/upgrades", changeFrequency: "monthly", priority: 0.82, lastModified: pageDates.upgrades.updated },
  { path: "/wiki/crystals", changeFrequency: "monthly", priority: 0.78, lastModified: pageDates.crystals.updated },
  { path: "/faq", changeFrequency: "monthly", priority: 0.68, lastModified: pageDates.faq.updated },
  { path: "/updates", changeFrequency: "daily", priority: 0.78, lastModified: pageDates.updates.updated },
  { path: "/sources", changeFrequency: "monthly", priority: 0.58, lastModified: pageDates.sources.updated },
  { path: "/trello", changeFrequency: "monthly", priority: 0.62, lastModified: pageDates.trello.updated },
  { path: "/about", changeFrequency: "yearly", priority: 0.35, lastModified: pageDates.about.updated },
  { path: "/contact", changeFrequency: "yearly", priority: 0.3, lastModified: pageDates.contact.updated },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3, lastModified: pageDates.privacy.updated },
  { path: "/terms", changeFrequency: "yearly", priority: 0.25, lastModified: pageDates.terms.updated },
  { path: "/disclosure", changeFrequency: "yearly", priority: 0.3, lastModified: pageDates.disclosure.updated }
];

function canonicalUrl(path: string) {
  const normalizedPath = path === "" || path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return `${siteConfig.domain}${normalizedPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: canonicalUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
