"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CarouselArrow } from "@/components/GreenAccent";
import {
  testimonials,
  testimonialsSection,
  type Testimonial,
} from "@/data/content";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { slideVariants, springSnappy } from "@/lib/motion";

const AUTO_ADVANCE_MS = 5500;

function ClientRow({
  item,
  isActive,
  onSelect,
}: {
  item: Testimonial;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      className={`relative flex w-full shrink-0 items-start px-5 py-5 text-left transition-colors duration-300 md:px-6 lg:shrink ${
        isActive ? "bg-white/5" : "hover:bg-white/[0.03]"
      }`}
    >
      <span className="min-w-0 flex-1">
        <span className="block font-medium tracking-tight text-white">
          {item.name}
        </span>
        <span className="mt-0.5 block text-xs text-zinc-500">
          {item.role}, {item.company}
        </span>
        <span className="mt-2 block line-clamp-2 text-sm font-normal leading-snug text-zinc-400">
          {item.snippet}
        </span>
      </span>
    </button>
  );
}

export function Testimonials() {
  const featuredIndex = testimonials.findIndex((t) => t.featured);
  const [activeIndex, setActiveIndex] = useState(
    featuredIndex >= 0 ? featuredIndex : 0,
  );
  const [direction, setDirection] = useState<1 | -1>(1);
  const reduced = useReducedMotion();
  const activeIndexRef = useRef(activeIndex);

  activeIndexRef.current = activeIndex;

  const active = testimonials[activeIndex] ?? testimonials[0];

  const selectClient = useCallback((index: number) => {
    if (index === activeIndexRef.current) return;
    setDirection(index > activeIndexRef.current ? 1 : -1);
    setActiveIndex(index);
  }, []);

  const goNext = useCallback(() => {
    const next = (activeIndexRef.current + 1) % testimonials.length;
    setDirection(1);
    setActiveIndex(next);
  }, []);

  const goPrev = useCallback(() => {
    const prev =
      (activeIndexRef.current - 1 + testimonials.length) % testimonials.length;
    setDirection(-1);
    setActiveIndex(prev);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const id = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [reduced, activeIndex, goNext]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  return (
    <section
      id="testimonials"
      className="ambient-bg relative overflow-hidden py-20 md:py-28"
    >
      <span
        className="ambient-orb ambient-orb--top-left ambient-orb--blue ambient-orb--subtle"
        aria-hidden
      />
      <span
        className="ambient-orb ambient-orb--bottom-right ambient-orb--violet ambient-orb--subtle"
        aria-hidden
      />
      <div className="ambient-content mx-auto max-w-7xl px-5 lg:px-8">
        <header className="mb-12 text-center md:mb-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {testimonialsSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">
            {testimonialsSection.subtitle}
          </p>
        </header>

        <div
          className="flex flex-col overflow-hidden rounded-sm lg:grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px]"
          role="region"
          aria-label="Client testimonials"
        >
          <blockquote className="relative flex min-h-[360px] flex-col justify-between bg-black px-6 py-10 md:min-h-[420px] md:px-10 md:py-12 lg:min-h-[480px] lg:px-14 lg:py-16">
            <motion.div
              className="pointer-events-none absolute right-6 top-6 text-white md:right-10 md:top-8"
              aria-hidden
              animate={
                reduced
                  ? { opacity: 0.04 }
                  : { opacity: [0.03, 0.06, 0.03] }
              }
              transition={
                reduced
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Quote className="h-16 w-16 md:h-20 md:w-20" strokeWidth={1} />
            </motion.div>

            <div className="relative z-[1] min-h-[200px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${active.name}-${active.company}`}
                  custom={direction}
                  variants={slideVariants(reduced)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="text-lg font-normal leading-relaxed text-zinc-300 md:text-xl">
                    {active.quote}
                  </p>
                  <footer className="mt-10 md:mt-12">
                    <cite className="not-italic">
                      <p className="text-base font-medium tracking-tight text-white md:text-lg">
                        {active.name}
                      </p>
                    </cite>
                    <p className="mt-1 text-sm text-zinc-400">
                      {active.role} · {active.company}
                    </p>
                    {active.location ? (
                      <p className="mt-0.5 text-xs text-zinc-600">
                        {active.location}
                      </p>
                    ) : null}
                  </footer>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-[1] mt-10 flex items-center justify-between gap-4 pt-2 lg:mt-12">
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Testimonial pagination"
              >
                {testimonials.map((item, i) => (
                  <button
                    key={`${item.name}-${item.company}`}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Show testimonial from ${item.name}, ${item.company}`}
                    onClick={() => selectClient(i)}
                    className="relative flex h-4 items-center"
                  >
                    <motion.span
                      layout
                      transition={reduced ? { duration: 0 } : springSnappy}
                      className={`block h-1.5 rounded-full ${
                        i === activeIndex
                          ? "w-6 bg-white"
                          : "w-1.5 bg-zinc-600 hover:bg-zinc-500"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex gap-1.5">
                <CarouselArrow
                  direction="prev"
                  onClick={goPrev}
                  label="Previous testimonial"
                />
                <CarouselArrow
                  direction="next"
                  onClick={goNext}
                  label="Next testimonial"
                />
              </div>
            </div>
          </blockquote>

          <aside className="hidden bg-zinc-900/50 lg:block">
            <ul
              className="flex overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Select a client"
            >
              {testimonials.map((item, index) => (
                <li
                  key={`${item.name}-${item.company}`}
                  className="min-w-[min(100%,280px)] shrink-0 lg:min-w-0 lg:shrink"
                >
                  <ClientRow
                    item={item}
                    isActive={activeIndex === index}
                    onSelect={() => selectClient(index)}
                  />
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
