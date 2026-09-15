import { useEffect, useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  contact,
  gallery,
  reviews,
  services,
  social,
} from '../data'
import { SocialLinks } from '../components/SocialLinks'
import { VersionBar } from '../components/VersionBar'

const nav = [
  { href: '#work', label: 'Work' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#services', label: 'Services' },
  { href: '#visit', label: 'Visit' },
]

export default function Studio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

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
    window.setTimeout(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <div className="studio">
      <VersionBar current="studio" />
      <header className={`studio-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap studio-header-inner">
          <a className="studio-logo" href="#top" onClick={goTo('#top')}>
            Yuzu
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
          <nav className="studio-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
            <a className="btn studio-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="studio-hero wrap" aria-label="Welcome">
          <div className="studio-hero-copy">
            <p className="studio-kicker">Ealing Broadway</p>
            <h1>Hair, seen clearly.</h1>
            <p>
              Cuts, colour, and care at Dickens Yard. Japanese-inspired precision, photographed
              without the foliage overlay.
            </p>
            <div className="studio-actions">
              <a className="btn studio-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book your appointment
              </a>
              <a className="studio-textlink" href="#work" onClick={goTo('#work')}>
                See the work
              </a>
            </div>
          </div>
          <div className="studio-hero-media">
            <img src={gallery[4].src} alt={gallery[4].alt} />
          </div>
        </section>

        <section className="studio-work" id="work">
          <div className="wrap">
            <div className="studio-section-head">
              <p className="studio-kicker">Gallery</p>
              <h2>Six looks from the chair.</h2>
            </div>
            <div className="studio-gallery">
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
          </div>
        </section>

        <section className="studio-reviews wrap" id="reviews">
          <div className="studio-section-head">
            <p className="studio-kicker">4.5 on Google · 213 reviews</p>
            <h2>Clients, in their words.</h2>
          </div>
          <div className="studio-review-grid">
            {reviews.map((review) => (
              <article key={review.name}>
                <img src={review.photo} alt={`${review.name} after their appointment`} />
                <p>“{review.quote}”</p>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                  {review.name}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-services wrap" id="services">
          <div className="studio-section-head">
            <p className="studio-kicker">Menu</p>
            <h2>What we do.</h2>
          </div>
          <div className="studio-service-grid">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <span>from {service.from}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-visit" id="visit">
          <div className="wrap studio-visit-grid">
            <div>
              <p className="studio-kicker">Visit</p>
              <h2>5 Dickens Yard, W5 2TD</h2>
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p>
                <a href={social.email}>{contact.email}</a>
              </p>
              <a className="studio-textlink" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </div>
            <ul>
              {contact.hours.map((item) => (
                <li key={item.days}>
                  <span>{item.days}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="studio-visit-cta">
              <a className="btn studio-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book
              </a>
              <SocialLinks className="social-row studio-social" />
            </div>
          </div>
        </section>
      </main>

      <footer className="studio-footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty</span>
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
    </div>
  )
}
