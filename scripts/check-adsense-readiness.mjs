import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const failures = [];

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

function requireText(relativePath, patterns) {
  const text = read(relativePath);
  for (const pattern of patterns) {
    if (!text.includes(pattern)) failures.push(`${relativePath}: missing ${JSON.stringify(pattern)}`);
  }
}

requireText(".env.example", ["NEXT_PUBLIC_ADSENSE_REVIEW_MODE=true"]);
requireText("src/app/layout.tsx", ["runtimeConfig.adsenseReviewMode"]);
requireText("src/lib/runtime-config.ts", [
  "adsterraEnablePopunder: false",
  "adsterraEnableSocialBar: false",
  "adsterraEnableStickyRail: false",
  "adsterraSmartLinkUrl: undefined"
]);
requireText("src/app/privacy/page.tsx", [
  "Google AdSense",
  "cookies",
  "web beacons",
  "IP addresses",
  "personalized ads",
  "policies.google.com/technologies/partner-sites",
  "Google-certified consent management platform"
]);
requireText("src/app/about/page.tsx", ["Michell", "stable pen name", "The editor checks"]);
requireText("src/data/editorial.ts", ["contact@mineamountain.com", "mailto:contact@mineamountain.com"]);
requireText("src/app/contact/page.tsx", ["editorialConfig.publicContactHref", "no website login is required", "editorialConfig.contactUrl"]);
requireText("src/app/privacy/page.tsx", ["Cloudflare Email Routing", "visitor database"]);
requireText("src/components/layout/Footer.tsx", ["editorialConfig.publicContactHref", "Email Michell"]);
requireText("src/app/sitemap.ts", ["lastModified: route.lastModified"]);

const sitemapSource = read("src/app/sitemap.ts");
if (sitemapSource.includes("new Date()")) failures.push("src/app/sitemap.ts: uses build-time new Date()");

const layoutSource = read("src/app/layout.tsx");
if (layoutSource.includes("AdsterraGlobalScripts")) failures.push("src/app/layout.tsx: global ad scripts remain mounted");
const jsonLdSource = read("src/components/seo/JsonLd.tsx");
if (jsonLdSource.includes("SearchAction") || jsonLdSource.includes("/search?q=")) failures.push("src/components/seo/JsonLd.tsx: advertises a missing site search route");
const adComponentSource = read("src/components/ads/index.tsx");
if (adComponentSource.includes("<AdsterraRail")) failures.push("src/components/ads/index.tsx: sticky rail remains mounted");
if (adComponentSource.includes("<AdsterraNative1")) failures.push("src/components/ads/index.tsx: native ad remains mounted");
if (adComponentSource.includes("<AdsterraLeaderboard")) failures.push("src/components/ads/index.tsx: top leaderboard remains mounted");

const redirects = read("public/_redirects");
for (const legacyRoute of [
  "/codes/guide",
  "/guides/beginner-tips",
  "/guides/tips",
  "/guides/walkthrough",
  "/guides/warmth",
  "/guides/pickaxe",
  "/guides/backpack",
  "/wiki/upgrade-order",
  "/guides/advanced",
  "/guides/strategy",
  "/guides/levels",
  "/guides/digging-luck",
  "/updates/update-log"
]) {
  if (!redirects.includes(legacyRoute)) failures.push(`public/_redirects: missing ${legacyRoute}`);
  if (sitemapSource.includes(`path: "${legacyRoute}"`)) failures.push(`src/app/sitemap.ts: legacy route remains indexed: ${legacyRoute}`);
}

const authoredPages = [
  "src/app/page.tsx",
  "src/app/codes/page.tsx",
  "src/app/tier-list/page.tsx",
  "src/app/calculator/page.tsx",
  "src/app/guides/page.tsx",
  "src/app/guides/beginner/page.tsx",
  "src/app/wiki/page.tsx",
  "src/app/wiki/upgrades/page.tsx",
  "src/app/wiki/crystals/page.tsx",
  "src/app/faq/page.tsx",
  "src/app/updates/page.tsx",
  "src/app/sources/page.tsx",
  "src/app/trello/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/disclosure/page.tsx"
];

for (const page of authoredPages) {
  if (!read(page).includes("<ArticleMeta")) failures.push(`${page}: missing visible ArticleMeta`);
}

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = walk(join(root, "out")).filter((path) => path.endsWith(".html"));
for (const path of htmlFiles) {
  const html = readFileSync(path, "utf8");
  for (const forbidden of ["highperformanceformat.com", "effectivecpmnetwork.com", "ad-shell", ">Advertisement<"]) {
    if (html.includes(forbidden)) failures.push(`${path.replace(`${root}/`, "")}: review-mode HTML contains ${forbidden}`);
  }
  if (html.includes("SearchAction") || html.includes("/search?q=")) failures.push(`${path.replace(`${root}/`, "")}: rendered HTML advertises a missing site search route`);
}

if (failures.length) {
  console.error("ADSENSE_READINESS_CHECK_FAILED");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`ADSENSE_READINESS_CHECK_PASS pages=${authoredPages.length} html=${htmlFiles.length}`);
