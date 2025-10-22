import { clsx } from "clsx";

export function Avatar({
  initials,
  className
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "grid h-10 w-10 place-items-center rounded-full bg-gradient-accent text-sm font-semibold uppercase text-white shadow-card",
        className
      )}
    >
      {initials}
    </span>
  );
}
