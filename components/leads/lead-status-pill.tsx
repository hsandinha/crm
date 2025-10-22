import { clsx } from "clsx";

const statusStyle = {
  hot: {
    border: "border-success/30",
    background: "from-success/20 via-success/10 to-success/20",
    text: "text-success",
    label: "Quente"
  },
  warm: {
    border: "border-warning/30",
    background: "from-warning/20 via-warning/10 to-warning/20",
    text: "text-warning",
    label: "Morno"
  },
  cold: {
    border: "border-slate-200",
    background: "from-slate-200/30 via-white/60 to-slate-200/40",
    text: "text-slate-500",
    label: "Aquecendo"
  }
} as const;

export function LeadStatusPill({
  status,
  label
}: {
  status: "hot" | "warm" | "cold";
  label: string;
}) {
  const style = statusStyle[status];
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em]",
        style.border,
        style.text,
        style.background
      )}
    >
      <span className="h-2 w-2 rounded-full bg-current" />
      {label}
    </span>
  );
}
