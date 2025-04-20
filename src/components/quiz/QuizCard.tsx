import React from 'react';
// import styled from 'styled-components';
import ProgressBarSection from './ProgressBarSection';
import QuizQuestion from './QuizQuestion';
import AnswerOptionsWrapper from './AnswerOptionsWrapper';
import { QuizItem } from '../../data/quizType';

type Props = {
  quizData: QuizItem;
  currentQuestion: number;
};

const QuizCard: React.FC<Props> = ({ quizData, currentQuestion }) => {
  return (
    <div>
      <ProgressBarSection quizNumber={currentQuestion + 1} />
      <QuizQuestion questionsData={quizData.question} />
      <AnswerOptionsWrapper
        optionsData={quizData.options}
        answersData={quizData.answer}
      />
    </div>
  );
};

export default QuizCard;

// const StyledWrapper = styled.div``;
