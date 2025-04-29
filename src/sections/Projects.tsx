import { projects } from '../constants/projects'

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-24">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} data-aos={index % 2 === 0 ? "fade-up" : "fade-right"} data-aos-delay={`${index * 100}`} className="group border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 bg-white/70 backdrop-blur-md duration-300">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-200 px-2 py-1 rounded text-xs">{tech}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a href={project.linkDemo} target="_blank" className="text-indigo-600 hover:underline text-sm">Ver Demo</a>
              <a href={project.linkCode} target="_blank" className="text-gray-600 hover:underline text-sm">Código</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
