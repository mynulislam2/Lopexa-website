"use client";

import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

/** Small accent dot beside section headings — neutral on dark */
export function GreenDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`ml-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-white/80 ${className}`}
      aria-hidden
    />
  );
}

/** Icon container for service / offering cards */
export function GreenIconCircle({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 group-hover:bg-white/10"
      aria-hidden
    >
      <span className="text-zinc-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-white/80">
        {children}
      </span>
    </span>
  );
}

export function GreenCheckCircle() {
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 group-hover:bg-white/10"
      aria-hidden
    >
      <CheckCircle2
        className="h-4 w-4 text-zinc-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-white/80"
        strokeWidth={2.25}
        aria-hidden
      />
    </span>
  );
}

export function CarouselArrow({
  direction,
  onClick,
  label,
  disabled = false,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  disabled?: boolean;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-disabled={disabled}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-zinc-300 transition enabled:hover:bg-white/10 enabled:hover:text-white/80 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-zinc-600"
    >
      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
    </button>
  );
}
