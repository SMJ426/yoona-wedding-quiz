'use client';

import React, { useEffect, useState, useRef } from 'react';
import { answersData } from '../../../data/quizData';

const QuizResult: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  // 최초 실행 여부 체크용
  const hasSubmittedRef = useRef(false);

  useEffect(() => {
    // 이미 제출했으면 중복 실행 방지
    if (hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;

    // 1) localStorage 에서 answers, user 정보 가져오기
    const answers: Array<number | null> = JSON.parse(
      localStorage.getItem('quizAnswers') || '[]'
    );
    const user = JSON.parse(localStorage.getItem('quizUser') || '{}') as {
      name?: string;
      phone?: string;
    };

    // 2) answersData 와 비교해 점수 계산
    const correctCount = answers.reduce<number>((acc, selected, idx) => {
      return selected === answersData[idx] ? acc + 1 : acc;
    }, 0);
    setScore(correctCount);

    // 3) 서버로 유저 퀴즈 입력 form 전송
    if (user.name && user.phone) {
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: user.name,
          phone: user.phone,
          score: correctCount,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            setIsError(true);
            throw new Error('Network response was not ok');
          }
          setSubmitted(true);
          localStorage.clear();
          localStorage.setItem('isUserJoined', 'true');
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full gap-6 px-5 pt-20">
      {/* 퀴즈 완료 제목 */}
      <h2 className="text-4xl font-bold ">🎉 퀴즈 완료!</h2>

      {/* 맞힌 개수 */}
      <p className="text-2xl ">
        맞힌 개수: {score} / {answersData.length}
      </p>

      {isError && !submitted && (
        <p className="text-red-500">
          제출에 실패하였습니다. 잠시후에 재시도 해주세요!
        </p>
      )}

      {/* 제출 문구 */}
      {submitted ? (
        <p className="text-xl text-green-600">성공적으로 제출되었습니다.</p>
      ) : !isError ? (
        <p className="text-xl animate-pulse">제출 중…</p>
      ) : null}

      {/* 퀴즈 부연 설명 */}
      <ul className="flex flex-col gap-2 px-8 py-5 list-disc w-full border border-solid border-blue_gray-500 rounded-[9px] mt-20">
        <li>
          퀴즈에 참여해주신 분들 중 추첨을 통해 소정의 선물을 드릴 예정이에요.
        </li>
        <li>결혼식 2부 순서에서 당첨자와 선물을 발표할 예정입니다.</li>
      </ul>
    </div>
  );
};

export default QuizResult;
