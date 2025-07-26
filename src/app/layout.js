// src/app/layout.js
import { Inter } from 'next/font/google';
import { patrickHand } from './fonts';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Wyjątkowa Laurka dla Blanki',
  description: 'Stworzone z miłością przez Bartka',
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