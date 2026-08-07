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

requireText(".env.example", ["NEXT_PUBLIC_ANALYTICS_ID="]);
requireText("src/app/layout.tsx", ["<Navbar />", "{children}", "<Footer />"]);
requireText("src/lib/runtime-config.ts", ["NEXT_PUBLIC_ANALYTICS_ID"]);
requireText("src/app/privacy/page.tsx", [
  "Google AdSense",
  "does not currently load third-party advertising scripts",
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
requireText("public/ads.txt", ["google.com, pub-7762683401538954, DIRECT, f08c47fec0942fa0"]);

for (const removedPath of [
  "adsterra_placement_manifest.json",
  "src/components/ads/index.tsx",
  "src/data/adsterra.config.ts"
]) {
  if (existsSync(join(root, removedPath))) failures.push(`${removedPath}: dormant third-party ad implementation still exists`);
}

const sitemapSource = read("src/app/sitemap.ts");
if (sitemapSource.includes("new Date()")) failures.push("src/app/sitemap.ts: uses build-time new Date()");

const layoutSource = read("src/app/layout.tsx");
if (layoutSource.includes("components/ads") || layoutSource.includes("adsenseReviewMode")) failures.push("src/app/layout.tsx: dormant ad switch or component remains mounted");
const jsonLdSource = read("src/components/seo/JsonLd.tsx");
if (jsonLdSource.includes("SearchAction") || jsonLdSource.includes("/search?q=")) failures.push("src/components/seo/JsonLd.tsx: advertises a missing site search route");

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

const productionSourceFiles = [
  ...walk(join(root, "src")),
  join(root, ".env.example")
].filter((path) => existsSync(path) && statSync(path).isFile());

for (const path of productionSourceFiles) {
  const source = readFileSync(path, "utf8");
  for (const forbidden of [
    "Adsterra",
    "adsterra",
    "highperformanceformat.com",
    "effectivecpmnetwork.com",
    "NEXT_PUBLIC_ADSENSE_REVIEW_MODE",
    "ad-shell"
  ]) {
    if (source.includes(forbidden)) failures.push(`${path.replace(`${root}/`, "")}: production source contains ${forbidden}`);
  }
}

const htmlFiles = walk(join(root, "out")).filter((path) => path.endsWith(".html"));
for (const path of htmlFiles) {
  const html = readFileSync(path, "utf8");
  for (const forbidden of ["Adsterra", "highperformanceformat.com", "effectivecpmnetwork.com", "ad-shell", ">Advertisement<", "adsbygoogle", "pagead2.googlesyndication.com"]) {
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
