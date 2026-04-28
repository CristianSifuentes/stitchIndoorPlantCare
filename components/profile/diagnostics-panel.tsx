'use client';

import { useState } from 'react';

const symptoms = ['Yellow Leaves', 'Brown Tips', 'Leaf Drop', 'Pests'] as const;

export function DiagnosticsPanel() {
  const [selected, setSelected] = useState<(typeof symptoms)[number]>('Brown Tips');

  return (
    <section className="rounded-3xl border border-emerald-200 bg-white p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-4xl font-bold">Problem Diagnostics</h3>
          <p className="text-slate-500">Identify and resolve health issues with AI-assisted triage.</p>
        </div>
        <button className="rounded-xl bg-primary px-5 py-3 font-bold text-white">Scan with AI</button>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {symptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => setSelected(symptom)}
            className={`rounded-2xl border p-4 text-sm font-bold ${selected === symptom ? 'border-primary bg-emerald-50 text-primary' : 'border-slate-200'}`}
          >
            {symptom}
          </button>
        ))}
      </div>
      <p className="mt-6 text-lg"><span className="font-bold">Result:</span> {selected} likely caused by humidity stress. Recommended action: mist leaves and flush soil salts.</p>
    </section>
  );
}
