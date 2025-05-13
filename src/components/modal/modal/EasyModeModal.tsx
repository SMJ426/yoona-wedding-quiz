'use client';

import React from 'react';
import { useAccessibility } from '../../../app/context/AccessibilityContext';

interface Props {
  onClose: () => void;
}

const EasyModeModal: React.FC<Props> = ({ onClose }) => {
  const { setMode } = useAccessibility();

  const handleEasyMode = () => {
    setMode('easy');
    onClose();
  };

  const handleClickButton = () => {
    onClose();
  };

  return (
    <div className="flex flex-col justify-center h-full gap-4 width-full">
      {/* TODO : 아직 개발중  */}
      <div className="text-[20px] w-[100%] text-black">
        <p>🧓 어르신 모드로 전환할까요?</p>
        {/* <p>전환하시겠습니까?</p> */}
      </div>

      <div className="flex flex-col justify-start items-start text-[15px] text-gray-500">
        <p>어르신 모드로 전환하시면</p>
        <p>쉽게 퀴즈에 참여하실 수 있어요.</p>
      </div>

      <div className="flex items-center justify-center w-full gap-[5%] h-[40px] text-[15px] mt-1">
        <button
          type="button"
          onClick={handleClickButton}
          className="bg-gray-300 w-[50%] h-full rounded-xl active:scale-95 transition-transform duration-100"
        >
          그냥 둘게요
        </button>
        <button
          type="button"
          onClick={handleEasyMode}
          className="bg-blue-600 w-[50%] h-full rounded-xl text-white active:scale-95 transition-transform duration-100"
        >
          전환 할게요
        </button>
      </div>
    </div>
  );
};

export default EasyModeModal;
