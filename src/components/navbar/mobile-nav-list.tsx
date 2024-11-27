"use client";

import Heading from "@/app/about/_components/heading";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import NavLogo from "./nav-logo";
import { AnimatePresence, motion } from "motion/react";
import { navbar } from "./navbar.config";
const routes = navbar.routes;
const navItems = [
  ...routes,
  {
    title: `Register`,
    href: `/register`,
  },
];

export default function MobileNavList() {
  const [isOpen, setIsOpen] = useState(false);
  const body = document.querySelector("body");
  const toggleNavigation = () => {
    setIsOpen((previsOpen) => !previsOpen);
    body?.classList.toggle(`body-overflow-hidden`);
  };
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        y: { stiffness: 1000 },
        opacity: { duration: 0.2 },
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 0.2 },
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <div className="z-20 flex w-full justify-between sm:hidden">
        <NavLogo className={cn(isOpen && `text-whiteColor`)} />
        <div
          className={cn(
            "z-20 cursor-pointer text-base text-blackColor sm:hidden",
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
            className="fixed left-0 top-0 z-10 h-[100dvh] w-full bg-blackColor p-4 text-whiteColor"
          >
            <nav className="flex h-full pt-32">
              <div className="flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-4">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.title}
                      variants={linkVariants}
                      className="text-2xl transition-colors duration-300 ease-in-out hover:text-gray-300"
                    >
                      <Link onClick={toggleNavigation} href={item.href}>
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.p variants={linkVariants}>kalon@models.info</motion.p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
