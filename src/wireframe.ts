import {
  BOOKING_URL,
  JOIN_TEAM_PAGE_URL,
  JOIN_TEAM_URL,
  MAPS_DIRECTIONS_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  TERMS_URL,
  WHATSAPP_URL,
  contact,
  social,
} from './data'

export type WireId =
  | 'header'
  | 'ticker'
  | 'hero'
  | 'carousel'
  | 'welcome'
  | 'trust'
  | 'hours'
  | 'patch'
  | 'gallery'
  | 'reviews'
  | 'services'
  | 'prices'
  | 'shop'
  | 'offers'
  | 'careers'
  | 'follow'
  | 'contact'
  | 'form'
  | 'map'
  | 'chat'
  | 'social'
  | 'footer'
  | 'stylists'
  | 'vouchers'
  | 'faq'

const CHROME = new Set<WireId>(['header', 'ticker', 'footer'])

export function isWireChrome(id: WireId) {
  return CHROME.has(id)
}

export type WireMeta = {
  id: WireId
  title: string
  hint: string
}

export type WireSubpage = {
  id: WireId
  parent: WireId
}

export type WireState = {
  order: WireId[]
  subpages: WireSubpage[]
}

export type DestKind = 'offsite' | 'subpage'

export type WireDest = {
  id: string
  from: WireId
  kind: DestKind
  title: string
  detail: string
  href: string
}

export const WIRE_CATALOG: WireMeta[] = [
  { id: 'header', title: 'Logo + menu', hint: 'Wordmark, page links, Book — stays on every page' },
  { id: 'ticker', title: 'News ticker', hint: 'Slim bar under the header: offer, hours, patch test' },
  { id: 'hero', title: 'Hero + CTA', hint: 'Headline, short story, Book on Phorest' },
  { id: 'carousel', title: 'Hero carousel', hint: 'Rotates hero + Book, offers, patch test, and a new-customer cut' },
  { id: 'welcome', title: 'Welcome', hint: 'Salon story — Wix, Editorial, Quiet, Gold intro' },
  { id: 'trust', title: 'Trust strip', hint: 'Google rating and short proofs — Gold, Convert' },
  { id: 'hours', title: 'Opening hours', hint: 'Tue–Fri 10–8 · Sat 9–6 · Sun/Mon closed' },
  { id: 'patch', title: 'Patch-test notice', hint: 'Links out to the colour policy PDF' },
  { id: 'gallery', title: 'Customer gallery', hint: 'Client looks / Instagram results' },
  { id: 'reviews', title: 'Review gallery', hint: 'Google quotes + 4.5 rating' },
  { id: 'services', title: 'Services', hint: 'Cut, colour, highlights — price list nests under this' },
  { id: 'prices', title: 'Price list', hint: 'In-page menu (Earthy) or a band that opens the PDF (Wix)' },
  { id: 'shop', title: 'Take it home', hint: 'Retail at the desk after the appointment — no cart' },
  { id: 'offers', title: 'Offers', hint: 'Weekday colour deals on a sub-page' },
  { id: 'careers', title: 'Join the Yuzu team', hint: 'Senior stylists, stylists, models' },
  { id: 'follow', title: 'Follow us', hint: 'Instagram handle / feed — Wix, Clean, Instagram, Sanctuary' },
  { id: 'contact', title: 'Contact', hint: 'Dickens Yard, phone, email' },
  { id: 'form', title: 'Enquiry form', hint: 'Name, email, message — Wix contact form' },
  { id: 'map', title: 'Map', hint: 'Full-width map — Wix, Earthy, Clean visit, Gold, Auto' },
  { id: 'chat', title: 'WhatsApp / chat', hint: 'Floating widget — tap to message the salon' },
  { id: 'social', title: 'Social bar', hint: 'Instagram, TikTok, Facebook' },
  { id: 'footer', title: 'Footer', hint: 'T&Cs and copyright — blocks below this are archived' },
  { id: 'stylists', title: 'Meet the stylists', hint: 'Faces and first names, not a recruiting ad' },
  { id: 'vouchers', title: 'Gift vouchers', hint: 'Treat someone — book as a gift on Phorest' },
  { id: 'faq', title: 'First visit', hint: 'Patch test, parking, Dickens Yard, what to bring' },
]

