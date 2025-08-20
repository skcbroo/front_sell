// Hero.jsx
import { MessageCircle, Clock, Shield, FileText, CreditCard, Lock } from "lucide-react";

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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B6CB0] px-8 py-4 text-white text-lg font-semibold shadow-lg hover:bg-[#1E4CA8] hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2B6CB0]"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Quero vender meu processo agora
          </a>
        </div>

        {/* Benefícios */}
        <div className="mt-8 sm:mt-12 max-w-md sm:max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            <Pill icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />} label="Pagamento em 24h" />
            <Pill icon={<Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />} label="100% Legal" />
            <Pill icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />} label="Documentos Mínimos" />
            <Pill icon={<CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />} label="Sem Garantias" />
            <Pill icon={<Lock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />} label="Privacidade" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, label }) {
  return (
    <div
      className="
        w-full rounded-2xl bg-white/90 border border-slate-100 shadow-sm
        flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5
        min-h-[44px]
      "
    >
      <span className="shrink-0">{icon}</span>
      <span className="text-[13px] sm:text-sm font-medium leading-tight text-slate-700">
        {label}
      </span>
    </div>
  );
}
