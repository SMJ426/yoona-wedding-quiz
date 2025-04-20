'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const ScreenQuizExplanation: React.FC = ({}) => {
  const router = useRouter();
  const handleClickButton = () => {
    router.push('/quiz/entryform');
  };

  return (
    <StyledWrapper>
      <div className="wrapper-card">
        <img src="/images/gifts-list.png" alt="상품목록이미지" />
        <div className="wrapper-info">
          <p className="info-title">신랑신부 퀴즈 챌린지!</p>
          <p>우리의 소중한 추억을 얼마나 알고 계신가요?</p>
          <p>
            재미있는 퀴즈를 풀고 특별한 선물과 함께 이 특별한 날을 더욱 기억에
            남게 해주세요!
          </p>
        </div>
        <button type="button" onClick={handleClickButton}>
          퀴즈 풀러 가기
        </button>
      </div>
    </StyledWrapper>
  );
};

export default ScreenQuizExplanation;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .wrapper-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    padding: 15px;
    background-color: white;
    width: 300px;
    height: 370px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);

    > img {
      width: 90%;
      height: 100px;
      object-fit: cover;
      border-radius: 15px;
      margin-top: 15px;

      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -2px rgba(0, 0, 0, 0.1);
    }

    .wrapper-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;

      text-align: center;
      font-family: 'GowunDodum-Regular', 'Apple SD Gothic Neo', 'Noto Sans KR',
        sans-serif;

      > p {
        margin: 0;
      }

      .info-title {
        font-weight: bold;
        font-size: 20px;
      }
    }

    > button {
      background-color: skyblue;
      border: none;
    }
  }
`;
