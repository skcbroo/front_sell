import { useState } from "react";
import axios from "axios";

export default function LeadForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    processo: "",
    consentimento: false,
  });
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.consentimento) return alert("Você precisa aceitar os termos.");
    setLoading(true);
    try {
      // Substituir pelo endpoint real posteriormente
      await axios.post("/api/leads", form);
      setSucesso(true);
    } catch (err) {
      console.error("Erro ao enviar:", err);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (sucesso) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-semibold text-[#222B3B]">✅ Solicitação enviada!</h2>
        <p className="mt-2 text-gray-600">Em breve entraremos em contato.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-[#222B3B]">
          Consulte gratuitamente se seu processo pode ser adquirido
        </h2>
        <p className="text-gray-600 mb-6">
          Preencha os dados ao lado e nossa equipe entrará em contato com você com uma análise gratuita e sem compromisso.
        </p>
        <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
          <li>Sem custo para consulta</li>
          <li>Resposta em até 1 dia útil</li>
          <li>Atendimento personalizado</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222B3B]"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222B3B]"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp (com DDD)"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222B3B]"
          value={form.whatsapp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="processo"
          placeholder="Número do processo"
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222B3B]"
          value={form.processo}
          onChange={handleChange}
        />

        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            name="consentimento"
            checked={form.consentimento}
            onChange={handleChange}
            className="mt-1"
          />
          Li e concordo com os termos de privacidade.
        </label>

        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 rounded-lg font-semibold transition text-white ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#222B3B] hover:bg-[#1a212f]"
          }`}
        >
          {loading ? "Enviando..." : "Consulte gratuitamente"}
        </button>
      </form>
    </div>
  );
}
