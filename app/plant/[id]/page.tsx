import Image from 'next/image';
import Link from 'next/link';
import { getPlantById } from '@/lib/data';
import { Sidebar } from '@/components/shared/sidebar';
import { DiagnosticsPanel } from '@/components/profile/diagnostics-panel';

export default async function PlantProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const plant = await getPlantById(id);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 space-y-8 p-10">
        <div className="flex items-center gap-4 text-3xl font-bold">
          <Link href="/">←</Link>
          <h2>Plant Profile</h2>
        </div>

        <section className="grid gap-8 xl:grid-cols-[1fr_360px]">
          <div className="relative h-[460px] overflow-hidden rounded-3xl">
            <Image src={plant.image} alt={plant.commonName} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-7xl font-extrabold">{plant.commonName} {plant.scientificName}</h1>
              <p className="text-3xl italic text-slate-300">Swiss Cheese Plant</p>
            </div>
          </div>
          <aside className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="mb-8 text-4xl font-bold">Quick Care Status</h3>
            <ul className="space-y-6 text-xl">
              <li><span className="font-bold">Soil Moisture:</span> 75% Optimal Range</li>
              <li><span className="font-bold">Exposure:</span> Bright Indirect</li>
              <li><span className="font-bold">Temperature:</span> {plant.tempC}°C (Ideal)</li>
            </ul>
            <button className="mt-8 w-full rounded-2xl bg-primary py-4 text-lg font-bold text-white">Log Watering</button>
          </aside>
        </section>

        <DiagnosticsPanel />
      </main>
    </div>
  );
}
