import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/lib/data";
import {
  CheckCircle2,
  Mail,
  PhoneCall,
  Sparkles,
  Users
} from "lucide-react";

const activityIconMap = {
  deal: <CheckCircle2 className="h-4 w-4 text-success" />,
  call: <PhoneCall className="h-4 w-4 text-primary-500" />,
  email: <Mail className="h-4 w-4 text-primary-500" />,
  meeting: <Users className="h-4 w-4 text-primary-500" />
} as const;

const accentCopy = {
  deal: "Deal fechado",
  call: "Ligação",
  email: "E-mail",
  meeting: "Reunião"
} as const;

export function ActivityFeed() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-title">Movimentações em tempo real</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Pulso comercial, minuto a minuto
          </h2>
        </div>
        <Badge variant="accent" className="gap-2">
          <Sparkles className="h-4 w-4" />
          <span>Insights sugeridos</span>
        </Badge>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <article
            key={activity.id}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/40 bg-white/70 px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex items-center gap-4">
              <Avatar initials={activity.agent.slice(0, 2)} />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {activity.agent}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {activity.company}
                </p>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-between gap-6">
              <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                {activityIconMap[activity.type]}
                {accentCopy[activity.type]}
              </div>
              <p className="flex-1 text-sm text-slate-500">
                {activity.status}
              </p>
            </div>

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              {activity.timeAgo}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
