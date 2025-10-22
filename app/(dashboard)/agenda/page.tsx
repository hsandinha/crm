"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarClock,
  CalendarPlus,
  Check,
  Flame,
  MapPin,
  Pencil,
  PhoneCall,
  Sparkles,
  TrendingUp,
  UsersRound
} from "lucide-react";
import { teamMembers } from "@/lib/data";

type ActivityImpact = "Alto" | "Médio" | "Baixo";

type ActivityItem = {
  id: string;
  title: string;
  type: "Ligação" | "Reunião" | "Tarefa";
  owner: string;
  start: string;
  end?: string;
  location?: string;
  description: string;
  impact: ActivityImpact;
};

const dailyActivities: Record<"hoje" | "amanha", ActivityItem[]> = {
  hoje: [
    {
      id: "event-1",
      title: "Ligação com Paula Monteiro",
      type: "Ligação",
      owner: "Natércia Samarino",
      start: "09:30",
      end: "10:15",
      location: "Discador Omnichannel",
      description: "Revisar proposta enterprise após feedback jurídico",
      impact: "Alto"
    },
    {
      id: "event-2",
      title: "Reunião Squad Enterprise",
      type: "Reunião",
      owner: "Naftalia",
      start: "11:00",
      end: "11:45",
      location: "Sala de estratégia",
      description: "Daily para atualizar forecast semanal",
      impact: "Médio"
    },
    {
      id: "event-3",
      title: "Enviar proposta revisada",
      type: "Tarefa",
      owner: "Maria Eduarda",
      start: "16:30",
      end: "17:00",
      description: "Compartilhar versão final com cláusulas de SLA",
      impact: "Alto"
    }
  ],
  amanha: [
    {
      id: "event-4",
      title: "Kickoff com Magnolia Labs",
      type: "Reunião",
      owner: "Natércia Samarino",
      start: "10:00",
      end: "11:00",
      location: "Google Meet",
      description: "Onboarding e alinhamento de integrações",
      impact: "Alto"
    },
    {
      id: "event-5",
      title: "Follow-up leads quentes",
      type: "Ligação",
      owner: "Naftalia",
      start: "14:30",
      end: "15:00",
      location: "Discador",
      description: "Contatar leads com score acima de 80",
      impact: "Médio"
    }
  ]
};

const weeklyPulse = [
  { day: "Seg", date: "21/10", calls: 5, meetings: 3, tasks: 4 },
  { day: "Ter", date: "22/10", calls: 3, meetings: 2, tasks: 6 },
  { day: "Qua", date: "23/10", calls: 4, meetings: 4, tasks: 5 },
  { day: "Qui", date: "24/10", calls: 6, meetings: 1, tasks: 7 },
  { day: "Sex", date: "25/10", calls: 2, meetings: 3, tasks: 4 }
];

const quickTemplates = [
  {
    id: "call",
    label: "Ligação",
    description: "Adicionar follow-up instantâneo",
    icon: <PhoneCall className="h-4 w-4" />
  },
  {
    id: "meeting",
    label: "Reunião",
    description: "Agenda com cliente ou squad",
    icon: <UsersRound className="h-4 w-4" />
  },
  {
    id: "task",
    label: "Tarefa",
    description: "Checklist interno ou envio de materiais",
    icon: <Check className="h-4 w-4" />
  }
];

const upcomingReminders = [
  {
    id: "reminder-1",
    label: "Contato quente aguardando follow-up",
    due: "Hoje · 12:00",
    owner: "Nathalia Anapio"
  },
  {
    id: "reminder-2",
    label: "Renegociação com BioLab",
    due: "Hoje · 17:00",
    owner: "Maria Eduarda"
  },
  {
    id: "reminder-3",
    label: "Checklist pós-onboarding",
    due: "Amanhã · 09:00",
    owner: "Natércia Samarino"
  }
];

