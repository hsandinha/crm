import { Avatar } from "@/components/ui/avatar";
import { leaderboard } from "@/lib/data";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export function LeaderboardCard() {
  return (
    <section className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-title">Ranking da equipe</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Top closers do mês
          </h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-success">
          <TrendingUp className="h-4 w-4" />
          +14% eficiência
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {leaderboard.map((member, index) => (
          <div
            key={member.name}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/70 px-4 py-4 shadow-soft"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-slate-300">
                0{index + 1}
              </span>
              <Avatar initials={member.initials} />
              <div>
                <p className="font-semibold text-slate-900">{member.name}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  {member.deals} deals
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-sm font-semibold text-slate-900">
                {member.value}
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                <ArrowUpRight className="h-4 w-4" />
                {member.trend.toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
