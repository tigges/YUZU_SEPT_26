import { Fragment, useEffect, useRef, useState } from 'react'
import { BOOKING_URL, LIVE_SITE_URL } from '../data'
import { VersionBar } from '../components/VersionBar'
import {
  DEFAULT_WIRE,
  type WireDest,
  type WireId,
  type WireState,
  canPushSubpage,
  childrenOf,
  destsFor,
  loadWire,
  metaFor,
  moveWire,
  nudgeWire,
  popSubpage,
  pushSubpage,
  saveWire,
  splitWire,
} from '../wireframe'

function Sketch({ id }: { id: WireId }) {
  if (id === 'header') {
    return (
      <div className="wf-sketch wf-header">
        <span className="wf-logo">YUZU</span>
        <span className="wf-nav">Welcome</span>
        <span className="wf-nav">Gallery</span>
        <span className="wf-nav">Visit</span>
        <span className="wf-pill">Book</span>
      </div>
    )
  }
  if (id === 'ticker') {
    return (
      <div className="wf-sketch wf-ticker">
        <span className="wf-ticker-label">Today</span>
        <span className="wf-ticker-track">
          <span>Colour Tuesdays 50%</span>
          <span className="wf-ticker-dot">·</span>
          <span>Patch tests for colour</span>
          <span className="wf-ticker-dot">·</span>
          <span>Sat 9–6</span>
          <span className="wf-ticker-dot">·</span>
          <span>Book →</span>
        </span>
      </div>
    )
  }
  if (id === 'hero') {
    return (
      <div className="wf-sketch wf-hero">
        <div className="wf-bars">
          <i className="wide" />
          <i />
          <i className="short" />
        </div>
        <span className="wf-pill">Book consultation</span>
      </div>
    )
  }
  if (id === 'welcome') {
    return (
      <div className="wf-sketch wf-welcome">
        <div className="wf-bars">
          <i className="wide" />
          <i />
          <i />
          <i className="short" />
        </div>
        <span className="wf-portrait" aria-hidden="true" />
      </div>
    )
  }
  if (id === 'trust') {
    return (
      <div className="wf-sketch wf-trust">
        <span>★★★★★ 4.5 Google</span>
        <span>New clients welcome</span>
        <span>Unhurried consultations</span>
      </div>
    )
  }
  if (id === 'hours') {
    return (
      <div className="wf-sketch wf-hours">
        {['Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo'].map((day) => (
          <span key={day}>
            {day}
            <small>{day === 'Sa' ? '9–6' : day === 'Su' || day === 'Mo' ? '—' : '10–8'}</small>
          </span>
        ))}
      </div>
    )
  }
  if (id === 'patch') {
    return <div className="wf-sketch wf-banner">Colour services need a patch test →</div>
  }
  if (id === 'gallery') {
    return (
      <div className="wf-sketch wf-thumbs">
        {Array.from({ length: 6 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    )
  }
  if (id === 'reviews') {
    return (
      <div className="wf-sketch wf-cards">
        <span>★★★★★ Google</span>
        <span>“Amazing — every detail”</span>
        <span>“A million dollars”</span>
      </div>
    )
  }
  if (id === 'services') {
    return (
      <div className="wf-sketch wf-cards">
        <span>Cut &amp; styling</span>
        <span>Colour</span>
        <span>Highlights</span>
        <span>Treatments</span>
      </div>
    )
  }
  if (id === 'prices') {
    return (
      <div className="wf-sketch wf-prices">
        <span>
          Cut &amp; blow dry <em>£55</em>
        </span>
        <span>
          Colour <em>£85</em>
        </span>
        <span>
          Highlights <em>from £64</em>
        </span>
        <span className="wf-pill">Full price list</span>
      </div>
    )
  }
  if (id === 'shop') {
    return (
      <div className="wf-sketch wf-shelf">
        <div className="wf-bottles" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="wf-shelf-copy">
          <strong>Take it home</strong>
          <span>Nashi, K2.0, and colour-care at the desk. Ask when you visit — no cart on the site.</span>
        </div>
      </div>
    )
  }
  if (id === 'offers') {
    return (
      <div className="wf-sketch wf-cards">
        <span>Colour Tuesdays 50%</span>
        <span>Smooth Wednesdays 25%</span>
        <span>Thursday colour 50%</span>
      </div>
    )
  }
  if (id === 'careers') {
    return <div className="wf-sketch wf-banner">Join the Yuzu team · Send CV →</div>
  }
  if (id === 'follow') {
    return (
      <div className="wf-sketch wf-follow">
        <strong>Follow us</strong>
        <span>@yuzuhairandbeauty</span>
      </div>
    )
  }
  if (id === 'contact') {
    return (
      <div className="wf-sketch wf-contact">
        <span>5 Dickens Yard, W5 2TD</span>
        <span>020 8840 2244</span>
        <span>Book / directions →</span>
      </div>
    )
  }
  if (id === 'form') {
    return (
      <div className="wf-sketch wf-form">
        <span>Name</span>
        <span>Email</span>
        <span className="wide">Message</span>
        <span className="wf-pill">Submit</span>
      </div>
    )
  }
  if (id === 'map') {
    return (
      <div className="wf-sketch wf-map">
        <span className="wf-pin" aria-hidden="true" />
        <span>5 Dickens Yard, W5 2TD</span>
      </div>
    )
  }
  if (id === 'social') {
    return (
      <div className="wf-sketch wf-social">
        <span>Site</span>
        <span>Instagram</span>
        <span>TikTok</span>
        <span>Facebook</span>
      </div>
    )
  }
  if (id === 'stylists') {
    return (
      <div className="wf-sketch wf-cards">
        <span>Jasmine</span>
        <span>Senior</span>
        <span>Stylist</span>
      </div>
    )
  }
  if (id === 'vouchers') {
    return <div className="wf-sketch wf-banner">Gift a visit · Book as a gift →</div>
  }
  if (id === 'faq') {
    return (
      <div className="wf-sketch wf-cards">
        <span>Patch test?</span>
        <span>Parking / Dickens Yard</span>
        <span>First colour visit</span>
      </div>
    )
  }
  return (
    <div className="wf-sketch wf-footer">
      <span>© Yuzu Hair &amp; Beauty</span>
      <span>Terms →</span>
    </div>
  )
}

function Connector({ count }: { count: number }) {
  const start = 20
  const first = 48
  const step = 78
  const height = Math.max(64, first + (count - 1) * step + 18)
  const branches = Array.from({ length: count }, (_, index) => {
    const y = first + index * step
    const from = index === 0 ? start : first + (index - 1) * step
    return `M 22 ${from} V ${y} H 46`
  }).join(' ')
  return (
    <svg className="wf-connector" viewBox={`0 0 48 ${height}`} preserveAspectRatio="xMinYMin meet" aria-hidden="true">
      <path d={`M 2 ${start} H 22 ${branches}`} />
    </svg>
  )
}

function Satellite({ item }: { item: WireDest }) {
  return (
    <a className={`wf-sat wf-sat-${item.kind}`} href={item.href} target="_blank" rel="noreferrer">
      <span className="wf-sat-kind">{item.kind === 'offsite' ? 'Off-site' : 'Sub-page'}</span>
      <strong>{item.title}</strong>
      <span>{item.detail}</span>
    </a>
  )
}

function SectionSatellite({
  id,
  onRestore,
}: {
  id: WireId
  onRestore: (id: WireId) => void
}) {
  const item = metaFor(id)
  return (
    <div className="wf-sat wf-sat-section">
      <div className="wf-sat-row">
        <span className="wf-sat-kind sub">Sub-page</span>
        <button type="button" className="wf-sat-back" aria-label={`Move ${item.title} back to the main page`} onClick={() => onRestore(id)}>
          ←
        </button>
      </div>
      <strong>{item.title}</strong>
      <span>{item.hint}</span>
    </div>
  )
}

export default function Wireframe() {
  const [state, setState] = useState<WireState>(DEFAULT_WIRE)
  const [ready, setReady] = useState(false)
  const [dragId, setDragId] = useState<WireId | null>(null)
  const [over, setOver] = useState<{ id: WireId; place: 'before' | 'after' } | null>(null)
  const dragIdRef = useRef<WireId | null>(null)

  useEffect(() => {
    setState(loadWire())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    saveWire(state)
  }, [ready, state])

  const readTarget = (node: EventTarget | null, clientY: number) => {
    const host = node as HTMLElement | null
    const el = host?.closest?.('[data-wf-id]') as HTMLElement | null
    if (el) {
      const id = el.getAttribute('data-wf-id') as WireId | null
      if (id) {
        const rect = el.getBoundingClientRect()
        return { id, place: clientY > rect.top + rect.height / 2 ? ('after' as const) : ('before' as const) }
      }
    }
    if (host?.closest?.('[data-wf-archive]')) return { id: 'footer' as const, place: 'after' as const }
    return null
  }

  const onPointerDown = (id: WireId) => (event: React.PointerEvent) => {
    if (event.button !== 0) return
    event.preventDefault()
    dragIdRef.current = id
    setDragId(id)
    ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragIdRef.current) return
    const under = document.elementFromPoint(event.clientX, event.clientY)
    setOver(readTarget(under, event.clientY))
  }

  const onPointerUp = () => {
    const from = dragIdRef.current
    if (from && over && over.id !== from) {
      setState((current) => moveWire(current, from, over.id, over.place))
    }
    dragIdRef.current = null
    setDragId(null)
    setOver(null)
  }

  const renderRow = (id: WireId, archived: boolean) => {
    const item = metaFor(id)
    const dests = destsFor(id)
    const children = childrenOf(state, id)
    const childDests = children.flatMap((child) => destsFor(child))
    const satCount = dests.length + children.length + childDests.length
    const isOver = over?.id === id
    const showPush = canPushSubpage(state, id)
    return (
      <div className={`wf-row${archived ? ' archived' : ''}`} key={id}>
        <article
          className={`wf-block${satCount ? ' has-links' : ''}${dragId === id ? ' dragging' : ''}${
            isOver ? ` over-${over.place}` : ''
          }${archived ? ' archived' : ''}`}
          data-wf-id={id}
        >
          <header className="wf-block-head">
            <button
              type="button"
              className="wf-handle"
              aria-label={`Drag ${item.title}`}
              onPointerDown={onPointerDown(id)}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              ⋮⋮
            </button>
            <div>
              {archived ? <p className="wf-archived-flag">Archived</p> : null}
              <h2>{item.title}</h2>
              <p>{item.hint}</p>
            </div>
            <div className="wf-nudge">
              <button type="button" aria-label={`Move ${item.title} up`} onClick={() => setState((s) => nudgeWire(s, id, -1))}>
                ↑
              </button>
              {showPush ? (
                <button
                  type="button"
                  aria-label={`Move ${item.title} to the sub-page column`}
                  onClick={() => setState((s) => pushSubpage(s, id))}
                >
                  →
                </button>
              ) : (
                <span className="wf-nudge-gap" />
              )}
              <button type="button" aria-label={`Move ${item.title} down`} onClick={() => setState((s) => nudgeWire(s, id, 1))}>
                ↓
              </button>
            </div>
          </header>
          <Sketch id={id} />
        </article>
        {satCount ? (
          <>
            <Connector count={satCount} />
            <aside className="wf-satellites">
              {children.map((child) => (
                <Fragment key={child}>
                  <SectionSatellite id={child} onRestore={(next) => setState((s) => popSubpage(s, next))} />
                  {destsFor(child).map((dest) => (
                    <Satellite key={dest.id} item={dest} />
                  ))}
                </Fragment>
              ))}
              {dests.map((dest) => (
                <Satellite key={dest.id} item={dest} />
              ))}
            </aside>
          </>
        ) : (
          <>
            <div className="wf-connector-spacer" />
            <div className="wf-satellites-empty" />
          </>
        )}
      </div>
    )
  }

  const { live, archived } = splitWire(state.order)

  return (
    <div className={`wf${dragId ? ' is-dragging' : ''}`}>
      <VersionBar current="wireframe" />
      <header className="wf-top">
        <div className="wf-wrap wf-top-inner">
          <div>
            <p className="wf-kicker">Layout · drag to reorder</p>
            <h1>Site wireframe</h1>
          </div>
          <div className="wf-top-actions">
            <button type="button" className="wf-reset" onClick={() => setState(DEFAULT_WIRE)}>
            Reset layout
            </button>
            <a className="wf-link" href={LIVE_SITE_URL} target="_blank" rel="noreferrer">
              Current site
            </a>
            <a className="wf-link solid" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book
            </a>
          </div>
        </div>
      </header>

      <main className="wf-wrap">
        <p className="wf-lead">
          Left column is the homepage. Almost every block can become a sub-page: → sends it into
          the column of the block above (one click away, not in the scroll). ← on that chip brings
          it back. Header, ticker, and footer stay as chrome. Off-site chips (Phorest, Maps,
          socials) stay as links — they are not pages. Drag below the footer to archive.
        </p>
        <p className="wf-legend">
          <span className="wf-sat-kind">Off-site</span> leaves the site ·{' '}
          <span className="wf-sat-kind sub">Sub-page</span> stays on Yuzu · → / ← move sections · grey
          = archived
        </p>
        <p className="wf-note">
          Welcome, trust, prices, follow, form, and map are new blocks taken from the other
          versions. Nest or archive anything you do not want on the homepage. A short page might
          keep ticker, hero, gallery, services, and visit — with hours, prices, offers, and the
          form as sub-pages.
        </p>

        <div className="wf-board">
          <div className="wf-board-head" aria-hidden="true">
            <span>On the page</span>
            <span />
            <span>Sub-pages / links out</span>
          </div>
          {live.map((id) => renderRow(id, false))}
          <div
            className={`wf-archive-well${over?.id === 'footer' && over.place === 'after' && dragId !== 'footer' ? ' over' : ''}`}
            data-wf-archive
          >
            <p className="wf-archive-label">Archived — below the live page</p>
            <p className="wf-archive-hint">
              Drag anything here to keep the drawing but take it off the homepage. Drag it back
              above the footer to restore it.
            </p>
            {archived.map((id) => renderRow(id, true))}
          </div>
        </div>
      </main>
    </div>
  )
}
