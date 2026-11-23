"use client";

import * as React from "react";
import { Sparkles, Activity, ShieldCheck, Zap, Globe, Layers } from "lucide-react";

export function Scene3D() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto h-[420px] sm:h-[480px] flex items-center justify-center select-none"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Container with Parallax Tilt */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${mousePos.x * 24}deg) rotateX(${-mousePos.y * 24}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background Ambient Glowing Rings */}
        <div
          className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-brand-500/30 dark:border-brand-400/20 animate-spin"
          style={{
            animationDuration: "40s",
            transform: "translateZ(-80px)",
          }}
        />
        <div
          className="absolute w-80 sm:w-[440px] h-80 sm:h-[440px] rounded-full border border-dashed border-sky-400/20 dark:border-sky-400/15 animate-spin"
          style={{
            animationDuration: "60s",
            animationDirection: "reverse",
            transform: "translateZ(-120px)",
          }}
        />

        {/* Central 3D Frosted Glass Platform */}
        <div
          className="relative w-[88%] sm:w-[740px] rounded-3xl p-6 sm:p-8 backdrop-blur-2xl bg-white/75 dark:bg-slate-900/80 border border-white/40 dark:border-white/10 shadow-[0_24px_64px_rgba(37,99,235,0.14)] dark:shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Glass Specular highlight */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white dark:via-blue-400/40 to-transparent" />

          {/* Browser Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-white/5 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
                https://albertech.agency/core-systems
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Vercel Edge Active
              </span>
            </div>
          </div>

          {/* 3D Dashboard Content Grid */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5 space-y-2 backdrop-blur hover:scale-[1.02] transition-transform shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold">Performance Score</span>
                <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  99.8%
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-200/70 dark:bg-slate-700/60 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[99%]" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Sub-second LCP on international mobile networks.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5 space-y-2 backdrop-blur hover:scale-[1.02] transition-transform shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold">Pipeline Revenue</span>
                <span className="font-mono font-bold text-brand-600 dark:text-brand-400">
                  +$45M+
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-200/70 dark:bg-slate-700/60 rounded-full overflow-hidden">
                <div className="h-full bg-brand-500 rounded-full w-[90%]" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Influenced across high-growth partner portfolios.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5 space-y-2 backdrop-blur hover:scale-[1.02] transition-transform shadow-xs">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold">Automation Saved</span>
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                  150+ hrs/wk
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-200/70 dark:bg-slate-700/60 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-[94%]" />
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Autonomous webhook & CRM synchronization.
              </p>
            </div>
          </div>
        </div>

        {/* Floating 3D Satellite Badges with Independent Z-Depth */}
        <div
          className="absolute -top-6 -left-2 sm:-left-8 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl flex items-center gap-3 transition-transform duration-300"
          style={{ transform: `translateZ(60px) translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
        >
          <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Headless Stacks</div>
            <div className="text-[10px] text-slate-500 font-mono">Next.js • TypeScript</div>
          </div>
        </div>

        <div
          className="absolute -bottom-6 -right-2 sm:-right-8 p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl flex items-center gap-3 transition-transform duration-300"
          style={{ transform: `translateZ(75px) translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)` }}
        >
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">18+ Countries</div>
            <div className="text-[10px] text-slate-500 font-mono">Global Edge Routing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

