import React from "react";
import { motion } from "framer-motion";
const word = "KALON";
export default function KalonSvgAnimation() {
  const letters = word.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="z-[9999] flex items-center justify-center tracking-widest"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="font-abcNormal text-6xl font-normal text-white md:text-7xl"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
