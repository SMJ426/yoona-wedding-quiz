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
      className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="max-h-[50%] overflow-y-auto w-full max-w-md p-6 text-center bg-[#f9f9f9] shadow-lg rounded-t-2xl">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
