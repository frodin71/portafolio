import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium rounded-md bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Demo</span>
          </a>
          
          <a 
            href={project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;