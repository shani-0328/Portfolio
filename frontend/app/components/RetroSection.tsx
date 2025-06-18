'use client';

import React from 'react';

interface RetroSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function RetroSection({ 
  id, 
  title, 
  children, 
  variant = 'dark',
  className = ''
}: RetroSectionProps) {

  return (
    <section 
      id={id}
      className={`relative overflow-hidden py-16 md:py-24 ${
        variant === 'dark' 
          ? 'bg-gradient-to-br from-[#0f0f35] to-[#331a6a] text-white' 
          : 'bg-gradient-to-r from-[#1a103f]/10 to-[#331a6a]/10 text-gray-900'
      } ${className}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 cyber-circuit opacity-10 pointer-events-none"></div>
      {variant === 'dark' && <div className="absolute inset-0 scanline opacity-10 pointer-events-none"></div>}
      
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
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-600/10 filter blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-purple-600/10 filter blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16">
          <div className="text-center">
            <h2 className={`text-3xl md:text-4xl font-bold font-[family-name:var(--font-orbitron)] mb-6 ${
              variant === 'dark' ? 'holographic-text' : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600'
            }`}>
              {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto electric-border"></div>
          </div>
        </div>
        
        {children}
      </div>

      {/* Retro wave footer */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L48 50C96 40 192 20 288 16.7C384 13.5 480 26.5 576 33.3C672 40 768 40 864 36.7C960 33.5 1056 26.5 1152 23.3C1248 20 1344 20 1392 20H1440V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" 
            className={variant === 'dark' ? 'fill-cyan-500/10' : 'fill-purple-500/10'} />
        </svg>
      </div>
    </section>
  );
}
