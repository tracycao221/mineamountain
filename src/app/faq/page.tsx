import type { Metadata } from "next";
import { expansionPages } from "@/data/seo-expansion";
import { siteConfig } from "@/data/site";
import { ExpansionPage } from "@/components/seo/ExpansionPage";

const page = expansionPages.faq;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${siteConfig.domain}${page.canonical}` }
};

export default function FaqPage() {
  return <ExpansionPage page={page} breadcrumb={[{ name: "FAQ", label: "FAQ", href: page.canonical }]} />;
}
