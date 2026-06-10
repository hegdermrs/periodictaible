import type { Transition, Variants } from "framer-motion";

export const EASE_OUT_EXPO: Transition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],
};

export const EASE_SMOOTH: Transition = {
  duration: 0.35,
  ease: [0.4, 0, 0.2, 1],
};

export const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.15,
    },
  },
};

export const cellVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: EASE_OUT_EXPO,
  },
};

export const panelVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ...EASE_OUT_EXPO, duration: 0.45 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