export const WIRE_DESTINATIONS: WireDest[] = [
  { id: 'book-header', from: 'header', kind: 'offsite', title: 'Phorest', detail: 'Book from the menu', href: BOOKING_URL },
  { id: 'ticker-offers', from: 'ticker', kind: 'subpage', title: 'Offers page', detail: 'Ticker can point at the current deal', href: OFFERS_PAGE_URL },
  { id: 'book-hero', from: 'hero', kind: 'offsite', title: 'Phorest', detail: 'Hero Book CTA', href: BOOKING_URL },
  { id: 'carousel-book', from: 'carousel', kind: 'offsite', title: 'Phorest', detail: 'Hero slide and new-customer cut', href: BOOKING_URL },
  { id: 'carousel-offers', from: 'carousel', kind: 'subpage', title: 'Offers page', detail: 'Offers slide', href: OFFERS_PAGE_URL },
  { id: 'carousel-patch', from: 'carousel', kind: 'subpage', title: 'Patch-test PDF', detail: 'Patch-test slide', href: PATCH_TEST_PDF_URL },
  { id: 'book-welcome', from: 'welcome', kind: 'offsite', title: 'Phorest', detail: 'Book from the story', href: BOOKING_URL },
  { id: 'ig-welcome', from: 'welcome', kind: 'offsite', title: 'Instagram', detail: 'Daily work', href: social.instagram },
  { id: 'trust-reviews', from: 'trust', kind: 'offsite', title: 'Google reviews', detail: '4.5 on Maps', href: MAPS_DIRECTIONS_URL },
  { id: 'patch-pdf', from: 'patch', kind: 'subpage', title: 'Patch-test PDF', detail: 'Mandatory colour policy', href: PATCH_TEST_PDF_URL },
  { id: 'ig-gallery', from: 'gallery', kind: 'offsite', title: 'Instagram', detail: 'Portfolio / results', href: social.instagram },
  { id: 'reviews-maps', from: 'reviews', kind: 'offsite', title: 'Google reviews', detail: 'Maps listing', href: MAPS_DIRECTIONS_URL },
  { id: 'offers-page', from: 'offers', kind: 'subpage', title: 'Offers page', detail: 'Live Wix offers (not a PDF)', href: OFFERS_PAGE_URL },
  { id: 'careers-page', from: 'careers', kind: 'subpage', title: 'Join webpage', detail: 'Roles on the current site', href: JOIN_TEAM_PAGE_URL },
  { id: 'careers-mail', from: 'careers', kind: 'offsite', title: 'Email CV', detail: 'Join the team', href: JOIN_TEAM_URL },
  { id: 'follow-ig', from: 'follow', kind: 'offsite', title: 'Instagram', detail: '@yuzuhairandbeauty', href: social.instagram },
  { id: 'follow-tiktok', from: 'follow', kind: 'offsite', title: 'TikTok', detail: '@yuzuhairandbeauty.est16', href: social.tiktok },
  { id: 'follow-fb', from: 'follow', kind: 'offsite', title: 'Facebook', detail: 'YUZU Hair and Beauty', href: social.facebook },
  { id: 'maps-contact', from: 'contact', kind: 'offsite', title: 'Google Maps', detail: 'Listing, reviews, directions', href: MAPS_DIRECTIONS_URL },
  { id: 'contact-email', from: 'contact', kind: 'offsite', title: 'Email', detail: contact.email, href: social.email },
  { id: 'contact-phone', from: 'contact', kind: 'offsite', title: 'Call', detail: contact.phone, href: contact.phoneHref },
  { id: 'form-email', from: 'form', kind: 'offsite', title: 'Email', detail: 'Form can mail the salon', href: social.email },
  { id: 'form-phone', from: 'form', kind: 'offsite', title: 'Call', detail: contact.phone, href: contact.phoneHref },
  { id: 'map-directions', from: 'map', kind: 'offsite', title: 'Google Maps', detail: 'Directions to Dickens Yard', href: MAPS_DIRECTIONS_URL },
  { id: 'chat-whatsapp', from: 'chat', kind: 'offsite', title: 'WhatsApp', detail: 'Chat with the salon', href: WHATSAPP_URL },
  { id: 'chat-phone', from: 'chat', kind: 'offsite', title: 'Call', detail: contact.phone, href: contact.phoneHref },
  { id: 'ig', from: 'social', kind: 'offsite', title: 'Instagram', detail: '@yuzuhairandbeauty', href: social.instagram },
  { id: 'tiktok', from: 'social', kind: 'offsite', title: 'TikTok', detail: '@yuzuhairandbeauty.est16', href: social.tiktok },
  { id: 'fb', from: 'social', kind: 'offsite', title: 'Facebook', detail: 'YUZU Hair and Beauty', href: social.facebook },
  { id: 'terms', from: 'footer', kind: 'subpage', title: 'Terms & conditions', detail: 'Webpage, not a PDF', href: TERMS_URL },
  { id: 'voucher-book', from: 'vouchers', kind: 'offsite', title: 'Phorest', detail: 'Buy or redeem a gift visit', href: BOOKING_URL },
  { id: 'faq-patch', from: 'faq', kind: 'subpage', title: 'Patch-test PDF', detail: 'First-visit colour rule', href: PATCH_TEST_PDF_URL },
  { id: 'faq-maps', from: 'faq', kind: 'offsite', title: 'Google Maps', detail: 'How to find Dickens Yard', href: MAPS_DIRECTIONS_URL },
]

