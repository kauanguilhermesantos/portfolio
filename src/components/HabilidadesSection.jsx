import { Cpu } from "lucide-react"
import { techGroups } from "../data/tecnologias"

const engineeringSkills = [
  "Arquitetura de Software",
  "Modelagem UML",
  "Levantamento de Requisitos",
  "Modelagem de Banco de Dados",
  "SOLID",
]

export default function HabilidadesSection() {
  return (
    <section id="habilidades" className="scroll-mt-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 md:gap-16 md:px-12 md:py-32">
        <div className="flex flex-col gap-5">
          <h2 data-revelar style={{ "--atraso": "100ms" }} className="font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-fg md:text-5xl">
            Habilidades e Tecnologias
          </h2>
        </div>

        <div className="border-t border-line">
          {techGroups.map((group, i) => (
            <div key={group.title} data-revelar style={{ "--atraso": `${i * 90}ms` }} className="flex flex-col gap-4 border-b border-line py-7 md:flex-row md:items-center">
              <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-muted md:w-80 md:shrink-0">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="group/pill flex items-center gap-2.5 rounded-full border border-line bg-surface py-2.5 pl-3.5 pr-[18px] text-[15px] font-medium text-fg transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_10px_28px_-12px_rgba(59,130,246,0.6)]"
                  >
                    <img src={item.icon ?? `https://cdn.simpleicons.org/${item.slug}`} alt="" className="h-[18px] w-[18px] transition-transform duration-500 group-hover/pill:rotate-[360deg]" loading="lazy" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div data-revelar style={{ "--atraso": `${techGroups.length * 90}ms` }} className="flex flex-col gap-4 border-b border-line py-7 md:flex-row md:items-center">
            <h3 className="flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.08em] text-accent md:w-80 md:shrink-0">
              <Cpu className="h-4 w-4" />
              Engenharia de Software
            </h3>
            <ul className="flex flex-wrap gap-3">
              {engineeringSkills.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#1e3a66] bg-accent/8 px-[18px] py-2.5 text-[15px] font-medium text-accent-soft transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
