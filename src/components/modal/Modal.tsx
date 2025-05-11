'use client';

import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  if (typeof window === 'undefined') return null;
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-xl w-[80%] max-w-[320px] text-center">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
