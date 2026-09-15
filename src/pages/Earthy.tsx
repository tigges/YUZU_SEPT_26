import { useEffect, useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  PRICE_LIST_URL,
  contact,
  extras,
  gallery,
  offers,
  priceGroups,
  reviews,
  services,
  social,
  treatments,
} from '../data'
import { SocialLinks } from '../components/SocialLinks'
import { VersionBar } from '../components/VersionBar'

const nav = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#services', label: 'Services' },
  { href: '#prices', label: 'Prices' },
  { href: '#offers', label: 'Offers' },
  { href: '#visit', label: 'Visit' },
]

export default function Earthy() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [tier, setTier] = useState<'senior' | 'stylist'>('senior')

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') setLightbox((i) => (i === null ? i : (i + 1) % gallery.length))
      if (event.key === 'ArrowLeft')
        setLightbox((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])

  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    setMenuOpen(false)
    const id = href.slice(1)
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <>
      <VersionBar current="earthy" />
      <a className="skip" href="#gallery">
        Skip to content
      </a>
      <header className={`header${menuOpen ? ' open' : ''}`}>
        <div className="wrap header-inner">
          <a className="logo" href="#top" onClick={goTo('#top')}>
            <span className="logo-word">YUZU</span>
            <span className="logo-sub">Hair &amp; Beauty</span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
            <a className="btn btn-clay" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book
            </a>
          </nav>
        </div>
      </header>

      <div className="notice">
        <div className="wrap">
          <span>
            Colour appointments now require a patch test for every client, including existing
            guests.
          </span>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book a test
          </a>
        </div>
      </div>

      <main id="top">
        <section className="hero" aria-label="Welcome">
          <div className="hero-media">
            <img
              src={`${import.meta.env.BASE_URL}assets/brand/leaves.jpg`}
              alt="Tropical foliage in warm light, the atmosphere of the salon"
            />
          </div>
          <div className="wrap hero-copy">
            <span className="eyebrow">Ealing Broadway</span>
            <h1>Japanese-inspired precision for healthy, confident hair.</h1>
            <p>
              Specialist cuts, colour, and care a short walk from the station. Thoughtful
              consultation, clean finishes, and results that suit how you live.
            </p>
            <div className="hero-actions">
              <a className="btn btn-clay" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book your appointment
              </a>
              <a className="btn btn-ghost" href="#gallery">
                See our work
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Work</span>
              <h2>Gallery</h2>
              <p>Colour, cuts, and finishes from the chair at Dickens Yard.</p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setLightbox(index)}
                  aria-label={`Open ${item.alt}`}
                >
                  <img src={item.src} alt={item.alt} />
                </button>
              ))}
            </div>
            <div className="follow">
              <span className="eyebrow">Follow along</span>
              <a className="handle" href={social.instagram} target="_blank" rel="noreferrer">
                @yuzuhairandbeauty
              </a>
              <SocialLinks />
            </div>
          </div>
        </section>

        <section className="section reviews" id="reviews">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">4.5 on Google · 213 reviews</span>
              <h2>What clients say</h2>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <img src={review.photo} alt={`${review.name} after their appointment`} />
                  <div className="body">
                    <div className="stars" aria-label="5 stars">
                      ★★★★★
                    </div>
                    <h3>“{review.quote}”</h3>
                    <p>{review.body}</p>
                    <a className="chip" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                      {review.name} · Google review
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="reviews-cta">
              <a className="btn btn-ink" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                Read all Google reviews
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="wrap services-layout">
            <div>
              <div className="section-head">
                <span className="eyebrow">The menu</span>
                <h2>Services</h2>
                <p>
                  Tradition meeting trend: blow-outs, sleek cuts, colour, and smoothing in a calm
                  Japanese-inspired room.
                </p>
              </div>
              <div className="portrait">
                <img src={`${import.meta.env.BASE_URL}assets/brand/portrait-left.png`} alt="" />
              </div>
            </div>
            <div>
              <div className="service-grid">
                {services.map((service) => (
                  <article className="service-card" key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <span className="from">from {service.from}</span>
                  </article>
                ))}
              </div>
              <div className="services-cta">
                <a className="btn btn-ink" href="#prices">
                  View pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section prices" id="prices">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Transparent</span>
              <h2>Prices</h2>
              <p>Senior stylist and next-generation stylist menus. Long hair may add a little extra time.</p>
            </div>
            <div className="tabs" role="tablist" aria-label="Stylist level">
              <button
                type="button"
                role="tab"
                aria-selected={tier === 'senior'}
                onClick={() => setTier('senior')}
              >
                Senior stylist
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tier === 'stylist'}
                onClick={() => setTier('stylist')}
              >
                Stylist
              </button>
            </div>
            <div className="price-layout">
              <div>
                {priceGroups.map((group) => (
                  <div className="price-group" key={group.title}>
                    <h3>{group.title}</h3>
                    {group.rows.map((row) => (
                      <div className="price-row" key={row.name}>
                        <span>{row.name}</span>
                        <span>{tier === 'senior' ? row.senior : row.stylist}</span>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="price-foot">
                  <a className="btn btn-ink" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                    Download full price list
                  </a>
                  <a className="btn btn-clay" href={BOOKING_URL} target="_blank" rel="noreferrer">
                    Book now
                  </a>
                </div>
              </div>
              <aside className="treatments">
                <h3>Treatments</h3>
                <p className="note">Aura smoothing includes 200ml maintenance shampoo and conditioner.</p>
                <ul>
                  {treatments.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section offers" id="offers">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">This week</span>
              <h2>Current offers</h2>
              <p>Weekday colour and smoothing, plus loyalty extras. Ask in salon when you book.</p>
            </div>
            <div className="offer-grid">
              {offers.map((offer) => (
                <article className={`offer-card offer-${offer.tone}`} key={offer.id}>
                  <div>
                    <div className="kicker">{offer.kicker}</div>
                    <h3>{offer.title}</h3>
                    <p>{offer.detail}</p>
                  </div>
                  <img className="leaf" src={`${import.meta.env.BASE_URL}assets/brand/leaf.png`} alt="" />
                </article>
              ))}
            </div>
            <div className="extras">
              {extras.map((item) => (
                <article className="extra" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="visit">
          <div className="wrap">
            <div className="visit-grid">
              <div>
                <h3>Address</h3>
                {contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </p>
                <p>
                  <a href={social.email}>{contact.email}</a>
                </p>
              </div>
              <div className="visit-cta">
                <h3>Ready to book?</h3>
                <a className="btn btn-clay" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book your appointment
                </a>
                <SocialLinks />
              </div>
              <div>
                <h3>Opening times</h3>
                <ul className="hours">
                  {contact.hours.map((item) => (
                    <li key={item.days}>
                      <span>{item.days}</span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="map-panel">
              <iframe
                className="map"
                title="Map of Yuzu Hair at Dickens Yard, Ealing"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className="btn btn-ink map-fallback"
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty. All rights reserved.</span>
          <a href="https://www.yuzuhairandbeauty.london/terms-and-conditions">Terms &amp; conditions</a>
        </div>
      </footer>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image">
          <button className="lightbox-close" type="button" onClick={() => setLightbox(null)}>
            ×
          </button>
          <button
            className="lightbox-nav prev"
            type="button"
            aria-label="Previous"
            onClick={() => setLightbox((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length))}
          >
            ‹
          </button>
          <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} />
          <button
            className="lightbox-nav next"
            type="button"
            aria-label="Next"
            onClick={() => setLightbox((i) => (i === null ? 0 : (i + 1) % gallery.length))}
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
