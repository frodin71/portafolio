import React from 'react';
import { Technology } from '../types';

interface FilterProjectsProps {
  technologies: Technology[];
  selectedTech: Technology | null;
  onSelectTech: (tech: Technology | null) => void;
}

const FilterProjects: React.FC<FilterProjectsProps> = ({ 
  technologies, 
  selectedTech, 
  onSelectTech 
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Filtrar por tecnología</h2>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectTech(null)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
            ${selectedTech === null 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
        >
          Todas
        </button>
        
        {technologies.map(tech => (
          <button
            key={tech}
            onClick={() => onSelectTech(tech)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors
              ${selectedTech === tech 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
          >
            {tech}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterProjects;