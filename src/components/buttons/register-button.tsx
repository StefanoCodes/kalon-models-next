"use client";
import { motion } from "motion/react";
import NeonButton from "./neon-button";
import { linkVariants } from "../motion/motion.config";

export default function RegisterButton({
  toggleNavigation,
}: {
  toggleNavigation: () => void;
}) {
  return (
    <motion.div variants={linkVariants} className="w-full">
      <NeonButton
        link="/register"
        onClick={toggleNavigation}
        className="hover:bg-tertiaryColor/90 w-full rounded-sm bg-tertiaryColor py-3 text-base font-normal text-secondaryColor"
      >
        Register
      </NeonButton>
    </motion.div>
  );
}
