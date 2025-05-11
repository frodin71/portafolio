import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Header from './components/Header';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';
import { projects } from './data/projects';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <main className="pb-16">
          <Header />
          <ProjectsGrid projects={projects} />
          <ContactSection />
        </main>
        
        <footer className="container mx-auto px-4 sm:px-6 py-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Alfredo Echavarría. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;