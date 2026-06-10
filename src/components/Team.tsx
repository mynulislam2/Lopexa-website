"use client";

import { motion } from "framer-motion";
import { teamSection } from "@/data/content";
import { GreenCheckCircle, GreenDot } from "@/components/GreenAccent";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeUpVariants,
  springSnappy,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

function TeamDecor({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute -left-2 top-1/2 hidden -translate-y-1/2 opacity-[0.06] lg:block"
      aria-hidden
      animate={
        reduced
          ? undefined
          : { y: [0, -6, 0], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } }
      }
    >
      <svg width="140" height="220" viewBox="0 0 120 200" fill="none">
        <circle cx="35" cy="40" r="18" stroke="white" strokeWidth="2" />
        <path
          d="M12 95c8-18 28-28 48-28s40 10 48 28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="85" cy="120" r="14" stroke="white" strokeWidth="2" />
        <path
          d="M68 165c6-12 20-18 34-18s28 6 34 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="60" cy="30" r="8" stroke="white" strokeWidth="1.5" opacity="0.35" />
      </svg>
    </motion.div>
  );
}

function RolePill({
  label,
  reduced,
}: {
  label: string;
  reduced: boolean;
}) {
  return (
    <motion.div
      variants={fadeUpVariants(reduced)}
      whileHover={
        reduced
          ? undefined
          : {
              scale: 1.02,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
            }
      }
      transition={springSnappy}
      className="group flex items-center gap-3 rounded-lg bg-zinc-900/40 px-4 py-3.5 transition-colors duration-300 hover:bg-zinc-900/70"
    >
      <GreenCheckCircle />
      <span className="text-sm font-medium text-zinc-200">{label}</span>
    </motion.div>
  );
}

export function Team() {
  const { title, intro, roles } = teamSection;
  const reduced = useReducedMotion();

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative grid gap-12 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-16 xl:gap-20">
          <TeamDecor reduced={reduced} />

          <motion.div
            className="relative max-w-lg lg:max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUpVariants(reduced)}
          >
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {title}
              <GreenDot />
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg">
              {intro}
            </p>
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(reduced, 0.06)}
          >
            {roles.map((role, index) => (
              <li
                key={role}
                className={
                  index === roles.length - 1
                    ? "sm:col-span-2 sm:flex sm:justify-center"
                    : undefined
                }
              >
                <div
                  className={
                    index === roles.length - 1
                      ? "w-full sm:w-auto sm:min-w-[280px]"
                      : "w-full"
                  }
                >
                  <RolePill label={role} reduced={reduced} />
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
