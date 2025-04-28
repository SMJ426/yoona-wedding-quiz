import React, { Dispatch, SetStateAction, useState } from 'react';
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

  const handleNextQuestionClick = () => {
    if (currentQuestionIndex < totalQuizCount - 1 && selectedIndex !== null) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedIndex(null);
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
        setSelectedIndex={setSelectedIndex}
      />
      <NextQuestionButton
        onNextQuestionClick={handleNextQuestionClick}
        disabled={selectedIndex === null}
      />
    </div>
  );
};

export default QuizActions;
