'use client';

import { useState, useEffect, useRef } from 'react';
import { frontendPortfolioData } from '../utils/frontendData';
import { getAssetPath } from '../utils/assetPath';

interface Portfolio {
  name: string;
  title: string;
  bio: string;
  photo: string;
  social_media: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    [key: string]: string | undefined;
  };
}

export default function HeroRetroModernEnhanced() {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle mouse position for interactive effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      // setMousePosition({ x, y });

      // Update CSS variables for interactive glow effects
      heroRef.current.style.setProperty('--x', `${x}%`);
      heroRef.current.style.setProperty('--y', `${y}%`);
    }
  };  useEffect(() => {
    // Log the frontend data for debugging
    console.log('Frontend Portfolio Data:', frontendPortfolioData);
    
    // Simulate loading delay for consistency with other components
    const timer = setTimeout(() => {
      // Use the frontend data directly
      const portfolioData = {
        name: frontendPortfolioData.name,
        title: frontendPortfolioData.title,
        bio: frontendPortfolioData.bio,
        photo: frontendPortfolioData.photo,
        social_media: frontendPortfolioData.social_media
      };
      
      // Log the data being set to state
      console.log('Setting portfolio data:', portfolioData);
      
      setPortfolio(portfolioData);
      setLoading(false);
    }, 300); // 300ms delay to simulate API call
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="dna-loader"></div>
        <div className="ml-4 font-[family-name:var(--font-orbitron)] text-cyan-400 typing-effect">
          Loading...
        </div>
      </div>
    );
  }
  return (
    <div
      ref={heroRef}
      className="min-h-screen relative overflow-hidden cyber-circuit hex-pattern"
      style={{
        backgroundImage: 'linear-gradient(135deg, #0f0f35 0%, #1c1252 50%, #331a6a 100%)',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full vhs-effect opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-full digital-distortion"></div>

      {/* Enhanced glowing orbs - decorative elements */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-blue-600/40 filter blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-purple-600/40 filter blur-3xl animate-float-medium"></div>
      <div className="absolute bottom-40 right-40 w-64 h-64 rounded-full bg-pink-600/30 filter blur-2xl floating float-delay-2"></div>
      <div className="absolute top-40 left-40 w-48 h-48 rounded-full bg-cyan-500/30 filter blur-2xl floating float-delay-1"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        {/* Left side - text content */}
        <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
          <h1 className="font-[family-name:var(--font-orbitron)] text-5xl md:text-6xl font-bold mb-4 holographic-text">
            <span className="block">Hi, I&apos;m</span>
            <span className="block mt-2 flicker-text">{portfolio?.name || 'Shanika Wijenayake'}</span>
          </h1>

          <div className="inline-block bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-1 rounded-md mb-8 electric-border">
            <h2 className="font-[family-name:var(--font-vt323)] text-2xl text-black font-bold">
              {portfolio?.title || 'Software Developer'}
            </h2>
          </div>

          {/* Enhanced code card with improved 3D effect */}
          <div className="backdrop-blur-md bg-black/40 rounded-lg p-6 mb-8 border border-cyan-500/30 layered-card tilt-effect shadow-lg shadow-cyan-900/30">
            <div className="flex items-center mb-2">
              <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
              <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="font-[family-name:var(--font-geist-mono)] text-white text-opacity-90 data-stream">
              <span className="text-cyan-400">const</span> <span className="text-green-400">developer</span> = {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-300">skills</span>: <span className="text-blue-300">&quot;Full-stack development&quot;</span>,
              <br />
              &nbsp;&nbsp;<span className="text-yellow-300">passion</span>: <span className="text-blue-300">&quot;Clean code & beautiful UIs&quot;</span>,
              <br />
              &nbsp;&nbsp;<span className="text-yellow-300">specialty</span>: <span className="text-blue-300">&quot;Modern frameworks & techniques&quot;</span>
              <br />
              {"}"};
            </div>
          </div>
          {/* Enhanced buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="font-[family-name:var(--font-orbitron)] px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-md shadow-lg shadow-blue-600/30 transition-all duration-300 flex items-center button-3d interactive-glow"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-8.486 8.486l4.243 4.243 4.243-4.243a6 6 0 000-8.486z" clipRule="evenodd" />
              </svg>
              Get In Touch
            </a>
            <a
              href="#projects"
              className="font-[family-name:var(--font-orbitron)] px-8 py-3 bg-gradient-to-r from-cyan-400/80 to-cyan-600/80 text-white rounded-md flex items-center shadow-lg shadow-cyan-600/30 hover:-translate-y-1 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              View Projects
            </a>            <a
              href="/resume"
              className="font-[family-name:var(--font-orbitron)] px-8 py-3 bg-gradient-to-r from-amber-400/20 to-amber-500/20 text-yellow-300 border-2 border-yellow-400/70 rounded-md hover:bg-yellow-500/20 transition-all duration-300 flex items-center shadow-lg shadow-amber-900/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
              Resume
            </a>
          </div>
          {/* Enhanced social icons */}
          <div className="mt-8 flex space-x-6">
            {portfolio?.social_media?.github && (
              <a
                href={portfolio.social_media.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-cyan-500/30 group-hover:border-cyan-400 group-hover:scale-110">
                  <svg className="h-5 w-5 text-white group-hover:text-cyan-200" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            )}
            {portfolio?.social_media?.linkedin && (
              <a
                href={portfolio.social_media.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-blue-500/30 group-hover:border-blue-400 group-hover:scale-110">
                  <svg className="h-5 w-5 text-white group-hover:text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
              </a>
            )}
            {portfolio?.social_media?.twitter && (
              <a
                href={portfolio.social_media.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-purple-500/30 group-hover:border-purple-400 group-hover:scale-110">
                  <svg className="h-5 w-5 text-white group-hover:text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
              </a>
            )}
          </div>
        </div>        {/* Right side - Enhanced profile photo with effects */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80">
            {/* Circle path for skill tags */}
            <div className="absolute inset-0 rounded-full border-4 border-white/20 pulse-border"></div>

            {/* SVG tracing outline effect */}
            <div className="absolute inset-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="48" 
                  stroke="url(#blue-gradient)" 
                  strokeWidth="0.5" 
                  strokeDasharray="10,5" 
                  strokeLinecap="round"
                  style={{ animation: 'trace-outline 8s linear infinite' }}
                />
                <defs>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4FACFE" />
                    <stop offset="100%" stopColor="#00F2FE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Animated decorative elements behind the image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/40 to-blue-500/40 blur-lg"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md animate-pulse"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-transparent blur-md"></div>
            
            {/* Rotating border effect */}
            <div className="absolute inset-6 rounded-full border-2 border-dashed border-cyan-300/50 rotating-border"></div>
            
            {/* Pulsing highlight effect */}
            <div className="absolute inset-9 rounded-full bg-gradient-to-tr from-blue-400/10 to-purple-500/10 pulsing-highlight"></div>
            
            {/* Enhanced profile photo with glitch effect */}
            <div className="absolute inset-10 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl shadow-cyan-700/30 glitch-image-wrap">
              {/* Professional shine effect */}
              <div className="profile-shine"></div>
            </div>
              <div className="absolute inset-12 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl shadow-cyan-700/30 glitch-image-wrap profile-shadow-effect">
              {/* Use standard img tag to avoid Next.js Image issues */}
              <img
                src={getAssetPath(portfolio?.photo || '/images/profile.jpg')} 
                alt={portfolio?.name || 'Developer'}
                className="object-cover w-full h-full profile-zoom"
                style={{ transform: 'scale(1.05)' }}
              />
                {/* Professional shine effect */}
              <div className="profile-shine"></div>
            </div>            {/* Animated skill tags with enhanced floating animations - positioned more prominently */}
            <div className="absolute top-0 transform -translate-y-12 bg-gradient-to-r from-red-500 to-red-600 text-white px-5 py-2 text-sm font-bold rounded-full shadow-lg shadow-red-700/50 float-rotate z-10" style={{ filter: 'drop-shadow(0 0 5px rgba(239, 68, 68, 0.7))' }}>
              React
            </div>
            <div className="absolute left-0 top-1/2 transform -translate-x-20 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-5 py-2 text-sm font-bold rounded-full shadow-lg shadow-cyan-700/50 float-rotate float-rotate-delay-3 z-10" style={{ filter: 'drop-shadow(0 0 5px rgba(6, 182, 212, 0.7))' }}>
              Node.js
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-20 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 text-sm font-bold rounded-full shadow-lg shadow-blue-700/50 float-rotate float-rotate-delay-2 z-10" style={{ filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.7))' }}>
              TypeScript
            </div>
            <div className="absolute bottom-0 transform translate-y-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-2 text-sm font-bold rounded-full shadow-lg shadow-purple-700/50 float-rotate float-rotate-delay-1 z-10" style={{ filter: 'drop-shadow(0 0 5px rgba(147, 51, 234, 0.7))' }}>
              Laravel
            </div>
          </div>
        </div>
      </div>
      {/* Scanline overlay for CRT effect */}
      <div className="absolute inset-0 pointer-events-none scanline opacity-10"></div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 cyber-circuit opacity-20"></div>      {/* Enhanced animated retro waveform decoration at the bottom */}
      <div className="absolute bottom-0 w-full data-stream">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 100C96 80 192 40 288 33.3C384 27 480 53 576 66.7C672 80 768 80 864 73.3C960 67 1056 53 1152 46.7C1248 40 1344 40 1392 40H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-cyan-500/20" />
          <path d="M0 120L48 100C96 80 192 40 288 33.3C384 27 480 53 576 66.7C672 80 768 80 864 73.3C960 67 1056 53 1152 46.7C1248 40 1344 40 1392 40H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-white/10"
            style={{ transform: 'translateY(10px)' }} />
        </svg>
      </div>
    </div>
  );
}
