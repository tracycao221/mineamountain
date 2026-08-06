# Mine a Mountain Contact Email Routing and Search Schema Design

## Goal

Remove the invalid structured-data search declaration and replace the login-required-only contact path with a professional, no-login email channel. The public address will be `contact@mineamountain.com`; Cloudflare Email Routing will forward it to an operator-approved private destination without exposing that destination on the website or in the delivery repository.

## Scope

- Remove `SearchAction` and `/search?q={search_term_string}` from `WebSite` JSON-LD. A search page will not be added.
- Configure Cloudflare Email Routing for `contact@mineamountain.com` after the destination mailbox is verified.
- Show `contact@mineamountain.com` on Contact and other appropriate trust pages.
- Keep GitHub Issues as an optional public correction channel, not the primary contact method.
- Add the public contact address to relevant structured data.
- Update the privacy disclosure for email handling.

## Non-goals

- No D1 database, Pages Function, third-party form service, or visitor-submission storage.
- No public exposure of the Gmail forwarding destination.
- No full-text site-search feature.
- No change to AdSense review mode or the current advertising pause.

## Architecture and Data Flow

1. A visitor selects an `Email Michell` link or copies `contact@mineamountain.com`.
2. The visitor's mail provider sends the message to the domain's Cloudflare-managed MX records.
3. A literal Email Routing rule matches `contact@mineamountain.com`.
4. Cloudflare forwards the message to the verified destination mailbox.
5. Replies are sent by the operator from the destination mailbox; the website stores no submission data.

Cloudflare requires the destination address to be verified before a forwarding rule can be enabled. The configuration therefore has a hard verification gate: create or reuse the destination, wait for the operator to click Cloudflare's verification email, confirm the verified state, then enable routing DNS and the literal forwarding rule.

## Website Changes

### Structured data

`WebSiteJsonLd` will keep the site name, URL, and description but remove `potentialAction`. Author/publisher structured data will use the public domain address where an email field is appropriate. No structured data will advertise a route that returns 404.

### Contact page

The primary contact card will display `contact@mineamountain.com` and a `mailto:` button with a concise editorial-feedback subject. It will explain what to include: page URL, disputed claim, supporting source, and check date. The GitHub Issue link remains available for information that the sender intentionally wants to make public.

The page will continue warning visitors not to send Roblox passwords, payment details, authentication codes, or account-recovery information. Official Roblox and game support remain out of scope.

### Trust and privacy pages

About, Privacy, and Disclosure will use the same public contact address. Privacy will state that email metadata and message content pass through Cloudflare Email Routing and the destination mailbox and may be retained only as needed to answer, document a correction, prevent abuse, or meet legal obligations.

## Cloudflare Configuration

- Query the existing zone, Email Routing state, DNS requirements, destinations, and routing rules before mutation.
- Reuse an already verified matching destination if one exists.
- Otherwise create the destination and pause until verification is complete.
- Enable Email Routing DNS only after confirming that no existing MX setup will be displaced. The current design review found no public MX records for the domain.
- Create one enabled literal rule for `contact@mineamountain.com` forwarding to the verified destination.
- Do not enable a catch-all address.
- Record only non-secret routing status and identifiers in the ignored project deployment record; never store credentials or the private destination in delivery artifacts.

## Failure Handling and Rollback

- If destination verification is pending, do not publish the new public address as functional.
- If Cloudflare OAuth lacks Email Routing permissions, stop before DNS mutation and provide the exact dashboard handoff.
- If DNS enablement reports a conflicting MX setup, stop and preserve the existing mail configuration.
- If delivery testing fails, keep GitHub Issues as the primary live channel and do not claim the domain address is active.
- The routing rule can be disabled independently without changing website content; website copy can be reverted to the previous GitHub-only contact path if necessary.

## Validation

1. Confirm the destination is verified, Email Routing status is ready, and the literal rule is enabled.
2. Confirm MX/SPF records match Cloudflare's Email Routing requirements.
3. Send a real test message to `contact@mineamountain.com` and obtain operator confirmation that it arrived.
4. Run lint, production build, AdSense readiness audit, and the commercial sync safety check.
5. Verify rendered JSON-LD contains no `SearchAction` or `/search?q=` target.
6. Verify Contact exposes the public domain email and the mail link requires no website login.
7. Push the site commit to GitHub `main`, deploy the verified static export to the existing Cloudflare Pages production project, and recheck the live domain.

## Success Criteria

- `/search` is no longer claimed in structured data.
- `contact@mineamountain.com` receives mail at the verified destination.
- The forwarding Gmail address is not shown in public HTML or structured data.
- Contact, Privacy, About, and Disclosure agree on the same contact method.
- No new visitor database, cookies, advertising code, or broken links are introduced.
- Production AdSense and SEO checks continue to pass.
