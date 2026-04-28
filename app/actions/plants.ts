'use server';

import { revalidatePath } from 'next/cache';
import { markTaskDoneSchema } from '@/lib/schemas';
import { updateTaskDone } from '@/lib/data';

export async function markTaskDoneAction(raw: unknown) {
  const input = markTaskDoneSchema.parse(raw);
  await updateTaskDone(input.taskId, input.done);
  revalidatePath('/');
}
