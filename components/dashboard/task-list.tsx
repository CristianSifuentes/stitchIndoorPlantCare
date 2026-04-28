'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { markTaskDoneAction } from '@/app/actions/plants';
import type { CareTask } from '@/lib/types';

async function fetchTasks(): Promise<CareTask[]> {
  const response = await fetch('/api/plants/tasks');
  return response.json();
}

export function TaskList() {
  const queryClient = useQueryClient();
  const { data = [] } = useQuery({ queryKey: ['tasks'], queryFn: fetchTasks });

  const mutation = useMutation({
    mutationFn: (task: { taskId: string; done: boolean }) => markTaskDoneAction(task),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="mb-6 text-3xl font-bold">Care Tasks</h3>
      <div className="space-y-4">
        {data.map((task) => (
          <label key={task.id} className={`flex items-start gap-3 ${task.done ? 'opacity-50' : ''}`}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={(event) => mutation.mutate({ taskId: task.id, done: event.target.checked })}
              className="mt-1 size-4 rounded border-slate-300"
            />
            <div className="flex-1">
              <p className="font-bold">{task.title}</p>
              <p className="text-sm text-slate-500">{task.detail}</p>
            </div>
            <span className={`text-xs font-bold ${task.urgent ? 'text-accent-terracotta' : 'text-slate-400'}`}>{task.time}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
