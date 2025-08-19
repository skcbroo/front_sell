
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
            <section className="bg-transparent text-black py-20 px-4">
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

            {/* CALCULADORA */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-[#EBF4FF] border border-[#CBD5E1] rounded-xl px-6 py-6 shadow-md">
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

            {/* COMPARAÇÃO */}
            <section id="vantagens" className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-2xl font-bold text-[#1A202C] mb-8">Vantagens vs Empréstimo Bancário</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-[#EBF4FF] text-black border-b-2 border-black">
                                    <th className="px-4 py-2 text-center font-bold border-r border-black">Característica</th>
                                    <th className="px-4 py-2 text-center font-bold border-r border-black">MIDLEJ Capital</th>
                                    <th className="px-4 py-2 text-center font-bold">Empréstimo Bancário</th>
                                </tr>
                            </thead>
                            <tbody className="text-black text-center">
                                <tr>
                                    <td className="px-4 py-2 border-r border-black">Tempo para receber</td>
                                    <td className="px-4 py-2 border-r border-black">✓ 24 horas</td>
                                    <td className="px-4 py-2">✗ 5–30 dias</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r border-black">Juros</td>
                                    <td className="px-4 py-2 border-r border-black">✓ Não há juros</td>
                                    <td className="px-4 py-2">✗ 2–5% ao mês</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r border-black">Documentação</td>
                                    <td className="px-4 py-2 border-r border-black">✓ Mínima</td>
                                    <td className="px-4 py-2">✗ Extensa</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-r border-black">Garantias</td>
                                    <td className="px-4 py-2 border-r border-black">✓ Próprio processo</td>
                                    <td className="px-4 py-2">✗ Bens pessoais</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CONTATO */}
            <section id="contato" className="py-16 px-4 bg-transparent">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-xl font-bold text-[#1A202C] mb-4">Entre em contato via WhatsApp</h2>
                    <p className="text-gray-700 mb-2">WhatsApp: <a href="https://wa.me/5561996204646" target="_blank" rel="noreferrer" className="underline">(61) 9 9620-4646</a></p>
                    <p className="text-gray-700 mb-2">Email: contato@midlejcapital.com.br</p>
                    <p className="text-gray-700 mb-4">Endereço: SHIS QI 19, Conjunto 04, Casa 19 – Lago Sul, Brasília/DF</p>
                    <a href="https://wa.me/5561996204646" className="inline-block bg-[#2B6CB0] text-black font-semibold px-6 py-2 rounded-lg hover:opacity-90" target="_blank" rel="noopener noreferrer">
                        Conversar no WhatsApp
                    </a>
                </div>
            </section>
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
