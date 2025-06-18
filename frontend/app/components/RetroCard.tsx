'use client';

import React from 'react';

interface RetroCardProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'glass';
  hoverEffect?: boolean;
  className?: string;
}

export default function RetroCard({ 
  children, 
  variant = 'dark',
  hoverEffect = true,
  className = '' 
}: RetroCardProps) {
  let baseClasses = 'rounded-lg overflow-hidden shadow-lg transition-all duration-300 ';

  // Variant styling
  if (variant === 'dark') {
    baseClasses += 'bg-black/40 backdrop-blur-md border border-cyan-500/30 ';
  } else if (variant === 'light') {
    baseClasses += 'bg-white/90 backdrop-blur-md border border-white/30 ';
  } else if (variant === 'glass') {
    baseClasses += 'bg-white/10 backdrop-blur-md border border-white/30 ';
  }
  
  // Hover effects
  if (hoverEffect) {
    baseClasses += 'hover:-translate-y-1 layered-card tilt-effect ';
  }
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}
