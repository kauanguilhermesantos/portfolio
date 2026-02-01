export default function Header() {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between p-6 bg-gray-900 backdrop-blur-md text-gray-300"
        >
            <h1 className="font-bold text-3xl bg-linear-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"><a href="/">Kauan Santos</a></h1>
            <div>
                <nav>
                    <ul className="flex space-x-8 justify-center items-center">
                        <li><a href="#sobre">Sobre mim</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li className="bg-blue-900 py-1 px-3 rounded-md"><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}