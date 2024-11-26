import Link from "next/link";
import { navbar } from "./navbar.config";
import Heading from "@/app/about/_components/heading";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import TransitionLink from "../transition-link";

const routes = navbar.routes;
export default function Navbar() {
  return (
    <div className="z-50">
      <div className={cn("container hidden py-4 sm:block", "max-w-screen-xl")}>
        <div className="flex flex-row justify-between">
          <Heading headingSize="h2" className="font-light uppercase">
            <TransitionLink href="/">Kalon</TransitionLink>
          </Heading>
          <ul className="flex flex-row items-center justify-center gap-8">
            {routes.map((route) => (
              <li key={route.href}>
                <TransitionLink href={route.href}>{route.title}</TransitionLink>
              </li>
            ))}
            <li>
              <Button variant="kalon" asChild className="text-base">
                <TransitionLink href="/register">Register</TransitionLink>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
