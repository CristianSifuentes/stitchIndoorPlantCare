import { NextResponse } from 'next/server';
import { getCareTasks } from '@/lib/data';

export async function GET() {
  const tasks = await getCareTasks();
  return NextResponse.json(tasks);
}
