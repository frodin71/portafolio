import Button from '../components/Button'

export default function Home() {
    return (
      <section id="home" className="min-h-screen from-gray-100 via-blue-50 to-white pt-24 flex flex-col items-center justify-center text-center px-4 animate-fadeIn">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
            ¡Hola! Soy <span className="text-indigo-600">[Tu Nombre]</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Desarrollador apasionado por crear proyectos de calidad y código abierto 🚀
          </p>
  
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="#projects" variant="primary">
                Ver Proyectos
            </Button>

            <Button href="/cv.pdf" variant="secondary" download>
                Descargar CV
            </Button>
          </div>

        </div>
      </section>
    )
  }
