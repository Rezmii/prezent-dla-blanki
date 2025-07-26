import { GiLoveLetter } from "react-icons/gi";

const GiftView = ({ onOpen, disabled }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-main">
      <button
        onClick={onOpen}
         disabled={disabled} 
        className="flex flex-col items-center gap-4 p-8 transition-transform duration-300 ease-in-out rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:scale-110"
        aria-label="Otwórz list"
      >
        {/* ZMIANA 1: Używamy nowej ikony */}
        <GiLoveLetter className="text-8xl text-accent-primary" />
        
        {/* ZMIANA 2: Zmieniamy styl i rozmiar czcionki */}
        <span className="text-2xl font-handwriting">
          Kliknij, aby otworzyć...
        </span>
      </button>
    </div>
  );
};

export default GiftView;
