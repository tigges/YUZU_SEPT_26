import {
  BOOKING_URL,
  JOIN_TEAM_URL,
  LIVE_SITE_URL,
  MAPS_DIRECTIONS_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  PRICE_LIST_URL,
  TERMS_URL,
  social,
} from './data'

export type WireId =
  | 'header'
  | 'hero'
  | 'hours'
  | 'patch'
  | 'gallery'
  | 'reviews'
  | 'services'
  | 'offers'
  | 'careers'
  | 'contact'
  | 'social'
  | 'footer'

export type WireMeta = {
  id: WireId
  title: string
  hint: string
}

export type WireState = {
  order: WireId[]
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
  { id: 'header', title: 'Logo + menu', hint: 'Wordmark, page links, Book' },
  { id: 'hero', title: 'Hero + CTA', hint: 'Headline, short story, Book on Phorest' },
  { id: 'hours', title: 'Opening hours', hint: 'Tue–Fri 10–8 · Sat 9–6 · Sun/Mon closed' },
  { id: 'patch', title: 'Patch-test notice', hint: 'Links out to the colour policy PDF' },
  { id: 'gallery', title: 'Customer gallery', hint: 'Client looks / Instagram results' },
  { id: 'reviews', title: 'Review gallery', hint: 'Google quotes + 4.5 rating' },
  { id: 'services', title: 'Services', hint: 'Cut, colour, highlights — price list is a sub-page' },
  { id: 'offers', title: 'Offers', hint: 'Weekday colour deals on a sub-page' },
  { id: 'careers', title: 'Join the Yuzu team', hint: 'Senior stylists, stylists, models' },
  { id: 'contact', title: 'Contact', hint: 'Dickens Yard, phone, email, Book' },
  { id: 'social', title: 'Social bar', hint: 'Current site, Instagram, TikTok, Facebook' },
  { id: 'footer', title: 'Footer', hint: 'T&Cs and copyright' },
]

export const WIRE_DESTINATIONS: WireDest[] = [
  { id: 'book-header', from: 'header', kind: 'offsite', title: 'Phorest', detail: 'Book from the menu', href: BOOKING_URL },
  { id: 'book-hero', from: 'hero', kind: 'offsite', title: 'Phorest', detail: 'Hero Book CTA', href: BOOKING_URL },
  { id: 'patch-pdf', from: 'patch', kind: 'subpage', title: 'Patch-test PDF', detail: 'Mandatory colour policy', href: PATCH_TEST_PDF_URL },
  { id: 'ig-gallery', from: 'gallery', kind: 'offsite', title: 'Instagram', detail: 'Portfolio / results', href: social.instagram },
  { id: 'reviews-maps', from: 'reviews', kind: 'offsite', title: 'Google reviews', detail: 'Maps listing', href: MAPS_DIRECTIONS_URL },
  { id: 'prices', from: 'services', kind: 'subpage', title: 'Price list', detail: 'PDF / services sub-page', href: PRICE_LIST_URL },
  { id: 'offers-page', from: 'offers', kind: 'subpage', title: 'Offers page', detail: 'Live Wix offers (not a PDF)', href: OFFERS_PAGE_URL },
  { id: 'careers-mail', from: 'careers', kind: 'offsite', title: 'Email CV', detail: 'Join the team', href: JOIN_TEAM_URL },
  { id: 'maps', from: 'contact', kind: 'offsite', title: 'Google Maps', detail: 'Listing, reviews, directions', href: MAPS_DIRECTIONS_URL },
  { id: 'book-contact', from: 'contact', kind: 'offsite', title: 'Phorest', detail: 'Book from contact', href: BOOKING_URL },
  { id: 'site', from: 'social', kind: 'offsite', title: 'Current site', detail: 'yuzuhairandbeauty.london', href: LIVE_SITE_URL },
  { id: 'ig', from: 'social', kind: 'offsite', title: 'Instagram', detail: '@yuzuhairandbeauty', href: social.instagram },
  { id: 'tiktok', from: 'social', kind: 'offsite', title: 'TikTok', detail: '@yuzuhairandbeauty.est16', href: social.tiktok },
  { id: 'fb', from: 'social', kind: 'offsite', title: 'Facebook', detail: 'YUZU Hair and Beauty', href: social.facebook },
  { id: 'terms', from: 'footer', kind: 'subpage', title: 'Terms & conditions', detail: 'Webpage, not a PDF', href: TERMS_URL },
]

export const DEFAULT_WIRE: WireState = {
  order: WIRE_CATALOG.map((item) => item.id),
}

const STORAGE_KEY = 'yuzu-wireframe-v2'
const IDS = new Set(WIRE_CATALOG.map((item) => item.id))

export function metaFor(id: WireId) {
  return WIRE_CATALOG.find((item) => item.id === id)!
}

export function destsFor(id: WireId) {
  return WIRE_DESTINATIONS.filter((item) => item.from === id)
}

export function normalizeWire(input: WireState): WireState {
  const order = input.order.filter((id) => IDS.has(id))
  for (const id of IDS) {
    if (!order.includes(id)) order.push(id)
  }
  return { order }
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
  if (index < 0) return normalizeWire({ order: [...order, fromId] })
  order.splice(place === 'after' ? index + 1 : index, 0, fromId)
  return normalizeWire({ order })
}

export function nudgeWire(state: WireState, id: WireId, dir: -1 | 1) {
  const index = state.order.indexOf(id)
  const nextIndex = index + dir
  if (index < 0 || nextIndex < 0 || nextIndex >= state.order.length) return state
  const order = [...state.order]
  const [item] = order.splice(index, 1)
  order.splice(nextIndex, 0, item)
  return normalizeWire({ order })
}
