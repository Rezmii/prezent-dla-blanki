// src/app/layout.js
import { Inter } from 'next/font/google';
import { patrickHand } from './fonts';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Kocham Cię - 26.07.2025',
    icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>❤️</text></svg>",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${patrickHand.variable}`}>
        {children}
      </body>
    </html>
  );
}