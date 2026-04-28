import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import { QueryProvider } from '@/providers/query-provider';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plant Sanctuary 2026',
  description: 'Server-first indoor care dashboard built with React 19 + Next App Router.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={jakarta.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
