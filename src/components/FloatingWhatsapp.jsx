// src/components/FloatingWhatsapp.jsx
import { BsWhatsapp } from "react-icons/bs";
import { logWhatsappClick } from "../utils/analytics";

const WA_URL = "https://wa.me/5561996204646?text=Olá! Tenho interesse em vender meu processo judicial";

export default function FloatingWhatsapp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => logWhatsappClick('floating')}
      className="
        fixed bottom-4 right-4 z-50
        inline-flex items-center justify-center
        w-14 h-14 rounded-full
        bg-green-500 text-white
        shadow-xl ring-1 ring-black/10
        hover:bg-green-600 hover:shadow-2xl
        focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
        transition-all duration-200
      "
    >
      <BsWhatsapp className="w-7 h-7" aria-hidden="true" />
      <span className="sr-only">Abrir conversa no WhatsApp</span>
    </a>
  );
}
