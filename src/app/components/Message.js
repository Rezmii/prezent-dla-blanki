// src/components/Message.js
"use client";

import { PiHeartFill } from 'react-icons/pi'; // Importujemy ikonę serca

const Message = () => {
  return (
    // Ustawiamy kontener jako 'relative', aby móc umieścić serce w tle
    <section className="relative w-full max-w-2xl px-4 mx-auto">
      
      {/* 1. Serca w tle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <PiHeartFill className="text-accent-secondary opacity-40" style={{ fontSize: '20rem' }} />
      </div>

      {/* Kontener na tekst, który będzie na wierzchu (dzięki 'relative') */}
      <div className="relative text-center">
        {/* 2. Wyróżniony tytuł */}
        <h1 className="mb-8 text-4xl font-handwriting text-text-main ">
          3 lata razem !!!
        </h1>

        {/* 3. Akapity z ozdobnym inicjałem */}
        <div className="space-y-6 text-xl leading-relaxed md:text-2xl text-main font-handwriting">
          <p>
           
            Dziękuję Ci za Twój piękny uśmiech, który zawsze poprawia mi humor, za Twoje wsparcie i po prostu za to, że jesteś.
          </p>
          <p>
            Jestem bardzo szczęśliwy, mogąc w końcu codziennie budzić się i zasypiać obok Ciebie.
          </p>
          <p>
            To były najlepsze 3 lata mojego życia, a przed nami jeszcze tyle wspaniałych chwil. Nie mogę się doczekać, żeby spędzić je wszystkie z Tobą.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Message;