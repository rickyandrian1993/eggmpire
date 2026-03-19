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
    "font-semibold rounded-full transition-all duration-200 font-primary";

  const variants = {
    primary:
      "bg-[#E8A921] text-[#323232] hover:bg-[#E8A921]/80 hover:text-white",
    secondary: "bg-teal-500 text-white hover:bg-teal-600",
    outline:
      "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900",
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

