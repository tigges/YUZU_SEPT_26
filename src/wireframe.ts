export type WireId =
  | 'header'
  | 'hero'
  | 'hours'
  | 'patch'
  | 'gallery'
  | 'reviews'
  | 'services'
  | 'prices'
  | 'offers'
  | 'careers'
  | 'contact'
  | 'map'
  | 'social'
  | 'footer'

export type WireMeta = {
  id: WireId
  title: string
  hint: string
  nestUnder?: WireId
}

export type WireState = {
  order: WireId[]
  nest: Partial<Record<WireId, WireId[]>>
}

export const WIRE_CATALOG: WireMeta[] = [
  { id: 'header', title: 'Logo + menu', hint: 'Wordmark, page links, Book' },
  { id: 'hero', title: 'Hero + CTA', hint: 'Headline, short story, Book on Phorest' },
  { id: 'hours', title: 'Opening hours', hint: 'Tue–Fri 10–8 · Sat 9–6 · Sun/Mon closed' },
  { id: 'patch', title: 'Patch-test notice', hint: 'Required before colour — PDF' },
  { id: 'gallery', title: 'Customer gallery', hint: 'Client looks / Instagram results' },
  { id: 'reviews', title: 'Review gallery', hint: 'Google quotes + 4.5 rating' },
  { id: 'services', title: 'Services', hint: 'Cut, colour, highlights, treatments' },
  {
    id: 'prices',
    title: 'Price list',
    hint: 'PDF / sub-page of Services',
    nestUnder: 'services',
  },
  { id: 'offers', title: 'Offers', hint: 'Weekday colour deals — webpage, not a PDF' },
  { id: 'careers', title: 'Join the Yuzu team', hint: 'Senior stylists, stylists, models' },
  { id: 'contact', title: 'Contact', hint: 'Dickens Yard, phone, email, Book' },
  { id: 'map', title: 'Map', hint: 'Google listing / directions', nestUnder: 'contact' },
  { id: 'social', title: 'Social bar', hint: 'Current site, Instagram, TikTok, Facebook' },
  { id: 'footer', title: 'Footer', hint: 'T&Cs, copyright, current site' },
]

export const DEFAULT_WIRE: WireState = {
  order: [
    'header',
    'hero',
    'hours',
    'patch',
    'gallery',
    'reviews',
    'services',
    'offers',
    'careers',
    'contact',
    'social',
    'footer',
  ],
  nest: {
    services: ['prices'],
    contact: ['map'],
  },
}

const STORAGE_KEY = 'yuzu-wireframe-v1'

const IDS = new Set(WIRE_CATALOG.map((item) => item.id))

export function metaFor(id: WireId) {
  return WIRE_CATALOG.find((item) => item.id === id)!
}

export function nestedSet(nest: WireState['nest']) {
  return new Set(Object.values(nest).flat())
}

export function normalizeWire(input: WireState): WireState {
  const nest: WireState['nest'] = {}
  for (const [parent, kids] of Object.entries(input.nest)) {
    if (!IDS.has(parent as WireId)) continue
    const clean = (kids ?? []).filter((id) => IDS.has(id) && id !== parent)
    if (clean.length) nest[parent as WireId] = clean
  }
  const nested = nestedSet(nest)
  const order = input.order.filter((id) => IDS.has(id) && !nested.has(id))
  const have = new Set([...order, ...nested])
  for (const id of IDS) {
    if (!have.has(id)) {
      const home = WIRE_CATALOG.find((item) => item.id === id)?.nestUnder
      if (home) {
        nest[home] = [...(nest[home] ?? []), id]
      } else {
        order.push(id)
      }
    }
  }
  return { order, nest }
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

function strip(state: WireState, id: WireId): WireState {
  const order = state.order.filter((item) => item !== id)
  const nest: WireState['nest'] = {}
  for (const [parent, kids] of Object.entries(state.nest)) {
    const next = (kids ?? []).filter((item) => item !== id)
    if (next.length) nest[parent as WireId] = next
  }
  return { order, nest }
}

export function moveWire(state: WireState, fromId: WireId, toId: WireId, place: 'before' | 'after' | 'into') {
  if (fromId === toId) return state
  const fromMeta = metaFor(fromId)
  let next = strip(state, fromId)

  if (place === 'into') {
    const parent = toId
    if (fromMeta.nestUnder === parent) {
      next = {
        ...next,
        nest: { ...next.nest, [parent]: [...(next.nest[parent] ?? []), fromId] },
      }
      return normalizeWire(next)
    }
    place = 'after'
  }

  const parentOfTo = Object.entries(next.nest).find(([, kids]) => kids?.includes(toId))?.[0] as WireId | undefined
  if (parentOfTo && fromMeta.nestUnder === parentOfTo) {
    const kids = [...(next.nest[parentOfTo] ?? [])]
    const index = kids.indexOf(toId)
    kids.splice(place === 'after' ? index + 1 : index, 0, fromId)
    next = { ...next, nest: { ...next.nest, [parentOfTo]: kids } }
    return normalizeWire(next)
  }

  const index = next.order.indexOf(parentOfTo ?? toId)
  if (index < 0) {
    next = { ...next, order: [...next.order, fromId] }
    return normalizeWire(next)
  }
  next.order.splice(place === 'after' ? index + 1 : index, 0, fromId)
  return normalizeWire(next)
}

export function nudgeWire(state: WireState, id: WireId, dir: -1 | 1) {
  const parent = Object.entries(state.nest).find(([, kids]) => kids?.includes(id))?.[0] as WireId | undefined
  if (parent) {
    const kids = [...(state.nest[parent] ?? [])]
    const index = kids.indexOf(id)
    const nextIndex = index + dir
    if (nextIndex < 0 || nextIndex >= kids.length) {
      return moveWire(state, id, parent, dir < 0 ? 'before' : 'after')
    }
    kids.splice(index, 1)
    kids.splice(nextIndex, 0, id)
    return normalizeWire({ ...state, nest: { ...state.nest, [parent]: kids } })
  }
  const index = state.order.indexOf(id)
  const nextIndex = index + dir
  if (index < 0 || nextIndex < 0 || nextIndex >= state.order.length) return state
  const order = [...state.order]
  const [item] = order.splice(index, 1)
  order.splice(nextIndex, 0, item)
  return normalizeWire({ ...state, order })
}
