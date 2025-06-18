'use client';

import { useEffect } from 'react';

export default function ThemeForceDark() {
  useEffect(() => {
    // Always enforce dark mode
    document.documentElement.classList.add('dark-theme');
    document.documentElement.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    
    // Override any system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    
    function handleThemeChange() {
      // Always enforce dark mode regardless of system changes
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    }
    
    mediaQuery.addEventListener('change', handleThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return null;
}
