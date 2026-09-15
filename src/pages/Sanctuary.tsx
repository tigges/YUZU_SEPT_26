import { useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  PRICE_LIST_URL,
  contact,
  reviews,
  social,
  v4Assets,
} from '../data'
import { VersionBar } from '../components/VersionBar'

const nav = [
  { href: '#portfolio', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const chips = [
  'Hair Cuts',
  'Hair Styling',
  'Hair Colour',
  'Highlights',
  'Brazilian Blow Dry',
  'Balayage',
  'Olaplex Treatments',
  'Lashes & Tinting',
]

const hours = [
  { d: 'Mon', t: 'Closed', closed: true },
  { d: 'Tue', t: '10-8', closed: false },
  { d: 'Wed', t: '10-8', closed: false },
  { d: 'Thu', t: '10-8', closed: false },
  { d: 'Fri', t: '10-8', closed: false },
  { d: 'Sat', t: '9-6', closed: false },
  { d: 'Sun', t: 'Closed', closed: true },
]

export default function Sanctuary() {
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
    <div className="sanct">
      <VersionBar current="sanctuary" />
      <header className={`sanct-nav${menuOpen ? ' open' : ''}`}>
        <div className="sanct-wrap sanct-nav-inner">
          <a className="sanct-logo" href="#top" onClick={goTo('#top')}>
            <span className="sanct-logo-main">Yuzu</span>
            <span className="sanct-logo-sub">Hair &amp; Beauty · Ealing</span>
          </a>
          <nav className="sanct-menu" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="sanct-btn" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book
          </a>
          <button
            className="sanct-toggle"
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            ≡
          </button>
        </div>
      </header>

      <main id="top">
        <section
          className="sanct-hero"
          style={{ ['--sanct-hero' as string]: `url(${v4Assets.hero})` }}
          aria-label="Welcome"
        >
          <div className="sanct-wrap">
            <div className="sanct-eyebrow">Ealing Broadway · London W5</div>
            <h1>
              Your
              <br />
              <em>Sanctuary</em>
              <br />
              awaits.
            </h1>
            <p>
              Japanese-inspired artistry meets West London precision. A modern salon with calm,
              confidence, and exceptional colour.
            </p>
            <a className="sanct-btn-gold" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book your visit
            </a>
          </div>
        </section>

        <section className="sanct-hours" aria-label="Opening hours">
          <div className="sanct-wrap sanct-hours-inner">
            <div className="sanct-hours-label">Open</div>
            <div className="sanct-hours-days">
              {hours.map((item) => (
                <div className={`sanct-day${item.closed ? ' closed' : ''}`} key={item.d}>
                  <div className="d">{item.d}</div>
                  <div className="t">{item.t}</div>
                </div>
              ))}
            </div>
            <div className="sanct-hours-mobile">Tue–Fri 10–8 · Sat 9–6 · Closed Sun/Mon</div>
          </div>
        </section>

        <section className="sanct-section" id="portfolio">
          <div className="sanct-wrap">
            <div className="sanct-head">
              <div>
                <div className="sanct-eyebrow">Portfolio</div>
                <h2>
                  Instagram <em>Results</em>
                </h2>
              </div>
              <a className="sanct-link" href={social.instagram} target="_blank" rel="noreferrer">
                Follow @yuzuhairandbeauty →
              </a>
            </div>
            <div className="sanct-looks">
              {v4Assets.looks.map((item, index) => (
                <a
                  className={`sanct-look${index === 0 ? ' featured' : ''}`}
                  key={item.src}
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={item.src} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sanct-section" id="reviews">
          <div className="sanct-wrap">
            <div className="sanct-head">
              <div>
                <div className="sanct-eyebrow">Verified Google Reviews</div>
                <h2>
                  What clients <em>say</em>
                </h2>
              </div>
            </div>
            <div className="sanct-reviews">
              {reviews.map((review, index) => (
                <article key={review.name}>
                  <img src={v4Assets.reviewPhotos[index]} alt="" />
                  <p>“{review.quote}”</p>
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                    {review.name} · Google
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sanct-social-bar">
          <div className="sanct-wrap sanct-social-inner">
            <a href={social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={social.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </section>

        <section className="sanct-section" id="services">
          <div className="sanct-wrap">
            <div className="sanct-head">
              <div>
                <div className="sanct-eyebrow">Hair &amp; Beauty</div>
                <h2>Our services</h2>
              </div>
              <a className="sanct-link" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                Full price list →
              </a>
            </div>
            <div className="sanct-services-media">
              {v4Assets.servicesMedia.map((item) => (
                <article key={item.label}>
                  <img src={item.src} alt={item.label} />
                  <div>{item.label}</div>
                </article>
              ))}
            </div>
            <div className="sanct-chips">
              {chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="sanct-contact" id="contact">
          <div className="sanct-wrap sanct-contact-grid">
            <article>
              <div className="label">Address</div>
              <div>5 Dickens Yard, Longfield Ave, W5 2TD</div>
            </article>
            <article>
              <div className="label">Phone</div>
              <div>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
            </article>
            <article>
              <div className="label">Email</div>
              <div>
                <a href={social.email}>{contact.email}</a>
              </div>
            </article>
            <article>
              <div className="label">Book online</div>
              <div>
                <a href={BOOKING_URL} target="_blank" rel="noreferrer">
                  phorest.com →
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="sanct-join">
          <div className="sanct-wrap sanct-join-inner">
            <div>
              <div className="sanct-join-title">Join the Yuzu team</div>
              <p>We&apos;re looking for passionate stylists in the heart of Ealing Broadway.</p>
            </div>
            <div className="sanct-join-actions">
              <span>Senior Stylists</span>
              <span>Stylists</span>
              <span>Models</span>
              <a className="sanct-btn" href="mailto:info@yuzuhairandbeauty.co.uk?subject=Joining the Yuzu team">
                Send your CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="sanct-footer">
        <div className="sanct-wrap">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty · Dickens Yard, W5 2TD</span>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </div>
      </footer>
    </div>
  )
}
