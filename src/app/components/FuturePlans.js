// src/components/FuturePlans.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const cardVariants = {
  initial: (zIndex) => ({
    y: 0,
    scale: 1,
    zIndex: zIndex,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }),
  active: {
    y: -15,
    scale: 1.1,
    zIndex: 20,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
};

const FuturePlans = () => {
  const [activeCard, setActiveCard] = useState('card2');
  // 1. Dodajemy nowy stan do śledzenia obrotu środkowej karty
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="w-full max-w-4xl px-4 py-16 mx-auto">
      <h2 className="mb-12 text-4xl text-center md:text-5xl font-serif text-text-main">
        Co nas czeka?
      </h2>

      <div className="flex items-center justify-center -space-x-16 md:-space-x-24 h-96">
        {/* Karta 1 (bez zmian) */}
        <motion.div
          className="relative w-48 h-64 bg-gray-200 rounded-lg shadow-xl md:w-56 md:h-72"
          variants={cardVariants}
          animate={activeCard === 'card1' ? 'active' : 'initial'}
          custom={0}
          onHoverStart={() => setActiveCard('card1')}
          onTap={() => setActiveCard('card1')}
          style={{ rotate: -8 }}
        >
          <Image src="/photos/plans/szczecin.jpg" alt="Planowana podróż 1" fill className="object-cover rounded-lg"/>
        </motion.div>

        {/* Karta 2 (z nową logiką obrotu) */}
        <motion.div
          className="relative w-56 h-72 md:w-64 md:h-80"
          // Dodajemy styl, aby włączyć perspektywę 3D
          style={{ rotate: 2, transformStyle: 'preserve-3d' }}
          variants={cardVariants}
          animate={activeCard === 'card2' ? 'active' : 'initial'}
          custom={10}
          onHoverStart={() => setActiveCard('card2')}
          // 2. Aktualizujemy 'onTap', aby obracał kartę
          onTap={() => {
            setActiveCard('card2');
            setIsFlipped((prev) => !prev);
          }}
        >
          {/* PRZÓD KARTY */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            // Animujemy obrót, chowając tę stronę po obróceniu
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Image src="/photos/plans/energy.jpg" alt="Planowana podróż 2" fill className="object-cover rounded-lg shadow-2xl"/>
          </motion.div>

          {/* TYŁ KARTY */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            // Ta strona jest na starcie obrócona i czeka na odsłonięcie
            initial={{ rotateY: 180 }}
            animate={{ rotateY: isFlipped ? 0 : -180 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Tutaj umieść nowe, ukryte zdjęcie */}
            <Image 
              src="/photos/plans/my.jpg" 
              alt="Niespodzianka!" 
              fill 
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Karta 3 (bez zmian) */}
        <motion.div
          className="relative flex items-center justify-center w-48 h-64 rounded-lg shadow-xl md:w-56 md:h-72 bg-accent-secondary border-2 border-dashed border-accent-primary"
          variants={cardVariants}
          initial="initial"
          animate={activeCard === 'card3' ? 'active' : 'initial'}
          custom={0}
          onHoverStart={() => setActiveCard('card3')}
          onTap={() => setActiveCard('card3')}
          style={{ rotate: 10 }}
        >
          <span className="text-8xl font-serif text-accent-primary">?</span>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturePlans;