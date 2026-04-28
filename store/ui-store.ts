import { create } from 'zustand';

interface UIState {
  locale: 'en' | 'es';
  setLocale: (locale: 'en' | 'es') => void;
}

export const useUIStore = create<UIState>((set) => ({
  locale: 'en',
  setLocale: (locale) => set({ locale }),
}));
