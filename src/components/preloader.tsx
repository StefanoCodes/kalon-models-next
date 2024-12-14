"use client";

import React, { useEffect, useState } from "react";
import FlickeringGrid from "./shimmer-dot";
import { PRELOADER_DURATION } from "@/lib/constants";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [fillPercentage, setFillPercentage] = useState(0);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const animateFill = () => {
      // document.body.style.overflow = "hidden";
      setFillPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        if (prev === 100 && !isFilled) {
          setIsFilled(true);
        }
        return prev;
      });
    };

    const intervalId = setInterval(animateFill, 30);

    return () => clearInterval(intervalId);
  }, [isFilled]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, PRELOADER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative h-[100px] w-[400px]">
            <svg
              width="400"
              height="100"
              viewBox="0 0 400 100"
              className="absolute left-0 top-0 z-10"
            >
              <defs>
                <clipPath id="text-clip">
                  <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    fontSize="40"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                  >
                    KALON
                  </text>
                </clipPath>
              </defs>
              <text
                x="50%"
                y="50%"
                dy=".35em"
                textAnchor="middle"
                fontSize="40"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
                fill={isFilled ? "white" : "none"}
                stroke="#333"
                strokeWidth="0"
              >
                KALON
              </text>
            </svg>
            <div className="absolute left-0 top-0 z-20 h-full w-full">
              <FlickeringGrid
                color="rgb(255, 255, 255)"
                maxOpacity={0.8}
                flickerChance={0.3}
                squareSize={2}
                gridGap={6}
                clipPath="url(#text-clip)"
                fillPercentage={fillPercentage}
                isFilled={isFilled}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
