// src/hooks/useWindowSize.js

"use client"; // Ten hook działa tylko w przeglądarce

import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Ustawiamy rozmiar od razu po załadowaniu

    // Funkcja czyszcząca, która uruchamia się, gdy komponent zniknie
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Pusta tablica oznacza, że ten efekt uruchomi się tylko raz

  return windowSize;
}