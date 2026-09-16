import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ command }) => ({
  // GitHub Pages hosts this repo at /YUZU_SEPT_26/
  base: command === 'build' ? '/YUZU_SEPT_26/' : '/',
  plugins: [
    react(),
    {
      name: 'dev-html',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const path = req.url?.split('?')[0]
          const query = req.url?.includes('?') ? req.url.slice(req.url.indexOf('?')) : ''
          if (
            path === '/' ||
            path === '/index.html' ||
            path === '/about.html' ||
            path === '/prices.html' ||
            path === '/questions.html'
          ) {
            req.url = `/dev.html${query}`
          }
          next()
        })
      },
    },
  ],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: `${root}dev.html`,
      output: {
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (info) => {
          const name = info.names?.[0] ?? info.name ?? ''
          if (name.endsWith('.css')) return 'assets/app.css'
          return 'assets/[name][extname]'
        },
      },
    },
  },
}))
