import { useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  JOIN_TEAM_URL,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  PRICE_LIST_URL,
  archiveLooks,
  contact,
  gallery,
  offers,
  reviews,
  services,
  social,
} from '../data'
import { VersionBar } from '../components/VersionBar'

const nav = [
  { href: '#services', label: 'Services' },
  { href: '#offers', label: 'Offers' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#careers', label: 'Join team' },
  { href: '#contact', label: 'Contact' },
]

export default function Auto() {
  const [menuOpen, setMenuOpen] = useState(false)

  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    setMenuOpen(false)
    window.setTimeout(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const looks = [...gallery.slice(0, 3), ...archiveLooks.slice(0, 3)]

  return (
    <div className="au">
      <VersionBar current="auto" />
      <header className={`au-header${menuOpen ? ' open' : ''}`}>
        <div className="au-wrap au-nav">
          <a className="au-brand" href="#top" onClick={goTo('#top')}>
            <span className="au-mark">YUZU</span>
            <span className="au-sub">Hair &amp; Beauty</span>
          </a>
          <button
            className="au-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="auto-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
          <nav id="auto-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
            <a className="au-btn au-btn-dark" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book now
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="au-hero">
          <div className="au-wrap au-hero-grid">
            <div>
              <p className="au-eyebrow">Japanese-inspired salon in Ealing</p>
              <h1>Effortless hair &amp; beauty, crafted around you.</h1>
              <p>
                Precision cuts, colour, and treatments in a calm studio at Dickens Yard — a short
                walk from Ealing Broadway.
              </p>
              <div className="au-cta">
                <a className="au-btn au-btn-dark" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book appointment
                </a>
                <a className="au-btn au-btn-light" href="#services" onClick={goTo('#services')}>
                  View services
                </a>
              </div>
            </div>
            <aside className="au-hours">
              <h2>Opening hours</h2>
              <ul>
                {contact.hours.map((item) => (
                  <li key={item.days}>
                    <span>{item.days}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </aside>
          </div>
        </section>

        <section className="au-social" aria-label="Social media">
          <div className="au-wrap au-social-inner">
            <a href={social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={social.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href={social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={contact.phoneHref}>Call</a>
          </div>
        </section>

        <section className="au-section" id="services">
          <div className="au-wrap">
            <p className="au-eyebrow">Services</p>
            <h2>What we do best</h2>
            <div className="au-cards">
              {services.map((service) => (
                <article key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <span>From {service.from}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="au-section au-tint" id="offers">
          <div className="au-wrap">
            <p className="au-eyebrow">Offers</p>
            <h2>Current salon offers</h2>
            <div className="au-cards">
              {offers.map((item) => (
                <article key={item.id}>
                  <h3>
                    {item.kicker} · {item.title}
                  </h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="au-section" id="gallery">
          <div className="au-wrap">
            <p className="au-eyebrow">Gallery</p>
            <h2>Recent transformations</h2>
            <div className="au-gallery">
              {looks.map((item) => (
                <img key={item.src} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
        </section>

        <section className="au-section au-tint" id="reviews">
          <div className="au-wrap">
            <p className="au-eyebrow">Reviews</p>
            <h2>Loved by our clients</h2>
            <div className="au-cards">
              {reviews.map((review) => (
                <article key={review.name}>
                  <p>“{review.quote}”</p>
                  <h3>
                    <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                      {review.name} · Google
                    </a>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="au-section" id="careers">
          <div className="au-wrap au-join">
            <div>
              <p className="au-eyebrow">Join the team</p>
              <h2>Build your career at Yuzu</h2>
              <p>
                We look for stylists who care about craft and guest experience in the heart of
                Ealing Broadway.
              </p>
            </div>
            <a className="au-btn au-btn-dark" href={JOIN_TEAM_URL}>
              Apply now
            </a>
          </div>
        </section>

        <section className="au-section au-tint" id="contact">
          <div className="au-wrap au-contact">
            <div className="au-panel">
              <p className="au-eyebrow">Contact</p>
              <h2>Book your visit</h2>
              <ul>
                <li>
                  <strong>Phone:</strong> <a href={contact.phoneHref}>{contact.phone}</a>
                </li>
                <li>
                  <strong>Email:</strong> <a href={social.email}>{contact.email}</a>
                </li>
                <li>
                  <strong>Address:</strong> 5 Dickens Yard, Longfield Avenue, Ealing W5 2TD
                </li>
              </ul>
              <div className="au-cta">
                <a className="au-btn au-btn-dark" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book on Phorest
                </a>
                <a className="au-btn au-btn-light" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                  Get directions
                </a>
                <a className="au-btn au-btn-light" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                  Price list
                </a>
              </div>
            </div>
            <div className="au-map">
              <iframe
                title="Map of Yuzu Hair at Dickens Yard, Ealing"
                src={MAPS_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="au-foot">
        <div className="au-wrap au-foot-grid">
          <div>
            <h3>Yuzu Hair &amp; Beauty</h3>
            <p>Japanese-inspired hair at Dickens Yard, Ealing Broadway.</p>
          </div>
          <div>
            <h4>Follow</h4>
            <p>
              <a href={social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </p>
            <p>
              <a href={social.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
            </p>
            <p>
              <a href={social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </p>
          </div>
        </div>
        <div className="au-wrap au-foot-bottom">
          <p>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
