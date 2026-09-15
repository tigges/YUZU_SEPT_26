# Design and implementation

## What we kept from the live site

- Brand story (Japanese-inspired precision, Ealing Broadway)
- Phorest booking URL
- Instagram and Facebook
- Opening hours, phone, email, Dickens Yard address
- Senior and stylist price lists, treatments, packages
- Offers: Colour Tuesdays, Smooth Wednesdays, Thursday colour, refer-a-friend, same-day rebook
- Patch-test policy as a notice, not the hero
- Line-art portraits and leaf drawings from the price-list PDF

## What we took from v1-clean

The Cloudways preview is behind HTTP basic auth, so assets were taken from the screenshots you sent:

- Customer gallery (six looks)
- Review portraits and quotes (Alexa, Rachel, Steve)
- Section order: hero → gallery → social → reviews → services → offers → visit
- A single Book CTA, not a cluttered Wix nav

## What we changed

- Earthy parchment / olive / terracotta instead of white + bright red
- Full in-page price menu (missing from v1-clean)
- Google Map on the visit section
- Hero uses the salon’s foliage photography so the headline is not burned into a photo
- Lightbox on the gallery
- Mobile nav

## Instagram (@yuzuhairandbeauty)

Pulled from the live profile (not the login wall):

- Name: YUZU Hair & Beauty
- Bio: Welcome to YUZU Hair / Unit 5, Dickens Yard, Ealing, W5 2TD / Tue–Fri 10–8, Sat 9–6, Sun–Mon closed
- ~2,952 followers, 510 following, 776 posts
- Highlights: Offers, Portfolio Hair
- Profile mark: serif YUZU / HAIR on pale sage
- Recent grid: blossom and pink weekday-offer graphics; personality reels (BTS, team, neighbours, 10-year party, tagged “Asian beauty spots in London”); in-salon carousels of blonde layers and copper balayage

Version 2 (`?v=instagram`) uses those downloaded posts, the wordmark, and the sage/blossom language. Version 3 (`?v=studio`) is the opposite: white, coral Book, editorial client looks.

## Other repos

- **[YUZU_CLEAN](https://github.com/tigges/YUZU_CLEAN)** — Next.js wireframe, no photos, dummy address. Ported as **Gold** (`?v=gold`) with Dickens Yard facts and our gallery.
- **[YUZU_CUSROR_V7](https://github.com/tigges/YUZU_CUSROR_V7)** — empty scaffold (README only). No design or assets to port.

The homepage is a version gallery. Earthy is `?v=earthy`.

## Canonical URLs

- Book: https://www.phorest.com/salon/yuzuhairandbeauty
- Maps: https://maps.app.goo.gl/bhFS5wwkW3xxAdKd8
- Instagram: https://www.instagram.com/yuzuhairandbeauty/
- TikTok: https://www.tiktok.com/@yuzuhairandbeauty.est16

See `AGENTS.md`. Do not replace these with search links or the old `phorest.com/book/salons/…` path.

## Stack

Vite + React + TypeScript. Static files in `public/`. No CMS. Query-param versions so GitHub Pages and in-page `#gallery` anchors both work.
