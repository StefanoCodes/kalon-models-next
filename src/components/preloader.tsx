"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Preloader = () => {
  // to avoid getting a hydration error
  if (typeof window === "undefined") return null;
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      localStorage.setItem("hasLoaded", "true");
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 2500); // Increased to 2.5 seconds to allow for the full animation
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1.7 }}
      onAnimationComplete={() => setShowPreloader(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="mb-4 text-5xl font-bold tracking-wider text-gray-800">
          KALON
        </h1>
      </motion.div>
    </motion.div>
  );
};
