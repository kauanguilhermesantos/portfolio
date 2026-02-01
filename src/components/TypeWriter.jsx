import { useEffect, useState } from "react"

const cargos = [
  "de Software",
  "Frontend",
  "Backend",
  "Fullstack",
  "de Soluções",
]

export default function Typewriter() {
  const [texto, setTexto] = useState("")
  const [indiceCargo, setIndiceCargo] = useState(0)
  const [apagando, setApagando] = useState(false)

  useEffect(() => {
    const cargoAtual = cargos[indiceCargo]
    let speed = apagando ? 50 : 100

    const handleTyping = () => {
      setTexto((prev) =>
        apagando
          ? cargoAtual.substring(0, prev.length - 1)
          : cargoAtual.substring(0, prev.length + 1)
      )

      if (!apagando && texto === cargoAtual) {
        setTimeout(() => setApagando(true), 1200)
      } else if (apagando && texto === "") {
        setApagando(false)
        setIndiceCargo((prev) => (prev + 1) % cargos.length)
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [texto, apagando, indiceCargo])

  return (
    <span className="text-blue-500 border-r-2 border-blue-500 pr-1 ">
      {texto}
    </span>
  )
}
