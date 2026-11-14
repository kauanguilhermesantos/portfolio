import { useEffect, useRef, useState } from "react"

const B = ({ children }) => <strong className="font-semibold text-fg">{children}</strong>

const pilares = [
  {
    titulo: "Propósito",
    texto: (
      <>
        Sou um <B>desenvolvedor de software</B> movido por resolver problemas através da <B>tecnologia</B>.
        Minha jornada na programação é guiada pela <B>curiosidade</B>, pela vontade constante de <B>evoluir</B> e pelo foco
        em <B>construir soluções</B> que realmente façam diferença na prática.
      </>
    ),
  },
  {
    titulo: "O que faço",
    texto: (
      <>
        Atuo no desenvolvimento de aplicações web, <B>transformando ideias em sistemas funcionais</B>, bem estruturados
        e performáticos. Gosto de trabalhar tanto na lógica por trás das aplicações quanto na <B>experiência final
        do usuário</B>, sempre buscando equilíbrio entre eficiência, organização e escalabilidade.
      </>
    ),
  },
  {
    titulo: "Experiência",
    texto: (
      <>
        Tenho experiência em projetos educacionais e tecnológicos, colaborando na criação de plataformas,
        sistemas e soluções que apoiam pessoas no aprendizado e no uso da tecnologia. Acredito que o <B>software
        vai além do código</B>: ele é uma <B>ferramenta para conectar</B>, simplificar e potencializar realidades.
      </>
    ),
  },
  {
    titulo: "Evolução",
    texto: (
      <>
        Estou sempre explorando novas ferramentas, aprimorando minhas habilidades e encarando desafios como
        oportunidades de crescimento. Para mim, desenvolver é mais do que programar, é{" "}
        <strong className="font-semibold text-accent">construir caminhos para transformar ideias em impacto real</strong>.
      </>
    ),
  },
]

// linha do tempo da ficha "Sobre B — Ficha da animação" no Paper (1300ms), agora presa à rolagem
const TOTAL = 1300
const INICIO = 0.9 // topo da seção a 90% da altura da janela -> progresso 0
const FIM = 0.2 // topo da seção a 20% -> progresso 1

const limitar = (v) => Math.min(1, Math.max(0, v))
const easeOut = (k) => 1 - Math.pow(1 - k, 3)

// quanto de um trecho [delay, delay + duracao] da linha do tempo já foi percorrido
const etapa = (progresso, delay, duracao) => easeOut(limitar((progresso * TOTAL - delay) / duracao))

export default function SobreSection() {
  const ref = useRef(null)
  const [progresso, setProgresso] = useState(0)
  const [menosMovimento] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches)

  useEffect(() => {
    let frame = 0
    const medir = () => {
      frame = 0
      const topo = ref.current.getBoundingClientRect().top
      const altura = window.innerHeight
      setProgresso(limitar((altura * INICIO - topo) / (altura * (INICIO - FIM))))
    }
    const agendar = () => {
      if (!frame) frame = requestAnimationFrame(medir)
    }
    agendar() // mede já na montagem (ex.: página aberta em #sobre)
    window.addEventListener("scroll", agendar, { passive: true })
    window.addEventListener("resize", agendar)
    return () => {
      window.removeEventListener("scroll", agendar)
      window.removeEventListener("resize", agendar)
      cancelAnimationFrame(frame)
    }
  }, [])

  // quem pediu menos movimento vê a mesma sequência, mas subindo só 8px
  const surgir = (delay, duracao, distancia) => {
    const e = etapa(progresso, delay, duracao)
    return { opacity: e, translate: `0 ${(1 - e) * (menosMovimento ? 8 : distancia)}px` }
  }

  return (
    <section id="sobre" ref={ref} className="scroll-mt-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 md:gap-16 md:px-12 md:py-32">
        <div className="flex flex-col gap-5">
          <h2
            className="font-display text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-fg md:text-[56px]"
            style={surgir(100, 600, 24)}
          >
            Software vai além do código.
          </h2>
        </div>

        <div
          className="grid border-l border-t md:grid-cols-2"
          style={{ borderColor: `rgb(28 37 51 / ${etapa(progresso, 300, 500)})` }}
        >
          {pilares.map((pilar, i) => {
            const destaque = i === pilares.length - 1
            return (
              <article
                key={pilar.titulo}
                className="group relative flex flex-col gap-5 overflow-hidden border-b border-r border-line p-8 md:p-10 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(420px_circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.14),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
                onPointerMove={(e) => {
                  // holofote segue o cursor dentro do card
                  const r = e.currentTarget.getBoundingClientRect()
                  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`)
                  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`)
                }}
                style={{
                  ...surgir(350 + i * 120, 500, 32),
                  ...(destaque && { backgroundColor: `rgb(59 130 246 / ${0.06 * etapa(progresso, 1100, 200)})` }),
                }}
              >
                <h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-fg">{pilar.titulo}</h3>
                <p className="text-[17px] leading-7 text-muted">{pilar.texto}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
