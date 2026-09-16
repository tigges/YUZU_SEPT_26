import { useState } from 'react'
import {
  BOOKING_URL,
  GOOGLE_REVIEWS_URL,
  MAPS_DIRECTIONS_URL,
  OFFERS_PAGE_URL,
  PATCH_TEST_PDF_URL,
  PRICE_LIST_URL,
  contact,
  gallery,
  priceGroups,
  reviews,
  social,
  treatments,
} from '../data'
import { VersionBar } from '../components/VersionBar'
import { faqs } from '../seo'

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/clean/${path}`
const page = (path: string) => `${import.meta.env.BASE_URL}${path}`

const nav = [
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: page('prices.html'), label: 'Prices' },
  { href: page('contact.html'), label: 'Contact' },
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

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 3h2.3c.2 1.7 1.2 3.2 2.7 4.1 1 .6 2.1.9 3.2.9v2.4c-1.6 0-3.1-.5-4.4-1.3v6.6c0 3.4-2.7 6.2-6.2 6.3-3.4 0-6.2-2.8-6.2-6.3s2.8-6.2 6.2-6.2c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.2-.9-.2-2 0-3.6 1.6-3.6 3.7s1.6 3.7 3.6 3.7 3.6-1.6 3.6-3.7V3Z"
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
      <a href={social.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
        <TikTokIcon />
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

const looks = [gallery[0], gallery[1], gallery[2], gallery[3], gallery[4], gallery[5]]

export default function Clean({ variant = 'clean' }: { variant?: 'clean' | 'round' }) {
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
    <div className={variant === 'round' ? 'clean clean-round' : 'clean'}>
      <VersionBar current={variant} />
      <header className={`clean-header${menuOpen ? ' open' : ''}`}>
        <div className="clean-inner clean-header-inner">
          <a className="clean-logo" href="#top" onClick={goTo('#top')}>
            <img src={asset('logo.png')} alt="Yuzu Hair & Beauty" />
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
          <img
            src={asset('hero.jpg')}
            alt="Wavy brunette hair, photographed in salon at Yuzu Hair & Beauty, Ealing"
            width={1920}
            height={660}
            fetchPriority="high"
          />
          <div className="clean-hero-copy">
            <h1 id="clean-hero-heading">
              Japanese hair salon London
              <br />
              hairdresser Ealing Broadway
            </h1>
            <p>
              Specialist cuts, colour, and care in Ealing. Clean finishes, thoughtful
              consultation, and results that suit your lifestyle.
            </p>
            <a className="clean-book" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book your appointment
            </a>
          </div>
        </section>

        <section className="clean-about" id="about">
          <div className="clean-inner">
            <h2>About the team</h2>
            <p>
              Yuzu Hair & Beauty is a Japanese-inspired hair salon at 5 Dickens Yard, Longfield
              Avenue, Ealing, London W5 2TD — a short walk from Ealing Broadway station. Stylists
              here work with precision cuts, thoughtful colour, balayage, and formaldehyde-free
              Brazilian blow-dry / Aura smoothing. Consultations are unhurried. Colour guests,
              including existing clients, need a patch test at least 48 hours before the
              appointment.
            </p>
            <p>
              Open Tuesday to Friday 10am–8pm and Saturday 9am–6pm (Monday and Sunday closed). Call{' '}
              <a href={contact.phoneHref}>{contact.phone}</a> or book on Phorest. The current site
              is yuzuhairandbeauty.london; this Clean page is the Sept 2026 rebuild.
            </p>
            <a className="clean-dark" href={page('about.html')}>
              Meet the stylists
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
                  <img src={review.photo} alt={`${review.name}, Google reviewer at Yuzu Hair & Beauty`} />
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
                <img
                  src={asset('portrait.png')}
                  alt="Stylist portrait from Yuzu Hair & Beauty, the hair salon in Ealing"
                />
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
              <a className="clean-dark" href={page('services.html')}>
                View services
              </a>
            </div>
          </div>
        </section>

        <section className="clean-prices" id="prices">
          <div className="clean-inner">
            <h2>Price list</h2>
            <p>
              Senior and stylist menus as HTML, so search and answer engines can quote them. The
              2025 PDF remains a download.
            </p>
            {priceGroups.map((group) => (
              <div className="clean-price-group" key={group.title}>
                <h3>{group.title}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Senior</th>
                      <th>Stylist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.name}>
                        <td>{row.name}</td>
                        <td>{row.senior}</td>
                        <td>{row.stylist}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <h3>Treatments</h3>
            <ul className="clean-treatments">
              {treatments.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="clean-price-links">
              <a className="clean-dark" href={page('prices.html')}>
                Full price list
              </a>
              <a className="clean-dark" href={PRICE_LIST_URL} target="_blank" rel="noreferrer">
                Download PDF
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

        <section className="clean-faq" id="faq">
          <div className="clean-inner">
            <h2>Questions guests ask</h2>
            {faqs.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
            <p>
              <a href={PATCH_TEST_PDF_URL} target="_blank" rel="noreferrer">
                Mandatory patch testing 2025
              </a>
            </p>
          </div>
        </section>

        <section className="clean-visit" id="contact">
          <div className="clean-inner clean-visit-grid">
            <div>
              <h2>Address</h2>
              <p>
                {contact.addressLines[0]}
                <br />
                {contact.addressLines[1]}, {contact.addressLines[2]}
              </p>
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
                <br />
                <a href={social.email}>{contact.email}</a>
              </p>
              <p>
                <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer">
                  Get directions
                </a>
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
          <p>
            © Yuzu Hair &amp; Beauty · {contact.addressLines.join(', ')} · {contact.phone}
          </p>
          <p>
            <a href={page('about.html')}>About</a>
            {' · '}
            <a href={page('services.html')}>Services</a>
            {' · '}
            <a href={page('prices.html')}>Prices</a>
            {' · '}
            <a href={page('contact.html')}>Contact</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
