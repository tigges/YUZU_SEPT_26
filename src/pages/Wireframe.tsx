import { useEffect, useRef, useState } from 'react'
import { BOOKING_URL, LIVE_SITE_URL } from '../data'
import { VersionBar } from '../components/VersionBar'
import {
  DEFAULT_WIRE,
  type WireDest,
  type WireId,
  type WireState,
  destsFor,
  loadWire,
  metaFor,
  moveWire,
  nudgeWire,
  saveWire,
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
        <span>Price list →</span>
      </div>
    )
  }
  if (id === 'offers') {
    return (
      <div className="wf-sketch wf-cards">
        <span>Colour Tuesdays 50%</span>
        <span>Smooth Wednesdays 25%</span>
        <span>See all offers →</span>
      </div>
    )
  }
  if (id === 'careers') {
    return <div className="wf-sketch wf-banner">Join the Yuzu team · Send CV →</div>
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
  return (
    <div className="wf-sketch wf-footer">
      <span>© Yuzu Hair &amp; Beauty</span>
      <span>Terms →</span>
    </div>
  )
}

function Connector({ count }: { count: number }) {
  const start = 20
  const first = 42
  const step = 64
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
    const el = (node as HTMLElement | null)?.closest?.('[data-wf-id]') as HTMLElement | null
    if (!el) return null
    const id = el.getAttribute('data-wf-id') as WireId | null
    if (!id) return null
    const rect = el.getBoundingClientRect()
    return { id, place: clientY > rect.top + rect.height / 2 ? ('after' as const) : ('before' as const) }
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
              Reset order
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
          Left column is the page. The smaller column to the right is everything a block links
          <em> out</em> to — off-site (Phorest, Maps, socials) and on-site sub-pages (price list,
          patch-test PDF, T&amp;Cs, offers). Dotted lines follow the source, so they move when you
          reorder.
        </p>
        <p className="wf-legend">
          <span className="wf-sat-kind">Off-site</span> leaves the site ·{' '}
          <span className="wf-sat-kind sub">Sub-page</span> stays on Yuzu
        </p>

        <div className="wf-board">
          <div className="wf-board-head" aria-hidden="true">
            <span>On the page</span>
            <span />
            <span>Links out</span>
          </div>
          {state.order.map((id) => {
            const item = metaFor(id)
            const dests = destsFor(id)
            const isOver = over?.id === id
            return (
              <div className="wf-row" key={id}>
                <article
                  className={`wf-block${dests.length ? ' has-links' : ''}${dragId === id ? ' dragging' : ''}${
                    isOver ? ` over-${over.place}` : ''
                  }`}
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
                      <h2>{item.title}</h2>
                      <p>{item.hint}</p>
                    </div>
                    <div className="wf-nudge">
                      <button type="button" aria-label={`Move ${item.title} up`} onClick={() => setState((s) => nudgeWire(s, id, -1))}>
                        ↑
                      </button>
                      <button type="button" aria-label={`Move ${item.title} down`} onClick={() => setState((s) => nudgeWire(s, id, 1))}>
                        ↓
                      </button>
                    </div>
                  </header>
                  <Sketch id={id} />
                </article>
                {dests.length ? (
                  <>
                    <Connector count={dests.length} />
                    <aside className="wf-satellites">
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
          })}
        </div>
      </main>
    </div>
  )
}
