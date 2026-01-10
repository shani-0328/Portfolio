'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { usePortfolio } from '../utils/apiHooks';

export default function ResumePage() {
  const router = useRouter();
  const { data: portfolio } = usePortfolio();
  const downloadInitiated = useRef(false);

  const handleDownload = async (resumeUrl: string) => {
    try {
      const response = await fetch(resumeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Shanika_Wijenayake_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open(resumeUrl, '_blank');
    }
  };

  useEffect(() => {
    if (portfolio && !downloadInitiated.current) {
      downloadInitiated.current = true;

      handleDownload(portfolio.resume).then(() => {
        setTimeout(() => {
          router.push('/');
        }, 500);
      });
    }
  }, [portfolio, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Downloading Resume...</h1>
        <p className="mb-6">Your download should start automatically.</p>
        <p>
          If the download doesn&apos;t begin,{' '}
          <button
            onClick={() => portfolio && handleDownload(portfolio.resume)}
            className="text-blue-400 underline cursor-pointer bg-transparent border-none"
          >
            click here
          </button>
          .
        </p>
      </div>
    </div>
  );
}
