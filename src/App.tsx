import Earthy from './pages/Earthy'
import Hub from './pages/Hub'
import Instagram from './pages/Instagram'
import Studio from './pages/Studio'
import { readVersionParam } from './versions'

export default function App() {
  const version = readVersionParam()
  document.body.dataset.theme = version ?? 'hub'

  if (version === 'earthy') return <Earthy />
  if (version === 'instagram') return <Instagram />
  if (version === 'studio') return <Studio />
  return <Hub />
}
