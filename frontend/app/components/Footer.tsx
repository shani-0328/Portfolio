'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollToSection';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-[#0f0f35] to-[#020214] text-cyan-100 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-circuit opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 scanline opacity-10 pointer-events-none"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          zIndex: 0
        }}
      ></div>
      
      {/* Glowing orbs - decorative elements */}
      <div className="absolute -bottom-10 left-20 w-72 h-72 rounded-full bg-cyan-600/10 filter blur-3xl"></div>
      <div className="absolute -top-20 right-40 w-64 h-64 rounded-full bg-purple-600/10 filter blur-3xl"></div>
      
      {/* Retro wave header */}
      <div className="absolute top-0 w-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
          <path d="M0 60L48 50C96 40 192 20 288 16.7C384 13.5 480 26.5 576 33.3C672 40 768 40 864 36.7C960 33.5 1056 26.5 1152 23.3C1248 20 1344 20 1392 20H1440V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" 
            className="fill-cyan-500/10" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-orbitron)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 neon-glow-text">Portfolio</h3>
            <p className="text-cyan-200/80 data-stream">
              Showcasing my work and skills in web development and design.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-orbitron)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 neon-glow-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-cyan-300 hover:text-white hover-glow block font-[family-name:var(--font-vt323)] text-lg bg-transparent border-none cursor-pointer text-left p-0"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-cyan-300 hover:text-white hover-glow block font-[family-name:var(--font-vt323)] text-lg bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-cyan-300 hover:text-white hover-glow block font-[family-name:var(--font-vt323)] text-lg bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-cyan-300 hover:text-white hover-glow block font-[family-name:var(--font-vt323)] text-lg bg-transparent border-none cursor-pointer text-left p-0"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-[family-name:var(--font-orbitron)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 neon-glow-text">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/shani-0328" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-cyan-300 p-3 rounded-full hover:-translate-y-1 transition-all shadow-lg shadow-gray-800/50 electric-border"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shanika-wijenayake-999331213" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-full hover:-translate-y-1 transition-all shadow-lg shadow-blue-600/50 electric-border"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-3 rounded-full hover:-translate-y-1 transition-all shadow-lg shadow-cyan-400/50 electric-border"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-cyan-500/30 text-center">
          <p className="text-cyan-300/70 font-[family-name:var(--font-vt323)] text-lg">© {currentYear} 
          <span className="text-white hover-glow"> Shanika</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
