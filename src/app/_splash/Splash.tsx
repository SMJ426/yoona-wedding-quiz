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
      style={{ backgroundImage: "url('/images/Splash_image.jpeg')" }}
    >
      <div className="mt-[350px] text-center text-white">
        <h1 className="text-[40px] mb-[10px]">유나와 희도</h1>
        <div className="flex flex-col">
          <span className="px-4 text-[30px]">"퀴즈와 함께하는</span>
          <span className="px-4 text-[30px]">특별한 순간"</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenSplashContent;
