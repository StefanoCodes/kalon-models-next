// MOBILE NAV CONFIG ANIMATIONS
import { Variants } from "framer-motion";
const easing = [0.6, -0.05, 0.01, 0.99];

export const menuVariants: Variants = {
  open: {
    opacity: 1,
    y: "0",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      opacity: { duration: 0.2 },
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.1,
      ease: easing,
    },
  },
  closed: {
    opacity: 1,
    y: "-100%",
    transition: {
      y: { stiffness: 1000 },
      opacity: { duration: 0.2 },
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
      delayChildren: 0.1,
      ease: easing,
    },
  },
};
export const linkVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      ease: easing,
    },
  },
  closed: {
    opacity: 0,
    y: 30,
    transition: {
      y: { stiffness: 1000 },
      ease: easing,
    },
  },
};
