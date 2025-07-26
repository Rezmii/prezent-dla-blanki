// src/components/InteractiveCollage.js
"use client"; // Ten komponent jest interaktywny

import { motion } from 'framer-motion';
import Image from 'next/image'; // Używamy komponentu Image z Next.js do optymalizacji zdjęć

// Lista tymczasowych zdjęć. Zastąpimy je Twoimi!
// Używamy różnych proporcji, aby kolaż był ciekawszy.
const yourPhotos = [
  { src: '/photos/IMG_6763.jpg', alt: 'Nasze zdjęcie 1', rotation: 'rotate-[4deg]' },
  { src: '/photos/IMG_6726.jpg', alt: 'Nasze zdjęcie 2', rotation: 'rotate-[2deg]' },
  { src: '/photos/IMG_5016.jpg', alt: 'Nasze zdjęcie 3', rotation: 'rotate-[-3deg]' },
  { src: '/photos/IMG_7217.jpg', alt: 'Nasze zdjęcie 4', rotation: 'rotate-[-1deg]' },
  { src: '/photos/IMG_7415.jpg', alt: 'Nasze zdjęcie 5', rotation: 'rotate-[-4deg]' },
  { src: '/photos/IMG_7904.jpg', alt: 'Nasze zdjęcie 6', rotation: 'rotate-[3deg]' },
];

const InteractiveCollage = () => {
  return (
    <section className="w-full max-w-4xl px-4 py-16 mx-auto">
      {/* Używamy siatki (Grid) do ułożenia zdjęć, co zapewnia responsywność */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
        {yourPhotos.map((photo, index) => (
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