import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  PRICE_LIST_URL,
  archiveLooks,
  contact,
  gallery,
  instagram,
  reviews,
  social,
  v4Assets,
} from '../data'
import { VersionBar } from '../components/VersionBar'

const nav = [
  { href: '#gallery', label: 'Results' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#social', label: 'Social' },
  { href: '#contact', label: 'Contact' },
]

const results = [...instagram.featured.map((item) => ({ src: item.src, alt: item.alt })), ...archiveLooks.slice(0, 4)]

export default function Simple() {
  const goTo = (href: string) => (event: { preventDefault: () => void }) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="smp">
      <VersionBar current="simple" />
      <header className="smp-header">
        <div className="smp-wrap smp-nav">
          <a href="#top" onClick={goTo('#top')}>
            <img className="smp-logo" src={v4Assets.wordmark} alt="Yuzu Hair & Beauty" />
          </a>
          <nav aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={goTo(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="smp-btn" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book online
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="smp-hero"
          style={{ ['--smp-hero' as string]: `url(${gallery[1].src})` }}
        >
          <div className="smp-wrap smp-hero-copy">
            <p className="smp-kicker">Yuzu Hair &amp; Beauty · Ealing Broadway</p>
            <h1>Tradition meets trend, with precision in every style.</h1>
            <p>
              Inspired by Japanese elegance and modern artistry. Confident hair in a calm salon at
              Dickens Yard.
            </p>
            <div className="smp-cta">
              <a className="smp-btn" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book appointment
              </a>
              <a className="smp-ghost" href="#gallery" onClick={goTo('#gallery')}>
                View results
              </a>
            </div>
          </div>
        </section>

        <section className="smp-strip" id="social">
          <div className="smp-wrap smp-strip-inner">
            <p>Follow Yuzu for fresh cuts, colour results, and offers.</p>
            <div className="smp-strip-links">
              <a href={social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={social.tiktok} target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                Price list
              </a>
            </div>
          </div>
        </section>

        <section className="smp-section" id="gallery">
          <div className="smp-wrap">
            <p className="smp-kicker">Instagram results</p>
            <h2>Recent Yuzu transformations</h2>
            <p>Downloaded from @yuzuhairandbeauty, including stills from earlier clone archives.</p>
            <ul className="smp-grid">
              {results.map((item) => (
                <li key={item.src}>
                  <img src={item.src} alt={item.alt} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="smp-section smp-muted" id="reviews">
          <div className="smp-wrap">
            <p className="smp-kicker">Google reviews</p>
            <h2>What clients are saying</h2>
            <p className="smp-stars">★★★★★ 4.5 on Google</p>
            <div className="smp-reviews">
              {reviews.map((review) => (
                <article key={review.name}>
                  <p>“{review.quote}”</p>
                  <p>{review.body}</p>
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                    {review.name} · Google
                  </a>
                </article>
              ))}
            </div>
            <p>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                See all Google reviews
              </a>
            </p>
          </div>
        </section>

        <section className="smp-strip" id="contact">
          <div className="smp-wrap smp-contact">
            <article>
              <h3>Call</h3>
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
            </article>
            <article>
              <h3>Email</h3>
              <p>
                <a href={social.email}>{contact.email}</a>
              </p>
            </article>
            <article>
              <h3>Visit</h3>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                Directions
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="smp-foot">
        <div className="smp-wrap">
          <span>© {new Date().getFullYear()} Yuzu Hair &amp; Beauty · Dickens Yard</span>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book
          </a>
        </div>
      </footer>
    </div>
  )
}
