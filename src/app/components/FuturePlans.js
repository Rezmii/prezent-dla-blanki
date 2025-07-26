// src/components/FuturePlans.js
"use client";

import { motion, AnimatePresence } from 'framer-motion'; // 1. Importujemy AnimatePresence
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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="w-full max-w-4xl px-4 pt-16 pb-8 mx-auto">
      <h2 className="mb-12 text-4xl text-center md:text-5xl font-serif text-text-main">
        Co nas czeka?
      </h2>

      <div className="flex items-center justify-center -space-x-16 md:-space-x-24 h-96">
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

        <motion.div
          className="relative w-56 h-72 md:w-64 md:h-80"
          style={{ rotate: 2, transformStyle: 'preserve-3d' }}
          variants={cardVariants}
          animate={activeCard === 'card2' ? 'active' : 'initial'}
          custom={10}
          onHoverStart={() => setActiveCard('card2')}
          onTap={() => {
            setActiveCard('card2');
            setIsFlipped((prev) => !prev);
          }}
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Image src="/photos/plans/energy.jpg" alt="Planowana podróż 2" fill className="object-cover rounded-lg shadow-2xl"/>
          </motion.div>
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: isFlipped ? 0 : -180 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Image 
              src="/photos/plans/my.jpg" 
              alt="Niespodzianka!" 
              fill 
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center w-48 h-64 rounded-lg shadow-xl md:w-56 md:h-72 bg-accent-secondary border-2 border-dashed border-accent-primary"
          variants={cardVariants}
          animate={activeCard === 'card3' ? 'active' : 'initial'}
          custom={0}
          onHoverStart={() => setActiveCard('card3')}
          onTap={() => setActiveCard('card3')}
          style={{ rotate: 10 }}
        >
          <span className="text-8xl font-serif text-accent-primary">?</span>
        </motion.div>
      </div>

      {/* 2. DODANA SEKCJA Z NAPISEM */}
      <div className="relative w-full h-16 mt-4">
        <AnimatePresence>
          {/* Napis będzie widoczny tylko, gdy karta 2 jest aktywna ORAZ obrócona */}
          {activeCard === 'card2' && isFlipped && (
            <motion.p
              className="absolute inset-0 text-3xl text-center font-handwriting text-text-main"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              exit={{ opacity: 0, y: 10 }}
            >
              Tak będzie 😂
            </motion.p>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default FuturePlans;