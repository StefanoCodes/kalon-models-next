"use client";
import { motion } from "motion/react";
import { linkVariants } from "../motion/motion.config";
import { Button } from "../ui/button";
import Link from "next/link";

export default function RegisterButton({
  toggleNavigation,
  children = "Register Now",
}: {
  toggleNavigation?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <motion.div variants={linkVariants} className="w-full">
      <Button asChild onClick={toggleNavigation}>
        <Link
          href="/register"
          className="w-full rounded-sm bg-gradient-to-b from-[#6e3bff] to-[#7e51ff] text-xl font-normal tracking-[0.4px] text-whiteColor"
        >
          {children}
        </Link>
      </Button>
    </motion.div>
  );
}
