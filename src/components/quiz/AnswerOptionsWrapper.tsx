import React from 'react';
import styled from 'styled-components';
import AnswerOption from './AnswerOption';

type Props = {
  optionsData: string[];
  answersData: string;
};

const AnswerOptionsWrapper: React.FC<Props> = ({
  optionsData,
  answersData,
}) => {
  return (
    <StyledWrapper>
      {optionsData.map((option, index) => {
        return (
          <div className="wrapper-items" key={index}>
            <span>{index + 1}</span>
            <div>{option}</div>
          </div>
        );
      })}
      <AnswerOption answersData={answersData} />
    </StyledWrapper>
  );
};

export default AnswerOptionsWrapper;

const StyledWrapper = styled.div``;
