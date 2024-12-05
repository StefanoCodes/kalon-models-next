import { Button } from "@/components/ui/button";
import Heading from "./about/_components/heading";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container" id="home">
      <div className="flex h-full min-h-screen-mobile md:min-h-screen-desktop">
        {/* <div className="flex flex-col justify-end gap-2 pb-12 md:gap-0 lg:self-end">
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
        </div> */}
      </div>
    </section>
  );
}
