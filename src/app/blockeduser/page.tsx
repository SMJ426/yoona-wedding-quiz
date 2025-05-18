import React from 'react';

const ScreenBlockedUser: React.FC = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6">
      <h3 className="text-2xl text-center">
        퀴즈는 한번만 참여할 수 있어요 🥲
      </h3>
      <div className="flex flex-col items-center justify-center text-lg text-center">
        <p>퀴즈 참여에 어려움이 있거나</p>
        <p>오류가 있다면</p>
        <p className="pt-5 text-xl">📞 010-2369-3763으로 연락주세요.</p>
      </div>
    </div>
  );
};

export default ScreenBlockedUser;
