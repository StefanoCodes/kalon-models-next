"use client";
import { motion } from "motion/react";
import { navbar } from "./navbar.config";
import SocialLink from "./social-link";
import { linkVariants } from "../motion/motion.config";
const socials = navbar.socials;

export default function SocialLinks() {
  return socials.map((social, id) => {
    return (
      <motion.div key={id} variants={linkVariants}>
        <SocialLink
          href={social.link}
          icon={social.icon}
          className="h-5 w-5 font-normal text-white/40 opacity-50"
        />
      </motion.div>
    );
  });
}

export function ContactLink({ children }: { children: React.ReactNode }) {
  return (
    <motion.p className="text-white/40" variants={linkVariants}>
      {children}
    </motion.p>
  );
}
