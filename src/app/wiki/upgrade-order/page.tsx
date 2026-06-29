import type { Metadata } from "next";
import { expansionPages } from "@/data/seo-expansion";
import { siteConfig } from "@/data/site";
import { ExpansionPage } from "@/components/seo/ExpansionPage";

const page = expansionPages.upgradeOrder;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${siteConfig.domain}${page.canonical}` }
};

export default function UpgradeOrderPage() {
  return <ExpansionPage page={page} breadcrumb={[{ name: "Upgrade Order", label: "Upgrade Order", href: page.canonical }]} />;
}
