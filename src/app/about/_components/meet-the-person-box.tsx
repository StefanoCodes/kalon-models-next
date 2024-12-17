"use client";
import PrimaryButton from "@/components/buttons/primary-button";

import { motion, AnimatePresence, useCycle } from "motion/react";
import { useEffect, useRef, useState } from "react";
const accordionVariants = {
  open: {
    opacity: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};

const team = [
  {
    name: "Manana Baloyi",
    role: "Founder",
    // text,
    // linkedIn
    // image
  },
  {
    name: "Nkateko Baloyi",
    role: "Administrative Coordinator",
    // text,
    // linkedIn
    // image
  },
  {
    name: "Mbhuri Baloyi",
    role: "Runway Coach",
    // text,
    // linkedIn
    // image
  },
  {
    name: "Mikateko Mbhalati",
    role: "Pageant Coach",
    // text,
    // linkedIn
    // image
  },
];

export function Person({
  name,
  role,
  image,
}: {
  name?: string;
  role?: string;
  image?: string;
}) {
  const [isContentOpen, toggleContentOpen] = useCycle(false, true);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isContentOpen]);

  return (
    <div className="flex flex-col gap-4">
      {/* box */}
      <div className="flex flex-col gap-6">
        <div className="min-h-[17rem] min-w-[18rem] bg-black/5" />
        <div className="flex flex-row items-center justify-between">
          {/* founder content */}
          <div className="flex flex-col">
            <h5 className="text-base font-normal">{name || `Manana Baloyi`}</h5>
            <span className="text-base capitalize text-[#65697B]">
              {role || "Founder"}
            </span>
          </div>
          {/* button */}
          <PrimaryButton
            className={`max-w-fit rounded-md ${isContentOpen && `border-transparent outline`}`}
            innerClassName={`max-w-fit rounded-md border-2 border-transparent ${isContentOpen && `border-2 border-white`}`}
            onClick={toggleContentOpen}
          >
            <div className="relative h-4 w-4">
              <span className="absolute left-1/2 top-1/2 h-[0.6px] w-[8px] -translate-x-1/2 -translate-y-1/2 bg-[#fff]" />
              <AnimatePresence mode="popLayout">
                {!isContentOpen && (
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-1/2 top-1/2 h-[0.6px] w-[8px] -translate-x-1/2 -translate-y-1/2 rotate-90 bg-[#fff]"
                  />
                )}
              </AnimatePresence>
            </div>
          </PrimaryButton>
        </div>
      </div>
      {/* accordion */}
      {/* <AnimatePresence>
        {isContentOpen && (
          <div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: "1px" }}
            >
              <div className="flex flex-col gap-4">
                <p className="text-base font-normal">
                  My modeling journey began in 2017, but my career truly started
                  in 2020. The first three years were particularly
                  challenging—not due to rejection or missed opportunities, but
                  because I didn’t receive the proper guidance.
                </p>
                <p>LinkedIn</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence> */}
      {/* <AnimatePresence>
        {isContentOpen && (
          <motion.div
            variants={accordionVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div className="rounded-md bg-gray-100 p-4" layout>
              <div className="flex flex-col gap-4">
                <p className="text-base font-normal">
                  My modeling journey began in 2017, but my career truly started
                  in 2020. The first three years were particularly
                  challenging—not due to rejection or missed opportunities, but
                  because I didn't receive the proper guidance.
                </p>
                <p>LinkedIn</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <motion.div
        initial={false}
        animate={isContentOpen ? "open" : "closed"}
        variants={accordionVariants}
        custom={contentHeight}
        style={{ overflow: "hidden" }}
      >
        <div ref={contentRef} className="flex flex-col gap-4">
          <p className="text-base font-normal">
            My modeling journey began in 2017, but my career truly started in
            2020. The first three years were particularly challenging—not due to
            rejection or missed opportunities, but because I didn't receive the
            proper guidance.
          </p>
          <p>LinkedIn</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {team.map(({ name, role }, idx) => {
        return <Person key={idx} name={name} role={role} />;
      })}
    </div>
  );
}
