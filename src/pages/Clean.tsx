import { useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  OFFERS_PAGE_URL,
  PRICE_LIST_URL,
  contact,
  gallery,
  reviews,
  social,
} from '../data'
import { VersionBar } from '../components/VersionBar'

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/clean/${path}`

const nav = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
]

const serviceCards = [
  {
    title: 'Cut & Styling',
    copy: 'Precision cuts tailored to your hair and lifestyle.',
    from: '£55',
  },
  {
    title: 'Colour',
    copy: 'Highlights, balayage, root retouch and tonal refresh.',
    from: '£85',
  },
  {
    title: 'Treatments',
    copy: 'Hair-strengthening and conditioning rituals.',
    from: '£35',
  },
  {
    title: 'Blow Dry',
    copy: 'Polished finishes for everyday or events.',
    from: '£35',
  },
]

const offerCards = [
  {
    src: asset('offer-tuesdays.jpg'),
    alt: 'Colour Tuesdays 50% off with senior stylist',
    title: 'New Client Colour Welcome',
    detail: 'Save on your first colour service this month.',
  },
  {
    src: asset('offer-wednesdays.jpg'),
    alt: 'Smooth Wednesdays 25% off smoothing treatments',
    title: 'Cut + Blow Dry Bundle',
    detail: 'Weekday package offer for selected stylists.',
  },
  {
    src: asset('offer-thursdays.jpg'),
    alt: 'Thursdays are the new Tuesdays, 50% off with stylist',
    title: 'Treatment Add-On',
    detail: 'Reduced rate when booked with cut or colour.',
  },
]

const looks = [
  gallery[0],
  gallery[1],
  gallery[2],
  gallery[3],
  gallery[4],
  gallery[5],
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M13.4 8.2V6.8c0-.5.3-.8.8-.8h1.1V4h-1.8C11.8 4 11 5.1 11 6.7v1.5H9.4v2.2H11V20h2.4v-9.6h1.8l.3-2.2h-2.1Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="6.5" y="8.5" width="11" height="7.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9.2 12 13l5-3.8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function CleanSocial() {
  return (
    <div className="clean-social">
      <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
        <FacebookIcon />
      </a>
      <a href={social.email} aria-label="Email">
        <MailIcon />
      </a>
    </div>
  )
}

export default function Clean() {
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
    <div className="clean">
      <VersionBar current="clean" />
      <header className={`clean-header${menuOpen ? ' open' : ''}`}>
        <div className="clean-inner clean-header-inner">
          <a className="clean-logo" href="#top" onClick={goTo('#top')}>
            <img src={asset('logo.png')} alt="YUZU" />
          </a>
          <nav className="clean-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
            <a className="clean-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book
            </a>
          </nav>
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
          <img src={asset('hero.jpg')} alt="Wavy brunette hair, photographed in salon" />
          <div className="clean-hero-copy">
            <h1 id="clean-hero-heading">
              Japanese-inspired precision for
              <br />
              healthy, confident hair.
            </h1>
            <p>
              Specialist cuts, colour, and care in Ealing. Clean finishes, thoughtful
              <br />
              consultation, and results that suit your lifestyle.
            </p>
            <a className="clean-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book your appointment
            </a>
          </div>
        </section>

        <section className="clean-gallery" id="gallery">
          <div className="clean-inner">
            <h2>Gallery</h2>
            <ul>
              {looks.map((item) => (
                <li key={item.src}>
                  <img src={item.src} alt={item.alt} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="clean-inner">
          <CleanSocial />
        </div>

        <section className="clean-reviews" id="reviews">
          <div className="clean-inner">
            <h2>What Clients Say</h2>
            <div className="clean-review-grid">
              {reviews.map((review) => (
                <article key={review.name}>
                  <img src={review.photo} alt="" />
                  <div className="clean-review-body">
                    <p className="clean-stars" aria-label="5 stars">
                      ★★★★★
                    </p>
                    <h3>“{review.quote}”</h3>
                    <p>{review.body}</p>
                    <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                      {review.name} · Google review
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <a className="clean-dark" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
              Read all Google Reviews
            </a>
          </div>
        </section>

        <section className="clean-services-band" id="services">
          <div className="clean-inner">
            <div className="clean-services">
              <div className="clean-services-art">
                <h2>Services</h2>
                <img src={asset('portrait.png')} alt="" />
              </div>
              <ul>
                {serviceCards.map((service) => (
                  <li key={service.title}>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <span>from {service.from}</span>
                  </li>
                ))}
              </ul>
              <a className="clean-dark" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                View Pricing
              </a>
            </div>
          </div>
        </section>

        <section className="clean-offers-band" id="offers">
          <div className="clean-inner">
            <div className="clean-offers">
              <h2>Current Offers</h2>
              <ul>
                {offerCards.map((item) => (
                  <li key={item.src}>
                    <a href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
                      <img src={item.src} alt={item.alt} />
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </a>
                  </li>
                ))}
              </ul>
              <a className="clean-dark" href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
                View all offers
              </a>
            </div>
          </div>
        </section>

        <section className="clean-visit" id="visit">
          <div className="clean-inner clean-visit-grid">
            <div>
              <h2>Address</h2>
              <p>
                5, Dickens Yard
                <br />
                Longfield Avenue, W5 2TD
              </p>
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
            </div>
            <div className="clean-visit-book">
              <h2>Ready to book?</h2>
              <a className="clean-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book your appointment
              </a>
              <CleanSocial />
            </div>
            <div>
              <h2>Opening times</h2>
              <p>
                Tuesday – Friday: 10am to 8pm
                <br />
                Saturday: 9am to 6pm
                <br />
                Monday &amp; Sunday: Closed
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="clean-footer">
        <div className="clean-inner">
          <p>© Yuzu Hair &amp; Beauty. All rights reserved.</p>
          <p>Designed by GTMX</p>
        </div>
      </footer>
    </div>
  )
}
