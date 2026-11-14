import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

// Numero no formato internacional, apenas digitos (ex.: 55 + DDD + numero)
const WHATSAPP_NUMBER = "5598989066255"
const WHATSAPP_MESSAGE = "Olá, Kauan! Vi seu portfólio e gostaria de conversar sobre uma possível parceria ou projeto. Podemos falar sobre como podemos desenvolver essa ideia?"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const TITULO = "Grandes projetos começam com uma boa conversa"

const links = [
  { label: "Email", href: "mailto:kauanguisantos14@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/kauanguilhermesantos", Icon: Github, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/kauan-guilherme-santos", Icon: Linkedin, external: true },
]

export default function ContatoSection() {
  return (
    <>
      <section
        id="contato"
        className="scroll-mt-20 bg-[radial-gradient(ellipse_60%_70%_at_20%_100%,rgba(59,130,246,0.14),transparent_70%)]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-28 pt-28 md:px-12 md:pt-36">
          <h2
            aria-label={TITULO + "."}
            className="max-w-[1100px] font-display text-5xl font-bold leading-none tracking-[-0.045em] text-fg md:text-7xl lg:text-8xl"
          >
            {TITULO.split(" ").map((palavra, i) => (
              // inline-block apaga o espaço do fim, então a separação vem da margem
              <span key={i} aria-hidden data-revelar className="mr-[0.25em] inline-block" style={{ "--atraso": `${i * 70}ms` }}>
                {palavra}
                {i === TITULO.split(" ").length - 1 && <span className="text-accent">.</span>}
              </span>
            ))}
          </h2>

          <div
            data-revelar
            style={{ "--atraso": "500ms" }}
            className="flex flex-col gap-10 pt-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <p className="max-w-[540px] text-lg leading-8 text-soft md:text-xl">
              Compartilhe sua ideia comigo e vamos encontrar a melhor forma de transformar seus objetivos em uma experiência digital incrível.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative isolate flex w-fit items-center gap-3 rounded-full bg-accent px-8 py-5 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_16px_40px_-12px_rgba(59,130,246,0.8)]"
            >
              {/* anel pulsando atrás do botão chama atenção para o CTA */}
              <span aria-hidden className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/40 [animation-duration:2.4s] motion-reduce:hidden" />
              <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-[13px] tracking-wide sm:flex-row sm:items-center sm:justify-between md:px-12">
          <span className="text-muted">© <span className="font-bold text-soft">kauan<span className="text-accent">_</span>santos</span></span>
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex items-center gap-2 text-soft transition-colors hover:text-accent"
                >
                  <link.Icon className="h-4 w-4" strokeWidth={1.75} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}
