'use client';

import Link from 'next/link';
import { useState } from 'react';
import RetroButton from './RetroButton';
import { scrollToSection } from '../utils/scrollToSection';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/70 backdrop-blur-md border-b border-cyan-500/30 fixed w-full z-50 shadow-lg shadow-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-[family-name:var(--font-orbitron)] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 hover-glow">
              Portfolio
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-cyan-300 hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6 neon-glow-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6 neon-glow-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-cyan-300 hover:text-white hover-glow px-3 py-2 font-[family-name:var(--font-orbitron)] text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-cyan-300 hover:text-white hover-glow px-3 py-2 font-[family-name:var(--font-orbitron)] text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-cyan-300 hover:text-white hover-glow px-3 py-2 font-[family-name:var(--font-orbitron)] text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-cyan-300 hover:text-white hover-glow px-3 py-2 font-[family-name:var(--font-orbitron)] text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
            <RetroButton href="/resume" variant="primary" className="text-sm">
              Resume
            </RetroButton>
          </div>
        </div>
      </div>
        {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-lg border-t border-cyan-500/30">
            <button 
              onClick={() => {
                scrollToSection('about');
                setIsMenuOpen(false);
              }}
              className="block text-cyan-300 hover:text-white font-[family-name:var(--font-orbitron)] hover-glow px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left bg-transparent border-none cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => {
                scrollToSection('projects');
                setIsMenuOpen(false);
              }}
              className="block text-cyan-300 hover:text-white font-[family-name:var(--font-orbitron)] hover-glow px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left bg-transparent border-none cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => {
                scrollToSection('skills');
                setIsMenuOpen(false);
              }}
              className="block text-cyan-300 hover:text-white font-[family-name:var(--font-orbitron)] hover-glow px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left bg-transparent border-none cursor-pointer"
            >
              Skills
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="block text-cyan-300 hover:text-white font-[family-name:var(--font-orbitron)] hover-glow px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
            <div onClick={() => setIsMenuOpen(false)} className="px-3 py-2">
              <RetroButton href="/resume" variant="primary" className="text-sm w-full">
                Resume
              </RetroButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
