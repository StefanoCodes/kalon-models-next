"use client";
import { motion } from "motion/react";
import { navbar } from "./navbar.config";
import { linkVariants } from "../motion/motion.config";
import Link from "next/link";

import { cn } from "@/lib/utils";

const navItems = navbar.routes;
export default function AnimatedMobileNavLinks({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return navItems.map((item, i) => (
    <motion.div
      key={item.title}
      variants={linkVariants}
      className="text-2xl transition-colors duration-300 ease-in-out hover:text-gray-300"
    >
      <Link href={item.href} onClick={onClick} className={cn(className)}>
        {item.title}
      </Link>
    </motion.div>
  ));
}
