import React from 'react';
// import styled from 'styled-components';

type Props = {
  answersData: string;
};

const AnswerOption: React.FC<Props> = ({ answersData }) => {
  return <div>답: {answersData}</div>;
};

export default AnswerOption;

// const StyledWrapper = styled.div``;
