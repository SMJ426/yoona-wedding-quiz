import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function POST(req: Request) {
  const { name, phone, score } = await req.json();

  // 1) 유효성 검사
  if (!name || !phone || typeof score !== 'number') {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }
  if (!/^010-\d{4}-\d{4}$/.test(phone)) {
    return NextResponse.json(
      { error: 'Invalid phone format' },
      { status: 400 }
    );
  }

  // 2) DB 연결
  const client = await clientPromise;
  const db = client.db('wedding_quiz');
  const col = db.collection('entries');

  // 3) 저장
  await col.insertOne({ name, phone, score, createdAt: new Date() });
  return NextResponse.json({ success: true });
}
