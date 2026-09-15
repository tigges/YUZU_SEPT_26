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
