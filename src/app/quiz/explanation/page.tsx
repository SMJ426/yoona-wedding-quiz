'use client';

import React, { useEffect, useState } from 'react';
import Modal from '../../../components/modal/Modal';

import EasyModeModal from '../../../components/modal/modal/EasyModeModal';
import QuizExplanation from '../../../components/quiz/explanation/QuizExplanation';

const ScreenQuizExplanation: React.FC = ({}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EasyModeModal onClose={() => setShowModal} />
        </Modal>
      )}
      <QuizExplanation />
    </>
  );
};

export default ScreenQuizExplanation;
