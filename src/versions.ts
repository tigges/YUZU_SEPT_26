const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const versions = [
  {
    id: 'earthy',
    name: 'Earthy',
    kicker: 'Version 1',
    summary: 'Parchment, olive, and terracotta. Foliage hero, full price menu, and a calm Japanese-inspired page.',
    preview: asset('assets/brand/leaves.jpg'),
    previewAlt: 'Tropical leaves in warm light',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    kicker: 'Version 2',
    summary: 'Built from @yuzuhairandbeauty: sage wordmark, blossom offer graphics, in-salon colour, and the team on camera.',
    preview: asset('assets/instagram/09.jpg'),
    previewAlt: 'Copper balayage photographed in the salon',
  },
  {
    id: 'studio',
    name: 'Studio',
    kicker: 'Version 3',
    summary: 'White space and a coral Book button. The six client looks lead, then reviews, services, and visit.',
    preview: asset('assets/gallery/1.jpg'),
    previewAlt: 'Copper and rose colour with textured fringe',
  },
] as const

export type VersionId = (typeof versions)[number]['id']

export function homeUrl() {
  return import.meta.env.BASE_URL
}

export function versionUrl(id: VersionId) {
  return `${import.meta.env.BASE_URL}?v=${id}`
}

export function readVersionParam(): VersionId | null {
  const value = new URLSearchParams(window.location.search).get('v')
  return versions.some((item) => item.id === value) ? (value as VersionId) : null
}
