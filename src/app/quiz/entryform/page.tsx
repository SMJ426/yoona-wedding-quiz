'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const ScreenQuizEntryForm: React.FC = ({}) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('form 제출');
    router.push('/quiz/main');
  };

  return (
    <StyledWrapper onSubmit={handleSubmit}>
      <label>
        이름
        <input type="text" placeholder="이름을 입력하세요" />
      </label>
      <button type="submit">제출</button>
    </StyledWrapper>
  );
};

export default ScreenQuizEntryForm;

const StyledWrapper = styled.form``;
