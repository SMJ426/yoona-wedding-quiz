'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const ScreenQuizExplanation: React.FC = ({}) => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col justify-start w-full h-full">
      {/* title section */}
      <div className="p-[20px]">
        <p>Yoona&Heedo Wedding</p>
        <h2 className="font-bold text-[30px]">신랑 신부 퀴즈</h2>
        <div className="text-gray-500 text-[18px] pt-[5px]">
          <p>우리의 소중한 추억을 얼마나 알고 계신가요?</p>
          <p>재미있는 퀴즈를 풀고 특별한 선물과 함께</p>
          <p>특별한 날을 더욱 기억에 남게 해주세요!</p>
        </div>
      </div>
      {/* main image section */}
      <img
        src="/images/main-image.jpg"
        alt="메인 이미지"
        className="h-[250px] object-cover w-screen"
      />
      {/* description section */}
      <div className="p-[20px] text-gray-500 text-[17px] ">
        <ul className="flex flex-col pl-5 list-disc gap-[5px]">
          <li>신랑신부 퀴즈 이벤트는 어떤 어떤 어떤 어떤 취지의 퀴즈입니다.</li>
          <li>
            당첨자는 이벤트 종료 후 결혼식 마지막? 2부?에 따로 안내드려요.
          </li>
          <li>약관에 동의하면 새 글 알림을 보내드려요.</li>
          <li>약관에 동의한 사람만 아티클 전문을 읽을 수 있어요.</li>
        </ul>
      </div>
      {/* '퀴즈풀러 가기' button */}
      <div className="absolute bottom-0 left-0 w-full px-[20px] pb-[20px] bg-white">
        <button
          type="button"
          onClick={() => router.push('/quiz/entryform')}
          className="flex items-center justify-center w-full h-[55px] rounded-[10px] bg-blue-600 font-bold text-[18px] text-white"
        >
          퀴즈 풀기
        </button>
      </div>
    </div>
  );
};

export default ScreenQuizExplanation;
