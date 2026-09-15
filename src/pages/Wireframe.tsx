import { Fragment, useEffect, useRef, useState } from 'react'
import { BOOKING_URL, LIVE_SITE_URL } from '../data'
import { VersionBar } from '../components/VersionBar'
import {
  DEFAULT_WIRE,
  LINK_CATALOG,
  type LinkId,
  type LinkPlacement,
  type WireId,
  type WireState,
  canPushSubpage,
  childrenOf,
  linkMetaFor,
  linksOn,
  loadWire,
  metaFor,
  moveLink,
  moveWire,
  nudgeWire,
  placeLink,
  placementCount,
  popSubpage,
  pushSubpage,
  saveWire,
  splitWire,
  unpinLink,
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
  if (id === 'carousel') {
    return (
      <div className="wf-sketch wf-carousel">
        <div className="wf-carousel-slides">
          <span className="on">
            Hero + Book
            <small>Pic and CTA</small>
          </span>
          <span>
            Offers
            <small>Colour Tuesdays</small>
          </span>
          <span>
            Patch test
            <small>Before colour</small>
          </span>
          <span>
            New customer cut
            <small>First visit</small>
          </span>
        </div>
        <div className="wf-carousel-dots" aria-hidden="true">
          <i className="on" />
          <i />
          <i />
          <i />
        </div>
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
        <span>info@yuzuhairandbeauty.co.uk</span>
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
  if (id === 'chat') {
    return (
      <div className="wf-sketch wf-chat">
        <span>Questions? Message the salon</span>
        <span className="wf-chat-bubble">WhatsApp</span>
      </div>
    )
  }
  if (id === 'social') {
    return (
      <div className="wf-sketch wf-social">
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


type Drag =
  | { kind: 'section'; id: WireId }
  | { kind: 'link'; link: LinkId }
  | { kind: 'placement'; id: string }

type Over =
  | { kind: 'reorder'; id: WireId; place: 'before' | 'after' }
  | { kind: 'host'; id: WireId }

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

function LinkChip({
  placement,
  onUnpin,
  onDragStart,
  onDragMove,
  onDragEnd,
}: {
  placement: LinkPlacement
  onUnpin: (id: string) => void
  onDragStart: (event: React.PointerEvent, id: string) => void
  onDragMove: (event: React.PointerEvent) => void
  onDragEnd: () => void
}) {
  const item = linkMetaFor(placement.link)
  return (
    <div className={`wf-sat wf-sat-${item.kind}`}>
      <div className="wf-sat-row">
        <span className={`wf-sat-kind${item.kind === 'subpage' ? ' sub' : ''}`}>
          {item.kind === 'offsite' ? 'Off-site' : 'Existing page'}
        </span>
        <div className="wf-sat-tools">
          <button
            type="button"
            className="wf-handle"
            aria-label={`Move ${item.title}`}
            onPointerDown={(event) => onDragStart(event, placement.id)}
            onPointerMove={onDragMove}
            onPointerUp={onDragEnd}
            onPointerCancel={onDragEnd}
          >
            ⋮⋮
          </button>
          <button type="button" className="wf-sat-back" aria-label={`Remove ${item.title}`} onClick={() => onUnpin(placement.id)}>
            ×
          </button>
        </div>
      </div>
      <strong>{item.title}</strong>
      <span>{item.detail}</span>
      <a className="wf-sat-open" href={item.href} target="_blank" rel="noreferrer">
        Open
      </a>
    </div>
  )
}

function SectionSatellite({
  id,
  onRestore,
  dropOver,
}: {
  id: WireId
  onRestore: (id: WireId) => void
  dropOver: boolean
}) {
  const item = metaFor(id)
  return (
    <div className={`wf-sat wf-sat-section${dropOver ? ' over-host' : ''}`} data-wf-host={id}>
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
  const [drag, setDrag] = useState<Drag | null>(null)
  const [over, setOver] = useState<Over | null>(null)
  const dragRef = useRef<Drag | null>(null)

  useEffect(() => {
    setState(loadWire())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    saveWire(state)
  }, [ready, state])

  const draggingLink = drag?.kind === 'link' || drag?.kind === 'placement'

  const readTarget = (node: EventTarget | null, clientY: number, mode: Drag['kind']): Over | null => {
    const host = node as HTMLElement | null
    if (mode === 'link' || mode === 'placement') {
      const el = host?.closest?.('[data-wf-host]') as HTMLElement | null
      const id = el?.getAttribute('data-wf-host') as WireId | null
      return id ? { kind: 'host', id } : null
    }
    const el = host?.closest?.('[data-wf-id]') as HTMLElement | null
    if (el) {
      const id = el.getAttribute('data-wf-id') as WireId | null
      if (id) {
        const rect = el.getBoundingClientRect()
        return { kind: 'reorder', id, place: clientY > rect.top + rect.height / 2 ? 'after' : 'before' }
      }
    }
    if (host?.closest?.('[data-wf-archive]')) return { kind: 'reorder', id: 'footer', place: 'after' }
    return null
  }

  const capture = (event: React.PointerEvent, next: Drag) => {
    if (event.button !== 0) return
    event.preventDefault()
    dragRef.current = next
    setDrag(next)
    ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent) => {
    const current = dragRef.current
    if (!current) return
    const under = document.elementFromPoint(event.clientX, event.clientY)
    setOver(readTarget(under, event.clientY, current.kind))
  }

  const onPointerUp = () => {
    const current = dragRef.current
    if (current?.kind === 'section' && over?.kind === 'reorder' && over.id !== current.id) {
      setState((s) => moveWire(s, current.id, over.id, over.place))
    }
    if (current?.kind === 'link' && over?.kind === 'host') {
      setState((s) => placeLink(s, current.link, over.id))
    }
    if (current?.kind === 'placement' && over?.kind === 'host') {
      setState((s) => moveLink(s, current.id, over.id))
    }
    dragRef.current = null
    setDrag(null)
    setOver(null)
  }

  const renderRow = (id: WireId, archived: boolean) => {
    const item = metaFor(id)
    const children = childrenOf(state, id)
    const ownLinks = linksOn(state, id)
    const childLinks = children.flatMap((child) => linksOn(state, child))
    const satCount = children.length + ownLinks.length + childLinks.length
    const reorderOver = over?.kind === 'reorder' && over.id === id
    const hostOver = over?.kind === 'host' && over.id === id
    const showPush = canPushSubpage(state, id)
    return (
      <div className={`wf-row${archived ? ' archived' : ''}`} key={id}>
        <article
          className={`wf-block${satCount ? ' has-links' : ''}${drag?.kind === 'section' && drag.id === id ? ' dragging' : ''}${
            reorderOver ? ` over-${over.place}` : ''
          }${hostOver && draggingLink ? ' over-host' : ''}${archived ? ' archived' : ''}`}
          data-wf-id={id}
          data-wf-host={id}
        >
          <header className="wf-block-head">
            <button
              type="button"
              className="wf-handle"
              aria-label={`Drag ${item.title}`}
              onPointerDown={(event) => capture(event, { kind: 'section', id })}
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
                  <SectionSatellite
                    id={child}
                    dropOver={draggingLink && over?.kind === 'host' && over.id === child}
                    onRestore={(next) => setState((s) => popSubpage(s, next))}
                  />
                  {linksOn(state, child).map((placement) => (
                    <LinkChip
                      key={placement.id}
                      placement={placement}
                      onUnpin={(next) => setState((s) => unpinLink(s, next))}
                      onDragStart={(event, next) => capture(event, { kind: 'placement', id: next })}
                      onDragMove={onPointerMove}
                      onDragEnd={onPointerUp}
                    />
                  ))}
                </Fragment>
              ))}
              {ownLinks.map((placement) => (
                <LinkChip
                  key={placement.id}
                  placement={placement}
                  onUnpin={(next) => setState((s) => unpinLink(s, next))}
                  onDragStart={(event, next) => capture(event, { kind: 'placement', id: next })}
                  onDragMove={onPointerMove}
                  onDragEnd={onPointerUp}
                />
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
  const draggingSection = drag?.kind === 'section' ? drag.id : null

  return (
    <div className={`wf${drag ? ' is-dragging' : ''}${draggingLink ? ' is-link-dragging' : ''}`}>
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
          Left column is the homepage. → nests a section as a sub-page; ← brings it back. Header,
          ticker, and footer stay as chrome. Links live in the tray: drag Phorest (or any other
          chip) onto a block or a nested sub-page to place it. Drag again to put the same link in
          a second place. × takes it off that block. Drag a page section below the footer to
          archive it.
        </p>
        <p className="wf-legend">
          <span className="wf-sat-kind">Off-site</span> leaves the site ·{' '}
          <span className="wf-sat-kind sub">Existing page / sub-page</span> stays on Yuzu · ×
          removes a link · grey = archived
        </p>
        <p className="wf-note">
          Book starts on the title bar. Drop it on the hero as well if you want booking in both
          places. Unused chips stay in the tray — they are not lost.
        </p>

        <section className="wf-tray" aria-label="Links">
          <p className="wf-tray-label">Links — drag onto a section or sub-page</p>
          <div className="wf-tray-chips">
            {LINK_CATALOG.map((item) => {
              const count = placementCount(state, item.id)
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`wf-tray-chip${count ? ' placed' : ''}${drag?.kind === 'link' && drag.link === item.id ? ' dragging' : ''}`}
                  onPointerDown={(event) => capture(event, { kind: 'link', link: item.id })}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                >
                  <span className={`wf-sat-kind${item.kind === 'subpage' ? ' sub' : ''}`}>
                    {item.kind === 'offsite' ? 'Off-site' : 'Page'}
                  </span>
                  <strong>{item.title}</strong>
                  <span>{count ? `${count} placed` : 'Not placed'}</span>
                </button>
              )
            })}
          </div>
        </section>

        <div className="wf-board">
          <div className="wf-board-head" aria-hidden="true">
            <span>On the page</span>
            <span />
            <span>Sub-pages / links out</span>
          </div>
          {live.map((id) => renderRow(id, false))}
          <div
            className={`wf-archive-well${
              over?.kind === 'reorder' && over.id === 'footer' && over.place === 'after' && draggingSection !== 'footer'
                ? ' over'
                : ''
            }`}
            data-wf-archive
          >
            <p className="wf-archive-label">Archived — below the live page</p>
            <p className="wf-archive-hint">
              Drag a page section here to take it off the homepage. Links stay in the tray above.
            </p>
            {archived.map((id) => renderRow(id, true))}
          </div>
        </div>
      </main>
    </div>
  )
}
