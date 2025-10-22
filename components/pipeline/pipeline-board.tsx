"use client";

import { useCallback, useState, type DragEvent } from "react";
import { clsx } from "clsx";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { pipelineStages } from "@/lib/data";
import { ArrowUpRight, Filter, LayoutGrid, Plus, Sparkles } from "lucide-react";

export function PipelineBoard() {
  const [stages, setStages] = useState(() =>
    pipelineStages.map((stage) => ({
      ...stage,
      leads: stage.leads.map((lead) => ({ ...lead }))
    }))
  );
  const [draggedLeadId, setDraggedLeadId] = useState<string | null>(null);
  const [overStageId, setOverStageId] = useState<string | null>(null);

  const handleDragStart = useCallback(
    (event: DragEvent<HTMLDivElement>, stageId: string, leadId: string) => {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData(
        "application/json",
        JSON.stringify({ stageId, leadId })
      );
      setDraggedLeadId(leadId);
    },
    []
  );

  const handleDragEnd = useCallback(() => {
    setDraggedLeadId(null);
    setOverStageId(null);
  }, []);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>, targetStageId: string) => {
      event.preventDefault();
      const raw = event.dataTransfer.getData("application/json");
      if (!raw) {
        handleDragEnd();
        return;
      }

      const { stageId: sourceStageId, leadId } = JSON.parse(raw) as {
        stageId: string;
        leadId: string;
      };

      if (sourceStageId === targetStageId) {
        handleDragEnd();
        return;
      }

      setStages((prev) => {
        const next = prev.map((stage) => ({
          ...stage,
          leads: stage.leads.map((lead) => ({ ...lead }))
        }));

        const sourceStage = next.find((stage) => stage.id === sourceStageId);
        const targetStage = next.find((stage) => stage.id === targetStageId);

        if (!sourceStage || !targetStage) {
          return prev;
        }

        const leadIndex = sourceStage.leads.findIndex(
          (lead) => lead.id === leadId
        );

        if (leadIndex === -1) {
          return prev;
        }

        const [lead] = sourceStage.leads.splice(leadIndex, 1);
        targetStage.leads.unshift(lead);

        sourceStage.value = sourceStage.leads.length;
        targetStage.value = targetStage.leads.length;

        return next;
      });

      handleDragEnd();
    },
    [handleDragEnd]
  );

  const handleDragEnter = useCallback((stageId: string) => {
    setOverStageId(stageId);
  }, []);

  const handleDragLeave = useCallback(
    (event: DragEvent<HTMLDivElement>, stageId: string) => {
      if (event.currentTarget.contains(event.relatedTarget as Node)) {
        return;
      }
      setOverStageId((current) => (current === stageId ? null : current));
    },
    []
  );

  return (
    <section className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="section-title">Pipeline</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Esteira de vendas sensorial
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Organização por estágio, visão kanban, altas doses de personalização
            e assistente inteligente que aponta onde agir primeiro.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="accent" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Recomendações de foco
          </Badge>
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <Filter className="h-4 w-4" />
            Filtros dinâmicos
          </Button>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Novo lead
          </Button>
        </div>
      </header>

      <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="rounded-full border border-white/60 bg-white/80 px-3 py-1 uppercase tracking-[0.3em]">
              Responsável: Todos
            </span>
            <span className="rounded-full border border-white/60 bg-white/80 px-3 py-1 uppercase tracking-[0.3em]">
              Interesse: Plano Prime
            </span>
            <span className="rounded-full border border-white/60 bg-white/80 px-3 py-1 uppercase tracking-[0.3em]">
              Ordenação: Engajamento
            </span>
          </div>
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <LayoutGrid className="h-4 w-4" />
            Exportar visão
          </Button>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-4">
          {stages.map((stage) => (
            <div
              key={stage.id}
              onDragOver={handleDragOver}
              onDragEnter={() => handleDragEnter(stage.id)}
              onDragLeave={(event) => handleDragLeave(event, stage.id)}
              onDrop={(event) => handleDrop(event, stage.id)}
              className={clsx(
                "flex h-full flex-col gap-4 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
                overStageId === stage.id
                  ? "border-primary-200 bg-primary-50/60"
                  : ""
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {stage.title}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {stage.leads.length} cards
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                  <ArrowUpRight className="h-4 w-4" />
                  2.3x
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-gradient-accent/10 px-4 py-3 text-xs text-primary-600">
                <span>Prioridade AI</span>
                <span className="font-semibold uppercase tracking-[0.3em]">
                  {stage.leads.length} leads
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3">
                {stage.leads.map((lead) => (
                  <div
                    key={lead.id}
                    draggable
                    onDragStart={(event) =>
                      handleDragStart(event, stage.id, lead.id)
                    }
                    onDragEnd={handleDragEnd}
                    className={clsx(
                      "space-y-3 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-soft transition-all",
                      draggedLeadId === lead.id
                        ? "opacity-60 ring-2 ring-primary-200 ring-offset-2 ring-offset-white/70"
                        : "hover:-translate-y-0.5 hover:shadow-card"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar initials={lead.initials} className="h-9 w-9" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {lead.name}
                          </p>
                          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                            {lead.company}
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                        Score {lead.score}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Próximo passo recomendado</span>
                      <span className="font-semibold text-primary-600">
                        Enviar proposta revisada
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Valor potencial</span>
                      <span className="font-semibold text-slate-900">
                        {lead.value}
                      </span>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="mt-auto h-12">
                  + Carregar mais
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
