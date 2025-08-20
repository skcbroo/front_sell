import { FileText, Send, CheckCircle2, DollarSign } from "lucide-react";

export default function ComoFunciona() {
  return (
    // wrapper full-bleed
    <section
      className="
        relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        overflow-hidden bg-gradient-to-b from-[#EEF5FF] to-[#DCE9FF]
      "
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* conteúdo centralizado */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Como <span className="text-[#2B6CB0]">funciona</span>
        </h2>

        {/* Subtítulo */}
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-600">
          Entenda o passo a passo simples para transformar seu crédito judicial em dinheiro.
        </p>

        {/* Etapas */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Step icon={<FileText className="w-6 h-6 text-[#2B6CB0]" />} label="Envie seus dados" />
          <Step icon={<Send className="w-6 h-6 text-[#2B6CB0]" />} label="Receba nossa proposta" />
          <Step icon={<CheckCircle2 className="w-6 h-6 text-[#2B6CB0]" />} label="Assine o contrato" />
          <Step icon={<DollarSign className="w-6 h-6 text-[#2B6CB0]" />} label="Receba em até 24h" />
        </div>
      </div>
    </section>
  );
}

function Step({ icon, label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl bg-white/80 p-6 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
      {icon}
      <span className="text-base font-semibold text-slate-700">{label}</span>
    </div>
  );
}
