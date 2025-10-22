import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Sparkles } from "lucide-react";

export default function ReferralsPage() {
  return (
    <section className="space-y-8">
      <header className="rounded-3xl border border-white/40 bg-white/70 p-10 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="section-title">Indicações</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
              Programe experiências que geram recomendação
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-500">
              Em breve, conecte seu programa de referências, acompanhe métricas
              em tempo real e ofereça journeys personalizadas para promotores da
              sua marca.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-center gap-3 text-xs">
              <Badge variant="accent" className="gap-2">
                <Sparkles className="h-4 w-4" />
                Experiência em construção
              </Badge>
              <Badge variant="neutral" className="gap-2">
                <Share2 className="h-4 w-4" />
                Integrações Zapier & webhooks
              </Badge>
            </div>
          </div>
          <Button size="sm" className="gap-2 text-xs">
            Avisar quando lançar
          </Button>
        </div>
      </header>
    </section>
  );
}
