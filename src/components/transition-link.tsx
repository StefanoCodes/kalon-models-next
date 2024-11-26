"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function TransitionLink({
  children,
  href,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(500);
    // on enter
    router.push(href);
    await sleep(500);
    body?.classList.remove("page-transition");
  };
  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
}
