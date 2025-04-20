'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const ScreenQuizExplanation: React.FC = ({}) => {
  const router = useRouter();
  const handleClickButton = () => {
    router.push('/quiz/entryform');
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col justify-between items-center rounded-[15px] p-[15px] bg-white w-[300px] h-[370px] shadow-md">
        <img
          className="w-[90%] h-[100px] object-cover rounded-[15px] mt-[15px] shadow-md"
          src="/images/gifts-list.png"
          alt="상품목록이미지"
        />
        <div className="flex flex-col items-center justify-center gap-[10px] text-center text-[14px]">
          <p className="font-bold text-[20px]">신랑신부 퀴즈 챌린지!</p>
          <p>우리의 소중한 추억을 얼마나 알고 계신가요?</p>
          <p>재미있는 퀴즈를 풀고 특별한 선물과 함께</p>
          <p>특별한 날을 더욱 기억에 남게 해주세요!</p>
        </div>
        <button
          type="button"
          onClick={handleClickButton}
          className="border-none bg-emerald-500"
        >
          퀴즈 풀러 가기
        </button>
      </div>
    </div>
  );
};

export default ScreenQuizExplanation;
