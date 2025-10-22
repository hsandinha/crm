"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import {
  BadgeCheck,
  Bot,
  Check,
  ChevronRight,
  CircleDashed,
  MessageCircleMore,
  MessageSquareText,
  PhoneCall,
  Power,
  Radio,
  RefreshCcw,
  Settings2,
  Sparkles,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  whatsappConversations,
  type WhatsAppConversation,
  type WhatsAppMessage
} from "@/lib/data";

const statusStyles = {
  quente: "bg-success/15 text-success border-success/30",
  morno: "bg-warning/15 text-warning border-warning/30",
  frio: "bg-slate-200 text-slate-600 border-slate-300"
} as const;

const bubbleClasses = {
  cliente: "self-start bg-white/90 text-slate-700 border-white/70",
  agente: "self-end bg-gradient-accent text-white border-transparent",
  bot: "self-start bg-primary-500/10 text-primary-600 border-primary-200/60"
} satisfies Record<WhatsAppMessage["from"], string>;

export function WhatsAppWorkspace() {
  const [connected, setConnected] = useState(true);
  const [autoDistribute, setAutoDistribute] = useState(true);
  const [roundRobin, setRoundRobin] = useState(true);
  const [priorityScore, setPriorityScore] = useState(true);
  const [selectedConversationId, setSelectedConversationId] = useState(
    whatsappConversations[0]?.id ?? ""
  );

  const selectedConversation = useMemo<WhatsAppConversation | undefined>(
    () =>
      whatsappConversations.find(
        (conversation) => conversation.id === selectedConversationId
      ),
    [selectedConversationId]
  );

  return (
    <section className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="section-title">WhatsApp</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Atendimento conversacional integrado
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Conecte sua conta oficial, distribua conversas com inteligência e
            prepare o terreno para o copiloto que fará atendimentos humanos +
            IA, sem ruídos de experiência.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
            <Badge variant="accent" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Orquestração inteligente
            </Badge>
            <Badge variant="neutral" className="gap-2">
              <Bot className="h-4 w-4" />
              IA em desenvolvimento
            </Badge>
          </div>
        </div>
        <div className="rounded-3xl border border-white/50 bg-white/70 px-6 py-5 text-sm text-slate-600 shadow-soft">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Status da conexão
          </p>
          <div className="mt-3 flex items-center gap-3">
            <span
              className={clsx(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
                connected
                  ? "border-success/20 bg-success/15 text-success"
                  : "border-danger/20 bg-danger/10 text-danger"
              )}
            >
              <CircleDashed className="h-4 w-4" />
              {connected ? "Conectado" : "Desconectado"}
            </span>
            <Button
              variant={connected ? "outline" : "primary"}
              size="sm"
              className="gap-2 text-xs"
              onClick={() => setConnected((state) => !state)}
            >
              {connected ? (
                <>
                  <Power className="h-4 w-4" /> Desconectar
                </>
              ) : (
                <>
                  <BadgeCheck className="h-4 w-4" /> Conectar conta
                </>
              )}
            </Button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Use um número oficial. Sincronizamos histórico e etiquetas em poucos
            minutos.
          </p>
        </div>
      </header>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <div className="flex min-h-[540px] flex-col gap-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-title">Fila dinâmica</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight">
                Conversas em andamento
              </h2>
            </div>
            <Button size="sm" variant="outline" className="gap-2 text-xs">
              <RefreshCcw className="h-4 w-4" />
              Sincronizar agora
            </Button>
          </div>

          <div className="grid flex-1 gap-4 lg:grid-cols-[1.1fr_1.8fr]">
            <aside className="flex flex-col space-y-3 rounded-2xl border border-white/50 bg-white/80 p-3 shadow-soft">
              <div className="flex items-center justify-between rounded-2xl bg-slate-100/70 px-3 py-2 text-xs text-slate-500">
                <span>Prioridade IA</span>
                <span>Atualizado há 1 min</span>
              </div>
              <div className="space-y-2 overflow-y-auto">
                {whatsappConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversationId(conversation.id)}
                    className={clsx(
                      "w-full rounded-2xl border px-4 py-3 text-left transition-all",
                      selectedConversationId === conversation.id
                        ? "border-primary-200 bg-primary-50/80 shadow-card"
                        : "border-white/50 bg-white/80 hover:-translate-y-0.5 hover:border-primary-100 hover:shadow-soft"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-accent text-sm font-semibold text-white">
                          {conversation.avatar}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {conversation.contact}
                          </p>
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                            {conversation.company}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">
                        {conversation.updatedAt}
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-xs text-slate-500">
                      {conversation.lastMessage}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span
                        className={clsx(
                          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]",
                          statusStyles[conversation.status]
                        )}
                      >
                        <Radio className="h-3 w-3" />
                        {conversation.status}
                      </span>
                      <span className="flex items-center gap-2 text-[11px] font-semibold text-primary-500">
                        <Users className="h-3 w-3" />
                        {conversation.assignedTo}
                      </span>
                      {conversation.unread > 0 ? (
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-danger text-xs font-semibold text-white">
                          {conversation.unread}
                        </span>
                      ) : null}
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            <div className="flex flex-col rounded-2xl border border-white/50 bg-white/80 p-5 shadow-soft">
              {selectedConversation ? (
                <>
                  <div className="flex items-start justify-between gap-4 border-b border-white/60 pb-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {selectedConversation.contact}
                      </p>
                      <p className="text-xs text-slate-500">
                        Última atualização {selectedConversation.updatedAt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Badge variant="accent" className="gap-2">
                        <PhoneCall className="h-4 w-4" />
                        Transferir
                      </Badge>
                      <Badge variant="neutral" className="gap-2">
                        <MessageSquareText className="h-4 w-4" />
                        Template
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-1">
                    {selectedConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={clsx(
                          "flex flex-col gap-1 rounded-2xl border px-4 py-3 text-sm shadow-soft transition-all",
                          bubbleClasses[message.from]
                        )}
                      >
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em]">
                          <span>
                            {message.from === "bot"
                              ? "Assistente Nova"
                              : message.author}
                          </span>
                          <span>{message.time}</span>
                        </div>
                        <p>{message.content}</p>
                        {message.tags ? (
                          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.25em] text-primary-200">
                            {message.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-primary-100 bg-primary-500/10 px-2 py-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-2 text-primary-500">
                        <Bot className="h-4 w-4" />
                        IA conversacional — em breve: respostas autônomas
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-soft">
                      <input
                        className="flex-1 bg-transparent text-sm outline-none"
                        placeholder="Escreva uma mensagem ou use um comando do copiloto..."
                      />
                      <Button size="sm" className="gap-2 text-xs">
                        Enviar
                        <MessageCircleMore className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-500">
                  Selecione uma conversa para visualizar o histórico.
                </div>
              )}
            </div>
          </div>
        </div>

        <aside className="space-y-4 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
          <div>
            <p className="section-title">Distribuição</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              Regras de roteamento
            </h2>
            <p className="mt-2 text-xs text-slate-500">
              Ajuste como as conversas chegam ao time. Tudo pode ser alterado
              pelo administrador em segundos.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-4 py-3">
              <div>
                <p className="font-semibold text-slate-900">
                  Distribuição automática
                </p>
                <p className="text-xs text-slate-500">
                  O sistema identifica disponibilidade e direciona em tempo real.
                </p>
              </div>
              <button
                onClick={() => setAutoDistribute((state) => !state)}
                className={clsx(
                  "flex h-9 w-16 items-center rounded-full border border-white/60 px-1 transition",
                  autoDistribute
                    ? "bg-gradient-accent text-white"
                    : "bg-white/70 text-slate-400"
                )}
              >
                <span
                  className={clsx(
                    "flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-soft transition",
                    autoDistribute ? "translate-x-6 text-primary-500" : ""
                  )}
                >
                  {autoDistribute ? <Check className="h-4 w-4" /> : "Off"}
                </span>
              </button>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/60 bg-white/80 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Estratégias ativas
              </p>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={roundRobin}
                  onChange={() => setRoundRobin((state) => !state)}
                  className="mt-1 h-4 w-4 rounded border border-slate-300 accent-primary-500"
                />
                <span>
                  <span className="font-semibold text-slate-900">
                    Round robin humano
                  </span>
                  <p className="text-xs text-slate-500">
                    Equilibra a carga entre os atendentes disponíveis.
                  </p>
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={priorityScore}
                  onChange={() => setPriorityScore((state) => !state)}
                  className="mt-1 h-4 w-4 rounded border border-slate-300 accent-primary-500"
                />
                <span>
                  <span className="font-semibold text-slate-900">
                    Prioridade por score do lead
                  </span>
                  <p className="text-xs text-slate-500">
                    Leads quentes são atribuídos primeiro e ganham alertas
                    visuais.
                  </p>
                </span>
              </label>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/60 bg-white/80 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Proximos passos
              </p>
              <div className="rounded-2xl border border-primary-100 bg-primary-50/70 px-4 py-3 text-xs text-primary-600">
                <p className="font-semibold text-primary-700">
                  Copiloto conversacional
                </p>
                <p>
                  Treinamento com histórico do CRM e tom de voz da marca para
                  respostas autônomas.
                </p>
              </div>
              <div className="rounded-2xl border border-white/50 bg-white/80 px-4 py-3 text-xs text-slate-500">
                <p className="font-semibold text-slate-900">
                  Scripts dinâmicos
                </p>
                <p>
                  Sugestões contextuais baseadas na etapa da jornada e no perfil
                  do cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/60 bg-gradient-accent/10 p-5 text-sm text-slate-600 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              Radar em tempo real
            </p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Painel de capacidade
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Mostre aos gestores quantas conversas aguardam retorno, tempo médio
              de espera e possíveis gargalos.
            </p>
            <Button size="sm" className="mt-4 w-full gap-2 text-xs">
              <Settings2 className="h-4 w-4" />
              Configurar dashboards
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
}
