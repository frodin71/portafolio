export default function Contact() {
    return (
      <section id="contact" className="min-h-screen px-6 py-24">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Contacto</h2>
        <p className="text-center text-lg text-gray-600 mb-8">¡Hablemos! Puedes escribirme o seguirme en mis redes.</p>
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">LinkedIn</a>
          <a href="https://www.instagram.com/tuusuario" target="_blank" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-all">Instagram</a>
        </div>
      </section>
    )
  }
  