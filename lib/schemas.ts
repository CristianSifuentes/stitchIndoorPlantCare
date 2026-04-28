import { z } from 'zod';

export const markTaskDoneSchema = z.object({
  taskId: z.string().min(1),
  done: z.boolean(),
});

export type MarkTaskDoneInput = z.infer<typeof markTaskDoneSchema>;
