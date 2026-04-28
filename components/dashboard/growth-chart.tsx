'use client';

import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

export function GrowthChart() {
  const months = [40, 55, 45, 70, 85, 60, 51, 78, 67, 72, 87, 62];
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    horizontal: true,
    count: months.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 70,
  });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8">
      <h3 className="text-3xl font-bold">Growth Tracking</h3>
      <p className="mb-6 text-slate-500">Avg. growth of +2.4cm this month</p>
      <div ref={parentRef} className="overflow-auto">
        <div className="relative h-56" style={{ width: rowVirtualizer.getTotalSize() }}>
          {rowVirtualizer.getVirtualItems().map((item) => (
            <div
              key={item.key}
              className="absolute bottom-0 rounded-t-lg bg-primary/30"
              style={{
                left: item.start,
                width: item.size - 8,
                height: `${months[item.index]}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
