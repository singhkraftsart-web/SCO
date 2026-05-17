import { NextResponse } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

type Lead = { name?: string; phone?: string; goal?: string; time?: string; kind?: string };
const memoryLeads: Array<Lead & { createdAt: string }> = [];

export async function POST(request: Request) {
  const body = (await request.json()) as Lead;
  if (!body.name || !body.phone) return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
  const lead = { name: String(body.name), phone: String(body.phone), goal: String(body.goal || ''), time: String(body.time || ''), kind: String(body.kind || 'demo'), createdAt: new Date().toISOString() };
  const client = await getMongoClient();
  if (client) await client.db(process.env.MONGODB_DB || 'speakup').collection('leads').insertOne(lead);
  else memoryLeads.push(lead);
  if (process.env.LEAD_NOTIFY_WEBHOOK_URL) await fetch(process.env.LEAD_NOTIFY_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
  return NextResponse.json({ ok: true });
}

export async function GET() {
  const client = await getMongoClient();
  if (client) {
    const leads = await client.db(process.env.MONGODB_DB || 'speakup').collection('leads').find({}).sort({ createdAt: -1 }).limit(100).toArray();
    return NextResponse.json({ leads });
  }
  return NextResponse.json({ leads: memoryLeads.slice().reverse() });
}
