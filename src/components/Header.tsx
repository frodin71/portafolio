import React from 'react';
import { socialLinks } from '../data/projects';
import SocialIcons from './SocialIcons';
import ThemeToggle from './ThemeToggle';
import profilePic from '../assets/profile_pic.png';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
          <div className="w-24 h-24 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Alfredo Echavarría</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="mb-4">
            <ThemeToggle />
          </div>
          <SocialIcons links={socialLinks} />
        </div>
      </div>
      
      <div className="mt-8 max-w-3xl mx-auto text-center md:text-left md:mx-0">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Desarrollador apasionado por crear proyectos de calidad y código abierto 🚀
          {/* Passionate frontend developer with expertise in React, TypeScript, and modern CSS. 
          Focused on creating responsive, accessible, and visually appealing web applications 
          that deliver exceptional user experiences. */}
        </p>
      </div>
    </header>
  );
};

export default Header;