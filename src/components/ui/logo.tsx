import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  showText = true,
  size = "md",
}: LogoProps) {
  const sizeClasses = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-11 h-11 text-base",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={cn("inline-flex items-center gap-2.5 group select-none", className)}>
      {/* Clean Solid Monogram Emblem (Zero Gradient, Zero Artificial Glare) */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-slate-900 dark:bg-brand-600 text-white font-bold transition-transform duration-200 group-hover:scale-105",
          sizeClasses[size]
        )}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Solid Architectural Geometric A */}
          <path
            d="M20 5L7 35H15L20 21L25 35H33L20 5Z"
            fill="#FFFFFF"
          />
          <path
            d="M13 24H27V28H13V24Z"
            fill="#60A5FA"
          />
          <circle cx="20" cy="12" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col tracking-tight">
          <div className="flex items-center gap-1">
            <span
              className={cn(
                "font-extrabold text-slate-900 dark:text-white leading-none transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400 font-heading",
                textSizes[size]
              )}
            >
              ALBERTECH
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 font-semibold -mt-0.5 font-mono">
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );
}
