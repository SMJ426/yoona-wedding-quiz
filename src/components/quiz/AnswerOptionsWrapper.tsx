'use client';

import React from 'react';
import AnswerItem from './AnswerItem';

type Props = {
  optionsData: string[];
  selectedIndex: number | null;
  onSelect: (idx: number) => void;
};

const AnswerOptionsWrapper: React.FC<Props> = ({
  optionsData,
  selectedIndex,
  onSelect,
}) => {
  return (
    <div className="flex flex-col gap-[15px] ">
      {optionsData.map((option, index) => {
        return (
          <AnswerItem
            option={option}
            index={index}
            key={index}
            isSelected={index === selectedIndex}
            onSelect={() => onSelect(index)}
          />
        );
      })}
    </div>
  );
};

export default AnswerOptionsWrapper;
