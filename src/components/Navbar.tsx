import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', offset: document.getElementById('home')?.offsetTop || 0 },
        { id: 'projects', offset: document.getElementById('projects')?.offsetTop || 0 },
        { id: 'contact', offset: document.getElementById('contact')?.offsetTop || 0 },
      ]

      const scrollPosition = window.scrollY + 150
      const currentSection = sections.reduce((acc, section) => {
        return scrollPosition >= section.offset ? section.id : acc
      }, 'home')

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Mi Portafolio</h1>

        {/* Botón Hamburguesa */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú en Desktop */}
        <div className="hidden lg:flex space-x-8 text-lg">
          <NavLink href="#home" activeSection={activeSection} closeMenu={closeMenu}>Inicio</NavLink>
          <NavLink href="#projects" activeSection={activeSection} closeMenu={closeMenu}>Proyectos</NavLink>
          <NavLink href="#contact" activeSection={activeSection} closeMenu={closeMenu}>Contacto</NavLink>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="flex flex-col items-center space-y-6 bg-indigo-500 py-6 lg:hidden">
          <NavLink href="#home" activeSection={activeSection} closeMenu={closeMenu}>Inicio</NavLink>
          <NavLink href="#projects" activeSection={activeSection} closeMenu={closeMenu}>Proyectos</NavLink>
          <NavLink href="#contact" activeSection={activeSection} closeMenu={closeMenu}>Contacto</NavLink>
        </div>
      )}
    </nav>
  )
}

function NavLink({
  href,
  children,
  activeSection,
  closeMenu,
}: {
  href: string
  children: React.ReactNode
  activeSection: string
  closeMenu: () => void
}) {
  const id = href.replace('#', '')
  return (
    <a
      href={href}
      onClick={closeMenu}
      className={`hover:text-yellow-300 transition-colors duration-300 ${activeSection === id ? 'underline font-bold' : ''}`}
    >
      {children}
    </a>
  )
}
