import { MetricCard } from "@/components/ui/metric-card";
import { Sparkline } from "@/components/ui/sparkline";
import { metrics } from "@/lib/data";
import { BarChart3, Coins, Rocket, Users2 } from "lucide-react";

const metricIcons = {
  leads: <Users2 className="h-5 w-5" />,
  pipeline: <Rocket className="h-5 w-5" />,
  "win-rate": <BarChart3 className="h-5 w-5" />,
  revenue: <Coins className="h-5 w-5" />
} as const;

const sparklineData: Record<string, number[]> = {
  leads: [12, 18, 16, 20, 22, 19, 24],
  pipeline: [5, 8, 7, 9, 12, 11, 10],
  "win-rate": [22, 25, 24, 29, 27, 28, 27],
  revenue: [88, 102, 96, 118, 131, 125, 140]
};

export function MetricsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.id} className="space-y-4">
          <MetricCard
            label={metric.label}
            value={metric.value}
            delta={metric.delta}
            trend={metric.trend}
            description={metric.description}
            accent={metricIcons[metric.id as keyof typeof metricIcons]}
          />
          <div className="rounded-2xl border border-white/40 bg-white/60 p-4 shadow-soft">
            <Sparkline
              values={sparklineData[metric.id] ?? sparklineData.leads}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
