# Mine a Mountain Adsterra Full Monetization Design

## Goal

Replace the failed AdSense-only setup on `mineamountain.com` with the ten Adsterra units supplied by the operator. All formats are enabled, while visible ads remain responsive and policy pages stay free of ad placements.

## Placement design

- Global top banner: `728x90` on desktop, `468x60` on tablet, and `320x50` on mobile.
- Global content footer: one native banner, one `300x250` rectangle, and one clearly labeled sponsored SmartLink.
- Wide desktop rail: `160x600` on tall screens and `160x300` on shorter screens.
- Social Bar: one global script on monetized pages.
- Popunder: one global script, delayed 30 seconds and gated until the second page view in the session.
- Clean routes: `/about`, `/contact`, `/disclosure`, `/privacy`, `/sources`, and `/terms` suppress visible placements and global scripts.

## Configuration

Public placement keys and URLs live in a typed site configuration module. `NEXT_PUBLIC_ADSTERRA_*` environment variables override those defaults, allowing future rotation without changing components.

The obsolete AdSense loader is removed. The existing Google `ads.txt` line is not replaced because the operator did not provide an Adsterra `ads.txt` record.

## Validation

- ESLint and production static export must pass.
- Exported policy pages must not contain placement markup.
- A local browser check must confirm responsive placement rendering and third-party script requests.
- The commercial sync safety gate must pass before commit, push, or deployment.
- After deployment, production HTML and browser network/runtime state must be checked for the supplied Adsterra placement identifiers.
