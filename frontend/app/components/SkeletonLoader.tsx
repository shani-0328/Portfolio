'use client';

import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
      }}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-gray-900 border-2 border-cyan-500/30 rounded-lg overflow-hidden">
      <Skeleton className="h-60 w-full rounded-none" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" variant="text" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" variant="text" />
          <Skeleton className="h-4 w-5/6" variant="text" />
          <Skeleton className="h-4 w-4/6" variant="text" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-10 w-28" />
        </div>
      </div>
    </div>
  );
}

export function SkillCardSkeleton() {
  return (
    <div className="bg-gray-900 border-2 border-cyan-500/30 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Skeleton className="w-12 h-12 mr-4" variant="circular" />
        <Skeleton className="h-6 w-32" variant="text" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" variant="text" />
          <Skeleton className="h-4 w-12" variant="text" />
        </div>
        <Skeleton className="h-2 w-full" />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <Skeleton className="h-48 w-48 mx-auto" variant="circular" />
        <Skeleton className="h-12 w-96 mx-auto" variant="text" />
        <Skeleton className="h-8 w-64 mx-auto" variant="text" />
        <div className="space-y-2 max-w-2xl mx-auto">
          <Skeleton className="h-4 w-full" variant="text" />
          <Skeleton className="h-4 w-5/6 mx-auto" variant="text" />
          <Skeleton className="h-4 w-4/6 mx-auto" variant="text" />
        </div>
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  );
}

// Add shimmer animation to global CSS
export const shimmerStyles = `
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
