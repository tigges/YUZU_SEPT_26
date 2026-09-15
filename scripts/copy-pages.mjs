import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')
const assets = resolve(root, 'assets')

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
copyFileSync(resolve(root, 'public/favicon.svg'), resolve(root, 'favicon.svg'))
copyFileSync(resolve(root, 'public/price-list.pdf'), resolve(root, 'price-list.pdf'))

console.log('Wrote GitHub Pages files: index.html, assets/app.js, assets/app.css')
