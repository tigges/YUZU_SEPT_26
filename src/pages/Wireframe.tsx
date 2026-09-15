import { useEffect, useRef, useState } from 'react'
import { BOOKING_URL, LIVE_SITE_URL } from '../data'
import { VersionBar } from '../components/VersionBar'
import {
  DEFAULT_WIRE,
  type WireId,
  type WireState,
  loadWire,
  metaFor,
  moveWire,
  nestedSet,
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
    return (
      <div className="wf-sketch wf-banner">Colour services need a patch test (PDF)</div>
    )
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
      <div className="wf-sketch wf-table">
        <i />
        <i />
        <i />
        <em>Opens PDF / services sub-page</em>
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
    return (
      <div className="wf-sketch wf-banner">
        Join the Yuzu team · Send CV
      </div>
    )
  }
  if (id === 'contact') {
    return (
      <div className="wf-sketch wf-contact">
        <span>5 Dickens Yard, W5 2TD</span>
        <span>020 8840 2244</span>
        <span>info@yuzuhairandbeauty.co.uk</span>
      </div>
    )
  }
  if (id === 'map') {
    return <div className="wf-sketch wf-map">Google Maps listing</div>
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
      <span>Terms &amp; conditions</span>
    </div>
  )
}

export default function Wireframe() {
  const [state, setState] = useState<WireState>(DEFAULT_WIRE)
  const [ready, setReady] = useState(false)
  const [dragId, setDragId] = useState<WireId | null>(null)
  const [over, setOver] = useState<{ id: WireId; place: 'before' | 'after' | 'into' } | null>(null)
  const dragIdRef = useRef<WireId | null>(null)

  useEffect(() => {
    setState(loadWire())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    saveWire(state)
  }, [ready, state])

  const nested = nestedSet(state.nest)

  const applyOver = (from: WireId, target: { id: WireId; place: 'before' | 'after' | 'into' }) => {
    setState((current) => moveWire(current, from, target.id, target.place))
  }

  const readTarget = (node: EventTarget | null, clientY: number) => {
    const el = (node as HTMLElement | null)?.closest?.('[data-wf-id], [data-wf-nest]') as HTMLElement | null
    if (!el) return null
    const nestParent = el.getAttribute('data-wf-nest') as WireId | null
    if (nestParent) return { id: nestParent, place: 'into' as const }
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
    if (from && over && (over.id !== from || over.place === 'into')) {
      applyOver(from, over)
    }
    dragIdRef.current = null
    setDragId(null)
    setOver(null)
  }

  const renderBlock = (id: WireId, nestedBlock = false) => {
    const item = metaFor(id)
    const kids = state.nest[id] ?? []
    const isOver = over?.id === id
    return (
      <article
        key={id}
        className={`wf-block${nestedBlock ? ' nested' : ''}${dragId === id ? ' dragging' : ''}${
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
        {item.id === 'services' || item.id === 'contact' ? (
          <div className="wf-nest" data-wf-nest={item.id}>
            {kids.length ? (
              kids.map((kid) => renderBlock(kid, true))
            ) : (
              <p className="wf-nest-hint">
                Drop {item.id === 'services' ? 'Price list' : 'Map'} here to keep it as a sub-page
              </p>
            )}
          </div>
        ) : null}
      </article>
    )
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
          Drag the handles (or use the arrows) to try a page order. Price list starts nested under
          Services as a sub-page / PDF; Map starts under Contact. Hours, patch-test, and footer are
          extra blocks the live site also needs.
        </p>

        <div className="wf-page">{state.order.filter((id) => !nested.has(id)).map((id) => renderBlock(id))}</div>
      </main>
    </div>
  )
}
