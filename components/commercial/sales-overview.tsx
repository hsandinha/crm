import { MetricCard } from "@/components/ui/metric-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { salesHighlights, salesRecords } from "@/lib/data";
import {
  Award,
  BarChart3,
  Crown,
  Gauge,
  Sparkles,
  TrendingUp
} from "lucide-react";

const highlightIcons = {
  mrr: <BarChart3 className="h-5 w-5" />,
  enterprise: <Crown className="h-5 w-5" />,
  cycle: <Gauge className="h-5 w-5" />
} as const;

const sentimentBadge = {
  positivo: "bg-success/15 text-success border-success/30",
  neutro: "bg-warning/15 text-warning border-warning/30",
  negativo: "bg-danger/10 text-danger border-danger/30"
} as const;

export function SalesOverview() {
  return (
    <section className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="section-title">Comercial</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Performance de vendas
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Acompanhe fechamentos recentes, impacto em receita recorrente e
            acelere estratégias com insights acionáveis para o squad comercial.
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center gap-3 text-xs">
            <Badge variant="accent" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Projeção inteligente
            </Badge>
            <Badge variant="neutral" className="gap-2">
              <Award className="h-4 w-4" />
              Ranking atualizado
            </Badge>
          </div>
        </div>
        <Button size="sm" className="gap-2 text-xs">
          <TrendingUp className="h-4 w-4" />
          Exportar relatório
        </Button>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {salesHighlights.map((highlight) => (
          <MetricCard
            key={highlight.id}
            label={highlight.label}
            value={highlight.value}
            delta={highlight.delta}
            trend={highlight.trend}
            description={highlight.description}
            accent={highlightIcons[highlight.id as keyof typeof highlightIcons]}
          />
        ))}
      </div>

      <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4 border-b border-white/50 pb-4">
          <div>
            <p className="section-title">Últimas vitórias</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
              Deals fechados nos últimos 7 dias
            </h2>
          </div>
          <Badge variant="neutral">Atualizado há 8 min</Badge>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[780px] border-separate border-spacing-y-3 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.3em] text-slate-400">
                <th className="rounded-l-2xl bg-white/70 px-5 py-3">
                  Cliente
                </th>
                <th className="bg-white/70 px-5 py-3">Plano</th>
                <th className="bg-white/70 px-5 py-3">Valor</th>
                <th className="bg-white/70 px-5 py-3">Fechado por</th>
                <th className="bg-white/70 px-5 py-3">Data</th>
                <th className="bg-white/70 px-5 py-3">Ciclo</th>
                <th className="rounded-r-2xl bg-white/70 px-5 py-3 text-right">
                  Sentimento
                </th>
              </tr>
            </thead>
            <tbody>
              {salesRecords.map((record) => (
                <tr
                  key={record.id}
                  className="rounded-2xl border border-white/50 bg-white/90 text-slate-600 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <td className="rounded-l-2xl px-5 py-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900">
                        {record.client}
                      </span>
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {record.company}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">{record.plan}</td>
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    {record.value}
                  </td>
                  <td className="px-5 py-4">{record.closedBy}</td>
                  <td className="px-5 py-4 text-slate-500">{record.closedAt}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-500">
                      {record.cycleDays} dias
                    </span>
                  </td>
                  <td className="rounded-r-2xl px-5 py-4 text-right">
                    <span
                      className={`inline-flex items-center justify-end gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${sentimentBadge[record.sentiment]}`}
                    >
                      {record.sentiment}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
