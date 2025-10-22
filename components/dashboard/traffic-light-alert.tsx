"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import {
  defaultTrafficLightConfig,
  inactivityAlerts,
  type TrafficLightConfig
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Timer, TriangleAlert, Users } from "lucide-react";

const statusPalette = {
  green: {
    bg: "bg-success/15 border-success/30 text-success",
    label: "Dentro do SLA"
  },
  yellow: {
    bg: "bg-warning/15 border-warning/30 text-warning",
    label: "Atenção"
  },
  red: {
    bg: "bg-danger/10 border-danger/40 text-danger",
    label: "Crítico"
  }
} as const;

export function TrafficLightAlert() {
  const [config, setConfig] = useState<TrafficLightConfig>(
    defaultTrafficLightConfig
  );

  const insights = useMemo(() => {
    return inactivityAlerts.map((alert) => {
      if (alert.lastInteractionHours >= config.danger) {
        return { ...alert, status: "red" as const };
      }
      if (alert.lastInteractionHours >= config.warning) {
        return { ...alert, status: "yellow" as const };
      }
      return { ...alert, status: "green" as const };
    });
  }, [config]);

  return (
    <section className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="section-title">Controle de SLA</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
            Semáforo de interações
          </h2>
          <p className="mt-2 text-xs text-slate-500 max-w-xl">
            Defina regras de tempo sem resposta. O painel destaca contatos que
            precisam de atenção, permitindo ajustes rápidos pelo administrador.
          </p>
        </div>
        <Button size="sm" variant="outline" className="gap-2 text-xs">
          <Users className="h-4 w-4" />
          Distribuir automaticamente
        </Button>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-4 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Ajustes do administrador
          </p>
          <div>
            <label className="flex items-center justify-between text-sm font-semibold text-slate-900">
              Amarelo após (horas)
              <span className="text-primary-500">{config.warning}h</span>
            </label>
            <input
              type="range"
              min={1}
              max={config.danger - 1}
              value={config.warning}
              onChange={(event) =>
                setConfig((current) => ({
                  ...current,
                  warning: Math.min(
                    Number(event.target.value),
                    current.danger - 1
                  )
                }))
              }
              className="mt-2 h-1 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-warning"
            />
          </div>
          <div>
            <label className="flex items-center justify-between text-sm font-semibold text-slate-900">
              Vermelho após (horas)
              <span className="text-danger">{config.danger}h</span>
            </label>
            <input
              type="range"
              min={config.warning + 1}
              max={72}
              value={config.danger}
              onChange={(event) =>
                setConfig((current) => ({
                  ...current,
                  danger: Math.max(
                    Number(event.target.value),
                    current.warning + 1
                  )
                }))
              }
              className="mt-2 h-1 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-danger"
            />
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-2 text-primary-500">
              <Timer className="h-4 w-4" />
              Recalcular automações
            </span>
            <TriangleAlert className="h-4 w-4 text-warning" />
          </div>
        </div>

        <div className="space-y-4 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Status atual
          </p>
          <ul className="space-y-3 text-sm">
            {insights.map((alert) => (
              <li
                key={alert.name}
                className={clsx(
                  "flex items-center justify-between rounded-2xl border px-4 py-3",
                  statusPalette[alert.status].bg
                )}
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {alert.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    Responsável: {alert.owner}
                  </p>
                </div>
                <div className="text-right text-xs font-semibold uppercase tracking-[0.25em]">
                  <p>{statusPalette[alert.status].label}</p>
                  <p>{alert.lastInteractionHours}h sem resposta</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
