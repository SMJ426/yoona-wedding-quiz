'use client';

import React from 'react';
import AnswerItem from './AnswerItem';

type Props = {
  optionsData: string[];
  answerIndex: number;
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const AnswerOptionsWrapper: React.FC<Props> = ({
  optionsData,
  answerIndex,
  selectedIndex,
  setSelectedIndex,
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
            onSelect={() => setSelectedIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default AnswerOptionsWrapper;
