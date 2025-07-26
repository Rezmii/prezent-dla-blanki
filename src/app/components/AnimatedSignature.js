// src/components/AnimatedSignature.js

'use client';

import { motion } from 'framer-motion';

export default function AnimatedSignature() {
  const signatureText = "Kocham Cię, Bartek";
  const anniversaryDate = "26.07.2025";

  // Warianty dla animacji podpisu (bez zmian)
  const signatureContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 } 
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Warianty dla animacji daty (nowy)
  const dateVariants = {
    hidden: { opacity: 0 },
    // Data pojawi się z opóźnieniem, gdy podpis już się "napisze"
    visible: { 
      opacity: 1,
      transition: { delay: 2.2, duration: 1 } 
    },
  };

  return (
    // ZMIANA: Zmieniamy układ na kolumnowy i dodajemy odstęp, aby umieścić datę pod podpisem
    <motion.div
      className="flex flex-col items-center gap-3 mt-12 mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {/* Podpis - ten kod pozostaje bez zmian */}
      <motion.h2 
        className="text-4xl text-accent-primary font-handwriting"
        variants={signatureContainerVariants}
      >
        {signatureText.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h2>

      {/* NOWY ELEMENT: Animowana data */}
<motion.p
        // Używamy nowej klasy font-serif i dostosowujemy wygląd
        className="text-2xl tracking-widest font-serif text-text-main"
        variants={dateVariants}
      >
        {anniversaryDate}
      </motion.p>
    </motion.div>
  );
}