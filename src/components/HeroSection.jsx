import Typewriter from "./TypeWriter";
import RevelarNome from "./RevelarNome";
import { Github, Linkedin, Mail, ArrowDown, MessageCircle } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-4 text-gray-200">
          <RevelarNome />
        </h1>
        <p className="text-xl md:text-3xl text-center font-medium mb-6 text-blue-500 ">
            Desenvolvedor <Typewriter />
        </p>
        <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed max-w-2xl mb-8 text-blue-300">
          Desenvolvo soluções digitais eficientes, escaláveis e de alta performance, focadas em resolver problemas reais.
        </p>

        <nav className="flex flex-col gap-3 mb-12 text-blue-500 text-2xl">
          <a 
            href="#sobre" 
            className="text-blue-500 hover:text-blue-500 transition-colors flex items-center gap-2 group font-semibold"
          >
            <span className="w-8 h-px bg-blue-500 group-hover:w-16 group-hover:bg-blue-500 transition-all" />
            <span className="uppercase text-sm tracking-widest">Sobre</span>
          </a>
          <a 
            href="#habilidades" 
            className="text-blue-500 hover:text-blue-500 transition-colors flex items-center gap-2 group font-semibold"
          >
            <span className="w-8 h-px bg-blue-500 group-hover:w-16 group-hover:bg-blue-500 transition-all" />
            <span className="uppercase text-sm tracking-widest">Habilidades</span>
          </a>
          <a 
            href="#projetos" 
            className="text-blue-500 hover:text-blue-500 transition-colors flex items-center gap-2 group font-semibold"
          >
            <span className="w-8 h-px bg-blue-500 group-hover:w-16 group-hover:bg-blue-500 transition-all" />
            <span className="uppercase text-sm tracking-widest">Projetos</span>
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/kauanguilhermesantos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/kauan-guilherme-santos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:kauanguisantos14@gmail.com"
            className="text-blue-200 hover:text-blue-500 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="whatsapp://send?phone=5598989066255&text=Ol%C3%A1%2C%20Kauan.%20Gostaria%20de%20fazer%20parceria%20com%20voc%C3%AA.%20Podemos%20conversar%3F"
            className="text-blue-200 hover:text-blue-500 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="text-blue-500 absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown href="#sobre" className="w-8 h-8" />
      </div>
    </section>
    )
}