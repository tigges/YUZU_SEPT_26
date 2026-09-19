import { useEffect, useRef, useState, type FormEvent } from 'react'
import { VersionBar } from '../components/VersionBar'

const HL = 'https://hairlust.com'
const asset = (path: string) => `${import.meta.env.BASE_URL}assets/hlclone/${path}`

const ranges = [
  { title: 'Grow Perfect', src: 'range-grow.jpg', href: `${HL}/collections/grow-perfect` },
  { title: 'Curl Crush', src: 'range-curl.jpg', href: `${HL}/collections/curl-crush` },
  { title: 'Moisture Hero', src: 'range-moisture.jpg', href: `${HL}/collections/moisture-hero` },
  { title: 'Split Fix', src: 'range-split.jpg', href: `${HL}/collections/split-fix` },
  { title: 'Volume Wizard', src: 'range-volume.jpg', href: `${HL}/collections/volume-wizard` },
  { title: 'Scalp delight', src: 'range-scalp.jpg', href: `${HL}/collections/scalp-delight` },
  { title: 'Color Renew', src: 'range-color.jpg', href: `${HL}/collections/color-depositing-masks` },
  { title: 'Hair vitamins', src: 'range-vitamins.jpg', href: `${HL}/collections/supplements` },
  { title: 'Hair Styling', src: 'range-styling.jpg', href: `${HL}/collections/hair-styling` },
  { title: 'Tiny Tangles', src: 'range-tiny.jpg', href: `${HL}/collections/tiny-tangles` },
  { title: 'Enriched Blonde', src: 'range-blonde.jpg', href: `${HL}/collections/enriched-blonde` },
  { title: 'Hairbrushes', src: 'range-brushes.jpg', href: `${HL}/collections/accessories` },
  { title: 'Hair bars', src: 'range-bars.jpg', href: `${HL}/collections/hair-bars` },
  { title: 'Bamboo Bedding', src: 'range-bamboo.jpg', href: `${HL}/collections/bedding` },
]

const popular = [
  { title: 'Hair Formula Gummies for Women', price: '$25.95', src: 'pop-1.jpg', href: `${HL}/products/hair-formula-gummies-for-women` },
  { title: 'Curl Crush™ Defining Cream', price: '$21.95', src: 'pop-2.jpg', href: `${HL}/products/curl-crush-defining-cream` },
  { title: 'Grow Perfect™ Shampoo', price: '$25.95', src: 'pop-3.jpg', href: `${HL}/products/grow-perfect-shampoo` },
  { title: 'Grow Perfect™ Duo', price: '$44.11', compare: '$51.90', src: 'pop-4.jpg', href: `${HL}/products/grow-perfect-duo` },
  { title: 'Curl Crush™ Duo', price: '$44.11', compare: '$51.90', src: 'pop-5.jpg', href: `${HL}/products/curl-crush-duo` },
  { title: 'Hair Formula Gummies For Men', price: '$25.95', src: 'pop-6.jpg', href: `${HL}/products/hair-formula-gummies-for-men` },
  { title: 'Mineral Clay Wax', price: '$21.95', src: 'pop-7.jpg', href: `${HL}/products/mineral-clay-wax` },
  { title: 'Thermal Shield™ Heat Protectant', price: '$25.95', src: 'pop-8.jpg', href: `${HL}/products/thermal-shield-heat-protectant` },
]

const blocks = [
  { title: 'Shampoo + conditioner', src: 'block-shampoo.jpg', href: `${HL}/collections/shampoo-conditioner` },
  { title: 'Hair styling', src: 'block-styling.jpg', href: `${HL}/collections/hair-styling` },
  { title: 'Hair oils', src: 'block-oils.jpg', href: `${HL}/collections/hair-oil` },
  { title: 'Brushes + Accessories', src: 'block-brushes.jpg', href: `${HL}/collections/accessories` },
  { title: 'Hair vitamins', src: 'block-vitamins.jpg', href: `${HL}/collections/supplements` },
  { title: 'Offers', src: 'block-offers.jpg', href: `${HL}/collections/bundles` },
]

const newest = [
  { title: 'Medium Claw Hair Clips, 3-Pack, Tortoise', price: '$10.95', src: 'new-1.jpg', href: `${HL}/products/medium-claw-hair-clips-3-pack-tortoise-1` },
  { title: 'Small Claw Hair Clips, 4-Pack, Tortoise', price: '$10.95', src: 'new-2.jpg', href: `${HL}/products/small-claw-hair-clips-4-pack-tortoise` },
  { title: 'Satin Silk Rose Claw Clip, Large, Champagne', price: '$10.95', src: 'new-3.jpg', href: `${HL}/products/satin-silk-rose-claw-clip-large-champagne` },
  { title: 'Satin Silk Rose Claw Clip, Large, Espresso', price: '$10.95', src: 'new-4.jpg', href: `${HL}/products/satin-silk-rose-claw-clip-large-espresso` },
  { title: 'Satin Silk Rose Claw Clip, Large, Black', price: '$10.95', src: 'new-5.jpg', href: `${HL}/products/satin-silk-rose-claw-clip-large-black` },
]

