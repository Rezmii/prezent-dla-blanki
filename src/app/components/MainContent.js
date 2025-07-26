// src/components/MainContent.js
"use client"; 

import { motion } from 'framer-motion';
import Message from './Message';
import InteractiveCollage from './InteractiveCollage';
import FuturePlans from './FuturePlans'; // <-- 1. Importujemy nowy komponent
import AnimatedSignature from './AnimatedSignature';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

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
      onAnimationComplete={onAnimationComplete}
    >
      <motion.div variants={itemVariants} className="w-full">
        <Message />
      </motion.div>
      <motion.div variants={itemVariants} className="w-full">
        <InteractiveCollage />
      </motion.div>

      {/* 2. Dodajemy nową sekcję do animacji kaskadowej */}
      <motion.div variants={itemVariants} className="w-full">
        <FuturePlans />
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <AnimatedSignature />
      </motion.div>
    </motion.div>
  );
};

export default MainContent;