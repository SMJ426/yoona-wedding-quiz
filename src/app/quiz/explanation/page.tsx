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
        <ul className="flex flex-col pl-5 list-disc gap-[8px]">
          <li>
            신랑 신부의 추억을 되새기며 모두가 함께 즐길 수 있는 퀴즈
            이벤트입니다.
          </li>
          <li>
            퀴즈에 참여해주신 분들 중 추첨을 통해 소정의 선물을 드릴 예정이에요.
          </li>
          <li>
            결혼식 2부 순서에서 당첨자와 선물을 발표할 예정이니 많은 참여
            부탁드려요!
          </li>
          <li>간단한 정보 입력 후 바로 퀴즈에 참여하실 수 있어요.</li>
          <li>
            이 퀴즈 페이지는 신부 신유나의 동생 신민재가 직접 만들었어요(자랑)
          </li>
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
