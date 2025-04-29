import React from 'react';

interface Props {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean; // 나중에 정답 표시 용도
  onSelect: () => void;
}

const AnswerItem: React.FC<Props> = ({ option, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`
        cursor-pointer
        p-4 flex items-center gap-4 w-full h-[50px]
        bg-white rounded-[30px]
        transition-shadow
        ${isSelected ? 'shadow-lg' : 'shadow-sm'}
      `}
    >
      <div
        className={`
          w-6 h-6 rounded-full border-2 border-neutral-700 flex-shrink-0
          transition-colors
          ${isSelected ? 'bg-black' : ''}
        `}
      />
      <div className="text-lg">{option}</div>
    </div>
  );
};

export default AnswerItem;
