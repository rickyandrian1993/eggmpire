import { cn } from "@/app/lib/utils/helpers";
import { ReactNode } from "react";

interface DividerProps {
  children?: ReactNode;
  className?: string;
  lineColor?: string;
  textColor?: string;
  spacing?: "sm" | "md" | "lg";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  mobileSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

export default function Divider({
  children,
  className,
  lineColor = "border-white",
  textColor = "text-white",
  spacing = "md",
  size = "lg",
  mobileSize,
}: DividerProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  // Auto-scale down for mobile if mobileSize is not provided
  const responsiveSizeMap = {
    xs: "text-xs md:text-xs",
    sm: "text-xs md:text-sm",
    md: "text-sm md:text-base",
    lg: "text-base md:text-lg",
    xl: "text-lg md:text-xl",
    "2xl": "text-xl md:text-2xl",
    "3xl": "text-2xl md:text-3xl",
    "4xl": "text-3xl md:text-4xl",
    "5xl": "text-4xl md:text-5xl",
  };

  const spacingClasses = {
    sm: "px-6 py-2",
    md: "px-12 py-3",
    lg: "px-20 py-4",
  };

  // Use mobileSize if provided, otherwise use responsive auto-scaling
  const textSizeClass = mobileSize
    ? mobileSize
      ? sizeClasses[mobileSize]
      : sizeClasses[size]
    : responsiveSizeMap[size as keyof typeof responsiveSizeMap];

  const desktopSizeClass = mobileSize ? `md:${sizeClasses[size]}` : "";

  return (
    <div className="flex justify-center w-full py-11">
      <div
        className={cn(
          "flex items-center gap-2 md:gap-4 w-full max-w-2xl md:max-w-7xl mx-auto px-2 md:px-6",
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
              textSizeClass,
              desktopSizeClass,
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
