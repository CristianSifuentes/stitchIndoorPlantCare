import Image from 'next/image';
import Link from 'next/link';
import { getPlants } from '@/lib/data';

const statusStyle: Record<string, string> = {
  thriving: 'bg-primary text-white',
  healthy: 'bg-primary/80 text-white',
  'needs-water': 'bg-accent-terracotta text-white',
};

export async function PlantCards() {
  const plants = await getPlants();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {plants.map((plant) => (
        <Link key={plant.id} href={`/plant/${plant.id}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
          <div className="relative h-48">
            <Image src={plant.image} alt={plant.commonName} fill className="object-cover" />
            <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase ${statusStyle[plant.status]}`}>
              {plant.status.replace('-', ' ')}
            </span>
          </div>
          <div className="space-y-2 p-4">
            <h4 className="text-3xl font-bold leading-none">{plant.commonName}</h4>
            <p className="text-sm italic text-slate-500">{plant.scientificName}</p>
            <p className="pt-1 text-sm text-slate-600">💧 {plant.nextWatering} · ☀️ {plant.light} · 🌡️ {plant.tempC}°C</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
