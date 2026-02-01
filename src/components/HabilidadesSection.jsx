export default function HabilidadesSection() {
    return (
        <section id="habilidades" className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-gray-200 p-8">
            <h2 className="text-4xl font-bold mb-8">Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl w-full">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>React.js</li>
                        <li>Vue.js</li>
                        <li>HTML5 & CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-semibold mb-4">Backend</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Python & Django</li>
                        <li>RESTful APIs</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-semibold mb-4">DevOps</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Docker & Kubernetes</li>
                        <li>AWS & Azure</li>
                        <li>CI/CD Pipelines</li>
                        <li>Monitoring & Logging</li>
                        <li>Infrastructure as Code (IaC)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}