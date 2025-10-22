"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronDown,
  Goal,
  Plus,
  RefreshCcw,
  ShieldAlert,
  Users
} from "lucide-react";
import {
  inactiveMembers,
  teamGoalTemplate,
  teamMembers
} from "@/lib/data";

type TabKey = "team" | "goals" | "inactive";

export default function SettingsTeamPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("team");
  const [rotationMembers, setRotationMembers] = useState(() =>
    teamMembers.reduce<Record<string, boolean>>((acc, member) => {
      acc[member.id] = member.inRotation;
      return acc;
    }, {})
  );
  const [goalInputs, setGoalInputs] = useState(() =>
    teamGoalTemplate.reduce<Record<string, string>>((acc, goal) => {
      acc[goal.memberId] = goal.goalValue;
      return acc;
    }, {})
  );
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [selectedInactive, setSelectedInactive] = useState<string>("");
  const [selectedActive, setSelectedActive] = useState<string>("");

  const rotationCount = useMemo(
    () => Object.values(rotationMembers).filter(Boolean).length,
    [rotationMembers]
  );

  const tabs: { key: TabKey; title: string; icon: React.ReactNode }[] = [
    { key: "team", title: "Equipe ativa", icon: <Users className="h-4 w-4" /> },
    { key: "goals", title: "Metas", icon: <Goal className="h-4 w-4" /> },
    {
      key: "inactive",
      title: "Desativados",
      icon: <ShieldAlert className="h-4 w-4" />
    }
  ];

  return (
    <section className="space-y-8">
      <header className="flex flex-wrap items-start justify-between gap-6 rounded-3xl border border-white/40 bg-white/70 p-8 shadow-soft">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Configurações · Equipe
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Gerencie o rodízio de leads, metas mensais e usuários desativados. Tudo conectado ao
            pipeline e relatórios do CRM.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <Badge variant="accent" className="gap-2">
              <Users className="h-4 w-4" /> {teamMembers.length} colaboradores ativos
            </Badge>
            <Badge variant="neutral" className="gap-2">
              <Check className="h-4 w-4" /> {rotationCount} no rodízio de leads
            </Badge>
            <Badge variant="neutral" className="gap-2">
              <RefreshCcw className="h-4 w-4" /> Atualizado há 5 minutos
            </Badge>
          </div>
        </div>

        <Button size="sm" variant="outline" className="gap-2 text-xs">
          <Plus className="h-4 w-4" /> Adicionar membro
        </Button>
      </header>

      <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex flex-wrap gap-3 rounded-2xl border border-white/50 bg-white/80 p-2 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={clsx(
                "inline-flex items-center gap-2 rounded-xl px-4 py-2 transition",
                activeTab === tab.key
                  ? "bg-gradient-accent text-white shadow-soft"
                  : "text-slate-500 hover:bg-white/70"
              )}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {activeTab === "team" ? (
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[880px] border-separate border-spacing-y-4 text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.3em] text-slate-400">
                  <th className="rounded-l-2xl bg-white/70 px-5 py-3">Rodízio</th>
                  <th className="bg-white/70 px-5 py-3">Nome</th>
                  <th className="bg-white/70 px-5 py-3">E-mail</th>
                  <th className="bg-white/70 px-5 py-3">Função</th>
                  <th className="bg-white/70 px-5 py-3">Squad</th>
                  <th className="rounded-r-2xl bg-white/70 px-5 py-3 text-right">
                    Visto por último
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member) => (
                  <tr
                    key={member.id}
                    className="rounded-2xl border border-white/60 bg-white/90 text-slate-600 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
                  >
                    <td className="rounded-l-2xl px-5 py-4">
                      <button
                        className={clsx(
                          "flex h-10 w-20 items-center rounded-full border border-white/50 px-1 transition",
                          rotationMembers[member.id]
                            ? "bg-gradient-accent text-white"
                            : "bg-white/70 text-slate-400"
                        )}
                        onClick={() =>
                          setRotationMembers((current) => ({
                            ...current,
                            [member.id]: !current[member.id]
                          }))
                        }
                      >
                        <span
                          className={clsx(
                            "flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-soft transition",
                            rotationMembers[member.id]
                              ? "translate-x-8 text-primary-500"
                              : ""
                          )}
                        >
                          {rotationMembers[member.id] ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </span>
                      </button>
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-900">
                      {member.name}
                    </td>
                    <td className="px-5 py-4 text-slate-500">{member.email}</td>
                    <td className="px-5 py-4 text-slate-500">{member.role}</td>
                    <td className="px-5 py-4 text-slate-500">{member.squad}</td>
                    <td className="rounded-r-2xl px-5 py-4 text-right text-slate-500">
                      {member.lastSeen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {activeTab === "goals" ? (
          <div className="mt-6 space-y-4">
            <p className="text-sm text-slate-500">
              Informe a meta financeira do mês {""}
              <span className="font-semibold text-slate-900">Outubro/2025</span> para cada membro.
            </p>
            <div className="space-y-3">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 px-4 py-4 shadow-soft"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {member.name}
                    </p>
                    <p className="text-xs text-slate-500">Função: {member.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm text-slate-500 shadow-soft">
                      R$
                      <input
                        value={goalInputs[member.id]}
                        onChange={(event) =>
                          setGoalInputs((current) => ({
                            ...current,
                            [member.id]: event.target.value
                          }))
                        }
                        placeholder="Coloque o valor da meta"
                        className="ml-2 w-40 bg-transparent outline-none"
                      />
                    </div>
                    <Button size="sm" className="text-xs uppercase tracking-[0.3em]">
                      Registrar meta
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {activeTab === "inactive" ? (
          <div className="mt-6 space-y-3">
            {inactiveMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/80 px-4 py-4 shadow-soft"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {member.name}
                  </p>
                  <p className="text-xs text-slate-500">{member.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm text-slate-500 shadow-soft">
                    Leads: {member.leads}
                  </div>
                  <Button
                    size="sm"
                    className="text-xs uppercase tracking-[0.3em]"
                    onClick={() => {
                      setIsTransferOpen(true);
                      setSelectedInactive(member.id);
                      setSelectedActive("");
                    }}
                  >
                    Transferir base
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs uppercase tracking-[0.3em]">
                    Reativar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {isTransferOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <div className="space-y-6">
              <header className="space-y-3">
                <h2 className="text-3xl font-semibold text-slate-900">Transferir Leads</h2>
                <p className="text-sm font-medium text-slate-600">
                  Transfira os lead de um usuário desativado para um ativo
                </p>
                <p className="text-sm text-slate-500">
                  O histórico permanece associado ao novo responsável e o usuário desativado será
                  liberado da carteira.
                </p>
              </header>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Selecione o usuário desativado
                  </label>
                  <div className="relative">
                    <select
                      value={selectedInactive}
                      onChange={(event) => setSelectedInactive(event.target.value)}
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-soft outline-none transition hover:border-primary-200 focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
                    >
                      <option value="">Escolha um usuário desativado</option>
                      {inactiveMembers.map((member) => (
                        <option key={member.id} value={member.id}>
                          {member.name} · {member.email}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Selecione o usuário que irá receber os leads
                  </label>
                  <div className="relative">
                    <select
                      value={selectedActive}
                      onChange={(event) => setSelectedActive(event.target.value)}
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-soft outline-none transition hover:border-primary-200 focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
                    >
                      <option value="">Escolha um usuário ativo</option>
                      {teamMembers.map((member) => (
                        <option key={member.id} value={member.id}>
                          {member.name} · {member.squad}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-11 min-w-[160px] text-sm font-semibold text-slate-600"
                  onClick={() => {
                    setIsTransferOpen(false);
                    setSelectedInactive("");
                    setSelectedActive("");
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  size="sm"
                  className="h-11 min-w-[160px] bg-[#ACD63E] text-sm font-semibold text-white hover:bg-[#9BC232]"
                  disabled={!selectedInactive || !selectedActive}
                >
                  Transferir
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
