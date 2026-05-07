import { Icon } from "@iconify/react";

const services = [
  {
    icon: "mdi:code-tags",
    title: "Desenvolvimento",
    description:
      "Criamos soluções web e mobile personalizadas para o seu negócio.",
  },
  {
    icon: "mdi:lightbulb-outline",
    title: "Consultoria",
    description:
      "Ajudamos a transformar ideias em produtos digitais inovadores e eficientes.",
  },
  {
    icon: "mdi:wrench-outline",
    title: "Suporte e Manutenção",
    description:
      "Oferecemos suporte contínuo e manutenção para garantir performance e segurança.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-3 gradient-text">
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Como podemos
            <br />
            te ajudar
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl p-6 transition-transform duration-300 hover:scale-105"
              style={{ background: "#111327", border: "1px solid #1e2040" }}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center mb-4">
                <Icon icon={service.icon} className="text-blue-400" width={22} />
              </div>
              <h3 className="font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
