"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // avoid hydration error since we are using a browser api only can run on client side
    if (typeof window !== "undefined") {
      if (!isMounted) {
        setIsMounted(true);
        const timer = setTimeout(() => {
          setShowPreloader(false);
        }, 2500);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, []);

  return (
    <>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-50 flex min-h-screen-mobile flex-col items-center justify-center bg-white md:min-h-screen-desktop"
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
      )}
    </>
  );
};
