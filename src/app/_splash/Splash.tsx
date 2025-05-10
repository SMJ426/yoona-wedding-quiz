'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ScreenSplashContent: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/quiz/explanation');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-center bg-no-repeat bg-cover animate-fade-in-splash"
      style={{ backgroundImage: "url('/images/Splash_image.webp')" }}
    ></div>
  );
};

export default ScreenSplashContent;
