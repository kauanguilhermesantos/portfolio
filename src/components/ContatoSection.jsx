import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

// Numero no formato internacional, apenas digitos (ex.: 55 + DDD + numero)
const WHATSAPP_NUMBER = "5598989066255"
const WHATSAPP_MESSAGE = "Olá, Kauan! Vi seu portfólio e gostaria de conversar sobre uma possível parceria ou projeto. Podemos falar sobre como podemos desenvolver essa ideia?"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="py-20 px-6 md:px-12 lg:px-24 border-t border-blue-900"
    >
      <div className="max-w-2xl mx-auto">

        <h2 className="
          text-sm 
          uppercase 
          tracking-widest 
          text-blue-400 
          mb-4
        ">
          Contato
        </h2>


        <p className="
          text-3xl 
          md:text-4xl 
          font-semibold 
          text-blue-100 
          mb-6
        ">
          Grandes projetos começam com uma boa conversa
        </p>


        <p className="
          text-blue-300 
          leading-relaxed 
          mb-8
        ">
          Compartilhe sua ideia comigo e vamos encontrar a melhor forma de transformar seus objetivos em uma experiência digital incrível.
        </p>



        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            bg-blue-500
            text-white
            rounded-lg
            font-medium
            hover:bg-blue-600
            transition-colors
          "
        >
          <MessageCircle className="w-4 h-4" />
          Chamar no WhatsApp
        </a>



        <div className="flex items-center gap-6 mt-10">

          <a
            href="mailto:kauanguisantos14@gmail.com"
            aria-label="Email"
            className="
              text-blue-300
              hover:text-blue-400
              transition-colors
            "
          >
            <Mail className="w-5 h-5" />
          </a>


          <a
            href="https://github.com/kauanguilhermesantos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-blue-300
              hover:text-blue-400
              transition-colors
            "
          >
            <Github className="w-5 h-5" />
          </a>


          <a
            href="https://linkedin.com/in/kauan-guilherme-santos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-blue-300
              hover:text-blue-400
              transition-colors
            "
          >
            <Linkedin className="w-5 h-5" />
          </a>

        </div>
      </div>
    </section>
  )
}