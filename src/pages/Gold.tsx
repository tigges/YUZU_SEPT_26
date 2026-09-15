import { useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  PRICE_LIST_URL,
  contact,
  gallery,
  instagram,
  reviews,
  services,
  social,
} from '../data'
import { SocialLinks } from '../components/SocialLinks'
import { VersionBar } from '../components/VersionBar'

const nav = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#visit', label: 'Visit' },
]

const pillars = [
  {
    title: 'Colour that suits you',
    copy: 'Tonal work and maintenance plans that fit how you actually live.',
  },
  {
    title: 'Cuts you can live in',
    copy: 'Shapes that grow out gracefully between appointments.',
  },
  {
    title: 'A calm room',
    copy: 'Unhurried consultation, clear pricing, and stylists who explain as they go.',
  },
]

export default function Gold() {
  const [menuOpen, setMenuOpen] = useState(false)

  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    setMenuOpen(false)
    window.setTimeout(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className="gold">
      <VersionBar current="gold" />
      <header className={`gold-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap gold-header-inner">
          <a className="gold-logo" href="#top" onClick={goTo('#top')}>
            Yuzu Hair &amp; Beauty
          </a>
          <nav className="gold-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="btn gold-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="gold-hero" aria-labelledby="gold-hero-heading">
          <div className="wrap">
            <p className="gold-kicker">Ealing Broadway</p>
            <h1 id="gold-hero-heading">Hair &amp; beauty with room to breathe.</h1>
            <p>Japanese-inspired cuts, colour, and care a short walk from the station.</p>
            <div className="gold-actions">
              <a className="btn gold-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book consultation
              </a>
              <a className="gold-ghost" href="#services" onClick={goTo('#services')}>
                View services
              </a>
            </div>
          </div>
        </section>

        <div className="gold-trust">
          <div className="wrap">
            <span>★★★★★ 4.5 on Google</span>
            <span>New clients welcome</span>
            <span>Unhurried consultations</span>
          </div>
        </div>

        <section className="gold-intro wrap">
          <div>
            <h2>Fresh perspective, familiar warmth.</h2>
            <p>
              Tradition meeting trend at Dickens Yard: blow-outs, sleek cuts, colour, and smoothing
              in a calm Japanese-inspired room.
            </p>
          </div>
          <ul>
            {pillars.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="gold-services wrap" id="services">
          <h2>Services</h2>
          <p>Every appointment starts with a consultation.</p>
          <ul>
            {services.map((service) => (
              <li key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <span>from {service.from}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="gold-gallery" id="gallery">
          <div className="wrap">
            <h2>In the chair</h2>
            <p>Colour, cuts, and finishes from Dickens Yard.</p>
            <ul>
              {gallery.map((item) => (
                <li key={item.src}>
                  <img src={item.src} alt={item.alt} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="gold-reviews wrap">
          <h2>Kind words</h2>
          <div className="gold-review-grid">
            {reviews.map((review) => (
              <article key={review.name}>
                <p>“{review.quote}”</p>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                  {review.name} · Google
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="gold-social wrap">
          <div>
            <h2>Follow the work</h2>
            <p>Daily cuts, colour, and salon life on Instagram.</p>
          </div>
          <a className="gold-outline" href={social.instagram} target="_blank" rel="noreferrer">
            {instagram.handle}
          </a>
          <ul>
            {instagram.feed.slice(0, 6).map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <img src={item.src} alt={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="gold-visit wrap" id="visit">
          <div>
            <h2>Visit us</h2>
            {contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <div className="gold-actions">
              <a className="gold-outline" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Get directions
              </a>
              <a className="btn gold-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book
              </a>
            </div>
          </div>
          <ul>
            {contact.hours.map((item) => (
              <li key={item.days}>
                <span>{item.days}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
          <iframe
            className="gold-map"
            title="Map of Yuzu Hair at Dickens Yard, Ealing"
            src={MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <footer className="gold-footer">
        <div className="wrap">
          <div>
            <p>Yuzu Hair &amp; Beauty</p>
            <p>Japanese-inspired precision in Ealing Broadway.</p>
          </div>
          <div>
            <a href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
              Price list
            </a>
            <SocialLinks className="social-row gold-social-icons" />
          </div>
        </div>
      </footer>
    </div>
  )
}
