"use client";
import PlaceholderSkeleton from "@/app/gallery/_components/placeholder-skeleton";
import PrimaryButton from "@/components/buttons/primary-button";

import { motion, AnimatePresence, useCycle } from "motion/react";
import Link from "next/link";
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
  },
  {
    name: "Nkateko Baloyi",
    role: "Administrative Coordinator",
  },
  {
    name: "Mbhuri Baloyi",
    role: "Runway Coach",
  },
  {
    name: "Mikateko Mbhalati",
    role: "Pageant Coach",
  },
];

export function Person({
  name,
  role,
  image,
  bio,
  linkedIn,
}: {
  name?: string;
  role?: string;
  image?: string;
  bio?: string;
  linkedIn?: string;
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
        <PlaceholderSkeleton className="min-h-[17rem] min-w-[18rem] bg-black/5" />
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
            variant="kalonBlack"
            className={`max-w-fit rounded-md`}
            innerClassName={`max-w-fit rounded-md border-2 border-transparent`}
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
      <motion.div
        initial={false}
        animate={isContentOpen ? "open" : "closed"}
        variants={accordionVariants}
        custom={contentHeight}
        style={{ overflow: "hidden" }}
      >
        <div ref={contentRef} className="flex flex-col gap-4">
          <p className="text-base font-normal text-[#0A0A0A]">
            My modeling journey began in 2017, but my career truly started in
            2020. The first three years were particularly challenging—not due to
            rejection or missed opportunities, but because I didn't receive the
            proper guidance.
          </p>
          <Link href={"#"} className="w-fit border-b border-[#0A0A0A]">
            LinkedIn
          </Link>
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
