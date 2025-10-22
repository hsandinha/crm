import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { LeaderboardCard } from "@/components/dashboard/leaderboard-card";
import { MetricsGrid } from "@/components/dashboard/metrics-grid";
import { PipelineOverview } from "@/components/dashboard/pipeline-overview";
import { SmartLists } from "@/components/dashboard/smart-lists";
import { TrafficLightAlert } from "@/components/dashboard/traffic-light-alert";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-14">


      <MetricsGrid />
      <PipelineOverview />
      <SmartLists />
      <TrafficLightAlert />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <ActivityFeed />
        <LeaderboardCard />
      </div>
    </div>
  );
}
