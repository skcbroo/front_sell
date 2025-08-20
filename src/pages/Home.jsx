
// NOVA HOMEPAGE COM BASE NA ESTRUTURA HTML DA LANDING, MAS COM VISUAL REACT MODERNO PADRÃO MIDLEJ
import NavbarLayout from "../components/Navbar";
import LeadForm from "../components/LeadForm";
import Hero from "../components/Hero";
import Diferenciais from "../components/Diferenciais";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <NavbarLayout>
            {/* HERO */}
            <section className="bg-transparent text-black  px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <Hero />
                </div>
            </section>

            {/* DIFERENCIAIS */}
            <div className="py-16">
                <Diferenciais />
            </div>

            {/* COMO FUNCIONA */}
            <section id="como-funciona" className="bg-[#EBF4FF] py-16 px-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-2xl font-bold text-[#1A202C] mb-8">Como Funciona</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <Step number="1" title="Análise 24h" text="Envie seus documentos para análise rápida" />
                        <Step number="2" title="Proposta" text="Receba nossa proposta comercial" />
                        <Step number="3" title="Documentação" text="Assine os contratos necessários" />
                        <Step number="4" title="Cartório" text="Registramos a cessão em cartório" />
                        <Step number="5" title="Pagamento 24h" text="Dinheiro na sua conta em 24 horas" />
                    </div>
                </div>
            </section>

        
            {/* COMPARAÇÃO */}
            <section id="vantagens" className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-2xl font-bold text-[#1A202C] mb-8">Vantagens vs Empréstimo Bancário</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
  <thead>
    <tr className="bg-[#EBF4FF] text-gray-800">
      <th className="px-6 py-3 text-center font-bold">Característica</th>
      <th className="px-6 py-3 text-center font-bold">MIDLEJ Capital</th>
      <th className="px-6 py-3 text-center font-bold">Empréstimo Bancário</th>
    </tr>
  </thead>
  <tbody className="text-gray-700 text-center">
    <tr className="bg-white hover:bg-gray-50">
      <td className="px-6 py-3 font-medium">Tempo para receber</td>
      <td className="px-6 py-3 text-green-600 font-semibold">✓ 24 horas</td>
      <td className="px-6 py-3 text-red-600 font-semibold">✗ 5–30 dias</td>
    </tr>
    <tr className="bg-gray-50 hover:bg-gray-100">
      <td className="px-6 py-3 font-medium">Juros</td>
      <td className="px-6 py-3 text-green-600 font-semibold">✓ Não há juros</td>
      <td className="px-6 py-3 text-red-600 font-semibold">✗ 2–5% ao mês</td>
    </tr>
    <tr className="bg-white hover:bg-gray-50">
      <td className="px-6 py-3 font-medium">Documentação</td>
      <td className="px-6 py-3 text-green-600 font-semibold">✓ Mínima</td>
      <td className="px-6 py-3 text-red-600 font-semibold">✗ Extensa</td>
    </tr>
    <tr className="bg-gray-50 hover:bg-gray-100">
      <td className="px-6 py-3 font-medium">Garantias</td>
      <td className="px-6 py-3 text-green-600 font-semibold">✓ Próprio processo</td>
      <td className="px-6 py-3 text-red-600 font-semibold">✗ Bens pessoais</td>
    </tr>
  </tbody>
</table>

                    </div>
                </div>
            </section>

              {/* CALCULADORA */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-[#EBF4FF] border-[#CBD5E1] rounded-xl px-6 py-6 shadow-md">
                    <h2 className="text-xl font-bold text-[#1A202C] mb-4">Calcule quanto você pode receber</h2>
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-black">Valor do processo (R$)</label>
                        <input type="number" id="processValue" className="w-full p-3 border rounded-lg" placeholder="Ex: 100000" />
                        <button onClick={() => alert("Lógica de cálculo aqui")} className="bg-[#2B6CB0] text-black font-semibold px-6 py-2 rounded-lg hover:opacity-90">
                            Calcular Agora
                        </button>
                        <div id="calculatorResult" className="text-sm text-gray-600"></div>
                    </div>
                </div>
            </section>

            {/* CONTATO */}
            <footer className="bg-[#EBF4FF] border-t border-[#CBD5E1] py-6 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-sm text-gray-700">
    <div className="mb-4 md:mb-0">
      <h3 className="font-bold text-[#1A202C]">MIDLEJ CAPITAL</h3>
      <p>© 2023 by Midlej Tecnology.</p>
      <p>CNPJ: 35.340.252/0001-44</p>
    </div>
    <div className="text-left md:text-right">
      <p>
        <span className="font-semibold">Endereço:</span> St. de Habitações Individuais Sul QI 19 casa 19 - Lago Sul, Brasília - DF, 71655-040
      </p>
      <p>
        <span className="font-semibold">Email:</span> contato@midlejcapital.com.br
      </p>
      <p>
        <span className="font-semibold">Telefone:</span> (61) 99620-4646
      </p>
    </div>
  </div>
</footer>

        </NavbarLayout>
    );
}

function Card({ icon, title, text }) {
    return (
        <div className="bg-white border border-[#CBD5E1] p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="text-lg font-bold text-[#1A202C] mb-1">{title}</h3>
            <p className="text-sm text-[#4A5568]">{text}</p>
        </div>
    );
}

function Step({ number, title, text }) {
    return (
        <div className="bg-white border border-[#CBD5E1] p-4 rounded-xl shadow-sm text-center">
            <div className="w-8 h-8 mx-auto rounded-full bg-blue-200 text-blue-800 font-bold flex items-center justify-center mb-2">{number}</div>
            <h4 className="text-sm font-bold text-[#1A202C]">{title}</h4>
            <p className="text-xs text-[#4A5568] mt-1">{text}</p>
        </div>
    );
}
