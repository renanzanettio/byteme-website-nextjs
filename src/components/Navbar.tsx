"use client";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Projeto", href: "#projeto" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{ background: "rgba(10,11,20,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e2040" }}>
      <div className="flex items-center gap-2">
        <Image src="/logo_equipe.svg" alt="ByteMe" width={36} height={36} />
        <span className="font-bold text-white text-lg">ByteMe</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
