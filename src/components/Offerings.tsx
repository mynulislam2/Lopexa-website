"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Clock,
  Handshake,
  Lock,
  Milestone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { offeringsSection } from "@/data/content";
import {
  CarouselArrow,
  GreenDot,
  GreenIconCircle,
} from "@/components/GreenAccent";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { pageShell } from "@/lib/layout";
import {
  fadeUpVariants,
  slideVariants,
  springSnappy,
  viewportOnce,
} from "@/lib/motion";

const TOTAL = offeringsSection.items.length;

const offeringIcons: LucideIcon[] = [
  Clock,
  Lock,
  Building2,
  Users,
  Milestone,
  Handshake,
];

function visibleCount(width: number) {
  return width >= 1024 ? 3 : 1;
}

function OfferingCard({
  title,
  description,
  Icon,
  reduced,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
  reduced: boolean;
}) {
  return (
    <motion.article
      layout={!reduced}
      whileHover={
        reduced
          ? undefined
          : {
              y: -4,
              scale: 1.01,
            }
      }
      transition={springSnappy}
      className="group flex h-full min-h-[13.5rem] flex-col rounded-xl bg-zinc-900/80 px-6 py-7 transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)]"
    >
      <GreenIconCircle>
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </GreenIconCircle>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
    </motion.article>
  );
}

export function Offerings() {
  const { title, intro, items } = offeringsSection;
  const [page, setPage] = useState(0);
  const [perView, setPerView] = useState(3);
  const [direction, setDirection] = useState<1 | -1>(1);
  const reduced = useReducedMotion();

  useEffect(() => {
    const update = () => setPerView(visibleCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxPage = Math.max(0, Math.ceil(TOTAL / perView) - 1);
  const safePage = Math.min(page, maxPage);

  useEffect(() => {
    if (page > maxPage) setPage(maxPage);
  }, [maxPage, page]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setPage((p) => Math.max(0, Math.min(p, maxPage) - 1));
  }, [maxPage]);

  const goNext = useCallback(() => {
    setDirection(1);
    setPage((p) => Math.min(maxPage, Math.min(p, maxPage) + 1));
  }, [maxPage]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const start = safePage * perView;
  const visible = items.slice(start, start + perView);
  const pageKey = `${safePage}-${perView}`;

  return (
    <section
      id="offerings"
      className="ambient-bg relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28"
    >
      <span
        className="ambient-orb ambient-orb--top-left ambient-orb--cyan ambient-orb--subtle"
        style={{ opacity: 0.35 }}
        aria-hidden
      />

      <div className={`ambient-content ${pageShell}`}>
        <motion.header
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUpVariants(reduced)}
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {title}
            <GreenDot />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg md:leading-relaxed">
            {intro}
          </p>
        </motion.header>

        <div
          className="mt-14 md:mt-16"
          role="region"
          aria-label="Engagement offerings"
          aria-live="polite"
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.ul
                key={pageKey}
                custom={direction}
                variants={slideVariants(reduced)}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5"
              >
                {visible.map((item, i) => {
                  const Icon = offeringIcons[start + i] ?? Clock;
                  return (
                    <li key={item.title} className="h-full">
                      <OfferingCard
                        title={item.title}
                        description={item.description}
                        Icon={Icon}
                        reduced={reduced}
                      />
                    </li>
                  );
                })}
              </motion.ul>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col items-center gap-5">
            <div className="flex items-center gap-4">
              <CarouselArrow
                direction="prev"
                onClick={goPrev}
                label="Previous offerings"
                disabled={safePage === 0}
              />
              <span className="min-w-[4.5rem] text-center text-xs font-medium tabular-nums text-zinc-500">
                {safePage + 1} / {maxPage + 1}
              </span>
              <CarouselArrow
                direction="next"
                onClick={goNext}
                label="Next offerings"
                disabled={safePage >= maxPage}
              />
            </div>

            {maxPage > 0 && (
              <div
                className="flex gap-2"
                role="tablist"
                aria-label="Offering pages"
              >
                {Array.from({ length: maxPage + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === safePage}
                    aria-label={`Go to page ${i + 1}`}
                    onClick={() => {
                      setDirection(i > safePage ? 1 : -1);
                      setPage(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === safePage
                        ? "w-6 bg-white/80"
                        : "w-2 bg-white/20 hover:bg-white/35"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
