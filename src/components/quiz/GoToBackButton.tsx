import React from 'react';

type Props = {
  onClickBackButton: () => void;
};

const GoToBackButton: React.FC<Props> = ({ onClickBackButton }) => {
  return (
    <button type="button" onClick={onClickBackButton}>
      뒤로가기
    </button>
  );
};

export default GoToBackButton;
