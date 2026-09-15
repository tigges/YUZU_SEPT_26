import { homeUrl, versionUrl, versions, type VersionId } from '../versions'

export function VersionBar({ current }: { current: VersionId }) {
  return (
    <div className="version-bar">
      <a className="version-bar-home" href={homeUrl()}>
        All versions
      </a>
      <nav aria-label="Design versions">
        {versions.map((item) => (
          <a
            key={item.id}
            href={versionUrl(item.id)}
            aria-current={item.id === current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  )
}
