import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LucideIcon,
  Orbit,
  Palette,
  Sparkles,
  Trophy
} from "lucide-react";

const experiencePillars: {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}[] = [
  {
    title: "Imersão visual e responsiva",
    description:
      "Componentes fluidos, animações suaves e foco total na jornada do usuário com microinterações inteligentes.",
    icon: Palette,
    tags: ["design system", "dark mode", "microinterações"]
  },
  {
    title: "Fluxo guiado por IA",
    description:
      "Copiloto analisa dados em tempo real e sugere ações prioritárias, mensagens personalizadas e próximos passos.",
    icon: Orbit,
    tags: ["recomendações", "contexto em segundos", "next best action"]
  },
  {
    title: "Momentos memoráveis",
    description:
      "A cada milestone do lead, criamos experiências celebradas com efeitos sutis que reforçam conquistas da equipe.",
    icon: Trophy,
    tags: ["celebrações", "gamificação", "feedback imediato"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/40 bg-white/70 p-10 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="section-title">Experiência</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
              CRM que encanta cliente e time
            </h1>
            <p className="mt-4 max-w-3xl text-sm text-slate-500">
              O visual minimalista com detalhes vibrantes cria um ambiente que
              transmite confiança, inovação e fluidez. A arquitetura favorece uma
              navegação intuitiva e promove foco no que realmente importa:
              relacionamentos humanos.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-center gap-3">
              <Badge variant="accent" className="gap-2 text-xs">
                <Sparkles className="h-4 w-4" />
                Experiência premium
              </Badge>
              <Badge variant="neutral" className="text-xs">
                Testado com squads comerciais
              </Badge>
            </div>
          </div>
          <div className="rounded-[1.8rem] border border-white/60 bg-gradient-accent/10 p-6 text-sm text-slate-600 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
              assinatura visual
            </p>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              Clean, sofisticado e inesquecível
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Cada tela recebe um toque futurista com cards translúcidos, sombras
              suaves e tipografia precisa. O resultado é um CRM que parece uma
              sala de comando minimalista, pronto para impressionar seus clientes.
            </p>
            <Button size="sm" className="mt-5 w-full">
              Solicitar mockups avançados
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {experiencePillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-accent/15 p-3 text-primary-600">
                <pillar.icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-slate-900">
                {pillar.title}
              </h2>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              {pillar.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-500">
              {pillar.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/50 bg-white/80 px-3 py-1 uppercase tracking-[0.25em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
