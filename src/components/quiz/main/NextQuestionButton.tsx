import React from 'react';

type Props = {
  onNextQuestionClick: () => void;
  disabled: boolean;
};

const NextQuestionButton: React.FC<Props> = ({
  onNextQuestionClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      onClick={onNextQuestionClick}
      disabled={disabled}
      className={`
        rounded-[30px] w-full flex items-center justify-center h-[50px] mb-[40px]
        font-extrabold text-white
        transition-all
        ${
          disabled
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-neutral-900 hover:bg-neutral-800 cursor-pointer'
        }
      `}
    >
      다음 퀴즈
    </button>
  );
};

export default NextQuestionButton;
