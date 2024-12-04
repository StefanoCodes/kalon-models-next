"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KalonSvgAnimation from "./kalon-svg-animation";

export const Preloader = ({ duration = 1500 }: { duration?: number }) => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="relative flex h-full w-full flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* <KalonSvgAnimation /> */}
            {/* <FlickeringGrid
              className="absolute inset-0 z-10 size-full"
              squareSize={6}
              gridGap={6}
              color="#e7dfef"
              maxOpacity={0.2}
              flickerChance={0.5}
            /> */}
            <KalonSvgAnimation />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
