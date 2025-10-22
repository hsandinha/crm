import { clsx } from "clsx";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import type { ReactNode } from "react";

type MetricTrend = "up" | "down" | "flat";

const trendIcons: Record<MetricTrend, ReactNode> = {
  up: <ArrowUpRight className="h-4 w-4" />,
  down: <ArrowDownRight className="h-4 w-4" />,
  flat: <Minus className="h-4 w-4" />
};

const trendColors: Record<MetricTrend, string> = {
  up: "bg-success/15 text-success border-success/30",
  down: "bg-danger/10 text-danger border-danger/40",
  flat: "bg-slate-200/60 text-slate-500 border-slate-200/80"
};

export interface MetricCardProps {
  label: string;
  value: string;
  trend: MetricTrend;
  delta: number;
  description: string;
  accent?: ReactNode;
}

export function MetricCard({
  label,
  value,
  trend,
  delta,
  description,
  accent
}: MetricCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/70 p-6 shadow-soft backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
      <div className="absolute inset-0 rounded-2xl border border-white/40 bg-white/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="section-title">{label}</span>
            <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
          </div>
          {accent ? (
            <div className="rounded-full bg-gradient-accent/15 p-3 text-primary-500">
              {accent}
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between">
          <div
            className={clsx(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium transition-colors",
              trendColors[trend]
            )}
          >
            {trendIcons[trend]}
            <span>{trend === "flat" ? "Estável" : `${delta.toFixed(1)}%`}</span>
          </div>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </article>
  );
}
