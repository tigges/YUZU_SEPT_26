import Auto from './pages/Auto'
import Clean from './pages/Clean'
import Convert from './pages/Convert'
import Earthy from './pages/Earthy'
import Editorial from './pages/Editorial'
import Gold from './pages/Gold'
import Hub from './pages/Hub'
import Instagram from './pages/Instagram'
import Links from './pages/Links'
import Midnight from './pages/Midnight'
import Quiet from './pages/Quiet'
import Round from './pages/Round'
import Sanctuary from './pages/Sanctuary'
import Simple from './pages/Simple'
import Studio from './pages/Studio'
import Wireframe from './pages/Wireframe'
import Wix from './pages/Wix'
import { readVersionParam } from './versions'

export default function App() {
  const version = readVersionParam()
  document.body.dataset.theme = version ?? 'hub'

  if (version === 'earthy') return <Earthy />
  if (version === 'instagram') return <Instagram />
  if (version === 'studio') return <Studio />
  if (version === 'gold') return <Gold />
  if (version === 'sanctuary') return <Sanctuary />
  if (version === 'editorial') return <Editorial />
  if (version === 'midnight') return <Midnight />
  if (version === 'quiet') return <Quiet />
  if (version === 'convert') return <Convert />
  if (version === 'simple') return <Simple />
  if (version === 'clean') return <Clean />
  if (version === 'round') return <Round />
  if (version === 'wix') return <Wix />
  if (version === 'auto') return <Auto />
  if (version === 'links') return <Links />
  if (version === 'wireframe') return <Wireframe />
  return <Hub />
}