const LIVE_ORDER: WireId[] = [
  'header',
  'ticker',
  'hero',
  'carousel',
  'trust',
  'hours',
  'patch',
  'gallery',
  'reviews',
  'services',
  'shop',
  'offers',
  'careers',
  'contact',
  'map',
  'chat',
  'footer',
]

const ARCHIVE_ORDER: WireId[] = ['welcome', 'follow', 'form', 'social', 'stylists', 'vouchers', 'faq']
const DEFAULT_ORDER: WireId[] = [...LIVE_ORDER, ...ARCHIVE_ORDER]
const DEFAULT_SUBPAGES: WireSubpage[] = [{ id: 'prices', parent: 'services' }]

export const DEFAULT_WIRE: WireState = {
  order: [...DEFAULT_ORDER],
  subpages: [...DEFAULT_SUBPAGES],
}

const STORAGE_KEY = 'yuzu-wireframe-v6'
const IDS = new Set(WIRE_CATALOG.map((item) => item.id))

export function metaFor(id: WireId) {
  return WIRE_CATALOG.find((item) => item.id === id)!
}

export function destsFor(id: WireId) {
  return WIRE_DESTINATIONS.filter((item) => item.from === id)
}

export function splitWire(order: WireId[]) {
  const cut = order.indexOf('footer')
  if (cut < 0) return { live: order, archived: [] as WireId[] }
  return { live: order.slice(0, cut + 1), archived: order.slice(cut + 1) }
}

export function isArchived(order: WireId[], id: WireId) {
  return splitWire(order).archived.includes(id)
}

export function childrenOf(state: WireState, parent: WireId) {
  return state.subpages.filter((item) => item.parent === parent).map((item) => item.id)
}

export function canPushSubpage(state: WireState, id: WireId) {
  if (isWireChrome(id)) return false
  if (state.subpages.some((item) => item.id === id)) return false
  return parentForPush(state, id) !== null
}

function parentForPush(state: WireState, id: WireId): WireId | null {
  const { live } = splitWire(state.order)
  const index = live.indexOf(id)
  if (index > 0) {
    for (let i = index - 1; i >= 0; i--) {
      const parent = live[i]
      if (parent !== 'ticker') return parent
    }
  }
  const main = live.filter((item) => item !== id && item !== 'footer' && item !== 'ticker')
  return main[main.length - 1] ?? (live.includes('header') ? 'header' : main[0] ?? null)
}

