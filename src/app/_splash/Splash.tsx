'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ScreenSplashContent: React.FC = () => {
  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        const isUserJoined = localStorage.getItem('isUserJoined');
        if (isUserJoined) {
          router.push('/blockeduser');
        } else {
          router.push('/quiz/explanation');
        }
      }, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className={`flex items-center justify-center w-screen h-screen bg-center bg-no-repeat bg-cover
        ${isFadingOut ? 'animate-fade-out-splash' : 'animate-fade-in-splash'}`}
      style={{ backgroundImage: "url('/images/Splash_image.webp')" }}
    ></div>
  );
};

export default ScreenSplashContent;
