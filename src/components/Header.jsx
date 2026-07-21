import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: "Sobre mim", href: "#sobre" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ]

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        flex
        items-center
        justify-between
        px-6
        md:px-12
        py-5
        backdrop-blur-md
        border-b
        border-blue-900/50
      "
    >

      {/* Logo */}
      <h1
        className="
          font-bold
          text-2xl
          md:text-3xl
          bg-linear-to-r
          from-blue-400
          to-blue-700
          bg-clip-text
          text-transparent
        "
      >
        <a href="/">
          Kauan Santos
        </a>
      </h1>


      {/* Menu Desktop */}
      <nav className="hidden md:block">

        <ul className="flex items-center gap-8">

          {links.map((link) => (

            <li key={link.href}>

              <a
                href={link.href}
                className={`
                  text-gray-300
                  hover:text-blue-400
                  transition-colors
                  ${
                    link.name === "Contato"
                      ? `
                        bg-blue-600
                        hover:bg-blue-500
                        text-white
                        px-4
                        py-2
                        rounded-lg
                      `
                      : ""
                  }
                `}
              >
                {link.name}
              </a>

            </li>

          ))}

        </ul>

      </nav>



      {/* Botão Mobile */}
      <button
        className="
          md:hidden
          text-blue-400
        "
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Menu className="w-7 h-7" />
        )}
      </button>



      {/* Menu Mobile */}
      {menuOpen && (

        <nav
          className="
            absolute
            top-full
            left-0
            right-0
            bg-gray-950
            border-b
            border-blue-900
            md:hidden
          "
        >

          <ul
            className="
              flex
              flex-col
              items-center
              gap-6
              py-8
            "
          >

            {links.map((link) => (

              <li key={link.href}>

                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    text-gray-300
                    hover:text-blue-400
                    transition-colors

                    ${
                      link.name === "Contato"
                        ? `
                          bg-blue-600
                          text-white
                          px-5
                          py-2
                          rounded-lg
                        `
                        : ""
                    }
                  `}
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