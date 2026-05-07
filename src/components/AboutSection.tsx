export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-8 text-black">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-3 gradient-text">
          Sobre a ByteMe
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Tecnologias para sua <span className="gradient-text">saúde.</span>
        </h2>
        <p className="text-slate-900 text-base leading-relaxed max-w-lg">
          Desenvolvemos soluções digitais na área da saúde com foco em eficiência, inovação e experiência do usuário.
          Acreditamos que a tecnologia é uma ferramenta que podemos utilizar para melhorar a saúde e aumentar a qualidade de vida dos usuários.
        </p>
      </div>
    </section>
  );
}
