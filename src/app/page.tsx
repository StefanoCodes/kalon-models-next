import { Button } from "@/components/ui/button";
import Heading from "./about/_components/heading";
import Link from "next/link";
import Image from "next/image";

// testing
{
  /* <div className="flex flex-col justify-end gap-2 pb-12 md:gap-0 lg:self-end">
          <Heading
            headingSize="h2"
            className="text-[2.5rem] font-normal leading-[48px] text-muted-foreground md:text-[3.5rem] md:leading-[64px] lg:text-6xl lg:leading-[1.2]"
          >
            Your Modelling Journey <br />
            <span className="text-kalon-primary">Starts Here</span>
          </Heading>
          <Button variant="kalon" asChild className="w-fit bg-transparent px-0">
            <Link href="/about">Explore Kalon &rarr;</Link>
          </Button>
        </div> */
}

{
  /* content goes here */
}
{
  /* <Image
          src="/kalon-cover-home.jpg"
          alt="Kalon Models Group"
          fill
          className="object-cover brightness-[0.4] filter"
          priority
        />
        <div className="z-1 relative isolate flex min-h-screen-mobile w-full flex-col items-end justify-end pb-6 md:p-12 lg:p-16">
          <div className="flex max-w-sm flex-col justify-end gap-2 self-end md:gap-0 lg:self-end">
            <Heading
              headingSize="h2"
              className="text-right text-[2.5rem] font-normal leading-[48px] text-gray-200 md:text-[3.5rem] md:leading-[64px] lg:text-6xl lg:leading-[1.2]"
            >
              Your Modelling Journey <br />
              <span>Starts Here</span>
            </Heading>
            <Button
              variant="kalon"
              asChild
              className="w-fit self-end bg-transparent px-0"
            >
              <Link href="/about" className="text-gray-200">
                Explore Kalon &rarr;
              </Link>
            </Button>
          </div>
        </div> */
}
export default function Home() {
  return (
    <section
      className="container relative min-h-screen-mobile py-10 md:min-h-screen-desktop xl:px-0"
      id="home"
    />
  );
}
