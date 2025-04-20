import React from 'react';
import styled from 'styled-components';

type Props = {
  quizNumber: number;
};

const ProgressBarSection: React.FC<Props> = ({ quizNumber }) => {
  return <StyledWrapper>{quizNumber}</StyledWrapper>;
};

export default ProgressBarSection;

const StyledWrapper = styled.h2``;
