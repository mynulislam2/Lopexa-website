import type { Transition, Variants } from "framer-motion";

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 28,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 26,
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

export function fadeUpVariants(reduced: boolean): Variants {
  return {
    hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function staggerContainer(reduced: boolean, stagger = 0.08): Variants {
  return {
    hidden: {},
    visible: {
      transition: reduced
        ? {}
        : { staggerChildren: stagger, delayChildren: 0.06 },
    },
  };
}

export function fadeInVariants(reduced: boolean): Variants {
  return {
    hidden: reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function slideVariants(reduced: boolean): Variants {
  return {
    enter: (direction: number) =>
      reduced
        ? { opacity: 1, x: 0 }
        : { opacity: 0, x: direction > 0 ? 40 : -40 },
    center: {
      opacity: 1,
      x: 0,
      transition: reduced ? { duration: 0 } : springSoft,
    },
    exit: (direction: number) =>
      reduced
        ? { opacity: 1, x: 0 }
        : {
            opacity: 0,
            x: direction > 0 ? -40 : 40,
            transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
          },
  };
}
