'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { usePortfolio } from '../utils/apiHooks';

export default function ResumePage() {
  const router = useRouter();
  const { data: portfolio } = usePortfolio();
  const downloadInitiated = useRef(false);

  useEffect(() => {
    if (portfolio && !downloadInitiated.current) {
      downloadInitiated.current = true;

      // Create an anchor element and trigger download
      const link = document.createElement('a');
      link.href = portfolio.resume;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Navigate back to home page after a short delay
      setTimeout(() => {
        router.push('/');
      }, 500);
    }
  }, [portfolio, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Downloading Resume...</h1>
        <p className="mb-6">Your download should start automatically.</p>
        <p>If the download doesn&apos;t begin, <a href={portfolio?.resume} download className="text-blue-400 underline">click here</a>.</p>
      </div>
    </div>
  );
}
