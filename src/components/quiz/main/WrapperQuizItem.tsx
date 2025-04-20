import React, { useState } from 'react';
import styled from 'styled-components';
import { QuizItem } from '../../../data/quizType';
import QuizResults from '../QuizResults';
import QuizCard from '../QuizCard';

type Props = {
  quizData: QuizItem;
  quizCompleted: boolean;
  currentQuestion: number;
};

const WrapperQuizItem: React.FC<Props> = ({
  quizData,
  quizCompleted,
  currentQuestion,
}) => {
  return (
    <StyledWrapper>
      {quizCompleted ? (
        <QuizResults />
      ) : (
        <QuizCard quizData={quizData} currentQuestion={currentQuestion} />
      )}
    </StyledWrapper>
  );
};

export default WrapperQuizItem;

const StyledWrapper = styled.div``;
