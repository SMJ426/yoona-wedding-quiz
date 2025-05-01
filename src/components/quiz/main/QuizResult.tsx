'use client';

import React, { useEffect, useState, useRef } from 'react';
import { answersData } from '../../../data/quizData';

const QuizResult: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
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

    // 3) 서버 전송
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
          if (!res.ok) throw new Error('Network response was not ok');
          setSubmitted(true);
          localStorage.clear();
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div className="p-6 text-center">
      <h2 className="mb-4 text-2xl font-bold">🎉 퀴즈 완료!</h2>
      <p className="mb-2 text-lg">
        맞힌 개수: {score} / {answersData.length}
      </p>
      {submitted ? (
        <p className="text-green-600">서버에 성공적으로 제출되었습니다.</p>
      ) : (
        <p>제출 중…</p>
      )}
    </div>
  );
};

export default QuizResult;
