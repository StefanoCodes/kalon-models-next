"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import NavLogo from "./nav-logo";
import { AnimatePresence, motion, useCycle } from "motion/react";
import { navbar } from "./navbar.config";
import { menuVariants } from "../motion/motion.config";
import AnimatedMobileNavLinks from "./animated-mobile-nav-items";
import RegisterButton from "../buttons/register-button";
const { email } = navbar.contact;
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
      <div className="z-30 flex w-full items-center justify-between sm:hidden">
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
            className="fixed left-0 top-0 z-20 h-[100dvh] w-full bg-accent-foreground p-4 text-whiteColor"
          >
            <nav className="flex h-full w-full pt-32">
              <div className="flex w-full flex-col justify-between gap-8">
                <ul className="flex flex-col gap-4">
                  <AnimatedMobileNavLinks onClick={toggleNavigation} />
                </ul>
                <div className="flex w-full flex-row items-center justify-between">
                  <RegisterButton toggleNavigation={toggleNavigation} />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
