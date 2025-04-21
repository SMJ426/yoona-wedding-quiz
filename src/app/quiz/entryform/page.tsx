'use client';

import React, { useState } from 'react';
import QuizAgreementModal from '../../../components/quiz/modal/QuizAgreementModal';
import EntryForm from '../../../components/quiz/entryform/EntryForm';

const ScreenQuizEntryForm: React.FC = ({}) => {
  const [shouldShowModal, setShouldShowModal] = useState(true);

  return (
    <div className="relative h-screen">
      {/* 개인정보 동의 모달 */}
      {shouldShowModal && (
        <QuizAgreementModal onCloseModal={() => setShouldShowModal(false)} />
      )}
      {/* 개인정보 input */}
      <EntryForm />
    </div>
  );
};

export default ScreenQuizEntryForm;
