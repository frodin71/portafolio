import React, { useState, useMemo } from 'react';
import { Project, Technology } from '../types';
import ProjectCard from './ProjectCard';
import FilterProjects from './FilterProjects';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  
  // Extract unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<Technology>();
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        techSet.add(tech);
      });
    });
    return Array.from(techSet);
  }, [projects]);
  
  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter(project => 
      project.technologies.includes(selectedTech)
    );
  }, [projects, selectedTech]);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Mis Proyectos
      </h2>
      
      <FilterProjects 
        technologies={allTechnologies}
        selectedTech={selectedTech}
        onSelectTech={setSelectedTech}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No projects found with the selected technology.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;