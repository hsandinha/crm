"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LeadStatusPill } from "@/components/leads/lead-status-pill";
import { leadsTable } from "@/lib/data";
import {
  ArrowUpDown,
  Filter,
  Mail,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Pin,
  Search,
  Sparkles,
  User
} from "lucide-react";

const statusLabel = {
  hot: "Alta prior.",
  warm: "Seguimento",
  cold: "Nutrição"
} as const;

export function LeadsTable() {
  const [selectedOwner, setSelectedOwner] = useState<string>("Todos");
  const [selectedStage, setSelectedStage] = useState<string>("Todas");
  const owners = useMemo(
    () => ["Todos", ...Array.from(new Set(leadsTable.map((lead) => lead.owner)))],
    []
  );
  const stages = useMemo(
    () => ["Todas", ...Array.from(new Set(leadsTable.map((lead) => lead.stage)))],
    []
  );

  const filteredLeads = useMemo(
    () =>
      leadsTable.filter((lead) => {
        const ownerMatch =
          selectedOwner === "Todos" || lead.owner === selectedOwner;
        const stageMatch =
          selectedStage === "Todas" || lead.stage === selectedStage;
        return ownerMatch && stageMatch;
      }),
    [selectedOwner, selectedStage]
  );

  return (
    <section className="space-y-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="section-title">Comercial</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Listagem de Contatos
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Inteligência comercial organizada por prioridade de atendimento.
            Visualize tags, funil, interações e distribua ações em poucos
            segundos.
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center gap-3 text-xs">
            <Badge variant="accent" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Copiloto identifica melhores próximos passos
            </Badge>
            <Badge variant="neutral" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Status por sentimento
            </Badge>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <Pin className="h-4 w-4" />
            Salvar visão
          </Button>
          <Button size="sm" className="gap-2 text-xs">
            <Mail className="h-4 w-4" />
            Exportar CSV
          </Button>
        </div>
      </header>

      <div className="space-y-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-white/60 bg-white/80 px-5 py-3 text-sm text-slate-500">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              className="flex-1 bg-transparent outline-none"
              placeholder="Buscar por nome, empresa ou tag..."
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedOwner}
              onChange={(event) => setSelectedOwner(event.target.value)}
              className="rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-soft outline-none transition hover:border-primary-200 focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
            >
              {owners.map((owner) => (
                <option key={owner}>{owner}</option>
              ))}
            </select>
            <select
              value={selectedStage}
              onChange={(event) => setSelectedStage(event.target.value)}
              className="rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 shadow-soft outline-none transition hover:border-primary-200 focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
            >
              {stages.map((stage) => (
                <option key={stage}>{stage}</option>
              ))}
            </select>
            <Button variant="outline" size="sm" className="gap-2 text-xs">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/50 bg-white/80 px-5 py-4 text-xs text-slate-500">
          <span className="font-semibold text-slate-900">
            {filteredLeads.length} contatos
          </span>{" "}
          visíveis. Receita potencial somada de{" "}
          <span className="font-semibold text-primary-600">
            R$ 148.850,00
          </span>
          . Atualizado há 2 minutos.
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] border-separate border-spacing-y-4 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.3em] text-slate-400">
                <th className="rounded-l-2xl bg-white/70 px-5 py-3">
                  Interesse
                </th>
                <th className="bg-white/70 px-5 py-3">Funil</th>
                <th className="bg-white/70 px-5 py-3">Contato</th>
                <th className="bg-white/70 px-5 py-3">Local</th>
                <th className="bg-white/70 px-5 py-3">
                  <div className="inline-flex items-center gap-2">
                    Interação
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="bg-white/70 px-5 py-3">Valor</th>
                <th className="rounded-r-2xl bg-white/70 px-5 py-3 text-right">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  className="rounded-2xl border border-white/60 bg-white/90 text-slate-600 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <td className="rounded-l-2xl px-5 py-4">
                    <div className="flex flex-col gap-2">
                      <LeadStatusPill status={lead.status} label={statusLabel[lead.status]} />
                      <p className="font-semibold text-slate-900">
                        {lead.interest}
                      </p>
                      <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-primary-500">
                        {lead.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-primary-100 bg-primary-500/10 px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        Etapa atual
                      </span>
                      <span className="font-semibold text-slate-900">
                        {lead.funnel}
                      </span>
                      <span className="text-xs text-slate-500">
                        {lead.stage}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {lead.name}
                        </p>
                        <p className="text-xs text-slate-400">{lead.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-primary-600">
                        <User className="h-3 w-3" />
                        {lead.owner}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-2 text-slate-600">
                        <MapPin className="h-3 w-3" />
                        {lead.city}
                      </span>
                      <span>Entrada {lead.entryDate}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
                        Última interação
                      </span>
                      <span className="font-semibold text-slate-900">
                        {lead.lastInteraction}
                      </span>
                      <span className="text-xs text-primary-600">
                        Score {lead.score}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-semibold text-slate-900">{lead.value}</p>
                    <p className="text-xs text-slate-400">Previsão +7 dias</p>
                  </td>
                  <td className="rounded-r-2xl px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Button variant="outline" size="sm" className="gap-2 text-xs">
                        Conversar
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-10 w-10 rounded-full border border-white/60 bg-white/70"
                      >
                        <MoreHorizontal className="h-4 w-4 text-slate-400" />
                      </Button>
                    </div>
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
