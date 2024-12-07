"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import NavLogo from "./nav-logo";
import { AnimatePresence, motion, useCycle } from "motion/react";
import { navbar } from "./navbar.config";
import { linkVariants, menuVariants } from "../motion/motion.config";
import AnimatedMobileNavLinks from "./animated-mobile-nav-items";
import Link from "next/link";
import { contactConfig } from "@/app/contact/contact.config";
const { email } = navbar.contact;
const { instagram } = contactConfig.socials;
export default function MobileNavList() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  const toggleNavigation = () => toggleOpen();
  return (
    <>
      <div className="z-50 flex w-full items-center justify-between sm:hidden">
        <NavLogo
          onClick={() => {
            return isOpen && toggleNavigation();
          }}
          className={cn(isOpen && `text-whiteColor`)}
        />
        <div
          className={cn(
            "z-30 cursor-pointer text-base text-blackColor md:hidden",
            isOpen && `text-whiteColor`,
          )}
          onClick={toggleNavigation}
        >
          {isOpen ? "close" : "menu"}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed left-0 top-0 z-20 min-h-dvh w-full bg-black p-4 pb-4 pt-32 text-whiteColor"
          >
            <nav className="flex min-h-[calc(100dvh-4rem-8rem)] w-full flex-col justify-between gap-8">
              <ul className="flex flex-col gap-8">
                <AnimatedMobileNavLinks onClick={toggleNavigation} />
              </ul>
              <motion.div
                variants={linkVariants}
                className="flex flex-col gap-2"
              >
                <p className="text-xs font-light text-muted-foreground">
                  hello@kalon.com.au
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href={instagram.url}
                    className="text-xs font-light capitalize text-muted-foreground"
                  >
                    in
                  </Link>
                  <Link
                    href={instagram.url}
                    className="text-xs font-light capitalize text-muted-foreground"
                  >
                    ti
                  </Link>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
