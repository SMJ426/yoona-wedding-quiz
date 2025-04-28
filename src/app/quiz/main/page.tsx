'use client';

import React, { useState } from 'react';
import { quizData } from '../../../data/quizData';
import ProgressBar from '../../../components/quiz/main/ProgressBar';
import QuizResult from '../../../components/quiz/main/QuizResult';
import QuizQuestion from '../../../components/quiz/QuizQuestion';
import QuizActions from '../../../components/quiz/QuizActions';
import GoToBackButton from '../../../components/quiz/GoToBackButton';

const ScreenQuizMain: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const totalQuizCount = quizData.length;
  const currentQuizData = quizData[currentQuestionIndex];

  if (quizCompleted) {
    return <QuizResult />;
  }

  const handleClickBackButton = () => {
    if (currentQuestionIndex === 0) return;
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <div className="flex flex-col p-[25px] w-full h-full gap-[40px]">
      {currentQuestionIndex !== 0 && (
        <GoToBackButton onClickBackButton={handleClickBackButton} />
      )}
      <ProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuizCount={totalQuizCount}
      />
      {/* 퀴즈 질문 */}
      <QuizQuestion questionsData={currentQuizData.question} />
      {/* 퀴즈 보기 및 다음 퀴즈 버튼 */}
      <QuizActions
        totalQuizCount={totalQuizCount}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        quizData={currentQuizData}
        setQuizCompleted={setQuizCompleted}
      />
    </div>
  );
};

export default ScreenQuizMain;
