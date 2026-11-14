import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { name: "Sobre mim", href: "#sobre" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Projetos", href: "#projetos" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <a href="/" aria-label="Kauan Santos — início" className="font-mono text-lg font-bold tracking-[-0.04em] text-fg md:text-xl">
          kauan<span className="text-accent">_</span>santos
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 font-mono text-[13px] tracking-wide">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-muted transition-colors hover:text-fg">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                className="rounded-full bg-accent px-[18px] py-2.5 font-medium text-white transition-colors hover:bg-blue-500"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="text-fg md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-ink md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-6 font-mono text-sm">
            {[...links, { name: "Contato", href: "#contato" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-soft transition-colors hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
