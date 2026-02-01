import { useEffect, useState } from "react"

const letrasAleatorias = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*"

export default function RevelarNome() {
  const nome = "Kauan Santos"
  const [texto, setTexto] = useState("")

  useEffect(() => {
    let iteracao = 0

    const intervalo = setInterval(() => {
      const novoTexto = nome
        .split("")
        .map((letra, index) => {
          if (index < iteracao) {
            return nome[index]
          }
          return letrasAleatorias[Math.floor(Math.random() * letrasAleatorias.length)]
        })
        .join("")

      setTexto(novoTexto)

      if (iteracao >= nome.length) {
        clearInterval(intervalo)
      }

      iteracao += 1 / 3 // velocidade de decodificação
    }, 60)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <h1 className="text-5xl font-extrabold text-gray-200 bg-clip-text  tracking-wide">
      {texto}
    </h1>
  )
}
