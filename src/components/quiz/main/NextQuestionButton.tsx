import React from 'react';
// import styled from 'styled-components';

type Props = {
  onNextQuestionClick: () => void;
};

const NextQuestionButton: React.FC<Props> = ({ onNextQuestionClick }) => {
  return <div onClick={onNextQuestionClick}>NextQuestionButton</div>;
};

export default NextQuestionButton;

// const StyledWrapper = styled.button``;
