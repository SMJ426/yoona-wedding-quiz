import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import NextQuestionButton from './main/NextQuestionButton';
import { QuizItem } from '../../data/quizType';
import AnswerOptionsWrapper from './AnswerOptionsWrapper';

type Props = {
  totalQuizCount: number;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
  quizData: QuizItem;
  setQuizCompleted: Dispatch<SetStateAction<boolean>>;
};

const QuizActions: React.FC<Props> = ({
  quizData,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  totalQuizCount,
  setQuizCompleted,
}) => {
  // 선택된 보기 인덱스
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const STORAGE_KEY = 'quizAnswers';

  // 1) 최초 로드 혹은 문제 인덱스 변경 시, 배열 초기화 및 복원
  useEffect(() => {
    // 배열이 없으면 길이만큼 null로 초기화
    if (!localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array(totalQuizCount).fill(null))
      );
    }
    const answers = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    ) as Array<number | null>;

    setSelectedIndex(
      answers[currentQuestionIndex] != null
        ? answers[currentQuestionIndex]
        : null
    );
  }, [currentQuestionIndex, totalQuizCount]);

  // 2) 선택이 바뀔 때마다 배열 업데이트
  const handleSelect = (idx: number) => {
    const answers = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    ) as Array<number | null>;

    answers[currentQuestionIndex] = idx;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    setSelectedIndex(idx);
  };

  const handleNextQuestionClick = () => {
    if (currentQuestionIndex < totalQuizCount - 1 && selectedIndex !== null) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-full mt-6 ">
      <AnswerOptionsWrapper
        optionsData={quizData.options}
        answerIndex={quizData.answerIndex}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      />
      <NextQuestionButton
        onNextQuestionClick={handleNextQuestionClick}
        disabled={selectedIndex === null}
      />
    </div>
  );
};

export default QuizActions;
