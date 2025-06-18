'use client';

import RetroSection from './RetroSection';
import RetroCard from './RetroCard';
import RetroButton from './RetroButton';
import { usePortfolio } from '../utils/apiHooks';

export default function About() {
  const { data: portfolio, isLoading, error } = usePortfolio();

  if (isLoading) {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <div className="bg-gray-300 rounded-full h-64 w-64 mx-auto"></div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-4/5 mb-6"></div>
              <div className="h-10 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }  if (error || !portfolio) {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700">Unable to load portfolio data</h2>
          <p className="text-gray-600 mt-4">There was a problem connecting to the server. Please try again later.</p>
          <button 
            className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      </section>
    );
  }  return (
    <RetroSection id="about" title="About Me" variant="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <RetroCard variant="glass" className="p-8">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
            Hello, I&apos;m <span className="holographic-text">{portfolio.name}</span>
          </h3>
          <h4 className="text-xl text-indigo-600 mb-6 font-[family-name:var(--font-vt323)]">{portfolio.title}</h4>
          <p className="text-lg text-white mb-8 leading-relaxed data-stream">
            {portfolio.bio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <div className="flex items-center mb-4 hover-glow">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full p-3 mr-4 shadow-lg shadow-blue-400/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-200">Email</span>
                  <span className="block text-gray-400 font-[family-name:var(--font-geist-mono)]">{portfolio.email}</span>
                </div>
              </div>

              <div className="flex items-center mb-4 hover-glow">
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full p-3 mr-4 shadow-lg shadow-purple-400/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-200">Phone</span>
                  <span className="block text-gray-400 font-[family-name:var(--font-geist-mono)]">{portfolio.phone}</span>
                </div>
              </div>

              <div className="flex items-center mb-4 hover-glow">
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full p-3 mr-4 shadow-lg shadow-green-400/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-200">Location</span>
                  <span className="block text-gray-400">{portfolio.address}</span>
                </div>
              </div>              <RetroButton
                variant="primary"
                href="/resume"
                className="inline-block"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </RetroButton>
            </div>
          </div>
        </RetroCard>        <RetroCard variant="glass" className="p-0 relative overflow-hidden h-full">
          <div className="absolute inset-0 pulse-border z-10"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.33898192772418!2d80.66659371265413!3d7.306202938059056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1750229791139!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="z-0 h-full"
          ></iframe>
        </RetroCard>
      </div>
    </RetroSection>
  );
}
