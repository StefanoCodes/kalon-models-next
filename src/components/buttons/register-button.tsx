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
      <Button
        asChild
        onClick={toggleNavigation}
        className="w-full text-base font-normal"
        variant={"kalon"}
      >
        <Link href="/register">{children}</Link>
      </Button>
    </motion.div>
  );
}
