import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/codes", changeFrequency: "daily", priority: 0.95 },
  { path: "/codes/guide", changeFrequency: "daily", priority: 0.82 },
  { path: "/tier-list", changeFrequency: "weekly", priority: 0.9 },
  { path: "/trello", changeFrequency: "weekly", priority: 0.72 },
  { path: "/calculator", changeFrequency: "weekly", priority: 0.85 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/advanced", changeFrequency: "weekly", priority: 0.68 },
  { path: "/guides/backpack", changeFrequency: "weekly", priority: 0.7 },
  { path: "/guides/beginner", changeFrequency: "weekly", priority: 0.72 },
  { path: "/guides/beginner-tips", changeFrequency: "weekly", priority: 0.74 },
  { path: "/guides/warmth", changeFrequency: "weekly", priority: 0.68 },
  { path: "/guides/digging-luck", changeFrequency: "weekly", priority: 0.66 },
  { path: "/guides/levels", changeFrequency: "weekly", priority: 0.7 },
  { path: "/guides/pickaxe", changeFrequency: "weekly", priority: 0.7 },
  { path: "/guides/strategy", changeFrequency: "weekly", priority: 0.76 },
  { path: "/guides/tips", changeFrequency: "weekly", priority: 0.76 },
  { path: "/guides/walkthrough", changeFrequency: "weekly", priority: 0.74 },
  { path: "/wiki", changeFrequency: "weekly", priority: 0.8 },
  { path: "/wiki/crystals", changeFrequency: "weekly", priority: 0.7 },
  { path: "/wiki/upgrade-order", changeFrequency: "weekly", priority: 0.72 },
  { path: "/wiki/upgrades", changeFrequency: "weekly", priority: 0.7 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.72 },
  { path: "/updates", changeFrequency: "daily", priority: 0.75 },
  { path: "/updates/update-log", changeFrequency: "daily", priority: 0.72 },
  { path: "/sources", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/disclosure", changeFrequency: "monthly", priority: 0.3 }
];

function canonicalUrl(path: string) {
  const normalizedPath = path === "" || path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  return `${siteConfig.domain}${normalizedPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return routes
    .map((route) => ({
      url: canonicalUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    }))
    .filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
}
