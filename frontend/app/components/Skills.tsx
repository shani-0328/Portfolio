'use client';

import { useState, useEffect } from 'react';
import RetroSection from './RetroSection';
import RetroCard from './RetroCard';
import { useSkills, Skill } from '../utils/apiHooks';

export default function Skills() {
  const { data: skillsData, isLoading, error } = useSkills();
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
    // No default skills - only use API data
  const skills = skillsData;
    useEffect(() => {
    // Extract unique categories from the skills if they exist
    if (skills) {
      const uniqueCategories = ['All', ...new Set(skills.map(skill => skill.category))];
      setCategories(uniqueCategories);
    }
  }, [skills]);

  const filteredSkills = skills ? 
    (activeCategory === 'All' ? skills : skills.filter(skill => skill.category === activeCategory))
    : [];
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="cyber-spinner h-20 w-20"></div>
      </div>
    );
  }
  
  if (error || !skills) {
    return (
      <RetroSection id="skills" title="My Skills" variant="dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-cyan-300 mb-8">Unable to load skills data</p>
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
    <RetroSection id="skills" title="My Skills" variant="dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xl text-cyan-300 max-w-3xl mx-auto text-center mb-12 datastream opacity-80">
          These are the technologies and tools I work with
        </p>
        
        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white electric-border shadow-lg shadow-cyan-400/30'
                  : 'bg-black/30 text-cyan-300 hover:bg-cyan-900/30 border border-cyan-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <RetroCard key={skill.id} variant="dark" className="p-6 hover-scale hover-glow">
              <div className="flex items-center mb-4">                {skill.icon ? (
                  <div className="relative mr-4">
                    <div className="absolute inset-0 bg-cyan-500 opacity-20 rounded-full filter blur-md animate-pulse"></div>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 relative z-10 holo-effect"
                      onError={(e) => {
                        console.log(`Image failed to load: ${skill.icon}`);
                        // Replace with fallback
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/30">
                            <span class="text-white font-bold text-lg">${skill.name.charAt(0)}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-cyan-400/30">
                    <span className="text-white font-bold text-lg">
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-cyan-100 font-[family-name:var(--font-orbitron)]">{skill.name}</h3>
              </div>
              
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-cyan-300">Proficiency</span>
                <span className="text-sm font-medium text-blue-300 font-[family-name:var(--font-geist-mono)]">{skill.proficiency}%</span>
              </div>
              
              <div className="w-full bg-black/50 rounded-full h-2.5 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2.5 rounded-full neon-glow" 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              
              {skill.category && (
                <div className="mt-4">
                  <span className="inline-block bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-cyan-300 border border-cyan-500/30 text-xs px-3 py-1 rounded-full font-[family-name:var(--font-vt323)] hover-pulse">
                    {skill.category}
                  </span>
                </div>
              )}
            </RetroCard>
          ))}
        </div>
      </div>
    </RetroSection>
  );
}
