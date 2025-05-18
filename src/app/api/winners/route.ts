import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
// 캐시가 돼서 추가한 로직
export const dynamic = 'force-dynamic';

export async function GET() {
  const client = await clientPromise;
  const db = client.db('wedding_quiz');
  const col = db.collection('entries');

  // 전체 목록 가져오기
  const allEntries = await col
    .find({}, { projection: { name: 1, phone: 1, score: 1, _id: 0 } })
    .toArray();

  // 1) 전체 인원 중 랜덤 추출
  const randomFromAll =
    allEntries[Math.floor(Math.random() * allEntries.length)];

  // 2) 3개 다 맞춘 인원 중 랜덤 추출
  const perfectEntries = allEntries.filter((entry) => entry.score === 3);
  const randomFromPerfect =
    perfectEntries.length > 0
      ? perfectEntries[Math.floor(Math.random() * perfectEntries.length)]
      : null;

  return NextResponse.json({
    perfectScoreWinner: randomFromPerfect,
    randomWinner: randomFromAll,
  });
}
