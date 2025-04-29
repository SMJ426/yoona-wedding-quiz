import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db('wedding_quiz');
  const col = db.collection('entries');

  // name, score만 가져오기
  const entries = await col
    .find({}, { projection: { name: 1, score: 1 } })
    .toArray();

  // 점수별 그룹핑
  const groups: Record<number, string[]> = {};
  for (const { name, score } of entries) {
    if (!groups[score]) groups[score] = [];
    groups[score].push(name as string);
  }

  return NextResponse.json(groups);
}
