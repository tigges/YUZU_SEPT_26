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
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
  { href: '#hours', label: 'Hours' },
]

const trust = [
  { title: 'Skilled stylists', copy: 'Blow-outs, sleek cuts, and colour work shaped to how you live.' },
  { title: 'Central location', copy: '5 Dickens Yard, a short walk from Ealing Broadway station.' },
  { title: 'Friendly booking', copy: 'Phorest online, or call the salon directly.' },
]

export default function Convert() {
  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const featured = [
    { title: 'Welcome', copy: 'Japanese-inspired cuts, colour, and care in a calm room.', src: gallery[0].src },
    { title: 'Offers', copy: `${offers[0].kicker} ${offers[0].title}. ${offers[1].kicker} ${offers[1].title}.`, src: gallery[3].src },
    { title: 'Join our team', copy: 'Senior stylists, stylists, and models at Dickens Yard.', src: gallery[4].src, href: JOIN_TEAM_URL },
  ]

  return (
    <div className="cvt">
      <VersionBar current="convert" />
      <div className="cvt-banner">
        <div className="cvt-shell cvt-banner-inner">
          <p>Mandatory patch testing required for all colour services.</p>
          <a href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
            Price list
          </a>
        </div>
      </div>

      <header className="cvt-header">
        <div className="cvt-shell cvt-header-inner">
          <a href="#top" onClick={goTo('#top')}>
            <img className="cvt-logo" src={v4Assets.wordmark} alt="Yuzu Hair & Beauty" />
          </a>
          <nav className="cvt-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
            <a className="cvt-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book online
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="cvt-hero">
          <div className="cvt-shell cvt-hero-grid">
            <article className="cvt-copy">
              <span className="cvt-eyebrow">Ealing Broadway</span>
              <h1>Cut, colour, and care with precision</h1>
              <p>
                Tradition meets trend. Modern styling and Japanese-inspired elegance in a calm,
                polished studio at Dickens Yard.
              </p>
              <div className="cvt-actions">
                <a className="cvt-btn cvt-btn-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book online
                </a>
                <a className="cvt-btn" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                  See price list
                </a>
              </div>
            </article>
            <div className="cvt-hero-image">
              <img src={gallery[5].src} alt={gallery[5].alt} />
            </div>
          </div>
        </section>

        <section className="cvt-trust">
          <div className="cvt-shell cvt-trust-grid">
            {trust.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cvt-services" id="services">
          <div className="cvt-shell">
            <div className="cvt-services-head">
              <div>
                <h2>Featured sections</h2>
                <p>Quick paths for clients and first-time visitors.</p>
              </div>
              <a className="cvt-btn" href="#offers">
                Current offers
              </a>
            </div>
            <div className="cvt-services-grid" id="offers">
              {featured.map((item) => (
                <article key={item.title}>
                  <img src={item.src} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    {item.href ? <a href={item.href}>View openings</a> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cvt-info" id="contact">
          <div className="cvt-shell cvt-info-grid">
            <article id="hours">
              <h2>Opening hours</h2>
              <ul>
                {contact.hours.map((item) => (
                  <li key={item.days}>
                    {item.days}: {item.time}
                  </li>
                ))}
              </ul>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Get directions
              </a>
            </article>
            <article>
              <h2>Stay connected</h2>
              <p>
                Follow <strong>@yuzuhairandbeauty</strong> and book directly online.
              </p>
              <div className="cvt-links">
                <a href={social.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href={social.tiktok} target="_blank" rel="noreferrer">
                  TikTok
                </a>
                <a href={social.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href={social.email}>Email</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="cvt-foot">
        <div className="cvt-shell cvt-foot-inner">
          <p>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty · W5 2TD</p>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </div>
      </footer>
    </div>
  )
}
