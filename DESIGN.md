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

## Stack

Vite + React + TypeScript. Static files in `public/`. No CMS.
