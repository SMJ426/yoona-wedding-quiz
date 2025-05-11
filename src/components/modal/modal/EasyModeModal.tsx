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
    <div className="width-[80%] h-[400px] flex flex-col ">
      {/* TODO : 아직 개발중  */}
      <h2 className="text-xl font-extrabold text-red-600">아직 개발중</h2>
      <div>어르신 모드로 전환하시겠습니까?</div>
      <div>
        <button type="button" onClick={handleEasyMode}>
          네, 보기 쉽게 바꿀게요
        </button>
        <button type="button" onClick={handleClickButton}>
          아니요, 그냥 둘게요
        </button>
      </div>
    </div>
  );
};

export default EasyModeModal;
