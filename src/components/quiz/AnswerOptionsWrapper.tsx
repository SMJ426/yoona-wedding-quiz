'use client';

import React from 'react';
import AnswerItem from './AnswerItem';

type Props = {
  optionsData: string[];
  answerIndex: number;
  selectedIndex: number | null;
  onSelect: (idx: number) => void;
};

const AnswerOptionsWrapper: React.FC<Props> = ({
  optionsData,
  answerIndex,
  selectedIndex,
  onSelect,
}) => {
  return (
    <div className=" flex flex-col gap-[15px] ">
      {optionsData.map((option, index) => {
        return (
          <AnswerItem
            option={option}
            index={index}
            key={index}
            isCorrect={index === answerIndex}
            isSelected={index === selectedIndex}
            onSelect={() => onSelect(index)}
          />
        );
      })}
    </div>
  );
};

export default AnswerOptionsWrapper;
