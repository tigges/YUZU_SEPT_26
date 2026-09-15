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
  { href: '#prices', label: 'Price list' },
  { href: '#offers', label: 'Offers' },
  { href: '#contact', label: 'Contact' },
]

export default function Editorial() {
  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="ed">
      <VersionBar current="editorial" />
      <header className="ed-nav">
        <div className="ed-wrap ed-nav-inner">
          <a href="#welcome" onClick={goTo('#welcome')}>
            <img className="ed-logo" src={v4Assets.wordmark} alt="Yuzu Hair & Beauty" />
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
        <section className="ed-hero" id="welcome">
          <div className="ed-wrap">
            <div className="ed-hero-grid">
              <article className="ed-panel ed-copy">
                <p className="ed-kicker">Ealing Broadway</p>
                <h1>Welcome to Yuzu Hair</h1>
                <p>
                  Tradition meets trend in the art of hair care. Inspired by Japanese elegance, the
                  salon blends modern styling with timeless grace at Dickens Yard.
                </p>
                <p>A sanctuary for cuts, colour, and unhurried consultations.</p>
                <div className="ed-cta">
                  <a className="ed-btn ed-btn-gold" href={BOOKING_URL} target="_blank" rel="noreferrer">
                    Book online
                  </a>
                  <a className="ed-btn ed-btn-line" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                    Price list
                  </a>
                </div>
              </article>
              <div
                className="ed-hero-image"
                style={{ backgroundImage: `url(${gallery[0].src})` }}
                role="img"
                aria-label={gallery[0].alt}
              />
            </div>
            <article className="ed-panel ed-patch">
              <h2>Mandatory patch testing</h2>
              <p>
                We require patch testing before any colour service for all clients, both new and
                existing.
              </p>
            </article>
          </div>
        </section>

        <section className="ed-three">
          <div className="ed-wrap ed-cards">
            <article className="ed-panel" id="prices">
              <h2>Price list</h2>
              <p>Cuts, colour, highlights, and treatments — senior and stylist menus.</p>
              <a className="ed-btn ed-btn-line" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                Open PDF
              </a>
            </article>
            <article className="ed-panel" id="offers">
              <h2>Exclusive offers</h2>
              <p>
                {offers[0].kicker}: {offers[0].title}. {offers[1].kicker}: {offers[1].title}.
              </p>
              <a className="ed-btn ed-btn-line" href="#offers">
                Colour Tuesdays · Smooth Wednesdays
              </a>
            </article>
            <article className="ed-panel">
              <h2>Join our team</h2>
              <p>Passionate stylists in the heart of Ealing Broadway.</p>
              <a className="ed-btn ed-btn-line" href={JOIN_TEAM_URL}>
                Send your CV
              </a>
            </article>
          </div>
        </section>
      </main>

      <section className="ed-contact" id="contact">
        <div className="ed-wrap ed-contact-grid">
          <div>
            <h2>Contact</h2>
            {contact.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {contact.hours.map((item) => (
              <p key={item.days}>
                {item.days}: {item.time}
              </p>
            ))}
            <p>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </p>
            <div className="ed-social">
              <a href={social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={social.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a href={social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
          <aside className="ed-panel ed-visit">
            <h2>Plan your visit</h2>
            <ul>
              <li>Colour services require patch testing.</li>
              <li>Online booking is the fastest way to secure a slot.</li>
              <li>Walk-ins depend on stylist availability.</li>
            </ul>
            <a className="ed-btn ed-btn-line" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </aside>
        </div>
      </section>

      <a className="ed-btn ed-btn-gold ed-sticky" href={BOOKING_URL} target="_blank" rel="noreferrer">
        Book now
      </a>
    </div>
  )
}
