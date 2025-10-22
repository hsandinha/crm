import { smartLists, teamHealth } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Gauge, LifeBuoy } from "lucide-react";

export function SmartLists() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
      <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-title">Visões dinâmicas</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Segmentações inteligentes
            </h2>
          </div>
          <Badge variant="accent" className="gap-2">
            <LifeBuoy className="h-4 w-4" />
            Assistente sugere
          </Badge>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {smartLists.map((list) => (
            <div
              key={list.label}
              className="flex items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-4 text-sm shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-card"
            >
              <div>
                <p className="font-semibold text-slate-900">{list.label}</p>
                <p className="text-xs text-slate-400">Atualizado agora</p>
              </div>
              <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600">
                {list.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-title">Saúde da operação</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight">
              Indicadores críticos
            </h2>
          </div>
          <Gauge className="h-5 w-5 text-primary-500" />
        </div>

        <div className="mt-6 space-y-4">
          {teamHealth.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between gap-3 rounded-2xl border border-white/40 bg-white/80 px-4 py-4 shadow-soft"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-400">Últimos 7 dias</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-xs text-success">
                  +{stat.delta.toFixed(1)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
