import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Calendar,
  Gauge,
  Rocket,
  Sparkles
} from "lucide-react";

const goals = [
  {
    title: "Expansão Enterprise",
    target: "R$ 1.2M",
    progress: 68,
    deadline: "31 Dez 2025"
  },
  {
    title: "Satisfação do cliente",
    target: "NPS 72",
    progress: 54,
    deadline: "15 Nov 2025"
  },
  {
    title: "Tempo médio de ciclo",
    target: "16 dias",
    progress: 48,
    deadline: "30 Out 2025"
  }
];

export default function GoalsPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/40 bg-white/70 p-10 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="section-title">Metas</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
              Crescimento com propósito
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-500">
              Acompanhe evolução de metas com visualizações impactantes e
              alinhamento entre squads. Transparência absoluta, foco consistente.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-center gap-3">
              <Badge variant="accent" className="gap-2 text-xs">
                <Sparkles className="h-4 w-4" />
                Planejamento assistido
              </Badge>
              <Badge variant="neutral" className="text-xs">
                Atualizado em tempo real
              </Badge>
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/60 bg-gradient-accent/10 p-6 text-sm text-slate-600 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              foco trimestral
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              Operação e experiência caminhando juntas
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Cada meta conecta diretamente com rituais e iniciativas. Um painel
              envolvente para celebrações e ajustes finos.
            </p>
            <Button size="sm" className="mt-4">
              Criar nova meta
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {goals.map((goal) => (
          <article
            key={goal.title}
            className="space-y-4 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Meta
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                  {goal.title}
                </h2>
              </div>
              <Badge variant="accent" className="gap-2">
                <Gauge className="h-4 w-4" />
                {goal.progress}%
              </Badge>
            </div>
            <div className="rounded-2xl border border-white/50 bg-white/80 px-4 py-3 text-sm text-slate-500">
              <div className="flex items-center justify-between">
                <span>Objetivo</span>
                <span className="font-semibold text-slate-900">
                  {goal.target}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Prazo
                </span>
                <span>{goal.deadline}</span>
              </div>
            </div>
            <div className="space-y-2 text-xs text-slate-500">
              <div className="flex items-center justify-between">
                <span>Execução</span>
                <span className="font-semibold text-primary-600">Em curso</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-accent"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
              <p>
                Conectado com squads de {goal.title.toLowerCase()} — alinhamento
                total com pipeline.
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/40 bg-white/70 p-10 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="section-title">Próximos rituais</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              Semanas com foco e energia
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Combine cadência comercial com experiências memoráveis. Cada ritual
              possui um ambiente visual único para manter o time inspirado.
            </p>
          </div>
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <Rocket className="h-4 w-4" />
            Ver playbook
          </Button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Review de oportunidades",
              description:
                "Sala imersiva com cards 3D e highlights automáticos dos deals críticos.",
              time: "Todas as segundas às 9h"
            },
            {
              title: "Celebration Friday",
              description:
                "Clima futurista, animações sutis e destaques das conquistas individuais.",
              time: "Sextas às 17h30"
            }
          ].map((ritual) => (
            <div
              key={ritual.title}
              className="rounded-2xl border border-white/50 bg-white/80 px-5 py-4 shadow-soft"
            >
              <p className="text-sm font-semibold text-slate-900">
                {ritual.title}
              </p>
              <p className="mt-1 text-xs text-slate-500">{ritual.description}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-500">
                <ArrowUpRight className="h-3 w-3" />
                {ritual.time}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