const press = [
  { src: 'press-1.jpg', brand: 'Vogue', quote: 'The reviews of these organic (miracle) products from Denmark don’t lie.' },
  { src: 'press-2.jpg', brand: 'Elle', quote: 'With Hairlust we are really talking about next level beauty sleep. Bamboo pillowcase has fantastic benefits for skin and hair.' },
  { src: 'press-3.jpg', brand: 'IN', quote: 'Brilliant shampoo for dry, stressed or damaged hair. Strengthens, nourishes and protects the hair so you can tell.' },
  { src: 'press-4.jpg', brand: 'Marie Claire', quote: 'Beauty alert: Pillowcase made of bamboo fights frizzy hair, dry skin and allergies.' },
]

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      {dir === 'left' ? (
        <path d="M14.429 19.857c-.143 0-.286 0-.429-.143L5.143 11c-.572-.571-.572-1.571 0-2.143L13.857.143a.69.69 0 011 0 .69.69 0 010 1L6.286 10 15 18.714a.69.69 0 010 1c-.143.143-.286.143-.571.143z" />
      ) : (
        <path d="M5.571.143c.143 0 .286 0 .429.143L14.857 9c.572.571.572 1.571 0 2.143L6.143 19.857a.69.69 0 01-1 0 .69.69 0 010-1L13.714 10 5 1.286a.69.69 0 010-1C5.143.143 5.286.143 5.571.143z" />
      )}
    </svg>
  )
}