function insertMissing(order: WireId[], skip: Set<WireId>) {
  const next = [...order]
  const present = new Set(next)
  for (const id of DEFAULT_ORDER) {
    if (present.has(id) || skip.has(id)) continue
    const defaultIndex = DEFAULT_ORDER.indexOf(id)
    let placed = false
    for (let i = defaultIndex - 1; i >= 0; i--) {
      const at = next.indexOf(DEFAULT_ORDER[i])
      if (at >= 0) {
        next.splice(at + 1, 0, id)
        placed = true
        break
      }
    }
    if (!placed) next.unshift(id)
    present.add(id)
  }
  for (const id of IDS) {
    if (!present.has(id) && !skip.has(id)) {
      next.push(id)
      present.add(id)
    }
  }
  return next
}

export function normalizeWire(input: WireState): WireState {
  const seen = new Set<WireId>()
  const subpages: WireSubpage[] = []
  for (const item of input.subpages ?? []) {
    if (!IDS.has(item.id) || !IDS.has(item.parent)) continue
    if (item.id === item.parent || isWireChrome(item.id)) continue
    if (seen.has(item.id)) continue
    seen.add(item.id)
    subpages.push({ id: item.id, parent: item.parent })
  }

  const order = insertMissing(
    (input.order ?? []).filter((id) => IDS.has(id) && !seen.has(id)),
    seen,
  )
  if (!order.includes('header')) order.unshift('header')
  if (!order.includes('footer')) {
    const cut = splitWire(order).live.length
    order.splice(cut, 0, 'footer')
  }

  const inOrder = new Set(order)
  for (const item of subpages) {
    if (!inOrder.has(item.parent) || seen.has(item.parent) || item.parent === 'ticker') {
      item.parent = parentForPush({ order, subpages: [] }, item.id) ?? 'header'
    }
  }

  return { order, subpages }
}

export function loadWire(): WireState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_WIRE
    return normalizeWire(JSON.parse(raw) as WireState)
  } catch {
    return DEFAULT_WIRE
  }
}

export function saveWire(state: WireState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeWire(state)))
}

export function moveWire(state: WireState, fromId: WireId, toId: WireId, place: 'before' | 'after') {
  if (fromId === toId) return state
  const order = state.order.filter((id) => id !== fromId)
  const index = order.indexOf(toId)
  if (index < 0) return normalizeWire({ ...state, order: [...order, fromId] })
  order.splice(place === 'after' ? index + 1 : index, 0, fromId)
  return normalizeWire({ ...state, order })
}

export function nudgeWire(state: WireState, id: WireId, dir: -1 | 1) {
  const index = state.order.indexOf(id)
  const nextIndex = index + dir
  if (index < 0 || nextIndex < 0 || nextIndex >= state.order.length) return state
  const order = [...state.order]
  const [item] = order.splice(index, 1)
  order.splice(nextIndex, 0, item)
  return normalizeWire({ ...state, order })
}

export function pushSubpage(state: WireState, id: WireId): WireState {
  const parent = parentForPush(state, id)
  if (!parent || !canPushSubpage(state, id)) return state
  const order = state.order.filter((item) => item !== id)
  const subpages = [
    ...state.subpages.filter((item) => item.id !== id).map((item) => (item.parent === id ? { ...item, parent } : item)),
    { id, parent },
  ]
  return normalizeWire({ order, subpages })
}

export function popSubpage(state: WireState, id: WireId): WireState {
  const entry = state.subpages.find((item) => item.id === id)
  if (!entry) return state
  const subpages = state.subpages.filter((item) => item.id !== id)
  const order = [...state.order]
  const parentIndex = order.indexOf(entry.parent)
  if (parentIndex < 0) {
    const cut = order.indexOf('footer')
    order.splice(cut >= 0 ? cut : order.length, 0, id)
  } else if (entry.parent === 'footer') {
    order.splice(parentIndex, 0, id)
  } else {
    order.splice(parentIndex + 1, 0, id)
  }
  return normalizeWire({ order, subpages })
}
