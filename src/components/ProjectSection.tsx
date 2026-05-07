"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import FeedbackChart from "./Charts";
import LastTrainingCharts from "./LastTrainingChart/LastTrainingChart";
import WeeklyPerformanceChart from "./WeeklyPerformanceChart/WeeklyPerformanceChart";
import MonthlyComparisionChart from "./MonthlyComparisionChart/MonthlyComparisionChart";
import Logo from "../../public/logo-postvision.svg";
import Celular from "../../public/celular-postvision.png"

const steps = [
  {
    num: "1",
    title: "Entre no PostVision e escolha o exercício",
    icon: "mdi:cellphone",
  },
  {
    num: "2",
    title: "Deixe o corpo inteiro visível na câmera",
    icon: "mdi:human-greeting",
  },
  {
    num: "3",
    title: "Inicie a sessão e realize o movimento",
    icon: "mdi:play-circle",
  },
  {
    num: "4",
    title: "Veja sua análise e dicas para melhorar",
    icon: "gridicons:stats",
  },
];

const feedbackItems = [
  { icon: "mdi:chart-bar", text: "Desempenho por treino e semana" },
  { icon: "mdi:trending-up", text: "Comparativo de evolução" },
  { icon: "mdi:message-text", text: "Feedback técnico personalizado" },
  { icon: "mdi:lightbulb", text: "Dicas para melhorar sua postura" },
];

export default function ProjectSection() {
  const [chartsOpen, setChartsOpen] = useState(false);

  return (
    <section id="projeto" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3 gradient-text">
              Projeto em Destaque
            </p>
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-2xl font-bold text-slate-900">PostVision</h1>
            </div>
            <p className="text-sm font-medium mb-2 text-[#333333]">
              Análise Postural em Exercícios Físicos, Orientado por Visão Computacional
            </p>
            <p className="text-sm leading-relaxed text-[#333333]">
              PostVision é uma solução inteligente que usa visão computacional para te ajudar a treinar
              com mais segurança. Conheça sua postura, evite lesões e acompanhe sua evolução com
              tecnologia a favor da sua saúde.
            </p>
            <div className="flex items-center gap-3 mt-3 h-10">
              <a href="https://postvision.vercel.app" className="inline-flex items-center gap-2 px-5 h-full rounded-md text-sm font-medium transition-all border transition-transform duration-300 hover:scale-105"
                style={{ background: "#0d0f24", borderColor: "#334155", color: "#fff" }}>
                Teste agora o nosso projeto
              </a>
              <a href="https://github.com/postvision-pi" className="inline-flex justify-center items-center gap-2 w-10 h-full rounded-md text-sm font-medium transition-all border transition-transform duration-300 hover:scale-105"
                style={{ background: "#0d0f24", borderColor: "#334155", color: "#fff" }}>
                <Icon icon="mdi:github" width={24}/>
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-48 h-48 flex items-center justify-center rounded-2xl">
              <Image
                src={Logo}
                alt="PostVision icon"
                width={240}
                height={240}
                className="object-contain transition-transform duration-300 scale-120 hover:scale-130"
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-8">Como Funciona?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center gap-4 transition-transform duration-300 hover:scale-110">
                <div className="flex flex-col items-center text-center max-w-[160px]">
                  <div
                    className="w-13 h-13 rounded-xl flex items-center justify-center mb-3 relative"
                    style={{ background: "#0d0f24", border: "1px solid #1e2040" }}
                  >
                    <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">
                      {step.num}
                    </span>
                    <Icon icon={step.icon} className="text-white" width={28} />
                  </div>
                  <p className="text-sm text-[#333333] leading-tight">{step.title}</p>
                </div>
                {i < steps.length - 1 && (
                  <Icon
                    icon="mdi:arrow-right"
                    className="text-slate-600 hidden md:block flex-shrink-0"
                    width={20}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* App showcase */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Veja sua evolução na prática</h3>
            <p className="text-[#333333] text-sm mb-6">
              Dados reais do seu treino, analisados em tempo real.
            </p>
            <div className="space-y-3">
              {feedbackItems.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon icon="mdi:check" className="text-white" width={12} />
                  </div>
                  <span className="text-[#333333] text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-56 transition-transform duration-300 hover:scale-105">
              <Image
                src={Celular}
                alt="PostVision App"
                width={224}
                height={448}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Charts accordion */}
        <div className="rounded-2xl overflow-hidden border border-slate-200">
          {/* Accordion header — always visible */}
          <button
            onClick={() => setChartsOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Icon icon="mdi:chart-bar" className="text-blue-600" width={18} />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-900">Análises e Gráficos</p>
                <p className="text-xs text-[#333333]">
                  Último treino, desempenho semanal, comparativo mensal e feedback
                </p>
              </div>
            </div>
            <Icon
              icon={chartsOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
              className="text-slate-500 transition-transform flex-shrink-0"
              width={22}
            />
          </button>

          {/* Accordion body — collapsible */}
          <div
            className="overflow-hidden transition-all duration-400 ease-in-out"
            style={{ maxHeight: chartsOpen ? "800px" : "0px" }}
          >
            <div className="bg-slate-50 px-6 py-6">
              <div className="grid md:grid-cols-2 gap-4">
                <LastTrainingCharts />
                <WeeklyPerformanceChart />
                <MonthlyComparisionChart />
                <FeedbackChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
