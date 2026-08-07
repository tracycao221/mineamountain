# Mine a Mountain AdSense Evidence and Ad Isolation Design

## Goal

Improve `mineamountain.com` for a new Google AdSense review by strengthening original, verifiable user value on the four highest-priority pages and eliminating the possibility that the site's dormant Adsterra implementation can be activated accidentally.

The work is limited to the standalone Mine a Mountain site. It does not remove or weaken monetization capabilities in the parent commercial site-production system.

## Evidence rules

- Use the official Roblox game page, official Roblox APIs, and official Roblox-hosted media as primary evidence.
- Treat creator-owned channels as secondary evidence only after ownership is verifiable.
- Label practical route advice as inference when official material confirms the mechanic but not the outcome.
- Do not invent gameplay measurements, code strings, upgrade costs, crystal values, drop rates, return-on-investment claims, screenshots, author credentials, or testing history.
- Preserve original publication dates. Update only pages materially changed in this release, using the real change date.

## Content design

### Codes

Add a dated verification ledger that names each checked surface, what was observed, what that observation proves, and what it does not prove. Keep the empty active-code state prominent. Explain the exact promotion rule for moving a claim into the active list: exact code, reward, reliable source, checked date, and a current redeem path must all be available.

The page will not imply that a code menu exists when the official listing does not document one.

### Upgrades

Add a controlled-comparison worksheet for Warmth, Pickaxe, and Backpack decisions. The worksheet will tell a player what to hold constant, what to observe before and after a purchase, and how to interpret the result without using unverified numeric tiers.

The page will distinguish confirmed mechanic roles from practical inference and keep the explicit list of unpublished values.

### Crystals

Add an observation matrix derived from official promotional media. Each row will separate the visible observation from the limited conclusion it supports and the stronger conclusion it cannot support. This creates original analysis without turning colors, height, or apparent size into a fabricated rarity or price table.

### Calculator

Keep the existing bottleneck recommendation and add a user-entered two-run comparison tool. A player can enter optional baseline and after-change values such as route duration, cash returned, and completed sell trips. The browser computes simple deltas from the player's own observations; the site supplies no hidden game values and stores or transmits nothing.

Blank fields remain optional. Invalid, negative, non-finite, and divide-by-zero cases must not produce misleading percentages. When runs are not comparable or information is incomplete, the interface will say so instead of forcing a recommendation.

### About and Sources

Expand the truthful editorial workflow: primary-source capture, claim classification, update triggers, correction review, and the rule for withholding exact numbers. Keep Michell described only as a stable pen name and independent editor. Do not add a fictional biography, qualifications, staff, office, or response-time promise.

## Advertising isolation

Remove the Mine a Mountain site's Adsterra runtime mount, client components, default placement keys and URLs, environment-variable surface, and site-specific placement manifest. Remove stale Adsterra wording from the site configuration and privacy page.

The root layout will render content directly and will have no environment switch capable of re-enabling third-party ads. The current Google `ads.txt` publisher record remains. No Google ad loader will be added during this release, so the site stays ad-free during review.

If AdSense is approved later, ad loading and a Google-certified CMP for applicable EEA, UK, and Switzerland traffic will be implemented as a separate, explicit release.

## Data and privacy behavior

The calculator comparison stays entirely in React component state. It uses no cookie, local storage, analytics event, API request, contact submission, or database write. Official snapshot values used by editorial content will be refreshed only from the official Roblox endpoints and will retain a visible capture timestamp.

The contact route remains `contact@mineamountain.com` through Cloudflare Email Routing. The private destination mailbox must not appear in source or rendered output.

## Validation and release

- Run ESLint, the production static export, and the AdSense readiness audit.
- Strengthen the audit so source and exported HTML fail if legacy Adsterra domains, placement identifiers, mounts, or advertisement shells return.
- Verify canonical URLs, metadata, JSON-LD, Sitemap, robots.txt, ads.txt, internal links, and true 404 behavior.
- Test calculator recommendations and two-run comparisons, including blank, zero, negative, incomplete, and normal inputs.
- Check desktop and mobile rendering, table overflow, navigation, contact mail link, and absence of third-party ad requests.
- Run the commercial sync safety gate before commit, push, or deployment.
- Deploy the static export to the existing Cloudflare Pages project, then recrawl only `https://mineamountain.com` and confirm production matches the release.

## Success criteria

- Codes, Upgrades, Crystals, and Calculator provide materially more original utility while every factual claim remains traceable or explicitly labeled as inference.
- No dormant Adsterra execution path, placement default, or third-party Adsterra URL remains in the site's production source or exported HTML.
- The site remains ad-free and usable without consent prompts during review.
- All automated checks and manual desktop/mobile checks pass.
- The live production site exposes no private mailbox, broken search action, legacy ad script, or unsupported exact gameplay claim.
