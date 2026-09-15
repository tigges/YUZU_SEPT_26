import { useEffect, useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  OFFERS_PAGE_URL,
  PRICE_LIST_URL,
  TERMS_URL,
  contact,
  reviews,
  services,
  social,
} from '../data'
import { SocialLinks } from '../components/SocialLinks'
import { VersionBar } from '../components/VersionBar'

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/clean/${path}`

const nav = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#services', label: 'Services' },
  { href: '#offers', label: 'Offers' },
  { href: '#visit', label: 'Visit' },
]

const looks = [
  { src: asset('look-red.jpg'), alt: 'Vivid red bob with a blunt fringe' },
  { src: asset('look-copper-salon.jpg'), alt: 'Copper colour, photographed in the salon' },
  { src: asset('look-brunette.jpg'), alt: 'Brunette waves with a soft blow-dry' },
  { src: asset('look-copper-pink.jpg'), alt: 'Copper and rose colour with textured fringe' },
  { src: asset('look-teal.jpg'), alt: 'Deep teal bob with a soft, healthy finish' },
  { src: asset('look-violet.jpg'), alt: 'Violet and blue colour melt, worn long' },
  { src: asset('look-bob.jpg'), alt: 'Short dark bob with a fringe, in salon' },
]

const offerCards = [
  { src: asset('offer-tuesdays.jpg'), alt: 'Colour Tuesdays 50% off with senior stylist' },
  { src: asset('offer-wednesdays.jpg'), alt: 'Smooth Wednesdays 25% off smoothing treatments' },
  { src: asset('offer-thursdays.jpg'), alt: 'Thursdays are the new Tuesdays, 50% off with stylist' },
]

const cleanReviews = [
  { name: reviews[0].name, quote: reviews[0].quote, photo: asset('look-bob.jpg') },
  { name: reviews[1].name, quote: reviews[1].quote, photo: asset('review-blonde.jpg') },
  { name: 'Client', quote: 'Calm, expert, and friendly throughout.', photo: asset('review-salon.jpg') },
]

const socialThumbs = [
  asset('look-copper-salon.jpg'),
  asset('look-brunette.jpg'),
  asset('offer-tuesdays.jpg'),
  asset('look-teal.jpg'),
  asset('offer-wednesdays.jpg'),
  asset('look-red.jpg'),
]

export default function Clean() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') setLightbox((i) => (i === null ? i : (i + 1) % looks.length))
      if (event.key === 'ArrowLeft')
        setLightbox((i) => (i === null ? i : (i - 1 + looks.length) % looks.length))
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
    <div className="clean">
      <VersionBar current="clean" />
      <header className={`clean-header${menuOpen ? ' open' : ''}`}>
        <div className="wrap clean-header-inner">
          <a className="clean-logo" href="#top" onClick={goTo('#top')}>
            <img src={asset('logo.png')} alt="YUZU" />
          </a>
          <nav className="clean-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="clean-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
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
        <section className="clean-hero" aria-labelledby="clean-hero-heading">
          <div className="wrap clean-hero-grid">
            <div className="clean-hero-copy">
              <img className="clean-mark" src={asset('portrait.png')} alt="" />
              <p className="clean-kicker">Ealing Broadway</p>
              <h1 id="clean-hero-heading">Hair &amp; beauty with room to breathe.</h1>
              <p>
                Japanese-inspired cuts, colour, and care at Dickens Yard — a short walk from the
                station.
              </p>
              <a className="clean-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book consultation
              </a>
            </div>
            <div className="clean-hero-photo">
              <img src={asset('look-red.jpg')} alt="Vivid red bob with a blunt fringe" />
            </div>
          </div>
        </section>

        <div className="clean-trust">
          <div className="wrap">
            <span>★★★★★ 4.5 on Google</span>
            <span>New clients welcome</span>
            <span>Unhurried consultations</span>
          </div>
        </div>

        <section className="clean-gallery" id="gallery">
          <div className="wrap">
            <p className="clean-kicker dark">In the chair</p>
            <h2>Client looks from Dickens Yard.</h2>
            <ul>
              {looks.map((item, index) => (
                <li key={item.src}>
                  <button type="button" onClick={() => setLightbox(index)}>
                    <img src={item.src} alt={item.alt} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="clean-social wrap">
          <div>
            <h2>Follow the work</h2>
            <p>Cuts, colour, and weekday offers on Instagram.</p>
          </div>
          <a className="clean-ghost" href={social.instagram} target="_blank" rel="noreferrer">
            @yuzuhairandbeauty
          </a>
          <ul>
            {socialThumbs.map((src) => (
              <li key={src}>
                <a href={social.instagram} target="_blank" rel="noreferrer">
                  <img src={src} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="clean-reviews wrap" id="reviews">
          <h2>Kind words</h2>
          <div className="clean-review-grid">
            {cleanReviews.map((review) => (
              <article key={review.name}>
                <img src={review.photo} alt="" />
                <p>“{review.quote}”</p>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                  {review.name} · Google
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="clean-services wrap" id="services">
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
          <a className="clean-ghost" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
            Price list
          </a>
        </section>

        <section className="clean-offers wrap" id="offers">
          <h2>This week</h2>
          <p>Weekday colour and smoothing. Ask in salon when you book.</p>
          <ul>
            {offerCards.map((item) => (
              <li key={item.src}>
                <a href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
                  <img src={item.src} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="clean-visit wrap" id="visit">
          <div>
            <h2>Visit us</h2>
            {contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <ul className="clean-hours">
              {contact.hours.map((item) => (
                <li key={item.days}>
                  <span>{item.days}</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="clean-visit-actions">
              <a className="clean-ghost" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Get directions
              </a>
              <a className="clean-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book
              </a>
            </div>
          </div>
          <iframe
            title="Map of Yuzu Hair at Dickens Yard, Ealing"
            src={MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <footer className="clean-footer">
        <div className="wrap">
          <img src={asset('logo.png')} alt="YUZU" />
          <p>Japanese-inspired precision in Ealing Broadway.</p>
          <SocialLinks className="social-row" />
          <a href={TERMS_URL} target="_blank" rel="noreferrer">
            Terms &amp; conditions
          </a>
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
            onClick={() => setLightbox((i) => (i === null ? 0 : (i - 1 + looks.length) % looks.length))}
          >
            ‹
          </button>
          <img src={looks[lightbox].src} alt={looks[lightbox].alt} />
          <button
            className="lightbox-nav next"
            type="button"
            aria-label="Next"
            onClick={() => setLightbox((i) => (i === null ? 0 : (i + 1) % looks.length))}
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
