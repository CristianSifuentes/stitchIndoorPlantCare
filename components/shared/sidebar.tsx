import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white px-6 py-8 lg:flex lg:flex-col lg:justify-between">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold">Sanctuary</h1>
          <p className="text-sm text-slate-500">Home Gardener Pro</p>
        </div>
        <nav className="space-y-2 text-lg">
          <Link href="/" className="block rounded-xl bg-primary px-4 py-3 font-semibold text-white">My Plants</Link>
          <div className="rounded-xl px-4 py-3 text-slate-600">Schedule</div>
          <div className="rounded-xl px-4 py-3 text-slate-600">Plant Tips</div>
          <div className="rounded-xl px-4 py-3 text-slate-600">Green Shop</div>
        </nav>
      </div>
      <div className="rounded-2xl bg-emerald-50 p-5">
        <p className="text-xs font-bold tracking-[0.2em] text-primary">UPGRADE</p>
        <p className="mt-2 text-sm text-slate-600">Get advanced diagnostics for your rare species.</p>
      </div>
    </aside>
  );
}
