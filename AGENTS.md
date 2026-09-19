# Agent notes — Yuzu Hair & Beauty

## Canonical external URLs

Use these exactly. Do not invent, “correct”, or swap in search/query URLs.

| Use | URL |
| --- | --- |
| Current site | `https://www.yuzuhairandbeauty.london/` |
| Booking (Phorest) | `https://www.phorest.com/salon/yuzuhairandbeauty` |
| Google Maps / listing / reviews / directions | `https://maps.app.goo.gl/bhFS5wwkW3xxAdKd8` |
| Instagram | `https://www.instagram.com/yuzuhairandbeauty/` |
| TikTok | `https://www.tiktok.com/@yuzuhairandbeauty.est16` |

Code source of truth: `src/data.ts` (`LIVE_SITE_URL`, `BOOKING_URL`, `MAPS_DIRECTIONS_URL`, `GOOGLE_REVIEWS_URL`, `social`).

The in-page map iframe may still use OpenStreetMap for embed; every Current site, “Get directions”, Book, Instagram, and TikTok control must use the table above.

## Documents on the live Wix site

| Document | What it actually is |
| --- | --- |
| 2025 price list | PDF. Hosted locally as `public/price-list.pdf` (same file as `2025 price list.pdf` on Wix) |
| Mandatory patch testing 2025 | PDF. Hosted locally as `public/patch-testing.pdf` |
| Terms & conditions | **Webpage**, not a PDF: `https://www.yuzuhairandbeauty.london/terms-and-conditions` |
| Exclusive offers | **Webpage**, not a PDF: `https://www.yuzuhairandbeauty.london/o-f-f-e-r-s-1` |

There is no promotions/offers PDF. Gallery version **Links** (`?v=links`) lists all of the above.

Code: `PRICE_LIST_URL`, `PATCH_TEST_PDF_URL`, `TERMS_URL`, `OFFERS_PAGE_URL`, `LIVE_SITE_URL` in `src/data.ts`.

## Testing

The user tests the **live GitHub Pages site** after merge to `main`. Do not screenshot or screen-record after building unless they ask.

## Other Yuzu repos already checked

| Repo | Gallery | Notes |
| --- | --- | --- |
| This repo (`YUZU_SEPT_26`) | **Earthy**, **Sanctuary**, **Clean**, **Round**, **Studio**, **Wix**, **Hairlust**, **Instagram**, **HL clone** | Parchment, forest/gold, WordPress `/v1-clean/` clone, rounded Clean, white studio, live Wix clone, hairlust.com layout with Dickens Yard facts, IG-led, faithful hairlust.com replica at the end of the gallery |
| [YUZU_CLEAN](https://github.com/tigges/YUZU_CLEAN) | **Gold** (`?v=gold`) | Next.js wireframe filled with Dickens Yard facts. **Clean** (`?v=clean`) is the WordPress preview clone; **Round** (`?v=round`) is that layout with rounded boxes |
| [-YUZU_V4_CURSOR](https://github.com/tigges/-YUZU_V4_CURSOR) | **Sanctuary** (`?v=sanctuary`) | Real prototype on `cursor/wordpress-git-integration-3576`, not `main` |
| [YUZU-HAIR-CLONE](https://github.com/tigges/YUZU-HAIR-CLONE) | **Editorial**, **Midnight**, **Quiet**, **Convert** (`v1`–`v4`) | Extra IG stills in `public/assets/archive-ig/` |
| [YUZU-V2](https://github.com/tigges/YUZU-V2) | **Simple** (`?v=simple`) | Site was on `cursor/yuzu-website-simplification-8eb7`; `main` is README-only |
| [YUZU_AUTO](https://github.com/tigges/YUZU_AUTO) | **Auto** (`?v=auto`) | Keep the warm landing look; replace Covent Garden / Unsplash / dummy hours with Dickens Yard |
| [YUZU_V3](https://github.com/tigges/YUZU_V3) | — | README-only (`main`). No design or assets to port |
| [YUZU_CUSROR_V7](https://github.com/tigges/YUZU_CUSROR_V7) | — | README-only (renamed from V6). Pages 404s. Do not add a version until it contains a design |

Every ported page uses Dickens Yard (5 Dickens Yard, W5 2TD), the canonical URLs above, and real hours (Tue–Fri 10–8, Sat 9–6, Sun/Mon closed). Do not keep HAIR-CLONE’s old “22 The Green” address or YUZU_AUTO’s Covent Garden placeholders.
