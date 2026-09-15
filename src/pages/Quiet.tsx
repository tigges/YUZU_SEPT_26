import {
  BOOKING_URL,
  JOIN_TEAM_URL,
  MAPS_DIRECTIONS_URL,
  PRICE_LIST_URL,
  contact,
  gallery,
  offers,
  social,
  v4Assets,
} from '../data'
import { VersionBar } from '../components/VersionBar'

const nav = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Quiet() {
  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="qt">
      <VersionBar current="quiet" />
      <header className="qt-top">
        <div className="qt-wrap qt-top-inner">
          <a href="#welcome" onClick={goTo('#welcome')}>
            <img className="qt-logo" src={v4Assets.wordmark} alt="Yuzu Hair & Beauty" />
          </a>
          <nav aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="qt-hero">
          <div className="qt-wrap qt-hero-grid">
            <img src={gallery[2].src} alt={gallery[2].alt} />
            <article className="qt-copy">
              <h1>Quiet luxury for modern hair care.</h1>
              <p>
                A calm reading of Yuzu: Japanese-inspired precision at Dickens Yard, with every
                key action still in view.
              </p>
              <div className="qt-cta">
                <a className="qt-btn qt-btn-main" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book online
                </a>
                <a className="qt-btn qt-btn-ghost" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                  Price list
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="qt-section" id="welcome">
          <div className="qt-wrap qt-split">
            <article className="qt-panel">
              <h2>Welcome</h2>
              <p>
                Tradition meets trend. Stylists blend modern technique with timeless precision a
                short walk from Ealing Broadway station.
              </p>
            </article>
            <article className="qt-panel qt-notice">
              <h2>Mandatory patch testing</h2>
              <p>Required before every colour service, for new and existing clients.</p>
            </article>
          </div>
        </section>

        <section className="qt-section" id="services">
          <div className="qt-wrap qt-cards">
            <article className="qt-panel">
              <h2>Offers</h2>
              <p>
                {offers.map((item) => `${item.kicker} ${item.title}`).join(' · ')}.
              </p>
            </article>
            <article className="qt-panel">
              <h2>Join our team</h2>
              <p>We are always interested in talented stylists and assistants.</p>
              <a className="qt-btn qt-btn-ghost" href={JOIN_TEAM_URL}>
                Careers
              </a>
            </article>
            <article className="qt-panel">
              <h2>Hours</h2>
              <ul>
                {contact.hours.map((item) => (
                  <li key={item.days}>
                    {item.days}: {item.time}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="qt-section" id="contact">
          <div className="qt-wrap qt-contact">
            <article className="qt-panel">
              <h2>Visit</h2>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a href={social.instagram} target="_blank" rel="noreferrer">
                  {social.instagram.replace('https://www.instagram.com/', '@').replace(/\/$/, '')}
                </a>
              </p>
              <a className="qt-btn qt-btn-ghost" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </article>
            <article className="qt-panel">
              <h2>Contact</h2>
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p>
                <a href={social.email}>{contact.email}</a>
              </p>
              <p>
                <a href={social.tiktok} target="_blank" rel="noreferrer">
                  TikTok
                </a>
              </p>
              <a className="qt-btn qt-btn-main" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book on Phorest
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="qt-foot">
        <div className="qt-wrap qt-foot-inner">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty</span>
          <span>Dickens Yard, W5 2TD</span>
        </div>
      </footer>
    </div>
  )
}