function ArrowSmall() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path d="M3.429 12c-.172 0-.429-.086-.515-.257-.257-.257-.257-.772 0-1.114L7.63 6 2.914 1.286c-.257-.257-.257-.772 0-1.115s.772-.257 1.115 0l4.885 4.972c.515.514.515 1.2.086 1.714L4.029 11.83c-.172.085-.343.171-.6.171z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.5 15.5L20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 8h12l-1 12H7L6 8zm3 0V6.5A3 3 0 0 1 12 3.5 3 3 0 0 1 15 6.5V8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function HlClone() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [sent, setSent] = useState(false)
  const rangeRef = useRef<HTMLDivElement>(null)
  const popularRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollRow = (ref: { current: HTMLDivElement | null }, dir: number) => {
    ref.current?.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="hlc">
      <VersionBar current="hlclone" />
      <header className={`hlc-header${solid ? ' solid' : ''}${menuOpen ? ' open' : ''}`}>
        <div className="hlc-bar">
          <button
            className="hlc-menu-btn"
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hlc-menu-ico" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Menu</span>
          </button>
          <a className="hlc-logo" href={HL} target="_blank" rel="noreferrer">
            <img className="hlc-logo-white" src={asset('logo-white.svg')} alt="Hairlust" />
            <img className="hlc-logo-black" src={asset('logo-black.svg')} alt="" />
          </a>
          <nav className="hlc-nav" aria-label="Primary">
            <a href={HL} target="_blank" rel="noreferrer">
              Home
            </a>
            <a href={`${HL}/collections/all`} target="_blank" rel="noreferrer">
              Shop
            </a>
            <a href={`${HL}/pages/hair-test`} target="_blank" rel="noreferrer">
              Hair Test
            </a>
          </nav>
          <div className="hlc-tools">
            <a className="hlc-tool" href={`${HL}/search`} target="_blank" rel="noreferrer">
              <SearchIcon />
              <span>Search</span>
            </a>
            <a className="hlc-tool" href={`${HL}/account/login`} target="_blank" rel="noreferrer">
              <span className="hlc-account-dot" aria-hidden="true" />
              <span>Account</span>
            </a>
            <a className="hlc-tool" href={`${HL}/cart`} target="_blank" rel="noreferrer">
              <BagIcon />
              <span>Cart</span>
            </a>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="hlc-drawer" role="dialog" aria-label="Menu">
          <div className="hlc-drawer-top">
            <button type="button" onClick={() => setMenuOpen(false)}>
              Close
            </button>
          </div>
          <a href={HL} target="_blank" rel="noreferrer">
            Home
          </a>
          <a href={`${HL}/collections/all`} target="_blank" rel="noreferrer">
            Shop
          </a>
          <a href={`${HL}/pages/hair-test`} target="_blank" rel="noreferrer">
            Hair Test
          </a>
          <a href={`${HL}/pages/about`} target="_blank" rel="noreferrer">
            About
          </a>
        </div>
      ) : null}

      <main>
        <section className="hlc-hero">
          <figure className="hlc-hero-image">
            <img className="hlc-hero-desktop" src={asset('hero.jpg')} alt="" />
            <img className="hlc-hero-mobile" src={asset('hero-mobile.jpg')} alt="" />
          </figure>
          <div className="hlc-shell hlc-hero-inner">
            <h1>
              Renew, Enhance or <span>Transform</span>
            </h1>
            <p>
              Introducing semi-permanent hair color that enhances your shade, nourishes your hair, and gradually
              washes out over 5–20 washes. 97% naturally derived ingredients.
            </p>
            <a className="hlc-cta hlc-cta-light" href={`${HL}/collections/color-depositing-masks`} target="_blank" rel="noreferrer">
              Find Your Shade
            </a>
          </div>
        </section>

        <section className="hlc-range" aria-label="Shop by range">
          <div className="hlc-range-wrap">
            <button className="hlc-arrow hlc-arrow-prev" type="button" aria-label="Previous" onClick={() => scrollRow(rangeRef, -1)}>
              <Arrow dir="left" />
            </button>
            <div className="hlc-range-track" ref={rangeRef}>
              {ranges.map((item) => (
                <a key={item.title} className="hlc-range-card" href={item.href} target="_blank" rel="noreferrer">
                  <figure>
                    <img src={asset(item.src)} alt="" />
                  </figure>
                  <div className="hlc-range-title">
                    <span>{item.title}</span>
                    <ArrowSmall />
                  </div>
                </a>
              ))}
            </div>
            <button className="hlc-arrow hlc-arrow-next" type="button" aria-label="Next" onClick={() => scrollRow(rangeRef, 1)}>
              <Arrow dir="right" />
            </button>
          </div>
        </section>

        <section className="hlc-usp" aria-label="Trust marks">
          <div className="hlc-usp-track">
            {[0, 1].map((copy) => (
              <ul key={copy}>
                <li>Natural + Organic Certified</li>
                <li>Produced in Denmark</li>
                <li>97% naturally derived ingredients</li>
                <li>Clean, conscious hair care</li>
              </ul>
            ))}
          </div>
        </section>

        <section className="hlc-products">
          <div className="hlc-shell hlc-products-inner">
            <div className="hlc-products-info">
              <h2>Popular products</h2>
              <p>A hand-picked selection of our bestselling products that do wonders for your hair</p>
              <a className="hlc-cta hlc-cta-stroke" href={`${HL}/collections/all`} target="_blank" rel="noreferrer">
                Shop all
              </a>
            </div>
            <div className="hlc-products-slider">
              <button className="hlc-arrow hlc-arrow-prev" type="button" aria-label="Previous products" onClick={() => scrollRow(popularRef, -1)}>
                <Arrow dir="left" />
              </button>
              <div className="hlc-cards" ref={popularRef}>
                {popular.map((item) => (
                  <article key={item.title} className="hlc-card">
                    <a className="hlc-card-image" href={item.href} target="_blank" rel="noreferrer">
                      <img src={asset(item.src)} alt={item.title} />
                    </a>
                    <h3>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </h3>
                    <p className="hlc-card-price">
                      {'compare' in item && item.compare ? <s>{item.compare}</s> : null}
                      {item.price}
                    </p>
                  </article>
                ))}
              </div>
              <button className="hlc-arrow hlc-arrow-next" type="button" aria-label="Next products" onClick={() => scrollRow(popularRef, 1)}>
                <Arrow dir="right" />
              </button>
            </div>
          </div>
        </section>

        <section className="hlc-blocks">
          <div className="hlc-shell hlc-blocks-grid">
            {blocks.map((item) => (
              <a key={item.title} className="hlc-block" href={item.href} target="_blank" rel="noreferrer">
                <img src={asset(item.src)} alt="" />
                <h2>{item.title}</h2>
              </a>
            ))}
          </div>
        </section>

        <section className="hlc-quiz">
          <div className="hlc-shell hlc-quiz-inner">
            <div className="hlc-quiz-copy">
              <h2>Take our hair test</h2>
              <p>Overwhelmed by choices? Our quiz makes it easy to find the right hair products for your unique hair type and needs.</p>
              <a className="hlc-cta hlc-cta-light" href={`${HL}/pages/hair-test`} target="_blank" rel="noreferrer">
                Get started
              </a>
            </div>
            <div className="hlc-quiz-media">
              <img src={asset('hair-test.png')} alt="" />
            </div>
          </div>
        </section>

        <section className="hlc-reviews">
          <div className="hlc-shell hlc-reviews-inner">
            <div className="hlc-reviews-intro">
              <p className="hlc-reviews-kicker">Trusted by you</p>
              <h2>Excellent</h2>
              <p>4.1 out of 5 · 10,000+ reviews</p>
              <a href={`${HL}/pages/reviews`} target="_blank" rel="noreferrer">
                Read reviews
              </a>
            </div>
            <div className="hlc-review-cards">
              {press.slice(0, 3).map((item) => (
                <article key={item.brand} className="hlc-review">
                  <img src={asset(item.src)} alt="" />
                  <blockquote>
                    <p>“{item.quote}”</p>
                    <cite>{item.brand}</cite>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hlc-products hlc-new">
          <div className="hlc-shell hlc-products-inner">
            <div className="hlc-products-info">
              <h2>New in</h2>
              <p>Explore the latest additions to the Hairlust universe. Take a look and give a warm welcome to our new products</p>
              <a className="hlc-cta hlc-cta-stroke" href={`${HL}/collections/news`} target="_blank" rel="noreferrer">
                Shop new
              </a>
            </div>
            <div className="hlc-new-grid">
              {newest.map((item) => (
                <article key={item.title} className="hlc-card">
                  <a className="hlc-card-image" href={item.href} target="_blank" rel="noreferrer">
                    <img src={asset(item.src)} alt={item.title} />
                  </a>
                  <h3>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  <p className="hlc-card-price">{item.price}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hlc-press">
          <div className="hlc-shell">
            <h2 className="hlc-press-title">We’ve convinced even the biggest critics</h2>
            <div className="hlc-press-grid">
              {press.map((item) => (
                <figure key={item.brand} className="hlc-press-item">
                  <img src={asset(item.src)} alt="" />
                  <figcaption>
                    <blockquote>“{item.quote}”</blockquote>
                    <cite>{item.brand}</cite>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="hlc-ig">
          <div className="hlc-shell">
            <header className="hlc-ig-head">
              <p>Follow along</p>
              <a href="https://www.instagram.com/hairlust/" target="_blank" rel="noreferrer">
                @hairlust
              </a>
            </header>
            <div className="hlc-ig-grid">
              {Array.from({ length: 8 }, (_, i) => (
                <a key={i} href={`${HL}/blogs/journal`} target="_blank" rel="noreferrer">
                  <img src={asset(`ig-${i + 1}.jpg`)} alt="" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="hlc-letter">
          <div className="hlc-shell">
            <p className="hlc-letter-title">Sign up for our newsletter</p>
            <p>Join +200,000 others: Sign up for our newsletter to get great deals, advice and new inspiration for your hair journey.</p>
            {sent ? (
              <p className="hlc-thanks">Thank you for signing up!</p>
            ) : (
              <form className="hlc-letter-form" onSubmit={onSubmit}>
                <label className="visually-hidden" htmlFor="hlc-email">
                  Email address
                </label>
                <input id="hlc-email" name="email" type="email" required placeholder="Email address" />
                <button className="hlc-cta hlc-cta-dark" type="submit">
                  Sign up
                </button>
              </form>
            )}
            <p className="hlc-letter-note">This gallery clone stays on the page — it does not join the Hairlust list.</p>
          </div>
        </section>
      </main>

      <footer className="hlc-footer">
        <div className="hlc-shell hlc-footer-main">
          <div className="hlc-footer-photo">
            <img src={asset('footer.jpg')} alt="" />
          </div>
          <div className="hlc-footer-cols">
            <div>
              <h2>Shop</h2>
              <a href={`${HL}/collections/all`} target="_blank" rel="noreferrer">
                All products
              </a>
              <a href={`${HL}/collections/news`} target="_blank" rel="noreferrer">
                New in
              </a>
              <a href={`${HL}/collections/bundles`} target="_blank" rel="noreferrer">
                Offers + Bundles
              </a>
              <a href={`${HL}/pages/hair-test`} target="_blank" rel="noreferrer">
                Hair test
              </a>
            </div>
            <div>
              <h2>About</h2>
              <a href={`${HL}/pages/about`} target="_blank" rel="noreferrer">
                Our story
              </a>
              <a href={`${HL}/pages/sustainability`} target="_blank" rel="noreferrer">
                Sustainability
              </a>
              <a href={`${HL}/blogs/journal`} target="_blank" rel="noreferrer">
                Journal
              </a>
            </div>
            <div>
              <h2>Help</h2>
              <a href={`${HL}/pages/contact`} target="_blank" rel="noreferrer">
                Contact
              </a>
              <a href={`${HL}/pages/faq`} target="_blank" rel="noreferrer">
                FAQ
              </a>
              <a href="https://www.instagram.com/hairlust/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="hlc-legal">
          <p>Visual clone of hairlust.com for the Yuzu gallery · Layout, photography, and product copy from Hairlust</p>
        </div>
      </footer>
    </div>
  )
}
