import {
  BOOKING_URL,
  JOIN_TEAM_URL,
  MAPS_DIRECTIONS_URL,
  PRICE_LIST_URL,
  contact,
  gallery,
  offers,
  social,
} from '../data'
import { VersionBar } from '../components/VersionBar'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#offers', label: 'Offers' },
  { href: '#visit', label: 'Visit' },
]

export default function Midnight() {
  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="mid">
      <VersionBar current="midnight" />
      <header className="mid-top">
        <div className="mid-wrap mid-top-inner">
          <a className="mid-mark" href="#top" onClick={goTo('#top')}>
            YUZU
          </a>
          <nav aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book
            </a>
          </nav>
        </div>
      </header>

      <section
        className="mid-hero"
        id="top"
        style={{ ['--mid-hero' as string]: `url(${gallery[1].src})` }}
      >
        <div className="mid-wrap mid-hero-inner">
          <span className="mid-chip">Evening &amp; weekend specialists</span>
          <h1>Dark luxury. Precise styling. Yuzu, reimagined.</h1>
          <p>
            High contrast for first-time visitors: Japanese-inspired cuts and colour at Dickens
            Yard, with booking one click away.
          </p>
          <div className="mid-cta">
            <a className="mid-btn mid-btn-gold" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book online now
            </a>
            <a className="mid-btn mid-btn-ghost" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
              View price list
            </a>
          </div>
        </div>
      </section>

      <main className="mid-wrap mid-grid">
        <article className="mid-panel" id="about">
          <h2>About Yuzu Hair</h2>
          <p>
            Tradition meets trend in Ealing Broadway. Contemporary execution with timeless style,
            and unhurried consultations before every colour.
          </p>
          <p>Mandatory patch testing applies before all colour services.</p>
        </article>

        <aside className="mid-panel" id="visit">
          <h2>Visit &amp; hours</h2>
          <ul>
            {contact.hours.map((item) => (
              <li key={item.days}>
                {item.days}: {item.time}
              </li>
            ))}
            {contact.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
          </ul>
          <a className="mid-btn mid-btn-ghost" href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
            Get directions
          </a>
        </aside>

        <section className="mid-panel" id="offers">
          <h2>Offers &amp; team</h2>
          <div className="mid-offers">
            {offers.map((item) => (
              <div className="mid-offer" key={item.id}>
                <h3>
                  {item.kicker} · {item.title}
                </h3>
                <p>{item.detail}</p>
              </div>
            ))}
            <div className="mid-offer">
              <h3>Join our team</h3>
              <p>Senior stylists, stylists, and models — send a CV to the salon.</p>
              <a className="mid-btn mid-btn-ghost" href={JOIN_TEAM_URL}>
                See roles
              </a>
            </div>
          </div>
        </section>

        <section className="mid-panel" id="pricing">
          <h2>Price list &amp; social</h2>
          <p>Download the current service menu and follow daily transformations.</p>
          <div className="mid-cta">
            <a className="mid-btn mid-btn-gold" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
              Download prices
            </a>
            <a className="mid-btn mid-btn-ghost" href={social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="mid-btn mid-btn-ghost" href={social.tiktok} target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </section>
      </main>

      <footer className="mid-foot">
        <div className="mid-wrap mid-foot-inner">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty</span>
          <span>Midnight Edition · Dickens Yard, W5 2TD</span>
        </div>
      </footer>
    </div>
  )
}
