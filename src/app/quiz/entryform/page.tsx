'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import QuizAgreementModal from '../../../components/quiz/modal/QuizAgreementModal';

const ScreenQuizEntryForm: React.FC = ({}) => {
  const router = useRouter();
  const [shouldShowModal, setShouldShowModal] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('form 제출');
    router.push('/quiz/main');
  };

  return (
    <div className="relative h-screen">
      {shouldShowModal && (
        <QuizAgreementModal onCloseModal={() => setShouldShowModal(false)} />
      )}
      <form onSubmit={handleSubmit}>
        <label>
          이름
          <input type="text" placeholder="이름을 입력하세요" />
        </label>
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default ScreenQuizEntryForm;
