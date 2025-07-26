// src/components/MainContent.js
"use client"; // Ten komponent używa animacji

import { motion } from 'framer-motion'; // Importujemy motion
import Message from './Message';
import InteractiveCollage from './InteractiveCollage';
import AnimatedSignature from './AnimatedSignature';

// Definiujemy warianty animacji dla kontenera
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Opóźnienie między pojawianiem się kolejnych elementów
      staggerChildren: 0.8,
    },
  },
};

// Definiujemy warianty animacji dla każdego elementu wewnątrz kontenera
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MainContent = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full min-h-screen gap-16 py-16 md:py-24 bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete} // Przekazujemy prop do motion.div
    >
      {/* Reszta bez zmian */}
      <motion.div variants={itemVariants} className="w-full">
        <Message />
      </motion.div>
      <motion.div variants={itemVariants} className="w-full">
        <InteractiveCollage />
      </motion.div>
      <motion.div variants={itemVariants} className="w-full">
        <AnimatedSignature />
      </motion.div>
    </motion.div>
  );
};

export default MainContent;