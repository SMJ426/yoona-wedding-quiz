import React from 'react';

type Props = {
  questionsData: string;
};

const QuizQuestion: React.FC<Props> = ({ questionsData }) => {
  return (
    <div className=" flex items-center justify-center w-full h-[100px] font-extrabold text-[25px] text-center">
      <h3>{questionsData}</h3>
    </div>
  );
};

export default QuizQuestion;
