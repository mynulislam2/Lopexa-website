"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HeroSlideVisual } from "@/components/HeroSlideVisual";
import { useEffect, useState } from "react";
import {
  brand,
  heroRotationIntervalMs,
  heroRotatingPhrases,
  heroSection,
  heroSlides,
} from "@/data/content";
import { pageShell } from "@/lib/layout";

const phraseEase = [0.22, 1, 0.36, 1] as const;

const phraseTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const imageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const phrase = heroRotatingPhrases[index];
  const slide = heroSlides[phrase];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroRotatingPhrases.length);
    }, heroRotationIntervalMs);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="ambient-bg hero-ambient relative flex min-h-[80dvh] items-center pt-20">
      <div className="hero-orbs" aria-hidden>
        <span className="ambient-orb ambient-orb--top-right ambient-orb--blue ambient-orb--drift-b hero-orb--primary" />
        <span className="ambient-orb ambient-orb--bottom-right ambient-orb--blue ambient-orb--drift-a hero-orb--primary" />
      </div>
      <div className={`ambient-content relative ${pageShell}`}>
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-28 lg:justify-items-stretch">
          <div className="text-center lg:text-left">
            <div
              className="relative min-h-[1.25em] overflow-visible pb-1 text-4xl md:text-5xl lg:text-6xl"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.h1
                  key={phrase}
                  className="font-semibold leading-[1.15] tracking-tight text-white"
                  {...(reduceMotion
                    ? {}
                    : {
                        ...phraseTransition,
                        transition: { duration: 0.55, ease: phraseEase },
                      })}
                >
                  {phrase}
                </motion.h1>
              </AnimatePresence>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg lg:mx-0">
              {brand.description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={heroSection.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                {heroSection.ctaPrimary.label}
              </a>
              <a
                href={heroSection.ctaSecondary.href}
                className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {heroSection.ctaSecondary.label}
              </a>
            </div>
          </div>

          <div className="relative flex w-full max-w-[220px] flex-col items-center justify-center justify-self-center lg:max-w-[260px]">
            <span className="hero-slide-glow" aria-hidden />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.image}
                className="relative z-[1] aspect-square w-full"
                {...(reduceMotion
                  ? {}
                  : {
                      ...imageTransition,
                      transition: { duration: 0.6, ease: phraseEase },
                    })}
              >
                <HeroSlideVisual
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
