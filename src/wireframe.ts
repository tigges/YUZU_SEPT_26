import {
  BOOKING_URL,
  JOIN_TEAM_PAGE_URL,
  JOIN_TEAM_URL,
  MAPS_DIRECTIONS_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  PRICE_LIST_URL,
  TERMS_URL,
  LIVE_SITE_URL,
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
  links: LinkPlacement[]
}

export type DestKind = 'offsite' | 'subpage'

export type LinkId =
  | 'phorest'
  | 'instagram'
  | 'tiktok'
  | 'facebook'
  | 'maps'
  | 'email'
  | 'phone'
  | 'whatsapp'
  | 'price-pdf'
  | 'patch-pdf'
  | 'offers-page'
  | 'terms'
  | 'join-page'
  | 'join-mail'
  | 'site'

export type LinkMeta = {
  id: LinkId
  kind: DestKind
  title: string
  detail: string
  href: string
}

export type LinkPlacement = {
  id: string
  link: LinkId
  on: WireId
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

export const LINK_CATALOG: LinkMeta[] = [
  { id: 'phorest', kind: 'offsite', title: 'Phorest', detail: 'Online booking', href: BOOKING_URL },
  { id: 'instagram', kind: 'offsite', title: 'Instagram', detail: '@yuzuhairandbeauty', href: social.instagram },
  { id: 'tiktok', kind: 'offsite', title: 'TikTok', detail: '@yuzuhairandbeauty.est16', href: social.tiktok },
  { id: 'facebook', kind: 'offsite', title: 'Facebook', detail: 'YUZU Hair and Beauty', href: social.facebook },
  { id: 'maps', kind: 'offsite', title: 'Google Maps', detail: 'Listing, reviews, directions', href: MAPS_DIRECTIONS_URL },
  { id: 'email', kind: 'offsite', title: 'Email', detail: contact.email, href: social.email },
  { id: 'phone', kind: 'offsite', title: 'Call', detail: contact.phone, href: contact.phoneHref },
  { id: 'whatsapp', kind: 'offsite', title: 'WhatsApp', detail: 'Chat with the salon', href: WHATSAPP_URL },
  { id: 'price-pdf', kind: 'subpage', title: 'Price list PDF', detail: '2025 menu', href: PRICE_LIST_URL },
  { id: 'patch-pdf', kind: 'subpage', title: 'Patch-test PDF', detail: 'Mandatory colour policy', href: PATCH_TEST_PDF_URL },
  { id: 'offers-page', kind: 'subpage', title: 'Offers page', detail: 'Live Wix offers (not a PDF)', href: OFFERS_PAGE_URL },
  { id: 'terms', kind: 'subpage', title: 'Terms & conditions', detail: 'Webpage, not a PDF', href: TERMS_URL },
  { id: 'join-page', kind: 'subpage', title: 'Join webpage', detail: 'Roles on the current site', href: JOIN_TEAM_PAGE_URL },
  { id: 'join-mail', kind: 'offsite', title: 'Email CV', detail: 'Join the team', href: JOIN_TEAM_URL },
  { id: 'site', kind: 'offsite', title: 'Current site', detail: 'yuzuhairandbeauty.london', href: LIVE_SITE_URL },
]

const DEFAULT_LINKS: LinkPlacement[] = [
  { id: 'phorest-1', link: 'phorest', on: 'header' },
  { id: 'instagram-1', link: 'instagram', on: 'gallery' },
  { id: 'maps-1', link: 'maps', on: 'contact' },
  { id: 'email-1', link: 'email', on: 'contact' },
  { id: 'phone-1', link: 'phone', on: 'contact' },
  { id: 'whatsapp-1', link: 'whatsapp', on: 'chat' },
  { id: 'patch-pdf-1', link: 'patch-pdf', on: 'patch' },
  { id: 'offers-page-1', link: 'offers-page', on: 'offers' },
  { id: 'terms-1', link: 'terms', on: 'footer' },
  { id: 'join-page-1', link: 'join-page', on: 'careers' },
  { id: 'join-mail-1', link: 'join-mail', on: 'careers' },
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
  links: [...DEFAULT_LINKS],
}

const STORAGE_KEY = 'yuzu-wireframe-v7'
const IDS = new Set(WIRE_CATALOG.map((item) => item.id))
const LINK_IDS = new Set(LINK_CATALOG.map((item) => item.id))

export function metaFor(id: WireId) {
  return WIRE_CATALOG.find((item) => item.id === id)!
}

export function linkMetaFor(id: LinkId) {
  return LINK_CATALOG.find((item) => item.id === id)!
}

export function linksOn(state: WireState, id: WireId) {
  return (state.links ?? []).filter((item) => item.on === id)
}

export function placementCount(state: WireState, link: LinkId) {
  return (state.links ?? []).filter((item) => item.link === link).length
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
      item.parent = parentForPush({ order, subpages: [], links: [] }, item.id) ?? 'header'
    }
  }

  const hosts = new Set<WireId>([...order, ...subpages.map((item) => item.id)])
  const links: LinkPlacement[] = []
  const usedPair = new Set<string>()
  const usedId = new Set<string>()
  for (const item of input.links ?? []) {
    if (!LINK_IDS.has(item.link) || !hosts.has(item.on)) continue
    const pair = `${item.link}:${item.on}`
    if (usedPair.has(pair)) continue
    usedPair.add(pair)
    let id = item.id
    if (!id || usedId.has(id)) id = nextPlacementId(links, item.link)
    usedId.add(id)
    links.push({ id, link: item.link, on: item.on })
  }

  return { order, subpages, links }
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
  return normalizeWire({ ...state, order, subpages })
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
  return normalizeWire({ ...state, order, subpages })
}

function nextPlacementId(links: LinkPlacement[], link: LinkId) {
  let n = 1
  const used = new Set(links.map((item) => item.id))
  while (used.has(`${link}-${n}`)) n++
  return `${link}-${n}`
}

export function placeLink(state: WireState, link: LinkId, on: WireId): WireState {
  if (!LINK_IDS.has(link) || !IDS.has(on)) return state
  if ((state.links ?? []).some((item) => item.link === link && item.on === on)) return state
  const links = [...(state.links ?? [])]
  links.push({ id: nextPlacementId(links, link), link, on })
  return normalizeWire({ ...state, links })
}

export function unpinLink(state: WireState, placementId: string): WireState {
  return normalizeWire({
    ...state,
    links: (state.links ?? []).filter((item) => item.id !== placementId),
  })
}

export function moveLink(state: WireState, placementId: string, on: WireId): WireState {
  const current = (state.links ?? []).find((item) => item.id === placementId)
  if (!current || current.on === on) return state
  if ((state.links ?? []).some((item) => item.id !== placementId && item.link === current.link && item.on === on)) {
    return unpinLink(state, placementId)
  }
  return normalizeWire({
    ...state,
    links: (state.links ?? []).map((item) => (item.id === placementId ? { ...item, on } : item)),
  })
}
