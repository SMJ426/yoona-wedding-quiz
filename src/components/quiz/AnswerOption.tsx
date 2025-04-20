import React from 'react';
import styled from 'styled-components';

type Props = {
  answersData: string;
};

const AnswerOption: React.FC<Props> = ({ answersData }) => {
  return <StyledWrapper>답: {answersData}</StyledWrapper>;
};

export default AnswerOption;

const StyledWrapper = styled.div``;
