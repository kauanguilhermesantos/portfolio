import { Cpu } from "lucide-react"

const techGroups = [
  {
    title: "Linguagens",
    items: [
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Python", slug: "python" },
      { name: "Java", slug: "java" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "Flask", slug: "flask" },
      { name: "Spring Boot", slug: "spring" },
    ],
  },
  {
    title: "Banco de Dados",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Prisma", slug: "prisma" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", slug: "docker" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
    ],
  },
]

const engineeringSkills = [
  "Arquitetura de Software",
  "Modelagem UML",
  "Levantamento de Requisitos",
  "Modelagem de Banco de Dados",
  "SOLID",
]

export default function HabilidadesSection() {
  return (
    <section
      id="habilidades"
      className="py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold uppercase tracking-widest text-blue-400 mb-8">
          Habilidades e Tecnologias
        </h2>

        <div className="
          grid 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-4
        ">

          {techGroups.map((group) => (

            <article
              key={group.title}
              className="
                p-6
                rounded-xl
                bg-blue-950/40
                border
                border-blue-900
                hover:border-blue-500/50
                transition-colors
              "
            >

              <h3 className="
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-blue-400
                mb-5
              ">
                {group.title}
              </h3>


              <div className="grid grid-cols-3 gap-4">

                {group.items.map((item) => (

                  <div
                    key={item.name}
                    className="
                      flex
                      flex-col
                      items-center
                      gap-2
                      text-center
                    "
                  >

                    <div className="
                      w-12
                      h-12
                      flex
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-900/50
                      hover:bg-blue-800/70
                      transition-colors
                    ">

                      <img
                        src={`https://cdn.simpleicons.org/${item.slug}`}
                        alt={item.name}
                        className="
                          w-6
                          h-6
                          opacity-80
                          hover:opacity-100
                          transition-opacity
                        "
                      />

                    </div>


                    <span className="
                      text-[11px]
                      leading-tight
                      text-blue-300
                    ">
                      {item.name}
                    </span>

                  </div>

                ))}

              </div>

            </article>

          ))}



          {/* Engenharia de Software */}
          <article
            className="
              p-6
              rounded-xl
              bg-blue-950/40
              border
              border-blue-900
              hover:border-blue-500/50
              transition-colors
              sm:col-span-2
              lg:col-span-1
            "
          >

            <div className="flex items-center gap-2 mb-5">

              <Cpu className="w-4 h-4 text-blue-400" />

              <h3 className="
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-blue-400
              ">
                Engenharia de Software
              </h3>

            </div>


            <div className="flex flex-wrap gap-2">

              {engineeringSkills.map((item) => (

                <span
                  key={item}
                  className="
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    bg-blue-900/50
                    text-blue-300
                    border
                    border-blue-800
                    hover:bg-blue-500/20
                    hover:text-blue-100
                    transition-colors
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </article>


        </div>

      </div>
    </section>
  )
}