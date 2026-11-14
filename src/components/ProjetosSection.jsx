import { ArrowUpRight, Github } from "lucide-react"

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
  return (
    <section id="projetos" className="scroll-mt-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 md:gap-16 md:px-12 md:py-32">
        <div className="flex flex-col gap-5">
          <h2 data-revelar style={{ "--atraso": "100ms" }} className="font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-fg md:text-5xl">
            Projetos
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-24">
          {projetos.map((project, index) => (
            <article
              key={project.title}
              className={`group flex flex-col gap-8 lg:items-center lg:gap-[72px] ${index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              <a
                data-revelar="imagem"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[16/10] overflow-hidden rounded-[20px] border border-line bg-surface lg:w-[56%] lg:shrink-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </a>

              <div data-revelar style={{ "--atraso": "250ms" }} className="flex flex-col gap-6">
                <h3 className="font-display text-5xl font-bold tracking-[-0.035em] text-fg md:text-[56px]">
                  {project.title}
                </h3>
                <p className="text-[17px] leading-7 text-muted">{project.description}</p>

                <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[13px] text-accent-soft">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-white"
                  >
                    Ver projeto
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-line px-5 py-3 text-[15px] font-medium text-soft transition-colors hover:border-accent hover:text-accent"
                  >
                    <Github className="h-4 w-4" strokeWidth={1.75} />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
