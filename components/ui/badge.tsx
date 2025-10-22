import { clsx } from "clsx";

type BadgeVariant = "success" | "warning" | "neutral" | "accent";

const badgeStyles: Record<BadgeVariant, string> = {
  success: "bg-success/15 text-success border-success/30",
  warning: "bg-warning/15 text-warning border-warning/30",
  neutral: "bg-white/70 text-slate-600 border-slate-200/80",
  accent: "bg-primary-500/15 text-primary-600 border-primary-500/30"
};

export function Badge({
  className,
  children,
  variant = "neutral"
}: {
  className?: string;
  children: React.ReactNode;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
        badgeStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
