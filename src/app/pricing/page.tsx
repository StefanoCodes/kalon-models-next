import { Button } from "@/components/ui/button";
import Link from "next/link";
import Heading from "../about/_components/heading";
import { CourseCard } from "./_components/course-card";
import { courses } from "./pricing.config";

export default function Pricing() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Heading headingSize="h1">Pricing</Heading>

      <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:items-center md:justify-between">
        <CourseCard
          title="Adults"
          description="Adults Courses for beginners and intermediates who want to learn the basics of modelling."
          duration="10 weeks"
          startDate="2024-01-01"
          spots={10}
          image="/gallery/ineffeable/inner-wide.webp"
          link="/pricing/adult"
        />
        <CourseCard
          title="Kids"
          description="Kids Courses for beginners and intermediates who want to learn the basics of modelling."
          duration="10 weeks"
          startDate="2024-01-01"
          spots={10}
          image="/gallery/power-of-wearing-flowers/fifth.webp"
          link="/pricing/kids"
        />
        <CourseCard
          title="The Masterclass"
          description="The Masterclass for beginners and intermediates who want to learn the basics of modelling."
          duration="10 weeks"
          startDate="2024-01-01"
          spots={10}
          image="/gallery/ineffeable/second.webp"
          link="/pricing/masterclass"
        />
      </div>
    </div>
  );
}
