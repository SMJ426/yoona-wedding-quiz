import React from 'react';
import styled from 'styled-components';

type Props = {
  questionsData: string;
};

const QuizQuestion: React.FC<Props> = ({ questionsData }) => {
  return (
    <StyledWrapper>
      <h3>{questionsData}</h3>
    </StyledWrapper>
  );
};

export default QuizQuestion;

const StyledWrapper = styled.div``;
