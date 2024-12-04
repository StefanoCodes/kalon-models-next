"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItemProps {
  title: string;
  value: number;
}

export const StatItem: React.FC<StatItemProps> = ({ title, value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // we want this to run only in view
    if (isInView) {
      const animation = animate(count, value, { duration: 2 });
      return animation.stop;
    }
  }, [count, value, isInView]);

  return (
    <motion.div
      className="flex flex-col gap-1 xl:min-w-[280px] last:xl:self-end last:xl:text-right"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onViewportEnter={() => setIsInView(true)}
    >
      <motion.div className="text-3xl font-medium sm:text-4xl md:text-5xl">
        <motion.span>{rounded}</motion.span>+
      </motion.div>
      <div className="text-base text-gray-600 sm:text-lg">{title}</div>
    </motion.div>
  );
};
