import { Button } from "@/components/ui/button";
import Heading from "./about/_components/heading";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="container flex flex-col gap-10 px-5 pt-32 md:px-0 md:pt-40"
      id="home"
    >
      <div className="flex flex-col gap-2 md:gap-0 xl:self-end">
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
      </div>
    </section>
  );
}
