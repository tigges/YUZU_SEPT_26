# Agent notes — Yuzu Hair & Beauty

## Canonical external URLs

Use these exactly. Do not invent, “correct”, or swap in search/query URLs.

| Use | URL |
| --- | --- |
| Booking (Phorest) | `https://www.phorest.com/salon/yuzuhairandbeauty` |
| Google Maps / listing / reviews / directions | `https://maps.app.goo.gl/bhFS5wwkW3xxAdKd8` |
| Instagram | `https://www.instagram.com/yuzuhairandbeauty/` |
| TikTok | `https://www.tiktok.com/@yuzuhairandbeauty.est16` |

Code source of truth: `src/data.ts` (`BOOKING_URL`, `MAPS_DIRECTIONS_URL`, `GOOGLE_REVIEWS_URL`, `social`).

The in-page map iframe may still use OpenStreetMap for embed; every “Get directions”, Book, Instagram, and TikTok control must use the table above.

## Testing

The user tests the **live GitHub Pages site** after merge to `main`. Do not screenshot or screen-record after building unless they ask.

## Other Yuzu repos already checked

- **[YUZU_CUSROR_V7](https://github.com/tigges/YUZU_CUSROR_V7)** (also described as V6): empty. `main` is a README; the only other branch is an `AGENTS.md` saying there is no app. GitHub Pages 404s. Do not add a gallery version from this repo until it contains a design.
- **[YUZU_CLEAN](https://github.com/tigges/YUZU_CLEAN)** → gallery **Gold** (`?v=gold`)
- **[-YUZU_V4_CURSOR](https://github.com/tigges/-YUZU_V4_CURSOR)** → gallery **Sanctuary** (`?v=sanctuary`); assets were on `cursor/wordpress-git-integration-3576`, not `main`

Related repos with actual HTML (not yet ported): [YUZU-HAIR-CLONE](https://github.com/tigges/YUZU-HAIR-CLONE) (`v1`–`v4`, including a dark “Midnight Edition”), [YUZU-V2](https://github.com/tigges/YUZU-V2) (`cursor/yuzu-website-simplification-8eb7`), [YUZU_AUTO](https://github.com/tigges/YUZU_AUTO). [YUZU_V3](https://github.com/tigges/YUZU_V3) is README-only.
