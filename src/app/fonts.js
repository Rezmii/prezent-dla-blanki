// src/app/fonts.js
import { Patrick_Hand } from 'next/font/google';

export const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-patrick-hand',
});