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

// cada pedaço entra com o keyframe "surgir", escalonado pelo atraso
const atraso = (ms) => ({ animationDelay: `${ms}ms` })

export default function HeroSection() {
  return (
    <section className="relative mb-[-25px] h-svh min-h-[640px] overflow-hidden">
      {/* fundo vivo no lugar do vídeo: brilhos azuis flutuando + grade sutil */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -right-[10%] -top-[20%] h-[70vmax] w-[70vmax] animate-flutuar rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.28),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-[30%] -left-[15%] h-[60vmax] w-[60vmax] animate-flutuar rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_60%)] blur-2xl [animation-delay:-7s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-black/20" />

      <div className="relative flex h-full flex-col items-center justify-end gap-8 px-6 pb-16 text-center md:pb-20">
        <p style={atraso(100)} className="animate-surgir font-mono text-base uppercase tracking-[0.2em] text-muted md:text-lg">
          Desenvolvedor <Typewriter />
        </p>

        <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-[-0.045em] text-fg sm:text-8xl lg:text-[136px]">
          <span style={atraso(200)} className="inline-block animate-surgir">
            <RevelarNome />
            <span className="text-accent">.</span>
          </span>
          <span className="mt-2 block text-4xl font-normal tracking-tight text-soft sm:text-5xl lg:text-[64px]">
            <span style={atraso(450)} className="inline-block animate-surgir">código que resolve</span>{" "}
            <em
              className="inline-block animate-surgir pr-2 font-mono not-italic text-accent-soft"
              style={atraso(600)}
            >
              problemas reais
            </em>
          </span>
        </h1>

        <p style={atraso(750)} className="animate-surgir max-w-[440px] text-sm font-medium leading-relaxed text-soft/80 md:text-base">
          Desenvolvo soluções digitais eficientes, escaláveis e de alta performance, focadas em resolver problemas reais.
        </p>

        <div style={atraso(900)} className="flex animate-surgir flex-col items-center gap-5">
          <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-black/25 py-1 pl-6 pr-1 backdrop-blur-md">
            <span className="hidden text-sm font-medium text-fg sm:inline">Sem ruído. Só código limpo, entregue com cuidado.</span>
            <span className="text-sm font-medium text-fg sm:hidden">Código limpo, com cuidado.</span>
            <a
              href="#projetos"
              className="group flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Ver projetos
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            {sociais.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-black/20 text-soft backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <link.Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
