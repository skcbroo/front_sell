// NOVA HOMEPAGE COM BASE NA ESTRUTURA HTML DA LANDING, MAS COM VISUAL REACT MODERNO PADRÃO MIDLEJ
import NavbarLayout from "../components/Navbar";
import LeadForm from "../components/LeadForm";
import Hero from "../components/Hero";
import Diferenciais from "../components/Diferenciais";
import ComoFunciona from "../components/ComoFunciona";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import Testimonials from "../components/Testimonials";
import { useEffect, useState } from "react";
import { Clock, ShieldCheck, Info, Calculator } from "lucide-react";

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- Calculadora (deságio de 30%) ---

    // máscara: transforma qualquer digitação em "R$ 1.234,56"
    const maskBRL = (value) => {
        const digits = String(value).replace(/\D/g, ""); // apenas números
        if (!digits) return "";
        const number = Number(digits) / 100; // duas casas decimais
        return number.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    // desmascara: "R$ 1.234,56" -> 1234.56 (Number)
    const unmaskBRL = (masked) => {
        if (!masked) return NaN;
        const digits = String(masked).replace(/\D/g, "");
        return Number(digits) / 100;
    };

    const formatBRL = (n) =>
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(n);

    const [valorBruto, setValorBruto] = useState(""); // string mascarada
    const [resultado, setResultado] = useState(null); // { bruto, desagio, liquido } ou null

    const calcular = () => {
        const n = unmaskBRL(valorBruto);
        if (!Number.isFinite(n) || n <= 0) {
            setResultado(null);
            return;
        }
        const desagio = n * 0.3;
        const liquido = n * 0.7;
        setResultado({ bruto: n, desagio, liquido });
    };

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
            <div className="max-w-6xl mx-auto">
                <ComoFunciona />
            </div>

            {/* COMPARAÇÃO */}
            <section id="vantagens" className="py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                        MIDLEJ vs Empréstimos Bancários
                    </h2>
                    <p className="p-4 mt-3 text-lg text-slate-600">
                        Veja por que somos a melhor escolha
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
                            <thead>
                                <tr className="bg-[#EBF4FF] text-gray-800">
                                    <th className="px-6 py-3 text-center font-bold">
                                        Característica
                                    </th>
                                    <th className="px-6 py-3 text-center font-bold">
                                        MIDLEJ Capital
                                    </th>
                                    <th className="px-6 py-3 text-center font-bold">
                                        Empréstimo Bancário
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-center">
                                <tr className="bg-white hover:bg-gray-50">
                                    <td className="px-6 py-3 font-medium">Tempo para receber</td>
                                    <td className="px-6 py-3 text-green-600 font-semibold">
                                        ✓ 24 horas
                                    </td>
                                    <td className="px-6 py-3 text-red-600 font-semibold">
                                        ✗ 5–30 dias
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100">
                                    <td className="px-6 py-3 font-medium">Juros</td>
                                    <td className="px-6 py-3 text-green-600 font-semibold">
                                        ✓ Não há juros
                                    </td>
                                    <td className="px-6 py-3 text-red-600 font-semibold">
                                        ✗ 2–5% ao mês
                                    </td>
                                </tr>
                                <tr className="bg-white hover:bg-gray-50">
                                    <td className="px-6 py-3 font-medium">Documentação</td>
                                    <td className="px-6 py-3 text-green-600 font-semibold">
                                        ✓ Mínima
                                    </td>
                                    <td className="px-6 py-3 text-red-600 font-semibold">
                                        ✗ Extensa
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100">
                                    <td className="px-6 py-3 font-medium">Garantias</td>
                                    <td className="px-6 py-3 text-green-600 font-semibold">
                                        ✓ Próprio processo
                                    </td>
                                    <td className="px-6 py-3 text-red-600 font-semibold">
                                        ✗ Bens pessoais
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CALCULADORA */}
            <section className="max-w-4xl mx-auto px-4 py-16">
                {/* tornei este container relative pra posicionar a logo absoluta */}
                <div className="relative bg-[#EBF4FF] border border-[#CBD5E1] rounded-xl px-6 py-6 shadow-md">
                    <h2 className="text-xl font-bold text-[#1A202C] mb-4">
                        Calcule quanto você pode receber
                    </h2>

                    <div className="space-y-4">
                        <label htmlFor="processValue" className="block text-sm font-medium text-black">
                            Valor do processo (R$)
                        </label>

                        <input
                            id="processValue"
                            type="text"
                            inputMode="numeric"
                            value={valorBruto}
                            onChange={(e) => setValorBruto(maskBRL(e.target.value))}
                            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#2B6CB0]"
                            placeholder="R$ 100.000,00"
                        />

                        <button
                            onClick={calcular}
                            className="bg-[#2B6CB0] text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition"
                        >
                            Calcular Agora
                        </button>

                        {resultado && (
                            <div
                                className="mt-4 p-5 bg-white rounded-lg border border-[#E2E8F0]"
                                role="status"
                                aria-live="polite"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                    <div className="text-left">
                                        <div className="text-sm text-gray-500">Você recebe</div>
                                        <div className="text-3xl font-extrabold text-[#2B6CB0]">
                                            {formatBRL(resultado.liquido)}
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600">
                                            Pagamento em até <strong>24h</strong> após aprovação.
                                        </p>
                                    </div>

                                    <a
                                        href="https://wa.me/5561996204646?text=Olá! Tenho interesse em vender meu processo judicial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-full bg-[#2B6CB0] text-white font-semibold px-6 py-3 shadow-md hover:bg-[#1E4CA8] hover:shadow-lg transition"
                                    >
                                        Quero receber em 24h
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>


            <div>
                <Testimonials />
            </div>

            {/* CONTATO */}
            <footer className="bg-blue-50 border-t">
                <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                    {/* Coluna 1 */}
                    <div>
                        <p className="font-bold">MIDLEJ CAPITAL</p>
                        <p>© 2023 by Midlej Technology.</p>
                        <p>CNPJ: 35.340.252/0001-44</p>
                    </div>

                    {/* Coluna 2 */}
                    <div className="md:text-right">
                        <p>
                            <span className="font-bold">Endereço:</span> St. de Habitações
                            Individuais Sul QI 19 casa 19 - Lago Sul, Brasília - DF,
                            71655-040
                        </p>
                        <p>
                            <span className="font-bold">Email:</span>{" "}
                            contato@midlejcapital.com.br
                        </p>
                        <p>
                            <span className="font-bold">Telefone:</span> (61) 99620-4646
                        </p>
                    </div>
                </div>
            </footer>

            <FloatingWhatsapp />
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
            <div className="w-8 h-8 mx-auto rounded-full bg-blue-200 text-blue-800 font-bold flex items-center justify-center mb-2">
                {number}
            </div>
            <h4 className="text-sm font-bold text-[#1A202C]">{title}</h4>
            <p className="text-xs text-[#4A5568] mt-1">{text}</p>
        </div>
    );
}
