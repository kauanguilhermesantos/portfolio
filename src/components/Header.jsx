import { useState } from "react"

const links = [
  { name: "Sobre mim", href: "#sobre" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const linha = "absolute left-0 h-[1.5px] w-full bg-fg transition-transform duration-300 ease-suave"

  return (
    <header className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-fit -translate-x-1/2 animate-fade-in-down">
      <div className="flex items-center gap-8 rounded-full border border-line/80 bg-surface/70 py-2.5 pl-6 pr-2.5 shadow-lg shadow-black/40 backdrop-blur-md">
        <a href="/" aria-label="Kauan Santos — início" className="font-mono text-lg font-bold tracking-[-0.04em] text-fg">
          kauan<span className="text-accent">_</span>santos
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 font-mono text-[13px] tracking-wide">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    link.href === "#contato"
                      ? "ml-2 block rounded-full bg-accent px-[18px] py-2.5 font-medium text-white transition-colors hover:bg-blue-500"
                      : "block rounded-full px-4 py-2.5 text-muted transition-colors hover:bg-white/5 hover:text-fg"
                  }
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className="relative h-3 w-5">
            <span className={`${linha} ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`${linha} ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <nav
        className={`absolute inset-x-0 top-full mt-2 origin-top rounded-2xl border border-line bg-surface/95 p-2 shadow-lg shadow-black/40 backdrop-blur-md transition duration-300 ease-suave md:hidden ${
          menuOpen ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <ul className="flex flex-col font-mono text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-soft transition-colors hover:bg-white/5 hover:text-accent"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
