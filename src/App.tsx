import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 animate-gradient-xy">
      <Navbar />
      <main className="pt-24 px-4">
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
