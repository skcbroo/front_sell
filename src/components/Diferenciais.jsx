import { Clock, Shield, FileText, CreditCard, Lock, Calculator } from "lucide-react";

export default function Diferenciais() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Título */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900">
        Por que escolher a MIDLEJ Capital?
      </h2>
      <p className="text-center text-slate-600 max-w-3xl mx-auto mt-4">
        Oferecemos a forma mais rápida e segura de transformar seu crédito judicial em
        dinheiro à vista.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Card
          icon={Clock}
          color="text-blue-600"
          title="Pagamento em 24 horas"
          text="Receba seu dinheiro mais rápido do que em qualquer financiamento tradicional."
        />
        <Card
          icon={Shield}
          color="text-green-600"
          title="Legal e Seguro"
          text="Todas as operações seguem os requisitos legais e com total transparência."
        />
        <Card
          icon={FileText}
          color="text-purple-600"
          title="Documentação Mínima"
          text="Processo simples, com o mínimo de documentos necessários."
        />
        <Card
          icon={CreditCard}
          color="text-orange-600"
          title="Sem Garantias"
          text="Seu próprio processo serve como lastro — sem bens pessoais."
        />
        <Card
          icon={Lock}
          color="text-indigo-600"
          title="Privacidade Garantida"
          text="Confidencialidade em todas as etapas, do início ao fim."
        />
        <Card
          icon={Calculator}
          color="text-teal-600"
          title="Avaliações Justas"
          text="Ofertas competitivas baseadas em análise detalhada do caso."
        />
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, text, color = "text-blue-600" }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
      <div className="flex items-start gap-4">
        <div className={`h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center ${color}`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-2 text-slate-600 leading-relaxed text-sm">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
