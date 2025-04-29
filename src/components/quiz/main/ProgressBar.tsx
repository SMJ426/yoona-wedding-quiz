import React, { useMemo } from 'react';

interface Props {
  totalQuizCount: number;
  currentQuestionIndex: number;
}

const ProgressBar: React.FC<Props> = ({
  totalQuizCount,
  currentQuestionIndex,
}) => {
  const percentage = useMemo(() => {
    return ((currentQuestionIndex + 1) / totalQuizCount) * 100;
  }, [currentQuestionIndex, totalQuizCount]);

  return (
    <div className="flex items-center justify-center space-x-2 mt-[25px]">
      <p className="text-lg font-bold">
        {currentQuestionIndex + 1}/{totalQuizCount}
      </p>

      {/* 바 컨테이너 */}
      <div className="relative w-full h-4 overflow-hidden bg-gray-200 rounded">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-500 ease-linear rounded bg-neutral-900"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
