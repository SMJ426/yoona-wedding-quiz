'use client';

import React, { useState } from 'react';
import QuizAgreementModal from '../../../components/quiz/modal/QuizAgreementModal';
import EntryForm from '../../../components/quiz/entryform/EntryForm';
import { useAccessibility } from '../../context/AccessibilityContext';

const ScreenQuizEntryForm: React.FC = ({}) => {
  const { mode } = useAccessibility();
  const isEasyMode = mode === 'easy';
  const [modalOpen, setModalOpen] = useState(true);

  const shouldShowModal = !isEasyMode && modalOpen;

  return (
    <div className="relative w-full h-screen">
      {/* 개인정보 동의 모달 */}
      {shouldShowModal && (
        <QuizAgreementModal onCloseModal={() => setModalOpen(false)} />
      )}
      {/* 개인정보 input */}
      <EntryForm />
    </div>
  );
};

export default ScreenQuizEntryForm;
