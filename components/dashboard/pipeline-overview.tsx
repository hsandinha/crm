import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { pipelineStages } from "@/lib/data";
import { ArrowUpRight, ArrowDownRight, ActivitySquare } from "lucide-react";

export function PipelineOverview() {
  return (
    <section className="rounded-3xl border border-white/30 bg-white/60 p-6 shadow-soft backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-title">Pipeline inteligente</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Onde focar hoje
          </h2>
        </div>
        <Badge variant="accent" className="gap-2">
          <ActivitySquare className="h-4 w-4" />
          Modo preditivo
        </Badge>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {pipelineStages.map((stage) => {
          const deltaPositive = stage.change >= 0;
          return (
            <div
              key={stage.id}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/40 bg-white/70 p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {stage.title}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">
                    {stage.value}
                  </p>
                  <p className="text-xs font-medium text-slate-400">
                    oportunidades
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {deltaPositive ? (
                    <ArrowUpRight className="h-4 w-4 text-success" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-danger" />
                  )}
                  {Math.abs(stage.change).toFixed(0)}%
                </span>
              </div>

              <div className="space-y-3">
                {stage.leads.map((lead) => (
                  <div
                    key={lead.name}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/40 bg-white/80 px-3 py-3 text-sm shadow-soft"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar initials={lead.initials} className="h-9 w-9" />
                      <div>
                        <p className="font-semibold text-slate-900">
                          {lead.name}
                        </p>
                        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                          {lead.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                        valor
                      </p>
                      <p className="font-semibold text-slate-700">
                        {lead.value}
                      </p>
                      <p className="text-xs text-primary-500">
                        score {lead.score}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
