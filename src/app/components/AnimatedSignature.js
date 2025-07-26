'use client';

import { motion } from 'framer-motion';

export default function AnimatedSignature() {
  const signatureText = "Kocham Cię, Bartek";
  
  // Warianty animacji dla kontenera
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 } 
    },
  };

  // Warianty animacji dla każdej litery
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex justify-center mt-12 mb-8"
      // Uruchom animację, gdy komponent pojawi się w widoku
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.h2 
        className="text-4xl text-accent-primary font-handwriting"
        variants={containerVariants}
      >
        {signatureText.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
}