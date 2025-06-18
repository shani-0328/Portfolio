'use client';

import Image from 'next/image';
import RetroSection from './RetroSection';
import RetroCard from './RetroCard';
import RetroButton from './RetroButton';
import { useProjects, Project } from '../utils/apiHooks';

export default function Projects() {
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error || !projects) {
    return (
      <RetroSection id="projects" title="My Projects" variant="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-cyan-300 mb-8">Unable to load projects data</p>
          <p className="text-gray-300 mb-8">There was a problem connecting to the server. Please try again later.</p>
          <button 
            className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      </RetroSection>
    );
  }
  
  return (
    <RetroSection id="projects" title="My Projects" variant="dark">
      <p className="text-xl text-cyan-300 max-w-3xl mx-auto text-center mb-12 font-[family-name:var(--font-vt323)]">
        Check out some of my recent work and personal projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <RetroCard key={project.id} variant="dark" className="overflow-hidden">
            <div className="relative h-60 glitch-image-wrap">
              {project.image ? (
                <Image
                  src={`/images/projects/${project.image}`}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div className="bg-gray-900 h-full w-full flex justify-center items-center">
                  <span className="text-gray-400 text-lg">No Image</span>
                </div>
              )}
              {project.featured && (
                <div className="absolute top-0 left-0 w-full py-2 px-4 featured-tag electric-glow flex items-center justify-center">
                  <span className="inline-block glitch-text text-sm font-semibold font-[family-name:var(--font-orbitron)] z-10" data-text="Featured">Featured</span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-2 font-[family-name:var(--font-orbitron)]">{project.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {typeof project.technologies === 'string' && 
                  JSON.parse(project.technologies).map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-cyan-900/50 text-cyan-300 text-xs px-3 py-1 rounded-full border border-cyan-700/50 float-rotate float-rotate-delay-1"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {tech}
                    </span>
                  ))
                }
              </div>
              
              <div className="flex gap-4">
                {project.github_url && (
                  <RetroButton
                    href={project.github_url}
                    variant="secondary"
                    className="text-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </RetroButton>
                )}
                
                {project.url && (
                  <RetroButton
                    href={project.url}
                    variant="outline"
                    className="text-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </RetroButton>
                )}
              </div>
            </div>
          </RetroCard>
        ))}
      </div>
    </RetroSection>
  );
}
