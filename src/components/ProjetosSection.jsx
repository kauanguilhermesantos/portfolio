import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Github, MessageCircle } from "lucide-react"

const projetos = [
  {
    title: "RepHub",
    description:
      "Plataforma de gerenciamento de vendas para representantes comerciais. Centraliza pedidos, clientes, marcas, viagens e despesas em um só lugar, com relatórios e gráficos que mostram o desempenho de vendas por período.",
    image: "/img/rephub.png",
    technologies: ["Next.js", "TypeScript", "Java", "Spring Boot", "MongoDB", "Docker"],
    liveUrl: "https://rephubrep.vercel.app/login",
    githubUrl: "https://github.com/kauanguilhermesantos/rep-hub",
  },
  {
    title: "Koda",
    description:
      "Plataforma de aprendizagem de programação baseada estilo de aprendizagem. Permite que os usuários aprendam a programar de forma personalizada, indicando o conteúdo ao seu estilo de aprendizagem.",
    image: "/img/koda.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://github.com/kauanguilhermesantos/plataforma-react",
    githubUrl: "https://github.com/kauanguilhermesantos/plataforma-react",
  },
  {
    title: "SkAI",
    description:
      "Plataforma de venda de passagens aéreas com integração de IA para recomendação de voos e otimização de preços. Permite que os usuários encontrem as melhores ofertas e planejem suas viagens de forma eficiente.",
    image: "/img/skai.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Python", "Flask", "Gemini API"],
    liveUrl: "https://github.com/Raylan-BR/SCRPAI-IA",
    githubUrl: "https://github.com/Raylan-BR/SCRPAI-IA",
  },
]

export default function ProjetosSection() {
  const [ativo, setAtivo] = useState(0)
  const cards = useRef([])

  useEffect(() => {
    // o card que cruza a faixa central da tela vira o ativo (funciona mesmo com card mais alto que a tela)
    const observer = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => e.isIntersecting && setAtivo(Number(e.target.dataset.indice))),
      { rootMargin: "-45% 0px -45% 0px" }
    )
    cards.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projetos"
      className="relative scroll-mt-20 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(59,130,246,0.12),transparent_70%)] px-5 py-20 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[400px_1fr] lg:gap-24 xl:grid-cols-[460px_1fr] xl:gap-32">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-32">
          <h2 data-revelar className="font-display text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-fg lg:text-[52px]">
            Projetos que{" "}
            <em className="font-mono font-medium not-italic text-accent-soft">
              saíram do papel
            </em>
          </h2>

          <ul className="hidden flex-col gap-2 lg:flex">
            {projetos.map((p, i) => (
              <li key={p.title}>
                <button
                  type="button"
                  onClick={() => cards.current[i].scrollIntoView({ behavior: "smooth", block: "center" })}
                  className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left font-display text-lg transition-all duration-500 ease-suave ${
                    ativo === i ? "translate-x-2 bg-surface text-fg" : "bg-surface/40 text-fg/40 hover:text-fg/70"
                  }`}
                >
                  <span className={`font-mono text-xs transition-colors ${ativo === i ? "text-accent" : ""}`}>0{i + 1}</span>
                  {p.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden w-fit items-center gap-4 rounded-xl border border-white/5 bg-black/25 py-1 pl-6 pr-1 backdrop-blur-md lg:flex">
            <span className="text-sm font-medium text-fg">Tem uma ideia em mente?</span>
            <a
              href="#contato"
              className="flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              <MessageCircle className="h-4 w-4" />
              Vamos conversar
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-16 lg:py-[20vh]">
          {projetos.map((project, i) => (
            <article
              key={project.title}
              ref={(el) => (cards.current[i] = el)}
              data-indice={i}
              data-revelar="direita"
              className="group flex flex-col gap-6 rounded-3xl border border-line bg-surface/70 p-5 backdrop-blur-sm sm:p-6 md:p-10"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-3xl font-bold tracking-[-0.03em] text-fg md:text-4xl">{project.title}</h3>
                <span className="font-mono text-xs text-muted">0{i + 1} / 0{projetos.length}</span>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video overflow-hidden rounded-2xl border border-line bg-black/30"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-saida group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </a>

              <p className="text-sm font-medium leading-relaxed text-muted md:text-base">{project.description}</p>

              <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent-soft">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-line px-3 py-1">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 rounded-full bg-fg px-4 py-3 sm:px-5 text-[15px] font-medium text-ink transition-colors hover:bg-white"
                >
                  Ver projeto
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-line px-4 py-3 sm:px-5 text-[15px] font-medium text-soft transition-colors hover:border-accent hover:text-accent"
                >
                  <Github className="h-4 w-4" strokeWidth={1.75} />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
