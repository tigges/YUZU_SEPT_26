export const BOOKING_URL = 'https://phorest.com/book/salons/yuzuhairandbeauty'
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=Yuzu%20Hair%205%20Dickens%20Yard%20Ealing'
export const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=5%20Dickens%20Yard%2C%20Longfield%20Avenue%2C%20London%20W5%202TD&z=17&output=embed'
export const PRICE_LIST_URL = '/price-list.pdf'

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
  { src: '/assets/gallery/1.jpg', alt: 'Copper and rose colour with textured fringe' },
  { src: '/assets/gallery/2.jpg', alt: 'Long sleek dark hair, freshly styled in salon' },
  { src: '/assets/gallery/3.jpg', alt: 'Deep teal bob with a soft, healthy finish' },
  { src: '/assets/gallery/4.jpg', alt: 'Violet and blue colour melt, worn long' },
  { src: '/assets/gallery/5.jpg', alt: 'Vivid red bob with a blunt fringe' },
  { src: '/assets/gallery/6.jpg', alt: 'Long chocolate brown hair, cut and blow-dried' },
]

export const reviews = [
  {
    name: 'Alexa',
    quote: 'Amazing — focused on every detail',
    body: 'Listened to my requests and delivered exactly what I wanted. I already booked my follow-up.',
    photo: '/assets/reviews/1.jpg',
  },
  {
    name: 'Rachel',
    quote: 'I always leave feeling a million dollars',
    body: 'Cut and colour once again exactly how I asked. Calm, expert and friendly throughout.',
    photo: '/assets/reviews/2.jpg',
  },
  {
    name: 'Steve',
    quote: 'A brilliant artist working in hair',
    body: 'Jasmine is not just another haircut, but a brilliant artist working in hair.',
    photo: '/assets/reviews/3.jpg',
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
