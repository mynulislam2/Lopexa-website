"use client";

import { motion } from "framer-motion";
import {
  Bot,
  ClipboardCheck,
  Cog,
  Layers,
  Monitor,
  Palette,
  Server,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ourServicesSection } from "@/data/content";
import { GreenDot, GreenIconCircle } from "@/components/GreenAccent";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  fadeUpVariants,
  springSnappy,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

const serviceIcons: LucideIcon[] = [
  Layers,
  Palette,
  Server,
  Monitor,
  Smartphone,
  Bot,
  ClipboardCheck,
  Cog,
  Workflow,
];

function ServiceCard({
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
      variants={fadeUpVariants(reduced)}
      whileHover={
        reduced
          ? undefined
          : {
              y: -4,
              scale: 1.01,
              backgroundColor: "rgba(24, 24, 27, 0.75)",
            }
      }
      transition={springSnappy}
      className="group flex h-full flex-col rounded-xl bg-zinc-900/30 p-6 shadow-none transition-[box-shadow,background-color] duration-300 hover:bg-zinc-900/50 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)] md:p-7"
    >
      <GreenIconCircle>
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </GreenIconCircle>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
    </motion.article>
  );
}

export function Services() {
  const { title, intro, items } = ourServicesSection;
  const reduced = useReducedMotion();

  return (
    <section
      id="services"
      className="ambient-bg relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28"
    >
      <span
        className="ambient-orb ambient-orb--top-right ambient-orb--violet ambient-orb--subtle"
        style={{ opacity: 0.35 }}
        aria-hidden
      />
      <span
        className="ambient-orb ambient-orb--bottom-right ambient-orb--blue ambient-orb--subtle"
        style={{ opacity: 0.3 }}
        aria-hidden
      />

      <div className="ambient-content mx-auto max-w-7xl px-5 lg:px-8">
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

        <motion.ul
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(reduced, 0.07)}
        >
          {items.map((item, index) => {
            const Icon = serviceIcons[index] ?? Layers;
            return (
              <li key={item.title} className="flex">
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  Icon={Icon}
                  reduced={reduced}
                />
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
