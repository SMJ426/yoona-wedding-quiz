'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useAccessibility } from '../../../app/context/AccessibilityContext';

const QuizExplanation: React.FC = () => {
  const router = useRouter();
  const { mode } = useAccessibility();

  if (mode === 'easy') {
    router.push('/quiz/entryform');
    return null;
  }

  return (
    <div className="flex flex-col justify-start w-full h-screen-dvh ">
      {/* title section */}
      <div className="p-[20px]">
        <p className="text-[13px]">유나와 희도의 결혼식</p>
        <div className="text-gray-500 text-[17px] pt-[5px]">
          <p>우리의 소중한 추억을 얼마나 알고 계신가요?</p>
          <p>퀴즈를 풀고 특별한 선물과 함께</p>
          <p>결혼식을 즐겨주세요!</p>
        </div>
      </div>
      {/* main image section */}
      <img
        src="/images/main-image.webp"
        alt="메인 이미지"
        className="h-[250px] object-cover w-screen"
      />
      {/* description section */}
      <div className="p-[20px] text-gray-500 text-[15px] ">
        <ul className="flex flex-col pl-5 list-disc gap-[8px]">
          <li>
            퀴즈에 참여해주신 분들 중 추첨을 통해 소정의 선물을 드릴
            예정이에요🎁
          </li>
          <li className="font-bold">
            이 퀴즈 페이지는 신부 신유나의 동생 신민재가 직접 만들었어요✌️
          </li>
        </ul>
      </div>
      {/* '퀴즈풀러 가기' button */}
      <div className="w-full p-[20px] bg-[#f9f9f9]">
        <button
          type="button"
          onClick={() => router.push('/quiz/entryform')}
          className="flex items-center justify-center w-full h-[55px] rounded-[10px] bg-blue-600 font-bold text-[18px] text-white active:scale-95 transition-transform duration-100"
        >
          퀴즈 풀기
        </button>
      </div>
    </div>
  );
};

export default QuizExplanation;
