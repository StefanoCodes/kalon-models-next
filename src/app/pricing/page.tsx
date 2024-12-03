import { Button } from "@/components/ui/button";
import Link from "next/link";
import Heading from "../about/_components/heading";

export default function Pricing() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Heading headingSize="h1">Pricing</Heading>

      <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:items-center md:gap-8">
        <Button asChild variant={"outline"} className="min-w-36">
          <Link href="/pricing/adult">Adult Courses</Link>
        </Button>
        <Button asChild variant={"outline"} className="min-w-36">
          <Link href="/pricing/kids">Kids Courses</Link>
        </Button>
        <Button asChild variant={"outline"} className="min-w-36">
          <Link href="/pricing/general">General Courses</Link>
        </Button>
      </div>
    </div>
  );
}
