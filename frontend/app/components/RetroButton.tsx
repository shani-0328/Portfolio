'use client';

import React from 'react';

interface RetroButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  download?: boolean | string;
}

export default function RetroButton({ 
  children, 
  variant = 'primary',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  download
}: RetroButtonProps) {
  let baseClasses = 'font-[family-name:var(--font-orbitron)] px-6 py-2.5 rounded-md transition-all duration-300 flex items-center justify-center ';
  
  // Variant styling
  if (variant === 'primary') {
    baseClasses += 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-600/30 hover:-translate-y-1 interactive-glow ';
  } else if (variant === 'secondary') {
    baseClasses += 'bg-gradient-to-r from-cyan-400/80 to-cyan-600/80 text-white shadow-lg shadow-cyan-600/30 hover:-translate-y-1 ';
  } else if (variant === 'outline') {
    baseClasses += 'bg-gradient-to-r from-amber-400/20 to-amber-500/20 text-yellow-300 border-2 border-yellow-400/70 hover:bg-yellow-500/20 shadow-lg shadow-amber-900/20 ';
  }

  if (fullWidth) {
    baseClasses += 'w-full ';
  }

  if (disabled) {
    baseClasses += 'opacity-60 cursor-not-allowed ';
  }
  
  const buttonContent = (
    <>
      {children}
    </>
  );
  
  if (href && !disabled) {
    // Check if it's an external link or download
    const isExternal = href.startsWith('http') || href.startsWith('//');
    const isDownload = download !== undefined;
    
    // Add basePath for internal links in production
    let finalHref = href;
    if (!isExternal && !isDownload) {
      const basePath = '/Portfolio';
      // Only add basePath if it's not already there
      if (!href.startsWith(basePath)) {
        finalHref = `${basePath}${href}`;
      }
    }
    
    // Use regular anchor for all navigation in static export
    return (
      <a 
        href={finalHref}
        className={`${baseClasses} ${className}`}
        onClick={onClick}
        download={download}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      onClick={disabled ? undefined : onClick}
    >
      {buttonContent}
    </button>
  );
}
