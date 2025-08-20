// Hero.jsx
import { MessageCircle, Clock, Shield, FileText, CreditCard, Lock } from "lucide-react";

export default function Hero() {
  return (
    // full-bleed
    <section className="
      relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
      overflow-hidden bg-gradient-to-b from-[#EEF5FF] to-[#DCE9FF]
    ">
      {/* conteúdo centralizado */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center">
        {/* Título */}
        <h1 className="
          text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900
          leading-[1.15] [text-wrap:balance]
        ">
          Transforme seu processo judicial em{" "}
          <span className="text-[#2B6CB0]">dinheiro</span>{" "}
          <span className="text-[#2B6CB0]">hoje</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto [text-wrap:balance]">
          Receba em menos de 24 horas — rápido, legal e sem burocracia.
        </p>

        {/* CTA */}
        <div className="mt-6 sm:mt-8">
          <a
            href="https://wa.me/5561996204646?text=Olá! Tenho interesse em vender meu processo judicial"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex w-full sm:w-auto items-center justify-center gap-2
              rounded-2xl bg-[#2B6CB0] px-5 sm:px-8 py-4
              text-base sm:text-lg font-semibold text-white
              shadow-lg hover:bg-[#1E4CA8] hover:shadow-xl active:scale-[0.99]
              transition-all duration-300 focus:outline-none
              focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2B6CB0]
            "
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Quero vender meu processo agora
          </a>
        </div>

        {/* Benefícios */}
        <div className="
          mt-8 sm:mt-12
          grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
          gap-3 sm:gap-4 max-w-3xl sm:max-w-4xl mx-auto
        ">
          <Pill icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />} label="Pagamento em 24h" />
          <Pill icon={<Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />} label="100% Legal" />
          <Pill icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />} label="Documentos Mínimos" />
          <Pill icon={<CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />} label="Sem Garantias" />
          <Pill icon={<Lock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />} label="Privacidade" />
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, label }) {
  return (
    <div className="
      flex items-center justify-center gap-2
      rounded-full bg-white/80 px-3 sm:px-4 py-2
      backdrop-blur-sm shadow-sm border border-white/60
    ">
      {icon}
      <span className="text-xs sm:text-sm font-medium text-slate-700">{label}</span>
    </div>
  );
}
