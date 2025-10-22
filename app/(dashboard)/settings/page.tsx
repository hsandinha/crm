import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Lock, Sparkles, ToggleRight } from "lucide-react";

const toggles = [
  {
    label: "Alertas prioritários",
    description:
      "Receba notificações instantâneas quando leads quentes precisarem de interação.",
    active: true
  },
  {
    label: "Resumo diário inteligente",
    description:
      "Síntese enviada às 8h com os principais indicadores e recomendações de follow-up.",
    active: true
  },
  {
    label: "Insights de concorrência",
    description:
      "Monitoramento automatizado de menções relevantes sobre concorrentes estratégicos.",
    active: false
  }
];

export default function SettingsPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/40 bg-white/70 p-10 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="section-title">Configurações</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
              Controle total com poucos cliques
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-500">
              Ajuste aparência, permissões e notificações em um painel elegante,
              pensado para manter a experiência sempre fluida e consistente.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-center gap-3">
              <Badge variant="accent" className="gap-2 text-xs">
                <Sparkles className="h-4 w-4" />
                Layout adaptável
              </Badge>
              <Badge variant="neutral" className="text-xs">
                Segurança enterprise
              </Badge>
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/60 bg-gradient-accent/10 p-6 text-sm text-slate-600 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              padrão exclusivo
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              Customização em tempo real
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Alterações aplicadas com pré-visualização instantânea. Sinta o
              impacto antes de publicar.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Solicitar modo brand
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">
              Identidade da empresa
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Ajuste aspectos visuais e mensagens padrão enviadas aos clientes.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Nome comercial
                </span>
                <input
                  defaultValue="Nova Experience CRM"
                  className="rounded-2xl border border-white/50 bg-white/80 px-4 py-3 shadow-soft outline-none transition focus:border-primary-200 focus:ring-2 focus:ring-primary-200"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Domínio primário
                </span>
                <input
                  defaultValue="nova.crm.br"
                  className="rounded-2xl border border-white/50 bg-white/80 px-4 py-3 shadow-soft outline-none transition focus:border-primary-200 focus:ring-2 focus:ring-primary-200"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm md:col-span-2">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Mensagem de boas-vindas
                </span>
                <textarea
                  defaultValue="Olá, bem-vindo à experiência Nova! Vamos transformando sua área comercial com interações memoráveis."
                  rows={3}
                  className="rounded-2xl border border-white/50 bg-white/80 px-4 py-3 shadow-soft outline-none transition focus:border-primary-200 focus:ring-2 focus:ring-primary-200"
                />
              </label>
            </div>
            <div className="mt-6 flex items-center justify-end gap-3">
              <Button variant="outline" size="sm">
                Desfazer
              </Button>
              <Button size="sm">Salvar alterações</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Notificações inteligentes
                </h2>
                <p className="text-sm text-slate-500">
                  Controle a cadência de alertas e recomendações.
                </p>
              </div>
              <Badge variant="accent" className="gap-2">
                <ToggleRight className="h-4 w-4" />
                IA orquestra
              </Badge>
            </div>
            <div className="mt-6 space-y-4">
              {toggles.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/80 px-4 py-4 shadow-soft"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                  <div
                    className={`flex h-9 w-16 items-center rounded-full border border-white/50 px-1 transition ${
                      item.active
                        ? "bg-gradient-accent text-white"
                        : "bg-white/70 text-slate-400"
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-soft transition ${
                        item.active ? "translate-x-6 text-primary-500" : ""
                      }`}
                    >
                      {item.active ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <span className="text-[10px] font-semibold uppercase">
                          Off
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Segurança reforçada
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Autenticação multi-fator, biometria e sessões monitoradas em tempo
              real.
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/80 px-4 py-3">
                <Lock className="h-4 w-4 text-primary-500" />
                <div>
                  <p className="font-semibold text-slate-900">
                    MFA obrigatório
                  </p>
                  <p className="text-xs text-slate-500">
                    Todas as contas exigem 2FA ou WebAuthn
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/50 bg-white/80 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Sessões ativas
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  14 dispositivos conectados — 2 aguardam aprovação
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/60 bg-gradient-accent/10 p-6 text-sm text-slate-600 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              novidades em breve
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              Gestão avançada de equipes
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Crie playbooks visuais, defina rituais e alinhe metas com
              playbacks interativos. Todo o time engajado na mesma cadência.
            </p>
            <Button size="sm" className="mt-5 w-full">
              Quero ser avisado
            </Button>
          </div>
        </aside>
      </section>
    </div>
  );
}
