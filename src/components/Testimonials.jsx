import { Star } from "lucide-react";

const testimonials = [
  {
    text:
      "Precisava urgente do dinheiro e a MIDLEJ resolveu em menos de 24 horas. Recomendo!",
    name: "Maria Silva",
    role: "Processo Trabalhista",
    rating: 5,
  },
  {
    text:
      "Processo muito simples e transparente. Equipe profissional e atenciosa.",
    name: "João Santos",
    role: "Processo Cível",
    rating: 5,
  },
  {
    text:
      "Melhor opção que empréstimo bancário. Sem burocracia e pagamento rápido.",
    name: "Ana Costa",
    role: "Precatório",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    // full-bleed, igual ao Hero
    <section
      className="
        relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        bg-white
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900">
          O que dizem nossos clientes
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="
                rounded-2xl bg-white p-6
                ring-1 ring-slate-200 shadow-sm
                hover:shadow-md transition-shadow
              "
            >
              <p className="text-center italic text-slate-600">
                “{t.text}”
              </p>

              {/* Estrelas */}
              <div className="mt-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-5 h-5 ${
                      j < t.rating ? "text-yellow-400" : "text-slate-300"
                    }`}
                    // Garante preenchimento mesmo no Lucide (stroke)
                    style={{ fill: j < t.rating ? "#FACC15" : "none" }}
                  />
                ))}
              </div>

              <div className="mt-4 text-center">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
