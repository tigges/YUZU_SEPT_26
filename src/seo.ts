import { BOOKING_URL, MAPS_DIRECTIONS_URL, social } from './data'

export const PAGES_ORIGIN = 'https://tigges.github.io/YUZU_SEPT_26'
export const CLEAN_URL = `${PAGES_ORIGIN}/?v=clean`
export const PHOREST_PROFILE_URL = 'https://phorest.com/book/salons/yuzuhairandbeauty'

export const SEO_TITLE = 'Hair Salon Ealing Broadway | Yuzu Hair & Beauty'
export const SEO_DESCRIPTION =
  'Japanese-inspired hair salon in Dickens Yard, 2 min from Ealing Broadway station. Cuts, colour, balayage & Brazilian blow-dry. Book online today.'
export const SEO_H1 = 'Japanese hair salon London · hairdresser Ealing Broadway'
export const OG_IMAGE = `${PAGES_ORIGIN}/assets/clean/hero.jpg`
export const OG_IMAGE_ALT = 'Wavy brunette hair, photographed at Yuzu Hair & Beauty in Ealing'

export const salonJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  '@id': `${CLEAN_URL}#business`,
  name: 'Yuzu Hair & Beauty',
  url: CLEAN_URL,
  logo: `${PAGES_ORIGIN}/assets/clean/logo.png`,
  image: [OG_IMAGE],
  description:
    'Japanese-inspired hair salon in Dickens Yard, a short walk from Ealing Broadway station, offering cuts, blow-dries, colour, balayage and Brazilian blow-dry.',
  telephone: '+442088402244',
  email: 'info@yuzuhairandbeauty.co.uk',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5 Dickens Yard, Longfield Avenue',
    addressLocality: 'Ealing',
    addressRegion: 'London',
    postalCode: 'W5 2TD',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5138, longitude: -0.3068 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [social.instagram, social.facebook, social.tiktok],
  hasMap: MAPS_DIRECTIONS_URL,
  potentialAction: {
    '@type': 'ReserveAction',
    target: PHOREST_PROFILE_URL,
  },
}

export const faqs = [
  {
    question: 'How much is a haircut at Yuzu in Ealing?',
    answer:
      'A ladies wash, cut and style starts at £58 with a stylist and £87 with a senior stylist. Gents wash, cut and style is £58 with a senior stylist. Kids 12 and under start at £29. Blow-dries start at £41. See the full HTML price list for colour, balayage and treatments.',
  },
  {
    question: 'Do I need a patch test before hair colour?',
    answer:
      'Yes. Colour services need a mandatory patch test for every client, including existing guests, at least 48 hours before the appointment. Book the test on Phorest and read the 2025 patch-testing notes.',
  },
  {
    question: 'Which hair salons in Ealing are near the station?',
    answer:
      'Yuzu Hair & Beauty is at 5 Dickens Yard, Longfield Avenue, Ealing, W5 2TD, about a two-minute walk from Ealing Broadway station. We are a Japanese hair salon London visitors use for cuts, colour, balayage and Brazilian blow-dry.',
  },
]

export function applyDocumentSeo(kind: 'clean' | 'hub' | 'other', pageName?: string) {
  const title =
    kind === 'clean' ? SEO_TITLE : kind === 'hub' ? 'Yuzu Hair & Beauty · design versions' : `${pageName} · Yuzu Hair & Beauty`
  const description = kind === 'clean' ? SEO_DESCRIPTION : 'Design versions for Yuzu Hair & Beauty in Dickens Yard, Ealing Broadway.'
  document.title = title
  setMeta('description', description)
  setMeta('og:title', title, 'property')
  setMeta('og:description', description, 'property')
  setMeta('og:image', OG_IMAGE, 'property')
  setMeta('og:url', kind === 'clean' ? CLEAN_URL : PAGES_ORIGIN + '/', 'property')
  setMeta('twitter:card', 'summary_large_image')
  setLink('canonical', kind === 'clean' ? PAGES_ORIGIN : `${PAGES_ORIGIN}/`)
  ensureJsonLd()
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function ensureJsonLd() {
  const id = 'yuzu-hairsalon-jsonld'
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.text = JSON.stringify(salonJsonLd)
}

export { BOOKING_URL }
