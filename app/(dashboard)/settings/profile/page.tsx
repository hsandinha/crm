"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  Edit,
  Link2,
  Lock,
  Mail,
  MapPin,
  Plus,
  Phone,
  Shield,
  UploadCloud,
  User
} from "lucide-react";

type Preference = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

const initialPreferences: Preference[] = [
  {
    id: "sales",
    label: "Alertas de vendas fechadas",
    description:
      "Receba confirmação instantânea quando um deal for marcado como ganho.",
    enabled: true
  },
  {
    id: "hot-leads",
    label: "Leads quentes priorizados",
    description:
      "Notificações sobre leads que atingirem score acima de 80 pontos.",
    enabled: true
  },
  {
    id: "daily-summary",
    label: "Resumo diário",
    description:
      "E-mail às 8h com pipeline, tarefas pendentes e próximas reuniões.",
    enabled: false
  },
  {
    id: "sla",
    label: "SLA prestes a vencer",
    description:
      "Receba avisos quando oportunidades estiverem sem contato há mais de 12h.",
    enabled: true
  },
  {
    id: "milestones",
    label: "Conquistas do time",
    description:
      "Celebrações automáticas quando a squad atingir metas intermediárias.",
    enabled: false
  }
];

export default function SettingsProfilePage() {
  const [preferences, setPreferences] = useState(initialPreferences);
  const [timezone, setTimezone] = useState("America/Sao_Paulo");
  const [language, setLanguage] = useState("pt-BR");

  const enabledCount = useMemo(
    () => preferences.filter((pref) => pref.enabled).length,
    [preferences]
  );

  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-start justify-between gap-6 rounded-3xl border border-white/40 bg-white/70 p-8 shadow-soft">
        <div className="flex items-center gap-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-white/70 bg-gradient-accent/10 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Natércia Samarino
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Diretora Comercial · Squad Enterprise
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs">
              <Badge variant="accent" className="gap-2">
                <CalendarDays className="h-4 w-4" />
                Entrou em 29/11/2022
              </Badge>
              <Badge variant="neutral" className="gap-2">
                <Shield className="h-4 w-4" />
                Acesso level enterprise
              </Badge>
              <Badge variant="neutral" className="gap-2">
                <Link2 className="h-4 w-4" />
                Conectada ao SSO corporativo
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <UploadCloud className="h-4 w-4" />
            Atualizar foto
          </Button>
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <Edit className="h-4 w-4" />
            Editar perfil
          </Button>
          <Button size="sm" className="gap-2 text-xs">
            <Lock className="h-4 w-4" />
            Alterar senha
          </Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Informações pessoais
              </h2>
              <p className="text-sm text-slate-500">
                Mantenha seus dados sempre atualizados para personalização de
                dashboards e comunicação interna.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Nome completo
              </span>
              <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft">
                Natércia Samarino
              </div>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                E-mail corporativo
              </span>
              <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-slate-600 shadow-soft">
                <Mail className="h-4 w-4 text-slate-400" />
                comercial@pnlcreditoseguro.com.br
              </div>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Telefone
              </span>
              <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-slate-600 shadow-soft">
                <Phone className="h-4 w-4 text-slate-400" />
                (31) 98586-6462
              </div>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Localização
              </span>
              <div className="flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-slate-600 shadow-soft">
                <MapPin className="h-4 w-4 text-slate-400" />
                Belo Horizonte, Minas Gerais · Brasil
              </div>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Idioma da interface
              </span>
              <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft">
                <span>{language === "pt-BR" ? "Português (Brasil)" : "English"}</span>
                <button
                  onClick={() =>
                    setLanguage((prev) => (prev === "pt-BR" ? "en-US" : "pt-BR"))
                  }
                  className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-500"
                >
                  Trocar
                </button>
              </div>
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Fuso horário
              </span>
              <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-soft">
                <span>
                  {timezone === "America/Sao_Paulo"
                    ? "GMT-3 · São Paulo"
                    : "GMT-4 · Manaus"}
                </span>
                <button
                  onClick={() =>
                    setTimezone((prev) =>
                      prev === "America/Sao_Paulo"
                        ? "America/Manaus"
                        : "America/Sao_Paulo"
                    )
                  }
                  className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-500"
                >
                  Ajustar
                </button>
              </div>
            </label>
          </div>

          <div className="rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Identidades conectadas
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1">
                <User className="h-3 w-3 text-primary-500" />
                Google Workspace
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1">
                <Shield className="h-3 w-3 text-success" />
                Microsoft Entra ID
              </span>
              <button className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-500/10 px-3 py-1 text-primary-500 transition hover:bg-primary-500/20">
                <Plus className="h-3 w-3" />
                Conectar nova conta
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Status & DNA comercial
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Suas métricas alimentam o ranking do time e inspiram novos
              rituais de reconhecimento.
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-500">
            <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>Score de influência</span>
                <span>89/100</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[89%] rounded-full bg-gradient-accent" />
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Baseado em feedbacks de clientes, tempo de resposta e aderência
                ao playbook.
              </p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>Foco atual</span>
                <span>Enterprise</span>
              </div>
              <p className="mt-2 text-sm text-slate-500">
                Especialista em deals de alto ticket com ciclo médio de 22 dias.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Habilidades em destaque
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-primary-500">
              <span className="rounded-full border border-primary-100 bg-primary-500/10 px-3 py-1">
                Negociação consultiva
              </span>
              <span className="rounded-full border border-primary-100 bg-primary-500/10 px-3 py-1">
                Storytelling
              </span>
              <span className="rounded-full border border-primary-100 bg-primary-500/10 px-3 py-1">
                Mentoria de squad
              </span>
            </div>
          </div>
        </aside>
      </div>

      <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Preferências de comunicação
            </h2>
            <p className="text-sm text-slate-500">
              Controle a cadência de notificações e escolha como deseja ser
              informado sobre avanços do CRM.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-500">
            <span>{enabledCount} opções ativas</span>
            <span>·</span>
            <button className="text-primary-500">Desativar tudo</button>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {preferences.map((pref) => (
            <div
              key={pref.id}
              className="flex items-start justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 px-4 py-4 shadow-soft"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {pref.label}
                </p>
                <p className="text-xs text-slate-500">{pref.description}</p>
              </div>
              <button
                onClick={() =>
                  setPreferences((current) =>
                    current.map((item) =>
                      item.id === pref.id
                        ? { ...item, enabled: !item.enabled }
                        : item
                    )
                  )
                }
                className={clsx(
                  "flex h-10 w-20 items-center rounded-full border border-white/50 px-1 transition",
                  pref.enabled
                    ? "bg-gradient-accent text-white"
                    : "bg-white/80 text-slate-400"
                )}
              >
                <span
                  className={clsx(
                    "flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-soft transition",
                    pref.enabled ? "translate-x-8 text-primary-500" : ""
                  )}
                >
                  {pref.enabled ? <Check className="h-4 w-4" /> : <Bell className="h-4 w-4" />}
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/80 px-4 py-4 text-xs text-slate-500">
          <span>
            Preferências em sincronia com Slack, e-mail e notificações push do
            app móvel.
          </span>
          <button className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.25em] text-primary-500">
            Ver histórico de notificações
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
