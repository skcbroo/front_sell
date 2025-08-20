// Hero.jsx
import { MessageCircle, Clock, Shield, FileText, CreditCard, Lock } from "lucide-react";
import { logWhatsappClick } from "../utils/analytics";

export default function Hero() {
  return (
    // wrapper full-bleed: ocupa 100vw e ignora o container pai
    <section
      className="
        relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        overflow-hidden bg-gradient-to-b from-[#EEF5FF] to-[#DCE9FF]
      "
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* conteúdo centralizado e limitado */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Transforme seu processo judicial em{" "}
          <span className="text-[#2B6CB0]">dinheiro</span>{" "}
          <span className="text-[#2B6CB0]">hoje</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-600">
          Receba em menos de 24 horas — rápido, legal e sem burocracia.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-10">
          <a
            href="https://wa.me/5561996204646?text=Olá! Tenho interesse em vender meu processo judicial"
            target="_blank"
            rel="noopener noreferrer"
             onClick={() => logWhatsappClick('hero')}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B6CB0] px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-[#1E4CA8] hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2B6CB0]"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Quero vender meu processo agora
          </a>
        </div>

        {/* Benefícios */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          <Pill icon={<Clock />} label="Pagamento em 24h" />
          <Pill icon={<Shield />} label="100% Legal" />
          <Pill icon={<FileText />} label="Documentos Mínimos" />
          <Pill icon={<CreditCard />} label="Sem Garantias" />
          <Pill icon={<Lock />} label="Privacidade" />
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, label }) {
  return (
    <div
      className="
        flex items-center justify-center gap-2 rounded-full bg-white/80 px-4 py-2
        backdrop-blur-sm shadow-sm
        [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-emerald-600 [&_svg]:shrink-0
      "
    >
      <span className="shrink-0">{icon}</span>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  );
}
