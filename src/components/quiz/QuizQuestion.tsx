import React from 'react';
// import styled from 'styled-components';

type Props = {
  questionsData: string;
};

const QuizQuestion: React.FC<Props> = ({ questionsData }) => {
  return (
    <div>
      <h3>{questionsData}</h3>
    </div>
  );
};

export default QuizQuestion;

// const StyledWrapper = styled.div``;
