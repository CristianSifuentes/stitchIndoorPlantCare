import { cache } from 'react';
import type { CareTask, Plant } from './types';

const plants: Plant[] = [
  {
    id: 'monstera',
    commonName: 'Monstera',
    scientificName: 'Deliciosa',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDU2heiyRmfFQfxoLbqcs2WcaxXXujWByx01J7P5h08ATBk7lMlqB2FxLREluv88zLLG63q9BYNaOl_DiJuG5rxOZ4of490w9ZGDsIN5aMqrnH7u9w9BPxI2mpv4hLQbzYyV5pzUFh6dr_KGZb_YLhCUoogr_2-aGqkQz3DYLPNHi5ZHWPrf2QmS-wv0TSNCMvrx7ro454CZQX89fuilA2rZaDuWLFfeqGJvzbPlr2e_joEolA2rocenv-tdd7IHvfi7tyPLzLPmnk',
    status: 'thriving',
    nextWatering: '2d',
    light: 'Bright',
    tempC: 22,
  },
  {
    id: 'snake-plant',
    commonName: 'Snake Plant',
    scientificName: 'Dracaena trifasciata',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA15ExBQ0hIufTnlnNZ9y1z5hFkJzs3Cru1Alawrc92h_IKdkfDFHen87I48nxbt6kEpVhwmtVQEPS5lNxNLjBB-nMvFC69ApiZdi58-scb_kHIvQvoCwCqp9s7gA8d_vGf0jSNDlh0Ka-Co7uJaSrItrauIoDY9-EI0kTQdjJGt7-kRx4ifKus0j6lb2_HmBdPc3Dfo4sNv7tahj1KY3NgiAqb9653_OzIKcUaXWnY9_vqbaw18lgFlbR6a_xLlOQ_CCA4M4czV9I',
    status: 'needs-water',
    nextWatering: 'Now',
    light: 'Partial',
    tempC: 18,
  },
  {
    id: 'fiddle-leaf',
    commonName: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA17mKQJyU3oRwgxItvBgoNUManDLElN8zNjT5HuVhp9XfWF1NLcN7MfCqo58ZA054ITqgOH1m_8y5I0E1mkreV5I8Vq0Ath0tIdKAFO1JAPRrSpOxzXeBwzxTAXPLwvWDHhfCVEKJ8v8OOjnvBiUklkNUPjcWysGU6dfpVTOTkIBLFWwuGfPVwk2R8MlA-N1ZiaF0U39OyWO5hGQmtsHHq42Q-3VUMP8EB7fcAB3A6bmXTyFJwxo8G_m8Y5fnPlXitKSx4e87IBFE',
    status: 'healthy',
    nextWatering: '5d',
    light: 'Bright',
    tempC: 24,
  },
];

let tasks: CareTask[] = [
  { id: 't1', plantId: 'monstera', title: 'Watering: Monstera', detail: '250ml filtered water', time: 'URGENT', urgent: true, done: false },
  { id: 't2', plantId: 'fiddle-leaf', title: 'Fertilizing: Rubber Plant', detail: 'Liquid nutrient mix', time: '9 AM', done: false },
  { id: 't3', plantId: 'monstera', title: 'Leaf Misting: Fern Collection', detail: 'Increase humidity levels', time: '11 AM', done: false },
  { id: 't4', plantId: 'snake-plant', title: 'Dusting: Pothos', detail: 'Clean leaves with microfiber', time: 'DONE', done: true },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getPlants = cache(async () => {
  await sleep(450);
  return plants;
});

export const getPlantById = cache(async (id: string) => {
  await sleep(300);
  return plants.find((p) => p.id === id) ?? plants[0];
});

export const getCareTasks = cache(async () => {
  await sleep(600);
  return tasks;
});

export async function updateTaskDone(taskId: string, done: boolean) {
  tasks = tasks.map((task) => (task.id === taskId ? { ...task, done } : task));
  return tasks;
}
