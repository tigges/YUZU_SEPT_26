import { BOOKING_URL } from '../data'
import { versionUrl, versions } from '../versions'

export default function Hub() {
  return (
    <div className="hub">
      <header className="hub-top">
        <div className="wrap hub-top-inner">
          <span className="hub-mark">YUZU</span>
          <span className="hub-top-label">Design versions</span>
        </div>
      </header>

      <main className="wrap hub-main">
        <div className="hub-intro">
          <p className="eyebrow">Dickens Yard · Ealing</p>
          <h1>Pick a direction for the new site.</h1>
          <p>
            Three complete versions of Yuzu Hair &amp; Beauty. The live salon still books through
            Phorest; this gallery is for choosing a look.
          </p>
        </div>

        <div className="hub-grid">
          {versions.map((item) => (
            <a className="hub-card" key={item.id} href={versionUrl(item.id)}>
              <div className="hub-card-media">
                <img src={item.preview} alt={item.previewAlt} />
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
            <a href="https://www.instagram.com/yuzuhairandbeauty/" target="_blank" rel="noreferrer">
              @yuzuhairandbeauty
            </a>{' '}
            is 2,952 followers and 776 posts, with highlights for Offers and Portfolio Hair. The
            grid mixes blossom-toned weekday offers, in-salon colour (blonde layers, copper
            balayage), and personality reels — behind the scenes, neighbours at Dickens Yard, and
            a 10-year community party. Version 2 is built from that feed, not guessed.
          </p>
          <a className="btn btn-ink" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Book on the live site
          </a>
        </aside>
      </main>
    </div>
  )
}
