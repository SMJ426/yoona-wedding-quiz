'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ScreenSplashContent: React.FC = () => {
  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const isUserJoined = localStorage.getItem('isUserJoined') || false;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        if (isUserJoined) {
          router.push('/blockeduser');
          return;
        }
        router.push('/quiz/explanation');
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-center justify-center w-screen h-screen bg-center bg-no-repeat bg-cover
        ${isFadingOut ? 'animate-fade-out-splash' : 'animate-fade-in-splash'}`}
      style={{ backgroundImage: "url('/images/Splash_image.webp')" }}
    ></div>
  );
};

export default ScreenSplashContent;
