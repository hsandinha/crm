import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-400",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-accent text-white shadow-soft hover:shadow-card hover:-translate-y-0.5",
        outline:
          "bg-white/40 backdrop-blur border border-white/60 hover:bg-white/80 text-slate-700",
        ghost: "text-slate-500 hover:text-slate-900 hover:bg-slate-100/60"
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
