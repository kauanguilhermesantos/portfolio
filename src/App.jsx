import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HabilidadesSection from './components/HabilidadesSection'
import SobreSection from './components/SobreSection'

function App() {
  return (
    <>
      <div className='min-h-screen bg-gray-900'>
        <Header />
        <HeroSection />
        <SobreSection />
        <HabilidadesSection />
        
      </div>
    </>
  )
}

export default App
