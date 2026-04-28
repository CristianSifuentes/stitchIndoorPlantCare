export type PlantStatus = 'thriving' | 'needs-water' | 'healthy';

export interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  image: string;
  status: PlantStatus;
  nextWatering: string;
  light: string;
  tempC: number;
}

export interface CareTask {
  id: string;
  plantId: string;
  title: string;
  detail: string;
  time: string;
  urgent?: boolean;
  done: boolean;
}
