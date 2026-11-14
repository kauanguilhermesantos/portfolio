import { useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HabilidadesSection from './components/HabilidadesSection'
import TechMarquee from './components/TechMarquee'
import SobreSection from './components/SobreSection'
import ProjetosSection from './components/ProjetosSection'
import ContatoSection from './components/ContatoSection'
import VoltarAoTopo from './components/VoltarAoTopo'

function App() {
  // um observer para a página toda: revela cada [data-revelar] uma vez, ao entrar na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visivel')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('[data-revelar]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className='min-h-screen bg-ink font-sans text-fg antialiased'>
        <Header />
        <HeroSection />
        <TechMarquee />
        <SobreSection />
        <HabilidadesSection />
        <ProjetosSection />
        <ContatoSection />
        <VoltarAoTopo />
      </div>
    </>
  )
}

export default App
