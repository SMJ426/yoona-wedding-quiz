'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { quizData } from '../../../data/quizData';
import WrapperQuizItem from '../../../components/quiz/main/WrapperQuizItem';
import NextQuestionButton from '../../../components/quiz/main/NextQuestionButton';

const ScreenQuizMain: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const totalQuizCount = quizData.length;

  const handleNextQuestionClick = () => {
    if (currentQuestion < totalQuizCount - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <StyledWrapper>
      <WrapperQuizItem
        quizData={quizData[currentQuestion]}
        quizCompleted={quizCompleted}
        currentQuestion={currentQuestion}
      />
      <NextQuestionButton onNextQuestionClick={handleNextQuestionClick} />
    </StyledWrapper>
  );
};

export default ScreenQuizMain;

const StyledWrapper = styled.div``;
