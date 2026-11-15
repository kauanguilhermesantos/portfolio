import { techGroups } from "../data/tecnologias"

const techs = techGroups.flatMap((group) => group.items)

function Lista({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14" aria-hidden={hidden || undefined}>
      {techs.map((tech) => (
        <li key={tech.name} className="flex items-center gap-3 whitespace-nowrap">
          <img src={tech.icon ?? `https://cdn.simpleicons.org/${tech.slug}`} alt="" className="h-7 w-7" loading="lazy" />
          <span className="font-mono text-sm tracking-wide text-soft">{tech.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TechMarquee() {
  return (
    <section aria-label="Tecnologias que utilizo" className="group relative z-10 overflow-hidden rounded-t-[25px] bg-surface pb-4 pt-10">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* lista duplicada: a animação anda -50% e recomeça sem emenda visível */}
        <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
          <Lista />
          <Lista hidden />
        </div>
      </div>
    </section>
  )
}
