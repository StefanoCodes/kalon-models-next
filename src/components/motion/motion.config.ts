// MOBILE NAV CONFIG ANIMATIONS
export const menuVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      opacity: { duration: 0.2 },
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: "0",
    transition: {
      y: { stiffness: 1000 },
      opacity: { duration: 0.2 },
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
export const linkVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
