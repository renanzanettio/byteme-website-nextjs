import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-8"
      style={{ background: "linear-gradient(135deg, #0a0b14 0%, #0d0f24 50%, #0a0b14 100%)" }}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Transformando ideias{" "}
            <span className="gradient-text">em soluções inteligentes.</span>
          </h1>
          <p className="text-slate-400 text-base mb-8 max-w-md leading-relaxed">
            Somos a ByteMe! Uma equipe de desenvolvedores de software que une
            tecnologia, criatividade e propósito para criar soluções que
            impactam vidas!
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="#sobre" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm text-white font-medium transition-all"
              style={{ background: "#818cf8" }}>
              Conheça nossa equipe
            </a>
            <a href="#projeto" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all border"
              style={{ borderColor: "#334155", color: "white" }}>
              Ver projetos
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            {/* ByteMe logo big */}
            <div className="w-64 h-64 relative opacity-80">
              <Image src="/logo_equipe.svg" alt="ByteMe Logo" fill className="object-contain" />
            </div>
            {/* Decorative grid dots */}
            <div className="absolute -top-8 -right-8 grid grid-cols-5 gap-2 opacity-20">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-blue-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
