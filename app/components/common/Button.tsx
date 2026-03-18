import { cn } from "@/app/lib/utils/helpers";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 font-primary";

  const variants = {
    primary:
      "bg-primary dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600",
    secondary:
      "bg-secondary dark:bg-teal-500 text-white hover:bg-teal-700 dark:hover:bg-teal-600",
    outline:
      "border-2 border-primary dark:border-blue-400 text-primary dark:text-blue-400 hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

