import { cn } from "@/app/lib/utils/helpers";
import { ReactNode } from "react";

interface DividerProps {
  children?: ReactNode;
  className?: string;
  lineColor?: string;
  textColor?: string;
  spacing?: "sm" | "md" | "lg";
}

export default function Divider({
  children,
  className,
  lineColor = "border-gray-700",
  textColor = "text-gray-300",
  spacing = "md",
}: DividerProps) {
  const spacingClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <div className="flex justify-center w-full">
      <div
        className={cn(
          "flex items-center gap-4 w-full max-w-5xl mx-auto px-6",
          className,
        )}
      >
        {/* Left Line */}
        <div className={cn("flex-1 border-t-2", lineColor)} />

        {/* Center Text */}
        {children && (
          <div
            className={cn(
              "font-semibold whitespace-nowrap",
              textColor,
              spacingClasses[spacing],
            )}
          >
            {children}
          </div>
        )}

        {/* Right Line */}
        <div className={cn("flex-1 border-t-2", lineColor)} />
      </div>
    </div>
  );
}

