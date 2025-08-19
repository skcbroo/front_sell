import React, { useState } from 'react';
import {
  Clock, Shield, FileText, Ban, Lock, Calculator, Check, X, Star, MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';

// Estrutura base de landing page com foco em conversão para crédito judicial
function App() {
  const [processValue, setProcessValue] = useState('');
  const [estimatedOffer, setEstimatedOffer] = useState(null);

  const calculateOffer = () => {
    const value = parseFloat(processValue.replace(/[\D]/g, ''));
    if (value && value > 0) {
      const offer = Math.floor(value * 0.7);
      setEstimatedOffer(offer);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    const formatted = new Intl.NumberFormat('pt-BR').format(value);
    setProcessValue(formatted);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO - Exemplo visual do produto */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforme seu <span className="text-blue-600">processo judicial</span> em dinheiro
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Receba em até 24h com segurança, agilidade e sem burocracia
          </p>
          <a
            href="https://wa.me/5561996204646?text=Olá! Tenho interesse em vender meu processo judicial"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
          >
            Falar com Especialista
          </a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Por que escolher a MIDLEJ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <BenefitCard icon={<Clock className="text-blue-600" />} title="24h Pagamento" description="Valor na sua conta em 1 dia útil" />
            <BenefitCard icon={<Shield className="text-green-600" />} title="Legalidade" description="Contrato claro e seguro" />
            <BenefitCard icon={<FileText className="text-purple-600" />} title="Pouca Burocracia" description="Documentação mínima necessária" />
            <BenefitCard icon={<Ban className="text-red-600" />} title="Sem Garantias" description="Sem imóveis ou bens como aval" />
            <BenefitCard icon={<Lock className="text-indigo-600" />} title="Privacidade" description="Total sigilo e proteção de dados" />
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Simule sua Oferta</h3>
            <input
              type="text"
              value={processValue}
              onChange={handleInputChange}
              placeholder="Digite o valor do processo"
              className="w-full p-4 border border-gray-300 rounded-lg mb-4 text-lg"
            />
            <button
              onClick={calculateOffer}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700"
            >
              Calcular
            </button>

            {estimatedOffer && (
              <div className="mt-6 bg-green-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-2">Oferta Estimada</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(estimatedOffer)}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para vender seu processo?</h2>
        <p className="mb-8 text-blue-100">Receba sua proposta sem compromisso agora mesmo</p>
        <a
          href="https://wa.me/5561996204646"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100"
        >
          Simular Gratuito no WhatsApp
        </a>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default App;
