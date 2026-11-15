import { useEffect, useRef, useState } from "react"
import { ArrowDown, Code2, Mail } from "lucide-react"

const B = ({ children }) => <strong className="font-semibold text-fg">{children}</strong>

const MANIFESTO =
  "Sou um desenvolvedor movido por resolver problemas através da tecnologia. Transformo ideias em sistemas funcionais, bem estruturados e performáticos, equilibrando a lógica por trás das aplicações com a experiência de quem usa."
const palavras = MANIFESTO.split(" ")

const pilares = [
  {
    titulo: "Propósito",
    texto: (
      <>
        Minha jornada na programação é guiada pela <B>curiosidade</B>, pela vontade constante de <B>evoluir</B> e pelo foco
        em <B>construir soluções</B> que realmente façam diferença na prática.
      </>
    ),
  },
  {
    titulo: "O que faço",
    texto: (
      <>
        Atuo no desenvolvimento de aplicações web, <B>transformando ideias em sistemas funcionais</B>, sempre buscando
        equilíbrio entre eficiência, organização e escalabilidade.
      </>
    ),
  },
  {
    titulo: "Experiência",
    texto: (
      <>
        Projetos educacionais e tecnológicos: plataformas, sistemas e soluções que apoiam pessoas no aprendizado. O{" "}
        <B>software vai além do código</B>: é uma <B>ferramenta para conectar</B>, simplificar e potencializar realidades.
      </>
    ),
  },
  {
    titulo: "Evolução",
    texto: (
      <>
        Sempre explorando novas ferramentas e encarando desafios como oportunidades. Desenvolver é{" "}
        <strong className="font-semibold text-accent">construir caminhos para transformar ideias em impacto real</strong>.
      </>
    ),
  },
]

const limitar = (v) => Math.min(1, Math.max(0, v))

// progresso 0→1 enquanto o topo do elemento vai de 85% a 35% da altura da janela
function useProgressoRolagem(ref) {
  const [progresso, setProgresso] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0
  )

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let frame = 0
    const medir = () => {
      frame = 0
      const topo = ref.current.getBoundingClientRect().top
      const h = window.innerHeight
      setProgresso(limitar((h * 0.85 - topo) / (h * 0.5)))
    }
    const agendar = () => {
      if (!frame) frame = requestAnimationFrame(medir)
    }
    agendar()
    window.addEventListener("scroll", agendar, { passive: true })
    window.addEventListener("resize", agendar)
    return () => {
      window.removeEventListener("scroll", agendar)
      window.removeEventListener("resize", agendar)
      cancelAnimationFrame(frame)
    }
  }, [ref])

  return progresso
}

const botao =
  "group flex items-center gap-3 rounded-full py-1.5 pl-1.5 pr-6 text-[13px] font-medium uppercase tracking-wide transition-colors duration-300"
const circulo =
  "flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-suave group-hover:rotate-[-12deg] group-hover:scale-110"

export default function SobreSection() {
  const manifestoRef = useRef(null)
  const progresso = useProgressoRolagem(manifestoRef)

  return (
    <section id="sobre" className="scroll-mt-20 bg-surface px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <p data-revelar className="max-w-lg text-base leading-relaxed text-soft md:text-lg">
          Crio software que acompanha o ritmo de quem usa, não o contrário. Feito com propósito, clareza e performance.
        </p>
        <div data-revelar style={{ "--atraso": "150ms" }} className="flex flex-wrap justify-center gap-4">
          <a href="#contato" className={`${botao} bg-fg text-ink hover:bg-white`}>
            <span className={`${circulo} bg-accent text-white`}>
              <Mail size={16} />
            </span>
            Fale comigo
          </a>
          <a href="#projetos" className={`${botao} bg-line text-fg hover:bg-[#263246]`}>
            <span className={`${circulo} bg-ink text-accent`}>
              <ArrowDown size={16} />
            </span>
            Ver projetos
          </a>
        </div>
      </div>

      {/* divisor decorativo: ponto — linha — ponto */}
      <div data-revelar style={{ "--atraso": "250ms" }} className="mx-auto my-16 flex max-w-7xl items-center gap-0.5 md:my-24">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-[2px] flex-1 bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:gap-20">
        <div className="flex shrink-0 items-start gap-4 md:w-56">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Code2 size={22} />
          </span>
          <h2 className="font-mono text-xs font-semibold uppercase leading-5 tracking-widest text-muted">
            Software
            <br />
            além do código
          </h2>
        </div>

        {/* cada palavra acende conforme a rolagem avança */}
        <p
          ref={manifestoRef}
          aria-label={MANIFESTO}
          className="font-display text-2xl leading-[1.3] tracking-[-0.02em] sm:text-3xl md:text-4xl lg:text-[42px]"
        >
          {palavras.map((p, i) => (
            <span
              key={i}
              aria-hidden
              className="transition-colors duration-200"
              style={{ color: `rgb(232 237 244 / ${0.15 + 0.85 * limitar(progresso * palavras.length - i)})` }}
            >
              {p}{" "}
            </span>
          ))}
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl border-l border-t border-line md:mt-28 md:grid-cols-2">
        {pilares.map((pilar, i) => (
          <article
            key={pilar.titulo}
            data-revelar
            style={{ "--atraso": `${i * 120}ms` }}
            className="group relative flex flex-col gap-5 overflow-hidden border-b border-r border-line p-8 md:p-10 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(420px_circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.14),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
            onPointerMove={(e) => {
              // holofote segue o cursor dentro do card
              const r = e.currentTarget.getBoundingClientRect()
              e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`)
              e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`)
            }}
          >
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-fg">{pilar.titulo}</h3>
            <p className="text-[17px] leading-7 text-muted">{pilar.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
