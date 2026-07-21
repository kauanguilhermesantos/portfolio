import { ArrowUpRight, Github } from "lucide-react"

const projetos = [
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
    <section id="projetos" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-semibold uppercase tracking-widest text-blue-400 mb-8">
          Projetos
        </h2>

        <div className="space-y-16">

          {projetos.map((project, index) => (
            <article
              key={index}
              className="
                group 
                grid 
                md:grid-cols-[280px_1fr] 
                gap-6 
                p-4 
                -mx-4 
                rounded-lg 
                hover:bg-blue-950/40 
                transition-colors
              "
            >

              {/* Imagem */}
              <div className="
                aspect-video 
                md:aspect-[4/3] 
                rounded-lg 
                overflow-hidden 
                bg-blue-950
                border
                border-blue-900
              ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full 
                    h-full 
                    object-cover 
                    group-hover:scale-105 
                    transition-transform 
                    duration-300
                  "
                  loading="lazy"
                />
              </div>


              {/* Conteúdo */}
              <div className="space-y-4">

                <h3 className="
                  text-xl 
                  font-medium 
                  text-blue-200
                  group-hover:text-blue-400
                  transition-colors
                ">
                  {project.title}
                </h3>


                <p className="
                  text-blue-300
                  leading-relaxed
                ">
                  {project.description}
                </p>


                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 
                        py-1 
                        text-xs 
                        font-medium 
                        rounded-full
                        text-blue-200
                        bg-blue-900/60
                        border
                        border-blue-700
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>


                {/* Links */}
                <div className="flex items-center gap-4 pt-2">

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-blue-300
                      hover:text-blue-400
                      transition-colors
                    "
                  >
                    <Github className="w-5 h-5" />
                  </a>


                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-1
                      text-sm
                      text-blue-300
                      hover:text-blue-400
                      transition-colors
                    "
                  >
                    Ver projeto
                    <ArrowUpRight className="w-4 h-4" />
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