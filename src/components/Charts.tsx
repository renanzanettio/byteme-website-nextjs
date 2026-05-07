"use client";

import { Icon } from "@iconify/react";

export default function FeedbackChart() {
  return (
    <div
      className="rounded-xl p-5"
      style={{ background: "#0d0f24", border: "1px solid #1e2040" }}
    >
      <p className="text-xs font-semibold text-blue-400 mb-3">Feedback do usuário</p>
      <div className="space-y-3">
        <div
          className="flex items-start gap-2 p-2 rounded-lg"
          style={{ background: "#111327" }}
        >
          <Icon
            icon="mdi:alert-circle"
            className="text-yellow-400 mt-0.5 flex-shrink-0"
            width={14}
          />
          <div>
            <p className="text-xs font-medium text-white">Ajustes Necessários</p>
            <p className="text-xs text-slate-400">Joelhos passando muito à frente</p>
            <p className="text-xs text-slate-400">Quadril não paralelo ao chão</p>
          </div>
        </div>
        <div
          className="flex items-start gap-2 p-2 rounded-lg"
          style={{ background: "#111327" }}
        >
          <Icon
            icon="mdi:lightbulb"
            className="text-blue-400 mt-0.5 flex-shrink-0"
            width={14}
          />
          <div>
            <p className="text-xs font-medium text-white">Dicas</p>
            <p className="text-xs text-slate-400">
              Mantenha os joelhos alinhados e o peso sobre os calcanhares.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
