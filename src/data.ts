export const BOOKING_URL = 'https://phorest.com/book/salons/yuzuhairandbeauty'
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Yuzu%20Hair%205%20Dickens%20Yard%20Ealing'
export const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=5%20Dickens%20Yard%2C%20Longfield%20Avenue%2C%20London%20W5%202TD'
export const MAPS_EMBED_URL =
  'https://www.openstreetmap.org/export/embed.html?bbox=-0.307%2C51.511%2C-0.297%2C51.5165&layer=mapnik&marker=51.5137%2C-0.302'
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const PRICE_LIST_URL = asset('price-list.pdf')

export const social = {
  instagram: 'https://www.instagram.com/yuzuhairandbeauty/',
  facebook: 'https://www.facebook.com/YUZUHairandBeauty/',
  email: 'mailto:info@yuzuhairandbeauty.co.uk',
}

export const contact = {
  name: 'Yuzu Hair & Beauty',
  addressLines: ['5 Dickens Yard', 'Longfield Avenue', 'Ealing, W5 2TD'],
  phone: '020 8840 2244',
  phoneHref: 'tel:+442088402244',
  email: 'info@yuzuhairandbeauty.co.uk',
  hours: [
    { days: 'Tuesday – Friday', time: '10am – 8pm' },
    { days: 'Saturday', time: '9am – 6pm' },
    { days: 'Monday & Sunday', time: 'Closed' },
  ],
}

export const gallery = [
  { src: asset('assets/gallery/1.jpg'), alt: 'Copper and rose colour with textured fringe' },
  { src: asset('assets/gallery/2.jpg'), alt: 'Long sleek dark hair, freshly styled in salon' },
  { src: asset('assets/gallery/3.jpg'), alt: 'Deep teal bob with a soft, healthy finish' },
  { src: asset('assets/gallery/4.jpg'), alt: 'Violet and blue colour melt, worn long' },
  { src: asset('assets/gallery/5.jpg'), alt: 'Vivid red bob with a blunt fringe' },
  { src: asset('assets/gallery/6.jpg'), alt: 'Long chocolate brown hair, cut and blow-dried' },
]

export const reviews = [
  {
    name: 'Alexa',
    quote: 'Amazing — focused on every detail',
    body: 'Listened to my requests and delivered exactly what I wanted. I already booked my follow-up.',
    photo: asset('assets/reviews/1.jpg'),
  },
  {
    name: 'Rachel',
    quote: 'I always leave feeling a million dollars',
    body: 'Cut and colour once again exactly how I asked. Calm, expert and friendly throughout.',
    photo: asset('assets/reviews/2.jpg'),
  },
  {
    name: 'Steve',
    quote: 'A brilliant artist working in hair',
    body: 'Jasmine is not just another haircut, but a brilliant artist working in hair.',
    photo: asset('assets/reviews/3.jpg'),
  },
]

export const services = [
  {
    title: 'Cut & styling',
    copy: 'Precision cuts tailored to your hair, face shape, and how you actually live.',
    from: '£29',
  },
  {
    title: 'Colour',
    copy: 'Roots, full head, Illumina, and thoughtful colour corrections.',
    from: '£75',
  },
  {
    title: 'Highlights & balayage',
    copy: 'Classic foils, balayage, and foiliage with toner and blending.',
    from: '£64',
  },
  {
    title: 'Treatments',
    copy: 'Nashi fillers, K2.0 moisture, and Aura smoothing — formaldehyde-free.',
    from: '£33',
  },
]

type PriceRow = { name: string; senior: string; stylist: string }

export const priceGroups: { title: string; rows: PriceRow[] }[] = [
  {
    title: 'Cut & style',
    rows: [
      { name: 'Ladies wash, cut & style', senior: '£87', stylist: '£58' },
      { name: 'Gents wash, cut & style', senior: '£58', stylist: '—' },
      { name: 'Kids (12 & under)', senior: '£29', stylist: '£23' },
      { name: 'Teens (13–16) boys', senior: '£41', stylist: '£35' },
      { name: 'Teens (13–16) girls', senior: '£52', stylist: '£35' },
      { name: 'Blow-dry', senior: '£58', stylist: '£41' },
    ],
  },
  {
    title: 'Colour',
    rows: [
      { name: 'Full head', senior: '£101', stylist: '£87' },
      { name: 'Roots', senior: '£88', stylist: '£75' },
      { name: 'In-between full head', senior: '£124', stylist: '£101' },
      { name: 'In-between roots', senior: '£111', stylist: '£88' },
      { name: 'Illumina colouring', senior: '£133', stylist: '—' },
    ],
  },
  {
    title: 'Highlights / balayage / foiliage',
    rows: [
      { name: 'Full head', senior: '£150', stylist: '£98' },
      { name: 'Half head', senior: '£115', stylist: '£75' },
      { name: 'T-section', senior: '£89', stylist: '£64' },
      { name: 'Long hair below chest', senior: '+£41', stylist: '+£41' },
      { name: 'Toner', senior: '£38', stylist: '£38' },
      { name: 'Blending', senior: '£41', stylist: '£41' },
      { name: 'Colour remover', senior: '£115', stylist: '£104' },
      { name: 'Pre-lighten full head', senior: '£179', stylist: '£138' },
      { name: 'Pre-lighten roots', senior: '£127', stylist: '£104' },
    ],
  },
]

