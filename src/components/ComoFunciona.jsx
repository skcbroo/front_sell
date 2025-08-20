// src/components/ComoFunciona.jsx
import { motion } from "framer-motion";

function Step({ number, title, text, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="group bg-white/90 backdrop-blur-sm border border-[#CBD5E1] rounded-2xl p-6 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-blue-200 text-blue-800 font-bold flex items-center justify-center">
        {number}
      </div>
      <h4 className="text-base font-bold text-[#1A202C]">{title}</h4>
      <p className="text-sm text-[#4A5568] mt-1 leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function ComoFunciona() {
  return (
    // full-bleed como no Hero
    <section
      id="como-funciona"
      className="
        relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        overflow-hidden bg-gradient-to-b from-[#EBF4FF] to-[#DCE9FF]
        py-16 md:py-20
      "
    >
      {/* container centralizado */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl font-extrabold text-[#1A202C] mb-10"
        >
          Como Funciona
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          <Step
            number="1"
            title="Análise 24h"
            text="Envie seus documentos para análise rápida."
            delay={0.05}
          />
          <Step
            number="2"
            title="Proposta"
            text="Receba nossa proposta comercial."
            delay={0.1}
          />
          <Step
            number="3"
            title="Documentação"
            text="Assine os contratos necessários."
            delay={0.15}
          />
          <Step
            number="4"
            title="Cartório"
            text="Registramos a cessão em cartório."
            delay={0.2}
          />
          <Step
            number="5"
            title="Pagamento 24h"
            text="Dinheiro na sua conta em até 24 horas."
            delay={0.25}
          />
        </div>
      </div>
    </section>
  );
}
