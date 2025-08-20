// ComoFunciona.jsx
import { MessageCircle, Clock, Shield, FileText, CreditCard } from "lucide-react";

function Step({ number, title, text, Icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
      {/* Ícone */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2B6CB0] text-white mb-3">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>

      {/* Número */}
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-[#2B6CB0] font-bold mb-3">
        {number}
      </div>

      {/* Textos */}
      <h3 className="text-lg font-semibold text-[#1A202C]">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{text}</p>
    </div>
  );
}

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="bg-[#EBF4FF] py-16 px-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1A202C] mb-10">
          Como Funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Step
            number="1"
            title="Análise"
            text="Envie seus documentos para análise rápida"
            Icon={Clock}
          />
          <Step
            number="2"
            title="Proposta"
            text="Receba nossa proposta comercial"
            Icon={MessageCircle}
          />
          <Step
            number="3"
            title="Documentação"
            text="Assine os contratos necessários"
            Icon={FileText}
          />
          <Step
            number="4"
            title="Cartório"
            text="Registramos a cessão em cartório"
            Icon={Shield}
          />
          <Step
            number="5"
            title="Pagamento 24h"
            text="Dinheiro na sua conta em 24 horas"
            Icon={CreditCard}
          />
        </div>
      </div>
    </section>
  );
}
