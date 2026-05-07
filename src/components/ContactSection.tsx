"use client";
import { Icon } from "@iconify/react";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_nhwk5tj";
const TEMPLATE_ID = "template_gm7stdu";
const PUBLIC_KEY = "ZLjAknD0EJSDGCdZU";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
      setAgreed(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contato" className="py-20 px-8" style={{ background: "#0a0b14" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-bold tracking-widest uppercase mb-3 gradient-text">
          Contato
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Entre em contato
        </h2>
        <p className="text-slate-400 text-sm mb-10 max-w-xl">
          Tem um projeto em mente ou quer saber mais sobre como podemos te ajudar? Preencha o
          formulário ao lado e nossa equipe entrará em contato com você.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Nome completo</label>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Telefone (opcional)</label>
              <input
                type="tel"
                name="phone"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Assunto</label>
              <input
                type="text"
                name="subject"
                placeholder="Digite o assunto"
                required
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1 block">Mensagem</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Conte-nos sobre seu projeto ou dúvida..."
                className="resize-none"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                className="w-4 h-4 accent-blue-600"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ width: "16px", height: "16px" }}
              />
              <label htmlFor="agree" className="text-xs text-slate-400">
                Concordo em receber comunicações da ByteMe.
              </label>
            </div>

            {/* Feedback messages */}
            {status === "success" && (
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-md text-sm"
                style={{ background: "#052e16", border: "1px solid #166534", color: "#4ade80" }}
              >
                <Icon icon="mdi:check-circle" width={18} />
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            {status === "error" && (
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-md text-sm"
                style={{ background: "#450a0a", border: "1px solid #991b1b", color: "#f87171" }}
              >
                <Icon icon="mdi:alert-circle" width={18} />
                Erro ao enviar. Tente novamente ou use nosso e-mail direto.
              </div>
            )}

            <button
              type="submit"
              disabled={!agreed || status === "sending"}
              className="w-full py-3 rounded-md text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all"
              style={{
                background: !agreed || status === "sending" ? "#1e3a6e" : "#1e40af",
                opacity: !agreed || status === "sending" ? 0.6 : 1,
                cursor: !agreed || status === "sending" ? "not-allowed" : "pointer",
              }}
            >
              {status === "sending" ? (
                <>
                  <Icon icon="mdi:loading" width={16} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem
                  <Icon icon="mdi:arrow-right" width={16} />
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Outras formas de contato</h3>
            <p className="text-slate-400 text-sm mb-6">Estamos disponíveis pelos canais abaixo.</p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#111327", border: "1px solid #1e2040" }}
                >
                  <Icon icon="mdi:email-outline" className="text-blue-400" width={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">E-mail</p>
                  <p className="text-sm text-white">analisepostural@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#111327", border: "1px solid #1e2040" }}
                >
                  <Icon icon="mdi:map-marker-outline" className="text-blue-400" width={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Endereço</p>
                  <p className="text-sm text-white">Registro, SP - Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#111327", border: "1px solid #1e2040" }}
                >
                  <Icon icon="mdi:clock-outline" className="text-blue-400" width={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Horário de atendimento</p>
                  <p className="text-sm text-white">Segunda à Sexta</p>
                  <p className="text-sm text-white">9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
