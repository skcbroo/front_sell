import React, { useState, useEffect } from 'react';
import {
  Clock,
  Shield,
  FileText,
  CreditCard,
  Lock,
  Calculator,
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from 'lucide-react';

function App() {
  const [calculatorValue, setCalculatorValue] = useState('');
  const [estimatedOffer, setEstimatedOffer] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateOffer = () => {
    const value = parseFloat(calculatorValue);
    if (value && value > 0) {
      const offer = Math.round(value * 0.7);
      setEstimatedOffer(offer);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-white">
     import React from "react";

export default function Home() {
  return (
    <main className="bg-white text-[#1A202C]">
      <section className="bg-gradient-to-r from-white via-[#A6B8C7] to-[#222B3B] text-black py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Venda seu crédito judicial e receba em até 24 horas
          </h1>
          <p className="text-lg mb-6">
            Processo simples, sem burocracia e com segurança jurídica
          </p>
          <a
            href="https://wa.me/5561996204646?text=Olá! Tenho interesse em vender meu processo judicial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2B6CB0] text-white font-semibold px-8 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Quero vender meu processo
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Por que escolher a Midlej Capital?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#EBF4FF] border border-[#CBD5E1] p-6 rounded-xl shadow text-center">
            <h3 className="text-lg font-bold mb-2">Pagamento rápido</h3>
            <p className="text-sm text-[#4A5568]">
              Dinheiro em sua conta em até 24 horas após a aprovação
            </p>
          </div>
          <div className="bg-[#EBF4FF] border border-[#CBD5E1] p-6 rounded-xl shadow text-center">
            <h3 className="text-lg font-bold mb-2">Sem juros ou parcelas</h3>
            <p className="text-sm text-[#4A5568]">
              Você vende seu crédito, não contrai uma dívida
            </p>
          </div>
          <div className="bg-[#EBF4FF] border border-[#CBD5E1] p-6 rounded-xl shadow text-center">
            <h3 className="text-lg font-bold mb-2">Sem burocracia</h3>
            <p className="text-sm text-[#4A5568]">
              Processo simples, análise rápida e documentação mínima
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

    </div>
  );
}

function BenefitCard({ icon, title, description, color }) {
  return (
    <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className={`${color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description, isFirst = false, isLast = false }) {
  return (
    <div className="relative">
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#2B6CB0] to-[#60A5FA] transform translate-x-2"></div>
      )}
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center relative z-10 hover:shadow-xl transition-shadow duration-300">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#2B6CB0] to-[#1E40AF] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
          {number}
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ComparisonRow({ feature, midlej, bank, midlejGood }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="font-medium text-green-700">{midlej}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center space-x-2">
          <XCircle className="w-5 h-5 text-red-600" />
          <span className="font-medium text-red-700">{bank}</span>
        </div>
      </td>
    </tr>
  );
}

function TestimonialCard({ name, role, content, rating }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-4 italic">"{content}"</p>
      <div>
        <div className="font-bold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  );
}

export default App;
