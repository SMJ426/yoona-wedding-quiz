'use client';

import React, { useEffect, useState } from 'react';

interface WinnerItem {
  name: string;
  phone: string;
  score: number;
}

interface Winner {
  perfectScoreWinner: WinnerItem | null;
  randomWinner: WinnerItem[];
}

const ScreenDraw: React.FC = ({}) => {
  const [winners, setWinners] = useState<Winner | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/winners', {
      method: 'GET',
      cache: 'no-store',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data: Winner) => {
        setWinners(data);
      })
      .catch((err) => {
        console.error(err);
        setError('당첨자 정보를 불러오지 못했습니다.');
      });
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <h2 className="text-xl font-bold">3개 다 맞춘 사람</h2>
        {winners?.perfectScoreWinner ? (
          <>
            <p>이름: {winners.perfectScoreWinner.name}</p>
            <p>전화번호: {winners.perfectScoreWinner.phone}</p>
          </>
        ) : (
          <p>정답자 없음</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-bold">전체 참여자 중 무작위 10명</h2>
        {winners?.randomWinner?.map((winner, idx) => (
          <div key={idx}>
            <p>
              {idx + 1}. {winner.name} / {winner.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenDraw;
