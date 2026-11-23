"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoPlayInterval?: number;
  showIndicators?: boolean;
}

export function Carousel({
  children,
  className,
  autoPlayInterval = 5000,
  showIndicators = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const totalSlides = children.length;

  React.useEffect(() => {
    if (!isPlaying || totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, totalSlides, autoPlayInterval]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div
      className={cn("relative w-full group/carousel", className)}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slide Container */}
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full shrink-0 flex-none px-1">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <div className="flex items-center justify-between pointer-events-none absolute inset-y-0 -left-3 -right-3 sm:-left-5 sm:-right-5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-lg text-slate-800 dark:text-white hover:bg-brand-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-lg text-slate-800 dark:text-white hover:bg-brand-600 hover:text-white transition-all transform hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Pagination Indicators */}
      {showIndicators && totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {children.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === idx
                  ? "w-8 bg-brand-600 dark:bg-brand-400"
                  : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

