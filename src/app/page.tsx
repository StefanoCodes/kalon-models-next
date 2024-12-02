import { Button } from "@/components/ui/button";
import Heading from "./about/_components/heading";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh w-full px-4 py-10 pt-32 md:px-10 md:px-5 md:pt-40">
      <section id="home" className="container flex flex-col gap-10 self-end">
        <div className="flex flex-col gap-0 self-end">
          <Heading
            headingSize="h2"
            className="font-normal text-muted-foreground lg:text-6xl lg:leading-[1.2]"
          >
            Your Modelling Journey <br />
            <span className="text-kalon-primary">Starts Here</span>
          </Heading>
          <Button variant="kalon" asChild className="w-fit bg-transparent px-0">
            <Link href="/register">Explore Kalon &rarr;</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
