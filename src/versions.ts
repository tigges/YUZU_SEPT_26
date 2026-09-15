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
  {
    id: 'gold',
    name: 'Gold',
    kicker: 'Version 4',
    summary: 'From YUZU_CLEAN: charcoal, cream, and yuzu gold. Fraunces headlines, calm wireframe filled with real Ealing content.',
    preview: asset('assets/gallery/2.jpg'),
    previewAlt: 'Long sleek dark hair, freshly styled in salon',
  },
  {
    id: 'sanctuary',
    name: 'Sanctuary',
    kicker: 'Version 5',
    summary: 'From YUZU_V4_CURSOR: forest green, sharp gold, photo hero, hours strip, and Instagram results in five cards.',
    preview: asset('assets/v4/hero.jpg'),
    previewAlt: 'Brunette waves, photographed in salon',
  },
  {
    id: 'editorial',
    name: 'Editorial',
    kicker: 'Version 6',
    summary: 'From YUZU-HAIR-CLONE v1: cream, gold, Playfair, split hero, patch-test notice, and a sticky Book button.',
    preview: asset('assets/gallery/1.jpg'),
    previewAlt: 'Copper and rose colour with textured fringe',
  },
  {
    id: 'midnight',
    name: 'Midnight',
    kicker: 'Version 7',
    summary: 'From HAIR-CLONE v2 Midnight Edition: charcoal, champagne gold, and a high-contrast booking hero.',
    preview: asset('assets/gallery/2.jpg'),
    previewAlt: 'Long sleek dark hair, freshly styled in salon',
  },
  {
    id: 'quiet',
    name: 'Quiet',
    kicker: 'Version 8',
    summary: 'From HAIR-CLONE v3: cream and sage, photo-and-copy split, and a calm one-page layout.',
    preview: asset('assets/gallery/3.jpg'),
    previewAlt: 'Deep teal bob with a soft, healthy finish',
  },
  {
    id: 'convert',
    name: 'Convert',
    kicker: 'Version 9',
    summary: 'From HAIR-CLONE v4: forest-green CTAs, rounded cards, patch-test banner, and clear next steps.',
    preview: asset('assets/gallery/4.jpg'),
    previewAlt: 'Violet and blue colour melt, worn long',
  },
  {
    id: 'simple',
    name: 'Simple',
    kicker: 'Version 10',
    summary: 'From YUZU-V2: forest and gold, Fraunces headlines, Instagram results grid, and Google review cards.',
    preview: asset('assets/instagram/09.jpg'),
    previewAlt: 'Copper balayage photographed in the salon',
  },
  {
    id: 'auto',
    name: 'Auto',
    kicker: 'Version 11',
    summary: 'From YUZU_AUTO: warm landing, hours card, and Manrope + Playfair — filled with Dickens Yard facts, not dummy copy.',
    preview: asset('assets/gallery/5.jpg'),
    previewAlt: 'Vivid red bob with a blunt fringe',
  },
  {
    id: 'links',
    name: 'Links',
    kicker: 'Version 12',
    summary:
      'Current site (yuzuhairandbeauty.london), Phorest, Google Maps, Instagram, TikTok, Facebook, 2025 price list, patch-test PDF, and T&Cs. Offers are a webpage, not a PDF.',
    preview: asset('assets/instagram/00.jpg'),
    previewAlt: 'Colour Tuesdays offer graphic from Instagram',
  },
  {
    id: 'wireframe',
    name: 'Wireframe',
    kicker: 'Layout',
    summary:
      'Visual page order: drag logo+menu, hero, gallery, reviews, services (price list as a sub-page), offers, careers, contact, and social. Hours, patch-test, map, and footer included.',
    preview: asset('assets/brand/leaves.jpg'),
    previewAlt: 'Wireframe layout blocks',
    sketch: true,
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
