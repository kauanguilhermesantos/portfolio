import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

// senoide: a velocidade máxima é metade da cúbica, então a subida fica bem mais macia
const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2

// o smooth nativo é rápido e sem controle de duração; aqui a subida acelera e desacelera devagar
function subirSuave() {
  const inicio = window.scrollY
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return window.scrollTo({ top: 0, behavior: "instant" })
  }
  const duracao = Math.min(3000, 1500 + inicio * 0.3) // de ~1,5s (perto) até 3s (do rodapé)
  const html = document.documentElement
  // o scroll-behavior: smooth do CSS brigaria com cada quadro e encurtaria a animação
  html.style.scrollBehavior = "auto"
  const t0 = performance.now()
  const passo = (agora) => {
    const t = Math.min(1, (agora - t0) / duracao)
    window.scrollTo(0, inicio * (1 - easeInOutSine(t)))
    if (t < 1) requestAnimationFrame(passo)
    else html.style.scrollBehavior = ""
  }
  requestAnimationFrame(passo)
}

export default function VoltarAoTopo() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    // só aparece depois que o usuário passou do Hero
    const checar = () => setVisivel(window.scrollY > window.innerHeight * 0.6)
    checar()
    window.addEventListener("scroll", checar, { passive: true })
    return () => window.removeEventListener("scroll", checar)
  }, [])

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={subirSuave}
      tabIndex={visivel ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-[0_12px_32px_-10px_rgba(59,130,246,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-blue-500 md:bottom-8 md:right-8 ${
        visivel ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
