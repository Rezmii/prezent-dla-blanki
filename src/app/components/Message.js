// src/components/Message.js

const Message = () => {
  return (
    <section className="w-full max-w-2xl px-4 mx-auto">
      {/* Używamy naszego odręcznego fontu i kolorów */}
      <p className="text-2xl leading-relaxed text-center md:text-3xl lg:text-4xl text-main font-handwritten">
        Moja Kochana Blanko,
        <br />
        Trudno uwierzyć, że to już trzy lata. Czasem czuję, jakbyśmy poznali się wczoraj, a jednocześnie mam wrażenie, jakbym znał Cię od zawsze.
        <br /><br />
        Każdy dzień z Tobą to nowa, piękna strona w naszej wspólnej historii. Dziękuję Ci za każdy uśmiech, za nieskończone wsparcie i za to, że po prostu jesteś. Zmieniasz każdy, nawet najzwyklejszy dzień, w coś wyjątkowego.
        <br /><br />
        Wiem, że przed nami jeszcze tyle przygód do przeżycia i marzeń do spełnienia. Nie mogę się doczekać, by dzielić je wszystkie właśnie z Tobą.
        <br /><br />
        Jesteś dla mnie wszystkim.
      </p>
    </section>
  );
};

export default Message;