const backlogQueue = [
  {
    id: "backlog-1",
    title: "Revisar playbook Mid-Market",
    owner: "Naftalia",
    eta: "Prazo: 23/10"
  },
  {
    id: "backlog-2",
    title: "Atualizar deck demo",
    owner: "Natércia Samarino",
    eta: "Prazo: 24/10"
  },
  {
    id: "backlog-3",
    title: "Disparar campanha de reativação",
    owner: "Maria Eduarda",
    eta: "Prazo: 25/10"
  }
];

const START_MINUTES = 8 * 60;
const END_MINUTES = 20 * 60;
const HOUR_HEIGHT = 80;
const MINUTE_HEIGHT = HOUR_HEIGHT / 60;

const hourMarkers = Array.from({ length: (END_MINUTES - START_MINUTES) / 60 + 1 }, (_, index) =>
  START_MINUTES + index * 60
);

const timelineHeight = (END_MINUTES - START_MINUTES) * MINUTE_HEIGHT;

const parseTime = (value: string) => {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
};

const formatMinutes = (minutes: number) =>
  `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;

const metricsConfig = [
  {
    id: "today",
    label: "Atividades hoje",
    description: "Organizadas por prioridade",
    icon: <CalendarClock className="h-4 w-4 text-primary-500" />
  },
  {
    id: "calls",
    label: "Ligações programadas",
    description: "Integração com discador",
    icon: <PhoneCall className="h-4 w-4 text-success" />
  },
  {
    id: "tasks",
    label: "Tarefas críticas",
    description: "Pendentes para o squad",
    icon: <Flame className="h-4 w-4 text-warning" />
  }
];

export default function AgendaPage() {
  const [activeDay, setActiveDay] = useState<"hoje" | "amanha">("hoje");
  const [quickOwner, setQuickOwner] = useState(teamMembers[0]?.name ?? "");
  const [selectedTemplate, setSelectedTemplate] = useState("call");

  const metrics = useMemo(() => {
    const todayTotal = dailyActivities.hoje.length;
    const callsTotal = dailyActivities.hoje.filter((item) => item.type === "Ligação").length;
    const tasksTotal = dailyActivities.hoje.filter((item) => item.type === "Tarefa").length;

    return [
      { ...metricsConfig[0], value: todayTotal },
      { ...metricsConfig[1], value: callsTotal },
      { ...metricsConfig[2], value: tasksTotal }
    ];
  }, []);

  const renderTimeLabel = (event: ActivityItem) =>
    event.end ? `${event.start} - ${event.end}` : event.start;

  const eventsForDay = dailyActivities[activeDay] ?? [];

  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-start justify-between gap-6 rounded-3xl border border-white/40 bg-white/70 p-8 shadow-soft">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Agenda inteligente</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Controle total das interações comerciais: ligações, reuniões e tarefas conectadas ao
            pipeline. Visualize o que precisa de atenção agora e planeje os próximos passos com alguns
            cliques.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <Badge variant="accent" className="gap-2">
              <Sparkles className="h-4 w-4" /> Copiloto sugere melhores horários
            </Badge>
            <Badge variant="neutral" className="gap-2">
              <TrendingUp className="h-4 w-4" /> Insights baseados em conversão real
            </Badge>
          </div>
        </div>

        <Button size="sm" className="gap-2 text-xs">
          <CalendarPlus className="h-4 w-4" /> Nova atividade
        </Button>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="rounded-3xl border border-white/50 bg-white/80 p-5 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-primary-500/10 p-2 text-primary-500">
                {metric.icon}
              </div>
              <span className="text-3xl font-semibold text-slate-900">{metric.value}</span>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-900">{metric.label}</p>
            <p className="text-xs text-slate-500">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Criação rápida</p>
                <p className="text-xs text-slate-500">
                  Escolha um formato e defina rapidamente o responsável.
                </p>
              </div>
              <select
                value={quickOwner}
                onChange={(event) => setQuickOwner(event.target.value)}
                className="rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-soft outline-none"
              >
                {teamMembers.map((member) => (
                  <option key={member.name}>{member.name}</option>
                ))}
              </select>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {quickTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={clsx(
                    "flex h-full flex-col justify-between rounded-2xl border border-white/60 bg-white/80 p-4 text-left text-sm transition hover:-translate-y-0.5 hover:shadow-card",
                    selectedTemplate === template.id
                      ? "border-primary-200 bg-primary-50/80"
                      : ""
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary-500/10 p-2 text-primary-500">
                      {template.icon}
                    </span>
                    <p className="font-semibold text-slate-900">{template.label}</p>
                  </div>
                  <p className="mt-3 text-xs text-slate-500">{template.description}</p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                    + Agendar
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-slate-900">Backlog e planejamento</h2>
            <p className="text-xs text-slate-500">
              Distribua tarefas estratégicas por responsável e mantenha o squad alinhado.
            </p>
            <div className="mt-4 space-y-3">
              {backlogQueue.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.eta}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-primary-500">
                    <span className="rounded-full bg-primary-500/10 px-3 py-1 font-semibold uppercase tracking-[0.3em]">
                      {item.owner}
                    </span>
                    <button className="rounded-full border border-primary-100 px-3 py-1 font-semibold uppercase tracking-[0.3em]">
                      Delegar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Linha do tempo diária</p>
                <p className="text-xs text-slate-500">
                  Blocos de uma hora com eventos dimensionados proporcionalmente.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs text-slate-500 shadow-soft">
                <button
                  className={clsx(
                    "rounded-full px-3 py-1 font-semibold transition",
                    activeDay === "hoje"
                      ? "bg-gradient-accent text-white"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                  onClick={() => setActiveDay("hoje")}
                >
                  Hoje
                </button>
                <button
                  className={clsx(
                    "rounded-full px-3 py-1 font-semibold transition",
                    activeDay === "amanha"
                      ? "bg-gradient-accent text-white"
                      : "text-slate-500 hover:text-slate-900"
                  )}
                  onClick={() => setActiveDay("amanha")}
                >
                  Amanhã
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[80px_1fr]">
              <div className="space-y-0 text-xs font-semibold text-slate-400">
                {hourMarkers.map((minutes) => (
                  <div
                    key={minutes}
                    className="flex h-[80px] items-start justify-end pr-4 pt-1"
                  >
                    {formatMinutes(minutes)}
                  </div>
                ))}
              </div>

              <div
                className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80"
                style={{ height: timelineHeight }}
              >
                {hourMarkers.map((minutes, index) => (
                  <div
                    key={`marker-${minutes}`}
                    className="absolute left-6 right-6 border-t border-white/60"
                    style={{ top: index * HOUR_HEIGHT }}
                  />
                ))}

                {eventsForDay.map((event) => {
                  const start = parseTime(event.start);
                  const end = event.end ? parseTime(event.end) : start + 30;
                  const top = (start - START_MINUTES) * MINUTE_HEIGHT;
                  const height = Math.max((end - start) * MINUTE_HEIGHT, 64);

                  return (
                    <div
                      key={event.id}
                      className="absolute left-6 right-6 flex flex-col justify-between rounded-2xl border border-primary-200/60 bg-white/95 px-3 py-2 shadow-[0_15px_40px_-20px_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-card"
                      style={{ top, height }}
                    >
                      <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
                        {event.title}
                        <Badge variant="accent">{event.impact}</Badge>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                        {renderTimeLabel(event)} · {event.type} · {event.owner}
                        {event.location ? ` · ${event.location}` : ""}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Próximos lembretes</h2>
            <p className="text-xs text-slate-500">Alertas críticos sugeridos pelo copiloto.</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {upcomingReminders.map((action) => (
                <div
                  key={action.id}
                  className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{action.label}</p>
                    <p className="text-xs text-slate-500">{action.owner}</p>
                  </div>
                  <Badge variant="accent">{action.due}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Semana em foco</h2>
            <p className="text-xs text-slate-500">Volume planejado por dia útil.</p>
            <div className="mt-3 space-y-2">
              {weeklyPulse.map((day) => (
                <div
                  key={day.day}
                  className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {day.day} · {day.date}
                    </p>
                    <p className="text-xs text-slate-500">
                      {day.calls} ligações · {day.meetings} reuniões · {day.tasks} tarefas
                    </p>
                  </div>
                  <Badge variant="accent">Ritmo ideal</Badge>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
