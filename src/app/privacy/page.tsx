import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { editorialConfig, pageDates } from "@/data/editorial";
import { ArticleMeta, Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} Privacy`,
  description: `Privacy note for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/privacy/` }
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Privacy", href: "/privacy" }]} />
      <PageIntro
        eyebrow="Privacy"
        title="Privacy and advertising"
        description="This policy explains how this fan site and its advertising or analytics partners may use cookies, identifiers, and device information. It also explains the choices available to visitors."
      />
      <ArticleMeta {...pageDates.privacy} />
      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Current advertising status</h2>
          <p className="mt-2 leading-7 text-white/68">
            Third-party advertising is paused while the site is prepared for Google AdSense review. Adsterra
            banners, native ads, sponsored links, Social Bar, and Popunder formats are not loaded in review mode.
            If advertising is enabled later, this policy and the site&apos;s consent controls will be updated before
            personalized ads are served where consent is required.
          </p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Google advertising and partner data</h2>
          <p className="mt-2 leading-7 text-white/68">
            When Google AdSense is enabled, Google and its advertising partners may use cookies, web beacons,
            IP addresses, device or browser information, and other identifiers to deliver, personalize, measure,
            secure, and improve ads. Third-party advertisers may read existing cookies or place their own cookies
            in a visitor&apos;s browser where permitted.
          </p>
          <p className="mt-3 leading-7 text-white/68">
            Learn more in Google&apos;s explanation of
            {" "}<a className="text-[color:var(--accent-2)] hover:underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">how Google uses information from sites or apps that use its services</a>.
          </p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Cookies, analytics, and data use</h2>
          <p className="mt-2 leading-7 text-white/68">
            If Google Analytics or another analytics service is enabled, the service may process page views, referral information, approximate
            location derived from IP address, device type, browser type, and interaction events. This information
            may be used for audience measurement, site reliability, fraud prevention, and content improvement.
            This site does not ask visitors to create an account or provide a Roblox password.
          </p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Personalized ads and your choices</h2>
          <p className="mt-2 leading-7 text-white/68">
            Visitors can manage Google ad personalization or opt out of personalized ads through
            {" "}<a className="text-[color:var(--accent-2)] hover:underline" href="https://myadcenter.google.com/" target="_blank" rel="noreferrer">My Ad Center</a>
            {" "}and can review broader industry opt-out choices at
            {" "}<a className="text-[color:var(--accent-2)] hover:underline" href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer">YourAdChoices</a>.
            Browser controls can also delete or block cookies, although doing so may affect site functionality.
          </p>
          <p className="mt-3 leading-7 text-white/68">
            Before ads requiring consent are enabled for visitors in the EEA, United Kingdom, or Switzerland,
            the site operator must deploy a Google-certified consent management platform that supports consent
            withdrawal. The privacy link in the footer will remain available so visitors can return to these choices.
          </p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Data sharing and retention</h2>
          <p className="mt-2 leading-7 text-white/68">
            Advertising and analytics providers process data under their own policies and may combine it with
            information from other services. This fan site does not sell a visitor-submitted account database.
            Service providers may retain technical data for measurement, security, legal compliance, and fraud
            prevention according to their policies.
          </p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Email contact</h2>
          <p className="mt-2 leading-7 text-white/68">
            Messages sent to {editorialConfig.publicContactEmail} are routed by Cloudflare Email Routing to the
            site operator&apos;s private mailbox. The sender address, message content, and normal email metadata may
            be retained as needed to answer, document a correction, prevent abuse, or meet legal obligations.
            The website does not copy those messages into a visitor database.
          </p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">No Roblox account handling</h2>
          <p className="mt-2 leading-7 text-white/68">Do not enter Roblox passwords, payment details, authentication codes, or account recovery information on this site or in the public correction form.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Third-party links</h2>
          <p className="mt-2 leading-7 text-white/68">Links to Roblox, Discord, GitHub, YouTube, and other external services are separate sites with their own privacy practices. Opening those links may share normal referral and network information with the destination.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Privacy questions</h2>
          <p className="mt-2 leading-7 text-white/68">
            Email <a className="text-[color:var(--accent-2)] hover:underline" href={editorialConfig.publicContactHref}>{editorialConfig.publicContactEmail}</a> to
            ask a privacy question or report an inaccurate disclosure. Do not include passwords, payment details,
            authentication codes, or other sensitive account information.
          </p>
        </article>
      </section>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/disclosure" className="content-card">
          <h2 className="text-lg font-bold text-white">Fan-made disclosure</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Confirm that this site is unofficial and explains its evidence boundaries.</p>
        </Link>
        <Link href="/contact" className="content-card">
          <h2 className="text-lg font-bold text-white">Corrections</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Send a correction with a supporting link and check date.</p>
        </Link>
      </section>
      <p className="mt-8 text-sm text-white/48">Effective and last updated: August 6, 2026.</p>
    </main>
  );
}
