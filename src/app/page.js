// src/app/page.js

"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReward } from 'react-rewards';
import ReactConfetti from 'react-confetti';
import useWindowSize from './hooks/useWindowSize';

import GiftView from './components/GiftView';
import MainContent from './components/MainContent';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [showRainConfetti, setShowRainConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const { reward: heartsReward, isAnimating: isHeartsAnimating } = useReward('rewardId', 'emoji', {
    emoji: ['🤎', '🤍', '🩶'],
    spread: 100,
    startVelocity: 35,
    elementCount: 70,
    lifetime: 300,
  });

  const handleOpen = () => {
    if (isHeartsAnimating) return;
    heartsReward();
    setTimeout(() => {
      // Uruchamiamy OBA efekty w tym samym momencie
      setIsOpened(true);
      setShowRainConfetti(true); // POPRAWKA: Uruchamiamy deszcz razem z pojawieniem się treści
    }, 1000);
  };

  return (
    <main>
      {showRainConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={500}
          gravity={0.10}
          colors={['#D9A592', '#EADAD3', '#413F3D']}
          recycle={false}
          tweenDuration={8000}
          // POPRAWKA: Dodajemy style, aby uniknąć pasków przewijania
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
        />
      )}

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="gift"
            className="flex items-center justify-center min-h-screen"
            exit={{ y: -50, opacity: 0, scale: 0.5, transition: { duration: 0.5, ease: 'easeIn' } }}
          >
            <span id="rewardId" className="absolute" />
            <GiftView onOpen={handleOpen} disabled={isHeartsAnimating} />
          </motion.div>
        ) : (
          // POPRAWKA: Usuwamy stąd 'onAnimationComplete', bo już go nie potrzebujemy
          <MainContent />
        )}
      </AnimatePresence>
    </main>
  );
}