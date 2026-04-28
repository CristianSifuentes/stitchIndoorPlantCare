import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#17a17e',
        'accent-terracotta': '#E57D5C',
        'accent-sun': '#F7E03B',
        'background-light': '#fafaf9',
        'background-dark': '#1a1f1d',
        'card-dark': '#212c28',
      },
      boxShadow: {
        soft: '0 6px 24px rgba(16, 24, 40, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
