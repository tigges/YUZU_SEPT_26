import { useState, type FormEvent } from 'react'
import {
  BOOKING_URL,
  JOIN_TEAM_PAGE_URL,
  LIVE_SITE_URL,
  PRICE_LIST_URL,
  PATCH_TEST_PDF_URL,
  OFFERS_PAGE_URL,
  TERMS_URL,
  contact,
  social,
} from '../data'
import { VersionBar } from '../components/VersionBar'

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/wix/${path}`

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 8.6V7.2c0-.7.4-1.1 1.2-1.1h1.2V3.8h-2.1C11.9 3.8 11 5 11 6.9v1.7H9.2v2.4H11V21h3.2v-9.9h2.1l.4-2.5h-2.5Z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.5 5.5h15A1.5 1.5 0 0 1 21 7v8.2a1.5 1.5 0 0 1-1.5 1.5H9.2L4 21v-3.3H3.5A1.5 1.5 0 0 1 2 16.2V7A1.5 1.5 0 0 1 3.5 5.5Z"
      />
    </svg>
  )
}

function Waves() {
  return (
    <svg className="wix-waves" viewBox="0 0 160 40" aria-hidden="true">
      <path d="M2 12c18 0 18 10 36 10S56 12 74 12s18 10 36 10 18-10 36-10 18 10 36 10" />
      <path d="M2 20c18 0 18 10 36 10S56 20 74 20s18 10 36 10 18-10 36-10 18 10 36 10" />
      <path d="M2 28c18 0 18 10 36 10S56 28 74 28s18 10 36 10 18-10 36-10 18 10 36 10" />
    </svg>
  )
}

export default function Wix() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    setMenuOpen(false)
    setMoreOpen(false)
    window.setTimeout(() => {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="wix">
      <VersionBar current="wix" />
      <header className={`wix-header${menuOpen ? ' open' : ''}`}>
        <div className="wix-bar">
          <a className="wix-logo" href="#top" onClick={goTo('#top')}>
            <img src={asset('logo.png')} alt="YUZU" />
            <span>HAIR</span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
          <nav className="wix-nav" aria-label="Primary">
            <a href="#top" onClick={goTo('#top')}>
              Home
            </a>
            <a href={TERMS_URL} target="_blank" rel="noreferrer">
              Terms and conditions
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book now
            </a>
            <a href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
              Offers
            </a>
            <a href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
              Price list
            </a>
            <div className={`wix-more${moreOpen ? ' open' : ''}`}>
              <button type="button" aria-expanded={moreOpen} onClick={() => setMoreOpen((open) => !open)}>
                More
              </button>
              <div className="wix-more-menu">
                <a href={JOIN_TEAM_PAGE_URL} target="_blank" rel="noreferrer">
                  Join the team
                </a>
                <a href="#contact" onClick={goTo('#contact')}>
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="wix-hero" aria-labelledby="wix-patch-heading">
          <img src={asset('hero-leaves.jpg')} alt="" />
          <div className="wix-hero-card">
            <h1 id="wix-patch-heading">Mandatory patch testing</h1>
            <p>
              As part of our updated colour line, we now require a mandatory patch testing for all
              clients before any colour service, including both existing and new clients...
            </p>
            <a className="wix-btn-sage" href={PATCH_TEST_PDF_URL} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        </section>

        <section className="wix-welcome" id="welcome">
          <div className="wix-welcome-copy">
            <h2>Welcome</h2>
            <p>
              Welcome to Yuzu Hair, where tradition meets trend in the art of hair care. Inspired by
              the elegance of Japanese culture, our salon offers a fusion of modern styling
              techniques with timeless grace. Nestled in the heart of Ealing Broadway, and a short
              walk from the station, Yuzu is your sanctuary for rejuvenation and transformation.
              From blow-outs to sleek cuts, our skilled stylists craft each style with precision and
              passion.
            </p>
            <a className="wix-btn-ink" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book online
            </a>
          </div>
          <div className="wix-welcome-art">
            <Waves />
            <img src={asset('portrait.png')} alt="" />
          </div>
        </section>

        <aside className="wix-rail" aria-label="Social">
          <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </aside>

        <section
          className="wix-band"
          id="prices"
          style={{ backgroundImage: `url(${asset('paper.jpg')})` }}
        >
          <h2>Price list</h2>
          <p>Check out our price list here:</p>
          <a className="wix-btn-sage" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
            Price list
          </a>
        </section>

        <section className="wix-offers" id="offers">
          <div className="wix-offers-copy">
            <h2>
              Exclusive
              <br />
              Offers
            </h2>
            <p>Are you ready to elevate your salon visits? Get ready to indulge in exclusive offers just for you</p>
            <a className="wix-btn-ink" href={OFFERS_PAGE_URL} target="_blank" rel="noreferrer">
              Click here
            </a>
          </div>
          <img src={asset('offers-art.png')} alt="" />
        </section>

        <section
          className="wix-band"
          id="team"
          style={{ backgroundImage: `url(${asset('paper.jpg')})` }}
        >
          <h2>Join our team</h2>
          <p>Think you’ve got what it takes to join our team?</p>
          <p>Click below to find more info!</p>
          <a className="wix-btn-sage" href={JOIN_TEAM_PAGE_URL} target="_blank" rel="noreferrer">
            Click here
          </a>
        </section>

        <section className="wix-follow" id="follow">
          <h2>Follow us</h2>
          <a href={social.instagram} target="_blank" rel="noreferrer">
            @yuzuhairandbeauty
          </a>
        </section>

        <section className="wix-contact" id="contact">
          <div>
            <h2>Contact</h2>
            {sent ? (
              <p className="wix-thanks">Thanks for submitting!</p>
            ) : (
              <form className="wix-form" onSubmit={onSubmit}>
                <div className="wix-form-row">
                  <label>
                    Name
                    <input name="name" autoComplete="name" />
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" autoComplete="email" required />
                  </label>
                </div>
                <label>
                  Phone
                  <input name="phone" type="tel" autoComplete="tel" />
                </label>
                <label>
                  <span className="visually-hidden">Message</span>
                  <textarea name="message" placeholder="Type your message here..." rows={4} />
                </label>
                <button className="wix-btn-olive" type="submit">
                  Submit
                </button>
              </form>
            )}
          </div>
          <div className="wix-hours">
            <h2>
              Opening
              <br />
              hours
            </h2>
            <p>
              Tuesday - Friday: 10am to 8pm
              <br />
              Saturday: 9am to 6pm
              <br />
              Monday &amp; Sunday: CLOSED
            </p>
            <Waves />
          </div>
        </section>

        <div className="wix-map">
          <iframe
            title="Map of Yuzu Hair at Dickens Yard, Ealing"
            src="https://maps.google.com/maps?q=Yuzu%20Hair%20and%20Beauty%2C%205%20Dickens%20Yard%2C%20Ealing&z=14&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>

      <footer className="wix-footer">
        <div className="wix-footer-social">
          <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
        <p>
          Email: <a href={social.email}>{contact.email}</a>
          {' | '}
          Phone: <a href={contact.phoneHref}>{contact.phone}</a>
          {' | '}
          5, Dickens Yard, Longfield Avenue, W5 2TD
        </p>
        <p className="wix-credit">
          © 2024 YUZU Hair and Beauty.{' '}
          <a href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
            Powered and secured by Wix
          </a>
        </p>
      </footer>

      <div className={`wix-chat${chatOpen ? ' open' : ''}`}>
        {chatOpen && (
          <div className="wix-chat-panel" role="dialog" aria-label="Chat">
            <header>
              <strong>YUZU Admin</strong>
              <span>We’ll reply as soon as we can</span>
              <button type="button" aria-label="Close chat" onClick={() => setChatOpen(false)}>
                ×
              </button>
            </header>
            <a href={social.email}>Type your message...</a>
          </div>
        )}
        <button type="button" className="wix-chat-btn" aria-label="Open chat" onClick={() => setChatOpen((open) => !open)}>
          <ChatIcon />
        </button>
      </div>
    </div>
  )
}
