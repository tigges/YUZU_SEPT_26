import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')
const assets = resolve(root, 'assets')
const origin = 'https://tigges.github.io/YUZU_SEPT_26'

if (!existsSync(dist)) {
  throw new Error('dist/ is missing. Run npm run build first.')
}

mkdirSync(assets, { recursive: true })

const builtHtml = ['dev.html', 'index.html']
  .map((name) => resolve(dist, name))
  .find((path) => existsSync(path))

if (!builtHtml) {
  throw new Error('Built HTML is missing from dist/.')
}

let html = readFileSync(builtHtml, 'utf8')
html = html.replaceAll('/YUZU_SEPT_26/dev.html', '/YUZU_SEPT_26/')
writeFileSync(resolve(root, 'index.html'), html)

for (const file of ['app.js', 'app.css']) {
  const from = resolve(dist, 'assets', file)
  if (!existsSync(from)) {
    throw new Error(`Missing ${from}`)
  }
  copyFileSync(from, resolve(assets, file))
}

cpSync(resolve(root, 'public/assets/gallery'), resolve(assets, 'gallery'), { recursive: true })
cpSync(resolve(root, 'public/assets/brand'), resolve(assets, 'brand'), { recursive: true })
cpSync(resolve(root, 'public/assets/reviews'), resolve(assets, 'reviews'), { recursive: true })
cpSync(resolve(root, 'public/assets/instagram'), resolve(assets, 'instagram'), { recursive: true })
cpSync(resolve(root, 'public/assets/v4'), resolve(assets, 'v4'), { recursive: true })
cpSync(resolve(root, 'public/assets/archive-ig'), resolve(assets, 'archive-ig'), { recursive: true })
cpSync(resolve(root, 'public/assets/clean'), resolve(assets, 'clean'), { recursive: true })
cpSync(resolve(root, 'public/assets/wix'), resolve(assets, 'wix'), { recursive: true })
copyFileSync(resolve(root, 'public/favicon.svg'), resolve(root, 'favicon.svg'))
copyFileSync(resolve(root, 'public/price-list.pdf'), resolve(root, 'price-list.pdf'))
copyFileSync(resolve(root, 'public/patch-testing.pdf'), resolve(root, 'patch-testing.pdf'))

for (const file of ['robots.txt', 'sitemap.xml', 'llms.txt', 'soe.css', 'services.html', 'contact.html']) {
  copyFileSync(resolve(root, 'public', file), resolve(root, file))
}

for (const file of ['about.html', 'prices.html', 'questions.html']) {
  const source = readFileSync(resolve(root, 'public', file), 'utf8')
  writeFileSync(resolve(root, file), mergeSpa(html, source, file))
}

console.log(
  'Wrote GitHub Pages files: index.html, assets/, robots.txt, sitemap.xml, llms.txt, Clean sub-pages, services/contact.html',
)

function mergeSpa(indexHtml, source, file) {
  const title = source.match(/<title>([^<]+)<\/title>/)[1]
  const desc = source.match(/name="description" content="([^"]+)"/)[1]
  const canonical = `${origin}/${file}`
  const header = source.match(/<header[\s\S]*?<\/header>/)[0]
  const main = source.match(/<main[\s\S]*?<\/main>/)[0]
  const footer = source.match(/<footer[\s\S]*?<\/footer>/)[0]
  const safeTitle = title.replace(/&amp;/g, '&').replace(/&/g, '&amp;')
  const safeDesc = desc.replace(/&amp;/g, '&').replace(/&/g, '&amp;')
  let out = indexHtml
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
  out = out.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`)
  out = out.replace(/property="og:title" content="[^"]*"/, `property="og:title" content="${safeTitle}"`)
  out = out.replace(/property="og:url" content="[^"]*"/, `property="og:url" content="${canonical}"`)
  out = out.replace(/name="twitter:title" content="[^"]*"/, `name="twitter:title" content="${safeTitle}"`)
  out = out.replace(/name="description"\s+content="[^"]*"/, `name="description" content="${safeDesc}"`)
  out = out.replace(/property="og:description"\s+content="[^"]*"/, `property="og:description" content="${safeDesc}"`)
  out = out.replace(/name="twitter:description"\s+content="[^"]*"/, `name="twitter:description" content="${safeDesc}"`)
  out = out.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    `<noscript>\n      ${header}\n      ${main}\n      ${footer}\n    </noscript>`,
  )
  if (file === 'questions.html') {
    out = out.replace('</head>', `    ${faqJsonLd(source)}\n  </head>`)
  }
  return out
}

function faqJsonLd(source) {
  const pairs = [...source.matchAll(/<h2>(.*?)<\/h2>\s*<p>(.*?)<\/p>/gs)].map(([, q, a]) => ({
    '@type': 'Question',
    name: q.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&'),
    acceptedAnswer: {
      '@type': 'Answer',
      text: a.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&'),
    },
  }))
  return `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs,
  })}</script>`
}
