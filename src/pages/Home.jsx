import { Link } from "react-router-dom";
import NavbarLayout from "../components/Navbar";
import LeadForm from "../components/LeadForm";

// Endereço para o mapa
const ENDERECO = "St. de Habitações Individuais Sul QI 19 casa 19 - Lago Sul, Brasília - DF, 71655-040";

function MapEmbed(...){ /* sem alteração */ }

export default function Home() {
  const falarComEquipe = () => { /* sem alteração */ };

  return (
    <NavbarLayout>
      <h1 className="sr-only">Midlej Capital — Compra de Crédito Judicial</h1>

      {/* HERO AJUSTADO */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="rounded-xl bg-[#EBF4FF] border border-[#CBD5E1] px-6 py-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-sm font-medium text-gray-500 tracking-wide select-none cursor-default">
                Quer vender seu crédito judicial?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A202C] mt-1">
                Venda seu processo trabalhista ou precatório com segurança
              </h2>
              <p className="text-[#4A5568] mt-3 select-none cursor-default">
                Avaliação gratuita e ágil — receba em até 24h após assinatura. Sem custo, sem burocracia.
              </p>
              <div className="mt-5">
                <button
                  onClick={falarComEquipe}
                  className="inline-block bg-[#2B6CB0] text-white font-semibold rounded-lg px-6 py-3 hover:opacity-90 transition"
                >
                  Fale com a nossa equipe
                </button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/buss.jpg"
                alt="Segurança e confiança"
                className="w-48 md:w-72 lg:w-96 rounded-lg object-cover select-none"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE COMPRAMOS */}
      <section className="max-w-6xl mx-auto mb-8 text-center">
        <h3 className="text-xl font-bold mb-4 select-none cursor-default">
          Você tem um processo? A gente compra!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#EBF4FF] border border-[#CBD5E1] rounded-xl px-6 py-5 shadow-md">
            <h4 className="font-bold mb-2">Processo trabalhista</h4>
            <p>Receba em até 24h após assinatura. Avaliação gratuita e personalizada.</p>
          </div>
          <div className="bg-[#EBF4FF] border border-[#CBD5E1] rounded-xl px-6 py-5 shadow-md">
            <h4 className="font-bold mb-2">Precatório</h4>
            <p>Fácil negociação e pagamento rápido para precatórios estaduais e municipais.</p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="max-w-6xl mx-auto mb-10">
        <h3 className="text-xl font-bold text-center mb-4 select-none cursor-default">
          Faça uma avaliação gratuita
        </h3>
        <div className="rounded-xl bg-[#EBF4FF] border border-[#CBD5E1] px-6 py-6 shadow-md">
          <LeadForm />
        </div>
      </section>

      {/* TECNOLOGIA / CONFIANÇA */}
      <section className="max-w-6xl mx-auto mb-10 text-center">
        <p className="text-gray-600">
          Utilizamos tecnologia exclusiva com inteligência artificial para avaliação rápida e segura.
        </p>
        {/* Aqui você pode inserir selo Reclame Aqui ou depoimentos */}
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="max-w-6xl mx-auto mb-8">
        <h3 className="text-xl font-bold text-center mb-4 select-none cursor-default">
          Onde estamos
        </h3>
        <div className="rounded-xl bg-[#EBF4FF] border border-[#CBD5E1] px-6 py-6 shadow-md text-[#2D3748]">
          <p className="text-sm mb-3">
            <span className="font-semibold">Endereço: </span>{ENDERECO}
          </p>
          <MapEmbed lat={-15.860222} lng={-47.862396} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-transparent text-sm mt-12">
        {/* Conteúdo do footer original */}
      </footer>
    </NavbarLayout>
  );
}

// Componentes auxiliares (CardHome, StepHome, FaqHome) removidos por não utilizados  
