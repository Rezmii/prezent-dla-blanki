// src/components/InteractiveCollage.js
"use client"; // Ten komponent jest interaktywny

import { motion } from 'framer-motion';
import Image from 'next/image'; // Używamy komponentu Image z Next.js do optymalizacji zdjęć

// Lista tymczasowych zdjęć. Zastąpimy je Twoimi!
// Używamy różnych proporcji, aby kolaż był ciekawszy.
const photoPlaceholders = [
  { src: 'https://images.unsplash.com/photo-1549402583-f24581464b58?w=500&h=700&fit=crop', alt: 'Zdjęcie 1', rotation: 'rotate-[-3deg]' },
  { src: 'https://images.unsplash.com/photo-1554177255-61b491b865fb?w=700&h=500&fit=crop', alt: 'Zdjęcie 2', rotation: 'rotate-[2deg]' },
  { src: 'https://images.unsplash.com/photo-1559554333-995640243461?w=500&h=600&fit=crop', alt: 'Zdjęcie 3', rotation: 'rotate-[4deg]' },
  { src: 'https://images.unsplash.com/photo-1502422556943-4e6a715a3c26?w=500&h=500&fit=crop', alt: 'Zdjęcie 4', rotation: 'rotate-[-1deg]' },
  { src: 'https://images.unsplash.com/photo-1561062669-5a690e502a24?w=700&h=500&fit=crop', alt: 'Zdjęcie 5', rotation: 'rotate-[-4deg]' },
  { src: 'https://images.unsplash.com/photo-1580554245999-523194917531?w=500&h=700&fit=crop', alt: 'Zdjęcie 6', rotation: 'rotate-[3deg]' },
];

const InteractiveCollage = () => {
  return (
    <section className="w-full max-w-4xl px-4 py-16 mx-auto">
      {/* Używamy siatki (Grid) do ułożenia zdjęć, co zapewnia responsywność */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
        {photoPlaceholders.map((photo, index) => (
          <motion.div
            key={index}
            className={`relative shadow-xl ${photo.rotation}`}
            // Animacja przy najechaniu (PC) lub dotknięciu (mobile)
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
            whileTap={{ scale: 1.1, rotate: 0, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={500}
              height={700}
              className="object-cover w-full h-full rounded-md"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveCollage;