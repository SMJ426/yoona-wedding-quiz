import React from 'react';
import styled from 'styled-components';

type Props = {
  onNextQuestionClick: () => void;
};

const NextQuestionButton: React.FC<Props> = ({ onNextQuestionClick }) => {
  return (
    <StyledWrapper onClick={onNextQuestionClick}>
      NextQuestionButton
    </StyledWrapper>
  );
};

export default NextQuestionButton;

const StyledWrapper = styled.button``;
