import {
  BOOKING_URL,
  JOIN_TEAM_URL,
  LIVE_SITE_URL,
  LEGACY_SITE_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  PRICE_LIST_URL,
  TERMS_URL,
  contact,
  extras,
  offers,
  social,
} from '../data'
import { VersionBar } from '../components/VersionBar'

const actions = [
  {
    title: 'Current site',
    detail: 'The live Wix site at yuzuhairandbeauty.london.',
    href: LIVE_SITE_URL,
    kind: 'Current site',
  },
  {
    title: 'Phorest',
    detail: 'Live online booking for Dickens Yard.',
    href: BOOKING_URL,
    kind: 'Live site',
  },
  {
    title: 'Google Maps',
    detail: 'Listing, reviews, and directions — one short link.',
    href: MAPS_DIRECTIONS_URL,
    kind: 'Live site',
  },
  {
    title: 'Instagram',
    detail: '@yuzuhairandbeauty',
    href: social.instagram,
    kind: 'Live site',
  },
  {
    title: 'TikTok',
    detail: '@yuzuhairandbeauty.est16',
    href: social.tiktok,
    kind: 'Live site',
  },
  {
    title: 'Facebook',
    detail: 'YUZU Hair and Beauty',
    href: social.facebook,
    kind: 'Live site',
  },
]

const documents = [
  {
    title: '2025 price list',
    detail: 'Official menu hosted here (same file as the live site).',
    href: PRICE_LIST_URL,
    kind: 'PDF',
  },
  {
    title: 'Mandatory patch testing 2025',
    detail: 'Required before colour, for new and existing clients.',
    href: PATCH_TEST_PDF_URL,
    kind: 'PDF',
  },
  {
    title: 'Terms & conditions',
    detail: 'There is no T&C PDF — this is the live Wix page (arrival, patch test, 48-hour cancel, redo).',
    href: TERMS_URL,
    kind: 'Webpage',
  },
  {
    title: 'Exclusive offers',
    detail: 'There is no promotions PDF. Offers live on this page and on Instagram, not as a file.',
    href: OFFERS_PAGE_URL,
    kind: 'Webpage',
  },
]

function displayHref(href: string) {
  const base = import.meta.env.BASE_URL
  if (href.startsWith(base)) return href.slice(base.length)
  return href.replace(/^https?:\/\//, '')
}

export default function Links() {
  return (
    <div className="desk">
      <VersionBar current="links" />
      <header className="desk-top">
        <div className="desk-wrap desk-top-inner">
          <div>
            <p className="desk-kicker">Yuzu Hair &amp; Beauty · Dickens Yard</p>
            <h1>Live links &amp; PDFs</h1>
          </div>
          <div className="desk-header-actions">
            <a className="desk-btn" href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
              Current site
            </a>
            <a className="desk-btn desk-btn-line" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book on Phorest
            </a>
          </div>
        </div>
      </header>

      <main className="desk-wrap">
        <p className="desk-lead">
          Every public salon destination in one place, starting with the current site at
          yuzuhairandbeauty.london. Booking, maps, and socials use the canonical URLs. Price list
          and patch-test policy are PDFs. Terms and offers are webpages — there is no offers PDF.
          The old Ueni site is listed under Take offline.
        </p>

        <section className="desk-section" aria-labelledby="desk-offline">
          <h2 id="desk-offline">Take offline</h2>
          <p>Previous Yuzu site. Still reachable — switch it off when the new site is live.</p>
          <ul className="desk-grid">
            <li>
              <a className="desk-offline-card" href={LEGACY_SITE_URL} target="_blank" rel="noreferrer">
                <span className="desk-tag offline">Take offline</span>
                <strong>Old Ueni site</strong>
                <span>Not the current Wix site. yuzuhairandbeauty.london is live.</span>
                <code>{displayHref(LEGACY_SITE_URL)}</code>
              </a>
            </li>
          </ul>
        </section>

        <section className="desk-section" aria-labelledby="desk-go">
          <h2 id="desk-go">Book, map, social</h2>
          <ul className="desk-grid">
            {actions.map((item) => (
              <li key={item.title}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className="desk-tag">{item.kind}</span>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                  <code>{displayHref(item.href)}</code>
                </a>
              </li>
            ))}
            <li>
              <a href={contact.phoneHref}>
                <span className="desk-tag">Phone</span>
                <strong>Call the salon</strong>
                <span>{contact.phone}</span>
                <code>{contact.phoneHref}</code>
              </a>
            </li>
            <li>
              <a href={social.email}>
                <span className="desk-tag">Email</span>
                <strong>info@yuzuhairandbeauty.co.uk</strong>
                <span>General enquiries</span>
                <code>mailto:info@yuzuhairandbeauty.co.uk</code>
              </a>
            </li>
          </ul>
        </section>

        <section className="desk-section" aria-labelledby="desk-docs">
          <h2 id="desk-docs">Documents</h2>
          <ul className="desk-grid">
            {documents.map((item) => (
              <li key={item.title}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className={`desk-tag${item.kind === 'PDF' ? ' pdf' : ''}`}>{item.kind}</span>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                  <code>{displayHref(item.href)}</code>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="desk-section desk-pdfs" aria-labelledby="desk-preview">
          <h2 id="desk-preview">Open the PDFs here</h2>
          <div className="desk-pdf-grid">
            <figure>
              <figcaption>2025 price list</figcaption>
              <iframe title="2025 price list PDF" src={PRICE_LIST_URL} />
              <a href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                Open price list
              </a>
            </figure>
            <figure>
              <figcaption>Mandatory patch testing 2025</figcaption>
              <iframe title="Mandatory patch testing PDF" src={PATCH_TEST_PDF_URL} />
              <a href={PATCH_TEST_PDF_URL} target="_blank" rel="noreferrer">
                Open patch-test PDF
              </a>
            </figure>
          </div>
        </section>

        <section className="desk-section" aria-labelledby="desk-offers">
          <h2 id="desk-offers">Current offers (no PDF)</h2>
          <p>
            Pulled from the live{' '}
            <a href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
              Exclusive Offers
            </a>{' '}
            page. Instagram also posts the weekday graphics.
          </p>
          <ul className="desk-offers">
            {offers.map((item) => (
              <li key={item.id}>
                <strong>
                  {item.kicker} · {item.title}
                </strong>
                <span>{item.detail}</span>
              </li>
            ))}
            {extras.slice(0, 2).map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="desk-section" aria-labelledby="desk-visit">
          <h2 id="desk-visit">Visit</h2>
          <div className="desk-visit">
            <div>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {contact.hours.map((item) => (
                <p key={item.days}>
                  {item.days}: {item.time}
                </p>
              ))}
              <a className="desk-btn desk-btn-line" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Open Google Maps
              </a>
              <a className="desk-btn desk-btn-line" href={JOIN_TEAM_URL}>
                Join the team
              </a>
            </div>
            <iframe
              title="Map of Yuzu Hair at Dickens Yard, Ealing"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
