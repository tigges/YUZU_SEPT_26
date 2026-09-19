import { BOOKING_URL, LIVE_SITE_URL, social } from '../data'
import { versionUrl, versions } from '../versions'

export default function Hub() {
  return (
    <div className="hub">
      <header className="hub-top">
        <div className="wrap hub-top-inner">
          <span className="hub-mark">YUZU</span>
          <a className="hub-top-label" href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
            Current site
          </a>
        </div>
      </header>

      <main className="wrap hub-main">
        <div className="hub-intro">
          <p className="eyebrow">Dickens Yard · Ealing</p>
          <h1>Pick a direction for the new site.</h1>
          <p>
            Earthy first, then Sanctuary, Clean, Round, and Studio. Wireframe is a layout sketch —
            drag the page order, or use → / ← to nest a section as a sub-page. Then the Wix
            homepage clone, a Hairlust.com layout clone filled with Dickens Yard facts, the rest
            of the looks, a Links desk, and a clean hairlust.com clone at the end.
            The current site is{' '}
            <a href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
              yuzuhairandbeauty.london
            </a>
            ; this gallery is for choosing a look.
          </p>
        </div>

        <div className="hub-grid">
          {versions.map((item) => (
            <a className="hub-card" key={item.id} href={versionUrl(item.id)}>
              <div className="hub-card-media">
                {'sketch' in item && item.sketch ? (
                  <div className="hub-sketch" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                ) : (
                  <img
                    src={item.preview}
                    alt={item.previewAlt}
                    fetchPriority={item.id === versions[0].id ? 'high' : undefined}
                  />
                )}
              </div>
              <div className="hub-card-body">
                <span className="eyebrow">{item.kicker}</span>
                <h2>{item.name}</h2>
                <p>{item.summary}</p>
                <span className="hub-card-go">Open this version</span>
              </div>
            </a>
          ))}
        </div>

        <aside className="hub-note">
          <h2>From Instagram</h2>
          <p>
            <a href={social.instagram} target="_blank" rel="noreferrer">
              @yuzuhairandbeauty
            </a>{' '}
            is 2,952 followers and 776 posts, with highlights for Offers and Portfolio Hair. The
            grid mixes blossom-toned weekday offers, in-salon colour (blonde layers, copper
            balayage), and personality reels — behind the scenes, neighbours at Dickens Yard, and
            a 10-year community party. The Instagram version is built from that feed, not guessed.
          </p>
          <div className="hub-note-actions">
            <a className="btn btn-ink" href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
              Current site
            </a>
            <a className="btn btn-ink" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book on Phorest
            </a>
          </div>
        </aside>
      </main>
    </div>
  )
}