export const treatments = [
  { name: 'Nashi Filler Express', price: '£33' },
  { name: 'Nashi Filler 1, 2, 3 intense moisture', price: '£46' },
  { name: 'K2.0 short', price: '£41' },
  { name: 'K2.0 medium', price: '£52' },
  { name: 'K2.0 long', price: '£64' },
  { name: 'K2.0 extra long', price: '£75' },
  { name: 'Aura smoothing, long (3–4 months)', price: '£357' },
  { name: 'Aura smoothing, below shoulder', price: '£294' },
  { name: 'Aura smoothing, above shoulder', price: '£228' },
  { name: 'Aura smoothing, short', price: '£117–165' },
]

export const offers = [
  {
    id: 'tuesdays',
    kicker: 'Colour Tuesdays',
    title: '50% off',
    detail: 'Your most expensive colour service, with a full-priced wash, cut and blow-dry. Senior stylist.',
    tone: 'sage',
  },
  {
    id: 'wednesdays',
    kicker: 'Smooth Wednesdays',
    title: '25% off',
    detail: 'Brazilian blow-dry / Aura smoothing. Formaldehyde and ammonia free.',
    tone: 'clay',
  },
  {
    id: 'thursdays',
    kicker: 'Thursdays are the new Tuesdays',
    title: '50% off',
    detail: 'Colour celebration with a full-priced wash, cut and blow-dry. Stylist.',
    tone: 'forest',
  },
]

export const extras = [
  {
    title: 'Refer a friend',
    detail: 'When they complete their first appointment, you receive £10 credit. No limit on referrals.',
  },
  {
    title: 'Rebook the same day',
    detail: 'Book your next visit before you leave and take 10% off that appointment.',
  },
  {
    title: '4 blow-drys',
    detail: '£156, valid 6 months. Haircuts not included. Non-refundable.',
  },
  {
    title: '4 roots for the price of 3',
    detail: '£264 upfront, valid 16 weeks. All dates booked on purchase. Non-refundable.',
  },
]

export const instagram = {
  handle: '@yuzuhairandbeauty',
  name: 'YUZU Hair & Beauty',
  followers: '2,952',
  following: '510',
  posts: '776',
  profile: asset('assets/instagram/profile.jpg'),
  bio: 'Welcome to YUZU Hair. Unit 5, Dickens Yard, Ealing.',
  highlights: [
    { title: 'Offers', src: asset('assets/instagram/00.jpg') },
    { title: 'Portfolio', src: asset('assets/instagram/08.jpg') },
  ],
  featured: [
    {
      src: asset('assets/instagram/08.jpg'),
      alt: 'Dimensional blonde with silky layers, photographed in salon',
      title: 'Soft blonde, salon-fresh finish',
      detail: 'Colour and cut by @glowupwithmia',
    },
    {
      src: asset('assets/instagram/09.jpg'),
      alt: 'Copper balayage with a glossy finish',
      title: 'Copper balayage',
      detail: 'Rich warmth, soft dimension, glossy finish',
    },
    {
      src: asset('assets/instagram/09-1.jpg'),
      alt: 'Before: long dark wavy hair in the salon chair',
      title: 'Before',
      detail: 'The same client, before the copper',
    },
    {
      src: asset('assets/instagram/08-1.jpg'),
      alt: 'Back view of blended blonde colour',
      title: 'Blonde, from behind',
      detail: 'Effortless movement through the lengths',
    },
  ],
  feed: [
    {
      src: asset('assets/instagram/00.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/DWhEa09jImn/',
      kind: 'image' as const,
      label: 'Colour Tuesdays · 50% off',
    },
    {
      src: asset('assets/instagram/01.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/DWhDiM2DLZO/',
      kind: 'image' as const,
      label: 'Smooth Wednesdays · 25% off',
    },
    {
      src: asset('assets/instagram/02.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/DWhDWkJjMmZ/',
      kind: 'image' as const,
      label: 'Colour Thursdays · 50% off',
    },
    {
      src: asset('assets/instagram/03.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/reel/DcyBdOeMgqE/',
      kind: 'reel' as const,
      label: 'Behind the scenes at Dickens Yard',
    },
    {
      src: asset('assets/instagram/04.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/reel/Dcl0vYwM16h/',
      kind: 'reel' as const,
      label: 'Meet the team',
    },
    {
      src: asset('assets/instagram/05.jpg'),
      href: 'https://www.instagram.com/itslammmmmm/reel/DcI4Ygruv3R/',
      kind: 'reel' as const,
      label: 'Asian beauty spots in London',
    },
    {
      src: asset('assets/instagram/06.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/reel/DcBQVFEt3EP/',
      kind: 'reel' as const,
      label: '10-year anniversary',
    },
    {
      src: asset('assets/instagram/07.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/reel/Db-ybHkMh-R/',
      kind: 'reel' as const,
      label: 'Celebrating small businesses',
    },
    {
      src: asset('assets/instagram/08.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/Db2s4CCDLJ_/',
      kind: 'carousel' as const,
      label: 'Dimensional blonde',
    },
    {
      src: asset('assets/instagram/09.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/Db0-9OpDJ3O/',
      kind: 'carousel' as const,
      label: 'Copper balayage',
    },
    {
      src: asset('assets/instagram/10.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/Daz2v-MstsH/',
      kind: 'image' as const,
      label: 'Summer party pastries',
    },
    {
      src: asset('assets/instagram/11.jpg'),
      href: 'https://www.instagram.com/yuzuhairandbeauty/p/Danv113MFV3/',
      kind: 'image' as const,
      label: 'Tooth gems at the summer party',
    },
  ],
}
