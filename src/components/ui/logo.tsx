import * as React from "react";
import Link from "next/link";
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
      {/* 3D Geometric Logo Mark */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 shadow-[0_0_20px_rgba(37,99,235,0.25)]",
          sizeClasses[size]
        )}
        style={{
          background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #0F172A 100%)",
        }}
      >
        {/* Specular overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-80" />
        
        {/* SVG Monogram & Geometric Vertex */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
        >
          {/* 3D Isometric A Layers */}
          <path
            d="M20 4L7 34H14.5L20 20L25.5 34H33L20 4Z"
            fill="url(#logo_grad_front)"
          />
          <path
            d="M20 4L26 21H14L20 4Z"
            fill="url(#logo_grad_inner)"
          />
          <path
            d="M13 23L27 23L24.5 28L15.5 28L13 23Z"
            fill="#60A5FA"
            fillOpacity="0.9"
          />
          <circle cx="20" cy="11" r="2.2" fill="#FFFFFF" />
          <defs>
            <linearGradient id="logo_grad_front" x1="7" y1="4" x2="33" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="logo_grad_inner" x1="14" y1="4" x2="26" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="1" stopColor="#BFDBFE" stopOpacity="0.4" />
            </linearGradient>
          </defs>
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
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-slate-400 dark:text-slate-400 font-bold -mt-0.5 font-mono">
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );
}

