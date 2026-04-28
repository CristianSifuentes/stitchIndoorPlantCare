import { Suspense } from 'react';
import { GrowthChart } from '@/components/dashboard/growth-chart';
import { PlantCards } from '@/components/dashboard/plant-cards';
import { TaskList } from '@/components/dashboard/task-list';
import { Sidebar } from '@/components/shared/sidebar';

function CardsSkeleton() {
  return <div className="h-80 animate-pulse rounded-2xl bg-slate-200" />;
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 lg:p-10">
        <header className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-5xl font-extrabold">Dashboard</h2>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-500">Search species, location or status...</div>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Total Collection</p><p className="text-5xl font-black">24 <span className="text-lg font-medium text-primary">Plants</span></p></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Overall Health</p><p className="text-5xl font-black text-primary">92%</p></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs uppercase tracking-[0.2em] text-slate-400">Upcoming Care</p><p className="text-5xl font-black">12 <span className="text-lg font-medium text-accent-terracotta">Tasks</span></p></div>
        </section>

        <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">Plant Overview</h3>
            <Suspense fallback={<CardsSkeleton />}>
              <PlantCards />
            </Suspense>
            <GrowthChart />
          </div>
          <TaskList />
        </div>
      </main>
    </div>
  );
}
