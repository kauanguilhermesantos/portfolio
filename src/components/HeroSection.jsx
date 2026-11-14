import Typewriter from "./TypeWriter"
import RevelarNome from "./RevelarNome"
import { Github, Linkedin, Mail, ArrowDown, MessageCircle } from "lucide-react"

const sociais = [
  { label: "GitHub", href: "https://github.com/kauanguilhermesantos", Icon: Github, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/kauan-guilherme-santos", Icon: Linkedin, external: true },
  { label: "Email", href: "mailto:kauanguisantos14@gmail.com", Icon: Mail },
  {
    label: "WhatsApp",
    href: "whatsapp://send?phone=5598989066255&text=Ol%C3%A1%2C%20Kauan.%20Gostaria%20de%20fazer%20parceria%20com%20voc%C3%AA.%20Podemos%20conversar%3F",
    Icon: MessageCircle,
  },
]

export default function HeroSection() {
  return (
    <section className="bg-[radial-gradient(ellipse_50%_60%_at_85%_30%,rgba(59,130,246,0.16),transparent_70%)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-8 px-6 pb-20 pt-32 md:px-12">
        <h1 className="text-center font-display text-6xl font-bold leading-[0.95] tracking-[-0.045em] text-fg sm:text-8xl lg:text-[136px]">
          <RevelarNome />
          <span className="text-accent">.</span>
        </h1>

        <p className="text-center font-display text-2xl tracking-tight text-muted md:text-4xl">
          Desenvolvedor <Typewriter />
        </p>

        <div className="mt-10 flex flex-col gap-10 border-t md:mt-16 border-line pt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[520px] text-lg leading-8 text-soft md:text-xl">
            Desenvolvo soluções digitais eficientes, escaláveis e de alta performance, focadas em resolver problemas reais.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projetos"
              className="group flex items-center gap-2.5 rounded-full bg-accent px-6 py-4 font-medium text-white transition-colors hover:bg-blue-500"
            >
              Ver projetos
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            {sociais.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-line text-soft transition-colors hover:border-accent hover:text-accent"
              >
                <link.Icon className="h-5 w-5" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
