"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Check,
  ChevronDown,
  Globe,
  Link2,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users2
} from "lucide-react";

const brandPalette = [
  { label: "Primária", hex: "#0B7AFF" },
  { label: "Apoio", hex: "#8777FF" },
  { label: "Ênfase", hex: "#20C997" },
  { label: "Neutro", hex: "#0F172A" }
];

const distributionStrategies = [
  {
    id: "round-robin",
    name: "Rodízio inteligente",
    description:
      "Equilibra oportunidades entre os consultores, levando em conta disponibilidade e carga atual."
  },
  {
    id: "performance",
    name: "Performance +",
    description:
      "Prioriza quem possui melhor taxa de conversão no período selecionado."
  },
  {
    id: "territory",
    name: "Territórios",
    description:
      "Distribui por carteira/segmento (ex.: Enterprise, Mid-market, SMB)."
  }
];

const integrations = [
  { id: "slack", name: "Slack", description: "Alertas em tempo real no canal #crm" },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Sincroniza histórico de marketing e campanhas pagas."
  },
  { id: "gdrive", name: "Google Drive", description: "Modelos comerciais e playbooks." },
  {
    id: "powerbi",
    name: "Power BI",
    description: "Atualiza dashboards executivos a cada 30 minutos."
  }
];

export default function SettingsCompanyPage() {
  const [activeStrategy, setActiveStrategy] = useState<string>("round-robin");
  const [serviceLevel, setServiceLevel] = useState<number>(12);
  const [connectedIntegrations, setConnectedIntegrations] = useState<string[]>(["slack", "gdrive"]);

  const serviceLevelLabel = useMemo(() => {
    if (serviceLevel <= 8) return "Alta prioridade";
    if (serviceLevel <= 16) return "Equilibrado";
    return "Relaxe, estamos bem";
  }, [serviceLevel]);

  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-start justify-between gap-6 rounded-3xl border border-white/40 bg-white/70 p-8 shadow-soft">
        <div className="flex items-start gap-6">
          <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-white/70 bg-white/60 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=300&q=80"
              alt="Logo da empresa"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">PNL Crédito Seguro</h1>
            <p className="mt-1 text-sm text-slate-500">
              A base central de identidade e governança comercial da sua organização. Alinhe marca,
              processos e integrações para todos os squads.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              <Badge variant="accent" className="gap-2">
                <Building2 className="h-4 w-4" />
                Matriz · Belo Horizonte
              </Badge>
              <Badge variant="neutral" className="gap-2">
                <ShieldCheck className="h-4 w-4" />
                Compliance LGPD ativo
              </Badge>
              <Badge variant="neutral" className="gap-2">
                <Users2 className="h-4 w-4" />
                82 usuários habilitados
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <Link2 className="h-4 w-4" />
            Atualizar domínio público
          </Button>
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <Globe className="h-4 w-4" />
            Configurar subdomínios
          </Button>
          <Button size="sm" className="gap-2 text-xs">
            <Sparkles className="h-4 w-4" />
            Publicar brand kit
          </Button>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Identidade corporativa
              </h2>
              <p className="text-sm text-slate-500">
                Informações exibidas em propostas, contratos e dashboards compartilhados.
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              Editar dados
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Razão social</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                PNL Crédito Seguro Ltda
              </p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">CNPJ</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">18.234.567/0001-02</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Site público
              </p>
              <p className="mt-2 text-sm text-primary-500">https://pnlcreditoseguro.com.br</p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Contato oficial</p>
              <p className="mt-2 text-sm text-slate-600">contato@pnlcreditoseguro.com.br</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/60 bg-white/80 px-5 py-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Kit de marca
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Paleta</p>
                <div className="flex flex-wrap gap-3">
                  {brandPalette.map((color) => (
                    <div
                      key={color.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-white/60 bg-white/70 p-3 shadow-soft"
                    >
                      <span
                        className="h-10 w-10 rounded-full border border-white/60 shadow-soft"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                        {color.label}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {color.hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Tipografia</p>
                <div className="flex flex-col gap-3 text-sm text-slate-600">
                  <div className="rounded-xl border border-white/60 bg-white/70 px-4 py-3 shadow-soft">
                    <span className="font-semibold text-slate-900">Inter</span>
                    <p className="text-xs text-slate-500">Principal · Títulos e call-to-actions</p>
                  </div>
                  <div className="rounded-xl border border-white/60 bg-white/70 px-4 py-3 shadow-soft">
                    <span className="font-semibold text-slate-900">Manrope</span>
                    <p className="text-xs text-slate-500">Suporte · textos longos e descrições</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">SLA de atendimento</h2>
            <p className="text-sm text-slate-500">
              Defina o tempo máximo para retorno ao lead. Impacta diretamente o semáforo da operação.
            </p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/80 px-4 py-5 shadow-soft">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>Resposta em até</span>
              <span>{serviceLevel} horas</span>
            </div>
            <input
              type="range"
              min={4}
              max={24}
              value={serviceLevel}
              onChange={(event) => setServiceLevel(Number(event.target.value))}
              className="mt-4 w-full cursor-pointer"
            />
            <p className="mt-3 text-sm font-semibold text-primary-500">
              {serviceLevelLabel}
            </p>
            <p className="text-xs text-slate-500">
              Ajuste fino reflete imediatamente nos alerts da squad comercial e nos playbooks do
              copiloto.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Estratégia de distribuição de leads
            </h2>
            <div className="mt-3 space-y-3 text-sm">
              {distributionStrategies.map((strategy) => (
                <button
                  type="button"
                  key={strategy.id}
                  onClick={() => setActiveStrategy(strategy.id)}
                  className={clsx(
                    "w-full rounded-2xl border px-4 py-3 text-left shadow-soft transition",
                    activeStrategy === strategy.id
                      ? "border-primary-200 bg-primary-50/80 text-primary-600"
                      : "border-white/60 bg-white/80 text-slate-600 hover:border-primary-100"
                  )}
                >
                  <p className="text-sm font-semibold">{strategy.name}</p>
                  <p className="text-xs text-slate-500">{strategy.description}</p>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Integrações conectadas</h2>
            <p className="text-sm text-slate-500">
              Controle quais plataformas compartilham dados com o CRM. Ativação instantânea e segura.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>{connectedIntegrations.length} de {integrations.length} ativas</span>
            <span>·</span>
            <button className="text-primary-500">Gerenciar tokens</button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {integrations.map((integration) => {
            const isConnected = connectedIntegrations.includes(integration.id);
            return (
              <div
                key={integration.id}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 px-4 py-4 shadow-soft"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">{integration.name}</p>
                  <p className="text-xs text-slate-500">{integration.description}</p>
                </div>
                <button
                  onClick={() =>
                    setConnectedIntegrations((current) =>
                      isConnected
                        ? current.filter((item) => item !== integration.id)
                        : [...current, integration.id]
                    )
                  }
                  className={clsx(
                    "flex h-10 w-20 items-center rounded-full border border-white/50 px-1 transition",
                    isConnected
                      ? "bg-gradient-accent text-white"
                      : "bg-white/70 text-slate-400"
                  )}
                >
                  <span
                    className={clsx(
                      "flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-soft transition",
                      isConnected ? "translate-x-8 text-primary-500" : ""
                    )}
                  >
                    {isConnected ? <Check className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
