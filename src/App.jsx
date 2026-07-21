import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HabilidadesSection from './components/HabilidadesSection'
import SobreSection from './components/SobreSection'
import ProjetosSection from './components/ProjetosSection'
import ContatoSection from './components/ContatoSection'

function App() {
  return (
    <>
      <div className='min-h-screen bg-gray-900'>
        <Header />
        <HeroSection />
        <SobreSection />
        <HabilidadesSection />
        <ProjetosSection />
        <ContatoSection />
      </div>
    </>
  )
}

export default App
